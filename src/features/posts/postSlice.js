import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  entries: localStorage.getItem("entries")
    ? JSON.parse(localStorage.getItem("entries"))
    : [],
};
const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    create: (state, action) => {
      state.entries.push(action.payload);
      localStorage.setItem("entries", JSON.stringify([...state.entries]));
    },
    // update: (state, action) => {
    //   const previousPosts = state.entries.filter(
    //     (entry) => entry.id !== action.payload.id
    //   );
    //   state.entries = [...previousPosts, action.payload];
    // },
    update: (state, action) => {
      state.entries = state.entries.map((entry) =>
        entry.id === action.payload.id ? action.payload : entry
      );
       localStorage.setItem("entries", JSON.stringify([...state.entries]));
    },
    remove: (state, action) => {
      state.entries = state.entries.filter(
        (entry) => entry.id !== action.payload
      );
       localStorage.setItem("entries", JSON.stringify([...state.entries]));
    },
  },
});

export const { create, update, remove } = postSlice.actions;
export default postSlice.reducer;
