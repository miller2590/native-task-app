import { View, Text } from "react-native";
import React, { useContext } from "react";
import TaskPostForm from "../components/TaskPostForm";
import { TaskContext } from "../contexts/TaskContext";

const EditTaskScreen = ({ route, navigation }) => {
  const { state, editTask } = useContext(TaskContext);

  const id = route.params.id;
  const task = state.find((task) => task.id === id);

  return (
    <View>
      <Text>{task.content}</Text>
      <TaskPostForm
        initialValues={{ content: task.content }}
        onSubmit={(content) => {
          editTask(id, content, () => navigation.pop());
        }}
      />
    </View>
  );
};

export default EditTaskScreen;
