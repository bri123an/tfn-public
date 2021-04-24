'use-strict'

import React, {useState, useEffect} from 'react'
import ReactPaginate from 'react-paginate';
import ShoppingListsCard from './ShoppingListsCard'

const ShoppingListsTable = (props) => {
    const [shoppingLists, setShoppingLists] = useState(props.listData);
    const setSelectedShoppingList = props.listItemSelectedHandler;
    const [pageNumber, setPageNumber] = useState(0);
    const usersPerPage = 10;
    const pagesVisited = pageNumber * usersPerPage;

    const displayShoppingLists = shoppingLists.slice(pagesVisited, pagesVisited + usersPerPage);

    const pageCount = Math.ceil(shoppingLists.length / usersPerPage)

    const changePage = ({selected}) => {
        setPageNumber(selected);
    };

    useEffect(() => {
        setShoppingLists(props.listData)
    }, [props.listData, props.selectedShoppingList])
    
    return(
    <>
    {displayShoppingLists.map((shoppingList) => {
    return (   
            <ShoppingListsCard key={shoppingList._id} name={shoppingList.name} user={shoppingList.user} date={shoppingList.date} selectedShoppingListHandler={setSelectedShoppingList} shoppingListId={shoppingList._id}/>
    )
    })}

    <ReactPaginate 
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"btn-group list-unstyled"}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        breakLabel={" ... "}
        pageClassName={"btn"}
        previousClassName={"btn btn-light"}
        nextClassName={"btn btn-light"}
        activeClassName={"btn btn-primary"}
    />
    </>
    )


    


}

export default ShoppingListsTable;