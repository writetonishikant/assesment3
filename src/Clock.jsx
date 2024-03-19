import { useState, useEffect } from 'react';

const Clock = () => {
  // state for current time
  const [time, setTime] = useState(new Date());

  // useEffect hook will runs after rendering of the component
  useEffect(() => {
    // This is the function that updates the time state every second
    const updateTime = () => {
      // This will give us the current time
      const currentTime = new Date();
      // This will set the time
      setTime(currentTime);
      // This will check the seconds if they are 0 or 00
      if (currentTime.getSeconds() === 0) {
        console.log('End of minute reached:', currentTime.toLocaleTimeString());
      }
    };
    const intervalID = setInterval(updateTime, 1000);

    // this will return cleanup function to clear the interval when the componentgets unmounted
    return () => {
      clearInterval(intervalID);
    };
  }, []); 

  function formatTime(time) {
    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const seconds = time.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }

  // Formating the time to display in HH:MM:SS format
  const formattedTime = formatTime(time);
  return (
    <div>
      <h2>Digital Clock</h2>
      <p>{formattedTime}</p>
    </div>
  );
};

export default Clock;