import { configureStore } from "@reduxjs/toolkit";
import candidateReducer from "./candidate-State";
import toastReducer from "./toast-State";

const store = configureStore({
  reducer: { candidate: candidateReducer, toast: toastReducer },
});

export default store;
