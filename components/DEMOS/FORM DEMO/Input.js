import React from "react";
import { Field, ErrorMessage } from "formik";
import ErrorText from "./ErrorText";
import "./FormStyle.css";

function Input(props) {
  const { label, name, ...rest } = props;
  return (
    <div>
      <div className="label">
        <label htmlFor={name}> {label}</label>
      </div>
      <Field id={name} name={name} {...rest} className="input" />
      <ErrorMessage name={name} component={ErrorText} />
    </div>
  );
}

export default Input;
