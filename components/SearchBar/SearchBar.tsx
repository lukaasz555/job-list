import React, { MouseEventHandler, useEffect, useState } from 'react';
import FilterItem from '../FilterItem/FilterItem';
import { Wrapper, Filters, ClearButton } from './SearchBar.styles';

interface SearchBarProps {
	filteringCriteria: string[];
	setFilteringCriteria: React.Dispatch<React.SetStateAction<string[] | []>>;
}

const SearchBar: React.FC<SearchBarProps> = ({
	filteringCriteria,
	setFilteringCriteria,
}) => {
	const [visible, setVisible] = useState<boolean>(false);

	useEffect(() => {
		if (filteringCriteria.length > 0) {
			setVisible(true);
		} else {
			setVisible(false);
		}
	}, [filteringCriteria]);

	return (
		<Wrapper visible={visible}>
			<Filters>
				<>
					{filteringCriteria.map((filter) => {
						return (
							<FilterItem
								key={filter}
								filter={filter}
								filteringCriteria={filteringCriteria}
								setFilteringCriteria={setFilteringCriteria}
							/>
						);
					})}
				</>
			</Filters>
			<ClearButton
				onClick={() => {
					setFilteringCriteria([]);
				}}>
				Clear
			</ClearButton>
		</Wrapper>
	);
};

export default SearchBar;
