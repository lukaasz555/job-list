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
    const [allOffers, setAllOffers] = useState<any[]>(data);
    const [offers, setOffers] = useState<any[]>(data);
    const [filteredOffers, setFilteredOffers] = useState<any[]>();
    const [filters, setFilters] = useState<string[]>([]);
    const [visible, setVisible] = useState<boolean>(false);


  const addFilter = (e: { target: { textContent: string; }; }) => {
        if(!filters.includes(e.target.textContent)) {
            filters.length === 0 ? setVisible(true) : null
            setFilters([...filters, e.target.textContent]);
            }
    } 


   const removeFilter = (e: { target: {
       previousElementSibling: any; previousSiblingElement: { textContent: string; }; 
        }; }) => {
            const itemIndex = filters.indexOf(e.target.previousElementSibling.textContent);
                if(itemIndex > -1) {
                    console.log('usunalem filtr');
                    setFilters(filters.filter((filter, i) => i !== itemIndex))
                    //console.log(filters.length);

                    if(filters.length === 1) {
                        setVisible(false)
                        setOffers(data)
                    } else {
                        setOffers(offers.filter(offersFilter));
                        console.log('teraz powinna zmienic sie tablica filters');
                    }
                 }
   }
 


   const clearFilters = () => {
    setFilters([]);
    setVisible(false);
    setOffers(data);
   }



    interface OfferProps {
    role: string,
    level: string,
    languages: string[],
    tools: string[]
}


    const checkOffer = (offer: OfferProps, filter: string) => {
        if(offer.role === filter || offer.level === filter ||
            offer.languages.includes(filter) || offer.tools.includes(filter)) {
                return true
    }
}

    const offersFilter = (offer: OfferProps) => {
        for(let i = 0; i < filters.length; i++) {
            if(!checkOffer(offer, filters[i])) {
                return false
            }
        }
        return true;
}



    useEffect(() => {
    setOffers(allOffers.filter(offersFilter));
    }, [filters]) 

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