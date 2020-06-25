import { create } from "@storybook/theming/create";
import { green } from "../src/utils";

export default create({
	base: "dark",

	colorPrimary: green[300],
	colorSecondary: "deepskyblue",

	// UI
	// appBg: neutral[200],
	// appContentBg: "silver",
	// appBorderColor: "grey",
	// appBorderRadius: 4,

	// // Typography
	// fontBase: '"Open Sans", sans-serif',
	// fontCode: "monospace",

	// // Text colors
	// textColor: "black",
	// textInverseColor: "rgba(255,255,255,0.9)",

	// // Toolbar default and active colors
	// barTextColor: "silver",
	// barSelectedColor: "black",
	barBg: "#464649",

	// // Form colors
	// inputBg: "white",
	// inputBorder: "silver",
	// inputTextColor: "black",
	// inputBorderRadius: 4,

	// brandTitle: "LeadChat Design System",
	brandUrl: "https://www.leadchat.com/",
	brandImage:
		"https://leadchat-brand-assets.s3-ap-southeast-2.amazonaws.com/leadchat-logo--300px.png",
});
