import React from "react";
import { connect } from 'react-redux';
import { createItem } from '../../store/actions/itemActions'
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const ItemForm = ({ values, touched, errors }) => {

  return (
    <div className="itemForm">
      <Form>
        <Field 
          type="text"
          name="name"
          placeholder="name"
          value={values.name}
        />
        {touched.name && errors.name&& <p>{errors.name}</p>}

        <Field
          type="text"
          name="description"
          placeholder="description"
          value={values.description}
        />
        {touched.description && errors.description && <p>{errors.description}</p>}

        <Field
          type="text"
          name="cost"
          placeholder="Cost"
          value={values.cost}
        />
        {touched.cost && errors.cost && <p>{errors.cost}</p>}

        <button type="submit">Submit</button>
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

export default connect(null, { createItem})(FormikItemForm);