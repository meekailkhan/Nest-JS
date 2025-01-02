import { Controller, Get, Param } from '@nestjs/common';
import { CatsService } from './cats.service';
import { ParseIdPipe } from 'src/property/pipes/parseidpipe';
import { IdParamDto } from 'src/property/dto/idParam.dto';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService:CatsService){}
    @Get()
    findAll():string{
        return this.catsService.findAll()
    }
    @Get(':id')
    // @Param() params : IdParamDto
    findById(@Param('id',ParseIdPipe) id){
        return this.catsService.findById(id)
    }

}
