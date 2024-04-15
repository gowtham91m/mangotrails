import React from "react";
import styled from "styled-components";
import constants from "../Constants";
import ProfilePic from "../images/ProfilePic.png";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Constants from "../Constants";
import { Typography } from "@mui/material";
import WordCloud from "../components/Wordcloud";

const About = () => {
  return (
    <>
      <CardContainer>
        <HomeContainer>
          <HomeImage src={ProfilePic}></HomeImage>
          <Experience>
            <Intro>
              <span>{constants.About.Intro}</span>
            </Intro>

            <h3>Experience1</h3>
            <Timeline
              sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                  flex: 0,
                  padding: 0,
                },
              }}
            >
              {Constants.About.Experience.map((exp) => (
                <TimelineItem key={exp.Position}>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>

                  <TimelineContent>
                    <ExpHeading>
                      <TimelineTitle>
                        {exp.Position} <YearSpan>({exp.year})</YearSpan>
                      </TimelineTitle>
                    </ExpHeading>

                    <Typography>{exp.Description}</Typography>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </Experience>
        </HomeContainer>
      </CardContainer>
    </>
  );
};

const CardContainer = styled.div`
  display: block;
  padding: 5%;
  @media screen and (max-width: 767px) {
    padding-top: 10%;
    padding-right: 3%;
    padding-left: 3%;
  }
`;

const HomeContainer = styled.div`
  display: block;
  margin-top: 50px;
  padding-left: 5%;

  @media screen and (max-width: 767px) {
    display: block;
    margin-top: 50px;
    padding-left: 5%;
    padding-right: 3%;
  }
`;

const HomeImage = styled.img`
  padding-left: 30px;
  width: 150px;
  @media screen and (max-width: 767px) {
    padding-left: 10px;
  }
`;

const Intro = styled.div`
  padding-bottom: 40px;
  font-size: 18px;
  vertical-align: center;
`;

const Experience = styled.div`
  display: block;
  text-align: left;
  padding: 5%;

  @media screen and (max-width: 767px) {
    padding: 5%;
  }
`;

export const Anchor = styled.a`
  font-weight: bold;
`;

const ExpHeading = styled.div`
  display: flex;
  align-items: center;
`;

const YearSpan = styled.span`
  font-weight: normal;
`;

const TimelineTitle = styled.h4`
  font-weight: "bold";
`;

export default About;
