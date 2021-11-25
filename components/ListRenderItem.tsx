import React from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {ItemProps, ProfileScreenNavigationProp} from "../screens/SearchScreen";

type Props = {
    item: ItemProps;
    navigation: ProfileScreenNavigationProp
}

const ListRenderItem = ({item, navigation}: Props) => {
    return (
        <View>
            {/* @ts-ignore */}
            <TouchableOpacity
                onPress={() => navigation.navigate("SearchResultScreen", {country: item.countryInfo.iso3})}>
                <View style={styles.renderContainer}>
                    <View style={{flex: 1}}>
                        <Text style={styles.renderContainerTitle}>{item.country}</Text>
                        <Text style={styles.renderContainerText}>Cases: {item.cases}</Text>
                    </View>
                    <Image style={{width: 100, height: 100, flex: 1}} source={{uri: item.countryInfo.flag.toString()}}/>
                </View>
            </TouchableOpacity>
        </View>

    );
};

const styles = StyleSheet.create({
    renderContainer: {
        flex: 1,
        flexDirection: "row",
        marginLeft: 15,
        marginRight: 15,
        marginTop: 10,
        padding: 10,
        borderRadius: 5,
        shadowColor: "#000",
        backgroundColor: "#FAF9F6",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    renderContainerTitle: {
        fontSize: 20
    },
    renderContainerText: {
        fontSize: 16
    },
});

export default ListRenderItem;
