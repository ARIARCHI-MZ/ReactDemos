import React from 'react'
import "./FormStyle.css";
function ErrorText(props) {
  return (
    <div className="error">
      {props.children}
    </div>
  )
}

export default ErrorText
