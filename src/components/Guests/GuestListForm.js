import React from 'react';
import { withFormik, Field, Form } from 'formik';
import * as Yup from 'yup';

import GuestList from './GuestList';

 function GuestListForm ({ values }, props) {

    return (
        <section className="guest-list">
            <Form>
                <div>
                    <Field
                        type="text"
                        name="guestName"
                        placeholder="Guest Name"
                        value={values.guestName}
                    />
                    <button>Add Guest To List</button>
                </div>
            </Form>
            <div>
                <GuestList />
            </div>
        </section>
    );
}


const FormikGuestListForm = withFormik({
    mapPropsToValues({ guestName }) {
        return {
            guestName: guestName || ""
        };
    },
    validationSchema: Yup.object().shape({
        guestName: Yup.string()
    })
    // handleSubmit(values, { props, resetForm, setSubmitting }) {
    //     axios
    //     .post("https://reqres.in/api/users", values)
    //     .then(res => {
    //         console.log(res);
    //         props.setGuests(res.data);
    //         resetForm();
    //         setSubmitting(false);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //         setSubmitting(false);
    //     });
   // }
})(GuestListForm);

export default FormikGuestListForm;