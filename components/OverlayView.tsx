import {StyleSheet, View, Text} from "react-native";
import React, {useState} from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import {Overlay} from 'react-native-elements';

type Props = {
    toggleOverlay: boolean
    setToggleOverlay: (value: boolean | ((prevVar: boolean) => boolean)) => void;
    sortByLeastCases: boolean;
    setSortByLeastCases: (value: boolean | ((prevVar: boolean) => boolean)) => void;
    sortByMostCases: boolean;
    setSortByMostCases: (value: boolean | ((prevVar: boolean) => boolean)) => void;
    mostCasesChecked: boolean;
    setMostCasesChecked: (value: boolean | ((prevVar: boolean) => boolean)) => void;
    leastCasesChecked: boolean;
    setLeastCasesChecked: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

const OverlayView: React.FC<Props> = ({
                                          setToggleOverlay,
                                          toggleOverlay,
                                          setSortByLeastCases,
                                          setSortByMostCases,
                                          sortByLeastCases,
                                          sortByMostCases,
                                          mostCasesChecked,
                                          setMostCasesChecked,
                                          leastCasesChecked,
                                          setLeastCasesChecked
                                      }) => {

    return (
        <View>
            <Overlay overlayStyle={{padding: 20}} isVisible={toggleOverlay}
                     onBackdropPress={() => setToggleOverlay(!toggleOverlay)}>
                <Text style={styles.title}>Choose a filter:</Text>
                <BouncyCheckbox
                    size={25}
                    fillColor="red"
                    unfillColor="#FFFFFF"
                    text="Sort by most cases"
                    iconStyle={{borderColor: "red"}}
                    textStyle={{
                        textDecorationLine: "none",
                        fontFamily: 'Lato_400Regular'
                    }}
                    isChecked={mostCasesChecked}
                    onPress={() => {
                        setSortByMostCases(!sortByMostCases);
                        setMostCasesChecked(true);
                        setLeastCasesChecked(false);
                    }}
                    style={{marginTop: 10}}
                />

                <BouncyCheckbox
                    size={25}
                    fillColor="red"
                    unfillColor="#FFFFFF"
                    text="Sort by least cases"
                    iconStyle={{borderColor: "red"}}
                    textStyle={{
                        textDecorationLine: "none",
                        fontFamily: 'Lato_400Regular'
                    }}
                    isChecked={leastCasesChecked}
                    onPress={() => {
                        setSortByLeastCases(!sortByLeastCases);
                        setLeastCasesChecked(true);
                        setSortByMostCases(false);
                    }}
                    style={{marginTop: 10}}
                />
            </Overlay>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        marginBottom: 10,
    }
});

export default OverlayView;
