import React from "react";
import ReactDom from "react-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, defaultTheme, darkTheme } from "./utils";
// import {
// 	PrimaryButton,
// 	SecondaryButton,
// 	TertiaryButton,
// } from "./components/Buttons";
import Button from "./components/Buttons";

const App = () => {
	const useDarkTheme = false;

	return (
		<ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
			<Button />
			{/* <PrimaryButton>Primary</PrimaryButton>
			<SecondaryButton>Secondary</SecondaryButton>
			<TertiaryButton>Tertiary</TertiaryButton> */}
			<GlobalStyle />
		</ThemeProvider>
	);
};

ReactDom.render(<App />, document.querySelector("#root"));
