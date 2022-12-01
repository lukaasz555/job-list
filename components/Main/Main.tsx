import React, { FC, MouseEvent, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import data from '../../data/data.json';
import Offer from '../Offer/Offer';
import SearchBar from '../SearchBar/SearchBar';
import { OfferProps } from '../../models/OfferProps';
import { FilterProps } from '../../models/FilterProps';

const StyledWrapper = styled.main`
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

const Main: FC = () => {
	const [allOffers, setAllOffers] = useState<OfferProps[]>(data);
	const [filtered, setFiltered] = useState<OfferProps[]>(data);
	const [filteringCriteria, setFilteringCriteria] = useState<string[] | []>([
		'1',
		'2',
		'asdf',
		'dompol',
	]);

	return (
		<StyledWrapper>
			<SearchBar
				filteringCriteria={filteringCriteria}
				setFilteringCriteria={setFilteringCriteria}
			/>

			{filtered.map((offer: OfferProps) => (
				<Offer
					key={offer.id}
					offer={offer}
					/* 					addFilter={addFilter}
					visible={visible} */
				/>
			))}
		</StyledWrapper>
	);
};

export default Main;
