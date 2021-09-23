(this["webpackJsonpfront-code-challenge-react-js-project"]=this["webpackJsonpfront-code-challenge-react-js-project"]||[]).push([[0],{41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n.n(s),a=n(20),o=n.n(a),i=n(7),r={questions:[],currentQuestion:null,questionsResponses:[],numberOfQuestions:0,difficulty:"easy",total:0,goodResponses:0,complete:!1,getQuestion:function(){},saveResponse:function(){},setComplete:function(){},resetGame:function(){},setQuestions:function(){},changeDifficulty:function(){}},u=c.a.createContext(r),l=[{name:"Any Difficulty",value:""},{name:"Easy",value:"easy"},{name:"Medium",value:"medium"},{name:"Hard",value:"hard"}],j=n(12),d=n(1),b=function(e){var t=e.text,n=e.primary,s=e.secundary,c=e.to;return Object(d.jsx)(j.b,{to:c,children:Object(d.jsx)("div",{className:"btn-link \n            ".concat(n?"bg-primary text-white":" ","\n            ").concat(s?"bg-segundary text-black":" ","\n            "),children:t})})},f=function(){var e=Object(s.useState)("hard"),t=Object(i.a)(e,2),n=t[0],c=t[1],a=Object(s.useContext)(u),o=a.resetGame,r=a.changeDifficulty;Object(s.useEffect)((function(){o()}),[]),Object(s.useEffect)((function(){r(n)}),[n]);return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("div",{className:"title-page",children:"Welcome to the Trivia Challenge"}),Object(d.jsx)("div",{className:"information-game",children:"You will be presented with 10 True or False questions."}),Object(d.jsx)("div",{className:"information-game",children:"Can you score 100%?"}),Object(d.jsx)("div",{className:"container-select",children:Object(d.jsx)("select",{onChange:function(e){var t=e.target;c(t.value)},children:l.map((function(e,t){return Object(d.jsxs)("option",{value:e.value,children:[e.name," "]},t)}))})}),Object(d.jsx)("div",{className:"button-start",children:Object(d.jsx)(b,{to:"/questions",primary:!0,text:"BEGIN"})})]})},p=n(5),O=n(24),m=function(e,t){switch(t.type){case"set_questions":return Object(p.a)(Object(p.a)({},e),{},{questions:t.payload,total:t.payload.length});case"get_question":return Object(p.a)(Object(p.a)({},e),t.payload);case"save_response":return Object(p.a)(Object(p.a)({},e),{},{questionsResponses:t.payload});case"set_complete":return Object(p.a)(Object(p.a)({},e),{},{complete:t.payload});case"change_difficulty":return Object(p.a)(Object(p.a)({},e),{},{difficulty:t.payload});case"reset_game":return r;default:return e}},x=function(e){var t=e.children,n=Object(s.useReducer)(m,r),c=Object(i.a)(n,2),a=c[0],o=c[1];Object(s.useEffect)((function(){l(0)}),[a.questions]);var l=function(e){var t=a.questions.find((function(t,n){return n===e}));t&&o({type:"get_question",payload:{currentQuestion:t,numberOfQuestions:e}})};return Object(d.jsx)(u.Provider,{value:{questions:a.questions,currentQuestion:a.currentQuestion,numberOfQuestions:a.numberOfQuestions,questionsResponses:a.questionsResponses,total:a.total,goodResponses:a.goodResponses,complete:a.complete,difficulty:a.difficulty,getQuestion:l,saveResponse:function(e){if(a.currentQuestion){var t=!1,n=a.goodResponses;a.currentQuestion.correct_answer===e&&(t=!0,n=a.goodResponses++);var s=[].concat(Object(O.a)(a.questionsResponses),[Object(p.a)(Object(p.a)({},a.currentQuestion),{},{response:t,goodsResponses:n})]);o({type:"save_response",payload:s})}},setComplete:function(e){o({type:"set_complete",payload:e})},resetGame:function(){o({type:"reset_game"})},setQuestions:function(e){o({type:"set_questions",payload:e})},changeDifficulty:function(e){o({type:"change_difficulty",payload:e})}},children:t})},h=n(3),v=n(17),y=n.n(v),g=n(23),q=function(){var e=Object(g.a)(y.a.mark((function e(t){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://opentdb.com/").concat(t));case 2:if(200!==(n=e.sent).status){e.next=5;break}return e.abrupt("return",n.json());case 5:return e.abrupt("return",!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(s.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1];return{questions:n,getQuestions:function(e){q("api.php?amount=10&type=boolean".concat(e?"&difficulty=".concat(e):""," ")).then((function(e){e&&c(e.results)}))}}},C=function(e){var t=e.text,n=e.primary,s=e.secundary,c=e.onClick;return Object(d.jsx)("button",{type:"button",onClick:function(){return c()},className:"btn \n            ".concat(n?"bg-primary text-white":" ","\n            ").concat(s?"bg-segundary text-black":" ","\n            "),children:t})},Q=function(e){var t=e.title,n=e.question,s=e.onClick;return Object(d.jsxs)("div",{className:"card",children:[Object(d.jsxs)("div",{className:"card-question",children:[Object(d.jsx)("div",{className:"card-category-title",children:t}),Object(d.jsx)("div",{className:"card-question-content",children:n})]}),Object(d.jsxs)("div",{className:"buttons",children:[Object(d.jsx)(C,{onClick:function(){return s("False")},secundary:!0,text:"False"}),Object(d.jsx)(C,{onClick:function(){return s("True")},primary:!0,text:"True"})]})]})},R=function(){var e=Object(s.useContext)(u),t=e.currentQuestion,n=e.getQuestion,c=e.numberOfQuestions,a=e.saveResponse,o=e.total,i=e.setComplete,r=e.setQuestions,l=e.difficulty,j=N(),b=j.getQuestions,f=j.questions;Object(s.useEffect)((function(){b(l)}),[]),Object(s.useEffect)((function(){r(f)}),[f]);return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("div",{className:"title-page",children:"Front Coding Challenge"}),t?Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"subcontainer",children:[Object(d.jsx)(Q,{onClick:function(e){a(e);var t=c+1;if(t<o)return n(t),!0;i(!0)},title:t.category,question:t.question}),Object(d.jsx)("div",{className:"paginate-question",children:"".concat(c+1," / 10")})]})}):Object(d.jsx)("div",{children:"cargando"})]})},k=n(19),_=n(18),w=function(e){var t=e.text,n=e.response;return Object(d.jsxs)("div",{className:"card-result-question",children:[n?Object(d.jsx)(_.a,{icon:k.a}):Object(d.jsx)(_.a,{icon:k.b}),Object(d.jsx)("div",{children:t})]})},E=function(){var e=Object(s.useContext)(u),t=e.questionsResponses,n=e.total,c=e.goodResponses,a=e.resetGame,o=Object(s.useState)(!1),r=Object(i.a)(o,2),l=r[0],j=r[1];return Object(d.jsxs)("div",{className:"container height-100",children:[Object(d.jsx)("div",{className:"title-page",children:"You score \n ".concat(c,"/").concat(n)}),l?Object(d.jsx)(h.a,{to:"/"}):Object(d.jsx)("div",{className:"result-container",children:t.map((function(e,t){return Object(d.jsx)(w,{text:e.question,response:e.response},t)}))}),Object(d.jsxs)("div",{className:"buttons-results",children:[Object(d.jsx)(C,{primary:!0,text:"PLAY AGAIN?",onClick:a}),Object(d.jsx)(C,{secundary:!0,text:"GO TO START?",onClick:function(){return j(!0)}})]})]})},G=function(){return Object(s.useContext)(u).complete?Object(d.jsx)(E,{}):Object(d.jsx)(R,{})},T=function(){return Object(d.jsx)(x,{children:Object(d.jsx)(j.a,{children:Object(d.jsxs)(h.d,{children:[Object(d.jsx)(h.b,{path:"/questions",component:G}),Object(d.jsx)(h.b,{exact:!0,path:"/",component:f})]})})})};n(41);o.a.render(Object(d.jsx)(T,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.df685563.chunk.js.map