import React, { Component } from "react";
import App1 from './App1';
import App2 from './App2';
import Carousel from './Carousel';
import { Provider } from 'react-redux';
import store from './store';

class MyRecipesPageFull extends Component {
    render() {
        return(
            <Provider store={store}>
                <Carousel />
                <App1 />
                <App2 />
            </Provider>
        );
    }
}

export default MyRecipesPageFull