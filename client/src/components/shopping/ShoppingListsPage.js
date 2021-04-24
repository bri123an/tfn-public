'use-strict'

import React, {useState, useEffect} from 'react';
import CreateShoppingListForm from './CreateShoppingListForm';
import UpdateShoppingListForm from './UpdateShoppingListForm';
import ShoppingListTable from './ShoppingListsTable';
//import api from './api';
import api from '../../utils/api';
import './ShoppingListPage.css';





const ShoppingListsPage = () => {
    const [selectedShoppingList, setSelectedShoppingList] = useState();
    const [lastAddedShoppingList, setLastAddedShoppingList] = useState();
    const [shoppingListArray, setShoppingListArray] = useState([]);
    const clearSelectedShoppingList = () => {setSelectedShoppingList(undefined)};

    function handleAddRemoveShoppingList(){
        try{
            api.get('http://3.92.28.166:5000/api/shopping_lists')
                .then(function(response){
                    console.log(JSON.stringify(response.data));
                    setShoppingListArray(JSON.parse(JSON.stringify(response.data)));
                })
        } catch(error){
            console.log("error", error);
        }
    }
    
    function handleSelectedShoppingListChange(newSelectedShoppingList){
        setSelectedShoppingList(newSelectedShoppingList)
    }
    useEffect(() => {
        try{
        api.get('http://3.92.28.166:5000/api/shopping_lists')
        .then(function(response){
            console.log(JSON.stringify(response.data));
            setShoppingListArray(JSON.parse(JSON.stringify(response.data)));
        })
        } catch(error){
            console.log("error", error);
        }
    },[selectedShoppingList]);

    if(selectedShoppingList){
        return (
            <>
            <UpdateShoppingListForm selectedShoppingList={selectedShoppingList} clearHandle={clearSelectedShoppingList} className={"shopping-list-form"}/>
            <ShoppingListTable selectedShoppingList={selectedShoppingList} listData={shoppingListArray} listItemSelectedHandler={handleSelectedShoppingListChange} />
            </>
        )
    }
    else{
    return (
        <>
        <CreateShoppingListForm createHandler={handleAddRemoveShoppingList} className={"shopping-list-form"}/>
        <ShoppingListTable selectedShoppingList={selectedShoppingList} listData={shoppingListArray} listItemSelectedHandler={handleSelectedShoppingListChange} />
        </>
    )
    }
};

export default ShoppingListsPage;