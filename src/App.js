import React from 'react';
import {
  Routes, Route,
} from 'react-router-dom';

import HomePage from './routes/HomePage';
import TasksPage from './routes/TasksPage';
import NewCardPage from './routes/NewCardPage';
import CardPage from './routes/CardPage';
// import NotFoundPage from './routes/NoFoundPage';

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/all" element={<TasksPage />} />
      <Route path="/new" element={<NewCardPage />} />
      <Route path="/card" element={<CardPage />} />
    </Routes>
  </>
);

export default App;
