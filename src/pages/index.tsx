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
  padding-right: 10%;
`;

export default About;

