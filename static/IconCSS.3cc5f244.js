import{k as m,N as _,y as f,z as c,o as d,c as I,a9 as v,_ as x}from"./entry.9d4d310f.js";import{r as S}from"./index.b8fe2cb5.js";const y=m({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(u){_(e=>({efdb04fa:p.value}));const t=f(),o=u,l=c(()=>{var e,n;return(n=(e=t.nuxtIcon)==null?void 0:e.aliases)!=null&&n[o.name]?t.nuxtIcon.aliases[o.name]:o.name}),r=c(()=>S(l.value)),p=c(()=>{var s,a;const e=(a=(s=t.nuxtIcon)==null?void 0:s.iconifyApiOptions)==null?void 0:a.url;if(e)try{new URL(e)}catch(z){console.warn("Nuxt IconCSS: Invalid custom Iconify API URL");return}const n=e||"https://api.iconify.design";return"url('".concat(n,"/").concat(r.value.prefix,"/").concat(r.value.name,".svg')")}),i=c(()=>{var n,s,a;if(!o.size&&typeof((n=t.nuxtIcon)==null?void 0:n.size)=="boolean"&&!((s=t.nuxtIcon)!=null&&s.size))return;const e=o.size||((a=t.nuxtIcon)==null?void 0:a.size)||"1em";return String(Number(e))===e?"".concat(e,"px"):e});return(e,n)=>(d(),I("span",{style:v({width:i.value,height:i.value})},null,4))}});const h=x(y,[["__scopeId","data-v-41e8d397"]]);export{h as default};
