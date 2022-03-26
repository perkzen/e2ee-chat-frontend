import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Chat from './components/pages/Chat/Chat';
import { Paths } from './routes';

function App() {
  return (
    <Routes>
      <Route element={<Chat />} path={Paths.HOME} />
    </Routes>
  );
}

export default App;
