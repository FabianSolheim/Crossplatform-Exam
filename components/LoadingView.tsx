import {ActivityIndicator, View} from "react-native";
import React from "react";

const LoadingView = () => {
    return(
        <View>
            <ActivityIndicator size="large" color="#00ff00" />
        </View>
    );
}

export default LoadingView;
