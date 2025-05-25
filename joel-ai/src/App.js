import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Loader } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Leva } from 'leva';
import { Experience } from './components/Experience';
import { UI } from './components/UI';


// AI Agent Component
function AIAgent() {
  useEffect(() => {
    // Extract the `userid` from the URL
    const urlParts = window.location.pathname.split('/');
    const userid = urlParts[1];
    if (userid) {
      localStorage.setItem('gfuserid', userid);
      console.log('userid stored in localStorage: ', userid);
    } else {
      console.log('User not found..!');
    }
  }, []);

  return (
    <>
      <Loader />
      <Leva hidden />
      {/* Main 3D scene */}
      <div className="relative w-full h-full">
        <Canvas
          shadows
          camera={{ position: [0, 0, 1], fov: 30 }}
          className="absolute inset-0 z-0"
        >
          <Experience />
        </Canvas>
        
        {/* Ensure UI is layered above the Canvas */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <UI />
        </div>
      </div>
    </>
  );
}

// Main App Component
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AIAgent />} />
      </Routes>
    </Router>
  );
}

export default App;