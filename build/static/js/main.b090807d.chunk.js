(this.webpackJsonpmonster=this.webpackJsonpmonster||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(3),o=n.n(s),a=(n(12),n(4)),i=n(5),h=n(7),u=n(6),l=(n(13),n(14),n(0)),d=function(e){return Object(l.jsxs)("div",{className:"card-container",children:[Object(l.jsx)("img",{src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180"),alt:"monster"}),Object(l.jsx)("h2",{children:e.monster.name},e.monster.id),Object(l.jsx)("h3",{children:e.monster.email})]})},j=function(e){return Object(l.jsx)("div",{className:"card-list",children:e.monster.map((function(e){return Object(l.jsx)(d,{monster:e},e.id)}))})},m=(n(16),function(e){var t=e.placeholder,n=e.handleChange;return Object(l.jsx)("input",{className:"search",type:"text",placeholder:t,onChange:n})}),f=(n(17),function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({searchMonster:t.target.value})},e.state={monster:[],searchMonster:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monster:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monster,n=e.searchMonster,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Obrigado Malaye"}),Object(l.jsx)(m,{placeholder:"Seach monster",handleChange:this.handleChange}),Object(l.jsx)(j,{monster:r})]})}}]),n}(r.Component)),b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),s(e),o(e)}))};o.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root")),b()}],[[18,1,2]]]);
//# sourceMappingURL=main.b090807d.chunk.js.map