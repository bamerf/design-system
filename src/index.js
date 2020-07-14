import React from "react";
import ReactDom from "react-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, defaultTheme, darkTheme } from "./utils";
// import Checkbox from "./components/Checkbox/Checkbox";
// import Button from "./components/Buttons/Buttons";
// import Radio from "./components/Radio/Radio";
import Slider from "./components/Slider/Slider";
const App = () => {
	const useDarkTheme = false;

	return (
		<ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
			<GlobalStyle />
			<Slider min={20} max={80} value={50} />
		</ThemeProvider>
	);
};

ReactDom.render(<App />, document.querySelector("#root"));
