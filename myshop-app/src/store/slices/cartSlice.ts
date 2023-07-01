import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { ICartItem, ICartsSlice } from '../../types/cartSliceTypes'
import { getCartFromLS, saveCartToLS } from '../../utils/getCartStateLS'


const { items, totalCount, totalPrice} = getCartFromLS();

export const initialCartState: ICartsSlice = {
  items,
  totalCount,
  totalPrice,
}

export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: initialCartState,
  reducers: {
    addItemtoCart: (state, action: PayloadAction<ICartItem>) =>{
      const findItem = state.items.find(
        (item: any) => item.id === action.payload.id
      )

      if(!findItem) {
        state.items.push(action.payload)
      } else {
        findItem.count += 1;
      }

      state.totalCount += 1;
      state.totalPrice += action.payload.price;

      console.log(state.totalCount);
      

      saveCartToLS(state.items, state.totalCount, state.totalPrice);
    },
    removeCartItem: (state, action: PayloadAction<string>) => {
      const findItem = state.items.find((item: any) => item.id === action.payload);

      if (findItem) {
        state.totalCount -= findItem.count;
        state.totalPrice -= findItem.price * findItem.count;
      }

      state.items = state.items.filter((item: any) => item.id !== action.payload);

      saveCartToLS(state.items, state.totalCount, state.totalPrice);
    },
    minusCartItem: (state, action: PayloadAction<string>) =>{
      const findItem = state.items.find((item: any) => item.id === action.payload)

      if(findItem) {
        if(findItem.count > 1) {
          findItem.count -= 1;
        } else {
          state.items = state.items.filter((item: any) => item.id !== action.payload)
        }
        state.totalPrice -= findItem.price;
      }
      state.totalCount -= 1;

      saveCartToLS(state.items, state.totalCount, state.totalPrice);
    },
    clearCartItems: (state) =>{
      state.items = [];
      state.totalCount = 0;
      state.totalPrice = 0;

      saveCartToLS(state.items, state.totalCount, state.totalPrice);
    },
  }
})

export default cartSlice.reducer;
export const {addItemtoCart, removeCartItem, minusCartItem, clearCartItems} = cartSlice.actions;