import React from 'react';
import styled from 'styled-components';
import Data from '../Data';
// import { gql } from 'graphql-tag';
import { Query } from 'react-apollo';
import * as statements from '../graphql/queries'
import { useQuery, gql } from '@apollo/client';


const HomeContainer = styled.div`
        padding: 20%;
    `
const Card = styled.div`
    padding:1%;
`
const ListFavorites = gql`${statements.listFavorites}`;

export default () => {

    const { loading, error, data } = useQuery(ListFavorites);

    // Render loading or error messages if any
    if (loading) return <p>Loading...</p>;
    if (error) console.log(error);
   
    console.log(data.listFavorites.items);


    return (<HomeContainer>
        {data.listFavorites.items.map((item:any) =>
            <>
                <li>
                        <Card>
                            <ul>Name: {item.title}</ul>
                            <ul>Description: {item.description}</ul>
                            <ul>Rating: {item.rating}</ul>
                            <ul>Author: {item.author}</ul>
                        </Card>
                </li>
            </>
        )
        }
    </HomeContainer>)


}