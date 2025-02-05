import React from "react";
import { Button, Image, Text, View } from "react-native";
import { router } from "expo-router";
import { fruitStyles } from "../utils/FruitStyles";

export default function ApplePage() {
	return (
		<View>
			<Text>Orange image</Text>
			<Image
				source={{
					uri: "https://www.tastingtable.com/img/gallery/are-oranges-named-after-the-color/intro-1666984048.jpg",
				}}
				style={fruitStyles.image}
			/>
		</View>
	);
}
