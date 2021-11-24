import React, {useEffect, useState} from "react";
import {Image, StyleSheet, Text, View} from "react-native";

import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import { RouteProp } from '@react-navigation/native';
import {RootStackParamList} from "../../navigation/SearchNavigation";
import {DailyStats, getSpecificCountry} from "../../api/diseaseApi";
import {ItemProps, CountryInfo} from "../SearchScreen";

// Components
import CountryView from "../../components/CountryView";

//TODO: Refactor this shit
type ProfileScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'SearchResultScreen'>;

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'SearchResultScreen'>;

type Props = {
    navigation: ProfileScreenNavigationProp;
    route: ProfileScreenRouteProp | null;
}

const SearchResultScreen: React.FC<Props> = ({navigation, route}) => {
    const [countryCode, setCountryCode] = useState("");
    const [countryData, setCountryData] = useState<ItemProps>({});
    const [countryFlag, setCountryFlag] = useState("");
    useEffect(() => {
        //TODO: FIX THIS
        // @ts-ignore
        const {country} = route.params;

        getSpecificCountry(country).then(data => {
            setCountryData(data);
            setCountryFlag(data.countryInfo.flag)
            console.log(data.countryInfo.flag) //TODO: HANDLE ERROR FOR FLAG
        });
    }, [])

    return(
        <View>
            <CountryView countryData={countryData} countryFlag={countryFlag} />
     </View>
    );
};

export default SearchResultScreen;
