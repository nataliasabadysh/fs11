// Core
import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

// Instruments
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import {
  Typography,
  FormControlLabel,
  Radio,
  RadioGroup,
  Checkbox,
  MenuItem,
  Select,
  FormLabel,
} from "@mui/material";

// Custom Styling
import { styles, styleWrapper } from "./RegistrationStyles";

// import { delay } from "../../utils/delay";       await delay(800);
// import { validationSchema } from "../../utils/schema";

const validationSchema = yup.object({
  name: yup
    .string("Enter your name")
    .required("Name is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email") // EMAIL 
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  role: yup.string("Enter your Role").required("Role is required"),
});

export const Registration = () => {
  
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      password: "",
      adult: false,
      gender: "",
      role: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div style={styleWrapper}>
      <Typography variant="h3">Registration Form</Typography>

      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />

        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />

        <FormControlLabel
          control={<Checkbox />}
          label="Under 12 years old"
          id="adult"
          name="adult"
          id="adult"
          type="checkbox"
          value={formik.values.adult}
          onChange={formik.handleChange}
        />

        <FormLabel
          component="legend"
          error={formik.touched.role && Boolean(formik.errors.role)}
          helperText={formik.touched.role && formik.errors.role}
        >
          Role
        </FormLabel>

        <RadioGroup
          aria-label="role"
          //   defaultValue="admin"
          name="role"
          onChange={formik.handleChange}
        >
          <FormControlLabel value="admin" control={<Radio />} label="Admin" />
          <FormControlLabel value="owner" control={<Radio />} label="Owner" />
          <FormControlLabel value="manager" control={<Radio />} label="Manager" />
        </RadioGroup>
        
        <p style={{ color: "red" }}> {formik.errors.role}</p>

        <div>Gender</div>
        <Select
          id="gender-label-select"
          name="gender"
          style={{ width: 150 }}
          value={formik.values.gender}
          onChange={formik.handleChange}
          autoWidth
        >
          <MenuItem value={"female"} style={styles}>
            Female
          </MenuItem>
          <MenuItem value={"male"} style={styles}>
            Male
          </MenuItem>
          <MenuItem value={"other"} style={styles}>
            Other
          </MenuItem>
        </Select>

        <Button
          color="primary"
          disabled={formik.isSubmitting}
          variant="contained"
          fullWidth
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};
