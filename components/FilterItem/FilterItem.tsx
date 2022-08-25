import React from "react";
import styled from "styled-components";
import { StyledButton } from "../atoms/Tech/Tech";

const StyledItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.25em .5em;
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
    itemName: string,
    key: string
}

const FilterItem: React.FC = (props) => {
    return (
        <StyledItem>
            <StyledBtn>{props.itemName}</StyledBtn>
            <Remove>X</Remove>
        </StyledItem>
    )
}

export default FilterItem;