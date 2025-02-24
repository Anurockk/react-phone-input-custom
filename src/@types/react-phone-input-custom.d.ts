declare module 'react-phone-input-custom' {
    import { ComponentType } from 'react';

    export interface PhoneInputProps {
        fetchAllCountries?: boolean;
        initialCountryCode?: string;
        enableRedBorderOnError?: boolean;
        maxPhoneLength?: number;
        isPhoneNumberValid?: (isValid: boolean) => void;
        containerStyle?: React.CSSProperties;
        inputStyle?: React.CSSProperties;
        dropdownStyle?: React.CSSProperties;
        inputRef?: React.Ref<HTMLInputElement>;
        onPhoneChange?: (data: {
            dialCode: string;
            countryCode: string;
            nationalFormattedNumber: string;
            internationalFormattedNumber: string;
            e164Number: string;
            mobileNumber: string;
        }) => void;
    }
    const PhoneInput: ComponentType<PhoneInputProps>;
    export default PhoneInput;
    export { PhoneInput };
}