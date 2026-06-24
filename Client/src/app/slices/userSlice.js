import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";

import api from "../../api/axios";

// GET /api/users/world
export const fetchWorldUsers =
  createAsyncThunk(
    "user/fetchWorldUsers",
    async (_, thunkAPI) => {
      try {
        const { data } =
          await api.get("/users/world");

        return data.users || data;
      } catch (error) {
        return thunkAPI.rejectWithValue(
          error.response?.data?.message ||
            "Failed to fetch users"
        );
      }
    }
  );

const initialState = {
  users: [],
  onlineUsers: [],
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",

  initialState,

  reducers: {
    setOnlineUsers: (
      state,
      action
    ) => {
      state.onlineUsers =
        action.payload;
    },
  },

  extraReducers: (builder) => {
    builder

      .addCase(
        fetchWorldUsers.pending,
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )

      .addCase(
        fetchWorldUsers.fulfilled,
        (state, action) => {
          state.loading = false;
          state.users =
            action.payload;
        }
      )

      .addCase(
        fetchWorldUsers.rejected,
        (state, action) => {
          state.loading = false;
          state.error =
            action.payload;
        }
      );
  },
});

export const {
  setOnlineUsers,
} = userSlice.actions;

export default userSlice.reducer;