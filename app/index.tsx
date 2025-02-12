import {
	StyleSheet,
	View,
	Text,
	Button,
	FlatList,
	TouchableOpacity,
} from "react-native";
import { router } from "expo-router";
import Fruits from "../components/fruits";

export default function App() {
	const links = [
		{
			id: 3,
			name: "Lab 3",
			link: "/lab3",
		},
		{
			id: 4,
			name: "Lab 4",
			link: "/lab4",
		},
	];
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Welcome to this app</Text>
			<Fruits />
			<View style={styles.listContainer}>
				<FlatList
					data={links}
					renderItem={({ item: { name, link } }) => (
						<TouchableOpacity
							style={styles.button}
							onPress={() => router.push(link)}
						>
							<Text style={styles.buttonText}>{name}</Text>
						</TouchableOpacity>
					)}
					keyExtractor={({ id }) => id.toString()}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		gap: 20,
		padding: 50,
	},
	title: {
		fontSize: 24,
		textAlign: "center",
		fontWeight: "bold",
	},
	listContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	button: {
		backgroundColor: "#007AFF",
		padding: 10,
		borderRadius: 5,
		margin: 5,
		width: 100,
	},
	buttonText: {
		color: "white",
		textAlign: "center",
		fontSize: 16,
	},
});
