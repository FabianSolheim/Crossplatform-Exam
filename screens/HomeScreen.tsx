import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, TouchableOpacity} from "react-native";

//API
import {getDailyStats, getDataSeriesAllTime, getTotalVaccinations} from "../api/diseaseApi";

//Components
import Title from "../components/Title";
import StatsDisplay from "../components/StatsDisplay";
import ChartDisplay from "../components/ChartDisplay";

const HomeScreen = () => {
    //DAILY
    const [casesToday, setCasesToday] = useState(0);
    const [vaccinationsToday, setVaccinationsToday] = useState(0);
    const [deathsToday, setDeathsToday] = useState(0);

    //TOTAL (GLOBAL)
    const [vaccinationsTotal, setVaccinationsTotal] = useState(0);
    const [testsTotal, setTestsTotal] = useState(0);
    const [casesTotal, setCasesTotal] = useState(0);
    const [deathsTotal, setDeathsTotal] = useState(0);

    //CHART
    const [chartCases, setChartCases] = useState({});


    useEffect(() => {
        /* This might be a clean way to run a async function inside an useEffect
        (async () => {
            let data = await getDailyStats()

            setCasesToday(data.todayCases)
            setDeathsToday(data.todayDeaths)

            setCasesTotal(data.cases)
            setTestsTotal(data.tests)
            setDeathsTotal(data.deaths)
        })()
        */

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

        getDataSeriesAllTime().then(data => {
            console.log(data.cases)
            setChartCases(data.cases)
        });
    }, [])

    return(
        <SafeAreaView>
            <ScrollView>
                {/* These should maybe be its own component? */}
                <Title title={"Total Global Stats"} />
                <TouchableOpacity onPress={() => console.log("Pressed")}>
                    <StatsDisplay cases={casesTotal} tests={testsTotal} vaccinations={vaccinationsTotal} deaths={deathsTotal} title={"Total"} />
                </TouchableOpacity>

                <Title title={"Daily Global Stats"} />
                <StatsDisplay cases={casesToday} tests={0} vaccinations={vaccinationsToday} deaths={deathsToday} title={"Daily"} />

                <Title title={"Total Global Development"} />
                <ChartDisplay cases={chartCases} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {},
})

export default HomeScreen;
