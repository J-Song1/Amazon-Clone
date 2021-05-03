import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route path="/checkout">
            Checkout
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
