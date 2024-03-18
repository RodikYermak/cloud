import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    default: 'rodion@test.ru',
  })
  email: string;

  @ApiProperty({
    default: 'Rodion',
  })
  fullName: string;

  @ApiProperty({
    default: '777',
  })
  password: string;
}
