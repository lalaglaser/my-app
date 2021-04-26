import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './Components/About';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import { render } from '@testing-library/react';


class AppRouter extends React.Component {

  render(){
    
    return(
      <Router>

      <div className="app">

        <nav className="main-nav">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>

        </nav>

      <Switch>
        <Route path="/"exact component={App} />
        <Route path="/login"exact component={Login} />
        <Route path="/register"exact component={Register} />
      </Switch>




      </div>


      </Router>

    );

  }


}




ReactDOM.render(<AppRouter />, document.getElementById('root'));

reportWebVitals();
