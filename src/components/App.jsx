import React from 'react';
import { Switch, Route } from 'react-router-dom';
import KegList from './KegList';
import NewKeg from './NewKeg';
import EditKeg from './EditKeg';
import Employee from './Employee';
import Header from './Header';

function App() {

  return (
    <div>
      <style global jsx>{`

      `}</style>
      <Header/>
      <Switch>
        <Route exact path='/' component={KegList} />
        <Route path='/newKeg' component={NewKeg} />
        <Route path='/edit' component={EditKeg} />
        <Route path='/employee' component={Employee} />

      </Switch>
    </div>
  );
}

export default App;
