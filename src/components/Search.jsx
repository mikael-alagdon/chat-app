import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">  
        <input type="text" placeholder='search contact' />
      </div>
      <div className="userChat">
        <img src="https://scontent.fmnl5-2.fna.fbcdn.net/v/t1.15752-9/310163489_829231384915566_5161506343805344993_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_ohc=V6hacALTxJwAX8--_C_&_nc_ht=scontent.fmnl5-2.fna&oh=03_AVKOiA_AEe_XHeO-WgNU9KBcgPXmTS8A21gE3TfsVMeMcw&oe=63695BA5" alt="" />
        <div className="userChatInfo">
          <span>misty bundat</span>
        </div>
      </div>
    </div>
  )
}

export default Search