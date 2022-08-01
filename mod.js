// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n,t=Object.defineProperty,e=Object.prototype,u=e.toString,i=e.__defineGetter__,f=e.__defineSetter__,o=e.__lookupGetter__,a=e.__lookupSetter__;n=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,n,t){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(o.call(r,n)||a.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),y="get"in t,v="set"in t,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(r,n,t.get),v&&f&&f.call(r,n,t.set),r};var c=n;function l(r){return r!=r}var y=Math.floor;function v(r){return y(r)===r&&r>=0}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var b=Object.prototype.toString;var s=Object.prototype.hasOwnProperty;var w,N="function"==typeof Symbol?Symbol.toStringTag:"";w=p&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,u,i;if(null==r)return b.call(r);t=r[N],i=N,n=null!=(u=r)&&s.call(u,i);try{r[N]=void 0}catch(n){return b.call(r)}return e=b.call(r),n?r[N]=t:delete r[N],e}:function(r){return b.call(r)};var A=w,_="function"==typeof Uint32Array;var m="function"==typeof Uint32Array?Uint32Array:null;var d,h="function"==typeof Uint32Array?Uint32Array:void 0;d=function(){var r,n,t;if("function"!=typeof m)return!1;try{n=new m(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(_&&t instanceof Uint32Array||"[object Uint32Array]"===A(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?h:function(){throw new Error("not implemented")};var U=d,g="function"==typeof Float64Array;var j="function"==typeof Float64Array?Float64Array:null;var I,O="function"==typeof Float64Array?Float64Array:void 0;I=function(){var r,n,t;if("function"!=typeof j)return!1;try{n=new j([1,3.14,-3.14,NaN]),t=n,r=(g&&t instanceof Float64Array||"[object Float64Array]"===A(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?O:function(){throw new Error("not implemented")};var S=I,E="function"==typeof Uint8Array;var F="function"==typeof Uint8Array?Uint8Array:null;var H,T="function"==typeof Uint8Array?Uint8Array:void 0;H=function(){var r,n,t;if("function"!=typeof F)return!1;try{n=new F(n=[1,3.14,-3.14,256,257]),t=n,r=(E&&t instanceof Uint8Array||"[object Uint8Array]"===A(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?T:function(){throw new Error("not implemented")};var G=H,P="function"==typeof Uint16Array;var L="function"==typeof Uint16Array?Uint16Array:null;var M,V="function"==typeof Uint16Array?Uint16Array:void 0;M=function(){var r,n,t;if("function"!=typeof L)return!1;try{n=new L(n=[1,3.14,-3.14,65536,65537]),t=n,r=(P&&t instanceof Uint16Array||"[object Uint16Array]"===A(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?V:function(){throw new Error("not implemented")};var W,x={uint16:M,uint8:G};(W=new x.uint16(1))[0]=4660;var k=52===new x.uint8(W.buffer)[0],Y=!0===k?1:0,q=new S(1),C=new U(q.buffer);function z(r){return q[0]=r,C[Y]}var B=!0===k?1:0,D=new S(1),J=new U(D.buffer);function K(r,n){return D[0]=r,J[B]=n>>>0,D[0]}var Q=Number.NEGATIVE_INFINITY;var R=.6931471803691238,X=1.9082149292705877e-10;function Z(r){var n,t,e,u,i,f,o,a,c,y,v,p;return 0===r?Q:l(r)||r<0?NaN:(i=0,(t=z(r))<1048576&&(i-=54,t=z(r*=0x40000000000000)),t>=2146435072?r+r:(i+=(t>>20)-1023|0,i+=(a=(t&=1048575)+614244&1048576|0)>>20|0,o=(r=K(r,t|1072693248^a))-1,(1048575&2+t)<3?0===o?0===i?0:i*R+i*X:(f=o*o*(.5-.3333333333333333*o),0===i?o-f:i*R-(f-i*X-o)):(a=t-398458|0,c=440401-t|0,u=(v=(p=(y=o/(2+o))*y)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(v),e=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(v),f=e+u,(a|=c)>0?(n=.5*o*o,0===i?o-(n-y*(n+f)):i*R-(n-(y*(n+f)+i*X)-o)):0===i?o-y*(o-f):i*R-(y*(o-f)-i*X-o))))}function $(r){var n,t;return 0===r?1/0:((r<0?-r:r)<=1?(n=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+4624429436045379e-20*r))))))))),t=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+1*r)))))))))):(n=4624429436045379e-20+(r=1/r)*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+709811.662581658*r))))))))),t=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+0*r)))))))))),n/t)}var rr=Number.POSITIVE_INFINITY;var nr=.6931471803691238,tr=1.9082149292705877e-10;function er(r){var n,t,e,u,i,f,o,a,c,y,v,p;if(r===rr||l(r))return r;if(r===Q)return-1;if(0===r)return r;if(r<0?(t=!0,o=-r):(t=!1,o=r),o>=38.816242111356935){if(t)return-1;if(o>=709.782712893384)return rr}if(i=0|z(o),o>.34657359027997264)o<1.0397207708399179?t?(e=r+nr,u=-tr,p=-1):(e=r-nr,u=tr,p=1):(p=t?1.4426950408889634*r-.5:1.4426950408889634*r+.5,e=r-(y=p|=0)*nr,u=y*tr),c=e-(r=e-u)-u;else{if(i<1016070144)return r;p=0}return f=1+(a=r*(n=.5*r))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(a),v=a*((f-(y=3-f*n))/(6-r*y)),0===p?r-(r*v-a):(v=r*(v-c)-c,v-=a,-1===p?.5*(r-v)-.5:1===p?r<-.25?-2*(v-(r+.5)):1+2*(r-v):p<=-2||p>56?(o=K(o=1-(v-r),e=z(o)+(p<<20)|0))-1:(y=1,p<20?o=(y=K(y,e=1072693248-(2097152>>p)|0))-(v-r):(o=r-(v+(y=K(y,e=1023-p<<20|0))),o+=1),K(o,e=z(o)+(p<<20)|0)))}var ur=.6931471803691238,ir=1.9082149292705877e-10;function fr(r){var n,t,e,u,i,f,o,a,c,y;if(r<-1||l(r))return NaN;if(-1===r)return Q;if(r===rr)return r;if(0===r)return r;if(y=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(y=0,u=r,t=1)}return 0!==y&&(e<9007199254740992?(i=(y=((t=z(c=1+r))>>20)-1023)>0?1-(c-r):r-(c-1),i/=c):(y=((t=z(c=r))>>20)-1023,i=0),(t&=1048575)<434334?c=K(c,1072693248|t):(y+=1,c=K(c,1071644672|t),t=1048576-t>>2),u=c-1),n=.5*u*u,0===t?0===u?y*ur+(i+=y*ir):y*ur-((a=n*(1-.6666666666666666*u))-(y*ir+i)-u):(a=(o=(f=u/(2+u))*f)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(o),0===y?u-(n-f*(n+a)):y*ur-(n-(f*(n+a)+(y*ir+i))-u))}var or=Math.sqrt;function ar(r){return Math.abs(r)}var cr=Math.ceil;function lr(r){return r<0?cr(r):y(r)}var yr,vr;function pr(r){return r===rr||r===Q}!0===k?(yr=1,vr=0):(yr=0,vr=1);var br,sr,wr={HIGH:yr,LOW:vr},Nr=new S(1),Ar=new U(Nr.buffer),_r=wr.HIGH,mr=wr.LOW;function dr(r,n){return Nr[0]=n,r[0]=Ar[_r],r[1]=Ar[mr],r}function hr(r,n){return 1===arguments.length?dr([0,0],r):dr(r,n)}!0===k?(br=1,sr=0):(br=0,sr=1);var Ur={HIGH:br,LOW:sr},gr=new S(1),jr=new U(gr.buffer),Ir=Ur.HIGH,Or=Ur.LOW;function Sr(r,n){return jr[Ir]=r,jr[Or]=n,gr[0]}var Er=[0,0];function Fr(r,n){var t,e;return hr(Er,r),t=Er[0],t&=2147483647,e=z(n),Sr(t|=e&=2147483648,Er[1])}function Hr(r,n){return l(n)||pr(n)?(r[0]=n,r[1]=0,r):0!==n&&ar(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)}var Tr=[0,0],Gr=[0,0];function Pr(r,n){var t,e;return 0===n||0===r||l(r)||pr(r)?r:(function(r,n){1===arguments.length?Hr([0,0],r):Hr(r,n)}(Tr,r),n+=Tr[1],n+=function(r){var n=z(r);return(n=(2146435072&n)>>>20)-1023|0}(r=Tr[0]),n<-1074?Fr(0,r):n>1023?r<0?Q:rr:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,hr(Gr,r),t=Gr[0],t&=2148532223,e*Sr(t|=n+1023<<20,Gr[1])))}function Lr(r){var n;return l(r)||r===rr?r:r===Q?0:r>709.782712893384?rr:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,n,t){var e,u,i,f;return Pr(1-(n-(e=r-n)*(i=e-(u=e*e)*(0===(f=u)?.16666666666666602:.16666666666666602+f*(f*(6613756321437934e-20+f*(4.1381367970572385e-8*f-16533902205465252e-22))-.0027777777777015593)))/(2-i)-r),t)}(r-.6931471803691238*(n=lr(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*n,n)}function Mr(r){return y(r)===r}function Vr(r){return Mr(r/2)}function Wr(r){return Vr(r>0?r-1:r+1)}var xr=!0===k?0:1,kr=new S(1),Yr=new U(kr.buffer);function qr(r,n){return kr[0]=r,Yr[xr]=n>>>0,kr[0]}function Cr(r){return 0|r}var zr=[1,1.5],Br=[0,.5849624872207642],Dr=[0,1.350039202129749e-8];var Jr=1e300,Kr=1e-300,Qr=[0,0],Rr=[0,0];function Xr(r,n){var t,e,u,i,f,o,a,c,y,v,p,b,s,w;if(l(r)||l(n))return NaN;if(hr(Qr,n),f=Qr[0],0===Qr[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return or(r);if(-.5===n)return 1/or(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(pr(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:ar(r)<1==(n===rr)?0:rr}(r,n)}if(hr(Qr,r),i=Qr[0],0===Qr[1]){if(0===i)return function(r,n){return n===Q?rr:n===rr?0:n>0?Wr(n)?r:0:Wr(n)?Fr(rr,r):rr}(r,n);if(1===r)return 1;if(-1===r&&Wr(n))return-1;if(pr(r))return r===Q?Xr(-0,-n):n<0?0:rr}if(r<0&&!1===Mr(n))return(r-r)/(r-r);if(u=ar(r),t=2147483647&i|0,e=2147483647&f|0,a=f>>>31|0,o=(o=i>>>31|0)&&Wr(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&z(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?o*Jr*Jr:o*Kr*Kr;if(t>1072693248)return 0===a?o*Jr*Jr:o*Kr*Kr;p=function(r,n){var t,e,u,i,f,o;return t=(f=1.9259629911266175e-8*(u=n-1)-u*u*(0===(o=u)?.5:.5+o*(.25*o-.3333333333333333))*1.4426950408889634)-((e=qr(e=(i=1.4426950216293335*u)+f,0))-i),r[0]=e,r[1]=t,r}(Rr,u)}else p=function(r,n,t){var e,u,i,f,o,a,c,l,y,v,p,b,s,w,N,A,_,m,d,h,U;return m=0,t<1048576&&(m-=53,t=z(n*=9007199254740992)),m+=(t>>20)-1023|0,t=1072693248|(d=1048575&t|0),d<=235662?h=0:d<767610?h=1:(h=0,m+=1,t-=1048576),f=qr(u=(A=(n=K(n,t))-(c=zr[h]))*(_=1/(n+c)),0),e=524288+(t>>1|536870912),a=K(0,e+=h<<18),N=(i=u*u)*i*(0===(U=i)?.5999999999999946:.5999999999999946+U*(.4285714285785502+U*(.33333332981837743+U*(.272728123808534+U*(.23066074577556175+.20697501780033842*U))))),a=qr(a=3+(i=f*f)+(N+=(o=_*(A-f*a-f*(n-(a-c))))*(f+u)),0),s=(p=-7.028461650952758e-9*(y=qr(y=(A=f*a)+(_=o*a+(N-(a-3-i))*u),0))+.9617966939259756*(_-(y-A))+Dr[h])-((b=qr(b=(v=.9617967009544373*y)+p+(l=Br[h])+(w=m),0))-w-l-v),r[0]=b,r[1]=s,r}(Rr,u,t);if(v=(n-(c=qr(n,0)))*p[0]+n*p[1],y=c*p[0],hr(Qr,b=v+y),s=Cr(Qr[0]),w=Cr(Qr[1]),s>=1083179008){if(0!=(s-1083179008|w))return o*Jr*Jr;if(v+8008566259537294e-32>b-y)return o*Jr*Jr}else if((2147483647&s)>=1083231232){if(0!=(s-3230714880|w))return o*Kr*Kr;if(v<=b-y)return o*Kr*Kr}return b=function(r,n,t){var e,u,i,f,o,a,c,l,y,v,p;return v=((y=2147483647&r|0)>>20)-1023|0,l=0,y>1071644672&&(e=((l=r+(1048576>>v+1)>>>0)&~(1048575>>(v=((2147483647&l)>>20)-1023|0)))>>>0,l=(1048575&l|1048576)>>20-v>>>0,r<0&&(l=-l),n-=i=K(0,e)),r=Cr(r=z(c=1-((c=(f=.6931471824645996*(i=qr(i=t+n,0)))+(o=.6931471805599453*(t-(i-n))+-1.904654299957768e-9*i))*(u=c-(i=c*c)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(u-2)-((a=o-(c-f))+c*a)-c))),(r+=l<<20>>>0)>>20<=0?Pr(c,l):K(c,r)}(s,y,v),o*b}function Zr(r){return 0===r&&1/r===rr}function $r(r){return 0===r&&1/r===Q}function rn(r,n){var t,e,u,i;if(2===(t=arguments.length))return l(r)||l(n)?NaN:r===Q||n===Q?Q:r===n&&0===r?$r(r)?r:n:r<n?r:n;for(e=rr,i=0;i<t;i++){if(l(u=arguments[i])||u===Q)return u;(u<e||u===e&&0===u&&$r(u))&&(e=u)}return e}function nn(r,n,t,e,u){var i,f,o,a,c,y,v,p,b,s,w,N,A,_;if(!u)return Xr(t,r)*Xr(e,n);if(a=r+10.900511-.5,c=n+10.900511-.5,y=(A=r+n)+10.900511-.5,i=$(A),i/=$(r)*$(n),i*=or(c/2.718281828459045),i*=or(a/y),p=(e*r-t*c)/c,rn(ar(v=(t*n-e*a)/a),ar(p))<.2)if(v*p>0||rn(r,n)<1)ar(v)<.1?i*=Lr(r*fr(v)):i*=Xr(t*y/a,r),ar(p)<.1?i*=Lr(n*fr(p)):i*=Xr(e*y/c,n);else if(function(r,n){var t,e,u,i;if(2===(t=arguments.length))return l(r)||l(n)?NaN:r===rr||n===rr?rr:r===n&&0===r?Zr(r)?r:n:r>n?r:n;for(e=Q,i=0;i<t;i++){if(l(u=arguments[i])||u===rr)return u;(u>e||u===e&&0===u&&Zr(u))&&(e=u)}return e}(ar(v),ar(p))<.5)o=n/r,(f=r<n)&&o*p<.1||!f&&v/o>.1?(b=er(o*fr(p)),i*=Lr(b=r*fr(b=v+b+b*v))):(b=er(fr(v)/o),i*=Lr(b=n*fr(b=p+b+b*p)));else if(ar(v)<ar(p))if((_=r*fr(v)+n*Z(e*y/c))<=-708.3964185322641||_>=709.782712893384){if((_+=Z(i))>=709.782712893384)return NaN;i=Lr(_)}else i*=Lr(_);else if((_=n*fr(p)+r*Z(t*y/a))<=-708.3964185322641||_>=709.782712893384){if((_+=Z(i))>=709.782712893384)return NaN;i=Lr(_)}else i*=Lr(_);else if(N=e*y/c,v=r*Z(w=t*y/a),p=n*Z(N),v>=709.782712893384||v<=-708.3964185322641||p>=709.782712893384||p<=-708.3964185322641)if(r<n)if(s=Xr(N,n/r),(b=r*(Z(w)+Z(s)))<709.782712893384&&b>-708.3964185322641)i*=Xr(s*w,r);else{if((p+=v+Z(i))>=709.782712893384)return NaN;i=Lr(p)}else if((b=(Z(s=Xr(w,r/n))+Z(N))*n)<709.782712893384&&b>-708.3964185322641)i*=Xr(s*N,n);else{if((p+=v+Z(i))>=709.782712893384)return NaN;i=Lr(p)}else i*=Xr(w,r)*Xr(N,n);return i}function tn(r,n,t){var e;return 1===r?0:(e=nn(n,t,r,1-r,!0),e/=(1-r)*r)}function en(r,n,t){return l(r)||l(n)||l(t)||n<=0||t<=0||t>1?NaN:v(r)&&0!==t?Z(t)-Z(n+r)+Z(tn(t,n,r+1)):Q}function un(r,n){return l(r)||l(n)||r<=0||n<=0||n>1?(t=NaN,function(){return t}):function(t){if(l(t))return NaN;if(!v(t))return Q;return Z(n)-Z(r+t)+Z(tn(n,r,t+1))};var t}c(en,"factory",{configurable:!1,enumerable:!1,writable:!1,value:un});export{en as default,un as factory};
//# sourceMappingURL=mod.js.map
