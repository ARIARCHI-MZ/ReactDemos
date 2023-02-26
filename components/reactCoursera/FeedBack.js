import React, { useState } from "react";

function FeedBack() {
  const [score, setScore] = useState("0");
  return (
    <div>
      <form>
        <h2>FeedBack Form</h2>
        <div>
          <label> Score {score} is given</label>
          <input
            type="range"
            min="0"
            step="2"
            max="10"
            value={score}
            onChange={e => setScore(e.target.value)}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default FeedBack;
