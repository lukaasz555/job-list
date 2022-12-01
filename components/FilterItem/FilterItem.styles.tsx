import React from 'react';
import styled from 'styled-components';
import { StyledButton } from '../atoms/Tech/Tech';

export const StyledItem = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0.25em 0.5em;
	border-radius: 8px;
	overflow: hidden;
`;

export const Remove = styled.button`
	background-color: ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.lightCyanBg};
	border: none;
	height: 100%;
	padding: 0.5em 0.75em;
	font-weight: 700;
	transition: background-color 0.15s;
	cursor: pointer;

	&:hover {
		background-color: ${({ theme }) => theme.colors.veryDarkCyan};
	}
`;

export const StyledBtn = styled(StyledButton)`
	margin: 0;
	cursor: default;
	border-radius: 0;
	&:hover {
		background-color: rgba(91, 164, 164, 0.1);
		color: ${({ theme }) => theme.colors.primary};
	}
`;
