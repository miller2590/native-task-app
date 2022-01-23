import { View, Text } from "react-native";
import React, { useContext } from "react";
import TaskPostForm from "../components/TaskPostForm";
import { TaskContext } from "../contexts/TaskContext";

const AddTaskScreen = ({ navigation }) => {
  const { addNewTask } = useContext(TaskContext);

  return (
    <View>
      <TaskPostForm
        onSubmit={(content) => {
          addNewTask(content, () => navigation.navigate("Home"));
        }}
      />
    </View>
  );
};

export default AddTaskScreen;
