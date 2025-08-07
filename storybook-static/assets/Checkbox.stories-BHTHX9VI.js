import{r as g,R as r}from"./index-Bk7LAl9r.js";import{t as y,d as a}from"./Global-PlINvwh_.js";import{l as n}from"./index-CFA_XOsw.js";import"./_commonjsHelpers-Cpj98o6Y.js";function x({className:e,label:o,size:h="",status:p="",disabled:E,checked:f,...C}){const[l,u]=g.useState(f),m=i=>{i.key==="Enter"&&u(!l)};return r.createElement($,{className:e,modifiers:[h,p],checked:l},r.createElement(v,{tabIndex:"-1",checked:l,...C}),r.createElement(D,{checked:l,tabIndex:p==="disabled"?"-1":"0",onClick:()=>u(!l),onKeyUp:i=>m(i)},r.createElement(k,{viewBox:"0 0 24 24"},r.createElement("polyline",{points:"22 4 8 20 1 14"}))),o?r.createElement(w,null,o):null)}const b={large:()=>`
		> div {
			width: 24px;
			height: 24px;
		}

		> label {
			font-size: ${y.h5}
		}
  `,error:({theme:e,checked:o})=>`
	> div {
		border-color: ${o?e.color:e.status.errorColor}
	}

	> label {
		color: ${o?e.defaultGrey:e.status.errorColor}
	}

	&:hover {
		> div {
			border-color: ${o?e.color:e.status.errorColorHover}
		}
	}
	`,disabled:({theme:e,checked:o})=>`
	
		cursor: not-allowed;

		> div {
			background-color: ${o?e.colorDisabled:e.disabledBackground};
			border-color: ${o?e.colorDisabled:e.disabled};
			cursor: not-allowed;
			pointer-events:none;
		}

		> label {
			color: ${e.disabled};
		}
	`},$=a.div`
	max-width: max-content;
	display: flex;
	flex-direction: row;
	align-items: center;

	${n.applyStyleModifiers(b)}
`,v=a.input.attrs({type:"checkbox"})`
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
`,k=a.svg`
	fill: none;
	stroke: white;
	stroke-width: 2px;
`,D=a.div`
	width: 18px;
	height: 18px;
	background-color: ${({theme:e,checked:o})=>o?e.color:e.backgroundWhite};
	border-radius: 2px;
	border: 2px solid
		${({theme:e,checked:o})=>o?e.color:e.defaultGrey};
	transition: color 100ms linear, background-color 100ms linear,
		border 100ms linear;
	cursor: pointer;

	&:hover {
		border: 2px solid
			${({theme:e,checked:o})=>o?e.color:e.hover};
	}

	&:focus {
		/* outline: 2px solid ${({theme:e})=>e.focusOutline};
		outline-offset: 1px; */
		outline: none;
		border: 2px solid ${({theme:e,checked:o})=>o?e.color:e.hover}
	}

	&:active {
		border: 2px solid
			${({theme:e,checked:o})=>e.color};
	}

	&:disabled {
		background-color: ${({theme:e,checked:o})=>o?e.color:e.colorDisabled};
		border: 2px solid
			${({theme:e,checked:o})=>o?e.color:"pink"};
		cursor: not-allowed;
	}

	${k} {
		visibility: ${e=>e.checked?"visible":"hidden"};
	}

	${n.applyStyleModifiers(b)}
`,w=a.label`
	display: inline-block;
	width: max-content;
	color: ${({theme:e,disabled:o})=>o?e.defaultGreyDisabled:e.defaultGrey};
	margin-left: 8px;
	user-select: none;

	${n.applyStyleModifiers(b)}
`;x.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{size:{defaultValue:{value:'""',computed:!1},required:!1},status:{defaultValue:{value:'""',computed:!1},required:!1}}};const M={title:"Design System/Checkbox",component:x},s={args:{label:"Checkbox Label"}},c={args:{label:"Checked Checkbox",checked:!0}},d={args:{label:"Disabled Checkbox",disabled:!0}},t={args:{label:"Disabled Checked Checkbox",checked:!0,disabled:!0}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Checkbox Label'
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Checked Checkbox',
    checked: true
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Checkbox',
    disabled: true
  }
}`,...d.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Checked Checkbox',
    checked: true,
    disabled: true
  }
}`,...t.parameters?.docs?.source}}};const O=["Default","Checked","Disabled","DisabledChecked"];export{c as Checked,s as Default,d as Disabled,t as DisabledChecked,O as __namedExportsOrder,M as default};
