(this.webpackJsonpreactfront=this.webpackJsonpreactfront||[]).push([[0],{30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(23),s=n.n(o),i=(n(30),n(17)),r=n(25),l=n(8),u=n(9),d=n(11),h=n(10),j=(n(31),n(32),n(2)),b=n(15),g=n(7),p=n.n(g),f=n(13),m=n(18),O=n(16);function x(){return new Promise((function(e,t){window.FB.getLoginStatus((function(t){e(t)}))}))}function v(){return new Promise((function(e,t){window.FB?e():(!function(e,t,n){var a,c=e.getElementsByTagName(t)[0];e.getElementById(n)||((a=e.createElement(t)).id=n,a.src="//connect.facebook.net/en_US/sdk.js",c.parentNode.insertBefore(a,c))}(document,"script","facebook-jssdk"),window.fbAsyncInit=function(){window.FB.init({appId:0x661cee00f404d,cookie:!0,xfbml:!0,version:"v9.0"}),window.FB.AppEvents.logPageView(),console.log("fired"),e()})}))}function w(e){var t=this;return new Promise(function(){var n=Object(f.a)(p.a.mark((function n(a,c){return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:"unknown"===e.status||"not_authorized"===e.status?new Promise((function(e,t){window.FB.login((function(t){console.log("logged in",t.authResponse.accessToken);var n=t.authResponse.accessToken;e(n)}))})).then((function(e){t.setState({accessToken:e}),localStorage.setItem("access",e),a(e)})):(t.setState({accessToken:e.authResponse.accessToken}),localStorage.setItem("access",e.authResponse.accessToken),a(e.authResponse.accessToken));case 1:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}())}function k(){return new Promise((function(e,t){window.FB.getLoginStatus((function(n){console.log(n),window.FB.api("/me/accounts?fields=id",{access_token:n.authResponse.accessToken},(function(n){console.log("RESPONSE",n),n?e(n):t()}))}))}))}var S=n(0),y=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={email:"",password:"",submitRedirectFb:!1,invalidLogin:!1,errorMsg:" ",hidden:!0},e.handleChange=function(t){e.setState(Object(m.a)({},t.target.id,t.target.value))},e.handleSubmit=function(){var t=e.state,n=t.email,a=t.password;t.invalidLogin;if(n.length>1&&a.length>1){e.setState({hidden:!1});var c={email:n,password:a};fetch("https://multer-test123.herokuapp.com/signin",{method:"POST",body:JSON.stringify(c),headers:{"Content-Type":"application/json"}}).then((function(t){return console.log("res",t),200===t.status?(e.setState({invalidLogin:!1}),t.json()):(e.setState({invalidLogin:!0}),t.json())})).then(function(){var t=Object(f.a)(p.a.mark((function t(n){var a,c,o,s,i,r,l,u,d,h;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=n.Error,console.log(n,e.state.invalidLogin,a),!1!==e.state.invalidLogin||a){t.next=25;break}return"token",c=(new Date).getTime(),o=c+6e4,document.cookie="token="+n.token+";expires="+o+";path=/",s=document.cookie.match(new RegExp("(^| )token=([^;]+)")),i=s[0].split("="),r=i[1],console.log("bearer",r),l=new FormData,t.next=14,fetch("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png");case 14:return u=t.sent,t.next=17,u.blob();case 17:d=t.sent,h=new File([d],"test.jpg",{type:"image/jpeg"}),l.append("image",h),console.log("formData",l,h),new Promise((function(t,a){fetch("https://multer-test123.herokuapp.com/test",{method:"POST",body:l,headers:{Authorization:"Bearer ".concat(r)}}).then(function(){var c=Object(f.a)(p.a.mark((function c(o){return p.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(console.log("here",o),200!==o.status){c.next=5;break}t(),c.next=11;break;case 5:if(403!==o.status){c.next=10;break}return c.next=8,o.json();case 8:n=c.sent,e.setState({errorMsg:n.Error});case 10:a();case 11:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}()).catch((function(e){return console.log(e)}))})).then((function(){document.cookie.match(new RegExp("(^| )token=([^;]+)"))&&v().then((function(){x.bind(Object(O.a)(e))().then(function(){var t=Object(f.a)(p.a.mark((function t(n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:w.bind(Object(O.a)(e))(n).then((function(t){console.log("a",t),t&&k().then((function(t){t&&setTimeout((function(){e.setState({submitRedirectFb:!0,hidden:!0})}),1e3)})).catch((function(e){return console.log("err with test call",e)}))})).catch((function(e){return console.log("err with status change",e)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(e){return console.log("err with check login",e)}))}))})),t.next=27;break;case 25:console.log("error"),e.setState({errorMsg:n.Error});case 27:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}else e.setState({errorMsg:"Please ensure both fields are entered correctly."})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.hidden,a=t.email,o=t.password,s=t.submitRedirectFb,i=t.invalidLogin,r=t.errorMsg;return Object(S.jsxs)(c.a.Fragment,{children:[!0===s&&!1===i?Object(S.jsx)(j.a,{to:"/dashboard"}):null,Object(S.jsx)("h1",{children:"Sign In"}),Object(S.jsx)("span",{className:"alert",children:r}),Object(S.jsx)("label",{children:"Email:"}),Object(S.jsx)("input",{id:"email",value:a,onChange:function(t){return e.handleChange(t)},className:"input"}),Object(S.jsx)("label",{children:"Password:"}),Object(S.jsx)("input",{id:"password",value:o,onChange:function(t){return e.handleChange(t)},className:"input"}),Object(S.jsxs)("div",{className:"btnContain",children:[Object(S.jsxs)("button",{onClick:this.handleSubmit,className:"btn login",children:[Object(S.jsxs)("div",{id:n?"hide":null,className:"lds-defaultTwo left",children:[Object(S.jsx)("div",{}),Object(S.jsx)("div",{}),Object(S.jsx)("div",{}),Object(S.jsx)("div",{}),Object(S.jsx)("div",{}),Object(S.jsx)("div",{}),Object(S.jsx)("div",{}),Object(S.jsx)("div",{}),Object(S.jsx)("div",{}),Object(S.jsx)("div",{}),Object(S.jsx)("div",{}),Object(S.jsx)("div",{})]}),Object(S.jsx)("span",{id:n?null:"hide",className:"loginTxt",children:"LOGIN"})]}),Object(S.jsx)("button",{className:"btn signup",children:Object(S.jsx)("span",{className:"signTxt",children:" SIGNUP "})})]})]})}}]),n}(c.a.Component),T=(n(43),function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={file:"",time:"",date:""},e.handleChange=function(){},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.file,n=e.time,a=e.date;return Object(S.jsx)(c.a.Fragment,{children:Object(S.jsxs)("div",{className:"inputForm",children:[Object(S.jsx)("label",{for:"date",children:"Date:"}),Object(S.jsx)("input",{type:"date",id:"date",value:a,onChange:this.handleChange}),Object(S.jsx)("label",{for:"time",children:"Time:"}),Object(S.jsx)("input",{type:"time",id:"time",value:n,onChange:this.handleChange}),Object(S.jsx)("label",{for:"file",children:"Image:"}),Object(S.jsx)("input",{type:"file",id:"file",value:t,onChange:this.handleChange})]})})}}]),n}(c.a.Component)),C=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(S.jsxs)("div",{children:[Object(S.jsx)(b.b,{to:"/upload",children:Object(S.jsx)("div",{className:"btn",children:"Schedule an upload"})}),"Dashboard"]})}}]),n}(c.a.Component),N=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={loggedIn:!1,accessToken:"",loggedOut:!1},e.redirectPage=function(t){e.setState({loggedIn:t})},e.redirectPageLogout=function(t){e.setState({loggedOut:t})},e.setAccess=function(t){e.setState({accessToken:t})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=(e.loggedIn,e.loggedOut),n=e.accessToken,a=document.cookie.match(new RegExp("(^| )token=([^;]+)")),c=function(e){var t=e.component,n=Object(r.a)(e,["component"]);return Object(S.jsx)(j.b,Object(i.a)(Object(i.a)({},n),{},{render:function(e){return a?Object(S.jsx)(t,Object(i.a)(Object(i.a)({},e),n)):Object(S.jsx)(j.a,{to:{pathname:"/",state:{from:e.location}}})}}))};return Object(S.jsx)(b.a,{basename:"/",children:Object(S.jsxs)(j.d,{children:[Object(S.jsx)(j.b,{exact:!0,path:"/",children:Object(S.jsx)("div",{className:"form",children:Object(S.jsx)("div",{className:"rowMine",children:Object(S.jsx)(y,{showBtn:this.showBtn})})})}),Object(S.jsx)(c,{component:C,path:"/dashboard",loggedOut:t,redirectPageLogout:this.redirectPageLogout,redirectPage:this.redirectPage,accessToken:n}),Object(S.jsx)(j.b,{path:"/upload",component:T})]})})}}]),n}(c.a.Component);s.a.render(Object(S.jsx)(c.a.StrictMode,{children:Object(S.jsx)(N,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.0530de2a.chunk.js.map