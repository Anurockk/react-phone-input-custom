import './App.css';
import {PhoneInput} from "./Index";

function App() {
    return (
        <div>
            <PhoneInput initialCountryCode="IN"
                        enableRedBorderOnError={false}
                        maxPhoneLength={15}
                        fetchAllCountries={false}/>
        </div>
    );
}

export default App;
