import React from "react";

import Hero from "../atoms/Hero";
import Body from "../atoms/Body";
import styled from "styled-components";

const Vibe = styled.div`
background-color: #890505;
`;
  
const Home = () => (
    <Vibe>
        <Hero />
        <Body />
    </Vibe> 
);
 

export default Home;
