import React from "react";
import { Field, ErrorMessage } from "formik";
import DateView from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ErrorText from "./ErrorText";

function DatePickerM(props) {
  const { label, value, name, ...rest } = props;
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {({ field, form }) => {
          const { value } = field;
          const { setFieldValue } = form;
          return (
            <DateView
              id={name}
              {...rest}
              {...field}
              selected={value}
              onChange={(val) => setFieldValue(name, val)}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} component={ErrorText} />
    </div>
  );
}

export default DatePickerM;
