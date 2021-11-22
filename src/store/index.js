import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './tasks';
import selectedTaskReducer from './selectedTask';

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    selected: selectedTaskReducer,
  },
});

export default store;
