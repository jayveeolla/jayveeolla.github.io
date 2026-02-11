import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Portfolio from './Portfolio';
import Workspace3D from './Workspace3D';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/workspace-3d" element={<Workspace3D />} />
    </Routes>
  );
}

export default App;
