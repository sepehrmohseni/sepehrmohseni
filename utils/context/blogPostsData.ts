// dayjs
import dayjs from 'dayjs';
// lib
import { createPost } from '../settingHandlers';

import { BlogPost } from '../../types/blogPosts';

const blogPosts: BlogPost[] = [
    createPost({
        category: ['learning'],
        date: dayjs().subtract(6, 'week'),
        id: 'how-to-create-next-js-app',
        image: {
            alt: 'nextjs logo',
            height: 2232,
            likes: 98,
            src: '/posts/nextjs1.jpg',
            width: 1920,
        },
        filename: 'how-to-create-next-js-app',
        title: 'How to create Next.js app in only one command?',
    }),
];

export default blogPosts;
