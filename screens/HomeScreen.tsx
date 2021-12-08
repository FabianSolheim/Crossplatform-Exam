import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, ScrollView} from "react-native";
import {
    getDailyStats,
    getSpecificCountry,
    getTotalVaccinations
} from "../api/diseaseApi";

//Components
import Title from "../components/Title";
import StatsView from "../components/StatsView";

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

    //SPECIFIC COUNTRY
    const [countryCases, setCountryCases] = useState<number>(0);
    const [countryTests, setCountryTests] = useState<number>(0);
    const [countryDeaths, setCountryDeaths] = useState<number>(0);


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

        getSpecificCountry("norway").then(data => {
            if (!data) return;
            setCountryCases(data.cases);
            setCountryDeaths(data.deaths);
            setCountryTests(data.cases);
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

                <Title title={"Stats for Norway"}/>
                <StatsView cases={countryCases} vaccinations={0} tests={countryTests} deaths={countryDeaths}
                           title={"Norway"}/>
                <View style={{marginTop: 20}}/>
            </ScrollView>
        </SafeAreaView>
    );
}

export default HomeScreen;
