import { StyleSheet, View, Text } from "react-native";
import CallAPI from "../components/callAPI";

export default function Lab5() {
	return (
		<View style={styles.container}>
			<Text style={styles.heading}>Welcome to Lab 5</Text>
			<CallAPI />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 20,
		alignItems: "center",
		justifyContent: "center",
	},
	heading: {
		fontSize: 24,
		marginBottom: 20,
	},
});
