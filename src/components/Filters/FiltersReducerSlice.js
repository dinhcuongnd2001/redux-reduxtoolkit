// const filterState = {
//   search: "",
//   status: "All",
//   priority: [],
// };

// function filterReducer(state = filterState, action) {
//   switch (action.type) {
//     case "Filter/search":
//       return {
//         ...state,
//         search: action.payload,
//       };
//     case "Filter/statusFilterChange":
//       return {
//         ...state,
//         status: action.payload,
//       };
//     case "Filter/priorityChange":
//       return {
//         ...state,
//         priority: action.payload,
//       };
//     default:
//       return state;
//   }
// }

// export default filterReducer;

import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "Filter",
  initialState: {
    search: "",
    status: "All",
    priority: [],
  },
  reducers: {
    searchSelector: (state, action) => {
      state.search = action.payload;
    },
    statusFilterChange: (state, action) => {
      state.status = action.payload;
    },
    priorityChange: (state, action) => {
      state.priority = action.payload;
    },
  },
});
export default filterSlice;
