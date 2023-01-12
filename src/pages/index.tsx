import React from 'react';
import styled from "styled-components";
import WordCloud from '../images/WordCloud.png'

const About = () => {
    return (
        <div>
            <Imgdiv>
          <img src={WordCloud} />
            </Imgdiv>
        </div>
    );
};


const Imgdiv = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 100px;
  > img {
    width :1300px ;
    }
    
  @media only screen and (max-width: 1000px) {
      > img {
        width : 1000px;
      }
    }
  }
`;

export default About;

