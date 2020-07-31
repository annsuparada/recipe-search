import React from 'react';
import { Route, Switch } from "react-router-dom";
import MainSearch from "./component/MainSearch";
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={MainSearch} />
      </Switch>
    </div>
  );
}

export default App;
