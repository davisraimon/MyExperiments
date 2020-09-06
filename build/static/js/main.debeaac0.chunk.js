(this["webpackJsonpsudoku-client"]=this["webpackJsonpsudoku-client"]||[]).push([[0],{19:function(e,t,a){},25:function(e,t,a){e.exports=a(58)},30:function(e,t,a){},31:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),l=a.n(c),u=(a(30),a(31),a(4)),i=a(9),s=a.n(i),o=a(21),m=a(22),p=a.n(m),y=(a(56),Object(u.b)((function(e){return{grid:e.grid}}),{setInput:function(e,t,a){return function(n){n({type:"SET_INPUT",payload:{x:e,y:t,value:a}})}},setHighlight:function(e,t){return function(a){a({type:"HIGHLIGHT_CELL",payload:{x:e,y:t}})}}})((function(e){var t=e.setInput,a=e.setHighlight,n=e.x,c=e.y,l=e.disabled,u=e.grid,i=u.input,s=u.result,o=u.highlighted,m=e.type;return r.a.createElement(r.a.Fragment,null,"result"===m?r.a.createElement("input",{disabled:!0,maxLength:1,value:0!==s[n][c]?s[n][c]:"",className:"cell"}):r.a.createElement("input",{disabled:l,maxLength:1,onClick:function(){a(n,c)},value:0!==i[n][c]?i[n][c]:"",className:o[n][c]?"cell-highlighted":"cell",onChange:function(e){e.target.value?t(n,c,parseInt(e.target.value)):t(n,c,parseInt(0))}}))}))),d=(a(57),function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"grid"},r.a.createElement("div",{className:"grid-row"},r.a.createElement(y,{x:e.x,y:e.y,type:e.type}),r.a.createElement(y,{x:e.x,y:1+e.y,type:e.type}),r.a.createElement(y,{x:e.x,y:2+e.y,type:e.type})),r.a.createElement("div",{className:"grid-row"},r.a.createElement(y,{x:1+e.x,y:e.y,type:e.type}),r.a.createElement(y,{x:1+e.x,y:1+e.y,type:e.type}),r.a.createElement(y,{x:1+e.x,y:2+e.y,type:e.type})),r.a.createElement("div",{className:"grid-row"},r.a.createElement(y,{x:2+e.x,y:e.y,type:e.type}),r.a.createElement(y,{x:2+e.x,y:1+e.y,type:e.type}),r.a.createElement(y,{x:2+e.x,y:2+e.y,type:e.type}))))}),E=(a(19),function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"sudoku"},r.a.createElement("div",{className:"sudoku-row"},r.a.createElement("div",{className:"sudoku-box"},r.a.createElement(d,{x:0,y:0,type:e.type})),r.a.createElement("div",{className:"sudoku-box"},r.a.createElement(d,{x:0,y:3,type:e.type})),r.a.createElement("div",{className:"sudoku-box"},r.a.createElement(d,{x:0,y:6,type:e.type}))),r.a.createElement("div",{className:"sudoku-row"},r.a.createElement("div",{className:"sudoku-box"},r.a.createElement(d,{x:3,y:0,type:e.type})),r.a.createElement("div",{className:"sudoku-box"},r.a.createElement(d,{x:3,y:3,type:e.type})),r.a.createElement("div",{className:"sudoku-box"},r.a.createElement(d,{x:3,y:6,type:e.type}))),r.a.createElement("div",{className:"sudoku-row"},r.a.createElement("div",{className:"sudoku-box"},r.a.createElement(d,{x:6,y:0,type:e.type})),r.a.createElement("div",{className:"sudoku-box"},r.a.createElement(d,{x:6,y:3,type:e.type})),r.a.createElement("div",{className:"sudoku-box"},r.a.createElement(d,{x:6,y:6,type:e.type})))))}),v=Object(u.b)((function(e){return{grid:e.grid}}),{clearGrid:function(){return function(e){e({type:"CLEAR"})}},solveSudoku:function(e){return function(){var t=Object(o.a)(s.a.mark((function t(a){var n,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={headers:{"Content-Type":"application/json"}},t.next=3,p.a.post("/solve",e,n);case 3:r=t.sent,a({type:"SOLVE_SUDOKU",payload:r.data});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){e.setGrid;var t=e.clearGrid,a=e.solveSudoku,n=e.grid.input;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"App"},r.a.createElement("h3",null,"Sudoku"),r.a.createElement("button",{className:"btn btn-primary",onClick:function(){return t()}},"Clear"),r.a.createElement("button",{className:"btn btn-primary",onClick:function(){a(n)}},"Solve"),r.a.createElement("div",{className:"solver-board-container"},r.a.createElement("div",{className:"solver-board"},r.a.createElement(E,{type:"input"})),r.a.createElement("div",{className:"solver-board"},r.a.createElement(E,{type:"result"})))))})),x=a(23),g=a(24),h=a(2),b=a(3),f={input:[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]],result:[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]],highlighted:[[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1]]},N=Object(h.combineReducers)({grid:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"CLEAR":return{input:f.input,result:f.result,highlighted:f.highlighted};case"SET_INPUT":return Object(b.a)(Object(b.a)({},e),{},{input:e.input.map((function(e,t){return t===n.x?e.map((function(e,t){return t===n.y?n.value:e})):e}))});case"SOLVE_SUDOKU":return Object(b.a)(Object(b.a)({},e),{},{result:n});case"HIGHLIGHT_CELL":return Object(b.a)(Object(b.a)({},e),{},{highlighted:f.highlighted.map((function(e,t){return t===n.x?[!0,!0,!0,!0,!0,!0,!0,!0,!0]:e.map((function(e,a){var r=Math.floor(n.x/3),c=Math.floor(n.y/3);return a===n.y||!(t!==3*r&&t!==3*r+1&&t!==3*r+2||a!==3*c&&a!==3*c+1&&a!==3*c+2)}))}))});default:return Object(b.a)({},e)}}}),k=[g.a],O=Object(h.createStore)(N,{},Object(x.composeWithDevTools)(h.applyMiddleware.apply(void 0,k)));var j=function(){return r.a.createElement(u.a,{store:O},r.a.createElement(v,null))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.debeaac0.chunk.js.map