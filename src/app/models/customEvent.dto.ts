import { ShippingDetails } from './shippingDetails.dto';

export interface CustomEvent extends Event {
  detail: ShippingDetails;
}
