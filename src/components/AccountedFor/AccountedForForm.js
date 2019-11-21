import React from 'react';
import { withFormik, Field, Form } from 'formik';
import * as Yup from 'yup';

function AccountedForForm ({ values }) {

    return (
        <section className="accounted-for">
            <Form>
                <div>
                    <Field
                        type="text"
                        name="accountedFor"
                        placeholder="Items Accounted For"
                        // value={values.accountedFor}
                    />
                    <button>Add To Accounted For</button>
                </div>
            </Form>
        </section>
    );
}

const FormikAccountedForForm = withFormik({
    mapPropsToValues({ accountedFor }) {
        return {
            accountedFor: accountedFor || ""
        };
    },
    validationSchema: Yup.object().shape({
        accountedFor: Yup.string()
    })
})(AccountedForForm);



export default FormikAccountedForForm;