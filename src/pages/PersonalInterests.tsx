import React from 'react';
import styled from 'styled-components';
import * as statements from '../graphql/queries'
import { useQuery, gql } from '@apollo/client';


const HomeContainer = styled.div`
        padding: 10%;
        @media screen and (max-width: 767px){
        padding-top: 15%;
        padding-left:5%;
        padding-right:5%
}
    `
const Card = styled.div`
display: flex;
text-align:left;
margin-bottom: 2%;
padding:5%;
border: 1px solid #ccc;
box-shadow: 5px 5px 2px 1px rgba(82, 82, 202, 0.2);
@media screen and (max-width: 767px){
  padding: 5%;
  box-shadow: 2px 2px 2px 1px rgba(82, 82, 202, 0.2);
}
`;

const Image = styled.img`
    width: 100px;
`

const DetailsDiv = styled.div`
    
`
const ListFavorites = gql`${statements.listFavorites}`;

export default () => {

    const { loading, error, data } = useQuery(ListFavorites);

    // Render loading or error messages if any
    if (loading) return <p>Loading...</p>;
    if (error) console.log(error);

    return (<HomeContainer>
        {data.listFavorites.items.map((item: any, index: number) =>
            <React.Fragment key={index}>
                <Card>
                    <Image src={item.image} />
                    <DetailsDiv>
                        <ul>Name: {item.title}</ul>
                        <ul>Description: {item.description}</ul>
                        <ul>Rating: {item.rating}</ul>
                        <ul>Author: {item.author}</ul>
                        <ul>genre: {item.genre}</ul>
                    </DetailsDiv>
                </Card>
            </React.Fragment>
        )
        }
    </HomeContainer>)


}