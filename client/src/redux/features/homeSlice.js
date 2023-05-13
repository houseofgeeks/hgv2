import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAnnouncements = createAsyncThunk(
  "home/fetchAnnouncements",
  async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URI}/api/announcements/all`
    );
    return response.data;
  }
);

export const fetchFeeds = createAsyncThunk("home/fetchFeeds", async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_BACKEND_URI}/api/feeds/all`
  );
  return response.data;
});

const homeSlice = createSlice({
  name: "home",
  initialState: {
    announcements: [],
    feeds: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnnouncements.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAnnouncements.fulfilled, (state, action) => {
        state.loading = false;
        state.announcements = action.payload;
      })
      .addCase(fetchAnnouncements.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchFeeds.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFeeds.fulfilled, (state, action) => {
        state.loading = false;
        state.feeds = action.payload;
      })
      .addCase(fetchFeeds.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default homeSlice.reducer;
