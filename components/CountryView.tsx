import React, {useEffect} from "react";
import {Dimensions, Image, StyleSheet, Text, View} from "react-native";
import {numberWithCommas} from "../utils/utils";

type CountryViewProps = {
    countryFlag: string;
    countryName: string;
    countryPopulation: number;
    countryCases: number;
}

const CountryView: React.FC<CountryViewProps> = ({countryName, countryFlag, countryPopulation, countryCases}) => {
    return (
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <Image style={{height: 100, width: 150}} source={{uri: countryFlag}}/>
                <Text style={styles.title}>{countryName}</Text>
            </View>
            <View style={styles.cardContainer}>
                <Text style={styles.label}>Cases: </Text>
                <Text style={styles.text}>{numberWithCommas(countryCases)}</Text>
                <Text style={styles.label}>Population:</Text>
                <Text style={styles.text}>{numberWithCommas(countryPopulation)}</Text>
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
        width: Dimensions.get("window").width / 1.3,
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
        marginTop: 10,
        fontFamily: 'Lato_700Bold_Italic'
    },
    label: {
        marginTop: 10,
        marginBottom: 2,
        fontSize: 24,
        alignSelf: "flex-start",
        fontFamily: 'Lato_400Regular'
    },
    text: {
        fontSize: 16,
        alignSelf: "flex-start",
        fontFamily: 'Lato_400Regular'
    }
});

export default CountryView;
