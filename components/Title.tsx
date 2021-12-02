import React from "react";
import {Text, StyleSheet} from "react-native";

type Props = {
    title: string
}

const Title = ({title}: Props) => <Text style={styles.headingText}>{title}</Text>

const styles = StyleSheet.create({
    headingText: {
        marginLeft: 20,
        marginTop: 25,
        marginRight: 20,
        textAlign: "left",
        fontSize: 20,
        fontWeight: "bold",
        fontFamily: 'Lato_700Bold'
    }
})

export default Title;
