export interface ICartItem {
  id: number;
  title: string;
  price: number;
  count: number;
  description: string;
  image: string;
}

export interface ICartsSlice {
  items: ICartItem[];
  totalCount: number;
  totalPrice: number
}