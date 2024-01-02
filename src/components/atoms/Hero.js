import React from "react";
import { styled } from "styled-components";
import { FaHouse } from "react-icons/fa6";

export const Heading = styled.div`
background-color: #890505;
text-align: center;
font-size: 1rem;
padding: 1rem;
width: 248px;


    h1{
    color: #ffdd00;
    text-decoration: underline;
 }

    h6{
    margin-top: -10px;
    color: black;
    font-size: 16px;
 }
`;

const Hero = () => (
    <Heading>
        <h1>Sabor da Casa<FaHouse/> </h1>
        <h6>A melhor comida da região.</h6>
    </Heading>
);
 
 
export default Hero;
