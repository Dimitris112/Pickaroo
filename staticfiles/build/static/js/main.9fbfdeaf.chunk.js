(this.webpackJsonpmoments=this.webpackJsonpmoments||[]).push([[0],{13:function(e,t,r){e.exports={App:"App_App__16ZpL",Main:"App_Main__HQkvd",Content:"App_Content__ZaMNr",FillerImage:"App_FillerImage__2ob-g",Image:"App_Image__3UPXw"}},14:function(e,t){},3:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return s}));var n=r(9),c=r.n(n);c.a.defaults.baseURL="/api",c.a.defaults.headers.post["Content-Type"]="multipart/form-data",c.a.defaults.withCredentials=!0;const a=c.a.create(),s=c.a.create()},31:function(e,t,r){"use strict";r.d(t,"b",(function(){return j})),r.d(t,"c",(function(){return b}));var n=r(0),c=r(9),a=r.n(c),s=r(3),o=r(2),i=r(14),l=r(1);const d=Object(n.createContext)(),u=Object(n.createContext)(),j=()=>Object(n.useContext)(d),b=()=>Object(n.useContext)(u);t.a=e=>{let{children:t}=e;const[r,c]=Object(n.useState)(null),j=Object(o.f)();return Object(n.useEffect)((()=>{const e=s.a.interceptors.request.use((async e=>{if(Object(i.shouldRefreshToken)())try{await a.a.post("/dj-rest-auth/token/refresh/")}catch(t){throw c(null),j.push("/signin"),Object(i.removeTokenTimestamp)(),t}return e}),(e=>Promise.reject(e))),t=s.b.interceptors.response.use((e=>e),(async e=>{var t;if(401===(null===(t=e.response)||void 0===t?void 0:t.status))try{return await a.a.post("/dj-rest-auth/token/refresh/"),a()(e.config)}catch(e){c(null),j.push("/signin"),Object(i.removeTokenTimestamp)()}return Promise.reject(e)}));return()=>{s.a.interceptors.request.eject(e),s.b.interceptors.response.eject(t)}}),[j]),Object(n.useEffect)((()=>{(async()=>{try{const{data:e}=await s.b.get("dj-rest-auth/user/");c(e)}catch(e){console.error("Failed to fetch current user:",e)}})()}),[]),Object(l.jsx)(d.Provider,{value:r,children:Object(l.jsx)(u.Provider,{value:c,children:t})})}},32:function(e,t){},40:function(e,t,r){},69:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r.n(n),a=r(22),s=r.n(a),o=(r(40),r(13)),i=r.n(o),l=r(32),d=r.n(l),u=r(33),j=r(2),b=r(3),h=r(1);const p=c.a.lazy((()=>r.e(4).then(r.bind(null,98)))),v=c.a.lazy((()=>r.e(7).then(r.t.bind(null,89,7)))),O=c.a.lazy((()=>Promise.all([r.e(3),r.e(6)]).then(r.bind(null,90)))),f=c.a.lazy((()=>r.e(10).then(r.t.bind(null,92,7)))),x=c.a.lazy((()=>r.e(9).then(r.t.bind(null,93,7)))),g=c.a.lazy((()=>r.e(8).then(r.t.bind(null,94,7)))),m=c.a.lazy((()=>r.e(5).then(r.bind(null,99)))),y=()=>Object(h.jsx)("div",{className:i.a.Loader,children:"Loading..."});var w=function(){return Object(h.jsxs)("div",{className:i.a.App,children:[Object(h.jsx)(d.a,{}),Object(h.jsx)(u.a,{className:i.a.Main,children:Object(h.jsx)(n.Suspense,{fallback:Object(h.jsx)(y,{}),children:Object(h.jsxs)(j.c,{children:[Object(h.jsx)(j.a,{exact:!0,path:"/",component:p}),Object(h.jsx)(j.a,{exact:!0,path:"/signin",component:O}),Object(h.jsx)(j.a,{exact:!0,path:"/signup",component:v}),Object(h.jsx)(j.a,{exact:!0,path:"/reviews",component:f}),Object(h.jsx)(j.a,{exact:!0,path:"/reviews/create",component:x}),Object(h.jsx)(j.a,{exact:!0,path:"/reports",component:g}),Object(h.jsx)(j.a,{component:m})]})})})]})};var E=e=>{e&&e instanceof Function&&r.e(11).then(r.bind(null,95)).then((t=>{let{getCLS:r,getFID:n,getFCP:c,getLCP:a,getTTFB:s}=t;r(e),n(e),c(e),a(e),s(e)}))},C=r(12),P=r(31);const _=Object(n.createContext)(),k=Object(n.createContext)(),A=e=>{let{children:t}=e;const[r,c]=Object(n.useState)([]),a=Object(j.f)();Object(n.useEffect)((()=>{(async()=>{try{const{data:e}=await b.b.get("/favorites/");c(e)}catch(e){console.error("Error fetching favorites:",e),a.push("/error")}})()}),[]);return Object(h.jsx)(_.Provider,{value:r,children:Object(h.jsx)(k.Provider,{value:{addFavorite:async e=>{try{const{data:t}=await b.a.post("/favorites/".concat(e,"/"));c((e=>[...e,t]))}catch(t){console.error("Error adding favorite:",t)}},removeFavorite:async e=>{try{await b.a.delete("/favorites/".concat(e,"/")),c((t=>t.filter((t=>t.id!==e))))}catch(t){console.error("Error removing favorite:",t)}}},children:t})})},F=Object(n.createContext)(),R=Object(n.createContext)(),L=e=>{let{children:t}=e;const[r,c]=Object(n.useState)([]),a=Object(j.f)();Object(n.useEffect)((()=>{(async()=>{try{const{data:e}=await b.b.get("/listings/");c(e)}catch(e){console.error("Error fetching listings:",e),a.push("/error")}})()}),[]);return Object(n.useMemo)((()=>{b.a.interceptors.response.use((e=>e),(e=>{var t;return 401===(null===(t=e.response)||void 0===t?void 0:t.status)&&a.push("/signin"),Promise.reject(e)}))}),[a]),Object(h.jsx)(F.Provider,{value:r,children:Object(h.jsx)(R.Provider,{value:{addListing:async e=>{try{const{data:t}=await b.a.post("/listings/",e);c((e=>[...e,t]))}catch(t){console.error("Error adding listing:",t)}},removeListing:async e=>{try{await b.a.delete("/listings/".concat(e,"/")),c((t=>t.filter((t=>t.id!==e))))}catch(t){console.error("Error removing listing:",t)}}},children:t})})};var T=r(18);const z=Object(n.createContext)(),M=Object(n.createContext)(),S=e=>{let{children:t}=e;const[r,c]=Object(n.useState)([]),a=Object(j.f)();Object(n.useEffect)((()=>{(async()=>{try{const{data:e}=await b.b.get("/notifications/");c(e)}catch(e){console.error("Error fetching notifications:",e),a.push("/error")}})()}),[]);return Object(n.useMemo)((()=>{b.a.interceptors.response.use((e=>e),(e=>{var t;return 401===(null===(t=e.response)||void 0===t?void 0:t.status)&&a.push("/signin"),Promise.reject(e)}))}),[a]),Object(h.jsx)(z.Provider,{value:r,children:Object(h.jsx)(M.Provider,{value:{markAsRead:async e=>{try{await b.a.patch("/notifications/".concat(e,"/"),{isRead:!0}),c((t=>t.map((t=>t.id===e?Object(T.a)(Object(T.a)({},t),{},{isRead:!0}):t))))}catch(t){console.error("Error marking notification as read:",t)}},deleteNotification:async e=>{try{await b.a.delete("/notifications/".concat(e,"/")),c((t=>t.filter((t=>t.id!==e))))}catch(t){console.error("Error deleting notification:",t)}}},children:t})})},I=Object(n.createContext)(),N=Object(n.createContext)(),q=e=>{let{children:t}=e;const[r,c]=Object(n.useState)([]),a=Object(j.f)();Object(n.useEffect)((()=>{(async()=>{try{const{data:e}=await b.b.get("/reviews/");c(e)}catch(e){console.error("Error fetching reviews:",e),a.push("/error")}})()}),[]);return Object(n.useMemo)((()=>{b.a.interceptors.response.use((e=>e),(e=>{var t;return 401===(null===(t=e.response)||void 0===t?void 0:t.status)&&a.push("/signin"),Promise.reject(e)}))}),[a]),Object(h.jsx)(I.Provider,{value:r,children:Object(h.jsx)(N.Provider,{value:{addReview:async e=>{try{const{data:t}=await b.a.post("/reviews/",e);c((e=>[...e,t]))}catch(t){console.error("Error adding review:",t)}},deleteReview:async e=>{try{await b.a.delete("/reviews/".concat(e,"/")),c((t=>t.filter((t=>t.id!==e))))}catch(t){console.error("Error deleting review:",t)}},reportReview:async e=>{try{await b.a.post("/reviews/".concat(e,"/report/")),alert("Review reported")}catch(t){console.error("Error reporting review:",t)}}},children:t})})};s.a.render(Object(h.jsx)(C.a,{children:Object(h.jsx)(P.a,{children:Object(h.jsx)(A,{children:Object(h.jsx)(L,{children:Object(h.jsx)(S,{children:Object(h.jsx)(q,{children:Object(h.jsx)(w,{})})})})})})}),document.getElementById("root")),E()}},[[69,1,2]]]);
//# sourceMappingURL=main.9fbfdeaf.chunk.js.map