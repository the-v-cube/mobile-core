import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "rgb(240, 230, 255)",
        padding: 20,
	},
	
	text: {
		color: "black",
		fontWeight: "bold",
		textAlign: "center",
		marginBottom: 5,
	},

	infoText: {
		backgroundColor: "rgb(122, 158, 255)",
		padding: 5,
	},

	textInput: {
		height: 40,
		margin: 12,
		padding: 10,
		borderWidth: 1,
	},

	switchContainer: {
		flexDirection: "column",
		alignItems: "center",
		backgroundColor: "rgb(68, 62, 130)"
	},

	switchRow: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		width: "100%",
		padding: 5,
	},

	switchRowText: {
		color: "rgb(255, 255, 255)",
	},
});