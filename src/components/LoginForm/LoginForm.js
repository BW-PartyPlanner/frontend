import React from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser, setLoggedIn } from '../../store/actions/loginActions';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const LoginForm = ({ values, touched, errors }) => {

    return (
        <div className="loginContainer">
            <Form className="loginForm">
                <h2 className='loginHeader'>LOGIN</h2>
                <Field 
                    className="loginField"
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={values.username}
                />
                {touched.username && errors.username && <p>{errors.username}</p>}

                <Field
                    className="loginField"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={values.password}
                />
                {touched.password && errors.password && <p className='errors'>{errors.password}</p>}

                <button className='loginBtn' type="submit">Submit</button>

                <Link to="/signup" className="existing-user">
                    Not an existing user?
                </Link>
            </Form>    
        </div>
    );
};

const FormikUserForm = withFormik({
    mapPropsToValues({username, password}) {
        return {
            username: username || "",
            password: password || ""
        };
    },

    validationSchema: Yup.object().shape({
        username: Yup.string().required("Please enter an username."),
        password: Yup.string().required("Password incorrect.")
    }),

    handleSubmit(values, formikBag) {
      formikBag.props.loginUser(values);
      formikBag.props.setLoggedIn()
      formikBag.resetForm()
      if (!localStorage.getItem('token')) {
        setTimeout(function () { return formikBag.props.history.push('/dashboard') }, 2000)
      }
      formikBag.props.history.push('/dashboard')
  }
})(LoginForm);

export default connect(null, { loginUser, setLoggedIn })(FormikUserForm);