import React from "react";
import "./YoutubeFormStyle.css";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";

function YoutubeForm() {

  const initialValues = {
    name: "",
    email: "",
    url: "",
    textArea: "",
    address: "",
    phNumbers: [""],
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("This field is required!"),
    email: Yup.string()
      .email("This email is invalid!")
      .required("This field is required!"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      { formik => (
        <Form className="form">
        <div>
          <label className="label" htmlFor="name">
            {" "}
            Name :{" "}
          </label>
          <Field className="input" id="name" name="name" type="text" />
          <div className="error">
            <ErrorMessage name="name" />
          </div>
        </div>
        <div>
          <label className="label" htmlFor="email">
            {" "}
            Email :{" "}
          </label>
          <Field className="input" id="email" name="email" type="text" />
          <div className="error">
            <ErrorMessage className="error" name="email" />
          </div>
        </div>
        <div>
          <label className="label" htmlFor="address">
            {" "}
            Address :{" "}
          </label>
          <Field className="input" name="address">
            {(props) => {
              const { field, form, meta } = props;
              return (
                <div>
                  <input type="text" id="address" {...field} />
                  {meta.touched && meta.errors ? (
                    <div className="error"> {meta.errors} </div>
                  ) : null}
                </div>
              );
            }}
          </Field>
        </div>
        <div>
          <label className="label" htmlFor="phNumbers">
            Phone Numbers :
          </label>
          <FieldArray
            className="input"
            id="phNumbers"
            name="phNumbers"
            type="number"
          >
            {(fieldArrayProps) => {
              const { push, remove, form } = fieldArrayProps;
              const { values } = form;
              const { phNumbers } = values;
              return (
                <div>
                  {phNumbers.map((phNumber, index) => (
                    <div key={index}>
                      <Field name={`phNumbers.${index}`} />
                      {index > 0 && (
                        <button type="button" onClick={() => remove(index)}>
                          {" "}
                          -{" "}
                        </button>
                      )}
                      <button type="button" onClick={() => push("")}>
                        {" "}
                        +{" "}
                      </button>
                    </div>
                  ))}
                </div>
              );
            }}
          </FieldArray>
        </div>
        <div>
          <label className="label" htmlFor="url">
            {" "}
            Website :{" "}
          </label>
          <Field className="input" id="url" name="url" type="url" />
        </div>
        <div>
          <label className="label" htmlFor="textArea">
            {" "}
            Comment :{" "}
          </label>
          <Field
            as="textarea"
            className="comment"
            id="textArea"
            name="textArea"
            type="text"
          />
        </div>
        <div>
          <button type="submit" disabled={!formik.isValid}>Submit</button>
        </div>
      </Form>
      )}
      
    </Formik>
  );
}

export default YoutubeForm;
