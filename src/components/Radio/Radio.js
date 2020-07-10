import React, { useState } from "react";
import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import { typeScale } from "../../utils";

const CHECKBOX_MODIFIERS = {
	large: () => `
		> div {
			width: 24px;
			height: 24px;
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
		color: ${checked ? theme.label : theme.status.errorColor}
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
			background-color: ${checked ? theme.selectDisabled : theme.disabledBackground};
			border-color: ${checked ? theme.selectDisabled : theme.disabled};
			cursor: not-allowed;
			pointer-events:none;
		}

		> p {
			color: ${theme.disabled};
			cursor: not-allowed;
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

const StyledCheckbox = styled.div`
	width: 18px;
	height: 18px;
	background-color: ${({ theme, checked }) =>
		checked ? theme.color : theme.backgroundWhite};
	border-radius: 50%;
	border: 2px solid
		${({ theme, checked }) => (checked ? theme.color : theme.selectDefault)};
	transition: color 100ms linear, background-color 100ms linear,
		border 100ms linear;

	&:hover {
		border: 2px solid
			${({ theme, checked }) => (checked ? theme.color : theme.hover)};
	}

	&:focus {
		outline: 2px solid ${({ theme }) => theme.focusOutline};
		outline-offset: 1px;
	}

	&:disabled {
		background-color: ${({ theme, checked }) =>
			checked ? theme.color : theme.selectDisabled};
		border: 2px solid
			${({ theme, checked }) => (checked ? theme.color : "pink")};
		cursor: not-allowed;
	}

	${applyStyleModifiers(CHECKBOX_MODIFIERS)}
`;

const Dot = styled.div``;

const Label = styled.p`
	width: max-content;
	color: ${({ theme, disabled }) =>
		disabled ? theme.labelDisabled : theme.label};
	margin-left: 8px;
	user-select: none;

	${applyStyleModifiers(CHECKBOX_MODIFIERS)}
`;

export default function Radio({
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
			></StyledCheckbox>
			{label ? <Label>{label}</Label> : null}
		</CheckboxContainer>
	);
}
