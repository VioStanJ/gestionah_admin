import React from 'react';
import 'rsuite/dist/styles/rsuite-default.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Login from './pages/Login/Login';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
