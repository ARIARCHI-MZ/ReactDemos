import React from 'react'
import Input from "./Input"
import SelectOptions from './SelectOptions'
import TextArea from "./TextArea"
import RadioOption from "./RadioOption"
import CheckGOptions from "./CheckGOptions";
import DatePickerM from "./DatePickerM";
import Password from "./Password";

function FormikControl(props) {
    const {control, ...rest} = props
switch (control) {
    case "input": 
        return <Input {...rest} />
    case "textarea":
        return <TextArea {...rest} />
    case "select":  
        return <SelectOptions {...rest} />
    case "radio":
        return <RadioOption {...rest} />
    case "checkbox":
        return <CheckGOptions {...rest} />
    case "password":
        return <Password {...rest} />
    case "date":
        return <DatePickerM {...rest}/>
    default: return null
}
}

export default FormikControl
