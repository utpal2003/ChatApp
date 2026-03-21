import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    suggested: [],
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setSuggested: (state, action) => {
      state.suggested = action.payload;
    },
  },
});

export const { setUsers, setSuggested } = userSlice.actions;
export default userSlice.reducer;