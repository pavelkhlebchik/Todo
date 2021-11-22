import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
  },
});

export const { add } = tasksSlice.actions;
export default tasksSlice.reducer;
