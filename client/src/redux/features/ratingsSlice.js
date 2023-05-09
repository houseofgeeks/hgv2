import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchLeetCode = createAsyncThunk("home/fetchLeetcode", async () => {
  const { data } = await axios.get(
    "https://leetcode-stats-api.herokuapp.com/sudhanshu__mittal"
  );
  return data.totalSolved;
});

export const fetchCodeforces = createAsyncThunk("home/fetchCodeforces", async () => {
  const { data } = await axios.get(
    "https://codeforces.com/api/user.info?handles=sudhanshu._mittal"
  );
  return data.result[0].rating;
});

const ratingsSlice = createSlice({
  name: "rating",
  initialState: {
    leetCodeSolved: [],
    codeForcesRating: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLeetCode.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLeetCode.fulfilled, (state, action) => {
        state.loading = false;
        state.leetCodeSolved = action.payload;
      })
      .addCase(fetchLeetCode.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchCodeforces.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCodeforces.fulfilled, (state, action) => {
        state.loading = false;
        state.codeForcesRating = action.payload;
      })
      .addCase(fetchCodeforces.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default ratingsSlice.reducer;
