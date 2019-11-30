import React, {useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPartyById } from '../../store/actions/partyActions';

function Item(props) {
  const dispatch = useDispatch()
  const partyId = localStorage.getItem('partyId')
  console.log(props)
  
  useEffect(() => {
    dispatch(getPartyById())
  }, [dispatch])

  return (
    <div className='itemContainer'>
      <div className='item' onClick={() => dispatch({ type: 'TOGGLE_ITEM', payload: props.item })}>
        {props.item.isAccountedFor ? <del>{`${props.item.name}`}</del> : `${props.item.name}`}
      </div>
      <button className='editBtn'>
      <Link to={`potluckparty/${partyId}/edititem/${props.item.id}`}>
         Edit
      </Link>
    </button>
    </div>
  )
}

export default Item;