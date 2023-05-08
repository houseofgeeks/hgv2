import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProjectData = createAsyncThunk(
  "project/fetchProjectData",
  async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URI}/api/projects/getallprojects`
    );
    return response.data;
  }
);

const projectSlice = createSlice({
  name: "project",
  initialState: {
    projectData: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjectData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProjectData.fulfilled, (state, action) => {
        state.loading = false;
        state.projectData = action.payload;
      })
      .addCase(fetchProjectData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default projectSlice.reducer;
