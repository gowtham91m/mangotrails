import React, { useState } from "react";
import styled from "styled-components";
import UnderConstruction from '../images/UnderConstruction.png'

export default () => {
  const [SelectedTab, setSelectedTab] = useState("Design");

  const uniqueItemTypes = ["Design", "SEO", "Metrics"];

  return (
    <HomeContainer>
      <SubNav>
        {uniqueItemTypes.map((tab: string, index:number) => (
          <React.Fragment key={index}>
          <Tabs
            style={{
              opacity: tab == SelectedTab ? 1 : 0.7,
              fontWeight: tab == SelectedTab ? "bold" : "normal",
              padding: "20px",
              cursor: "default",
            }}
            onClick={() => {
              setSelectedTab(tab);
            }}
          >
            {tab}
          </Tabs>
          </React.Fragment>
        ))}
      </SubNav>
      <Card style={{ height: "700px" }}>
        <Image src={UnderConstruction} style={{height:"300px"}}></Image>
      </Card>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  padding: 10%;
  @media screen and (max-width: 767px) {
    padding-top: 15%;
    padding-left: 5%;
    padding-right: 5%;
  }
`;
const Card = styled.div`
  display: flex;
  text-align: left;
  margin-bottom: 2%;
  padding: 5%;
  border: 1px solid #ccc;
  /* box-shadow: 5px 5px 2px 1px rgba(82, 82, 202, 0.2); */
  @media screen and (max-width: 767px) {
    padding: 5%;
    /* box-shadow: 2px 2px 2px 1px rgba(82, 82, 202, 0.2); */
  }
`;

const SubNav = styled.nav`
  padding: 5px;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Tabs = styled.text`
  width: 50px;
  font-size: 18px;
  &:hover {
    cursor: default;
  }
`;

const Image = styled.img`
  width: 100%;
`;

const DetailsDiv = styled.div``;
