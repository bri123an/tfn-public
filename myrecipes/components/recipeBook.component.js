import React, { Component } from "react";
import { connect } from "react-redux";
import { updateRecipeBook, deleteRecipeBook } from "../actions/recipeBookActions";
import RecipeBookDataService from "../API_Services/CRUD_Recipe_Book_Services";

class RecipeBook extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.getRecipeBook = this.getRecipeBook.bind(this);
        this.updateContent = this.updateContent.bind(this);
        //this.removeRecipeBook = this.removeRecipeBook().bind(this);

        this.state = {
            currentRecipeBook: {
                _id: null,
                name: "",
                description: "",
            },
            message: "",
        };
    }

    componentDidMount() {
        this.getRecipeBook(this.props.match.params._id);
    }

    onChangeName(e) {
        const name = e.target.value;

        this.setState(function (prevState) {
            return {
                currentRecipeBook: {
                    ...prevState.currentRecipeBook,
                    name: name,
                },
            };
        });
    }

    onChangeDescription(e) {
        const description = e.target.value;

        this.setState((prevState) => ({
            currentRecipeBook: {
                ...prevState.currentRecipeBook,
                description: description,
            },
        }));
    }

    getRecipeBook(id) {
        RecipeBookDataService.get(id)
            .then((response) => {
                this.setState({
                    currentRecipeBook: response.data,
                });
                console.log(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }

    updateContent() {
        this.props
            .updateRecipeBook(this.state.currentRecipeBook._id, this.state.currentRecipeBook)
            .then((response) => {
                console.log(response);

                this.setState({ message: "The recipeBook was updated successfully!" });
            })
            .catch((e) => {
                console.log(e);
            });
    }

    removeRecipeBook() {
        this.props
            .deleteRecipeBook(this.state.currentRecipeBook._id)
            .then(() => {
                this.props.history.push("/recipeBooks");
            })
            .catch((e) => {
                console.log(e);
            });
    }

    render() {
        const { currentRecipeBook } = this.state;

        return (
            <div>
                {currentRecipeBook ? (
                    <div className="edit-form">
                        <h4>RecipeBook</h4>
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="title"
                                    value={currentRecipeBook.name}
                                    onChange={this.onChangeName}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="recipes">Recipes</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="recipes"
                                    value={currentRecipeBook.recipes}
                                    onChange={this.onChangeDescription}
                                />
                            </div>
                        </form>

                        <button
                            className="badge badge-danger mr-2"
                            onClick={this.removeRecipeBook}
                        >
                            Delete
                        </button>

                        <button
                            type="submit"
                            className="badge badge-success"
                            onClick={this.updateContent}
                        >
                            Update
                        </button>
                        <p>{this.state.message}</p>
                    </div>
                ) : (
                    <div>
                        <br />
                        <p>Please click on a RecipeBook...</p>
                    </div>
                )}
            </div>
        );
    }
}

export default connect(null, { updateRecipeBook, deleteRecipeBook })(RecipeBook);