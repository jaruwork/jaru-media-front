import { createStore } from 'redux';
import rootReducer from '../reducers';

// TODO: middleware 적용, Saga
export const store = createStore(
    rootReducer,
);
