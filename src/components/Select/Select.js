import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import { typeScale } from "../../utils";
import { DownArrow } from "../../assets/svg/icons";

// This component needs keyboard navigation and selection

export default function Select({
	className,
	label,
	size = "",
	status = "",
	placeholder = "Select",
	items = ["No options"],
	selectedOption = null,
}) {
	const [isOpen, setIsopen] = useState(false);
	const [selected, setSelected] = useState(selectedOption);
	const activatorRef = useRef(null)
	const dropdownListRef = useRef(null)

	const handleClick = () => {
		setIsopen(!isOpen)
	}

	const handleKey = (event, item) => {
		if(event.key === "Enter" && isOpen) {
			setSelected(event.target.value)
			// setIsopen(false)
			console.log(selected)
		} 
		if(event.key === "Escape" && isOpen) setIsopen(false)
	}

	const handleSelection = (item) => {
		setSelected(item);
		setIsopen(false);
	};

	const clickOutsideHandler = (event) => {
		if(dropdownListRef.current.contains(event.target || activatorRef.current.contains(event.target))) return
		setIsopen(false)
	}

	useEffect(() => {
		if(isOpen) {
			// dropdownListRef.current.querySelector("li").focus()
			document.addEventListener('mousedown', clickOutsideHandler)
		} else {
			document.removeEventListener('mousedown', clickOutsideHandler)
		}
	}, [isOpen])

	return (
		<SelectContainer
			className={className}
			modifiers={[size, status]}
			selected={selected}
			onKeyUp={handleKey}
		>
			{label ? <Label>{label}</Label> : null}
			<SelectHeader
				onClick={handleClick}
				open={isOpen}
				selected={selected}
				aria-haspopup="true"
				arial-controls="dropdown1"
				tabIndex="0"
				ref={activatorRef}
			>
				{selected || placeholder} {DownArrow}
			</SelectHeader>
			<SelectListContainer open={isOpen}>
				<SelectList id="dropdown1" role="list" open={isOpen}  ref={dropdownListRef} >
					{status !== "disabled" ?
					items.map((item, index) => {
						return (
							<ListItem tabIndex="0" key={index} onClick={() => handleSelection(item)} onKeyUp={(event) => handleKey(event, item)}>
								{item}
							</ListItem>
						);
					})
					: null}
				</SelectList>
			</SelectListContainer>
			<Helper>Please select an option</Helper>
		</SelectContainer>
	);
}

const CHECKBOX_MODIFIERS = {
	large: () => `
	width: 190px;

	div:first-of-type {
			height: 44px;
			font-size: ${typeScale.h5}
		}

		li {
			padding-top: 12px;
			padding-bottom:12px;
			font-size: ${typeScale.paragraph};
		}

		> label {
			font-size: ${typeScale.h5}
		}

		> h6 {
			font-size: ${typeScale.paragraph}
		}
	`,
	small: () => `
	width: 120px;

	div:first-of-type {
			height: 24px;
			font-size: ${typeScale.helper}
		}

		li {
			padding-top: 8px;
			padding-bottom:8px;
			font-size: ${typeScale.helper}
		}

		> label {
			font-size: ${typeScale.helper}
		}
	`,
	error: ({ theme, selected }) => `
		div:first-of-type:not(:hover) {
			border-color: ${selected ? theme.lightGrey : theme.status.errorColorHover}
		}
		> h6 {
			visibility: ${selected ? "hidden" : "visible"};
		}
	`,
	disabled: ({ theme }) => `

		cursor: not-allowed;

		button:first-of-type {
			background-color: ${theme.disabledBackground};
			border-color: ${theme.disabled};
			color: ${theme.disabled};
			pointer-events: none;
			cursor: not-allowed;

		  svg {
				fill: ${theme.disabled};
			}
		}

		> label {
			color: ${theme.disabled};
		}
	`,
};

const SelectContainer = styled("div")`
	width: 144px;

	${applyStyleModifiers(CHECKBOX_MODIFIERS)}
`;

const SelectHeader = styled("button")`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 33px;
	width: 100%;
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
		outline: 0;
		border-color: ${({ theme }) => theme.color};
		transition: all 100ms linear;

		svg {
			fill: ${({ theme, open }) => (open ? theme.color : theme.hover)};
		}
	}

	:active {
		border-color: ${({ theme }) => theme.color};
	}
`;

const SelectListContainer = styled("div")`
	position: absolute;
	width: inherit;
`;

const SelectList = styled("ul")`
	background: #ffffff;
	border: 1px solid ${({ theme }) => theme.color};
	border-top: ${({ open }) => (open ? "none" : null)};
	box-sizing: border-box;
	border-radius: 0px 0px 2px 2px;
	transform: ${({ open }) => (open ? "scale(1)" : "scale(1, 0)")};
	opacity: ${({ open }) => (open ? 1 : 0)};
	transform-origin: top center;
	transition: all 100ms linear;
`;

const ListItem = styled("li")`
	padding-top: 8px;
	padding-bottom: 8px;
	padding-left: 12px;
	font-size: ${typeScale.helper};
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

	:focus {
		outline: 0;
		background-color: ${({ theme }) => theme.disabledBackground};
	}
`;

const Label = styled("label")`
	display: inline-block;
	font-size: ${typeScale.paragraph};
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
