import React from 'react'
import {Link} from 'react-router-dom'

const Login = () => {
    return (
        <div className="auth d-flex flex-column align-items-center justify-content-center">
            <h1 className="auth-title">Login</h1>
            <form className="form d-flex flex-column">
                <input className="auth-input" type="text" placeholder='Username'/>
                <input className="auth-input" type="password" placeholder='Password'/>
                <button className="auth-button mt-1">Login</button>
                <p className="auth-caution mb-0">This is an error!</p>
                <span className='auth-question'>Do you have an account yet? <Link to="/login" className='auth-link'>Register</Link>                    
                </span>
            </form>
        </div>
    )
}

export default Login