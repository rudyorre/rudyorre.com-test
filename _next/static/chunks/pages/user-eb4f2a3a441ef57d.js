(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[235],{8948:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user",function(){return t(2978)}])},2978:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return N}});var i=t(5893),r=t(1973),o=t(7294),l=t(7297),a=t(7379);function s(){let n=(0,l.Z)(["\n  max-width: 1040px;\n  background: #0F1624;\n  padding: 0rem;\n  list-style:none;\n  display: flex;\n  justify-content: space-between; \n  /* overflow-x: hidden; */\n\n  margin-left: 32px;\n  &:first-of-type{\n    margin-left: 0px;\n  }\n\n  margin-bottom: 80px;\n\n  //remove scrollbar\n  scrollbar-width: none;  \n   &::-webkit-scrollbar {\n     display: none;\n   }\n\n  @media "," {\n    overflow-x: scroll;\n    -webkit-overflow-scrolling: touch;\n    scroll-snap-type: x mandatory;\n    touch-action: pan-x;\n    justify-content: initial;\n    margin-bottom: 8px;\n  }\n"]);return s=function(){return n},n}function d(){let n=(0,l.Z)(["\n  @media "," {\n    display: flex;\n    min-width: ","\n  }\n"]);return d=function(){return n},n}function c(){let n=(0,l.Z)(["\n  background: #0F1624;\n  border-radius: 3px;\n  max-width: 196px;\n\n  @media "," {\n    max-width: 124px;\n  }\n  \n  @media "," {\n    margin-left: 32px;\n    min-width: 120px;\n    background: #0E131F;\n    padding: 4px;\n    align-content: start;\n    scroll-snap-align: start;\n    border-radius: 3px;\n    overflow: visible;\n    position: relative;\n    height: fit-content;\n    \n    ","; \n  }\n"]);return c=function(){return n},n}function u(){let n=(0,l.Z)(["\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 32px;\n  letter-spacing: 0.02em;\n  display: flex;\n  /* This gradient is different due to the size of the Title container, it must transition sooner to be visible on the text */\n  background: linear-gradient(121.57deg, #FFFFFF 10%, rgba(255, 255, 255, 0.66) 30.15%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  margin-bottom: 8px;\n\n  @media "," {\n    font-size: 20px;\n    line-height: 28px;\n    margin-bottom: 4px;\n  }\n  \n  @media "," {\n    font-size: 16px;\n    line-height: 24px;\n  }\n"]);return u=function(){return n},n}function p(){let n=(0,l.Z)(["\n  margin-left: 21px;\n  -webkit-mask-image: linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0));\n  width: 100%;\n\n  @media "," {\n    -webkit-mask-image: none;\n    margin-left: 16px;\n    overflow: visible;\n  }\n"]);return p=function(){return n},n}function h(){let n=(0,l.Z)(["\n  font-size: 14px;\n  line-height: 22px;\n  letter-spacing: 0.02em;\n  color: rgba(255, 255, 255, 0.75);\n  padding-right: 16px;\n\n  @media "," {\n    font-size: 12px;\n    line-height: 18px;\n    padding-right: 32px;\n  }\n  @media "," {\n    font-size: 10px;\n    line-height: 16px;\n    padding-right: 0;\n  }\n"]);return h=function(){return n},n}function f(){let n=(0,l.Z)(["\n  width: 288px;\n\n  display: none;\n  visibility: hidden;\n\n  @media "," {\n    display: flex;\n    visibility: visible;\n    margin-bottom: 48px;\n  }\n"]);return f=function(){return n},n}function x(){let n=(0,l.Z)(["\n  box-sizing: border-box;\n  background: none;\n  padding: 4px;\n  border: none;\n  cursor: pointer;\n  margin-right: 4px;\n  opacity: ",";\n  transform: ",";\n\n  &:focus {\n    outline: none;\n  }\n"]);return x=function(){return n},n}function m(){let n=(0,l.Z)(["\n  background-color: white;\n  border-radius: 10px;\n  margin: auto;\n  width: 3px;\n  height: 3px;\n"]);return m=function(){return n},n}let g=a.default.ul(s(),n=>n.theme.breakpoints.sm),b=a.default.div(d(),n=>n.theme.breakpoints.sm,n=>{let{final:e}=n;return e?"120%;":"min-content"}),w=a.default.div(c(),n=>n.theme.breakpoints.md,n=>n.theme.breakpoints.sm,n=>n.active===n.index?"opacity: 1":"opacity: 0.5"),v=a.default.h4(u(),n=>n.theme.breakpoints.md,n=>n.theme.breakpoints.sm),k=a.default.svg(p(),n=>n.theme.breakpoints.sm),j=a.default.p(h(),n=>n.theme.breakpoints.md,n=>n.theme.breakpoints.sm),y=a.default.div(f(),n=>n.theme.breakpoints.sm),_=a.default.button(x(),n=>n.active===n.index?"1":".33",n=>n.active===n.index?"scale(1.6)":"scale(1)"),Z=a.default.div(m());var F=t(6234),z=t(9458);let C=z.Gm.length,E=()=>{let[n,e]=(0,o.useState)(0),t=(0,o.useRef)(),r=(n,e)=>n.scrollTo({left:e,behavior:"smooth"}),l=(n,e)=>{if(n.preventDefault(),t.current){let n=Math.floor(.7*t.current.scrollWidth*(e/z.Gm.length));r(t.current,n)}},a=()=>{if(t.current){let n=Math.round(t.current.scrollLeft/(.7*t.current.scrollWidth)*z.Gm.length);e(n)}};return(0,o.useEffect)(()=>{let n=()=>{r(t.current,0)};window.addEventListener("resize",n)},[]),(0,i.jsxs)(F.$0,{id:"about",children:[(0,i.jsx)(F.NZ,{children:"About Me"}),(0,i.jsx)(F.r4,{children:"Blah blah blah"}),(0,i.jsx)(g,{ref:t,onScroll:a,children:(0,i.jsx)(i.Fragment,{children:z.Gm.map((e,t)=>(0,i.jsx)(b,{final:t===C-1,children:(0,i.jsxs)(w,{index:t,id:"carousel__item-".concat(t),active:n,onClick:n=>l(n,t),children:[(0,i.jsxs)(v,{children:[e.year,(0,i.jsxs)(k,{width:"208",height:"6",viewBox:"0 0 208 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z",fill:"url(#paint0_linear)","fill-opacity":"0.33"}),(0,i.jsx)("defs",{children:(0,i.jsxs)("linearGradient",{id:"paint0_linear",x1:"-4.30412e-10",y1:"0.5",x2:"208",y2:"0.500295",gradientUnits:"userSpaceOnUse",children:[(0,i.jsx)("stop",{"stop-color":"white"}),(0,i.jsx)("stop",{offset:"0.79478","stop-color":"white","stop-opacity":"0"})]})})]})]}),(0,i.jsx)(j,{children:e.text})]})},t))})}),(0,i.jsx)(y,{children:z.Gm.map((e,t)=>(0,i.jsx)(_,{index:t,active:n,onClick:n=>l(n,t),type:"button",children:(0,i.jsx)(Z,{active:n})},t))}),(0,i.jsx)(F.dv,{})]})},G=()=>(0,i.jsxs)(r.A,{children:[(0,i.jsx)("h1",{children:"Hello"}),(0,i.jsx)(E,{})]});var N=G}},function(n){n.O(0,[617,866,556,949,157,774,888,179],function(){return n(n.s=8948)}),_N_E=n.O()}]);