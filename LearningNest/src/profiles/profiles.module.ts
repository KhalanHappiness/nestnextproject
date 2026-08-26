import { Module } from '@nestjs/common';
import { ProfilesController } from './profiles.controller';
import { ProfilesService } from './profiles.service';
import { PrismaModule } from '../prisma/prisma/prisma.module';

@Module({
  controllers: [ProfilesController],
  providers: [ProfilesService],
  imports: [PrismaModule]
})
export class ProfilesModule {}
