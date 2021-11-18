import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, ScrollView} from "react-native";

//API
import {getDailyStats, getTotalVaccinations} from "../api/diseaseApi";

//Components
import Title from "../components/Title";
import StatsDisplay from "../components/StatsDisplay";

const HomeScreen = () => {
    const [casesToday, setCasesToday] = useState(0);
    const [vaccinationsToday, setVaccinationsToday] = useState(0);
    const [deathsToday, setDeathsToday] = useState(0);

    const [vaccinationsTotal, setVaccinationsTotal] = useState(0);
    const [testsTotal, setTestsTotal] = useState(0);
    const [casesTotal, setCasesTotal] = useState(0);
    const [deathsTotal, setDeathsTotal] = useState(0);

    useEffect(() => {
        getDailyStats().then(data => {
            setCasesToday(data.todayCases)
            setDeathsToday(data.todayDeaths)

            setCasesTotal(data.cases)
            setTestsTotal(data.tests)
            setDeathsTotal(data.deaths)
        });

        getTotalVaccinations().then(data => {

            const {daily, total} = data[0]
            setVaccinationsToday(daily)
            setVaccinationsTotal(total)
        });
    }, [])

    return(
        <SafeAreaView>
            <ScrollView>
                <Title title={"Total Global Stats"} />
                <StatsDisplay cases={casesTotal} tests={testsTotal} vaccinations={vaccinationsTotal} deaths={deathsTotal} title={"Total"} />

                <Title title={"Daily Global Stats"} />
                <StatsDisplay cases={casesToday} tests={0} vaccinations={vaccinationsToday} deaths={deathsToday} title={"Daily"} />

                <Title title={"Weekly Global Stats"} />
                <StatsDisplay cases={0} tests={0} vaccinations={0} title={"Weekly"}  deaths={0}/>

                <Title title={"Monthly Global Stats"} />
                <StatsDisplay cases={0}tests={0} vaccinations={0} title={"Monthly"}  deaths={0}/>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {},
})

export default HomeScreen;
