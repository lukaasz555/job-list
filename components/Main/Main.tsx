import React, { FC, MouseEvent, useEffect, useMemo, useState } from 'react';
import data from '../../data/data.json';
import Offer from '../Offer/Offer';
import SearchBar from '../SearchBar/SearchBar';
import { OfferProps } from '../../models/OfferProps';
import { FilterProps } from '../../models/FilterProps';
import { StyledWrapper } from './Main.styles';

const Main: FC = () => {
	const [allOffers, setAllOffers] = useState<OfferProps[]>(data);
	const [filtered, setFiltered] = useState<OfferProps[]>(data);
	const [filteringCriteria, setFilteringCriteria] = useState<string[] | []>([]);

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
					isNew={offer.new}
					allOffers={allOffers}
					filteringCriteria={filteringCriteria}
					setFilteringCriteria={setFilteringCriteria}
					setFiltered={setFiltered}
				/>
			))}
		</StyledWrapper>
	);
};

export default Main;
