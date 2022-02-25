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
    title: string;
    stack: any;
    summary: string;
    url: string;
}

export interface Project extends ProjectDetails {}

const ProjectConstructor = (props: ProjectDetails): Project => {
    const { title, stack, summary, url } = props;

    return {
        title,
        summary,
        url,
        stack,
    };
};

const projectsData: Project[] = [
    ProjectConstructor({
        title: 'رزگل',
        summary: "وب اپلیکیشن فروشگاهی",
        url: "https://rosegol.app",
        stack: ['JavaScript', 'Next.js']
    }),
    ProjectConstructor({
        title: 'رزاسافت',
        summary: "پنل مدیریتی رستوران",
        url: "https://rosa.sepanodp.com",
        stack: ['JavaScript', 'React.js']
    }),
    ProjectConstructor({
        title: 'شیپ نو',
        summary: "وب اپلیکیشن حمل و نقل",
        url: "https://app.shipnow.ir",
        stack: ['JavaScript', 'Next.js']
    }),
    ProjectConstructor({
        title: 'Sepehr Mohseni',
        summary: "وبسایت شخصی",
        url: "https://sepehrmohseni.com",
        stack: ['TypeScript', 'Next.js']
    }),
];

export default projectsData;
