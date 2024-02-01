import { useEffect } from "react";
import NetInfo from "@react-native-community/netinfo";
import { View, Alert, Text, Button, StyleSheet } from "react-native";

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

	const alert = () => {
		Alert.alert("Psst!", "This feature doesn't work at the moment. Check the repository for the latest build!", [
			{
				text: "OK",
				onPress: () => console.log("mc-relay-control invalid action informed")
			}
		])
	}

	return (
		<View style={styles.container}>
			<Text style={styles.text}>
				Click the button below to control the on / off state of the relay!
			</Text>
			<Button title="Switch" onPress={alert} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: { 
		flex: 1, 
		backgroundColor: "rgb(240, 230, 255)", 
		padding: 65,
	},
	text: {
		color: "black",
		fontWeight: "bold",
		textAlign: "center",
		marginBottom: 5,
	},
})


export default App;