import React from "react";
import ReactDom from "react-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, defaultTheme, darkTheme } from "./utils";
// import Checkbox from "./components/Checkbox/Checkbox";
// import Button from "./components/Buttons/Buttons";
import Radio from "./components/Radio/Radio";
const App = () => {
	const useDarkTheme = false;

	return (
		<ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
			<GlobalStyle />
			<Radio label="Check this" checked />
		</ThemeProvider>
	);
};

ReactDom.render(<App />, document.querySelector("#root"));
