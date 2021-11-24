import React, {useEffect, useState} from 'react';
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";

import {
    Button, Dimensions,
    FlatList,
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import {getAllCountries} from "../api/diseaseApi";
import {RootStackParamList} from "../navigation/SearchNavigation";
import { Fontisto } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import OverlayView from "../components/OverlayView";

type ProfileScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'SearchScreen'>;

type Props = {
    item: ItemProps;
    navigation: ProfileScreenNavigationProp
}

export type ItemProps = {
    country: string;
    name: string;
    cases: number;
    continent: string;
    countryInfo: CountryInfo;
    deaths: string;
    population: string;
}

export type CountryInfo = {
    _id: number
    flag: string;
    iso2: string;
    iso3: string
}

const RenderItem: React.FC<Props> = ({item}) => {
    const navigation = useNavigation<ProfileScreenNavigationProp>();

    return(
        // @ts-ignore
        <TouchableOpacity onPress={() => navigation.navigate("SearchResultScreen", {country: item.countryInfo.iso3})}>
            <View style={styles.renderContainer}>
                <View style={{flex: 1}}>
                    <Text style={styles.renderContainerTitle}>{item.country}</Text>
                    <Text style={styles.renderContainerText}>Cases: {item.cases}</Text>
                </View>
                <Image style={{width: 100, height: 100, flex: 1}} source={{uri: item.countryInfo.flag.toString()}} />
            </View>
        </TouchableOpacity>
    );
};

//TODO: Create a filtering option for the list
const SearchScreen: React.FC<Props> = ({navigation}) => {
    const [allCountries, setAllCountries] = useState([]);
    const [text, setText] = useState("");
    const [toggleOverlay, setToggleOverlay] = useState<boolean>(false);

    useEffect(() => {
        getAllCountries().then(data => {
            setAllCountries([]);

            const correctData = data.filter((item: ItemProps) => item.countryInfo._id !== null); //null checking the data, as some countries dont have the id property
            setAllCountries(correctData);
        });
    }, []);

    return(
        <SafeAreaView>
            <View style={styles.searchBar}>
                <TextInput
                    style={styles.input}
                    onChangeText={setText}
                    placeholder={"Enter country name"}
                />
                {/* TODO: THIS SHOULD BE A COMPONENT. <ButtonWithIcon /> or sum*/}
                <TouchableOpacity style={styles.button} onPress={() => setToggleOverlay(!toggleOverlay)}>
                    <Fontisto name="filter" size={24} color="black" />
                </TouchableOpacity>
            </View>
            {toggleOverlay && <OverlayView  setToggleOverlay={setToggleOverlay} toggleOverlay={toggleOverlay}/>}
            <FlatList
                data={allCountries}
                renderItem={({item}) => {
                    return <RenderItem item={item} />
                }}
                keyExtractor={(item: ItemProps)  => item.countryInfo._id.toString()}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    renderContainer: {
        flex: 1,
        flexDirection: "row",
        marginLeft: 15,
        marginRight: 15,
        marginTop: 10,
        padding: 10,
        borderRadius: 5,
        shadowColor: "#000",
        backgroundColor: "#FAF9F6",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    renderContainerTitle: {
        fontSize: 20
    },
    renderContainerText: {
        fontSize: 16
    },
    //SEARCHBAR
    searchBar: {
        flexDirection: "row",
        alignItems: "center",
    },
    input: {
        flex: 1,
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
    },
    button: {
        alignSelf: "center",
        flex: 0.15
    },
    overlayContainer: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height / 5,
        backgroundColor: "white",
        zIndex: 99,
        position: "absolute"
    }
})


export default SearchScreen;
