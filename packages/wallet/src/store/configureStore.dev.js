import createHistory from 'history/createBrowserHistory';
import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';
import DevTools from '../containers/devTools';

import thunk from 'redux-thunk';

export const history = createHistory();
const middleware = routerMiddleware(history);

export function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk, middleware),
      DevTools.instrument(),
    ),
  );
}
