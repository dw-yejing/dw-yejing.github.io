import{s as i}from"./request-CkIZ1nTb.js";import{r as d,o as u,a as s,F as _,d as f,u as h,h as a,b as n,e as p,s as m,g as v,t as g}from"./index-CddbvUne.js";const k={list:"/tools/list"};function C(){return i({url:k.list,method:"get"})}const w={class:"container"},x=["onClick"],B=["src"],T={__name:"Tool",setup(D){let e=d([]);u(()=>{l()});function l(){C().then(t=>{e.value=t.data.data,console.log(e.value)})}function c(t){window.location.href=t}return(t,y)=>{const r=v("el-card");return a(),s("div",w,[(a(!0),s(_,null,f(h(e),o=>(a(),s("div",{key:o.title,class:"card"},[n("div",{onClick:F=>c(o.url)},[p(r,null,{default:m(()=>[n("img",{src:o.icon,class:"icon"},null,8,B),n("h3",null,g(o.title),1)]),_:2},1024)],8,x)]))),128))])}}};export{T as default};
