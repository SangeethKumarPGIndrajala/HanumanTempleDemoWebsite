// store for poojaOrders slice
import { configureStore } from '@reduxjs/toolkit';
import poojaOrdersReducer from './orderSlice';

export default configureStore({
    reducer: {
    poojaOrders: poojaOrdersReducer,
  },
}); 
