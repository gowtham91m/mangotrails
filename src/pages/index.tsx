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
        <Experience>
          <div>
            <ExperienceTitle>Experience</ExperienceTitle>
            <ul>2012: Software developer at Accenture</ul>
            <ul>2015: Master of Science in Information Systems at Oklahoma State University</ul>
            <ul>2016: Data Analyst Intern and Oklahoma State University Alumni Association</ul>
            <ul>2017: Data Scientist at LatentView Analytics</ul>
            <ul>2019: Software Development Engineer at Amazon</ul>
          </div>
        </Experience>
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
display: block;
text-align:left;
padding-top: 0px;
padding-bottom: 0px;
padding-left: 30%;
grid-area: Experience;
@media screen and (max-width: 767px){
  padding-left: 0;
  padding-right: 5%;
  padding-botton:10px;
}
`;

const ExperienceTitle = styled.h1`
  padding-left:40px;
`
export default About;

