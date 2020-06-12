import { green, neutral } from "./colors";
import { primaryFont } from "./typography";

export const defaultTheme = {
	primaryColor: green[300],
	primaryHover: green[200],
	primaryActive: green[400],
	primaryFocus: green[300],
	primaryFocusOutline: green[200],
	primaryDisabled: neutral[300],
	textColor: neutral[600],
	textColorOnPrimary: neutral[100],
	textColorInverted: neutral[100],
	primaryFont,
};
