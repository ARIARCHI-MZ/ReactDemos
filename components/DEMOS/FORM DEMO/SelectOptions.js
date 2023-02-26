import { ErrorMessage, Field } from "formik";
import React from "react";
import ErrorText from "./ErrorText";
import "./FormStyle.css";

function SelectOptions(props) {
  const { name, label, options, ...rest } = props;
  return (
    <div>
      <label className="label" htmlFor={name}>{label}</label>
      <div className="labelOption">
      <Field as="select" id={name} name={name} {...rest}>
        {options.map((option) => {
          return (
            <option  key={option.value} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </Field>
      </div>
      
      <ErrorMessage name= {name} component ={ErrorText}/> 
    </div>
  );
}

export default SelectOptions;
