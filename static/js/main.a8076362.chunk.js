(this.webpackJsonpreactfront=this.webpackJsonpreactfront||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var o=n(1),a=n.n(o),c=n(22),s=n.n(c),i=(n(28),n(8)),r=n(9),u=n(11),l=n(10),d=(n(29),n(30),n(13)),h=n(2),g=n(7),b=n.n(g),f=n(14),j=n(17),p=n(16);function m(){return new Promise((function(e,t){window.FB.getLoginStatus((function(t){e(t)}))}))}function v(){return new Promise((function(e,t){window.FB?e():(!function(e,t,n){var o,a=e.getElementsByTagName(t)[0];e.getElementById(n)||((o=e.createElement(t)).id=n,o.src="//connect.facebook.net/en_US/sdk.js",a.parentNode.insertBefore(o,a))}(document,"script","facebook-jssdk"),window.fbAsyncInit=function(){window.FB.init({appId:0x661cee00f404d,cookie:!0,xfbml:!0,version:"v9.0"}),window.FB.AppEvents.logPageView(),console.log("fired"),e()})}))}function w(e){var t=this;return new Promise(function(){var n=Object(f.a)(b.a.mark((function n(o,a){return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:"unknown"===e.status||"not_authorized"===e.status?new Promise((function(e,t){window.FB.login((function(t){console.log("logged in",t.authResponse.accessToken);var n=t.authResponse.accessToken;e(n)}))})).then((function(e){t.setState({accessToken:e}),localStorage.setItem("access",e),o(e)})):(t.setState({accessToken:e.authResponse.accessToken}),localStorage.setItem("access",e.authResponse.accessToken),o(e.authResponse.accessToken));case 1:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}())}function O(){return new Promise((function(e,t){window.FB.getLoginStatus((function(n){console.log(n),window.FB.api("/me/accounts?fields=id",{access_token:n.authResponse.accessToken},(function(n){console.log("RESPONSE",n),n?e(n):t()}))}))}))}var x=n(0),k=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={email:"",password:"",submitRedirectFb:!1,invalidLogin:!1,errorMsg:" ",hidden:!0},e.handleChange=function(t){e.setState(Object(j.a)({},t.target.id,t.target.value))},e.handleSubmit=function(){var t=e.state,n=t.email,o=t.password;t.invalidLogin;if(n.length>1&&o.length>1){e.setState({hidden:!1});var a={email:n,password:o};fetch("https://multer-test123.herokuapp.com/signin",{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}}).then((function(t){return console.log("res",t),200===t.status?(e.setState({invalidLogin:!1}),t.json()):(e.setState({invalidLogin:!0}),t.json())})).then(function(){var t=Object(f.a)(b.a.mark((function t(n){var o,a,c,s,i,r,u,l,d,h,g;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o=n.Error,!1!==e.state.invalidLogin||o){t.next=28;break}return a=n.userId,localStorage.setItem("userId",a),"token",c=new Date,s=c.getTime(),s+=36e5,c.setTime(s),console.log("time after",c),document.cookie="token="+n.token+";expires="+c.toUTCString()+";path=/",i=document.cookie.match(new RegExp("(^| )token=([^;]+)")),r=i[0].split("="),u=r[1],l=new FormData,t.next=17,fetch("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png");case 17:return d=t.sent,t.next=20,d.blob();case 20:h=t.sent,g=new File([h],"test.jpg",{type:"image/jpeg"}),l.append("image",g),console.log("formData",l,g),new Promise((function(t,o){fetch("https://multer-test123.herokuapp.com/test",{method:"POST",body:l,headers:{Authorization:"Bearer ".concat(u)}}).then(function(){var a=Object(f.a)(b.a.mark((function a(c){return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(console.log("here",c),200!==c.status){a.next=5;break}t(),a.next=11;break;case 5:if(403!==c.status){a.next=10;break}return a.next=8,c.json();case 8:n=a.sent,e.setState({errorMsg:n.Error});case 10:o();case 11:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()).catch((function(e){return console.log(e)}))})).then((function(){var t=document.cookie.match(new RegExp("(^| )token=([^;]+)"));t&&v().then((function(){m.bind(Object(p.a)(e))().then(function(){var n=Object(f.a)(b.a.mark((function n(o){return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:w.bind(Object(p.a)(e))(o).then((function(n){console.log("a",n),n&&O().then((function(n){n&&setTimeout((function(){e.setState({submitRedirectFb:!0,hidden:!0}),console.log("STATES",t,e.state.submitRedirectFb,e.state.invalidLogin)}),1e3)})).catch((function(e){return console.log("err with test call",e)}))})).catch((function(e){return console.log("err with status change",e)}));case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()).catch((function(e){return console.log("err with check login",e)}))}))})),t.next=30;break;case 28:console.log("error"),e.setState({errorMsg:n.Error,hidden:!0});case 30:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}else e.setState({errorMsg:"Please ensure both fields are entered correctly.",hidden:!0})},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.hidden,o=t.email,c=t.password,s=t.submitRedirectFb,i=t.invalidLogin,r=t.errorMsg;return Object(x.jsxs)(a.a.Fragment,{children:[!0===s&&!1===i?Object(x.jsx)(h.a,{to:"/dashboard"}):null,Object(x.jsx)("h1",{children:"Sign In"}),Object(x.jsx)("span",{className:"alert",children:r}),Object(x.jsx)("label",{children:"Email:"}),Object(x.jsx)("input",{id:"email",value:o,onChange:function(t){return e.handleChange(t)},className:"input"}),Object(x.jsx)("label",{children:"Password:"}),Object(x.jsx)("input",{id:"password",value:c,onChange:function(t){return e.handleChange(t)},className:"input"}),Object(x.jsxs)("div",{className:"btnContain",children:[Object(x.jsxs)("button",{onClick:this.handleSubmit,className:"btn login",children:[Object(x.jsxs)("div",{id:n?"hide":null,className:"lds-defaultTwo left",children:[Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{})]}),Object(x.jsx)("span",{id:n?null:"hide",className:"loginTxt",children:"LOGIN"})]}),Object(x.jsx)("button",{className:"btn signup",children:Object(x.jsx)("span",{className:"signTxt",children:" SIGNUP "})})]})]})}}]),n}(a.a.Component),S=(n(41),a.a.Component,a.a.Component,function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={loggedIn:!1,accessToken:"",loggedOut:!1,loading:!0,cookie:null},e.redirectPage=function(t){e.setState({loggedIn:t})},e.redirectPageLogout=function(t){e.setState({loggedOut:t})},e.setAccess=function(t){e.setState({accessToken:t})},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;new Promise((function(e,t){var n=document.cookie.match(new RegExp("(^| )token=([^;]+)"));n?e(n):t()})).then((function(t){e.setState({cookie:t,loading:!1})})).catch((function(t){console.log(t),e.setState({loading:!1})}))}},{key:"render",value:function(){var e=this.state,t=(e.loggedIn,e.loggedOut,e.accessToken,this.state),n=t.cookie;return t.loading?Object(x.jsx)("div",{children:"Loading"}):n?(d.a,h.d,h.b,h.b,void h.b):Object(x.jsx)(d.a,{basename:"/",children:Object(x.jsx)(h.d,{children:Object(x.jsx)(h.b,{exact:!0,path:"/",children:Object(x.jsx)("div",{className:"form",children:Object(x.jsx)("div",{className:"rowMine",children:Object(x.jsx)(k,{})})})})})})}}]),n}(a.a.Component));s.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(S,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.a8076362.chunk.js.map