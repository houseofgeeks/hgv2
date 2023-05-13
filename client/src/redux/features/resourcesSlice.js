import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWingsLevelData = createAsyncThunk(
  "resources/fetchWingsLevelData",
  async (levelId) => {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URI}/api/wings/${levelId}`
    );
    return response.data;
  }
);

const resourcesSlice = createSlice({
  name: "resources",
  initialState: {
    wingsLevelData: {},
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWingsLevelData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWingsLevelData.fulfilled, (state, action) => {
        state.loading = false;
        state.wingsLevelData = action.payload;
      })
      .addCase(fetchWingsLevelData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default resourcesSlice.reducer;
