(this.webpackJsonpmoments=this.webpackJsonpmoments||[]).push([[0],{11:function(e,t){},33:function(e,t,r){},34:function(e,t,r){},63:function(e,t,r){"use strict";r.r(t);var c=r(0),s=r(26),n=r.n(s),a=(r(33),r.p+"static/media/logo.6ce24c58.svg"),o=(r(34),r(2));var i=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)("header",{className:"App-header",children:[Object(o.jsx)("img",{src:a,className:"App-logo",alt:"logo"}),Object(o.jsxs)("p",{children:["Edit ",Object(o.jsx)("code",{children:"src/App.js"})," and save to reload."]}),Object(o.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]})})};var l=e=>{e&&e instanceof Function&&r.e(3).then(r.bind(null,64)).then((t=>{let{getCLS:r,getFID:c,getFCP:s,getLCP:n,getTTFB:a}=t;r(e),c(e),s(e),n(e),a(e)}))},d=r(15),j=r(8),u=r.n(j);u.a.defaults.baseURL="/api",u.a.defaults.headers.post["Content-Type"]="multipart/form-data",u.a.defaults.withCredentials=!0;const h=u.a.create(),b=u.a.create();var p=r(1),f=r(11);const v=Object(c.createContext)(),O=Object(c.createContext)();var g=e=>{let{children:t}=e;const[r,s]=Object(c.useState)(null),n=Object(p.d)();return Object(c.useEffect)((()=>{const e=h.interceptors.request.use((async e=>{if(Object(f.shouldRefreshToken)())try{await u.a.post("/dj-rest-auth/token/refresh/")}catch(t){throw s(null),n.push("/signin"),Object(f.removeTokenTimestamp)(),t}return e}),(e=>Promise.reject(e))),t=b.interceptors.response.use((e=>e),(async e=>{var t;if(401===(null===(t=e.response)||void 0===t?void 0:t.status))try{return await u.a.post("/dj-rest-auth/token/refresh/"),u()(e.config)}catch(e){s(null),n.push("/signin"),Object(f.removeTokenTimestamp)()}return Promise.reject(e)}));return()=>{h.interceptors.request.eject(e),b.interceptors.response.eject(t)}}),[n]),Object(c.useEffect)((()=>{(async()=>{try{const{data:e}=await b.get("dj-rest-auth/user/");s(e)}catch(e){console.error("Failed to fetch current user:",e)}})()}),[]),Object(o.jsx)(v.Provider,{value:r,children:Object(o.jsx)(O.Provider,{value:s,children:t})})};const m=Object(c.createContext)(),x=Object(c.createContext)(),y=e=>{let{children:t}=e;const[r,s]=Object(c.useState)([]),n=Object(p.d)();Object(c.useEffect)((()=>{(async()=>{try{const{data:e}=await b.get("/favorites/");s(e)}catch(e){console.error("Error fetching favorites:",e),n.push("/error")}})()}),[]);return Object(o.jsx)(m.Provider,{value:r,children:Object(o.jsx)(x.Provider,{value:{addFavorite:async e=>{try{const{data:t}=await h.post("/favorites/".concat(e,"/"));s((e=>[...e,t]))}catch(t){console.error("Error adding favorite:",t)}},removeFavorite:async e=>{try{await h.delete("/favorites/".concat(e,"/")),s((t=>t.filter((t=>t.id!==e))))}catch(t){console.error("Error removing favorite:",t)}}},children:t})})},w=Object(c.createContext)(),E=Object(c.createContext)(),P=e=>{let{children:t}=e;const[r,s]=Object(c.useState)([]),n=Object(p.d)();Object(c.useEffect)((()=>{(async()=>{try{const{data:e}=await b.get("/listings/");s(e)}catch(e){console.error("Error fetching listings:",e),n.push("/error")}})()}),[]);return Object(c.useMemo)((()=>{h.interceptors.response.use((e=>e),(e=>{var t;return 401===(null===(t=e.response)||void 0===t?void 0:t.status)&&n.push("/signin"),Promise.reject(e)}))}),[n]),Object(o.jsx)(w.Provider,{value:r,children:Object(o.jsx)(E.Provider,{value:{addListing:async e=>{try{const{data:t}=await h.post("/listings/",e);s((e=>[...e,t]))}catch(t){console.error("Error adding listing:",t)}},removeListing:async e=>{try{await h.delete("/listings/".concat(e,"/")),s((t=>t.filter((t=>t.id!==e))))}catch(t){console.error("Error removing listing:",t)}}},children:t})})};var C=r(17);const k=Object(c.createContext)(),T=Object(c.createContext)(),F=e=>{let{children:t}=e;const[r,s]=Object(c.useState)([]),n=Object(p.d)();Object(c.useEffect)((()=>{(async()=>{try{const{data:e}=await b.get("/notifications/");s(e)}catch(e){console.error("Error fetching notifications:",e),n.push("/error")}})()}),[]);return Object(c.useMemo)((()=>{h.interceptors.response.use((e=>e),(e=>{var t;return 401===(null===(t=e.response)||void 0===t?void 0:t.status)&&n.push("/signin"),Promise.reject(e)}))}),[n]),Object(o.jsx)(k.Provider,{value:r,children:Object(o.jsx)(T.Provider,{value:{markAsRead:async e=>{try{await h.patch("/notifications/".concat(e,"/"),{isRead:!0}),s((t=>t.map((t=>t.id===e?Object(C.a)(Object(C.a)({},t),{},{isRead:!0}):t))))}catch(t){console.error("Error marking notification as read:",t)}},deleteNotification:async e=>{try{await h.delete("/notifications/".concat(e,"/")),s((t=>t.filter((t=>t.id!==e))))}catch(t){console.error("Error deleting notification:",t)}}},children:t})})};n.a.render(Object(o.jsx)(d.a,{children:Object(o.jsx)(g,{children:Object(o.jsx)(y,{children:Object(o.jsx)(P,{children:Object(o.jsx)(F,{children:Object(o.jsx)(i,{})})})})})}),document.getElementById("root")),l()}},[[63,1,2]]]);
//# sourceMappingURL=main.e1b86bab.chunk.js.map