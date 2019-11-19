import React, { useState, useEffect } from "react";
import axios from "axios";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const LoginForm = ({values, touched, errors, status}) => {
    //const [users, setUsers] = useState([]);
    // useEffect(() => {
    //     status && setUsers(users => [...users, status]);
    // }, [status]);

    return (
        <div className="user-form">
            <Form>
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
    mapPropsToValues({email, password}) {
        return {
            email: email || "",
            password: password || ""
        };
    },

    validationSchema: Yup.object().shape({
        email: Yup.string().required("Please enter an email."),
        password: Yup.string().required("Password incorrect.")
    }),

    // handleSubmit(values, { setStatus }) {
    //     axios.post("", values)
    //     .then(res => {
    //         setStatus(res.data);
    //         console.log(res);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     });
    // }
})(LoginForm);
console.log(FormikUserForm);

export default FormikUserForm;