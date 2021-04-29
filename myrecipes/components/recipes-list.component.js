import React, {Component} from "react";
import {connect} from "react-redux";
import {retrieveRecipe} from "../actions/recipeActions";

class RecipesListComponent extends Component {


    constructor(props) {
        super(props);
        this.refreshData = this.refreshData.bind(this);
        this.setActiveRecipe = this.setActiveRecipe.bind(this);

        this.state = {
            currentRecipe: null,
            currentIndex: -1,
        };
    }

    componentDidMount() {
        this.props.retrieveRecipe();
    }

    refreshData() {
        this.setState({
            currentRecipe: null,
            currentIndex: -1,
        });
    }

    setActiveRecipe(recipe, index) {
        this.setState({
            currentRecipe: recipe,
            currentIndex: index,
        });
    }

    render() {
        const {currentRecipe, currentIndex} = this.state;
        const {recipes} = this.props;


        return (
            <div className="list row">
                <div className="col-md-6">
                    <h4>Recipes List</h4>

                    <ul className="list-group">
                        {recipes &&
                        recipes.map((recipe, index) => (
                            <li
                                className={
                                    "list-group-item " +
                                    (index === currentIndex ? "active" : "")
                                }
                                onClick={() => this.setActiveRecipe(recipe, index)}
                                key={index}
                            >
                                {recipe.name}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-md-6">
                    {currentRecipe ? (
                        <div>
                            <h4>Recipe</h4>
                            <div>
                                <label>
                                    <strong>Name:</strong>
                                </label>{" "}
                                {currentRecipe.name}
                            </div>
                            <div>
                                <label>
                                    <strong>Ingredients:</strong>
                                </label>{" "}

                                {JSON.stringify(currentRecipe.ingredients)}
                            </div>
                            <div>
                                <label>
                                    <strong>Directions:</strong>
                                </label>{" "}
                                {currentRecipe.directions}
                            </div>
                            <a
                                href={"/recipes/" + currentRecipe._id}
                                className="badge badge-warning"
                            >
                                Edit
                            </a>
                        </div>
                    ) : (
                        <div>
                            <br/>
                            <p>Please click on a Recipe...</p>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        recipes: state.recipes,
    };
};

export default connect(mapStateToProps, {retrieveRecipe})(RecipesListComponent);