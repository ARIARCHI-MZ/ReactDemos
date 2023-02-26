import { ErrorMessage, Field } from "formik";
import React from "react";
import ErrorText from "./ErrorText";
import "./FormStyle.css";

function CheckGOptions(props) {
  const { name, label, options, ...rest } = props;
  return (
    <div>
      <div className="label" >
      <label>{label}</label>
      </div>
      
      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <div className="inputOption" key={option.key}>
                <input
                  type="checkbox"
                  
                  id={option.key}
                  {...field}
                  value={option.value}
                  checked={field.value.includes(option.value)}
                />
                <label htmlFor={option.key}>{option.value}</label>
              </div>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={ErrorText} />
    </div>
  );
}
export default CheckGOptions;
