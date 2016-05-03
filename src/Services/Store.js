import { applyMiddleware, createStore } from 'redux';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import reducer from '../Reducers';

export default createStore(
  reducer,
  applyMiddleware(
    thunk,
    routerMiddleware(browserHistory),
    createLogger()
  )
);
