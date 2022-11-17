import { OrderItemInterface } from "./orderItem.interface";

export interface OrderInterface {
    items: [OrderItemInterface]
    date: Date
    shipping: number
}