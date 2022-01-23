import React, { createContext, useReducer } from "react";
import taskReducer from "../reducers/useTaskReducer";

export const TaskContext = createContext();
const reducer = taskReducer;

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);

  const addNewTask = (newTask, callback) => {
    dispatch({ type: "add_task", payload: newTask });

    if (callback) {
      callback();
    }
  };

  const removeTask = (id) => {
    dispatch({ type: "remove_task", payload: id });
  };

  const editTask = (id, content, callBack) => {
    dispatch({ type: "edit_task", payload: { id, content } });

    if (callBack) {
      callBack();
    }
  };

  return (
    <TaskContext.Provider value={{ state, addNewTask, removeTask, editTask }}>
      {children}
    </TaskContext.Provider>
  );
};
