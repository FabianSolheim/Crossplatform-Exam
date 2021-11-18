import React from "react";
import {Text, View, StyleSheet} from "react-native";

//NOTE: This component will take the data from the API. Have to be reusable, as we might display many different stats in these.
type Props = {
    cases: number,
    vaccinations: number,
    tests: number,
    deaths: number,
    title: string
}
//TODO: Refactor Text tag to its own component which applies this function, so the code looks more clean.
//https://www.codegrepper.com/code-examples/javascript/convert+number+to+string+with+commas+javascript
function numberWithCommas(num: number) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const StatsDisplay = ({cases, vaccinations, tests, deaths, title}: Props) => {
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.label}>{title} covid cases</Text>
                <Text>{numberWithCommas(cases)}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.label}>{title} vaccinations</Text>
                <Text>{numberWithCommas(vaccinations)}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.label}>{title} tests</Text>
                <Text>{numberWithCommas(tests)}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.label}>{title} deaths</Text>
                <Text>{numberWithCommas(deaths)}</Text>
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
    }
})

export default StatsDisplay;
