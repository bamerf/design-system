import React from "react";
import ReactDom from "react-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, defaultTheme, darkTheme } from "./utils";
import Button from "./components/Buttons";
// import { ReactComponent as DeleteIcon } from "./svg/delete-white-36dp.svg";

const App = () => {
	const useDarkTheme = false;

	return (
		<ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
			<div style={{ marginLeft: "40rem", marginTop: "20rem" }}>
				<Button>Delete</Button>
			</div>
			<GlobalStyle />
		</ThemeProvider>
	);
};

ReactDom.render(<App />, document.querySelector("#root"));
