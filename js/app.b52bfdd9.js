(function(t){function e(e){for(var a,o,s=e[0],c=e[1],l=e[2],p=0,h=[];p<s.length;p++)o=s[p],i[o]&&h.push(i[o][0]),i[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(h.length)h.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(a=!1)}a&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},i={app:0},r=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1faf":function(t,e,n){"use strict";var a=n("92c5"),i=n.n(a);i.a},2500:function(t,e,n){"use strict";var a=n("5a2e"),i=n.n(a);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app"},[n("HeaderSection"),n("Commentary",{attrs:{message:t.robotMessage}}),n("div",{staticClass:"app__arena"},[n("TableTop"),n("Robot",{ref:"robot",on:{botTalked:t.onBotTalk}})],1),n("div",{staticClass:"app__controller"},[n("h2",{staticClass:"app__heading"},[t._v("\n            Button inputs\n        ")]),n("p",{staticClass:"app__paragraph"},[t._v("Here you can adjust the inputs and press the buttons to control the robot.")]),n("div",{staticClass:"app__controls-row"},[n("label",{staticClass:"app__label",attrs:{for:"place-x-position"}},[t._v("X")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.currentPlaceX,expression:"currentPlaceX"}],staticClass:"app__input",attrs:{id:"place-x-position",type:"number",min:"0",max:"4"},domProps:{value:t.currentPlaceX},on:{change:t.onXInputChanged,input:function(e){e.target.composing||(t.currentPlaceX=e.target.value)}}}),n("label",{staticClass:"app__label",attrs:{for:"place-y-position"}},[t._v("Y")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.currentPlaceY,expression:"currentPlaceY"}],staticClass:"app__input",attrs:{id:"place-y-position",type:"number",min:"0",max:"4"},domProps:{value:t.currentPlaceY},on:{change:t.onYInputChanged,input:function(e){e.target.composing||(t.currentPlaceY=e.target.value)}}}),n("label",{staticClass:"app__label",attrs:{for:"place-direction"}},[t._v("Direction")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.currentPlaceDirection,expression:"currentPlaceDirection"}],staticClass:"app__select",attrs:{id:"place-direction"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.currentPlaceDirection=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"NORTH"}},[t._v("NORTH")]),n("option",{attrs:{value:"EAST"}},[t._v("EAST")]),n("option",{attrs:{value:"SOUTH"}},[t._v("SOUTH")]),n("option",{attrs:{value:"WEST"}},[t._v("WEST")])]),n("button",{staticClass:"app__button",attrs:{disabled:!t.allowInteraction},on:{click:t.onPlaceClicked}},[t._v("\n                Place\n            ")])]),n("div",{staticClass:"app__controls-row"},[n("button",{staticClass:"app__button",attrs:{disabled:!t.allowInteraction},on:{click:t.onLeftClicked}},[t._v("\n                Left\n            ")]),n("button",{staticClass:"app__button",attrs:{disabled:!t.allowInteraction},on:{click:t.onRightClicked}},[t._v("\n                Right\n            ")]),n("button",{staticClass:"app__button",attrs:{disabled:!t.allowInteraction},on:{click:t.onMoveClicked}},[t._v("\n                Move\n            ")]),n("button",{staticClass:"app__button",attrs:{disabled:!t.allowInteraction},on:{click:t.onReportClicked}},[t._v("\n                Report\n            ")])]),n("div",{staticClass:"app__manual"},[n("h2",{staticClass:"app__heading",attrs:{for:"manual-input"}},[t._v("\n                Text input\n            ")]),n("p",{staticClass:"app__paragraph"},[t._v("Here you can write a list of commands and press play to watch them be executed in order. Please separate with a line between commands.")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.manualInput,expression:"manualInput"}],staticClass:"app__text-area",attrs:{id:"manual-input"},domProps:{value:t.manualInput},on:{input:function(e){e.target.composing||(t.manualInput=e.target.value)}}},[t._v("                PLACE 2,3,EAST\n                MOVE\n                MOVE\n                MOVE\n                LEFT\n                MOVE\n                REPORT\n            ")]),n("button",{staticClass:"app__button",on:{click:t.onPlayClicked}},[t._v("\n                Play\n            ")]),n("h3",[t._v("Commands")]),t._m(0)])])],1)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[t._v("PLACE X,Y,F (X = 0-4, Y = 0-4, F = NORTH, SOUTH, EAST, WEST)")]),n("li",[t._v("MOVE")]),n("li",[t._v("LEFT")]),n("li",[t._v("RIGHT")]),n("li",[t._v("REPORT")])])}],o=(n("28a5"),function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("h1",{staticClass:"header__title"},[t._v("Table Top Robot")])])}],c={name:"header-section"},l=c,u=(n("2500"),n("2877")),p=Object(u["a"])(l,o,s,!1,null,"25e1cbde",null);p.options.__file="HeaderSection.vue";var h=p.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"commentary"},[n("p",{staticClass:"commentary__message"},[t._v(t._s(t.message))])])},d=[],f={name:"commentary",props:{message:{type:String,default:""}}},v=f,_=(n("9363"),Object(u["a"])(v,m,d,!1,null,"48022318",null));_.options.__file="Commentary.vue";var b=_.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table-top"},t._l(t.gridSize,function(e){return n("div",{key:"row-"+e,staticClass:"table-top__row"},t._l(t.gridSize,function(t){return n("div",{key:"tile-"+e+"-"+t,staticClass:"table-top__tile"})}))}))},C=[],P={name:"table-top",data:function(){return{gridSize:5}}},T=P,w=(n("1faf"),Object(u["a"])(T,g,C,!1,null,"e14a270e",null));w.options.__file="TableTop.vue";var y=w.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"robotBody",staticClass:"robot"},[t.isPlaced?n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z"}})]):t._e()])},E=[],I=n("cffa"),O={name:"NORTH",angle:270},M={name:"EAST",angle:0},x={name:"SOUTH",angle:90},R={name:"WEST",angle:180},S=function(t){switch(t){case O.name:return R.name;case R.name:return x.name;case x.name:return M.name;case M.name:return O.name}return null},Y=function(t){switch(t){case O.name:return M.name;case M.name:return x.name;case x.name:return R.name;case R.name:return O.name}return null},X=function(t){return L(t).angle},L=function(t){switch(t){case O.name:return O;case M.name:return M;case x.name:return x;case R.name:return R}return null},B=function(t,e,n){var a=t,i=e;switch(n){case O.name:i+=1;break;case M.name:a+=1;break;case x.name:i-=1;break;case R.name:a-=1;break}return a>=0&&a<5&&i>=0&&i<5?{x:a,y:i}:null},D=function(t){return t===O.name||t===M.name||t===x.name||t===R.name},H={name:"robot",data:function(){return{isPlaced:!1,currentX:null,currentY:null,currentDirection:null,isMoving:!1}},methods:{place:function(t,e,n){t>=0&&t<5&&e>=0&&e<5?(this.isPlaced=!0,this.currentX=t,this.currentY=e,this.currentDirection=n,I["a"].to(this.$refs.robotBody,0,{top:50*(4-this.currentY),left:50*this.currentX,rotation:X(this.currentDirection)}),this.talk("You have placed me at ".concat(this.currentX,",").concat(this.currentY," facing ").concat(this.currentDirection,"."))):this.talk("If you place me there I will fall off the table.")},move:function(){if(this.isPlaced&&!this.isMoving){var t=B(this.currentX,this.currentY,this.currentDirection);t?(this.isMoving=!0,this.currentX=t.x,this.currentY=t.y,this.talk("I am moving ".concat(this.currentDirection.toLowerCase())),I["a"].to(this.$refs.robotBody,.5,{top:50*(4-this.currentY),left:50*this.currentX,onComplete:this.onMovingEnded})):this.talk("It appears that move would lead to my demise.")}else this.isPlaced||this.talk("I can't move till you have placed me.")},left:function(){this.isPlaced&&!this.isMoving?(this.isMoving=!0,this.currentDirection=S(this.currentDirection),I["a"].to(this.$refs.robotBody,.5,{rotation:"-=90",onComplete:this.onMovingEnded}),this.talk("Beep Boop Turning Left.")):this.isPlaced||this.talk("I can't turn left since you haven't placed me.")},right:function(){this.isPlaced&&!this.isMoving?(this.isMoving=!0,this.currentDirection=Y(this.currentDirection),I["a"].to(this.$refs.robotBody,.5,{rotation:"+=90",onComplete:this.onMovingEnded}),this.talk("Beep Boop Turning Right.")):this.isPlaced||this.talk("I can't turn right since you haven't placed me.")},onMovingEnded:function(){this.isMoving=!1},talk:function(t){this.$emit("botTalked",t)},report:function(){this.isPlaced&&!this.isMoving?this.talk("".concat(this.currentX,",").concat(this.currentY,",").concat(this.currentDirection)):this.isPlaced||this.talk("I am not currently placed.")}}},j=H,$=(n("a639"),Object(u["a"])(j,k,E,!1,null,"1f67695c",null));$.options.__file="Robot.vue";var A=$.exports,V={name:"app",components:{HeaderSection:h,Commentary:b,TableTop:y,Robot:A},data:function(){return{robotMessage:"Awaiting orders",robot:null,currentPlaceX:0,currentPlaceY:0,currentPlaceDirection:"NORTH",manualInput:"PLACE 2,3,EAST\nMOVE\nMOVE\nMOVE\nLEFT\nMOVE\nREPORT",allowInteraction:!0,commandList:[]}},mounted:function(){this.robot=this.$refs.robot},methods:{onLeftClicked:function(){this.allowInteraction&&this.robot.left()},onRightClicked:function(){this.allowInteraction&&this.robot.right()},onMoveClicked:function(){this.allowInteraction&&this.robot.move()},onPlaceClicked:function(){this.allowInteraction&&this.robot.place(parseInt(this.currentPlaceX),parseInt(this.currentPlaceY),this.currentPlaceDirection)},onReportClicked:function(){this.allowInteraction&&this.robot.report()},onPlayClicked:function(){""!==this.manualInput&&(this.allowInteraction=!1,this.commandList=this.manualInput.split("\n"),this.processManualQueue())},onXInputChanged:function(){this.currentPlaceX||(this.currentPlaceX=0)},onYInputChanged:function(){this.currentPlaceY||(this.currentPlaceY=0)},onBotTalk:function(t){this.robotMessage=t},processManualQueue:function(){var t=this;if(this.commandList.length>0){var e=this.commandList[0].toUpperCase();if("MOVE"===e.trim())this.robot.move();else if("LEFT"===e.trim())this.robot.left();else if("RIGHT"===e.trim())this.robot.right();else if("REPORT"===e.trim())this.robot.report();else if("PLACE"===e.substring(0,5)){var n=e.split(" "),a=n[1].split(",");if(3===a.length){var i=parseInt(a[0]),r=parseInt(a[1]),o=a[2].toUpperCase();D(o)?this.robot.place(i,r,o):this.onBotTalk("One of the placement inputs is invalid.")}else this.onBotTalk("That appears to be an invalid placement command.")}else this.onBotTalk("That order does not compute.");this.commandList.shift(),setTimeout(function(){t.processManualQueue()},1e3)}else this.allowInteraction=!0,this.onBotTalk("Tasks are complete.")}}},N=V,F=(n("b1eb"),Object(u["a"])(N,i,r,!1,null,"b65f6f96",null));F.options.__file="App.vue";var U=F.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(U)}}).$mount("#app")},"5a2e":function(t,e,n){},"5b46":function(t,e,n){},"92c5":function(t,e,n){},9363:function(t,e,n){"use strict";var a=n("f72c"),i=n.n(a);i.a},a639:function(t,e,n){"use strict";var a=n("5b46"),i=n.n(a);i.a},b1eb:function(t,e,n){"use strict";var a=n("e8ab"),i=n.n(a);i.a},e8ab:function(t,e,n){},f72c:function(t,e,n){}});
//# sourceMappingURL=app.b52bfdd9.js.map