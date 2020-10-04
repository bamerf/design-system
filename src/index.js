import React from "react";
import ReactDom from "react-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, defaultTheme, darkTheme } from "./utils";
import Select from "./components/Select/Select";
const App = () => {
	const useDarkTheme = false;

	return (
		<ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
			<GlobalStyle />
			<Select label="Labelled" status="disabled" items={["option 1", "option 2", "option 3"]}/>
		</ThemeProvider>
	);
};

ReactDom.render(<App />, document.querySelector("#root"));
