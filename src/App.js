import React, { Component } from "react";
import './App.css';
import Home from './container/Home';
import Login from './components/Login';
import Register from './components/Register';
import AdminNav from './components/authuseronly/AdminNav';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import UpdateCarousel from './components/authuseronly/UpdateCarousel';
import UpdateContent from './components/authuseronly/UpdateContent';
import UpdateLogo from './components/authuseronly/UpdateLogo';

class App extends Component { 
  render() { 
    return (
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/admin/chcarousel" component={UpdateCarousel} /> 
            <Route path="/admin/upcontent" component={UpdateContent} /> 
            <Route path="/admin/chlogo" component={UpdateLogo} />
            <Route path="/admin" component={AdminNav} /> 
          </Switch>
        </BrowserRouter>
    );
  }
}
export default App;