import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { IfilterSlice } from '../../types/filterSliceTypes';

const initialState: IfilterSlice = {
  categoryId: 0,
  searchValue: ''
}

export const filterSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    setCategoryId: (state, action: PayloadAction<number>) => {
      state.categoryId = action.payload
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload
    }, 
  }
})

export default filterSlice.reducer;
export const { setCategoryId, setSearchValue } = filterSlice.actions;