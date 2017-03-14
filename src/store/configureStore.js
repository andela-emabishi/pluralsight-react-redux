// Function called at the application entry point so that store is configured when the app starts
// Reducer needs to keep in touch with store in order to have a picture of the current store object/state or store representation

import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

// Initialise store with initial state. Good for server side rendering
// rootReducer combines all reducers into one object to be passed into createStore method
export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    // Use middlewear to enhance the store i.e. add thunk support
    // redux immutable state invariant gives us warning if we mutate state
    applyMiddleware(thunk, reduxImmutableStateInvariant())
  );
}
