import React from 'react'
// import Send from "../images/send.png";
import Attach from "../images/addphoto.png";
import Send from "../images/send.png";

const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='type something...'/>
      <div className="send">
        <input type="file" style={{display: "none"}} id='file' />
        <label htmlFor="file">
          <img src={Attach} alt="" />
        </label>
        <button id='send' style={{display: "none"}} ></button>
        <label htmlFor="send">
          <img src={Send} alt="send message" />
        </label>
      </div>
    </div>
  )
}

export default Input