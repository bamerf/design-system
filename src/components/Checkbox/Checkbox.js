import React, { useState } from "react";
import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import { typescale } from "../../utils";

const CHECKBOX_MODIFIERS = {
	large: () => `
		width: 24px;
		height: 24px;
  `,
	error: ({ theme }) => `
  background-color: ${theme.status.errorColor};
  color: ${theme.textColorWhite};

  &:hover {
    background-color: ${theme.status.errorColorHover};
  }

  &:focus {
    outline: 2px solid ${theme.status.errorColorHover};
    outline-offset: 2px;
  }

  &:active {
		background-color: ${theme.status.errorColorActive};
	}

	&:disabled {
		background-color: ${theme.disabled};
	}
  `,
};

const CheckboxContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
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
	/* display: flex; */
	width: 18px;
	height: 18px;
	background-color: ${({ theme, checked }) =>
		checked ? theme.color : theme.backgroundWhite};
	border-radius: 2px;
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

	${Icon} {
		visibility: ${(props) => (props.checked ? "visible" : "hidden")};
	}

	${applyStyleModifiers(CHECKBOX_MODIFIERS)}
`;

const Label = styled.p`
	width: max-content;
	color: ${({ theme, disabled }) =>
		disabled ? theme.labelDisabled : theme.label};
	margin-left: 8px;
	user-select: none;

	${applyStyleModifiers(CHECKBOX_MODIFIERS)}
`;

export default function Checkbox({
	className,
	label,
	size = "",
	status = "",
	...props
}) {
	const [checked, setChecked] = useState(false);
	const disabled = false;
	return (
		<CheckboxContainer className={className}>
			<HiddenCheckbox checked={checked} {...props} disabled={disabled} />
			<StyledCheckbox
				checked={checked}
				disabled={disabled}
				modifiers={[size, status]}
				onClick={() => setChecked(!checked)}
			>
				<Icon viewBox="0 0 24 24">
					<polyline points="22 4 8 20 1 14" />
				</Icon>
			</StyledCheckbox>
			{label ? (
				<Label disabled={disabled} modifiers={[size, status]}>
					{label}
				</Label>
			) : null}
		</CheckboxContainer>
	);
}
