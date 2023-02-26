import { ErrorMessage, Field } from "formik";
import React from "react";
import ErrorText from "./ErrorText";
function CheckGOptions(props) {
  const { name, label, options, ...rest } = props;
  return (
    <div>
      <label>{label}</label>
      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <React.Fragment key={option.key}>
                <input type ="checkbox" id ={option.key} {...field} value={option.value}
                checked={field.value.includes(option.value)} />
                <label htmlFor="option.key">{option.value}</label>
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={ErrorText}/>
    </div>
  );
}
export default CheckGOptions;

