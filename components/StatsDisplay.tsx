import React from "react";
import {Text, View, StyleSheet} from "react-native";

const StatsDisplay = () => {
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.label}>Total covid cases today</Text>
                <Text>6000</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.label}>Total vaccinations worldwide</Text>
                <Text>12047839</Text>
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
    }
})

export default StatsDisplay;
