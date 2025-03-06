import { useEffect, useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import {
  getVisitors,
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../lib/supabase_crud";
import AddTaskForm from "../components/AddTaskForm";
import TaskDisplay from "../components/TaskDisplay";

interface Visitor {
  id: number;
  createdAt: string;
  visitor_name: string;
}

interface Task {
  id: number;
  createdAt: string;
  task: string;
}

export default function Lab6() {
  const [visitors, setVisitors] = useState<Visitor[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");
  const [editingTask, setEditingTask] = useState<number | null>(null);
  const [editTaskText, setEditTaskText] = useState("");

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
          task.id === id ? { ...task, task: editTaskText } : task
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
    async function fetchVisitors() {
      const data = await getVisitors();
      setVisitors(data);
    }

    async function fetchTasks() {
      const data = await getTasks();
      setTasks(data);
    }

    fetchVisitors();
    fetchTasks();
  }, []);
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
