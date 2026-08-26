import { IsString, Length } from 'class-validator';


export class UpdateProfileDto {
    @IsString()
    @Length(3, 100)
    name: string = '';

    @IsString()
    @Length(10, 200)
    description: string = '';

}