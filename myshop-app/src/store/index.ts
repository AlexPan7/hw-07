import { configureStore } from '@reduxjs/toolkit';
import { productsSlice } from './slices/productSlice';
import { filterSlice } from './slices/filterSlice';
import { cartSlice } from './slices/cartSlice';
import { productItemSlice } from './slices/productItemSlice';

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    filter: filterSlice.reducer,
    productItem: productItemSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
