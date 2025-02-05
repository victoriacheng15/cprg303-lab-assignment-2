import { Button } from "react-native";

type OnDecrement = {
	onDecrement: () => void;
};
export default function Decrement({ onDecrement }: OnDecrement) {
	return <Button onPress={onDecrement} title="-" />;
}
