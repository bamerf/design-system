import{R as t,r as i}from"./index-Bk7LAl9r.js";import{t as n,d as r}from"./Global-PlINvwh_.js";import{l as C}from"./index-CFA_XOsw.js";import"./_commonjsHelpers-Cpj98o6Y.js";const L=t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"black",width:"24px",height:"24px"},t.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),t.createElement("path",{d:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"}));function $({className:e,label:o,size:y="",status:b="",placeholder:S="Select",items:w=["No options"],selectedOption:E=null}){const[a,s]=i.useState(!1),[p,f]=i.useState(E),g=i.useRef(null),m=i.useRef(null),k=()=>{s(!a)},h=(l,x)=>{l.key==="Enter"&&a&&(f(l.target.value),console.log(p)),l.key==="Escape"&&a&&s(!1)},O=l=>{f(l),s(!1)},v=l=>{m.current.contains(l.target||g.current.contains(l.target))||s(!1)};return i.useEffect(()=>{a?document.addEventListener("mousedown",v):document.removeEventListener("mousedown",v)},[a]),t.createElement(B,{className:e,modifiers:[y,b],selected:p,onKeyUp:h},o?t.createElement(V,null,o):null,t.createElement(G,{onClick:k,open:a,selected:p,"aria-haspopup":"true","arial-controls":"dropdown1",tabIndex:"0",ref:g},p||S," ",L),t.createElement(H,{open:a},t.createElement(I,{id:"dropdown1",role:"list",open:a,ref:m},b!=="disabled"?w.map((l,x)=>t.createElement(R,{tabIndex:"0",key:x,onClick:()=>O(l),onKeyUp:z=>h(z)},l)):null)),t.createElement(_,null,"Please select an option"))}const D={large:()=>`
	width: 190px;

	div:first-of-type {
			height: 44px;
			font-size: ${n.h5}
		}

		li {
			padding-top: 12px;
			padding-bottom:12px;
			font-size: ${n.paragraph};
		}

		> label {
			font-size: ${n.h5}
		}

		> h6 {
			font-size: ${n.paragraph}
		}
	`,small:()=>`
	width: 120px;

	div:first-of-type {
			height: 24px;
			font-size: ${n.helper}
		}

		li {
			padding-top: 8px;
			padding-bottom:8px;
			font-size: ${n.helper}
		}

		> label {
			font-size: ${n.helper}
		}
	`,error:({theme:e,selected:o})=>`
		div:first-of-type:not(:hover) {
			border-color: ${o?e.lightGrey:e.status.errorColorHover}
		}
		> h6 {
			visibility: ${o?"hidden":"visible"};
		}
	`,disabled:({theme:e})=>`

		cursor: not-allowed;

		button:first-of-type {
			background-color: ${e.disabledBackground};
			border-color: ${e.disabled};
			color: ${e.disabled};
			pointer-events: none;
			cursor: not-allowed;

		  svg {
				fill: ${e.disabled};
			}
		}

		> label {
			color: ${e.disabled};
		}
	`},B=r("div")`
  width: 144px;

  ${C.applyStyleModifiers(D)}
`,G=r("button")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 33px;
  width: 100%;
  border: 1px solid
    ${({theme:e,open:o})=>o?e.color:e.lightGrey};
  color: ${({theme:e,selected:o})=>o?e.defaultGrey:e.lightGrey};
  border-radius: 2px 2px ${({open:e})=>e?"0px 0px":"2px 2px"};
  padding-left: 12px;
  background: white;
  transition: all 500ms linear;
  cursor: pointer;
  user-select: none;

  > svg {
    margin-right: 8px;
    fill: ${({theme:e})=>e.defaultGrey};

    :hover {
      fill: ${({theme:e,open:o})=>o?e.color:e.hover};
      transition: all 100ms linear;
    }
  }

  :hover {
    border-color: ${({theme:e})=>e.hover};
    transition: all 100ms linear;
  }

  :focus {
    outline: 0;
    border-color: ${({theme:e})=>e.color};
    transition: all 100ms linear;

    svg {
      fill: ${({theme:e,open:o})=>o?e.color:e.hover};
    }
  }

  :active {
    border-color: ${({theme:e})=>e.color};
  }
`,H=r("div")`
  position: absolute;
  width: inherit;
`,I=r("ul")`
  background: #ffffff;
  border: 1px solid ${({theme:e})=>e.color};
  border-top: ${({open:e})=>e?"none":null};
  box-sizing: border-box;
  border-radius: 0px 0px 2px 2px;
  transform: ${({open:e})=>e?"scale(1)":"scale(1, 0)"};
  opacity: ${({open:e})=>e?1:0};
  transform-origin: top center;
  transition: all 100ms linear;
`,R=r("li")`
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 12px;
  font-size: ${n.helper};
  color: ${({theme:e})=>e.defaultGrey};
  border-bottom: 1px solid ${({theme:e})=>e.disabledBackground};
  list-style: none;
  user-select: none;
  &:last-child {
    border-bottom: none;
  }

  :hover {
    cursor: pointer;
    background-color: ${({theme:e})=>e.disabledBackground};
  }

  :focus {
    outline: 0;
    background-color: ${({theme:e})=>e.disabledBackground};
  }
`,V=r("label")`
  display: inline-block;
  font-size: ${n.paragraph};
  width: max-content;
  color: ${({theme:e,disabled:o})=>o?e.defaultGreyDisabled:e.defaultGrey};
  margin-bottom: 8px;
  user-select: none;
`,_=r("h6")`
  font-size: ${n.helper};
  width: max-content;
  color: ${({theme:e})=>e.status.errorColorHover};
  margin-top: 4px;
  user-select: none;
  visibility: hidden;
`;$.__docgenInfo={description:"",methods:[],displayName:"Select",props:{size:{defaultValue:{value:"''",computed:!1},required:!1},status:{defaultValue:{value:"''",computed:!1},required:!1},placeholder:{defaultValue:{value:"'Select'",computed:!1},required:!1},items:{defaultValue:{value:"['No options']",computed:!1},required:!1},selectedOption:{defaultValue:{value:"null",computed:!1},required:!1}}};const N={title:"Design System/Select",component:$},d={args:{placeholder:"Select an option",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}]}},c={args:{label:"Select Label",placeholder:"Choose an option",options:[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"orange",label:"Orange"}]}},u={args:{label:"Disabled Select",placeholder:"Cannot select",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"}],disabled:!0}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Select an option',
    options: [{
      value: 'option1',
      label: 'Option 1'
    }, {
      value: 'option2',
      label: 'Option 2'
    }, {
      value: 'option3',
      label: 'Option 3'
    }]
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Select Label',
    placeholder: 'Choose an option',
    options: [{
      value: 'apple',
      label: 'Apple'
    }, {
      value: 'banana',
      label: 'Banana'
    }, {
      value: 'orange',
      label: 'Orange'
    }]
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Select',
    placeholder: 'Cannot select',
    options: [{
      value: 'option1',
      label: 'Option 1'
    }, {
      value: 'option2',
      label: 'Option 2'
    }],
    disabled: true
  }
}`,...u.parameters?.docs?.source}}};const U=["Default","WithLabel","Disabled"];export{d as Default,u as Disabled,c as WithLabel,U as __namedExportsOrder,N as default};
