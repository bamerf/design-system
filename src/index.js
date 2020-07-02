import React from "react";
import ReactDom from "react-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, defaultTheme, darkTheme } from "./utils";
import Checkbox from "./components/Checkbox/Checkbox";
const App = () => {
	const useDarkTheme = false;

	return (
		<ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
			<Checkbox label="Check this" />
			<GlobalStyle />
		</ThemeProvider>
	);
};

ReactDom.render(<App />, document.querySelector("#root"));
