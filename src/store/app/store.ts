import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';
import createSagaMiddleware from 'redux-saga';
import { watchAuth } from '../sagas';

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: (defaultMiddleware) => [
    ...defaultMiddleware({ thunk: false }),
    sagaMiddleware,
  ],
});

sagaMiddleware.run(watchAuth);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
