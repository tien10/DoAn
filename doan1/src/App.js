import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import SignIn from './SignIn'
import SignUp from './SignUp'

function App() {
  return (
    <Router>
      <div>

        <div className="navbar">
          <ul className="nav navbar-nav navbar-brand">
            <li className="active">
              <Link exact = "true" to = "/SignIn">Sign in</Link>
            </li>
            <li>
              <Link to = "/SignUp">Sign up</Link>
            </li>
          </ul>
        </div>

        <Route exact path = "/SignIn" component = { SignIn }></Route>
        <Route exact path = "/SignUp" component = { SignUp }></Route>
      </div>      
    </Router>
  );
}

export default App;
