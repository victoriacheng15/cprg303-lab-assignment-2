import { useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import ListItem from "../components/listItem";
import vacationDestinations from "../utils/itemList";
export default function Lab4() {
	const [selectedItems, setSelectedItems] = useState<string[]>([]);

	function handleSelect(id: number, isSelected: boolean) {
		const location =
			vacationDestinations.find((item) => item.id === id)?.location || "";

		if (isSelected) {
			setSelectedItems([...selectedItems, location]);
		} else {
			setSelectedItems(selectedItems.filter((loc) => loc !== location));
		}
	}

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Lab 4 - Handleing Lists and Object</Text>
			<FlatList
				data={vacationDestinations}
				renderItem={({
					item: { id, location, price, average_yearly_temperature },
				}) => (
					<ListItem
						location={location}
						price={price}
						temperature={average_yearly_temperature}
						id={id}
						onSelect={handleSelect}
					/>
				)}
			/>
			<View style={styles.selectedContainer}>
				<Text style={styles.title}>Selected Items</Text>
				<FlatList
					data={selectedItems}
					renderItem={({ item: location }) => (
						<Text style={styles.selectedLocation}>{location}</Text>
					)}
					keyExtractor={(item) => item.toString()}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		gap: 20,
		padding: 20,
	},
	selectedContainer: {
		backgroundColor: "#fff",
		padding: 16,
		borderRadius: 8,
		marginBottom: 16,
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
		textAlign: "center",
	},
	selectedLocation: {
		fontSize: 16,
		marginBottom: 8,
	},
});
