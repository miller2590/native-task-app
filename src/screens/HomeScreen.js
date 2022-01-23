import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import React, { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";

const HomeScreen = ({ navigation }) => {
  const { state, removeTask } = useContext(TaskContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tasks</Text>
      <FlatList
        data={state}
        keyExtractor={(task) => task.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={styles.taskItem}>
              <Text>- {item.content}</Text>
              <TouchableOpacity onPress={() => removeTask(item.id)}>
                <FontAwesome name="remove" size={24} color="black" />
              </TouchableOpacity>
            </TouchableOpacity>
          );
        }}
      />

      <Button title="add task" onPress={() => navigation.navigate("Add")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  taskItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    marginVertical: 5,
  },
});

export default HomeScreen;
