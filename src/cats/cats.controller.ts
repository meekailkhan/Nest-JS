import {
  Body,
  Controller,
  Get,
  Headers,
  HttpCode,
  Param,
  Post,
  UsePipes,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { ParseIdPipe } from 'src/property/pipes/parseidpipe';
import { IdParamDto } from 'src/property/dto/idParam.dto';
import { createCatSchema, createCatsZodDto } from './dto/createCatsZod.dto';
import { ZodValidationPipe } from './pipes/zodValidationPipe';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}
  @Get()
  findAll(): string {
    return this.catsService.findAll();
  }
  @Get(':id')
  // @Param() params : IdParamDto
  findById(@Param('id', ParseIdPipe) id) {
    return this.catsService.findById(id);
  }

  @Post()
  @HttpCode(202)
  @UsePipes(new ZodValidationPipe(createCatSchema))

  create(
    @Body() body: createCatsZodDto,
    @Headers() headers
  ) {
    // return this.catsService.create(body);
    return headers
  }
}
