import React from 'react';
import { useDispatch } from 'react-redux';

function Item({ item }) {
  const dispatch = useDispatch()

  return (
    <>
      <div className='item' onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: item })}>
        {item.isAccountedFor ? <del>{`${item.name}`}</del> : `${item.name}`}
      </div>
    </>
  )
}

export default Item;