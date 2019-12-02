import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocalStorage } from '../../hooks/useLocalStorage';

function ItemFormBackup({ dispatch, state }) {
  const [formValue, setFormValue] = useState('')
  const [itemID, setItemID] = useLocalStorage('item', {...state})

  const handleChange = (e) => {
    setFormValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formValue !== '') {
      dispatch({ type: 'ADD_ITEM', payload: formValue.toUpperCase() })
      setFormValue('')
    }
    setItemID(formValue)
  }

  return (
    <div className="itemFormContainer">
      <form className='itemForm' onSubmit={handleSubmit}>
        <h1>Add <br /> Items</h1>
        <hr />
        <input 
        name="item"
        value={formValue}
        placeholder='Add Item...'
        className='itemInput'
        onChange={handleChange}
        />

        <div className='btnContainer'>
          <button className='submitBtn' type='submit'>
            Submit
          </button>
          
          <button className="removeBtn" onClick={() => dispatch({ type: 'REMOVE_ITEM' })}>
            Remove
          </button>
        </div>
      </form>
    </div>
  )
}

export default ItemFormBackup;