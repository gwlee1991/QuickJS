import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import rootReducer from '../reducers/root_reducer';

const reducer = () => {};

const configureStore = (preloadedState = {}) => (
  createStore(
    reducer,
    preloadedState,
    applyMiddleware(thunk)
  )
);

export default configureStore;
