(this.webpackJsonphoroscope=this.webpackJsonphoroscope||[]).push([[0],{161:function(e,t,n){e.exports=n(261)},240:function(e,t,n){},250:function(e,t,n){},261:function(e,t,n){"use strict";n.r(t);n(162),n(188),n(190),n(191),n(193),n(194),n(195),n(196),n(197),n(198),n(199),n(200),n(202),n(203),n(204),n(205),n(206),n(207),n(208),n(209),n(210),n(211),n(213),n(214),n(215),n(216),n(217),n(218),n(219),n(220),n(221),n(222),n(223),n(224),n(225),n(226),n(227),n(228),n(229),n(230);var a=n(0),r=n.n(a),i=n(87),c=n.n(i),l=n(21),o=n.n(l),s=n(55),u=n.n(s),m=n(88),p=n(22),d=n(91),h=n.n(d),f=(n(239),n(240),n(10)),b=n(56),g=n.n(b),_=n(57),x=n.n(_),v=(n(250),function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"item item-1"}),r.a.createElement("div",{className:"item item-2"}),r.a.createElement("div",{className:"item item-3"}),r.a.createElement("div",{className:"item item-4"}))}),y=n(90),E=n.n(y),w=function(e){var t=e.zodiac,n=e.user,i=e.tab,c=[{label:"aries",img:"https://24tv.ua/resources/photos/news/720x553_DIR/202005/1351979_14172597.png"},{label:"taurus",img:"https://24tv.ua/resources/photos/news/720x553_DIR/202005/1351979_14172432.png"},{label:"gemini",img:"https://24tv.ua/resources/photos/news/720x553_DIR/202005/1351979_14172433.png"},{label:"cancer",img:"https://24tv.ua/resources/photos/news/720x553_DIR/202005/1351979_14172427.png"},{label:"leo",img:"https://24tv.ua/resources/photos/news/720x553_DIR/202005/1351979_14172428.png"},{label:"virgo",img:"https://24tv.ua/resources/photos/news/720x540_DIR/202005/1351979_14172434.png"},{label:"libra",img:"https://24tv.ua/resources/photos/news/720x522_DIR/202005/1351979_14172429.png"},{label:"scorpio",img:"https://24tv.ua/resources/photos/news/720x553_DIR/202005/1351979_14172435.png"},{label:"sagittarius",img:"https://24tv.ua/resources/photos/news/720x538_DIR/202005/1351979_14172437.png"},{label:"capricorn",img:"https://24tv.ua/resources/photos/news/720x574_DIR/202005/1351979_14172436.png"},{label:"aquarius",img:"https://24tv.ua/resources/photos/news/720x520_DIR/202005/1351979_14172430.png"},{label:"pisces",img:"https://24tv.ua/resources/photos/news/720x538_DIR/202005/1351979_14172431.png"}],l=r.a.useRef(null),s=Object(a.useState)(null),u=Object(p.a)(s,2),m=u[0],d=u[1],h=Object(a.useState)(null),b=Object(p.a)(h,2),_=b[0],y=b[1],w=Object(a.useState)(null),k=Object(p.a)(w,2),j=k[0],O=k[1];Object(a.useEffect)((function(){"\u0421\u0435\u043a\u0441-\u0433\u043e\u0440\u043e\u0441\u043a\u043e\u043f"===i?fetch("https://mysterious-garden-57052.herokuapp.com/horoscope/sex").then((function(e){return e.json()})).then((function(e){d(e)})):"\u0416\u0435\u043d\u0441\u043a\u0438\u0439"===i?fetch("https://mysterious-garden-57052.herokuapp.com/horoscope/women").then((function(e){return e.json()})).then((function(e){y(e)})):fetch("https://mysterious-garden-57052.herokuapp.com/horoscope/cake").then((function(e){return e.json()})).then((function(e){O(e)}))}),[i]);var R=function(e){var a="https://vk.com/app7617614";o.a.send("VKWebAppShowWallPostBox",{attachments:a,message:t.label+" - "+m.source+"\n"+e+"\n",owner_id:n.id,copyright:a})};function I(e){var t=document.createElement("span");t.appendChild(document.createTextNode("height")),document.body.appendChild(t),t.style.cssText="font: "+e+"; white-space: nowrap; display: inline;";var n=t.offsetHeight;return document.body.removeChild(t),n}var D=function(e){var n=function(e){var t=l.current,n=t.getContext("2d");n.clearRect(0,0,t.width,t.height),n.fillStyle="white",n.font="normal 27px Oswald",n.strokeStyle="black",n.lineWidth=6;for(var a=I(n.font),r=t.width,i=I(n.font),c=e.split(" "),o=c.length,s="",u=0;u<o;u++){var m=s+c[u]+" ";if(n.measureText(m).width>r){var p=(t.width-n.measureText(s).width)/2;n.strokeText(s,p,i),n.fillText(s,p,i),s=c[u]+" ",i+=a}else s=m}var d=(t.width-n.measureText(s).width)/2;return n.strokeText(s,d,i),n.fillText(s,d,i),t.toDataURL("image/png")}(t.label+" - "+m.source+"\n"+e),a="https://vk.com/app7617614";o.a.send("VKWebAppShowStoryBox",{background_type:"image",url:"https://i.pinimg.com/736x/3b/3a/11/3b3a11b5dd823830adf94eba98cd9060.jpg",locked:!0,attachment:{text:"view",type:"url",url:a},stickers:[{sticker_type:"renderable",sticker:{transform:{relation_width:.9,translation_y:.25},can_delete:0,content_type:"image",url:c.find((function(e){return e.label===t.name})).img,clickable_zones:[{action_type:"link",action:{link:a,tooltip_text_key:"tooltip_open_page"},clickable_area:[{x:0,y:0},{x:884,y:0},{x:884,y:196},{x:0,y:196}]}]}},{sticker_type:"renderable",sticker:{transform:{relation_width:.9,translation_y:-.4},can_delete:0,content_type:"image",blob:n,clickable_zones:[{action_type:"link",action:{link:a,tooltip_text_key:"tooltip_open_page"},clickable_area:[{x:0,y:0},{x:884,y:0},{x:884,y:196},{x:0,y:196}]}]}}]})};return"\u042d\u0440\u043e\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439"===i?null!==m&&null!==t?r.a.createElement(r.a.Fragment,null,r.a.createElement("canvas",{style:{display:"none"},ref:l,width:window.innerWidth,height:window.innerHeight}),r.a.createElement(f.e,{icon:r.a.createElement("img",{height:100,width:130,src:c.find((function(e){return e.label===t.name})).img}),header:t.label+" - "+m.source,action:r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(f.b,{onClick:function(){return R(m.sign_teaser.find((function(e){return e.sign===t.name})).text)},before:r.a.createElement(g.a,null),mode:"outline",stretched:!0,style:{marginRight:8}},"\u041d\u0430 \u0441\u0442\u0435\u043d\u0443"),r.a.createElement(f.b,{onClick:function(){return D(m.sign_teaser.find((function(e){return e.sign===t.name})).text)},before:r.a.createElement(x.a,null),mode:"outline",stretched:!0},"\u0412 \u0438\u0441\u0442\u043e\u0440\u0438\u044e"))},m.sign_teaser.find((function(e){return e.sign===t.name})).text)):r.a.createElement(v,null):"\u0416\u0435\u043d\u0441\u043a\u0438\u0439"===i?null!==_&&null!==t?r.a.createElement(r.a.Fragment,null,r.a.createElement("canvas",{style:{display:"none"},ref:l,width:window.innerWidth,height:window.innerHeight}),r.a.createElement(f.e,{icon:r.a.createElement("img",{height:100,width:130,src:c.find((function(e){return e.label===t.name})).img}),header:t.label+" - "+_.source,action:r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(f.b,{onClick:function(){return R(_.text.find((function(e){return e.sign===t.name})).text)},before:r.a.createElement(g.a,null),mode:"outline",stretched:!0,style:{marginRight:8}},"\u041d\u0430 \u0441\u0442\u0435\u043d\u0443"),r.a.createElement(f.b,{onClick:function(){return D(_.text.find((function(e){return e.sign===t.name})).text)},before:r.a.createElement(x.a,null),mode:"outline",stretched:!0},"\u0412 \u0438\u0441\u0442\u043e\u0440\u0438\u044e"))},_.text.find((function(e){return e.sign===t.name})).text)):r.a.createElement(v,null):r.a.createElement("div",{style:{background:"url("+E.a+") center no-repeat",textAlign:"center",padding:60,color:"black"}},j)},k=function(e){var t=e.user,n=e.zodiac;return null!==t&&null!==n?r.a.createElement(f.f,{disabled:!0,before:r.a.createElement(f.a,{size:72,src:t.photo_200||null}),caption:"\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f - "+t.bdate,bottom:n.title},t.first_name+" "+t.last_name):null},j=function(e){var t=e.id,n=e.fetchedUser,i=Object(a.useState)("\u041f\u0435\u0447\u0435\u043d\u044c\u043a\u0430"),c=Object(p.a)(i,2),l=c[0],o=c[1],s=Object(a.useState)(null),u=Object(p.a)(s,2),m=u[0],d=u[1],h=[[1,"","",""],[19,"\u041a\u043e\u0437\u0435\u0440\u043e\u0433 (22.12\u201319.1)","\u0417\u0435\u043c\u043b\u044f","\u0421\u0430\u0442\u0443\u0440\u043d","capricorn","\u041a\u043e\u0437\u0435\u0440\u043e\u0433"],[18,"\u0412\u043e\u0434\u043e\u043b\u0435\u0439 (20.1\u201318.2)","\u0412\u043e\u0437\u0434\u0443\u0445","\u0421\u0430\u0442\u0443\u0440\u043d, \u0423\u0440\u0430\u043d","aquarius","\u0412\u043e\u0434\u043e\u043b\u0435\u0439"],[20,"\u0420\u044b\u0431\u044b (19.2\u201320.3)","\u0412\u043e\u0434\u0430","\u042e\u043f\u0438\u0442\u0435\u0440, \u041d\u0435\u043f\u0442\u0443\u043d","pisces","\u0420\u044b\u0431\u044b"],[19,"\u041e\u0432\u0435\u043d (21.3\u201319.4)","\u041e\u0433\u043e\u043d\u044c","\u041c\u0430\u0440\u0441","aries","\u041e\u0432\u0435\u043d"],[20,"\u0422\u0435\u043b\u0435\u0446 (20.4\u201320.5)","\u0417\u0435\u043c\u043b\u044f","\u0412\u0435\u043d\u0435\u0440\u0430","taurus","\u0422\u0435\u043b\u0435\u0446"],[21,"\u0411\u043b\u0438\u0437\u043d\u0435\u0446\u044b (21.5\u201321.6)","\u0412\u043e\u0437\u0434\u0443\u0445","\u041c\u0435\u0440\u043a\u0443\u0440\u0438\u0439","gemini","\u0411\u043b\u0438\u0437\u043d\u0435\u0446\u044b"],[22,"\u0420\u0430\u043a (22.6\u201322.7)","\u0412\u043e\u0434\u0430","\u041b\u0443\u043d\u0430","cancer","\u0420\u0430\u043a"],[22,"\u041b\u0435\u0432 (23.7\u201322.8)","\u041e\u0433\u043e\u043d\u044c","\u0421\u043e\u043b\u043d\u0446\u0435","leo","\u041b\u0435\u0432"],[22,"\u0414\u0435\u0432\u0430 (23.8\u201322.9)","\u0417\u0435\u043c\u043b\u044f","\u041c\u0435\u0440\u043a\u0443\u0440\u0438\u0439","virgo","\u0414\u0435\u0432\u0430"],[22,"\u0412\u0435\u0441\u044b (23.9\u201322.10)","\u0412\u043e\u0437\u0434\u0443\u0445","\u0412\u0435\u043d\u0435\u0440\u0430","libra","\u0412\u0435\u0441\u044b"],[22,"\u0421\u043a\u043e\u0440\u043f\u0438\u043e\u043d (23.10\u201322.11)","\u0412\u043e\u0434\u0430","\u041c\u0430\u0440\u0441, \u041f\u043b\u0443\u0442\u043e\u043d","scorpio","\u0421\u043a\u043e\u0440\u043f\u0438\u043e\u043d"],[21,"\u0421\u0442\u0440\u0435\u043b\u0435\u0446 (23.11\u201321.12)","\u041e\u0433\u043e\u043d\u044c","\u042e\u043f\u0438\u0442\u0435\u0440","sagittarius","\u0421\u0442\u0440\u0435\u043b\u0435\u0446"]];return Object(a.useEffect)((function(){if(null!==n){var e=n.bdate.split("."),t=e[1],a=e[0];(a<1||a>31)&&(t=0,a=0),(t<1||t>12)&&(t=0,a=0),a>h[t][0]&&(t+=1),t>12&&(t=1),""!==h[t][1]?d({title:h[t][1],name:h[t][4],label:h[t][5]}):console.log("error")}}),[n]),null!==m?r.a.createElement(f.c,{id:t},r.a.createElement(f.d,{style:{position:"relative !important"}},"\u0413\u043e\u0440\u043e\u0441\u043a\u043e\u043f\u0443\u0441"),r.a.createElement(f.g,null,r.a.createElement(f.h,{onClick:function(){return o("\u041f\u0435\u0447\u0435\u043d\u044c\u043a\u0430")},selected:"\u041f\u0435\u0447\u0435\u043d\u044c\u043a\u0430"===l},"\u041f\u0435\u0447\u0435\u043d\u044c\u043a\u0430"),r.a.createElement(f.h,{onClick:function(){return o("\u042d\u0440\u043e\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439")},selected:"\u042d\u0440\u043e\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439"===l},"\u0421\u0435\u043a\u0441-\u0433\u043e\u0440\u043e\u0441\u043a\u043e\u043f"),r.a.createElement(f.h,{onClick:function(){return o("\u0416\u0435\u043d\u0441\u043a\u0438\u0439")},selected:"\u0416\u0435\u043d\u0441\u043a\u0438\u0439"===l},"\u0416\u0435\u043d\u0441\u043a\u0438\u0439 \u0433\u043e\u0440\u043e\u0441\u043a\u043e\u043f")),r.a.createElement(k,{user:n,zodiac:m}),r.a.createElement(w,{zodiac:m,user:n,tab:l})):r.a.createElement(f.c,{id:t},r.a.createElement(f.d,null,"\u0413\u043e\u0440\u043e\u0441\u043a\u043e\u043f\u0443\u0441"),r.a.createElement(f.e,{stretched:!0,icon:r.a.createElement(v,null)}))},O=function(){var e=Object(a.useState)("home"),t=Object(p.a)(e,2),n=t[0],i=t[1],c=Object(a.useState)(null),l=Object(p.a)(c,2),s=l[0],d=l[1],f=Object(a.useState)(null),b=Object(p.a)(f,2),g=b[0],_=b[1];Object(a.useEffect)((function(){function e(){return(e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,d(t),_(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}o.a.subscribe((function(e){var t=e.detail,n=t.type,a=t.data;if("VKWebAppUpdateConfig"===n){var r=document.createAttribute("scheme");r.value=a.scheme?a.scheme:"client_light",document.body.attributes.setNamedItem(r)}})),function(){e.apply(this,arguments)}()}),[]);return r.a.createElement(h.a,{activePanel:n,popout:g},r.a.createElement(j,{id:"home",fetchedUser:s,go:function(e){i(e.currentTarget.dataset.to)}}))};o.a.send("VKWebAppInit"),c.a.render(r.a.createElement(O,null),document.getElementById("root"))},90:function(e,t,n){e.exports=n.p+"static/media/paper.5342dbbb.png"}},[[161,1,2]]]);
//# sourceMappingURL=main.31122a98.chunk.js.map