(this["webpackJsonpfacebookclone-ing5c"]=this["webpackJsonpfacebookclone-ing5c"]||[]).push([[0],{100:function(e,a,t){},101:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(20),c=t.n(r),o=(t(77),t(6)),i=(t(78),t(79),t(118)),s=(t(33),t(48)),m=t.n(s),u=Object(n.createContext)(),d=function(e){var a=e.reducer,t=e.initialState,r=e.children;return l.a.createElement(u.Provider,{value:Object(n.useReducer)(a,t)},r)},p=function(){return Object(n.useContext)(u)},E=t(18),f=t.n(E),g=f.a.initializeApp({apiKey:"AIzaSyAZfkAbJeVw3KTAlJIcIfF8mha8UK0MroM",authDomain:"frameworkjsexam.firebaseapp.com",projectId:"frameworkjsexam",storageBucket:"frameworkjsexam.appspot.com",messagingSenderId:"984528466251",appId:"1:984528466251:web:cf74ef31409b73f56c78ce",measurementId:"G-EE2RPX7N9R"}).firestore(),v=f.a.auth(),h=(f.a.storage(),new f.a.auth.GoogleAuthProvider),_=(f.a,g),b=t(41),y=t(42),S=t(67),w=t(65);n.Component;var N=function(){var e=p(),a=Object(o.a)(e,2),t=a[0].user,r=(a[1],Object(n.useState)("")),c=Object(o.a)(r,2),s=c[0],u=c[1],d=Object(n.useState)(null),E=Object(o.a)(d,2),g=E[0],v=E[1],h=Object(n.useState)(""),b=Object(o.a)(h,2),y=b[0],S=b[1],w=Object(n.useRef)(null);return l.a.createElement("div",{className:"messageSender"},l.a.createElement("div",{class:"messageSender__top"},l.a.createElement(i.a,{src:t.photoURL}),l.a.createElement("form",null,l.a.createElement("input",{ref:w,id:"upload",hidden:!0,type:"file",onChange:function(e){if(e.target.files[0]){var a=new FileReader,t=e.target.files[0];v(t),a.readAsDataURL(t),a.onload=function(){S(a.result)}}}}),l.a.createElement("input",{value:s,onChange:function(e){return u(e.target.value)},placeholder:"What's on your mind, ".concat(t.displayName,"?"),style:{width:"100%"}}),l.a.createElement("button",{type:"submit",className:"btn btn-outline-primary",onClick:function(e){if(e.preventDefault(),null!=g){var a=g,n=f.a.storage().ref().child("folder/"+a.name).put(a);n.on(f.a.storage.TaskEvent.STATE_CHANGED,(function(e){}),(function(e){throw e}),(function(){n.snapshot.ref.getDownloadURL().then((function(e){_.collection("posts").add({message:s,timestamp:f.a.firestore.FieldValue.serverTimestamp(),profilePic:t.photoURL,username:t.displayName,image:e,likes:[]}),u(""),S(""),v(null)}))}))}else e.preventDefault(),_.collection("posts").add({message:s,timestamp:f.a.firestore.FieldValue.serverTimestamp(),profilePic:t.photoURL,username:t.displayName,image:"",likes:[]}),u(""),S(""),v(null)}},"Post Now"))),l.a.createElement("div",{className:"messageSender_image",style:{textAlign:"center"}},l.a.createElement("img",{src:y,style:{width:"50%"}})),l.a.createElement("div",{class:"messageSender__bottom"},l.a.createElement("div",{class:"messageSender__option",onClick:function(){w.current.click()}},l.a.createElement(m.a,{style:{color:"green"}}),l.a.createElement("h3",null,"Photo/Video"))))},k=(t(95),t(35)),j=t.n(k),O=t(49),I=t.n(O),C=t(51),R=t.n(C),P=t(50),F=t.n(P),U=t(22),T=t.n(U);function D(e){var a=e.id;console.log("__________",a);var t=p(),r=Object(o.a)(t,2),c=r[0].user,s=(r[1],Object(n.useState)("")),m=Object(o.a)(s,2),u=m[0],d=m[1];return l.a.createElement("div",{className:"messageSender",style:{margin:"0"}},l.a.createElement("div",{class:"messageSender__top"},l.a.createElement(i.a,{src:c.photoURL}),l.a.createElement("form",null,l.a.createElement("input",{value:u,onChange:function(e){return d(e.target.value)},placeholder:"Add Comment, ".concat(c.displayName,"?"),style:{width:"100%"}}),l.a.createElement("button",{type:"submit",className:"btn btn-outline-primary",onClick:function(e){e.preventDefault(),_.collection("posts").doc(a).collection("comments").add({comment:u,timestamp:f.a.firestore.FieldValue.serverTimestamp(),profilePic:c.photoURL,username:c.displayName}),d("")}},"comment"))))}function A(e){var a=e.comment,t=(e.timestamp,e.profilePic);e.username,e.id;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"messageSender",style:{margin:"0"}},l.a.createElement("div",{class:"messageSender__top"},l.a.createElement(i.a,{src:t}),l.a.createElement("form",null,l.a.createElement("input",{value:a,disabled:!0,style:{width:"100%"}})))))}var x=function(e){var a=e.id,t=e.profilePic,r=e.image,c=e.username,s=e.timestamp,m=e.message,u=e.likes,d=Object(n.useState)([]),E=Object(o.a)(d,2),g=E[0],v=E[1],h=p(),b=Object(o.a)(h,2),y=b[0].user;return b[1],console.log(u),Object(n.useEffect)((function(){_.collection("posts").doc(a).collection("comments").onSnapshot((function(e){return v(e.docs.map((function(e){return console.log(e.data()),{id:e.id,data:e.data()}})))}))}),[]),l.a.createElement("div",{className:"post"},l.a.createElement("div",{class:"post__top"},l.a.createElement(i.a,{src:t,className:"post__avatar"}),l.a.createElement("div",{class:"post__topInfo"},l.a.createElement("h3",null,c),l.a.createElement("p",null,new Date(null===s||void 0===s?void 0:s.toDate()).toUTCString()))),l.a.createElement("div",{class:"post__bottom"},l.a.createElement("p",null,m)),l.a.createElement("div",{class:"post__image"},l.a.createElement("img",{src:r,alt:""})),l.a.createElement("div",{class:"post__options"},u.includes(y.displayName)?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{class:"post__option",onClick:function(e){e.preventDefault(),_.collection("posts").doc(a).update({likes:f.a.firestore.FieldValue.arrayRemove(y.displayName)})}},l.a.createElement(j.a,null),l.a.createElement("p",null,u.length," Dislike"))):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{class:"post__option",onClick:function(e){e.preventDefault(),_.collection("posts").doc(a).update({likes:f.a.firestore.FieldValue.arrayUnion(y.displayName)})}},l.a.createElement(j.a,null),l.a.createElement("p",null,u.length," Like"))),l.a.createElement("div",{class:"post__option"},l.a.createElement(I.a,null),l.a.createElement("p",null,"Comment")),l.a.createElement("div",{class:"post__option"},l.a.createElement(F.a,null),l.a.createElement("p",null,"Share")),l.a.createElement("div",{class:"post__option"},l.a.createElement(R.a,null),l.a.createElement(T.a,null))),l.a.createElement("div",{class:"post__comments"},l.a.createElement(D,{key:a,id:a}),g.map((function(e){return l.a.createElement(A,{key:e.id,id:e.id,profilePic:e.data.profilePic,comment:e.data.comment,timestamp:e.data.timestamp,username:e.data.username})}))))};var L=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)((function(){_.collection("posts").orderBy("timestamp","desc").onSnapshot((function(e){return r(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))}),[]),l.a.createElement("div",{className:"feed"},l.a.createElement(N,null),t.map((function(e){return l.a.createElement(x,{key:e.id,id:e.id,profilePic:e.data.profilePic,message:e.data.message,timestamp:e.data.timestamp,username:e.data.username,image:e.data.image,likes:e.data.likes})})))},V=(t(96),t(52)),z=t.n(V),M=t(53),B=t.n(M),K=t(54),W=t.n(K),G=t(55),J=t.n(G),H=t(32),X=t.n(H),Z=t(56),$=t.n(Z),q=t(116),Q=t(57),Y=t.n(Q),ee=t(58),ae=t.n(ee),te=t(59),ne=t.n(te);var le=function(){var e=p(),a=Object(o.a)(e,2),t=a[0].user;return a[1],l.a.createElement("div",{className:"header"},l.a.createElement("div",{className:"header__left"},l.a.createElement("img",{src:"logoKarriery.png",alt:""}),l.a.createElement("div",{className:"header__input"},l.a.createElement(z.a,null),l.a.createElement("input",{type:"text",placeholder:"Search Facebook"}))),l.a.createElement("div",{className:"header__center"},l.a.createElement("div",{className:"header__option header__option--active"},l.a.createElement(B.a,{fontSize:"large"})),l.a.createElement("div",{className:"header__option"},l.a.createElement(W.a,{fontSize:"large"})),l.a.createElement("div",{className:"header__option"},l.a.createElement(J.a,{fontSize:"large"})),l.a.createElement("div",{className:"header__option"},l.a.createElement(X.a,{fontSize:"large"})),l.a.createElement("div",{className:"header__option"},l.a.createElement($.a,{fontSize:"large"}))),l.a.createElement("div",{className:"header__right"},l.a.createElement("div",{class:"header__info"},l.a.createElement(i.a,{src:t.photoURL}),l.a.createElement("h4",null,t.displayName)),l.a.createElement(q.a,null,l.a.createElement(Y.a,null)),l.a.createElement(q.a,null,l.a.createElement(ae.a,null)),l.a.createElement(q.a,null,l.a.createElement(ne.a,null)),l.a.createElement(q.a,null,l.a.createElement(T.a,null))))},re=t(117),ce=(t(97),t(36)),oe={SET_USER:"SET_USER"},ie=function(e,a){switch(console.log(oe),a.type){case oe.SET_USER:return Object(ce.a)(Object(ce.a)({},e),{},{user:a.user});default:return e}};var se=function(){var e=p(),a=Object(o.a)(e,2),t=(a[0],a[1]);return l.a.createElement("div",{className:"login"},l.a.createElement("div",{className:"login__logo"},l.a.createElement("img",{src:"logoKarriery.png",alt:"",style:{marginBottom:"50px"}}),l.a.createElement(re.a,{type:"submit",onClick:function(){v.signInWithPopup(h).then((function(e){t({type:oe.SET_USER,user:e.user}),console.log(e.user)})).catch((function(e){return alert(e.message)}))}},"Sign In With Google")))};t(98),t(99);var me=function(e){var a=e.src,t=e.Icon,n=e.title;return l.a.createElement("div",{className:"sidebarRow",style:{marginTop:"20px"}},a&&l.a.createElement(i.a,{src:a}),t&&l.a.createElement(t,null),l.a.createElement("h4",null,n))},ue=t(60),de=t.n(ue),pe=t(61),Ee=t.n(pe),fe=t(62),ge=t.n(fe),ve=t(63),he=t.n(ve),_e=t(64),be=t.n(_e);var ye=function(){var e=p(),a=Object(o.a)(e,2),t=a[0].user;return a[1],l.a.createElement("div",{className:"sidebar",style:{marginTop:"3%"}},l.a.createElement(me,{src:t.photoURL,title:t.displayName}),l.a.createElement(me,{Icon:de.a,title:"COVID_19 Information Center"}),l.a.createElement(me,{Icon:Ee.a,title:"Pages"}),l.a.createElement(me,{Icon:ge.a,title:"Friends"}),l.a.createElement(me,{Icon:he.a,title:"Messenger"}),l.a.createElement(me,{Icon:X.a,title:"Marketplace"}),l.a.createElement(me,{Icon:be.a,title:"Videos"}),l.a.createElement(me,{Icon:T.a,title:"More"}))};t(100);var Se=function(){return l.a.createElement("div",{className:"widgets"},l.a.createElement("iframe",{src:"https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCleverProgrammerr%2F&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId",title:"Clever Programmer Fb Page",width:"340",height:"100%",style:{border:"none",overflow:"hidden"},scrolling:"no",frameborder:"0",allowtransparency:"true",allow:"encrypted-media"}))},we=t(66);var Ne=function(){var e=p(),a=Object(o.a)(e,2),t=a[0].user;return a[1],Object(n.useEffect)((function(){we.a.init({appId:"aee2db32-157d-4adf-97df-3c3b4fb0ab2e"})}),[]),l.a.createElement("div",{className:"app"},t?l.a.createElement(l.a.Fragment,null,l.a.createElement(le,null),l.a.createElement("div",{className:"app__body"},l.a.createElement(ye,null),l.a.createElement(L,null),l.a.createElement(Se,null))):l.a.createElement(se,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(d,{initialState:{user:null},reducer:ie},l.a.createElement(Ne,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},33:function(e,a,t){},72:function(e,a,t){e.exports=t(101)},77:function(e,a,t){},78:function(e,a,t){},79:function(e,a,t){},95:function(e,a,t){},96:function(e,a,t){},97:function(e,a,t){},98:function(e,a,t){},99:function(e,a,t){}},[[72,1,2]]]);
//# sourceMappingURL=main.fcc0de2a.chunk.js.map