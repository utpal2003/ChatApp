import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    {
      _id: "u1",
      fullName: "Alex Thompson",
      status: "Focusing",
      bio: "Senior Digital Designer specializing in high-fidelity interface design and design systems for enterprise-grade applications.",
      email: "alex.design@enterprise.com",
      phone: "+91 9876543210",
      profilePic: "https://i.pravatar.cc/150?img=1",
    },
  ],

  currentUser: {
    _id: "u1",
    fullName: "Alex Thompson",
    status: "Focusing",
    bio: "Senior Digital Designer specializing in high-fidelity interface design and design systems for enterprise-grade applications.",
    email: "alex.design@enterprise.com",
    phone: "+91 9876543210",
    profilePic: "https://i.pravatar.cc/150?img=1",
  },
};

const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    createUser: (state, action) => {
      const newUser = {
        _id: Date.now().toString(),
        ...action.payload,
      };
      state.users.push(newUser);
      state.currentUser = newUser;
    },

    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },

    updateUser: (state, action) => {
      const { id, data } = action.payload;

      const user = state.users.find((u) => u._id === id);
      if (user) {
        Object.assign(user, data);
      }

      //  ALSO UPDATE CURRENT USER
      if (state.currentUser?._id === id) {
        state.currentUser = {
          ...state.currentUser,
          ...data,
        };
      }
    },
  },
});

export const { createUser, setCurrentUser, updateUser } =
  userProfileSlice.actions;

export default userProfileSlice.reducer;