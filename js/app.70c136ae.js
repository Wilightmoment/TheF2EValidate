(function(t){function e(e){for(var a,n,l=e[0],o=e[1],c=e[2],f=0,d=[];f<l.length;f++)n=l[f],i[n]&&d.push(i[n][0]),i[n]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,c||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],a=!0,l=1;l<s.length;l++){var o=s[l];0!==i[o]&&(a=!1)}a&&(r.splice(e--,1),t=n(n.s=s[0]))}return t}var a={},i={app:0},r=[];function n(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=a,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(s,a,function(e){return t[e]}.bind(null,a));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/TheF2EValidate/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=o;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0463":function(t,e,s){},2856:function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("097d");var a=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},r=[],n=(s("5c0b"),s("2877")),l={},o=Object(n["a"])(l,i,r,!1,null,null,null);o.options.__file="App.vue";var c=o.exports,u=s("8c4f"),f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("Validation")],1)},d=[],m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"process-item my-5"},[t.CA.finish||t.CA.ing?t._e():s("i",{staticClass:"far fa-circle"}),!t.CA.finish&&t.CA.ing?s("i",{staticClass:"fas fa-dot-circle"}):t._e(),t.CA.finish&&!t.CA.ing?s("i",{staticClass:"fas fa-check-circle"}):t._e(),s("div",{staticClass:"process-item-line line-1"}),t.GI.finish||t.GI.ing?t._e():s("i",{staticClass:"far fa-circle"}),!t.GI.finish&&t.GI.ing?s("i",{staticClass:"fas fa-dot-circle"}):t._e(),t.GI.finish&&!t.GI.ing?s("i",{staticClass:"fas fa-check-circle"}):t._e(),s("div",{staticClass:"process-item-line line-2"}),t.UPP.finish||t.UPP.ing?t._e():s("i",{staticClass:"far fa-circle"}),!t.UPP.finish&&t.UPP.ing?s("i",{staticClass:"fas fa-dot-circle"}):t._e(),t.UPP.finish&&!t.UPP.ing?s("i",{staticClass:"fas fa-check-circle"}):t._e()]),s("div",{staticClass:"wrap my-5"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-8 offset-2"},[t.CA.ing?s("section",{staticClass:"CA"},[s("h1",{staticClass:"text-center"},[t._v("Create Account")]),s("p",{staticClass:"subtitle text-center"},[t._v("Glad to see you here!")]),s("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"CAEmail"}},[t._v("Account")]),s("div",{staticClass:"input-group"},[s("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"form-control",class:{invalid:t.errors.has("email")},attrs:{type:"email",id:"CAEmail",name:"email","aria-describedby":"emailHelp",placeholder:"example@email.com"}}),t.errors.has("email")?s("i",{staticClass:"fas fa-exclamation-triangle"}):t._e()]),t.errors.has("email")?s("small",{staticClass:"form-text text-danger",attrs:{id:"emailHelp"}},[t._v(t._s(t.errors.first("email")))]):t._e()]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"CAPassword"}},[t._v("Password")]),s("div",{staticClass:"input-group"},[s("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:8",expression:"'required|min:8'"}],ref:"pw_confirm",staticClass:"form-control",class:{invalid:t.errors.has("pw_confirm")},attrs:{type:"password",name:"pw_confirm",id:"CAPassword",placeholder:"●●●●●●●●"}}),t.errors.has("pw_confirm")?s("i",{staticClass:"fas fa-exclamation-triangle"}):t._e()]),t.errors.has("pw_confirm")?s("small",{staticClass:"form-text text-danger"},[t._v(t._s(t.errors.first("pw_confirm")))]):t._e()]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"CACP"}},[t._v("Comfirm Password")]),s("div",{staticClass:"input-group"},[s("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|confirmed:pw_confirm",expression:"'required|confirmed:pw_confirm'"}],staticClass:"form-control",class:{invalid:t.errors.has("confirm_passward")},attrs:{type:"password",name:"confirm_passward",id:"CACP",placeholder:"●●●●●●●●"}}),t.errors.has("confirm_passward")?s("i",{staticClass:"fas fa-exclamation-triangle"}):t._e()]),t.errors.has("confirm_passward")?s("small",{staticClass:"form-text text-danger"},[t._v(t._s(t.errors.first("confirm_passward")))]):t._e()]),s("button",{staticClass:"btn btn-custom my-5",class:{"btn-custom-fail":t.errors.has("email")||t.errors.first("confirm_passward")},attrs:{type:"submit"}},[t._v("SUBMIT & NEXT")])])]):t._e(),t.GI.ing?s("section",{staticClass:"GI"},[s("h1",{staticClass:"text-center"},[t._v("General Infomation")]),s("p",{staticClass:"subtitle text-center"},[t._v("Tell us who you are!")]),s("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit2(e)}}},[s("div",{staticClass:"form-row"},[t._m(0),s("div",{staticClass:"form-group col-md-6"},[s("label",{attrs:{for:"phone"}},[t._v("Phone*")]),s("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|numeric",expression:"'required|numeric'"}],staticClass:"form-control",class:{invalid:t.errors.has("phone")},attrs:{id:"phone",type:"number",name:"phone",placeholder:"0912 345 678"}}),t.errors.has("phone")?s("small",{staticClass:"form-text text-danger"},[t._v(t._s(t.errors.first("phone")))]):t._e()])]),t._m(1),s("label",{staticClass:"mt-3",attrs:{for:"city"}},[t._v("Address*")]),s("div",{staticClass:"form-row"},[s("div",{staticClass:"form-group col-md-6"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.city,expression:"city"}],staticClass:"form-control",attrs:{id:"city",required:""},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.city=e.target.multiple?s:s[0]}}},[s("option",{attrs:{value:"City",selected:"",disabled:""}},[t._v("City")]),t._l(t.cities,function(e,a){return s("option",{key:a,domProps:{value:e.name}},[t._v(t._s(e.name))])})],2)]),s("div",{staticClass:"form-group col-md-6"},[s("select",{staticClass:"form-control",attrs:{id:"dist",required:""}},[s("option",{attrs:{value:"Dist",selected:"",disabled:""}},[t._v("Dist")]),t._l(t.country,function(e,a){return s("option",{key:a,domProps:{value:e}},[t._v(t._s(e))])})],2)]),s("div",{staticClass:"col-12"},[s("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{invalid:t.errors.has("address")},attrs:{type:"text",name:"address",placeholder:"Address Detail"}}),t.errors.has("address")?s("small",{staticClass:"form-text text-danger"},[t._v("請填寫地址")]):t._e()])]),s("button",{staticClass:"btn btn-custom my-5",class:{"btn-custom-fail":t.errors.has("phone")||t.errors.first("address")},attrs:{type:"submit"}},[t._v("SUBMIT & NEXT")])])]):t._e(),t.UPP.ing?s("section",{staticClass:"UPP"},[s("h1",{staticClass:"text-center"},[t._v("Update Profile Picture")]),s("p",{staticClass:"subtitle text-center"},[t._v("We wanna know you more!")]),s("div",{staticClass:"form-upload"},[s("i",{staticClass:"fas fa-images fa-3x mr-3"}),t._m(2),s("input",{attrs:{type:"file"},on:{change:t.fileSelected}})]),t.errImgMes?s("div",{staticClass:"alert alert-warning my-3",attrs:{role:"alert"}},[t._v("\n              "+t._s(t.errImgMes)+"\n            ")]):t._e(),s("div",{staticClass:"upload-images container"},[s("div",{staticClass:"row"},t._l(3,function(e,a){return t.imgUlr[a]?s("div",{key:a,staticClass:"col-md-4 px-0 my-4 upload-img"},[s("div",{staticClass:"card h-100 mx-2"},[s("img",{staticClass:"card-img h-100",attrs:{src:t.imgUlr[a]}}),s("div",{staticClass:"img-del",on:{click:function(e){t.imgUlr.splice(a,1)}}},[s("i",{staticClass:"fas fa-trash-alt fa-2x"})])])]):t._e()}))]),s("button",{staticClass:"btn btn-custom my-5",attrs:{type:"submit"},on:{click:function(e){t.UPP.finish=!0,t.UPP.ing=!1}}},[t._v("SUBMIT & NEXT")])]):t._e(),t.UPP.finish?s("section",{staticClass:"congratulation text-center"},[s("h1",[t._v("Congrats!")]),s("p",{staticClass:"subtitle"},[t._v("Now you’re one of us! ")]),s("i",{staticClass:"fas fa-smile fa-10x mt-2",staticStyle:{color:"#BEE1FF"}})]):t._e()])])])])])},p=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"form-group col-md-6"},[s("label",{attrs:{for:"name"}},[t._v("Name\n                    "),s("small",[t._v("(optional)")])]),s("input",{staticClass:"form-control",attrs:{id:"name",type:"text",placeholder:"Example Name"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"form-row"},[s("div",{staticClass:"col-12"},[s("label",{attrs:{for:"Bdate"}},[t._v("Birth Date\n                    "),s("small",[t._v("(optional)")])]),s("input",{staticClass:"form-control",attrs:{id:"Bdate",type:"date"}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"form-upload-info  d-inline-block"},[s("div",{staticClass:"upload-info-title"},[t._v("UPLOAD UP TO 3 PHOTOS")]),s("div",{staticClass:"upload-info-subtitle"},[s("small",[t._v("MAXIMUM SIZE: 150*150px")])])])}],v=(s("7f7f"),s("4917"),{name:"Validation",data:function(){return{CA:{finish:!1,ing:!0},GI:{finish:!1,ing:!1},UPP:{finish:!1,ing:!1},cities:[{name:"台北市",children:["中正區","大同區"]},{name:"新北市",children:["板橋區","中和區"]}],city:"",imgUlr:[],errImgMes:""}},methods:{onSubmit:function(){var t=this;this.$validator.validate().then(function(e){e&&(t.CA.finish=!0,t.CA.ing=!1,t.GI.ing=!0,document.getElementsByClassName("line-1")[0].setAttribute("class","process-item-line-finish"))})},onSubmit2:function(){var t=this;this.$validator.validate().then(function(e){e&&(t.GI.finish=!0,t.GI.ing=!1,t.UPP.ing=!0,document.getElementsByClassName("line-2")[0].setAttribute("class","process-item-line-finish"))})},fileSelected:function(t){if(3===this.imgUlr.length)this.errImgMes="Max 3 photos";else{var e=t.target.files.item(0);if(!e.type.match(/jpeg|png/))return this.errImgMes="Only jpeg & png",!1;if(e.size/1024>800)return this.errImgMes="File size over 800kb",!1;var s=new FileReader;s.addEventListener("load",this.imageLoaded),s.readAsDataURL(e),this.errImgMes=""}},imageLoaded:function(t){this.imgUlr.push(t.target.result)}},computed:{country:function(){var t=this,e=t.city,s=t.cities.filter(function(t){return t.name===e});return!!s[0]&&s[0].children}}}),h=v,_=(s("bdc1"),Object(n["a"])(h,m,p,!1,null,"36cf7d22",null));_.options.__file="Validation.vue";var C=_.exports,g={name:"home",components:{Validation:C}},b=g,y=Object(n["a"])(b,f,d,!1,null,null,null);y.options.__file="Home.vue";var w=y.exports;a["a"].use(u["a"]);var x=new u["a"]({routes:[{path:"/",name:"home",component:w}]}),P=s("7bb1"),A=s("427f"),U=s.n(A);a["a"].use(P["a"]),P["a"].Validator.localize("zh_TW",U.a),a["a"].config.productionTip=!1,new a["a"]({router:x,render:function(t){return t(c)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";var a=s("2856"),i=s.n(a);i.a},bdc1:function(t,e,s){"use strict";var a=s("0463"),i=s.n(a);i.a}});
//# sourceMappingURL=app.70c136ae.js.map