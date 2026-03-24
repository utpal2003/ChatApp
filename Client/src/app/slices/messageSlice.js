import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// 🔥 FETCH MESSAGES
export const fetchMessages = createAsyncThunk(
  "message/fetchMessages",
  async (chatId) => {
    const { data } = await axios.get(`/api/message/${chatId}`);
    return data;
  }
);

// 🔥 SEND MESSAGE
export const sendMessage = createAsyncThunk(
  "message/sendMessage",
  async (msg) => {
    const { data } = await axios.post(`/api/message`, msg);
    return data;
  }
);

// 🔥 MARK AS SEEN
export const markAsSeen = createAsyncThunk(
  "message/markAsSeen",
  async (chatId) => {
    await axios.put(`/api/message/seen/${chatId}`);
    return chatId;
  }
);

const messageSlice = createSlice({
  name: "message",
  initialState: {
    messages: [],
  },
  reducers: {
    // 🔥 SOCKET NEW MESSAGE
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },

    // 🔥 UPDATE MESSAGE STATUS
    updateMessageStatus: (state, action) => {
      const { messageId, status } = action.payload;
      const msg = state.messages.find(m => m._id === messageId);
      if (msg) msg.status = status;
    }
  },

  extraReducers: (builder) => {
    builder.addCase(fetchMessages.fulfilled, (state, action) => {
      state.messages = action.payload;
    });

    builder.addCase(sendMessage.fulfilled, (state, action) => {
      state.messages.push(action.payload);
    });

    builder.addCase(markAsSeen.fulfilled, (state, action) => {
      state.messages = state.messages.map(msg =>
        msg.chatId === action.payload
          ? { ...msg, status: "seen" }
          : msg
      );
    });
  },
});

export const { addMessage, updateMessageStatus } = messageSlice.actions;
export default messageSlice.reducer;