import React, { useState } from "react";
import styled from "styled-components";
import * as statements from "../graphql/queries";
import { useQuery, gql } from "@apollo/client";
import { ConstructionOutlined } from "@mui/icons-material";

export default () => {
  const ListFavorites = gql`
    ${statements.listFavorites}
  `;

  const { loading, error, data } = useQuery(ListFavorites);
  const [SelectedTab, setSelectedTab] = useState("Books");

  // Render loading or error messages if any
  if (loading) return <p>Loading...</p>;
  if (error) console.log("error at api" ,error);


  const itemTypes = data.listFavorites.items.map(
    (item: any, index: number) => item.type
  );
  const uniqueItemTypes = Array.from(new Set(itemTypes)).sort() as string[];

  interface itemType {
    type: string;
    image: string;
    title: string;
    description: string;
    rating: string;
    author: string;
    genre: string;
  }

  return (
    <HomeContainer>
      <SubNav>
        {uniqueItemTypes.map((tab: string, index: number) => (
          <React.Fragment key={index}>
            <Tabs
              style={{
                opacity: tab == SelectedTab ? 1 : 0.7,
                fontWeight: tab == SelectedTab ? "bold" : "normal",
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

      {data.listFavorites.items.map((item: itemType, index: number) => (
        <React.Fragment key={index}>
          {item.type == SelectedTab && (
            <Card>
              <Image src={item.image} />
              <DetailsDiv>
                <ul>Name: {item.title}</ul>
                <ul>Description: {item.description}</ul>
                <ul>Rating: {item.rating}</ul>
                {item.author != null && <ul>Author: {item.author}</ul>}
                {item.genre != null && <ul>Genre: {item.genre}</ul>}
              </DetailsDiv>
            </Card>
          )}
        </React.Fragment>
      ))}
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
  box-shadow: 5px 5px 2px 1px rgba(82, 82, 202, 0.2);
  @media screen and (max-width: 767px) {
    padding: 5%;
    box-shadow: 2px 2px 2px 1px rgba(82, 82, 202, 0.2);
  }
`;

const SubNav = styled.nav`
  padding: 5px;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Tabs = styled.span`
  width: 50px;
  font-size: 18px;
  &:hover {
    cursor: default;
  }
`;

const Image = styled.img`
  width: 100px;
`;

const DetailsDiv = styled.div``;
