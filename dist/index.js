"use strict";var A=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var k=A(function(sr,j){
var L=require('@stdlib/math-base-special-gamma-lanczos-sum-expg-scaled/dist'),O=require('@stdlib/math-base-special-expm1/dist'),c=require('@stdlib/math-base-special-log1p/dist'),R=require('@stdlib/math-base-special-sqrt/dist'),g=require('@stdlib/math-base-special-abs/dist'),q=require('@stdlib/math-base-special-exp/dist'),l=require('@stdlib/math-base-special-pow/dist'),Q=require('@stdlib/math-base-special-max/dist'),X=require('@stdlib/math-base-special-min/dist'),f=require('@stdlib/math-base-special-ln/dist'),o=require('@stdlib/constants-float64-max-ln/dist'),D=require('@stdlib/constants-float64-min-ln/dist'),M=require('@stdlib/constants-float64-gamma-lanczos-g/dist'),U=require('@stdlib/constants-float64-e/dist');function V(r,e,a,n,d){var i,E,F,m,I,N,v,t,u,p,h,w,G,s;if(!d)return l(a,r)*l(n,e);if(G=r+e,m=r+M-.5,I=e+M-.5,N=G+M-.5,i=L(G),i/=L(r)*L(e),i*=R(I/U),i*=R(m/N),v=(a*e-n*m)/m,t=(n*r-a*I)/I,X(g(v),g(t))<.2)if(v*t>0||X(r,e)<1)g(v)<.1?i*=q(r*c(v)):i*=l(a*N/m,r),g(t)<.1?i*=q(e*c(t)):i*=l(n*N/I,e);else if(Q(g(v),g(t))<.5)E=r<e,F=e/r,E&&F*t<.1||!E&&v/F>.1?(u=O(F*c(t)),u=v+u+u*v,u=r*c(u),i*=q(u)):(u=O(c(v)/F),u=t+u+u*t,u=e*c(u),i*=q(u));else if(g(v)<g(t))if(s=r*c(v)+e*f(n*N/I),s<=D||s>=o){if(s+=f(i),s>=o)return NaN;i=q(s)}else i*=q(s);else if(s=e*c(t)+r*f(a*N/m),s<=D||s>=o){if(s+=f(i),s>=o)return NaN;i=q(s)}else i*=q(s);else if(h=a*N/m,w=n*N/I,v=r*f(h),t=e*f(w),v>=o||v<=D||t>=o||t<=D)if(r<e)if(p=l(w,e/r),u=r*(f(h)+f(p)),u<o&&u>D)i*=l(p*h,r);else{if(t+=v+f(i),t>=o)return NaN;i=q(t)}else if(p=l(h,r/e),u=(f(p)+f(w))*e,u<o&&u>D)i*=l(p*w,e);else{if(t+=v+f(i),t>=o)return NaN;i=q(t)}else i*=l(h,r)*l(w,e);return i}j.exports=V
});var P=A(function(fr,y){
var W=k();function Y(r,e,a){var n,d;return r===1?0:(n=W(e,a,r,1-r,!0),d=(1-r)*r,n/=d,n)}y.exports=Y
});var C=A(function(qr,B){
var S=require('@stdlib/math-base-assert-is-nan/dist'),Z=require('@stdlib/math-base-assert-is-nonnegative-integer/dist'),T=require('@stdlib/math-base-special-ln/dist'),$=require('@stdlib/constants-float64-ninf/dist'),x=P();function b(r,e,a){return S(r)||S(e)||S(a)||e<=0||a<=0||a>1?NaN:!Z(r)||a===0?$:T(a)-T(e+r)+T(x(a,e,r+1))}B.exports=b
});var J=A(function(lr,H){
var rr=require('@stdlib/math-base-assert-is-nonnegative-integer/dist'),er=require('@stdlib/utils-constant-function/dist'),_=require('@stdlib/math-base-assert-is-nan/dist'),z=require('@stdlib/math-base-special-ln/dist'),ir=require('@stdlib/constants-float64-ninf/dist'),tr=P();function ur(r,e){if(_(r)||_(e)||r<=0||e<=0||e>1)return er(NaN);return a;function a(n){return _(n)?NaN:rr(n)?z(e)-z(r+n)+z(tr(e,r,n+1)):ir}}H.exports=ur
});var ar=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),K=C(),vr=J();ar(K,"factory",vr);module.exports=K;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map