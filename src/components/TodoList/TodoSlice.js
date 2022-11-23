// const todoState = [];

// function todoReducer(state = todoState, action) {
//   switch (action.type) {
//     case "TodoList/add":
//       return [...state, action.payload];
//     case "TodoList/update":
//       const newState = state.map((element) => {
//         if (element.id === action.payload.id) {
//           element.complete = action.payload.complete;
//         }
//         return element;
//       });
//       return newState;
//     default:
//       return state;
//   }
// }

// export default todoReducer;

import { createSlice, AsyncThunkAction } from "@reduxjs/toolkit";
const todoSlice = createSlice({
  name: "TodoList",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    update: (state, action) => {
      state.forEach((each) => {
        if (each.id === action.payload.id) {
          each.complete = action.payload.complete;
          // console.log()
        }
      });
    },
  },
});

export default todoSlice;

// export const AddToDos = (todo) => {
//   return function AddToDoThunk(dispatch, getState) {
//     console.log("Prev State:", getState());
//     todo.name = "da duoc upDate";
//     // console.log(todo);
//     dispatch(todoSlice.actions.add(todo));
//     console.log("after State: ", getState());
//   };
// };
