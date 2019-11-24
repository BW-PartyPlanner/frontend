import React, { useState, useEffect } from 'react';
import Item from './Item';
import ItemForm from './ItemForm';
import { axiosWithAuth as axios } from '../../utils/axiosUtils';

function ItemList() {
  const [items, setItems] = useState([])
  const [updateItems, setUpdateItems] = useState(false)
  console.log(items, updateItems)

  useEffect(() => {
    axios()
      .get('/items')
      .then(res => {
        setItems(res.data)
      })
      .catch(err => {
        console.log(err, "Unable to get data.")
      })
  }, [updateItems])

  const toggleUpdateItems = () => {
    setUpdateItems(!updateItems)
  }

  return (
  
    <div className='listContainer'>
      <div className="formContainer">
        {/* <ItemForm /> */}
      </div>
      <div className='listItems'>
        {items.map(item => <Item key={item.id} item={item} toggleUpdateItems={toggleUpdateItems} />)}
      </div>
    </div>
  )
}

export default ItemList;