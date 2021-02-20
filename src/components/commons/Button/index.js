import styled, { css } from 'styled-components'
import { get } from 'lodash';
import { TextStyleVariants } from '../../foundation/Text';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';
import { propToStyle } from '../../../theme/utils/propToStyle';

const ButtonDefault = css`
    background-color : ${(props) =>{
        return get(props.theme, `colors.${props.variant}.color`)
    }};
    color : ${(props) => {
         return get(props.theme, `colors.${props.variant}.contrastText`)
    }};
`;

const ButtonGhost = css`
     background : transparent;
     color : ${(props) => {
        return get(props.theme, `colors.${props.variant}.color`)
    }};
   
`;

export const Button = styled.button`

    border: 0;
    cursor: pointer;
    padding: 12px 26px;
    font-weight: bold;
    opacity: 1;
   
    transition: opacity ${({theme}) => theme.transition};
    border-radius:${({theme}) => theme.borderRadius};
    &:hover,
    &:focus {
        opacity: .5;
    }

    ${breakpointsMedia({
    xs: css`
      ${TextStyleVariants.smallestException}
    `,
    md: css`
      padding: 12px 43px;
      ${TextStyleVariants.paragraph1}
    `,
    })}

    ${propToStyle('margin')}
    ${propToStyle('display')}

    
    ${function (props) {
        if (props.ghost) {
            return ButtonGhost;
        }
        return ButtonDefault;
    }}
    ${propToStyle("paddingTop")}

`;