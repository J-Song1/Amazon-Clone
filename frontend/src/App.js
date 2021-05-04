import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Login from './components/Login'
import Checkout from './components/Checkout'
import Payment from './components/Payment'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import { useEffect } from 'react'
import { auth } from './firebase'
import { useStateValue } from './StateProvider'

import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const promise = loadStripe('pk_test_51InCWTEc3fUrbgHxM4YDtELlRrgYnOufvQ09cB2chSJlAoCG1ExvGHPdx2pEgt6r9oHO7vLHUrewGCWU3SGJXyiN002n4vKcej')

function App() {
  const [{}, dispatch] = useStateValue()


  // Only run on mount
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      // If user is logged in
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
