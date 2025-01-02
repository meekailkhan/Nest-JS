import { Injectable } from '@nestjs/common';
import { IsInt, IsPositive } from 'class-validator';

@Injectable()
export class IdParamDto {
  @IsInt()
  @IsPositive()
  id: number;
}
