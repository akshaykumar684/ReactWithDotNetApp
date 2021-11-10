import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCandidateData = [
  {
    fullName: "Akshay",
    mobile: "8873473129",
    email: "akshaykumar684@gmail.com",
    age: 14,
    address: "Bangalore",
  },
  {
    fullName: "Abhinav",
    mobile: "8873473129",
    email: "abhinav@gmail.com",
    age: 14,
    address: "Bangalore",
  },
  {
    fullName: "Shashank",
    mobile: "8873473129",
    email: "Shashank@gmail.com",
    age: 14,
    address: "Bangalore",
  },
];

const candidateSlice = createSlice({
  name: "candidateData",
  initialState: initialCandidateData,
  reducers: {
    addCandidate(state, action) {
      state.push(action.payload);
    },
  },
});

const store = configureStore({
  reducer: { candidate: candidateSlice.reducer },
});

export default store;

export const candidateAction = candidateSlice.actions;
