import{S as ce,i as ue,s as fe,l as d,a as q,r as ie,m as p,n as T,h as u,c as G,u as se,p as o,F as ge,T as _e,b as J,G as i,v as Te,E as ae,H as Ie,U as Ve,V as De,Q as Pe,f as $,t as P,d as ee,I as Se,w as K,x as W,y as X,B as Y,g as te}from"../chunks/index-02a6647b.js";import{d as ve,c as be}from"../chunks/helpers-e147ed77.js";import{a as Le}from"../chunks/store-a1d7f94c.js";import"../chunks/index-efb87244.js";const ze=!1;function Be(n){let t,a,e,r,l,c,f,s,m,_=ve(n[0].data)+"",E,v,S,N=n[0].titolo+"",U,L,C=n[0].introduzione+"",I,z,B,H;return{c(){t=d("div"),a=d("a"),e=d("img"),f=q(),s=d("div"),m=d("div"),E=ie(_),v=q(),S=d("h2"),U=q(),L=d("p"),I=q(),z=d("a"),B=ie("Leggi \u2192"),this.h()},l(V){t=p(V,"DIV",{class:!0});var b=T(t);a=p(b,"A",{href:!0});var Q=T(a);e=p(Q,"IMG",{class:!0,src:!0,alt:!0,width:!0,height:!0}),Q.forEach(u),f=G(b),s=p(b,"DIV",{class:!0});var D=T(s);m=p(D,"DIV",{class:!0});var j=T(m);E=se(j,_),j.forEach(u),v=G(D),S=p(D,"H2",{class:!0});var x=T(S);x.forEach(u),U=G(D),L=p(D,"P",{class:!0});var F=T(L);F.forEach(u),I=G(D),z=p(D,"A",{class:!0,href:!0});var Z=T(z);B=se(Z,"Leggi \u2192"),Z.forEach(u),D.forEach(u),b.forEach(u),this.h()},h(){o(e,"class","card-img-top img-fluid"),ge(e.src,r=be(n[0].cover))||o(e,"src",r),o(e,"alt",l=n[0].titolo),o(e,"width","850"),o(e,"height","350"),o(a,"href",c=n[0].path),o(m,"class","small text-muted"),o(S,"class","card-title text-truncate fw-bold"),_e(S,"h4",!n[0].featured),o(L,"class","card-text text-truncate text-truncate-2 intro svelte-a3bqa0"),o(z,"class","btn btn-primary fw-bolder"),o(z,"href",H=n[0].path),o(s,"class","card-body"),o(t,"class","card mb-4")},m(V,b){J(V,t,b),i(t,a),i(a,e),i(t,f),i(t,s),i(s,m),i(m,E),i(s,v),i(s,S),S.innerHTML=N,i(s,U),i(s,L),L.innerHTML=C,i(s,I),i(s,z),i(z,B)},p(V,[b]){b&1&&!ge(e.src,r=be(V[0].cover))&&o(e,"src",r),b&1&&l!==(l=V[0].titolo)&&o(e,"alt",l),b&1&&c!==(c=V[0].path)&&o(a,"href",c),b&1&&_!==(_=ve(V[0].data)+"")&&Te(E,_),b&1&&N!==(N=V[0].titolo+"")&&(S.innerHTML=N),b&1&&_e(S,"h4",!V[0].featured),b&1&&C!==(C=V[0].introduzione+"")&&(L.innerHTML=C),b&1&&H!==(H=V[0].path)&&o(z,"href",H)},i:ae,o:ae,d(V){V&&u(t)}}}function He(n,t,a){let e,{metadata:r}=t;return n.$$set=l=>{"metadata"in l&&a(1,r=l.metadata)},n.$$.update=()=>{n.$$.dirty&2&&a(0,e={...r})},[e,r]}class ne extends ce{constructor(t){super(),ue(this,t,He,Be,fe,{metadata:1})}}function $e(n,t,a){const e=n.slice();return e[9]=t[a],e[11]=a,e}function Ee(n){let t,a,e=n[11]+1+"",r,l,c,f,s;function m(){return n[5](n[11])}return{c(){t=d("li"),a=d("span"),r=ie(e),l=q(),this.h()},l(_){t=p(_,"LI",{class:!0});var E=T(t);a=p(E,"SPAN",{class:!0});var v=T(a);r=se(v,e),v.forEach(u),l=G(E),E.forEach(u),this.h()},h(){o(a,"class","page-link"),o(t,"class",c="page-item "+(n[0]==n[11]+1?"active":""))},m(_,E){J(_,t,E),i(t,a),i(a,r),i(t,l),f||(s=De(a,"click",m),f=!0)},p(_,E){n=_,E&1&&c!==(c="page-item "+(n[0]==n[11]+1?"active":""))&&o(t,"class",c)},d(_){_&&u(t),f=!1,s()}}}function qe(n){let t,a,e,r,l=n[1],c=[];for(let f=0;f<l.length;f+=1)c[f]=Ee($e(n,l,f));return{c(){t=d("nav"),a=d("hr"),e=q(),r=d("ul");for(let f=0;f<c.length;f+=1)c[f].c();this.h()},l(f){t=p(f,"NAV",{"aria-label":!0});var s=T(t);a=p(s,"HR",{class:!0}),e=G(s),r=p(s,"UL",{class:!0});var m=T(r);for(let _=0;_<c.length;_+=1)c[_].l(m);m.forEach(u),s.forEach(u),this.h()},h(){o(a,"class","my-0"),o(r,"class","pagination justify-content-center my-4"),o(t,"aria-label","Pagination")},m(f,s){J(f,t,s),i(t,a),i(t,e),i(t,r);for(let m=0;m<c.length;m+=1)c[m].m(r,null)},p(f,[s]){if(s&5){l=f[1];let m;for(m=0;m<l.length;m+=1){const _=$e(f,l,m);c[m]?c[m].p(_,s):(c[m]=Ee(_),c[m].c(),c[m].m(r,null))}for(;m<c.length;m+=1)c[m].d(1);c.length=l.length}},i:ae,o:ae,d(f){f&&u(t),Ie(c,f)}}}function Ge(n,t,a){let{posts:e}=t,{page_size:r}=t;const l=Ve();let c=e.length,f=Math.ceil(c/r),s=[...Array(f).keys()],m=1;function _(v){a(0,m=v),l("cambioPagina",{idx_start:(v-1)*r,idx_end:(v-1)*r+r-1})}const E=v=>_(v+1);return n.$$set=v=>{"posts"in v&&a(3,e=v.posts),"page_size"in v&&a(4,r=v.page_size)},[m,s,_,e,r,E]}class Ne extends ce{constructor(t){super(),ue(this,t,Ge,qe,fe,{posts:3,page_size:4})}}function Re(n){let t,a,e,r;return e=new ne({props:{metadata:n[2][0].metadata}}),{c(){t=d("div"),a=d("div"),K(e.$$.fragment),this.h()},l(l){t=p(l,"DIV",{class:!0});var c=T(t);a=p(c,"DIV",{class:!0});var f=T(a);W(e.$$.fragment,f),f.forEach(u),c.forEach(u),this.h()},h(){o(a,"class","col-lg-12"),o(t,"class","row")},m(l,c){J(l,t,c),i(t,a),X(e,a,null),r=!0},p:ae,i(l){r||($(e.$$.fragment,l),r=!0)},o(l){P(e.$$.fragment,l),r=!1},d(l){l&&u(t),Y(e)}}}function we(n){let t,a;return t=new ne({props:{metadata:n[0][n[1]].metadata}}),{c(){K(t.$$.fragment)},l(e){W(t.$$.fragment,e)},m(e,r){X(t,e,r),a=!0},p(e,r){const l={};r&3&&(l.metadata=e[0][e[1]].metadata),t.$set(l)},i(e){a||($(t.$$.fragment,e),a=!0)},o(e){P(t.$$.fragment,e),a=!1},d(e){Y(t,e)}}}function Me(n){let t,a;return t=new ne({props:{metadata:n[0][n[1]+1].metadata}}),{c(){K(t.$$.fragment)},l(e){W(t.$$.fragment,e)},m(e,r){X(t,e,r),a=!0},p(e,r){const l={};r&3&&(l.metadata=e[0][e[1]+1].metadata),t.$set(l)},i(e){a||($(t.$$.fragment,e),a=!0)},o(e){P(t.$$.fragment,e),a=!1},d(e){Y(t,e)}}}function Ae(n){let t,a;return t=new ne({props:{metadata:n[0][n[1]+2].metadata}}),{c(){K(t.$$.fragment)},l(e){W(t.$$.fragment,e)},m(e,r){X(t,e,r),a=!0},p(e,r){const l={};r&3&&(l.metadata=e[0][e[1]+2].metadata),t.$set(l)},i(e){a||($(t.$$.fragment,e),a=!0)},o(e){P(t.$$.fragment,e),a=!1},d(e){Y(t,e)}}}function ke(n){let t,a;return t=new ne({props:{metadata:n[0][n[1]+3].metadata}}),{c(){K(t.$$.fragment)},l(e){W(t.$$.fragment,e)},m(e,r){X(t,e,r),a=!0},p(e,r){const l={};r&3&&(l.metadata=e[0][e[1]+3].metadata),t.$set(l)},i(e){a||($(t.$$.fragment,e),a=!0)},o(e){P(t.$$.fragment,e),a=!1},d(e){Y(t,e)}}}function ye(n){let t,a;return t=new Ne({props:{page_size:je,posts:n[0]}}),t.$on("cambioPagina",n[3]),{c(){K(t.$$.fragment)},l(e){W(t.$$.fragment,e)},m(e,r){X(t,e,r),a=!0},p(e,r){const l={};r&1&&(l.posts=e[0]),t.$set(l)},i(e){a||($(t.$$.fragment,e),a=!0)},o(e){P(t.$$.fragment,e),a=!1},d(e){Y(t,e)}}}function Ue(n){let t,a,e,r,l,c,f,s,m,_,E,v,S,N,U,L,C,I,z,B,H,V,b,Q,D,j,x,F,Z,re,R=n[2][0]&&Re(n),w=n[0][n[1]]&&we(n),M=n[0][n[1]+1]&&Me(n),A=n[0][n[1]+2]&&Ae(n),k=n[0][n[1]+3]&&ke(n),y=n[0].length>4&&ye(n);return{c(){t=d("meta"),a=d("meta"),e=d("meta"),r=d("meta"),l=d("meta"),c=d("meta"),f=d("meta"),s=d("meta"),m=d("meta"),_=d("meta"),E=d("meta"),v=d("meta"),S=d("meta"),N=d("meta"),U=d("meta"),L=d("meta"),C=q(),I=d("div"),R&&R.c(),z=q(),B=d("div"),H=d("div"),w&&w.c(),V=q(),b=d("div"),M&&M.c(),Q=q(),D=d("div"),j=d("div"),A&&A.c(),x=q(),F=d("div"),k&&k.c(),Z=q(),y&&y.c(),this.h()},l(h){const g=Pe('[data-svelte="svelte-bswakg"]',document.head);t=p(g,"META",{name:!0,content:!0}),a=p(g,"META",{property:!0,content:!0}),e=p(g,"META",{property:!0,content:!0}),r=p(g,"META",{property:!0,content:!0}),l=p(g,"META",{property:!0,content:!0}),c=p(g,"META",{property:!0,content:!0}),f=p(g,"META",{property:!0,content:!0}),s=p(g,"META",{property:!0,content:!0}),m=p(g,"META",{property:!0,content:!0}),_=p(g,"META",{property:!0,content:!0}),E=p(g,"META",{name:!0,content:!0}),v=p(g,"META",{name:!0,content:!0}),S=p(g,"META",{name:!0,content:!0}),N=p(g,"META",{property:!0,content:!0}),U=p(g,"META",{property:!0,content:!0}),L=p(g,"META",{name:!0,content:!0}),g.forEach(u),C=G(h),I=p(h,"DIV",{class:!0});var O=T(I);R&&R.l(O),z=G(O),B=p(O,"DIV",{class:!0});var oe=T(B);H=p(oe,"DIV",{class:!0});var me=T(H);w&&w.l(me),me.forEach(u),V=G(oe),b=p(oe,"DIV",{class:!0});var de=T(b);M&&M.l(de),de.forEach(u),oe.forEach(u),Q=G(O),D=p(O,"DIV",{class:!0});var le=T(D);j=p(le,"DIV",{class:!0});var pe=T(j);A&&A.l(pe),pe.forEach(u),x=G(le),F=p(le,"DIV",{class:!0});var he=T(F);k&&k.l(he),he.forEach(u),le.forEach(u),Z=G(O),y&&y.l(O),O.forEach(u),this.h()},h(){document.title="Blog ProfmMancusoa",o(t,"name","description"),o(t,"content","Smanettando si impara. Blog di tecnologie informatiche per studenti e giovani informatici"),o(a,"property","og:type"),o(a,"content","website"),o(e,"property","og:title"),o(e,"content","profmancusoa"),o(r,"property","og:description"),o(r,"content","Smanettando si impara. Blog di tecnologie informatiche per studenti e giovani informatici"),o(l,"property","og:url"),o(l,"content","https://profmancusoa.github.io/"),o(c,"property","og:image"),o(c,"content","https://profmancusoa.github.io/img/blog_banner.png"),o(f,"property","og:image:secure_url"),o(f,"content","https://profmancusoa.github.io/img/blog_banner.png"),o(s,"property","og:image:width"),o(s,"content","1280"),o(m,"property","og:image:height"),o(m,"content","640"),o(_,"property","og:image:alt"),o(_,"content","Smanettando si impara. profmancusoa Blog"),o(E,"name","twitter:card"),o(E,"content","Smanettando si impara. Blog di tecnologie informatiche per studenti e giovani informatici"),o(v,"name","twitter:title"),o(v,"content","profmancusoa"),o(S,"name","twitter:description"),o(S,"content","Smanettando si impara. Blog di tecnologie informatiche per studenti e giovani informatici"),o(N,"property","twitter:domain"),o(N,"content","profmancusoa.github.io"),o(U,"property","twitter:url"),o(U,"content","https://profmancusoa.github.io/"),o(L,"name","twitter:image"),o(L,"content","https://profmancusoa.github.io/img/blog_banner.png"),o(H,"class","col-lg-6"),o(b,"class","col-lg-6"),o(B,"class","row"),o(j,"class","col-lg-6"),o(F,"class","col-lg-6"),o(D,"class","row"),o(I,"class","col-lg-12")},m(h,g){i(document.head,t),i(document.head,a),i(document.head,e),i(document.head,r),i(document.head,l),i(document.head,c),i(document.head,f),i(document.head,s),i(document.head,m),i(document.head,_),i(document.head,E),i(document.head,v),i(document.head,S),i(document.head,N),i(document.head,U),i(document.head,L),J(h,C,g),J(h,I,g),R&&R.m(I,null),i(I,z),i(I,B),i(B,H),w&&w.m(H,null),i(B,V),i(B,b),M&&M.m(b,null),i(I,Q),i(I,D),i(D,j),A&&A.m(j,null),i(D,x),i(D,F),k&&k.m(F,null),i(I,Z),y&&y.m(I,null),re=!0},p(h,[g]){h[2][0]&&R.p(h,g),h[0][h[1]]?w?(w.p(h,g),g&3&&$(w,1)):(w=we(h),w.c(),$(w,1),w.m(H,null)):w&&(te(),P(w,1,1,()=>{w=null}),ee()),h[0][h[1]+1]?M?(M.p(h,g),g&3&&$(M,1)):(M=Me(h),M.c(),$(M,1),M.m(b,null)):M&&(te(),P(M,1,1,()=>{M=null}),ee()),h[0][h[1]+2]?A?(A.p(h,g),g&3&&$(A,1)):(A=Ae(h),A.c(),$(A,1),A.m(j,null)):A&&(te(),P(A,1,1,()=>{A=null}),ee()),h[0][h[1]+3]?k?(k.p(h,g),g&3&&$(k,1)):(k=ke(h),k.c(),$(k,1),k.m(F,null)):k&&(te(),P(k,1,1,()=>{k=null}),ee()),h[0].length>4?y?(y.p(h,g),g&1&&$(y,1)):(y=ye(h),y.c(),$(y,1),y.m(I,null)):y&&(te(),P(y,1,1,()=>{y=null}),ee())},i(h){re||($(R),$(w),$(M),$(A),$(k),$(y),re=!0)},o(h){P(R),P(w),P(M),P(A),P(k),P(y),re=!1},d(h){u(t),u(a),u(e),u(r),u(l),u(c),u(f),u(s),u(m),u(_),u(E),u(v),u(S),u(N),u(U),u(L),h&&u(C),h&&u(I),R&&R.d(),w&&w.d(),M&&M.d(),A&&A.d(),k&&k.d(),y&&y.d()}}}const je=4;function Ce(n,t,a){let e;Se(n,Le,s=>a(4,e=s));let r=[...e],l=0,c=r.filter(s=>s.metadata.featured==!0&&s.metadata.pubblicato==!0);if(c.length>0){let s=r.indexOf(c[0]);r.splice(s,1)}r=r.filter(s=>s.metadata.pubblicato==!0||ze);function f(s){a(1,l=s.detail.idx_start)}return[r,l,c,f]}class Je extends ce{constructor(t){super(),ue(this,t,Ce,Ue,fe,{})}}export{Je as default};
