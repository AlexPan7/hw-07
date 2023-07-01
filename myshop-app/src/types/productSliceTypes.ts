export interface IProductBlock {
  id: string;
  title: string;
  description: string,
  price: number;
  image: string;
}

export interface IProductsSlice {
  productList: IProductBlock[];
  status: EproductSliseStatus
}

export enum EproductSliseStatus {
  Loading = 'loading',
  Success = 'success',
  Error = 'error'
}

export interface IProductsSliceParams {
  categoryId: number;
  searchValue: string;
}