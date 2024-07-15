import React from 'react'

const Modal = ({setshow}) => {
  return (
    <div className='Modal'>
      <div className="box">
        <button onClick={()=>setshow(false)}>X</button>
        <h1>hello</h1>
        <h2>hi</h2>
      </div>
    </div>
  )
}

export default Modal
