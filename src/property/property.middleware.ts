import { Injectable, NestMiddleware } from '@nestjs/common';
import {Request,Response,NextFunction} from 'express'

@Injectable()
export class PropertyMiddleware implements NestMiddleware {
  use(req:Request,res:Response,next:NextFunction):void {
    req.body = {
        name : 'abcdefg',
        description : 'middleware',
        area : 233
    }
    next()
  }
}