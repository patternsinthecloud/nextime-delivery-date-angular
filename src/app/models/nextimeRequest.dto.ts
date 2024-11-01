import { Address } from './address.dto';
import { Order } from './order.dto';

export interface NextimeRequest {
  addresses: Address[];
  orders: Order[];
}
