import { addParameters, addDecorator } from "@storybook/react";
import { withContexts } from "@storybook/addon-contexts/react";
import { withKnobs } from "@storybook/addon-knobs";
import { contexts } from "./contexts";

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
