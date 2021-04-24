import React, { useState, useEffect, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.css";
import api from "../../utils/api"
//import userEvent from "@testing-library/user-event";

const UpdateShoppingListsForm = (props) => {
    const [name, setName] = useState(props.name);
    const [items, setItems] = useState([{ quantity: "", unit: "", itemName: "" }]);
    const [selectedShoppingList, setSelectedShoppingList] = useState(props.selectedShoppingList);
    const clearSelectedShoppingList = props.clearHandle;

        useEffect(() => {
            const id = selectedShoppingList.id;

            api.get(`http://3.92.28.166:5000/api/shopping_lists/${id}`)
            .then((response) => {
            console.log(response.data);
            setName(response.data.name);
            setItems(response.data.items);
            }).catch((error) => {console.log("error", error)});
    
            console.log(selectedShoppingList);
            setSelectedShoppingList(props.selectedShoppingList);
            console.log(`After: ${selectedShoppingList}`);
        }, [props.selectedShoppingList, selectedShoppingList])
       
   

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
        //let res = await api.post('/shopping_lists', reqBody);
        api.put(`http://3.92.28.166:5000/api/shopping_lists/${selectedShoppingList.id}`, reqBody)
        .then((response) => {console.log(response.data)}).catch((error) => {console.log("error", error)});
        console.log(reqBody);
    };

    const handleDelete = () => {
        api.delete(`http://3.92.28.166:5000/api/shopping_lists/${selectedShoppingList.id}`)
        .then((response) => {console.log(response.data)}).catch((error) => {console.log("error", error)});
    }

    

    return (
        <>
        <div className="create-shopping-list d-flex p-2 mx-auto">
            <form onSubmit={handleSubmit} className={"form-group border border-primary p-2"}>
                <div className="form-row">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={name}
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

                    <button
                        className="btn btn-light mr-2"
                        onClick={clearSelectedShoppingList}
                    >
                        Clear
                    </button>

                    <button
                        className="btn btn-danger mr-2"
                        onClick={() => {handleDelete(); clearSelectedShoppingList()}}
                    >
                        Delete
                    </button>

                    
                </div>
                <br />
            </form>
        </div>
        </>
    );
};

export default UpdateShoppingListsForm;