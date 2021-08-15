(this["webpackJsonpsimon-game"]=this["webpackJsonpsimon-game"]||[]).push([[0],{30:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var r,o,c,a,i,s,u,l=t(0),d=t.n(l),b=t(11),f=t.n(b),g=(t(30),t(10)),j=t(16),m=t(2),p=t(3),O={SET_POWER:"SET_POWER",SET_START:"SET_START",SET_STRICT:"SET_STRICT",SET_STEPS:"SET_STEPS",SET_CHILDREN:"SET_CHILDREN",USER_MOVE:"USER_MOVE",SET_SHOULD_RUN:"SET_SHOULD_RUN"},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return Math.floor(Math.random()*(n-e+1)+e)},v=t(4),S=t(5),E=S.a.div(r||(r=Object(v.a)(["\n    display: grid;\n    grid-template-columns: repeat(2, 2fr);\n    gap: 1rem;\n    border: 1rem solid #333333;\n    background-color: #333333;\n    border-radius: 50%;\n"]))),T=S.a.div(o||(o=Object(v.a)(["\n    width: 12rem;\n    height: 12rem;\n    cursor: pointer;\n\n    ","\n\n    &:active {\n        ","\n    }\n\n    ","\n\n    @media only screen and (max-width: 768px) {\n        width: 9.4rem;\n        height: 9.4rem;\n    }\n"])),(function(e){var n=e.styleColor;return"green"===n?"background-color : #00a74a; border-top-left-radius: 100%;":"red"===n?"background-color : #9f0f17; border-top-right-radius: 100%;":"yellow"===n?"background-color : #cca707; border-bottom-left-radius: 100%;":"background-color : #094a8f; border-bottom-right-radius: 100%;"}),(function(e){var n=e.styleColor;return"green"===n?"background-color : #13ff7c;":"red"===n?"background-color : #ff4c4c;":"yellow"===n?"background-color : #fed93f;":"background-color : #1c8cff;"}),(function(e){var n=e.styleColor;return e.mustActive&&("green"===n?"background-color : #13ff7c;":"red"===n?"background-color : #ff4c4c;":"yellow"===n?"background-color : #fed93f;":"background-color : #1c8cff;")})),y=t(1),x=[Object(y.jsx)(T,{styleColor:"green",mustActive:!1},"0"),Object(y.jsx)(T,{styleColor:"red",mustActive:!1},"1"),Object(y.jsx)(T,{styleColor:"yellow",mustActive:!1},"2"),Object(y.jsx)(T,{styleColor:"blue",mustActive:!1},"3")],w=function(e){var n=document.getElementById(e);n.currentTime=0,n.volume=1,n.play()},R={power:!1,start:!1,strict:!1,steps:[0],children:Object(p.a)(x),userMoves:[],shouldRun:!1},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,n=arguments.length>1?arguments[1]:void 0,t=n.type,r=n.payload;switch(t){case O.SET_POWER:return Object(m.a)(Object(m.a)({},e),{},{power:!e.power,steps:[0],children:Object(p.a)(x),userMoves:[]});case O.SET_START:return Object(m.a)(Object(m.a)({},e),{},{start:!e.start,steps:[0],children:Object(p.a)(x)});case O.SET_STRICT:return Object(m.a)(Object(m.a)({},e),{},{strict:!e.strict});case O.SET_STEPS:var o=h();return Object(m.a)(Object(m.a)({},e),{},{steps:[].concat(Object(p.a)(e.steps),[o])});case O.SET_CHILDREN:return Object(m.a)(Object(m.a)({},e),{},{children:Object(p.a)(r)});case O.USER_MOVE:var c=[].concat(Object(p.a)(e.userMoves),[r]);if(c.join("")===e.steps.slice(0,c.length).join("")){if(20===c.length)return window.alert("You won the game"),{power:!1,start:!1,strict:!1,steps:[0],children:Object(p.a)(x),userMoves:[],shouldRun:!1};if(c.length===e.steps.length){var a=h();return Object(m.a)(Object(m.a)({},e),{},{steps:[].concat(Object(p.a)(e.steps),[a]),start:!e.start,shouldRun:!0,userMoves:[]})}return Object(m.a)(Object(m.a)({},e),{},{userMoves:Object(p.a)(c)})}return w("4"),!0===e.strict?Object(m.a)(Object(m.a)({},e),{},{start:!1,userMoves:[],steps:[0],shouldRun:!0}):Object(m.a)(Object(m.a)({},e),{},{start:!1,userMoves:[],shouldRun:!0});case O.SET_SHOULD_RUN:return Object(m.a)(Object(m.a)({},e),{},{shouldRun:r});default:return e}},k=Object(g.b)({board:_}),C=[j.a],M=Object(g.c)(k,g.a.apply(void 0,C)),P=t(20),U=t(21),A=t(25),I=t(24),N=S.a.div(c||(c=Object(v.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100vw;\n    height: 100vh;\n    overflow: hidden;\n"]))),D=t(7),H=t(14),L=t.n(H),z=t(22),V=t(23),W=S.a.div(a||(a=Object(v.a)(["\n    background-color: white;\n    border-radius: 100%;\n    position: absolute;\n    margin-left: 4.9rem;\n    margin-top: 4.9rem;\n    width: 14rem;\n    height: 14rem;\n    display: flex;\n    flex-direction: column;\n    border: 0.7rem solid #333333;\n\n    @media only screen and (max-width: 768px) {\n        width: 12rem;\n        height: 12rem;\n        margin-left: 3.2rem;\n        margin-top: 3.5rem;\n    }\n"]))),B=S.a.span(i||(i=Object(v.a)(["\n    color: rgb(24, 22, 22);\n    font-family: 'Proxima Nova Extrabold';\n    font-size: 4.2rem;\n    text-align: center;\n    margin-top: 2rem;\n    height: 35px;\n\n    @media only screen and (max-width: 768px) {\n        margin-top: 1.2rem;\n        font-size: 3.4rem;\n    }\n"]))),J=S.a.div(s||(s=Object(v.a)(["\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    margin-left: auto;\n    margin-right: auto;\n    padding: 0.7rem;\n    gap: 0.4rem;\n    margin-top: 2rem;\n\n    @media only screen and (max-width: 768px) {\n        grid-template-columns: 2fr 1fr 1fr;\n        margin-top: 1rem;\n    }\n"]))),Y=S.a.button(u||(u=Object(v.a)(["\n    font-size: 1.4rem;\n    outline: none;\n    border: none;\n    color: #333333;\n    border-radius: 1rem;\n    padding: 0.3rem;\n    border: 0.2rem solid #333333;\n    cursor: pointer;\n\n    ","\n\n    ","\n\n    @media only screen and (max-width: 768px) {\n        font-size: 1.4rem;\n        padding: 0.2rem;\n    }\n"])),(function(e){return e.visible&&"opacity: 0.5;"}),(function(e){var n=e.noc;return"count"===n?"background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);":"start"===n?"background-image: linear-gradient(to top, #ff0844 0%, #ffb199 100%);":"strict"===n?"background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);":"\n                margin-left: auto;\n                margin-right: auto;\n                background-color: #1c90dd;"})),q=function(e){return new Promise((function(n){return setTimeout(n,e)}))},F={0:"green",1:"red",2:"yellow",3:"blue"},G=Object(D.b)((function(e){var n=e.board;return Object(m.a)({},n)}),(function(e){return{togglePower:function(){return e({type:O.SET_POWER})},toggleStart:function(){return e({type:O.SET_START})},toggleStrict:function(){return e({type:O.SET_STRICT})},updateSteps:function(){return e({type:O.SET_STEPS})},setChildren:function(n){return e(function(e){return{type:O.SET_CHILDREN,payload:Object(p.a)(e)}}(n))},userMove:function(n){return e({type:O.USER_MOVE,payload:n})},setShouldRun:function(n){return e(function(e){return{type:O.SET_SHOULD_RUN,payload:e}}(n))}}}))((function(e){var n=e.power,t=e.strict,r=e.steps,o=e.togglePower,c=e.toggleStart,a=e.toggleStrict,i=e.setChildren,s=e.userMove,u=e.shouldRun,l=e.setShouldRun,d=function(){var e=Object(V.a)(L.a.mark((function e(){var n,t,o,c,a,u,l,d;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q(1e3);case 2:o=Object(z.a)(r),e.prev=3,o.s();case 5:if((c=o.n()).done){e.next=16;break}return a=c.value,t=Object(p.a)(x),n=Object(y.jsx)(T,{styleColor:F[a],mustActive:!0},"".concat(a)),t[a]=n,i(t),w("".concat(a)),e.next=14,q(1e3);case 14:e.next=5;break;case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(3),o.e(e.t0);case 21:return e.prev=21,o.f(),e.finish(21);case 24:for(u=[],l=function(e){u.push(Object(y.jsx)(T,{styleColor:F[e],onClick:function(){w("".concat(e)),s(e)}},e))},d=0;d<4;d+=1)l(d);i([].concat(u));case 28:case"end":return e.stop()}}),e,null,[[3,18,21,24]])})));return function(){return e.apply(this,arguments)}}();return!0===u&&(d(),l(!1)),Object(y.jsxs)(W,{children:[Object(y.jsx)(B,{children:"Simon"}),Object(y.jsxs)(J,{children:[Object(y.jsx)(Y,{noc:"count",visible:!n,children:r.length>0&&n?r.length:"--"}),Object(y.jsx)(Y,{noc:"start",visible:!n,onClick:function(){n&&(c(),d())},children:"Start"}),Object(y.jsx)(Y,{noc:"strict",visible:!t,onClick:function(){return n&&a()},children:"Strict"})]}),Object(y.jsx)(Y,{noc:"switch",visible:!n,onClick:o,children:"On/Off"})]})})),K=Object(D.b)((function(e){var n=e.board;return Object(m.a)({},n)}))((function(e){var n=e.children,t=e.power;return Object(y.jsxs)(E,{children:[Object(y.jsx)(G,{}),t?n:x]})})),Q=function(e){Object(A.a)(t,e);var n=Object(I.a)(t);function t(){return Object(P.a)(this,t),n.apply(this,arguments)}return Object(U.a)(t,[{key:"render",value:function(){return Object(y.jsx)(N,{children:Object(y.jsx)(K,{})})}}]),t}(d.a.Component);f.a.render(Object(y.jsx)(d.a.StrictMode,{children:Object(y.jsx)(D.a,{store:M,children:Object(y.jsx)(Q,{})})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.2c19e471.chunk.js.map