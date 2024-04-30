import React from "react";
import styled from "styled-components";
import constants from "../Constants";
import ProfilePic from "../images/ProfilePic.png";
import Constants from "../Constants";
import WordCloud from "../components/Wordcloud";

const About = () => {
  return (
    <HomeContainer>
      <div>
        <WordCloud />
        <HomeImage src={ProfilePic}></HomeImage>
      </div>
      <Experience>
        <Intro>
          <span>{constants.About.Intro}</span>
        </Intro>

        <h3 style={{ paddingBottom: "10px" }}>Experience</h3>
        {Constants.About.Experience.map((exp) => (
          <div style={{ display: "flex", margin: "0px" }}>
            <div
              style={{
                display: "flex",
                lineHeight: "35px",
                flexDirection: "column",
                margin: "0px",
              }}
            >
              <div
                style={{
                  backgroundColor: "#b3b3b3",
                  height: "12px",
                  width: "12px",
                  borderRadius: "50%",
                  margin: "0px",
                  marginTop: "10px",
                }}
              ></div>

              <div
                style={{
                  width: "2px",
                  backgroundColor: "#b3b3b3",
                  margin: "0px",
                  marginTop: "10px",
                  marginLeft: "4px",
                  height: "80%",
                  marginBottom: "20px",
                }}
              ></div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "0px",
                marginRight: "10px",
              }}
            >
              <div style={{ marginLeft: "15px", marginTop: "10px" }}>
                <span
                  style={{
                    marginRight: "0px",
                    fontWeight: "bold",
                  }}
                >
                  {exp.Position}
                </span>
                <span style={{ marginLeft: "10px" }}>({exp.year})</span>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "15px",
                }}
              >
                <span>{exp.Description}</span>
                <div
                  style={{
                    marginLeft: "0px",
                    marginBottom: "15px",
                    marginTop: "10px",
                    display: "flex",
                    flexWrap: "wrap",
                  }}
                >
                  {exp.Tags.map((tag) => (
                    <Tags>{tag}</Tags>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Experience>

      <div
        style={{
          marginBottom: "100px",
          marginTop: "50px",
          marginLeft: "15px",
          marginRight: "15px",
        }}
      >
        <h3 style={{ paddingBottom: "10px" }}>Projects</h3>

        <div
          style={{
            // height: "100%",
            // width: "100%",
            maxWidth: "400px",
            border: "1px solid #ccc",
            textAlign: "center",
            position: "relative",
            padding: "20px",
            paddingBottom: "40px",
          }}
        >
          <h4>Simple todo plugin </h4>
          <p>
            Simple todo plugin to manage todo task list that popup on browser.
            with features to add new task, edit or delete existing tasks, mark
            them complete and also re arragne them as the priority changes{" "}
          </p>
          <a href="https://chromewebstore.google.com/detail/simple-todo-popup/paepbcgpkkeboklgnhnpaccoogpdllbf?hl=en-GB&authuser=0">Chrome web store ⬈</a>
        </div>
      </div>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  display: block;
  padding-right: 5%;
  padding-left: 7%;
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
  margin-top: 40px;
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
    padding-top: 40px;
    padding-left: 15px;
  }
`;

export const Anchor = styled.a`
  font-weight: bold;
`;

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

export default About;
