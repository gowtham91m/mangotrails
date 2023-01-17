import React from 'react';
import styled from "styled-components";
import WordCloud from '../components/Wordcloud';
import constants from '../Constants';

import ProfilePic from '../images/ProfilePic.png'


const About = () => {
  console.log(constants.Intro);
  return (
    <>
      <HomeContainer>
        <HomeImageContainer>
          <HomeImage src={ProfilePic}></HomeImage>
        </HomeImageContainer>
        <Intro><span>`{constants.Intro}`</span></Intro>
        <Experience>Expreience</Experience>
      </HomeContainer>
    </>
  );
};


const HomeContainer = styled.div`
  display: grid;
  padding-left:5%;
  padding-right:5%;
  padding-top:5%;
  grid-template-areas:
                      "HomeImageContainer Intro Intro Intro"
                      "Experience Experience Experience Experience";
  grid-gap: 2rem;
  @media screen and (max-width: 767px){
      display: grid;
  padding-left:5%;
  padding-right:5%;
  padding-top:5%;
  grid-template-areas:
                      "HomeImageContainer"
                      "Intro"
                      "Experience";
  grid-gap: 2rem;
  }
`;

const HomeImageContainer = styled.div`
display:flex;
justify-content: center;
text-align: center;
  grid-area: HomeImageContainer; 
`;

const HomeImage = styled.img`
display:flex;
  height:300px;
  width:300px;
`

const Intro = styled.div`
padding-top:10%;
padding-left:5%;
padding-right:5%;
font-size:18px;
vertical-align: center;
  grid-area: Intro;
  @media screen and (max-width: 767px){
    padding-top:8%;
    height: 250px;
  }
`;

const Experience = styled.div`
justify-content: center;
text-align: center;
display:flex;
grid-area: Experience;
background-color: gray;
`;
export default About;

