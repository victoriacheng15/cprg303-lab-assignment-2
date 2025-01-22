import { StyleSheet, View, Text, FlatList } from "react-native";

export default function Fruits() {
	return (
		<View style={styles.container}>
			<FlatList
				data={[{ key: "Apple" }, { key: "Orange" }, { key: "Mango" }]}
				renderItem={({ item }) => <Text>{item.key}</Text>}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
