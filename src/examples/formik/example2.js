import React from "react";
import { useFormik } from "formik";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

// EXAMPLE FROM https://formik.org/docs/examples/with-material-ui
export const WithMaterialUI = () => {

  const formik = useFormik({
    initialValues: {
      email: "foobar@example.com",
      password: "foobar",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      //method for the API.send(values)
    },
  });

  return (
      <form onSubmit={formik.handleSubmit}>
        <input name="email" value={formik.values.email} onChange={formik.handleChange} type="email">Email</input>
        <input name="password" value={formik.values.password} onChange={formik.handleChange} type="password">Password</input>
        <button type="submit"> Submit </button>
      </form>
  );
};
