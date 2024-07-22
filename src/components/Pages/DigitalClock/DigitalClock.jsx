import React, { useState, useEffect } from 'react';
import './DigitalClock.css'

 export const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedTime = time.toLocaleTimeString();

  return (
    <div className='digital-clock'>
      <h1 className='title-clock'>Reloj Digital</h1>
      <p className='time'>{formattedTime}</p>
    </div>
  );
};

export default DigitalClock;