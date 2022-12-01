import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import New from '../atoms/New/New';
import Featured from '../atoms/Featured/Featured';
import { theme } from '../../assets/theme';
import Logo from '../atoms/Logo/Logo';
import Details from '../atoms/Details/Details';
import Tech from '../atoms/Tech/Tech';
import { OfferProps } from '../../models/OfferProps';
import {
	TechWrapper,
	StyledWrapper,
	OfferLeft,
	TopWrapper,
	DetailsWrapper,
} from './Offer.styles';

interface OfferComponentProps {
	offer: OfferProps;
	allOffers: OfferProps[];
	filteringCriteria: string[];
	setFilteringCriteria: React.Dispatch<React.SetStateAction<string[] | []>>;
	setFiltered: React.Dispatch<React.SetStateAction<OfferProps[] | []>>;
	isNew: boolean;
}

const Offer: React.FC<OfferComponentProps> = ({
	offer,
	allOffers,
	filteringCriteria,
	setFilteringCriteria,
	isNew,
	setFiltered,
}) => {
	const {
		id,
		company,
		logo,
		featured,
		position,
		postedAt,
		contract,
		location,
		role,
		level,
		tools,
		languages,
	} = offer;

	const checkOffer = (offer: OfferProps, item: string) => {
		if (
			offer.languages.includes(item) ||
			offer.tools.includes(item) ||
			offer.role === item ||
			offer.level === item
		) {
			return true;
		}
	};

	const offersFilter = (offer: OfferProps) => {
		for (let i = 0; i < filteringCriteria.length; i++) {
			if (!checkOffer(offer, filteringCriteria[i])) {
				return false;
			}
		}
		return true;
	};

	const addFilterCriteria = (e: React.MouseEvent<HTMLButtonElement>) => {
		const target = e.target as HTMLElement;
		const content = target.innerHTML;
		if (!filteringCriteria.includes(content)) {
			setFilteringCriteria([...filteringCriteria, content]);
		}
	};

	useEffect(() => {
		if (filteringCriteria.length > 0) {
			setFiltered(allOffers.filter(offersFilter));
		} else {
			setFiltered(allOffers);
		}
	}, [filteringCriteria]);

	return (
		<StyledWrapper isNew={isNew}>
			{isNew ? (
				<span className='leftItemNew'></span>
			) : (
				<span className='leftItem'></span>
			)}

			<Logo company={company} logo={logo} />
			<OfferLeft>
				<TopWrapper>
					<h1>{company}</h1>
					<New isNew={isNew} />
					<Featured isFeatured={featured} />
				</TopWrapper>

				<DetailsWrapper>
					<h1>{position}</h1>
					<Details
						postedAt={postedAt}
						contract={contract}
						location={location}
					/>
				</DetailsWrapper>
			</OfferLeft>

			<TechWrapper>
				<Tech
					role={role}
					level={level}
					tools={tools}
					languages={languages}
					id={id}
					addFilter={addFilterCriteria}
				/>
			</TechWrapper>
		</StyledWrapper>
	);
};

export default Offer;
