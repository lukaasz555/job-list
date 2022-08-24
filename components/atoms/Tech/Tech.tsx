import React from "react";
import styled from "styled-components";

const StyledItem = styled.div`
    background-color: ${({theme}) => theme.colors.lightCyanBG};
    margin: .5em;
    background-color: rgba(91, 164, 164, .1);

    p {
        color: ${({theme}) => theme.colors.primary};
        font-weight: 700;
        font-size: 15px;
        padding: .5em;
    }
`

export interface TechProps {
    role: string,
    level: string,
    tools?: string[],
    languages?: string[]
}

const Tech: React.FC<TechProps> = ({
    role, level, tools, languages
}) => {
    const techs = [role, level].concat(tools, languages)

    return (
        <>
        {techs.map((tech) => (
            <StyledItem key={tech}>
                <p>{tech}</p>
            </StyledItem>
        ))}
        </>
)
}

export default Tech;