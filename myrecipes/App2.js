import React, { Component } from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddRecipeBook from "./components/add-recipeBook.component";
import RecipeBook from "./components/recipeBook.component";
import RecipeBooksList from "./components/recipeBooks-list.component";

//Unable to hit third route which would go to component that contains logic for updating and deleting a single record

class App2 extends Component {
    render() {
        return (
            <Router>
                <Link to={"/recipe_books"} className="nav-link">
                    Recipe Books
                </Link>
                <Link to={"/addRecipeBook"} className="nav-link">
                    Add New RecipeBook
                </Link>
                <div className="container mt-3">
                    <Switch>
                        <Route exact path={["/", "/recipe_books"]} component={RecipeBooksList} />
                        <Route exact path="/addRecipeBook" component={AddRecipeBook} />
                        <Route path="/recipe_books/:_id" component={RecipeBook} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App2;
