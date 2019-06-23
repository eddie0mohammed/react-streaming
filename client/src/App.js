import React, { Component } from 'react';
import './App.css';
import { Route, Switch} from 'react-router-dom';
import StreamCreate from './components/streams/StreamCreate';
import StreamDelete from './components/streams/StreamDelete';
import StreamEdit from './components/streams/StreamEdit';
import StreamList from './components/streams/StreamList';
import StreamShow from './components/streams/StreamShow';
import Header from './components/Header/Header';

class App extends Component {
  render(){
    return (
      <div className="ui container">
        <Header />
        <Switch>
          <Route path='/' exact render={(props) => <StreamList {...props}/>} />
          <Route path='/streams/new' exact render={(props) => <StreamCreate {...props}/>} />
          <Route path='/streams/edit/:id' exact render={(props) => <StreamEdit {...props}/>} />
          <Route path='/streams/delete/:id' exact render={(props) => <StreamDelete {...props}/>} />
          <Route path='/streams/:id' exact render={(props) => <StreamShow {...props}/>} />
        </Switch>
      </div>
    );

  }
}

export default App;
