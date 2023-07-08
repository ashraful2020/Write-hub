import { configureStore } from "@reduxjs/toolkit";
import postSlice from "../features/postSlice";
import singlePostSlice from "../features/singlePostSlice";

const store = configureStore({
  reducer: {
    posts: postSlice,
    singlePost: singlePostSlice,
  },
});
export default store;
