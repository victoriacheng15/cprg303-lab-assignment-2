import { Stack } from "expo-router/stack";

export default function Layout() {
	return (
		<Stack
			screenOptions={{
				headerStyle: {
					backgroundColor: "#0096FF",
				},
				headerTintColor: "#fff",
				headerTitleStyle: {
					fontWeight: "bold",
				},
			}}
		>
			<Stack.Screen name="home" options={{ title: "Home" }} />
			<Stack.Screen name="lab3" options={{ title: "Lab 3" }} />
		</Stack>
	);
}
