import React, { Component } from "react";
import { connect } from "react-redux";
import { createRecipeBook } from "../actions/recipeBookActions";

class AddRecipeBook extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeRecipes = this.onChangeRecipes.bind(this);
        this.saveRecipeBook = this.saveRecipeBook.bind(this);
        this.newRecipeBook = this.newRecipeBook.bind(this);

        this.state = {
            id: null,
            name: "",
            recipes: [{}],

            submitted: false,
        };
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value,
        });
    }

    onChangeRecipes(e) {
        this.setState({
            recipes: e.target.value,
        });
    }

    saveRecipeBook() {
        const { name, recipes } = this.state;

        this.props
            .createRecipeBook(name, recipes)
            .then((data) => {
                this.setState({
                    id: data.id,
                    name: data.name,
                    recipes: data.recipes,

                    submitted: true,
                });
                console.log(data);
            })
            .catch((e) => {
                console.log(e);
            });
    }

    newRecipeBook() {
        this.setState({
            id: null,
            name: "",
            recipes: "",

            submitted: false,
        });
    }

    render() {
        return (
            <div className="submit-form">
                {this.state.submitted ? (
                    <div>
                        <h4>You submitted successfully!</h4>
                        <button className="btn btn-success" onClick={this.newRecipeBook}>
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
                            <label htmlFor="recipes">Recipes</label>
                            <input
                                type="text"
                                className="form-control"
                                id="recipes"
                                required
                                value={this.state.recipes}
                                onChange={this.onChangeRecipes}
                                name="Recipes"
                            />
                        </div>

                        <button onClick={this.saveRecipeBook} className="btn btn-success">
                            Submit
                        </button>
                    </div>
                )}
            </div>
        );
    }
}

export default connect(null, { createRecipeBook })(AddRecipeBook);