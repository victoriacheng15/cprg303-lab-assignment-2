import { useState, useEffect } from "react";
import {
	createTask,
	getTasks,
	updateTask,
	deleteTask,
} from "../lib/supabase_crud";

interface Task {
	id: number;
	createdAt: string;
	task: string;
}

export function useTaskCrud() {
	const [tasks, setTasks] = useState<Task[]>([]);
	const [newTask, setNewTask] = useState("");
	const [editingTask, setEditingTask] = useState<number | null>(null);
	const [editTaskText, setEditTaskText] = useState("");

	async function fetchTasks() {
		const data = await getTasks();
		setTasks(data);
	}

	async function handleAddTask() {
		if (newTask.trim()) {
			try {
				const newTaskData = await createTask(newTask);
				setTasks([...tasks, newTaskData]);
				setNewTask("");
			} catch (error) {
				console.error("Error adding task:", error);
			}
		}
	}

	async function handleUpdateTask(id: number) {
		if (editTaskText.trim()) {
			try {
				await updateTask(id, editTaskText);
				const updatedTasks = tasks.map((task) =>
					task.id === id ? { ...task, task: editTaskText } : task,
				);
				setTasks(updatedTasks);
				setEditingTask(null);
				setEditTaskText("");
			} catch (error) {
				console.error("Error updating task:", error);
			}
		}
	}

	async function handleDeleteTask(id: number) {
		try {
			await deleteTask(id);
			setTasks(tasks.filter((task) => task.id !== id));
		} catch (error) {
			console.error("Error deleting task:", error);
		}
	}

	useEffect(() => {
		fetchTasks();
	}, []);

	return {
		tasks,
		newTask,
		setNewTask,
		editingTask,
		editTaskText,
		setEditTaskText,
		setEditingTask,
		handleAddTask,
		handleUpdateTask,
		handleDeleteTask,
	};
}
