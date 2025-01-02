import { IsInt, IsPositive, IsString, Length } from 'class-validator';

export class CreatePropertyDto {
  @IsString({ always: true })
  @Length(4, 10, { message: 'your name is too be long or maybe short' })
  readonly name: string;

  @IsString()
  @Length(2, 10, { groups: ['create'] })
  @Length(1, 15, { groups: ['update'] })
  description: string;

  @IsInt({ always: true })
  @IsPositive()
  area: number;
}
