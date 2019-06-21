import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
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
          <Route path='/' exact render={() => <StreamList />} />
          <Route path='/streams/new' exact render={() => <StreamCreate />} />
          <Route path='/streams/edit' exact render={() => <StreamEdit />} />
          <Route path='/streams/delete' exact render={() => <StreamDelete />} />
          <Route path='/streams/show' exact render={() => <StreamShow />} />
        </Switch>
      </div>
    );

  }
}

export default App;
