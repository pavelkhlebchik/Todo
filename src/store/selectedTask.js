import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const selectedTaskSlice = createSlice({
  name: 'selected',
  initialState,
  reducers: {
    selectTask(state, action) {
      const task = state;
      task[0] = action.payload;
    },

  },
});

export const { selectTask } = selectedTaskSlice.actions;
export default selectedTaskSlice.reducer;
