import React from "react";
import styled from "styled-components";

const StyledNew = styled.span`
    display: inline-block;
    background-color: ${({theme}) => theme.colors.primary};
    font-weight: 700;
    text-transform: uppercase;
    border-radius: 25px;
    margin: 0 .35em;
    padding: .3em .75em;
    font-size: 15px;
    color: ${({theme}) => theme.colors.lightCyanBg};
`

export interface NewProp {
    isNew: boolean
}

const New: React.FC<NewProp> = ({isNew}) => {
    if(isNew) {
        return (
            <StyledNew>new!</StyledNew>
        )
    } else {
        return null
    }
}
export default New;