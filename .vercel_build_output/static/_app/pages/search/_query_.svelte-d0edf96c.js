import{S as C,i as U,s as j,k as E,e as b,t as N,N as T,d as u,m as M,c as g,a as $,h as O,b as S,g as d,F as P,o as v,p as V,q as m,T as F,U as G,n as A,V as H,W as x,G as k,w as K,x as W,y as Y,B as z,l as B,R as J}from"../../chunks/vendor-a81b054c.js";import{M as L,a as Q}from"../../chunks/config-28d25f79.js";import{M as X}from"../../chunks/MovieCard-310f2661.js";function D(i,a,r){const t=i.slice();return t[1]=a[r],t}function Z(i){let a,r;return{c(){a=b("p"),r=N("No movies found")},l(t){a=g(t,"P",{});var e=$(a);r=O(e,"No movies found"),e.forEach(u)},m(t,e){d(t,a,e),P(a,r)},p:k,i:k,o:k,d(t){t&&u(a)}}}function ee(i){let a,r,t=i[0],e=[];for(let s=0;s<t.length;s+=1)e[s]=I(D(i,t,s));const o=s=>v(e[s],1,1,()=>{e[s]=null});return{c(){for(let s=0;s<e.length;s+=1)e[s].c();a=B()},l(s){for(let l=0;l<e.length;l+=1)e[l].l(s);a=B()},m(s,l){for(let n=0;n<e.length;n+=1)e[n].m(s,l);d(s,a,l),r=!0},p(s,l){if(l&1){t=s[0];let n;for(n=0;n<t.length;n+=1){const f=D(s,t,n);e[n]?(e[n].p(f,l),m(e[n],1)):(e[n]=I(f),e[n].c(),m(e[n],1),e[n].m(a.parentNode,a))}for(A(),n=t.length;n<e.length;n+=1)o(n);V()}},i(s){if(!r){for(let l=0;l<t.length;l+=1)m(e[l]);r=!0}},o(s){e=e.filter(Boolean);for(let l=0;l<e.length;l+=1)v(e[l]);r=!1},d(s){J(e,s),s&&u(a)}}}function I(i){let a,r;return a=new X({props:{movie:i[1]}}),{c(){K(a.$$.fragment)},l(t){W(a.$$.fragment,t)},m(t,e){Y(a,t,e),r=!0},p(t,e){const o={};e&1&&(o.movie=t[1]),a.$set(o)},i(t){r||(m(a.$$.fragment,t),r=!0)},o(t){v(a.$$.fragment,t),r=!1},d(t){z(a,t)}}}function te(i){let a,r,t,e,o,s,l,n,f,y;const R=[ee,Z],h=[];function w(c,_){return c[0].length>0?0:1}return s=w(i),l=h[s]=R[s](i),{c(){a=E(),r=b("h3"),t=N("Search Results"),e=E(),o=b("div"),l.c(),this.h()},l(c){T('[data-svelte="svelte-nv92hm"]',document.head).forEach(u),a=M(c),r=g(c,"H3",{class:!0});var p=$(r);t=O(p,"Search Results"),p.forEach(u),e=M(c),o=g(c,"DIV",{class:!0});var q=$(o);l.l(q),q.forEach(u),this.h()},h(){document.title="Moviedb | Search",S(r,"class","svelte-h0s4uw"),S(o,"class","list-movies svelte-h0s4uw")},m(c,_){d(c,a,_),d(c,r,_),P(r,t),d(c,e,_),d(c,o,_),h[s].m(o,null),y=!0},p(c,[_]){let p=s;s=w(c),s===p?h[s].p(c,_):(A(),v(h[p],1,1,()=>{h[p]=null}),V(),l=h[s],l?l.p(c,_):(l=h[s]=R[s](c),l.c()),m(l,1),l.m(o,null))},i(c){y||(m(l),F(()=>{f&&f.end(1),n=H(o,x,{y:50,duration:300,delay:300}),n.start()}),y=!0)},o(c){v(l),n&&n.invalidate(),f=G(o,x,{y:50,duration:300}),y=!1},d(c){c&&u(a),c&&u(r),c&&u(e),c&&u(o),h[s].d(),c&&f&&f.end()}}}async function oe({fetch:i,params:a}){const r=a.query,t=await i(`${L}/3/search/movie?query=${r}&api_key=${Q}&language=en-US&page=1`);if(t.ok){const e=await t.json();return{status:t.status,props:{searchResult:e.results.map(o=>({id:o.id,title:o.title,poster:o.poster_path?`/w500${o.poster_path}`:null,backdropPath:e.backdrop_path?`/${e.backdrop_path}`:null,overview:o.overview,releaseDate:o.release_date,voteAverage:o.vote_average,voteCount:o.vote_count,status:o.status}))}}}else return{status:t.status,props:{searchResult:[]}}}function se(i,a,r){let{searchResult:t=[]}=a;return i.$$set=e=>{"searchResult"in e&&r(0,t=e.searchResult)},[t]}class ne extends C{constructor(a){super();U(this,a,se,te,j,{searchResult:0})}}export{ne as default,oe as load};
