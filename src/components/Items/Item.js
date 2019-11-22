import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../../store/actions/itemActions';

function Item({ item, toggleUpdateItems }) {
  const dispatch = useDispatch()

  return (
    <>
      <div className='item' onClick={() => dispatch(deleteItem(item.id), toggleUpdateItems())}>
        {item.isCompleted ? <del>{`${item.name}`}</del> : `${item.name}`}
      </div>
    </>
  )
}

export default Item;