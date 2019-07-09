import React from 'react';
import { Switch, Route } from 'react-router-dom';

function App() {

  return (
    <div>
      <style global jsx>{`

      `}</style>
      <Header/>
      <Switch>
        <Route path='/' component={KegeList} />
      </Switch>
    </div>
  );
}

export default App;
