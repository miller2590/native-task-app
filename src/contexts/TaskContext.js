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

  return (
    <TaskContext.Provider value={{ state, addNewTask }}>
      {children}
    </TaskContext.Provider>
  );
};
