import React from 'react';
import { Switch, Route } from 'react-router-dom';

function App() {

  return (
    <div>
      <style global jsx>{`

      `}</style>
      <Header/>
      <Switch>
        <Route exact path='/' component={ScheduleList} />
        <Route path='/producelist' component={ProduceList} />
      </Switch>
    </div>
  );
}

export default App;
