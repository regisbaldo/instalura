import React from 'react';
import FAQScreen from '../../src/components/screens/FAQScreen';
import webSitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';

function FAQPage({ faqCategories }) {
  return (
    <FAQScreen faqCategories={faqCategories} />
  );
}

export default webSitePageHOC(FAQPage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Perguntas Frequentes',
    },
  },
});

export async function getStaticProps() {
  const faqCategories = await fetch('https://instalura-api.vercel.app/api/content/faq')
    .then((response) => response.json())
    .then((response) => response.data);
  return {
    props: {
      faqCategories,
    },
  };
}

FAQPage.propTypes = FAQScreen.propTypes;
