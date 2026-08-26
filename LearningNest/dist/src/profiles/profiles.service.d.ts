import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { PrismaService } from '../prisma/prisma/prisma.service';
export declare class ProfilesService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        name: string;
        description: string;
        id: string;
    }[]>;
    findOne(id: string): Promise<{
        name: string;
        description: string;
        id: string;
    }>;
    create(createProfileDto: CreateProfileDto): Promise<{
        name: string;
        description: string;
        id: string;
    }>;
    update(id: string, updateProfileDto: UpdateProfileDto): Promise<{
        name: string;
        description: string;
        id: string;
    }>;
    remove(id: string): Promise<{
        name: string;
        description: string;
        id: string;
    }>;
}
