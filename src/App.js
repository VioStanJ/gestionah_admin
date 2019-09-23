import React from 'react';
import 'rsuite/dist/styles/rsuite-default.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Admin from './pages/Admin/Admin';
import Company from './pages/Company/Company';
import Plan from './pages/Plan/Plan';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/admin" component={Admin}/>
        <Route exact path="/companies" component={Company}/>
        <Route exact path="/plans" component={Plan}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
