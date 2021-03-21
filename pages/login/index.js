import React from 'react';
import webSitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';

function LoginPage() {
  return (
    <span>Página de login</span>
  );
}

export default webSitePageHOC(LoginPage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Login',
    },
    menuProps: {
      display: false,
    },
  },
});
