import React, { useState, useEffect } from 'react';
import Item from './Item';
// import ItemForm from './ItemForm';
import { axiosWithAuth as axios } from '../../utils/axiosUtils';

function ItemList(props) {
  const [items, setItems] = useState([])
  console.log(items)

  useEffect(() => {
    axios()
      .get('/items')
      .then(res => {
        setItems(res.data)
      })
      .catch(err => {
        console.log(err, "Unable to get data.")
      })
  }, [])

  return (
  
    <div className='listContainer'>
      <div className="formContainer">
        {/* <ItemForm /> */}
      </div>
      <div className='listItems'>
        {items.map(item => <Item key={item.id} item={item} {...props} id={props.id} />)}
      </div>
    </div>
  )
}

export default ItemList;