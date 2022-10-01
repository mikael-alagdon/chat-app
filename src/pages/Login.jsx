import React from 'react'

const Login = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className="logo">chat app</span>
            <span className="title">register</span>
            <form>
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
                <button>sign in</button>
            </form>
            <p>don't have an account? <a href=''>register here</a></p>
        </div>
    </div>
  ) 
}

export default Login