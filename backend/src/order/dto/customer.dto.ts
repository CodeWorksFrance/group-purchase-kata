import { ApiProperty } from '@nestjs/swagger';

export class CustomerDto {
    @ApiProperty()
    name: string

    @ApiProperty({type: Date})
    dateOfBirth: Date
}