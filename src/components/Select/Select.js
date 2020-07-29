import React, { useState } from "react";
import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import { typeScale } from "../../utils";
import { DownArrow } from "../../assets/svg/icons";

export default function Select({
	className,
	label,
	size = "",
	status = "",
	placeholder = "Select",
	items = ["No options"],
}) {
	const [isOpen, setIsopen] = useState(false);
	const [selected, setSelected] = useState(null);

	const handleSelection = (item) => {
		setSelected(item);
		setIsopen(false);
	};

	return (
		<SelectContainer className={className}>
			{label ? <Label>{label}</Label> : null}
			<SelectHeader
				onClick={() => setIsopen(!isOpen)}
				open={isOpen}
				selected={selected}
			>
				{selected || placeholder} {DownArrow}
			</SelectHeader>
			<SelectListContainer open={isOpen}>
				<SelectList open={isOpen}>
					{items.map((item, index) => {
						return (
							<ListItem key={index} onClick={() => handleSelection(item)}>
								{item}
							</ListItem>
						);
					})}
				</SelectList>
			</SelectListContainer>
			<Helper>Please select an option</Helper>
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
	border: 1px solid
		${({ theme, open }) => (open ? theme.color : theme.lightGrey)};
	color: ${({ theme, selected }) =>
		selected ? theme.defaultGrey : theme.lightGrey};
	border-radius: 2px 2px ${({ open }) => (open ? "0px 0px" : "2px 2px")};
	padding-left: 12px;
	background: white;
	transition: all 500ms linear;
	cursor: pointer;
	user-select: none;

	> svg {
		margin-right: 8px;
		fill: ${({ theme }) => theme.defaultGrey};
		:hover {
			fill: ${({ theme, open }) => (open ? theme.color : theme.hover)};
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
const SelectListContainer = styled("div")`
	position: absolute;
	/* display: ${({ open }) => (open ? "block" : "none")}; */
	width: inherit;
`;

const SelectList = styled("ul")`
	background: #ffffff;
	border: 1px solid ${({ theme }) => theme.color};
	border-top: ${({ open }) => (open ? "none" : null)};
	box-sizing: border-box;
	border-radius: 0px 0px 2px 2px;
	transform: ${({ open }) => (open ? "scale(1)" : "scale(1, 0)")};
	transform-origin: top center;
	transition: all 100ms linear;
`;

const ListItem = styled("li")`
	padding-top: 8px;
	padding-bottom: 8px;
	padding-left: 12px;
	color: ${({ theme }) => theme.defaultGrey};
	border-bottom: 1px solid ${({ theme }) => theme.disabledBackground};
	list-style: none;
	user-select: none;
	&:last-child {
		border-bottom: none;
	}

	:hover {
		cursor: pointer;
		background-color: ${({ theme }) => theme.disabledBackground};
	}
`;

const Label = styled.p`
	width: max-content;
	color: ${({ theme, disabled }) =>
		disabled ? theme.defaultGreyDisabled : theme.defaultGrey};
	margin-bottom: 8px;
	user-select: none;
`;

const Helper = styled("h6")`
	font-size: ${typeScale.helper};
	width: max-content;
	color: ${({ theme }) => theme.status.errorColorHover};
	margin-top: 4px;
	user-select: none;
	visibility: hidden;
`;
