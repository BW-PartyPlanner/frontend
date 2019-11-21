import React from 'react';
import { Link, Route } from "react-router-dom";
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

import HostedParty from './HostedParty';

function HostedForm({ values, touched, errors }, props ) {

    return (
        <section className="hosted-form">
            <Form>
                <div>
                    <Field
                        type="text"
                        name= "name"
                        placeholder="Party's Name"
                        value={values.name}
                    />
                    {touched.name && errors.name && <p>{errors.name}</p>}
                    <Field
                        type="text"
                        name="theme"
                        placeholder="Theme"
                        value={values.theme}
                    />
                    {touched.theme && errors.theme && <p>{errors.theme}</p>}
                    <Field
                        type="text"
                        name="guestAmt"
                        placeholder="Number of Guests"
                        value={values.guestAmt}
                    />
                    {touched.guestAmt && errors.guestAmt && <p>{errors.guestAmt}</p>}
                </div>
                <div>
                    <Field 
                        type="text"
                        name="date"
                        placeholder="Date"
                        value={values.date}
                    />
                    {touched.date && errors.date &&   <p>{errors.date}</p>}
                    <Field 
                        type="text"
                        name="startTime"
                        placeholder="Start Time"
                        value={values.startTime}
                    />
                    {touched.startTime && errors.startTime && <p>{errors.startTime}</p>}
                    <Field
                        type="text"
                        name="endTime"
                        placeholder="End Time"
                        value={values.endTime}
                    />
                    {touched.endTime && errors.emdTime && <p>{errors.endTime}</p>}
                </div>
                <div>
                    <Field
                        type="text"
                        name="location"
                        placeholder="Location"
                        value={values.location}
                    />
                    {touched.location && errors.location && <p>{errors.location}</p>}
                </div>
                <div>
                    <Field
                        type="text"
                        name="budget"
                        placeholder="Budget"
                        value={values.budget}
                    />
                    {touched.budget && errors.budget && <p>{errors.budget}</p>}
                    <p>Remaining budget will go here when ready</p>
                </div>
                <div>
                    <Field
                        type="text"
                        name="itemList"
                        placeholder="Items Needed"
                        value={values.itemList}
                    />
                    {touched.itemList && errors.itemList && <p>{errors.itemList}</p>}
                    <Field
                        type="text"
                        name="itemCost"
                        placeholder=" Item Cost"
                        value={values.itemCost}
                    />
                    {touched.itemCost&& errors.itemCost && <p>{errors.itemCost}</p>}
                </div>
                <div>
                    <Field
                        type="textarea"
                        name="description"
                        placeholder="Description"
                        value={values.description}
                    />
                    {touched.description && errors.description && <p>{errors.description}</p>}
                </div>
                <button >Create</button>

                <Link to="/hostedParty">Go to Hosted Party</Link>
                
            </Form>
            <Route exact path='/hostedParty' component={HostedParty}/>
        </section>
    );
};

const FormikHostedForm = withFormik({
    mapPropsToValues({ name, theme, guestAmt, date, startTime, endTime, location, budget, itemList, itemCost, description }) {
        return {
            name: name || "",
            theme: theme || "",
            guestAmt: guestAmt || "",
            date: date || "",
            startTime: startTime || "",
            endTime: endTime || "",
            location: location || "",
            budget: budget || "",
            itemList: itemList || "",
            itemCost: itemCost || "",
            description: description || ""
        };
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required("You must name your party."),
        theme: Yup.string(),
        guestAmt: Yup.number().required("You must enter a number of guests"),
        date: Yup.date().required("Please enter your party's date."),
        startTime: Yup.string().required("Please enter a start time for your party."),
        endTime: Yup.string().required("Please enter the end time for your party."),
        location: Yup.string().required("Please enter a location for your party."),
        itemList: Yup.string().required("You must enter at least one item"),
        itemCost: Yup.number().required("Please enter the cost of your item"),
        budget: Yup.number().required("Please enter your budget"),
        description: Yup.string()  
    })
    //handleSubmit(values { props, resetForm, setSubmitting }) {
    //  axios
    //  .post("htps://reqres.in/api/users", values)
    //  .then(res => {
    //      console.log(res);
    //      props.setNewHosted(res.data);
    //      resetForm();
    //      setSubmitting(false);
   //   }) ;   
   // }
})(HostedForm);

export default FormikHostedForm;