import React from 'react';
import styled from 'styled-components';
import data from '../../data/data.json';
import Offer from '../Offer/Offer';


const StyledWrapper = styled.main`
    background-color: ${({theme}) => theme.colors.lightCyanFT};
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 3em;
`


const Main: React.FC = () => {
    return(
        <StyledWrapper>
            {data.map((testItem) => (
                <Offer 
                id={testItem.id}
                key={testItem.id}
                company={testItem.company}
                logo={testItem.logo}
                isNew={testItem.new}
                featured={testItem.featured}
                position={testItem.position}
                role={testItem.role}
                level={testItem.level}
                postedAt={testItem.postedAt}
                contract={testItem.contract}
                location={testItem.location}
                languages={testItem.languages}
                tools={testItem.tools}
       />
            ))}
        </StyledWrapper>
    )
}

export default Main;

/* 
<Offer 
                id={testItem.id}
                company={testItem.company}
                logo={testItem.logo}
                isNew={testItem.new}
                featured={testItem.featured}
                position={testItem.position}
                role={testItem.role}
                level={testItem.level}
                postedAt={testItem.postedAt}
                contract={testItem.contract}
                location={testItem.location}
                languages={testItem.languages}
                tools={testItem.tools}
       /> */