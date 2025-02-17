# React Phone Input Custom

A React component for inputting and validating phone numbers with international support, featuring an easy-to-use country code selection.

## Installation

```sh
npm install react-phone-input-custom
```

or with yarn:

```sh
yarn add react-phone-input-custom
```

## Peer Dependencies

This library requires the following peer dependencies:

- `react` (>=19.0.0)
- `react-dom` (>=19.0.0)

Ensure these are installed in your project:

```sh
npm install react react-dom
```

## Dependencies

The package depends on the following libraries:

- `google-libphonenumber` (Phone number parsing and validation)
- `libphonenumber-js` (Formatting and validation support)

## Usage

```tsx
import PhoneInput from 'react-phone-input-custom';

function App() {
    return (
        <PhoneInput 
            initialCountryCode="IN" 
            enableRedBorderOnError={false} 
            maxPhoneLength={15} 
            fetchAllCountries={false}
        />
    );
}

export default App;
```

## Customization

The component supports various customization options:

### Props

| Prop                     | Type                         | Default     | Description                               |
|--------------------------|------------------------------|-------------|-------------------------------------------|
| `fetchAllCountries`      | `boolean`                    | `false`     | Fetches all available countries if `true` |
| `initialCountryCode`     | `string`                     | `'IN'`      | Default country code                      |
| `enableRedBorderOnError` | `boolean`                    | `true`      | Highlights border red on invalid input    |
| `maxPhoneLength`         | `number`                     | `15`        | Maximum length of phone number            |
| `isPhoneNumberValid`     | `(isValid: boolean) => void` | `undefined` | Callback for validation state             |
| `containerStyle`         | `CSSProperties`              | `{}`        | Custom styles for container               |
| `inputStyle`             | `CSSProperties`              | `{}`        | Custom styles for input field             |
| `dropdownStyle`          | `CSSProperties`              | `{}`        | Custom styles for dropdown                |
| `inputRef`               | `Ref<HTMLInputElement>`      | `undefined` | Ref for the input field                   |
| `onPhoneChange`          | `(data: PhoneData) => void`  | `undefined` | Callback triggered on input change        |

### Phone Data Object

The `onPhoneChange` callback receives an object with the following structure:

```ts
{
    dialCode: string;
    countryCode: string;
    nationalFormattedNumber: string;
    internationalFormattedNumber: string;
    e164Number: string;
    mobileNumber: string;
}
```

## API Details

The component internally fetches country data using `axios` and leverages `google-libphonenumber` and `libphonenumber-js` for parsing and validation.

## License

MIT © Anurag Singh

## Contributing

Contributions are welcome! Feel free to submit issues and pull requests to the [GitHub repository](https://github.com/Anurockk/react-phone-input-custom).

