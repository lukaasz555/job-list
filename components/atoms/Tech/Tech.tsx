import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';

export const StyledButton = styled.button`
	margin: 0.5em;
	background-color: rgba(91, 164, 164, 0.1);
	color: ${({ theme }) => theme.colors.primary};
	font-weight: 700;
	font-size: 15px;
	padding: 0.5em;
	cursor: pointer;
	transition: background-color 0.15s, color 0.15s;
	border-radius: 8px;
	border: none;

	&:last-child {
		margin-right: 0;
	}

	&:hover {
		background-color: ${({ theme }) => theme.colors.primary};
		color: ${({ theme }) => theme.colors.lightCyanBg};
	}
`;

interface TechProps {
	role: string;
	level: string;
	tools: string[];
	languages: string[];
	addFilter: (e: React.MouseEvent<HTMLButtonElement>) => void;
	id: number;
}

const Tech: React.FC<TechProps> = ({
	role,
	level,
	tools,
	languages,
	addFilter,
	id,
}) => {
	const techs = [role, level].concat(tools, languages);

	return (
		<>
			{techs.map((tech) => (
				<StyledButton
					key={tech}
					className='btnTech'
					onClick={(e: React.MouseEvent<HTMLButtonElement>) => addFilter(e)}>
					{tech}
				</StyledButton>
			))}
		</>
	);
};

export default Tech;
