import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { editItem, deleteItem } from '../../store/actions/itemActions';
import { axiosWithAuth as axios } from '../../utils/axiosUtils';

const EditItemForm = (props) => {
  const [newItem, setNewItem] = useState({
    id: '',
    name: '',
    description: '',
    cost: 0,
    party_id: 1,
    user_id: 1,
    isAccountedFor: false,
  })
  console.log(newItem)
  console.log(props.match.params.id)
  const dispatch = useDispatch()
  const id = props.match.params.id

  useEffect(() => {
    axios()
    .get(`items/${id}`)
    .then(res => {
      console.log(res.data)
      setNewItem(res.data)
    })
    .catch(err => {
      console.log(err.response);
    })
  }, [id])

  const handleChange = (e) => {
    setNewItem({
      ...newItem, 
      [e.target.name]: e.target.value
    })
    console.log(e.target.value)
  } 

  const handleSubmit = (e) => {
		e.preventDefault()
		console.log(id, newItem)
    dispatch(editItem(id, newItem))
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
          value={newItem.name}
          onChange={handleChange}
        />
        
        <input
          type="text"
          name="description"
          placeholder="Description"
          className='itemInput'
          value={newItem.description}
          onChange={handleChange}
        />

        <input
          type="text"
          name="cost"
          placeholder="Cost"
          className='itemInput'
          value={newItem.cost}
          onChange={handleChange}
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