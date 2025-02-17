import { useEffect, useState } from "react";
import axios from "axios";
import { ApiResponse, Country } from "../interface/Interface";

const useCountries = (initialCountryCode: string, fetchAll: boolean = false) => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const url = fetchAll
                    ? "https://restcountries.com/v3.1/all"
                    : "https://restcountries.com/v3.1/independent?status=true";
                const res = await axios.get<ApiResponse[]>(url);
                const countryList = res.data
                    ?.map((country) => {
                        const dialCode = country?.idd?.root && country?.idd?.suffixes?.length
                            ? country?.idd?.root + country?.idd?.suffixes[0]
                            : null;
                        return dialCode
                            ? {
                                name: country?.name?.common,
                                countryCode: country?.cca2,
                                dialCode,
                                flag: country?.flags?.svg,
                            }
                            : null;
                    })
                    ?.filter((c): c is Country => c !== null)
                    ?.sort((a, b) => a.name.localeCompare(b.name));

                setCountries(countryList);
                setSelectedCountry(countryList.find((c) => c.countryCode === initialCountryCode) ?? null);
                setLoading(false);
            } catch (err) {
                console.log(err);
                setError("Failed to fetch countries");
                setLoading(false);
            }
        };
        fetchCountries()
            .then()
            .catch();
    }, [initialCountryCode, fetchAll]);

    return { countries, selectedCountry, setSelectedCountry, loading, error };
};

export default useCountries;