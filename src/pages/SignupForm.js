import { useFormik } from 'formik';
import * as yep from 'yup';



const validation = yep.object({
    firstName: yep.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required First Name'),
    lastName: yep.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
    email: yep.string()
        .email('Invalid email address')
        .required('Required'),
})


const initState =  {
    firstName: '',
    lastName: '',
    email: '',
}

export const SignupForm = () => {

    const { handleSubmit, handleChange, values,  touched, errors } = useFormik({
        initialValues: initState,
        validationSchema: validation,
        onSubmit: values => {
            // alert(JSON.stringify(values, null, 2));
            // FETCH 
            console.log('SUBMIT', values)
        },
    });


    return  <form onSubmit={handleSubmit}>
    <label htmlFor="firstName">First Name</label>
        <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={handleChange}
            value={values.firstName}
        />
        <p style={{ color: 'red' }}>{touched.firstName && errors.firstName ? ( 
        <div>{errors.firstName}</div>) : null}</p>

    <label htmlFor="lastName">Last Name</label>
    <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={handleChange}
        value={values.lastName}
    />

        <p style={{ color: 'red' }}>{touched.lastName && errors.lastName ? ( 
        <div>{errors.lastName}</div>) : null}</p>

    <label htmlFor="email">Email Address</label>
    <input
        id="email"
        name="email"
        type="email"
        onChange={handleChange}
        value={values.email}
    />

        <p style={{ color: 'red' }}>{touched.email && errors.email ? ( 
        <div>{errors.email}</div>) : null}</p>

    <button type="submit">Submit</button>
</form>
};