import { green, neutral, success, warning, error } from "./colors";
import { primaryFont } from "./typography";

export const defaultTheme = {
	colorDisabled: green[100],
	hover: green[200],
	focusOutline: green[200],
	color: green[300],
	focus: green[300],
	active: green[400],
	backgroundWhite: neutral[100],
	disabledBackground: neutral[200],
	disabled: neutral[300],
	placeholder: neutral[300],
	lightGrey: neutral[400],
	defaultGrey: neutral[500],
	textColorBlack: neutral[600],
	textColorWhite: neutral[100],
	primaryFont,
	status: {
		warningColor: warning[200],
		warningColorHover: warning[100],
		warningColorActive: warning[300],
		errorColor: error[200],
		errorColorHover: error[100],
		errorColorActive: error[300],
		successColor: success[200],
		successColorHover: success[100],
		successColorActive: success[300],
	},
};

export const darkTheme = {};
