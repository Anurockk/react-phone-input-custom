import { ChangeEvent, useState } from "react";
import useOutsideClick from "../../useOutsideClick/UseOutsideClick";
import { AsYouType, CountryCode, parsePhoneNumberFromString } from "libphonenumber-js";
import { Country, PhoneInputProps } from "../../interface/Interface";
import { CountryDropdown } from "../Dropdown/Dropdown";
import useCountries from "../../api/FetchCountries";

const PhoneInput = ({
                        initialCountryCode = "IN",
                        enableRedBorderOnError = true,
                        maxPhoneLength = 15,
                        onPhoneChange,
                        isPhoneNumberValid,
                        containerStyle,
                        inputStyle,
                        dropdownStyle,
                        inputRef,
                        fetchAllCountries
                    }: PhoneInputProps) => {
    const { countries, selectedCountry, setSelectedCountry, error } = useCountries(initialCountryCode,fetchAllCountries);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [isValid, setIsValid] = useState(true);
    const dropdownRef = useOutsideClick(() => setIsDropdownOpen(false));

    const handlePhoneNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value.replace(/\D/g, "");
        if (selectedCountry) {
            const countryCode = selectedCountry.countryCode as CountryCode;
            const formattedNumber = new AsYouType(countryCode).input(input);
            setPhoneNumber(formattedNumber);
            const phone = parsePhoneNumberFromString(formattedNumber, countryCode);
            const isValidPhone = phone ? phone.isValid() : false;
            setIsValid(isValidPhone);
            isPhoneNumberValid?.(isValidPhone);
            onPhoneChange?.({
                dialCode: selectedCountry.dialCode,
                countryCode: selectedCountry.countryCode,
                nationalFormattedNumber: phone?.formatNational() || "",
                internationalFormattedNumber: phone?.formatInternational() || "",
                e164Number: phone?.format("E.164") || "",
                mobileNumber: phone?.nationalNumber || "",
            });
        }
    };

    return (
        <div style={containerStyle} className={`relative ${!isValid && enableRedBorderOnError ? "outline-1 outline-red-500" : ""}`} ref={dropdownRef}>
            {error && <p className="text-red-500">{error}</p>}
            <div className="flex items-center border border-gray-300 overflow-hidden">
                <button
                    className="flex items-center gap-2 px-3 py-2 bg-gray-100 border-r border-gray-300 focus:outline-none"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                    {selectedCountry && <img src={selectedCountry.flag} alt={selectedCountry.name} className="w-5 h-5" />}
                    <span className="text-sm font-medium">{selectedCountry?.dialCode}</span>
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
                <input ref={inputRef} type="text" placeholder="Enter phone number" value={phoneNumber} onChange={handlePhoneNumberChange} maxLength={maxPhoneLength} style={inputStyle} className="w-full px-3 py-2 focus:outline-none" />
            </div>
            <CountryDropdown
                dropdownStyle={dropdownStyle}
                countries={countries.filter((c) => c.name.toLowerCase().includes(searchTerm.toLowerCase()))}
                onSelect={(country: Country) => {
                    setSelectedCountry(country);
                    setIsDropdownOpen(false);
                    onPhoneChange?.({
                        dialCode: country.dialCode,
                        countryCode: country.countryCode,
                        nationalFormattedNumber: "",
                        internationalFormattedNumber: "",
                        e164Number: "",
                        mobileNumber: "",
                    });
                }}
                isOpen={isDropdownOpen}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            />
        </div>
    );
};

export default PhoneInput;
