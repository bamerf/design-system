import React from "react";
import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import { neutral } from "../utils";
import { typeScale } from "../utils";

const BUTTON_MODIFIERS = {
	small: () => `
    font-size: ${typeScale.helper};
		padding: 4px 16px;
		
		& > svg {
			width: 16px;
			height: 16px;
		}
  `,
	large: () => `
    font-size: ${typeScale.h5};
		padding: 12px 32px;
		
		& > svg {
			width: 36px;
			height: 36px;
		}
  `,
	success: ({ theme }) => `
    background-color: ${theme.status.successColor};
    color: ${theme.textColorWhite};

    &:hover {
      background-color: ${theme.status.successColorHover};
    }

    &:focus {
      outline: 2px solid ${theme.status.successColorHover};
		  outline-offset: 2px;
    }

    &:active {
      background-color: ${theme.status.successColorActive};
		}
		
		&:disabled {
			background-color: ${theme.disabled};
		}
  `,
	warning: ({ theme }) => `
  background-color: ${theme.status.warningColor};
  color: ${theme.textColorWhite};

  &:hover {
    background-color: ${theme.status.warningColorHover};
  }

  &:focus {
    outline: 2px solid ${theme.status.warningColorHover};
    outline-offset: 2px;
  }

  &:active {
    background-color: ${theme.status.warningColorActive};
	}
	
	&:disabled {
		background-color: ${theme.disabled};
	}
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

const defaultStyles = styled.button`
	font-family: "Lato", monospace;
	font-size: ${typeScale.paragraph};
	padding: 8px 32px;
	border-radius: 2px;
	outline: none;
	cursor: pointer;
	user-select: none;
	transition: background-color 100ms linear, color 100ms linear;
	display: flex;
	justify-content: center;
	align-items: center;

	&:focus {
		outline: 2px solid ${({ theme }) => theme.focusOutline};
		outline-offset: 2px;
	}

	&:hover {
		background-color: ${({ theme }) => theme.hover};
	}

	&:disabled {
		background-color: ${({ theme }) => theme.disabled};
		color: ${({ theme }) => theme.textColorWhite};
		cursor: not-allowed;
	}
`;

const Primary = styled(defaultStyles)`
	background-color: ${({ theme }) => theme.color};
	border: none;
	color: white;

	${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

const Secondary = styled(defaultStyles)`
	background-color: ${neutral[100]};
	color: ${({ theme }) => theme.color};
	border: 2px solid ${({ theme }) => theme.color};

	&:hover {
		border: 2px solid ${({ theme }) => theme.hover};
		background-color: ${neutral[200]};
	}

	&:disabled {
		border-color: ${({ theme }) => theme.disabled};
		background: ${neutral[100]};
		color: ${({ theme }) => theme.disabled};
	}

	${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

const Tertiary = styled(defaultStyles)`
	background: none;
	color: ${({ theme }) => theme.color};
	border: none;

	&:hover {
		color: ${({ theme }) => theme.hover};
		background: none;
	}

	&:disabled {
		background: none;
		color: ${({ theme }) => theme.disabled};
	}

	${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

const IconButton = styled(defaultStyles)`
	background-color: ${({ theme }) => theme.color};
	padding: 6px 8px;
	border: none;
	color: white;

	${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

const LabelledIconButton = styled(defaultStyles)`
	background-color: ${({ theme }) => theme.color};
	padding: 8px 0px;
	padding-left: 18px;
	padding-right: 24px;
	border: none;
	color: white;

	& > svg {
		width: 18px;
		height: 18px;
		margin-right: 6px;
	}

	${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export default function Button({
	type = "primary",
	className,
	children,
	disabled,
	size = "",
	status = "",
}) {
	let ButtonType = null;

	if (type === "primary") ButtonType = Primary;
	if (type === "secondary") ButtonType = Secondary;
	if (type === "tertiary") ButtonType = Tertiary;
	if (type === "icon") ButtonType = IconButton;
	if (type === "labelledIcon") ButtonType = LabelledIconButton;

	return (
		<ButtonType
			className={className}
			disabled={disabled}
			modifiers={[size, status]}
		>
			{children}
		</ButtonType>
	);
}
