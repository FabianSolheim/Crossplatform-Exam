import {ItemProps} from "../screens/SearchScreen";
import React from "react";
import {Dimensions, Image, StyleSheet, Text, View} from "react-native";
import {numberWithCommas} from "../utils/utils";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "../navigation/SearchNavigation";

type CountryViewProps = {
    countryData: ItemProps;
    countryFlag: string;
}

const CountryView: React.FC<CountryViewProps> = ({countryData, countryFlag}) => {
    return(
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <Image style={{height: 100, width: 150}} source={{uri: countryFlag}} />
                <Text style={styles.title}>{countryData.country}</Text>
            </View>
            <View style={styles.cardContainer} >
                <Text style={styles.label}>Cases: </Text>
                <Text style={styles.text}>{countryData.cases}</Text>
                <Text style={styles.label}>Population</Text>
                <Text style={styles.text}>{numberWithCommas(parseInt(countryData.population))}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        alignItems: "center",
    },
    cardContainer: {
        textAlign: "left",
        width: Dimensions.get("window").width / 1.3 ,
        alignItems: "center",
        flexDirection: "column",
        marginLeft: 15,
        marginRight: 15,
        marginTop: 10,
        padding: 30,
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
    textContainer: {
        textAlign: "left",
    },
    title: {
        fontSize: 30,
    },
    label: {
        marginTop: 10,
        fontSize: 24,
        alignSelf: "flex-start",
    },
    text: {
        fontSize: 16,
        alignSelf: "flex-start",
    }
});

export default CountryView;
