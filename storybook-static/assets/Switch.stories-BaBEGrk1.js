import{r as k,R as a}from"./index-Bk7LAl9r.js";import{t as x,d as i}from"./Global-PlINvwh_.js";import{l as w}from"./index-CFA_XOsw.js";import"./_commonjsHelpers-Cpj98o6Y.js";function m({className:e,label:r,size:b="",status:u="",checked:g}){const[t,h]=k.useState(g),f=l=>{l.key==="Enter"&&h(!t)};return a.createElement(y,{className:e,modifiers:[b,u]},a.createElement($,{tabIndex:"-1",id:"checkbox",type:"checkbox",checked:t}),a.createElement(p,{tabIndex:u==="disabled"?"-1":"0",htmlFor:"switch",checked:t,onClick:()=>h(!t),onKeyUp:l=>f(l)}),r?a.createElement(C,null,r):null)}const S={large:()=>`
		> label {
			font-size: ${x.h5}
		}
  `,disabled:({theme:e})=>`
  
    cursor: not-allowed;
  
		> div {
      cursor: not-allowed;
      pointer-events:none;
      background: ${e.disabled};
      :after {
        background: ${e.disabledBackground};
      }
    }
    
    > input {
      :checked + ${p} {
        background: ${e.colorDisabled};
      }

      cursor: not-allowed;
      pointer-events:none;
    }

		> label {
			color: ${e.disabled};
		}
	`},y=i.div`
	position: relative;
	display: flex;
	align-items: center;
	width: max-content;

	${w.applyStyleModifiers(S)}
`,p=i.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 40px;
	height: 24px;
	border-radius: 15px;
	background: ${({theme:e})=>e.defaultGrey};
	cursor: pointer;
	&::after {
		content: "";
		display: block;
		border-radius: 50%;
		width: 18px;
		height: 18px;
		margin: 3px;
		background: white;
		transition: 0.2s;
	}
`,$=i.input`
	opacity: 0;
	z-index: 1;
	border-radius: 15px;
	width: 40px;
	height: 24px;
	cursor: pointer;
	&:checked + ${p} {
		background: ${({theme:e})=>e.color};
		&::after {
			content: "";
			display: block;
			border-radius: 50%;
			width: 18px;
			height: 18px;
			margin-left: 19px;
			transition: 0.2s;
		}
	}
`,C=i.label`
	display: inline-block;
	width: max-content;
	color: ${({theme:e,disabled:r})=>r?e.defaultGreyDisabled:e.defaultGrey};
	margin-left: 12px;
	user-select: none;
`;m.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{size:{defaultValue:{value:'""',computed:!1},required:!1},status:{defaultValue:{value:'""',computed:!1},required:!1}}};const _={title:"Design System/Switch",component:m},s={args:{}},o={args:{checked:!0}},c={args:{label:"Toggle Switch"}},d={args:{disabled:!0}},n={args:{checked:!0,disabled:!0}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Toggle Switch'
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...d.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: true
  }
}`,...n.parameters?.docs?.source}}};const z=["Default","Checked","WithLabel","Disabled","DisabledChecked"];export{o as Checked,s as Default,d as Disabled,n as DisabledChecked,c as WithLabel,z as __namedExportsOrder,_ as default};
