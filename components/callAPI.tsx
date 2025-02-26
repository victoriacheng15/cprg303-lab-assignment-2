import { useState, useEffect } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

interface IPost {
	id: number;
	title: string;
	body: string;
}

export default function CallAPI() {
	const [post, setPost] = useState<IPost>();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<Error | null>();
	const [search, setSearch] = useState("");

	async function fetchPost() {
		const url = `https://jsonplaceholder.typicode.com/posts/${search}`;
		try {
			setLoading(true);
			const response = await fetch(url);

			if (!response.ok) {
				throw new Error("Something went wrong");
			}

			const data = await response.json();
			setPost(data);
			setError(null);
		} catch (error) {
			setError(error as Error);
			setPost(undefined);
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		fetchPost();
	}, []);

	return (
		<View style={styles.container}>
			<Text style={styles.heading}>Call API</Text>
			<TextInput
				style={styles.input}
				value={search}
				onChangeText={setSearch}
				placeholder="Enter post ID"
			/>
			<Button title="Fetch Post" onPress={fetchPost} />
			{loading && <Text>Loading...</Text>}
			{error && <Text style={styles.error}>Error: {error.message}</Text>}
			{post && search.length > 0 && (
				<View style={styles.postContainer}>
					<Text style={styles.title}>Title:</Text>
					<Text style={styles.body}>{post.title}</Text>
					<Text style={styles.title}>Body:</Text>
					<Text style={styles.body}>{post.body}</Text>
				</View>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
		gap: 10,
	},
	heading: {
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 20,
	},
	input: {
		borderWidth: 1,
		borderColor: "#ccc",
		padding: 20,
		width: 200,
		borderRadius: 10,
	},
	postContainer: {
		padding: 16,
		borderWidth: 1,
		borderColor: "#ccc",
		marginBottom: 20,
		gap: 10,
		borderRadius: 10,
	},
	title: {
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 10,
	},
	body: {
		fontSize: 16,
		lineHeight: 24,
	},
	error: {
		color: "red",
		fontSize: 16,
	},
});
