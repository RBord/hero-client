(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[5,8],{32:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return p})),n.d(t,"e",(function(){return l})),n.d(t,"d",(function(){return h})),n.d(t,"a",(function(){return f}));var a=n(30),r=n.n(a),c=n(31),s=n(36),i=n.n(s);function u(){return o.apply(this,arguments)}function o(){return(o=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("/superheroes").then((function(e){return e.data.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return j.apply(this,arguments)}function j(){return(j=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("/superheroes/".concat(t)).then((function(e){return e.data.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e,t){return b.apply(this,arguments)}function b(){return(b=Object(c.a)(r.a.mark((function e(t,n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.patch("/superheroes/".concat(t),n).then((function(e){return e.data.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return d.apply(this,arguments)}function d(){return(d=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.post("/superheroes",t).then((function(e){return e.data.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return O.apply(this,arguments)}function O(){return(O=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.delete("/superheroes/".concat(t)).then((function(e){return e.data.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}i.a.defaults.baseURL="https://create-hero-app.herokuapp.com/api"},33:function(e,t,n){"use strict";var a=n(39),r=n(40),c=n(45),s=n(44),i=n(0),u=n.n(i),o=n(41),p=n.n(o),j=(n(42),n(34)),l=n.n(j),b=n(1),h=function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:l.a.Container,children:Object(b.jsx)(p.a,{type:"TailSpin",color:"#00BFFF",height:50,width:50,timeout:0})})}}]),n}(u.a.Component);t.a=h},34:function(e,t,n){e.exports={Container:"Loader_Container__hnGsc"}},43:function(e,t,n){e.exports={wrapper:"EditHeroPage_wrapper__1UvX1",textarea:"EditHeroPage_textarea__jVAQt",input:"EditHeroPage_input__36pKR",btn:"EditHeroPage_btn__1MC6m"}},54:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return b}));var a=n(30),r=n.n(a),c=n(31),s=n(35),i=n(0),u=n(2),o=n(32),p=n(43),j=n.n(p),l=n(1);function b(e){var t=Object(u.h)(),n=Object(u.g)(),a=Object(i.useState)(""),p=Object(s.a)(a,2),b=p[0],h=p[1],d=Object(i.useState)(""),f=Object(s.a)(d,2),O=f[0],x=f[1],m=Object(i.useState)(""),_=Object(s.a)(m,2),g=_[0],w=_[1],v=Object(i.useState)(""),k=Object(s.a)(v,2),y=k[0],C=k[1],N=Object(i.useState)(""),E=Object(s.a)(N,2),S=E[0],D=E[1],F=Object(i.useState)(!1),P=Object(s.a)(F,2),B=P[0],R=P[1],H=e.props,T=H._id,q=H.nickname,A=H.real_name,L=H.superpowers,I=H.origin_description,K=H.catch_phrase;function U(e){var t=e.currentTarget,n=t.name,a=t.value;switch(n){case"nickname":h(a);break;case"real_name":x(a);break;case"superpowers":w(a);break;case"origin_description":C(a);break;case"catch_phrase":D(a);break;default:return}}function X(){h(""),x(""),w(""),D(""),C("")}function G(){return(G=Object(c.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={nickname:b,real_name:O,superpowers:g,origin_description:y,catch_phrase:S},e.next=4,o.e(T,n).then((function(e){return console.log(e)}));case 4:X(),R(!0);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(i.useEffect)((function(){h(q),x(A),w(L),C(I),D(K)}),[q,A,L,I,K]),Object(l.jsx)(l.Fragment,{children:B?Object(l.jsx)(u.a,{to:"/heroes"}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("h1",{children:["Edit ",q]}),Object(l.jsx)("div",{className:j.a.wrapper,children:Object(l.jsxs)("form",{onSubmit:function(e){return G.apply(this,arguments)},children:[Object(l.jsxs)("label",{htmlFor:"nickname",children:[Object(l.jsx)("p",{children:"Nickname: "}),Object(l.jsx)("input",{type:"text",id:"nickname",name:"nickname",value:b,onChange:U,required:!0,className:j.a.input})]}),Object(l.jsxs)("label",{htmlFor:"real_name",children:[Object(l.jsx)("p",{children:"Real Name: "}),Object(l.jsx)("input",{type:"text",id:"real_name",name:"real_name",value:O,onChange:U,required:!0,className:j.a.input})]}),Object(l.jsxs)("label",{htmlFor:"superpowers",children:[Object(l.jsx)("p",{children:"Superpowers: "}),Object(l.jsx)("textarea",{type:"text",name:"superpowers",id:"superpowers",value:g,onChange:U,required:!0,className:j.a.textarea})]}),Object(l.jsxs)("label",{htmlFor:"origin_description",children:[Object(l.jsx)("p",{children:"Description: "}),Object(l.jsx)("textarea",{type:"text",id:"origin_description",name:"origin_description",value:y,onChange:U,className:j.a.textarea})]}),Object(l.jsxs)("label",{htmlFor:"catch_phrase",children:[Object(l.jsx)("p",{children:"Catch Phrase: "}),Object(l.jsx)("textarea",{type:"text",id:"catch_phrase",name:"catch_phrase",value:S,onChange:U,className:j.a.textarea})]}),Object(l.jsx)("button",{type:"submit",className:j.a.btn,children:"EDIT"}),Object(l.jsx)("button",{type:"button",onClick:function(){var e;n.push(null===(e=t.state)||void 0===e?void 0:e.from)},className:j.a.btn,children:"BACK"})]})})]})})}},94:function(e,t,n){e.exports={wrapper:"DetailsPage_wrapper__2bEXk",infoContainer:"DetailsPage_infoContainer__2f8qi",image:"DetailsPage_image__2TLUc",wrapperBtns:"DetailsPage_wrapperBtns__3AwGX",btn:"DetailsPage_btn__1qQ6i"}},97:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var a=n(30),r=n.n(a),c=n(31),s=n(35),i=n(0),u=n(2),o=n(54),p=n(33),j=n(94),l=n.n(j),b=n(32),h=n(1);function d(){var e=Object(u.g)(),t=Object(u.h)(),n=Object(u.i)().heroId,a=Object(i.useState)(null),j=Object(s.a)(a,2),d=j[0],f=j[1],O=Object(i.useState)(!1),x=Object(s.a)(O,2),m=x[0],_=x[1],g=Object(i.useState)(!1),w=Object(s.a)(g,2),v=w[0],k=w[1],y=Object(i.useState)(!1),C=Object(s.a)(y,2),N=C[0],E=C[1];function S(){return(S=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,b.a(n).then((function(e){return console.log(e)}));case 3:_(!0);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(i.useEffect)((function(){function e(){return(e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.c(n).then(f);case 2:E(!1);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}E(!0),function(){e.apply(this,arguments)}()}),[n]),Object(h.jsxs)(h.Fragment,{children:[d&&!v&&!N&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("h1",{children:["Detail information about ",d.nickname]}),Object(h.jsxs)("div",{className:l.a.wrapper,children:[Object(h.jsx)("img",{src:"https://create-hero-app.herokuapp.com".concat(d.images),alt:"image_of_hero",className:l.a.image}),Object(h.jsxs)("div",{className:l.a.infoContainer,children:[Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"Real name: "}),d.real_name]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"Superpowers: "}),d.superpowers]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"Description: "}),d.origin_description]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"Catch Phrase: "}),d.catch_phrase]})]})]}),Object(h.jsxs)("div",{className:l.a.wrapperBtns,children:[Object(h.jsx)("button",{type:"button",onClick:function(){var n;e.push(null===(n=t.state)||void 0===n?void 0:n.from)},className:l.a.btn,children:"BACK"}),Object(h.jsx)("button",{type:"submit",onClick:function(e){return S.apply(this,arguments)},className:l.a.btn,children:"DELETE HERO FROM BASE"}),Object(h.jsx)("button",{type:"button",onClick:function(){k(!0)},className:l.a.btn,children:"EDIT HERO"})]})]}),m&&Object(h.jsx)(u.a,{to:"/heroes"}),v&&Object(h.jsx)(o.default,{props:d}),N&&Object(h.jsx)(p.a,{})]})}}}]);
//# sourceMappingURL=5.10706f58.chunk.js.map