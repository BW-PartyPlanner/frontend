import React, { useState, useEffect } from "react";
import axios from "axios";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const UserForm = ({values, touched, errors, status}) => {

    return (
        <div className="user-form">
            <Form>
                <Field
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={values.firstName}
                />
                {touched.firstName && errors.firstName && <p>{errors.firstName}</p>}
                
                <Field
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={values.lastName}
                />
                {touched.lastName && errors.lastName && <p>{errors.lastName}</p>}

                <Field
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={values.email}
                />
                {touched.email && errors.email && <p>{errors.email}</p>}

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
    mapPropsToValues({firstName, lastName, email, password}) {
        return {
            firstName: firstName || "",
            lastName: lastName || "",
            email: email || "",
            password: password || ""
        };
    },

    validationSchema: Yup.object().shape({
        firstName: Yup.string().required("What is your first name?"),
        lastName: Yup.string().required("What is your last name?"),
        email: Yup.string().required("What is your email?"),
        password: Yup.string().required("Please enter a password.")
    }),

    handleSubmit(values, { setStatus }) {
        axios().post("/", values)
        .then(res => {
            setStatus(res.data);
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        });
    }
})(UserForm);
console.log(FormikUserForm);

export default FormikUserForm;