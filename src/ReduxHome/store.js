// import { createStore } from "redux";
// import rootReducer from "./Reduce";
// import { composeWithDevTools } from "redux-devtools-extension";

// const composedEnhancers = composeWithDevTools();
// const store = createStore(rootReducer, composedEnhancers);

import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "../components/Filters/FiltersReducerSlice";
import todoSlice from "../components/TodoList/TodoSlice";

const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    todolist: todoSlice.reducer,
  },
});

export default store;
