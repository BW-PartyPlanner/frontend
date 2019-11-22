import React from "react";
import { connect } from 'react-redux';
import { createItem, deleteItem } from '../../store/actions/itemActions';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const ItemForm = ({ values, touched, errors }) => {

  return (
    <div className="itemForm">
      <Form className='itemForm'>
        <Field 
          type="text"
          name="name"
          placeholder="name"
          className='itemInput'
          value={values.name}
        />
        {touched.name && errors.name&& <p>{errors.name}</p>}

        <Field
          type="text"
          name="description"
          placeholder="description"
          className='itemInput'
          value={values.description}
        />
        {touched.description && errors.description && <p>{errors.description}</p>}

        <Field
          type="text"
          name="cost"
          placeholder="Cost"
          className='itemInput'
          value={values.cost}
        />
        {touched.cost && errors.cost && <p>{errors.cost}</p>}

        <div className='btnContainer'>
          <button className='submitBtn' type='submit'>
            Submit
          </button>
          
          <button className="removeBtn" onClick={(e) => deleteItem(e.target.value)}>
            Remove
          </button>
        </div>
      </Form> 
  </div>
  );
};

const FormikItemForm = withFormik({
  mapPropsToValues( {name, description, cost }) {
    return {
      name: name || "",
      description: description || "",
      cost: cost || 0,
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required("What is the item name?"),
    description: Yup.string().required("Describe the item."),
    username: Yup.string().required("Cost of item")
  }),

  handleSubmit(values, formikBag) {
    console.log(formikBag.props)
    formikBag.props.createItem(values);
    formikBag.resetForm()
  }
})(ItemForm);

export default connect(null, { createItem })(FormikItemForm);