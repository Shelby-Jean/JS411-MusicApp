import React from 'react';
import { TextField, Button } from '@material-ui/core';
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard';
import 'fontsource-roboto';
import './App.css';

class App extends React.Component {
  state = {
    loggedIn: false,
  }

  login = () => {
    this.setState({
      loggedIn: true,
    })
  }

  render() {
    return (
      <div>
        <NavBar />

        {this.state.loggedIn ? <Dashboard /> : (
         <div className="form-container">
          <form className="login-form">
            <TextField label="Username" required />
            <TextField label="Password" type="password" required />
            <br/>
            <Button variant="contained" color="primary" onClick={this.login}>LOGIN</Button>
          </form>
        </div>
        )}
        
      </div>
    )
  }
}

export default App;