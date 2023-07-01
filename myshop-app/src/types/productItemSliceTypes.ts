import { EproductSliseStatus } from "./productSliceTypes";

export interface IProductItemBlock {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}

export interface IProductItemSlice {
  product: IProductItemBlock;
  status: EproductSliseStatus
}

export interface IProductItemSliceArgs {
  id: string;
}