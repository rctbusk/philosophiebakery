(this.webpackJsonpphilosophiebakery=this.webpackJsonpphilosophiebakery||[]).push([[0],{55:function(e,t,a){e.exports=a.p+"static/media/text_logo.8eee9d80.png"},60:function(e,t,a){e.exports=a.p+"static/media/german_chocolate_pecan_cake.cfd27ddd.jpg"},61:function(e,t,a){e.exports=a.p+"static/media/yellow_cake.1fa54086.jpg"},62:function(e,t,a){e.exports=a.p+"static/media/yellow_cake_large.f3a38f31.jpg"},63:function(e,t,a){e.exports=a.p+"static/media/pumpkin_pie_placeholders.d852ee29.jpg"},64:function(e,t,a){e.exports=a.p+"static/media/light_blue_to_white_weeding_cake.bae81480.jpg"},65:function(e,t,a){e.exports=a.p+"static/media/pride_cookies.a900e4f7.jpg"},66:function(e,t,a){e.exports=a.p+"static/media/easter_cookies.2e876aab.jpg"},67:function(e,t,a){e.exports=a.p+"static/media/wedding_cake_flavor_cupcakes.1c3cac6c.jpg"},68:function(e,t,a){e.exports=a.p+"static/media/secondary_logo.eba374a7.png"},76:function(e,t,a){e.exports=a(95)},92:function(e,t,a){e.exports=a.p+"static/media/strawberry_cake.189197ab.jpg"},93:function(e,t,a){e.exports=a.p+"static/media/patriotic_oreo_cake.d5d68614.jpg"},94:function(e,t,a){},95:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(8),r=a.n(i),l=a(15),c=a(71),s=a(131),m=a(120),p=a(132),d=a(46),g=a(117),u=a(119),f=a(135),h=a(134),b=a(122),k=a(123),x=a(133),w=a(136),y=a(9),E=a(31),j=a(58),v=a.n(j),C=a(55),O=a.n(C),_=Object(g.a)((function(e){return{menu:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingLeft:"10px",paddingRight:"10px"},tabs:{display:"flex",flexGrow:1,maxWidth:"70%"},menuTab:Object(l.a)({flexGrow:1,color:e.palette.secondary.light,marginRight:"10px",fontSize:"1.2rem"},e.breakpoints.down("md"),{fontSize:"1rem"}),menuItem:{minWidth:"0px",marginRight:"10px",fontSize:"1.3rem"},tabIndicator:{backgroundColor:e.palette.secondary.light}}})),I=[{path:"/",title:"Home"},{path:"/cakes",title:"Cakes"},{path:"/cookies",title:"Cookies"},{path:"/weddings",title:"Weddings"},{path:"/contact-us",title:"Contact"}],B=function(){var e=Object(y.f)(),t=o.a.useState(e.pathname),a=Object(d.a)(t,2),n=a[0],i=a[1],r=_(),l=o.a.useState(null),c=Object(d.a)(l,2),s=c[0],p=c[1],g=function(){p(null)};return o.a.createElement(u.a,{elevation:2},o.a.createElement(m.a,{classes:{root:r.menu}},o.a.createElement("img",{src:O.a,alt:"Philosophie Bakery",style:{objectFit:"scale-down",height:"70px"}}),o.a.createElement(f.a,{smDown:!0},o.a.createElement(h.a,{value:n,onChange:function(e,t){i(t)},classes:{root:r.tabs,indicator:r.tabIndicator}},I.map((function(e){return o.a.createElement(b.a,{to:e.path,value:e.path,component:E.b,label:e.title,classes:{root:r.menuTab}})})))),o.a.createElement(f.a,{mdUp:!0},o.a.createElement(k.a,{color:"secondary",onClick:function(e){p(e.currentTarget)}},o.a.createElement(v.a,null)),o.a.createElement(x.a,{id:"simple-menu",anchorEl:s,keepMounted:!0,open:Boolean(s),onClose:g,MenuListProps:{style:{padding:0}}},I.map((function(e){return o.a.createElement(w.a,{component:E.b,to:e.path,classes:{root:r.menuItem},onClick:function(){i(e.path),g()}},e.title)}))))))},T=a(59),S=a(18),R=a(121),L=a(124),z=a(125),D=a(126),M=a(127),W=Object(g.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around"},gridList:{transform:"translateZ(0)"},titleBar:{background:"linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"},img:Object(l.a)({width:function(e){return"".concat(Math.floor(100/e.numberOfCols),"%")}},e.breakpoints.down("sm"),{height:"100%"}),gridListTile:{width:function(e){return"".concat(Math.floor(100/e.numberOfCols),"%")},backgroundColor:"transparent"},imageTitle:{fontSize:"1.05rem",textTransform:"uppercase",color:e.palette.secondary.light}}})),H=function(e){var t=W(Object(T.a)({largeColumns:5,mediumColumns:4,smallColumns:2,items:[],cellHeight:200,showTitle:!1,allSquare:!0,spacing:10},e)),a=e.largeColumns,n=void 0===a?5:a,i=e.mediumColumns,r=void 0===i?4:i,l=e.smallColumns,c=void 0===l?2:l,s=e.items,m=void 0===s?[]:s,p=e.cellHeight,d=void 0===p?200:p,g=e.showTitle,u=void 0!==g&&g,f=e.allSquare,h=void 0===f||f,b=e.spacing,k=void 0===b?10:b,x=Object(S.a)(),w=Object(R.a)(x.breakpoints.up("lg")),y=Object(R.a)(x.breakpoints.between("sm","lg")),E=o.a.useMemo((function(){return w?n:y?r:c}),[w,y,n,r,c]);return o.a.createElement("div",{className:t.root},o.a.createElement(L.a,{cellHeight:d,style:{width:"".concat(d*E+k*E)},spacing:k,cols:E,className:t.gridList},m.map((function(e,a){var n=1,i=1;return h||(n=w&&e.largeColumns?e.largeColumns:e.cols||1,i=w&&e.largeRows?e.largeRows:e.rows||1),o.a.createElement(z.a,{key:e.title,cols:n,rows:i,classes:{tile:t.gridListTile}},o.a.createElement(D.a,{component:"img",classes:{root:t.img},key:a,image:w&&e.largeImg?e.largeImg:e.img,alt:e.title}),u&&o.a.createElement(M.a,{title:e.title,titlePosition:"top",className:t.titleBar,classes:{title:t.imageTitle}}))}))))},P=a(60),G=a.n(P),N=a(61),A=a.n(N),F=(a(92),a(62)),q=a.n(F),J=a(63),U=a.n(J),Z=(a(93),a(64)),K=a.n(Z),Q=a(65),V=a.n(Q),X=a(66),Y=[{img:a.n(X).a,title:"Cakes",cols:1,rows:1},{img:K.a,title:"Weddings",cols:2,rows:2},{img:U.a,title:"Seasonal Treats",cols:1,rows:1},{img:G.a,title:"Cakes",cols:2,rows:2},{img:V.a,title:"Cookies",cols:1,rows:1},{img:A.a,largeImg:q.a,title:"Custom Desserts",cols:1,rows:1,largeRows:2}],$=a(128),ee=a(129),te=a(130),ae=a(67),ne=a.n(ae),oe=a(68),ie=a.n(oe),re=Object(g.a)((function(e){var t;return{logoBox:(t={},Object(l.a)(t,e.breakpoints.down("sm"),{flexDirection:"column",paddingRight:e.spacing(6),paddingLeft:e.spacing(6),paddingBottom:e.spacing(2)}),Object(l.a)(t,e.breakpoints.only("md"),{paddingTop:e.spacing(2),paddingBottom:e.spacing(2),paddingRight:e.spacing(6),paddingLeft:e.spacing(6)}),Object(l.a)(t,e.breakpoints.up("lg"),{paddingRight:e.spacing(9),paddingLeft:e.spacing(9)}),t),logoImage:Object(l.a)({objectFit:"scale-down",width:"250px",paddingRight:"50px"},e.breakpoints.down("sm"),{paddingRight:"0px"}),button:{borderWidth:"3px",borderRadius:"0px",borderColor:e.palette.secondary.main,color:e.palette.secondary.main,width:"200px",fontSize:"1.5rem"},mainText:{paddingBottom:"30px",textAlign:"center",textShadow:"1px 1px 4px rgba(0,0,0,0.4)"}}})),le=function(){var e=re();return o.a.createElement(p.a,{height:"100%"},o.a.createElement($.a,{style:{position:"relative"},elevation:0},o.a.createElement(D.a,{component:"img",image:ne.a,alt:"Wedding Cake Tasting Display",style:{height:"500px"}}),o.a.createElement(p.a,{position:"absolute",top:"50%",left:"50%",width:"100%",display:"flex",flexDirection:"column",justifyItems:"center",alignItems:"center",style:{transform:"translate(-50%, -50%)"},spacing:5},o.a.createElement(ee.a,{variant:"h2",color:"secondary",classes:{root:e.mainText}},"Welcome to Philosophie Bakery"),o.a.createElement(te.a,{variant:"outlined",classes:{root:e.button}},"Order"))),o.a.createElement(p.a,{pt:1,pb:1,display:"flex",flexDirection:"row",alignItems:"center",justifyItems:"center",bgcolor:"primary.main",classes:{root:e.logoBox}},o.a.createElement(D.a,{component:"img",src:ie.a,alt:"Philosophie Bakery",classes:{root:e.logoImage}}),o.a.createElement(ee.a,{variant:"h6",style:{flexGrow:1},color:"secondary"},"I bake out of my home in the Greater Detroit area. I have 3 children, 2 boys and a girl. I have been baking and decorating since I was a teenage. I also worked at the Michigan State Bakery in college and have continued to love all things desserts/decorating ever since. I specialize in decorated sugar cookies, cakes, cake pops, cupcakes, and macarons. I also make wedding cakes, including cake flavor tastings, and will do on-site decorating classes and event catering.")),o.a.createElement(p.a,{pt:1,pb:1,classes:{root:e.logoBox}},o.a.createElement(H,{largeColumns:3,mediumColumns:2,cellHeight:300,items:Y})))},ce=function(){return"cookies"},se=function(){return"cakes"},me=function(){return"weddings"},pe=function(){return"contact-us"},de=Object(c.a)(),ge=Object(c.a)({palette:{primary:{main:"#B4B4DA",light:"#e6e6ff",dark:"#8585c9"},secondary:{main:"#ffffff",light:"#ffffff",dark:"#ffffff"},logo:{main:"#e8e9eb"}},typography:{fontFamily:"NeutraText"},breakpoints:{values:{xs:300,sm:600,md:900,lg:1280,xl:1920}},overrides:{MuiTypography:{h4:Object(l.a)({},de.breakpoints.down("md"),{fontSize:"1.5rem"}),h3:Object(l.a)({},de.breakpoints.down("md"),{fontSize:"2.2rem"})},MuiAppBar:{root:{boxShadow:"0px"}}}});a(94);r.a.render(o.a.createElement(E.a,{basename:"/philosophiebakery"},o.a.createElement((function(){return o.a.createElement("div",{style:{height:"100%"}},o.a.createElement(s.a,{theme:ge},o.a.createElement(B,null),o.a.createElement(m.a,null),o.a.createElement(p.a,{bgcolor:"secondary.light",height:"100%",overflow:"visible"},o.a.createElement(y.c,null,o.a.createElement(y.a,{path:"/cookies"},o.a.createElement(ce,null)),o.a.createElement(y.a,{path:"/cakes"},o.a.createElement(se,null)),o.a.createElement(y.a,{path:"/weddings"},o.a.createElement(me,null)),o.a.createElement(y.a,{path:"/contact-us"},o.a.createElement(pe,null)),o.a.createElement(y.a,{path:"/"},o.a.createElement(le,null))))))}),null)),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.fc732c08.chunk.js.map