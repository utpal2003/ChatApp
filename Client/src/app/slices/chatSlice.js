import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chats: [
    {
      _id: "c1",
      users: ["u1", "u2"],
      lastMessage: { text: "Hey bro!", sender: "u2" },
      unreadCount: 2,
      updatedAt: new Date().toISOString(),
    },
    {
      _id: "c2",
      users: ["u1", "u3"],
      lastMessage: { text: "Hello Priya", sender: "u1" },
      unreadCount: 0,
      updatedAt: new Date().toISOString(),
    },
    {
      _id: "c3",
      users: ["u1", "u4"],
      lastMessage: { text: "Let's meet", sender: "u4" },
      unreadCount: 1,
      updatedAt: new Date().toISOString(),
    },
  ],

  selectedChat: null,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setSelectedChat: (state, action) => {
      state.selectedChat = action.payload;

      if (!action.payload) return;

      const chat = state.chats.find(
        (c) => c._id === action.payload._id
      );

      if (chat) chat.unreadCount = 0;
    },
  },
});

export const { setSelectedChat } = chatSlice.actions;
export default chatSlice.reducer;