import { Formik, Form } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import Input from "./Input";
import "./mainStyle.css";
// import MonthSelect from "./MonthSelect";
function NameForm(props) {
  const [name, setName] = useState("");
  const [lname, setLname] = useState("");
  const [date, setDate] = useState("");
  const [month, setMonth] = useState("");

  const initialValues = {
    name: "",
    lname: "",
    date: "",
    month: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("You have to insert your name."),
    lname: Yup.string().required("You have to insert the person’s name."),
    date: Yup.number()
      .min(1, "Number must be between 1 and 31")
      .max(31, "Number must be between 1 and 31")
      .required("You have to insert the date of sending cart."),
    month: Yup.string().required(
      "You have to select the month of sending cart."
    ),
  });

  // const handleSelectMonth = (selectedMonth) => {
  //   props.onMonthChange(selectedMonth);
  // }
  const submitHandler = (values) => {
    setName(values.name);
    setLname(values.lname);
    setDate(values.date);
    setMonth(values.month);
    props.onNameChange(values.name); 
    props.onLnameChange(values.lname);
    props.onDateChange(values.date);
    props.onMonthChange(values.month);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={submitHandler}
    >
      {(formik) => (
        <Form>
          <Input
            name="name"
            value={name}
            type="text"
            id="nameId"
            label="Please insert your name."
            onChange={(e) => {
              formik.handleChange(e);
              setName(e.target.value);
            }}
          />
          <Input
            name="lname"
            value={lname}
            type="text"
            id="lnameId"
            label="Please insert the person’s name."
            onChange={(e) => {
              formik.handleChange(e);
              setLname(e.target.value);
            }}
          />
          <Input
            name="date"
            value={date}
            type="number"
            id="date"
            label="Please insert the date of sending cart."
            onChange={(e) => {
              formik.handleChange(e);
              setDate(e.target.value);
            }}
          />
       
          {/* <MonthSelect onSelectMonth={handleSelectMonth} /> */}
          {/* <MonthSelect value={month} onSelectMonth={handleSelectMonth} /> */}
          <Input
            name="month"
            value={month}
            type="text"
            id="monthId"
            label="Please insert the month of sending cart."
            onChange={(e) => {
              formik.handleChange(e);
              setMonth(e.target.value);
            }}
          />
          <button className="bottun" type="submit" disabled={!formik.isValid}>
            {" "}
            Design the cart.
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default NameForm;


