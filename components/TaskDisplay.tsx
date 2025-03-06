import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

interface TaskItemProps {
  task: {
    id: number;
    task: string;
  };
  editingTask: number | null;
  editTaskText: string;
  setEditTaskText: (text: string) => void;
  setEditingTask: (id: number | null) => void;
  handleUpdateTask: (id: number) => void;
  handleDeleteTask: (id: number) => void;
}

export default function TaskDisplay({
  task,
  editingTask,
  editTaskText,
  setEditTaskText,
  setEditingTask,
  handleUpdateTask,
  handleDeleteTask,
}: TaskItemProps) {
  return (
    <View key={task.id} style={styles.taskContainer}>
      {editingTask === task.id ? (
        <View style={styles.editContainer}>
          <TextInput
            style={styles.input}
            value={editTaskText}
            onChangeText={setEditTaskText}
            placeholder="Edit task"
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleUpdateTask(task.id)}
          >
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.taskRow}>
          <Text style={styles.text}>{task.task}</Text>
          <View style={styles.buttonGroup}>
            <TouchableOpacity
              style={styles.editButton}
              onPress={() => {
                setEditingTask(task.id);
                setEditTaskText(task.task);
              }}
            >
              <Text style={styles.buttonText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => handleDeleteTask(task.id)}
            >
              <Text style={styles.buttonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    width: "100%",
    marginBottom: 10,
  },
  taskRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  editContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
  },
  text: {
    fontSize: 18,
  },
  buttonGroup: {
    flexDirection: "row",
    gap: 10,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 5,
  },
  editButton: {
    backgroundColor: "#007AFF",
    padding: 5,
    borderRadius: 5,
  },
  deleteButton: {
    backgroundColor: "#FF3B30",
    padding: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
