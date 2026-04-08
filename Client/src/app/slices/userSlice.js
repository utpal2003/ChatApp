import { createSlice } from "@reduxjs/toolkit";

// ✅ GLOBAL CURRENT USER
export const CURRENT_USER_ID = "u1";

const initialState = {
  currentUser: {
    _id: "u1",
    name: "Utpal",
    email: "utpal@gmail.com",
    profilePic: "https://i.pravatar.cc/150?img=1",
  },

  users: [
    {
      _id: "u2",
      name: "Rahul",
      email: "rahul@gmail.com",
      profilePic: "https://i.pravatar.cc/150?img=2",
    },
    {
      _id: "u3",
      name: "Priya",
      email: "priya@gmail.com",
      profilePic: "https://i.pravatar.cc/150?img=3",
    },
    {
      _id: "u4",
      name: "Amit",
      email: "amit@gmail.com",
      profilePic: "https://i.pravatar.cc/150?img=4",
    },
  ],

  onlineUsers: ["u2", "u4"],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;