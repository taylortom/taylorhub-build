(this["webpackJsonptaylorhub-ui"]=this["webpackJsonptaylorhub-ui"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){},,,function(e,t,a){e.exports=a.p+"static/media/recycling.be6e8654.svg"},function(e,t,a){e.exports=a.p+"static/media/trash.b5a3e61f.svg"},function(e,t,a){e.exports=a.p+"static/media/050-hamburguer.7125fb4a.svg"},function(e,t,a){e.exports=a.p+"static/media/147-carrot.c72327d6.svg"},function(e,t,a){e.exports=a.p+"static/media/082-turkey.0a769d09.svg"},function(e,t,a){e.exports=a.p+"static/media/127-rice.c412873d.svg"},function(e,t,a){e.exports=a.p+"static/media/081-food.e5b80f32.svg"},function(e,t,a){e.exports=a.p+"static/media/135-fish.3a42a18c.svg"},function(e,t,a){e.exports=a.p+"static/media/145-potatoes.749f958b.svg"},function(e,t,a){e.exports=a.p+"static/media/203-spaguetti.ba10dad3.svg"},function(e,t,a){e.exports=a.p+"static/media/104-pizza.70fcaefb.svg"},function(e,t,a){e.exports=a.p+"static/media/108-sausage.4f52699c.svg"},function(e,t,a){e.exports=a.p+"static/media/086-steak.2bd676c6.svg"},function(e,t,a){e.exports=a.p+"static/media/101-kebab.32c317f6.svg"},,,,function(e,t,a){e.exports=a(56)},,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(15),c=a.n(s),i=(a(39),a(11)),u=a(31),l=a(2),o=a(5),m=a(4),p=a(3),f=a(7),h=a.n(f),d=(a(41),a(1)),v=a.n(d),b=a(6),g=a(16),y=a.n(g),j=(a(43),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n,r=e.config,s=e.layoutConfig;return Object(l.a)(this,a),(n=t.call(this)).config=r,n.layoutConfig=s,n.interval=null,n.state={autoUpdate:!0,updateInterval:n.config.updateInterval},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.updateData()}},{key:"updateData",value:function(){var e=Object(b.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=this,e.next=4,this.getUpdateData();case 4:e.t1=e.sent,e.t0.setState.call(e.t0,e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.error(e.t2);case 11:!this.interval&&this.state.autoUpdate&&(this.interval=setInterval(this.updateData.bind(this),this.state.updateInterval));case 12:case"end":return e.stop()}}),e,this,[[0,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"getUpdateData",value:function(){var e=Object(b.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"fetchJson",value:function(){var e=Object(b.a)(v.a.mark((function e(t){var a,n,r,s,c=arguments;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>1&&void 0!==c[1]?c[1]:0,e.next=3,y()(t);case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,(s=new Event("debug")).data={url:t,time:(new Date).toISOString(),json:r},window.dispatchEvent(s),e.abrupt("return",a>0?r.slice(0,a):r);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.title,t=this.state.name;return r.a.createElement("div",{className:"Widget ".concat(t)},r.a.createElement("header",{className:"Widget-header"},e?r.a.createElement("h1",null,e):""),r.a.createElement("div",{className:"Widget-inner"},this.renderInner()))}},{key:"renderInner",value:function(){}}]),a}(r.a.Component)),E=a(17),w=a.n(E),O=a(18),N=a.n(O),k=(a(44),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"getUpdateData",value:function(){var e=Object(b.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchJson("/api/binday");case 2:return e.t0=e.sent,e.abrupt("return",{name:"binday",title:"Bin",isRecycling:e.t0});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"renderInner",value:function(){var e=r.a.createElement("img",{src:this.state.isRecycling?w.a:N.a,alt:"bin icon"}),t=this.state.isRecycling?"Recycling":"Household Waste",a="label ".concat(this.state.isRecycling?"green":"");return[r.a.createElement("div",{className:"icon"},e),r.a.createElement("div",{className:a},t)]}}]),a}(j));a(32),a(33),a(9),a(45),a(46);function x(e){var t=e.summary,a=e.start,n=e.end,s=h()(a.dateTime||a.date),c=h()(n.dateTime||n.date);return r.a.createElement("div",{className:"Event"},r.a.createElement("div",{className:"date"},r.a.createElement("span",{className:"month"},s.format("D"),"/",s.format("M")),r.a.createElement("span",{className:"day"},s.format("ddd"))),r.a.createElement("div",{className:"info"},r.a.createElement("span",{className:"time"},function(e,t){var a=h.a.duration(t.diff(e));if(a.asHours()>24)return"For ".concat(a.asDays()," days");if(24===a.asHours())return"All day";var n=e.format(0===e.minute()?"ha":"h:mma"),r=t.format(0===t.minute()?"ha":"h:mma");return"".concat(n," - ").concat(r)}(s,c)),r.a.createElement("span",{className:"title"},t)))}var I=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"getUpdateData",value:function(){var e=Object(b.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchJson("/api/events",this.layoutConfig.maxListItems);case 2:return e.t0=e.sent,e.abrupt("return",{name:"events",title:"Upcoming events",events:e.t0});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"renderInner",value:function(){if(this.state.events)return r.a.createElement("div",{className:"Events-events"},this.state.events.map((function(e){return r.a.createElement(x,e)})))}}]),a}(j);a(47);function D(e){var t=e.awayTeam,a=e.date,n=e.homeTeam,s=e.league,c=e.score,i=e.venue,u=new Date(a);return r.a.createElement("div",{className:"Fixture"},r.a.createElement("div",{className:"teams"},r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"logo"},r.a.createElement("img",{src:n.logo,alt:"Home team logo"})),r.a.createElement("div",{className:"name"},n.name)),r.a.createElement("div",{className:"info"},r.a.createElement("div",{className:"inner"},r.a.createElement("div",{className:"score"},c[0]," - ",c[1]),r.a.createElement("div",{className:"date"},u.getDate(),"/",u.getMonth()+1),r.a.createElement("div",{className:"venue"},i),r.a.createElement("div",{className:"league"},s.name))),r.a.createElement("div",{className:"away"},r.a.createElement("div",{className:"logo"},r.a.createElement("img",{src:t.logo,alt:"Away team logo"})),r.a.createElement("div",{className:"name"},t.name))))}var U=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"getUpdateData",value:function(){var e=Object(b.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=36e5,e.next=3,this.fetchJson("/api/football");case 3:return e.t1=e.sent,e.abrupt("return",{name:"football",title:"Football fixtures",updateInterval:e.t0,fixtures:e.t1});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"renderInner",value:function(){if(this.state.fixtures)return r.a.createElement("div",{className:"Football-fixtures"},this.state.fixtures.map((function(e){return r.a.createElement(D,e)})))}}]),a}(j),C=(a(14),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"getUpdateData",value:function(){var e=Object(b.a)(v.a.mark((function e(){var t,a,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchJson("/api/github/issues");case 2:return t=e.sent,a=t.issues,n=t.totalCount,e.abrupt("return",{name:"githubissues",title:"GitHub issues",issues:a.slice(0,this.layoutConfig.maxListItems),totalCount:n});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"renderInner",value:function(){if(this.state.issues){var e=this.state,t=e.issues,a=e.totalCount-t.length;return r.a.createElement("div",{className:"GitHub-issues"},r.a.createElement("div",{className:"GitHub-issues"},t.map(this.renderIssue),a&&r.a.createElement("div",{className:"more"},"+ ",a," more")))}}},{key:"renderIssue",value:function(e){var t=e.author,a=e.number,n=e.repository,s=e.title,c=e.url;return r.a.createElement("div",{className:"ListItem compact"},r.a.createElement("div",{className:"title"},r.a.createElement("a",{href:c,target:"_blank"},"#",a," ",s)),r.a.createElement("div",{className:"info"},r.a.createElement("div",{className:"repo"},n),r.a.createElement("div",{className:"author"},t)))}}]),a}(j)),L=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"getUpdateData",value:function(){var e=Object(b.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchJson("/api/github/stats");case 2:return e.t0=e.sent,e.abrupt("return",{name:"githubstats",data:e.t0});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"renderInner",value:function(){if(this.state.data){var e=this.state.data,t=e.contributions,a=e.status,n=e.login,s=e.location;return r.a.createElement("div",null,r.a.createElement("h3",{className:"GitHub-user"},n),r.a.createElement("div",{className:"GitHub-location"},s),r.a.createElement("div",{className:"GitHub-status"},r.a.createElement("span",{className:"GitHub-icon",dangerouslySetInnerHTML:{__html:a.emojiHTML}}),a.message),r.a.createElement("div",{className:"GitHub-contributions"},t," contributions"))}}}]),a}(j),A=a(8),M=(a(48),a(19)),J=a.n(M),H=a(20),W=a.n(H),S=a(21),T=a.n(S),G=a(22),R=a.n(G),z=a(23),F=a.n(z),P=a(24),Y=a.n(P),_=a(25),q=a.n(_),B=a(26),Q=a.n(B),K=a(27),V=a.n(K),X=a(28),Z=a.n(X),$=a(29),ee=a.n($),te=a(30),ae=a.n(te),ne={Burger:{icon:J.a,alt:"A hamburger"},Carrot:{icon:W.a,alt:"A carrot"},Chicken:{icon:T.a,alt:"A roast chicken"},Curry:{icon:R.a,alt:"A bowl of curry"},Default:{icon:F.a,alt:"A tasty dish"},Fish:{icon:Y.a,alt:"A fish"},JacketPotato:{icon:q.a,alt:"A potato"},Pasta:{icon:Q.a,alt:"A bowl of pasta"},Pizza:{icon:V.a,alt:"A pizza"},Sausage:{icon:Z.a,alt:"A big juicy sausage!"},Steak:{icon:ee.a,alt:"A big juicy steak!"},Wrap:{icon:ae.a,alt:"A tasty wrap"}},re=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n,r=e.name;return Object(l.a)(this,a),(n=t.call(this)).state={name:r},n}return Object(o.a)(a,[{key:"render",value:function(){var e=ne[this.state.name]||ne.Default,t=e.alt,a=e.icon;return r.a.createElement("div",{className:"MealIcon"},r.a.createElement("img",{src:a,alt:t}))}}]),a}(r.a.Component);a(49);function se(e){var t=e.name,a=e.day,n=e.icon,s=e.owner,c=h()().isoWeekday()===a;return r.a.createElement("div",{className:"Meal ".concat(c?"today":"")},r.a.createElement("div",{className:"day"},h()().isoWeekday(a).format("ddd")),r.a.createElement(re,{name:n}),r.a.createElement("div",{className:"name"},t),r.a.createElement("div",{className:"owner"},s))}var ce=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"getUpdateData",value:function(){var e=Object(b.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchJson("/api/meals");case 2:return e.t0=e.sent,e.abrupt("return",{name:"meals",title:"This week's meals",meals:e.t0});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"renderInner",value:function(){if(this.state.meals)return r.a.createElement("div",{className:"Meals-meals"},this.state.meals.map((function(e,t){return r.a.createElement(se,Object(A.a)(Object(A.a)({},e),{},{day:t+1}))})))}}]),a}(j);a(50);function ie(e){var t=e.name,a=(e.day,e.icon,e.owner);return r.a.createElement("div",{className:"Meal small"},r.a.createElement("div",{className:"name"},t),r.a.createElement("div",{className:"owner"},a))}var ue=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"getUpdateData",value:function(){var e=Object(b.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchJson("/api/meals?w=1");case 2:return e.t0=e.sent.slice(0,this.layoutConfig.maxListItems),e.abrupt("return",{name:"meals-small",title:"Next week's meals",meals:e.t0});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"renderInner",value:function(){if(this.state.meals)return r.a.createElement("div",{className:"Meals-meals"},this.state.meals.map((function(e,t){return r.a.createElement(ie,Object(A.a)(Object(A.a)({},e),{},{day:t+1}))})))}}]),a}(j),le=(a(51),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"renderInner",value:function(){var e=this;if(!this.state.items||!this.state.items.length)return r.a.createElement("span",{className:"List-empty"},"Nothing to see here!");var t=this.layoutConfig.maxListItems,a=this.state.items,n=0;return this.state.items.length>t&&(a=this.state.items.slice(0,t-1),n=this.state.items.slice(t-1).length),r.a.createElement("div",{className:"List-items"},a.map((function(t){return r.a.createElement("div",{className:"ListItem"},e.renderItemInner(t))})),n?r.a.createElement("div",{className:"ListItem hidden"},"+ ",n," more item",n>1?"s":""):"")}},{key:"renderItemInner",value:function(e){}}]),a}(j)),oe=(a(52),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"getUpdateData",value:function(){var e=Object(b.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchJson("/api/news",5);case 2:return e.t0=e.sent,e.abrupt("return",{name:"news",title:"Latest headlines",items:e.t0,updateInterval:6e4});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"renderItemInner",value:function(e){var t=e.date,a=e.headline,n=e.section;return r.a.createElement("div",null,r.a.createElement("div",{className:"title"},a),r.a.createElement("div",{className:"source"},n),r.a.createElement("div",{className:"date"},h()(t).format("h:mma")))}}]),a}(le)),me=(a(53),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"getUpdateData",value:function(){var e=Object(b.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.images){e.next=6;break}return e.next=3,this.fetchJson("/api/photos/".concat(this.layoutConfig.dir));case 3:return e.t0=e.sent,e.t1=-1,e.abrupt("return",{name:"photos",images:e.t0,currentImage:e.t1,updateInterval:5e3});case 6:return e.abrupt("return",Object(A.a)(Object(A.a)({},this.state),{},{currentImage:this.state.currentImage>=this.state.images.length?0:this.state.currentImage+1}));case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"renderInner",value:function(){if(this.state.currentImage&&this.state.currentImage>=0){var e=encodeURIComponent("\\tom\\".concat(this.state.images[this.state.currentImage]));return r.a.createElement("img",{className:"photo",src:"/api/photo/".concat(e),alt:""})}}}]),a}(j)),pe=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"getUpdateData",value:function(){var e=Object(b.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchJson("/api/shopping");case 2:return e.t0=e.sent,e.abrupt("return",{name:"shopping",title:"Shopping List",items:e.t0,updateInterval:5e3});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"renderItemInner",value:function(e){var t=e.name;return t[0].toUpperCase()+t.slice(1)}}]),a}(le),fe=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"getUpdateData",value:function(){var e=Object(b.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchJson("/api/tasks");case 2:return e.t0=e.sent,e.abrupt("return",{name:"tasks",title:"To-do list",items:e.t0,updateInterval:5e3});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"renderItemInner",value:function(e){return e.name}}]),a}(le),he=(a(54),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"getUpdateData",value:function(){var e=Object(b.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchJson("/api/twitter/tech",this.maxListItems);case 2:return e.t0=e.sent,e.abrupt("return",{name:"technews",title:"Tech news",items:e.t0});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"renderItemInner",value:function(e){var t=e.createdAt,a=e.text,n=e.user;return r.a.createElement("div",{className:"ListItem compact"},r.a.createElement("div",{className:"title"},a),r.a.createElement("div",{className:"info"},r.a.createElement("div",{className:"source"},n),r.a.createElement("div",{className:"date"},h()(t).format("h:mma"))))}}]),a}(le)),de=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"getUpdateData",value:function(){var e=Object(b.a)(v.a.mark((function e(){var t,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchJson("https://uselessfacts.jsph.pl/today.json?language=en");case 2:return t=e.sent,a=t.text,e.abrupt("return",{name:"fact",title:"Useless fact",autoUpdate:!0,fact:a,updateInterval:432e5});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"renderInner",value:function(){return r.a.createElement("div",{className:"ListItem"},this.state.fact)}}]),a}(j),ve=(a(55),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"getUpdateData",value:function(){var e=Object(b.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=A.a,e.t1={name:"weather",title:"Weather"},e.next=4,this.fetchJson("/api/weather");case 4:return e.t2=e.sent,e.abrupt("return",(0,e.t0)(e.t1,e.t2));case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"renderInner",value:function(){if(this.state.weather)return r.a.createElement("div",{className:"Weather-inner"},r.a.createElement("div",{className:"Weather-weather"},this.state.weather.map((function(e){return r.a.createElement(be,e)}))))}}]),a}(j));function be(e){var t=h()(e.time),a=Math.round(e.tempMain);return r.a.createElement("div",{className:"Weather-summary"},r.a.createElement("div",{className:"inner ListItem"},r.a.createElement("div",{className:"time"},t.format("HH:mm")),r.a.createElement("img",{className:"icon",src:e.icon,alt:e.description}),r.a.createElement("div",{className:"summary"},e.summary),r.a.createElement("div",{className:"temp"},a,r.a.createElement("sup",null,"o"),"C")))}var ge={layouts:{portraitlarge:{widgets:[[I,pe],ce,ue,[oe,U],[ve,k],[de]],maxListItems:7,bg:["http://getwallpapers.com/wallpaper/full/e/2/2/372978.jpg","https://wallpaperplay.com/walls/full/0/7/d/13658.jpg","http://getwallpapers.com/wallpaper/full/e/6/6/75128.jpg","http://getwallpapers.com/wallpaper/full/1/f/b/75077.jpg","https://wallpaperplay.com/walls/full/d/b/4/13668.jpg","https://images.unsplash.com/photo-1553061592-03b4b2df2f66?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max","http://getwallpapers.com/wallpaper/full/c/0/b/674393.jpg","https://media.idownloadblog.com/wp-content/uploads/2016/04/iPhone-wallpaper-abstract-portrait-city-macinmac.jpg","http://getwallpapers.com/wallpaper/full/7/0/8/151748.jpg","https://wallpaperaccess.com/full/164874.jpg","https://wallup.net/wp-content/uploads/2017/03/28/370822-rocket-clouds-portrait_display.jpg","http://getwallpapers.com/wallpaper/full/0/1/f/1186984-new-hd-portrait-wallpaper-1080x1920.jpg"]},portraitsmall:{widgets:[pe,fe,I,ce],maxListItems:20},landscapelarge:{bg:"bg-landscape.jpg",widgets:[[I,pe],[oe,U],[ce,de,ve]],maxListItems:7},landscapesmall:{bg:"bg-landscape.jpg",widgets:[[I,oe],[de,U],[ce,ve]],maxListItems:3},landscapephoto:{dir:"tom",widgets:[me]},tom:{bg:"bg-tom.jpg",widgets:[[L],[C,he]],maxListItems:10}},updateInterval:3e5},ye=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];var c=(e=t.call.apply(t,[this].concat(r))).parseQuery(),i=e.getLayoutConfig(c,ge),u=h()();return e.state={config:ge,layoutConfig:i,query:c,time:u},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e,t=this;this.interval=setInterval((function(){return t.setState({time:h()()})}),5e3);var a=null===(e=this.state.layoutConfig)||void 0===e?void 0:e.bg;if(a){var n=Array.isArray(a)?this.getRandomItem(a):a;this.bgUrl=(0===n.indexOf("http")?"":"./")+n}else this.bgUrl="./bg.jpg"}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this,t=this.state.layoutConfig;return t?r.a.createElement("div",{className:"root-inner"},r.a.createElement("div",{className:"App ".concat(this.state.query.layout)},r.a.createElement("div",{className:"bg",style:{"background-image":"url(".concat(this.bgUrl,")")}}),r.a.createElement("header",{className:"App-header"},r.a.createElement("div",null),r.a.createElement("div",{className:"text"},r.a.createElement("h1",null,"taylorhub")),r.a.createElement("div",{className:"today"},r.a.createElement("div",{className:"date"},this.state.time.format("dddd Do MMMM YYYY")),r.a.createElement("div",{className:"time"},this.state.time.format("h:mma")))),r.a.createElement("div",{className:"widgets"},t.widgets.map((function(t){return e.renderWidget(t)}))))):r.a.createElement("div",{class:"error"},r.a.createElement("h1",null,"No layout specified"),r.a.createElement("h3",null,"Available layouts:"),r.a.createElement("ul",null,Object.keys(ge.layouts).map((function(e){return r.a.createElement("li",null,r.a.createElement("a",{href:"/?layout=".concat(e)},e))}))))}},{key:"getRandomItem",value:function(e){return e[Math.floor(Math.random()*e.length)]}},{key:"getLayoutConfig",value:function(e,t){try{var a=t.layouts["".concat(e.layout)];if(!a)throw new Error;return a}catch(n){console.error("No valid config found",e)}}},{key:"parseQuery",value:function(){return window.location.search?window.location.search.slice(1).split("&").map((function(e){return e.split("=")})).reduce((function(e,t){var a=Object(u.a)(t,2),n=a[0],r=a[1];return Object.assign(e,Object(i.a)({},n,r))}),{}):{}}},{key:"renderWidget",value:function(e){var t={config:this.state.config,layoutConfig:this.state.layoutConfig};if(!Array.isArray(e))return r.a.createElement(e,t);var a=e.length;if(!a||a>5)throw new Error("Invalid layout size: ".concat(a));return r.a.createElement("div",{className:"widget-row-".concat(a)},e.map((function(e){return r.a.createElement(e,t)})))}}]),a}(r.a.Component);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ye,null)),document.getElementById("root"))}],[[34,1,2]]]);
//# sourceMappingURL=main.16312122.chunk.js.map