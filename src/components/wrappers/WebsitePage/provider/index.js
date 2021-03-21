import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import theme from '../../../../theme';
import { GlobalStyle } from '../../../../theme/GlobalStyle';

export default function WebSiteGlobalProvider({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

WebSiteGlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
