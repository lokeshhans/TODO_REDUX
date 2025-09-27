import {createStore,combineReducers} from 'redux'
import todoReducers from './reducers/TodoReducers'
const reduxDevToolEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(combineReducers({todos:todoReducers}),{}, reduxDevToolEnhancer )
export default store;