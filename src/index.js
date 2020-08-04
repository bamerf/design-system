import React from "react";
import ReactDom from "react-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, defaultTheme, darkTheme } from "./utils";
import Input from "./components/Input/Input";
const App = () => {
	const useDarkTheme = false;

	return (
		<ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
			<GlobalStyle />
			<Input label="Labelled Input" size="large" status="error" />
		</ThemeProvider>
	);
};

ReactDom.render(<App />, document.querySelector("#root"));
