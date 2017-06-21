webpackJsonp([15,13],{0:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var o=n(1),u=a(o),i=n(325),l=n(499),s=a(l),r=n(18),c=n(525),f=a(c),d=n(494),p=a(d),m=(0,f.default)();window.axios=(0,p.default)(m),(0,i.render)(u.default.createElement(r.Provider,{store:m},(0,s.default)(m)),document.getElementById("app"))},23:function(e,t,n){"use strict";function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}Object.defineProperty(t,"__esModule",{value:!0});var o=n(83),u=n(233),i=a(u),l={register:(0,o.createAction)(i.RESGISTER_EVENT,function(e,t,n){return{type:e,fn:t,data:n}}),execute:(0,o.createAction)(i.EXECUTE,function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];return{type:e,args:n}})};t.default=l},69:function(e,t,n){"use strict";function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}Object.defineProperty(t,"__esModule",{value:!0});var o=n(83),u=n(232),i=a(u),l={setStatus:(0,o.createAction)(i.SET_STATUS),setAccessToken:(0,o.createAction)(i.SET_ACCESSTOKEN),setUserInfo:(0,o.createAction)(i.SET_USERINFO),clearStatus:(0,o.createAction)(i.CLEAR_STATUS)};t.default=l},231:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=void 0;a={host:"",withCredentials:!1,socket_host:"https://nightcat.win"},t.default=a},232:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.SET_STATUS="SET_STATUS",t.SET_ACCESSTOKEN="SET_ACCESSTOKEN",t.SET_USERINFO="SET_USERINFO",t.CLEAR_STATUS="CLEAR_STATUS"},233:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.RESGISTER_EVENT="RESGISTER_EVENT",t.EXECUTE="EXECUTE"},301:function(e,t){},302:function(e,t){},317:function(e,t){},318:function(e,t){},489:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(160),u=a(o),i=n(7),l=a(i),s=n(3),r=a(s),c=n(4),f=a(c),d=n(9),p=a(d),m=n(8),h=a(m),g=n(1),v=a(g),E=n(492),_=a(E),y=n(491),k=a(y),S=n(18),b=n(15),C=n(23),T=a(C);n(318),n(317);var w=function(e){function t(e){(0,r.default)(this,t);var n=(0,p.default)(this,(t.__proto__||(0,l.default)(t)).call(this,e));return n.state={notice:{show:!1},menu:{}},n.timer=null,n.offsetView=n.offsetView.bind(n),n}return(0,h.default)(t,e),(0,f.default)(t,[{key:"componentWillMount",value:function(){this.props.actions.register("notice",this.openNotice.bind(this)),this.props.actions.register("menu",this.setMenu.bind(this))}},{key:"offsetView",value:function(){this.refs.view.classList.toggle("offset")}},{key:"setMenu",value:function(e,t){this.setState({menu:(0,u.default)({show:e},t)})}},{key:"openNotice",value:function(e,t,n){var a=this;this.setState({notice:(0,u.default)({show:!0,message:e},n)}),t&&(this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){a.setState({notice:(0,u.default)({show:!1,message:e},n)})},t))}},{key:"render",value:function(){return v.default.createElement("div",{ref:"container"},v.default.createElement("div",{ref:"view",className:"container"},this.props.children),v.default.createElement(k.default,(0,u.default)({ref:"menu"},this.state.menu,{callback:this.offsetView})),v.default.createElement(_.default,(0,u.default)({key:"Message"},this.state.notice)))}}]),t}(g.Component),N=function(e){return{store:e}},M=function(e){return{actions:(0,b.bindActionCreators)(T.default,e)}};t.default=(0,S.connect)(N,M)(w),w.propTypes={children:g.PropTypes.any,store:g.PropTypes.object,actions:g.PropTypes.any}},491:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(7),u=a(o),i=n(3),l=a(i),s=n(4),r=a(s),c=n(9),f=a(c),d=n(8),p=a(d),m=n(1),h=a(m),g=n(40),v=a(g),E=n(93);n(301);var _=n(18),y=n(15),k=n(23),S=a(k),b=n(69),C=a(b),T=function(e){function t(e){(0,l.default)(this,t);var n=(0,f.default)(this,(t.__proto__||(0,u.default)(t)).call(this,e));return n.state={sideShow:!1},n.toggleMenu=n.toggleMenu.bind(n),n.signout=n.signout.bind(n),n.linkClick=n.linkClick.bind(n),n.windowClick=n.windowClick.bind(n),n}return(0,p.default)(t,e),(0,r.default)(t,[{key:"componentDidMount",value:function(){document.body.addEventListener("click",this.windowClick,!1)}},{key:"componentWillUnmount",value:function(){document.body.removeEventListener("click",this.windowClick,!1)}},{key:"signout",value:function(){var e=this;axios.post("/signout",{}).then(function(t){t.success&&(e.props.actions.execute("notice","退出成功！",2e3,{status:"success"}),e.clearWebStorage(),e.props.authConf.clearStatus())}).catch(function(t){return e.props.actions.execute("notice",t.message,2e3,{status:"error"})})}},{key:"clearWebStorage",value:function(e){window.localStorage.removeItem("token")}},{key:"windowClick",value:function(e){this.state.sideShow&&!this.refs.sideMenu.contains(e.target)&&this.toggleMenu()}},{key:"toggleMenu",value:function(){this.props.callback&&this.props.callback(),this.setState({sideShow:!this.state.sideShow})}},{key:"gotoSign",value:function(e,t){this.linkClick(e),this.context.router.push("/sign?link="+(this.context.router.location.pathname+(t?"&signup=1":"")))}},{key:"linkClick",value:function(e){e.currentTarget.classList.contains("active")||this.toggleMenu()}},{key:"render",value:function(){var e=this,t=(0,v.default)("menu",{show:this.props.show,open:this.state.sideShow});return h.default.createElement("div",{className:t},h.default.createElement("div",{className:"menu-btn menu-btn-outside",onClick:this.toggleMenu},h.default.createElement("i",{className:"iconfont icon-menu"}),h.default.createElement("span",null,"Menu")),h.default.createElement("div",{ref:"sideMenu",className:"side-menu"},h.default.createElement("div",{className:"menu-btn menu-btn-inside",onClick:this.toggleMenu},h.default.createElement("i",{className:"iconfont icon-menu"}),h.default.createElement("span",null,"Menu")),h.default.createElement("div",{className:"link-group"},h.default.createElement(E.IndexLink,{to:"/",activeClassName:"active",className:"link",onClick:this.linkClick},h.default.createElement("i",{className:"iconfont icon-home"}),h.default.createElement("span",null,"Home")),h.default.createElement(E.Link,{to:"/games",activeClassName:"active",className:"link",onClick:this.linkClick},h.default.createElement("i",{className:"iconfont icon-game"}),h.default.createElement("span",null,"All Game")),h.default.createElement(E.Link,{to:"/games/local",activeClassName:"active",className:"link",onClick:this.linkClick},h.default.createElement("i",{className:"iconfont icon-singleGames"}),h.default.createElement("span",null,"Single Game")),h.default.createElement(E.Link,{to:"/games/online",activeClassName:"active",className:"link",onClick:this.linkClick},h.default.createElement("i",{className:"iconfont icon-onlineGames"}),h.default.createElement("span",null,"Online Game")),h.default.createElement(E.Link,{to:"/about",activeClassName:"active",className:"link",onClick:this.linkClick},h.default.createElement("i",{className:"iconfont icon-about"}),h.default.createElement("span",null,"About Me"))),this.props.showUserGroup&&(this.props.isLogin?h.default.createElement("div",{className:"user-group"},h.default.createElement("div",{className:"personal-information"},h.default.createElement("img",{className:"avatar",src:this.props.userInfo.avatar}),h.default.createElement("h2",{className:"user-name"},this.props.userInfo.name),h.default.createElement("small",{className:"user-profile"},this.props.userInfo.profile),h.default.createElement("div",{className:"follow"},h.default.createElement("a",{href:"https://github.com/NightCatSama",target:"_blank"},h.default.createElement("i",{className:"iconfont icon-github"})),h.default.createElement("a",{href:"https://twitter.com/NightCatSama",target:"_blank"},h.default.createElement("i",{className:"iconfont icon-twitter"})),h.default.createElement("a",{href:"http://weibo.com/p/1005053909739860",target:"_blank"},h.default.createElement("i",{className:"iconfont icon-sina"})))),h.default.createElement("div",{className:"sign-btn-group"},h.default.createElement(E.Link,{to:"/user",className:"sign-btn blue-btn",onClick:this.linkClick},"My info"),h.default.createElement("a",{href:"javascript:;",className:"sign-btn",onClick:this.signout},"Sign out"))):h.default.createElement("div",{className:"user-group"},h.default.createElement("div",{className:"sign-btn-group"},h.default.createElement("a",{href:"javascript:;",className:"sign-btn blue-btn",onClick:function(t){return e.gotoSign(t)}},"Sign in"),h.default.createElement("a",{href:"javascript:;",className:"sign-btn green-btn",onClick:function(t){return e.gotoSign(t,!0)}},"Sign up"))))))}}]),t}(m.Component),w=function(e){return{userInfo:e.auth.userInfo,isLogin:e.auth.isLogin}},N=function(e){return{actions:(0,y.bindActionCreators)(S.default,e),authConf:(0,y.bindActionCreators)(C.default,e)}};t.default=(0,_.connect)(w,N)(T),T.propTypes={show:m.PropTypes.bool,isLogin:m.PropTypes.bool,userInfo:m.PropTypes.object,callback:m.PropTypes.func,showUserGroup:m.PropTypes.bool,store:m.PropTypes.object,authConf:m.PropTypes.object,actions:m.PropTypes.object},T.defaultProps={show:!0,showUserGroup:!0},T.contextTypes={router:h.default.PropTypes.any.isRequired}},492:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(7),u=a(o),i=n(3),l=a(i),s=n(4),r=a(s),c=n(9),f=a(c),d=n(8),p=a(d),m=n(1),h=a(m),g=n(81),v=a(g),E=n(40),_=a(E);n(302);var y=function(e){function t(e){(0,l.default)(this,t);var n=(0,f.default)(this,(t.__proto__||(0,u.default)(t)).call(this,e));return n.shouldComponentUpdate=v.default.shouldComponentUpdate.bind(n),n}return(0,p.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){var e={loading:"loading",success:"success",error:"error",warning:"warning"},t=(0,_.default)("message",this.props.status,{show:this.props.show}),n=(0,_.default)("iconfont","icon-"+e[this.props.status||"warning"]);return h.default.createElement("div",{className:t,style:this.props.styles},h.default.createElement("i",{className:n}),h.default.createElement("span",null,this.props.message))}}]),t}(m.Component);t.default=y,y.propTypes={show:m.PropTypes.bool,styles:m.PropTypes.object,message:m.PropTypes.any,status:m.PropTypes.string},y.defaultProps={show:!1,styles:null,message:"",status:""}},494:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(159),u=a(o),i=n(250),l=a(i),s=n(231),r=a(s),c=function(e){var t=l.default.create({baseURL:r.default.host,withCredentials:r.default.withCredentials});return t.interceptors.request.use(function(t){var n=e.getState().auth,a=n.isLogin,o=n.accessToken;return a&&o&&(t.headers.accessToken=o),t}),t.interceptors.response.use(function(e){return e.data},function(e){try{return u.default.reject(e.response.data)}catch(e){return u.default.reject({success:!1,message:"未知错误"})}}),t};t.default=c},495:function(e,t,n){"use strict";function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u,i=n(56),l=o(i),s=n(37),r=o(s),c=n(83),f=n(232),d=a(f),p={isLogin:!1,accessToken:null,userInfo:null,events:{},signin_time:null},m=(0,c.handleActions)((u={},(0,l.default)(u,d.SET_STATUS,function(e,t){var n=t.payload;return window.localStorage.token=n.token,(0,r.default)({},e,{isLogin:!0,signin_time:new Date},n)}),(0,l.default)(u,d.SET_ACCESSTOKEN,function(e,t){var n=t.payload;return(0,r.default)({},e,{accessToken:n})}),(0,l.default)(u,d.SET_USERINFO,function(e,t){var n=t.payload;return(0,r.default)({},e,{userInfo:(0,r.default)({},e.userInfo,n)})}),(0,l.default)(u,d.CLEAR_STATUS,function(e,t){t.payLoad;return p}),u),p);t.default=m},496:function(e,t,n){"use strict";function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u,i=n(56),l=o(i),s=n(37),r=o(s),c=n(83),f=n(233),d=a(f),p={},m=(0,c.handleActions)((u={},(0,l.default)(u,d.RESGISTER_EVENT,function(e,t){var n=t.payload,a={};return a[n.type]=n.fn,(0,r.default)({},e,a)}),(0,l.default)(u,d.EXECUTE,function(e,t){var n=t.payload,a=n.type,o=n.args;return"function"==typeof e[a]&&e[a].apply(null,o),(0,r.default)({},e)}),u),p);t.default=m},497:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(15),u=n(496),i=a(u),l=n(495),s=a(l),r=(0,o.combineReducers)({eventBus:i.default,auth:s.default});t.default=r},498:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return[{path:"sign",getComponent:function(e,t){n.e(6,function(e){t(null,n(513).default)})}},{path:"active_account",getComponent:function(e,t){n.e(11,function(e){t(null,n(503).default)})}},{path:"about",getComponent:function(e,t){n.e(12,function(e){t(null,n(502).default)})}},{path:"my-friends",getComponent:function(e,t){n.e(9,function(e){t(null,n(507).default)})}},{path:"user(/:account)",getComponent:function(e,t){n.e(7,function(e){t(null,n(523).default)})},getIndexRoute:function(e,t){n.e(10,function(e){t(null,{component:n(155).default})})}},{path:"games(/:type)",getComponent:function(e,t){n.e(5,function(e){t(null,n(504).default)})}},{path:"single-games",getComponent:function(e,t){n.e(0,function(e){t(null,n(235).default)})},getIndexRoute:function(e,t){n.e(0,function(e){t(null,{component:n(235).default})})},getChildRoutes:function(e,t){!function(e){t(null,[{path:"factory",getComponent:function(e,t){n.e(3,function(e){t(null,n(515).default)})}},{path:"gobang",getComponent:function(e,t){n.e(8,function(e){t(null,n(521).default)})}}])}(n)}},{path:"online-games",onEnter:e,getComponent:function(e,t){n.e(1,function(e){t(null,n(234).default)})},getIndexRoute:function(e,t){n.e(1,function(e){t(null,{component:n(234).default})})},getChildRoutes:function(e,t){!function(e){t(null,[{path:"gobang",getComponent:function(e,t){n.e(2,function(e){t(null,n(512).default)})}}])}(n)}}]}},499:function(e,t,n){"use strict";e.exports=n(500)},500:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),u=a(o),i=n(93),l=n(501),s=a(l),r=n(489),c=a(r),f=n(498),d=a(f),p=function(e){var t=(0,s.default)(e),a=t.autoLogin,o=t.userRequired,l={path:"/",component:c.default,getIndexRoute:function(e,t){n.e(4,function(e){t(null,{component:n(505).default})})},childRoutes:(0,d.default)(o,a),onEnter:a};return u.default.createElement("div",null,u.default.createElement(i.Router,{history:i.browserHistory,routes:l}))};t.default=p},501:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=function(t,n,a){var o=e.getState().auth.isLogin;if(o)return void a();var u=window.localStorage.token;u?axios.post("/verify",{}).then(function(t){var n=t.data;window.localStorage.token=n.token,e.dispatch({type:"SET_STATUS",payload:n}),a()}).catch(function(e){window.localStorage.removeItem("token"),a()}):a()},n=function(t,n){var a=e.getState().auth.isLogin;if(!a)return void n("/Sign?message="+encodeURIComponent("请先登录")+"&link="+t.location.pathname)};return{autoLogin:t,userRequired:n}}},524:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(15),u=n(497),i=a(u),l=function(e){return(0,o.createStore)(i.default,e,window.devToolsExtension?window.devToolsExtension():void 0)};t.default=l},525:function(e,t,n){"use strict";var a,a=n(524);e.exports=a}});