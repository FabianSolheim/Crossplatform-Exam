import React from "react";
import {View, Text, Dimensions} from "react-native";
import {
    LineChart
} from "react-native-chart-kit";

type Props = {
    cases: object
}

const ChartDisplay = ({cases}: Props) => {
    console.log("cases from chartdisplay", cases)
    return(
        <View >
            <LineChart
                data={{
                    labels: ["0", "15", "30"],
                    datasets: [
                        {
                            data: [
                                Math.random() * 10000,
                                Math.random() * 10000,
                                Math.random() * 10000,
                                Math.random() * 10000,
                                Math.random() * 1000,
                                Math.random() * 100
                            ]
                        }
                    ]
                }}
                width={Dimensions.get("window").width} // from react-native
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
                        borderRadius: 16
                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "#ffa726"
                    }
                }}
                bezier
                style={{
                    borderRadius: 16,
                    marginTop: 20,
                    marginLeft: 15,
                    marginRight: 30,
                    marginVertical: 8,
                }}
            />
        </View>
    )
}

export default ChartDisplay;
