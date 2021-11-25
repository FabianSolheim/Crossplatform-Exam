import {Dimensions, StyleSheet, Text, View} from "react-native";
import React from "react";
import ButtonWithIcon from "./ButtonWithIcon";

type Props = {
    toggleOverlay: boolean
    setToggleOverlay: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

const OverlayView: React.FC<Props> = ({setToggleOverlay, toggleOverlay}) => {
    return (
        <View style={styles.overlayContainer}>
            <Text>Hi i am in the way</Text>
            <ButtonWithIcon icon={"window-close"} setToggleOverlay={setToggleOverlay} toggleOverlay={toggleOverlay}/>
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
