import React from "react";
import ReactDom from "react-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, defaultTheme, darkTheme } from "./utils";
import Button from "./components/Buttons/Buttons";

const App = () => {
	const useDarkTheme = false;

	return (
		<ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
			<Button>Delete</Button>
			<GlobalStyle />
		</ThemeProvider>
	);
};

ReactDom.render(<App />, document.querySelector("#root"));
