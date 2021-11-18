import React from 'react';
import {SafeAreaView, Text, StyleSheet} from "react-native";

//Components
import StatsDisplay from "../components/StatsDisplay";

const HomeScreen = () => {
    return(
        <SafeAreaView>
            <Text style={styles.headingText}>Daily Global Stats</Text>
            <StatsDisplay />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {},
    headingText: {
        marginLeft: 20,
        marginTop: 20,
        marginRight: 20,
        textAlign: "left",
        fontSize: 20,
        fontWeight: "bold"
    }
})

export default HomeScreen;
