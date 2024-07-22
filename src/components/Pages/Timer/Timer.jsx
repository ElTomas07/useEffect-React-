import React, { useState, useEffect } from 'react';
import './Timer.css'

 export const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handlePause = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setSeconds(0);
    setIsActive(false);
  };

  return (
    <div className='timer'>
      <h1 className='title-timer'>Temporizador</h1>
      <p className='seconds'> {seconds} segundos</p>
      <div>
        <button className='btn-timer' onClick={handleStart}>Iniciar</button>
        <button className='btn-timer' onClick={handlePause}>Pausar</button>
        <button className='btn-timer' onClick={handleReset}>Reiniciar</button>
      </div>
    </div>
  );
};

export default Timer;
