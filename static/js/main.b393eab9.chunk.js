(this.webpackJsonpreactfront=this.webpackJsonpreactfront||[]).push([[0],{30:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),c=n(16),r=n.n(c),i=(n(38),n(4)),o=n(5),l=n(8),d=n(7),h=(n(39),n(40),n(41),n(19)),u=n(3),j=n(13),b=n.n(j),p=n(15),m=n(18);var g=n(6),O=n(0),f=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={email:"",password:"",submitRedirectFb:!1,invalidLogin:!1,errorMsg:" ",hidden:!0},e.handleChange=function(t){e.setState(Object(m.a)({},t.target.id,t.target.value))},e.handleSubmit=function(){var t=e.state,n=t.email,s=t.password;t.invalidLogin;if(n.length>1&&s.length>1){e.setState({hidden:!1});var a={email:n,password:s};fetch("https://multer-test123.herokuapp.com/signin",{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}}).then((function(t){return console.log("res",t),200===t.status?(e.setState({invalidLogin:!1}),t.json()):(e.setState({invalidLogin:!0}),t.json())})).then(function(){var t=Object(p.a)(b.a.mark((function t(n){var s,a,c,r,i,o,l,d,h,u,j;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(s=n.Error,!1!==e.state.invalidLogin||s){t.next=28;break}return a=n.userId,localStorage.setItem("userId",a),"token",c=new Date,r=c.getTime(),r+=36e5,c.setTime(r),console.log("time after",c),document.cookie="token="+n.token+";expires="+c.toUTCString()+";path=/",i=document.cookie.match(new RegExp("(^| )token=([^;]+)")),o=i[0].split("="),l=o[1],d=new FormData,t.next=17,fetch("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png");case 17:return h=t.sent,t.next=20,h.blob();case 20:u=t.sent,j=new File([u],"test.jpg",{type:"image/jpeg"}),d.append("image",j),console.log("formData",d,j),new Promise((function(t,s){fetch("https://multer-test123.herokuapp.com/test",{method:"POST",body:d,headers:{Authorization:"Bearer ".concat(l)}}).then(function(){var a=Object(p.a)(b.a.mark((function a(c){return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(console.log("here",c),200!==c.status){a.next=5;break}t(),a.next=11;break;case 5:if(403!==c.status){a.next=10;break}return a.next=8,c.json();case 8:n=a.sent,e.setState({errorMsg:n.Error});case 10:s();case 11:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()).catch((function(e){return console.log(e)}))})).then((function(){e.props.forceRender(),document.cookie.match(new RegExp("(^| )token=([^;]+)"))&&e.setState({test:!0})})),t.next=30;break;case 28:console.log("error"),e.setState({errorMsg:n.Error,hidden:!0});case 30:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}else e.setState({errorMsg:"Please ensure both fields are entered correctly.",hidden:!0})},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.hidden,s=t.test,c=t.email,r=t.password,i=t.submitRedirectFb,o=t.invalidLogin,l=t.errorMsg;return Object(O.jsxs)(a.a.Fragment,{children:[!0===i&&!1===o?Object(O.jsx)(u.a,{to:"/dashboard"}):null,s?Object(O.jsx)(u.a,{to:"/btnPage"}):null,Object(O.jsx)("h1",{children:"Sign In"}),Object(O.jsx)("span",{className:"alert",children:l}),Object(O.jsx)("label",{children:"Email:"}),Object(O.jsx)("input",{id:"email",value:c,onChange:function(t){return e.handleChange(t)},className:"input"}),Object(O.jsx)("label",{children:"Password:"}),Object(O.jsx)("input",{id:"password",value:r,onChange:function(t){return e.handleChange(t)},className:"input"}),Object(O.jsxs)("div",{className:"btnContain",children:[Object(O.jsxs)("button",{onClick:this.handleSubmit,className:"btn login",children:[Object(O.jsxs)("div",{id:n?"hide":null,className:"lds-defaultTwo left",children:[Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{})]}),Object(O.jsx)("span",{id:n?null:"hide",className:"loginTxt",children:"LOGIN"})]}),Object(O.jsx)("button",{className:"btn signup",children:Object(O.jsx)("span",{className:"signTxt",children:" SIGNUP "})})]})]})}}]),n}(a.a.Component),v=Object(g.b)((function(e){return{}}))(f),x=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={impressions:new Array,reach:new Array},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.access[0].split("?")[1];console.log("ac",t);var n={access_token:t};fetch("https://multer-test123.herokuapp.com/info",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(t){console.log(t.TOKEN.data[0]),e.setState({impressions:t.TOKEN.data[0].values,reach:t.TOKEN.data[1].values}),setTimeout((function(){e.forceUpdate()}),500)})).catch((function(e){return console.log(e)})),fetch("https://multer-test123.herokuapp.com/info",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this.state,t=e.impressions,n=e.reach;return console.log(t),Object(O.jsxs)(a.a.Fragment,{children:[Object(O.jsxs)("div",{className:"insights",children:[Object(O.jsx)("span",{style:{fontWeight:500,fontSize:"20px"},children:"Impressions in the last week:"}),t.length>0&&Object(O.jsxs)("div",{className:"flexMain",children:[t[0].value," views",Object(O.jsxs)("span",{className:"week",children:["week ending ",t[0].end_time]}),Object(O.jsxs)("span",{className:"iBtn",children:[Object(O.jsx)("span",{className:"left"}),Object(O.jsx)("span",{className:"right"})]})]})]}),Object(O.jsxs)("div",{className:"insights",children:[Object(O.jsx)("span",{style:{fontWeight:500,fontSize:"20px"},children:"Reach in the last week:"}),n.length>0&&Object(O.jsxs)("div",{className:"flexMain",children:[n[0].value," views",Object(O.jsxs)("span",{className:"week",children:["week ending ",n[0].end_time]}),Object(O.jsxs)("span",{className:"iBtn",children:[Object(O.jsx)("span",{className:"left"}),Object(O.jsx)("span",{className:"right"})]})]})]})]})}}]),n}(a.a.Component),w=Object(g.b)((function(e){return{}}))(x),y=(n(53),function(e){var t=Object(u.g)();return console.log(t.search,e),e.setAccess(t.search),Object(O.jsx)("div",{children:" "})}),N=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={name:"",avatar:"",hovered:!1,recentPhotos:new Array},e.setName=function(t){e.setState({name:t})},e.setAvatar=function(t){e.setState({avatar:t})},e.setPhotos=function(t){e.setState({recentPhotos:t}),setTimeout((function(){e.forceUpdate()}),1e3)},e.setAccess=function(t){if(!document.cookie.match(new RegExp("(^| )access=([^;]+)"))){console.log("A",t);var n=new Date,s=n.getTime();s+=36e5,n.setTime(s),document.cookie="access=".concat(t,";expires=").concat(n.toUTCString(),";path=/;"),setTimeout((function(){e.forceUpdate()}),500)}},e}return Object(o.a)(n,[{key:"render",value:function(){var e=document.cookie.match(new RegExp("(^| )token=([^;]+)")),t=document.cookie.match(new RegExp("(^| )access=([^;]+)")),n=this.state,s=n.name,c=n.avatar,r=(n.hovered,n.recentPhotos);return e?Object(O.jsxs)("div",{className:"dashFlex",children:[Object(O.jsx)(y,{setAccess:this.setAccess}),t&&Object(O.jsxs)(a.a.Fragment,{children:[Object(O.jsx)("div",{class:"leftPanel",children:r.length>0&&r.map((function(e,t){return console.log("a",e),Object(O.jsx)("div",{className:"widget",children:Object(O.jsx)("img",{src:e.url})},t)}))}),Object(O.jsxs)("div",{className:"mainSection",children:[Object(O.jsxs)("div",{className:"head",children:[Object(O.jsx)("div",{class:"headAvatar",children:Object(O.jsx)("img",{src:c})}),"Welcome ",s," "]}),Object(O.jsx)(w,{access:t,setPhotos:this.setPhotos,setName:this.setName,setAvatar:this.setAvatar})]}),Object(O.jsxs)("div",{className:"btnHolder",children:[Object(O.jsx)(h.b,{style:{textDecoration:"none"},to:"/upload",children:Object(O.jsx)("div",{style:{height:"auto"},className:"btnDash purple",children:"Schedule an upload"})}),Object(O.jsx)(h.b,{style:{textDecoration:"none"},to:"/scheduled",children:Object(O.jsx)("div",{style:{height:"auto"},className:"btnDash purple",children:"View your scheduled posts"})}),Object(O.jsx)("div",{style:{height:"auto"},className:"btnDash purple",children:"Logout of the associated instagram account"})]})]})]}):Object(O.jsx)("div",{children:"ERROR"})}}]),n}(a.a.Component),k=Object(g.b)((function(e){return{}}))(N);n(67),n(30);var S=Object(g.b)((function(e){return{}}))((function(){return Object(O.jsxs)(a.a.Fragment,{children:[Object(O.jsx)("li",{"data-tag":"1",children:"Dashboard"}),Object(O.jsx)("li",{"data-tag":"2",children:"View Schedule"}),Object(O.jsx)("li",{"data-tag":"3",children:"Upload"})]})})),T="DRAWER";function C(e){return{type:T,value:e}}var R=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var s=arguments.length,c=new Array(s),r=0;r<s;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={drawerOpen:!1},e.openDrawer=function(){e.props.dispatch(C({val:!0}))},e.closeDrawer=function(t){var n=t.target.attributes.getNamedItem("data-tag");t.target!==e.list.current&&t.target!==e.listUl.current&&null===n&&(console.log("fired"),e.props.dispatch(C({val:!1})))},e.list=a.a.createRef(),e.listUl=a.a.createRef(),e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=null!==this.props.parent?this.props.parent:null;setTimeout((function(){r.a.findDOMNode(t.current);t.current.addEventListener("click",(function(t){return e.closeDrawer(t)}))}),2e3)}},{key:"render",value:function(){this.state.drawerOpen;var e=this.props.sidebar;return console.log("props sidebar",this.props.sidebar),Object(O.jsxs)(a.a.Fragment,{children:[!e&&Object(O.jsx)("div",{className:"burgerIcon",onClick:this.openDrawer,children:"Sidebar"}),e&&Object(O.jsxs)(a.a.Fragment,{children:[Object(O.jsx)("div",{className:"blur"}),Object(O.jsxs)("div",{onClick:this.openDrawer,className:"list",ref:this.list,children:[Object(O.jsx)("ul",{ref:this.listUl,children:Object(O.jsx)(S,{parent:this.listUl})}),Object(O.jsx)("button",{className:"logout",children:"Logout"})]})]})]})}}]),n}(a.a.Component),D=Object(g.b)((function(e){return{sidebar:e.sidebar}}))(R),A=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var s=arguments.length,c=new Array(s),r=0;r<s;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={file:"",time:"",date:"",alertMsg:"",message:"",hovered:!1},e.handleChange=function(t){e.setState(Object(m.a)({},t.target.id,t.target.value))},e.handleChangeImg=function(t){t.target.files.length&&e.setState({preview:URL.createObjectURL(t.target.files[0]),file:t.target.files[0]})},e.clearImg=function(){e.setState({preview:"",file:""})},e.handleUpload=function(){var t=e.state,n=t.file,s=t.time,a=t.date,c=(t.preview,t.message),r=(new Date).getTime();if(console.log(n,s,a),""!==n&&""!==s&&""!==a&&""!==c){var i=localStorage.getItem("userId"),o=i.slice(0,5),l=String(o+"_"+n.name),d=new FormData;d.append("image",n,l);var h=String(a),u=String(s),j=h.split("-"),b=Number(j[0]),p=Number(j[1])-1,m=Number(j[2]),g=u.split(":"),O=Number(g[0]),f=Number(g[1]),v=new Date(Date.UTC(b,p,m,O,f,0,0)).getTime();console.log(v),r>v?e.setState({alertMsg:"Scheduled date must be in the future."}):(d.append("time",v),d.append("userId",i),d.append("message",c),setTimeout((function(){fetch("https://multer-test123.herokuapp.com/upload",{method:"POST",body:d}).then((function(e){return e.json()})).then((function(t){var n=t.Error;n?e.setState({alertMsg:n}):e.setState({alertMsg:"Image successfully uploaded!"}),console.log(t)}))}),2e3))}else e.setState({alertMsg:"Please ensure all fields are filled in correctly."})},e.refTwo=a.a.createRef(),e}return Object(o.a)(n,[{key:"render",value:function(){var e=this;if(document.cookie.match(new RegExp("(^| )token=([^;]+)"))){var t=this.state,n=t.file,s=t.time,c=t.date,r=t.preview,i=t.message,o=t.alertMsg,l=t.hovered;return console.log("hovered status new",l),Object(O.jsxs)("div",{className:"entireWidth",ref:this.refTwo,children:[Object(O.jsxs)("div",{className:"formHeaders",children:[Object(O.jsx)("h1",{children:"Schedule An Upload"}),Object(O.jsx)("h2",{children:"Some information about how it works here. Lorem ipsum is the standard language of the typing industry."})]}),Object(O.jsxs)("div",{className:"formFlex",children:[Object(O.jsxs)("div",{className:"inputForm",style:o&&r?{height:"550px"}:{height:"500px"},children:[Object(O.jsx)("div",{style:o?{display:"block"}:{display:"none"},className:"alert",children:o}),Object(O.jsx)("label",{for:"date",children:"Date:"}),Object(O.jsx)("input",{type:"date",id:"date",value:c,onChange:this.handleChange}),Object(O.jsx)("label",{for:"time",children:"Time:"}),Object(O.jsx)("input",{type:"time",id:"time",value:s,onChange:this.handleChange}),Object(O.jsx)("label",{for:"message",children:"message:"}),Object(O.jsx)("input",{type:"text",id:"message",value:i,onChange:this.handleChange}),Object(O.jsx)("label",{style:""!==n?{height:"120px"}:{height:"75px"},className:"fileBox",for:"file",children:r?Object(O.jsxs)(a.a.Fragment,{children:[Object(O.jsx)("img",{src:r,width:"100",height:"100"}),Object(O.jsx)("button",{onClick:this.clearImg,className:"clearImg",children:"Change image"})]}):Object(O.jsx)("div",{id:l?"shadow2":"shadow1",onMouseEnter:function(){return e.setState({hovered:!0})},onMouseLeave:function(){return e.setState({hovered:!1})},className:"uploadBtn",children:"Please select an image"})}),Object(O.jsx)("input",{type:"file",id:"file",style:{display:"none"},onChange:this.handleChangeImg}),Object(O.jsx)("button",{className:"btnSubmit",onClick:this.handleUpload,children:"Upload"}),Object(O.jsx)("div",{className:l?"btnBlur2":"btnBlur"})]}),Object(O.jsx)(D,{parent:this.refTwo})]})]})}return Object(O.jsx)("div",{children:"ERROR"})}}]),n}(a.a.Component),P=Object(g.b)((function(e){return{}}))(A),U=n(27),I=(n(68),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var s=arguments.length,c=new Array(s),r=0;r<s;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={pastUrls:new Array,futureUrls:new Array,pastShowing:!1,loading:!0},e.refOne=a.a.createRef(),e.toggle=function(){e.setState((function(e){return{pastShowing:!e.pastShowing}}))},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=document.cookie.match(new RegExp("(^| )token=([^;]+)"));if(console.log("mount",t),t){var n=t[0].split("=")[1],s={userId:localStorage.getItem("userId")};setTimeout((function(){fetch("https://multer-test123.herokuapp.com/getScheduled",{headers:{Authorization:"Bearer ".concat(n),"Content-Type":"application/json"},body:JSON.stringify(s),method:"POST"}).then((function(e){return e.json()})).then(function(){var t=Object(p.a)(b.a.mark((function t(n){var s,a,c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("res",n),s=n.Success,a=new Array,c=new Array,t.next=6,s.map((function(e){var t=e.data,n=e.time,s=(new Date).getTime(),r={name:t,time:n};return fetch(e.location).then((function(e){return e.blob()})).then((function(e){var t=new FileReader;t.readAsDataURL(e),t.onloadend=function(){var e=t.result,i=Object(U.a)(Object(U.a)({},r),{},{img:e});s>n?a.push(i):c.push(i)}}))}));case 6:setTimeout((function(){console.log("fired"),e.setState({futureUrls:c}),e.setState({pastUrls:a}),e.setState({loading:!1}),e.forceUpdate()}),1e3);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),500)}}},{key:"timeConverter",value:function(e){var t=new Date(Number(e)),n=t.getFullYear(),s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()],a=t.getDate()+" "+s+" "+n,c=t.getHours()+":"+t.getMinutes();return Object(O.jsxs)("div",{className:"timings",children:[Object(O.jsxs)("span",{children:[Object(O.jsx)("span",{className:"bold",children:"Date:"})," ",Object(O.jsx)("br",{})," ",a," "]}),Object(O.jsxs)("span",{children:[Object(O.jsx)("span",{className:"bold",children:"Time:"})," ",Object(O.jsx)("br",{})," ",c," "]})]})}},{key:"render",value:function(){var e=this;if(document.cookie.match(new RegExp("(^| )token=([^;]+)"))){var t=this.state,n=t.pastUrls,s=t.futureUrls,c=t.pastShowing,r=t.loading;return Object(O.jsx)(a.a.Fragment,{children:Object(O.jsx)("div",{class:"widthTotal",ref:this.refOne,children:Object(O.jsxs)("div",{className:"scheduled",children:[Object(O.jsx)("h1",{children:"Scheduled posts"}),!r&&Object(O.jsx)("div",{className:"btns",children:Object(O.jsx)("button",{onClick:this.toggle,children:c?"View Scheduled Posts":"View Past Posts"})}),!0===r&&Object(O.jsxs)("div",{className:"lds-defaultThree",children:[Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{})]}),Object(O.jsxs)("div",{className:"flex",children:[!0===c&&!1===r&&0!==n.length&&n.map((function(t,n){return console.log(n,n%3,n%2,n%1,n%0),Object(O.jsxs)("div",{id:n%3===0?"purple":n%3===1?"yellow":"blue",className:"item",children:[Object(O.jsx)("img",{style:{width:180,height:180},src:t.img}),e.timeConverter(t.time)]},n)})),!0===c&&!1===r&&0===n.length&&Object(O.jsx)("div",{className:"noDisplay",children:"There are no past posts to display."}),!1===c&&!1===r&&0===s.length&&Object(O.jsx)("div",{className:"noDisplay",children:"There are no scheduled posts to display."}),!1===c&&!1===r&&0!==s.length&&s.map((function(t,n){return console.log(n%2),Object(O.jsxs)("div",{id:n%3===0?n%2===0?"purple":"yellow":"blue",className:"item",children:[Object(O.jsx)("img",{style:{width:180,height:180},src:t.img}),e.timeConverter(t.time)]},n)}))]}),Object(O.jsx)(D,{parent:this.refOne})]})})})}return Object(O.jsx)("div",{children:"ERROR"})}}]),n}(a.a.Component)),M=Object(g.b)((function(e){return{}}))(I),E=(a.a.Component,function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsx)(a.a.Fragment,{children:Object(O.jsx)("a",{href:"https://multer-test123.herokuapp.com/fbAuth",children:"BUTTON"})})}}]),n}(a.a.Component)),F=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={loggedIn:!1,accessToken:"",loggedOut:!1,loading:!1,cookie:null},e.redirectPage=function(t){e.setState({loggedIn:t})},e.redirectPageLogout=function(t){e.setState({loggedOut:t})},e.setAccess=function(t){e.setState({accessToken:t})},e.forceRender=function(){var t=document.cookie.match(new RegExp("(^| )token=([^;]+)"));e.setState({cookie:t}),setTimeout((function(){e.forceUpdate()}),500)},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=(t.loggedIn,t.loggedOut),s=t.accessToken,c=this.state;c.cookie;return c.loading?Object(O.jsx)("div",{children:"Loading"}):Object(O.jsxs)(h.a,{basename:"/",children:[Object(O.jsx)("div",{className:"linearGrad"}),Object(O.jsxs)(u.d,{children:[Object(O.jsx)(u.b,{exact:!0,path:"/",children:Object(O.jsx)("div",{className:"form",children:Object(O.jsx)("div",{className:"rowMine",children:Object(O.jsx)(v,{forceRender:this.forceRender})})})}),Object(O.jsxs)(a.a.Fragment,{children:[Object(O.jsx)(u.b,{component:function(){return Object(O.jsx)(k,{loggedOut:n,redirectPageLogout:e.redirectPageLogout,redirectPage:e.redirectPage,accessToken:s})},path:"/dashboard"}),Object(O.jsx)(u.b,{path:"/upload",component:P}),Object(O.jsx)(u.b,{path:"/scheduled",component:M}),Object(O.jsx)(u.b,{path:"/btnPage",component:E})]})]})]})}}]),n}(a.a.Component),L=Object(g.b)((function(e){return{}}))(F),_=n(14),B=Object(_.c)({sidebar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return console.log("reducer",e,t.value.val),t.value.val;default:return e}}}),J=n(33),W=Object(_.a)(J.a),z=Object(_.d)(B,W);r.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(g.a,{store:z,children:Object(O.jsx)(L,{})})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.b393eab9.chunk.js.map