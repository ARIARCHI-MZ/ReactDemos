import { ErrorMessage, Field } from 'formik'
import React from 'react'
import ErrorText from "./ErrorText"
function Password(props) {
    const {label, name, ...rest} = props
  return (
    <div>
      <label name={name}>{label}</label>
      <Field name={name} {...rest}></Field>
      <ErrorMessage name={name} component={ErrorText}></ErrorMessage>
    </div>
  )
}

export default Password
