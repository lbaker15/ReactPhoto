(this.webpackJsonpreactfront=this.webpackJsonpreactfront||[]).push([[0],{31:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},54:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(18),r=n.n(c),i=(n(39),n(4)),o=n(5),l=n(7),d=n(6),h=(n(40),n(41),n(42),n(16)),u=n(8),j=n(14),b=n.n(j),p=n(17),m=n(19);var O=n(9),g=n(0),f=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={email:"",password:"",invalidLogin:!1,errorMsg:" ",hidden:!0},e.handleChange=function(t){e.setState(Object(m.a)({},t.target.id,t.target.value))},e.handleSubmit=function(){var t=e.state,n=t.email,a=t.password;t.invalidLogin;if(n.length>1&&a.length>1){e.setState({hidden:!1});var s={email:n,password:a};fetch("https://multer-test123.herokuapp.com/signin",{method:"POST",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}}).then((function(t){return 200===t.status?(e.setState({invalidLogin:!1}),t.json()):(e.setState({invalidLogin:!0}),t.json())})).then(function(){var t=Object(p.a)(b.a.mark((function t(n){var a,s,c,r,i,o,l,d,h,u;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=n.Error,!1!==e.state.invalidLogin||a){t.next=26;break}return"token",s=new Date,c=s.getTime(),c+=36e5,s.setTime(c),document.cookie="userId="+n.userId+";expires="+s.toUTCString()+";path=/",document.cookie="token="+n.token+";expires="+s.toUTCString()+";path=/",r=document.cookie.match(new RegExp("(^| )token=([^;]+)")),i=r[0].split("="),o=i[1],l=new FormData,t.next=15,fetch("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png");case 15:return d=t.sent,t.next=18,d.blob();case 18:h=t.sent,u=new File([h],"test.jpg",{type:"image/jpeg"}),l.append("image",u),console.log("formData",l,u),new Promise((function(t,a){fetch("https://multer-test123.herokuapp.com/test",{method:"POST",body:l,headers:{Authorization:"Bearer ".concat(o)}}).then(function(){var s=Object(p.a)(b.a.mark((function s(c){return b.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(200!==c.status){s.next=4;break}t(),s.next=10;break;case 4:if(403!==c.status){s.next=9;break}return s.next=7,c.json();case 7:n=s.sent,e.setState({errorMsg:n.Error});case 9:a();case 10:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}()).catch((function(e){return console.log(e)}))})).then((function(){e.props.forceRender(),document.cookie.match(new RegExp("(^| )token=([^;]+)"))&&e.setState({test:!0})})),t.next=28;break;case 26:console.log("error"),e.setState({errorMsg:n.Error,hidden:!0});case 28:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}else e.setState({errorMsg:"Please ensure both fields are entered correctly.",hidden:!0})},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.hidden,a=t.test,c=t.email,r=t.password,i=t.invalidLogin,o=t.errorMsg;return Object(g.jsxs)(s.a.Fragment,{children:[a&&!i?Object(g.jsx)(u.a,{to:"/btnPage"}):null,Object(g.jsx)("h1",{children:"Sign In"}),Object(g.jsx)("span",{className:"alert",children:o}),Object(g.jsx)("label",{children:"Email:"}),Object(g.jsx)("input",{id:"email",value:c,onChange:function(t){return e.handleChange(t)},className:"input"}),Object(g.jsx)("label",{children:"Password:"}),Object(g.jsx)("input",{id:"password",value:r,onChange:function(t){return e.handleChange(t)},className:"input"}),Object(g.jsxs)("div",{className:"btnContain",children:[Object(g.jsxs)("button",{onClick:this.handleSubmit,className:"btn login",children:[Object(g.jsxs)("div",{id:n?"hide":null,className:"lds-defaultTwo left",children:[Object(g.jsx)("div",{}),Object(g.jsx)("div",{}),Object(g.jsx)("div",{}),Object(g.jsx)("div",{}),Object(g.jsx)("div",{}),Object(g.jsx)("div",{}),Object(g.jsx)("div",{}),Object(g.jsx)("div",{}),Object(g.jsx)("div",{}),Object(g.jsx)("div",{}),Object(g.jsx)("div",{}),Object(g.jsx)("div",{})]}),Object(g.jsx)("span",{id:n?null:"hide",className:"loginTxt",children:"LOGIN"})]}),Object(g.jsx)("button",{className:"btn signup",children:Object(g.jsx)("span",{className:"signTxt",children:" SIGNUP "})})]})]})}}]),n}(s.a.Component),x=Object(O.b)((function(e){return{}}))(f),v=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={impressions:new Array,reach:new Array},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this,t={access_token:this.props.access[0].split("?")[1]};fetch("https://multer-test123.herokuapp.com/info",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(t){e.setState({impressions:t.TOKEN.data[0].values,reach:t.TOKEN.data[1].values}),e.props.setName(t.NAME),setTimeout((function(){e.forceUpdate()}),500)})).catch((function(e){return console.log(e)})),fetch("https://multer-test123.herokuapp.com/recentPhotos",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(t){e.props.setPhotos(t.OBJ),e.props.setAvatar(t.OBJ[0].url)}))}},{key:"render",value:function(){var e=this.state,t=e.impressions,n=e.reach;return Object(g.jsxs)(s.a.Fragment,{children:[Object(g.jsxs)("div",{className:"insights",children:[Object(g.jsx)("span",{style:{fontWeight:500,fontSize:"20px"},children:"Impressions in the last week:"}),t.length>0&&Object(g.jsxs)("div",{className:"flexMain",children:[t[0].value," views",Object(g.jsxs)("span",{className:"week",children:["week ending ",t[0].end_time]}),Object(g.jsxs)("span",{className:"iBtn",children:[Object(g.jsx)("span",{className:"left"}),Object(g.jsx)("span",{className:"right"})]})]})]}),Object(g.jsxs)("div",{className:"insights",children:[Object(g.jsx)("span",{style:{fontWeight:500,fontSize:"20px"},children:"Reach in the last week:"}),n.length>0&&Object(g.jsxs)("div",{className:"flexMain",children:[n[0].value," views",Object(g.jsxs)("span",{className:"week",children:["week ending ",n[0].end_time]}),Object(g.jsxs)("span",{className:"iBtn",children:[Object(g.jsx)("span",{className:"left"}),Object(g.jsx)("span",{className:"right"})]})]})]})]})}}]),n}(s.a.Component),w=Object(O.b)((function(e){return{}}))(v),y=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.conditions,n=e.overlay,a=e.scale,c=e.color,r=e.top,i=e.left;return n?Object(g.jsx)(s.a.Fragment,{children:!0===t&&Object(g.jsx)("div",{className:"dashboardBlurLoader",children:Object(g.jsx)("div",{className:"dashboardLoader",children:Object(g.jsxs)("div",{style:{transform:"scale(".concat(a,")"),marginLeft:i,marginTop:r},className:"lds-defaultThree ".concat(c),children:[Object(g.jsx)("div",{}),Object(g.jsx)("div",{}),Object(g.jsx)("div",{}),Object(g.jsx)("div",{}),Object(g.jsx)("div",{}),Object(g.jsx)("div",{}),Object(g.jsx)("div",{}),Object(g.jsx)("div",{}),Object(g.jsx)("div",{}),Object(g.jsx)("div",{}),Object(g.jsx)("div",{}),Object(g.jsx)("div",{})]})})})}):Object(g.jsx)(s.a.Fragment,{children:!0===t&&Object(g.jsxs)("div",{style:{transform:"scale(".concat(a,")"),marginLeft:i,marginTop:r},className:"lds-defaultThree ".concat(c),children:[Object(g.jsx)("div",{}),Object(g.jsx)("div",{}),Object(g.jsx)("div",{}),Object(g.jsx)("div",{}),Object(g.jsx)("div",{}),Object(g.jsx)("div",{}),Object(g.jsx)("div",{}),Object(g.jsx)("div",{}),Object(g.jsx)("div",{}),Object(g.jsx)("div",{}),Object(g.jsx)("div",{}),Object(g.jsx)("div",{})]})})}}]),n}(s.a.Component),k=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).handleLogout=function(){document.cookie.match(new RegExp("(^| )token=([^;]+)"))[0].split("=")[1];var t=new Date,n=t.getTime();n-=1,t.setTime(n),document.cookie="token=null;expires="+t.toUTCString()+";path=/",document.cookie="access=null;expires="+t.toUTCString()+";path=/",document.cookie="userId=null;expires="+t.toUTCString()+";path=/",e.forceUpdate(),window.location.href="https://lbaker15.github.io/ReactPhoto/#/"},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(g.jsxs)("div",{className:"btnHolder",children:[Object(g.jsx)(h.b,{style:{textDecoration:"none"},to:"/upload",children:Object(g.jsx)("div",{style:{height:"auto"},className:"btnDash purple",children:"Schedule an upload"})}),Object(g.jsx)(h.b,{style:{textDecoration:"none"},to:"/scheduled",children:Object(g.jsx)("div",{style:{height:"auto"},className:"btnDash purple",children:"View your scheduled posts"})}),Object(g.jsx)("div",{style:{height:"auto"},onClick:this.handleLogout,className:"btnDash purple",children:"Logout of the associated instagram account"})]})}}]),n}(s.a.Component),N=function(e){var t=Object(u.g)();return e.setAccess(t.search),Object(g.jsx)("div",{children:" "})},S=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={name:"",avatar:"",hovered:!1,recentPhotos:new Array,completed:!1},e.setName=function(t){e.setState({name:t})},e.setAvatar=function(t){e.setState({avatar:t})},e.setPhotos=function(t){e.setState({recentPhotos:t}),setTimeout((function(){e.forceUpdate()}),1e3)},e.setAccess=function(t){if(!document.cookie.match(new RegExp("(^| )access=([^;]+)"))){var n=new Date,a=n.getTime();a+=72e5,n.setTime(a),document.cookie="access=".concat(t,";expires=").concat(n.toUTCString(),";path=/;"),setTimeout((function(){e.forceUpdate()}),500)}},e}return Object(o.a)(n,[{key:"render",value:function(){var e=document.cookie.match(new RegExp("(^| )token=([^;]+)")),t=document.cookie.match(new RegExp("(^| )userId=([^;]+)")),n=document.cookie.match(new RegExp("(^| )access=([^;]+)")),a=this.state,c=a.name,r=a.avatar,i=(a.completed,a.recentPhotos);return e&&t?Object(g.jsxs)("div",{className:"dashFlex",children:[Object(g.jsx)(y,{top:"-100px",left:0,color:"purpleD",scale:1.5,overlay:!0,conditions:0===i.length||0===c.length||0===r.length}),Object(g.jsx)(N,{setAccess:this.setAccess}),n&&Object(g.jsxs)(s.a.Fragment,{children:[Object(g.jsx)("div",{class:"leftPanel",children:i.length>0&&i.map((function(e,t){return Object(g.jsx)("div",{className:"widget",children:Object(g.jsx)("img",{src:e.url})},t)}))}),Object(g.jsxs)("div",{className:"mainSection",children:[Object(g.jsxs)("div",{className:"head",children:[Object(g.jsx)("div",{class:"headAvatar",children:Object(g.jsx)("img",{src:r})}),Object(g.jsxs)("span",{style:{marginLeft:"10px"},children:["Welcome ",c," "]})]}),Object(g.jsx)(w,{access:n,setPhotos:this.setPhotos,setName:this.setName,setAvatar:this.setAvatar})]}),Object(g.jsx)(k,{})]})]}):Object(g.jsx)("div",{children:"ERROR"})}}]),n}(s.a.Component),T=Object(O.b)((function(e){return{}}))(S),C=(n(54),n(31),n(23)),P=n(24);var R=Object(O.b)((function(e){return{}}))((function(){return Object(g.jsxs)(s.a.Fragment,{children:[Object(g.jsxs)("li",{"data-tag":"1",children:[Object(g.jsx)(C.a,{icon:P.b})," ",Object(g.jsx)("a",{href:"https://lbaker15.github.io/ReactPhoto/#/dashboard",children:"Dashboard"})," "]}),Object(g.jsxs)("li",{"data-tag":"2",children:[Object(g.jsx)(C.a,{icon:P.c})," ",Object(g.jsx)("a",{href:"https://lbaker15.github.io/ReactPhoto/#/scheduled",children:"View Schedule"})," "]}),Object(g.jsxs)("li",{"data-tag":"3",children:[Object(g.jsx)(C.a,{icon:P.a})," ",Object(g.jsx)("a",{href:"https://lbaker15.github.io/ReactPhoto/#/upload",children:"Upload"})," "]})]})})),D="DRAWER";function A(e){return{type:D,value:e}}var U=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={drawerOpen:!1},e.openDrawer=function(){e.props.dispatch(A({val:!0}))},e.closeDrawer=function(t){var n=t.target.attributes.getNamedItem("data-tag");t.target!==e.list.current&&t.target!==e.listUl.current&&null===n&&e.props.dispatch(A({val:!1}))},e.list=s.a.createRef(),e.listUl=s.a.createRef(),e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=null!==this.props.parent?this.props.parent:null;setTimeout((function(){r.a.findDOMNode(t.current);t.current.addEventListener("click",(function(t){return e.closeDrawer(t)}))}),2e3)}},{key:"render",value:function(){this.state.drawerOpen;var e=this.props.sidebar;return Object(g.jsxs)(s.a.Fragment,{children:[!e&&Object(g.jsx)("div",{className:"burgerIcon",onClick:this.openDrawer,children:"Sidebar"}),e&&Object(g.jsxs)(s.a.Fragment,{children:[Object(g.jsx)("div",{className:"blur"}),Object(g.jsxs)("div",{onClick:this.openDrawer,className:"list",ref:this.list,children:[Object(g.jsx)("ul",{ref:this.listUl,children:Object(g.jsx)(R,{parent:this.listUl})}),Object(g.jsx)("button",{className:"logout",children:"Logout"})]})]})]})}}]),n}(s.a.Component),L=Object(O.b)((function(e){return{sidebar:e.sidebar}}))(U),I=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={file:"",time:"",date:"",alertMsg:"",message:"",hovered:!1},e.handleChange=function(t){e.setState(Object(m.a)({},t.target.id,t.target.value))},e.handleChangeImg=function(t){t.target.files.length&&e.setState({preview:URL.createObjectURL(t.target.files[0]),file:t.target.files[0]})},e.clearImg=function(){e.setState({preview:"",file:""})},e.handleUpload=function(){var t=e.state,n=t.file,a=t.time,s=t.date,c=(t.preview,t.message),r=(new Date).getTime();if(console.log(n,a,s),""!==n&&""!==a&&""!==s&&""!==c){var i=document.cookie.match(new RegExp("(^| )userId=([^;]+)"))[0].split("=")[1],o=String(i+"_"+n.name),l=new FormData;l.append("image",n,o);var d=String(s),h=String(a),u=d.split("-"),j=Number(u[0]),b=Number(u[1])-1,p=Number(u[2]),m=h.split(":"),O=Number(m[0]),g=Number(m[1]),f=new Date(Date.UTC(j,b,p,O,g,0,0)).getTime();if(r>f)e.setState({alertMsg:"Scheduled date must be in the future."});else{l.append("time",f),l.append("userId",i),l.append("message",c);var x=document.cookie.match(new RegExp("(^| )token=([^;]+)"))[0].split("=")[1];setTimeout((function(){fetch("https://multer-test123.herokuapp.com/upload",{method:"POST",body:l,headers:{Authorization:"Bearer ".concat(x)}}).then((function(e){return e.json()})).then((function(t){var n=t.Error;n?e.setState({alertMsg:n}):e.setState({alertMsg:"Image successfully uploaded!"}),console.log(t)}))}),2e3)}}else e.setState({alertMsg:"Please ensure all fields are filled in correctly."})},e.refTwo=s.a.createRef(),e}return Object(o.a)(n,[{key:"render",value:function(){var e=this;if(document.cookie.match(new RegExp("(^| )token=([^;]+)"))){var t=this.state,n=t.file,a=t.time,c=t.date,r=t.preview,i=t.message,o=t.alertMsg,l=t.hovered;return console.log("hovered status new",l),Object(g.jsxs)("div",{className:"entireWidth",ref:this.refTwo,children:[Object(g.jsxs)("div",{className:"formHeaders",children:[Object(g.jsx)("h1",{children:"Schedule An Upload"}),Object(g.jsx)("h2",{children:"Some information about how it works here. Lorem ipsum is the standard language of the typing industry."})]}),Object(g.jsxs)("div",{className:"formFlex",children:[Object(g.jsxs)("div",{className:"inputForm",style:o&&r?{height:"550px"}:{height:"500px"},children:[Object(g.jsx)("div",{style:o?{display:"block"}:{display:"none"},className:"alert",children:o}),Object(g.jsx)("label",{for:"date",children:"Date:"}),Object(g.jsx)("input",{type:"date",id:"date",value:c,onChange:this.handleChange}),Object(g.jsx)("label",{for:"time",children:"Time:"}),Object(g.jsx)("input",{type:"time",id:"time",value:a,onChange:this.handleChange}),Object(g.jsx)("label",{for:"message",children:"message:"}),Object(g.jsx)("input",{type:"text",id:"message",value:i,onChange:this.handleChange}),Object(g.jsx)("label",{style:""!==n?{height:"120px"}:{height:"75px"},className:"fileBox",for:"file",children:r?Object(g.jsxs)(s.a.Fragment,{children:[Object(g.jsx)("img",{src:r,width:"100",height:"100"}),Object(g.jsx)("button",{onClick:this.clearImg,className:"clearImg",children:"Change image"})]}):Object(g.jsx)("div",{id:l?"shadow2":"shadow1",onMouseEnter:function(){return e.setState({hovered:!0})},onMouseLeave:function(){return e.setState({hovered:!1})},className:"uploadBtn",children:"Please select an image"})}),Object(g.jsx)("input",{type:"file",id:"file",style:{display:"none"},onChange:this.handleChangeImg}),Object(g.jsx)("button",{className:"btnSubmit",onClick:this.handleUpload,children:"Upload"}),Object(g.jsx)("div",{className:l?"btnBlur2":"btnBlur"})]}),Object(g.jsx)(L,{parent:this.refTwo})]})]})}return Object(g.jsx)("div",{children:"ERROR"})}}]),n}(s.a.Component),E=Object(O.b)((function(e){return{}}))(I),M=n(30),F=(n(58),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={pastUrls:new Array,futureUrls:new Array,pastShowing:!1,loading:!0,btnDisabled:!1,smallLoader:!1},e.refOne=s.a.createRef(),e.toggle=function(){e.setState((function(e){return{btnDisabled:!0,smallLoader:!0}})),setTimeout((function(){e.setState((function(e){return{pastShowing:!e.pastShowing}}))}),500),setTimeout((function(){e.setState((function(e){return{btnDisabled:!1,smallLoader:!1}}))}),1e3)},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=document.cookie.match(new RegExp("(^| )token=([^;]+)"));if(t){var n=t[0].split("=")[1],a={userId:localStorage.getItem("userId")};setTimeout((function(){fetch("https://multer-test123.herokuapp.com/getScheduled",{headers:{Authorization:"Bearer ".concat(n),"Content-Type":"application/json"},body:JSON.stringify(a),method:"POST"}).then((function(e){return e.json()})).then(function(){var t=Object(p.a)(b.a.mark((function t(n){var a,s,c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.Success,s=new Array,c=new Array,t.next=5,a.map((function(e){var t=e.data,n=e.time,a=(new Date).getTime(),r={name:t,time:n};return fetch(e.location).then((function(e){return e.blob()})).then((function(e){var t=new FileReader;t.readAsDataURL(e),t.onloadend=function(){var e=t.result,i=Object(M.a)(Object(M.a)({},r),{},{img:e});a>n?s.push(i):c.push(i)}}))}));case 5:setTimeout((function(){e.setState({futureUrls:c}),e.setState({pastUrls:s}),e.setState({loading:!1}),e.forceUpdate()}),1e3);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),500)}}},{key:"timeConverter",value:function(e){var t=new Date(Number(e)),n=t.getFullYear(),a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()],s=t.getDate(),c=t.getHours(),r=t.getMinutes();console.log("HOUR, MINS:",c,Number(r)<10);var i=s+" "+a+" "+n,o=c+":"+(Number(r)<10?"0"+String(r):r);return Object(g.jsxs)("div",{className:"timings",children:[Object(g.jsxs)("span",{children:[Object(g.jsx)("span",{className:"bold",children:"Date:"})," ",Object(g.jsx)("br",{})," ",i," "]}),Object(g.jsxs)("span",{children:[Object(g.jsx)("span",{className:"bold",children:"Time:"})," ",Object(g.jsx)("br",{})," ",o," "]})]})}},{key:"render",value:function(){var e=this;if(document.cookie.match(new RegExp("(^| )token=([^;]+)"))){var t=this.state,n=t.pastUrls,a=t.smallLoader,c=t.futureUrls,r=t.btnDisabled,i=t.pastShowing,o=t.loading;return Object(g.jsx)(s.a.Fragment,{children:Object(g.jsx)("div",{class:"widthTotal",ref:this.refOne,children:Object(g.jsxs)("div",{className:"scheduled",children:[Object(g.jsx)("h1",{children:"Scheduled posts"}),Object(g.jsx)(y,{top:"50px",left:"-150px",color:"fontD",scale:2,conditions:!0===o,overlay:!1}),!o&&Object(g.jsx)("div",{className:"btns",children:a?Object(g.jsx)("div",{className:"loadingBtnText",children:"Loading..."}):Object(g.jsx)("button",{disbaled:!!r,onClick:this.toggle,children:i?"View Scheduled Posts":"View Past Posts"})}),Object(g.jsxs)("div",{className:"flex",children:[!0===i&&!1===o&&0!==n.length&&n.map((function(t,a){return a===n.length-1&&console.log("PAST URL MAP here"),Object(g.jsxs)("div",{className:"item",children:[Object(g.jsx)("div",{style:{backgroundImage:"url("+t.img+")"},class:"img"}),e.timeConverter(t.time)]},a)})),!0===i&&!1===o&&0===n.length&&Object(g.jsx)("div",{className:"noDisplay",children:"There are no past posts to display."}),!1===i&&!1===o&&0===c.length&&Object(g.jsx)("div",{className:"noDisplay",children:"There are no scheduled posts to display."}),!1===i&&!1===o&&0!==c.length&&c.map((function(t,n){return Object(g.jsxs)("div",{id:n%3===0?n%2===0?"purple":"yellow":"blue",className:"item",children:[Object(g.jsx)("img",{style:{width:180,height:180},src:t.img}),e.timeConverter(t.time)]},n)}))]}),Object(g.jsx)(L,{parent:this.refOne})]})})})}return Object(g.jsx)("div",{children:"ERROR"})}}]),n}(s.a.Component)),B=Object(O.b)((function(e){return{}}))(F),_=(s.a.Component,function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.name;return Object(g.jsx)(s.a.Fragment,{children:Object(g.jsxs)("div",{class:"btnPage",children:[Object(g.jsxs)("span",{className:"btnPageName",children:["Welcome ",e]}),Object(g.jsx)("span",{className:"btnPageInfo",children:"Please authorize your login with facebook by clicking the button below.  Enter information here about privacy policy, needs to be longer. "}),Object(g.jsx)("a",{className:"btnPageLink",href:"https://multer-test123.herokuapp.com/fbAuth",children:"Continue With Facebook"})]})})}}]),n}(s.a.Component)),J=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={loggedIn:!1,accessToken:"",loggedOut:!1,loading:!1,cookie:null},e.redirectPage=function(t){e.setState({loggedIn:t})},e.redirectPageLogout=function(t){e.setState({loggedOut:t})},e.setAccess=function(t){e.setState({accessToken:t})},e.forceRender=function(){var t=document.cookie.match(new RegExp("(^| )token=([^;]+)"));e.setState({cookie:t}),setTimeout((function(){e.forceUpdate()}),500)},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=(t.loggedIn,t.loggedOut),a=t.accessToken,c=this.state;c.cookie;return c.loading?Object(g.jsx)("div",{children:"Loading"}):Object(g.jsxs)(h.a,{basename:"/",children:[Object(g.jsx)("div",{className:"linearGrad"}),Object(g.jsxs)(u.d,{children:[Object(g.jsx)(u.b,{exact:!0,path:"/",children:Object(g.jsx)("div",{className:"form",children:Object(g.jsx)("div",{className:"rowMine",children:Object(g.jsx)(x,{forceRender:this.forceRender})})})}),Object(g.jsxs)(s.a.Fragment,{children:[Object(g.jsx)(u.b,{component:function(){return Object(g.jsx)(T,{loggedOut:n,redirectPageLogout:e.redirectPageLogout,redirectPage:e.redirectPage,accessToken:a})},path:"/dashboard"}),Object(g.jsx)(u.b,{path:"/upload",component:E}),Object(g.jsx)(u.b,{path:"/scheduled",component:B}),Object(g.jsx)(u.b,{path:"/btnPage",component:_})]})]})]})}}]),n}(s.a.Component),W=Object(O.b)((function(e){return{}}))(J),z=n(15),H=Object(z.c)({sidebar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return console.log("reducer",e,t.value.val),t.value.val;default:return e}}}),V=n(34),G=Object(z.a)(V.a),K=Object(z.d)(H,G);r.a.render(Object(g.jsx)(s.a.StrictMode,{children:Object(g.jsx)(O.a,{store:K,children:Object(g.jsx)(W,{})})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.a2969acb.chunk.js.map