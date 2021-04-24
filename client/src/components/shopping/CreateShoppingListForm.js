import React, { useState, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.css";
import api from "../../utils/api";
//import api from "../utils/api"

const CreateShoppingListsForm = (props) => {
    const [name, setName] = useState("");
    const [items, setItems] = useState([{ quantity: "", unit: "", itemName: "" }]);

    const handleAddFields = () => {
        const values = [...items];
        values.push({ quantity: "", unit: "", itemName: "" });
        setItems(values);
    };

    const handleRemoveFields = (index) => {
        const values = [...items];
        if(index > 0){
        values.splice(index, 1);
        }
        setItems(values);
    };

    const handleInputChange = (index, event) => {
        const values = [...items];
        if (event.target.name === "quantity") {
            values[index].quantity = event.target.value;
        } else if (event.target.name === "unit") {
            values[index].unit = event.target.value;
        } else if (event.target.name === "item") {
            values[index].itemName = event.target.value;
        } 
        setItems(values);
    };

    const handleNameChange = (event) => {
        let nameValue = name;
        if (event.target.name === 'name'){
            nameValue = event.target.value;
        }
        setName(nameValue);
    }

    const reqBody = JSON.stringify({name, items}, null, 2);

    const handleSubmit = async (e) => {
        e.preventDefault();
        api.post('http://3.92.28.166:5000/api/shopping_lists', reqBody)
            .then((response) => {console.log(response.data)}).catch((error) => {console.log("error", error)});
        console.log(reqBody);
        props.createHandler(reqBody);
    };

    

    return (
        <>
        <div className="d-flex p-2 justify-content-center mx-auto">
            <form onSubmit={handleSubmit} className={"create-shopping-list form-group border border-primary rounded p-4"}>
                <div className="form-row">
                    <label htmlFor="name">Name: </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        onChange={(event) => handleNameChange(event)}
                    />
                </div>
                <br />
                <div>
                    Items:
                </div>
                <br />
                <div className="form-row">
                    {items.map((item, index) => (
                        <Fragment key={`${items}~${index}`}>
                            <div className="form-group col-sm-3">
                                <label htmlFor="quanity">Quantity</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="quantity"
                                    name="quantity"
                                    value={item.quantity}
                                    onChange={(event) => handleInputChange(index, event)}
                                />
                            </div>
                            <div className="form-group col-sm-3">
                                <label htmlFor="unit">Unit</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="unit"
                                    name="unit"
                                    value={item.unit}
                                    onChange={(event) => handleInputChange(index, event)}
                                />
                            </div>
                            <div className="form-group col-sm-3">
                                <label htmlFor="item">Item</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="item"
                                    name="item"
                                    value={item.itemName}
                                    onChange={(event) => handleInputChange(index, event)}
                                />
                            </div>
                            <div className="form-group col-sm-2">
                                <button
                                    className="btn btn-link"
                                    type="button"
                                    onClick={() => handleRemoveFields(index)}
                                >
                                    -
                                </button>
                                <button
                                    className="btn btn-link"
                                    type="button"
                                    onClick={() => handleAddFields()}
                                >
                                    +
                                </button>
                            </div>
                        </Fragment>
                    ))}
                </div>
                <div className="submit-button">
                    <button
                        className="btn btn-primary mr-2"
                        type="submit"
                        onSubmit={handleSubmit}
                    >
                        Save
                    </button>
                </div>
                <br />
            </form>
        </div>
        </>
    );
};

export default CreateShoppingListsForm;
