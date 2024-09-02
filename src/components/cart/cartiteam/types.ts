export interface item {
  id: number;
  image: string;
  name: string;
  size: string;
  color: string;
  price: number;
  quantity: number;
}

export interface CartItemProps {
  isLast: boolean;
  item: item;
}
