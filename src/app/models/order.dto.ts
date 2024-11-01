import { Product } from './product.dto';

export interface Order {
  orderId: string;
  items: Product[];
}
