import{S as p,i as h,s as _,e as g,w as y,c as v,b as w,x as c,f as b,h as d,j as z,k as f,z as B,y as C,u as m,A as j}from"./index-8bb8d4e8.js";function V(e){let t,l,s,a,r,u;return{c(){t=g("button"),l=y(`Build test

	`),s=y(e[1]),this.h()},l(i){t=v(i,"BUTTON",{type:!0,class:!0,style:!0});var n=w(t);l=c(n,`Build test

	`),s=c(n,e[1]),n.forEach(b),this.h()},h(){d(t,"type","button"),d(t,"class",a=["storybook-button",`storybook-button--${e[0]}`,e[3]].join(" ")),d(t,"style",e[2])},m(i,n){z(i,t,n),f(t,l),f(t,s),r||(u=B(t,"click",e[6]),r=!0)},p(i,[n]){n&2&&C(s,i[1]),n&9&&a!==(a=["storybook-button",`storybook-button--${i[0]}`,i[3]].join(" "))&&d(t,"class",a),n&4&&d(t,"style",i[2])},i:m,o:m,d(i){i&&b(t),r=!1,u()}}}function S(e,t,l){let s,a,{primary:r=!1}=t,{backgroundColor:u=void 0}=t,{size:i="medium"}=t,{label:n=""}=t;function k(o){j.call(this,e,o)}return e.$$set=o=>{"primary"in o&&l(4,r=o.primary),"backgroundColor"in o&&l(5,u=o.backgroundColor),"size"in o&&l(0,i=o.size),"label"in o&&l(1,n=o.label)},e.$$.update=()=>{e.$$.dirty&16&&l(3,s=r?"storybook-button--primary":"storybook-button--secondary"),e.$$.dirty&32&&l(2,a=u?`background-color: ${u}`:"")},[i,n,a,s,r,u,k]}class T extends p{constructor(t){super(),h(this,t,S,V,_,{primary:4,backgroundColor:5,size:0,label:1})}}T.__docgen={version:3,name:"Button.svelte",data:[{visibility:"public",description:null,keywords:[],name:"primary",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{visibility:"public",description:null,keywords:[],name:"backgroundColor",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{visibility:"public",description:null,keywords:[],name:"size",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"medium"},{visibility:"public",description:null,keywords:[],name:"label",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""}],computed:[],methods:[],components:[],description:null,keywords:[],events:[{keywords:[],visibility:"public",description:"",name:"click",parent:"button",modificators:[],locations:null}],slots:[],refs:[]};export{T as B};
//# sourceMappingURL=Button-f3d2174c.js.map
