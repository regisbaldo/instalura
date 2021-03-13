import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { get } from 'lodash';
import { TextStyleVariantsMap } from '../../foundation/Text';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';
import { propToStyle } from '../../../theme/utils/propToStyle';
import { Link } from '../Link';

const ButtonDefault = css`
    background-color : ${(props) => get(props.theme, `colors.${props.variant}.color`)};
    color : ${(props) => get(props.theme, `colors.${props.variant}.contrastText`)};
`;

const ButtonGhost = css`
     background : transparent;
     color : ${(props) => get(props.theme, `colors.${props.variant}.color`)};
   
`;

const ButtonWrapper = styled.button`

    border: 0;
    cursor: pointer;
    padding: 12px 26px;
    font-weight: bold;
    opacity: 1;
   
    transition: opacity ${({ theme }) => theme.transition};
    border-radius:${({ theme }) => theme.borderRadius};
    &:hover,
    &:focus {
        opacity: .5;
    }

    ${breakpointsMedia({
    xs: css`
      ${TextStyleVariantsMap.smallestException}
    `,
    md: css`
      padding: 12px 43px;
      ${TextStyleVariantsMap.paragraph1}
    `,
  })}
      &:disabled {
    cursor: not-allowed;
    opacity: .2;
  }
  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `};
    ${propToStyle('margin')}
    ${propToStyle('display')}

    
    ${(props) => {
    if (props.ghost) {
      return ButtonGhost;
    }
    return ButtonDefault;
  }}
    ${propToStyle('paddingTop')}

`;
export const Button = ({ href, ...props }) => {
  const isLink = Boolean(href);
  const componentTag = isLink ? Link : 'button';

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <ButtonWrapper as={componentTag} href={href} {...props} />
  );
};

Button.defaultProps = {
  href: undefined,
};

Button.propTypes = {
  href: PropTypes.string,
};
