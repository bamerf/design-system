import React, { useState } from "react";
import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import { typescale } from "../../utils";

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
	border: 0;
	clip: rect(0 0 0 0);
	clip-path: inset(50%);
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	white-space: nowrap;
	width: 1px;
`;

const Icon = styled.svg`
	fill: none;
	stroke: white;
	stroke-width: 2px;
`;

const StyledCheckbox = styled.div`
	display: inline-block;
	width: 18px;
	height: 18px;
	background: ${(props) => (props.checked ? "salmon" : "papayawhip")};
	border-radius: 2px;
	border: 2px solid green;
	transition: all 150ms;

	${HiddenCheckbox}:focus + & {
		box-shadow: 0 0 0 3px pink;
	}

	${Icon} {
		visibility: ${(props) => (props.checked ? "visible" : "hidden")};
	}
`;

const CheckboxContainer = styled.div`
	display: inline-block;
	vertical-align: middle;
`;

export default function Checkbox({ className, ...props }) {
	const [checked, setChecked] = useState(false);
	return (
		<CheckboxContainer
			className={className}
			onClick={() => setChecked(!checked)}
		>
			<HiddenCheckbox checked={checked} {...props} />
			<StyledCheckbox checked={checked}>
				<Icon viewBox="0 0 24 24">
					<polyline points="20 6 9 17 4 12" />
				</Icon>
			</StyledCheckbox>
		</CheckboxContainer>
	);
}
