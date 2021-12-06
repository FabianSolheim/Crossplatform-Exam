import {ActivityIndicator, Dimensions, View} from "react-native";
import React from "react";

const LoadingView = () => {
    return(
        <View style={{marginTop: Dimensions.get("window").height / 2.5}}>
            <ActivityIndicator size="large" color="#3BB2e2" />
        </View>
    );
}

export default LoadingView;
