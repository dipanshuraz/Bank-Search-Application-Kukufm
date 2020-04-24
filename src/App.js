import React from 'react';
import './App.css';
import Home from './routes/Home'
import { Route, Switch } from 'react-router-dom'
import BankDetails from './components/BankDetails'
import NotFound from './components/NotFound';

function App() {
  return (
    <div>
      <Switch>
        <Route path='/' exact={true} component={Home} />
        <Route path='/bank/:bankId' component={BankDetails} />
        <Route path='*' component={NotFound} />
      </Switch>
    </div >
  );
}

export default App;
