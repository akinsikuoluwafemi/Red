import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk';
import root

const initialState = {};

const middleware = [thunk];

const store = createStore(rootReducer, initialState, applyMiddleware(...middleware))

export default store;