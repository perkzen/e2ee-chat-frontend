import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';
import socketReducer from '../features/socketSlice';
import createSagaMiddleware from 'redux-saga';
import { watchAuth } from '../sagas';

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    auth: authReducer,
    socket: socketReducer,
  },
  middleware: (defaultMiddleware) => [
    ...defaultMiddleware({ thunk: false, serializableCheck: false }),
    sagaMiddleware,
  ],
});

sagaMiddleware.run(watchAuth);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
