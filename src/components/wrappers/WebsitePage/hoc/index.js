/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import WebsitePageWrapper from '..';
import WebSiteGlobalProvider from '../provider';

export default function webSitePageHOC(PageComponent, { pageWrapperProps }) {
  return (props) => (
    <WebSiteGlobalProvider>
      <WebsitePageWrapper {...pageWrapperProps}>
        <PageComponent {...props} />
      </WebsitePageWrapper>
    </WebSiteGlobalProvider>
  );
}
