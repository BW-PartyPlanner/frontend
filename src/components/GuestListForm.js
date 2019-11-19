import React from 'react';
import { withFormik, Field, Form } from 'formik';
import * as Yup from 'yup';

 function GuestListForm ({ values }) {

    return (
        <section className="guest-list">
            <Form>
                <div>
                    <Field
                        type="text"
                        name="guestName"
                        placeholder="Guest Name"
                        // value={values.guestName}
                    />
                    <button>Add Guest To List</button>
                </div>
            </Form>
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
})(GuestListForm);

export default FormikGuestListForm;