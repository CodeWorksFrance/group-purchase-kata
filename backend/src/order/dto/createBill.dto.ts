import { ApiProperty } from '@nestjs/swagger';
import { OrderItemDto } from "./orderItem.dto";

export class CreateBillDto {
    @ApiProperty({type: [OrderItemDto]})
    items: [OrderItemDto]

    @ApiProperty({type: Date})
    date: Date

    @ApiProperty()
    shipping: number
}