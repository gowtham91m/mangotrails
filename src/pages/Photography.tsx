import React from 'react';
import styled from "styled-components";
import a from '../photos/a.jpeg'
import e from '../photos/e.jpeg'
import f from '../photos/f.jpeg'

const Photography = () => {
    return (
      <HomeContainer>
          <Img src={a}/>
        <Img src={e} />
        <Img src={f} />
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

const Img = styled.img`
  height : 300px;
  padding: 20px;
  width: auto;
  @media screen and (max-width: 767px){
    width:100%;
    height:auto;
  }
`
export default Photography;

