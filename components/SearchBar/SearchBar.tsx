import React from "react";
import styled from "styled-components";
import FilterItem from "../FilterItem/FilterItem";


//musi na bank otrzymywać w propach tablicę/listę;

const Wrapper = styled.div`
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

    .btnClear {
        border: none;
        background: transparent;
        color: ${({theme}) => theme.colors.darkCyan};
        font-size: 15px;
        font-weight: 700;
        cursor: pointer;
        flex-basis: 10%;
        //background-color: seagreen;


        &:hover {
            color: ${({theme}) => theme.colors.primary};
            text-decoration: underline;
        }
    }
`

const Filters = styled.div`
display: flex;
flex-wrap: wrap;
    flex-basis: 80%;
`

const SearchBar: React.FC = () => {
    return (
        <Wrapper>
            <Filters>
{/* 
                {offers.map(offer => {
                    return (
                        <FilterItem key={offer.id} level={offer.level} role={offer.role} languages={offer.languages} tools={offer.tools} />
                    )
                })}
                 */}
                 <FilterItem />
                 <FilterItem />
                 <FilterItem />
            </Filters>
            <button className="btnClear">Clear</button>
        </Wrapper>
    )
}

export default SearchBar;