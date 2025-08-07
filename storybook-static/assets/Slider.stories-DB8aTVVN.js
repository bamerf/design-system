import{r as f,R as a}from"./index-Bk7LAl9r.js";import{t as x,d as l}from"./Global-PlINvwh_.js";import{l as $}from"./index-CFA_XOsw.js";import"./_commonjsHelpers-Cpj98o6Y.js";function u({min:e=0,max:r=100,className:o,value:d=0,size:b="",status:s="",label:p}){const[c,m]=f.useState(d);return a.createElement(k,{className:o,modifiers:[b,s],min:e,value:d},a.createElement(S,null,p),a.createElement(y,null,a.createElement(h,{min:Number(e),max:r,value:Number(c),onChange:g=>m(g.target.value),tabIndex:s==="disabled"?"-1":"0"}),a.createElement(w,null,c)))}const v={large:()=>`
		label {
			font-size: ${x.h5};
		}

  `,disabled:({theme:e,min:r,value:o})=>`

		cursor: not-allowed;

		> div {
			cursor: not-allowed;
			pointer-events: none;
		}

		input {
			background-color: ${e.disabled};
			&::-webkit-slider-thumb {
				border: 3px solid ${o===r?e.disabled:e.colorDisabled};
				background-color: ${e.disabledBackground};
			}
			&::-moz-range-thumb {
				border: 3px solid ${o===r?e.disabled:e.colorDisabled};
				background-color: ${e.disabledBackground};
			}
		}

		label {
			color: ${e.disabled};
		}
	`},k=l.div`
	${$.applyStyleModifiers(v)}
`,y=l.div`
	display: flex;
	align-items: center;
	/* position: relative; */
`,h=l.input.attrs(()=>({type:"range"}))`
	max-width: 250px;
	width: 100%;
	height: 3px;
	-webkit-appearance: none;
	border-radius: 50px;
	background-color: ${({theme:e})=>e.lightGrey};
	outline: none;
	transition: all 100ms linear;
	cursor: pointer;

	&:hover {
		background-color: ${({theme:e})=>e.defaultGrey};
	}

	&:active {
		background-color: ${({theme:e})=>e.defaultGrey};

		&::-webkit-slider-thumb {
			background-color: ${({theme:e})=>e.color};
			border: 0px solid ${({theme:e})=>e.color};
		}

		&::-moz-range-thumb {
			background-color: ${({theme:e})=>e.color};
			border: 0px solid ${({theme:e})=>e.color};
		}
	}

	&:focus {
		background-color: ${({theme:e})=>e.defaultGrey};

		&::-webkit-slider-thumb {
			background-color: ${({theme:e})=>e.color};
			border: 3px solid ${({theme:e})=>e.color};
		}

		&::-moz-range-thumb {
			background-color: ${({theme:e})=>e.color};
			border: 3px solid ${({theme:e})=>e.color};
		}
	}

	&::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		position: relative;
		z-index: 1;
		width: 18px;
		height: 18px;
		border-radius: 50%;
		border: 3px solid
			${({theme:e,min:r,value:o})=>o===r?e.lightGrey:e.color};
		background-color: white;
		cursor: pointer;
		-webkit-transition: 100ms;
		transition: all 100ms linear;

		&:hover {
			border-color: ${({theme:e,min:r,value:o})=>o===r?e.defaultGrey:e.hover};
		}

		&:active {
			background-color: ${({theme:e,min:r,value:o})=>o===r?e.defaultGrey:e.color};
			border: 3px solid
				${({theme:e,min:r,value:o})=>o===r?e.defaultGrey:e.color};
		}
	}

	&::-moz-range-thumb {
		width: 14px;
		height: 14px;
		position: relative;
		z-index: 1;
		border-radius: 50%;
		border: 3px solid
			${({theme:e,min:r,value:o})=>o===r?e.lightGrey:e.color};
		background-color: white;
		cursor: pointer;
		-webkit-transition: 100ms;
		transition: all 100ms linear;

		&:hover {
			border-color: ${({theme:e,min:r,value:o})=>o===r?e.defaultGrey:e.hover};
		}

		&:active {
			background-color: ${({theme:e,min:r,value:o})=>o===r?e.defaultGrey:e.color};
			border: 3px solid
				${({theme:e,min:r,value:o})=>o===r?e.defaultGrey:e.color};
		}
	}
`,w=l.p`
	color: ${({theme:e})=>e.lightGrey};
	margin-left: 12px;
	user-select: none;
`,S=l.label`
	display: inline-block;
	color: ${({theme:e})=>e.defaultGrey};
	margin-left: 5px;
	margin-bottom: 8px;
	user-select: none;
`;u.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{min:{defaultValue:{value:"0",computed:!1},required:!1},max:{defaultValue:{value:"100",computed:!1},required:!1},value:{defaultValue:{value:"0",computed:!1},required:!1},size:{defaultValue:{value:'""',computed:!1},required:!1},status:{defaultValue:{value:'""',computed:!1},required:!1}}};const z={title:"Design System/Slider",component:u},t={args:{min:0,max:100,value:50}},i={args:{label:"Volume",min:0,max:100,value:75}},n={args:{label:"Disabled Slider",min:0,max:100,value:25,disabled:!0}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    value: 50
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Volume',
    min: 0,
    max: 100,
    value: 75
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Slider',
    min: 0,
    max: 100,
    value: 25,
    disabled: true
  }
}`,...n.parameters?.docs?.source}}};const _=["Default","WithLabel","Disabled"];export{t as Default,n as Disabled,i as WithLabel,_ as __namedExportsOrder,z as default};
