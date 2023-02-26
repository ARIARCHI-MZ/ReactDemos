import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
import {theme, ThemeProvider} from "@chakra-ui/core";
function FormikContainer() {
  const RadioOption = [
    { key: "Male", value: "rMale" },
    { key: "Female", value: "rFemale" },
    { key: "None of them", value: "rNone of them" },
  ];

  const roleOptions = [
    { key: "Select an option", value: "" },
    { key: "Teacher", value: "Teacher" },
    { key: "Student", value: "Student" },
    { key: "Web Developer", value: "Web Developer" },
    { key: "Architecture", value: "Architecture" },
  ];

  const checkedGOptions = [
    { key: "Newsletter", value: "Get email from Newsletter" },
    { key: "New products", value: "Get email of new products" },
    { key: "New events", value: "Get email of new events" },
  ];

  const initialValues = {
    email: "",
    textarea: "",
    roleOptions: "",
    RadioOption: "",
    checkedGOptions: [],
    birthDate: null,
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("This email is invalid!").required("Required!"),
    roleOptions: Yup.string().required("Required!"),
    RadioOption: Yup.string().required("Required!"),
    checkedGOptions: Yup.array().required("Required!"),
    birthDate: Yup.date().required("Required!").nullable(),
    password: Yup.string().required("Required!"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Passwords must match!")
      .required("Required!"),
  });

  const onSubmit = (values) => console.log(values);

  return (
    <ThemeProvider theme={theme}>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FormikControl
            control="input"
            type="email"
            label="Email"
            name="email"
          />
          <FormikControl
            control="date"
            label="Select choose your birthday!"
            name="birthDate"
          />

          <FormikControl
            control="select"
            type="select"
            label="Select your current job"
            name="select"
            options={roleOptions}
          />
          <FormikControl
            control="radio"
            // type="radio"
            label="What is your gender?"
            name="RadioOption"
            options={RadioOption}
          />
          <FormikControl
            control="checkbox"
            label="What kind of emails you prefer to receive ?"
            name="checkedGOptions"
            options={checkedGOptions}
          />
          <FormikControl
            control="textarea"
            type="text"
            label="Description"
            name="textarea"
          />
          <FormikControl
            control="input"
            label="Define a password"
            type="password"
            name="password"
          />
          <FormikControl
            control="input"
            label="Repeat your password"
            type="password"
            name="confirmPassword"
          />
          <button type="submit"> Submit </button>
        </Form>
      )}
    </Formik>
    </ThemeProvider>
  );
}

export default FormikContainer;

//       {(formik) => (
//         <Form>

//           <button type="submit"> Submit </button>
//         </Form>
//       )}
//     </Formik>
//   );
// }

// export default FormikContainer;
