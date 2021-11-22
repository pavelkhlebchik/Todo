import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const selectedTaskSlice = createSlice({
  name: 'selected',
  initialState,
  reducers: {
    selectTask(state, action) {
      state.push(action.payload);
    },
    reset: () => initialState,
  },
});

export const { selectTask } = selectedTaskSlice.actions;
export default selectedTaskSlice.reducer;
