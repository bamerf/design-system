import{r as m,R as o}from"./index-Bk7LAl9r.js";import{t as y,d as t}from"./Global-PlINvwh_.js";import{l as n}from"./index-CFA_XOsw.js";import"./_commonjsHelpers-Cpj98o6Y.js";function f({className:e,label:r,size:x="",status:u="",checked:g,...k}){const[i,b]=m.useState(g),h=c=>{c.key==="Enter"&&b(!0)};return o.createElement($,{className:e,modifiers:[x,u],checked:i},o.createElement(C,{tabIndex:"-1",checked:i,...k}),o.createElement(w,{tabIndex:u==="disabled"?"-1":"0",checked:i,onClick:()=>b(!0),onKeyUp:c=>h(c)}),r?o.createElement(v,null,r):null)}const p={large:()=>`
		> div {
			width: 24px;
			height: 24px;

			:after {
				width: 8px;
				height: 8px;
			}
		}

		> label {
			font-size: ${y.h5}
		}

  `,error:({theme:e,checked:r})=>`
	> div {
		border-color: ${r?e.color:e.status.errorColor}
	}

	> label {
		color: ${r?e.defaultGrey:e.status.errorColor}
	}

	&:hover {
		> div {
			border-color: ${r?e.color:e.status.errorColorHover}
		}
	}
	`,disabled:({theme:e,checked:r})=>`

		cursor: not-allowed;

		> div {
			background-color: ${r?e.colorDisabled:e.disabledBackground};
			border-color: ${r?e.colorDisabled:e.disabled};
			cursor: not-allowed;
			pointer-events:none;

			:after {
				background-color: ${r?"white":e.disabledBackground};
			}
		}

		> label {
			color: ${e.disabled};
		}
	`},$=t.div`
	max-width: max-content;
	display: flex;
	flex-direction: row;
	align-items: center;

	${n.applyStyleModifiers(p)}
`,C=t.input.attrs({type:"checkbox"})`
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
`,w=t.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 18px;
	height: 18px;
	background-color: ${({theme:e,checked:r})=>r?e.color:e.backgroundWhite};
	border-radius: 50%;
	border: 2px solid
		${({theme:e,checked:r})=>r?e.color:e.defaultGrey};
	transition: color 100ms linear, background-color 100ms linear,
		border 100ms linear;
	cursor: pointer;

	&:hover {
		border: 2px solid
			${({theme:e,checked:r})=>r?e.color:e.hover};
	}

	&:active {
		border: 2px solid
			${({theme:e,checked:r})=>e.color};
	}

	&:focus {
		/* outline: 2px solid ${({theme:e})=>e.focusOutline};
		outline-offset: 1px; */
		outline: none;
		border: 2px solid ${({theme:e,checked:r})=>r?e.color:e.hover}
	}

	&:disabled {
		background-color: ${({theme:e,checked:r})=>r?e.color:e.colorDisabled};
		border: 2px solid
			${({theme:e,checked:r})=>r?e.color:"pink"};
		cursor: not-allowed;
	}

	&::after {
		content: "";
		width: 6px;
		height: 6px;
		-moz-border-radius: 7.5px;
		-webkit-border-radius: 7.5px;
		border-radius: 7.5px;
		background-color: white;
	}

	${n.applyStyleModifiers(p)}
`,v=t.label`
	display: inline-block;
	width: max-content;
	color: ${({theme:e,disabled:r})=>r?e.defaultGreyDisabled:e.defaultGrey};
	margin-left: 8px;
	user-select: none;

	${n.applyStyleModifiers(p)}
`;f.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{size:{defaultValue:{value:'""',computed:!1},required:!1},status:{defaultValue:{value:'""',computed:!1},required:!1}}};const I={title:"Design System/Radio",component:f},a={args:{label:"Radio Option"}},d={args:{label:"Checked Radio",checked:!0}},l={args:{label:"Disabled Radio",disabled:!0}},s={args:{label:"Disabled Checked Radio",checked:!0,disabled:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Radio Option'
  }
}`,...a.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Checked Radio',
    checked: true
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Radio',
    disabled: true
  }
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Checked Radio',
    checked: true,
    disabled: true
  }
}`,...s.parameters?.docs?.source}}};const O=["Default","Checked","Disabled","DisabledChecked"];export{d as Checked,a as Default,l as Disabled,s as DisabledChecked,O as __namedExportsOrder,I as default};
