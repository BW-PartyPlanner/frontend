import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';


function PotLuckForm({ values, touched, errors }, props ) {
  

    return (
        <section className="pot-luck-form">
            <Form>
                <div>
                    <Field
                        type="text"
                        name="name"
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
                        placeholder="Number Of Guests"
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
                        name="itemList"
                        placeholder="List Item"
                        value={values.itemList}
                    />
                    {touched.itemList && errors.itemList && <p>{errors.itemList}</p>}
                    <Field
                        type="text"
                        name="itemQty"
                        placeholder="Quantity"
                        value={values.itemQty}
                    />
                    {touched.itemQty && errors.itemQty && <p>{errors.itemQty}</p>}
                    
                </div>
                <div>
                    <Field  
                        type="text"
                        name="foodItem"
                        placeholder="Food Item"
                        value={values.foodItem}
                    />
                    {touched.foodItem && errors.foodItem && <p>{errors.foodItem}</p>}
                    <Field
                        type="text"
                        name="foodQty"
                        placeholder="Quantity"
                        value={values.foodQty}
                    />
                    {touched.foodQty && errors.foodQty && <p>{errors.foodQty}</p>}
                    
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

                <Link to="/PotLuckParty">
                    Go To Pot Luck Party
                </Link>
                
            </Form>
        </section>
    );
};

const FormikPotLuckForm = withFormik({
    mapPropsToValues({ name, theme, guestAmt, date, startTime, endTime, location,  itemList, itemQty, foodItem, foodQty, description }) {
        return {
            name: name || "",
            theme: theme || "",
            guestAmt: guestAmt || "",
            date: date || "",
            startTime: startTime || "",
            endTime: endTime || "",
            location: location || "",
            itemList: itemList || "",
            itemQty: itemQty || "",
            foodItem: foodItem || "",
            foodQty: foodQty || "",
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
        itemQty: Yup.number().required("You must enter at least one"),
        foodItem: Yup.string(),
        foodQty: Yup.number(),
        description: Yup.string()
    })
    // handleSubmit(values, { props, resetForm, setSubmitting }) {
    //     axios
    //     .post("https://reqres.in/api/users", values)
    //     .then(res => {
    //         console.log(res);
    //         props.setNewParty(res.data);
    //         resetForm();
    //         setSubmitting(false);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //         setSubmitting(false);
    //     });
    // }
})(PotLuckForm);

export default FormikPotLuckForm;