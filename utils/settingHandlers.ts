import { BlogPost, BlogPostDetails } from '../types/blogPosts';
import createCache from "@emotion/cache";


export const calcArrayOfObj = (
    array: { [key: string]: any }[],
    propertyName: string
) => {
    let total = 0;
    array.forEach((item) => {
        if (typeof item[propertyName] === 'number') {
            total += item[propertyName];
        }
    });
    return total;
};

export const sortArrayOfObj = (
    array: { [key: string]: any }[],
    key: string,
    order: 'asc' | 'desc' = 'asc'
) => {
    if (order === 'asc') return array.sort((a, b) => (a[key] > b[key] ? 1 : -1));

    return array.sort((a, b) => (a[key] > b[key] ? -1 : 1));
};

export const createPost = (props: BlogPostDetails): BlogPost => {
    const { category, date, id, image, filename, title } = props;

    return {
        category,
        date,
        id,
        image,
        filename,
        title,
        get likes() {
            return this.image.likes;
        },
    };
};

export const createEmotionCache = () => {
    return createCache({ key: "css" });
};