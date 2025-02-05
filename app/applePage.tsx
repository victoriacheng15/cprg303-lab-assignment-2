import React from "react";
import { Image, View, Text, Button } from "react-native";
import { fruitStyles } from "../utils/FruitStyles";
import { useRouter } from "expo-router";

export default function ApplePage() {
	const router = useRouter();
	return (
		<View>
			<Text>Apple image</Text>
			<Image
				source={{
					uri: "https://th.bing.com/th/id/OIP.nKkm0wnm9J-Ko2rny3mAzAHaIo?w=200&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
				}}
				style={fruitStyles.image}
			/>
		</View>
	);
}
