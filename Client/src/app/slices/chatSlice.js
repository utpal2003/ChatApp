import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// 🔥 GET ALL CHATS
export const fetchChats = createAsyncThunk(
  "chat/fetchChats",
  async () => {
    const { data } = await axios.get("/api/chat");
    return data;
  }
);

// 🔥 GET SINGLE CHAT
export const fetchSingleChat = createAsyncThunk(
  "chat/fetchSingleChat",
  async (id) => {
    const { data } = await axios.get(`/api/chat/${id}`);
    return data;
  }
);

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    chats: [],
    selectedChat: null,
  },
  reducers: {
    setSelectedChat: (state, action) => {
      state.selectedChat = action.payload;
    },

    // 🔥 UPDATE LAST MESSAGE + UNREAD COUNT
    updateLastMessage: (state, action) => {
      const msg = action.payload;

      const chat = state.chats.find(c => c._id === msg.chatId);
      if (chat) {
        chat.lastMessage = msg;
        chat.updatedAt = new Date();

        if (!msg.isMine) {
          chat.unreadCount = (chat.unreadCount || 0) + 1;
        }
      }
    },

    // 🔥 CLEAR UNREAD
    clearUnread: (state, action) => {
      const chat = state.chats.find(c => c._id === action.payload);
      if (chat) chat.unreadCount = 0;
    }
  },

  extraReducers: (builder) => {
    builder.addCase(fetchChats.fulfilled, (state, action) => {
      state.chats = action.payload;
    });

    builder.addCase(fetchSingleChat.fulfilled, (state, action) => {
      state.selectedChat = action.payload;
    });
  },
});

export const { setSelectedChat, updateLastMessage, clearUnread } = chatSlice.actions;
export default chatSlice.reducer;