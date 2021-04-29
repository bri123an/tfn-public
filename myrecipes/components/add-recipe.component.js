import React, { Component } from "react";
import { connect } from "react-redux";
import { createRecipe } from "../actions/recipeActions";
//import qs from 'qs';

class AddRecipe extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeIngredients = this.onChangeIngredients.bind(this);
        this.onChangeDirections = this.onChangeDirections.bind(this);
        this.saveRecipe = this.saveRecipe.bind(this);
        this.newRecipe = this.newRecipe.bind(this);

        this.state = {
            _id: null,
            name: "",
            ingredients: [{quantity: "", unit: "", itemName: ""}],
            directions: "",

            submitted: false,
        };
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value,
        });
    }

    onChangeIngredients(e) {
        this.setState({
            ingredients: e.target.value,
        });
    }

    onChangeDirections(e) {
        this.setState({
            directions: e.target.value,
        });
    }

    saveRecipe() {
        const { name, ingredients, directions } = this.state;

        console.log(name);
        console.log(ingredients);
        console.log(directions);

        this.props
            .createRecipe(name, ingredients, directions)
            .then((data) => {
                this.setState({
                    name: data.name,
                    ingredients: data.ingredients,
                    directions: data.directions,


                    submitted: true,
                });
                console.log(data);
            })
            .catch((e) => {
                console.log(e);
            });
    }

    newRecipe() {
        this.setState({
            _id: null,
            name: "",
            ingredients:[{quantity: "", unit: "", itemName: ""}],
            directions: "",

            submitted: false,
        });
    }

    render() {
        return (
            <div className="submit-form">
                {this.state.submitted ? (
                    <div>
                        <h4>You submitted successfully!</h4>
                        <button className="btn btn-success" onClick={this.newRecipe}>
                            Add
                        </button>
                    </div>
                ) : (
                    <div>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                required
                                value={this.state.name}
                                onChange={this.onChangeName}
                                name="name"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="ingredients">Ingredients</label>
                            <input
                                type="text"
                                className="form-control"
                                id="ingredients"
                                required
                                value={this.state.ingredients}
                                onChange={this.onChangeIngredients}
                                name="ingredients"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="ingredients">Quantity</label>
                            <input
                                type="text"
                                className="form-control"
                                id="quantity"
                                required
                                value={this.state.ingredients.quantity}
                                onChange={this.onChangeIngredients}
                                name="quantity"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="ingredients">Unit</label>
                            <input
                                type="text"
                                className="form-control"
                                id="ingredients"
                                required
                                value={this.state.ingredients.unit}
                                onChange={this.onChangeIngredients}
                                name="ingredients"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="ingredients">Item Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="itemName"
                                required
                                value={this.state.ingredients.itemName}
                                onChange={this.onChangeIngredients}
                                name="itemName"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="directions">Directions</label>
                            <input
                                type="text"
                                className="form-control"
                                id="directions"
                                required
                                value={this.state.directions}
                                onChange={this.onChangeDirections}
                                name="directions"
                            />
                        </div>

                        <button onClick={this.saveRecipe} className="btn btn-success">
                            Submit
                        </button>
                    </div>
                )}
            </div>
        );
    }
}

export default connect(null, { createRecipe })(AddRecipe);