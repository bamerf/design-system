import styled from "styled-components";
import { neutral } from "../utils";
import { defaultTheme, typeScale } from "../utils";

const Button = styled.button`
	font-family: "Lato", monospace;
	font-size: ${typeScale.paragraph};
	padding: 8px 32px;
	border-radius: 2px;
	outline: none;
	cursor: pointer;
	user-select: none;
	transition: background-color 100ms linear, color 100ms linear;
`;

const PrimaryButton = styled(Button)`
	background-color: ${defaultTheme.primaryColor};
	border: none;
	color: white;

	&:hover {
		background-color: ${defaultTheme.primaryHover};
	}
  &:focus {
    outline: 1px solid ${defaultTheme.primaryFocusOutline};
    outline-offset: 1px;
  }
	/* &:active {
		background-color: ${defaultTheme.primaryActive};
	} */
	&:disabled {
		background-color: ${defaultTheme.primaryDisabled};
	}
`;

const SecondaryButton = styled(Button)`
	background-color: ${neutral[100]};
	color: ${defaultTheme.primaryColor};
	border: 2px solid ${defaultTheme.primaryColor};

	&:hover {
		border: 2px solid ${defaultTheme.primaryHover};
	}
	&:focus {
		outline: 1px solid ${defaultTheme.primaryFocusOutline};
		outline-offset: 1px;
	}
	/* &:active {
		border: 2px solid ${defaultTheme.primaryActive};
	} */
	&:disabled {
		border: 2px solid ${defaultTheme.primaryDisabled};
	}
`;

const TertiaryButton = styled(Button)`
	background: none;
	color: ${defaultTheme.primaryColor};
  border: none;
  
  &:hover {
		color: ${defaultTheme.primaryHover}
	}
	&:focus {
		outline: 1px solid ${defaultTheme.primaryFocusOutline};
		outline-offset: 1px;
	}
	/* &:active {
		border: 2px solid ${defaultTheme.primaryActive};
	} */
	&:disabled {
		color: ${defaultTheme.primaryDisabled};
	}
`;

export { PrimaryButton, SecondaryButton, TertiaryButton };
