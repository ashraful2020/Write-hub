import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: "idle",
  error: null,
  post: {},
  successMessage: null,
};
// category post section fetch category
export const fetchPostById = createAsyncThunk(
  "post/fetchPostById",
  async (id) => {
    const res = await axios.get(`https://write-hub.herokuapp.com/posts/${id}`);
    return res.data;
  }
);
//
export const postBlogInDatabase = createAsyncThunk(
  "post/postBlogInDatabase",
  async (formData) => {
    const res = await axios.post(
      "https://write-hub.herokuapp.com/posts",
      formData
    );
    console.log("🚀 ~ file: singlePostSlice.js ~ line 22 ~ res", res);
    return res.data;
  }
);
export const postQuoteInDatabase = createAsyncThunk(
  "post/postQuoteInDatabase",
  async (quote) => {
    const res = await axios.post(
      "https://write-hub.herokuapp.com/quote",
      quote
    ); 
    console.log("🚀 ~ file: singlePostSlice.js ~ line 37 ~ res", res)
    return res.data;
  }
);
export const singlePostSlice = createSlice({
  name: "postById",
  initialState,
  reducers: {},
  extraReducers: {
    // id post section fetch ID
    [fetchPostById.pending]: (state) => {
      state.status = "loading";
    },
    [fetchPostById.fulfilled]: (state, action) => {
      state.status = "success";
      state.post = action.payload;
    },
    [fetchPostById.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },

    // post blog to db
    [postBlogInDatabase.pending]: (state) => {
      state.status = "loading";
    },
    [postBlogInDatabase.fulfilled]: (state, action) => {
      state.status = "success";
      console.log(action.payload.message);
      state.successMessage = action.payload;
    },
    [postBlogInDatabase.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
    // post Quote to db
    [postQuoteInDatabase.pending]: (state) => {
      state.status = "loading";
    },
    [postQuoteInDatabase.fulfilled]: (state, action) => {
      state.status = "success";
      console.log(action.payload.message);
      state.successMessage = action.payload;
    },
    [postQuoteInDatabase.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export default singlePostSlice.reducer;
