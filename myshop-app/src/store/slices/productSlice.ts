import {createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {EproductSliseStatus, IProductsSliceParams, IProductBlock, IProductsSlice} from '../../types/productSliceTypes'
import axios from 'axios';

const initialState: IProductsSlice = {
  productList: [],
  status: EproductSliseStatus.Loading,
}

axios.defaults.baseURL = 'https://fakestoreapi.com';

export const fetchProducts = createAsyncThunk<IProductBlock[], IProductsSliceParams> (
  'products/fetchProducts',
  async(params) => {
    const {categoryId} = params;
    const res = await axios.get<IProductBlock[]>(
      '/products',
      {
        params: {
          category: categoryId > 0 ? categoryId:null,
        }
      }
    )
    
    return res.data;
  }
);

export const productsSlice = createSlice({
  name: 'productSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.productList = [];
      state.status = EproductSliseStatus.Loading;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.productList = action.payload;
      state.status = EproductSliseStatus.Success;
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.productList = [];
      state.status = EproductSliseStatus.Error;
    })
  },
})

export default productsSlice;