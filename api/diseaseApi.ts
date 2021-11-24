import axios from "axios";

//This gets the daily covid stats
export type DailyStats = {
    active: number,
    activePerOneMillion: number,
    affectedCountries: number,
    cases: number,
    casesPerOneMillion: number,
    critical: number,
    criticalPerOneMillion: number,
    deaths: number,
    deathsPerOneMillion: number,
    oneCasePerPeople: number,
    oneDeathPerPeople: number,
    oneTestPerPeople: number,
    population: number,
    recovered: number,
    recoveredPerOneMillion: number,
    tests: number,
    testsPerOneMillion: number,
    todayCases: number,
    todayDeaths: number
    todayRecovered: number,
    updated: number,
    //TODO: These should prooobably be its own ting
    country: string,
    flag: string
}

async function getDailyStats(){
    try {
        const request = await axios.get<DailyStats>("https://disease.sh/v3/covid-19/all");
        return request.data
    } catch (e) {
        //TODO: HANDLE ERRORS PROPERLY
        console.log(e.toString())
    }
}


type TotalVaccinations = {
    daily: number,
    dailyPerMillion: number,
    date: string,
    total: number,
    totalPerHundred: number,
}

async function getTotalVaccinations() {
    try {
        const request = await axios.get<TotalVaccinations>("https://disease.sh/v3/covid-19/vaccine/coverage?lastdays=2&fullData=true");
        return request.data
    } catch (e) {
        //TODO: HANDLE ERRORS PROPERLY
        console.log(e.toString())
    }
}

//TODO: Create type for this request
async function getDataSeriesAllTime(){
    try {
        const request = await axios.get("https://disease.sh/v3/covid-19/historical/all?lastdays=5");
        return request.data
    } catch (e) {
        //TODO: HANDLE ERRORS PROPERLY
        console.log(e.toString())
    }
}

async function getDataSeriesCountry(country: string) {
    try {
        const url = `https://disease.sh/v3/covid-19/historical/${country.toLowerCase()}?lastdays=1`
        const request = await axios.get(url);
        return request.data;
    } catch (e) {
        //TODO: HANDLE ERROR
    }
}

//TODO: Create type for this request
async function getAllCountries() {
    try {
        const request = await axios.get("https://disease.sh/v3/covid-19/countries");
        return await request.data;
    } catch (e) {
        //TODO: Handle errors properlyyyy
        console.log(e.toString());
    }
}

async function getSpecificCountry(country: string) {
    try {
        const url = `https://disease.sh/v3/covid-19/countries/${country.toLowerCase()}?strict=true`
        const request = await axios.get<DailyStats>(url);
        return request.data;
    } catch (e) {
        //TODO: HANDLE ERROR
    }
}

export {
    getDailyStats,
    getTotalVaccinations,
    getDataSeriesAllTime,
    getDataSeriesCountry,
    getAllCountries,
    getSpecificCountry
}
