import React from 'react';
import PropTypes from 'prop-types';

import FAQScreen from '../../src/components/screens/FAQScreen';

export default function LoginPage({ faqCategories }) {
  return (
    <FAQScreen faqCategories={faqCategories} />
  );
}

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

LoginPage.defaultProps = {
  faqCategories: [],
};
LoginPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  faqCategories: PropTypes.array,
};
