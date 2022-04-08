import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';
import usersReducer from './reduxToolkit/slices/users';

const rootReducer = combineReducers({
  users: usersReducer
})

const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store;