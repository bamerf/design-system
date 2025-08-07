(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[364],{6114:function(e,r,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/showcase",function(){return o(6502)}])},6502:function(e,r,o){"use strict";o.r(r),o.d(r,{default:function(){return K}});var t=o(5893),l=o(7294),n=o(1686),i=o(7846),d=o(3590),a=o(9987);let s={small:()=>`
    font-size: ${i.Tv.helper};
		padding: 4px 16px;
		
		& > svg {
			width: 16px;
			height: 16px;
		}
  `,large:()=>`
    font-size: ${i.Tv.h5};
		padding: 12px 32px;
		
		& > svg {
			width: 24px;
			height: 24px;
		}
  `,success:e=>{let{theme:r}=e;return`
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
  `},warning:e=>{let{theme:r}=e;return`
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
  `},error:e=>{let{theme:r}=e;return`
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
  `}},c=n.ZP.button.withConfig({componentId:"sc-4e84a98c-0"})(["font-size:",";padding:8px 32px;border-radius:2px;outline:none;cursor:pointer;user-select:none;transition:background-color 100ms linear,color 100ms linear;display:flex;justify-content:center;align-items:center;&:focus{outline:2px solid ",";outline-offset:2px;}&:hover{background-color:",";}&:active{background-color:",";}&:disabled{background-color:",";color:",";cursor:not-allowed;}& > svg{width:24px;height:24px;}"],i.Tv.paragraph,e=>{let{theme:r}=e;return r.focusOutline},e=>{let{theme:r}=e;return r.hover},e=>{let{theme:r}=e;return r.active},e=>{let{theme:r}=e;return r.disabled},e=>{let{theme:r}=e;return r.textColorWhite}),u=(0,n.ZP)(c).withConfig({componentId:"sc-4e84a98c-1"})(["background-color:",";border:none;color:white;",""],e=>{let{theme:r}=e;return r.color},(0,a.applyStyleModifiers)(s)),p=(0,n.ZP)(c).withConfig({componentId:"sc-4e84a98c-2"})(["background-color:",";padding:7px 31px;color:",";border:2px solid ",";&:hover{border:2px solid ",";background-color:",";color:",";}&:active{border-color:",";color:",";}&:disabled{border-color:",";background:",";color:",";}",""],i.n$[100],e=>{let{theme:r}=e;return r.color},e=>{let{theme:r}=e;return r.color},e=>{let{theme:r}=e;return r.hover},i.n$[100],e=>{let{theme:r}=e;return r.hover},e=>{let{theme:r}=e;return r.active},e=>{let{theme:r}=e;return r.active},e=>{let{theme:r}=e;return r.disabled},i.n$[100],e=>{let{theme:r}=e;return r.disabled},(0,a.applyStyleModifiers)(s)),h=(0,n.ZP)(c).withConfig({componentId:"sc-4e84a98c-3"})(["background:none;color:",";border:none;&:hover{color:",";background:none;}&:active{color:",";}&:disabled{background:none;color:",";}",""],e=>{let{theme:r}=e;return r.color},e=>{let{theme:r}=e;return r.hover},e=>{let{theme:r}=e;return r.active},e=>{let{theme:r}=e;return r.disabled},(0,a.applyStyleModifiers)(s)),b=(0,n.ZP)(c).withConfig({componentId:"sc-4e84a98c-4"})(["background-color:",";padding:6px 8px;border:none;color:white;",""],e=>{let{theme:r}=e;return r.color},(0,a.applyStyleModifiers)(s)),x=(0,n.ZP)(c).withConfig({componentId:"sc-4e84a98c-5"})(["background-color:",";padding:8px 0px;padding-left:18px;padding-right:24px;border:none;color:white;& > svg{width:18px;height:18px;margin-right:6px;}",""],e=>{let{theme:r}=e;return r.color},(0,a.applyStyleModifiers)(s));function g(e){let{type:r="primary",className:o,children:l,disabled:n,size:i="",status:d="",...a}=e,s=null;return"primary"===r&&(s=u),"secondary"===r&&(s=p),"tertiary"===r&&(s=h),"icon"===r&&(s=b),"labelledIcon"===r&&(s=x),(0,t.jsx)(s,{className:o,disabled:n,modifiers:[i,d],...a,children:l})}function f(e){let{className:r,label:o,size:n="",status:i="",disabled:d,checked:a,...s}=e,[c,u]=(0,l.useState)(a),p=e=>{"Enter"===e.key&&u(!c)};return(0,t.jsxs)(v,{className:r,modifiers:[n,i],checked:c,children:[(0,t.jsx)(w,{tabIndex:"-1",checked:c,...s}),(0,t.jsx)(k,{checked:c,tabIndex:"disabled"===i?"-1":"0",onClick:()=>u(!c),onKeyUp:e=>p(e),children:(0,t.jsx)(y,{viewBox:"0 0 24 24",children:(0,t.jsx)("polyline",{points:"22 4 8 20 1 14"})})}),o?(0,t.jsx)(C,{children:o}):null]})}let m={large:()=>`
		> div {
			width: 24px;
			height: 24px;
		}

		> label {
			font-size: ${i.Tv.h5}
		}
  `,error:e=>{let{theme:r,checked:o}=e;return`
	> div {
		border-color: ${o?r.color:r.status.errorColor}
	}

	> label {
		color: ${o?r.defaultGrey:r.status.errorColor}
	}

	&:hover {
		> div {
			border-color: ${o?r.color:r.status.errorColorHover}
		}
	}
	`},disabled:e=>{let{theme:r,checked:o}=e;return`
	
		cursor: not-allowed;

		> div {
			background-color: ${o?r.colorDisabled:r.disabledBackground};
			border-color: ${o?r.colorDisabled:r.disabled};
			cursor: not-allowed;
			pointer-events:none;
		}

		> label {
			color: ${r.disabled};
		}
	`}},v=n.ZP.div.withConfig({componentId:"sc-6d2d6806-0"})(["max-width:max-content;display:flex;flex-direction:row;align-items:center;",""],(0,a.applyStyleModifiers)(m)),w=n.ZP.input.attrs({type:"checkbox"}).withConfig({componentId:"sc-6d2d6806-1"})(["border:0;clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px;"]),y=n.ZP.svg.withConfig({componentId:"sc-6d2d6806-2"})(["fill:none;stroke:white;stroke-width:2px;"]),k=n.ZP.div.withConfig({componentId:"sc-6d2d6806-3"})(["width:18px;height:18px;background-color:",";border-radius:2px;border:2px solid ",";transition:color 100ms linear,background-color 100ms linear,border 100ms linear;cursor:pointer;&:hover{border:2px solid ",";}&:focus{outline:none;border:2px solid ","}&:active{border:2px solid ",";}&:disabled{background-color:",";border:2px solid ",";cursor:not-allowed;}","{visibility:",";}",""],e=>{let{theme:r,checked:o}=e;return o?r.color:r.backgroundWhite},e=>{let{theme:r,checked:o}=e;return o?r.color:r.defaultGrey},e=>{let{theme:r,checked:o}=e;return o?r.color:r.hover},e=>{let{theme:r,checked:o}=e;return o?r.color:r.hover},e=>{let{theme:r,checked:o}=e;return r.color},e=>{let{theme:r,checked:o}=e;return o?r.color:r.colorDisabled},e=>{let{theme:r,checked:o}=e;return o?r.color:"pink"},y,e=>e.checked?"visible":"hidden",(0,a.applyStyleModifiers)(m)),C=n.ZP.label.withConfig({componentId:"sc-6d2d6806-4"})(["display:inline-block;width:max-content;color:",";margin-left:8px;user-select:none;",""],e=>{let{theme:r,disabled:o}=e;return o?r.defaultGreyDisabled:r.defaultGrey},(0,a.applyStyleModifiers)(m));function j(e){let{className:r,label:o,value:n,type:i="text",size:d="",status:a="",width:s,placeholder:c="Placeholder",helperText:u="This field is required *"}=e,[p,h]=(0,l.useState)(n||"");return(0,t.jsxs)($,{className:r,modifiers:[d,a],value:p,width:s,children:[o?(0,t.jsx)(z,{children:o}):null,(0,t.jsx)(I,{type:i,value:p,placeholder:c,onChange:e=>h(e.target.value),disabled:"disabled"===a}),(0,t.jsx)(Z,{children:u})]})}let $=(0,n.ZP)("div").withConfig({componentId:"sc-14cece91-0"})(["display:flex;flex-direction:column;width:",";",""],e=>{let{width:r}=e;return r||"160px"},(0,a.applyStyleModifiers)({large:e=>{let{width:r}=e;return`
	width: ${r||"190px"};

	input {
			height: 44px;
			font-size: ${i.Tv.h5};
		}

		> label {
      font-size: ${i.Tv.h5};
		}

		> h6 {
			font-size: ${i.Tv.paragraph};
		}
	`},small:e=>{let{width:r}=e;return`
	width: ${r||"120px"};

	input {
			height: 24px;
			font-size: ${i.Tv.helper};
		}

		> label {
      font-size: ${i.Tv.helper};
      margin-bottom: 4px;
    }
    
    > h6 {
      font-size: ${i.Tv.copyright};
    }
	`},error:e=>{let{theme:r,value:o}=e;return`
		input:not(:hover):not(:focus) {
			border-color: ${o?r.lightGrey:r.status.errorColorHover}
		}
		> h6 {
			visibility: ${o?"hidden":"visible"};
		}
	`},disabled:e=>{let{theme:r}=e;return`
  
    cursor: not-allowed;

		input {
			background-color: ${r.disabledBackground};
			border-color: ${r.disabled};
			color: ${r.disabled};
			pointer-events: none;
			cursor: not-allowed;

		}

		> label {
			color: ${r.disabled};
		}
	`}})),I=(0,n.ZP)("input").withConfig({componentId:"sc-14cece91-1"})(["width:inherit;height:33px;background-color:white;border:1px solid ",";border-radius:2px;transition:all 200ms ease-out;outline:none;padding-left:8px;&:hover{border-color:",";}&:focus{border-color:",";}&::placeholder{color:",";}"],e=>{let{theme:r}=e;return r.lightGrey},e=>{let{theme:r}=e;return r.hover},e=>{let{theme:r}=e;return r.color},e=>{let{theme:r}=e;return r.placeholder}),z=(0,n.ZP)("label").withConfig({componentId:"sc-14cece91-2"})(["display:inline-block;font-size:",";width:max-content;color:",";margin-bottom:8px;user-select:none;"],i.Tv.paragraph,e=>{let{theme:r,disabled:o}=e;return o?r.defaultGreyDisabled:r.defaultGrey}),Z=(0,n.ZP)("h6").withConfig({componentId:"sc-14cece91-3"})(["font-size:",";width:max-content;color:",";margin-top:4px;user-select:none;visibility:hidden;"],i.Tv.helper,e=>{let{theme:r}=e;return r.status.errorColorHover});function P(e){let{className:r,label:o,size:n="",status:i="",checked:d,...a}=e,[s,c]=(0,l.useState)(d),u=e=>{"Enter"===e.key&&c(!0)};return(0,t.jsxs)(S,{className:r,modifiers:[n,i],checked:s,children:[(0,t.jsx)(B,{tabIndex:"-1",checked:s,...a}),(0,t.jsx)(D,{tabIndex:"disabled"===i?"-1":"0",checked:s,onClick:()=>c(!0),onKeyUp:e=>u(e)}),o?(0,t.jsx)(T,{children:o}):null]})}let G={large:()=>`
		> div {
			width: 24px;
			height: 24px;

			:after {
				width: 8px;
				height: 8px;
			}
		}

		> label {
			font-size: ${i.Tv.h5}
		}

  `,error:e=>{let{theme:r,checked:o}=e;return`
	> div {
		border-color: ${o?r.color:r.status.errorColor}
	}

	> label {
		color: ${o?r.defaultGrey:r.status.errorColor}
	}

	&:hover {
		> div {
			border-color: ${o?r.color:r.status.errorColorHover}
		}
	}
	`},disabled:e=>{let{theme:r,checked:o}=e;return`

		cursor: not-allowed;

		> div {
			background-color: ${o?r.colorDisabled:r.disabledBackground};
			border-color: ${o?r.colorDisabled:r.disabled};
			cursor: not-allowed;
			pointer-events:none;

			:after {
				background-color: ${o?"white":r.disabledBackground};
			}
		}

		> label {
			color: ${r.disabled};
		}
	`}},S=n.ZP.div.withConfig({componentId:"sc-c18720f8-0"})(["max-width:max-content;display:flex;flex-direction:row;align-items:center;",""],(0,a.applyStyleModifiers)(G)),B=n.ZP.input.attrs({type:"checkbox"}).withConfig({componentId:"sc-c18720f8-1"})(["border:0;clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px;"]),D=n.ZP.div.withConfig({componentId:"sc-c18720f8-2"})(["display:flex;justify-content:center;align-items:center;width:18px;height:18px;background-color:",";border-radius:50%;border:2px solid ",";transition:color 100ms linear,background-color 100ms linear,border 100ms linear;cursor:pointer;&:hover{border:2px solid ",";}&:active{border:2px solid ",";}&:focus{outline:none;border:2px solid ","}&:disabled{background-color:",";border:2px solid ",';cursor:not-allowed;}&::after{content:"";width:6px;height:6px;-moz-border-radius:7.5px;-webkit-border-radius:7.5px;border-radius:7.5px;background-color:white;}',""],e=>{let{theme:r,checked:o}=e;return o?r.color:r.backgroundWhite},e=>{let{theme:r,checked:o}=e;return o?r.color:r.defaultGrey},e=>{let{theme:r,checked:o}=e;return o?r.color:r.hover},e=>{let{theme:r,checked:o}=e;return r.color},e=>{let{theme:r,checked:o}=e;return o?r.color:r.hover},e=>{let{theme:r,checked:o}=e;return o?r.color:r.colorDisabled},e=>{let{theme:r,checked:o}=e;return o?r.color:"pink"},(0,a.applyStyleModifiers)(G)),T=n.ZP.label.withConfig({componentId:"sc-c18720f8-3"})(["display:inline-block;width:max-content;color:",";margin-left:8px;user-select:none;",""],e=>{let{theme:r,disabled:o}=e;return o?r.defaultGreyDisabled:r.defaultGrey},(0,a.applyStyleModifiers)(G));function E(e){let{min:r=0,max:o=100,className:n,value:i=0,size:d="",status:a="",label:s}=e,[c,u]=(0,l.useState)(i);return(0,t.jsxs)(H,{className:n,modifiers:[d,a],min:r,value:i,children:[(0,t.jsx)(N,{children:s}),(0,t.jsxs)(M,{children:[(0,t.jsx)(F,{min:Number(r),max:o,value:Number(c),onChange:e=>u(e.target.value),tabIndex:"disabled"===a?"-1":"0"}),(0,t.jsx)(O,{children:c})]})]})}let H=n.ZP.div.withConfig({componentId:"sc-898b42ce-0"})(["",""],(0,a.applyStyleModifiers)({large:()=>`
		label {
			font-size: ${i.Tv.h5};
		}

  `,disabled:e=>{let{theme:r,min:o,value:t}=e;return`

		cursor: not-allowed;

		> div {
			cursor: not-allowed;
			pointer-events: none;
		}

		input {
			background-color: ${r.disabled};
			&::-webkit-slider-thumb {
				border: 3px solid ${t===o?r.disabled:r.colorDisabled};
				background-color: ${r.disabledBackground};
			}
			&::-moz-range-thumb {
				border: 3px solid ${t===o?r.disabled:r.colorDisabled};
				background-color: ${r.disabledBackground};
			}
		}

		label {
			color: ${r.disabled};
		}
	`}})),M=n.ZP.div.withConfig({componentId:"sc-898b42ce-1"})(["display:flex;align-items:center;"]),F=n.ZP.input.attrs(()=>({type:"range"})).withConfig({componentId:"sc-898b42ce-2"})(["max-width:250px;width:100%;height:3px;-webkit-appearance:none;border-radius:50px;background-color:",";outline:none;transition:all 100ms linear;cursor:pointer;&:hover{background-color:",";}&:active{background-color:",";&::-webkit-slider-thumb{background-color:",";border:0px solid ",";}&::-moz-range-thumb{background-color:",";border:0px solid ",";}}&:focus{background-color:",";&::-webkit-slider-thumb{background-color:",";border:3px solid ",";}&::-moz-range-thumb{background-color:",";border:3px solid ",";}}&::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;position:relative;z-index:1;width:18px;height:18px;border-radius:50%;border:3px solid ",";background-color:white;cursor:pointer;-webkit-transition:100ms;transition:all 100ms linear;&:hover{border-color:",";}&:active{background-color:",";border:3px solid ",";}}&::-moz-range-thumb{width:14px;height:14px;position:relative;z-index:1;border-radius:50%;border:3px solid ",";background-color:white;cursor:pointer;-webkit-transition:100ms;transition:all 100ms linear;&:hover{border-color:",";}&:active{background-color:",";border:3px solid ",";}}"],e=>{let{theme:r}=e;return r.lightGrey},e=>{let{theme:r}=e;return r.defaultGrey},e=>{let{theme:r}=e;return r.defaultGrey},e=>{let{theme:r}=e;return r.color},e=>{let{theme:r}=e;return r.color},e=>{let{theme:r}=e;return r.color},e=>{let{theme:r}=e;return r.color},e=>{let{theme:r}=e;return r.defaultGrey},e=>{let{theme:r}=e;return r.color},e=>{let{theme:r}=e;return r.color},e=>{let{theme:r}=e;return r.color},e=>{let{theme:r}=e;return r.color},e=>{let{theme:r,min:o,value:t}=e;return t===o?r.lightGrey:r.color},e=>{let{theme:r,min:o,value:t}=e;return t===o?r.defaultGrey:r.hover},e=>{let{theme:r,min:o,value:t}=e;return t===o?r.defaultGrey:r.color},e=>{let{theme:r,min:o,value:t}=e;return t===o?r.defaultGrey:r.color},e=>{let{theme:r,min:o,value:t}=e;return t===o?r.lightGrey:r.color},e=>{let{theme:r,min:o,value:t}=e;return t===o?r.defaultGrey:r.hover},e=>{let{theme:r,min:o,value:t}=e;return t===o?r.defaultGrey:r.color},e=>{let{theme:r,min:o,value:t}=e;return t===o?r.defaultGrey:r.color}),O=n.ZP.p.withConfig({componentId:"sc-898b42ce-3"})(["color:",";margin-left:12px;user-select:none;"],e=>{let{theme:r}=e;return r.lightGrey}),N=n.ZP.label.withConfig({componentId:"sc-898b42ce-4"})(["display:inline-block;color:",";margin-left:5px;margin-bottom:8px;user-select:none;"],e=>{let{theme:r}=e;return r.defaultGrey});function W(e){let{className:r,label:o,size:n="",status:i="",checked:d}=e,[a,s]=(0,l.useState)(d),c=e=>{"Enter"===e.key&&s(!a)};return(0,t.jsxs)(A,{className:r,modifiers:[n,i],children:[(0,t.jsx)(q,{tabIndex:"-1",id:"checkbox",type:"checkbox",checked:a}),(0,t.jsx)(_,{tabIndex:"disabled"===i?"-1":"0",htmlFor:"switch",checked:a,onClick:()=>s(!a),onKeyUp:e=>c(e)}),o?(0,t.jsx)(L,{children:o}):null]})}let A=n.ZP.div.withConfig({componentId:"sc-5eb3a583-0"})(["position:relative;display:flex;align-items:center;width:max-content;",""],(0,a.applyStyleModifiers)({large:()=>`
		> label {
			font-size: ${i.Tv.h5}
		}
  `,disabled:e=>{let{theme:r}=e;return`
  
    cursor: not-allowed;
  
		> div {
      cursor: not-allowed;
      pointer-events:none;
      background: ${r.disabled};
      :after {
        background: ${r.disabledBackground};
      }
    }
    
    > input {
      :checked + ${_} {
        background: ${r.colorDisabled};
      }

      cursor: not-allowed;
      pointer-events:none;
    }

		> label {
			color: ${r.disabled};
		}
	`}})),_=n.ZP.div.withConfig({componentId:"sc-5eb3a583-1"})(["position:absolute;top:0;left:0;width:40px;height:24px;border-radius:15px;background:",';cursor:pointer;&::after{content:"";display:block;border-radius:50%;width:18px;height:18px;margin:3px;background:white;transition:0.2s;}'],e=>{let{theme:r}=e;return r.defaultGrey}),q=n.ZP.input.withConfig({componentId:"sc-5eb3a583-2"})(["opacity:0;z-index:1;border-radius:15px;width:40px;height:24px;cursor:pointer;&:checked + ","{background:",';&::after{content:"";display:block;border-radius:50%;width:18px;height:18px;margin-left:19px;transition:0.2s;}}'],_,e=>{let{theme:r}=e;return r.color}),L=n.ZP.label.withConfig({componentId:"sc-5eb3a583-3"})(["display:inline-block;width:max-content;color:",";margin-left:12px;user-select:none;"],e=>{let{theme:r,disabled:o}=e;return o?r.defaultGreyDisabled:r.defaultGrey});function K(){return(0,t.jsxs)(n.f6,{theme:i.uH,children:[(0,t.jsx)(i.ZL,{}),(0,t.jsxs)("div",{style:{padding:"40px",maxWidth:"1200px",margin:"0 auto"},children:[(0,t.jsx)("h1",{children:"LeadChat Design System - Component Showcase"}),(0,t.jsxs)("section",{style:{marginBottom:"40px"},children:[(0,t.jsx)("h2",{children:"Buttons"}),(0,t.jsxs)("div",{style:{display:"flex",gap:"10px",flexWrap:"wrap"},children:[(0,t.jsx)(g,{modifiers:["primary"],children:"Primary Button"}),(0,t.jsx)(g,{modifiers:["secondary"],children:"Secondary Button"}),(0,t.jsx)(g,{modifiers:["small"],children:"Small Button"}),(0,t.jsx)(g,{modifiers:["large"],children:"Large Button"})]})]}),(0,t.jsxs)("section",{style:{marginBottom:"40px"},children:[(0,t.jsx)("h2",{children:"Select Component"}),(0,t.jsxs)("div",{style:{display:"flex",gap:"20px",flexWrap:"wrap"},children:[(0,t.jsx)(d.Z,{label:"Default Select",items:["Option 1","Option 2","Option 3"]}),(0,t.jsx)(d.Z,{label:"Disabled Select",status:"disabled",items:["Option 1","Option 2","Option 3"]}),(0,t.jsx)(d.Z,{label:"Large Select",size:"large",items:["Option 1","Option 2","Option 3"]})]})]}),(0,t.jsxs)("section",{style:{marginBottom:"40px"},children:[(0,t.jsx)("h2",{children:"Input Fields"}),(0,t.jsxs)("div",{style:{display:"flex",gap:"20px",flexWrap:"wrap"},children:[(0,t.jsx)(j,{label:"Default Input",placeholder:"Enter text..."}),(0,t.jsx)(j,{label:"Error Input",status:"error",placeholder:"Error state"}),(0,t.jsx)(j,{label:"Disabled Input",status:"disabled",placeholder:"Disabled"})]})]}),(0,t.jsxs)("section",{style:{marginBottom:"40px"},children:[(0,t.jsx)("h2",{children:"Checkboxes"}),(0,t.jsxs)("div",{style:{display:"flex",gap:"20px",flexWrap:"wrap"},children:[(0,t.jsx)(f,{label:"Default Checkbox"}),(0,t.jsx)(f,{label:"Checked Checkbox",checked:!0}),(0,t.jsx)(f,{label:"Disabled Checkbox",disabled:!0})]})]}),(0,t.jsxs)("section",{style:{marginBottom:"40px"},children:[(0,t.jsx)("h2",{children:"Radio Buttons"}),(0,t.jsxs)("div",{style:{display:"flex",gap:"20px",flexWrap:"wrap"},children:[(0,t.jsx)(P,{label:"Option 1",name:"radio-group"}),(0,t.jsx)(P,{label:"Option 2",name:"radio-group"}),(0,t.jsx)(P,{label:"Option 3",name:"radio-group"})]})]}),(0,t.jsxs)("section",{style:{marginBottom:"40px"},children:[(0,t.jsx)("h2",{children:"Slider"}),(0,t.jsx)("div",{style:{width:"300px"},children:(0,t.jsx)(E,{min:0,max:100,defaultValue:50})})]}),(0,t.jsxs)("section",{style:{marginBottom:"40px"},children:[(0,t.jsx)("h2",{children:"Switch"}),(0,t.jsxs)("div",{style:{display:"flex",gap:"20px",flexWrap:"wrap"},children:[(0,t.jsx)(W,{label:"Default Switch"}),(0,t.jsx)(W,{label:"Checked Switch",checked:!0}),(0,t.jsx)(W,{label:"Disabled Switch",disabled:!0})]})]})]})]})}},3590:function(e,r,o){"use strict";o.d(r,{Z:function(){return s}});var t=o(5893),l=o(7294),n=o(1686),i=o(9987),d=o(7846);let a=(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"black",width:"24px",height:"24px",children:[(0,t.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,t.jsx)("path",{d:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"})]});function s(e){let{className:r,label:o,size:n="",status:i="",placeholder:d="Select",items:s=["No options"],selectedOption:f=null}=e,[m,v]=(0,l.useState)(!1),[w,y]=(0,l.useState)(f),k=(0,l.useRef)(null),C=(0,l.useRef)(null),j=(e,r)=>{"Enter"===e.key&&m&&(y(e.target.value),console.log(w)),"Escape"===e.key&&m&&v(!1)},$=e=>{y(e),v(!1)},I=e=>{C.current.contains(e.target||k.current.contains(e.target))||v(!1)};return(0,l.useEffect)(()=>{m?document.addEventListener("mousedown",I):document.removeEventListener("mousedown",I)},[m]),(0,t.jsxs)(c,{className:r,modifiers:[n,i],selected:w,onKeyUp:j,children:[o?(0,t.jsx)(x,{children:o}):null,(0,t.jsxs)(u,{onClick:()=>{v(!m)},open:m,selected:w,"aria-haspopup":"true","arial-controls":"dropdown1",tabIndex:"0",ref:k,children:[w||d," ",a]}),(0,t.jsx)(p,{open:m,children:(0,t.jsx)(h,{id:"dropdown1",role:"list",open:m,ref:C,children:"disabled"!==i?s.map((e,r)=>(0,t.jsx)(b,{tabIndex:"0",onClick:()=>$(e),onKeyUp:r=>j(r,e),children:e},r)):null})}),(0,t.jsx)(g,{children:"Please select an option"})]})}let c=(0,n.ZP)("div").withConfig({componentId:"sc-5f0a3397-0"})(["width:144px;",""],(0,i.applyStyleModifiers)({large:()=>`
	width: 190px;

	div:first-of-type {
			height: 44px;
			font-size: ${d.Tv.h5}
		}

		li {
			padding-top: 12px;
			padding-bottom:12px;
			font-size: ${d.Tv.paragraph};
		}

		> label {
			font-size: ${d.Tv.h5}
		}

		> h6 {
			font-size: ${d.Tv.paragraph}
		}
	`,small:()=>`
	width: 120px;

	div:first-of-type {
			height: 24px;
			font-size: ${d.Tv.helper}
		}

		li {
			padding-top: 8px;
			padding-bottom:8px;
			font-size: ${d.Tv.helper}
		}

		> label {
			font-size: ${d.Tv.helper}
		}
	`,error:e=>{let{theme:r,selected:o}=e;return`
		div:first-of-type:not(:hover) {
			border-color: ${o?r.lightGrey:r.status.errorColorHover}
		}
		> h6 {
			visibility: ${o?"hidden":"visible"};
		}
	`},disabled:e=>{let{theme:r}=e;return`

		cursor: not-allowed;

		button:first-of-type {
			background-color: ${r.disabledBackground};
			border-color: ${r.disabled};
			color: ${r.disabled};
			pointer-events: none;
			cursor: not-allowed;

		  svg {
				fill: ${r.disabled};
			}
		}

		> label {
			color: ${r.disabled};
		}
	`}})),u=(0,n.ZP)("button").withConfig({componentId:"sc-5f0a3397-1"})(["display:flex;align-items:center;justify-content:space-between;height:33px;width:100%;border:1px solid ",";color:",";border-radius:2px 2px ",";padding-left:12px;background:white;transition:all 500ms linear;cursor:pointer;user-select:none;> svg{margin-right:8px;fill:",";:hover{fill:",";transition:all 100ms linear;}}:hover{border-color:",";transition:all 100ms linear;}:focus{outline:0;border-color:",";transition:all 100ms linear;svg{fill:",";}}:active{border-color:",";}"],e=>{let{theme:r,open:o}=e;return o?r.color:r.lightGrey},e=>{let{theme:r,selected:o}=e;return o?r.defaultGrey:r.lightGrey},e=>{let{open:r}=e;return r?"0px 0px":"2px 2px"},e=>{let{theme:r}=e;return r.defaultGrey},e=>{let{theme:r,open:o}=e;return o?r.color:r.hover},e=>{let{theme:r}=e;return r.hover},e=>{let{theme:r}=e;return r.color},e=>{let{theme:r,open:o}=e;return o?r.color:r.hover},e=>{let{theme:r}=e;return r.color}),p=(0,n.ZP)("div").withConfig({componentId:"sc-5f0a3397-2"})(["position:absolute;width:inherit;"]),h=(0,n.ZP)("ul").withConfig({componentId:"sc-5f0a3397-3"})(["background:#ffffff;border:1px solid ",";border-top:",";box-sizing:border-box;border-radius:0px 0px 2px 2px;transform:",";opacity:",";transform-origin:top center;transition:all 100ms linear;"],e=>{let{theme:r}=e;return r.color},e=>{let{open:r}=e;return r?"none":null},e=>{let{open:r}=e;return r?"scale(1)":"scale(1, 0)"},e=>{let{open:r}=e;return r?1:0}),b=(0,n.ZP)("li").withConfig({componentId:"sc-5f0a3397-4"})(["padding-top:8px;padding-bottom:8px;padding-left:12px;font-size:",";color:",";border-bottom:1px solid ",";list-style:none;user-select:none;&:last-child{border-bottom:none;}:hover{cursor:pointer;background-color:",";}:focus{outline:0;background-color:",";}"],d.Tv.helper,e=>{let{theme:r}=e;return r.defaultGrey},e=>{let{theme:r}=e;return r.disabledBackground},e=>{let{theme:r}=e;return r.disabledBackground},e=>{let{theme:r}=e;return r.disabledBackground}),x=(0,n.ZP)("label").withConfig({componentId:"sc-5f0a3397-5"})(["display:inline-block;font-size:",";width:max-content;color:",";margin-bottom:8px;user-select:none;"],d.Tv.paragraph,e=>{let{theme:r,disabled:o}=e;return o?r.defaultGreyDisabled:r.defaultGrey}),g=(0,n.ZP)("h6").withConfig({componentId:"sc-5f0a3397-6"})(["font-size:",";width:max-content;color:",";margin-top:4px;user-select:none;visibility:hidden;"],d.Tv.helper,e=>{let{theme:r}=e;return r.status.errorColorHover})},7846:function(e,r,o){"use strict";o.d(r,{ZL:function(){return b},$_:function(){return u},uH:function(){return c},n$:function(){return l},Tv:function(){return s}});let t={100:"#C0E585",200:"#97CA3D",300:"#85BF31",400:"#52850A",500:"#344718"},l={100:"#FFFFFF",200:"#F4F5F7",300:"#D6D6D6",400:"#A7A7AF",500:"#89898E",600:"#000000"},n={100:"#529E66",200:"#367B48",300:"#276738"},i={100:"#E5BF29",200:"#D1AA29",300:"#B79326"},d={100:"#D0454C",200:"#B54248",300:"#95353A"},a='"Lato", monospace',s={h1:"2.488rem",h2:"2.074rem",h3:"1.728rem",h4:"1.44rem",h5:"1.2rem",paragraph:"1rem",helper:"0.833rem",copyright:"0.694rem"},c={colorDisabled:t[100],hover:t[200],focusOutline:t[200],color:t[300],focus:t[300],active:t[400],backgroundWhite:l[100],disabledBackground:l[200],disabled:l[300],placeholder:l[300],lightGrey:l[400],defaultGrey:l[500],textColorBlack:l[600],textColorWhite:l[100],primaryFont:a,status:{warningColor:i[200],warningColorHover:i[100],warningColorActive:i[300],errorColor:d[200],errorColorHover:d[100],errorColorActive:d[300],successColor:n[200],successColorHover:n[100],successColorActive:n[300]}},u={};var p=o(1686),h=o(6637);let b=(0,p.vJ)(["",";html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block;}body{line-height:1;}ol,ul{list-style:none;}blockquote,q{quotes:none;}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none;}table{border-collapse:collapse;border-spacing:0;}html{font-size:14px;box-sizing:border-box;}*,*:before,*:after{box-sizing:inherit;}body{margin:10px;font-family:","}p{margin:0}main{width:90%;margin:0 auto;}"],h.Fv,a)}},function(e){e.O(0,[8,888,774,179],function(){return e(e.s=6114)}),_N_E=e.O()}]);