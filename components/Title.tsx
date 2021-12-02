import React from "react";
import {Text, StyleSheet} from "react-native";
import {
    Lato_100Thin,
    Lato_100Thin_Italic,
    Lato_300Light,
    Lato_300Light_Italic,
    Lato_400Regular, Lato_400Regular_Italic, Lato_700Bold, Lato_700Bold_Italic, Lato_900Black, Lato_900Black_Italic,
    useFonts
} from "@expo-google-fonts/lato";

type Props = {
    title: string
}

const Title = ({title}: Props) => {



    return(
        <Text style={styles.headingText}>{title}</Text>
    )
}

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
