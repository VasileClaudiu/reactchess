(this["webpackJsonpreact-newchess"]=this["webpackJsonpreact-newchess"]||[]).push([[0],{106:function(e,t,s){"use strict";s.r(t);var a=s(7),i=s.n(a),n=s(31),r=s.n(n),c=(s(59),s(5)),l=s(6),o=s(8),m=s(9),d=(s(60),s(53)),u=s(10),h=s(2),p=function(){return Object(h.jsx)("div",{className:"mx-auto",children:Object(h.jsx)("h2",{style:{color:"white",top:"80px"},children:"This is Route not Found Page"})})},g=s(0),b=s.n(g),j=s(4),f=s(11),v=s(15),O=s(23),x=s(52),k=Object(x.a)({apiKey:"AIzaSyCu16vARVD7XDrpJXf27ZsR-989KviXszE",authDomain:"flutterchess-3cef8.firebaseapp.com",databaseURL:"https://flutterchess-3cef8-default-rtdb.firebaseio.com",projectId:"flutterchess-3cef8",storageBucket:"flutterchess-3cef8.appspot.com",messagingSenderId:"131571873400",appId:"1:131571873400:web:3c68cfa82f287a6f011f8d"}),y=(Object(v.b)(k),s(16)),w=s.n(y),N=s(33),C=s.n(N),S=function(){var e=Object(v.b)(),t=Object(O.b)(),s=Object(a.useRef)(null),i=Object(a.useRef)(null),n=Object(a.useState)(0),r=Object(f.a)(n,2),c=r[0],l=r[1],o=Object(a.useState)(""),m=Object(f.a)(o,2),d=m[0],u=m[1],p=Object(a.useState)(""),g=Object(f.a)(p,2),x=g[0],k=g[1],y=Object(a.useState)(""),N=Object(f.a)(y,2),S=N[0],P=N[1],T={borderRadius:"25px",backgroundColor:"lightblue"};function _(t){localStorage.setItem("authlogin","true"),localStorage.setItem("user_id",t);var s=C()().format("DD/MM/YYYY HH:mm:ss"),a=Object(v.d)(Object(v.a)(Object(v.e)(e),"logs")).key;Object(v.f)(Object(v.e)(e,"logs/"+a),{id:c+1,status:1,message:"User Login",agent:navigator.userAgent,ip:d,location:x,user_id:t,time:s})}return Object(a.useEffect)((function(){var t=Object(v.e)(e,"/logs");Object(v.c)(t,(function(e){var t=[];e.forEach((function(e){var s=e.val();t.push({id:s.id,status:s.status,message:s.message,agent:s.agent,ip:s.ip,location:s.location,user_id:s.user_id,time:s.time}),l(t.length),fetch("http://ip-api.com/json").then((function(e){return e.json()})).then((function(e){setTimeout((function(){u(e.query),k(e.country+"#"+e.city)}),300)}))}))})),w()(".container-fluid").css("position","fixed")})),Object(h.jsxs)("div",{className:"mx-auto col-6",style:{backgroundColor:"#282c34",color:"white"},children:[Object(h.jsx)("h2",{className:"mx-auto col-9",children:"This is Login Page"}),Object(h.jsxs)("div",{className:"card was-validated col-9 col-sm-9 col-md-9 col-lg-9 col-xl-9 mx-auto",style:T,children:[Object(h.jsx)("h1",{className:"h3 mb-3 font-weight-normal",style:{color:"blue"},children:"Please sign in"}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{htmlFor:"inputEmail",className:"sr-only",children:"Email address"}),Object(h.jsx)("input",{ref:s,type:"email",id:"inputEmail",className:"form-control",placeholder:"Email address",required:!0,autoFocus:!0}),Object(h.jsx)("div",{className:"valid-feedback"}),Object(h.jsx)("div",{className:"invalid-feedback",children:"Please fill out this field."})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{htmlFor:"inputPassword",className:"sr-only",children:"Password"}),Object(h.jsx)("input",{ref:i,type:"password",id:"inputPassword",className:"form-control",placeholder:"Password",required:!0}),Object(h.jsx)("div",{className:"valid-feedback"}),Object(h.jsx)("div",{className:"invalid-feedback",children:"Please fill out this field."})]}),Object(h.jsx)("div",{className:"form-group",children:Object(h.jsx)("div",{className:"checkbox mb-3",children:Object(h.jsxs)("label",{children:[Object(h.jsx)("input",{type:"checkbox",value:"remember-me",style:T})," Remember me"]})})}),Object(h.jsx)("button",{className:"btn btn-primary",type:"submit",style:{borderRadius:"15px",margin:"0 0 15px 0"},onClick:function(){try{Object(O.c)(t,s.current.value,i.current.value).then((function(){var e=function(){var e=Object(j.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:_(s.current.value),window.location.reload(!1);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().then((function(){window.location.href="/reactchess/#/dashboard"}))})).catch((function(e){switch(P("Invalid user or password"),setTimeout((function(){P(""),s.current.value="",i.current.value=""}),2e3),e.code){case"auth/invalid-email":case"auth/wrong-password":alert("Incorect User or Password !")}}))}catch(e){alert("Error : "+S)}},children:"Login"})]})]})},P=function(){var e=Object(v.b)(),t=Object(O.b)(),s=Object(a.useRef)(null),i=Object(a.useRef)(null),n=Object(a.useRef)(null),r=Object(a.useRef)(null),c=Object(a.useState)([]),l=Object(f.a)(c,2),o=(l[0],l[1]),m=Object(a.useState)(0),d=Object(f.a)(m,2),u=d[0],p=d[1];return Object(a.useEffect)((function(){var t=Object(v.e)(e,"/users");Object(v.c)(t,(function(e){var t=[];e.forEach((function(e){var s=e.val();t.push({id:s.id,email:s.email,name:s.name,nickname:s.nickname,password:s.password,phone:s.phone,role:s.role,status:s.status,terms:s.terms,time:s.time}),o(t),p(t.length)}))})),w()(".container-fluid").css("position","fixed")})),Object(h.jsxs)("div",{className:"mx-auto col-6",style:{backgroundColor:"#282c34",color:"white"},children:[Object(h.jsx)("h2",{className:"mx-auto col-9",children:"This is Register Page"}),Object(h.jsxs)("div",{className:"card was-validated col-9 col-sm-9 col-md-9 col-lg-9 col-xl-9 mx-auto",style:{borderRadius:"25px",backgroundColor:"lightblue"},children:[Object(h.jsx)("h1",{className:"h3 mb-3 font-weight-normal",style:{color:"blue"},children:"Please sign up"}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{htmlFor:"name",className:"sr-only",children:"User Name"}),Object(h.jsx)("input",{ref:s,type:"text",id:"name",className:"form-control",placeholder:"User Name",required:!0,autofocus:!0}),Object(h.jsx)("div",{className:"valid-feedback"}),Object(h.jsx)("div",{className:"invalid-feedback",children:"Please fill out this field."})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{htmlFor:"nickname",className:"sr-only",children:"Nick Name"}),Object(h.jsx)("input",{ref:i,type:"text",id:"nickname",className:"form-control",placeholder:"Nick Name",required:!0,autofocus:!0}),Object(h.jsx)("div",{className:"valid-feedback"}),Object(h.jsx)("div",{className:"invalid-feedback",children:"Please fill out this field."})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{htmlFor:"inputEmail",className:"sr-only",children:"Email address"}),Object(h.jsx)("input",{ref:n,type:"email",id:"inputEmail",className:"form-control",placeholder:"Email address",required:!0,autofocus:!0}),Object(h.jsx)("div",{className:"valid-feedback"}),Object(h.jsx)("div",{className:"invalid-feedback",children:"Please fill out this field."})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{htmlFor:"inputPassword",className:"sr-only",children:"Password"}),Object(h.jsx)("input",{ref:r,type:"password",id:"inputPassword",className:"form-control",placeholder:"Password",required:!0}),Object(h.jsx)("div",{className:"valid-feedback"}),Object(h.jsx)("div",{className:"invalid-feedback",children:"Please fill out this field."})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{htmlFor:"inputConfirmPassword",className:"sr-only",children:"Confirm Password"}),Object(h.jsx)("input",{type:"password",id:"inputConfirmPassword",className:"form-control",placeholder:"Confirm Password",required:!0}),Object(h.jsx)("div",{className:"valid-feedback"}),Object(h.jsx)("div",{className:"invalid-feedback",children:"Please fill out this field."})]}),Object(h.jsx)("button",{className:"btn btn-primary",type:"submit",style:{borderRadius:"15px",margin:"0 0 15px 0"},onClick:function(){try{Object(O.c)(t,n.current.value,r.current.value).then((function(){alert("Email already in use !")})).catch((function(){var a=function(){var e=Object(j.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Object(O.a)(t,n.current.value,r.current.value);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();a().then((function(){!function(){var t=C()().format("DD/MM/YYYY HH:mm:ss"),a=s.current.value,c=n.current.value,l=i.current.value,o="0777888999",m="demo",d=Object(v.d)(Object(v.a)(Object(v.e)(e),"users")).key;Object(v.f)(Object(v.e)(e,"users/"+d),{id:u+1,name:a,email:c,nickname:l,phone:o,time:t,role:m,status:"active",terms:0,password:r.current.value}),window.location.href="/reactchess/"}(),window.location.href="/reactchess/#/login"}))}))}catch(a){alert("Error : ",a)}},children:"Register"})]})]})},T=function(){var e={backgroundColor:null===localStorage.getItem("backgroundColor")?"#282c34":localStorage.getItem("backgroundColor"),color:"white"};return Object(a.useEffect)((function(){w()(".container-fluid").css("position","fixed"),w()(".container").css("background-color",localStorage.getItem("backgroundColor")?localStorage.getItem("backgroundColor"):"#282c34")})),Object(h.jsxs)("div",{className:"mx-auto",style:e,children:[Object(h.jsx)("h2",{children:"This is About Page"}),Object(h.jsxs)("p",{children:[Object(h.jsxs)("strong",{children:[Object(h.jsx)("u",{children:"Contact at:"})," "]}),Object(h.jsx)("a",{href:"mailto:claudiu.vasile@gmail.com?Subject=Hello%20React%20Material",children:"Mail to: claudiu.vasile@gmail.com"})]})]})},_=s(14),I=s(36),M=s.n(I),D=s(28),X=function(e){Object(o.a)(s,e);var t=Object(m.a)(s);function s(e){var a;return Object(c.a)(this,s),(a=t.call(this,e)).state={time:{},seconds:e.time},a.startTimer=a.startTimer.bind(Object(_.a)(a)),a.stopTimer=a.stopTimer.bind(Object(_.a)(a)),a.countDown=a.countDown.bind(Object(_.a)(a)),a.timer=0,a.temp_timer=0,a}return Object(l.a)(s,[{key:"secondsToTime",value:function(e){var t=e%3600,s=t%60;return{h:Math.floor(e/3600),m:Math.floor(t/60),s:Math.ceil(s)}}},{key:"componentDidMount",value:function(){var e=this.secondsToTime(this.state.seconds);this.setState({time:e})}},{key:"startTimer",value:function(){0==this.timer&&this.state.seconds>0&&(this.timer=setInterval(this.countDown,1e3)),!0===this.state.time_stop&&(this.timer=setInterval(this.countDown,1e3),this.setState({time_stop:!1}))}},{key:"stopTimer",value:function(){this.props.setTimer(this.timer),this.temp_timer=this.timer,this.setState({time_stop:!0}),clearInterval(this.timer)}},{key:"countDown",value:function(){var e=this.state.seconds-1;this.setState({time:this.secondsToTime(e),seconds:e}),0==e&&clearInterval(this.timer)}},{key:"render",value:function(){return Object(h.jsx)("div",{style:{marginLeft:"-100px"},children:Object(h.jsxs)("strong",{children:[this.state.time.m,":",this.state.time.s<10?"0"+this.state.time.s:this.state.time.s]})})}}]),s}(i.a.Component),E=function(e){Object(o.a)(s,e);var t=Object(m.a)(s);function s(e){var a;return Object(c.a)(this,s),(a=t.call(this,e)).chessgame=new D.Game,a.state={lightSquareColor:"#b58763",darkSquareColor:"#f0dab5",flip:!1,lastMessage:"",squareSize:45,gameType:"chess",currentPosition:"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",allowMoves:!0,level:0,response:"",fen:"",the_pieces_from_fen:"",gameOver:!1,isLogged:!1,history:[],time_start:!1,time_stop:!1,timer:150,pieceDefinitions:{}},a.timer=0,a.setTimer=a.setTimer.bind(Object(_.a)(a)),a.startTime=a.startTime.bind(Object(_.a)(a)),a.stopTime=a.stopTime.bind(Object(_.a)(a)),a.setTimer5min=a.setTimer5min.bind(Object(_.a)(a)),a.setTimer7min=a.setTimer7min.bind(Object(_.a)(a)),a.setTimer10min=a.setTimer10min.bind(Object(_.a)(a)),a.timerOne=i.a.createRef(),a.timerTwo=i.a.createRef(),a.gamePresets={chess:{fen:"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",files:8,gameHistory:!1,ranks:8,pieceDefinitions:{R:a._createPieceDefinition("https://vasileclaudiu.github.io/reactchess/assets/images/pieces/3d_wood/wr.png"),r:a._createPieceDefinition("https://vasileclaudiu.github.io/reactchess/assets/images/pieces/3d_wood/br.png"),M:a._createPieceDefinition("https://upload.wikimedia.org/wikipedia/commons/1/17/Chess_flt45.svg"),m:a._createPieceDefinition("https://upload.wikimedia.org/wikipedia/commons/2/2c/Chess_fdt45.svg"),S:a._createPieceDefinition("https://upload.wikimedia.org/wikipedia/commons/c/ce/Chess_tlt45.svg"),s:a._createPieceDefinition("https://upload.wikimedia.org/wikipedia/commons/e/e2/Chess_tdt45.svg")},startMove:0},draughts:{fen:"1g1g1g1g1g/g1g1g1g1g1/1g1g1g1g1g/g1g1g1g1g1/10/10/1G1G1G1G1G/G1G1G1G1G1/1G1G1G1G1G/G1G1G1G1G1 w - - 0 1",files:10,flip:!1,gameHistory:!1,ranks:10,pieceDefinitions:{G:a._createPieceDefinition("https://upload.wikimedia.org/wikipedia/commons/9/90/Draughts_mlt45.svg"),g:a._createPieceDefinition("https://upload.wikimedia.org/wikipedia/commons/0/0c/Draughts_mdt45.svg")},pgn:""},courier:{fen:"rnbcmk1scbnr/1ppppp1pppp1/6q5/p5p4p/P5P4P/6Q5/1PPPPP1PPPP1/RNBCMK1SCBNR",files:12,flip:!1,gameHistory:!1,ranks:8,pieceDefinitions:{C:a._createPieceDefinition("https://upload.wikimedia.org/wikipedia/commons/7/7c/Chess_Blt45.svg"),c:a._createPieceDefinition("https://upload.wikimedia.org/wikipedia/commons/5/5a/Chess_Bdt45.svg"),M:a._createPieceDefinition("https://upload.wikimedia.org/wikipedia/commons/1/17/Chess_flt45.svg"),m:a._createPieceDefinition("https://upload.wikimedia.org/wikipedia/commons/2/2c/Chess_fdt45.svg"),S:a._createPieceDefinition("https://upload.wikimedia.org/wikipedia/commons/c/ce/Chess_tlt45.svg"),s:a._createPieceDefinition("https://upload.wikimedia.org/wikipedia/commons/e/e2/Chess_tdt45.svg")},pgn:""}},a.state=Object.assign({},a.state,a.gamePresets[a.state.gameType]),a.onChangeValue=a.onChangeValue.bind(Object(_.a)(a)),a}return Object(l.a)(s,[{key:"componentWillReceiveProps",value:function(e){}},{key:"componentWillMount",value:function(){window.addEventListener("load",(function(e){window.innerWidth<576&&(document.getElementsByTagName("svg")[0].style.marginLeft="-30px")})),"true"===localStorage.getItem("authlogin")&&this.setState({isLogged:!0})}},{key:"componentWillUpdate",value:function(){}},{key:"componentDidUpdate",value:function(e,t){!0===this.state.gameOver&&(this.timerOne.current.stopTimer(),this.timerTwo.current.stopTimer())}},{key:"shouldComponentUpdate",value:function(e,t){return!0}},{key:"onChangeValue",value:function(e){console.log(e.target.value),this.setState({level:e.target.value})}},{key:"loadData",value:function(e,t){return alert(JSON.stringify(this.chessgame.pgn())),alert(JSON.stringify(this.chessgame.pgn().length)),alert("Move from pgn:"+this.chessgame.pgn().substring(this.chessgame.pgn().length-8,1)),alert("Steart::"+t),this.setState({files:8,flip:!1,gameHistory:!1,ranks:8}),!0}},{key:"FenToPieces",value:function(e){var t="",s=e.split(" ")[0].split("/");console.log(e),console.log(s);for(var a=0;a<8;a++)for(var i=0;i<s[a].length;i++)null!=parseInt(s[a][i])&&(s[a]=s[a].replaceAll(parseInt(s[a][i]).toString(),8==parseInt(s[a][i])?"XXXXXXXX":7==parseInt(s[a][i])?"XXXXXXX":6==parseInt(s[a][i])?"XXXXXX":5==parseInt(s[a][i])?"XXXXX":4==parseInt(s[a][i])?"XXXX":3==parseInt(s[a][i])?"XXX":2==parseInt(s[a][i])?"XX":1==parseInt(s[a][i])?"X":""));console.log(s);for(var n=0;n<8;n++)for(var r=0;r<s.length;r++)0==r&&"X"!=s[n][r]&&(t=t+'"A'+(0==n?"8":1==n?"7":2==n?"6":3==n?"5":4==n?"4":5==n?"3":6==n?"2":7==n?"1":"")+'" : "'+s[n][r]+'",'),s[n].length>=2&&1==r&&"X"!=s[n][r]&&(t=t+'"B'+(0==n?"8":1==n?"7":2==n?"6":3==n?"5":4==n?"4":5==n?"3":6==n?"2":7==n?"1":"")+'" : "'+s[n][r]+'",'),s[n].length>=3&&2==r&&"X"!=s[n][r]&&(t=t+'"C'+(0==n?"8":1==n?"7":2==n?"6":3==n?"5":4==n?"4":5==n?"3":6==n?"2":7==n?"1":"")+'" : "'+s[n][r]+'",'),s[n].length>=4&&3==r&&"X"!=s[n][r]&&(t=t+'"D'+(0==n?"8":1==n?"7":2==n?"6":3==n?"5":4==n?"4":5==n?"3":6==n?"2":7==n?"1":"")+'" : "'+s[n][r]+'",'),s[n].length>=5&&4==r&&"X"!=s[n][r]&&(t=t+'"E'+(0==n?"8":1==n?"7":2==n?"6":3==n?"5":4==n?"4":5==n?"3":6==n?"2":7==n?"1":"")+'" : "'+s[n][r]+'",'),s[n].length>=6&&5==r&&"X"!=s[n][r]&&(t=t+'"F'+(0==n?"8":1==n?"7":2==n?"6":3==n?"5":4==n?"4":5==n?"3":6==n?"2":7==n?"1":"")+'" : "'+s[n][r]+'",'),s[n].length>=7&&6==r&&"X"!=s[n][r]&&(t=t+'"G'+(0==n?"8":1==n?"7":2==n?"6":3==n?"5":4==n?"4":5==n?"3":6==n?"2":7==n?"1":"")+'" : "'+s[n][r]+'",'),8==s[n].length&&7==r&&"X"!=s[n][r]&&(t=t+'"H'+(0==n?"8":1==n?"7":2==n?"6":3==n?"5":4==n?"4":5==n?"3":6==n?"2":7==n?"1":"")+'" : "'+s[n][r]+'",');return t=t.replaceAll(" ",""),console.log(t),t.substring(0,t.length-1)}},{key:"whatPieceIsMoved",value:function(e,t,s){var a;console.log(e),console.log(t),console.log(s);var i=e.split(",");console.log(i);for(var n=0;n<i.length;n++)if(i[n].substring(1,3).toUpperCase()==t.toUpperCase()){a=i[n].substring(8,9).toUpperCase();for(var r=0;r<i.length;r++)i[r].substring(1,3).toUpperCase()==s.toUpperCase()&&(a=i[n].substring(8,9).toUpperCase()+"x")}return console.log(a),a}},{key:"CheckExistPiece",value:function(e,t){var s=e.replaceAll('"',"").split(",");console.log(s),console.log(t);for(var a=0;a<s.length;a++)if(s[a].split(":")[0].toLowerCase()==t)return!0;return!1}},{key:"flipMove",value:function(e){return console.log(e.slice(-1)),1===parseInt(e.slice(-1))?e=e.slice(0,-1)+"8":2===parseInt(e.slice(-1))?e=e.slice(0,-1)+"7":3===parseInt(e.slice(-1))?e=e.slice(0,-1)+"6":4===parseInt(e.slice(-1))?e=e.slice(0,-1)+"5":5===parseInt(e.slice(-1))?e=e.slice(0,-1)+"4":6===parseInt(e.slice(-1))?e=e.slice(0,-1)+"3":7===parseInt(e.slice(-1))?e=e.slice(0,-1)+"2":8===parseInt(e.slice(-1))&&(e=e.slice(0,-1)+"1"),console.log(e),e}},{key:"getRandomMove",value:function(e){console.log(e);var t=new D.Game(e),s=t.moves();if(!0===t.in_checkmate)return"chessmat";if(!0===t.in_draw)return"chessdraw";if(!0===s.isEmpty)return"mat";var a=Math.floor(Math.random()*Object.getOwnPropertyNames(s).length),i=Object.keys(s)[a],n=Math.floor(Math.random()*Object.values(s)[a].length),r=Object.values(s)[a][n];return i.toLowerCase()+","+r.toLowerCase()}},{key:"checkIsValidMove",value:function(e,t,s){var a=new D.Game(s).moves(e);console.log(a);for(var i=0;i<a.length;i++)if(a[i].toUpperCase()==t.toUpperCase())return!0;return!1}},{key:"newGame",value:function(){this.timerOne.current.stopTimer(),this.timerTwo.current.stopTimer(),this.setState({history:[],gameOver:!1,fen:"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",timer:150}),this.chessgame=new D.Game(this.state.fen)}},{key:"startTime",value:function(){this.timerOne.current.startTimer()}},{key:"stopTime",value:function(){this.timerOne.current.stopTimer()}},{key:"setTimer",value:function(e){this.timer=e}},{key:"setTimer5min",value:function(){this.setState({timer:300})}},{key:"setTimer7min",value:function(){this.setState({timer:420})}},{key:"setTimer10min",value:function(){this.setState({timer:600})}},{key:"HistoryText",value:function(e){var t="";if(null!=e&&e.length>0)for(var s=0;s<e.length;s++){t=t+(s>0?s%4==0?"\n":"       ":"\n")+JSON.stringify(e[s]).split(",")[1].split(":")[1].replaceAll("} ","&emsp;").replaceAll("}","").replaceAll('"',"")}return t.replaceAll("(","").replaceAll(")","").replaceAll(",",":")}},{key:"handleLoginClick",value:function(){this.setState({isLoggedIn:!0})}},{key:"handleLogoutClick",value:function(){this.setState({isLoggedIn:!1})}},{key:"_createPieceDefinition",value:function(e){return function(t){return Object(h.jsx)("svg",{children:Object(h.jsx)("image",{transform:t,href:e})})}}},{key:"_onFenChanged",value:function(e){}},{key:"_onFlipChanged",value:function(e){this.setState({flip:e.target.checked})}},{key:"_onLightSquareColorChanged",value:function(e){this.setState({lightSquareColor:e.target.value})}},{key:"_onDarkSquareColorChanged",value:function(e){this.setState({darkSquareColor:e.target.value})}},{key:"_onMovePiece",value:function(e,t,s){var a=this;if(1!=this.state.gameOver&&1==this.checkIsValidMove(t,s,this.chessgame.exportFEN())){var i=this.chessgame.exportJson();console.log(i.checkMate),!0===i.isFinished&&(!0===i.checkMate?alert("Game Over - CHESS MATE!!!"):alert("Game Over - CHESS Draw!!!")),alert(JSON.stringify(s));var n=this.chessgame.move(t,s);if(this.state.history.push({"01":t,"02":s}),w()("#history").scrollTop(w()("#history")[0].scrollHeight),this.timerOne.current.startTimer(),this.timerTwo.current.stopTimer(),console.log(n),alert(JSON.stringify(s)),this.setState({files:8,flip:!1,gameHistory:!1,ranks:8,fen:this.chessgame.exportFEN(),startMove:1}),0==this.state.level){var r=this.chessgame.exportJson();if(console.log(r.checkMate),!0===r.isFinished)this.state.gameOver=!0,!0===r.checkMate?alert("Game Over - CHESS MATE!!!"):alert("Game Over - CHESS Draw!!!");else{var c=this.getRandomMove(this.chessgame.exportFEN());console.log(c);var l=c.split(",")[0],o=c.split(",")[1];this.chessgame.move(l,o),this.state.history.push({"01":l,"02":o}),w()("#history").scrollTop(w()("#history")[0].scrollHeight),this.timerOne.current.stopTimer(),this.timerTwo.current.startTimer(),console.log(this.chessgame.exportFEN()),this.setState({fen:this.chessgame.exportFEN()})}}else{var m=function(){var e=Object(j.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new FormData).append("code","1534abc54321z"),t.append("fen",a.chessgame.exportFEN()),t.append("timecalc",1==a.state.level?"50":2==a.state.level?"150":3==a.state.level?"200":4==a.state.level?"300":(a.state.level,"400")),t.append("gamelevel",1==a.state.level?"3":2==a.state.level?"9":3==a.state.level?"11":4==a.state.level?"17":(a.state.level,"20")),e.next=7,fetch("https://diskoteka.ro/apitickets/chess/bot.php",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},body:new URLSearchParams(t)}).then((function(e){return e.text()})).then((function(e){console.log(e),a.setState({response:e}),console.log("This is the response: "+a.state.response)}));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();m().then((function(){alert(JSON.stringify(a.state.response)),console.log("This is the response after asyncron: "+a.state.response),console.log(a.state.response.slice(-2)),console.log(a.state.response.split("-")),console.log(a.state.fen),console.log(a.chessgame.exportFEN()),console.log(a.flipMove(a.state.response.split("-")[0]));var e=a.state.response.split("-")[0],t=a.state.response.split("-")[1];console.log("after flip:"+e+"-"+t);a.CheckExistPiece(a.state.the_pieces_from_fen,t);a.chessgame.move(e,t),a.state.history.push({"01":e,"02":t}),w()("#history").scrollTop(w()("#history")[0].scrollHeight),console.log(a.chessgame.exportFEN()),a.setState({fen:a.chessgame.exportFEN()});var s=a.chessgame.exportJson();console.log(s.checkMate),!0===s.isFinished&&(a.state.gameOver=!0,!0===s.checkMate?alert("Game Over - CHESS MATE!!!"):alert("Game Over - CHESS Draw!!!"))}))}}return!0}},{key:"_onFilesChanged",value:function(e){this.setState({files:Number(e.target.value)})}},{key:"_onRanksChanged",value:function(e){this.setState({ranks:Number(e.target.value)})}},{key:"_onGameTypeChange",value:function(e){this.setState(Object.assign(this.gamePresets[e.target.value],{gameType:e.target.value}))}},{key:"_onPgnChanged",value:function(e){this.setState({pgn:e.target.value}),this.game.load_pgn(e.target.value)}},{key:"render",value:function(){var e=this,t={marginLeft:"40px",marginBottom:"10px"},s={verticalAlign:"baseline"},a={verticalAlign:"top",display:"inline-block",margin:window.innerWidth<576?"15px":"0",padding:"0"},i={verticalAlign:"top",display:"inline-block",height:"100px",overflowY:"scroll",marginLeft:window.innerWidth<576?"20px":"-100px",paddingLeft:window.innerWidth<576?"20px":"-100px",whiteSpace:"pre-wrap"},n={verticalAlign:"top",display:"inline-block",marginLeft:window.innerWidth<576?"120px":"0px",paddingLeft:window.innerWidth<576?"20px":"0px"};return Object(h.jsxs)("div",{className:"row w-100",children:[Object(h.jsxs)("div",{className:"card col-12 mx-auto align-middle col-md-6",style:{padding:"0"},children:[Object(h.jsx)("h1",{style:{marginLeft:"40px"},children:"Chess"}),Object(h.jsxs)("div",{className:"col-12",children:[this.state.isLogged?Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("button",{className:"btn btn-primary",style:t,onClick:function(){return e.newGame()},children:"New"})}):null,Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-12 col-md-9",style:a,children:Object(h.jsx)(M.a,{darkSquareColor:this.state.darkSquareColor,fen:this.state.fen,gameHistory:this.state.gameHistory,startPosition:this.state.currentPosition,files:this.state.files,flip:this.state.flip,lightSquareColor:this.state.lightSquareColor,onMovePiece:this._onMovePiece.bind(this),pgn:this.state.pgn,pieceDefinitions:this.gamePresets[this.state.gameType].pieceDefinitions,ranks:this.state.ranks,squareSize:this.state.squareSize,startMove:this.state.startMove})}),Object(h.jsxs)("div",{className:"col-6 col-md-3",children:[Object(h.jsx)("div",{className:"col-12 col-md-12",style:n,children:Object(h.jsx)(X,{ref:this.timerOne,time:this.state.timer,time_start:this.state.time_start,time_stop:this.state.time_stop,setTimer:this.setTimer})}),Object(h.jsx)("div",{className:"col-12 col-md-12",id:"history",style:i,children:Object(h.jsx)("pre",{style:{whiteSpace:"pre-wrap"},children:this.HistoryText(this.state.history).substring(1)})}),Object(h.jsx)("div",{className:"col-12 col-md-12",style:n,children:Object(h.jsx)(X,{ref:this.timerTwo,time:this.state.timer,time_start:this.state.time_start,time_stop:this.state.time_stop,setTimer:this.setTimer})})]})]})]}),Object(h.jsx)("p",{className:"lastMessage",children:Object(h.jsx)("strong",{children:this.state.lastMessage})})]}),this.state.isLogged?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"col-3 col-md-3 me-auto",children:Object(h.jsxs)("div",{onChange:this.onChangeValue,style:{verticalAlign:"top",display:"inline-block",color:"white"},children:[Object(h.jsx)("div",{className:"input-group",children:Object(h.jsxs)("p",{children:[Object(h.jsx)("input",{type:"radio",value:"0",name:"level",style:s})," Monkey"]})}),Object(h.jsx)("div",{className:"input-group",children:Object(h.jsxs)("p",{children:[Object(h.jsx)("input",{type:"radio",value:"1",name:"level",style:s})," Very Easy"]})}),Object(h.jsx)("div",{className:"input-group",children:Object(h.jsxs)("p",{children:[Object(h.jsx)("input",{type:"radio",value:"2",name:"level",style:s})," Easy"]})}),Object(h.jsx)("div",{className:"input-group",children:Object(h.jsxs)("p",{children:[Object(h.jsx)("input",{type:"radio",value:"3",name:"level",style:s})," Advanced"]})}),Object(h.jsx)("div",{className:"input-group",children:Object(h.jsxs)("p",{children:[Object(h.jsx)("input",{type:"radio",value:"4",name:"level",style:s})," Expert"]})}),Object(h.jsx)("div",{className:"input-group",children:Object(h.jsxs)("p",{children:[Object(h.jsx)("input",{type:"radio",value:"5",name:"level",style:s})," Chess Master"]})})]})}),Object(h.jsxs)("div",{className:"col-3 col-md-3",style:{verticalAlign:"top",display:"inline-block"},children:[this.state.isLogged?Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("button",{className:"btn btn-primary",style:t,onClick:function(){return e.setTimer5min()},children:"5min"})}):null,this.state.isLogged?Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("button",{className:"btn btn-primary",style:t,onClick:function(){return e.setTimer7min()},children:"7min"})}):null,this.state.isLogged?Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("button",{className:"btn btn-primary",style:t,onClick:function(){return e.setTimer10min()},children:"10min"})}):null]})]}):null]})}}]),s}(a.Component),F=E,R=function(){var e={backgroundColor:null===localStorage.getItem("backgroundColor")?"#282c34":localStorage.getItem("backgroundColor"),color:"white"};return Object(a.useEffect)((function(){w()(".container-fluid").css("position","fixed"),w()(".container").css("background-color",localStorage.getItem("backgroundColor")?localStorage.getItem("backgroundColor"):"#282c34")})),Object(h.jsx)("div",{className:"container",style:e,children:Object(h.jsx)("h2",{children:"This is Dashboard Page"})})},G=(s(92),function(e){Object(o.a)(s,e);var t=Object(m.a)(s);function s(e){return Object(c.a)(this,s),t.call(this,e)}return Object(l.a)(s,[{key:"componentWillReceiveProps",value:function(e){}},{key:"componentWillMount",value:function(){}},{key:"componentWillUpdate",value:function(){}},{key:"shouldComponentUpdate",value:function(e,t){return!0}},{key:"render",value:function(){var e={height:"50px",position:"absolute",bottom:window.innerWidth<576?"-150px":"0px",margin:"0 auto"},t={color:null===localStorage.getItem("fontColor")?"#ffffff":localStorage.getItem("fontColor"),fontSize:"28px"};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("nav",{className:"navbar navbar-expand-sm bg-dark navbar-dark",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("a",{className:"navbar-brand",href:"/reactchess/#/",children:"React Chess"}),Object(h.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(h.jsx)("span",{className:"navbar-toggler-icon",children:Object(h.jsx)("i",{className:"fa fa-navicon",style:t})})}),Object(h.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(h.jsxs)("ul",{className:"navbar-nav ml-auto",children:["false"===localStorage.getItem("authlogin")&&Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)("a",{className:"nav-link",href:"/reactchess/#/",children:"Home"})}),"true"===localStorage.getItem("authlogin")&&Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)("a",{className:"nav-link",href:"/reactchess/#/dashboard",children:"Home"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)("a",{className:"nav-link",href:"/reactchess/#/about",children:"About"})})]}),Object(h.jsxs)("ul",{className:"navbar-nav ms-auto",children:[("false"===localStorage.getItem("authlogin")||null===localStorage.getItem("authlogin"))&&Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)("a",{className:"nav-link",href:"/reactchess/#/register",children:"Register"})}),("false"===localStorage.getItem("authlogin")||null===localStorage.getItem("authlogin"))&&Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)("a",{className:"nav-link",href:"/reactchess/#/login",children:"Login"})}),"true"===localStorage.getItem("authlogin")&&Object(h.jsxs)("li",{className:"nav-item dropdown",children:[Object(h.jsx)("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:localStorage.getItem("user_id")}),Object(h.jsx)("ul",{class:"dropdown-menu bg-dark","aria-labelledby":"navbarDropdown",children:Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:"nav-link bg-dark",href:"/reactchess/#/logout",children:"Logout"})})})]})]})]})]})}),Object(h.jsx)("div",{className:"wrapper",children:Object(h.jsx)("div",{className:"container d-flex h-100",children:Object(h.jsx)(d.a,{basename:"/",children:Object(h.jsxs)(u.c,{children:[Object(h.jsx)(u.a,{exact:!0,path:"/",element:Object(h.jsx)(F,{})}),Object(h.jsx)(u.a,{exact:!0,path:"/about",element:Object(h.jsx)(T,{})}),Object(h.jsx)(u.a,{exact:!0,path:"/login",element:Object(h.jsx)(S,{})}),Object(h.jsx)(u.a,{exact:!0,path:"/register",element:Object(h.jsx)(P,{})}),Object(h.jsx)(u.a,{exact:!0,path:"/dashboard",element:Object(h.jsx)(R,{})}),Object(h.jsx)(u.a,{exact:!0,path:"/logout",element:Object(h.jsx)(s,{})}),Object(h.jsx)(u.a,{path:"*",element:Object(h.jsx)(p,{})})]})})})}),Object(h.jsx)("div",{className:"container-fluid",style:e,children:Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col-3 mx-auto",style:{color:"white"},children:"\xa9 2021 - React Chess"})})})]});function s(){return localStorage.setItem("authlogin","false"),window.location.href="/reactchess/",Object(h.jsx)("div",{})}}}]),s}(a.Component)),L=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,110)).then((function(t){var s=t.getCLS,a=t.getFID,i=t.getFCP,n=t.getLCP,r=t.getTTFB;s(e),a(e),i(e),n(e),r(e)}))};s(93),s(94);r.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(G,{})}),document.getElementById("root")),L()},59:function(e,t,s){},92:function(e,t,s){}},[[106,1,2]]]);
//# sourceMappingURL=main.8ed9c55d.chunk.js.map