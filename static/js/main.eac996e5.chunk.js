(this["webpackJsonpsimon-game"]=this["webpackJsonpsimon-game"]||[]).push([[0],{24:function(e,t,c){},28:function(e,t,c){},33:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),a=c(7),s=c.n(a),o=(c(24),c(6)),i=c(13),u=(c(25),c(2)),l=c(3),b={SET_POWER:"SET_POWER",SET_START:"SET_START",SET_STRICT:"SET_STRICT",SET_STEPS:"SET_STEPS",SET_CHILDREN:"SET_CHILDREN",USER_MOVE:"USER_MOVE",SET_SHOULD_RUN:"SET_SHOULD_RUN"},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return Math.floor(Math.random()*(t-e+1)+e)},d=c(1),O=[Object(d.jsx)("div",{className:"child-box green"},"0"),Object(d.jsx)("div",{className:"child-box red"},"1"),Object(d.jsx)("div",{className:"child-box yellow"},"2"),Object(d.jsx)("div",{className:"child-box blue"},"3")],S=function(e){var t=document.getElementById(e);t.currentTime=0,t.volume=1,t.play()},p={power:!1,start:!1,strict:!1,steps:[0],children:Object(l.a)(O),userMoves:[],shouldRun:!1},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0,c=t.type,n=t.payload;switch(c){case b.SET_POWER:return Object(u.a)(Object(u.a)({},e),{},{power:!e.power,steps:[0],children:Object(l.a)(O),userMoves:[]});case b.SET_START:return Object(u.a)(Object(u.a)({},e),{},{start:!e.start,steps:[0],children:Object(l.a)(O)});case b.SET_STRICT:return Object(u.a)(Object(u.a)({},e),{},{strict:!e.strict});case b.SET_STEPS:var r=j();return Object(u.a)(Object(u.a)({},e),{},{steps:[].concat(Object(l.a)(e.steps),[r])});case b.SET_CHILDREN:return Object(u.a)(Object(u.a)({},e),{},{children:Object(l.a)(n)});case b.USER_MOVE:var a=[].concat(Object(l.a)(e.userMoves),[n]);if(a.join("")===e.steps.slice(0,a.length).join("")){if(a.length===e.steps.length){var s=j();return Object(u.a)(Object(u.a)({},e),{},{steps:[].concat(Object(l.a)(e.steps),[s]),start:!e.start,shouldRun:!0,userMoves:[]})}return Object(u.a)(Object(u.a)({},e),{},{userMoves:Object(l.a)(a)})}return S("4"),!0===e.strict?Object(u.a)(Object(u.a)({},e),{},{start:!1,userMoves:[],steps:[0],shouldRun:!0}):Object(u.a)(Object(u.a)({},e),{},{start:!1,userMoves:[],shouldRun:!0});case b.SET_SHOULD_RUN:return Object(u.a)(Object(u.a)({},e),{},{shouldRun:n});default:return e}},v=Object(o.b)({board:h}),f=[i.a];var E=Object(o.c)(v,o.a.apply(void 0,f)),T=c(14),x=c(15),R=c(19),_=c(18),m=(c(28),c(4)),g=(c(33),c(12)),N=c.n(g),y=c(16),w=c(17),M=(c(35),function(e){return new Promise((function(t){return setTimeout(t,e)}))}),C={0:"green",1:"red",2:"yellow",3:"blue"},U=Object(m.b)((function(e){var t=e.board;return Object(u.a)({},t)}),(function(e){return{togglePower:function(){return e({type:b.SET_POWER})},toggleStart:function(){return e({type:b.SET_START})},toggleStrict:function(){return e({type:b.SET_STRICT})},updateSteps:function(){return e({type:b.SET_STEPS})},setChildren:function(t){return e(function(e){return{type:b.SET_CHILDREN,payload:Object(l.a)(e)}}(t))},userMove:function(t){return e({type:b.USER_MOVE,payload:t})},setShouldRun:function(t){return e(function(e){return{type:b.SET_SHOULD_RUN,payload:e}}(t))}}}))((function(e){var t=e.power,c=(e.start,e.strict),n=e.steps,r=e.togglePower,a=e.toggleStart,s=e.toggleStrict,o=(e.updateSteps,e.setChildren),i=(e.children,e.userMove),u=e.shouldRun,b=e.setShouldRun,j=function(){var e=Object(w.a)(N.a.mark((function e(){var t,c,r,a,s,u,b,j,p;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M(1e3);case 2:r=Object(y.a)(n),e.prev=3,r.s();case 5:if((a=r.n()).done){e.next=17;break}return s=a.value,c=Object(l.a)(O),u="child-box ".concat(C[s]," ").concat(C[s],"-active"),t=Object(d.jsx)("div",{className:u},"".concat(s)),c[s]=t,o(c),S("".concat(s)),e.next=15,M(1e3);case 15:e.next=5;break;case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(3),r.e(e.t0);case 22:return e.prev=22,r.f(),e.finish(22);case 25:for(b=[],j=function(e){b.push(Object(d.jsx)("div",{className:"child-box ".concat(C[e]),onClick:function(){S("".concat(e)),i(e)}},e))},p=0;p<4;p+=1)j(p);o([].concat(b));case 29:case"end":return e.stop()}}),e,null,[[3,19,22,25]])})));return function(){return e.apply(this,arguments)}}();return!0===u&&(j(),b(!1)),Object(d.jsxs)("div",{className:"center-box",children:[Object(d.jsx)("span",{className:"title",children:"Simon"}),Object(d.jsxs)("div",{className:"disp-btns",children:[Object(d.jsx)("button",{className:"count ".concat(t?"":"disabled"),children:n.length>0&&t?n.length:"--"}),Object(d.jsx)("button",{className:"start ".concat(t?"":"disabled"),onClick:function(){t&&(a(),j())},children:"Start"}),Object(d.jsx)("button",{className:"strict ".concat(t&&c?"":"disabled"),onClick:function(){return t&&s()},children:"Strict"})]}),Object(d.jsx)("button",{className:"switch ".concat(t?"":"disabled"),onClick:r,children:"On/Off"})]})})),k=Object(m.b)((function(e){var t=e.board;return Object(u.a)({},t)}))((function(e){var t=e.children,c=e.power;return Object(d.jsxs)("div",{className:"parent-box",children:[Object(d.jsx)(U,{}),c?t:O]})})),P=function(e){Object(R.a)(c,e);var t=Object(_.a)(c);function c(){return Object(T.a)(this,c),t.apply(this,arguments)}return Object(x.a)(c,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"app-container",children:Object(d.jsx)(k,{})})}}]),c}(r.a.Component);s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(m.a,{store:E,children:Object(d.jsx)(P,{})})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.eac996e5.chunk.js.map