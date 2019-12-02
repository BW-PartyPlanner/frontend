import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function Item({ item, id, dispatch }) {
  const partyId = id
  console.log(id)

  return (
    <div className='itemContainer'>
      <div className='item' onClick={() => dispatch({ type: 'TOGGLE_ITEM', payload: item })}>
        {item.isAccountedFor ? <del>{`${item.name}`}</del> : `${item.name}`}
      </div>
      <button className='editBtn'>
        <Link to={`/potluckparty/${partyId}/edititem/${item.id}`}>
          Edit
        </Link>
      </button>
    </div>
  )
}

export default Item;