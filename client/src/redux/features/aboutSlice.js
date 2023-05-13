import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWingsData = createAsyncThunk(
  "about/fetchWingsData",
  async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URI}/api/wings`
    );
    return response.data;
  }
);

const aboutSlice = createSlice({
  name: "about",
  initialState: {
    wingsData: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWingsData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWingsData.fulfilled, (state, action) => {
        state.loading = false;
        state.wingsData = action.payload;
      })
      .addCase(fetchWingsData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default aboutSlice.reducer;
