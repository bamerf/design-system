import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import { neutral } from "../utils";
import { typeScale } from "../utils";

const BUTTON_MODIFIERS = {
	small: () => `
    font-size: ${typeScale.helper};
    padding: 4px 16px;
  `,
	large: () => `
    font-size: ${typeScale.h5};
    padding: 12px 32px;
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
  `,
	icon: () => ``,
	iconLabelled: () => ``,
};

const Button = styled.button`
	font-family: "Lato", monospace;
	font-size: ${typeScale.paragraph};
	padding: 8px 32px;
	border-radius: 2px;
	outline: none;
	cursor: pointer;
	user-select: none;
	transition: background-color 100ms linear, color 100ms linear;

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

export const PrimaryButton = styled(Button)`
	background-color: ${({ theme }) => theme.color};
	border: none;
	color: white;

	${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(Button)`
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

export const TertiaryButton = styled(Button)`
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
