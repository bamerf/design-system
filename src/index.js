import React from "react";
import ReactDom from "react-dom";
import { GlobalStyle } from "./utils";
import {
	PrimaryButton,
	SecondaryButton,
	TertiaryButton,
} from "./components/Buttons";

const App = () => (
	<div>
		<PrimaryButton>Primary</PrimaryButton>
		<SecondaryButton>Secondary</SecondaryButton>
		<TertiaryButton>Tertiary</TertiaryButton>
		<GlobalStyle />
	</div>
);

ReactDom.render(<App />, document.querySelector("#root"));
