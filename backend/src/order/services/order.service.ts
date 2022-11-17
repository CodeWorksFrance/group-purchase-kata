import { Injectable } from '@nestjs/common';
import { OrderInterface } from "../interfaces/order.interface";
import { Bill } from "../entities/bill.entity";
import { BillInterface } from "../interfaces/bill.interface";

@Injectable()
export class OrderService {
  createBill(createBill: OrderInterface): BillInterface {
    const bill = new Bill()
    bill.items = this.getAmountByUser(createBill)
    bill.amount = bill.items.reduce((acc, current) => acc += current.amount, 0)
    this.computeFee(bill, createBill.shipping)
    bill.total = bill.amount + bill.items.reduce((acc, current) => acc += current.fee, 0)
    return bill
  }

  private getAmountByUser(createBill: OrderInterface): {name: string, amount: number, fee: number}[] {
    const items: {name: string, amount: number, fee: number}[] = []

    createBill.items.forEach(item => {
      let price = item.quantity * item.unitPrice

      if (items.find(billItem => billItem.name === item.buyer.name)) {
        items.find(billItem => billItem.name === item.buyer.name).amount += price
      } else {
        items.push({name: item.buyer.name, amount: price, fee: 0})
      }
    })

    return items
  }

  private computeFee(bill: Bill, shipping: number) {
    bill.items.forEach(item => {
      item.fee = Math.round(((item.amount / bill.amount) * shipping) * 100) / 100
    })
  }
}
