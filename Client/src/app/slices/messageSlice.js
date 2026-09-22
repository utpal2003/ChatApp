import { createSlice } from "@reduxjs/toolkit";

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
    // ===============================
    // Send Message
    // ===============================
    sendMessage: (state, action) => {
      const newMsg = {
        _id: Date.now().toString(),
        chatId: action.payload.chatId,

        // Sender comes from payload
        sender: action.payload.sender,

        text: action.payload.text,

        status: "sent",

        createdAt: new Date().toISOString(),
      };

      state.messages.push(newMsg);
    },

    // ===============================
    // Receive Message
    // ===============================
    receiveMessage: (state, action) => {
      state.messages.push(action.payload);
    },

    // ===============================
    // Add Message
    // ===============================
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },

    // ===============================
    // Mark Messages Seen
    // ===============================
    markAsSeen: (state, action) => {
      state.messages = state.messages.map((msg) =>
        msg.chatId === action.payload
          ? {
              ...msg,
              status: "seen",
            }
          : msg
      );
    },
  },
});

export const {
  sendMessage,
  receiveMessage,
  addMessage,
  markAsSeen,
} = messageSlice.actions;

export default messageSlice.reducer;


