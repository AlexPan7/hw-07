import {createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {EproductSliseStatus} from '../../types/productSliceTypes';
import {IProductItemBlock, IProductItemSlice, IProductItemSliceArgs} from '../../types/productItemSliceTypes';
import axios from 'axios';

const initialProductItemState: IProductItemSlice = {
  product: {} as IProductItemBlock,
  status: EproductSliseStatus.Loading,
}

axios.defaults.baseURL = 'https://fakestoreapi.com';

export const fetchProduct = createAsyncThunk<IProductItemSlice, IProductItemSliceArgs>(
  'product/fetchProduct',
  async (args) => {
    const { id } = args;
    const res = await axios.get<IProductItemBlock>(`/products/${id}`);
    return { product: res.data, status: EproductSliseStatus.Success };
  }
);

export const productItemSlice = createSlice({
  name: 'productItemSlice',
  initialState: initialProductItemState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state) => {
      state.product = {} as IProductItemBlock;
      state.status = EproductSliseStatus.Loading;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.product = action.payload.product;
      state.status = EproductSliseStatus.Success;
    });
    builder.addCase(fetchProduct.rejected, (state) => {
      state.product = {} as IProductItemBlock;
      state.status = EproductSliseStatus.Error;
    });
  },
});

export default productItemSlice.reducer;