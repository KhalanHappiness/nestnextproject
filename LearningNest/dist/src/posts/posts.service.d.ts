import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from "../prisma/prisma/prisma.service";
export declare class PostsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createPostDto: CreatePostDto): Promise<{
        id: string;
        title: string;
        content: string;
        profileId: string;
    }>;
    findAll(): Promise<{
        id: string;
        title: string;
        content: string;
        profileId: string;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        title: string;
        content: string;
        profileId: string;
    } | null>;
    update(id: string, updatePostDto: UpdatePostDto): Promise<{
        id: string;
        title: string;
        content: string;
        profileId: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        title: string;
        content: string;
        profileId: string;
    }>;
}
