import React from 'react';
import { Route, Switch } from "react-router-dom";
import MainSearch from "./component/MainSearch";
import Navigation from './component/navigation/Navigation';
import Footer from './component/footer/Footer';
import RecipePage from './component/RecipePage';

function App() {
  return (
    <div>
      <Navigation />
      <div className="main-container">
        <Switch>
          <Route exact path="/" component={MainSearch} />
          <Route path="/recipe/:id" component={RecipePage} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
