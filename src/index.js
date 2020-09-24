import React from "react";
import ReactDom from "react-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, defaultTheme, darkTheme } from "./utils";
import Slider from "./components/Slider/Slider";
const App = () => {
	const useDarkTheme = false;

	return (
		<ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
			<GlobalStyle />
			<Slider label="Labelled" status="disabled"/>
		</ThemeProvider>
	);
};

ReactDom.render(<App />, document.querySelector("#root"));
