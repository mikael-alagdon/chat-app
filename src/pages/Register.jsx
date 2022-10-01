import React from 'react'

const Register = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className="logo">chat app</span>
            <span className="title">register</span>
            <form>
                <input type="text" placeholder='display name'/>
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
                <input style={{display: "none"}} type="file" id="file" />
                <label htmlFor="file">
                    add avatar
                </label>
                <button>sign up</button>
            </form>
            <p>have an account? <a href=''>log in here</a></p>
        </div>
    </div>
  ) 
}

export default Register