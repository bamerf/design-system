import{R as k}from"./index-Bk7LAl9r.js";import{t as $,d as e}from"./Global-PlINvwh_.js";import{l as s}from"./index-CFA_XOsw.js";import{n as b}from"./colors-DLOzMQYD.js";import"./_commonjsHelpers-Cpj98o6Y.js";const a={small:()=>`
    font-size: ${$.helper};
		padding: 4px 16px;
		
		& > svg {
			width: 16px;
			height: 16px;
		}
  `,large:()=>`
    font-size: ${$.h5};
		padding: 12px 32px;
		
		& > svg {
			width: 24px;
			height: 24px;
		}
  `,success:({theme:r})=>`
    background-color: ${r.status.successColor};
    color: ${r.textColorWhite};

    &:hover {
      background-color: ${r.status.successColorHover};
    }

    &:focus {
      outline: 2px solid ${r.status.successColorHover};
		  outline-offset: 2px;
    }

    &:active {
      background-color: ${r.status.successColorActive};
		}
		
		&:disabled {
			background-color: ${r.disabled};
		}
  `,warning:({theme:r})=>`
  background-color: ${r.status.warningColor};
  color: ${r.textColorWhite};

  &:hover {
    background-color: ${r.status.warningColorHover};
  }

  &:focus {
    outline: 2px solid ${r.status.warningColorHover};
    outline-offset: 2px;
  }

  &:active {
    background-color: ${r.status.warningColorActive};
	}
	
	&:disabled {
		background-color: ${r.disabled};
	}
  `,error:({theme:r})=>`
  background-color: ${r.status.errorColor};
  color: ${r.textColorWhite};

  &:hover {
    background-color: ${r.status.errorColorHover};
  }

  &:focus {
    outline: 2px solid ${r.status.errorColorHover};
    outline-offset: 2px;
  }

  &:active {
		background-color: ${r.status.errorColorActive};
	}

	&:disabled {
		background-color: ${r.disabled};
	}
  `},t=e.button`
	font-size: ${$.paragraph};
	padding: 8px 32px;
	border-radius: 2px;
	outline: none;
	cursor: pointer;
	user-select: none;
	transition: background-color 100ms linear, color 100ms linear;
	display: flex;
	justify-content: center;
	align-items: center;

	&:focus {
		outline: 2px solid ${({theme:r})=>r.focusOutline};
		outline-offset: 2px;
	}

	&:hover {
		background-color: ${({theme:r})=>r.hover};
	}

	&:active {
		background-color: ${({theme:r})=>r.active};
	}

	&:disabled {
		background-color: ${({theme:r})=>r.disabled};
		color: ${({theme:r})=>r.textColorWhite};
		cursor: not-allowed;
	}

	& > svg {
		width: 24px;
		height: 24px;
	}
`,C=e(t)`
	background-color: ${({theme:r})=>r.color};
	border: none;
	color: white;

	${s.applyStyleModifiers(a)}
`,w=e(t)`
	background-color: ${b[100]};
	padding: 7px 31px;
	color: ${({theme:r})=>r.color};
	border: 2px solid ${({theme:r})=>r.color};

	&:hover {
		border: 2px solid ${({theme:r})=>r.hover};
		background-color: ${b[100]};
		color: ${({theme:r})=>r.hover};
	}

	&:active {
		border-color: ${({theme:r})=>r.active};
		color: ${({theme:r})=>r.active};
	}

	&:disabled {
		border-color: ${({theme:r})=>r.disabled};
		background: ${b[100]};
		color: ${({theme:r})=>r.disabled};
	}

	${s.applyStyleModifiers(a)}
`,z=e(t)`
	background: none;
	color: ${({theme:r})=>r.color};
	border: none;

	&:hover {
		color: ${({theme:r})=>r.hover};
		background: none;
	}

	&:active {
		color: ${({theme:r})=>r.active};
	}

	&:disabled {
		background: none;
		color: ${({theme:r})=>r.disabled};
	}

	${s.applyStyleModifiers(a)}
`,E=e(t)`
	background-color: ${({theme:r})=>r.color};
	padding: 6px 8px;
	border: none;
	color: white;

	${s.applyStyleModifiers(a)}
`,T=e(t)`
	background-color: ${({theme:r})=>r.color};
	padding: 8px 0px;
	padding-left: 18px;
	padding-right: 24px;
	border: none;
	color: white;

	& > svg {
		width: 18px;
		height: 18px;
		margin-right: 6px;
	}

	${s.applyStyleModifiers(a)}
`;function f({type:r="primary",className:x,children:y,disabled:h,size:v="",status:S="",...B}){let o=null;return r==="primary"&&(o=C),r==="secondary"&&(o=w),r==="tertiary"&&(o=z),r==="icon"&&(o=E),r==="labelledIcon"&&(o=T),k.createElement(o,{className:x,disabled:h,modifiers:[v,S],...B},y)}f.__docgenInfo={description:"",methods:[],displayName:"Button",props:{type:{defaultValue:{value:'"primary"',computed:!1},required:!1},size:{defaultValue:{value:'""',computed:!1},required:!1},status:{defaultValue:{value:'""',computed:!1},required:!1}}};const _={title:"Design System/Buttons",component:f},n={args:{children:"Primary Button"}},c={args:{type:"secondary",children:"Secondary Button"}},l={args:{type:"tertiary",children:"Tertiary Button"}},i={args:{status:"success",children:"Success Button"}},d={args:{status:"warning",children:"Warning Button"}},u={args:{status:"error",children:"Error Button"}},p={args:{size:"small",children:"Small Button"}},g={args:{size:"large",children:"Large Button"}},m={args:{disabled:!0,children:"Disabled Button"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Primary Button'
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'secondary',
    children: 'Secondary Button'
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'tertiary',
    children: 'Tertiary Button'
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'success',
    children: 'Success Button'
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'warning',
    children: 'Warning Button'
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'error',
    children: 'Error Button'
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small',
    children: 'Small Button'
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large',
    children: 'Large Button'
  }
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: 'Disabled Button'
  }
}`,...m.parameters?.docs?.source}}};const L=["Primary","Secondary","Tertiary","Success","Warning","Error","Small","Large","Disabled"];export{m as Disabled,u as Error,g as Large,n as Primary,c as Secondary,p as Small,i as Success,l as Tertiary,d as Warning,L as __namedExportsOrder,_ as default};
