import { ErrorMessage, Field } from "formik";
import React from "react";

function Input(props) {
  const { name, label,id, ...rest } = props;
  const uniqueId = `input-${name}-${id}`;
  return (
    <div>
      <div>
        <label className="label" htmlFor={uniqueId}> {label}</label>
      </div>

      <Field name={name} id={uniqueId} {...rest}></Field>
      <div className="error">
        <ErrorMessage name={name}></ErrorMessage>
      </div>
    </div>
  );
}

export default Input;


