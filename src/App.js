import React from 'react';
import {
  Routes, Route,
} from 'react-router-dom';

import HomePage from './routes/HomePage';
import TasksPage from './routes/TasksPage';
// import NotFoundPage from './routes/NoFoundPage';

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/all" element={<TasksPage />} />
    </Routes>
  </>
);

export default App;
