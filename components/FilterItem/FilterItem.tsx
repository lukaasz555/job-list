import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';
import { StyledButton } from '../atoms/Tech/Tech';

const StyledItem = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0.25em 0.5em;
	border-radius: 8px;
	overflow: hidden;
`;

const Remove = styled.button`
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

const StyledBtn = styled(StyledButton)`
	margin: 0;
	cursor: default;
	&:hover {
		background-color: rgba(91, 164, 164, 0.1);
		color: ${({ theme }) => theme.colors.primary};
	}
`;

interface FilterItemProp {
	filter: string;
	filteringCriteria: string[];
	setFilteringCriteria: React.Dispatch<React.SetStateAction<string[] | []>>;
}

const FilterItem: React.FC<FilterItemProp> = ({
	filter,
	filteringCriteria,
	setFilteringCriteria,
}) => {
	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		const obj = e.target as HTMLButtonElement;
		if (obj && filteringCriteria.length > 0) {
			const target = obj.parentElement as HTMLElement;
			const newCriteria = filteringCriteria.filter(
				(item) => item !== target.id
			);
			setFilteringCriteria(newCriteria);
		}
	};

	return (
		<StyledItem id={filter}>
			<StyledBtn>{filter}</StyledBtn>
			<Remove
				onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleClick(e)}>
				X
			</Remove>
		</StyledItem>
	);
};

export default FilterItem;
