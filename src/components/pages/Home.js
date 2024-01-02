import React from "react";

import Hero from "../atoms/Hero";
import Body from "../atoms/Body";
import styled from "styled-components";
import Footer from "../organisms/Footer";

const Vibe = styled.div`
background-color: #890505;
box-sizing: auto;
`;
  
const Home = () => (
    <Vibe>
        <Hero />
        <Body />
        <Footer />
    </Vibe> 
);
 

export default Home;
