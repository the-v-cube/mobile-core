import Ionicons from "@expo/vector-icons/Ionicons";
import NetInfo from "@react-native-community/netinfo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import { useEffect } from "react";
import { Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AboutScreen from "./screens/About";
import ButtonScreen from "./screens/Button";
import CounterScreen from "./screens/Counter";

const Tab = createBottomTabNavigator()

const App = () => {
	useEffect(() => {
		NetInfo.fetch().then(state => { // check for WiFi on loading app
			if (state.type !== "wifi") {
				Alert.alert("No WiFi!", "Please connect to WiFi to use the app.");
			}
		});

		const unsubscribe = NetInfo.addEventListener(state => { // check for WiFi real-time
			if (state.type !== "wifi") {
				Alert.alert("No WiFi!", "Please connect to WiFi to use the app.");
			}
		});

		return () => {
			unsubscribe();
		};
	}, []);

	return (
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen
					name="Button"
					component={ButtonScreen}
					options={{ tabBarIcon: () => <Ionicons name="sparkles" size={20} /> }}
				/>
				<Tab.Screen
					name="About"
					component={AboutScreen}
					options={{ tabBarIcon: () => <MaterialCommunityIcons name="information" size={20} /> }}
				/>
				<Tab.Screen
					name="Counter"
					component={CounterScreen}
					options={{ tabBarIcon: () => <MaterialCommunityIcons name="plus" size={20} /> }}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
}

export default App;