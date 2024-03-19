import { createSlice, nanoid } from "@reduxjs/toolkit";
//initial state of store/// initail state can be an array or an objects
const initialState = {
  todos: [{ id: 1, text: "hello world" }],
};

//create slice...
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo)
    },
    removeTodo: (state, action) => {
        state.todos=state.todos.filter((todo)=>
todo.id!==action.payload
        )
    },
    editTodo: (state, action) => {
        const { id, newText } = action.payload;
        const todoToEdit = state.todos.find((todo) => todo.id === id);
        if (todoToEdit) {
          todoToEdit.text = newText;
        }
      },
  },
});
//export functionality
//this will work for component....
export const {addTodo, removeTodo, editTodo} =todoSlice.actions
//export whole for store.js
export default todoSlice.reducer