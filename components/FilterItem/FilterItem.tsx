import React, { MouseEventHandler } from 'react';
import { StyledItem, StyledBtn, Remove } from './FilterItem.styles';

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
