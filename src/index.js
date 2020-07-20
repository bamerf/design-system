import React from "react";
import ReactDom from "react-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, defaultTheme, darkTheme } from "./utils";
import Switch from "./components/Switch/Switch";
const App = () => {
	const useDarkTheme = false;

	return (
		<ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
			<GlobalStyle />
			<Switch label="Click me" />
		</ThemeProvider>
	);
};

ReactDom.render(<App />, document.querySelector("#root"));
