import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, StyleSheet, ScrollView} from "react-native";

//API
import {getDailyStats} from "../api/diseaseApi";

//Components
import Title from "../components/Title";
import StatsDisplay from "../components/StatsDisplay";

const HomeScreen = () => {
    const [casesToday, setCasesToday] = useState(0)
    const [casesTotal, setCasesTotal] = useState(0)

    useEffect(() => {
        getDailyStats().then(data => {
            console.log(data)
            setCasesToday(data.todayCases)
            setCasesTotal(data.cases)
        })
    }, [])
    return(
        <SafeAreaView>
            <ScrollView>
                <Title title={"Daily Global Stats"} />
                <StatsDisplay cases={casesToday} />

                <Title title={"Weekly Global Stats"} />
                <StatsDisplay cases={0} />

                <Title title={"Monthly Global Stats"} />
                <StatsDisplay cases={0} />

                <Title title={"Total Global Stats"} />
                <StatsDisplay cases={casesTotal} />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {},
})

export default HomeScreen;
