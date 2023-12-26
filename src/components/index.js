import React, { useState } from 'react';

export const Index = () => {
  const initialState = {
    ms: 0,
    s: 0,
    m: 0,
    h: 0,
  };

  const [timer, setTimer] = useState(initialState);
  const [intervalId,setIntervalId]=useState(0)

  const startfunctionality = () => {
    // Use setInterval to increment ms every 100 milliseconds
    const id = setInterval(() => {
      setTimer((prevTimer) => {
        let newMs = prevTimer.ms + 1;
        let newS = prevTimer.s;
        let newM = prevTimer.m;
        let newH = prevTimer.h;

        // Check if ms reaches 100, then reset and increment seconds
        if (newMs === 100) {
          newMs = 0;
          newS += 1;
        }
          // If seconds reach 60, reset and increment minutes
          if (newS === 60) {
            newS = 0;
            newM += 1;
          }
            // If minutes reach 60, reset and increment hours
            if (newM === 60) {
              newM = 0;
              newH += 1;
            }
          

        return {
          ms: newMs,
          s: newS,
          m: newM,
          h: newH,
        };
      });
    }, 10);

    // Save the interval ID to clear it later
    // return () => clearInterval(intervalId);
    setIntervalId(id)
  };

  const stopFunctionality=()=>{
    clearInterval(intervalId)
  }

  const reset=()=>{
    setTimer(initialState)
  }

  return (
    <div>
        <div className='time'>
            <h1>Stop Watch</h1>
      <h1>
        
        {timer.h}:{timer.m}:{timer.s}:{timer.ms}
      </h1>
      </div>
      <button className='start' onClick={startfunctionality}>Start</button>
      <button className='stop'onClick={stopFunctionality}>Stop</button>
      <button className='reset'onClick={reset}>Reset</button>
    </div>
  );
};
