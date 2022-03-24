import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import { Paths } from './routes';

function App() {
  return (
    <Routes>
      <Route element={<Home />} path={Paths.HOME} />
    </Routes>
  );
}

export default App;
