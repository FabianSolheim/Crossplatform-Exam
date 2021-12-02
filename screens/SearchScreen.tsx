import React, {useEffect, useRef, useState} from 'react';

import {FlatList, SafeAreaView, View} from "react-native";
import {getAllCountries, CountryInfo} from "../api/diseaseApi";

//Components
import OverlayView from "../components/OverlayView";
import SearchBar from "../components/SearchBar";
import ListRenderItem from "../components/ListRenderItem";
import ItemSeparatorComponent from "../components/ItemSeparatorComponent";
import {ProfileScreenNavigationProp} from "../utils/props";
import LoadingView from "../components/LoadingView";

//TODO: FIX THIS
type Props = {
    item: ItemProps;
    navigation: ProfileScreenNavigationProp
}

export type ItemProps = {
    country: string;
    name: string;
    cases: number;
    continent: string;
    countryInfo: CountryInfo;
    deaths: string;
    population: string;
}

const SearchScreen: React.FC<Props> = ({navigation}) => {
    const [allCountries, setAllCountries] = useState([]);
    const [text, setText] = useState("");
    const [toggleOverlay, setToggleOverlay] = useState<boolean>(false);
    const [flatListData, setFlatListData] = useState([]); //Having a unique one so we dont mutate the original array
    const [isRefreshing, setIsRefresing] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>();

    //FILTERING
    const [sortByLeastCases, setSortByLeastCases] = useState<boolean>(false);
    const [sortByMostCases, setSortByMostCases] = useState<boolean>(false);

    //CHECKBOXES
    const [mostCasesChecked, setMostCasesChecked] = useState<boolean>(false);
    const [leastCasesChecked, setLeastCasesChecked] = useState<boolean>(false);

    //Fetch all countries
    useEffect(() => {
        getAllCountries().then(data => {
            setAllCountries([]);

            const correctData = data.filter((item: ItemProps) => item.countryInfo._id !== null); //null checking the data, as some countries dont have the id property
            setAllCountries(correctData);
            setFlatListData(correctData);
        });
    }, []);

    //Filter by user text
    useEffect(() => {
        if (text.length === 0) {
            setFlatListData(allCountries);
        } else {
            const newArray = allCountries.filter((item: ItemProps) => item.country.toLowerCase().includes(text.toLowerCase()));
            setFlatListData(newArray);
        }
    }, [text])

    //Sort by least cases
    useEffect(() => {
        if (sortByLeastCases) {
            const newArray = allCountries.sort((a: ItemProps, b: ItemProps) => a.cases - b.cases)
            setFlatListData([...newArray]);
        }
    }, [sortByLeastCases])

    //Sort by most cases
    useEffect(() => {
        if (sortByMostCases) {
            const newArray = allCountries.sort((a: ItemProps, b: ItemProps) => b.cases - a.cases)
            setFlatListData([...newArray]);
        }
    }, [sortByMostCases])

    if(isLoading) {
        return <LoadingView />
    }
    return (
        <SafeAreaView>
            <SearchBar setText={setText} setToggleOverlay={setToggleOverlay} toggleOverlay={toggleOverlay}/>
            {toggleOverlay &&
            <OverlayView setToggleOverlay={setToggleOverlay} toggleOverlay={toggleOverlay}
                         setSortByLeastCases={setSortByLeastCases} setSortByMostCases={setSortByMostCases}
                         sortByLeastCases={sortByLeastCases} sortByMostCases={sortByMostCases}
                         mostCasesChecked={mostCasesChecked} setMostCasesChecked={setMostCasesChecked}
                         leastCasesChecked={leastCasesChecked} setLeastCasesChecked={setLeastCasesChecked}
            />
            }
            <View style={{opacity: toggleOverlay ? 0.2 : 1}}>
                <FlatList
                    style={{marginTop: 5}}
                    data={flatListData}
                    renderItem={({item}) => {
                        return <ListRenderItem item={item} navigation={navigation}/>
                    }}
                    keyExtractor={(item: ItemProps) => item.countryInfo._id.toString()}
                    ItemSeparatorComponent={ItemSeparatorComponent}
                    onRefresh={() => {
                        setIsRefresing(true);
                        setFlatListData([...allCountries]);
                        setIsRefresing(false);
                    }}
                    refreshing={isRefreshing}
                />
            </View>
        </SafeAreaView>
    );
};

export default SearchScreen;
