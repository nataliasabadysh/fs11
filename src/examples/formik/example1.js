// Core
import { useFormik } from 'formik';

export const FormFormik = () => {

  const formik = useFormik({
    initialValues: {
      name: '',
      lastName: '',
      email: '',
    },
    onSubmit: values => {
     console.log('values', values)
     // API fetch POST (user: 'name')
    },
  });

  return (

    <form onSubmit={formik.handleSubmit}>

    <label htmlFor="12">First Name</label>
    <input
      id="12"
      name="name"
      type="text"
      onChange={formik.handleChange}
      value={formik.values.firstName}
    />

    <label htmlFor="lastName">Last Name</label>
    <input
      id="lastName"
      name="lastName"
      type="text"
      onChange={formik.handleChange}
      value={formik.values.lastName}
    />
    <label htmlFor="email">Email Address</label>
    <input
      id="email"
      name="email"
      type="email"
      onChange={formik.handleChange}
      value={formik.values.email}
    />
    <button type="submit">Submit</button>
  </form>
  );
};
