(this.webpackJsonpmoments=this.webpackJsonpmoments||[]).push([[4],{70:function(e,a,t){"use strict";var r=t(4),n=t(10),c=t(0),s=t.n(c);var i=function(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return a.filter((function(e){return null!=e})).reduce((function(e,a){if("function"!==typeof a)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?a:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];e.apply(this,r),a.apply(this,r)}}),null)},o=["as","disabled","onKeyDown"];function l(e){return!e||"#"===e.trim()}var d=s.a.forwardRef((function(e,a){var t=e.as,c=void 0===t?"a":t,d=e.disabled,f=e.onKeyDown,u=Object(n.a)(e,o),b=function(e){var a=u.href,t=u.onClick;(d||l(a))&&e.preventDefault(),d?e.stopPropagation():t&&t(e)};return l(u.href)&&(u.role=u.role||"button",u.href=u.href||"#"),d&&(u.tabIndex=-1,u["aria-disabled"]=!0),s.a.createElement(c,Object(r.a)({ref:a},u,{onClick:b,onKeyDown:i((function(e){" "===e.key&&(e.preventDefault(),b(e))}),f)}))}));d.displayName="SafeAnchor";a.a=d},71:function(e,a,t){"use strict";t.d(a,"a",(function(){return b}));var r=t(4),n=t(10),c=t(20),s=t.n(c),i=/-(.)/g;var o=t(0),l=t.n(o),d=t(21),f=["className","bsPrefix","as"],u=function(e){return e[0].toUpperCase()+(a=e,a.replace(i,(function(e,a){return a.toUpperCase()}))).slice(1);var a};function b(e,a){var t=void 0===a?{}:a,c=t.displayName,i=void 0===c?u(e):c,o=t.Component,b=t.defaultProps,m=l.a.forwardRef((function(a,t){var c=a.className,i=a.bsPrefix,u=a.as,b=void 0===u?o||"div":u,m=Object(n.a)(a,f),j=Object(d.a)(i,e);return l.a.createElement(b,Object(r.a)({ref:t,className:s()(c,j)},m))}));return m.defaultProps=b,m.displayName=i,m}},72:function(e,a,t){"use strict";var r=t(4),n=t(0),c=t.n(n),s=t(20),i=t.n(s);a.a=function(e){return c.a.forwardRef((function(a,t){return c.a.createElement("div",Object(r.a)({},a,{ref:t,className:i()(a.className,e)}))}))}},75:function(e,a,t){"use strict";var r=t(4),n=t(10),c=t(20),s=t.n(c),i=t(0),o=t.n(i),l=t(21),d=["bsPrefix","className","as"],f=["xl","lg","md","sm","xs"],u=o.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,i=e.as,u=void 0===i?"div":i,b=Object(n.a)(e,d),m=Object(l.a)(t,"col"),j=[],p=[];return f.forEach((function(e){var a,t,r,n=b[e];if(delete b[e],"object"===typeof n&&null!=n){var c=n.span;a=void 0===c||c,t=n.offset,r=n.order}else a=n;var s="xs"!==e?"-"+e:"";a&&j.push(!0===a?""+m+s:""+m+s+"-"+a),null!=r&&p.push("order"+s+"-"+r),null!=t&&p.push("offset"+s+"-"+t)})),j.length||j.push(m),o.a.createElement(u,Object(r.a)({},b,{ref:a,className:s.a.apply(void 0,[c].concat(j,p))}))}));u.displayName="Col",a.a=u},78:function(e,a,t){e.exports={HomePageContainer:"HomePage_HomePageContainer__2w5my",card:"HomePage_card__2Ncrq","card-body":"HomePage_card-body__CWe_x"}},79:function(e,a,t){"use strict";var r=t(4),n=t(10),c=t(20),s=t.n(c),i=t(0),o=t.n(i),l=t(21),d=["bsPrefix","className","noGutters","as"],f=["xl","lg","md","sm","xs"],u=o.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,i=e.noGutters,u=e.as,b=void 0===u?"div":u,m=Object(n.a)(e,d),j=Object(l.a)(t,"row"),p=j+"-cols",v=[];return f.forEach((function(e){var a,t=m[e];delete m[e];var r="xs"!==e?"-"+e:"";null!=(a=null!=t&&"object"===typeof t?t.cols:t)&&v.push(""+p+r+"-"+a)})),o.a.createElement(b,Object(r.a)({ref:a},m,{className:s.a.apply(void 0,[c,j,i&&"no-gutters"].concat(v))}))}));u.displayName="Row",u.defaultProps={noGutters:!1},a.a=u},80:function(e,a,t){"use strict";var r=t(4),n=t(10),c=t(20),s=t.n(c),i=t(0),o=t.n(i),l=t(21),d=t(70),f=["bsPrefix","variant","size","active","className","block","type","as"],u=o.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.variant,i=e.size,u=e.active,b=e.className,m=e.block,j=e.type,p=e.as,v=Object(n.a)(e,f),O=Object(l.a)(t,"btn"),h=s()(b,O,u&&"active",c&&O+"-"+c,m&&O+"-block",i&&O+"-"+i);if(v.href)return o.a.createElement(d.a,Object(r.a)({},v,{as:p,ref:a,className:s()(h,v.disabled&&"disabled")}));a&&(v.ref=a),j?v.type=j:p||(v.type="button");var x=p||"button";return o.a.createElement(x,Object(r.a)({},v,{className:h}))}));u.displayName="Button",u.defaultProps={variant:"primary",active:!1,disabled:!1},a.a=u},98:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(33),s=t(79),i=t(75),o=t(4),l=t(10),d=t(20),f=t.n(d),u=t(21),b=t(71),m=t(72),j=n.a.createContext(null);j.displayName="CardContext";var p=j,v=["bsPrefix","className","variant","as"],O=n.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,c=e.variant,s=e.as,i=void 0===s?"img":s,d=Object(l.a)(e,v),b=Object(u.a)(t,"card-img");return n.a.createElement(i,Object(o.a)({ref:a,className:f()(c?b+"-"+c:b,r)},d))}));O.displayName="CardImg",O.defaultProps={variant:null};var h=O,x=["bsPrefix","className","bg","text","border","body","children","as"],y=Object(m.a)("h5"),g=Object(m.a)("h6"),N=Object(b.a)("card-body"),P=Object(b.a)("card-title",{Component:y}),w=Object(b.a)("card-subtitle",{Component:g}),C=Object(b.a)("card-link",{Component:"a"}),E=Object(b.a)("card-text",{Component:"p"}),k=Object(b.a)("card-header"),_=Object(b.a)("card-footer"),R=Object(b.a)("card-img-overlay"),H=n.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,s=e.bg,i=e.text,d=e.border,b=e.body,m=e.children,j=e.as,v=void 0===j?"div":j,O=Object(l.a)(e,x),h=Object(u.a)(t,"card"),y=Object(r.useMemo)((function(){return{cardHeaderBsPrefix:h+"-header"}}),[h]);return n.a.createElement(p.Provider,{value:y},n.a.createElement(v,Object(o.a)({ref:a},O,{className:f()(c,h,s&&"bg-"+s,i&&"text-"+i,d&&"border-"+d)}),b?n.a.createElement(N,null,m):m))}));H.displayName="Card",H.defaultProps={body:!1},H.Img=h,H.Title=P,H.Subtitle=w,H.Body=N,H.Link=C,H.Text=E,H.Header=k,H.Footer=_,H.ImgOverlay=R;var D=H,I=t(80),T=t(9),A=t.n(T),B=t(12),F=t(78),G=t.n(F),K=t(1);a.default=function(){const[e,a]=Object(r.useState)([]);return Object(r.useEffect)((()=>{(async()=>{try{const{data:e}=await A.a.get("/api/listings/featured/");a(e)}catch(e){console.error("Failed to fetch featured listings:",e)}})()}),[]),Object(K.jsxs)(c.a,{className:G.a.HomePageContainer,children:[Object(K.jsx)(s.a,{children:Object(K.jsxs)(i.a,{md:12,className:"text-center",children:[Object(K.jsx)("h1",{children:"Welcome to Pickaroo!"}),Object(K.jsx)("p",{children:"Your one-stop shop for finding the best listings in town."})]})}),Object(K.jsxs)(s.a,{className:"mt-4",children:[Object(K.jsx)(i.a,{md:12,children:Object(K.jsx)("h2",{children:"Featured Listings"})}),0===e.length?Object(K.jsx)(i.a,{md:12,children:Object(K.jsx)("p",{children:"No featured listings available right now."})}):e.map((e=>Object(K.jsx)(i.a,{md:4,className:"mb-4",children:Object(K.jsxs)(D,{children:[Object(K.jsx)(D.Img,{variant:"top",src:e.image_url}),Object(K.jsxs)(D.Body,{children:[Object(K.jsx)(D.Title,{children:e.title}),Object(K.jsx)(D.Text,{children:e.description}),Object(K.jsx)(B.b,{to:"/listings/".concat(e.id),children:Object(K.jsx)(I.a,{variant:"primary",children:"View Details"})})]})]})},e.id)))]})]})}}}]);
//# sourceMappingURL=4.a947ab1f.chunk.js.map