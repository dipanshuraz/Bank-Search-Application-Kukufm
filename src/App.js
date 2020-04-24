import React from 'react';
import './App.css';
import Home from './routes/Home'
import { Route, Switch } from 'react-router-dom'
import BankDetails from './components/BankDetails'

function App() {
  return (
    <div>
      <Switch>
        <Route path='/' exact={true} component={Home} />
        <Route path='/bank/:bankId' component={BankDetails} />
      </Switch>
    </div >
  );
}

export default App;
