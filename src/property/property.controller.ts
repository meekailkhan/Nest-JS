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
} from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';
import { ParseIdPipe } from './pipes/parseidpipe';
import { PropertyService } from './property.service';

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
  @HttpCode(202)
  // @UsePipes(new ValidationPipe({whitelist : true,forbidNonWhitelisted:true}))
  // @UsePipes(new ValidationPipe({whitelist : true , forbidNonWhitelisted : true}))
  create(@Body() body: CreatePropertyDto) {
    return this.propertyService.create(body);
  }

  @Patch(':id')
  update(@Param('id', ParseIdPipe) id, @Body() body:CreatePropertyDto) {
    // body.name = "overwritable";
    // return {id:id,...body}
    return this.propertyService.update(id, body);
  }
}
