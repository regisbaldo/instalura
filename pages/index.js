import React from 'react';
import HomeScreen from '../src/components/screens/HomeScreen';
import webSitePageHOC from '../src/components/wrappers/WebsitePage/hoc';

function HomePage() {
  return (
    <HomeScreen />
  );
}

export default webSitePageHOC(HomePage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Perguntas Frequentes',
    },
  },
});
