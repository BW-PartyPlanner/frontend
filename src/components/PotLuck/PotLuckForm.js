import React from 'react';
import { connect } from 'react-redux';
import { createParty } from '../../store/actions/partyActions.js';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

const PotLuckForm = ({ values, touched, errors }) => {

   
    
    return (
        <section className="pot-luck-form">
            <Form className="pot-luck">
                <div className="name-theme-numOfGuests">
                    <Field 
                        type="text"
                        name="name"
                        placeholder="Party's Name"
                        value={values.name}
                    />
                        {touched.name && errors.name && <p>{errors.name}</p>}
                </div>
                <div className= "date-times">
                    <Field 
                        type="text"
                        name="date"
                        placeholder="Date"
                        value={values.date}
                    />
                    {touched.date && errors.date &&   <p>{errors.date}</p>}
                    
                </div>   
                <div>
                     <button className="pot-luck-button" type="submit" >Create</button>
                </div>
               
            </Form>
        </section>
    );
};

const FormikPotLuckForm = withFormik({
    mapPropsToValues({ name, date }) {
        return {
            name: name || "",
            date: date || ""
        };
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required("You must name your party."),
        date: Yup.date().required("Please enter your party's date."),
        
    }),

    handleSubmit(values, formikBag) {
        formikBag.props.createParty(values);
        formikBag.props.history.push('/PotLuckParty')
        console.log(values, "console log from handle summit")
    }

    
 
})(PotLuckForm);


export default connect(null, {createParty})(FormikPotLuckForm);