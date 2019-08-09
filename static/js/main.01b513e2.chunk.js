(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{58:function(e,t,n){e.exports=n(85)},63:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(33),c=n.n(l),i=n(21),o=n(22),u=n(24),s=n(23),m=n(26),d=n(15),b=n(29),g=n(10),E=n(27),p=n(55),f=(n(63),n(18)),v=n(19);function y(){var e=Object(v.a)(["\n  mutation DeleteSongMutation($id: ID!) {\n    deleteSong(id: $id) {\n      name\n    }\n  }\n"]);return y=function(){return e},e}function h(){var e=Object(v.a)(["\n  mutation UpdateSongMutation(\n    $id: ID!\n    $name: String!\n    $year: String!\n    $composer: String!\n    $singerId: [String]!\n    $lyrics: String!\n    $verse: String!\n    $link: String!\n  ) {\n    updateSong(\n      id: $id\n      name: $name\n      year: $year\n      composer: $composer\n      singerId: $singerId\n      lyrics: $lyrics\n      verse: $verse\n      link: $link\n    ) {\n      id\n      name\n      year\n    }\n  }\n"]);return h=function(){return e},e}function S(){var e=Object(v.a)(["\n  mutation AddSong(\n    $name: String!\n    $year: String!\n    $composer: String!\n    $singerId: [String]!\n    $lyrics: String!\n    $verse: String!\n    $link: String!\n  ) {\n    addSong(\n      name: $name\n      year: $year\n      composer: $composer\n      singerId: $singerId\n      lyrics: $lyrics\n      verse: $verse\n      link: $link\n    ) {\n      name\n      year\n    }\n  }\n"]);return S=function(){return e},e}function j(){var e=Object(v.a)(["\n  mutation DeleteSingerMutation($id: ID!) {\n    deleteSinger(id: $id) {\n      name\n    }\n  }\n"]);return j=function(){return e},e}function O(){var e=Object(v.a)(["\n  mutation AddSinger($name: String!, $age: Int!) {\n    addSinger(name: $name, age: $age) {\n      name\n      id\n    }\n  }\n"]);return O=function(){return e},e}function k(){var e=Object(v.a)(["\n  {\n    singers {\n      name\n      id\n    }\n  }\n"]);return k=function(){return e},e}function $(){var e=Object(v.a)(["\n  query($id: ID) {\n    song(id: $id) {\n      id\n      name\n      year\n      composer\n      lyrics\n      verse\n      link\n      singer {\n        id\n        name\n        age\n        songs {\n          name\n          id\n        }\n      }\n    }\n  }\n"]);return $=function(){return e},e}function N(){var e=Object(v.a)(["\n  {\n    songs {\n      name\n      id\n      year\n    }\n  }\n"]);return N=function(){return e},e}var w=Object(d.b)(N()),I=Object(d.b)($()),C=Object(d.b)(k()),D=(Object(d.b)(O()),Object(d.b)(j())),x=(Object(d.b)(S()),Object(d.b)(h())),A=Object(d.b)(y()),L=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={selected:null},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"displaySongs",value:function(){var e=this,t=this.props.data,n=this.props.rangeFilter;return t.loading?r.a.createElement("div",{className:"load-song-list"},"Loading Songs"):t.songs?t.songs.filter(function(e){return e.year.startsWith(n)}).map(function(t){return r.a.createElement("div",{className:"song-row",key:t.id,onClick:function(){return e.props.onSelectSong(t.id)}},t.name," (",t.year,")")}):r.a.createElement("div",{className:"load-song-list"},"Server disconnected")}},{key:"render",value:function(){return r.a.createElement("div",{className:"paper"},this.displaySongs())}}]),t}(a.Component),F=Object(g.e)(w)(L),M=n(88),q=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.c,{query:I,variables:{id:this.props.songId}},function(t){var n=t.data,a=t.loading,l=(t.error,a),c=n.song;return c?r.a.createElement(M.a,{in:!l,classNames:"song-details"},r.a.createElement("div",{id:c.name,className:"song-details"},r.a.createElement("div",{className:"close-button-container"},r.a.createElement("button",{className:"hollow-button close-button",type:"button",onClick:e.props.onClose},r.a.createElement("span",null,"Close"))),r.a.createElement("h4",{className:"song-name"},c.name),r.a.createElement("div",{className:"video",style:{position:"relative",paddingBottom:"56.25%",paddingTop:25,height:0,alignItems:"center"}},r.a.createElement("iframe",{title:c.name,style:{position:"absolute",top:0,left:0,width:"100%",height:"80%"},src:"https://www.youtube.com/embed/".concat(c.link.split("=")[1]),frameBorder:"0"})),r.a.createElement("h4",null,r.a.createElement("b",{className:"bold-prefix"},"Lyrics:")," ",c.lyrics),r.a.createElement("h4",null,r.a.createElement("b",null,"Music:")," ",c.composer),r.a.createElement("h4",null,r.a.createElement("b",null,"Verse:")),r.a.createElement("h4",{style:{whiteSpace:"pre-wrap"}},c.verse),r.a.createElement("h4",null,r.a.createElement("b",null,"Singers:")),c.singer.map(function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("h4",null,e.name))}))):r.a.createElement("h2",{className:"song-name"},"Loading Song details....")}))}}]),t}(a.Component),B=Object(g.e)(I,{options:function(e){return{variables:{id:e.songId}}}})(q),_=function(e){var t=e.yearFilter;return r.a.createElement("div",{className:"filter-buttons-container"},r.a.createElement("button",{className:"hollow-button filter-button-gold",onClick:function(){return t("198")}},"1980's"),r.a.createElement("button",{className:"hollow-button filter-button-orange",onClick:function(){return t("199")}},"1990's"),r.a.createElement("button",{className:"hollow-button filter-button-green",onClick:function(){return t("200")}},"2000's"),r.a.createElement("button",{className:"hollow-button filter-button-blue",onClick:function(){return t("201")}},"2010's"),r.a.createElement("button",{className:"hollow-button filter-button-white",onClick:function(){return t("")}},"All"))},W=function(e){var t=Object(a.useState)(null),n=Object(f.a)(t,2),l=n[0],c=n[1],i=Object(a.useState)(""),o=Object(f.a)(i,2),u=o[0],s=o[1],m=Object(a.useState)(!0),d=Object(f.a)(m,2),b=d[0],g=d[1];return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"main"},r.a.createElement("h1",{className:"App-title"},"NDP Songs"),r.a.createElement(_,{yearFilter:s}),r.a.createElement("div",{className:"bulk"},r.a.createElement(F,{onSelectSong:c,rangeFilter:u}),l?r.a.createElement("div",{className:l?"details-expand":"details"},r.a.createElement(B,{songId:l,onClose:function(){c(""),g(!1)}})):!l&&b?r.a.createElement("div",{id:"empty-details"}):r.a.createElement("div",{id:"empty-details",className:"details"})),r.a.createElement("div",{className:"footer"},"Disclaimer: I do not own any part of the lyrics, music or any materials of the songs.",r.a.createElement("div",null,"All songs and information are from retrieved from sources around the internet"))))},J=function(e){var t=Object(a.useState)(!1),n=Object(f.a)(t,2),l=n[0],c=n[1],i=Object(a.useState)(null),o=Object(f.a)(i,2),u=o[0],s=o[1],m=Object(a.useState)(null),d=Object(f.a)(m,2),b=d[0],g=d[1],E=e.typeName,p=e.columns,v=e.data,y=p.map(function(e){return Object.keys(e)}).flat(),h=p.map(function(e){return Object.values(e)}).flat(),S=function(e,t){s(e),c(!0),g(t)};return r.a.createElement("div",null,r.a.createElement("h2",null,E),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",{className:"paperRow"},y.map(function(e){return r.a.createElement("td",{key:e}," ",e)})),v.map(function(t){return r.a.createElement(T,Object.assign({},e,{keys:h,data:t,editAction:S,deleteAction:c}))}))),r.a.createElement(V,{selected:u,isDisplayed:l,setDisplayed:c,mutation:b}))},T=function(e){var t=e.keys,n=e.data,a=e.editAction;return r.a.createElement("tr",{key:n[t[0]]},t.map(function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("td",{key:e},n[e]))}),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return a("edit")}},"Edit")),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return a(n.id,D)}},"Delete")))},V=function(e){var t=e.selected,n=e.isDisplayed,a=e.setDisplayed,l=e.mutation;return r.a.createElement("div",{className:"modal-background",style:{display:n?"":"none"}},r.a.createElement("div",{className:"modal"},r.a.createElement("header",null,"Title"),"Modal Children",r.a.createElement("footer",null,r.a.createElement("button",{onClick:function(){return a(!1)}},"Cancel"),l?r.a.createElement(g.b,{mutation:l,variables:{selected:t}},function(e){return r.a.createElement("button",{onClick:e},"Confirm")}):r.a.createElement("button",null,"Loading"))))},P=Object(g.e)(C),Q=P(function(e){var t=e.data,n=Object(a.useState)(!1),l=Object(f.a)(n,2),c=(l[0],l[1]);return t.loading?r.a.createElement("h2",null,"Loading..."):r.a.createElement(J,{typeName:"Singer List",columns:[{"Singer Name":"name"},{"Singer Id":"id"}],data:t.singers},function(e,t){if(!e.loading)return e.singers.map(function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.name),r.a.createElement("td",null," ",e.id),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return t(!0)}},"Edit")),r.a.createElement("td",null,r.a.createElement("button",null,"Delete")))})}(t,c))}),R=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault();var t=new FormData(e.target),a=[];t.get("singerId").split(",").forEach(function(e){return a.push(e.trim())}),n.props.updateSongMutation({variables:{id:t.get("id"),name:t.get("name"),year:t.get("year"),composer:t.get("composer"),singerId:a,lyrics:t.get("lyrics"),verse:"".concat(t.get("verse")),link:t.get("link")},refetchQueries:[{query:w}]}).then().catch(function(e){return console.log(e)})},n.state={},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{id:"add-song",onSubmit:this.handleSubmit},r.a.createElement("h1",null,"Edit Song"),r.a.createElement("div",null,r.a.createElement("label",null,"Song Id"),r.a.createElement("input",{type:"text",name:"id"})),r.a.createElement("div",null,r.a.createElement("label",null,"Song Name"),r.a.createElement("input",{type:"text",name:"name"})),r.a.createElement("div",null,r.a.createElement("label",null,"Year"),r.a.createElement("input",{type:"text",name:"year"})),r.a.createElement("div",null,r.a.createElement("label",null,"Composer"),r.a.createElement("input",{type:"text",name:"composer"})),r.a.createElement("div",null,r.a.createElement("label",null,"Singer Id"),r.a.createElement("textarea",{type:"text",name:"singerId"})),r.a.createElement("div",null,r.a.createElement("label",null,"Lyrics"),r.a.createElement("input",{type:"text",name:"lyrics"})),r.a.createElement("div",null,r.a.createElement("label",null,"Verse"),r.a.createElement("textarea",{type:"text",name:"verse"})),r.a.createElement("div",null,r.a.createElement("label",null,"Link"),r.a.createElement("input",{type:"text",name:"link"})),r.a.createElement("button",{type:"submit"},"Edit"))}}]),t}(a.Component),U=Object(g.d)(Object(g.e)(x,{name:"updateSongMutation"}),g.f)(R),Y=Object(g.e)(w)(function(e){var t=e.data;return t.loading?r.a.createElement("h2",null,"Loading..."):r.a.createElement(r.a.Fragment,null,r.a.createElement(J,{typeName:"Song List",columns:[{"Song Name":"name"},{"Song Id":"id"}],data:t.songs,deleteMutation:A}),r.a.createElement(U,null))});n(76).config();var z=new d.a({uri:"https://national-day-song-graphql.herokuapp.com/graphql",cache:new b.a({dataIdFromObject:function(e){return e._id?"".concat(e.__typename,":").concat(e._id):null}})}),G=function(e){return r.a.createElement("div",null,r.a.createElement(E.c,null,r.a.createElement(E.a,{path:"".concat(e.match.path,"/songs"),component:Y}),r.a.createElement(E.a,{path:"".concat(e.match.path,"/singers"),component:Q})))},H=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={selected:""},n.setSelected=function(e){n.setState({selected:e})},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(g.a,{client:z},r.a.createElement(p.a,null,r.a.createElement(E.a,{exact:!0,path:"/",component:W}),r.a.createElement(E.a,{path:"/admin",component:G})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[58,1,2]]]);
//# sourceMappingURL=main.01b513e2.chunk.js.map