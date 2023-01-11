import React from 'react';
import styled from "styled-components";
import UnderConstruction from '../images/UnderConstruction.png'

const About = () => {
    return (
        <div>
            <Imgdiv>
                <img src={UnderConstruction} />
            </Imgdiv>
        </div>
    );
};


const Imgdiv = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 100px;
  > img {
    width :500px ;
    }
    
  @media only screen and (max-width: 1000px) {
      > img {
        width : 400px;
      }
    }
  }
`;

export default About;

