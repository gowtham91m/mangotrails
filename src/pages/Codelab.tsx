import React from 'react';
import styled from "styled-components";
import UnderConstruction from '../images/UnderConstruction.png'

const Codelab = () => {
  return (
    <HomeContainer>
      <Imgdiv>
        <img src={UnderConstruction} />
      </Imgdiv>
      <ButtonContainer>
        <button>How was this website built?</button>
        <button>Favorite leisure activities</button>
      </ButtonContainer>
    </HomeContainer>
  );
};





const HomeContainer = styled.div`
  float:left;
  padding-left:5%;
  padding-right:5%;
  padding-top:5%;
  justify-content: center;
  @media screen and (max-width: 767px){
  float:left;
  padding-left:10%;
  padding-right:15%;
  padding-top:10%;
  }
`;

const Imgdiv = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 100px;
  > img {
    width :500px ;
    }
  @media only screen and (max-width: 1000px) {
      > img {
        width : 400px;
      }
    }
`;

const ButtonContainer = styled.div`
  display:block;
`

export default Codelab;

