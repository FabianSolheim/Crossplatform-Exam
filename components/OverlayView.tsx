import {Dimensions, StyleSheet, Text, View} from "react-native";
import React from "react";
import ButtonWithIcon from "./ButtonWithIcon";
import BouncyCheckbox from "react-native-bouncy-checkbox";

type Props = {
    toggleOverlay: boolean
    setToggleOverlay: (value: boolean | ((prevVar: boolean) => boolean)) => void;
    sortByLeastCases: boolean;
    setSortByLeastCases: (value: boolean | ((prevVar: boolean) => boolean)) => void;
    sortByMostCases: boolean;
    setSortByMostCases: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

//TODO: Filtering options for most and least cases
const OverlayView: React.FC<Props> = ({
                                          setToggleOverlay,
                                          toggleOverlay,
                                          setSortByLeastCases,
                                          setSortByMostCases,
                                          sortByLeastCases,
                                          sortByMostCases
                                      }) => {
    return (
        <View style={styles.overlayContainer}>
            <View style={styles.filterContainer}>
                <BouncyCheckbox
                    size={25}
                    fillColor="red"
                    unfillColor="#FFFFFF"
                    text="Sort by most cases"
                    iconStyle={{borderColor: "red"}}
                    onPress={() => {
                        setSortByMostCases(!sortByMostCases);
                    }}
                    style={{marginTop: 10}}
                />
                <BouncyCheckbox
                    size={25}
                    fillColor="red"
                    unfillColor="#FFFFFF"
                    text="Sort by least cases"
                    iconStyle={{borderColor: "red"}}
                    onPress={() => {
                        setSortByLeastCases(!sortByLeastCases)
                    }}
                    style={{marginTop: 10}}
                />
            </View>
            <View style={styles.buttonContainer}>
                <ButtonWithIcon icon={"window-close"} setToggleOverlay={setToggleOverlay}
                                toggleOverlay={toggleOverlay}/>
            </View>
        </View>
    );
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
        position: "absolute",
        flexDirection: "row",
    },
    buttonContainer: {
        flex: 1,
        padding: 10,
        width: Dimensions.get("window").width / 2
    },
    filterContainer: {
        flex: 4,
        padding: 10,
    }
});

export default OverlayView;
