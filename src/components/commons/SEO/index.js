import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

export default function SEO({ headTitle }) {
  const pageTitleDefault = 'Instalura - Projeto do Alura Bootcamp';
  const hasHeadTitle = Boolean(headTitle);
  const title = hasHeadTitle
    ? (`${headTitle} | ${pageTitleDefault}`)
    : (pageTitleDefault);

  const description = 'Instalura';
  const image = 'Instalura';
  const urlBase = 'Instalura';
  return (
    <Head>
      <title>{ title }</title>

      <meta name="title" content={title} />
      <meta property="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={urlBase} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

    </Head>
  );
}

SEO.defaultProps = {
  headTitle: '',
};

SEO.propTypes = {
  headTitle: PropTypes.string,
};
