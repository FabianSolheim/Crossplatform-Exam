import React from "react";
import {Text, View, StyleSheet, Image, Dimensions} from "react-native";
import {numberWithCommas} from "../utils/utils";

//SVGS
import World1 from "../world1.svg";
import Sick1 from "../sick1.svg";

type Props = {
    cases: number,
    vaccinations: number,
    tests: number,
    deaths: number,
    title: string
}

const StatsView = ({cases, vaccinations, tests, deaths, title}: Props) => {
    return (
        <View style={styles.container}>
            <View style={styles.leftInnerContainer}>
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
            <View style={styles.rightInnerContainer}>
                {title === "Total" &&<World1 height={130} width={130}/>}
                {title === "Daily" && <Sick1 height={130} width={130}/>}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
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
    },
    leftInnerContainer: {
        flex: 0.5,
    },
    rightInnerContainer: {
        flex: 0.5,
        justifyContent: "center",
        alignItems: "center",
    }
})

export default StatsView;
