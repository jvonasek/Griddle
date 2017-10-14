import { createStore } from 'redux';
import rootReducer from '../reducers';

const configureStore = () =>
  createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // eslint-disable-line
  );

export default configureStore;
