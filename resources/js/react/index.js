import React from 'react';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import allReducers from "./reducers/reducer.index";
import { Provider } from "react-redux";

import Router from './router';

//create store
const store = createStore(
  allReducers, applyMiddleware(thunk)
);


if (document.getElementById('root')) { 
  ReactDOM.render(
  <BrowserRouter> 
  <Provider store={store}>
    <Router />
    </Provider>
</BrowserRouter> , document.getElementById('root'));
}


