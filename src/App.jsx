import './App.css';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stats, Html } from '@react-three/drei';
import { Model } from './models/Final';
import FullScreen from './components/FullScreen';
import { useRef } from 'react';

function App() {
  const appContainerRef = useRef(null);
  return (
    <div ref={appContainerRef} className="App">
      <Canvas>
        <Model />
        <OrbitControls autoRotate autoRotateSpeed={0.5} />
        <Stats />
      </Canvas>
      <FullScreen containerRef={appContainerRef} />
    </div>
  );
}

export default App;
