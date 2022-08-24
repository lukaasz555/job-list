import React from "react";
import styled from "styled-components";

export interface DetailsProps {
    postedAt: string,
    location: string,
    contract: string
}

const StyledWrapper = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    //width: 70%;
    color: ${({theme}) => theme.colors.darkCyan};
    border-bottom: 1px solid;
    padding-bottom: 1em;
    // trying width:
    width: 100%;
    font-size: 15px;

    p {
        font-family: 'League Spartan', sans-serif;
        font-weight: 500;
    }

    span {
        height: 3px;
        width: 3px;
        border-radius: 50px;
        background-color: ${({theme}) => theme.colors.darkCyan};
        margin: 0 .5em;
    }

    `

const Details: React.FC<DetailsProps> = ({postedAt, location, contract}) => (
    <StyledWrapper>
        <p>{postedAt}</p>
        <span></span>
        <p>{contract}</p>
        <span></span>
        <p>{location}</p>
    </StyledWrapper>
)

export default Details;