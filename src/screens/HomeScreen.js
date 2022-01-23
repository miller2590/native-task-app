import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";

const HomeScreen = ({ navigation }) => {
  const { state } = useContext(TaskContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tasks</Text>
      <FlatList
        data={state}
        keyExtractor={(task) => task.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity>
              <Text>- {item.content}</Text>
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
});

export default HomeScreen;
