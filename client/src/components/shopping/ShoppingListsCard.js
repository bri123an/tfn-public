'use-strict'

import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css'

const ShoppingListsCard = (props) => {
    const [user, setUser] = useState(props.user);
    const [name, setName] = useState(props.name);
    const [date, setDate] = useState(props.date);
    const setSelectedShoppingList = props.selectedShoppingListHandler;

    return (
        <div className="card hover-overlay ripple shadow-1-strong rounded hoverable" onClick={() => {setSelectedShoppingList({id: props.shoppingListId, name: name})}}>
        <div className="card-body">
        <ul>
          <li>Name: {name}</li>
          <li>User: {user}</li>
          <li>date: {date}</li>
        </ul>
        </div>
        </div>
    )
};

export default ShoppingListsCard;