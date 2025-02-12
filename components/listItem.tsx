import { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

type Props = {
	location: string;
	price: number;
	temperature: string;
	id: number;
	onSelect: (id: number, isSelected: boolean) => void;
};
export default function ListItem({
	location,
	price,
	temperature,
	id,
	onSelect,
}: Props) {
	const [isSelected, setIsSelected] = useState(false);

	function handlePress() {
		const newSelectState = !isSelected;
		setIsSelected(newSelectState);
		onSelect(id, newSelectState);
	}

	return (
		<TouchableOpacity
			style={[styles.listItem, isSelected && styles.selectedItem]}
			onPress={handlePress}
		>
			<View style={styles.contentWrapper}>
				<Text style={styles.listTitle}>{location}</Text>
				<Text style={styles.listText}>Price: ${price}</Text>
				<Text style={styles.listText}>
					Average Yearly Temperature: {temperature}
				</Text>
			</View>
			{isSelected && <Text style={styles.checkmark}>{"\u2705"}</Text>}
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	listItem: {
		marginBlock: 16,
		flexDirection: "row",
		alignItems: "center",
		padding: 16,
		borderRadius: 8,
		backgroundColor: "#fff",
	},
	selectedItem: {
		backgroundColor: "#f0fff0",
	},
	contentWrapper: {
		flex: 1,
		gap: 5,
	},
	listTitle: {
		fontSize: 20,
		fontWeight: "bold",
	},
	listText: {
		fontSize: 16,
	},
	checkmark: {
		color: "#2ecc71",
		fontSize: 24,
		fontWeight: "bold",
	},
});
