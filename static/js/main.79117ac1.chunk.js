(this["webpackJsonpcandy-crush-react"]=this["webpackJsonpcandy-crush-react"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n.n(r),a=n(7),u=n.n(a),i=(n(12),n(6)),o=n(3),f=n(1);function s(t){var e=t.score;return Object(f.jsx)("div",{className:"score-board",children:Object(f.jsxs)("h2",{children:["Your current score is:",e]})})}var b=n.p+"static/media/blue-candy.73120c15.png",l=n.p+"static/media/green-candy.599f7016.png",v=n.p+"static/media/orange-candy.f106b2cd.png",d=n.p+"static/media/purple-candy.ae25b8a5.png",j=n.p+"static/media/red-candy.3658b37c.png",p=n.p+"static/media/yellow-candy.a3d87a9b.png",g=n.p+"static/media/blank.fbcb9179.png",O=[b,l,v,d,j,p],h=function(){var t=Object(r.useState)([]),e=Object(o.a)(t,2),n=e[0],c=e[1],a=Object(r.useState)(null),u=Object(o.a)(a,2),b=u[0],l=u[1],v=Object(r.useState)(null),d=Object(o.a)(v,2),j=d[0],p=d[1],h=Object(r.useState)(0),y=Object(o.a)(h,2),m=y[0],D=y[1],E=Object(r.useCallback)((function(){for(var t=function(t){var e=[t,t+8,t+16],r=n[t],c=n[t]===g;if(e.every((function(t){return n[t]===r&&!c})))return D((function(t){return t+3})),e.forEach((function(t){return n[t]=g})),{v:!0}},e=0;e<=47;e++){var r=t(e);if("object"===typeof r)return r.v}}),[n]),k=Object(r.useCallback)((function(){for(var t=function(t){var e=[t,t+1,t+2],r=n[t],c=n[t]===g;return[6,7,14,15,22,23,30,31,38,39,46,47,54,55,63,64].includes(t)?"continue":e.every((function(t){return n[t]===r&&!c}))?(D((function(t){return t+3})),e.forEach((function(t){return n[t]=g})),{v:!0}):void 0},e=0;e<64;e++){var r=t(e);if("continue"!==r&&"object"===typeof r)return r.v}}),[n]),x=Object(r.useCallback)((function(){for(var t=function(t){var e=[t,t+8,t+16,t+24],r=n[t],c=n[t]===g;if(e.every((function(t){return n[t]===r&&!c})))return D((function(t){return t+4})),e.forEach((function(t){return n[t]=g})),{v:!0}},e=0;e<=39;e++){var r=t(e);if("object"===typeof r)return r.v}}),[n]),A=Object(r.useCallback)((function(){for(var t=function(t){var e=[t,t+1,t+2,t+3],r=n[t],c=n[t]===g;return[5,6,7,13,14,15,21,22,23,29,30,31,37,38,39,45,46,47,53,54,55,62,63,64].includes(t)?"continue":e.every((function(t){return n[t]===r&&!c}))?(D((function(t){return t+4})),e.forEach((function(t){return n[t]=g})),{v:!0}):void 0},e=0;e<64;e++){var r=t(e);if("continue"!==r&&"object"===typeof r)return r.v}}),[n]),S=Object(r.useCallback)((function(){for(var t=0;t<=55;t++){if([0,1,2,3,4,5,6,7].includes(t)&&n[t]===g){var e=Math.floor(Math.random()*O.length);n[t]=O[e]}var r=t+8;n[r]===g&&(n[r]=n[t],n[t]=g)}}),[n]),C=function(t){l(t.target)},I=function(t){p(t.target)},M=function(){var t=parseInt(j.getAttribute("data-id")),e=parseInt(b.getAttribute("data-id"));n[t]=b.getAttribute("src"),n[e]=j.getAttribute("src");var r=[e-1,e-8,e+1,e+8].includes(t),a=x(),u=A(),o=E(),f=k();t&&r&&(a||u||o||f)?(l(null),p(null)):(n[t]=j.getAttribute("src"),n[e]=b.getAttribute("src"),c(Object(i.a)(n)))};return Object(r.useEffect)((function(){!function(){for(var t=[],e=0;e<64;e++){var n=Math.floor(Math.random()*O.length),r=O[n];t.push(r)}c(t)}()}),[]),Object(r.useEffect)((function(){var t=setInterval((function(){x(),A(),E(),k(),S(),c(Object(i.a)(n))}),100);return function(){return clearInterval(t)}}),[x,A,E,k,S,n]),Object(f.jsxs)("div",{className:"app",children:[Object(f.jsx)(s,{score:m}),Object(f.jsx)("div",{className:"game",children:n.map((function(t,e){return Object(f.jsx)("img",{src:t,alt:t,"data-id":e,draggable:!0,onDragOver:function(t){return t.preventDefault()},onDragEnter:function(t){return t.preventDefault()},onDragLeave:function(t){return t.preventDefault()},onDragStart:C,onDrop:I,onDragEnd:M},e)}))})]})};u.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(h,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.79117ac1.chunk.js.map