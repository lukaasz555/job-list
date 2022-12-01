import React from 'react';
import styled from 'styled-components';

export const StyledWrapper = styled.main`
	background-color: ${({ theme }) => theme.colors.lightCyanBg};
	min-height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	padding-top: 3em;
	position: relative;
`;
