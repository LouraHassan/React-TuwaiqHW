import React from 'react'

function Step(props) {
  return (
    <div className='d-flex flex-column align-items-center justify-content-center text-center'>
          <div className='icon-div-1'><img src={props.icon} alt="icon" /></div>
          <h5>{props.text}</h5>
    </div>
  )
}

export default Step
