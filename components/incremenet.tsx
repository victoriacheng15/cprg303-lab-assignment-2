import { Button } from "react-native";

type OnIncrement = {
	onIncrement: () => void;
};

export default function Increment({ onIncrement }: OnIncrement) {
	return <Button onPress={onIncrement} title="+" />;
}
