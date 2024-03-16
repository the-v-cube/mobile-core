import { useState } from "react";
import { View, Text, Alert, TextInput, Switch, SafeAreaView, ScrollView } from "react-native";

import { styles } from "../styles/Basic";

import Spacer from "../components/Spacer";

const alert = () => {
	Alert.alert("Psst!", "This feature doesn't work at the moment. Check the repository for the latest build!", [
		{
			text: "OK",
			onPress: () => console.warn(`mc-relay-control: invalid action informed`)
		}
	])
}

export default function ButtonScreen() {
	const [amount, setAmount] = useState("");
	const [on, setOn] = useState([]);

	const handleToggle = (index) => {
		setOn(previousOn => {
			const newOn = [...previousOn];
			newOn[index] = !newOn[index];
			return newOn;
		});
	}

    return (
        <SafeAreaView style={styles.container}>
			<ScrollView>		
				<Text style={styles.infoText}>
					The `handleToggle` function handles switching on and off of each switch.
				</Text>
				<TextInput
					style={styles.textInput}
					placeholder="How many switches do you have?"
					keyboardType="numeric"
					value={amount}
					onChangeText={setAmount}
				/>
				<Spacer size={200} horizontal />
				<View style={styles.switchContainer}>
					{Array.from({length: Number(amount)}, (_, x) =>
						<View key={x} style={styles.switchRow}>
							<Text style={styles.switchRowText}>Switch {x+1}</Text>
							<Switch
								value={on[x] || false}
								onValueChange={alert}
							/>
						</View>
					)}
				</View>
			</ScrollView>
		</SafeAreaView>
    )
};