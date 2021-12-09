import React, {useEffect, useState} from "react";
import {View} from "react-native";
import {getSpecificCountry} from "../../api/diseaseApi";
import {ProfileScreenNavigationProp, ProfileScreenRouteProp} from "../../utils/props";
import LoadingView from "../../components/LoadingView";
// Components
import CountryView from "../../components/CountryView";

type SearchResultScreenProps = {
    navigation: ProfileScreenNavigationProp;
    route: ProfileScreenRouteProp | null;
}

const SearchResultScreen: React.FC<SearchResultScreenProps> = ({navigation, route}) => {
    const [countryFlag, setCountryFlag] = useState("");
    const [countryName, setCountryName] = useState("");
    const [countryPopulation, setCountryPopulation] = useState(0);
    const [countryCases, setCountryCases] = useState(0);
    const [countryCritical, setCountryCritical] = useState(0);
    const [countryDeaths, setCountryDeaths] = useState(0);


    useEffect(() => {
        //@ts-ignore
        const {country} = route.params;

        getSpecificCountry(country).then(data => {
            if (!data) return;

            setCountryName(data.country);
            setCountryPopulation(data.population);
            setCountryCases(data.cases);
            setCountryFlag(data.countryInfo.flag)
            setCountryCritical(data.critical)
            setCountryDeaths(data.deaths);
        });
    }, [])

    if (countryFlag === "") {
        return <LoadingView/>
    }

    return (
        <View>
            <CountryView countryName={countryName} countryFlag={countryFlag} countryPopulation={countryPopulation}
                         countryCases={countryCases} countryCritical={countryCritical} countryDeaths={countryDeaths}/>
        </View>
    );
};

export default SearchResultScreen;
