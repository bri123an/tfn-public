import React, {Component} from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddRecipe from "./components/add-recipe.component";
import Recipe from "./components/recipe.component";
import RecipesList from "./components/recipes-list.component";

//Unable to hit third route which would go to component that contains logic for updating and deleting a single record

class App1 extends Component {
    render() {
        return (
            <Router>
                <Link to={"/recipes"} className="nav-link">
                    Recipes
                </Link>
                <Link to={"/addRecipe"} className="nav-link">
                    Add New Recipe
                </Link>
                <div className="container mt-3">
                    <Switch>
                        <Route exact path={["/", "/recipes"]} component={RecipesList}/>
                        <Route exact path="/addRecipe" component={AddRecipe}/>
                        <Route path="/recipes/:_id" component={Recipe}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App1;
