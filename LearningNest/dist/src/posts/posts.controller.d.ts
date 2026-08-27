import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
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
