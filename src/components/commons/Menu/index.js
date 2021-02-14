import React from 'react'
import styled from 'styled-components'
import Logo from '../../../theme/Logo'
import { Button } from '../Button';
import Text from '../../foundation/Text'

const MenuWrapper = styled.nav`
  font-family: 'Rubik', 'sans-serif';
  display: flex;
  align-items:center;
  justify-content:space-between;
  flex-wrap: wrap;
  margin-top: 18px;
  padding-left: 28px;
  padding-right: 28px;
`;

MenuWrapper.LeftSide = styled.div`
  padding: 0;
  margin: 0;
  order: 1;
`;
MenuWrapper.CentralSide = styled.div`
  padding: 0;
  margin: 0;
  order: 3;
  width: 100%;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 17px;
  border-top: 1px solid #88989E;
  border-bottom: 1px solid #88989E;
  padding: 12px;
  
 
  a {
    text-align: center;
    display: block;
    text-decoration: none;
    color: #88989E;
    transition: 200ms ease-in-out;
   
    &:hover,
    &:focus {
      font-weight: 500;
      color: #070C0E;
      
    }
  }
`;
MenuWrapper.RightSide = styled.div`
  padding: 0;
  margin: 1px;
  order: 2;
`;

const links =[
    {
        texto: 'Home',
        url: '/'
    },
    {
        texto: 'Perguntas frequentes',
        url: '/faq'
    },
    {
        texto: 'Sobre',
        url: '/sobre'
    }
];

export default function Menu (){
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
          <Logo/>
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide>
          {links.map( link => {
              return (
                  <li key={link.url} >
                      <Text tag="a" variant="smallestException" href={link.url}>
                        {link.texto}
                      </Text>
                  </li>
              )
          })}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
          <Button ghost variant="secondary.main">Entrar</Button>
          <Button variant="primary.main">Cadastrar</Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  )
}