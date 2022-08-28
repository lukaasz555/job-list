import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import data from '../../data/data.json';
import Offer from '../Offer/Offer';
import SearchBar from '../SearchBar/SearchBar';

const StyledWrapper = styled.main`
    background-color: ${({theme}) => theme.colors.lightCyanBg};
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 3em;
    position: relative;
`


const Main: React.FC = () => {
    const [offers, setOffers] = useState<any[]>(data);
    const [filters, setFilters] = useState<string[]>([]);
    const [visible, setVisible] = useState<boolean>(false);

    const addFilter = (e: { target: { textContent: string; }; }) => {
        if(!filters.includes(e.target.textContent)) {
            setFilters([...filters, e.target.textContent]);
            setVisible(true);
            handleFilters(filters)
        }
        
    }

   const clearFilters = () => {
    setFilters([]);
    setVisible(false);
   }

   const removeFilter = (e: { target: {
       previousElementSibling: any; previousSiblingElement: { textContent: string; }; 
}; }) => {
        const itemIndex = filters.indexOf(e.target.previousElementSibling.textContent);
        if(itemIndex > -1) {
            filters.splice(itemIndex, 1);
            setFilters([...filters]);
            if(filters.length === 0) {
                setVisible(false)
            }
        }
   }

   const getFilters = (tech: string) => {
        const res: string[] = [];
        const filtersArray = offers.filter(item => item.tools === tech || item.languages === tech || item.level === tech || item.role === tech ? res.push(item) : null);
        return res
   }

   const handleFilters = (filters: string[]) => {
        const filtersArray = filters.map((item: string) => getFilters(item));
        console.log(filtersArray);
        setOffers([...filtersArray]);
   }

 

    return(
        <StyledWrapper>
            <SearchBar
                filters={filters}
                clearFilters={clearFilters}
                removeFilter={removeFilter}
                visible={visible}
             />
            {offers.map((offer) => (
                <Offer 
                id={offer.id}
                key={offer.id}
                company={offer.company}
                logo={offer.logo}
                isNew={offer.new}
                featured={offer.featured}
                position={offer.position}
                role={offer.role}
                level={offer.level}
                postedAt={offer.postedAt}
                contract={offer.contract}
                location={offer.location}
                languages={offer.languages}
                tools={offer.tools}
                addFilter={addFilter}
                visible={visible}
       />
       
            ))}


        </StyledWrapper>
    )
}

export default Main;