import { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
import "./FormStyle.css";
import AlertWCome from "./AlertWCome";

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
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const initialValues = {
    email: "",
    textarea: "",
    roleOptions: "",
    RadioOption: "",
    checkedGOptions: [],
    birthDate: null,
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required!"),
    lastName: Yup.string().required("Required!"),
    email: Yup.string().email("This email is invalid!").required("Required!"),
    // roleOptions: Yup.string().required("Required!"),
    // RadioOption: Yup.string().required("Required!"),
    checkedGOptions: Yup.array().required("Required!"),
    // birthDate: Yup.date().required("Required!").nullable(),
    password: Yup.string()
      .required("Password is required")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        "Password must be at least 8 characters long and include at least one letter and one number"
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Passwords must match!")
      .required("Required!"),
  });

  const handleSubmit = (values) => {
    setFirstName(values.firstName);
    setLastName(values.lastName);
    setShowAlert(true);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      className="demo"
    >
      {(formik) => (
        <div className={showAlert ? "dark-overlay" : ""}>
          <Form className={`container ${showAlert ? "disabled" : ""}`}>
            <div className="infoDescription">
              {" "}
              Using React-app , formik, and material UI library, this
              registration form was created. In the same way as my main CV
              website, it is user-friendly and can be accessed from any device.
              This is a demo and is not connected to any backed up data. Your
              information will not be sent to a data server. A welcome message
              will appear after registration.
            </div>
            {showAlert && (
              <AlertWCome>
                Dear {firstName} {lastName} welcome to our website !
              </AlertWCome>
            )}
            <h3 className="info h2"> Registration form</h3>
            <p className="label">
              {" "}
              Please fill all field which are marked with `*` .
            </p>
            <h4 className="info h3"> Personal Information</h4>
            <div className="row">
              <div className="col-12 col-md-6">
                <FormikControl
                  control="input"
                  type="text"
                  label="First Name* : "
                  name="firstName"
                  value={firstName}
                  onChange={(e) => {
                    formik.handleChange(e);
                    setFirstName(e.target.value);
                  }}
                />
              </div>
              <div className="col-12 col-md-6">
                <FormikControl
                  control="input"
                  type="text"
                  label="Last Name* : "
                  name="lastName"
                  value={lastName}
                  onChange={(e) => {
                    formik.handleChange(e);
                    setLastName(e.target.value);
                  }}
                />
              </div>
              <div className="col-12 ">
                <FormikControl
                  control="radio"
                  // type="radio"
                  label="What is your gender?"
                  name="RadioOption"
                  options={RadioOption}
                />
              </div>
              <div className="col-12 ">
                <FormikControl
                  control="select"
                  type="select"
                  label="Select your current job. "
                  name="select"
                  options={roleOptions}
                />
              </div>
              <FormikControl
                control="date"
                label="Select choose your birthday!"
                name="birthDate"
              />
            </div>
            <div className="row">
              <h4 className="info h3"> Contact information</h4>
            </div>
            <div className="row">
              <div className="col-12 ">
                <FormikControl
                  control="input"
                  type="email"
                  label="Email* : "
                  name="email"
                />
              </div>

              <div className="col-12 col-md-6">
                <FormikControl
                  control="input"
                  label="Define a password* ."
                  type="password"
                  name="password"
                />
              </div>
              <div className="col-12 col-md-6">
                <FormikControl
                  control="input"
                  label="Repeat your password* ."
                  type="password"
                  name="confirmPassword"
                />
              </div>
              <div className="col-12 ">
                <FormikControl
                  control="checkbox"
                  label="What kind of emails you prefer to receive* ?"
                  name="checkedGOptions"
                  options={checkedGOptions}
                />
              </div>
            </div>
            <div className="row">
              <FormikControl
                control="textarea"
                type="text"
                label="please provide you comment."
                name="textarea"
              />
            </div>
            <div className="row">
              <button
                className="bottun"
                type="submit"
                disabled={!formik.isValid}
              >
                {" "}
                Submit{" "}
              </button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
}

export default FormikContainer;
