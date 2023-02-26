import React, { useState } from "react";
import "./FormStyle.css";
function AlertWCome(props) {
  const [showAlert, setShowAlert] = useState(true);
  const closeHandler = () => {
    setShowAlert(false);
  };
  return (
    showAlert && (
        <div className="alertBox">
          <p> {props.children}</p>
          <button className="bottun" onClick={closeHandler}>
            {" "}
            Close{" "}
          </button>
      </div>
    )
  );
}

export default AlertWCome;
