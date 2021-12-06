import React from "react";
import {Dimensions, Image, StyleSheet, Text, View} from "react-native";
import {numberWithCommas} from "../utils/utils";

type CountryViewProps = {
    countryFlag: string;
    countryName: string;
    countryPopulation: number;
    countryCases: number;
    countryCritical: number;
    countryDeaths: number;
}

const CountryView: React.FC<CountryViewProps> = (props) => {
    const {countryName, countryFlag, countryPopulation, countryCases, countryCritical, countryDeaths} = props;
    const titleString = `Statistics about ${countryName}`;

    return (
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <Image style={{height: 100, width: 150}} source={{uri: countryFlag}}/>
                <Text style={styles.title}>{countryName}</Text>
            </View>
            <Text style={styles.secondTitle}>{titleString}</Text>
            <View style={styles.cardContainer}>
                <Text style={styles.label}>Population:</Text>
                <Text style={styles.text}>{numberWithCommas(countryPopulation)}</Text>
                <Text style={styles.label}>Cases: </Text>
                <Text style={styles.text}>{numberWithCommas(countryCases)}</Text>
                <Text style={styles.label}>Deaths: </Text>
                <Text style={styles.text}>{numberWithCommas(countryDeaths)}</Text>
                <Text style={styles.label}>Critical conditions: </Text>
                <Text style={styles.text}>{numberWithCommas(countryCritical)}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "flex-start",
    },
    cardContainer: {
        alignSelf: "center",
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
        fontFamily: 'Lato_700Bold_Italic',
    },
    secondTitle: {
        fontSize: 20,
        marginTop: 25,
        fontFamily: 'Lato_700Bold',
        alignSelf: "flex-start",
        marginLeft: 50,
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