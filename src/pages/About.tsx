import React from 'react';
import styled from "styled-components";
import constants from '../Constants';
import ProfilePic from '../images/ProfilePic.png'
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Constants from '../Constants';
import { Typography } from '@mui/material';

const About = () => {

    return (
        <>
            <CardContainer>
                <HomeContainer>
                    <HomeImage src={ProfilePic}></HomeImage>
                    <Intro><span>`{constants.About.Intro}`</span></Intro>
                </HomeContainer>
            </CardContainer>

            <CardContainer>
                <Card>
                    <h3>Experience1</h3>
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
                                    <ExpHeading>
                                        <TimelineTitle>{exp.Position} <YearSpan>({exp.year})</YearSpan></TimelineTitle>
                                    </ExpHeading>

                                    <Typography>
                                        {exp.Description}
                                    </Typography>
                                </TimelineContent>
                            </TimelineItem>)}
                    </Timeline>
                </Card>
            </CardContainer>

            <CardContainer>
                <Card style={{ height: '400px' }}>
                    <h3>Testimonials</h3>
                </Card>
            </CardContainer>
        </>
    );
};



const ExpHeading = styled.div`
      display: flex;
  align-items: center;
`

const YearSpan = styled.span`
font-weight:normal`


const TimelineTitle = styled.h4`
font-weight:'bold'`

const HomeContainer = styled.div`
  display: grid;
  margin-top: 50px;
  padding-top:5%;
  justify-content: center;
  grid-template-areas:
                      "HomeImageContainer Intro Intro Intro"
                      "Experience Experience Experience Experience";
  grid-gap: 2rem;
  border: 2px solid #ccc;
  padding-left: 5%;
  /* box-shadow: 12px 12px 2px 1px rgba(82, 82, 202, 0.2); */
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
  /* box-shadow: 2px 2px 2px 1px rgba(82, 82, 202, 0.2); */
  }
`;

const CardContainer = styled.div`
  display:block;
  padding:5%;
    @media screen and (max-width: 767px){
      padding-top:10%;
      padding-right:3%;
      padding-left:3%
  }
`

const Card = styled.div`
display: block;
text-align:left;
padding:5%;
border: 1px solid #ccc;
/* box-shadow: 12px 12px 2px 1px rgba(82, 82, 202, 0.2); */
@media screen and (max-width: 767px){
  padding: 5%;
  /* box-shadow: 2px 2px 2px 1px rgba(82, 82, 202, 0.2); */
}
`;


export const Anchor = styled.a`
  /* color: inherit; */
  /* text-decoration: none; */
  font-weight:bold
  `

const HomeImage = styled.img`
display:flex;
  height:300px;
  width:300px;
  grid-area: HomeImageContainer; 
  z-index: 99;
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



export default About;


