(this.webpackJsonpmonch=this.webpackJsonpmonch||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n(16),s=n.n(i),a=(n(21),n(4)),o=(n(22),n(3)),l=n.n(o),r=function(e){var t=l.a.get("/myList/".concat(e));return console.log("getAllServer"),t.then((function(e){return e.data}))},d=function(e){return l.a.get("api/searchResult/",{params:e}).then((function(e){return e.data}))},j=function(e){return l.a.get("api/searchResult/id",{params:e}).then((function(e){return e.data}))},u=function(e){return l.a.post("newList",{saveData:e}).then((function(e){return e.data}))},b=function(e,t){return l.a.put("/myList/".concat(t),{itemAPI:e}).then((function(e){return e.data}))},m=function(e,t){return l.a.delete("/myList/".concat(t),{data:{itemAPI:e}}).then((function(e){return e.data}))},h=function(e,t,n){return l.a.put("/myList/".concat(t,"/votes"),{data:{itemAPI:e,name:n}}).then((function(e){return e.data}))},v=n(0),O=function(e){var t=e.item,n=e.list,c=e.setList,i=e.pageURL;return Object(v.jsxs)("div",{className:"list-individ-container",children:[Object(v.jsx)("div",{className:"list-img-container",children:Object(v.jsx)("img",{className:"icon-img",src:t.image_url,alt:"yelp selected image"})}),Object(v.jsxs)("div",{className:"list-data-container",children:[Object(v.jsx)("div",{children:t.name}),Object(v.jsxs)("div",{children:[t.rating," stars"]}),Object(v.jsx)("div",{children:Object(v.jsx)("button",{value:t.id,onClick:function(e){console.log("result list itemID: ".concat(e.target.value));var t={id:e.target.value};j(t).then((function(e){return c(n.concat(e))})).catch((function(e){return console.log(e)})),""!=i&&b(t,i).then((function(e){return console.log(e)})).catch((function(e){console.log(e)}))},children:"Add to list"})})]})]})},x=function(e){var t=e.list,n=e.setList,i=e.pageURL,s=Object(c.useState)([]),o=Object(a.a)(s,2),l=o[0],r=o[1];return Object(v.jsxs)("div",{children:[Object(v.jsxs)("div",{children:[Object(v.jsxs)("div",{children:["Search: ",Object(v.jsx)("input",{id:"searchTerm",type:"text",autoComplete:"off",placeholder:"boba"})]}),Object(v.jsxs)("div",{children:["Location: ",Object(v.jsx)("input",{id:"searchLocation",type:"text",autoComplete:"off",placeholder:"san francisco, ca"})]}),Object(v.jsx)("button",{onClick:function(){var e={term:document.getElementById("searchTerm").value,location:document.getElementById("searchLocation").value};d(e).then((function(e){return r(e)})).catch((function(e){return console.log(e)}))},children:"Search"})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("br",{}),Object(v.jsx)("ul",{children:l.map((function(e,c){return Object(v.jsx)(O,{item:e,list:t,setList:n,pageURL:i},c)}))})]})]})},f=function(e){var t=e.list,n=e.pageURL;return t.length>0?""!=n?Object(v.jsx)("div",{}):Object(v.jsxs)("div",{children:[Object(v.jsxs)("div",{children:["Name your list:",Object(v.jsx)("input",{type:"text",id:"title-name",autoComplete:"off"})]}),Object(v.jsxs)("div",{children:["Date of event:",Object(v.jsx)("input",{type:"date",id:"event-date",acutcomplete:"off"})]}),Object(v.jsx)("div",{children:Object(v.jsx)("button",{onClick:function(){var e=document.getElementById("title-name").value,n=document.getElementById("event-date").value;if(console.log(n),""!==e){for(var c=[],i=0;i<t.length;i++)c.push(t[i].id);u({title:e,date:n,restaurants:c}).then((function(e){window.location="/".concat(e.redirect)})).catch((function(e){return console.log(e)}))}else alert("please add a title")},children:"Save list"})})]}):Object(v.jsx)("div",{})},g=n(7),p=function(e){var t=e.item,n=e.list,c=e.setList,i=e.pageURL,s=e.name;console.log("list item ".concat(t.name)),console.log("page URL ".concat(i)),console.log("name ".concat(s)),console.log("vote ".concat(t.votes));var a=function(e){var t=e.target.value;c(n.filter((function(e){return e.id!==t}))),console.log(t),""!=i&&m(t,i).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))};return""!==i?Object(v.jsxs)("div",{className:"list-individ-container",children:[Object(v.jsxs)("div",{className:"list-individ-container-yelpinfo",children:[Object(v.jsx)("div",{className:"list-img-container",children:Object(v.jsx)("img",{className:"icon-img",src:t.image_url,alt:"yelp selected image"})}),Object(v.jsxs)("div",{className:"list-data-container",children:[Object(v.jsx)("div",{children:t.name}),Object(v.jsxs)("div",{children:[t.rating," stars"]})]}),Object(v.jsxs)("div",{className:"list-button-container",children:[Object(v.jsx)("div",{children:Object(v.jsx)("button",{value:t.id,onClick:a,children:"Remove from list"})}),Object(v.jsx)("div",{children:Object(v.jsx)("button",{value:t.id,onClick:function(e){var t=e.target.value;h(t,i,s).then((function(e){console.log("response",e),c(n.map((function(n){return n.id!==t?n:Object(g.a)(Object(g.a)({},n),{},{votes:e})})))})).catch((function(e){return console.log(e)}))},children:"Vote for this place"})})]})]}),Object(v.jsxs)("div",{className:"voters",children:["Voted for here: ",t.votes.toString()]})]}):Object(v.jsxs)("div",{className:"list-individ-container",children:[Object(v.jsx)("div",{className:"list-img-container",children:Object(v.jsx)("img",{className:"icon-img",src:t.image_url,alt:"yelp selected image"})}),Object(v.jsxs)("div",{className:"list-data-container",children:[Object(v.jsx)("div",{children:t.name}),Object(v.jsxs)("div",{children:[t.rating," stars"]}),Object(v.jsx)("div",{children:Object(v.jsx)("button",{value:t.id,onClick:a,children:"Remove from list"})})]})]})},L=function(e){var t=e.name;return""===t?Object(v.jsx)("div",{}):Object(v.jsxs)("div",{id:"welcome-title",children:["Hi ",t,", let's decide where to eat!"]})},y=function(e){var t=e.list,n=e.setList,c=e.title,i=e.date,s=e.pageURL,a=e.name,o=e.setName;console.log("date",i);return""!==s&&""===a?Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{id:"list-title",children:c}),Object(v.jsx)("div",{children:i.split("T")[0]}),Object(v.jsxs)("div",{children:[Object(v.jsxs)("div",{children:["Please enter your name: ",Object(v.jsx)("input",{id:"name-input",type:"text"})]}),Object(v.jsx)("button",{onClick:function(){var e=document.getElementById("name-input").value;o(e)},id:"submit-name",children:"Submit"})]})]}):Object(v.jsxs)("div",{children:[Object(v.jsx)(L,{name:a}),Object(v.jsx)("div",{id:"list-title",children:c}),t.map((function(e,c){return Object(v.jsx)(p,{item:e,list:t,setList:n,pageURL:s,name:a},c)})),Object(v.jsx)(f,{list:t,pageURL:s})]})},N=function(){console.log("top of App");var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=t[0],i=t[1],s=Object(c.useState)(""),o=Object(a.a)(s,2),l=o[0],d=o[1],j=Object(c.useState)(""),u=Object(a.a)(j,2),b=u[0],m=u[1],h=Object(c.useState)(""),O=Object(a.a)(h,2),f=O[0],g=O[1],p=window.location.href.split("/")[3];console.log("url",p);return Object(c.useEffect)((function(){console.log("hookStart"),r(p).then((function(e){console.log("useEffect"),d(e.title),m(e.date),i(e.restaurants),console.log(e.title,e.date,e.restaurants)}))}),[]),Object(v.jsxs)("div",{children:[Object(v.jsxs)("div",{id:"nav-bar",children:["Let's monch ! ",Object(v.jsx)("br",{}),Object(v.jsx)("br",{})]}),Object(v.jsxs)("div",{id:"main-container",children:[Object(v.jsx)("div",{id:"left-container",children:Object(v.jsx)(y,{list:n,date:b,setList:i,pageURL:p,title:l,name:f,setName:g})}),Object(v.jsx)("div",{id:"right-container",children:Object(v.jsx)(x,{list:n,setList:i,pageURL:p})})]})]})};s.a.render(Object(v.jsx)(N,{}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.71af9a40.chunk.js.map