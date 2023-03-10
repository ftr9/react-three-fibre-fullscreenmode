import React, { useState } from 'react';
import './FullScreen.css';

const FullScreen = ({ containerRef }) => {
  const [isInFullScreen, SetFullScreenStatus] = useState(false);

  const buttonClickHandle = () => {
    if (!containerRef.current) {
      return;
    }
    if (!isInFullScreen) {
      containerRef.current.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    SetFullScreenStatus(!isInFullScreen);
  };

  return (
    <div className="fullScreenContainer">
      <button onClick={buttonClickHandle}>full screen mode</button>
    </div>
  );
};

export default FullScreen;
