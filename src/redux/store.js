import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import moviesReducer from './reducers/movies';

const rootReducer = combineReducers({
  movies: moviesReducer
});
const logger = createLogger();

const store = createStore(
  rootReducer,
  undefined,
  compose(
    applyMiddleware(thunk, logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
