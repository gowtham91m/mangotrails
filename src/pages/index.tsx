import React from 'react';
import styled from "styled-components";
import WordCloud from '../components/Wordcloud';
import constants from '../Constants';
import ProfilePic from '../images/ProfilePic.png'


const About = () => {

  return (
    <>
      <HomeContainer>
        <HomeImageContainer>
          <HomeImage src={ProfilePic}></HomeImage>
        </HomeImageContainer>
        <Intro><span>`{constants.About.Intro}`</span></Intro>
        <Experience>
        </Experience>
      </HomeContainer>
    </>
  );
};


const HomeContainer = styled.div`
  display: grid;
  padding-top:10%;
  justify-content: center;
  grid-template-areas:
                      "HomeImageContainer Intro Intro Intro"
                      "Experience Experience Experience Experience";
  grid-gap: 2rem;
  @media screen and (max-width: 767px){
      display: grid;
  padding-left:5%;
  padding-right:5%;
  padding-top:20%;
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
padding-left:10%;
padding-right:10%;
padding-bottom: 30px;
font-size:18px;
vertical-align: center;
  grid-area: Intro;
  @media screen and (max-width: 767px){
    padding-top:0%;
    padding-bottom: 20px;
    height: 100%;
  }
`;

const Experience = styled.div`
display: block;
text-align:left;
padding-bottom: 10px;
padding-left: 30%;
grid-area: Experience;
@media screen and (max-width: 767px){
  padding-left: 0;
  padding-bottom: 15%;;
}
`;
export default About;


