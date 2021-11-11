import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
  candidateId: undefined,
};

const candidateModalStateSlice = createSlice({
  name: "candidateModalForm",
  initialState,
  reducers: {
    showModal(state, action) {
      state.show = true;
      state.candidateId = action.payload;
    },
    hideModal(state) {
      state.show = false;
    },
  },
});

export const candidateModalAction = candidateModalStateSlice.actions;

export default candidateModalStateSlice.reducer;
