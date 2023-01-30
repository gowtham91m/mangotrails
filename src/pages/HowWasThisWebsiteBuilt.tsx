import React from 'react';
import styled from "styled-components";
import UnderConstruction from '../images/UnderConstruction.png'
import Constants from '../Constants';

const HowWasThisWebsiteBuilt = () => {
    return (
        <HomeContainer>
            <h1>Features</h1> 
            <ul>
                {Constants.Codelab.HowWasThisWebsiteBuild.Features.map((item)=><li>{item}</li>)}
            </ul>
            <h1>Todos</h1>
            <ul>
                {Constants.Codelab.HowWasThisWebsiteBuild.Todos.map((item) => <li>{item}</li>)}
            </ul>
        </HomeContainer>
    );
};





const HomeContainer = styled.div`
  padding-left:5%;
  padding-right:5%;
  padding-top:5%;
  text-align:left;
  @media screen and (max-width: 767px){
  padding-left:10%;
  padding-right:15%;
  padding-top:10%;
  text-align:left;
  }
`;

export default HowWasThisWebsiteBuilt;

