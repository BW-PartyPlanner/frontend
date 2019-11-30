import React from "react";
import { useDispatch } from 'react-redux';
import { editItem } from '../../store/actions/itemActions';

const EditItemForm = (props) => {
  const dispatch = useDispatch()

  return (
    <div className="editFormContainer">
      <form className='editForm'>
        <h1>Edit <br /> ITEM</h1>
        <hr />
        <input
          type="text"
          name="name"
          placeholder="Name"
          className='itemInput'
          // value={name}
        />
        

        <input
          type="text"
          name="description"
          placeholder="Description"
          className='itemInput'
          // value={description}
        />

        <input
          type="text"
          name="cost"
          placeholder="Cost"
          className='itemInput'
          // value={cost}
        />

        <div className='btnContainer'>
          <button className='submitBtn' type='submit'>
            Submit
          </button>
          
          <button className="removeBtn" type='delete' onClick={() => dispatch({ type: 'REMOVE_TODO' })}>
            Remove
          </button>
        </div>
      </form> 
  </div>
  );
};

export default EditItemForm;