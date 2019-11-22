import React from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser, setLoggedIn } from '../../store/actions/loginActions';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const LoginForm = ({ values, touched, errors }) => {

    return (
        <div className="user-form">
            <div className="sign-up-form">
                <Form>
                    <div className="sign-up-field">
                        <Field 
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={values.username}
                        />
                        {touched.username && errors.username && <p>{errors.username}</p>}
                    </div>

                    <div className="sign-up-field">
                        <Field
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={values.password}
                        />
                        {touched.password && errors.password && <p>{errors.password}</p>}
                    </div>

                    <div className="sign-up-field">
                        <button type="submit">Submit</button>
                    </div>

                    <div className="sign-up-field">
                        <Link to="/signup" className="existing-user">
                            Not an existing user?
                        </Link>
                    </div>
                </Form> 
            </div>    
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
      formikBag.props.history.push('/dashboard')
  }
})(LoginForm);

export default connect(null, { loginUser, setLoggedIn })(FormikUserForm);