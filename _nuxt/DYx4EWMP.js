import{d as i,i as c,f as m,c as P,j as r,T as h,u as d,Z as v,n as b,S as L,p as k}from"./Ds7YRkWK.js";import{u as g,a as S,b as j,c as R,l,d as T,_,P as x,L as A}from"./DUbJkhh_.js";const O=i({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},async setup(e,o){const t=await l[e.name]().then(a=>a.default||a);return()=>r(t,e.layoutProps,o.slots)}}),N=i({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},setup(e,o){const t=g(),a=c(x),n=a===S()?j():a,u=m(()=>{let s=d(e.name)??n.meta.layout??"default";return s&&!(s in l)&&e.fallback&&(s=d(e.fallback)),s}),y=P();o.expose({layoutRef:y});const p=t.deferHydration();if(t.isHydrating){const s=t.hooks.hookOnce("app:error",p);R().beforeEach(s)}return()=>{const s=u.value&&u.value in l,f=n.meta.layoutTransition??T;return _(h,s&&f,{default:()=>r(L,{suspensible:!0,onResolve:()=>{b(p)}},{default:()=>r(B,{layoutProps:v(o.attrs,{ref:y}),key:u.value||void 0,name:u.value,shouldProvide:!e.name,hasTransition:!!f},o.slots)})}).default()}}}),B=i({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(e,o){const t=e.name;return e.shouldProvide&&k(A,{isCurrent:a=>t===(a.meta.layout??"default")}),()=>{var a,n;return!t||typeof t=="string"&&!(t in l)?(n=(a=o.slots).default)==null?void 0:n.call(a):r(O,{key:t,layoutProps:e.layoutProps,name:t},o.slots)}}});export{N as _};
