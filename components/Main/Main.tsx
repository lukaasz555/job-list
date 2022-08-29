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
            getFilteredOffers('RoR');
            
        }   
    } 


   const clearFilters = () => {
    setFilters([]);
    setVisible(false);
    setOffers(data);
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

   //const [filteredOffers, setFilteredOffers] = useState<any[]>([]);
   const juniors = [
            {
                "id": 8,
                "company": "Insure",
                "logo": "/images/insure.svg",
                "new": false,
                "featured": false,
                "position": "Junior Frontend Developer",
                "role": "Frontend",
                "level": "Junior",
                "postedAt": "2w ago",
                "contract": "Full Time",
                "location": "USA Only",
                "languages": ["JavaScript"],
                "tools": ["Vue", "Sass"]
              },

              {
                "id": 10,
                "company": "The Air Filter Company",
                "logo": "/images/the-air-filter-company.svg",
                "new": false,
                "featured": false,
                "position": "Front-end Dev",
                "role": "Frontend",
                "level": "Junior",
                "postedAt": "1mo ago",
                "contract": "Part Time",
                "location": "Worldwide",
                "languages": ["JavaScript"],
                "tools": ["React", "Sass"]
              }
   ]


   const [filteredOffers, setFilteredOffers] = useState<any>([]);

   const getFilteredOffers = (filter: string) => {
        offers.forEach(item => item.role === filter ? filteredOffers.push(item) : null
        || item.level === filter ? filteredOffers.push(item) : null
        || item.languages.includes(filter) ? filteredOffers.push(item) : null
        || item.tools.includes(filter) ? filteredOffers.push(item) : null
        )
        setOffers(filteredOffers);
        console.log(filteredOffers);
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