import ShoppingListsPage from "../shopping/ShoppingListsPage";
import Navbar from '../layout/Navbar';
const { Fragment } = require("react");

function Dashboard(){
    return(
        <Fragment>
        <Navbar />
        <ShoppingListsPage />
        </Fragment>
    )
}

export default Dashboard;