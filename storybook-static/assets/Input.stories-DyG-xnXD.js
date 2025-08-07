import{r as I,R as t}from"./index-Bk7LAl9r.js";import{t as r,d}from"./Global-PlINvwh_.js";import{l as E}from"./index-CFA_XOsw.js";import"./_commonjsHelpers-Cpj98o6Y.js";function c({className:e,label:a,value:h,type:m="text",size:b="",status:u="",width:f,placeholder:g="Placeholder",helperText:x="This field is required *"}){const[p,v]=I.useState(h||"");return t.createElement(w,{className:e,modifiers:[b,u],value:p,width:f},a?t.createElement(q,null,a):null,t.createElement(S,{type:m,value:p,placeholder:g,onChange:$=>v($.target.value),disabled:u==="disabled"}),t.createElement(z,null,x))}const y={large:({width:e})=>`
	width: ${e||"190px"};

	input {
			height: 44px;
			font-size: ${r.h5};
		}

		> label {
      font-size: ${r.h5};
		}

		> h6 {
			font-size: ${r.paragraph};
		}
	`,small:({width:e})=>`
	width: ${e||"120px"};

	input {
			height: 24px;
			font-size: ${r.helper};
		}

		> label {
      font-size: ${r.helper};
      margin-bottom: 4px;
    }
    
    > h6 {
      font-size: ${r.copyright};
    }
	`,error:({theme:e,value:a})=>`
		input:not(:hover):not(:focus) {
			border-color: ${a?e.lightGrey:e.status.errorColorHover}
		}
		> h6 {
			visibility: ${a?"hidden":"visible"};
		}
	`,disabled:({theme:e})=>`
  
    cursor: not-allowed;

		input {
			background-color: ${e.disabledBackground};
			border-color: ${e.disabled};
			color: ${e.disabled};
			pointer-events: none;
			cursor: not-allowed;

		}

		> label {
			color: ${e.disabled};
		}
	`},w=d("div")`
	display: flex;
	flex-direction: column;
	width: ${({width:e})=>e||"160px"};

	${E.applyStyleModifiers(y)}
`,S=d("input")`
	width: inherit;
	height: 33px;
	background-color: white;
	border: 1px solid ${({theme:e})=>e.lightGrey};
	border-radius: 2px;
	transition: all 200ms ease-out;
	outline: none;
	padding-left: 8px;

	&:hover {
		border-color: ${({theme:e})=>e.hover};
	}

	&:focus {
		border-color: ${({theme:e})=>e.color};
	}

	&::placeholder {
		color: ${({theme:e})=>e.placeholder};
	}
`,q=d("label")`
	display: inline-block;
	font-size: ${r.paragraph};
	width: max-content;
	color: ${({theme:e,disabled:a})=>a?e.defaultGreyDisabled:e.defaultGrey};
	margin-bottom: 8px;
	user-select: none;
`,z=d("h6")`
	font-size: ${r.helper};
	width: max-content;
	color: ${({theme:e})=>e.status.errorColorHover};
	margin-top: 4px;
	user-select: none;
	visibility: hidden;
`;c.__docgenInfo={description:"",methods:[],displayName:"Input",props:{type:{defaultValue:{value:'"text"',computed:!1},required:!1},size:{defaultValue:{value:'""',computed:!1},required:!1},status:{defaultValue:{value:'""',computed:!1},required:!1},placeholder:{defaultValue:{value:'"Placeholder"',computed:!1},required:!1},helperText:{defaultValue:{value:'"This field is required *"',computed:!1},required:!1}}};const H={title:"Design System/Input",component:c},l={args:{placeholder:"Enter text..."}},o={args:{label:"Input Label",placeholder:"Enter text..."}},s={args:{label:"Input with Value",value:"Hello World"}},n={args:{label:"Disabled Input",value:"Cannot edit",disabled:!0}},i={args:{label:"Error Input",value:"Invalid input",error:"This field is required"}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text...'
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Input Label',
    placeholder: 'Enter text...'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Input with Value',
    value: 'Hello World'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Input',
    value: 'Cannot edit',
    disabled: true
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Error Input',
    value: 'Invalid input',
    error: 'This field is required'
  }
}`,...i.parameters?.docs?.source}}};const W=["Default","WithLabel","WithValue","Disabled","Error"];export{l as Default,n as Disabled,i as Error,o as WithLabel,s as WithValue,W as __namedExportsOrder,H as default};
