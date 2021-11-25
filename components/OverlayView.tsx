import {Dimensions, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Entypo} from "@expo/vector-icons";
import React from "react";

type Props = {
    toggleOverlay: boolean
    setToggleOverlay: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

const OverlayView: React.FC<Props> = ({setToggleOverlay, toggleOverlay}) => {
    return (
        <View style={styles.overlayContainer}>
            <Text>Hi i am in the way</Text>
            <TouchableOpacity style={styles.button} onPress={() => setToggleOverlay(!toggleOverlay)}>
                <Entypo name="circle-with-cross" size={24} color="black"/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        alignSelf: "center",
        flex: 0.15
    },
    overlayContainer: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height / 5,
        backgroundColor: "white",
        zIndex: 99,
        position: "absolute"
    }
});


export default OverlayView
