import React from 'react';
import { Switch, Route } from 'react-router-dom';
import KegList from './KegList';
import NewKegForm from './NewKegForm';
import Error404 from './Error404';
import EditKeg from './EditKeg';
import Employee from './Employee';
import Header from './Header';
import NewKegControl from './NewKegControl';


class App extends React.Component  {

  constructor(props) {
  super(props);
  this.state = {
    masterKegList: []
  };
  this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
}
render() {
  return (
      <div>
      <Header/>
      <Switch>
        <Route exact path='/' render={()=><KegList kegList={this.state.masterKegList} />} />
        <Route path='/newkeg' render={() =><NewKegControl onNewKegCreation={this.handleAddingNewKegToList} />} />
        <Route path='/employee' render={() =><NewKegControl onNewKegCreation={this.handleAddingNewKegToList} />} />
        <Route component={Error404} />
      </Switch>

    </div>
  );
}
}

export default App;
