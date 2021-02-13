import styled, { css } from 'styled-components'
import { get } from 'lodash';


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
    ${function (props) {
        if (props.ghost) {
            return ButtonGhost;
        }
        return ButtonDefault;
    }}
    transition: opacity ${({theme}) => theme.transition};
    border-radius:${({theme}) => theme.borderRadius};
    &:hover,
    &:focus {
        opacity: .5;
    }

`;