(this.webpackJsonpreactfront=this.webpackJsonpreactfront||[]).push([[0],{30:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(16),r=n.n(c),i=(n(38),n(4)),o=n(5),l=n(8),d=n(7),u=(n(39),n(40),n(41),n(19)),h=n(3),j=n(10),b=n.n(j),p=n(14),m=n(18);function g(){return new Promise((function(e,t){window.FB.getLoginStatus((function(t){e(t)}))}))}function f(e){var t=this;return new Promise(function(){var n=Object(p.a)(b.a.mark((function n(a,s){return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:"unknown"===e.status||"not_authorized"===e.status?new Promise((function(e,t){window.FB.login((function(t){console.log("logged in",t.authResponse.accessToken);var n=t.authResponse.accessToken;e(n)}),{scope:"read_insights, manage_pages"})})).then((function(e){t.setState({accessToken:e}),localStorage.setItem("access",e),a(e)})):(t.setState({accessToken:e.authResponse.accessToken}),localStorage.setItem("access",e.authResponse.accessToken),a(e.authResponse.accessToken));case 1:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}())}var O=n(6),v=n(0),x=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={email:"",password:"",submitRedirectFb:!1,invalidLogin:!1,errorMsg:" ",hidden:!0},e.handleChange=function(t){e.setState(Object(m.a)({},t.target.id,t.target.value))},e.handleSubmit=function(){var t=e.state,n=t.email,a=t.password;t.invalidLogin;if(n.length>1&&a.length>1){e.setState({hidden:!1});var s={email:n,password:a};fetch("https://multer-test123.herokuapp.com/signin",{method:"POST",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}}).then((function(t){return console.log("res",t),200===t.status?(e.setState({invalidLogin:!1}),t.json()):(e.setState({invalidLogin:!0}),t.json())})).then(function(){var t=Object(p.a)(b.a.mark((function t(n){var a,s,c,r,i,o,l,d,u,h,j;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=n.Error,!1!==e.state.invalidLogin||a){t.next=28;break}return s=n.userId,localStorage.setItem("userId",s),"token",c=new Date,r=c.getTime(),r+=36e5,c.setTime(r),console.log("time after",c),document.cookie="token="+n.token+";expires="+c.toUTCString()+";path=/",i=document.cookie.match(new RegExp("(^| )token=([^;]+)")),o=i[0].split("="),l=o[1],d=new FormData,t.next=17,fetch("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png");case 17:return u=t.sent,t.next=20,u.blob();case 20:h=t.sent,j=new File([h],"test.jpg",{type:"image/jpeg"}),d.append("image",j),console.log("formData",d,j),new Promise((function(t,a){fetch("https://multer-test123.herokuapp.com/test",{method:"POST",body:d,headers:{Authorization:"Bearer ".concat(l)}}).then(function(){var s=Object(p.a)(b.a.mark((function s(c){return b.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(console.log("here",c),200!==c.status){s.next=5;break}t(),s.next=11;break;case 5:if(403!==c.status){s.next=10;break}return s.next=8,c.json();case 8:n=s.sent,e.setState({errorMsg:n.Error});case 10:a();case 11:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}()).catch((function(e){return console.log(e)}))})).then((function(){e.props.forceRender(),document.cookie.match(new RegExp("(^| )token=([^;]+)"))&&e.setState({test:!0})})),t.next=30;break;case 28:console.log("error"),e.setState({errorMsg:n.Error,hidden:!0});case 30:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}else e.setState({errorMsg:"Please ensure both fields are entered correctly.",hidden:!0})},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.hidden,a=t.test,c=t.email,r=t.password,i=t.submitRedirectFb,o=t.invalidLogin,l=t.errorMsg;return Object(v.jsxs)(s.a.Fragment,{children:[!0===i&&!1===o?Object(v.jsx)(h.a,{to:"/dashboard"}):null,a?Object(v.jsx)(h.a,{to:"/btnPage"}):null,Object(v.jsx)("h1",{children:"Sign In"}),Object(v.jsx)("span",{className:"alert",children:l}),Object(v.jsx)("label",{children:"Email:"}),Object(v.jsx)("input",{id:"email",value:c,onChange:function(t){return e.handleChange(t)},className:"input"}),Object(v.jsx)("label",{children:"Password:"}),Object(v.jsx)("input",{id:"password",value:r,onChange:function(t){return e.handleChange(t)},className:"input"}),Object(v.jsxs)("div",{className:"btnContain",children:[Object(v.jsxs)("button",{onClick:this.handleSubmit,className:"btn login",children:[Object(v.jsxs)("div",{id:n?"hide":null,className:"lds-defaultTwo left",children:[Object(v.jsx)("div",{}),Object(v.jsx)("div",{}),Object(v.jsx)("div",{}),Object(v.jsx)("div",{}),Object(v.jsx)("div",{}),Object(v.jsx)("div",{}),Object(v.jsx)("div",{}),Object(v.jsx)("div",{}),Object(v.jsx)("div",{}),Object(v.jsx)("div",{}),Object(v.jsx)("div",{}),Object(v.jsx)("div",{})]}),Object(v.jsx)("span",{id:n?null:"hide",className:"loginTxt",children:"LOGIN"})]}),Object(v.jsx)("button",{className:"btn signup",children:Object(v.jsx)("span",{className:"signTxt",children:" SIGNUP "})})]})]})}}]),n}(s.a.Component),w=Object(O.b)((function(e){return{}}))(x),k=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={impressions:new Array,reach:new Array},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;console.log(window.FB),new Promise((function(e,t){window.FB?e():(function(e,t,n){var a,s=e.getElementsByTagName(t)[0];e.getElementById(n)||((a=e.createElement(t)).id=n,a.src="//connect.facebook.net/en_US/sdk.js",s.parentNode.insertBefore(a,s))}(document,"script","facebook-jssdk"),window.fbAsyncInit=function(){window.FB.init({appId:0x661cee00f404d,cookie:!0,xfbml:!0,version:"v9.0"}),window.FB.AppEvents.logPageView(),console.log("fired"),e()})})).then((function(){g.bind(e)().then(function(){var t=Object(p.a)(b.a.mark((function t(n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:f.bind(e)(n).then((function(t){t&&new Promise((function(e,t){window.FB.getLoginStatus((function(n){console.log(n),window.FB.api("/me/accounts",{access_token:n.authResponse.accessToken},(function(n){console.log("RESPONSE",n),n?e(n):t()}))}))})).then((function(t){var n,a=t.data[0].id,s=t.data[0].access_token,c=t.data[0].name;e.props.setName(c),window.FB.api("".concat(a,"?fields=instagram_business_account"),(function(t){t&&(n=t.instagram_business_account.id,window.FB.api("".concat(n,"/insights?metric=impressions,reach&period=week"),(function(t){e.setState({impressions:t.data[0].values,reach:t.data[1].values})})),window.FB.api("".concat(n,"/media"),{access_token:s},(function(t){var n=new Array;Promise.all(t.data.map((function(e){window.FB.api("".concat(e.id,"?fields=media_url,like_count,comments,caption"),(function(e){var t=e.media_url,a=e.like_count,s=(e.caption,{url:t,likes:a});n.push(s)}))}))).then((function(){e.props.setPhotos(n),console.log("looking for",n)}));var a=t.data[0].id;window.FB.api("".concat(a,"?fields=media_url"),{access_token:s},(function(t){console.log("photo res",t),e.props.setAvatar(t.media_url)}))})))}))})).catch((function(e){return console.log("err with test call",e)}))})).catch((function(e){return console.log("err with status change",e)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(e){return console.log("err with check login",e)}))}))}},{key:"render",value:function(){var e=this.state,t=e.impressions,n=e.reach;return console.log(t),Object(v.jsxs)(s.a.Fragment,{children:[Object(v.jsxs)("div",{className:"insights",children:[Object(v.jsx)("span",{style:{fontWeight:500,fontSize:"20px"},children:"Impressions in the last week:"}),t.length>0&&Object(v.jsxs)("div",{className:"flexMain",children:[t[0].value," views",Object(v.jsxs)("span",{className:"week",children:["week ending ",t[0].end_time]}),Object(v.jsxs)("span",{className:"iBtn",children:[Object(v.jsx)("span",{className:"left"}),Object(v.jsx)("span",{className:"right"})]})]})]}),Object(v.jsxs)("div",{className:"insights",children:[Object(v.jsx)("span",{style:{fontWeight:500,fontSize:"20px"},children:"Reach in the last week:"}),n.length>0&&Object(v.jsxs)("div",{className:"flexMain",children:[n[0].value," views",Object(v.jsxs)("span",{className:"week",children:["week ending ",n[0].end_time]}),Object(v.jsxs)("span",{className:"iBtn",children:[Object(v.jsx)("span",{className:"left"}),Object(v.jsx)("span",{className:"right"})]})]})]})]})}}]),n}(s.a.Component),y=(Object(O.b)((function(e){return{}}))(k),n(53),function(e){var t=Object(h.g)();return console.log(t.search,e),e.setAccess(t.search),Object(v.jsx)("div",{children:" "})}),N=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={name:"",avatar:"",hovered:!1,recentPhotos:new Array},e.setName=function(t){e.setState({name:t})},e.setAvatar=function(t){e.setState({avatar:t})},e.setPhotos=function(t){e.setState({recentPhotos:t}),setTimeout((function(){e.forceUpdate()}),1e3)},e.setAccess=function(t){if(!document.cookie.match(new RegExp("(^| )access=([^;]+)"))){console.log("A",t);var n=new Date,a=n.getTime();a+=36e5,n.setTime(a),document.cookie="access=".concat(t,";expires=").concat(n.toUTCString(),";path=/;"),setTimeout((function(){e.forceUpdate()}),500)}},e}return Object(o.a)(n,[{key:"render",value:function(){var e=document.cookie.match(new RegExp("(^| )token=([^;]+)")),t=document.cookie.match(new RegExp("(^| )access=([^;]+)")),n=this.state,a=n.name,c=n.avatar,r=(n.hovered,n.recentPhotos);return e?Object(v.jsxs)("div",{className:"dashFlex",children:[Object(v.jsx)(y,{setAccess:this.setAccess}),t&&Object(v.jsxs)(s.a.Fragment,{children:[Object(v.jsx)("div",{class:"leftPanel",children:r.length>0&&r.map((function(e,t){return console.log("a",e),Object(v.jsx)("div",{className:"widget",children:Object(v.jsx)("img",{src:e.url})},t)}))}),Object(v.jsx)("div",{className:"mainSection",children:Object(v.jsxs)("div",{className:"head",children:[Object(v.jsx)("div",{class:"headAvatar",children:Object(v.jsx)("img",{src:c})}),"Welcome ",a," "]})}),Object(v.jsxs)("div",{className:"btnHolder",children:[Object(v.jsx)(u.b,{style:{textDecoration:"none"},to:"/upload",children:Object(v.jsx)("div",{style:{height:"auto"},className:"btnDash purple",children:"Schedule an upload"})}),Object(v.jsx)(u.b,{style:{textDecoration:"none"},to:"/scheduled",children:Object(v.jsx)("div",{style:{height:"auto"},className:"btnDash purple",children:"View your scheduled posts"})}),Object(v.jsx)("div",{style:{height:"auto"},className:"btnDash purple",children:"Logout of the associated instagram account"})]})]})]}):Object(v.jsx)("div",{children:"ERROR"})}}]),n}(s.a.Component),S=Object(O.b)((function(e){return{}}))(N);n(67),n(30);var T=Object(O.b)((function(e){return{}}))((function(){return Object(v.jsxs)(s.a.Fragment,{children:[Object(v.jsx)("li",{"data-tag":"1",children:"Dashboard"}),Object(v.jsx)("li",{"data-tag":"2",children:"View Schedule"}),Object(v.jsx)("li",{"data-tag":"3",children:"Upload"})]})})),R="DRAWER";function C(e){return{type:R,value:e}}var P=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={drawerOpen:!1},e.openDrawer=function(){e.props.dispatch(C({val:!0}))},e.closeDrawer=function(t){var n=t.target.attributes.getNamedItem("data-tag");t.target!==e.list.current&&t.target!==e.listUl.current&&null===n&&(console.log("fired"),e.props.dispatch(C({val:!1})))},e.list=s.a.createRef(),e.listUl=s.a.createRef(),e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=null!==this.props.parent?this.props.parent:null;setTimeout((function(){r.a.findDOMNode(t.current);t.current.addEventListener("click",(function(t){return e.closeDrawer(t)}))}),2e3)}},{key:"render",value:function(){this.state.drawerOpen;var e=this.props.sidebar;return console.log("props sidebar",this.props.sidebar),Object(v.jsxs)(s.a.Fragment,{children:[!e&&Object(v.jsx)("div",{className:"burgerIcon",onClick:this.openDrawer,children:"Sidebar"}),e&&Object(v.jsxs)(s.a.Fragment,{children:[Object(v.jsx)("div",{className:"blur"}),Object(v.jsxs)("div",{onClick:this.openDrawer,className:"list",ref:this.list,children:[Object(v.jsx)("ul",{ref:this.listUl,children:Object(v.jsx)(T,{parent:this.listUl})}),Object(v.jsx)("button",{className:"logout",children:"Logout"})]})]})]})}}]),n}(s.a.Component),A=Object(O.b)((function(e){return{sidebar:e.sidebar}}))(P),F=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={file:"",time:"",date:"",alertMsg:"",message:"",hovered:!1},e.handleChange=function(t){e.setState(Object(m.a)({},t.target.id,t.target.value))},e.handleChangeImg=function(t){t.target.files.length&&e.setState({preview:URL.createObjectURL(t.target.files[0]),file:t.target.files[0]})},e.clearImg=function(){e.setState({preview:"",file:""})},e.handleUpload=function(){var t=e.state,n=t.file,a=t.time,s=t.date,c=(t.preview,t.message),r=(new Date).getTime();if(console.log(n,a,s),""!==n&&""!==a&&""!==s&&""!==c){var i=localStorage.getItem("userId"),o=i.slice(0,5),l=String(o+"_"+n.name),d=new FormData;d.append("image",n,l);var u=String(s),h=String(a),j=u.split("-"),b=Number(j[0]),p=Number(j[1])-1,m=Number(j[2]),g=h.split(":"),f=Number(g[0]),O=Number(g[1]),v=new Date(Date.UTC(b,p,m,f,O,0,0)).getTime();console.log(v),r>v?e.setState({alertMsg:"Scheduled date must be in the future."}):(d.append("time",v),d.append("userId",i),d.append("message",c),setTimeout((function(){fetch("https://multer-test123.herokuapp.com/upload",{method:"POST",body:d}).then((function(e){return e.json()})).then((function(t){var n=t.Error;n?e.setState({alertMsg:n}):e.setState({alertMsg:"Image successfully uploaded!"}),console.log(t)}))}),2e3))}else e.setState({alertMsg:"Please ensure all fields are filled in correctly."})},e.refTwo=s.a.createRef(),e}return Object(o.a)(n,[{key:"render",value:function(){var e=this;if(document.cookie.match(new RegExp("(^| )token=([^;]+)"))){var t=this.state,n=t.file,a=t.time,c=t.date,r=t.preview,i=t.message,o=t.alertMsg,l=t.hovered;return console.log("hovered status new",l),Object(v.jsxs)("div",{className:"entireWidth",ref:this.refTwo,children:[Object(v.jsxs)("div",{className:"formHeaders",children:[Object(v.jsx)("h1",{children:"Schedule An Upload"}),Object(v.jsx)("h2",{children:"Some information about how it works here. Lorem ipsum is the standard language of the typing industry."})]}),Object(v.jsxs)("div",{className:"formFlex",children:[Object(v.jsxs)("div",{className:"inputForm",style:o&&r?{height:"550px"}:{height:"500px"},children:[Object(v.jsx)("div",{style:o?{display:"block"}:{display:"none"},className:"alert",children:o}),Object(v.jsx)("label",{for:"date",children:"Date:"}),Object(v.jsx)("input",{type:"date",id:"date",value:c,onChange:this.handleChange}),Object(v.jsx)("label",{for:"time",children:"Time:"}),Object(v.jsx)("input",{type:"time",id:"time",value:a,onChange:this.handleChange}),Object(v.jsx)("label",{for:"message",children:"message:"}),Object(v.jsx)("input",{type:"text",id:"message",value:i,onChange:this.handleChange}),Object(v.jsx)("label",{style:""!==n?{height:"120px"}:{height:"75px"},className:"fileBox",for:"file",children:r?Object(v.jsxs)(s.a.Fragment,{children:[Object(v.jsx)("img",{src:r,width:"100",height:"100"}),Object(v.jsx)("button",{onClick:this.clearImg,className:"clearImg",children:"Change image"})]}):Object(v.jsx)("div",{id:l?"shadow2":"shadow1",onMouseEnter:function(){return e.setState({hovered:!0})},onMouseLeave:function(){return e.setState({hovered:!1})},className:"uploadBtn",children:"Please select an image"})}),Object(v.jsx)("input",{type:"file",id:"file",style:{display:"none"},onChange:this.handleChangeImg}),Object(v.jsx)("button",{className:"btnSubmit",onClick:this.handleUpload,children:"Upload"}),Object(v.jsx)("div",{className:l?"btnBlur2":"btnBlur"})]}),Object(v.jsx)(A,{parent:this.refTwo})]})]})}return Object(v.jsx)("div",{children:"ERROR"})}}]),n}(s.a.Component),D=Object(O.b)((function(e){return{}}))(F),I=n(27),_=(n(68),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={pastUrls:new Array,futureUrls:new Array,pastShowing:!1,loading:!0},e.refOne=s.a.createRef(),e.toggle=function(){e.setState((function(e){return{pastShowing:!e.pastShowing}}))},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=document.cookie.match(new RegExp("(^| )token=([^;]+)"));if(console.log("mount",t),t){var n=t[0].split("=")[1],a={userId:localStorage.getItem("userId")};setTimeout((function(){fetch("https://multer-test123.herokuapp.com/getScheduled",{headers:{Authorization:"Bearer ".concat(n),"Content-Type":"application/json"},body:JSON.stringify(a),method:"POST"}).then((function(e){return e.json()})).then(function(){var t=Object(p.a)(b.a.mark((function t(n){var a,s,c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("res",n),a=n.Success,s=new Array,c=new Array,t.next=6,a.map((function(e){var t=e.data,n=e.time,a=(new Date).getTime(),r={name:t,time:n};return fetch(e.location).then((function(e){return e.blob()})).then((function(e){var t=new FileReader;t.readAsDataURL(e),t.onloadend=function(){var e=t.result,i=Object(I.a)(Object(I.a)({},r),{},{img:e});a>n?s.push(i):c.push(i)}}))}));case 6:setTimeout((function(){console.log("fired"),e.setState({futureUrls:c}),e.setState({pastUrls:s}),e.setState({loading:!1}),e.forceUpdate()}),1e3);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),500)}}},{key:"timeConverter",value:function(e){var t=new Date(Number(e)),n=t.getFullYear(),a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()],s=t.getDate()+" "+a+" "+n,c=t.getHours()+":"+t.getMinutes();return Object(v.jsxs)("div",{className:"timings",children:[Object(v.jsxs)("span",{children:[Object(v.jsx)("span",{className:"bold",children:"Date:"})," ",Object(v.jsx)("br",{})," ",s," "]}),Object(v.jsxs)("span",{children:[Object(v.jsx)("span",{className:"bold",children:"Time:"})," ",Object(v.jsx)("br",{})," ",c," "]})]})}},{key:"render",value:function(){var e=this;if(document.cookie.match(new RegExp("(^| )token=([^;]+)"))){var t=this.state,n=t.pastUrls,a=t.futureUrls,c=t.pastShowing,r=t.loading;return Object(v.jsx)(s.a.Fragment,{children:Object(v.jsx)("div",{class:"widthTotal",ref:this.refOne,children:Object(v.jsxs)("div",{className:"scheduled",children:[Object(v.jsx)("h1",{children:"Scheduled posts"}),!r&&Object(v.jsx)("div",{className:"btns",children:Object(v.jsx)("button",{onClick:this.toggle,children:c?"View Scheduled Posts":"View Past Posts"})}),!0===r&&Object(v.jsxs)("div",{className:"lds-defaultThree",children:[Object(v.jsx)("div",{}),Object(v.jsx)("div",{}),Object(v.jsx)("div",{}),Object(v.jsx)("div",{}),Object(v.jsx)("div",{}),Object(v.jsx)("div",{}),Object(v.jsx)("div",{}),Object(v.jsx)("div",{}),Object(v.jsx)("div",{}),Object(v.jsx)("div",{}),Object(v.jsx)("div",{}),Object(v.jsx)("div",{})]}),Object(v.jsxs)("div",{className:"flex",children:[!0===c&&!1===r&&0!==n.length&&n.map((function(t,n){return console.log(n,n%3,n%2,n%1,n%0),Object(v.jsxs)("div",{id:n%3===0?"purple":n%3===1?"yellow":"blue",className:"item",children:[Object(v.jsx)("img",{style:{width:180,height:180},src:t.img}),e.timeConverter(t.time)]},n)})),!0===c&&!1===r&&0===n.length&&Object(v.jsx)("div",{className:"noDisplay",children:"There are no past posts to display."}),!1===c&&!1===r&&0===a.length&&Object(v.jsx)("div",{className:"noDisplay",children:"There are no scheduled posts to display."}),!1===c&&!1===r&&0!==a.length&&a.map((function(t,n){return console.log(n%2),Object(v.jsxs)("div",{id:n%3===0?n%2===0?"purple":"yellow":"blue",className:"item",children:[Object(v.jsx)("img",{style:{width:180,height:180},src:t.img}),e.timeConverter(t.time)]},n)}))]}),Object(v.jsx)(A,{parent:this.refOne})]})})})}return Object(v.jsx)("div",{children:"ERROR"})}}]),n}(s.a.Component)),U=Object(O.b)((function(e){return{}}))(_),E=(s.a.Component,function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(v.jsx)(s.a.Fragment,{children:Object(v.jsx)("a",{href:"https://multer-test123.herokuapp.com/fbAuth",children:"BUTTON"})})}}]),n}(s.a.Component)),B=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={loggedIn:!1,accessToken:"",loggedOut:!1,loading:!1,cookie:null},e.redirectPage=function(t){e.setState({loggedIn:t})},e.redirectPageLogout=function(t){e.setState({loggedOut:t})},e.setAccess=function(t){e.setState({accessToken:t})},e.forceRender=function(){var t=document.cookie.match(new RegExp("(^| )token=([^;]+)"));e.setState({cookie:t}),setTimeout((function(){e.forceUpdate()}),500)},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=(t.loggedIn,t.loggedOut),a=t.accessToken,c=this.state;c.cookie;return c.loading?Object(v.jsx)("div",{children:"Loading"}):Object(v.jsxs)(u.a,{basename:"/",children:[Object(v.jsx)("div",{className:"linearGrad"}),Object(v.jsxs)(h.d,{children:[Object(v.jsx)(h.b,{exact:!0,path:"/",children:Object(v.jsx)("div",{className:"form",children:Object(v.jsx)("div",{className:"rowMine",children:Object(v.jsx)(w,{forceRender:this.forceRender})})})}),Object(v.jsxs)(s.a.Fragment,{children:[Object(v.jsx)(h.b,{component:function(){return Object(v.jsx)(S,{loggedOut:n,redirectPageLogout:e.redirectPageLogout,redirectPage:e.redirectPage,accessToken:a})},path:"/dashboard"}),Object(v.jsx)(h.b,{path:"/upload",component:D}),Object(v.jsx)(h.b,{path:"/scheduled",component:U}),Object(v.jsx)(h.b,{path:"/btnPage",component:E})]})]})]})}}]),n}(s.a.Component),M=Object(O.b)((function(e){return{}}))(B),L=n(15),J=Object(L.c)({sidebar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return console.log("reducer",e,t.value.val),t.value.val;default:return e}}}),z=n(33),V=Object(L.a)(z.a),W=Object(L.d)(J,V);r.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(O.a,{store:W,children:Object(v.jsx)(M,{})})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.024851a8.chunk.js.map