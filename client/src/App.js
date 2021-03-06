import React from 'react';
import { Route, Switch } from "react-router-dom";
import MainSearch from "./components/recipeResults/MainSearchResults";
import Navigation from './components/navigation/Navigation';
import Footer from './components/footer/Footer';
import RecipePage from './components/recipeResults/RecipePage';
import Homepage from './components/homepage/Homepage';
import AdvanceSearchResults from './components/recipeResults/AdvanceSearchResults';

function App() {
  return (
    <div>
      <Navigation />
      <div className="main-container">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/recipes/" component={MainSearch} />
          <Route path="/advance-search/recipes" component={AdvanceSearchResults} />
          <Route path="/recipe/:query/:id" component={RecipePage} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
