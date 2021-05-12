import React from 'react';


const Input = (props) => {
  console.log(props)
  const inputStyle = {
    margin: 'auto',
    position: 'relative',
    backgroundColor: 'cream'
  }
  const message = {
    fontFamily: 'Titillium Web, sans-serif',
    margin: 'auto'
  }
  if(props.gameStart === true) {
    return <input style={inputStyle} type='text'/>
  } else {
    return <button onClick={props.handleGameStart} style={message}>Yer Ourright!</button>
  } 
}



export default Input;