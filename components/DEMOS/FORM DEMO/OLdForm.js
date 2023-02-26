import React from "react";
import "./YoutubeFormStyle.css";
import { useFormik } from "formik";
import * as Yup from "yup";

function OldForm() {
  const initialValues = {
    name: "",
    email: "",
    url: "",
  };
  const onSubmit = (values) => {
    console.log(values);
  };

  // const validate = (values) => {
  //     let errors = {};
  //     if (!values.name) {
  //       errors.name = "This is required. ";    }
  //     if (!values.email) {
  //       errors.email = "This is required. ";    } else if (
  //       !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.text(
  //         values.email )    )
  // {       errors.email = "This email is invalid";    }
  //     return errors;   };

  const validationSchema = Yup.object({
    name: Yup.string().required("This field is required!"),
    email: Yup.string()
      .email("This email is invalid!")
      .required("This field is required!"),
  });
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <div>
      <form className="form" onSubmit={formik.handleSubmit}>
        <div>
          <label className="label" htmlFor="name">
            {" "}
            Name :{" "}
          </label>
          <input
            className="input"
            id="name"
            name="name"
            type="text"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error"> {formik.errors.name} </div>
          ) : null}
        </div>
        <div>
          <label className="label" htmlFor="email">
            {" "}
            Email :{" "}
          </label>
          <input
            className="input"
            id="email"
            name="email"
            type="text"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          {formik.touched.email && formik.errors.email ? (
            <div className="error"> {formik.errors.email} </div>
          ) : null}
        </div>
        <div>
          <label className="label" htmlFor="url">
            {" "}
            Website :{" "}
          </label>
          <input
            className="input"
            id="url"
            name="url"
            type="url"
            value={formik.values.url}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <div>
          <button type="submit"> Submit </button>
        </div>
      </form>
    </div>
  );
}

export default OldForm;
