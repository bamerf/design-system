import React from "react";
import { addParameters, addDecorator } from "@storybook/react";
import { withContexts } from "@storybook/addon-contexts/react";
import { withKnobs } from "@storybook/addon-knobs";
import { contexts } from "./contexts";
// import { withA11y } from "@storybook/addon-a11y";
import { GlobalStyle } from "../src/utils";

addParameters({
	backgrounds: [
		{
			name: "Default Theme",
			value: "#F4F5F7",
			default: true,
		},
	],
});

addDecorator(withContexts(contexts));
addDecorator(withKnobs);
// addDecorator(withA11y);
addDecorator((style) => (
	<>
		<GlobalStyle />
		{style()}
	</>
));
