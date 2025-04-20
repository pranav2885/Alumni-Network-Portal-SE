import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "http://localhost:5000/api/threads";

export const fetchThreads = createAsyncThunk("threads/fetchAll", async () => {
  const res = await axios.get(baseURL);
  return res.data;
});

export const createThread = createAsyncThunk("threads/create", async (data) => {
  const res = await axios.post(baseURL, data);
  return res.data;
});

export const likeThread = createAsyncThunk("threads/like", async ({ id, userId }) => {
  const res = await axios.post(`${baseURL}/${id}/like`, { userId });
  return res.data;
});

export const addComment = createAsyncThunk("threads/comment", async ({ id, content, author }) => {
  const res = await axios.post(`${baseURL}/${id}/comment`, { content, author });
  return res.data;
});

const threadSlice = createSlice({
  name: "threads",
  initialState: {
    items: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchThreads.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchThreads.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(createThread.fulfilled, (state, action) => {
        state.items.unshift(action.payload);
      })
      .addCase(likeThread.fulfilled, (state, action) => {
        const index = state.items.findIndex(t => t._id === action.payload._id);
        if (index !== -1) state.items[index] = action.payload;
      })
      .addCase(addComment.fulfilled, (state, action) => {
        const index = state.items.findIndex(t => t._id === action.payload._id);
        if (index !== -1) state.items[index] = action.payload;
      });
  },
});

export default threadSlice.reducer;
