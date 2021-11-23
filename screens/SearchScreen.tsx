import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from "react-native";
import {getAllCountries} from "../api/diseaseApi";

//TODO: Fix object properties on Type
type Props = {
    item: string
}

const RenderItem = ({item}: Props) => {
    return(
        <View style={styles.renderContainer}>
            <Text>{item.country}</Text>
        </View>
    )
}

const SearchScreen = () => {
    const [allCountries, setAllCountries] = useState([]);

    const ListRenderItem = ({item}: Props) => {
        return(
            <Item title={item} />
        )
    }

    useEffect(() => {
        getAllCountries().then(data => {
            data.forEach((el) => {
                setAllCountries(prev => [...prev, el.country])
            })
            setAllCountries(data);
        })
    }, []);

    return(
        <SafeAreaView>
            <Text>This is the SearchScreen!</Text>
            <FlatList
                data={allCountries}
                renderItem={({item}) => {
                    return <RenderItem item={item} />
                }}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    renderContainer: {
        marginLeft: 15,
        marginRight: 15,
        marginTop: 20,
        padding: 10,
        borderRadius: 10,
        shadowColor: "#000",
        backgroundColor: "#FAF9F6",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
})

export default SearchScreen;
