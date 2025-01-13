import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { validateOrReject } from "class-validator";

export const RequestHeader = createParamDecorator(
    async (tagertDto:any , ctx : ExecutionContext)=>{
        const headers = ctx.switchToHttp().getRequest().headers;
        const dto = plainToInstance(tagertDto,headers,{
            excludeExtraneousValues : true
        })

        console.log(dto)

        await validateOrReject(dto);
        return dto
    }
    
)