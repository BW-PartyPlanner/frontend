import React, { useState, useEffect } from 'react';
import { getItems } from '../../store/actions/itemActions';
import { useDispatch, useSelector } from 'react-redux';
import Item from './Item';
import ItemForm from './ItemForm';

function ItemList() {
  const dispatch = useDispatch()
  const items = useSelector(state => state.items)
  console.log(items)

  useEffect(() => {
    dispatch(getItems())
  }, [dispatch])

  return (
    <div className='listContainer'>
      <div className="formContainer">
        <ItemForm />
      </div>
      <div className='listItems'>
        {items.map(item => <Item key={item.id} item={item} />)}
      </div>
    </div>
  )
}

export default ItemList;