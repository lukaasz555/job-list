import React from "react";
import styled from "styled-components";
import Image from "next/image";

const StyledLogo = styled.div`
        position: absolute;
    left: 2em;
    top: 0;
    transform: translateY(-50%);
    height: 50px;
    width: 50px;
    transform: all .25s;
    margin-right: 1em;

    @media (min-width: 992px) {
        position: static;
        transform: none;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100px;
    min-width: 100px;
    }


    

`

export interface LogoProp {
    company: string;
    logo: string;
}

const Logo: React.FC<LogoProp> = ({logo, company}) => <StyledLogo> <Image src={logo} alt={company} height="80%" width="80%" /> </StyledLogo>

export default Logo;