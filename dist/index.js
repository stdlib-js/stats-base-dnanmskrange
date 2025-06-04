"use strict";var q=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var m=q(function(G,p){
var b=require('@stdlib/math-base-assert-is-nan/dist');function E(r,a,i,o,u,d,_){var f,t,v,s,e,n;if(r<=0)return NaN;for(v=o,s=_,n=0;n<r&&(e=a[v],!(e===e&&u[s]===0));n++)v+=i,s+=d;if(n===r)return NaN;for(t=e,f=t,n+=1,n;n<r;n++)v+=i,s+=d,!u[s]&&(e=a[v],!b(e)&&(e<t?t=e:e>f&&(f=e)));return f-t}p.exports=E
});var g=q(function(H,y){
var x=require('@stdlib/strided-base-stride2offset/dist'),O=m();function h(r,a,i,o,u){return O(r,a,i,x(r,i),o,u,x(r,u))}y.exports=h
});var k=q(function(I,l){
var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=g(),z=m();w(j,"ndarray",z);l.exports=j
});var A=require("path").join,B=require('@stdlib/utils-try-require/dist'),C=require('@stdlib/assert-is-error/dist'),D=k(),c,R=B(A(__dirname,"./native.js"));C(R)?c=D:c=R;module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
