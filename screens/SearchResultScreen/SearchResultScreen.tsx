import React, {useEffect, useState} from "react";
import {View} from "react-native";
import {getSpecificCountry} from "../../api/diseaseApi";
import {ProfileScreenNavigationProp, ProfileScreenRouteProp} from "../../utils/props";

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

    useEffect(() => {

        //TODO: FIX THIS
        // @ts-ignore
        const {country} = route.params;

        getSpecificCountry(country).then(data => {
            if (!data) return;
            console.log(data.country);
            setCountryName(data.country);
            setCountryPopulation(data.population);
            setCountryCases(data.cases);
            setCountryFlag(data.countryInfo.flag)
        });
    }, [])

    return (
        <View>
            <CountryView countryName={countryName} countryFlag={countryFlag} countryPopulation={countryPopulation} countryCases={countryCases}/>
        </View>
    );

};

export default SearchResultScreen;
