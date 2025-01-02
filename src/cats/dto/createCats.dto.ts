import { IsString } from "class-validator";

export class CreateCatsDto{
    @IsString({always:true})
    readonly name:string
}