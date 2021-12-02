import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "../navigation/SearchNavigation";
import {RouteProp} from "@react-navigation/native";

export type ProfileScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'SearchResultScreen'>;
export type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'SearchResultScreen'>;
