import React, { useState } from "react";
import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import { typeScale } from "../../utils";
import { DownArrow } from "../../assets/svg/icons";

export default function Select({
	min,
	max,
	className,
	value,
	size = "",
	status = "",
	label,
}) {
	const [isOpen, setIsopen] = useState(false);
	const [selectedOption, setSelectedOption] = useState(null);
	return (
		<SelectContainer>
			<SelectHeader onClick={() => setIsopen(!isOpen)}>
				Select {DownArrow}
			</SelectHeader>
			{isOpen && (
				<SelectListContainer>
					<SelectList>
						<ListItem>Mangoes</ListItem>
						<ListItem>Apples</ListItem>
						<ListItem>Oranges</ListItem>
					</SelectList>
				</SelectListContainer>
			)}
		</SelectContainer>
	);
}

const SelectContainer = styled("div")`
	width: 10.5em;
	margin: 0 auto;
`;

const SelectHeader = styled("div")`
	display: flex;
	align-items: center;
	justify-content: space-between;
	max-width: 190px;
	height: 33px;
	border: 1px solid ${({ theme }) => theme.lightGrey};
	color: ${({ theme }) => theme.lightGrey};
	border-radius: 2px;
	padding-left: 12px;
	background: white;
	transition: all 500ms linear;
	cursor: pointer;
	user-select: none;

	> svg {
		margin-right: 8px;
		fill: ${({ theme }) => theme.defaultGrey};
		:hover {
			fill: ${({ theme }) => theme.hover};
			transition: all 100ms linear;
		}
	}

	:hover {
		border-color: ${({ theme }) => theme.hover};
		transition: all 100ms linear;
	}

	:focus {
		border-color: ${({ theme }) => theme.color};
		transition: all 100ms linear;
	}

	:active {
		border-color: ${({ theme }) => theme.color};
	}
`;
const SelectListContainer = styled("div")``;

const SelectList = styled("ul")`
	padding: 0;
	margin: 0;
	padding-left: 1em;
	background: #ffffff;
	border: 2px solid #e5e5e5;
	box-sizing: border-box;
	color: #3faffa;
	font-size: 1.3rem;
	font-weight: 500;
	&:first-child {
		padding-top: 0.8em;
	}
`;

const ListItem = styled("li")`
	list-style: none;
	margin-bottom: 0.8em;
`;
