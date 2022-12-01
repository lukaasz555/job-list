import React from 'react';
import styled from 'styled-components';

export const StyledHeader = styled.header`
	width: 100%;
	min-height: 140px;
	background-color: ${({ theme }) => theme.colors.primary};
`;
