import React, {useEffect, useState} from "react";
import {View, Text, Dimensions} from "react-native";
import {
    LineChart
} from "react-native-chart-kit";

type Props = {
    cases: any;
    dates: string[];
}


const ChartDisplay = ({cases, dates}: Props) => {
    const [currentCases, setCurrentCases] = useState<number[]>([]);

    console.log(cases.length);
    console.log(dates.length);
    return(
        <View >
            <LineChart
                data={{
                    labels: dates,
                    datasets: [
                        {
                            data: cases
                        }
                    ]
                }}
                width={Dimensions.get("window").width - 20} // from react-native
                height={220}
                yAxisLabel=""
                yAxisSuffix=""
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                    backgroundColor: "#add8e6",
                    backgroundGradientFrom: "#add8e6",
                    backgroundGradientTo: "#3cbde5",
                    decimalPlaces: 0, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16,
                    },

                    propsForDots: {
                        r: "1",
                        strokeWidth: "1",
                        stroke: "#ffa726"
                    }
                }}
                bezier
                style={{
                    marginTop: 15,
                    alignSelf: "center",
                    borderRadius: 15,
                }}
            />
        </View>
    )
}

export default ChartDisplay;
