(function(t){function a(a){for(var s,o,n=a[0],l=a[1],c=a[2],p=0,m=[];p<n.length;p++)o=n[p],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&m.push(i[o][0]),i[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);v&&v(a);while(m.length)m.shift()();return r.push.apply(r,c||[]),e()}function e(){for(var t,a=0;a<r.length;a++){for(var e=r[a],s=!0,n=1;n<e.length;n++){var l=e[n];0!==i[l]&&(s=!1)}s&&(r.splice(a--,1),t=o(o.s=e[0]))}return t}var s={},i={app:0},r=[];function o(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=s,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)o.d(e,s,function(a){return t[a]}.bind(null,s));return e},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=a,n=n.slice();for(var c=0;c<n.length;c++)a(n[c]);var v=l;r.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"0e70":function(t,a){t.exports="data:image/png;base64,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"},"199c":function(t,a){},"23be":function(t,a,e){"use strict";var s=e("199c"),i=e.n(s);a["default"]=i.a},"27df":function(t,a,e){t.exports=e.p+"img/EmailIcon.0c08537f.svg"},"292b":function(t,a,e){t.exports=e.p+"img/6.bce641c1.png"},"2b8c":function(t,a,e){t.exports=e.p+"img/BackgroundParallax.f5558d97.png"},"3dfd":function(t,a,e){"use strict";var s=e("ec19"),i=e("23be"),r=e("2877"),o=e("6544"),n=e.n(o),l=e("7496"),c=e("f6c4"),v=Object(r["a"])(i["default"],s["a"],s["b"],!1,null,null,null);a["default"]=v.exports,n()(v,{VApp:l["a"],VMain:c["a"]})},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),i=e("3dfd"),r=e("f309");s["a"].use(r["a"]);var o=new r["a"]({theme:{themes:{light:{cadet:"#5E7782",mint_cream:"#F0F7EE",dark_space:"#202531",accent:"#1B998B",space_cadet:"#2D3047",fire:"#FF7033",primary:"#202531"},dark:{cadet:"#5E7782",mint_cream:"#F0F7EE",dark_space:"#202531",accent:"#1B998B",space_cadet:"#2D3047",fire:"#FF7033",primary:"#F0F7EE"}}}}),n=(e("ce7a"),e("8c4f")),l=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"home"},[s("header",[s("NavBar")],1),s("v-container",{staticClass:"my-5"},[s("v-row",{staticClass:"ma-5 pt-16"},[s("v-col",{attrs:{cols:"12"}},[s("h1",{staticClass:"hero_font pt-16"},[t._v("Johan Martinson")]),s("h3",{staticClass:"sub_header"},[t._v(" Project Manager | Developer ")])])],1),s("v-row",{staticClass:"mb-16 pb-16",attrs:{"align-content":"start",align:"baseline"}},[s("v-col",{attrs:{cols:"12",sm:"3","align-self":"center"}},[s("v-row",{attrs:{"no-gutters":""}},[s("v-col",{staticClass:"pa-0 ma-0",attrs:{"align-self":"center"}},[s("a",{staticClass:"pa-0 ma-0",attrs:{href:"mailto:johan.t.martinson@gmail.com"}},[s("v-img",{staticClass:"pa-0 ma-0",attrs:{height:"60",contain:"",src:e("27df"),alt:"Email"}})],1)]),s("v-col",{attrs:{"align-self":"center"}},[s("a",{staticClass:"pa-0 ma-0",staticStyle:{color:"#202531"},attrs:{href:"mailto:johan.t.martinson@gmail.com"}},[t._v("Email")])])],1)],1),s("v-col",{attrs:{cols:"12",sm:"3","align-self":"center"}},[s("v-row",{attrs:{"no-gutters":""}},[s("v-col",{staticClass:"pa-0 ma-0",attrs:{"align-self":"center"}},[s("a",{staticClass:"pa-0 ma-0",attrs:{href:"https://github.com/johmara/"}},[s("v-img",{staticClass:"pa-0 ma-0",attrs:{height:"60",contain:"",src:e("d919"),alt:"Github"}})],1)]),s("v-col",{attrs:{"align-self":"center"}},[s("a",{staticClass:"pa-0 ma-0",staticStyle:{color:"#202531"},attrs:{href:"https://github.com/johmara/"}},[t._v("Github")])])],1)],1),s("v-col",{attrs:{cols:"12",sm:"3","align-self":"center"}},[s("v-row",{attrs:{"no-gutters":""}},[s("v-col",{staticClass:"pa-0 ma-0",attrs:{"align-self":"center"}},[s("a",{staticClass:"pa-0 ma-0",attrs:{href:"https://www.linkedin.com/in/johanmartinson/"}},[s("v-img",{staticClass:"pa-0 ma-0",attrs:{height:"60",contain:"",src:e("90cd"),alt:"linkedin"}})],1)]),s("v-col",{attrs:{"align-self":"center"}},[s("a",{staticClass:"pa-0 ma-0",staticStyle:{color:"#202531"},attrs:{href:"https://www.linkedin.com/in/johanmartinson/"}},[t._v("LinkedIn")])])],1)],1)],1)],1)],1)},c=[],v=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("nav",[s("v-container",[s("v-app-bar",{staticClass:"pa-5",attrs:{flat:"",extended:"",color:"transparent"}},[s("v-app-bar-nav-icon"),s("v-toolbar-title",[this.$vuetify.breakpoint.xsOnly?s("div",[s("img",{staticClass:"logo",attrs:{src:e("e17f"),alt:"Johan Martinson"},on:{click:function(a){t.mobile=!t.mobile}}})]):s("div",[s("router-link",{attrs:{to:"/"}},[s("img",{staticClass:"logo",attrs:{src:e("e17f"),alt:"Johan Martinson"}})])],1)]),s("v-spacer"),t.$vuetify.breakpoint.smAndUp?s("v-toolbar-items",[s("div",{staticClass:"links"},[s("router-link",{attrs:{to:{name:"About"}}},[t._v(" About ")]),s("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(a){var e=a.on,i=a.attrs;return[s("a",t._g(t._b({},"a",i,!1),e),[t._v("Projects")])]}}],null,!1,1512678873)},[s("v-list",[s("router-link",{attrs:{to:{name:"LockAR"}}},[s("v-list-item",[s("v-list-item-title",[t._v("LockAR")])],1)],1)],1)],1)],1)]):t._e()],1)],1),s("v-navigation-drawer",{attrs:{app:"",temporary:"",bottom:""},model:{value:t.mobile,callback:function(a){t.mobile=a},expression:"mobile"}},[s("div",{staticClass:"links"},[s("v-list",{attrs:{dense:""}},[s("v-list-item",[s("router-link",{attrs:{to:"/"}},[s("v-list-item-avatar",[s("v-img",{attrs:{src:e("7286")}})],1),s("v-list-item-content",[s("v-list-item-title",[t._v("johmara.dev")])],1)],1)],1),s("v-divider"),s("v-list-item",[s("router-link",{attrs:{to:{name:"About"}}},[t._v("About")])],1),s("v-list-item",[s("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(a){var e=a.on,i=a.attrs;return[s("p",t._g(t._b({},"p",i,!1),e),[t._v("Projects")])]}}])},[s("v-list",[s("router-link",{attrs:{to:{name:"LockAR"}}},[s("v-list-item",[s("v-list-item-title",[t._v("LockAR")])],1)],1)],1)],1)],1)],1)],1)])],1)},p=[],m={name:"NavBar",data:function(){return{mobile:!1}}},u=m,f=e("2877"),d=e("6544"),h=e.n(d),g=e("40dc"),A=e("5bc1"),C=e("a523"),w=e("ce7e"),y=e("adda"),b=e("8860"),k=e("da13"),V=e("8270"),x=e("5d23"),j=e("e449"),E=e("f774"),S=e("2fa4"),R=e("2a7f"),_=Object(f["a"])(u,v,p,!1,null,null,null),L=_.exports;h()(_,{VAppBar:g["a"],VAppBarNavIcon:A["a"],VContainer:C["a"],VDivider:w["a"],VImg:y["a"],VList:b["a"],VListItem:k["a"],VListItemAvatar:V["a"],VListItemContent:x["a"],VListItemTitle:x["b"],VMenu:j["a"],VNavigationDrawer:E["a"],VSpacer:S["a"],VToolbarItems:R["a"],VToolbarTitle:R["b"]});var B={name:"Home",components:{NavBar:L},data:function(){return{}}},N=B,P=(e("cccb"),e("62ad")),I=e("0fd9"),T=Object(f["a"])(N,l,c,!1,null,null,null),H=T.exports;h()(T,{VCol:P["a"],VContainer:C["a"],VImg:y["a"],VRow:I["a"]});var D=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"lockar"},[s("header",{staticClass:"lockar_header"},[s("Navbar")],1),s("v-parallax",{attrs:{src:e("2b8c"),height:"800"}},[s("v-container",{staticClass:"my-5"},[s("v-row",[s("v-col",{attrs:{"align-self":"center"}},[s("v-img",{attrs:{src:e("6d14"),"min-height":"70","max-height":"300",contain:"",center:""}})],1)],1),s("v-row",[s("v-col",{attrs:{cols:"12"}},[s("div",{staticClass:"introduction"},[s("h1",{staticClass:"display-2"},[t._v("LockAR")]),s("span",{staticClass:"subtitle-2"},[t._v("A smart phone app that provides virtual Augmented Reality keys for users to pinpoint and unlock connected doors.")])])])],1)],1)],1),s("v-container",[s("ProjectBrief")],1),s("v-container",[s("ProjectStructure")],1),s("v-container",[s("ProjectDefine")],1),s("v-container",[s("Eval1")],1)],1)},O=[],F=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",[e("h1",{staticClass:"text-right display-4"},[t._v("Project Brief")]),e("v-row",[e("v-col",{attrs:{cols:"12",md:"6"}},[e("v-skeleton-loader",{attrs:{type:"image"}})],1),e("v-col",{attrs:{cols:"12",md:"6"}},[e("p",{staticClass:"text-right"},[t._v(" Authentication has to do with proving one’s identity. Access has to do with permission to reach certain information, places, or a things. Even though the two are different concepts, in many applications they are closely related.")]),e("p",{staticClass:"text-right"},[t._v(' The theme is related to the Vetenskapsrådet-funded research project "Precious Keys," currently led by Mehmet Aydın Baytaş, Assoc. Prof. Ylva Fernaeus (KTH/Umeå), and PhD student Andreas Lindegren (KTH). Projects which might make contributions to the research may be invited to continue. Possibilities include thesis projects; for-credit project course; research internships at Chalmers, KTH, and Umeå; and industrial internships at our collaborators which include Assa Abloy, ManyOne, and Volvo Cars. ')])])],1)],1)},Q=[],X={name:"ProjectBrief"},G=X,J=e("3129"),K=Object(f["a"])(G,F,Q,!1,null,null,null),M=K.exports;h()(K,{VCol:P["a"],VContainer:C["a"],VRow:I["a"],VSkeletonLoader:J["a"]});var Y=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",[e("v-row",[e("v-col",{attrs:{cols:"6",md:"3"}},[e("v-chip",{staticClass:"text-center headline text-uppercase",attrs:{color:"accent"}},[t._v(" define ")]),e("v-timeline",{attrs:{dense:"",clipped:""}},[e("v-timeline-item",{attrs:{small:"",color:"dark_space","fill-dot":""}},[e("p",{staticClass:"title"},[t._v("Design Challenge")]),e("p",{staticClass:"font-weight-light"},[t._v("Authentication & access to physical entities")])]),e("v-timeline-item",{attrs:{small:"",color:"dark_space","fill-dot":""}},[e("p",{staticClass:"title"},[t._v(" Approach ")]),e("p",{staticClass:"font-weight-light"},[t._v("Research through Design")])]),e("v-timeline-item",{attrs:{small:"",color:"dark_space","fill-dot":""}},[e("p",{staticClass:"title"},[t._v("Research Questions")]),e("p",{staticClass:"font-weight-light"},[t._v("How can AR be used to authenticate access of a physical entity?")]),e("p",{staticClass:"font-weight-light"},[t._v("How can we balance the convinience of AR with the security of AR authentication? ")])])],1)],1),e("v-col",{attrs:{cols:"6",md:"3"}},[e("v-chip",{staticClass:"text-center headline",attrs:{color:"accent"}},[t._v(" EVALUATION 1 ")]),e("v-timeline",{attrs:{dense:"",clipped:""}},[e("v-timeline-item",{attrs:{small:"",color:"dark_space","fill-dot":""}},[e("p",{staticClass:"title"},[t._v("Prototyping")]),e("p",{staticClass:"font-weight-light"},[t._v("3 wireframes for different directions")])]),e("v-timeline-item",{attrs:{small:"",color:"dark_space","fill-dot":""}},[e("p",{staticClass:"title"},[t._v(" Observation ")]),e("p",{staticClass:"font-weight-light"},[t._v("Participants try the prototypes to fullfill certain tasks")]),e("p",{staticClass:"font-weight-light"},[t._v("Simple questions asked afterwards")])]),e("v-timeline-item",{attrs:{small:"",color:"dark_space","fill-dot":""}},[e("p",{staticClass:"title"},[t._v("Conclusion")]),e("p",{staticClass:"font-weight-light"},[t._v("AR does well to help people navigate new places, like a new school building or a hotel for example")])])],1)],1),e("v-col",{attrs:{cols:"6",md:"3"}},[e("v-chip",{staticClass:"text-center headline",attrs:{color:"accent"}},[t._v(" EVALUATION 2 ")]),e("v-timeline",{attrs:{dense:"",clipped:""}},[e("v-timeline-item",{attrs:{small:"",color:"dark_space","fill-dot":""}},[e("p",{staticClass:"title"},[t._v("Prototyping")]),e("p",{staticClass:"font-weight-light"},[t._v("2 wireframes for different contexts")])]),e("v-timeline-item",{attrs:{small:"",color:"dark_space","fill-dot":""}},[e("p",{staticClass:"title"},[t._v(" Observation ")]),e("p",{staticClass:"font-weight-light"},[t._v("Participants try the prototypes to fullfill certain tasks")]),e("p",{staticClass:"font-weight-light"},[t._v("Simple questions asked afterwards")])]),e("v-timeline-item",{attrs:{small:"",color:"dark_space","fill-dot":""}},[e("p",{staticClass:"title"},[t._v("Conclusion")]),e("p",{staticClass:"font-weight-light"},[t._v("The security of AR Authentication might not be very convenient. Verification of the user still needs to be done in some way")])])],1)],1),e("v-col",{attrs:{cols:"6",md:"3"}},[e("v-chip",{staticClass:"text-center headline",attrs:{color:"accent"}},[t._v(" INTEGRATION ")]),e("v-timeline",{attrs:{dense:"",clipped:""}},[e("v-timeline-item",{attrs:{small:"",color:"dark_space","fill-dot":""}},[e("p",{staticClass:"title"},[t._v("Prototyping")]),e("p",{staticClass:"font-weight-light"},[t._v("Native prototypes")])]),e("v-timeline-item",{attrs:{small:"",color:"dark_space","fill-dot":""}},[e("p",{staticClass:"title"},[t._v(" Observation ")]),e("p",{staticClass:"font-weight-light"},[t._v("Participants try the prototypes to fullfill certain tasks")]),e("p",{staticClass:"font-weight-light"},[t._v("Simple questions asked afterwards")])]),e("v-timeline-item",{attrs:{small:"",color:"dark_space","fill-dot":""}},[e("p",{staticClass:"title"},[t._v("Conclusion")]),e("p",{staticClass:"font-weight-light"},[t._v("Not yet found")])])],1)],1)],1)],1)},W=[],Z={name:"ProjectStructure"},q=Z,U=e("cc20"),z=e("8414"),$=e("1e06"),tt=Object(f["a"])(q,Y,W,!1,null,null,null),at=tt.exports;h()(tt,{VChip:U["a"],VCol:P["a"],VContainer:C["a"],VRow:I["a"],VTimeline:z["a"],VTimelineItem:$["a"]});var et=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{attrs:{fluid:""}},[e("v-row",{attrs:{dense:""}},[e("v-col",{attrs:{cols:"12",md:"6"}},[e("v-card",{staticClass:"pa-6 ma-6",attrs:{elevation:"4"}},[e("h1",{staticClass:"display-3"},[t._v("Research Questions")]),e("div",{staticClass:"py-10 my-5"},[e("v-card-title",[t._v("How can AR be used to authenticate access of a physical entity?")]),e("v-card-title",[t._v("How can we balance the convinience of AR with the security of AR authentication?")])],1),e("v-row",{staticClass:"mt-2"},[e("v-col",{attrs:{cols:"4"}},[e("p",{staticClass:"text-right"},[t._v("Design Challenge: ")])]),e("v-col",{attrs:{cols:"8"}},[e("p",{staticClass:"font-weight-light"},[t._v("Authentication & access to physical entities")])])],1),e("v-row",[e("v-col",{attrs:{cols:"4"}},[e("p",{staticClass:"text-right"},[t._v("Approach:")])]),e("v-col",{attrs:{cols:"8"}},[e("p",{staticClass:"font-weight-light"},[t._v("Research through Design")])])],1)],1)],1),e("v-col",{attrs:{cols:"12",md:"6"}},[e("v-card",{staticClass:"pa-6 ma-6",attrs:{elevation:"4"}},[e("v-skeleton-loader",{attrs:{type:"card, card",loading:""}})],1)],1)],1)],1)},st=[],it={name:"ProjectDefine"},rt=it,ot=e("b0af"),nt=e("99d9"),lt=Object(f["a"])(rt,et,st,!1,null,null,null),ct=lt.exports;h()(lt,{VCard:ot["a"],VCardTitle:nt["a"],VCol:P["a"],VContainer:C["a"],VRow:I["a"],VSkeletonLoader:J["a"]});var vt=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("v-container",[s("h1",{staticClass:"display-3 text-center"},[t._v("Evaluation 1")]),s("v-row",[s("v-col",{attrs:{cols:"12",md:"6"}},[s("v-card",{staticClass:"pa-6 my-10",attrs:{flat:""}},[s("v-card-title",{staticClass:"headline"},[t._v("Observation")]),s("p",{staticClass:"pt-4"},[t._v("Participants try the prototypes to fullfill certain tasks.")]),s("p",{staticClass:"pt-4"},[t._v(" Simple questions asked afterwards ")]),s("div",{staticClass:"py-5 my-5"},[s("v-row",[s("v-col",{attrs:{cols:"4"}},[s("p",{staticClass:"text-right"},[t._v("Participants:")])]),s("v-col",{attrs:{cols:"8"}},[s("p",{staticClass:"font-weight-light"},[t._v("5 participants age from 18-57")])])],1)],1)],1)],1),s("v-col",{attrs:{cols:"12",md:"6"}},[s("v-carousel",{attrs:{"hide-delimiters":"",cycle:"",progress:"","progress-color":"accent",touch:"","show-arrows-on-hover":"","next-icon":">","prev-icon":"<"}},t._l(t.items,(function(t,a){return s("v-carousel-item",{key:a,attrs:{contain:"",src:t.src}})})),1)],1)],1),s("v-card",{staticClass:"pa-4",attrs:{flat:""}},[s("v-row",[t._l(t.items,(function(a,e){return s("v-col",{key:e,attrs:{cols:"4",md:"2"}},[s("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var i=e.hover;return[s("v-card",{class:{"on-hover":i},attrs:{flat:"",elevation:i?12:0}},[s("v-dialog",{attrs:{width:"400"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,r=e.attrs;return[s("v-img",t._g(t._b({attrs:{contain:"",src:a.src}},"v-img",r,!1),i))]}}],null,!0),model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[s("v-card",{attrs:{dark:"",rounded:"xl"}},[s("v-img",{attrs:{contain:"",src:a.src}})],1)],1)],1)]}}],null,!0)})],1)})),s("p",{staticClass:"caption"},[t._v("Wireframe prototype for Evaluation 1")])],2)],1),s("v-row",[s("v-col",{attrs:{cols:"12",md:"6"}},[s("h4",{staticClass:"headline text-center"},[t._v("Strength:")]),s("v-row",[s("v-col",{attrs:{cols:"3",offset:"1","align-self":"top"}},[s("v-img",{attrs:{height:"70",contain:"",src:e("0e70")}})],1),s("v-col",{attrs:{cols:"8","align-self":"center"}},[s("v-list",{attrs:{flat:""}},[s("v-list-item",[s("p",{staticClass:"body-1"},[t._v("The workflow is intuitive")])]),s("v-list-item",[s("p",{staticClass:"body-1"},[t._v("Easy to find the door")])])],1)],1)],1)],1),s("v-col",{attrs:{cols:"12",md:"6"}},[s("h4",{staticClass:"headline text-center"},[t._v("Weakness:")]),s("v-row",[s("v-col",{attrs:{cols:"3",offset:"1","align-self":"top"}},[s("v-img",{attrs:{height:"70",contain:"",src:e("fda7")}})],1),s("v-col",{attrs:{cols:"8","align-self":"center"}},[s("v-list",{attrs:{flat:""}},[s("v-list-item",[s("p",{staticClass:"body-1"},[t._v("Function about adding new doors not covered")])]),s("v-list-item",[s("p",{staticClass:"body-1"},[t._v("Hard to get the feeling of using a camera since it’s only drawing ")])]),s("v-list-item",[s("p",{staticClass:"body-1"},[t._v("Similar to a normal map ")])])],1)],1)],1)],1)],1)],1)},pt=[],mt={name:"Evaluation1",data:function(){return{dialog:!1,items:[{src:e("bcaf")},{src:e("efcd")},{src:e("f9cb")},{src:e("6ff0")},{src:e("e8b4")},{src:e("292b")}]}}},ut=mt,ft=e("5e66"),dt=e("3e35"),ht=e("169a"),gt=e("ce87"),At=Object(f["a"])(ut,vt,pt,!1,null,null,null),Ct=At.exports;h()(At,{VCard:ot["a"],VCardTitle:nt["a"],VCarousel:ft["a"],VCarouselItem:dt["a"],VCol:P["a"],VContainer:C["a"],VDialog:ht["a"],VHover:gt["a"],VImg:y["a"],VList:b["a"],VListItem:k["a"],VRow:I["a"]});var wt={name:"LockAR",components:{Navbar:L,ProjectBrief:M,ProjectStructure:at,ProjectDefine:ct,Eval1:Ct},data:function(){return{}}},yt=wt,bt=(e("6081"),e("8b9c")),kt=Object(f["a"])(yt,D,O,!1,null,null,null),Vt=kt.exports;h()(kt,{VCol:P["a"],VContainer:C["a"],VImg:y["a"],VParallax:bt["a"],VRow:I["a"]});var xt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"about"},[e("header",[e("NavBar")],1)])},jt=[],Et={name:"About",components:{NavBar:L},data:function(){return{}}},St=Et,Rt=Object(f["a"])(St,xt,jt,!1,null,null,null),_t=Rt.exports;s["a"].use(n["a"]);var Lt=new n["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:H},{path:"/lockar",name:"LockAR",component:Vt},{path:"/about",name:"About",component:_t},{path:"/projects",name:"Projects",component:_t}]});s["a"].config.productionTip=!1,new s["a"]({vuetify:o,router:Lt,render:function(t){return t(i["default"])}}).$mount("#app")},"5ced":function(t,a,e){},6081:function(t,a,e){"use strict";var s=e("ed64"),i=e.n(s);i.a},"6d14":function(t,a,e){t.exports=e.p+"img/lockar.5bc2cc95.svg"},"6ff0":function(t,a,e){t.exports=e.p+"img/4.c1cb6143.png"},7286:function(t,a,e){t.exports=e.p+"img/Profile.27b4a629.png"},"90cd":function(t,a,e){t.exports=e.p+"img/LinkedInIcon.3265737e.svg"},bcaf:function(t,a,e){t.exports=e.p+"img/1.60905508.png"},cccb:function(t,a,e){"use strict";var s=e("5ced"),i=e.n(s);i.a},ce7a:function(t,a,e){},d919:function(t,a,e){t.exports=e.p+"img/GithubIcon.05f287a3.svg"},e17f:function(t,a,e){t.exports=e.p+"img/johmara.f2ab4738.svg"},e8b4:function(t,a,e){t.exports=e.p+"img/5.e7acad32.png"},ec19:function(t,a,e){"use strict";e.d(a,"a",(function(){return s})),e.d(a,"b",(function(){return i}));var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",[e("v-main",[e("router-view")],1)],1)},i=[]},ed64:function(t,a,e){},efcd:function(t,a,e){t.exports=e.p+"img/2.11ae433a.png"},f9cb:function(t,a,e){t.exports=e.p+"img/3.51608476.png"},fda7:function(t,a){t.exports="data:image/png;base64,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"}});
//# sourceMappingURL=app.e22d0a60.js.map