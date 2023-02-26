import React, { useState, useEffect, useRef } from "react";

function Timer() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef();
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);
  return (
    <div>
      <h3> timer is {timer}</h3>
      <button onClick={() => clearInterval(intervalRef.current)}>
        hook timer{" "}
      </button>
    </div>
  );
}

export default Timer;
