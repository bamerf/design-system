import React from "react";
import ReactDom from "react-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, defaultTheme, darkTheme } from "./utils";
import Checkbox from "./components/Checkbox/Checkbox";
// import Button from "./components/Buttons/Buttons";
const App = () => {
	const useDarkTheme = false;

	return (
		<ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
			<GlobalStyle />
			<Checkbox label="Check this" checked status="disabled" />
		</ThemeProvider>
	);
};

ReactDom.render(<App />, document.querySelector("#root"));
