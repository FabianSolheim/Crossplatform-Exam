import React, {useEffect, useState} from "react";
import {View, Text, Dimensions, ScrollView} from "react-native";
import {PieChart} from "react-native-chart-kit";

const data = [
    {
        name: "Seoul",
        population: 21500000,
        color: "rgba(131, 167, 234, 1)",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    },
    {
        name: "Toronto",
        population: 2800000,
        color: "#F00",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    },
    {
        name: "Beijing",
        population: 527612,
        color: "red",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    },
    {
        name: "New York",
        population: 8538000,
        color: "#ffffff",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    },
    {
        name: "Moscow",
        population: 11920000,
        color: "rgb(0, 0, 255)",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    }
];

type Props = {
    cases: number[];
    dates: string[];
}

const ChartDisplay: React.FC<Props> = ({cases, dates}) => {
    const [currentCases, setCurrentCases] = useState<number[]>([]);

    const screenWidth = (Dimensions.get("window").width - 20);

    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 5, // optional, default 3
        barPercentage: 0.5,
        fontSize: 10,
        useShadowColorFromDataset: false // optional
    };

    const series = [123, 321, 123, 789, 537]
    const sliceColor = ['#F44336','#2196F3','#FFEB3B', '#4CAF50', '#FF9800'];

    return (
        <ScrollView style={{flex: 1}}>
            <View style={styles.container}>
                <Text>Basic</Text>
                <PieChart
                    width={250}
                    height={250}
                    data={series}
                    chartConfig={chartConfig}
                 accessor={"yes"} backgroundColor={"black"} paddingLeft={"10"}/>

            </View>
        </ScrollView>
    );
}
const styles = {
    container: {
        flex: 1,
        width: Dimensions.get("window").width - 20,
        overflow: "hidden",
        flexDirection: "row",
        marginLeft: 15,
        marginRight: 15,
        marginTop: 20,
        marginBottom: 20,
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
}
export default ChartDisplay;
