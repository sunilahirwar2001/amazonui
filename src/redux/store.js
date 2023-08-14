import { configureStore } from '@reduxjs/toolkit';
import amazonReducer from '../redux/amazonSlice';
import  searchReducer from './searchSlice'
export const store = configureStore({

    reducer: {amazonReducer,search: searchReducer},
    
  
});
 