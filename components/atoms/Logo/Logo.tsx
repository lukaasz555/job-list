import React from "react";
import styled from "styled-components";
import Image from "next/image";

const StyledLogo = styled.div`
        position: absolute;
    left: 2em;
    top: 0;
    transform: translateY(-50%);
`

export interface LogoProp {
    company: string;
    logo: string;
}

const Logo: React.FC<LogoProp> = ({logo, company}) => <StyledLogo> <Image src={logo} alt={company} height={50} width={50} /> </StyledLogo>

export default Logo;