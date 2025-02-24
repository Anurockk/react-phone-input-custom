import {CSSProperties, Ref} from "react";

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