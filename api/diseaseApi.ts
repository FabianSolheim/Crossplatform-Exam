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
    updated: number
}

async function getDailyStats(){
    try {
        const request = await fetch("https://disease.sh/v3/covid-19/all", {
            method: "GET"
        })

        return await request.json();
    } catch (e) {
        //NOTE: HANDLE ERRORS PROPERLY
        console.log(e.toString())
    }
}

type TotalVaccinations = {
    date: number
}
async function getTotalVaccinations() {
    try {
        const request = await fetch("https://disease.sh/v3/covid-19/vaccine/coverage?lastdays=2&fullData=true", {
            method: "GET"
        })

        return await request.json();
    } catch (e) {
        //NOTE: HANDLE ERRORS PROPERLY
        console.log(e.toString())
    }
}

export {
    getDailyStats,
    getTotalVaccinations
}
