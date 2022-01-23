const taskReducer = (state, action) => {
  switch (action.type) {
    case "add_task":
      return [
        { content: action.payload, id: Math.floor(Math.random() * 9999) },
        ...state,
      ];
    case "remove_task":
      return state.filter((task) => task.id !== action.payload);
    case "edit_task":
      return state.map((task) => {
        return task.id === action.payload.id ? action.payload : task;
      });
    default:
      return state;
  }
};

export default taskReducer;
