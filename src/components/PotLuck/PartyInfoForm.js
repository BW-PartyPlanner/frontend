import React , {useState} from 'react';
import { connect } from 'react-redux';
import {updateParty} from '../../store/actions/partyActions'

function PartyInfoForm(props) {

    const [state, setState] = useState({
        name: '',
        date: '',
        budget: 0

    })

    function handleChange(e){
      setState({
          ...state,
          [e.target.name]: e.target.value
      })
    }

    function putParty(e){
        e.preventDefault()
        props.updateParty(props.id, state)
        props.updated()

    }


return (

<div className="pl-name-div">
        <form  className='party-info-form'>
          <label for="name">new party's name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="PARTY'S NAME"
            onChange={handleChange}
            value={state.name}
          />
           <label for="date">new party's date</label>
          <input
            type="text"
            name="date"
            id="date"
            placeholder="11/13/2020"
            onChange={handleChange}
            value={state.date}
          />
           <label for="budget">new party's budget</label>
          <input
            type="text"
            name="budget"
            id="budget"
            placeholder="$3000.00"
            onChange={handleChange}
            value={state.budget}
          />

          <button className="quotes-btn" onClick={putParty}>
            UPDATE
          </button>
        </form>
</div>

)


}

export default connect(null,{updateParty})(PartyInfoForm)
