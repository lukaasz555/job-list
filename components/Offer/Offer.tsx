import React, { useEffect, useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import New from '../atoms/New/New';
import Featured from '../atoms/Featured/Featured';
import {theme} from '../../assets/theme';
import Logo from "../atoms/Logo/Logo";
import Details from "../atoms/Details/Details";

const StyledWrapper = styled.div`
    background-color: ${({theme}) => theme.colors.lightCyanBg};
    min-width: 350px;
    border-radius: 8px;
    position: relative;
    margin: 2em 0 2em;
    box-shadow: 0 10px 20px rgba(0, 0, 0, .2);
    padding: 1em 2em;


    h1 {
        font-size: 15px;
    }

    span.leftItemNew {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        height: 100%;
        width: 6px;
        background-color: ${({theme}) => theme.colors.primary};
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
    }

    span.leftItem {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        height: 100%;
        width: 6px;
        background-color: transparent;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
    }
`
const TopWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: .85em 0;
    
    h1 {
        color: ${({theme}) => theme.colors.primary};
        margin-right: 1em;
    }
`
const DetailsWrapper = styled.div`
    h1 {
        color: ${({theme}) => theme.colors.veryDarkCyan};
        margin-bottom: 1em;
    }
`

export interface OfferProps {
    id: number,
    company: string,
    logo: string,
    isNew: boolean,
    featured: boolean,
    position: string,
    role: string,
    level: string,
    postedAt: string,
    contract: string,
    location: string,
    languages?: string[],
    tools?: string[]
}

const Offer: React.FC<OfferProps> = ({
    id,
    company,
    position,
    logo,
    isNew,
    featured,
    location,
    contract,
    postedAt
}) => {

    const [newOffer, setNew] = useState(false);
    useEffect(() => {
        if(isNew) {
            setNew(true)
        }
    }, []);

    return (
        <StyledWrapper>
        {newOffer ? <span className="leftItemNew"></span> : <span className="leftItem"></span> }
        <Logo company={company} logo={logo} />
        
        <TopWrapper>
            <h1>{company}</h1>
            <New isNew={newOffer}/> 
            <Featured isFeatured={featured} />
        </TopWrapper>

        <DetailsWrapper>
            <h1>{position}</h1>
            <Details postedAt={postedAt} contract={contract} location={location} />
        </DetailsWrapper>


        </StyledWrapper>
    )
}

export default Offer;