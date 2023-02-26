import React, { useState,useCallback } from "react";
import ComB from "./ComB";
import ComC from "./ComC";

function ComA() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(1000);

  const ageHandler =useCallback(() => {
    setAge (age + 1);
  },[age]) ;
  const salaryHandler = useCallback(() => {
    setSalary  (salary + 1000);
  },[salary]) ;
  return (
    <div>
      <ComC text="Age" count={age} />
      <ComB clickHandler={ageHandler}> Age increase</ComB>
      <ComC text="Salary" count={salary} />
      <ComB clickHandler={salaryHandler}> Salary increase</ComB>
    </div>
  );
}

export default ComA;
