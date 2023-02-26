import React from "react";
import FeedbackForm from "./FeedbackForm";
import "../../../App.css";
function TestSp() {
  const handleSubmit = () => {
    console.log("Form submitted!");
  };
  return (
    <div className="App">
      <FeedbackForm onSubmit={handleSubmit} />
    </div>
  );
}

export default TestSp;
