(this["webpackJsonpwaylar-assignment"]=this["webpackJsonpwaylar-assignment"]||[]).push([[0],{35:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(18),r=c.n(s),i=c(9),o=c.n(i),l=c(12),j=c(11),b=c(7),d=c(2),u=c(19),h=c(20),m=c(23),p=c(22),x=function(e){Object(m.a)(c,e);var t=Object(p.a)(c);function c(){return Object(u.a)(this,c),t.apply(this,arguments)}return Object(h.a)(c,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),c}(n.Component),O=Object(d.h)(x),f=function(e,t){switch(t.type){case"INIT":return t.data;case"FILTER":return e.filter((function(e){return e.albumId===t.albumId}));case"SEARCH":return e.filter((function(e){return e.id===t.id}));default:return e}},g=a.a.createContext(),v=c.p+"static/media/user.1e0b9435.jpg",N=c(0),y=function(){var e=Object(n.useContext)(g),t=e.search,c=e.setSearch,a=e.dispatch;return Object(n.useEffect)((function(){a({type:"SEARCH",id:t})}),[t,a]),Object(N.jsx)("nav",{className:"navbar bg-grey navbar-dark mb-5",children:Object(N.jsxs)("div",{className:"container",children:[Object(N.jsx)(b.b,{to:"/pages/1",className:"navbar-brand",onClick:function(){c("")},children:Object(N.jsxs)("h1",{className:"logo",children:["Sawasdee",Object(N.jsx)("span",{className:"logo__hub",children:"kub"})]})}),Object(N.jsxs)("div",{className:"input-group w-50",children:[Object(N.jsx)("input",{type:"text",className:"form-control border-0",placeholder:"search...",value:t,onChange:function(e){c(e.target.value)}}),Object(N.jsx)("div",{className:"input-group-append",children:Object(N.jsx)("span",{className:"input-group-text bg-orange border-0",children:Object(N.jsx)("i",{className:"fas fa-search"})})})]}),Object(N.jsx)("div",{className:"user-info rounded-circle",children:Object(N.jsx)("img",{src:v,alt:"",width:"50px",height:"50px",className:"img-fluid user-info__img"})})]})})},k=function(e){var t=e.item;return Object(N.jsx)("div",{className:"col-lg-3 col-md-4 col-sm-6",children:Object(N.jsx)("a",{href:t.url,"data-toggle":"lightbox",className:"no-link",children:Object(N.jsxs)("div",{className:"card bg-black text-light align-left mb-3",children:[Object(N.jsx)("img",{src:t.thumbnailUrl,alt:"thumbnail",className:"img-card-top border-orange-hover zoom-out-hover"}),Object(N.jsxs)("div",{className:"card-body px-0 py-2",children:[Object(N.jsx)("h5",{className:"card-title text-hover",children:"content ".concat(t.albumId," / ").concat(t.id)}),Object(N.jsx)("p",{className:"text-muted h5 text-hover",children:t.title})]})]})})})},w=function(){var e=Object(n.useContext)(g),t=e.search,c=(e.setSearch,Object(n.useState)([])),a=Object(j.a)(c,2),s=a[0],r=a[1],i=Object(d.g)(),b=i.page;i.keyword;return Object(n.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var c,n,a,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/photos");case 2:return c=e.sent,e.next=5,c.json();case 5:n=e.sent,""==t?(a=n.filter((function(e){return e.albumId==b})),r(a)):(s=n.filter((function(e){return e.albumId==t||e.id==t||e.title.match(t)})),r(s));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[b,t]),Object(N.jsx)("section",{className:"home-section",children:Object(N.jsx)("div",{className:"container",children:Object(N.jsx)("div",{className:"row",children:s.map((function(e){return Object(N.jsx)(k,{item:e},e.id)}))})})})},_=function(){var e=Object(d.g)().page,t=Object(n.useContext)(g).setSearch;return e=Number.parseInt(e),Object(N.jsx)("div",{className:"container mb-5",children:Object(N.jsxs)("div",{className:"row",children:[Object(N.jsx)("div",{className:"col-4",children:Object(N.jsx)("div",{className:"my-pagination__item",children:Object(N.jsx)(b.b,{to:"/pages/".concat(e-1),className:"my-pagination__link",onClick:function(){t("")},children:"\u2190 Previous"})})}),Object(N.jsx)("div",{className:"col-4",children:Object(N.jsx)("div",{className:"my-pagination__item my-pagination__item--active",children:Object(N.jsx)(b.b,{to:"/pages/3",className:"my-pagination__link",onClick:function(){t("")},children:e})})}),Object(N.jsx)("div",{className:"col-4",children:Object(N.jsx)("div",{className:"my-pagination__item",children:Object(N.jsx)(b.b,{to:"/pages/".concat(e+1),className:"my-pagination__link",onClick:function(){t("")},children:"Next \u2192"})})})]})})},C=function(){return Object(N.jsx)("footer",{className:"footer bg-grey text-light",children:Object(N.jsx)("div",{className:"container",children:Object(N.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(N.jsxs)("div",{children:[Object(N.jsxs)("h4",{children:["Developed by ",Object(N.jsx)("cite",{children:"Thana Wisutphusi"})]}),Object(N.jsx)("a",{href:"https://jsonplaceholder.typicode.com/photos",className:"btn btn-link",children:"API Data source"})]}),Object(N.jsx)("div",{children:Object(N.jsxs)("div",{className:"social-contact d-flex justify-content-between align-items-center",children:[Object(N.jsx)("a",{href:"https://www.facebook.com/A.trbcp/",className:"text-primary",target:"_blank",children:Object(N.jsx)("i",{class:"fab fa-facebook-square fa-4x mr-4"})}),Object(N.jsx)("a",{href:"https://github.com/ohmuay",className:"text-light",target:"_blank",children:Object(N.jsx)("i",{class:"fab fa-github fa-4x"})})]})})]})})})},I=(c(35),function(){var e=Object(n.useReducer)(f,[]),t=Object(j.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),r=Object(j.a)(s,2),i=r[0],u=r[1];return Object(n.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/photos");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,a({type:"INIT",data:c});case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(N.jsx)(g.Provider,{value:{state:c,dispatch:a,search:i,setSearch:u},children:Object(N.jsx)(b.a,{children:Object(N.jsx)(O,{children:Object(N.jsxs)(d.d,{children:[Object(N.jsx)(d.b,{path:"/",exact:!0,children:Object(N.jsx)(d.a,{to:"/pages/1"})}),Object(N.jsxs)(d.b,{path:"/pages/:page",children:[Object(N.jsx)(y,{}),Object(N.jsx)(w,{}),Object(N.jsx)(_,{}),Object(N.jsx)(C,{})]})]})})})})}),S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,37)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(N.jsx)(I,{}),document.getElementById("root")),S()}},[[36,1,2]]]);
//# sourceMappingURL=main.a26e3bcf.chunk.js.map