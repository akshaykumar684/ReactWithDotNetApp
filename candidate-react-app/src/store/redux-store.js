import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCandidateData = {
  candidateData: [],
};

const candidateSlice = createSlice({
  name: "candidateData",
  initialState: initialCandidateData,
  reducers: {
    initializeCandidateData(state, action) {
      state.candidateData = action.payload;
    },
    addCandidate(state, action) {
      state.candidateData.push(action.payload);
    },
    deleteCandidate(state, action) {
      state.candidateData = state.candidateData.filter(
        (c) => c.id !== action.payload
      );
    },
  },
});

const initialToastState = {
  isOperationSucessfull: true,
  msg: "",
  showToast: false,
};

const toastUISlice = createSlice({
  name: "toastData",
  initialState: initialToastState,
  reducers: {
    showToast(state, action) {
      state.showToast = true;
      state.isOperationSucessfull = action.payload.isOperationSucessfull;
      state.msg = action.payload.msg;
    },
    hideToast(state, action) {
      state.showToast = false;
    },
  },
});

const store = configureStore({
  reducer: { candidate: candidateSlice.reducer, toast: toastUISlice.reducer },
});

export default store;

export const candidateAction = candidateSlice.actions;
export const toastAction = toastUISlice.actions;
