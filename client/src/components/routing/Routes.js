import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Alert from '../layout/Alert';
import Dashboard from '../dashboard/Dashboard';
import NotFound from '../layout/NotFound';
import ShoppingListsPage from "../shopping/ShoppingListsPage";
import PrivateRoute from '../routing/PrivateRoute';

const Routes = props => {
  return (
    <Fragment>
      <Alert />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/shoppinglist" component={ShoppingListsPage} />
        <Route component={NotFound} />
      </Switch>
    </Fragment>
  );
};

export default Routes;
