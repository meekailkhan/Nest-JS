import { Injectable } from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';

@Injectable()
export class PropertyService {
  findAll() {
    return 'all property';
  }
  findById(id: number, sort: boolean) {
    console.log(typeof id);
    console.log(typeof sort);
    return id;
  }
  create(body) {
    return body;
  }
  update(id: number, body) {
    return { id: id, ...body };
  }
}
