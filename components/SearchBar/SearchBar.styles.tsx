import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
	background-color: ${({ theme }) => theme.colors.lightCyanBg};
	border-radius: 8px;
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
	padding: 1em;
	width: 90%;
	max-width: 1200px;
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	top: -1em;
	display: flex;
	justify-content: space-between;
	align-items: center;
	z-index: 1;
`;

export const ClearButton = styled.button`
	border: none;
	background: transparent;
	color: ${({ theme }) => theme.colors.darkCyan};
	font-size: 15px;
	font-weight: 700;
	cursor: pointer;
	flex-basis: 10%;
	padding: 1em 0 1em 1em;

	&:hover {
		color: ${({ theme }) => theme.colors.primary};
		text-decoration: underline;
	}
`;

export const Filters = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-basis: 80%;
`;
