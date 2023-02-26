import React, { useState, useMemo } from "react";

function EvenOdd() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);
  const increasing = () => {
    setCounterOne(counterOne + 1);
  };
  const decreasing = () => {
    setCounterTwo(counterTwo - 1);
  };

  const isEven = useMemo(() => {
    return counterOne % 2 === 0;
  }, [counterOne]);
  return (
    <div>
      <button onClick={increasing}> this is {counterOne}</button>
      <span>{isEven ? "even" : "odd"}</span>
      <button onClick={decreasing}> this is {counterTwo}</button>
    </div>
  );
}

export default EvenOdd;
