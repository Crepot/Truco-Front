import { combineReducers, createStore, applyMiddleware } from 'redux';
import { showGames } from './games';
import thunk from 'redux-thunk';


const rootReducer = combineReducers({
    games: showGames
});

const storeWithMiddleWare = applyMiddleware(thunk)(createStore)
const store = storeWithMiddleWare(rootReducer)

export default store;