import React from 'react';
import styled from 'styled-components';

export const StyledWrapper = styled.div<{ isNew: boolean }>`
	background-color: ${({ theme }) => theme.colors.lightCyanBg};
	border-radius: 8px;
	position: relative;
	margin: 2em 0 2em;
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
	padding: 1em 1.5em;
	width: 90%;
	min-width: 350px;
	max-width: 1200px;

	&:nth-child(2) {
		margin-top: ${({ isNew }) => (isNew ? '10em' : '0')};
	}

	@media (min-width: 992px) {
		display: flex;
		justify-content: space-between;
		align-items: center;

		&:nth-child(2) {
			margin-top: ${({ isNew }) => (isNew ? '5em' : '0')};
		}
	}

	h1 {
		font-size: 15px;
	}

	span.leftItemNew {
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		height: 100%;
		width: 6px;
		background-color: ${({ theme }) => theme.colors.primary};
		border-top-left-radius: 8px;
		border-bottom-left-radius: 8px;
	}

	span.leftItem {
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		height: 100%;
		width: 6px;
		background-color: transparent;
		border-top-left-radius: 8px;
		border-bottom-left-radius: 8px;
	}
`;

export const OfferLeft = styled.div`
	display: flex;
	flex-direction: column;
`;

export const TopWrapper = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin: 0.85em 0;

	h1 {
		color: ${({ theme }) => theme.colors.primary};
		margin-right: 1em;
	}
`;
export const DetailsWrapper = styled.div`
	h1 {
		color: ${({ theme }) => theme.colors.veryDarkCyan};
		margin-bottom: 1em;
	}
`;

export const TechWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-top: 0.5em;
	@media (min-width: 768px) {
		flex-wrap: nowrap;
		flex-basis: 70%;
		justify-content: flex-end;
	}
`;
