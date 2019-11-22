import React from "react";
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { createItem, deleteItem } from '../../store/actions/itemActions';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const ItemForm = ({ values, touched, errors }) => {
  const dispatch = useDispatch()

  return (
    <div className="itemFormContainer">
      <Form className='itemForm'>
        <h1>ADD <br /> ITEMS</h1>
        <hr />
        <Field 
          type="text"
          name="name"
          placeholder="Name"
          className='itemInput'
          value={values.name}
        />
        {touched.name && errors.name && <p>{errors.name}</p>}

        <Field
          type="text"
          name="description"
          placeholder="Description"
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
          
          <button className="removeBtn" type='delete' onClick={() => dispatch({ type: 'REMOVE_TODO' })}>
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
    cost: Yup.string().required("Cost of item")
  }),

  handleSubmit(values, formikBag) {
    console.log(formikBag.props)
    formikBag.props.createItem(values);
    formikBag.resetForm()
  }
})(ItemForm);

export default connect(null, { createItem, deleteItem })(FormikItemForm);