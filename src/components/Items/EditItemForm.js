import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { editItem, deleteItem } from '../../store/actions/itemActions';
import { axiosWithAuth as axios } from '../../utils/axiosUtils';

const EditItemForm = (props) => {
  const [newItem, setNewItem] = useState({
    name: '',
    description: '',
    cost: 0
  })
  console.log(props.match.params.id)
  const dispatch = useDispatch()

  useEffect(() => {
    axios()
    .get(`items/${props.match.params.id}`)
    .then(res => {
      console.log(res.data)
      setNewItem(res.data)
    })
    .catch(err => {
      console.log(err.response);
    })
  }, [props.match.params.id])

  const handleChange = (e) => {
    setNewItem({
      ...newItem, 
      [e.target.name]: e.target.value
    })
    console.log(e.target.value)
  } 

  const handleSubmit = (e) => {
		e.preventDefault()
		
    dispatch(editItem(newItem.id, newItem))
	}

  return (
    <div className="editFormContainer">
      <form className='editForm' onSubmit={handleSubmit}>
        <h1>Edit <br /> ITEM</h1>
        <hr />
        <input
          type="text"
          name="name"
          placeholder="Name"
          className='itemInput'
          onChange={handleChange}
          value={newItem.name}
        />
        
        <input
          type="text"
          name="description"
          placeholder="Description"
          className='itemInput'
          onChange={handleChange}
          value={newItem.description}
        />

        <input
          type="text"
          name="cost"
          placeholder="Cost"
          className='itemInput'
          onChange={handleChange}
          value={newItem.cost}
        />

        <div className='btnContainer'>
          <button className='submitBtn' type='submit'>
            Update
          </button>
          
          <button className="removeBtn" type='delete' onClick={() => dispatch(deleteItem(newItem.id))}>
            Remove
          </button>
        </div>
      </form> 
  </div>
  );
};

export default EditItemForm;