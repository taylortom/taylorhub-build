(this["webpackJsonptaylorhub-ui"]=this["webpackJsonptaylorhub-ui"]||[]).push([[0],[,,,,,,,,,,,function(e,t,a){},,,function(e,t,a){e.exports=a.p+"static/media/recycling.be6e8654.svg"},function(e,t,a){e.exports=a.p+"static/media/trash.b5a3e61f.svg"},function(e,t,a){e.exports=a.p+"static/media/050-hamburguer.7125fb4a.svg"},function(e,t,a){e.exports=a.p+"static/media/147-carrot.c72327d6.svg"},function(e,t,a){e.exports=a.p+"static/media/082-turkey.0a769d09.svg"},function(e,t,a){e.exports=a.p+"static/media/127-rice.c412873d.svg"},function(e,t,a){e.exports=a.p+"static/media/081-food.e5b80f32.svg"},function(e,t,a){e.exports=a.p+"static/media/135-fish.3a42a18c.svg"},function(e,t,a){e.exports=a.p+"static/media/145-potatoes.749f958b.svg"},function(e,t,a){e.exports=a.p+"static/media/203-spaguetti.ba10dad3.svg"},function(e,t,a){e.exports=a.p+"static/media/104-pizza.70fcaefb.svg"},function(e,t,a){e.exports=a.p+"static/media/108-sausage.4f52699c.svg"},function(e,t,a){e.exports=a.p+"static/media/086-steak.2bd676c6.svg"},function(e,t,a){e.exports=a.p+"static/media/101-kebab.32c317f6.svg"},,function(e,t,a){e.exports=a(49)},,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(12),c=a.n(s),i=(a(34),a(9)),u=a(28),o=a(2),l=a(5),m=a(4),f=a(3),p=a(7),d=a.n(p),v=(a(36),a(1)),h=a.n(v),b=a(6),y=a(13),g=a.n(y),E=(a(38),function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(e){var n,r=e.config,s=e.layoutConfig;return Object(o.a)(this,a),(n=t.call(this)).config=r,n.layoutConfig=s,n.interval=null,n.state={autoUpdate:!0,updateInterval:n.config.updateInterval},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.updateData()}},{key:"updateData",value:function(){var e=Object(b.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=this,e.next=3,this.getUpdateData();case 3:e.t1=e.sent,e.t0.setState.call(e.t0,e.t1),!this.interval&&this.state.autoUpdate&&(console.log(this.state.updateInterval),this.interval=setInterval(this.updateData.bind(this),this.state.updateInterval));case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getUpdateData",value:function(){var e=Object(b.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"fetchJson",value:function(){var e=Object(b.a)(h.a.mark((function e(t){var a,n,r,s=arguments;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s.length>1&&void 0!==s[1]?s[1]:0,e.next=3,g()(t);case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,console.log(n,r),e.abrupt("return",a>0?r.slice(0,a):r);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.title,t=this.state.name;return r.a.createElement("div",{className:"Widget ".concat(t)},r.a.createElement("header",{className:"Widget-header"},e?r.a.createElement("h1",null,e):""),r.a.createElement("div",{className:"Widget-inner"},this.renderInner()))}},{key:"renderInner",value:function(){}}]),a}(r.a.Component)),j=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={autoUpdate:!1},e}return a}(E),O=a(14),N=a.n(O),w=a(15),k=a.n(w),x=(a(39),function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"getUpdateData",value:function(){var e=Object(b.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchJson("/api/binday");case 2:return e.t0=e.sent,e.abrupt("return",{name:"binday",title:"Bin",isRecycling:e.t0});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"renderInner",value:function(){var e=r.a.createElement("img",{src:this.state.isRecycling?N.a:k.a,alt:"bin icon"}),t=this.state.isRecycling?"Recycling":"Household Waste";return[r.a.createElement("div",{className:"label"},t),r.a.createElement("div",{className:"icon"},e)]}}]),a}(E));a(40);function I(e){var t=e.summary,a=e.start,n=e.end,s=d()(a.dateTime||a.date),c=d()(n.dateTime||n.date);return r.a.createElement("div",{className:"Event"},r.a.createElement("div",{className:"date"},r.a.createElement("span",{className:"month"},s.format("D"),"/",s.format("M")),r.a.createElement("span",{className:"day"},s.format("ddd"))),r.a.createElement("div",{className:"info"},r.a.createElement("span",{className:"time"},function(e,t){var a=d.a.duration(t.diff(e));if(a.asHours()>24)return"For ".concat(a.asDays()," days");if(24===a.asHours())return"All day";var n=e.format(0===e.minute()?"ha":"h:mma"),r=t.format(0===t.minute()?"ha":"h:mma");return"".concat(n," - ").concat(r)}(s,c)),r.a.createElement("span",{className:"title"},t)))}var D=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"getUpdateData",value:function(){var e=Object(b.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchJson("/api/events",this.layoutConfig.maxListItems);case 2:return e.t0=e.sent,e.abrupt("return",{name:"events",title:"Upcoming events",events:e.t0});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"renderInner",value:function(){if(this.state.events)return r.a.createElement("div",{className:"Events-events"},this.state.events.map((function(e){return r.a.createElement(I,e)})))}}]),a}(E);a(41);function L(e){var t=e.awayTeam,a=e.date,n=e.homeTeam,s=e.score,c=e.venue,i=new Date(a);return r.a.createElement("div",{className:"Fixture"},r.a.createElement("div",{className:"teams"},r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"logo"},r.a.createElement("img",{src:n.logo,alt:"Home team logo"})),r.a.createElement("div",{className:"name"},n.name)),r.a.createElement("div",{className:"info"},r.a.createElement("div",{className:"inner"},r.a.createElement("div",{className:"score"},s[0]," - ",s[1]),r.a.createElement("div",{className:"date"},i.getDate(),"/",i.getMonth()+1),r.a.createElement("div",{className:"venue"},c))),r.a.createElement("div",{className:"away"},r.a.createElement("div",{className:"logo"},r.a.createElement("img",{src:t.logo,alt:"Away team logo"})),r.a.createElement("div",{className:"name"},t.name))))}var C=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"getUpdateData",value:function(){var e=Object(b.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=36e5,e.next=3,this.fetchJson("/api/football");case 3:return e.t1=e.sent,e.abrupt("return",{name:"football",title:"Football fixtures",updateDelay:e.t0,fixtures:e.t1});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"renderInner",value:function(){if(this.state.fixtures)return r.a.createElement("div",{className:"Football-fixtures"},this.state.fixtures.map((function(e){return r.a.createElement(L,e)})))}}]),a}(E),A=(a(11),function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"getUpdateData",value:function(){var e=Object(b.a)(h.a.mark((function e(){var t,a,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchJson("/api/github/issues");case 2:return t=e.sent,a=t.issues,n=t.totalCount,e.abrupt("return",{name:"githubissues",title:"GitHub issues",issues:a.slice(0,this.layoutConfig.maxListItems),totalCount:n});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"renderInner",value:function(){if(this.state.issues){var e=this.state,t=e.issues,a=e.totalCount-t.length;return r.a.createElement("div",{className:"GitHub-issues"},r.a.createElement("div",{className:"GitHub-issues"},t.map(this.renderIssue),a&&r.a.createElement("div",{className:"more"},"+ ",a," more")))}}},{key:"renderIssue",value:function(e){var t=e.author,a=e.number,n=e.repository,s=e.title,c=e.url;return r.a.createElement("div",{className:"ListItem compact"},r.a.createElement("div",{className:"title"},r.a.createElement("a",{href:c,target:"_blank"},"#",a," ",s)),r.a.createElement("div",{className:"info"},r.a.createElement("div",{className:"repo"},n),r.a.createElement("div",{className:"author"},t)))}}]),a}(E)),U=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"getUpdateData",value:function(){var e=Object(b.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchJson("/api/github/stats");case 2:return e.t0=e.sent,e.abrupt("return",{name:"githubstats",data:e.t0});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"renderInner",value:function(){if(this.state.data){var e=this.state.data,t=e.contributions,a=e.status,n=e.login,s=e.location;return r.a.createElement("div",null,r.a.createElement("h3",{className:"GitHub-user"},n),r.a.createElement("div",{className:"GitHub-location"},s),r.a.createElement("div",{className:"GitHub-status"},r.a.createElement("span",{className:"GitHub-icon",dangerouslySetInnerHTML:{__html:a.emojiHTML}}),a.message),r.a.createElement("div",{className:"GitHub-contributions"},t," contributions"))}}}]),a}(E),J=a(8),M=(a(42),a(16)),H=a.n(M),W=a(17),T=a.n(W),G=a(18),z=a.n(G),S=a(19),F=a.n(S),R=a(20),Y=a.n(R),B=a(21),P=a.n(B),_=a(22),q=a.n(_),Q=a(23),K=a.n(Q),V=a(24),X=a.n(V),Z=a(25),$=a.n(Z),ee=a(26),te=a.n(ee),ae=a(27),ne=a.n(ae),re={Burger:{icon:H.a,alt:"A hamburger"},Carrot:{icon:T.a,alt:"A carrot"},Chicken:{icon:z.a,alt:"A roast chicken"},Curry:{icon:F.a,alt:"A bowl of curry"},Default:{icon:Y.a,alt:"A tasty dish"},Fish:{icon:P.a,alt:"A fish"},JacketPotato:{icon:q.a,alt:"A potato"},Pasta:{icon:K.a,alt:"A bowl of pasta"},Pizza:{icon:X.a,alt:"A pizza"},Sausage:{icon:$.a,alt:"A big juicy sausage!"},Steak:{icon:te.a,alt:"A big juicy steak!"},Wrap:{icon:ne.a,alt:"A tasty wrap"}},se=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(e){var n,r=e.name;return Object(o.a)(this,a),(n=t.call(this)).state={name:r},n}return Object(l.a)(a,[{key:"render",value:function(){var e=re[this.state.name]||re.Default,t=e.alt,a=e.icon;return r.a.createElement("div",{className:"MealIcon"},r.a.createElement("img",{src:a,alt:t}))}}]),a}(r.a.Component);a(43);function ce(e){var t=e.name,a=e.day,n=e.icon,s=e.owner,c=d()().isoWeekday()===a;return r.a.createElement("div",{className:"Meal ".concat(c?"today":"")},r.a.createElement("div",{className:"day"},d()().isoWeekday(a).format("ddd")),r.a.createElement(se,{name:n}),r.a.createElement("div",{className:"name"},t),r.a.createElement("div",{className:"owner"},s))}var ie=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"getUpdateData",value:function(){var e=Object(b.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchJson("/api/meals");case 2:return e.t0=e.sent.slice(0,this.layoutConfig.maxListItems),e.abrupt("return",{name:"meals",title:"This week's meals",meals:e.t0});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"renderInner",value:function(){if(this.state.meals)return r.a.createElement("div",{className:"Meals-meals"},this.state.meals.map((function(e,t){return r.a.createElement(ce,Object(J.a)(Object(J.a)({},e),{},{day:t+1}))})))}}]),a}(E);a(44);function ue(e){var t=e.name,a=(e.day,e.icon,e.owner);return r.a.createElement("div",{className:"Meal small"},r.a.createElement("div",{className:"name"},t),r.a.createElement("div",{className:"owner"},a))}var oe=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"getUpdateData",value:function(){var e=Object(b.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchJson("/api/meals?w=1");case 2:return e.t0=e.sent.slice(0,this.layoutConfig.maxListItems),e.abrupt("return",{name:"meals-small",title:"Next week's meals",meals:e.t0});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"renderInner",value:function(){if(this.state.meals)return r.a.createElement("div",{className:"Meals-meals"},this.state.meals.map((function(e,t){return r.a.createElement(ue,Object(J.a)(Object(J.a)({},e),{},{day:t+1}))})))}}]),a}(E),le=(a(45),function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"renderInner",value:function(){var e=this;if(!this.state.items||!this.state.items.length)return r.a.createElement("span",{className:"List-empty"},"Nothing to see here!");var t=this.layoutConfig.maxListItems,a=this.state.items,n=0;return this.state.items.length>t&&(a=this.state.items.slice(0,t-1),n=this.state.items.slice(t-1).length),r.a.createElement("div",{className:"List-items"},a.map((function(t){return r.a.createElement("div",{className:"ListItem"},e.renderItemInner(t))})),n?r.a.createElement("div",{className:"ListItem hidden"},"+ ",n," more item",n>1?"s":""):"")}},{key:"renderItemInner",value:function(e){}}]),a}(E)),me=(a(46),function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"getUpdateData",value:function(){var e=Object(b.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchJson("/api/news",5);case 2:return e.t0=e.sent,e.abrupt("return",{name:"news",title:"Latest headlines",items:e.t0,updateInterval:6e4});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"renderItemInner",value:function(e){var t=e.date,a=e.headline,n=e.section;return r.a.createElement("div",null,r.a.createElement("div",{className:"title"},a),r.a.createElement("div",{className:"source"},n),r.a.createElement("div",{className:"date"},d()(t).format("h:mma")))}}]),a}(le)),fe=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"getUpdateData",value:function(){var e=Object(b.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchJson("/api/shopping");case 2:return e.t0=e.sent,e.abrupt("return",{name:"shopping",title:"Shopping List",items:e.t0,updateInterval:5e3});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"renderItemInner",value:function(e){return e.name}}]),a}(le),pe=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"getUpdateData",value:function(){var e=Object(b.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchJson("/api/tasks");case 2:return e.t0=e.sent,e.abrupt("return",{name:"tasks",title:"To-do list",items:e.t0,updateInterval:5e3});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"renderItemInner",value:function(e){return e.name}}]),a}(le),de=(a(47),function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"getUpdateData",value:function(){var e=Object(b.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchJson("/api/twitter/tech",this.maxListItems);case 2:return e.t0=e.sent,e.abrupt("return",{name:"technews",title:"Tech news",items:e.t0});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"renderItemInner",value:function(e){var t=e.createdAt,a=e.text,n=e.user;return r.a.createElement("div",{className:"ListItem compact"},r.a.createElement("div",{className:"title"},a),r.a.createElement("div",{className:"info"},r.a.createElement("div",{className:"source"},n),r.a.createElement("div",{className:"date"},d()(t).format("h:mma"))))}}]),a}(le)),ve=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"getUpdateData",value:function(){var e=Object(b.a)(h.a.mark((function e(){var t,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchJson("https://uselessfacts.jsph.pl/today.json?language=en");case 2:return t=e.sent,a=t.text,e.abrupt("return",{name:"fact",title:"Useless fact",autoUpdate:!0,fact:a,updateInterval:432e5});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"renderInner",value:function(){return r.a.createElement("div",{className:"ListItem"},this.state.fact)}}]),a}(E),he=(a(48),function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"getUpdateData",value:function(){var e=Object(b.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=J.a,e.t1={name:"weather",title:"Weather"},e.next=4,this.fetchJson("/api/weather");case 4:return e.t2=e.sent,e.abrupt("return",(0,e.t0)(e.t1,e.t2));case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"renderInner",value:function(){if(this.state.weather)return r.a.createElement("div",{className:"Weather-inner"},r.a.createElement("div",{className:"Weather-weather"},this.state.weather.map((function(e){return r.a.createElement(be,e)}))))}}]),a}(E));function be(e){var t=d()(e.time),a=Math.round(e.tempMain);return r.a.createElement("div",{className:"Weather-summary"},r.a.createElement("div",{className:"inner ListItem"},r.a.createElement("div",{className:"time"},t.format("HH:mm")),r.a.createElement("img",{className:"icon",src:e.icon,alt:e.description}),r.a.createElement("div",{className:"summary"},e.summary),r.a.createElement("div",{className:"temp"},a,r.a.createElement("sup",null,"o"),"C")))}var ye={layouts:{portraitlarge:{widgets:[[D,fe],ie,oe,[C,he],[pe,me],[x,ve]],maxListItems:7},portraitsmall:{widgets:[fe,pe,D,ie],maxListItems:20},landscapelarge:{bg:"bg-landscape.jpg",widgets:[[D,fe,pe],[me,j,C],[ie,ve,he]],maxListItems:7},tom:{bg:"bg-tom.jpg",widgets:[[U],[A,de]],maxListItems:10}},updateInterval:3e5},ge=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];var c=(e=t.call.apply(t,[this].concat(r))).parseQuery(),i=e.getLayoutConfig(c,ye),u=d()();return e.state={config:ye,layoutConfig:i,query:c,time:u},setInterval((function(){return e.setState({time:d()()})}),5e3),e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.state.layoutConfig;return t?r.a.createElement("div",{className:"root-inner"},r.a.createElement("div",{className:"App ".concat(this.state.query.layout)},r.a.createElement("div",{className:"bg",style:{"background-image":"url(./".concat(t.bg||"bg.jpg",")")}}),r.a.createElement("header",{className:"App-header"},r.a.createElement("div",null),r.a.createElement("div",{className:"text"},r.a.createElement("h1",null,"taylorhub")),r.a.createElement("div",{className:"today"},r.a.createElement("div",{className:"date"},this.state.time.format("dddd Do MMMM YYYY")),r.a.createElement("div",{className:"time"},this.state.time.format("h:mma")))),r.a.createElement("div",{className:"widgets"},t.widgets.map((function(t){return e.renderWidget(t)}))))):r.a.createElement("h1",{className:"error"},"No layout specified")}},{key:"getLayoutConfig",value:function(e,t){try{var a=t.layouts["".concat(e.layout)];if(!a)throw new Error;return a}catch(n){console.error("No valid config found",e)}}},{key:"parseQuery",value:function(){return window.location.search?window.location.search.slice(1).split("&").map((function(e){return e.split("=")})).reduce((function(e,t){var a=Object(u.a)(t,2),n=a[0],r=a[1];return Object.assign(e,Object(i.a)({},n,r))}),{}):{}}},{key:"renderWidget",value:function(e){var t={config:this.state.config,layoutConfig:this.state.layoutConfig};if(!Array.isArray(e))return r.a.createElement(e,t);var a=e.length;if(!a||a>5)throw new Error("Invalid layout size: ".concat(a));return r.a.createElement("div",{className:"widget-row-".concat(a)},e.map((function(e){return r.a.createElement(e,t)})))}}]),a}(r.a.Component);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ge,null)),document.getElementById("root"))}],[[29,1,2]]]);
//# sourceMappingURL=main.1acbf9e8.chunk.js.map