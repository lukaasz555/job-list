import React from "react";
import styled from "styled-components";
import { StyledButton } from "../atoms/Tech/Tech";

const StyledItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.25em .5em;
    border-radius: 8px;
    overflow: hidden;
`

const Remove = styled.button`
    background-color: ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.lightCyanBg};
    border: none;
    height: 100%;
    padding: .5em .75em;
    font-weight: 700;
    transition: background-color .15s;
    cursor: pointer;

    &:hover {
        background-color: ${({theme}) => theme.colors.veryDarkCyan};
    }
`

const StyledBtn = styled(StyledButton)`
    margin: 0;
    cursor: default;
    &:hover {
        background-color: rgba(91, 164, 164, .1);
        color: ${({theme}) => theme.colors.primary};
    }
`

interface FilterItemProp {
    filter: string,
    key: string,
    filters: string[],
    removeFilter: any
}

const FilterItem: React.FC<FilterItemProp> = ({filter, filters, removeFilter}) => {


    return (
        <StyledItem>
            <StyledBtn>{filter}</StyledBtn>
            <Remove onClick={(e) => removeFilter(e) } >X</Remove>
        </StyledItem>
    )
}

export default FilterItem;