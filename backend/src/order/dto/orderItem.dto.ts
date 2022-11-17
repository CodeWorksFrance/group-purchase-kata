import { ApiProperty } from "@nestjs/swagger";
import { CustomerDto } from "./customer.dto";

export class OrderItemDto {
    @ApiProperty()
    label: string

    @ApiProperty()
    unitPrice: number

    @ApiProperty()
    quantity: number

    @ApiProperty({type: CustomerDto})
    buyer: CustomerDto
}
