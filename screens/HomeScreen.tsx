import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, Dimensions} from "react-native";
import {getDailyStats, getDataSeriesAllTime, getDataSeriesCountry, getTotalVaccinations} from "../api/diseaseApi";
import {formatDate} from "../utils/utils";
import {LineChart, PieChart} from "react-native-chart-kit";


//Components
import Title from "../components/Title";
import StatsView from "../components/StatsView";
import ChartDisplay from "../components/ChartDisplay";

const HomeScreen: React.FC = () => {

    //DAILY
    const [casesToday, setCasesToday] = useState(0);
    const [vaccinationsToday, setVaccinationsToday] = useState(0);
    const [deathsToday, setDeathsToday] = useState(0);

    //TOTAL (GLOBAL)
    const [vaccinationsTotal, setVaccinationsTotal] = useState(0);
    const [testsTotal, setTestsTotal] = useState(0);
    const [casesTotal, setCasesTotal] = useState(0);
    const [deathsTotal, setDeathsTotal] = useState(0);

    //COUNTRY CHART
    const [countryChartCases, setCountryChartCases] = useState<number[]>([]);
    const [countryChartDates, setCountryChartDates] = useState<string[]>([]);

    useEffect(() => {
        getDailyStats().then(data => {
            if (!data) return;
            console.log(data)
            setCasesToday(data.todayCases)
            setDeathsToday(data.todayDeaths)

            setCasesTotal(data.cases)
            setTestsTotal(data.tests)
            setDeathsTotal(data.deaths)
        });

        getTotalVaccinations().then(data => {
            if (!data) return;

            setVaccinationsToday(data[0].daily)
            setVaccinationsTotal(data[0].total)
        });

        //TODO: ADD LOCATION DATA HERE
        getDataSeriesCountry("norway").then(data => {
            //reset state array
            setCountryChartCases([]);
            setCountryChartDates([]);
            console.log(data.timeline)
            const {cases} = data.timeline;

            for (const [key, value] of Object.entries(cases)) {
                if (typeof value === "number") {
                    setCountryChartCases(prevState => [...prevState, value]);
                    setCountryChartDates(prevState => [...prevState, formatDate(key.toString())])
                }
            }
        })
    }, []);

    return (
        <SafeAreaView>
            <ScrollView>
                <Title title={"Total Global Stats"}/>
                <StatsView cases={casesTotal} tests={testsTotal} vaccinations={vaccinationsTotal} deaths={deathsTotal}
                           title={"Total"}/>
                <Title title={"Daily Global Stats"}/>
                <StatsView cases={casesToday} tests={0} vaccinations={vaccinationsToday} deaths={deathsToday}
                           title={"Daily"}/>

                    <Title title={"Cases Last 10 Days, Norway"}/>
                {
                    /*
                        <ChartDisplay cases={[10]} dates={["yes"]} />
                    */
                }
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {}
})

export default HomeScreen;
