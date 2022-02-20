import * as React from 'react';
// next
import Head from 'next/head';

import CustomAppBar from '../common/CustomAppBar';
import Footer from '../section/Footer';

import { Page } from '../../utils/context/pages';
interface MainLayoutProps {
  pageData?: Page;
}

const MainLayout: React.FunctionComponent<MainLayoutProps> = (props) => {
  const { children, pageData, ...otherProps } = props;

  return (
    <>
      {pageData && (
        <Head>
          <title>{pageData.title ? pageData.title : 'No page title'}</title>
          {pageData.description && (
            <meta name='description' content={pageData.description} />
          )}
        </Head>
      )}
      <CustomAppBar />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
