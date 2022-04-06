import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: "" };

const options = {
  name: "query",
  initialState,
  reducers: {
    updateQuery: (state, action) => {
      state.value = action.payload;
    },
  },
};

export const selectQuery = (state) => state.query;

const querySlice = createSlice(options);
export const { updateQuery } = querySlice.actions;
export default querySlice.reducer;
