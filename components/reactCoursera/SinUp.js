
import React, { useState } from "react";
function SinUp() {
    const [firstN, setFirstN] = useState("");
    const [lastN, setLastN] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordMsg, setPasswordMsg] = useState("");

const submitHandler = (e) => {
    e.preventDefault();
    if (password.length < 8) {
      setPasswordMsg("Password is too short");
    } else {
      setPasswordMsg("Password is correct");
    }
  };
  return (
    <div>
      <h2>Sin Up Form</h2>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="firstN">first Name </label>
          <input
            type="text"
            id="firstN"
            value={firstN}
            onChange={(e) => setFirstN(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lastN">Last Name </label>
          <input
            type="text"
            id="lastN"
            value={lastN}
            onChange={(e) => setLastN(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>{passwordMsg}</div>
        <div>
          <label htmlFor="role">Role </label>
          <select id="role" required>
            <option>teacher</option>
            <option>student</option>
            <option>none</option>
          </select>
        </div>
        <button type="submit" disabled={!firstN || !lastN || password.length < 8}>Create Account</button>
      </form>
    </div>
  );
}

export default SinUp;


{/* <button type="submit" disabled={!firstN || !lastN || password.length < 8}>Create Account</button> */}
