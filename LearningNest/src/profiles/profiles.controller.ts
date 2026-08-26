import { Controller, Get, Query, Param, Post, Body, Put, Delete, HttpCode, HttpStatus, HttpException, ParseUUIDPipe, UseGuards } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfilesService } from './profiles.service';
import type { UUID } from 'crypto' 
import { ProfilesGuard } from './profiles.guard'; 

@Controller('profiles')
export class ProfilesController {

    constructor(private readonly profilesService: ProfilesService){}

//Get all profiles

    @Get()
    // findAll(@Query('age') age:number){
    //     return [{age}]
    // }
    async findAll(){
        return await this.profilesService.findAll()
        
    }

//Get profile by id
@Get(':id')
async findOne(@Param('id', ParseUUIDPipe) id: UUID){
    return await this.profilesService.findOne(id)
}

//Creating a new profile

//Creating a data transfer object
//We write it as a class
@Post()
async create(@Body() createProfileDto: CreateProfileDto){
    return await this.profilesService.create(createProfileDto)
}

//Updating a profile
@Put(':id')
async update(@Param('id', ParseUUIDPipe) id: UUID, @Body() updateProfileDto: UpdateProfileDto){
    return await this.profilesService.update(id, updateProfileDto)
}

// deleting a profile
@Delete(':id')
@UseGuards(ProfilesGuard)
@HttpCode(HttpStatus.NO_CONTENT)
async remove(@Param('id', ParseUUIDPipe) id: UUID){

    this.profilesService.remove(id)

} 


}


