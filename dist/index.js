"use strict";var q=function(i,u){return function(){return u||i((u={exports:{}}).exports,u),u.exports}};var p=q(function(F,x){
var E=require('@stdlib/math-base-assert-is-nan/dist');function O(i,u,t,c,o){var s,m,a,n,r,e;if(i<=0)return NaN;for(t<0?a=(1-i)*t:a=0,o<0?n=(1-i)*o:n=0,e=0;e<i&&(r=u[a],!(r===r&&c[n]===0));e++)a+=t,n+=o;if(e===i)return NaN;for(m=r,s=m,e+=1,e;e<i;e++)a+=t,n+=o,!c[n]&&(r=u[a],!E(r)&&(r<m?m=r:r>s&&(s=r)));return s-m}x.exports=O
});var y=q(function(G,g){
var d=require('@stdlib/math-base-assert-is-nan/dist');function h(i,u,t,c,o,s,m){var a,n,r,e,v,f;if(i<=0)return NaN;for(r=c,e=m,f=0;f<i&&(v=u[r],!(v===v&&o[e]===0));f++)r+=t,e+=s;if(f===i)return NaN;for(n=v,a=n,f+=1,f;f<i;f++)r+=t,e+=s,!o[e]&&(v=u[r],!d(v)&&(v<n?n=v:v>a&&(a=v)));return a-n}g.exports=h
});var R=q(function(H,b){
var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=p(),w=y();k(j,"ndarray",w);b.exports=j
});var z=require("path").join,A=require('@stdlib/utils-try-require/dist'),B=require('@stdlib/assert-is-error/dist'),C=R(),l,_=A(z(__dirname,"./native.js"));B(_)?l=C:l=_;module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
