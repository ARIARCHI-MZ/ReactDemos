// date-fns
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// or for Day.js
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "./FormStyle.css";
import { TextField } from "@mui/material";
import { Field } from "formik";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";

function DatePickerM(props) {
  const { label, name, value, ...rest } = props;
  return (
    <div>
      <div className="label">
        <label htmlFor={name}>{label}</label>
      </div>
      <Field  name={name}>
        {({ field, form }) => {
          const { value } = field;
          const { setFieldValue } = form;
          return (
            <LocalizationProvider  dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Select a date"
                id={name}
                {...rest}
                {...field}
                selected={value}
                onChange={(newValue) => {
                  setFieldValue(name, newValue);
                }}
                renderInput={(params) => <TextField  {...params} />}
              />
            </LocalizationProvider>
          );
        }}
      </Field>
    </div>
  );
}

export default DatePickerM;

// function DatePickerM(props) {
//     const { label, name, value, ...rest } = props;
//     return (
//       <div>
//         <label htmlFor={name}>{label}</label>
//         <Field name={name}>
//           {({ field, form }) => (
//             <LocalizationProvider dateAdapter={AdapterDayjs}>
//               <DatePicker
//                 label="Basic example"
//                 id={name}
//                 value={value}
//                 {...rest}
//                 {...field}
//                 selected={value}
//                 onChange={(newValue) => {
//                   form.setFieldValue(name, newValue);
//                 }}
//                 renderInput={(params) => <TextField {...params} />}
//               />
//             </LocalizationProvider>
//           )}
//         </Field>
//       </div>
//     );
//   }

//   export default DatePickerM;
