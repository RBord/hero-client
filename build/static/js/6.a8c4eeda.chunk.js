(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[6],{30:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"e",(function(){return l})),n.d(t,"d",(function(){return j})),n.d(t,"a",(function(){return f}));var r=n(31),a=n.n(r),c=n(32),s=n(34),u=n.n(s);function i(){return p.apply(this,arguments)}function p(){return(p=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("/superheroes").then((function(e){return e.data.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function o(e){return h.apply(this,arguments)}function h(){return(h=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("/superheroes/".concat(t)).then((function(e){return e.data.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e,t){return b.apply(this,arguments)}function b(){return(b=Object(c.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.patch("/superheroes/".concat(t),n).then((function(e){return e.data.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e){return d.apply(this,arguments)}function d(){return(d=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.post("/superheroes",t).then((function(e){return e.data.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return x.apply(this,arguments)}function x(){return(x=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.delete("/superheroes/".concat(t)).then((function(e){return e.data.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}u.a.defaults.baseURL="https://create-hero-app.herokuapp.com/api"},37:function(e,t,n){e.exports={wrapper:"EditHeroPage_wrapper__1UvX1",textarea:"EditHeroPage_textarea__jVAQt",input:"EditHeroPage_input__36pKR",btn:"EditHeroPage_btn__1MC6m"}},46:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return b}));var r=n(31),a=n.n(r),c=n(32),s=n(33),u=n(0),i=n(2),p=n(30),o=n(37),h=n.n(o),l=n(1);function b(e){var t=Object(i.h)(),n=Object(i.g)(),r=Object(u.useState)(""),o=Object(s.a)(r,2),b=o[0],j=o[1],d=Object(u.useState)(""),f=Object(s.a)(d,2),x=f[0],m=f[1],O=Object(u.useState)(""),_=Object(s.a)(O,2),w=_[0],v=_[1],g=Object(u.useState)(""),k=Object(s.a)(g,2),y=k[0],N=k[1],C=Object(u.useState)(""),S=Object(s.a)(C,2),E=S[0],F=S[1],P=Object(u.useState)(!1),H=Object(s.a)(P,2),q=H[0],D=H[1],R=e.props,A=R._id,J=R.nickname,K=R.real_name,T=R.superpowers,U=R.origin_description,B=R.catch_phrase;function I(e){var t=e.currentTarget,n=t.name,r=t.value;switch(n){case"nickname":j(r);break;case"real_name":m(r);break;case"superpowers":v(r);break;case"origin_description":N(r);break;case"catch_phrase":F(r);break;default:return}}function L(){j(""),m(""),v(""),F(""),N("")}function M(){return(M=Object(c.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={nickname:b,real_name:x,superpowers:w,origin_description:y,catch_phrase:E},e.next=4,p.e(A,n).then((function(e){return console.log(e)}));case 4:L(),D(!0);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(u.useEffect)((function(){j(J),m(K),v(T),N(U),F(B)}),[J,K,T,U,B]),Object(l.jsx)(l.Fragment,{children:q?Object(l.jsx)(i.a,{to:"/heroes"}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("h1",{children:["Edit ",J]}),Object(l.jsx)("div",{className:h.a.wrapper,children:Object(l.jsxs)("form",{onSubmit:function(e){return M.apply(this,arguments)},children:[Object(l.jsxs)("label",{htmlFor:"nickname",children:[Object(l.jsx)("p",{children:"Nickname: "}),Object(l.jsx)("input",{type:"text",id:"nickname",name:"nickname",value:b,onChange:I,required:!0,className:h.a.input})]}),Object(l.jsxs)("label",{htmlFor:"real_name",children:[Object(l.jsx)("p",{children:"Real Name: "}),Object(l.jsx)("input",{type:"text",id:"real_name",name:"real_name",value:x,onChange:I,required:!0,className:h.a.input})]}),Object(l.jsxs)("label",{htmlFor:"superpowers",children:[Object(l.jsx)("p",{children:"Superpowers: "}),Object(l.jsx)("textarea",{type:"text",name:"superpowers",id:"superpowers",value:w,onChange:I,required:!0,className:h.a.textarea})]}),Object(l.jsxs)("label",{htmlFor:"origin_description",children:[Object(l.jsx)("p",{children:"Description: "}),Object(l.jsx)("textarea",{type:"text",id:"origin_description",name:"origin_description",value:y,onChange:I,className:h.a.textarea})]}),Object(l.jsxs)("label",{htmlFor:"catch_phrase",children:[Object(l.jsx)("p",{children:"Catch Phrase: "}),Object(l.jsx)("textarea",{type:"text",id:"catch_phrase",name:"catch_phrase",value:E,onChange:I,className:h.a.textarea})]}),Object(l.jsx)("button",{type:"submit",className:h.a.btn,children:"EDIT"}),Object(l.jsx)("button",{type:"button",onClick:function(){var e;n.push(null===(e=t.state)||void 0===e?void 0:e.from)},className:h.a.btn,children:"BACK"})]})})]})})}}}]);
//# sourceMappingURL=6.a8c4eeda.chunk.js.map