import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { loginUser } from '../store/actions/loginActions';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const LoginForm = ({ values, touched, errors, status }) => {

    return (
        <div className="user-form">
            <Form>
                <Field
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={values.username}
                />
                {touched.username && errors.username && <p>{errors.username}</p>}

                <Field
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={values.password}
                />
                {touched.password && errors.password && <p>{errors.password}</p>}

                <button type="submit">Submit</button>
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
      formikBag.resetForm()
      formikBag.setStatus()
  }
})(LoginForm);

export default connect(null, { loginUser })(FormikUserForm);