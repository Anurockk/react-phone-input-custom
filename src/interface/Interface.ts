import {CSSProperties, Ref} from "react";

export interface Country {
    name: string;
    countryCode: string;
    dialCode: string;
    flag: string;
}

export interface ApiResponse {
    name: { common: string };
    cca2: string;
    idd: { root: string; suffixes: string[] };
    flags: { svg: string };
}

export interface PhoneInputProps {
    fetchAllCountries?: boolean;
    initialCountryCode?: string;
    enableRedBorderOnError?: boolean;
    maxPhoneLength?: number;
    isPhoneNumberValid?: (isValid: boolean) => boolean;
    containerStyle?: CSSProperties;
    inputStyle?: CSSProperties;
    dropdownStyle?: CSSProperties;
    inputRef?: Ref<HTMLInputElement>;
    onPhoneChange?: (data: {
        dialCode: string;
        countryCode: string;
        nationalFormattedNumber: string;
        internationalFormattedNumber: string;
        e164Number: string;
        mobileNumber: string;
    }) => void;
    phoneData?: {
        dialCode?: string;
        countryCode?: string;
        nationalFormattedNumber?: string;
        internationalFormattedNumber?: string;
        e164Number?: string;
        mobileNumber?: string;
    };
}

export interface CountryDropdownProps {
    countries: Country[];
    onSelect: (country: Country) => void;
    isOpen: boolean;
    searchTerm: string;
    setSearchTerm: (value: string) => void;
    dropdownStyle?:CSSProperties;
}
