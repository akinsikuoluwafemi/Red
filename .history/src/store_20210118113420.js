import { applyMiddleware, createStore, compose } from "redux";
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
    compose(applyMiddleware(...middleware),
    window.__
    )
);

export default store;