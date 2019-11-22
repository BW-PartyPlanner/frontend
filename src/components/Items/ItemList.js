import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItems } from '../../store/actions/itemActions';

function ItemList() {
  const [items, setItems] = useState([])

  useEffect(() => {
    
  })

  return (
    <div>
      Items from ItemForm
    </div>
  )
}

export default ItemList