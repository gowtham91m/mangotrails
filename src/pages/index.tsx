import React from 'react';
import styled from "styled-components";
import WordCloud from '../components/Wordcloud';
import constants from '../Constants';
import { Timeline, Text } from '@mantine/core';
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
            <h2>Professional Experience</h2>
            <Timeline active={4} bulletSize={24} lineWidth={2}>
              <Timeline.Item title="2012" >
                <Text  size="lg">Accenture - Software Development Engineer</Text>
                <Text size="md" mt={4}>CRM application development</Text>
              </Timeline.Item>

              <Timeline.Item title="2015" >
                <Text  size="lg">Oklohama State University - Master of Science in Information Systems</Text>
                <Text size="md" mt={4}>Statistics and data analytics</Text>
              </Timeline.Item>

              <Timeline.Item title="2016" >
                <Text  size="lg">Oklahoma State University Alumni Association - Data Analyst Intern</Text>
                <Text size="md" mt={4}>Manage alumni association database and provide data driven business insights</Text>
              </Timeline.Item>

              <Timeline.Item title="2017" >
                <Text  size="lg">Latent View Analytics - Data Scientist</Text>
                <Text size="md" mt={4}>Perform statistical analysis on digital marketing experiential studies</Text>
              </Timeline.Item>

            <Timeline.Item title="2019" lineVariant="dashed" >
                <Text  size="lg">Amazon - Software Development Engineer</Text>
                <Text size="md" mt={4}>Develop amazon pharmacy sign up flow</Text>
              </Timeline.Item>

            <Timeline.Item title="2022" />

            </Timeline>
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
  justify-content: center;
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

