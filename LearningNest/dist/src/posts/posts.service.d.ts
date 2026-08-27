import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from "../prisma/prisma/prisma.service";
export declare class PostsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createPostDto: CreatePostDto): Promise<{
        title: string;
        content: string;
        profileId: string;
        id: string;
    }>;
    findAll(): Promise<{
        title: string;
        content: string;
        profileId: string;
        id: string;
    }[]>;
    findOne(id: string): Promise<{
        title: string;
        content: string;
        profileId: string;
        id: string;
    } | null>;
    update(id: string, updatePostDto: UpdatePostDto): Promise<{
        title: string;
        content: string;
        profileId: string;
        id: string;
    }>;
    remove(id: string): Promise<{
        title: string;
        content: string;
        profileId: string;
        id: string;
    }>;
}
