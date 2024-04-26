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
          <div>
            <WordCloud />
            <HomeImage src={ProfilePic}></HomeImage>
          </div>
          <Experience>
            <Intro>
              <span>{constants.About.Intro}</span>
            </Intro>

            <h3>Experience</h3>
            <Timeline
              sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                  flex: 0,
                  padding: 0,
                },
              }}
              style={{ padding: "0px" }}
            >
              {Constants.About.Experience.map((exp) => (
                <TimelineItem
                  key={exp.Position}
                  style={{ margin: "0px", paddingBottom: "10px" }}
                >
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>

                  <TimelineContent>
                    <TimelineTitle>
                      {exp.Position} <YearSpan>({exp.year})</YearSpan>
                    </TimelineTitle>
                    <Typography>{exp.Description}</Typography>
                    <div style={{ display: "flex", flexWrap: "wrap" }}>
                      {exp.Tags.map((tag) => (
                        <Tags>{tag}</Tags>
                      ))}
                    </div>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </Experience>
          <div style={{ marginBottom: "100px" }}></div>
        </HomeContainer>
      </CardContainer>
    </>
  );
};

const Tags = styled.span`
  border-radius: 9999px;
  padding: 0.5rem 1rem;
  margin: 2px;
  background-color: rgba(0, 128, 128, 0.1); /* Teal tint with 10% opacity */
  font-size: 0.75rem;
  font-weight: medium;
  line-height: 0.5;
  color: #20c997; /* Teal color */
`;

const CardContainer = styled.div`
  display: block;
  padding-top: 50px;
  padding-left: 5%;
  @media screen and (max-width: 767px) {
    padding-top: 10%;
    padding-left: 0%;
  }
`;

const HomeContainer = styled.div`
  display: block;
  padding-right: 5%;
  padding-left: 2%;
  margin-top: 5%;
  @media screen and (max-width: 767px) {
    display: block;
    margin-top: 50px;
    padding-left: 0%;
    padding-right: 1%;
  }
`;

const HomeImage = styled.img`
  width: 150px;
  position: absolute;
  top: 180px;
  object-fit: contain;
  @media screen and (max-width: 767px) {
    padding-left: 20px;
  }
`;

const Intro = styled.div`
  margin-top: 30px;
  padding-bottom: 40px;
  font-size: 18px;
  vertical-align: center;
  padding-right: 10px;
`;

const Experience = styled.div`
  display: block;
  text-align: left;
  padding-top: 5%;

  @media screen and (max-width: 767px) {
    padding-left: 15px;
  }
`;

export const Anchor = styled.a`
  font-weight: bold;
`;

const YearSpan = styled.span`
  font-weight: normal;
`;

const TimelineTitle = styled.h4`
  font-weight: "bold";
  padding-bottom: 5px;
`;

export default About;
