import { Controller, Post, Body } from '@nestjs/common';
import { OrderService } from '../services/order.service';
import { CreateBillDto } from "../dto/createBill.dto";
import { BillInterface } from "../interfaces/bill.interface";

@Controller("/order")
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post("/bill")
  async createBill(@Body() createBill: CreateBillDto): Promise<BillInterface> {
    return this.orderService.createBill(createBill)
  }
}