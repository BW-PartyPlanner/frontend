import React, { useContext } from 'react';
import Item from './Item';
import ItemFormBackup from './ItemFormBackup';
import { ItemContext } from '../../contexts/ItemContext';

function ItemList(props) {
  const { state, dispatch } = useContext(ItemContext)
  console.log(props.id)
  console.log(state.items)

  return (
  
    <div className='listContainer'>
      <div className="formContainer">
        <ItemFormBackup dispatch={dispatch} state={state}/>
      </div>
      <div className='listItems'>
        {state.items.map(item => <Item key={item.id} item={item} id={props.id} dispatch={dispatch} />)}
      </div>
    </div>
  )
}

export default ItemList;