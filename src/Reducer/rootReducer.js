import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../components/HomePage/counterSlice";
const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
export default store;
