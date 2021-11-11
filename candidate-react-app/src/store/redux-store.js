import { configureStore } from "@reduxjs/toolkit";
import candidateReducer from "./candidate-State";
import toastReducer from "./toast-State";
import candidateModalReducer from "./CandidateModal-State";
const store = configureStore({
  reducer: {
    candidate: candidateReducer,
    toast: toastReducer,
    candidateModal: candidateModalReducer,
  },
});

export default store;
