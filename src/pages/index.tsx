import React from 'react';
import styled from "styled-components";
import WordCloud from '../components/Wordcloud';
import constants from '../Constants';
import ProfilePic from '../images/ProfilePic.png'

import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import Constants from '../Constants';


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
          
          <Timeline
            sx={{
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
              },
            }}
          >

            {Constants.About.Experience.map((exp) => 
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '3px', px: 2 }}>
                  <Typography variant="h6" component="span">
                    {exp.year}
                  </Typography>
                  <Typography variant="subtitle1" >{exp.Position}</Typography>
                  <Typography>{exp.Description}</Typography>
                </TimelineContent>
              </TimelineItem>
            )}

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '3px', px: 2 }}>
                <Typography variant="h6" component="span">
                  {new Date().getFullYear()}
                </Typography>
              </TimelineContent>
            </TimelineItem>
            
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

