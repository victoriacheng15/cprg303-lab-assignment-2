import { StyleSheet, View, Text } from "react-native";
import Fruits from "../components/fruits";

export default function App() {
	return (
		<View style={styles.container}>
			<Text>Welcome to this app</Text>
			<Fruits />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		padding: 50,
	},
});
