import React, {Component} from "react";
import {connect} from "react-redux";
import {retrieveRecipeBook} from "../actions/recipeBookActions";

class RecipeBooksListComponent extends Component {


    constructor(props) {
        super(props);
        this.refreshData = this.refreshData.bind(this);
        this.setActiveRecipeBook = this.setActiveRecipeBook.bind(this);

        this.state = {
            currentRecipeBook: null,
            currentIndex: -1,
        };
    }

    componentDidMount() {
        this.props.retrieveRecipeBook();
    }

    refreshData() {
        this.setState({
            currentRecipeBook: null,
            currentIndex: -1,
        });
    }

    setActiveRecipeBook(recipeBook, index) {
        this.setState({
            currentRecipeBook: recipeBook,
            currentIndex: index,
        });
    }

    render() {
        const {currentRecipeBook, currentIndex} = this.state;
        const {recipeBooks} = this.props;

        return (
            <div className="list row">
                <div className="col-md-6">
                    <h4>RecipesBooks List</h4>

                    <ul className="list-group">
                        {recipeBooks &&
                        recipeBooks.map((recipeBook, index) => (
                            <li
                                className={
                                    "list-group-item " +
                                    (index === currentIndex ? "active" : "")
                                }
                                onClick={() => this.setActiveRecipeBook(recipeBook, index)}
                                key={index}
                            >
                                {recipeBook.name}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-md-6">
                    {currentRecipeBook ? (
                        <div>
                            <h4>RecipeBook</h4>
                            <div>
                                <label>
                                    <strong>Name:</strong>
                                </label>{" "}
                                {currentRecipeBook.name}
                            </div>
                            <div>
                                <label>
                                    <strong>Recipes:</strong>
                                </label>{" "}
                                {currentRecipeBook.recipes}
                            </div>
                            <a
                                href={"/recipe_books/" + currentRecipeBook._id}
                                className="badge badge-warning"
                            >
                                Edit
                            </a>
                        </div>
                    ) : (
                        <div>
                            <br/>
                            <p>Please click on a RecipeBook...</p>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        recipeBooks: state.recipeBooks,
    };
};

export default connect(mapStateToProps, {retrieveRecipeBook})(RecipeBooksListComponent);