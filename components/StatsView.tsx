import React from "react";
import {Text, View, StyleSheet} from "react-native";
import {numberWithCommas} from "../utils/utils";

type Props = {
    cases: number,
    vaccinations: number,
    tests: number,
    deaths: number,
    title: string
}

const StatsView = ({cases, vaccinations, tests, deaths, title}: Props) => {
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.label}>{title} covid cases</Text>
                <Text style={styles.regularText}>{numberWithCommas(cases)}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.label}>{title} vaccinations</Text>
                <Text style={styles.regularText}>{numberWithCommas(vaccinations)}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.label}>{title} tests</Text>
                <Text style={styles.regularText}>{numberWithCommas(tests)}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.label}>{title} deaths</Text>
                <Text style={styles.regularText}>{numberWithCommas(deaths)}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
        marginRight: 15,
        marginTop: 20,
        padding: 10,
        borderRadius: 10,
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
    infoContainer: {
        marginTop: 10,
    },
    label: {
        fontWeight: "bold",
        fontSize: 16,
        fontFamily: 'Lato_700Bold'
    },
    regularText: {
        fontFamily: 'Lato_400Regular'
    }
})

export default StatsView;
