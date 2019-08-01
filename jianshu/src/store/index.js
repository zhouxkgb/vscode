import {createStore,compose, applyMiddleware} from 'redux'
import reduer from './reducer'
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(reduer,composeEnhancers(applyMiddleware(thunk)));