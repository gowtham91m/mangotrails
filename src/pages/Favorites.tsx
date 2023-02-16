import React from 'react';
import styled from 'styled-components';
import Data from '../Data';

const HomeContainer = styled.div`
        padding: 20%;
    `
const Card = styled.div`
    padding:1%;
`

export default () => {


    return (<HomeContainer>
        {Data.map((item) =>
            <>
                <li> {item.type}
                    {item.contents.map((content) => (
                        <Card>
                            <ul>Name: {content.Name}</ul>
                            <ul>Description: {content.Description}</ul>
                            <ul>Rating: {content.Raging}</ul>
                        </Card>
                    ))}
                </li>
            </>
        )
        }
    </HomeContainer>)


}