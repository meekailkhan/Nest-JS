import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
    findAll(){
        return 'all cats'
    }
    findById(id:number){
        return id
    }
}
