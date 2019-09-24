import React from 'react';
import 'rsuite/dist/styles/rsuite-default.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Admin from './pages/Admin/Admin';
import Company from './pages/Company/Company';
import Plan from './pages/Plan/Plan';
import {useDispatch} from 'react-redux';
import axios from 'axios';

function App() {

  const user = JSON.parse(localStorage.getItem('auth_gest_adm'));
  const dispatch = useDispatch();

  
  try {
    dispatch({type:'ADMIN',payload:user});  
    if(user.credentials){
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + user.token;
    }
  } catch (error) {
    console.log(error,'ADMIN Unauthorize');
  }
  
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
