import React from 'react';
import { Link } from "react-router-dom";
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

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
                   
                </div>
                <div>
                    <Field 
                        type="text"
                        name="date"
                        placeholder="Date"
                        value={values.date}
                    />
                    {touched.date && errors.date &&   <p>{errors.date}</p>}
                   
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
               

                <Link to="/hostedParty">
                    <button >Create</button>

                </Link>
                
            </Form>
            
        </section>
    );
};

const FormikHostedForm = withFormik({
    mapPropsToValues({ name,  date,  budget, itemList, itemCost }) {
        return {
            name: name || "",
            date: date || "",
            budget: budget || "",
            itemList: itemList || "",
            itemCost: itemCost || ""
        };
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required("You must name your party."),
        date: Yup.date().required("Please enter your party's date."),
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