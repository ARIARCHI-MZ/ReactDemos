import React from 'react'
import { Field } from 'formik'
import "./FormStyle.css";

function TextArea(props) {
    const { label , name , ...rest} = props
  return (
    <div>
      <div className="label" >
      <label htmlFor={name} > {label}</label>
      </div>
        
      <Field className="textarea" as="textarea" id ={name} name= {name} {...rest}/>
    </div>
  )
}

export default TextArea
