import { StyleSheet, View, Button } from "react-native";
import { router } from "expo-router";

export default function Fruits() {
	const FruitList = ["apple", "orange", "mango"];
	return (
		<View style={styles.container}>
			{FruitList.map((fruit) => (
				<Button
					title={`${fruit}`}
					key={fruit}
					onPress={() => router.push(`/${fruit}Page`)}
				/>
			))}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
