export interface Page {
  title?: string;
  description?: string;
  keywords?: string;
}

export interface Pages {
  [key: string]: Page;
}

const pages: Pages = {
  home: {
    title: 'سپهر محسنی - مهندس نرم افزار',
    description:
      'من یک مهندس نرم افزار فول استک هستم که علاقه مند به ساخت نرم افزارهای مقیاس پذیر وب و موبایل هستم.',
    keywords:
      'نرم افزار، طراحی سایت، طراحی اپلیکیشن، ساخت وبسایت، ساخت اپلیکیشن، فول استک، فرانت اند، بک اند، اپلیکیشن',
  },
};

export default pages;
