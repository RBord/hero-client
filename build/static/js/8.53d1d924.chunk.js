(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[8],{143:function(t,e,n){t.exports={link:"MainPage_link__2Va8a",wrapper:"MainPage_wrapper__1o8we",list:"MainPage_list__1OkAM",img:"MainPage_img__awvBc",nickname:"MainPage_nickname__3cY-H"}},177:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return b}));var r=n(38),a=n.n(r),c=n(39),u=n(35),s=n(0),i=n(2),o=n(8),p=n(48),f=n(43),h=n(143),l=n.n(h),d=n(1);function b(){var t=Object(i.h)(),e=Object(s.useState)(null),n=Object(u.a)(e,2),r=n[0],h=n[1],b=Object(s.useState)(!1),j=Object(u.a)(b,2),m=j[0],O=j[1];return Object(s.useEffect)((function(){function t(){return(t=Object(c.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f.b().then(h);case 3:O(!1),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}O(!0),function(){t.apply(this,arguments)}()}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{children:"All Superheroes in Base"}),r&&!m&&Object(d.jsx)("ul",{className:l.a.list,children:r.map((function(e){var n=e._id,r=e.nickname,a=e.images;return Object(d.jsx)("li",{className:l.a.wrapper,children:Object(d.jsxs)(o.b,{to:{pathname:"/heroes/".concat(n),state:{from:t}},className:l.a.link,children:[Object(d.jsx)("p",{className:l.a.nickname,children:r}),Object(d.jsx)("img",{src:"https://create-hero-app.herokuapp.com".concat(a),alt:r,className:l.a.img})]})},n)}))}),m&&Object(d.jsx)(p.a,{})]})}},43:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return p})),n.d(e,"e",(function(){return h})),n.d(e,"d",(function(){return d})),n.d(e,"a",(function(){return j})),n.d(e,"f",(function(){return O}));var r=n(38),a=n.n(r),c=n(39),u=n(54),s=n.n(u);function i(){return o.apply(this,arguments)}function o(){return(o=Object(c.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("/superheroes").then((function(t){return t.data.data}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return f.apply(this,arguments)}function f(){return(f=Object(c.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("/superheroes/".concat(e)).then((function(t){return t.data.data}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t,e){return l.apply(this,arguments)}function l(){return(l=Object(c.a)(a.a.mark((function t(e,n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.patch("/superheroes/".concat(e),n).then((function(t){return t.data.data}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return b.apply(this,arguments)}function b(){return(b=Object(c.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.post("/superheroes",e).then((function(t){return t.data.data}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function j(t){return m.apply(this,arguments)}function m(){return(m=Object(c.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.delete("/superheroes/".concat(e)).then((function(t){return t.data.data}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function O(t,e){return x.apply(this,arguments)}function x(){return(x=Object(c.a)(a.a.mark((function t(e,n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.post("/images/".concat(e),n).then((function(t){return t.data.data}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}s.a.defaults.baseURL="https://create-hero-app.herokuapp.com/api"},48:function(t,e,n){"use strict";var r=n(52),a=n(53),c=n(73),u=n(71),s=n(0),i=n.n(s),o=n(63),p=n.n(o),f=(n(64),n(49)),h=n.n(f),l=n(1),d=function(t){Object(c.a)(n,t);var e=Object(u.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return Object(l.jsx)("div",{className:h.a.Container,children:Object(l.jsx)(p.a,{type:"TailSpin",color:"#00BFFF",height:50,width:50,timeout:0})})}}]),n}(i.a.Component);e.a=d},49:function(t,e,n){t.exports={Container:"Loader_Container__hnGsc"}}}]);
//# sourceMappingURL=8.53d1d924.chunk.js.map