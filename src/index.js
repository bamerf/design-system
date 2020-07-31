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
			<Select
				label="Select an option"
				placeholder="Effects"
				items={["Reverb", "Delay", "Saturation"]}
				// status="error"
				// size="small"
			/>
			<h2>test</h2>
		</ThemeProvider>
	);
};

ReactDom.render(<App />, document.querySelector("#root"));
