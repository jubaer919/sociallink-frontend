import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  posts: [],
  error: null
}

export const featchposts = createAsyncThunk("posts/featchposts", async () => {
  try {
    const response = await axios.get('http://localhost:5000/posts')
    return response.data;
  } catch (error) {
    throw error
  }
})


const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(featchposts.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(featchposts.fulfilled, (state, action) => {
        state.loading = false
        state.posts = action.payload
      })
      .addCase(featchposts.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  }
})

export default postSlice.reducer;