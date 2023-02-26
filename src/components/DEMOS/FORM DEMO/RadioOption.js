import { ErrorMessage, Field } from "formik";
import React from "react";
import ErrorText from "./ErrorText";
import "./FormStyle.css";

function RadioOption(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div>
      <div>
        <label className="label">{label}</label>
      </div>
      <div className="labelOption" >
      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <React.Fragment key={option.key}>
                <input
                  type="radio"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <label  htmlFor={option.value}>
                  {" "}
                  {option.key}{" "}{" "}{" "}
                </label>
              </React.Fragment>
            );
          });
        }}
      </Field>
      </div>
      
      <ErrorMessage name={name} component={ErrorText} />
    </div>
  );
}

export default RadioOption;
