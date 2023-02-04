import React from 'react';
import styled from "styled-components";
import constants from '../Constants';
import ProfilePic from '../images/ProfilePic.png'
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Constants from '../Constants';
import { Typography } from '@mui/material';

const About = () => {

  return (
    <>
      <HomeMainContainer>
        <HomeContainer>
          <HomeImageContainer>
            <HomeImage src={ProfilePic}></HomeImage>
          </HomeImageContainer>
          <Intro><span>`{constants.About.Intro}`</span></Intro>
        </HomeContainer>
      </HomeMainContainer>


      <ExperienceMainContainer>
      <ExperienceContainer>
        <h2>Experience</h2>
        <Timeline
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
          }}
        >
          {Constants.About.Experience.map((exp) =>
            <TimelineItem key={exp.Position}>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>

              <TimelineContent>
                <Typography variant="h6">
                  {exp.year}
                </Typography>
                <Typography variant="h6">
                  {exp.Position}
                </Typography>
                <Typography>
                  {exp.Description}
                </Typography>
              </TimelineContent>

            </TimelineItem>)}
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6" component="span">
                {new Date().getFullYear()}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </ExperienceContainer>
      </ExperienceMainContainer>
    </>
  );
};

const HomeMainContainer = styled.div`
  display:block;
  padding-top:5%;
  padding-right: 5%;
    @media screen and (max-width: 767px){
      padding-top:0%;
      padding-right:3%;
  }
`
const HomeContainer = styled.div`
  display: grid;
  padding-top:10%;
  justify-content: center;
  grid-template-areas:
                      "HomeImageContainer Intro Intro Intro"
                      "Experience Experience Experience Experience";
  grid-gap: 2rem;
  box-shadow: 12px 12px 2px 1px rgba(82, 82, 202, 0.2);
  @media screen and (max-width: 767px){
      display: grid;
  padding-left:5%;
  padding-right:3%;
  padding-top:20%;
  grid-template-areas:
                      "HomeImageContainer"
                      "Intro"
                      "Experience";
  grid-gap: 2rem;
  box-shadow: 2px 2px 2px 1px rgba(82, 82, 202, 0.2);
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


const ExperienceMainContainer = styled.div`
  display:block;
  padding-top:5%;
  padding-bottom:10%;
  padding-right: 5%;
    @media screen and (max-width: 767px){
      padding-top:0%;
      padding-right:3%;
  }
`

const ExperienceContainer = styled.div`
display: block;
text-align:left;
padding-left:5%;
box-shadow: 12px 12px 2px 1px rgba(82, 82, 202, 0.2);
@media screen and (max-width: 767px){
  padding: 5%;
  box-shadow: 2px 2px 2px 1px rgba(82, 82, 202, 0.2);
}
`;

export default About;


