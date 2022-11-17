import { BillInterface } from "../interfaces/bill.interface"

export class Bill implements BillInterface {
    total: number
    amount: number
    items: {name: string, amount: number, fee: number}[]

    constructor() {
        this.total = 0
        this.amount = 0
        this.items = []
    }
}