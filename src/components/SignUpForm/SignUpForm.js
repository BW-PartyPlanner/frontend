import React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerUser } from '../../store/actions/signupActions';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const SignUpForm = ({ values, touched, errors }) => {

    return (
        <div className="sign-up-user-form">
            <Form className="sign-up-form">
                <h2 className='signupHeader'>Register</h2>
                <Field
                    className="sign-up-field"
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    value={values.first_name}
                />
                {touched.first_name && errors.first_name && <p>{errors.first_name}</p>}
        
                <Field
                    className="sign-up-field"
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    value={values.last_name}
                />
                {touched.last_name && errors.last_name && <p>{errors.last_name}</p>}
        
                <Field
                    className="sign-up-field"
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={values.username}
                />
                {touched.username && errors.username && <p>{errors.username}</p>}
            
                <Field
                    className="sign-up-field"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={values.password}
                />
                {touched.password && errors.password && <p>{errors.password}</p>}

                <button className='signupBtn' type="submit">Submit</button>
            
                <Link to="/login" className="existing-user">
                    Already have an account?
                </Link>
            </Form>   
        </div>
    );
};

const FormikUserForm = withFormik({
    mapPropsToValues({first_name, last_name, username, password}) {
        return {
            first_name: first_name || "",
            last_name: last_name || "",
            username: username || "",
            password: password || ""
        };
    },

    validationSchema: Yup.object().shape({
        first_name: Yup.string().required("What is your first name?"),
        last_name: Yup.string().required("What is your last name?"),
        username: Yup.string().required("Please enter a username."),
        password: Yup.string().required("Please enter a password.")
    }),

    handleSubmit(values, formikBag) {
        console.log(formikBag.props)
        formikBag.props.registerUser(values);
        formikBag.resetForm()
        formikBag.props.history.push('/login')
    }
})(SignUpForm);

export default connect(null, { registerUser })(FormikUserForm);