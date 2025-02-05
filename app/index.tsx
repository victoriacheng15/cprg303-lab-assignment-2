import { StyleSheet, View, Text, Button } from "react-native";
import { router } from "expo-router";
import Fruits from "../components/fruits";

export default function App() {
	return (
		<View style={styles.container}>
			<Text>Welcome to this app</Text>
			<Fruits />
			<Button title="Lab 3" onPress={() => router.push("/lab3")} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		gap: 20,
		padding: 50,
	},
});
