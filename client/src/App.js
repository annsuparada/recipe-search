import React from 'react';
import { Route, Switch } from "react-router-dom";
import MainSearch from "./components/MainSearch";
import Navigation from './components/navigation/Navigation';
import Footer from './components/footer/Footer';
import RecipePage from './components/RecipePage';

function App() {
  return (
    <div>
      <Navigation />
      <div className="main-container">
        <Switch>
          <Route exact path="/" component={MainSearch} />
          <Route exact path="/recipe/:id" component={RecipePage} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
