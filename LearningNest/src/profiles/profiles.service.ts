import { Injectable, Param, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { PrismaService } from '../prisma/prisma/prisma.service';

@Injectable()
//enables our service class when imported and used elsewhere  to create a new instance of it or reuse an already created one so you don't have to create it manually
export class ProfilesService {

  constructor(private prisma: PrismaService) {}

  async findAll(){
    return this.prisma.profile.findMany()
  }


  async findOne(id: string){
    const matchingProfile = await this.prisma.profile.findUnique({
      where: {id}
    })
    if(!matchingProfile){
      throw new NotFoundException(`Profile with ID ${id} is not found`)
    }
    return matchingProfile
  }

  async create(createProfileDto: CreateProfileDto){
    return this.prisma.profile.create({
      data: createProfileDto
    })
  }

  async update( id:string, updateProfileDto: UpdateProfileDto){
   //finding a matching profile using the find method
   await this.findOne(id)

   return this.prisma.profile.update({
    where: {id},
    data: updateProfileDto
   })
      }

  async remove(id:string){

    await this.findOne(id)
    return this.prisma.profile.delete({
      where: {id}
    })
  }
    
    
}
