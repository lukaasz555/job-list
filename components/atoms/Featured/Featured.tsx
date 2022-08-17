import React from "react";
import styled from "styled-components";

const StyledFeatured = styled.span`
    display: inline-block;
    background-color: ${({theme}) => theme.colors.veryDarkCyan};
    font-weight: 700;
    text-transform: uppercase;
    border-radius: 25px;
    margin: 0 .35em;
    padding: .3em .75em;
    font-size: 15px;
    color: ${({theme}) => theme.colors.lightCyanBg};
`
export interface FeaturedProp {
    isFeatured: boolean,
}

const Featured: React.FC<FeaturedProp> = ({isFeatured}) => {
    if(isFeatured) {
        return (
            <StyledFeatured>featured</StyledFeatured>
        )
    } else {
        return null
    }
}

export default Featured;