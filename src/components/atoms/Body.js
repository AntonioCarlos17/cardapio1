import React from "react";
import { styled } from "styled-components";

const BodySty = styled.div`
box-shadow: 2px 2px 4px solid red;
background-color: #890505;
margin-top: 0;
padding-bottom: 5px;
color: #ffdd00;

ul{
    text-align: right ;
    margin-top: -15px;
    padding-right: 5px;


}
h2{
    color: black;
    font-size: 17px;
    text-align: left;
    padding-left: 20px;
    text-decoration: underline;
}
h1{
    margin-top: -30px;
    font-size: 20px;
    text-align: center;
    display: center;
    
    padding: 1.5rem;
}
`;
const Lista = styled.span`
text-decoration: none;
font-size: 1rem;
margin-left: 5px;`;
  
const Body = () => (
    <BodySty>
        <h1>CARDÁPIO</h1>
        <h2>Bebidas</h2>
        <Lista>Água Mineral 500ml</Lista><ul>R$ 2,00</ul> 
        <Lista>Kapo</Lista><ul>R$ 2,50</ul>
        <Lista>Refri 250ml</Lista><ul>R$ 2,00</ul>
        <Lista>Fanta em Lata</Lista><ul>R$ 3,00</ul>
        <Lista>Kuat em Lata</Lista><ul>R$ 3,00</ul>
        <Lista>Coca-cola em Lata</Lista><ul>R$ 3,50</ul>
        <Lista>Fanta 1L(vidro)</Lista><ul>R$ 5,00</ul>
        <Lista>Coca-cola 1L(vidro)</Lista><ul>R$ 5,00</ul>
        <Lista>Refri 2L</Lista><ul>R$ 6,00</ul>
        <Lista>Fanta 2L</Lista><ul>R$ 8,00</ul>
        <Lista>Sprite 2L</Lista><ul>R$ 8,00</ul>
        <Lista>Kuat 2L</Lista><ul>R$ 8,00</ul>
        <Lista>Coca-cola 2L (retornável)</Lista><ul>R$ 7,00</ul>
        <Lista>Cerveja Lokal</Lista><ul>R$ 3,50</ul>
        <Lista>Cerveja Itaipava</Lista><ul>R$ 4,00</ul>

        <h2>Marmitas</h2>
        <Lista>Quentinha Grande</Lista><ul>R$ 14,00</ul>
        <Lista>Quentinha pequena</Lista><ul>R$ 10,00</ul>
        <Lista>Prato feito(comer no local)</Lista><ul>R$ 12,00</ul>
        <h2>Sobremesas</h2>
        <Lista>Açai</Lista><ul>R$ 10,00</ul>
        <h2>Derivados</h2>
        <Lista>Leite de Vaca 1L</Lista><ul>R$ 3,00</ul>
        <Lista>Ovo (galinha de capoeira)</Lista><ul>R$ 1,00</ul>
    </BodySty>
);
 
 
export default Body;