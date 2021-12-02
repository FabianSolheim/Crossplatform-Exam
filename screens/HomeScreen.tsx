import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, ScrollView} from "react-native";
import {getDailyStats, getDataSeriesAllTime, getDataSeriesCountry, getTotalVaccinations} from "../api/diseaseApi";
import {formatDate} from "../utils/utils";
import {
    useFonts,
    Lato_100Thin,
    Lato_100Thin_Italic,
    Lato_300Light,
    Lato_300Light_Italic,
    Lato_400Regular,
    Lato_400Regular_Italic,
    Lato_700Bold,
    Lato_700Bold_Italic,
    Lato_900Black,
    Lato_900Black_Italic,
} from '@expo-google-fonts/lato';


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
            setCountryChartCases([]); //reset state array
            setCountryChartDates([]);
            const {cases} = data.timeline;

            for (const [key, value] of Object.entries(cases)) {
                console.log(`${key}: ${value}`);
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
                { /* <ChartDisplay cases={countryChartCases} dates={countryChartDates}/> */}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {},
})

export default HomeScreen;
