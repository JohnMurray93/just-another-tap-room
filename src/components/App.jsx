import React from 'react';
import Header from './Header';
import KegList from './KegList';
import NewKegControl from './NewKegControl';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import Moment from 'moment';
import Admin from './Admin';
import { v4 } from 'uuid';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: {},
      selectedKeg: null
    };
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
    this.handleChangingSelectedKeg = this.handleChangingSelectedKeg.bind(this);
  }

  componentDidMount() {
    this.kegAgeUpdateTimer = setInterval(() =>
      this.updateKegAge(),
    60000
    );
  }

  componentWillUnmount(){
    clearInterval(this.kegAgeUpdateTimer);
  }

  updateKegAge() {
    var newMasterKegList = Object.assign({}, this.state.masterKegList);
    Object.keys(newMasterKegList).forEach(kegId => {
      newMasterKegList[kegId].formattedTime = (newMasterKegList[kegId].timeOpen).fromNow(true);
    });
    this.setState({masterKegList: newMasterKegList});
  }

  handleAddingNewKegToList(newKeg){
    var newKegId = v4()
    var newMasterKegList = Object.assign({}, this.state.masterKegList, {
      [newKegId]: newKeg
    });
    newMasterKegList[newKegId].formattedTime = newMasterKegList[newKegId].timeOpen.fromNow(true);
    this.setState({masterKegList: newMasterKegList});
  }

  handleChangingSelectedKeg(kegId){
    this.setState({selectedKeg: kegId});
  }

  render(){
    console.log(this.state.masterKegList);
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><KegList kegList={this.state.masterKegList} />} />
          <Route path='/newkeg' render={()=><NewKegControl onNewCreation={this.handleAddingNewKegToList} />} />
          <Route path='/admin' render={(props)=><Admin kegList={this.state.masterKegList} currentRouterPath={props.location.pathname}
            onKegSelection={this.handleChangingSelectedKeg}
            selectedKeg={this.state.selectedKeg}/>} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }

}

export default App;