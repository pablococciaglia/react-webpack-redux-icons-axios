import { configureStore } from '@reduxjs/toolkit'
import { ordersReducer } from '../reducers/ordersReducer.js';

const reducer = {
    orders: ordersReducer,
};

export const store = configureStore({
    reducer,
});