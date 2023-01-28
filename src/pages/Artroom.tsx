import React from 'react';
import styled from "styled-components";
import a from '../drawings/a.jpeg'
import b from '../drawings/b.jpeg'
import c from '../drawings/c.jpeg'
import d from '../drawings/d.jpeg'
import e from '../drawings/e.jpeg'
import f from '../drawings/f.jpeg'
import g from '../drawings/g.jpeg'

const Artroom = () => {
  return (
    <HomeContainer>
      <Img src={a} />
      <Img src={b} />
      <Img src={c} />
      <Img src={d} />
      <Img src={e} />
      <Img src={f} />
      <Img src={g} />
    </HomeContainer>
  );
};


const HomeContainer = styled.div`
  padding-left:10%;
  padding-right:10%;
  padding-top:10%;
  align-items: left;
  @media screen and (max-width: 767px){
  float:left;
  padding-left:10%;
  padding-right:15%;
  padding-top:10%;
  }
`;

const Img = styled.img`
  height : 300px;
  float:left;
  padding: 20px;
  width: auto;
  @media screen and (max-width: 767px){
    width:100%;
    height: auto;
  }
`

export default Artroom;

