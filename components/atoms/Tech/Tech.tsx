import React from "react";
import styled from "styled-components";

export const StyledButton = styled.div`
    margin: .5em;
    background-color: rgba(91, 164, 164, .1);
    color: ${({theme}) => theme.colors.primary};
    font-weight: 700;
    font-size: 15px;
    padding: .5em;
    cursor: pointer;
    transition: background-color .15s, color .15s;
    border-radius: 8px;
    
    &:last-child {
        margin-right: 0;
    }

    &:hover {
        background-color: ${({theme}) => theme.colors.primary};
        color: ${({theme}) => theme.colors.lightCyanBg}
    }
`

interface TechProps {
    role: string,
    level: string,
    tools?: string[],
    languages?: string[],
    addFilter?: VoidFunction,
    id: number
}

const Tech: React.FC<TechProps> = ({
    role, level, tools, languages, addFilter, id
}) => {
    const techs = [role, level].concat(tools, languages)

    return (
        <>
        {techs.map((tech) => (
            <StyledButton key={tech} id={id} className="btnTech" onClick={addFilter} >
                {tech}
            </StyledButton>
        ))}
        </>
)
}

export default Tech;