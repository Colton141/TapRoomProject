import React from 'react';
import { Switch, Route } from 'react-router-dom';

function App() {

  return (
    <div>
      <style global jsx>{`

      `}</style>
      <Header/>
      <Switch>
        <Route exact path='/' component={KegeList} />
        <Route path='/newKeg' component={NewKeg} />
        <Route path='/edit' component={EditKeg} />
        <Route path='/employee' component={Employee} />

      </Switch>
    </div>
  );
}

export default App;
