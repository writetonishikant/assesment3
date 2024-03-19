import { useState } from "react";
import "./App.css";
import Clock from "./Clock";
import Timer from "./Timer";

function App() {
  const [showClock, setShowClock] = useState(true);
  const [showTimer, setShowTimer] = useState(false);

  const handleToggleClock = () => {
    setShowClock(true);
    setShowTimer(false);
  };

  const handleToggleTimer = () => {
    setShowClock(false);
    setShowTimer(true);
  };

  return (
    <>
      <button onClick={handleToggleClock} className={showClock ? "active" : ""}>
        Digital Clock
      </button>
      <button onClick={handleToggleTimer} className={showTimer ? "active" : ""}>
        Timer
      </button>
      {showClock && <Clock />}
      {showTimer && <Timer />}
    </>
  );
}

export default App;
