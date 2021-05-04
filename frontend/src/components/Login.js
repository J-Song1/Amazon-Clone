import React, { useState } from 'react'
import './Login.css'

import { Link } from 'react-router-dom'
import { auth } from '../firebase'
import { useHistory } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const history = useHistory()

  const signIn = e => {
    e.preventDefault()
    console.log('Clicked')

    // Firebase login
    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        history.push('/')
      })
      .catch(err => {
        console.error(err)
      })
  }

  const register = e => {
    e.preventDefault()

    // Firebase register
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(auth => {
        // On successful authentication
        if (auth) {
          history.push('/')
        }
      })
      .catch(err => {
        console.error(err)
      })
  }

  return (
    <div className="login">
      <Link to='/'>
        <img
            className="login__logo"
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>Email</h5>
          <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

          <h5>Password</h5>
          <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

          <button className="login__signInButton" onClick={signIn}>Sign In</button>
        </form>

        <p>
          By signing-in, you agree to Amazon's Conditions of Use & Sale. Please see your Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
        </p>

        <button className="login__registerButton" onClick={register}>Create Account</button>
      </div>
    </div>
  )
}


export default Login
