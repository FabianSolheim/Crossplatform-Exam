import {Dimensions, StyleSheet, TouchableOpacity} from "react-native";
import {Fontisto} from "@expo/vector-icons";
import React from "react";

type Props = {
    toggleOverlay: boolean;
    setToggleOverlay: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

const ButtonWithIcon: React.FC<Props> = ({setToggleOverlay, toggleOverlay}) => {
    return (
        <TouchableOpacity style={styles.button} onPress={() => setToggleOverlay(!toggleOverlay)}>
            <Fontisto name="filter" size={24} color="black"/>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        alignSelf: "center",
        flex: 0.15
    },
})

export default ButtonWithIcon
