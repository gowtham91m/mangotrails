import React from 'react';
import styled from "styled-components";
import WordCloud from '../components/Wordcloud';

const About = () => {
    return (
        <div>
          <Imagediv>
          <WordCloud/>
        </Imagediv>
        </div>
    );
};


const Imagediv = styled.div`
  display: flex;
  justify-content: center;
  padding-top:10%;
  padding-left: 25%;
  padding-right: 25%;
  z-index: 800;
`;

export default About;

