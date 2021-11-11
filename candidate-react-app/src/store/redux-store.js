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

const store = configureStore({
  reducer: { candidate: candidateSlice.reducer },
});

export default store;

export const candidateAction = candidateSlice.actions;
