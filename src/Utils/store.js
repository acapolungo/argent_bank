import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../reducers/loginReducer';

// reduxToolkit fait la connexion aux devTool et la création du store
export const store = configureStore({
  reducer: {
    login: loginReducer,
  }
})