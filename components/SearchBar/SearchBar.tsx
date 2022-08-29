import React, {useEffect, useState} from "react";
import styled from "styled-components";
import FilterItem from "../FilterItem/FilterItem";


const Wrapper = styled.div<SearchBarProp>`
    background-color: ${({theme}) => theme.colors.lightCyanBg};
    border-radius: 8px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, .2);
    padding: 1em;
    width: 90%;
    max-width: 1200px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -1em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
   transform: ${({visible}) => visible ?
   'translateX(-50%) scaleY(1)' : 'translateX(-50%) scaleY(0)'
    };
`

const ClearButton = styled.button`
    border: none;
    background: transparent;
    color: ${({theme}) => theme.colors.darkCyan};
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
    flex-basis: 10%;
    padding: 1em 0 1em 1em;

    &:hover {
        color: ${({theme}) => theme.colors.primary};
        text-decoration: underline;
    }
`

const Filters = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-basis: 80%;
`

interface SearchBarProp {
    filters: string[],
    clearFilters?: any,
    removeFilter?: any,
    visible: boolean
} 

const SearchBar: React.FC<SearchBarProp> = ({filters, clearFilters, removeFilter, visible}) => {
 
    return (
        <Wrapper visible={visible}>
            <Filters>
            <>
                 {filters.map(filter => {
                    return(
                        <FilterItem key={filter} filter={filter} filters={filters} removeFilter={removeFilter} />
                    )
                 })}
            </>
            </Filters>
            <ClearButton onClick={clearFilters} >Clear</ClearButton>
        </Wrapper>
    )
}

export default SearchBar;