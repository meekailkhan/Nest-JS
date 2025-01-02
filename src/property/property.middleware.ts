import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express'
import { resolve } from 'path';

@Injectable()
export class PropertyMiddleware implements NestMiddleware {
    async use(req: Request, res: Response, next: NextFunction): Promise<void> {
        req.body = {
            name: 'abcdefg',
            description: 'middleware',
            area: 233
        }
        next()
    }
    private async someAsyncJob():Promise<void>{
        return new Promise((resolve)=> setTimeout(resolve,1000))
    }
}