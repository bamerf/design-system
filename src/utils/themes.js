import { green, neutral, success, warning, error } from "./colors";
import { primaryFont } from "./typography";

export const defaultTheme = {
	color: green[300],
	hover: green[200],
	active: green[400],
	focus: green[300],
	focusOutline: green[200],
	disabled: neutral[300],
	disabledBackground: neutral[200],
	selectDefault: neutral[500],
	selectActive: green[400],
	selectDisabled: green[100],
	textColorBlack: neutral[600],
	textColorWhite: neutral[100],
	textColorLabel: neutral[500],
	textColorPlaceholder: neutral[300],
	backgroundWhite: neutral[100],
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
