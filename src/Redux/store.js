import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './Reducer/rootReducer';
import metaSaga from './Saga/metaSaga';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = configureStore({
  reducer: rootReducer,
  middleware: defaultMiddle =>
    defaultMiddle({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(middleware),
});

sagaMiddleware.run(metaSaga);

export default store;
