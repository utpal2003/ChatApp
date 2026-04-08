import { createSlice } from "@reduxjs/toolkit";
import { CURRENT_USER_ID } from "./userSlice";

const initialState = {
  messages: [
    {
      _id: "m1",
      chatId: "c1",
      sender: "u2",
      text: "Hey bro!",
      status: "seen",
    },
    {
      _id: "m2",
      chatId: "c1",
      sender: "u1",
      text: "Hello!",
      status: "seen",
    },
    {
      _id: "m3",
      chatId: "c2",
      sender: "u3",
      text: "Are you coming?",
      status: "delivered",
    },
  ],
};

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    // ✅ SEND MESSAGE
    sendMessage: (state, action) => {
      const newMsg = {
        _id: Date.now().toString(),
        chatId: action.payload.chatId,
        sender: CURRENT_USER_ID,
        text: action.payload.text,
        status: "sent",
        createdAt: new Date().toISOString(),
      };

      state.messages.push(newMsg);
    },

    // ✅ RECEIVE MESSAGE (socket/backend)
    receiveMessage: (state, action) => {
      state.messages.push(action.payload);
    },

    // ✅ ADD MESSAGE (for UI usage)
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },

    // ✅ MARK AS SEEN
    markAsSeen: (state, action) => {
      state.messages = state.messages.map((msg) =>
        msg.chatId === action.payload
          ? { ...msg, status: "seen" }
          : msg
      );
    },
  },
});

// ✅ EXPORT ACTIONS
export const {
  sendMessage,
  receiveMessage,
  addMessage,
  markAsSeen,
} = messageSlice.actions;

// ✅ EXPORT REDUCER
export default messageSlice.reducer;