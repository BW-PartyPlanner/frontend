import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function Item({ item }) {
  const dispatch = useDispatch()

  return (
    <div className='itemContainer'>
      <div className='item' onClick={() => dispatch({ type: 'TOGGLE_ITEM', payload: item })}>
        {item.isAccountedFor ? <del>{`${item.name}`}</del> : `${item.name}`}
      </div>
      <button className='editBtn'>
      <Link to={`/edititem/${item.id}`}>
         Edit
      </Link>
    </button>
    </div>
  )
}

export default Item;