import { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { getVisitors, getTasks, createTask } from "../lib/supabase_crud";

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

  const handleAddTask = async () => {
    if (newTask.trim()) {
      try {
        const newTaskData = await createTask(newTask);
        setTasks([...tasks, newTaskData]);
        setNewTask("");
      } catch (error) {
        console.error("Error adding task:", error);
      }
    }
  };

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
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to Lab 6</Text>
      <Text style={styles.title}>Visitor:</Text>
      {visitors.map((visitor) => (
        <Text style={styles.text} key={visitor.id}>
          {visitor.visitor_name}
        </Text>
      ))}
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          value={newTask}
          onChangeText={setNewTask}
          placeholder="Enter new task"
        />
        <TouchableOpacity style={styles.button} onPress={handleAddTask}>
          <Text style={styles.buttonText}>Add Task</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Tasks:</Text>
      {tasks.map((task) => (
        <Text style={styles.text} key={task.id}>
          {task.task}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
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
  formContainer: {
    width: "100%",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
