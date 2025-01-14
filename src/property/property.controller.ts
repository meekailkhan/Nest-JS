import {
  Controller,
  Param,
  Patch,
  Get,
  Post,
  Body,
  HttpCode,
  Query,
  ParseBoolPipe,
  Headers,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';
import { ParseIdPipe } from './pipes/parseidpipe';
import { PropertyService } from './property.service';
import { createZodValidation } from './pipes/createProperZod.pipe';
import { createPropertySchema } from './dto/zodvalidation.dto';
import { HeadersDto } from './dto/headers.dto';
import { RequestHeader } from './pipes/request-header.pipe';

@Controller('property')
export class PropertyController {
  constructor(private readonly propertyService: PropertyService) {}
  @Get()
  findAll() {
    return this.propertyService.findAll();
  }

  @Get(':id')
  findById(@Param('id', ParseIdPipe) id, @Query('sort', ParseBoolPipe) sort) {
    return this.propertyService.findById(id, sort);
  }

  
  @Post()
  @UsePipes( new createZodValidation(createPropertySchema))
  @HttpCode(202)
  // @UsePipes(new ValidationPipe({whitelist : true,forbidNonWhitelisted:true}))
  // @UsePipes(new ValidationPipe({whitelist : true , forbidNonWhitelisted : true}))
  create(@Body() body: CreatePropertyDto) {
    return this.propertyService.create(body);
  }

  @Patch(':id')
  update(@Param('id', ParseIdPipe) id, @Body() body: CreatePropertyDto, @RequestHeader(new ValidationPipe({whitelist:false,validateCustomDecorators : true,forbidNonWhitelisted:false}))@Headers() header:HeadersDto) {
    // body.name = "overwritable";
    // return {id:id,...body}
    return header
    // return this.propertyService.update(id, body);
  }
}
