import React from 'react'
import { Field } from 'formik'

function TextArea(props) {
    const { label , name , ...rest} = props
  return (
    <div>
        <label htmlFor={name} > {label}</label>
      <Field as="textarea" id ={name} name= {name} {...rest}/>
    </div>
  )
}

export default TextArea
