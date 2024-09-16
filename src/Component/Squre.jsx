import React from 'react'

const Squre = (props) => {


  return (
    <div className='squre' onClick={props.onClick}>{props.val}</div>
  )
}

export default Squre