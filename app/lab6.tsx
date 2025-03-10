import { StyleSheet, View, Text, ScrollView } from "react-native";
import AddTaskForm from "../components/AddTaskForm";
import TaskDisplay from "../components/TaskDisplay";
import { useTaskCrud } from "../hooks/useTaskCrud";
import { useVisitors } from "../hooks/useVistors";

export default function Lab6() {
	const { visitors } = useVisitors();
	const {
		tasks,
		newTask,
		setNewTask,
		handleAddTask,
		editingTask,
		editTaskText,
		setEditTaskText,
		setEditingTask,
		handleUpdateTask,
		handleDeleteTask,
	} = useTaskCrud();

	return (
		<ScrollView style={styles.scrollView}>
			<View style={styles.container}>
				<Text style={styles.heading}>Welcome to Lab 6</Text>
				<Text style={styles.title}>Visitor:</Text>
				<View style={styles.visitorContainer}>
					{visitors.map((visitor) => (
						<Text style={styles.text} key={visitor.id}>
							{visitor.visitor_name}
						</Text>
					))}
				</View>
				<Text style={styles.title}>Tasks:</Text>
				<AddTaskForm
					newTask={newTask}
					setNewTask={setNewTask}
					handleAddTask={handleAddTask}
				/>
				{tasks.map((task) => (
					<TaskDisplay
						key={task.id}
						task={task}
						editingTask={editingTask}
						editTaskText={editTaskText}
						setEditTaskText={setEditTaskText}
						setEditingTask={setEditingTask}
						handleUpdateTask={handleUpdateTask}
						handleDeleteTask={handleDeleteTask}
					/>
				))}
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	scrollView: {
		flex: 1,
	},
	container: {
		padding: 20,
		alignItems: "center",
		justifyContent: "center",
	},
	visitorContainer: {
		flexDirection: "row",
		justifyContent: "center",
		gap: 16,
		width: "100%",
		borderBottomWidth: 2,
		borderBottomColor: "#000",
		paddingBottom: 15,
		marginBottom: 15,
	},
	heading: {
		fontSize: 24,
		marginBottom: 20,
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
		marginBottom: 10,
	},
	text: {
		fontSize: 18,
		marginBottom: 10,
	},
});
