import React from 'react';
import { connect } from 'react-redux';
import { createParty , getPartyById , getParties} from '../../store/actions/partyActions.js';
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

                        type="date"
                        name="date"
                        placeholder="Date"
                        value={values.date}

                
                    />
                    {touched.date && errors.date &&   <p>{errors.date}</p>}
                    
                </div> 

                  <div className= "date-times">
                    <Field 

                        type="number"
                        name="budget"
                        placeholder="Budget"
                        value={values.budget}

                
                    />
                    {touched.budget && errors.budget &&   <p>{errors.budget}</p>}
                    
                </div>     
                <div>
                     <button className="pot-luck-button" type="submit" >Create</button>
                </div>
               
            </Form>
        </section>
    );
};

const FormikPotLuckForm = withFormik({
    mapPropsToValues({ name, date, budget }) {
        return {
            name: name || "",
            date: date || "",
            budget: budget || 0
        };
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required("You must name your party."),
        date: Yup.date().required("Please enter your party's date."),
        budget: Yup.number().required("You must have a budget"),
        
    }),

    handleSubmit(values, formikBag) {
        formikBag.props.createParty({ user_id: formikBag.props.user_id, ...values });
        formikBag.props.history.push(`/PotLuckPartyCreated`);
        // localStorage.setItem("party", values.name)
        // localStorage.setItem("budget", values.budget)
        // localStorage.setItem("date", values.date)
      
      
       
    }

    
 
})(PotLuckForm);

const mapStateToProps = ({ userReducer }) => ({
    user_id: userReducer.user_id
})

export default connect(mapStateToProps, {createParty})(FormikPotLuckForm);