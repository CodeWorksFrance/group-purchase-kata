import { CustomerInterface } from './customer.interface';

export interface OrderItemInterface {
  label: string;
  unitPrice: number;
  quantity: number;
  buyer: CustomerInterface;
}
