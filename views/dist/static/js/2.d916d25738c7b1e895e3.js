webpackJsonp([2,3],{172:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(28),o=i(s),a=n(29),r=i(a),u=n(30),l=i(u),c=n(32),f=i(c),d=n(31),p=i(d),h=n(4),v=i(h);n(172);var m=n(44),g=n(19),w=n(65),_=i(w),y=function(e){function t(e){return(0,r.default)(this,t),(0,f.default)(this,(t.__proto__||(0,o.default)(t)).call(this,e))}return(0,p.default)(t,e),(0,l.default)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.actions.register("toggleView",function(){e.refs.view.classList.toggle("offset")}),this.props.actions.register("isOpenView",function(){e.refs.view.classList.contains("offset")})}},{key:"render",value:function(){return v.default.createElement("div",{ref:"view",className:"home-view"},v.default.createElement("section",{className:"info"},v.default.createElement("h1",null,"NightCat"),v.default.createElement("small",null,"- This is a nothing's website -")))}}]),t}(h.Component),b=function(e){return{store:e}},E=function(e){return{actions:(0,g.bindActionCreators)(_.default,e)}};t.default=(0,m.connect)(b,E)(y),y.propTypes={actions:h.PropTypes.any}}});