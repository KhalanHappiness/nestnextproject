import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { PrismaService } from '../prisma/prisma/prisma.service';
export declare class ProfilesService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        id: string;
        name: string;
        description: string;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        name: string;
        description: string;
    }>;
    create(createProfileDto: CreateProfileDto): Promise<{
        id: string;
        name: string;
        description: string;
    }>;
    update(id: string, updateProfileDto: UpdateProfileDto): Promise<{
        id: string;
        name: string;
        description: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        name: string;
        description: string;
    }>;
}
