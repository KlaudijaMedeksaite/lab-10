import React, {Component} from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Content from './components/content';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar bg="primary" variant="dark">
            <Nav className="mr-auto">
              <Nav.Link href="home">Home</Nav.Link>
              <Nav.Link href="read">Read</Nav.Link>
              <Nav.Link href="create">Create</Nav.Link>
            </Nav>
          </Navbar>
    <Switch>
      <Route exact path="/home" component={Content}/>
      <Route path="/read" component={Header}/>
      <Route path="/create" component={Footer}/>
    </Switch>
      </div>
      </BrowserRouter>
    );
  }
  
}

export default App;
