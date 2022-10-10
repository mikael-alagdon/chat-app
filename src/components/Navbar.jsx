import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>chat app</span>
      <div className="user">
        <img src="https://scontent.fmnl5-2.fna.fbcdn.net/v/t1.15752-9/309685129_489481792891006_6052745526547628818_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=iD2Kf7kTEbEAX-zIun1&_nc_ht=scontent.fmnl5-2.fna&oh=03_AVJWYuVQGuDpWI05qyoXgh8da_JS0PGxEioqxsu7EducEw&oe=6368F588" alt="" />
        <span>snowy gagay</span>
        <button>logout</button>
      </div>
      
    </div>
    
  )
}

export default Navbar