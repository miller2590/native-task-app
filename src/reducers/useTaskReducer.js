const taskReducer = (state, action) => {
  switch (action.type) {
    case "add_task":
      return [
        { content: action.payload, id: Math.floor(Math.random() * 9999) },
        ...state,
      ];
    case "remove_task":
      return state.filter((task) => task.id !== action.payload);
    default:
      return state;
  }
};

export default taskReducer;
