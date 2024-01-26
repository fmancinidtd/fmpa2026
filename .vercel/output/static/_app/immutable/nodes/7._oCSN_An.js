import{s as Oe,a as ge,r as Ae,o as Le}from"../chunks/scheduler.AMfUPaqd.js";import{S as ye,i as He,e as d,s as z,l as Re,c as h,a as D,m as oe,f as q,n as ze,d as f,o as I,z as de,g as A,h as c,p as qe,q as pe,r as be,u as Ge,w as je,x as Fe,y as he,t as G,b as j,j as $,E as Ee}from"../chunks/index.sOBxWm11.js";import{e as ee}from"../chunks/each.6w4Ej4nR.js";import{C as Ke}from"../chunks/cite.ugS6krW8.js";import{e as De}from"../chunks/shared.sqUOs3Mb.js";import{m as ue}from"../chunks/moment-with-locales.Tlx9Vr_q.js";function Ie(l,e,t){const a=l.slice();return a[14]=e[t],a}function Me(l,e,t){const a=l.slice();return a[17]=e[t],a}function Pe(l,e,t){const a=l.slice();return a[17]=e[t],a}function Ye(l,e,t){const a=l.slice();return a[17]=e[t],a}function ke(l,e,t){const a=l.slice();return a[24]=e[t],a}function Te(l){let e,t=l[24].Name+"",a,s;return{c(){e=d("option"),a=G(t),this.h()},l(i){e=h(i,"OPTION",{});var _=D(e);a=j(_,t),_.forEach(f),this.h()},h(){e.__value=s=l[24].Id,de(e,e.__value)},m(i,_){A(i,e,_),c(e,a)},p(i,_){_&1&&t!==(t=i[24].Name+"")&&$(a,t),_&1&&s!==(s=i[24].Id)&&(e.__value=s,de(e,e.__value))},d(i){i&&f(e)}}}function Ce(l){let e,t=l[17]+"",a,s;return{c(){e=d("option"),a=G(t),this.h()},l(i){e=h(i,"OPTION",{});var _=D(e);a=j(_,t),_.forEach(f),this.h()},h(){e.__value=s=l[17],de(e,e.__value)},m(i,_){A(i,e,_),c(e,a)},p(i,_){_&8&&t!==(t=i[17]+"")&&$(a,t),_&8&&s!==(s=i[17])&&(e.__value=s,de(e,e.__value))},d(i){i&&f(e)}}}function Ve(l){let e,t,a=ee(l[4]),s=[];for(let i=0;i<a.length;i+=1)s[i]=Ne(Ie(l,a,i));return{c(){e=d("div"),t=d("div");for(let i=0;i<s.length;i+=1)s[i].c();this.h()},l(i){e=h(i,"DIV",{class:!0});var _=D(e);t=h(_,"DIV",{class:!0});var r=D(t);for(let v=0;v<s.length;v+=1)s[v].l(r);r.forEach(f),_.forEach(f),this.h()},h(){I(t,"class","row"),I(e,"class","it-timeline-wrapper")},m(i,_){A(i,e,_),c(e,t);for(let r=0;r<s.length;r+=1)s[r]&&s[r].m(t,null)},p(i,_){if(_&52){a=ee(i[4]);let r;for(r=0;r<a.length;r+=1){const v=Ie(i,a,r);s[r]?s[r].p(v,_):(s[r]=Ne(v),s[r].c(),s[r].m(t,null))}for(;r<s.length;r+=1)s[r].d(1);s.length=a.length}},d(i){i&&f(e),he(s,i)}}}function we(l){let e,t,a=l[17].beneficiario+"",s,i;return{c(){e=d("div"),t=d("span"),s=G(a),i=z(),this.h()},l(_){e=h(_,"DIV",{class:!0});var r=D(e);t=h(r,"SPAN",{class:!0});var v=D(t);s=j(v,a),v.forEach(f),i=q(r),r.forEach(f),this.h()},h(){I(t,"class","chip-label"),I(e,"class","chip chip-simple")},m(_,r){A(_,e,r),c(e,t),c(t,s),c(e,i)},p(_,r){r&16&&a!==(a=_[17].beneficiario+"")&&$(s,a)},d(_){_&&f(e)}}}function Se(l){let e,t,a=l[5].filter(_)[0].platea+"",s,i;function _(...r){return l[11](l[14],...r)}return{c(){e=G("Platea: "),t=d("strong"),s=G(a),i=d("br")},l(r){e=j(r,"Platea: "),t=h(r,"STRONG",{});var v=D(t);s=j(v,a),v.forEach(f),i=h(r,"BR",{})},m(r,v){A(r,e,v),A(r,t,v),c(t,s),A(r,i,v)},p(r,v){l=r,v&48&&a!==(a=l[5].filter(_)[0].platea+"")&&$(s,a)},d(r){r&&(f(e),f(t),f(i))}}}function Be(l){let e,t,a,s=l[17].beneficiario+"",i,_,r,v,M,k=l[17].ok+"",V,N,g=l[2]!=="Tutti i beneficiari"&&Se(l);return{c(){e=d("hr"),t=G(`\r
                                                Beneficiario: `),a=d("strong"),i=G(s),_=d("br"),r=z(),g&&g.c(),v=G(`\r
                                                Candidature OK: `),M=d("strong"),V=G(k),N=d("br")},l(p){e=h(p,"HR",{}),t=j(p,`\r
                                                Beneficiario: `),a=h(p,"STRONG",{});var Y=D(a);i=j(Y,s),Y.forEach(f),_=h(p,"BR",{}),r=q(p),g&&g.l(p),v=j(p,`\r
                                                Candidature OK: `),M=h(p,"STRONG",{});var b=D(M);V=j(b,k),b.forEach(f),N=h(p,"BR",{})},m(p,Y){A(p,e,Y),A(p,t,Y),A(p,a,Y),c(a,i),A(p,_,Y),A(p,r,Y),g&&g.m(p,Y),A(p,v,Y),A(p,M,Y),c(M,V),A(p,N,Y)},p(p,Y){Y&16&&s!==(s=p[17].beneficiario+"")&&$(i,s),p[2]!=="Tutti i beneficiari"?g?g.p(p,Y):(g=Se(p),g.c(),g.m(v.parentNode,v)):g&&(g.d(1),g=null),Y&16&&k!==(k=p[17].ok+"")&&$(V,k)},d(p){p&&(f(e),f(t),f(a),f(_),f(r),f(v),f(M),f(N)),g&&g.d(p)}}}function Ne(l){let e,t,a,s,i='<svg class="icon"><use href="/svg/sprites.svg#it-horn"></use></svg>',_,r,v,M=ue(l[14].outfunds__Start_Date__c,"YYYY-MM-DD").format("MMM YYYY")+"",k,V,N=ue(l[14].outfunds__End_Date__c,"YYYY-MM-DD").format("MMM YYYY")+"",g,p,Y,b,P,E,y,H=l[14].Name+"",le,L,R,ce,Z,x,F,K=De(l[14].Misura_Padre_1__c?l[14].Total_Program_Amount_Padre_1__c:l[14].Misura_Padre_2__c?l[14].Total_Program_Amount_Padre_2__c:l[14].outfunds__Total_Program_Amount__c)+"",ie,re,O,se,Q=ee(l[14].beneficiari),S=[];for(let o=0;o<Q.length;o+=1)S[o]=we(Pe(l,Q,o));let te=ee(l[14].beneficiari),T=[];for(let o=0;o<te.length;o+=1)T[o]=Be(Me(l,te,o));return{c(){e=d("div"),t=d("div"),a=d("div"),s=d("div"),s.innerHTML=i,_=z(),r=d("div"),v=d("span"),k=G(M),V=G(" - "),g=G(N),Y=z(),b=d("div"),P=d("div"),E=d("div"),y=d("h5"),le=G(H),L=z(),R=d("div");for(let o=0;o<S.length;o+=1)S[o].c();ce=z(),Z=d("div"),x=G("Dotazione finanziaria: "),F=d("strong"),ie=G(K),re=z(),O=d("div");for(let o=0;o<T.length;o+=1)T[o].c();se=z(),this.h()},l(o){e=h(o,"DIV",{class:!0});var w=D(e);t=h(w,"DIV",{class:!0});var n=D(t);a=h(n,"DIV",{class:!0});var C=D(a);s=h(C,"DIV",{class:!0,"data-svelte-h":!0}),oe(s)!=="svelte-19okyb3"&&(s.innerHTML=i),_=q(C),r=h(C,"DIV",{class:!0});var u=D(r);v=h(u,"SPAN",{});var B=D(v);k=j(B,M),V=j(B," - "),g=j(B,N),B.forEach(f),u.forEach(f),C.forEach(f),Y=q(n),b=h(n,"DIV",{class:!0});var m=D(b);P=h(m,"DIV",{class:!0});var U=D(P);E=h(U,"DIV",{class:!0});var W=D(E);y=h(W,"H5",{class:!0});var X=D(y);le=j(X,H),X.forEach(f),L=q(W),R=h(W,"DIV",{});var fe=D(R);for(let J=0;J<S.length;J+=1)S[J].l(fe);fe.forEach(f),ce=q(W),Z=h(W,"DIV",{});var ae=D(Z);x=j(ae,"Dotazione finanziaria: "),F=h(ae,"STRONG",{});var _e=D(F);ie=j(_e,K),_e.forEach(f),ae.forEach(f),re=q(W),O=h(W,"DIV",{});var ve=D(O);for(let J=0;J<T.length;J+=1)T[J].l(ve);ve.forEach(f),W.forEach(f),U.forEach(f),m.forEach(f),n.forEach(f),se=q(w),w.forEach(f),this.h()},h(){I(s,"class","pin-icon"),I(r,"class","pin-text"),I(a,"class",p="it-pin-wrapper "+(l[14].outfunds__Status__c==="PUBBLICATO"?"it-now":"it-evidence")),I(y,"class","card-title"),I(E,"class","card-body"),I(P,"class","card"),I(b,"class","card-wrapper"),I(t,"class","timeline-element"),I(e,"class","col-12")},m(o,w){A(o,e,w),c(e,t),c(t,a),c(a,s),c(a,_),c(a,r),c(r,v),c(v,k),c(v,V),c(v,g),c(t,Y),c(t,b),c(b,P),c(P,E),c(E,y),c(y,le),c(E,L),c(E,R);for(let n=0;n<S.length;n+=1)S[n]&&S[n].m(R,null);c(E,ce),c(E,Z),c(Z,x),c(Z,F),c(F,ie),c(E,re),c(E,O);for(let n=0;n<T.length;n+=1)T[n]&&T[n].m(O,null);c(e,se)},p(o,w){if(w&16&&M!==(M=ue(o[14].outfunds__Start_Date__c,"YYYY-MM-DD").format("MMM YYYY")+"")&&$(k,M),w&16&&N!==(N=ue(o[14].outfunds__End_Date__c,"YYYY-MM-DD").format("MMM YYYY")+"")&&$(g,N),w&16&&p!==(p="it-pin-wrapper "+(o[14].outfunds__Status__c==="PUBBLICATO"?"it-now":"it-evidence"))&&I(a,"class",p),w&16&&H!==(H=o[14].Name+"")&&$(le,H),w&16){Q=ee(o[14].beneficiari);let n;for(n=0;n<Q.length;n+=1){const C=Pe(o,Q,n);S[n]?S[n].p(C,w):(S[n]=we(C),S[n].c(),S[n].m(R,null))}for(;n<S.length;n+=1)S[n].d(1);S.length=Q.length}if(w&16&&K!==(K=De(o[14].Misura_Padre_1__c?o[14].Total_Program_Amount_Padre_1__c:o[14].Misura_Padre_2__c?o[14].Total_Program_Amount_Padre_2__c:o[14].outfunds__Total_Program_Amount__c)+"")&&$(ie,K),w&52){te=ee(o[14].beneficiari);let n;for(n=0;n<te.length;n+=1){const C=Me(o,te,n);T[n]?T[n].p(C,w):(T[n]=Be(C),T[n].c(),T[n].m(O,null))}for(;n<T.length;n+=1)T[n].d(1);T.length=te.length}},d(o){o&&f(e),he(S,o),he(T,o)}}}function Ue(l){let e,t,a="Board avvisi",s,i,_,r,v,M,k='<div data-bs-toggle="sticky" data-bs-stackable="true"><nav class="navbar it-navscroll-wrapper navbar-expand-lg it-bottom-navscroll it-right-side" data-bs-navscroll=""><button class="custom-navbar-toggler" type="button" aria-controls="navbarNavProgress" aria-expanded="false" aria-label="Toggle navigation" data-bs-toggle="navbarcollapsible" data-bs-target="#navbarNavProgress"><span class="it-list"></span>1. Riepilogo</button> <div class="progress custom-navbar-progressbar"><div class="progress-bar it-navscroll-progressbar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div></div> <div class="navbar-collapsable" id="navbarNavProgress"><div class="overlay"></div> <button type="button" class="it-back-button btn w-100 text-start"><svg class="icon icon-sm icon-primary align-top"><use href="/svg/sprites.svg#it-chevron-left" xlink:href="/svg/sprites.svg#it-chevron-left"></use></svg> <span>Indietro</span></button> <div class="menu-wrapper"><div class="link-list-wrapper"><h3>sezioni</h3> <div class="progress"><div class="progress-bar it-navscroll-progressbar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div></div> <ul class="link-list"><li class="nav-item"><a class="nav-link active" href="#storiaavvisi"><span>1. Storico degli avvisi</span></a></li></ul></div></div></div></nav></div>',V,N,g,p,Y="Storico degli avvisi",b,P,E,y,H="Misure",le,L,R,ce="Tutte le misure",Z,x,F,K,ie="Beneficiari",re,O,se,Q,S,te;i=new Ke({props:{text:"Se volete conoscere il valore del denaro cercate di farvene prestare.",author:"Benjamin Franklin"}});let T=ee(l[0].misure),o=[];for(let u=0;u<T.length;u+=1)o[u]=Te(ke(l,T,u));let w=ee(l[3]),n=[];for(let u=0;u<w.length;u+=1)n[u]=Ce(Ye(l,w,u));let C=Ve(l);return{c(){e=d("div"),t=d("h1"),t.textContent=a,s=z(),Re(i.$$.fragment),_=z(),r=d("div"),v=d("div"),M=d("div"),M.innerHTML=k,V=z(),N=d("div"),g=d("div"),p=d("h4"),p.textContent=Y,b=z(),P=d("div"),E=d("div"),y=d("label"),y.textContent=H,le=z(),L=d("select"),R=d("option"),R.textContent=ce;for(let u=0;u<o.length;u+=1)o[u].c();Z=z(),x=d("div"),F=d("div"),K=d("label"),K.textContent=ie,re=z(),O=d("select");for(let u=0;u<n.length;u+=1)n[u].c();se=z(),C&&C.c(),this.h()},l(u){e=h(u,"DIV",{class:!0});var B=D(e);t=h(B,"H1",{"data-svelte-h":!0}),oe(t)!=="svelte-1pmmfi2"&&(t.textContent=a),s=q(B),ze(i.$$.fragment,B),B.forEach(f),_=q(u),r=h(u,"DIV",{class:!0});var m=D(r);v=h(m,"DIV",{class:!0});var U=D(v);M=h(U,"DIV",{class:!0,"data-svelte-h":!0}),oe(M)!=="svelte-1o02b5z"&&(M.innerHTML=k),V=q(U),N=h(U,"DIV",{class:!0});var W=D(N);g=h(W,"DIV",{class:!0,id:!0});var X=D(g);p=h(X,"H4",{"data-svelte-h":!0}),oe(p)!=="svelte-r7chok"&&(p.textContent=Y),b=q(X),P=h(X,"DIV",{class:!0});var fe=D(P);E=h(fe,"DIV",{class:!0});var ae=D(E);y=h(ae,"LABEL",{for:!0,"data-svelte-h":!0}),oe(y)!=="svelte-1vpfvao"&&(y.textContent=H),le=q(ae),L=h(ae,"SELECT",{id:!0,name:!0});var _e=D(L);R=h(_e,"OPTION",{"data-svelte-h":!0}),oe(R)!=="svelte-xhsy7s"&&(R.textContent=ce);for(let ne=0;ne<o.length;ne+=1)o[ne].l(_e);_e.forEach(f),ae.forEach(f),fe.forEach(f),Z=q(X),x=h(X,"DIV",{class:!0});var ve=D(x);F=h(ve,"DIV",{class:!0});var J=D(F);K=h(J,"LABEL",{for:!0,"data-svelte-h":!0}),oe(K)!=="svelte-190ohpm"&&(K.textContent=ie),re=q(J),O=h(J,"SELECT",{id:!0,name:!0});var me=D(O);for(let ne=0;ne<n.length;ne+=1)n[ne].l(me);me.forEach(f),J.forEach(f),ve.forEach(f),se=q(X),C&&C.l(X),X.forEach(f),W.forEach(f),U.forEach(f),m.forEach(f),this.h()},h(){I(e,"class","container my-4"),I(M,"class","col-12 col-lg-2"),I(y,"for","filterMisura"),R.__value="",de(R,R.__value),I(L,"id","filterMisura"),I(L,"name","filterMisura"),l[1]===void 0&&ge(()=>l[9].call(L)),I(E,"class","select-wrapper"),I(P,"class","col-12 col-lg-12 my-4"),I(K,"for","selectedBeneficiario"),I(O,"id","selectedBeneficiario"),I(O,"name","selectedBeneficiario"),l[2]===void 0&&ge(()=>l[10].call(O)),I(F,"class","select-wrapper"),I(x,"class","col-12 col-lg-12 my-4"),I(g,"class","it-page-section my-5"),I(g,"id","storiaavvisi"),I(N,"class","col-12 col-lg-10 it-page-sections-container"),I(v,"class","row"),I(r,"class","container")},m(u,B){A(u,e,B),c(e,t),c(e,s),qe(i,e,null),A(u,_,B),A(u,r,B),c(r,v),c(v,M),c(v,V),c(v,N),c(N,g),c(g,p),c(g,b),c(g,P),c(P,E),c(E,y),c(E,le),c(E,L),c(L,R);for(let m=0;m<o.length;m+=1)o[m]&&o[m].m(L,null);pe(L,l[1],!0),c(g,Z),c(g,x),c(x,F),c(F,K),c(F,re),c(F,O);for(let m=0;m<n.length;m+=1)n[m]&&n[m].m(O,null);pe(O,l[2],!0),c(g,se),C&&C.m(g,null),Q=!0,S||(te=[be(L,"change",l[9]),be(O,"change",l[10])],S=!0)},p(u,[B]){if(B&1){T=ee(u[0].misure);let m;for(m=0;m<T.length;m+=1){const U=ke(u,T,m);o[m]?o[m].p(U,B):(o[m]=Te(U),o[m].c(),o[m].m(L,null))}for(;m<o.length;m+=1)o[m].d(1);o.length=T.length}if(B&3&&pe(L,u[1]),B&8){w=ee(u[3]);let m;for(m=0;m<w.length;m+=1){const U=Ye(u,w,m);n[m]?n[m].p(U,B):(n[m]=Ce(U),n[m].c(),n[m].m(O,null))}for(;m<n.length;m+=1)n[m].d(1);n.length=w.length}B&12&&pe(O,u[2]),C?C.p(u,B):(C=Ve(u),C.c(),C.m(g,null))},i(u){Q||(Ge(i.$$.fragment,u),Q=!0)},o(u){je(i.$$.fragment,u),Q=!1},d(u){u&&(f(e),f(_),f(r)),Fe(i),he(o,u),he(n,u),C&&C.d(),S=!1,Ae(te)}}}function Je(l,e,t){let a,s,i,_,r,v;ue.locale("it");let{data:M}=e,k="",V="Tutti i beneficiari";Le(async()=>{await N()});const N=async()=>{var b=document.querySelector(".it-navscroll-wrapper"),P=bootstrap.NavScroll.getOrCreateInstance(b);P.setScrollPadding(function(){var E=document.querySelector(".it-header-wrapper");return E.offsetHeight+10})};function g(){k=Ee(this),t(1,k),t(0,M)}function p(){V=Ee(this),t(2,V),t(3,i),t(8,s),t(6,a),t(0,M),t(1,k)}const Y=(b,P)=>P.id===b.Id;return l.$$set=b=>{"data"in b&&t(0,M=b.data)},l.$$.update=()=>{l.$$.dirty&3&&M.misure.filter(b=>k===""?!0:b.Id===k),l.$$.dirty&3&&t(6,a=M.avvisi.filter(b=>k===""?!0:b.Misura_Padre_1__c&&b.Misura_Padre_1__c===k||b.Misura_Padre_2__c&&b.Misura_Padre_2__c===k||b.outfunds__Parent_Funding_Program__r.Id===k)),l.$$.dirty&64&&t(8,s=()=>{const b=[];return a.forEach(P=>{P.beneficiari.forEach(E=>{b.indexOf(E.beneficiario)===-1&&b.push(E.beneficiario)})}),b}),l.$$.dirty&256&&t(3,i=["Tutti i beneficiari"].concat(s())),l.$$.dirty&76&&t(4,v=a.filter(b=>V===i[0]?!0:b.beneficiari.filter(P=>P.beneficiario===V).length>0)),l.$$.dirty&28&&t(7,_=()=>{const b=[];if(V!==i[0]){let P=0;v.reverse().forEach((E,y)=>{y===0?(b.push({id:E.Id,platea:E.beneficiari.filter(H=>H.beneficiario===V)[0].platea_generale}),P=P+E.beneficiari.filter(H=>H.beneficiario===V)[0].ok):(b.push({id:E.Id,platea:E.beneficiari.filter(H=>H.beneficiario===V)[0].platea_generale-P}),P=P+E.beneficiari.filter(H=>H.beneficiario===V)[0].ok)})}return b}),l.$$.dirty&128&&t(5,r=_())},[M,k,V,i,v,r,a,_,s,g,p,Y]}class et extends ye{constructor(e){super(),He(this,e,Je,Ue,Oe,{data:0})}}export{et as component};
