import React, { useState } from "react";
import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import { typeScale } from "../../utils";

export default function Checkbox({
	className,
	label,
	size = "",
	status = "",
	disabled,
	checked,
	...props
}) {
	const [isChecked, setIsChecked] = useState(false || checked);
	return (
		<CheckboxContainer
			className={className}
			modifiers={[size, status]}
			checked={isChecked}
		>
			<HiddenCheckbox checked={isChecked} {...props} />
			<StyledCheckbox
				checked={isChecked}
				onClick={() => setIsChecked(!isChecked)}
			>
				<Icon viewBox="0 0 24 24">
					<polyline points="22 4 8 20 1 14" />
				</Icon>
			</StyledCheckbox>
			{label ? <Label>{label}</Label> : null}
		</CheckboxContainer>
	);
}

const CHECKBOX_MODIFIERS = {
	large: () => `
		> div {
			width: 24px;
			height: 24px;
		}

		> label {
			font-size: ${typeScale.h5}
		}
  `,
	error: ({ theme, checked }) => `
	> div {
		border-color: ${checked ? theme.color : theme.status.errorColor}
	}

	> label {
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
		}

		> label {
			color: ${theme.disabled};
		}
	`,
};

const CheckboxContainer = styled.div`
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

const Icon = styled.svg`
	fill: none;
	stroke: white;
	stroke-width: 2px;
`;

const StyledCheckbox = styled.div`
	width: 18px;
	height: 18px;
	background-color: ${({ theme, checked }) =>
		checked ? theme.color : theme.backgroundWhite};
	border-radius: 2px;
	border: 2px solid
		${({ theme, checked }) => (checked ? theme.color : theme.defaultGrey)};
	transition: color 100ms linear, background-color 100ms linear,
		border 100ms linear;
	cursor: pointer;

	&:hover {
		border: 2px solid
			${({ theme, checked }) => (checked ? theme.color : theme.hover)};
	}

	&:focus {
		outline: 2px solid ${({ theme }) => theme.focusOutline};
		outline-offset: 1px;
	}

	&:active {
		border: 2px solid
			${({ theme, checked }) => (checked ? theme.color : theme.color)};
	}

	&:disabled {
		background-color: ${({ theme, checked }) =>
			checked ? theme.color : theme.colorDisabled};
		border: 2px solid
			${({ theme, checked }) => (checked ? theme.color : "pink")};
		cursor: not-allowed;
	}

	${Icon} {
		visibility: ${(props) => (props.checked ? "visible" : "hidden")};
	}

	${applyStyleModifiers(CHECKBOX_MODIFIERS)}
`;

const Label = styled.label`
	display: inline-block;
	width: max-content;
	color: ${({ theme, disabled }) =>
		disabled ? theme.defaultGreyDisabled : theme.defaultGrey};
	margin-left: 8px;
	user-select: none;

	${applyStyleModifiers(CHECKBOX_MODIFIERS)}
`;
