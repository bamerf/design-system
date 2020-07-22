import React, { useState } from "react";
import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import { typeScale } from "../../utils";

export default function Radio({
	className,
	label,
	size = "",
	status = "",
	checked,
	...props
}) {
	const [isChecked, setIsChecked] = useState(false || checked);
	return (
		<Container
			className={className}
			modifiers={[size, status]}
			checked={isChecked}
		>
			<HiddenCheckbox checked={isChecked} {...props} />
			<StyledCheckbox
				checked={isChecked}
				onClick={() => setIsChecked(!isChecked)}
			></StyledCheckbox>
			{label ? <Label>{label}</Label> : null}
		</Container>
	);
}

const CHECKBOX_MODIFIERS = {
	large: () => `
		> div {
			width: 24px;
			height: 24px;

			:after {
				width: 8px;
				height: 8px;
			}
		}

		> p {
			font-size: ${typeScale.h5}
		}

  `,
	error: ({ theme, checked }) => `
	> div {
		border-color: ${checked ? theme.color : theme.status.errorColor}
	}

	> p {
		color: ${checked ? theme.defaultGrey : theme.status.errorColor}
	}

	&:hover {
		> div {
			border-color: ${checked ? theme.color : theme.status.errorColorHover}
		}
	}
	`,
	disabled: ({ theme, checked }) => `

		cursor: not-allowed;

		> div {
			background-color: ${checked ? theme.colorDisabled : theme.disabledBackground};
			border-color: ${checked ? theme.colorDisabled : theme.disabled};
			cursor: not-allowed;
			pointer-events:none;

			:after {
				background-color: ${checked ? "white" : theme.disabledBackground};
			}
		}

		> p {
			color: ${theme.disabled};
			cursor: not-allowed;
		}
	`,
};

const Container = styled.div`
	max-width: max-content;
	display: flex;
	flex-direction: row;
	align-items: center;

	${applyStyleModifiers(CHECKBOX_MODIFIERS)}
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
	border: 0;
	clip: rect(0 0 0 0);
	clip-path: inset(50%);
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	white-space: nowrap;
	width: 1px;
`;

const StyledCheckbox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 18px;
	height: 18px;
	background-color: ${({ theme, checked }) =>
		checked ? theme.color : theme.backgroundWhite};
	border-radius: 50%;
	border: 2px solid
		${({ theme, checked }) => (checked ? theme.color : theme.defaultGrey)};
	transition: color 100ms linear, background-color 100ms linear,
		border 100ms linear;

	&:hover {
		border: 2px solid
			${({ theme, checked }) => (checked ? theme.color : theme.hover)};
	}

	&:active {
		border: 2px solid
			${({ theme, checked }) => (checked ? theme.color : theme.color)};
	}

	&:focus {
		outline: 2px solid ${({ theme }) => theme.focusOutline};
		outline-offset: 1px;
	}

	&:disabled {
		background-color: ${({ theme, checked }) =>
			checked ? theme.color : theme.colorDisabled};
		border: 2px solid
			${({ theme, checked }) => (checked ? theme.color : "pink")};
		cursor: not-allowed;
	}

	&::after {
		content: "";
		width: 6px;
		height: 6px;
		-moz-border-radius: 7.5px;
		-webkit-border-radius: 7.5px;
		border-radius: 7.5px;
		background-color: white;
	}

	${applyStyleModifiers(CHECKBOX_MODIFIERS)}
`;

const Label = styled.p`
	width: max-content;
	color: ${({ theme, disabled }) =>
		disabled ? theme.defaultGreyDisabled : theme.defaultGrey};
	margin-left: 8px;
	user-select: none;

	${applyStyleModifiers(CHECKBOX_MODIFIERS)}
`;
