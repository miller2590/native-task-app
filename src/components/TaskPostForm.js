import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import React, { useState } from "react";

const TaskPostForm = ({ onSubmit, initialValues = { content: "" } }) => {
  const [content, setContent] = useState(initialValues.content);

  return (
    <View>
      <Text style={styles.lable}>Enter Task: </Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}
      ></TextInput>
      <Button title="Save Task" onPress={() => onSubmit(content)} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  lable: {
    fontSize: 20,
    marginBottom: 15,
    marginLeft: 5,
  },
});

export default TaskPostForm;
