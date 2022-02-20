// dayjs
import dayjs, { Dayjs } from 'dayjs';

import { ImageProps } from '../../types/image';
import { ProjectCategory } from '../../types/category';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import homeSc from "../../public/projects/roseGol/roseGolScreenshot.jpg";
import prdSc from "../../public/projects/roseGol/singleProductScreenshot.jpg";
import ordSc from "../../public/projects/roseGol/roseGolOrderdetail.jpg";


export interface ProjectDetails {
    category: ProjectCategory[];
    date: string;
    id: string;
    images: ImageProps[];
    postFileName: string;
    title: string;
    stack: any;
}

export interface Project extends ProjectDetails {
    likes: number;
}

const ProjectConstructor = (props: ProjectDetails): Project => {
    const { category, date, id, images, postFileName, title, stack } = props;

    return {
        category,
        date,
        id,
        title,
        images,
        postFileName,
        stack,
        get likes() {
            let totalLikes = 0;
            if (this.images.length === 0) return 0;

            this.images.forEach((image) => (totalLikes += image.likes));
            return totalLikes;
        },
    };
};

const projectsData: Project[] = [
    ProjectConstructor({
        category: ['Next', 'React'],
        date: "2020 - 2021",
        id: 'rosegol',
        postFileName: 'rosegol',
        title: 'Rose Gol',
        images: [
            {
                alt: 'screenshot of home page of products with flowers',
                width: 6000,
                height: 4000,
                likes: 42,
                src: homeSc,
            },
            {
                alt: 'screenshot of single product page with add to shopping cart',
                width: 6000,
                height: 4000,
                likes: 59,
                src: prdSc,
            },
            {
                alt: 'screenshot of order details page with delivery and polls and location and shop information',
                width: 6000,
                height: 4000,
                likes: 34,
                src: ordSc,
            },

        ],
        stack: [
            'react'
        ]
    }),

];

export default projectsData;
