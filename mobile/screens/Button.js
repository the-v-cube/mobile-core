import { View, Text, Button, Alert } from "react-native";

import { styles } from "../styles/Basic";

const alert = () => {
	Alert.alert("Psst!", "This feature doesn't work at the moment. Check the repository for the latest build!", [
		{
			text: "OK",
			onPress: () => console.log("mc-relay-control invalid action informed")
		}
	])
}

export default function ButtonScreen() {
    return (
        <View style={styles.container}>
			<Text style={styles.text}>
				Click the button below to control the on / off state of the relay!
			</Text>
			<Button title="Switch" onPress={alert} />
		</View>
    )
};