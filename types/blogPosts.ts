import { Dayjs } from 'dayjs';
import { BlogPostCategory } from './category';
import { ImageProps } from './image';

export interface BlogPostDetails {
    category: BlogPostCategory[];
    date: Dayjs;
    id: string;
    image: ImageProps;
    filename: string;
    title: string;
}

export interface BlogPost extends BlogPostDetails {
    likes: number;
}
