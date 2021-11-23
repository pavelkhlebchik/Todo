import { createSlice } from '@reduxjs/toolkit';

let lastId = -1;

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask(state, action) {
      // eslint-disable-next-line no-plusplus
      state.push({ ...action.payload, id: ++lastId });
    },

    editTask(state, action) {
      const {
        title, description, status, id,
      } = action.payload;
      state.filter((item) => item.id === id)
        .map((filterItem) => {
          const card = filterItem;
          card.title = title;
          card.description = description;
          card.status = status;
          card.id = id;

          return card;
        });
    },

    deleteTask(state, action) {
      const index = state.findIndex((task) => task.id === action.payload.id);
      state.splice(index, 1);
    },
  },
});

export const { addTask, editTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
