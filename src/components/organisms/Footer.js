import React from "react";
import styled from "styled-components";

import { FaInstagram, FaHouse, FaPhone } from "react-icons/fa6";

const Icon = styled.span`
    color: black;
    text-decoration: underline;
`;

const Root = styled.footer`
  background-color: #2a2a2a;
  color: #ffdd00;
  padding: 10px 10px;

  h4{
      text-decoration: underline;
  }

`;

const FooterLink = styled.a`
  color: blueviolet;
  text-decoration: none;

  &:hover {
    color: blue;
  }
  `;


const Previer = styled.div`
margin-left: 10px;
padding: 8px;
font-size: 25px;

`;
  
const Footer = () => (
    
    <Root>
        
            <div>
              <h4> Sabor da Casa<FaHouse /> </h4>
                <p>
        Nosso contato para mais informações<br/>
       <FaPhone />(83) 99166-0263
          </p>
          <p>
        Somos o mais novo empreendimento no Sitio Estreito, nossa localização e de fácil acesso.
      </p>
            <p>
                Saiba mais sobre nós na nossa rede social.
          </p>
        </div>
        <div>
            <h4>Redes Socias</h4>
                <Previer>
        <FooterLink target="_blank" href="https://www.instagram.com/sabor_dacasa189?igsh=MXh0eWpybnp2MzNtcA==">
              <Icon><FaInstagram /></Icon> Instagram
                    </FooterLink >
                    </Previer>
            </div>
            
  </Root>
    
);
 

 
export default Footer;