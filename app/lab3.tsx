import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Increment from "../components/incremenet";
import Decrement from "../components/decrement";

export default function Lab3() {
	const [count, setCount] = useState(0);

	return (
		<View style={styles.container}>
			<Text>Lab 3</Text>
			<Text>Count: {count}</Text>
			<Increment onIncrement={() => setCount(count + 1)} />
			<Decrement onDecrement={() => setCount(count - 1)} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		gap: 10,
		padding: 50,
	},
});
