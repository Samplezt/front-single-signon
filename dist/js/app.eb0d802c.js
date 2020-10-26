(function(e){function t(t){for(var n,s,i=t[0],u=t[1],l=t[2],p=0,f=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);c&&c(t);while(f.length)f.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,i=1;i<r.length;i++){var u=r[i];0!==a[u]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},o=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var c=u;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("85ec"),a=r.n(n);a.a},3677:function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=r("8c4f"),o=r("5f5b"),s=r("b1e0"),i=(r("f9e3"),r("2dd8"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)}),u=[],l={},c=l,p=(r("034f"),r("2877")),f=Object(p["a"])(c,i,u,!1,null,null,null),d=f.exports,m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login"},[r("h1",{staticClass:"title"},[r("b-icon",{attrs:{icon:"cursor-fill","shift-h":"-7","shift-v":"12"}}),e._v(" Login "+e._s(e.tenantTitle))],1),r("form",{staticClass:"form",attrs:{action:"https://ssoia.herokuapp.com/LoginCallback",method:"post"}},[r("label",{staticClass:"form-label",attrs:{for:"#username"}},[r("b-icon",{attrs:{icon:"person-fill","shift-h":"-5"}}),e._v("Usuario")],1),r("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"form-input",attrs:{type:"text",name:"usuario",id:"username",required:"",placeholder:"Usuario"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),r("label",{staticClass:"form-label",attrs:{for:"#password"}},[r("b-icon",{attrs:{icon:"lock-fill","shift-h":"-5"}}),e._v("Contraseña")],1),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-input",attrs:{name:"password",type:"password",id:"password",required:"",placeholder:"Contraseña"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),r("div",{staticClass:"selector"},[r("input",{staticClass:"form-control",attrs:{type:"hidden",name:"tenant"},domProps:{value:e.$route.query.tenant||e.$route.query.TENANT}})]),e.error?r("p",{staticClass:"error"},[r("b",[e._v("Has introducido mal el email o la contraseña.")])]):e._e(),r("input",{staticClass:"form-submit",attrs:{type:"submit",value:"Login"}})])])},v=[],h={data:function(){return{username:"",password:"",error:!1,tenantTitle:""}},mounted:function(){this.$nextTick((function(){switch(this.$route.query.ERROR&&(this.error=!0),this.$route.query.tenant||this.$route.query.TENANT){case"Reclamos":this.tenantTitle="Reclamos";break;case"VentaPasajes":this.tenantTitle="Venta de Pasajes";break;case"ManejoItinerarios":this.tenantTitle="Manejo de Itinerarios";break;case"AlquileresAutos":this.tenantTitle="Alquileres de Autos";break;default:this.tenantTitle=""}}))}},b=h,y=(r("d24e"),Object(p["a"])(b,m,v,!1,null,"72defc4a",null)),w=y.exports,g=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"center-block"},[r("div",{staticClass:"error-block"},[r("p",[r("b",[e._v(e._s(e.parseError(e.$route.query.ERROR))+", intente nuevamente")])]),r("li",[r("router-link",{attrs:{to:"/"}},[r("b-button",{staticClass:"mb-2 error-color",attrs:{variant:"outline-info"}},[r("b-icon",{attrs:{icon:"power","aria-hidden":"true"}}),e._v(" Login ")],1)],1)],1)])])])])},_=[],C=(r("ac1f"),r("5319"),{methods:{parseError:function(e){return e=e.replace(/['"]+/g,""),e=e.replace("{DESC:",""),e=e.replace("}",""),e}}}),j=C,O=(r("70d6"),Object(p["a"])(j,g,_,!1,null,"5ed99958",null)),T=O.exports;n["default"].use(a["a"]),n["default"].use(o["a"]),n["default"].use(s["a"]);var k=[{path:"/",component:w},{path:"/LoginError*",component:T}],x=new a["a"]({mode:"history",routes:k});n["default"].config.productionTip=!1,new n["default"]({router:x,render:function(e){return e(d)}}).$mount("#app")},"5a40":function(e,t,r){},"70d6":function(e,t,r){"use strict";var n=r("5a40"),a=r.n(n);a.a},"85ec":function(e,t,r){},d24e:function(e,t,r){"use strict";var n=r("3677"),a=r.n(n);a.a}});
//# sourceMappingURL=app.eb0d802c.js.map