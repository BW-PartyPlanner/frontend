import React, {useState, useEffect} from 'react';

function PartyInfo(props) {
    console.log(props)
    const [state, setState] = useState({
        partyName: localStorage.getItem('party'),
        date: localStorage.getItem('date'),
        budget: localStorage.getItem('budget')
    
    })

    useEffect( () => {
        setState( {
            partyName: localStorage.getItem('party'),
            date: localStorage.getItem('date'),
            budget: localStorage.getItem('budget')
        
        })
    }, [])
  
return (

    <div className="pl-name-div">
        <h1>Party's name:</h1>
            <h1 className="pl-pot-luck-name">
                {state.partyName ? `${state.partyName}`: 'Party name'}
            </h1>
        <div className="pl-date-time-location">
            <h3>Date of Party</h3>
            <p className="pl-time"> 
                    {state.date ? `${state.date}`: 'date not available'}
            </p>
        </div>
        <button className="pl-edit-button" onClick={() => props.editParty()}>Edit</button>
    </div>

)


}

export default PartyInfo;