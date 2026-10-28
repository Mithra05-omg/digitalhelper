var DHCoins=(()=>{var Zu=Object.defineProperty;var F2=Object.getOwnPropertyDescriptor;var B2=Object.getOwnPropertyNames;var z2=Object.prototype.hasOwnProperty;var k2=(r,t)=>{for(var e in t)Zu(r,e,{get:t[e],enumerable:!0})},V2=(r,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of B2(t))!z2.call(r,i)&&i!==e&&Zu(r,i,{get:()=>t[i],enumerable:!(n=F2(t,i))||n.enumerable});return r};var G2=r=>V2(Zu({},"__esModule",{value:!0}),r);var Kb={};k2(Kb,{createPen:()=>tm,fx:()=>O2,startCoins:()=>$b});var Lp=0,Df=1,Dp=2;var $a=1,Np=2,Ao=3,Zr=0,bn=1,hi=2,tr=0,Co=1,Nf=2,Uf=3,Of=4,Up=5;var ws=100,Op=101,Fp=102,Bp=103,zp=104,kp=200,Vp=201,Gp=202,Hp=203,Ff=204,Bf=205,Wp=206,Xp=207,Qp=208,Yp=209,qp=210,Zp=211,Jp=212,$p=213,Kp=214,vc=0,yc=1,Sc=2,_o=3,Mc=4,bc=5,Tc=6,wc=7,eh=0,jp=1,t1=2,zi=0,zf=1,kf=2,Vf=3,Ka=4,Gf=5,Hf=6,Wf=7;var Xf=300,Jr=301,Es=302,nh=303,ih=304,ja=306,Ec=1e3,Yi=1001,Ac=1002,gn=1003,e1=1004;var tl=1005;var Mn=1006,rh=1007;var $r=1008;var $n=1009,Qf=1010,Yf=1011,Ro=1012,sh=1013,ki=1014,Si=1015,Vi=1016,oh=1017,ah=1018,Po=1020,qf=35902,Zf=35899,Jf=1021,$f=1022,Mi=1023,qi=1026,Kr=1027,lh=1028,ch=1029,jr=1030,hh=1031;var uh=1033,el=33776,nl=33777,il=33778,rl=33779,fh=35840,dh=35841,ph=35842,mh=35843,gh=36196,_h=37492,xh=37496,vh=37488,yh=37489,sl=37490,Sh=37491,Mh=37808,bh=37809,Th=37810,wh=37811,Eh=37812,Ah=37813,Ch=37814,Rh=37815,Ph=37816,Ih=37817,Lh=37818,Dh=37819,Nh=37820,Uh=37821,Oh=36492,Fh=36494,Bh=36495,zh=36283,kh=36284,ol=36285,Vh=36286;var va=2300,Cc=2301,_c=2302,Sf=2303,Mf=2400,bf=2401,Tf=2402;var n1=3200;var al=0,i1=1,vr="",hn="srgb",ya="srgb-linear",Sa="linear",Le="srgb";var xc=7680;var r1=519,s1=512,o1=513,a1=514,Gh=515,l1=516,c1=517,Hh=518,h1=519,u1=35044;var Kf="300 es",Ui=2e3,xo=2001;function H2(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function W2(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Ma(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function f1(){let r=Ma("canvas");return r.style.display="block",r}var np={},vo=null;function jf(...r){let t="THREE."+r.shift();vo?vo("log",t,...r):console.log(t,...r)}function d1(r){let t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=r[1];e&&e.isStackTrace?r[0]+=" "+e.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function re(...r){r=d1(r);let t="THREE."+r.shift();if(vo)vo("warn",t,...r);else{let e=r[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...r)}}function se(...r){r=d1(r);let t="THREE."+r.shift();if(vo)vo("error",t,...r);else{let e=r[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...r)}}function ys(...r){let t=r.join(" ");t in np||(np[t]=!0,re(...r))}function p1(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var m1={[vc]:yc,[Sc]:Tc,[Mc]:wc,[_o]:bc,[yc]:vc,[Tc]:Sc,[wc]:Mc,[bc]:_o},Zi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}},Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ip=1234567,ma=Math.PI/180,yo=180/Math.PI;function As(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Cn[r&255]+Cn[r>>8&255]+Cn[r>>16&255]+Cn[r>>24&255]+"-"+Cn[t&255]+Cn[t>>8&255]+"-"+Cn[t>>16&15|64]+Cn[t>>24&255]+"-"+Cn[e&63|128]+Cn[e>>8&255]+"-"+Cn[e>>16&255]+Cn[e>>24&255]+Cn[n&255]+Cn[n>>8&255]+Cn[n>>16&255]+Cn[n>>24&255]).toLowerCase()}function pe(r,t,e){return Math.max(t,Math.min(e,r))}function t0(r,t){return(r%t+t)%t}function X2(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function Q2(r,t,e){return r!==t?(e-r)/(t-r):0}function ga(r,t,e){return(1-e)*r+e*t}function Y2(r,t,e,n){return ga(r,t,1-Math.exp(-e*n))}function q2(r,t=1){return t-Math.abs(t0(r,t*2)-t)}function Z2(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function J2(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function $2(r,t){return r+Math.floor(Math.random()*(t-r+1))}function K2(r,t){return r+Math.random()*(t-r)}function j2(r){return r*(.5-Math.random())}function t_(r){r!==void 0&&(ip=r);let t=ip+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function e_(r){return r*ma}function n_(r){return r*yo}function i_(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}function r_(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function s_(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function o_(r,t,e,n,i){let s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),h=o((t+n)/2),f=s((t-n)/2),u=o((t-n)/2),d=s((n-t)/2),p=o((n-t)/2);switch(i){case"XYX":r.set(a*h,l*f,l*u,a*c);break;case"YZY":r.set(l*u,a*h,l*f,a*c);break;case"ZXZ":r.set(l*f,l*u,a*h,a*c);break;case"XZX":r.set(a*h,l*p,l*d,a*c);break;case"YXY":r.set(l*d,a*h,l*p,a*c);break;case"ZYZ":r.set(l*p,l*d,a*h,a*c);break;default:re("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function mo(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:case Uint8ClampedArray:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function zn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var e0={DEG2RAD:ma,RAD2DEG:yo,generateUUID:As,clamp:pe,euclideanModulo:t0,mapLinear:X2,inverseLerp:Q2,lerp:ga,damp:Y2,pingpong:q2,smoothstep:Z2,smootherstep:J2,randInt:$2,randFloat:K2,randFloatSpread:j2,seededRandom:t_,degToRad:e_,radToDeg:n_,isPowerOfTwo:i_,ceilPowerOfTwo:r_,floorPowerOfTwo:s_,setQuaternionFromProperEuler:o_,normalize:zn,denormalize:mo},Lt=class r{static{r.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ji=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],f=n[i+3],u=s[o+0],d=s[o+1],p=s[o+2],_=s[o+3];if(f!==_||l!==u||c!==d||h!==p){let g=l*u+c*d+h*p+f*_;g<0&&(u=-u,d=-d,p=-p,_=-_,g=-g);let m=1-a;if(g<.9995){let M=Math.acos(g),T=Math.sin(M);m=Math.sin(m*M)/T,a=Math.sin(a*M)/T,l=l*m+u*a,c=c*m+d*a,h=h*m+p*a,f=f*m+_*a}else{l=l*m+u*a,c=c*m+d*a,h=h*m+p*a,f=f*m+_*a;let M=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=M,c*=M,h*=M,f*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],f=s[o],u=s[o+1],d=s[o+2],p=s[o+3];return t[e]=a*p+h*f+l*d-c*u,t[e+1]=l*p+h*u+c*f-a*d,t[e+2]=c*p+h*d+a*u-l*f,t[e+3]=h*p-a*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),f=a(s/2),u=l(n/2),d=l(i/2),p=l(s/2);switch(o){case"XYZ":this._x=u*h*f+c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f-u*d*p;break;case"YXZ":this._x=u*h*f+c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f+u*d*p;break;case"ZXY":this._x=u*h*f-c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f-u*d*p;break;case"ZYX":this._x=u*h*f-c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f+u*d*p;break;case"YZX":this._x=u*h*f+c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f-u*d*p;break;case"XZY":this._x=u*h*f-c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f+u*d*p;break;default:re("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=n+a+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>f){let d=2*Math.sqrt(1+n-a-f);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>f){let d=2*Math.sqrt(1+a-n-f);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(pe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},X=class r{static{r.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(rp.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(rp.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-s*i),f=2*(s*n-o*e);return this.x=e+l*c+o*f-a*h,this.y=n+l*h+a*c-s*f,this.z=i+l*f+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this.z=pe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this.z=pe(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ju.copy(this).projectOnVector(t),this.sub(Ju)}reflect(t){return this.sub(Ju.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ju=new X,rp=new Ji,ae=class r{static{r.prototype.isMatrix3=!0}constructor(t,e,n,i,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],p=n[8],_=i[0],g=i[3],m=i[6],M=i[1],T=i[4],x=i[7],b=i[2],y=i[5],E=i[8];return s[0]=o*_+a*M+l*b,s[3]=o*g+a*T+l*y,s[6]=o*m+a*x+l*E,s[1]=c*_+h*M+f*b,s[4]=c*g+h*T+f*y,s[7]=c*m+h*x+f*E,s[2]=u*_+d*M+p*b,s[5]=u*g+d*T+p*y,s[8]=u*m+d*x+p*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=h*o-a*c,u=a*l-h*s,d=c*s-o*l,p=e*f+n*u+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return t[0]=f*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=u*_,t[4]=(h*e-i*l)*_,t[5]=(i*s-a*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return ys("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply($u.makeScale(t,e)),this}rotate(t){return ys("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply($u.makeRotation(-t)),this}translate(t,e){return ys("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply($u.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},$u=new ae,sp=new ae().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),op=new ae().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function a_(){let r={enabled:!0,workingColorSpace:ya,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Le&&(i.r=mr(i.r),i.g=mr(i.g),i.b=mr(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Le&&(i.r=go(i.r),i.g=go(i.g),i.b=go(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===vr?Sa:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return ys("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return ys("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[ya]:{primaries:t,whitePoint:n,transfer:Sa,toXYZ:sp,fromXYZ:op,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:hn},outputColorSpaceConfig:{drawingBufferColorSpace:hn}},[hn]:{primaries:t,whitePoint:n,transfer:Le,toXYZ:sp,fromXYZ:op,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:hn}}}),r}var Me=a_();function mr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function go(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var to,Rc=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{to===void 0&&(to=Ma("canvas")),to.width=t.width,to.height=t.height;let i=to.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=to}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ma("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=mr(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(mr(e[n]/255)*255):e[n]=mr(e[n]);return{data:e,width:t.width,height:t.height}}else return re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},l_=0,So=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:l_++}),this.uuid=As(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Ku(i[o].image)):s.push(Ku(i[o]))}else s=Ku(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function Ku(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Rc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(re("Texture: Unable to serialize Texture."),{})}var c_=0,ju=new X,kn=class r extends Zi{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=Yi,i=Yi,s=Mn,o=$r,a=Mi,l=$n,c=r.DEFAULT_ANISOTROPY,h=vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:c_++}),this.uuid=As(),this.name="",this.source=new So(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ae,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ju).x}get height(){return this.source.getSize(ju).y}get depth(){return this.source.getSize(ju).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){re(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){re(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Xf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ec:t.x=t.x-Math.floor(t.x);break;case Yi:t.x=t.x<0?0:1;break;case Ac:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ec:t.y=t.y-Math.floor(t.y);break;case Yi:t.y=t.y<0?0:1;break;case Ac:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=Xf;kn.DEFAULT_ANISOTROPY=1;var Ye=class r{static{r.prototype.isVector4=!0}constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],p=l[9],_=l[2],g=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+_)<.1&&Math.abs(p+g)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(c+1)/2,x=(d+1)/2,b=(m+1)/2,y=(h+u)/4,E=(f+_)/4,v=(p+g)/4;return T>x&&T>b?T<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(T),i=y/n,s=E/n):x>b?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=y/i,s=v/i):b<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(b),n=E/s,i=v/s),this.set(n,i,s,e),this}let M=Math.sqrt((g-p)*(g-p)+(f-_)*(f-_)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(g-p)/M,this.y=(f-_)/M,this.z=(u-h)/M,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this.z=pe(this.z,t.z,e.z),this.w=pe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this.z=pe(this.z,t,e),this.w=pe(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Pc=class extends Zi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ye(0,0,t,e),this.scissorTest=!1,this.viewport=new Ye(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},s=new kn(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Mn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new So(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jn=class extends Pc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ba=class extends kn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=gn,this.minFilter=gn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ic=class extends kn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=gn,this.minFilter=gn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ne=class r{static{r.prototype.isMatrix4=!0}constructor(t,e,n,i,s,o,a,l,c,h,f,u,d,p,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,h,f,u,d,p,_,g)}set(t,e,n,i,s,o,a,l,c,h,f,u,d,p,_,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=f,m[14]=u,m[3]=d,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/eo.setFromMatrixColumn(t,0).length(),s=1/eo.setFromMatrixColumn(t,1).length(),o=1/eo.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){let u=o*h,d=o*f,p=a*h,_=a*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=d+p*c,e[5]=u-_*c,e[9]=-a*l,e[2]=_-u*c,e[6]=p+d*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,d=l*f,p=c*h,_=c*f;e[0]=u+_*a,e[4]=p*a-d,e[8]=o*c,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=d*a-p,e[6]=_+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,d=l*f,p=c*h,_=c*f;e[0]=u-_*a,e[4]=-o*f,e[8]=p+d*a,e[1]=d+p*a,e[5]=o*h,e[9]=_-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,d=o*f,p=a*h,_=a*f;e[0]=l*h,e[4]=p*c-d,e[8]=u*c+_,e[1]=l*f,e[5]=_*c+u,e[9]=d*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,d=o*c,p=a*l,_=a*c;e[0]=l*h,e[4]=_-u*f,e[8]=p*f+d,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*f+p,e[10]=u-_*f}else if(t.order==="XZY"){let u=o*l,d=o*c,p=a*l,_=a*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+_,e[5]=o*h,e[9]=d*f-p,e[2]=p*f-d,e[6]=a*h,e[10]=_*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(h_,t,u_)}lookAt(t,e,n){let i=this.elements;return ii.subVectors(t,e),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),Or.crossVectors(n,ii),Or.lengthSq()===0&&(Math.abs(n.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),Or.crossVectors(n,ii)),Or.normalize(),Zl.crossVectors(ii,Or),i[0]=Or.x,i[4]=Zl.x,i[8]=ii.x,i[1]=Or.y,i[5]=Zl.y,i[9]=ii.y,i[2]=Or.z,i[6]=Zl.z,i[10]=ii.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],p=n[2],_=n[6],g=n[10],m=n[14],M=n[3],T=n[7],x=n[11],b=n[15],y=i[0],E=i[4],v=i[8],w=i[12],C=i[1],L=i[5],D=i[9],V=i[13],I=i[2],O=i[6],H=i[10],z=i[14],nt=i[3],$=i[7],P=i[11],K=i[15];return s[0]=o*y+a*C+l*I+c*nt,s[4]=o*E+a*L+l*O+c*$,s[8]=o*v+a*D+l*H+c*P,s[12]=o*w+a*V+l*z+c*K,s[1]=h*y+f*C+u*I+d*nt,s[5]=h*E+f*L+u*O+d*$,s[9]=h*v+f*D+u*H+d*P,s[13]=h*w+f*V+u*z+d*K,s[2]=p*y+_*C+g*I+m*nt,s[6]=p*E+_*L+g*O+m*$,s[10]=p*v+_*D+g*H+m*P,s[14]=p*w+_*V+g*z+m*K,s[3]=M*y+T*C+x*I+b*nt,s[7]=M*E+T*L+x*O+b*$,s[11]=M*v+T*D+x*H+b*P,s[15]=M*w+T*V+x*z+b*K,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],p=t[3],_=t[7],g=t[11],m=t[15],M=l*d-c*u,T=a*d-c*f,x=a*u-l*f,b=o*d-c*h,y=o*u-l*h,E=o*f-a*h;return e*(_*M-g*T+m*x)-n*(p*M-g*b+m*y)+i*(p*T-_*b+m*E)-s*(p*x-_*y+g*E)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(s*h-a*l)+i*(s*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],p=t[12],_=t[13],g=t[14],m=t[15],M=e*a-n*o,T=e*l-i*o,x=e*c-s*o,b=n*l-i*a,y=n*c-s*a,E=i*c-s*l,v=h*_-f*p,w=h*g-u*p,C=h*m-d*p,L=f*g-u*_,D=f*m-d*_,V=u*m-d*g,I=M*V-T*D+x*L+b*C-y*w+E*v;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/I;return t[0]=(a*V-l*D+c*L)*O,t[1]=(i*D-n*V-s*L)*O,t[2]=(_*E-g*y+m*b)*O,t[3]=(u*y-f*E-d*b)*O,t[4]=(l*C-o*V-c*w)*O,t[5]=(e*V-i*C+s*w)*O,t[6]=(g*x-p*E-m*T)*O,t[7]=(h*E-u*x+d*T)*O,t[8]=(o*D-a*C+c*v)*O,t[9]=(n*C-e*D-s*v)*O,t[10]=(p*y-_*x+m*M)*O,t[11]=(f*x-h*y-d*M)*O,t[12]=(a*w-o*L-l*v)*O,t[13]=(e*L-n*w+i*v)*O,t[14]=(_*T-p*b-g*M)*O,t[15]=(h*b-f*T+u*M)*O,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,f=a+a,u=s*c,d=s*h,p=s*f,_=o*h,g=o*f,m=a*f,M=l*c,T=l*h,x=l*f,b=n.x,y=n.y,E=n.z;return i[0]=(1-(_+m))*b,i[1]=(d+x)*b,i[2]=(p-T)*b,i[3]=0,i[4]=(d-x)*y,i[5]=(1-(u+m))*y,i[6]=(g+M)*y,i[7]=0,i[8]=(p+T)*E,i[9]=(g-M)*E,i[10]=(1-(u+_))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let o=eo.set(i[0],i[1],i[2]).length(),a=eo.set(i[4],i[5],i[6]).length(),l=eo.set(i[8],i[9],i[10]).length();s<0&&(o=-o),Ii.copy(this);let c=1/o,h=1/a,f=1/l;return Ii.elements[0]*=c,Ii.elements[1]*=c,Ii.elements[2]*=c,Ii.elements[4]*=h,Ii.elements[5]*=h,Ii.elements[6]*=h,Ii.elements[8]*=f,Ii.elements[9]*=f,Ii.elements[10]*=f,e.setFromRotationMatrix(Ii),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,s,o,a=Ui,l=!1){let c=this.elements,h=2*s/(e-t),f=2*s/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i),p,_;if(l)p=s/(o-s),_=o*s/(o-s);else if(a===Ui)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===xo)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=Ui,l=!1){let c=this.elements,h=2/(e-t),f=2/(n-i),u=-(e+t)/(e-t),d=-(n+i)/(n-i),p,_;if(l)p=1/(o-s),_=o/(o-s);else if(a===Ui)p=-2/(o-s),_=-(o+s)/(o-s);else if(a===xo)p=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},eo=new X,Ii=new Ne,h_=new X(0,0,0),u_=new X(1,1,1),Or=new X,Zl=new X,ii=new X,ap=new Ne,lp=new Ji,$i=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],f=i[2],u=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-pe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(pe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-pe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(pe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-pe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:re("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ap.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ap,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return lp.setFromEuler(this),this.setFromQuaternion(lp,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$i.DEFAULT_ORDER="XYZ";var Ta=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},f_=0,cp=new X,no=new Ji,hr=new Ne,Jl=new X,la=new X,d_=new X,p_=new Ji,hp=new X(1,0,0),up=new X(0,1,0),fp=new X(0,0,1),dp={type:"added"},m_={type:"removed"},io={type:"childadded",child:null},tf={type:"childremoved",child:null},_n=class r extends Zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:f_++}),this.uuid=As(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new X,e=new $i,n=new Ji,i=new X(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ne},normalMatrix:{value:new ae}}),this.matrix=new Ne,this.matrixWorld=new Ne,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ta,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return no.setFromAxisAngle(t,e),this.quaternion.multiply(no),this}rotateOnWorldAxis(t,e){return no.setFromAxisAngle(t,e),this.quaternion.premultiply(no),this}rotateX(t){return this.rotateOnAxis(hp,t)}rotateY(t){return this.rotateOnAxis(up,t)}rotateZ(t){return this.rotateOnAxis(fp,t)}translateOnAxis(t,e){return cp.copy(t).applyQuaternion(this.quaternion),this.position.add(cp.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(hp,t)}translateY(t){return this.translateOnAxis(up,t)}translateZ(t){return this.translateOnAxis(fp,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(hr.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Jl.copy(t):Jl.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),la.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hr.lookAt(la,Jl,this.up):hr.lookAt(Jl,la,this.up),this.quaternion.setFromRotationMatrix(hr),i&&(hr.extractRotation(i.matrixWorld),no.setFromRotationMatrix(hr),this.quaternion.premultiply(no.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(se("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(dp),io.child=t,this.dispatchEvent(io),io.child=null):se("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(m_),tf.child=t,this.dispatchEvent(tf),tf.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),hr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),hr.multiply(t.parent.matrixWorld)),t.applyMatrix4(hr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(dp),io.child=t,this.dispatchEvent(io),io.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(la,t,d_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(la,p_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*i,s[13]+=n-s[1]*e-s[5]*n-s[9]*i,s[14]+=i-s[2]*e-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),f=o(t.shapes),u=o(t.skeletons),d=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};_n.DEFAULT_UP=new X(0,1,0);_n.DEFAULT_MATRIX_AUTO_UPDATE=!0;_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var si=class extends _n{constructor(){super(),this.isGroup=!0,this.type="Group"}},g_={type:"move"},Mo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new si,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new si,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new si,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let g=e.getJointPose(_,n),m=this._getHandJoint(c,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,p=.005;c.inputState.pinching&&u>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(g_)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new si;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},g1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fr={h:0,s:0,l:0},$l={h:0,s:0,l:0};function ef(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var ce=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=hn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Me.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=Me.workingColorSpace){return this.r=t,this.g=e,this.b=n,Me.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=Me.workingColorSpace){if(t=t0(t,1),e=pe(e,0,1),n=pe(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=ef(o,s,t+1/3),this.g=ef(o,s,t),this.b=ef(o,s,t-1/3)}return Me.colorSpaceToWorking(this,i),this}setStyle(t,e=hn){function n(s){s!==void 0&&parseFloat(s)<1&&re("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:re("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);re("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=hn){let n=g1[t.toLowerCase()];return n!==void 0?this.setHex(n,e):re("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=mr(t.r),this.g=mr(t.g),this.b=mr(t.b),this}copyLinearToSRGB(t){return this.r=go(t.r),this.g=go(t.g),this.b=go(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=hn){return Me.workingToColorSpace(Rn.copy(this),t),Math.round(pe(Rn.r*255,0,255))*65536+Math.round(pe(Rn.g*255,0,255))*256+Math.round(pe(Rn.b*255,0,255))}getHexString(t=hn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Me.workingColorSpace){Me.workingToColorSpace(Rn.copy(this),e);let n=Rn.r,i=Rn.g,s=Rn.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Me.workingColorSpace){return Me.workingToColorSpace(Rn.copy(this),e),t.r=Rn.r,t.g=Rn.g,t.b=Rn.b,t}getStyle(t=hn){Me.workingToColorSpace(Rn.copy(this),t);let e=Rn.r,n=Rn.g,i=Rn.b;return t!==hn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Fr),this.setHSL(Fr.h+t,Fr.s+e,Fr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Fr),t.getHSL($l);let n=ga(Fr.h,$l.h,e),i=ga(Fr.s,$l.s,e),s=ga(Fr.l,$l.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Rn=new ce;ce.NAMES=g1;var gr=class extends _n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $i,this.environmentIntensity=1,this.environmentRotation=new $i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Li=new X,ur=new X,nf=new X,fr=new X,ro=new X,so=new X,pp=new X,rf=new X,sf=new X,of=new X,af=new Ye,lf=new Ye,cf=new Ye,Vr=class r{constructor(t=new X,e=new X,n=new X){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Li.subVectors(t,e),i.cross(Li);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Li.subVectors(i,e),ur.subVectors(n,e),nf.subVectors(t,e);let o=Li.dot(Li),a=Li.dot(ur),l=Li.dot(nf),c=ur.dot(ur),h=ur.dot(nf),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;let u=1/f,d=(c*l-a*h)*u,p=(o*h-a*l)*u;return s.set(1-d-p,p,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,fr)===null?!1:fr.x>=0&&fr.y>=0&&fr.x+fr.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,fr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,fr.x),l.addScaledVector(o,fr.y),l.addScaledVector(a,fr.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return af.setScalar(0),lf.setScalar(0),cf.setScalar(0),af.fromBufferAttribute(t,e),lf.fromBufferAttribute(t,n),cf.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(af,s.x),o.addScaledVector(lf,s.y),o.addScaledVector(cf,s.z),o}static isFrontFacing(t,e,n,i){return Li.subVectors(n,e),ur.subVectors(t,e),Li.cross(ur).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Li.subVectors(this.c,this.b),ur.subVectors(this.a,this.b),Li.cross(ur).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,o,a;ro.subVectors(i,n),so.subVectors(s,n),rf.subVectors(t,n);let l=ro.dot(rf),c=so.dot(rf);if(l<=0&&c<=0)return e.copy(n);sf.subVectors(t,i);let h=ro.dot(sf),f=so.dot(sf);if(h>=0&&f<=h)return e.copy(i);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(ro,o);of.subVectors(t,s);let d=ro.dot(of),p=so.dot(of);if(p>=0&&d<=p)return e.copy(s);let _=d*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(so,a);let g=h*p-d*f;if(g<=0&&f-h>=0&&d-p>=0)return pp.subVectors(s,i),a=(f-h)/(f-h+(d-p)),e.copy(i).addScaledVector(pp,a);let m=1/(g+_+u);return o=_*m,a=u*m,e.copy(n).addScaledVector(ro,o).addScaledVector(so,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ki=class{constructor(t=new X(1/0,1/0,1/0),e=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Di.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Di.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Di.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Di):Di.fromBufferAttribute(s,o),Di.applyMatrix4(t.matrixWorld),this.expandByPoint(Di);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Kl.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Kl.copy(n.boundingBox)),Kl.applyMatrix4(t.matrixWorld),this.union(Kl)}let i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Di),Di.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ca),jl.subVectors(this.max,ca),oo.subVectors(t.a,ca),ao.subVectors(t.b,ca),lo.subVectors(t.c,ca),Br.subVectors(ao,oo),zr.subVectors(lo,ao),ms.subVectors(oo,lo);let e=[0,-Br.z,Br.y,0,-zr.z,zr.y,0,-ms.z,ms.y,Br.z,0,-Br.x,zr.z,0,-zr.x,ms.z,0,-ms.x,-Br.y,Br.x,0,-zr.y,zr.x,0,-ms.y,ms.x,0];return!hf(e,oo,ao,lo,jl)||(e=[1,0,0,0,1,0,0,0,1],!hf(e,oo,ao,lo,jl))?!1:(tc.crossVectors(Br,zr),e=[tc.x,tc.y,tc.z],hf(e,oo,ao,lo,jl))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Di).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Di).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(dr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),dr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),dr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),dr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),dr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),dr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),dr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),dr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(dr),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},dr=[new X,new X,new X,new X,new X,new X,new X,new X],Di=new X,Kl=new Ki,oo=new X,ao=new X,lo=new X,Br=new X,zr=new X,ms=new X,ca=new X,jl=new X,tc=new X,gs=new X;function hf(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){gs.fromArray(r,s);let a=i.x*Math.abs(gs.x)+i.y*Math.abs(gs.y)+i.z*Math.abs(gs.z),l=t.dot(gs),c=e.dot(gs),h=n.dot(gs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var an=new X,ec=new Lt,__=0,oi=class extends Zi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:__++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=u1,this.updateRanges=[],this.gpuType=Si,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ec.fromBufferAttribute(this,e),ec.applyMatrix3(t),this.setXY(e,ec.x,ec.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.applyMatrix3(t),this.setXYZ(e,an.x,an.y,an.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.applyMatrix4(t),this.setXYZ(e,an.x,an.y,an.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.applyNormalMatrix(t),this.setXYZ(e,an.x,an.y,an.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.transformDirection(t),this.setXYZ(e,an.x,an.y,an.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=mo(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=zn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=mo(e,this.array)),e}setX(t,e){return this.normalized&&(e=zn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=mo(e,this.array)),e}setY(t,e){return this.normalized&&(e=zn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=mo(e,this.array)),e}setZ(t,e){return this.normalized&&(e=zn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=mo(e,this.array)),e}setW(t,e){return this.normalized&&(e=zn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=zn(e,this.array),n=zn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=zn(e,this.array),n=zn(n,this.array),i=zn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=zn(e,this.array),n=zn(n,this.array),i=zn(i,this.array),s=zn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var wa=class extends oi{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ea=class extends oi{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var He=class extends oi{constructor(t,e,n){super(new Float32Array(t),e,n)}},x_=new Ki,ha=new X,uf=new X,Gr=class{constructor(t=new X,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):x_.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ha.subVectors(t,this.center);let e=ha.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ha,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(uf.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ha.copy(t.center).add(uf)),this.expandByPoint(ha.copy(t.center).sub(uf))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},v_=0,yi=new Ne,ff=new _n,co=new X,ri=new Ki,ua=new Ki,mn=new X,Vn=class r extends Zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:v_++}),this.uuid=As(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(H2(t)?Ea:wa)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new ae().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return yi.makeRotationFromQuaternion(t),this.applyMatrix4(yi),this}rotateX(t){return yi.makeRotationX(t),this.applyMatrix4(yi),this}rotateY(t){return yi.makeRotationY(t),this.applyMatrix4(yi),this}rotateZ(t){return yi.makeRotationZ(t),this.applyMatrix4(yi),this}translate(t,e,n){return yi.makeTranslation(t,e,n),this.applyMatrix4(yi),this}scale(t,e,n){return yi.makeScale(t,e,n),this.applyMatrix4(yi),this}lookAt(t){return ff.lookAt(t),ff.updateMatrix(),this.applyMatrix4(ff.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(co).negate(),this.translate(co.x,co.y,co.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new He(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ki);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){se("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];ri.setFromBufferAttribute(s),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&se('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){se("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(t){let n=this.boundingSphere.center;if(ri.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];ua.setFromBufferAttribute(a),this.morphTargetsRelative?(mn.addVectors(ri.min,ua.min),ri.expandByPoint(mn),mn.addVectors(ri.max,ua.max),ri.expandByPoint(mn)):(ri.expandByPoint(ua.min),ri.expandByPoint(ua.max))}ri.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)mn.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(mn));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)mn.fromBufferAttribute(a,c),l&&(co.fromBufferAttribute(t,c),mn.add(co)),i=Math.max(i,n.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&se('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){se("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,s=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new oi(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let v=0;v<n.count;v++)a[v]=new X,l[v]=new X;let c=new X,h=new X,f=new X,u=new Lt,d=new Lt,p=new Lt,_=new X,g=new X;function m(v,w,C){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,w),f.fromBufferAttribute(n,C),u.fromBufferAttribute(s,v),d.fromBufferAttribute(s,w),p.fromBufferAttribute(s,C),h.sub(c),f.sub(c),d.sub(u),p.sub(u);let L=1/(d.x*p.y-p.x*d.y);isFinite(L)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(f,-d.y).multiplyScalar(L),g.copy(f).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(L),a[v].add(_),a[w].add(_),a[C].add(_),l[v].add(g),l[w].add(g),l[C].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let v=0,w=M.length;v<w;++v){let C=M[v],L=C.start,D=C.count;for(let V=L,I=L+D;V<I;V+=3)m(t.getX(V+0),t.getX(V+1),t.getX(V+2))}let T=new X,x=new X,b=new X,y=new X;function E(v){b.fromBufferAttribute(i,v),y.copy(b);let w=a[v];T.copy(w),T.sub(b.multiplyScalar(b.dot(w))).normalize(),x.crossVectors(y,w);let L=x.dot(l[v])<0?-1:1;o.setXYZW(v,T.x,T.y,T.z,L)}for(let v=0,w=M.length;v<w;++v){let C=M[v],L=C.start,D=C.count;for(let V=L,I=L+D;V<I;V+=3)E(t.getX(V+0)),E(t.getX(V+1)),E(t.getX(V+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new oi(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let i=new X,s=new X,o=new X,a=new X,l=new X,c=new X,h=new X,f=new X;if(t)for(let u=0,d=t.count;u<d;u+=3){let p=t.getX(u+0),_=t.getX(u+1),g=t.getX(u+2);i.fromBufferAttribute(e,p),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),h.subVectors(o,s),f.subVectors(i,s),h.cross(f),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,s),f.subVectors(i,s),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)mn.fromBufferAttribute(t,e),mn.normalize(),t.setXYZ(e,mn.x,mn.y,mn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,f=a.normalized,u=new c.constructor(l.length*h),d=0,p=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*h;for(let m=0;m<h;m++)u[p++]=c[d++]}return new oi(u,h,f)}if(this.index===null)return re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=t(u,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],f=s[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var df=new X,y_=new X,S_=new ae,Ni=class{constructor(t=new X(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=df.subVectors(n,e).cross(y_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(df),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||S_.getNormalMatrix(t),i=this.coplanarPoint(df).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},M_=0,_r=class extends Zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:M_++}),this.uuid=As(),this.name="",this.type="Material",this.blending=Co,this.side=Zr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ff,this.blendDst=Bf,this.blendEquation=ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ce(0,0,0),this.blendAlpha=0,this.depthFunc=_o,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=r1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xc,this.stencilZFail=xc,this.stencilZPass=xc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){re(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){re(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ce().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Ni().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Lt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Lt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var pr=new X,pf=new X,nc=new X,ic=new X,Lc=class{constructor(t=new X,e=new X(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pr)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=pr.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(pr.copy(this.origin).addScaledVector(this.direction,e),pr.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){pf.copy(t).add(e).multiplyScalar(.5),nc.copy(e).sub(t).normalize(),ic.copy(this.origin).sub(pf);let s=t.distanceTo(e)*.5,o=-this.direction.dot(nc),a=ic.dot(this.direction),l=-ic.dot(nc),c=ic.lengthSq(),h=Math.abs(1-o*o),f,u,d,p;if(h>0)if(f=o*l-a,u=o*a-l,p=s*h,f>=0)if(u>=-p)if(u<=p){let _=1/h;f*=_,u*=_,d=f*(f+o*u+2*a)+u*(o*f+u+2*l)+c}else u=s,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u=-s,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u<=-p?(f=Math.max(0,-(-o*s+a)),u=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+u*(u+2*l)+c):u<=p?(f=0,u=Math.min(Math.max(-s,-l),s),d=u*(u+2*l)+c):(f=Math.max(0,-(o*s+a)),u=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+u*(u+2*l)+c);else u=o>0?-s:s,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(pf).addScaledVector(nc,u),d}intersectSphere(t,e){if(t.radius<0)return null;pr.subVectors(t.center,this.origin);let n=pr.dot(this.direction),i=pr.dot(pr)-n*n,s=t.radius*t.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(s=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(a=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,pr)!==null}intersectTriangle(t,e,n,i,s){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,f=t.x-o.x,u=t.y-o.y,d=t.z-o.z,p=e.x-o.x,_=e.y-o.y,g=e.z-o.z,m=n.x-o.x,M=n.y-o.y,T=n.z-o.z,x=Math.abs(l),b=Math.abs(c),y=Math.abs(h),E,v,w,C,L,D,V,I,O,H,z,nt;if(x>=b&&x>=y?(w=l,D=f,O=p,nt=m,l>=0?(E=c,v=h,C=u,L=d,V=_,I=g,H=M,z=T):(E=h,v=c,C=d,L=u,V=g,I=_,H=T,z=M)):b>=y?(w=c,D=u,O=_,nt=M,c>=0?(E=h,v=l,C=d,L=f,V=g,I=p,H=T,z=m):(E=l,v=h,C=f,L=d,V=p,I=g,H=m,z=T)):(w=h,D=d,O=g,nt=T,h>=0?(E=l,v=c,C=f,L=u,V=p,I=_,H=m,z=M):(E=c,v=l,C=u,L=f,V=_,I=p,H=M,z=m)),w===0)return null;let $=E/w,P=v/w,K=1/w,It=C-$*D,Et=L-P*D,zt=V-$*O,Vt=I-P*O,ee=H-$*nt,B=z-P*nt,Y=ee*Vt-B*zt,Q=It*B-Et*ee,_t=zt*Et-Vt*It;if(i){if(Y<0||Q<0||_t<0)return null}else if((Y<0||Q<0||_t<0)&&(Y>0||Q>0||_t>0))return null;let ft=Y+Q+_t;if(ft===0)return null;let Ct=K*(Y*D+Q*O+_t*nt);return(ft>0?Ct<0:Ct>0)?null:this.at(Ct/ft,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Oi=class extends _r{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.combine=eh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},mp=new Ne,_s=new Lc,rc=new Gr,gp=new X,sc=new X,oc=new X,ac=new X,mf=new X,lc=new X,_p=new X,cc=new X,be=class extends _n{constructor(t=new Vn,e=new Oi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){lc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],f=s[l];h!==0&&(mf.fromBufferAttribute(f,t),o?lc.addScaledVector(mf,h):lc.addScaledVector(mf.sub(e),h))}e.add(lc)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),rc.copy(n.boundingSphere),rc.applyMatrix4(s),_s.copy(t.ray).recast(t.near),!(rc.containsPoint(_s.origin)===!1&&(_s.intersectSphere(rc,gp)===null||_s.origin.distanceToSquared(gp)>(t.far-t.near)**2))&&(mp.copy(s).invert(),_s.copy(t.ray).applyMatrix4(mp),!(n.boundingBox!==null&&_s.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,_s)))}_computeIntersections(t,e,n){let i,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,u=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=u.length;p<_;p++){let g=u[p],m=o[g.materialIndex],M=Math.max(g.start,d.start),T=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let x=M,b=T;x<b;x+=3){let y=a.getX(x),E=a.getX(x+1),v=a.getX(x+2);i=hc(this,m,t,n,c,h,f,y,E,v),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let p=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let g=p,m=_;g<m;g+=3){let M=a.getX(g),T=a.getX(g+1),x=a.getX(g+2);i=hc(this,o,t,n,c,h,f,M,T,x),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=u.length;p<_;p++){let g=u[p],m=o[g.materialIndex],M=Math.max(g.start,d.start),T=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let x=M,b=T;x<b;x+=3){let y=x,E=x+1,v=x+2;i=hc(this,m,t,n,c,h,f,y,E,v),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let p=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let g=p,m=_;g<m;g+=3){let M=g,T=g+1,x=g+2;i=hc(this,o,t,n,c,h,f,M,T,x),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}};function b_(r,t,e,n,i,s,o,a){let l;if(t.side===bn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===Zr,a),l===null)return null;cc.copy(a),cc.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(cc);return c<e.near||c>e.far?null:{distance:c,point:cc.clone(),object:r}}function hc(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,sc),r.getVertexPosition(l,oc),r.getVertexPosition(c,ac);let h=b_(r,t,e,n,sc,oc,ac,_p);if(h){let f=new X;Vr.getBarycoord(_p,sc,oc,ac,f),i&&(h.uv=Vr.getInterpolatedAttribute(i,a,l,c,f,new Lt)),s&&(h.uv1=Vr.getInterpolatedAttribute(s,a,l,c,f,new Lt)),o&&(h.normal=Vr.getInterpolatedAttribute(o,a,l,c,f,new X),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new X,materialIndex:0};Vr.getNormal(sc,oc,ac,u.normal),h.face=u,h.barycoord=f}return h}var Aa=class extends kn{constructor(t=null,e=1,n=1,i,s,o,a,l,c=gn,h=gn,f,u){super(null,o,a,l,c,h,i,s,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ca=class extends oi{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ho=new Ne,xp=new Ne,uc=[],vp=new Ki,T_=new Ne,fa=new be,da=new Gr,Ra=class extends be{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ca(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,T_)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ki),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ho),vp.copy(t.boundingBox).applyMatrix4(ho),this.boundingBox.union(vp)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ho),da.copy(t.boundingSphere).applyMatrix4(ho),this.boundingSphere.union(da)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(fa.geometry=this.geometry,fa.material=this.material,fa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),da.copy(this.boundingSphere),da.applyMatrix4(n),t.ray.intersectsSphere(da)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,ho),xp.multiplyMatrices(n,ho),fa.matrixWorld=xp,fa.raycast(t,uc);for(let o=0,a=uc.length;o<a;o++){let l=uc[o];l.instanceId=s,l.object=this,e.push(l)}uc.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Ca(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Aa(new Float32Array(i*this.count),i,this.count,lh,Si));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;return s[l]=a,s.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},xs=new Gr,w_=new Lt(.5,.5),fc=new X,bo=class{constructor(t=new Ni,e=new Ni,n=new Ni,i=new Ni,s=new Ni,o=new Ni){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ui,n=!1){let i=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],f=s[5],u=s[6],d=s[7],p=s[8],_=s[9],g=s[10],m=s[11],M=s[12],T=s[13],x=s[14],b=s[15];if(i[0].setComponents(c-o,d-h,m-p,b-M).normalize(),i[1].setComponents(c+o,d+h,m+p,b+M).normalize(),i[2].setComponents(c+a,d+f,m+_,b+T).normalize(),i[3].setComponents(c-a,d-f,m-_,b-T).normalize(),n)i[4].setComponents(l,u,g,x).normalize(),i[5].setComponents(c-l,d-u,m-g,b-x).normalize();else if(i[4].setComponents(c-l,d-u,m-g,b-x).normalize(),e===Ui)i[5].setComponents(c+l,d+u,m+g,b+x).normalize();else if(e===xo)i[5].setComponents(l,u,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xs)}intersectsSprite(t){xs.center.set(0,0,0);let e=w_.distanceTo(t.center);return xs.radius=.7071067811865476+e,xs.applyMatrix4(t.matrixWorld),this.intersectsSphere(xs)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(fc.x=i.normal.x>0?t.max.x:t.min.x,fc.y=i.normal.y>0?t.max.y:t.min.y,fc.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(fc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Pa=class extends kn{constructor(t=[],e=Jr,n,i,s,o,a,l,c,h){super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},xr=class extends kn{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Hr=class extends kn{constructor(t,e,n=ki,i,s,o,a=gn,l=gn,c,h=qi,f=1){if(h!==qi&&h!==Kr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:f};super(u,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new So(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Dc=class extends Hr{constructor(t,e=ki,n=Jr,i,s,o=gn,a=gn,l,c=qi){let h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,n,i,s,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ia=class extends kn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Fi=class r extends Vn{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],f=[],u=0,d=0;p("z","y","x",-1,-1,n,e,t,o,s,0),p("z","y","x",1,-1,n,e,-t,o,s,1),p("x","z","y",1,1,t,n,e,i,o,2),p("x","z","y",1,-1,t,n,-e,i,o,3),p("x","y","z",1,-1,t,e,n,i,s,4),p("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new He(c,3)),this.setAttribute("normal",new He(h,3)),this.setAttribute("uv",new He(f,2));function p(_,g,m,M,T,x,b,y,E,v,w){let C=x/E,L=b/v,D=x/2,V=b/2,I=y/2,O=E+1,H=v+1,z=0,nt=0,$=new X;for(let P=0;P<H;P++){let K=P*L-V;for(let It=0;It<O;It++){let Et=It*C-D;$[_]=Et*M,$[g]=K*T,$[m]=I,c.push($.x,$.y,$.z),$[_]=0,$[g]=0,$[m]=y>0?1:-1,h.push($.x,$.y,$.z),f.push(It/E),f.push(1-P/v),z+=1}}for(let P=0;P<v;P++)for(let K=0;K<E;K++){let It=u+K+O*P,Et=u+K+O*(P+1),zt=u+(K+1)+O*(P+1),Vt=u+(K+1)+O*P;l.push(It,Et,Vt),l.push(Et,zt,Vt),nt+=6}a.addGroup(d,nt,w),d+=nt,u+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var La=class r extends Vn{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let s=[],o=[],a=[],l=[],c=new X,h=new Lt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){let d=n+f/e*i;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,l.push(h.x,h.y)}for(let f=1;f<=e;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new He(o,3)),this.setAttribute("normal",new He(a,3)),this.setAttribute("uv",new He(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ss=class r extends Vn{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let h=[],f=[],u=[],d=[],p=0,_=[],g=n/2,m=0;M(),o===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new He(f,3)),this.setAttribute("normal",new He(u,3)),this.setAttribute("uv",new He(d,2));function M(){let x=new X,b=new X,y=0,E=(e-t)/n;for(let v=0;v<=s;v++){let w=[],C=v/s,L=C*(e-t)+t;for(let D=0;D<=i;D++){let V=D/i,I=V*l+a,O=Math.sin(I),H=Math.cos(I);b.x=L*O,b.y=-C*n+g,b.z=L*H,f.push(b.x,b.y,b.z),x.set(O,E,H).normalize(),u.push(x.x,x.y,x.z),d.push(V,1-C),w.push(p++)}_.push(w)}for(let v=0;v<i;v++)for(let w=0;w<s;w++){let C=_[w][v],L=_[w+1][v],D=_[w+1][v+1],V=_[w][v+1];(t>0||w!==0)&&(h.push(C,L,V),y+=3),(e>0||w!==s-1)&&(h.push(L,D,V),y+=3)}c.addGroup(m,y,0),m+=y}function T(x){let b=p,y=new Lt,E=new X,v=0,w=x===!0?t:e,C=x===!0?1:-1;for(let D=1;D<=i;D++)f.push(0,g*C,0),u.push(0,C,0),d.push(.5,.5),p++;let L=p;for(let D=0;D<=i;D++){let I=D/i*l+a,O=Math.cos(I),H=Math.sin(I);E.x=w*H,E.y=g*C,E.z=w*O,f.push(E.x,E.y,E.z),u.push(0,C,0),y.x=O*.5+.5,y.y=H*.5*C+.5,d.push(y.x,y.y),p++}for(let D=0;D<i;D++){let V=b+D,I=L+D;x===!0?h.push(I,I+1,V):h.push(I+1,I,V),v+=3}c.addGroup(m,v,x===!0?1:2),m+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var ai=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){re("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,s=n.length,o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);let h=n[i],u=n[i+1]-h,d=(o-h)/u;return(i+d)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);let o=this.getPoint(i),a=this.getPoint(s),l=e||(o.isVector2?new Lt:new X);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new X,i=[],s=[],o=[],a=new X,l=new Ne;for(let d=0;d<=t;d++){let p=d/t;i[d]=this.getTangentAt(p,new X)}s[0]=new X,o[0]=new X;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),f=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(pe(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(i[d],s[d])}if(e===!0){let d=Math.acos(pe(s[0].dot(s[t]),-1,1));d/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(d=-d);for(let p=1;p<=t;p++)s[p].applyMatrix4(l.makeRotationAxis(i[p],d*p)),o[p].crossVectors(i[p],s[p])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},To=class extends ai{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Lt){let n=e,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);let a=this.aStartAngle+t*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Nc=class extends To{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function n0(){let r=0,t=0,e=0,n=0;function i(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,f){let u=(o-s)/c-(a-s)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+f)+(l-a)/f;u*=h,d*=h,i(o,a,u,d)},calc:function(s){let o=s*s,a=o*s;return r+t*s+e*o+n*a}}}var yp=new X,Sp=new X,gf=new n0,_f=new n0,xf=new n0,Uc=class extends ai{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new X){let n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(Sp.subVectors(i[0],i[1]).add(i[0]),c=Sp);let f=i[a%s],u=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(yp.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=yp),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(f),d),_=Math.pow(f.distanceToSquared(u),d),g=Math.pow(u.distanceToSquared(h),d);_<1e-4&&(_=1),p<1e-4&&(p=_),g<1e-4&&(g=_),gf.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,p,_,g),_f.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,p,_,g),xf.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,p,_,g)}else this.curveType==="catmullrom"&&(gf.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),_f.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),xf.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(gf.calc(l),_f.calc(l),xf.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new X().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Mp(r,t,e,n,i){let s=(n-t)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*r+e}function E_(r,t){let e=1-r;return e*e*t}function A_(r,t){return 2*(1-r)*r*t}function C_(r,t){return r*r*t}function _a(r,t,e,n){return E_(r,t)+A_(r,e)+C_(r,n)}function R_(r,t){let e=1-r;return e*e*e*t}function P_(r,t){let e=1-r;return 3*e*e*r*t}function I_(r,t){return 3*(1-r)*r*r*t}function L_(r,t){return r*r*r*t}function xa(r,t,e,n,i){return R_(r,t)+P_(r,e)+I_(r,n)+L_(r,i)}var Da=class extends ai{constructor(t=new Lt,e=new Lt,n=new Lt,i=new Lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Lt){let n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(xa(t,i.x,s.x,o.x,a.x),xa(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Oc=class extends ai{constructor(t=new X,e=new X,n=new X,i=new X){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new X){let n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(xa(t,i.x,s.x,o.x,a.x),xa(t,i.y,s.y,o.y,a.y),xa(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Na=class extends ai{constructor(t=new Lt,e=new Lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Lt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Fc=class extends ai{constructor(t=new X,e=new X){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new X){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new X){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ua=class extends ai{constructor(t=new Lt,e=new Lt,n=new Lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Lt){let n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(_a(t,i.x,s.x,o.x),_a(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Bc=class extends ai{constructor(t=new X,e=new X,n=new X){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new X){let n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(_a(t,i.x,s.x,o.x),_a(t,i.y,s.y,o.y),_a(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Oa=class extends ai{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Lt){let n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],f=i[o>i.length-3?i.length-1:o+2];return n.set(Mp(a,l.x,c.x,h.x,f.x),Mp(a,l.y,c.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new Lt().fromArray(i))}return this}},wf=Object.freeze({__proto__:null,ArcCurve:Nc,CatmullRomCurve3:Uc,CubicBezierCurve:Da,CubicBezierCurve3:Oc,EllipseCurve:To,LineCurve:Na,LineCurve3:Fc,QuadraticBezierCurve:Ua,QuadraticBezierCurve3:Bc,SplineCurve:Oa}),zc=class extends ai{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new wf[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,s=this.curves;i<s.length;i++){let o=s[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new wf[i.type]().fromJSON(i))}return this}},Fa=class extends zc{constructor(t){super(),this.type="Path",this.currentPoint=new Lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Na(this.currentPoint.clone(),new Lt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let s=new Ua(this.currentPoint.clone(),new Lt(t,e),new Lt(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,o){let a=new Da(this.currentPoint.clone(),new Lt(t,e),new Lt(n,i),new Lt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Oa(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,s,o),this}absarc(t,e,n,i,s,o){return this.absellipse(t,e,n,n,i,s,o),this}ellipse(t,e,n,i,s,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,s,o,a,l),this}absellipse(t,e,n,i,s,o,a,l){let c=new To(t,e,n,i,s,o,a,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},wo=class extends Fa{constructor(t){super(t),this.uuid=As(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new Fa().fromJSON(i))}return this}};function D_(r,t,e=2){let n=t&&t.length,i=n?t[0]*e:r.length,s=_1(r,0,i,e,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=B_(r,t,s,e)),r.length>80*e){a=r[0],l=r[1];let h=a,f=l;for(let u=e;u<i;u+=e){let d=r[u],p=r[u+1];d<a&&(a=d),p<l&&(l=p),d>h&&(h=d),p>f&&(f=p)}c=Math.max(h-a,f-l),c=c!==0?32767/c:0}return Ba(s,o,e,a,l,c,0),o}function _1(r,t,e,n,i){let s;if(i===Z_(r,t,e,n)>0)for(let o=t;o<e;o+=n)s=bp(o/n|0,r[o],r[o+1],s);else for(let o=e-n;o>=t;o-=n)s=bp(o/n|0,r[o],r[o+1],s);return s&&Eo(s,s.next)&&(ka(s),s=s.next),s}function Ms(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(Eo(e,e.next)||Ze(e.prev,e,e.next)===0)){if(ka(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ba(r,t,e,n,i,s,o){if(!r)return;!o&&s&&H_(r,n,i,s);let a=r;for(;r.prev!==r.next;){let l=r.prev,c=r.next;if(s?U_(r,n,i,s):N_(r)){t.push(l.i,r.i,c.i),ka(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=O_(Ms(r),t),Ba(r,t,e,n,i,s,2)):o===2&&F_(r,t,e,n,i,s):Ba(Ms(r),t,e,n,i,s,1);break}}}function N_(r){let t=r.prev,e=r,n=r.next;if(Ze(t,e,n)>=0)return!1;let i=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(i,s,o),f=Math.min(a,l,c),u=Math.max(i,s,o),d=Math.max(a,l,c),p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=u&&p.y>=f&&p.y<=d&&pa(i,a,s,l,o,c,p.x,p.y)&&Ze(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function U_(r,t,e,n){let i=r.prev,s=r,o=r.next;if(Ze(i,s,o)>=0)return!1;let a=i.x,l=s.x,c=o.x,h=i.y,f=s.y,u=o.y,d=Math.min(a,l,c),p=Math.min(h,f,u),_=Math.max(a,l,c),g=Math.max(h,f,u),m=Ef(d,p,t,e,n),M=Ef(_,g,t,e,n),T=r.prevZ,x=r.nextZ;for(;T&&T.z>=m&&x&&x.z<=M;){if(T.x>=d&&T.x<=_&&T.y>=p&&T.y<=g&&T!==i&&T!==o&&pa(a,h,l,f,c,u,T.x,T.y)&&Ze(T.prev,T,T.next)>=0||(T=T.prevZ,x.x>=d&&x.x<=_&&x.y>=p&&x.y<=g&&x!==i&&x!==o&&pa(a,h,l,f,c,u,x.x,x.y)&&Ze(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;T&&T.z>=m;){if(T.x>=d&&T.x<=_&&T.y>=p&&T.y<=g&&T!==i&&T!==o&&pa(a,h,l,f,c,u,T.x,T.y)&&Ze(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;x&&x.z<=M;){if(x.x>=d&&x.x<=_&&x.y>=p&&x.y<=g&&x!==i&&x!==o&&pa(a,h,l,f,c,u,x.x,x.y)&&Ze(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function O_(r,t){let e=r;do{let n=e.prev,i=e.next.next;!Eo(n,i)&&v1(n,e,e.next,i)&&za(n,i)&&za(i,n)&&(t.push(n.i,e.i,i.i),ka(e),ka(e.next),e=r=i),e=e.next}while(e!==r);return Ms(e)}function F_(r,t,e,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Q_(o,a)){let l=y1(o,a);o=Ms(o,o.next),l=Ms(l,l.next),Ba(o,t,e,n,i,s,0),Ba(l,t,e,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function B_(r,t,e,n){let i=[];for(let s=0,o=t.length;s<o;s++){let a=t[s]*n,l=s<o-1?t[s+1]*n:r.length,c=_1(r,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(X_(c))}i.sort(z_);for(let s=0;s<i.length;s++)e=k_(i[s],e);return e}function z_(r,t){let e=r.x-t.x;if(e===0&&(e=r.y-t.y,e===0)){let n=(r.next.y-r.y)/(r.next.x-r.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function k_(r,t){let e=V_(r,t);if(!e)return t;let n=y1(e,r);return Ms(n,n.next),Ms(e,e.next)}function V_(r,t){let e=t,n=r.x,i=r.y,s=-1/0,o;if(Eo(r,e))return e;do{if(Eo(r,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){let f=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>s&&(s=f,o=e.x<e.next.x?e:e.next,f===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&x1(i<c?n:s,i,l,c,i<c?s:n,i,e.x,e.y)){let f=Math.abs(i-e.y)/(n-e.x);za(e,r)&&(f<h||f===h&&(e.x>o.x||e.x===o.x&&G_(o,e)))&&(o=e,h=f)}e=e.next}while(e!==a);return o}function G_(r,t){return Ze(r.prev,r,t.prev)<0&&Ze(t.next,r,r.next)<0}function H_(r,t,e,n){let i=r;do i.z===0&&(i.z=Ef(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,W_(i)}function W_(r){let t,e=1;do{let n=r,i;r=null;let s=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;n=o}s.nextZ=null,e*=2}while(t>1);return r}function Ef(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function X_(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function x1(r,t,e,n,i,s,o,a){return(i-o)*(t-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(i-o)*(n-a)}function pa(r,t,e,n,i,s,o,a){return!(r===o&&t===a)&&x1(r,t,e,n,i,s,o,a)}function Q_(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!Y_(r,t)&&(za(r,t)&&za(t,r)&&q_(r,t)&&(Ze(r.prev,r,t.prev)||Ze(r,t.prev,t))||Eo(r,t)&&Ze(r.prev,r,r.next)>0&&Ze(t.prev,t,t.next)>0)}function Ze(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function Eo(r,t){return r.x===t.x&&r.y===t.y}function v1(r,t,e,n){let i=pc(Ze(r,t,e)),s=pc(Ze(r,t,n)),o=pc(Ze(e,n,r)),a=pc(Ze(e,n,t));return!!(i!==s&&o!==a||i===0&&dc(r,e,t)||s===0&&dc(r,n,t)||o===0&&dc(e,r,n)||a===0&&dc(e,t,n))}function dc(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function pc(r){return r>0?1:r<0?-1:0}function Y_(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&v1(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function za(r,t){return Ze(r.prev,r,r.next)<0?Ze(r,t,r.next)>=0&&Ze(r,r.prev,t)>=0:Ze(r,t,r.prev)<0||Ze(r,r.next,t)<0}function q_(r,t){let e=r,n=!1,i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function y1(r,t){let e=Af(r.i,r.x,r.y),n=Af(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function bp(r,t,e,n){let i=Af(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function ka(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Af(r,t,e){return{i:r,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Z_(r,t,e,n){let i=0;for(let s=t,o=e-n;s<e;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}var Cf=class{static triangulate(t,e,n=2){return D_(t,e,n)}},vs=class r{static area(t){let e=t.length,n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return r.area(t)<0}static triangulateShape(t,e){let n=[],i=[],s=[];Tp(t),wp(n,t);let o=t.length;e.forEach(Tp);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,wp(n,e[l]);let a=Cf.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function Tp(r){let t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function wp(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}var Va=class r extends Vn{constructor(t=new wo([new Lt(.5,.5),new Lt(-.5,.5),new Lt(-.5,-.5),new Lt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],s=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new He(i,3)),this.setAttribute("uv",new He(s,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:J_,T,x=!1,b,y,E,v;if(m){T=m.getSpacedPoints(h),x=!0,u=!1;let tt=m.isCatmullRomCurve3?m.closed:!1;b=m.computeFrenetFrames(h,tt),y=new X,E=new X,v=new X}u||(g=0,d=0,p=0,_=0);let w=a.extractPoints(c),C=w.shape,L=w.holes;if(!vs.isClockWise(C)){C=C.reverse();for(let tt=0,at=L.length;tt<at;tt++){let ct=L[tt];vs.isClockWise(ct)&&(L[tt]=ct.reverse())}}function V(tt){let ct=10000000000000001e-36,N=tt[0];for(let gt=1;gt<=tt.length;gt++){let Dt=gt%tt.length,Gt=tt[Dt],Ft=Gt.x-N.x,ne=Gt.y-N.y,U=Ft*Ft+ne*ne,jt=Math.max(Math.abs(Gt.x),Math.abs(Gt.y),Math.abs(N.x),Math.abs(N.y)),Xt=ct*jt*jt;if(U<=Xt){tt.splice(Dt,1),gt--;continue}N=Gt}}V(C),L.forEach(V);let I=L.length,O=C;for(let tt=0;tt<I;tt++){let at=L[tt];C=C.concat(at)}function H(tt,at,ct){return at||se("ExtrudeGeometry: vec does not exist"),tt.clone().addScaledVector(at,ct)}let z=C.length;function nt(tt,at,ct){let N,gt,Dt,Gt=tt.x-at.x,Ft=tt.y-at.y,ne=ct.x-tt.x,U=ct.y-tt.y,jt=Gt*Gt+Ft*Ft,Xt=Gt*U-Ft*ne;if(Math.abs(Xt)>Number.EPSILON){let R=Math.sqrt(jt),S=Math.sqrt(ne*ne+U*U),W=at.x-Ft/R,J=at.y+Gt/R,it=ct.x-U/S,St=ct.y+ne/S,dt=((it-W)*U-(St-J)*ne)/(Gt*U-Ft*ne);N=W+Gt*dt-tt.x,gt=J+Ft*dt-tt.y;let rt=N*N+gt*gt;if(rt<=2)return new Lt(N,gt);Dt=Math.sqrt(rt/2)}else{let R=!1;Gt>Number.EPSILON?ne>Number.EPSILON&&(R=!0):Gt<-Number.EPSILON?ne<-Number.EPSILON&&(R=!0):Math.sign(Ft)===Math.sign(U)&&(R=!0),R?(N=-Ft,gt=Gt,Dt=Math.sqrt(jt)):(N=Gt,gt=Ft,Dt=Math.sqrt(jt/2))}return new Lt(N/Dt,gt/Dt)}let $=[];for(let tt=0,at=O.length,ct=at-1,N=tt+1;tt<at;tt++,ct++,N++)ct===at&&(ct=0),N===at&&(N=0),$[tt]=nt(O[tt],O[ct],O[N]);let P=[],K,It=$.concat();for(let tt=0,at=I;tt<at;tt++){let ct=L[tt];K=[];for(let N=0,gt=ct.length,Dt=gt-1,Gt=N+1;N<gt;N++,Dt++,Gt++)Dt===gt&&(Dt=0),Gt===gt&&(Gt=0),K[N]=nt(ct[N],ct[Dt],ct[Gt]);P.push(K),It=It.concat(K)}let Et;if(g===0)Et=vs.triangulateShape(O,L);else{let tt=[],at=[];for(let ct=0;ct<g;ct++){let N=ct/g,gt=d*Math.cos(N*Math.PI/2),Dt=p*Math.sin(N*Math.PI/2)+_;for(let Gt=0,Ft=O.length;Gt<Ft;Gt++){let ne=H(O[Gt],$[Gt],Dt);Q(ne.x,ne.y,-gt),N===0&&tt.push(ne)}for(let Gt=0,Ft=I;Gt<Ft;Gt++){let ne=L[Gt];K=P[Gt];let U=[];for(let jt=0,Xt=ne.length;jt<Xt;jt++){let R=H(ne[jt],K[jt],Dt);Q(R.x,R.y,-gt),N===0&&U.push(R)}N===0&&at.push(U)}}Et=vs.triangulateShape(tt,at)}let zt=Et.length,Vt=p+_;for(let tt=0;tt<z;tt++){let at=u?H(C[tt],It[tt],Vt):C[tt];x?(E.copy(b.normals[0]).multiplyScalar(at.x),y.copy(b.binormals[0]).multiplyScalar(at.y),v.copy(T[0]).add(E).add(y),Q(v.x,v.y,v.z)):Q(at.x,at.y,0)}for(let tt=1;tt<=h;tt++)for(let at=0;at<z;at++){let ct=u?H(C[at],It[at],Vt):C[at];x?(E.copy(b.normals[tt]).multiplyScalar(ct.x),y.copy(b.binormals[tt]).multiplyScalar(ct.y),v.copy(T[tt]).add(E).add(y),Q(v.x,v.y,v.z)):Q(ct.x,ct.y,f/h*tt)}for(let tt=g-1;tt>=0;tt--){let at=tt/g,ct=d*Math.cos(at*Math.PI/2),N=p*Math.sin(at*Math.PI/2)+_;for(let gt=0,Dt=O.length;gt<Dt;gt++){let Gt=H(O[gt],$[gt],N);Q(Gt.x,Gt.y,f+ct)}for(let gt=0,Dt=L.length;gt<Dt;gt++){let Gt=L[gt];K=P[gt];for(let Ft=0,ne=Gt.length;Ft<ne;Ft++){let U=H(Gt[Ft],K[Ft],N);x?Q(U.x,U.y+T[h-1].y,T[h-1].x+ct):Q(U.x,U.y,f+ct)}}}ee(),B();function ee(){let tt=i.length/3;if(u){let at=0,ct=z*at;for(let N=0;N<zt;N++){let gt=Et[N];_t(gt[2]+ct,gt[1]+ct,gt[0]+ct)}at=h+g*2,ct=z*at;for(let N=0;N<zt;N++){let gt=Et[N];_t(gt[0]+ct,gt[1]+ct,gt[2]+ct)}}else{for(let at=0;at<zt;at++){let ct=Et[at];_t(ct[2],ct[1],ct[0])}for(let at=0;at<zt;at++){let ct=Et[at];_t(ct[0]+z*h,ct[1]+z*h,ct[2]+z*h)}}n.addGroup(tt,i.length/3-tt,0)}function B(){let tt=i.length/3,at=0;Y(O,at),at+=O.length;for(let ct=0,N=L.length;ct<N;ct++){let gt=L[ct];Y(gt,at),at+=gt.length}n.addGroup(tt,i.length/3-tt,1)}function Y(tt,at){let ct=tt.length;for(;--ct>=0;){let N=ct,gt=ct-1;gt<0&&(gt=tt.length-1);for(let Dt=0,Gt=h+g*2;Dt<Gt;Dt++){let Ft=z*Dt,ne=z*(Dt+1),U=at+N+Ft,jt=at+gt+Ft,Xt=at+gt+ne,R=at+N+ne;ft(U,jt,Xt,R)}}}function Q(tt,at,ct){l.push(tt),l.push(at),l.push(ct)}function _t(tt,at,ct){Ct(tt),Ct(at),Ct(ct);let N=i.length/3,gt=M.generateTopUV(n,i,N-3,N-2,N-1);yt(gt[0]),yt(gt[1]),yt(gt[2])}function ft(tt,at,ct,N){Ct(tt),Ct(at),Ct(N),Ct(at),Ct(ct),Ct(N);let gt=i.length/3,Dt=M.generateSideWallUV(n,i,gt-6,gt-3,gt-2,gt-1);yt(Dt[0]),yt(Dt[1]),yt(Dt[3]),yt(Dt[1]),yt(Dt[2]),yt(Dt[3])}function Ct(tt){i.push(l[tt*3+0]),i.push(l[tt*3+1]),i.push(l[tt*3+2])}function yt(tt){s.push(tt.x),s.push(tt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return $_(e,n,t)}static fromJSON(t,e){let n=[];for(let s=0,o=t.shapes.length;s<o;s++){let a=e[t.shapes[s]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new wf[i.type]().fromJSON(i)),new r(n,t.options)}},J_={generateTopUV:function(r,t,e,n,i){let s=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new Lt(s,o),new Lt(a,l),new Lt(c,h)]},generateSideWallUV:function(r,t,e,n,i,s){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],f=t[n*3+2],u=t[i*3],d=t[i*3+1],p=t[i*3+2],_=t[s*3],g=t[s*3+1],m=t[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Lt(o,1-l),new Lt(c,1-f),new Lt(u,1-p),new Lt(_,1-m)]:[new Lt(a,1-l),new Lt(h,1-f),new Lt(d,1-p),new Lt(g,1-m)]}};function $_(r,t,e){if(e.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){let s=r[n];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ga=class r extends Vn{constructor(t=[new Lt(0,-.5),new Lt(.5,0),new Lt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=pe(i,0,Math.PI*2);let s=[],o=[],a=[],l=[],c=[],h=1/e,f=new X,u=new Lt,d=new X,p=new X,_=new X,g=0,m=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:g=t[M+1].x-t[M].x,m=t[M+1].y-t[M].y,d.x=m*1,d.y=-g,d.z=m*0,_.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:g=t[M+1].x-t[M].x,m=t[M+1].y-t[M].y,d.x=m*1,d.y=-g,d.z=m*0,p.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),l.push(d.x,d.y,d.z),_.copy(p)}for(let M=0;M<=e;M++){let T=n+M*h*i,x=Math.sin(T),b=Math.cos(T);for(let y=0;y<=t.length-1;y++){f.x=t[y].x*x,f.y=t[y].y,f.z=t[y].x*b,o.push(f.x,f.y,f.z),u.x=M/e,u.y=y/(t.length-1),a.push(u.x,u.y);let E=l[3*y+0]*x,v=l[3*y+1],w=l[3*y+0]*b;c.push(E,v,w)}}for(let M=0;M<e;M++)for(let T=0;T<t.length-1;T++){let x=T+M*t.length,b=x,y=x+t.length,E=x+t.length+1,v=x+1;s.push(b,y,v),s.push(E,v,y)}this.setIndex(s),this.setAttribute("position",new He(o,3)),this.setAttribute("uv",new He(a,2)),this.setAttribute("normal",new He(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.points,t.segments,t.phiStart,t.phiLength)}};var ji=class r extends Vn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,f=t/a,u=e/l,d=[],p=[],_=[],g=[];for(let m=0;m<h;m++){let M=m*u-o;for(let T=0;T<c;T++){let x=T*f-s;p.push(x,-M,0),_.push(0,0,1),g.push(T/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<a;M++){let T=M+c*m,x=M+c*(m+1),b=M+1+c*(m+1),y=M+1+c*m;d.push(T,x,y),d.push(x,b,y)}this.setIndex(d),this.setAttribute("position",new He(p,3)),this.setAttribute("normal",new He(_,3)),this.setAttribute("uv",new He(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}};var Ha=class r extends Vn{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],f=new X,u=new X,d=[],p=[],_=[],g=[];for(let m=0;m<=n;m++){let M=[],T=m/n,x=o+T*a,b=t*Math.cos(x),y=Math.sqrt(t*t-b*b),E=0;m===0&&o===0?E=.5/e:m===n&&l===Math.PI&&(E=-.5/e);for(let v=0;v<=e;v++){let w=v/e,C=i+w*s;f.x=-y*Math.cos(C),f.y=b,f.z=y*Math.sin(C),p.push(f.x,f.y,f.z),u.copy(f).normalize(),_.push(u.x,u.y,u.z),g.push(w+E,1-T),M.push(c++)}h.push(M)}for(let m=0;m<n;m++)for(let M=0;M<e;M++){let T=h[m][M+1],x=h[m][M],b=h[m+1][M],y=h[m+1][M+1];(m!==0||o>0)&&d.push(T,x,y),(m!==n-1||l<Math.PI)&&d.push(x,b,y)}this.setIndex(d),this.setAttribute("position",new He(p,3)),this.setAttribute("normal",new He(_,3)),this.setAttribute("uv",new He(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Cs(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];if(Ep(i))i.isRenderTargetTexture?(re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(Ep(i[0])){let s=[];for(let o=0,a=i.length;o<a;o++)s[o]=i[o].clone();t[e][n]=s}else t[e][n]=i.slice();else t[e][n]=i}}return t}function Pn(r){let t={};for(let e=0;e<r.length;e++){let n=Cs(r[e]);for(let i in n)t[i]=n[i]}return t}function Ep(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function K_(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function i0(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Me.workingColorSpace}var S1={clone:Cs,merge:Pn},j_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,t3=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,li=class extends _r{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=j_,this.fragmentShader=t3,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Cs(t.uniforms),this.uniformsGroups=K_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new ce().setHex(i.value);break;case"v2":this.uniforms[n].value=new Lt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new X().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Ye().fromArray(i.value);break;case"m3":this.uniforms[n].value=new ae().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Ne().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},kc=class extends li{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Bi=class extends _r{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=al,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Wr=class extends Bi{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Lt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return pe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ce(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Wa=class extends _r{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=al,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.combine=eh,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Vc=class extends _r{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=n1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Gc=class extends _r{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function uo(r,t){return!r||r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function vf(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}var Xr=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Hc=class extends Xr{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Mf,endingEnd:Mf}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,o=t+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case bf:s=t,a=2*e-n;break;case Tf:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case bf:o=t,l=2*n-e;break;case Tf:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,p=(n-e)/(i-e),_=p*p,g=_*p,m=-u*g+2*u*_-u*p,M=(1+u)*g+(-1.5-2*u)*_+(-.5+u)*p+1,T=(-1-d)*g+(1.5+d)*_+.5*p,x=d*g-d*_;for(let b=0;b!==a;++b)s[b]=m*o[h+b]+M*o[c+b]+T*o[l+b]+x*o[f+b];return s}},Wc=class extends Xr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),f=1-h;for(let u=0;u!==a;++u)s[u]=o[c+u]*f+o[l+u]*h;return s}},Xc=class extends Xr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Qc=class extends Xr{interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,f=this.outTangents;if(!h||!f){let p=(n-e)/(i-e),_=1-p;for(let g=0;g!==a;++g)s[g]=o[c+g]*_+o[l+g]*p;return s}let u=a*2,d=t-1;for(let p=0;p!==a;++p){let _=o[c+p],g=o[l+p],m=d*u+p*2,M=f[m],T=f[m+1],x=t*u+p*2,b=h[x],y=h[x+1],E=n3(n,e,M,b,i);s[p]=M1(E,_,T,y,g)}return s}};function M1(r,t,e,n,i){let s=1-r;return s*s*s*t+3*s*s*r*e+3*s*r*r*n+r*r*r*i}function e3(r,t,e,n,i){let s=1-r;return 3*s*s*(e-t)+6*s*r*(n-e)+3*r*r*(i-n)}function n3(r,t,e,n,i){let s=(r-t)/(i-t);for(let o=0;o<8;o++){let a=M1(s,t,e,n,i)-r;if(Math.abs(a)<1e-10)break;let l=e3(s,t,e,n,i);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-a/l))}return s}var ci=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=uo(e,this.TimeBufferType),this.values=uo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:uo(t.times,Array),values:uo(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),vf(t.settings)&&(n.settings={inTangents:uo(t.settings.inTangents,Array),outTangents:uo(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Xc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Wc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Hc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Qc(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case va:e=this.InterpolantFactoryMethodDiscrete;break;case Cc:e=this.InterpolantFactoryMethodLinear;break;case _c:e=this.InterpolantFactoryMethodSmooth;break;case Sf:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return re("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return va;case this.InterpolantFactoryMethodLinear:return Cc;case this.InterpolantFactoryMethodSmooth:return _c;case this.InterpolantFactoryMethodBezier:return Sf}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;vf(this.settings)&&(Ap(this.settings.inTangents,t),Ap(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(se("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(se("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){se("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){se("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&W2(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){se("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===_c,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let f=a*n,u=f-n,d=f+n;for(let p=0;p!==n;++p){let _=e[f+p];if(_!==e[u+p]||_!==e[d+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let f=a*n,u=o*n;for(let d=0;d!==n;++d)e[u+d]=e[f+d]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,vf(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function Ap(r,t){for(let e=0,n=r.length;e!==n;e+=2)r[e]*=t}ci.prototype.ValueTypeName="";ci.prototype.TimeBufferType=Float32Array;ci.prototype.ValueBufferType=Float32Array;ci.prototype.DefaultInterpolation=Cc;var Qr=class extends ci{constructor(t,e,n){super(t,e,n)}};Qr.prototype.ValueTypeName="bool";Qr.prototype.ValueBufferType=Array;Qr.prototype.DefaultInterpolation=va;Qr.prototype.InterpolantFactoryMethodLinear=void 0;Qr.prototype.InterpolantFactoryMethodSmooth=void 0;var Yc=class extends ci{constructor(t,e,n,i){super(t,e,n,i)}};Yc.prototype.ValueTypeName="color";var qc=class extends ci{constructor(t,e,n,i){super(t,e,n,i)}};qc.prototype.ValueTypeName="number";var Zc=class extends Xr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)Ji.slerpFlat(s,0,o,c-a,o,c,l);return s}},Xa=class extends ci{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Zc(this.times,this.values,this.getValueSize(),t)}};Xa.prototype.ValueTypeName="quaternion";Xa.prototype.InterpolantFactoryMethodSmooth=void 0;var Yr=class extends ci{constructor(t,e,n){super(t,e,n)}};Yr.prototype.ValueTypeName="string";Yr.prototype.ValueBufferType=Array;Yr.prototype.DefaultInterpolation=va;Yr.prototype.InterpolantFactoryMethodLinear=void 0;Yr.prototype.InterpolantFactoryMethodSmooth=void 0;var Jc=class extends ci{constructor(t,e,n,i){super(t,e,n,i)}};Jc.prototype.ValueTypeName="vector";var $c=class{constructor(t,e,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],p=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},b1=new $c,Kc=class{constructor(t){this.manager=t!==void 0?t:b1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Kc.DEFAULT_MATERIAL_NAME="__DEFAULT";var bs=class extends _n{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ce(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Qa=class extends bs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_n.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ce(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},yf=new Ne,Cp=new X,Rp=new X,Ya=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Lt(512,512),this.mapType=$n,this.map=null,this.mapPass=null,this.matrix=new Ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bo,this._frameExtents=new Lt(1,1),this._viewportCount=1,this._viewports=[new Ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Cp.setFromMatrixPosition(t.matrixWorld),e.position.copy(Cp),Rp.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Rp),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){yf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(yf,t.coordinateSystem,t.reversedDepth);let s=this._frameExtents,o=i?i.z/s.x:1,a=i?i.w/s.y:1,l=i?i.x/s.x:0,c=i?i.y/s.y:0;t.coordinateSystem===xo||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(yf)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},mc=new X,gc=new Ji,Qi=new X,qa=class extends _n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ne,this.projectionMatrix=new Ne,this.projectionMatrixInverse=new Ne,this.coordinateSystem=Ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(mc,gc,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(mc,gc,Qi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(mc,gc,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(mc,gc,Qi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},kr=new X,Pp=new Lt,Ip=new Lt,Sn=class extends qa{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=yo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ma*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return yo*2*Math.atan(Math.tan(ma*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){kr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(kr.x,kr.y).multiplyScalar(-t/kr.z),kr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(kr.x,kr.y).multiplyScalar(-t/kr.z)}getViewSize(t,e){return this.getViewBounds(t,Pp,Ip),e.subVectors(Ip,Pp)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ma*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Rf=class extends Ya{constructor(){super(new Sn(90,1,.5,500)),this.isPointLightShadow=!0}},Za=class extends bs{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Rf}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},qr=class extends qa{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Pf=class extends Ya{constructor(){super(new qr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ts=class extends bs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_n.DEFAULT_UP),this.updateMatrix(),this.target=new _n,this.shadow=new Pf}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},Ja=class extends bs{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var fo=-90,po=1,jc=class extends _n{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Sn(fo,po,t,e);i.layers=this.layers,this.add(i);let s=new Sn(fo,po,t,e);s.layers=this.layers,this.add(s);let o=new Sn(fo,po,t,e);o.layers=this.layers,this.add(o);let a=new Sn(fo,po,t,e);a.layers=this.layers,this.add(a);let l=new Sn(fo,po,t,e);l.layers=this.layers,this.add(l);let c=new Sn(fo,po,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===Ui)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===xo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},th=class extends Sn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var r0="\\[\\]\\.:\\/",i3=new RegExp("["+r0+"]","g"),s0="[^"+r0+"]",r3="[^"+r0.replace("\\.","")+"]",s3=/((?:WC+[\/:])*)/.source.replace("WC",s0),o3=/(WCOD+)?/.source.replace("WCOD",r3),a3=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",s0),l3=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",s0),c3=new RegExp("^"+s3+o3+a3+l3+"$"),h3=["material","materials","bones","map"],If=class{constructor(t,e,n){let i=n||We.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},We=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(i3,"")}static parseTrackName(t){let e=c3.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);h3.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){re("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){se("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){se("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){se("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){se("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){se("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){se("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){se("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;se("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){se("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){se("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};We.Composite=If;We.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};We.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};We.prototype.GetterByBindingType=[We.prototype._getValue_direct,We.prototype._getValue_array,We.prototype._getValue_arrayElement,We.prototype._getValue_toArray];We.prototype.SetterByBindingTypeAndVersioning=[[We.prototype._setValue_direct,We.prototype._setValue_direct_setNeedsUpdate,We.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[We.prototype._setValue_array,We.prototype._setValue_array_setNeedsUpdate,We.prototype._setValue_array_setMatrixWorldNeedsUpdate],[We.prototype._setValue_arrayElement,We.prototype._setValue_arrayElement_setNeedsUpdate,We.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[We.prototype._setValue_fromArray,We.prototype._setValue_fromArray_setNeedsUpdate,We.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var tT=new Float32Array(1);var Lf=class r{static{r.prototype.isMatrix2=!0}constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=i,this}};function o0(r,t,e,n){let i=u3(n);switch(e){case Jf:return r*t;case lh:return r*t/i.components*i.byteLength;case ch:return r*t/i.components*i.byteLength;case jr:return r*t*2/i.components*i.byteLength;case hh:return r*t*2/i.components*i.byteLength;case $f:return r*t*3/i.components*i.byteLength;case Mi:return r*t*4/i.components*i.byteLength;case uh:return r*t*4/i.components*i.byteLength;case el:case nl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case il:case rl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case dh:case mh:return Math.max(r,16)*Math.max(t,8)/4;case fh:case ph:return Math.max(r,8)*Math.max(t,8)/2;case gh:case _h:case vh:case yh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case xh:case sl:case Sh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Mh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case bh:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Th:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case wh:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Eh:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Ah:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Ch:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Rh:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Ph:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Ih:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Lh:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Dh:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Nh:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Uh:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Oh:case Fh:case Bh:return Math.ceil(r/4)*Math.ceil(t/4)*16;case zh:case kh:return Math.ceil(r/4)*Math.ceil(t/4)*8;case ol:case Vh:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function u3(r){switch(r){case $n:case Qf:return{byteLength:1,components:1};case Ro:case Yf:case Vi:return{byteLength:2,components:1};case oh:case ah:return{byteLength:2,components:4};case ki:case sh:case Si:return{byteLength:4,components:1};case qf:case Zf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function X1(){let r=null,t=!1,e=null,n=null;function i(s,o){n=r.requestAnimationFrame(i),e(s,o)}return{start:function(){t!==!0&&e!==null&&r!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function d3(r){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,f=c.byteLength,u=r.createBuffer();r.bindBuffer(l,u),r.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let h=l.array,f=l.updateRanges;if(r.bindBuffer(c,a),f.length===0)r.bufferSubData(c,0,h);else{f.sort((d,p)=>d.start-p.start);let u=0;for(let d=1;d<f.length;d++){let p=f[u],_=f[d];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++u,f[u]=_)}f.length=u+1;for(let d=0,p=f.length;d<p;d++){let _=f[d];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var p3=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,m3=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,g3=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_3=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,x3=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,v3=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,y3=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,S3=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,M3=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,b3=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,T3=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,w3=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,E3=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,A3=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,C3=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,R3=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,P3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,I3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,L3=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,D3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,N3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,U3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,O3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,F3=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,B3=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,z3=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,k3=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,V3=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,G3=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,H3=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,W3="gl_FragColor = linearToOutputTexel( gl_FragColor );",X3=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Q3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Y3=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,q3=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Z3=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,J3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$3=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,K3=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,j3=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ex=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,nx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ix=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,ox=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,ax=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ux=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,fx=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,dx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,px=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,mx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gx=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,_x=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Tx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ex=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ax=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Px=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ix=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Dx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Nx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ux=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ox=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Fx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Bx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Wx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,$x=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Kx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,jx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,tv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ev=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,nv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,iv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,rv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ov=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,av=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,lv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,cv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,hv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,dv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,pv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_v=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Sv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Mv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,bv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Tv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ev=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Av=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Rv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Iv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Dv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Uv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ov=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,zv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Hv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Yv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,me={alphahash_fragment:p3,alphahash_pars_fragment:m3,alphamap_fragment:g3,alphamap_pars_fragment:_3,alphatest_fragment:x3,alphatest_pars_fragment:v3,aomap_fragment:y3,aomap_pars_fragment:S3,batching_pars_vertex:M3,batching_vertex:b3,begin_vertex:T3,beginnormal_vertex:w3,bsdfs:E3,iridescence_fragment:A3,bumpmap_pars_fragment:C3,clipping_planes_fragment:R3,clipping_planes_pars_fragment:P3,clipping_planes_pars_vertex:I3,clipping_planes_vertex:L3,color_fragment:D3,color_pars_fragment:N3,color_pars_vertex:U3,color_vertex:O3,common:F3,cube_uv_reflection_fragment:B3,defaultnormal_vertex:z3,displacementmap_pars_vertex:k3,displacementmap_vertex:V3,emissivemap_fragment:G3,emissivemap_pars_fragment:H3,colorspace_fragment:W3,colorspace_pars_fragment:X3,envmap_fragment:Q3,envmap_common_pars_fragment:Y3,envmap_pars_fragment:q3,envmap_pars_vertex:Z3,envmap_physical_pars_fragment:ox,envmap_vertex:J3,fog_vertex:$3,fog_pars_vertex:K3,fog_fragment:j3,fog_pars_fragment:tx,gradientmap_pars_fragment:ex,lightmap_pars_fragment:nx,lights_lambert_fragment:ix,lights_lambert_pars_fragment:rx,lights_pars_begin:sx,lights_toon_fragment:ax,lights_toon_pars_fragment:lx,lights_phong_fragment:cx,lights_phong_pars_fragment:hx,lights_physical_fragment:ux,lights_physical_pars_fragment:fx,lights_fragment_begin:dx,lights_fragment_maps:px,lights_fragment_end:mx,lightprobes_pars_fragment:gx,logdepthbuf_fragment:_x,logdepthbuf_pars_fragment:xx,logdepthbuf_pars_vertex:vx,logdepthbuf_vertex:yx,map_fragment:Sx,map_pars_fragment:Mx,map_particle_fragment:bx,map_particle_pars_fragment:Tx,metalnessmap_fragment:wx,metalnessmap_pars_fragment:Ex,morphinstance_vertex:Ax,morphcolor_vertex:Cx,morphnormal_vertex:Rx,morphtarget_pars_vertex:Px,morphtarget_vertex:Ix,normal_fragment_begin:Lx,normal_fragment_maps:Dx,normal_pars_fragment:Nx,normal_pars_vertex:Ux,normal_vertex:Ox,normalmap_pars_fragment:Fx,clearcoat_normal_fragment_begin:Bx,clearcoat_normal_fragment_maps:zx,clearcoat_pars_fragment:kx,iridescence_pars_fragment:Vx,opaque_fragment:Gx,packing:Hx,premultiplied_alpha_fragment:Wx,project_vertex:Xx,dithering_fragment:Qx,dithering_pars_fragment:Yx,roughnessmap_fragment:qx,roughnessmap_pars_fragment:Zx,shadowmap_pars_fragment:Jx,shadowmap_pars_vertex:$x,shadowmap_vertex:Kx,shadowmask_pars_fragment:jx,skinbase_vertex:tv,skinning_pars_vertex:ev,skinning_vertex:nv,skinnormal_vertex:iv,specularmap_fragment:rv,specularmap_pars_fragment:sv,tonemapping_fragment:ov,tonemapping_pars_fragment:av,transmission_fragment:lv,transmission_pars_fragment:cv,uv_pars_fragment:hv,uv_pars_vertex:uv,uv_vertex:fv,worldpos_vertex:dv,background_vert:pv,background_frag:mv,backgroundCube_vert:gv,backgroundCube_frag:_v,cube_vert:xv,cube_frag:vv,depth_vert:yv,depth_frag:Sv,distance_vert:Mv,distance_frag:bv,equirect_vert:Tv,equirect_frag:wv,linedashed_vert:Ev,linedashed_frag:Av,meshbasic_vert:Cv,meshbasic_frag:Rv,meshlambert_vert:Pv,meshlambert_frag:Iv,meshmatcap_vert:Lv,meshmatcap_frag:Dv,meshnormal_vert:Nv,meshnormal_frag:Uv,meshphong_vert:Ov,meshphong_frag:Fv,meshphysical_vert:Bv,meshphysical_frag:zv,meshtoon_vert:kv,meshtoon_frag:Vv,points_vert:Gv,points_frag:Hv,shadow_vert:Wv,shadow_frag:Xv,sprite_vert:Qv,sprite_frag:Yv},Bt={common:{diffuse:{value:new ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ae}},envmap:{envMap:{value:null},envMapRotation:{value:new ae},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ae}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ae}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ae},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ae},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ae},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ae}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ae}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ae}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new X},probesMax:{value:new X},probesResolution:{value:new X}},points:{diffuse:{value:new ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0},uvTransform:{value:new ae}},sprite:{diffuse:{value:new ce(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}}},nr={basic:{uniforms:Pn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:Pn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new ce(0)},envMapIntensity:{value:1}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:Pn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new ce(0)},specular:{value:new ce(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:Pn([Bt.common,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.roughnessmap,Bt.metalnessmap,Bt.fog,Bt.lights,{emissive:{value:new ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:Pn([Bt.common,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.gradientmap,Bt.fog,Bt.lights,{emissive:{value:new ce(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:Pn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:Pn([Bt.points,Bt.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:Pn([Bt.common,Bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:Pn([Bt.common,Bt.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:Pn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:Pn([Bt.sprite,Bt.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new ae},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ae}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distance:{uniforms:Pn([Bt.common,Bt.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distance_vert,fragmentShader:me.distance_frag},shadow:{uniforms:Pn([Bt.lights,Bt.fog,{color:{value:new ce(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};nr.physical={uniforms:Pn([nr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ae},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ae},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ae},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ae},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ae},sheen:{value:0},sheenColor:{value:new ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ae},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ae},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ae},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ae},attenuationDistance:{value:0},attenuationColor:{value:new ce(0)},specularColor:{value:new ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ae},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ae},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ae}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};var Wh={r:0,b:0,g:0},qv=new Ne,Q1=new ae;Q1.set(-1,0,0,0,1,0,0,0,1);function Zv(r,t,e,n,i,s){let o=new ce(0),a=i===!0?0:1,l,c,h=null,f=0,u=null;function d(M){let T=M.isScene===!0?M.background:null;if(T&&T.isTexture){let x=M.backgroundBlurriness>0;T=t.get(T,x)}return T}function p(M){let T=!1,x=d(M);x===null?g(o,a):x&&x.isColor&&(g(x,1),T=!0);let b=r.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(r.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(M,T){let x=d(T);x&&(x.isCubeTexture||x.mapping===ja)?(c===void 0&&(c=new be(new Fi(1,1,1),new li({name:"BackgroundCubeMaterial",uniforms:Cs(nr.backgroundCube.uniforms),vertexShader:nr.backgroundCube.vertexShader,fragmentShader:nr.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,y,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(qv.makeRotationFromEuler(T.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Q1),c.material.toneMapped=Me.getTransfer(x.colorSpace)!==Le,(h!==x||f!==x.version||u!==r.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,u=r.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new be(new ji(2,2),new li({name:"BackgroundMaterial",uniforms:Cs(nr.background.uniforms),vertexShader:nr.background.vertexShader,fragmentShader:nr.background.fragmentShader,side:Zr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=Me.getTransfer(x.colorSpace)!==Le,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||u!==r.toneMapping)&&(l.material.needsUpdate=!0,h=x,f=x.version,u=r.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function g(M,T){M.getRGB(Wh,i0(r)),e.buffers.color.setClear(Wh.r,Wh.g,Wh.b,T,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,T=1){o.set(M),a=T,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,g(o,a)},render:p,addToRenderList:_,dispose:m}}function Jv(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=u(null),s=i,o=!1;function a(L,D,V,I,O){let H=!1,z=f(L,I,V,D);s!==z&&(s=z,c(s.object)),H=d(L,I,V,O),H&&p(L,I,V,O),O!==null&&t.update(O,r.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,x(L,D,V,I),O!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return r.createVertexArray()}function c(L){return r.bindVertexArray(L)}function h(L){return r.deleteVertexArray(L)}function f(L,D,V,I){let O=I.wireframe===!0,H=n[D.id];H===void 0&&(H={},n[D.id]=H);let z=L.isInstancedMesh===!0?L.id:0,nt=H[z];nt===void 0&&(nt={},H[z]=nt);let $=nt[V.id];$===void 0&&($={},nt[V.id]=$);let P=$[O];return P===void 0&&(P=u(l()),$[O]=P),P}function u(L){let D=[],V=[],I=[];for(let O=0;O<e;O++)D[O]=0,V[O]=0,I[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:V,attributeDivisors:I,object:L,attributes:{},index:null}}function d(L,D,V,I){let O=s.attributes,H=D.attributes,z=0,nt=V.getAttributes();for(let $ in nt)if(nt[$].location>=0){let K=O[$],It=H[$];if(It===void 0&&($==="instanceMatrix"&&L.instanceMatrix&&(It=L.instanceMatrix),$==="instanceColor"&&L.instanceColor&&(It=L.instanceColor)),K===void 0||K.attribute!==It||It&&K.data!==It.data)return!0;z++}return s.attributesNum!==z||s.index!==I}function p(L,D,V,I){let O={},H=D.attributes,z=0,nt=V.getAttributes();for(let $ in nt)if(nt[$].location>=0){let K=H[$];K===void 0&&($==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),$==="instanceColor"&&L.instanceColor&&(K=L.instanceColor));let It={};It.attribute=K,K&&K.data&&(It.data=K.data),O[$]=It,z++}s.attributes=O,s.attributesNum=z,s.index=I}function _(){let L=s.newAttributes;for(let D=0,V=L.length;D<V;D++)L[D]=0}function g(L){m(L,0)}function m(L,D){let V=s.newAttributes,I=s.enabledAttributes,O=s.attributeDivisors;V[L]=1,I[L]===0&&(r.enableVertexAttribArray(L),I[L]=1),O[L]!==D&&(r.vertexAttribDivisor(L,D),O[L]=D)}function M(){let L=s.newAttributes,D=s.enabledAttributes;for(let V=0,I=D.length;V<I;V++)D[V]!==L[V]&&(r.disableVertexAttribArray(V),D[V]=0)}function T(L,D,V,I,O,H,z){z===!0?r.vertexAttribIPointer(L,D,V,O,H):r.vertexAttribPointer(L,D,V,I,O,H)}function x(L,D,V,I){_();let O=I.attributes,H=V.getAttributes(),z=D.defaultAttributeValues;for(let nt in H){let $=H[nt];if($.location>=0){let P=O[nt];if(P===void 0&&(nt==="instanceMatrix"&&L.instanceMatrix&&(P=L.instanceMatrix),nt==="instanceColor"&&L.instanceColor&&(P=L.instanceColor)),P!==void 0){let K=P.normalized,It=P.itemSize,Et=t.get(P);if(Et===void 0)continue;let zt=Et.buffer,Vt=Et.type,ee=Et.bytesPerElement,B=Vt===r.INT||Vt===r.UNSIGNED_INT||P.gpuType===sh;if(P.isInterleavedBufferAttribute){let Y=P.data,Q=Y.stride,_t=P.offset;if(Y.isInstancedInterleavedBuffer){for(let ft=0;ft<$.locationSize;ft++)m($.location+ft,Y.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ft=0;ft<$.locationSize;ft++)g($.location+ft);r.bindBuffer(r.ARRAY_BUFFER,zt);for(let ft=0;ft<$.locationSize;ft++)T($.location+ft,It/$.locationSize,Vt,K,Q*ee,(_t+It/$.locationSize*ft)*ee,B)}else{if(P.isInstancedBufferAttribute){for(let Y=0;Y<$.locationSize;Y++)m($.location+Y,P.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let Y=0;Y<$.locationSize;Y++)g($.location+Y);r.bindBuffer(r.ARRAY_BUFFER,zt);for(let Y=0;Y<$.locationSize;Y++)T($.location+Y,It/$.locationSize,Vt,K,It*ee,It/$.locationSize*Y*ee,B)}}else if(z!==void 0){let K=z[nt];if(K!==void 0)switch(K.length){case 2:r.vertexAttrib2fv($.location,K);break;case 3:r.vertexAttrib3fv($.location,K);break;case 4:r.vertexAttrib4fv($.location,K);break;default:r.vertexAttrib1fv($.location,K)}}}}M()}function b(){w();for(let L in n){let D=n[L];for(let V in D){let I=D[V];for(let O in I){let H=I[O];for(let z in H)h(H[z].object),delete H[z];delete I[O]}}delete n[L]}}function y(L){if(n[L.id]===void 0)return;let D=n[L.id];for(let V in D){let I=D[V];for(let O in I){let H=I[O];for(let z in H)h(H[z].object),delete H[z];delete I[O]}}delete n[L.id]}function E(L){for(let D in n){let V=n[D];for(let I in V){let O=V[I];if(O[L.id]===void 0)continue;let H=O[L.id];for(let z in H)h(H[z].object),delete H[z];delete O[L.id]}}}function v(L){for(let D in n){let V=n[D],I=L.isInstancedMesh===!0?L.id:0,O=V[I];if(O!==void 0){for(let H in O){let z=O[H];for(let nt in z)h(z[nt].object),delete z[nt];delete O[H]}delete V[I],Object.keys(V).length===0&&delete n[D]}}}function w(){C(),o=!0,s!==i&&(s=i,c(s.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:w,resetDefaultState:C,dispose:b,releaseStatesOfGeometry:y,releaseStatesOfObject:v,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:g,disableUnusedAttributes:M}}function $v(r,t,e){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(r.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];e.update(u,n,1)}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function Kv(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){return!(E!==Mi&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let v=E===Vi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==$n&&E!==Si&&!v&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(re("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&re("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),M=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),T=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),b=r.getParameter(r.MAX_SAMPLES),y=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:M,maxVaryings:T,maxFragmentUniforms:x,maxSamples:b,samples:y}}function jv(r){let t=this,e=null,n=0,i=!1,s=!1,o=new Ni,a=new ae,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||n!==0||i;return i=u,n=f.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){let p=f.clippingPlanes,_=f.clipIntersection,g=f.clipShadows,m=r.get(f);if(!i||p===null||p.length===0||s&&!g)s?h(null):c();else{let M=s?0:n,T=M*4,x=m.clippingState||null;l.value=x,x=h(p,u,T,d);for(let b=0;b!==T;++b)x[b]=e[b];m.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,p){let _=f!==null?f.length:0,g=null;if(_!==0){if(g=l.value,p!==!0||g===null){let m=d+_*4,M=u.matrixWorldInverse;a.getNormalMatrix(M),(g===null||g.length<m)&&(g=new Float32Array(m));for(let T=0,x=d;T!==_;++T,x+=4)o.copy(f[T]).applyMatrix4(M,a),o.normal.toArray(g,x),g[x+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}var Lo=4,ty=6,ey=20,ny=256,ll=new qr,T1=new ce,a0=null,l0=0,c0=0,h0=!1,iy=new X,Rs=new X,ts=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,s={}){let{size:o=256,position:a=iy}=s;a0=this._renderer.getRenderTarget(),l0=this._renderer.getActiveCubeFace(),c0=this._renderer.getActiveMipmapLevel(),h0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=A1(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=E1(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(a0,l0,c0),this._renderer.xr.enabled=h0,t.scissorTest=!1,Io(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Jr||t.mapping===Es?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),a0=this._renderer.getRenderTarget(),l0=this._renderer.getActiveCubeFace(),c0=this._renderer.getActiveMipmapLevel(),h0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:Vi,format:Mi,colorSpace:ya,depthBuffer:!1},i=w1(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=w1(t,e,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=ry(s)),this._blurMaterial=oy(s,t,e),this._ggxMaterial=sy(s,t,e)}return i}_compileMaterial(t){let e=new be(new Vn,t);this._renderer.compile(e,ll)}_sceneToCubeUV(t,e,n,i,s){let l=new Sn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(T1),f.toneMapping=zi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(i),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new be(new Fi,new Oi({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,g=_.material,m=!1,M=t.background;M?M.isColor&&(g.color.copy(M),t.background=null,m=!0):(g.color.copy(T1),m=!0);for(let T=0;T<6;T++){let x=T%3;x===0?(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[T],s.y,s.z)):x===1?(l.up.set(0,0,c[T]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[T],s.z)):(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[T]));let b=this._cubeSize;Io(i,x*b,T>2?b:0,b,b),f.setRenderTarget(i),m&&f.render(_,l),f.render(t,l)}f.toneMapping=d,f.autoClear=u,t.background=M}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Jr||t.mapping===Es;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=A1()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=E1());let s=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;Io(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ll)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=c*1.25,d=f*u,{_lodMax:p}=this,_=this._sizeLods[n],g=3*_*(n>p-Lo?n-p+Lo:0),m=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=p-e,Io(s,g,m,3*_,2*_),i.setRenderTarget(s),i.render(a,ll),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=p-n,Io(t,g,m,3*_,2*_),i.setRenderTarget(t),i.render(a,ll)}_blur(t,e,n,i){let s=this._pingPongRenderTarget,o=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,n,o),this._blurPass(s,t,n,n,o)}_blurPass(t,e,n,i,s){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[i];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[i],f=3*h*(i>this._lodMax-Lo?i-this._lodMax+Lo:0),u=4*(this._cubeSize-h);Io(e,f,u,3*h,2*h),o.setRenderTarget(e),o.render(l,ll)}};function ry(r){let t=[],e=[],n=r,i=r-Lo+1+ty;for(let s=0;s<i;s++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,u=6,d=3,p=new Float32Array(d*u*f),_=new Float32Array(d*u*f);for(let m=0;m<f;m++){let M=m%3*2/3-1,T=m>2?0:-1,x=[M,T,0,M+2/3,T,0,M+2/3,T+1,0,M,T,0,M+2/3,T+1,0,M,T+1,0];p.set(x,d*u*m);for(let b=0;b<u;b++){let y=h[b*2]*2-1,E=h[b*2+1]*2-1;m===0?Rs.set(1,E,y):m===1?Rs.set(-y,1,-E):m===2?Rs.set(-y,E,1):m===3?Rs.set(-1,E,-y):m===4?Rs.set(-y,-1,E):Rs.set(y,E,-1),Rs.toArray(_,(m*u+b)*d)}}let g=new Vn;g.setAttribute("position",new oi(p,d)),g.setAttribute("outputDirection",new oi(_,d)),e.push(new be(g,null)),n>Lo&&n--}return{lodMeshes:e,sizeLods:t}}function w1(r,t,e){let n=new Jn(r,t,e);return n.texture.mapping=ja,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Io(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function sy(r,t,e){return new li({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ny,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Yh(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function oy(r,t,e){return new li({name:"SphericalGaussianBlur",defines:{SAMPLES:ey,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Yh(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function E1(){return new li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function A1(){return new li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function Yh(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Qh=class extends Jn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Pa(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Fi(5,5,5),s=new li({name:"CubemapFromEquirect",uniforms:Cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:bn,blending:tr});s.uniforms.tEquirect.value=e;let o=new be(i,s),a=e.minFilter;return e.minFilter===$r&&(e.minFilter=Mn),new jc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}};function ay(r){let t=new WeakMap,e=new WeakMap,n=null;function i(u,d=!1){return u==null?null:d?o(u):s(u)}function s(u){if(u&&u.isTexture){let d=u.mapping;if(d===nh||d===ih)if(t.has(u)){let p=t.get(u).texture;return a(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let _=new Qh(p.height);return _.fromEquirectangularTexture(r,u),t.set(u,_),u.addEventListener("dispose",c),a(_.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let d=u.mapping,p=d===nh||d===ih,_=d===Jr||d===Es;if(p||_){let g=e.get(u),m=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new ts(r)),g=p?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{let M=u.image;return p&&M&&M.height>0||_&&M&&l(M)?(n===null&&(n=new ts(r)),g=p?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function a(u,d){return d===nh?u.mapping=Jr:d===ih&&(u.mapping=Es),u}function l(u){let d=0,p=6;for(let _=0;_<p;_++)u[_]!==void 0&&d++;return d===p}function c(u){let d=u.target;d.removeEventListener("dispose",c);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:f}}function ly(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=r.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&ys("WebGLRenderer: "+n+" extension not supported."),i}}}function cy(r,t,e,n){let i={},s=new WeakMap;function o(f){let u=f.target;u.index!==null&&t.remove(u.index);for(let p in u.attributes)t.remove(u.attributes[p]);u.removeEventListener("dispose",o),delete i[u.id];let d=s.get(u);d&&(t.remove(d),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(f,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function l(f){let u=f.attributes;for(let d in u)t.update(u[d],r.ARRAY_BUFFER)}function c(f){let u=[],d=f.index,p=f.attributes.position,_=0;if(p===void 0)return;if(d!==null){let M=d.array;_=d.version;for(let T=0,x=M.length;T<x;T+=3){let b=M[T+0],y=M[T+1],E=M[T+2];u.push(b,y,y,E,E,b)}}else{let M=p.array;_=p.version;for(let T=0,x=M.length/3-1;T<x;T+=3){let b=T+0,y=T+1,E=T+2;u.push(b,y,y,E,E,b)}}let g=new(p.count>=65535?Ea:wa)(u,1);g.version=_;let m=s.get(f);m&&t.remove(m),s.set(f,g)}function h(f){let u=s.get(f);if(u){let d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function hy(r,t,e){let n;function i(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,u){r.drawElements(n,u,s,f*o),e.update(u,n,1)}function c(f,u,d){d!==0&&(r.drawElementsInstanced(n,u,s,f*o,d),e.update(u,n,d))}function h(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,f,0,d);let _=0;for(let g=0;g<d;g++)_+=u[g];e.update(_,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function uy(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:se("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function fy(r,t,e){let n=new WeakMap,i=new Ye;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==f){let w=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],T=0;d===!0&&(T=1),p===!0&&(T=2),_===!0&&(T=3);let x=a.attributes.position.count*T,b=1;x>t.maxTextureSize&&(b=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let y=new Float32Array(x*b*4*f),E=new ba(y,x,b,f);E.type=Si,E.needsUpdate=!0;let v=T*4;for(let C=0;C<f;C++){let L=g[C],D=m[C],V=M[C],I=x*b*4*C;for(let O=0;O<L.count;O++){let H=O*v;d===!0&&(i.fromBufferAttribute(L,O),y[I+H+0]=i.x,y[I+H+1]=i.y,y[I+H+2]=i.z,y[I+H+3]=0),p===!0&&(i.fromBufferAttribute(D,O),y[I+H+4]=i.x,y[I+H+5]=i.y,y[I+H+6]=i.z,y[I+H+7]=0),_===!0&&(i.fromBufferAttribute(V,O),y[I+H+8]=i.x,y[I+H+9]=i.y,y[I+H+10]=i.z,y[I+H+11]=V.itemSize===4?i.w:1)}}u={count:f,texture:E,size:new Lt(x,b)},n.set(a,u),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(r,"morphTargetBaseInfluence",p),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function dy(r,t,e,n,i){let s=new WeakMap;function o(c){let h=i.render.frame,f=c.geometry,u=t.get(c,f);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==h&&(d.update(),s.set(d,h))}return u}function a(){s=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var py={[zf]:"LINEAR_TONE_MAPPING",[kf]:"REINHARD_TONE_MAPPING",[Vf]:"CINEON_TONE_MAPPING",[Ka]:"ACES_FILMIC_TONE_MAPPING",[Hf]:"AGX_TONE_MAPPING",[Wf]:"NEUTRAL_TONE_MAPPING",[Gf]:"CUSTOM_TONE_MAPPING"};function my(r,t,e,n,i,s){let o=new Jn(t,e,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Vn;c.setAttribute("position",new He([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new He([0,2,0,0,2,0],2));let h=new kc({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new be(c,h),u=new qr(-1,1,1,-1,0,1),d=null,p=null,_=!1,g,m=null,M=[],T=!1;this.setSize=function(x,b){o.setSize(x,b),a!==null&&a.setSize(x,b),l!==null&&l.setSize(x,b);for(let y=0;y<M.length;y++){let E=M[y];E.setSize&&E.setSize(x,b)}},this.setEffects=function(x){M=x,T=M.length>0&&M[0].isRenderPass===!0;let b=o.width,y=o.height;M.length>0&&a===null&&(a=new Jn(b,y,{type:Vi,depthBuffer:!1,stencilBuffer:!1}),l=new Jn(b,y,{type:Vi,depthBuffer:!1,stencilBuffer:!1}));for(let E=0;E<M.length;E++){let v=M[E];v.setSize&&v.setSize(b,y)}},this.begin=function(x,b){if(_||x.toneMapping===zi&&M.length===0)return!1;if(m=b,b!==null){let y=b.width,E=b.height;(o.width!==y||o.height!==E)&&this.setSize(y,E)}return T===!1&&x.setRenderTarget(o),g=x.toneMapping,x.toneMapping=zi,!0},this.hasRenderPass=function(){return T},this.end=function(x,b){x.toneMapping=g,_=!0;let y=o,E=a;for(let v=0;v<M.length;v++){let w=M[v];w.enabled!==!1&&(w.render(x,E,y,b),w.needsSwap!==!1&&(y=E,E=E===a?l:a))}if(d!==x.outputColorSpace||p!==x.toneMapping){d=x.outputColorSpace,p=x.toneMapping,h.defines={},Me.getTransfer(d)===Le&&(h.defines.SRGB_TRANSFER="");let v=py[p];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=y.texture,x.setRenderTarget(m),x.render(f,u),m=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Y1=new kn,d0=new Hr(1,1),q1=new ba,Z1=new Ic,J1=new Pa,C1=[],R1=[],P1=new Float32Array(16),I1=new Float32Array(9),L1=new Float32Array(4);function Uo(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=C1[i];if(s===void 0&&(s=new Float32Array(i),C1[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function un(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function fn(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function qh(r,t){let e=R1[t];e===void 0&&(e=new Int32Array(t),R1[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function gy(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function _y(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(un(e,t))return;r.uniform2fv(this.addr,t),fn(e,t)}}function xy(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(un(e,t))return;r.uniform3fv(this.addr,t),fn(e,t)}}function vy(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(un(e,t))return;r.uniform4fv(this.addr,t),fn(e,t)}}function yy(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(un(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),fn(e,t)}else{if(un(e,n))return;L1.set(n),r.uniformMatrix2fv(this.addr,!1,L1),fn(e,n)}}function Sy(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(un(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),fn(e,t)}else{if(un(e,n))return;I1.set(n),r.uniformMatrix3fv(this.addr,!1,I1),fn(e,n)}}function My(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(un(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),fn(e,t)}else{if(un(e,n))return;P1.set(n),r.uniformMatrix4fv(this.addr,!1,P1),fn(e,n)}}function by(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Ty(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(un(e,t))return;r.uniform2iv(this.addr,t),fn(e,t)}}function wy(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(un(e,t))return;r.uniform3iv(this.addr,t),fn(e,t)}}function Ey(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(un(e,t))return;r.uniform4iv(this.addr,t),fn(e,t)}}function Ay(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Cy(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(un(e,t))return;r.uniform2uiv(this.addr,t),fn(e,t)}}function Ry(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(un(e,t))return;r.uniform3uiv(this.addr,t),fn(e,t)}}function Py(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(un(e,t))return;r.uniform4uiv(this.addr,t),fn(e,t)}}function Iy(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(d0.compareFunction=e.isReversedDepthBuffer()?Hh:Gh,s=d0):s=Y1,e.setTexture2D(t||s,i)}function Ly(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Z1,i)}function Dy(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||J1,i)}function Ny(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||q1,i)}function Uy(r){switch(r){case 5126:return gy;case 35664:return _y;case 35665:return xy;case 35666:return vy;case 35674:return yy;case 35675:return Sy;case 35676:return My;case 5124:case 35670:return by;case 35667:case 35671:return Ty;case 35668:case 35672:return wy;case 35669:case 35673:return Ey;case 5125:return Ay;case 36294:return Cy;case 36295:return Ry;case 36296:return Py;case 35678:case 36198:case 36298:case 36306:case 35682:return Iy;case 35679:case 36299:case 36307:return Ly;case 35680:case 36300:case 36308:case 36293:return Dy;case 36289:case 36303:case 36311:case 36292:return Ny}}function Oy(r,t){r.uniform1fv(this.addr,t)}function Fy(r,t){let e=Uo(t,this.size,2);r.uniform2fv(this.addr,e)}function By(r,t){let e=Uo(t,this.size,3);r.uniform3fv(this.addr,e)}function zy(r,t){let e=Uo(t,this.size,4);r.uniform4fv(this.addr,e)}function ky(r,t){let e=Uo(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Vy(r,t){let e=Uo(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Gy(r,t){let e=Uo(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Hy(r,t){r.uniform1iv(this.addr,t)}function Wy(r,t){r.uniform2iv(this.addr,t)}function Xy(r,t){r.uniform3iv(this.addr,t)}function Qy(r,t){r.uniform4iv(this.addr,t)}function Yy(r,t){r.uniform1uiv(this.addr,t)}function qy(r,t){r.uniform2uiv(this.addr,t)}function Zy(r,t){r.uniform3uiv(this.addr,t)}function Jy(r,t){r.uniform4uiv(this.addr,t)}function $y(r,t,e){let n=this.cache,i=t.length,s=qh(e,i);un(n,s)||(r.uniform1iv(this.addr,s),fn(n,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=d0:o=Y1;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,s[a])}function Ky(r,t,e){let n=this.cache,i=t.length,s=qh(e,i);un(n,s)||(r.uniform1iv(this.addr,s),fn(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Z1,s[o])}function jy(r,t,e){let n=this.cache,i=t.length,s=qh(e,i);un(n,s)||(r.uniform1iv(this.addr,s),fn(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||J1,s[o])}function tS(r,t,e){let n=this.cache,i=t.length,s=qh(e,i);un(n,s)||(r.uniform1iv(this.addr,s),fn(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||q1,s[o])}function eS(r){switch(r){case 5126:return Oy;case 35664:return Fy;case 35665:return By;case 35666:return zy;case 35674:return ky;case 35675:return Vy;case 35676:return Gy;case 5124:case 35670:return Hy;case 35667:case 35671:return Wy;case 35668:case 35672:return Xy;case 35669:case 35673:return Qy;case 5125:return Yy;case 36294:return qy;case 36295:return Zy;case 36296:return Jy;case 35678:case 36198:case 36298:case 36306:case 35682:return $y;case 35679:case 36299:case 36307:return Ky;case 35680:case 36300:case 36308:case 36293:return jy;case 36289:case 36303:case 36311:case 36292:return tS}}var p0=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Uy(e.type)}},m0=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=eS(e.type)}},g0=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(t,e[a.id],n)}}},u0=/(\w+)(\])?(\[|\.)?/g;function D1(r,t){r.seq.push(t),r.map[t.id]=t}function nS(r,t,e){let n=r.name,i=n.length;for(u0.lastIndex=0;;){let s=u0.exec(n),o=u0.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){D1(e,c===void 0?new p0(a,r,t):new m0(a,r,t));break}else{let f=e.map[a];f===void 0&&(f=new g0(a),D1(e,f)),e=f}}}var Do=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);nS(a,l,this)}let i=[],s=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):s.push(o);i.length>0&&(this.seq=i.concat(s))}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function N1(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var iS=37297,rS=0;function sS(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var U1=new ae;function oS(r){Me._getMatrix(U1,Me.workingColorSpace,r);let t=`mat3( ${U1.elements.map(e=>e.toFixed(4))} )`;switch(Me.getTransfer(r)){case Sa:return[t,"LinearTransferOETF"];case Le:return[t,"sRGBTransferOETF"];default:return re("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function O1(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+sS(r.getShaderSource(t),a)}else return s}function aS(r,t){let e=oS(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var lS={[zf]:"Linear",[kf]:"Reinhard",[Vf]:"Cineon",[Ka]:"ACESFilmic",[Hf]:"AgX",[Wf]:"Neutral",[Gf]:"Custom"};function cS(r,t){let e=lS[t];return e===void 0?(re("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Xh=new X;function hS(){Me.getLuminanceCoefficients(Xh);let r=Xh.x.toFixed(4),t=Xh.y.toFixed(4),e=Xh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uS(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hl).join(`
`)}function fS(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function dS(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function hl(r){return r!==""}function F1(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function B1(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var pS=/^[ \t]*#include +<([\w\d./]+)>/gm;function _0(r){return r.replace(pS,gS)}var mS=new Map;function gS(r,t){let e=me[t];if(e===void 0){let n=mS.get(t);if(n!==void 0)e=me[n],re('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return _0(e)}var _S=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function z1(r){return r.replace(_S,xS)}function xS(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function k1(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var vS={[$a]:"SHADOWMAP_TYPE_PCF",[Ao]:"SHADOWMAP_TYPE_VSM"};function yS(r){return vS[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var SS={[Jr]:"ENVMAP_TYPE_CUBE",[Es]:"ENVMAP_TYPE_CUBE",[ja]:"ENVMAP_TYPE_CUBE_UV"};function MS(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":SS[r.envMapMode]||"ENVMAP_TYPE_CUBE"}var bS={[Es]:"ENVMAP_MODE_REFRACTION"};function TS(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":bS[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var wS={[eh]:"ENVMAP_BLENDING_MULTIPLY",[jp]:"ENVMAP_BLENDING_MIX",[t1]:"ENVMAP_BLENDING_ADD"};function ES(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":wS[r.combine]||"ENVMAP_BLENDING_NONE"}function AS(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function CS(r,t,e,n){let i=r.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=yS(e),c=MS(e),h=TS(e),f=ES(e),u=AS(e),d=uS(e),p=fS(s),_=i.createProgram(),g,m,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(hl).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(hl).join(`
`),m.length>0&&(m+=`
`)):(g=[k1(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hl).join(`
`),m=[k1(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==zi?"#define TONE_MAPPING":"",e.toneMapping!==zi?me.tonemapping_pars_fragment:"",e.toneMapping!==zi?cS("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,aS("linearToOutputTexel",e.outputColorSpace),hS(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(hl).join(`
`)),o=_0(o),o=F1(o,e),o=B1(o,e),a=_0(a),a=F1(a,e),a=B1(a,e),o=z1(o),a=z1(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Kf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Kf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let T=M+g+o,x=M+m+a,b=N1(i,i.VERTEX_SHADER,T),y=N1(i,i.FRAGMENT_SHADER,x);i.attachShader(_,b),i.attachShader(_,y),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function E(L){if(r.debug.checkShaderErrors){let D=i.getProgramInfoLog(_)||"",V=i.getShaderInfoLog(b)||"",I=i.getShaderInfoLog(y)||"",O=D.trim(),H=V.trim(),z=I.trim(),nt=!0,$=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(nt=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,b,y);else{let P=O1(i,b,"vertex"),K=O1(i,y,"fragment");se("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+O+`
`+P+`
`+K)}else O!==""?re("WebGLProgram: Program Info Log:",O):(H===""||z==="")&&($=!1);$&&(L.diagnostics={runnable:nt,programLog:O,vertexShader:{log:H,prefix:g},fragmentShader:{log:z,prefix:m}})}i.deleteShader(b),i.deleteShader(y),v=new Do(i,_),w=dS(i,_)}let v;this.getUniforms=function(){return v===void 0&&E(this),v};let w;this.getAttributes=function(){return w===void 0&&E(this),w};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(_,iS)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=rS++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=y,this}var RS=0,x0=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new v0(t),e.set(t,n)),n}},v0=class{constructor(t){this.id=RS++,this.code=t,this.usedTimes=0}};function PS(r){return r===jr||r===sl||r===ol}function IS(r,t,e,n,i,s){let o=new Ta,a=new x0,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,u=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function _(v,w,C,L,D,V){let I=L.fog,O=D.geometry,H=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?L.environment:null,z=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,nt=t.get(v.envMap||H,z),$=nt&&nt.mapping===ja?nt.image.height:null,P=d[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&re("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let K=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,It=K!==void 0?K.length:0,Et=0;O.morphAttributes.position!==void 0&&(Et=1),O.morphAttributes.normal!==void 0&&(Et=2),O.morphAttributes.color!==void 0&&(Et=3);let zt,Vt,ee,B;if(P){let $t=nr[P];zt=$t.vertexShader,Vt=$t.fragmentShader}else{zt=v.vertexShader,Vt=v.fragmentShader;let $t=a.getVertexShaderStage(v),mt=a.getFragmentShaderStage(v);a.update(v,$t,mt),ee=$t.id,B=mt.id}let Y=r.getRenderTarget(),Q=r.state.buffers.depth.getReversed(),_t=D.isInstancedMesh===!0,ft=D.isBatchedMesh===!0,Ct=!!v.map,yt=!!v.matcap,tt=!!nt,at=!!v.aoMap,ct=!!v.lightMap,N=!!v.bumpMap&&v.wireframe===!1,gt=!!v.normalMap,Dt=!!v.displacementMap,Gt=!!v.emissiveMap,Ft=!!v.metalnessMap,ne=!!v.roughnessMap,U=v.anisotropy>0,jt=v.clearcoat>0,Xt=v.dispersion>0,R=v.retroreflectivity>0,S=v.iridescence>0,W=v.sheen>0,J=v.transmission>0,it=U&&!!v.anisotropyMap,St=jt&&!!v.clearcoatMap,dt=jt&&!!v.clearcoatNormalMap,rt=jt&&!!v.clearcoatRoughnessMap,ot=S&&!!v.iridescenceMap,vt=S&&!!v.iridescenceThicknessMap,kt=W&&!!v.sheenColorMap,Tt=W&&!!v.sheenRoughnessMap,At=!!v.specularMap,xt=!!v.specularColorMap,Ht=!!v.specularIntensityMap,Kt=J&&!!v.transmissionMap,G=J&&!!v.thicknessMap,bt=!!v.gradientMap,st=!!v.alphaMap,Mt=v.alphaTest>0,Pt=!!v.alphaHash,lt=!!v.extensions,pt=zi;v.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(pt=r.toneMapping);let ut={shaderID:P,shaderType:v.type,shaderName:v.name,vertexShader:zt,fragmentShader:Vt,defines:v.defines,customVertexShaderID:ee,customFragmentShaderID:B,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:ft,batchingColor:ft&&D._colorsTexture!==null,instancing:_t,instancingColor:_t&&D.instanceColor!==null,instancingMorph:_t&&D.morphTexture!==null,outputColorSpace:Y===null?r.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Me.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ct,matcap:yt,envMap:tt,envMapMode:tt&&nt.mapping,envMapCubeUVHeight:$,aoMap:at,lightMap:ct,bumpMap:N,normalMap:gt,displacementMap:Dt,emissiveMap:Gt,normalMapObjectSpace:gt&&v.normalMapType===i1,normalMapTangentSpace:gt&&v.normalMapType===al,packedNormalMap:gt&&v.normalMapType===al&&PS(v.normalMap.format),metalnessMap:Ft,roughnessMap:ne,anisotropy:U,anisotropyMap:it,clearcoat:jt,clearcoatMap:St,clearcoatNormalMap:dt,clearcoatRoughnessMap:rt,dispersion:Xt,retroreflection:R,iridescence:S,iridescenceMap:ot,iridescenceThicknessMap:vt,sheen:W,sheenColorMap:kt,sheenRoughnessMap:Tt,specularMap:At,specularColorMap:xt,specularIntensityMap:Ht,transmission:J,transmissionMap:Kt,thicknessMap:G,gradientMap:bt,opaque:v.transparent===!1&&v.blending===Co&&v.alphaToCoverage===!1,alphaMap:st,alphaTest:Mt,alphaHash:Pt,combine:v.combine,mapUv:Ct&&p(v.map.channel),aoMapUv:at&&p(v.aoMap.channel),lightMapUv:ct&&p(v.lightMap.channel),bumpMapUv:N&&p(v.bumpMap.channel),normalMapUv:gt&&p(v.normalMap.channel),displacementMapUv:Dt&&p(v.displacementMap.channel),emissiveMapUv:Gt&&p(v.emissiveMap.channel),metalnessMapUv:Ft&&p(v.metalnessMap.channel),roughnessMapUv:ne&&p(v.roughnessMap.channel),anisotropyMapUv:it&&p(v.anisotropyMap.channel),clearcoatMapUv:St&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:dt&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ot&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:vt&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&p(v.sheenRoughnessMap.channel),specularMapUv:At&&p(v.specularMap.channel),specularColorMapUv:xt&&p(v.specularColorMap.channel),specularIntensityMapUv:Ht&&p(v.specularIntensityMap.channel),transmissionMapUv:Kt&&p(v.transmissionMap.channel),thicknessMapUv:G&&p(v.thicknessMap.channel),alphaMapUv:st&&p(v.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(gt||U),vertexNormals:!!O.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!O.attributes.uv&&(Ct||st),fog:!!I,useFog:v.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||O.attributes.normal===void 0&&gt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Q,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:It,morphTextureStride:Et,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&C.length>0,shadowMapType:r.shadowMap.type,toneMapping:pt,decodeVideoTexture:Ct&&v.map.isVideoTexture===!0&&Me.getTransfer(v.map.colorSpace)===Le,decodeVideoTextureEmissive:Gt&&v.emissiveMap.isVideoTexture===!0&&Me.getTransfer(v.emissiveMap.colorSpace)===Le,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===hi,flipSided:v.side===bn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:lt&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(lt&&v.extensions.multiDraw===!0||ft)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ut.vertexUv1s=l.has(1),ut.vertexUv2s=l.has(2),ut.vertexUv3s=l.has(3),l.clear(),ut}function g(v){let w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(let C in v.defines)w.push(C),w.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(m(w,v),M(w,v),w.push(r.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function m(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numSunLights),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numSunLightShadows),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function M(v,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function T(v){let w=d[v.type],C;if(w){let L=nr[w];C=S1.clone(L.uniforms)}else C=v.uniforms;return C}function x(v,w){let C=h.get(w);return C!==void 0?++C.usedTimes:(C=new CS(r,w,v,i),c.push(C),h.set(w,C)),C}function b(v){if(--v.usedTimes===0){let w=c.indexOf(v);c[w]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function y(v){a.remove(v)}function E(){a.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:T,acquireProgram:x,releaseProgram:b,releaseShaderCache:y,programs:c,dispose:E}}function LS(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function DS(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function V1(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function G1(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function a(u,d,p,_,g,m){let M=r[t];return M===void 0?(M={id:u.id,object:u,geometry:d,material:p,materialVariant:o(u),groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},r[t]=M):(M.id=u.id,M.object=u,M.geometry=d,M.material=p,M.materialVariant=o(u),M.groupOrder=_,M.renderOrder=u.renderOrder,M.z=g,M.group=m),t++,M}function l(u,d,p,_,g,m,M){M.reversedDepth===!0&&(g=-g);let T=a(u,d,p,_,g,m);p.transmission>0?n.push(T):p.transparent===!0?i.push(T):e.push(T)}function c(u,d,p,_,g,m){let M=a(u,d,p,_,g,m);p.transmission>0?n.unshift(M):p.transparent===!0?i.unshift(M):e.unshift(M)}function h(u,d){e.length>1&&e.sort(u||DS),n.length>1&&n.sort(d||V1),i.length>1&&i.sort(d||V1)}function f(){for(let u=t,d=r.length;u<d;u++){let p=r[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:f,sort:h}}function NS(){let r=new WeakMap;function t(n,i){let s=r.get(n),o;return s===void 0?(o=new G1,r.set(n,[o])):i>=s.length?(o=new G1,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function US(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new X,color:new ce};break;case"SpotLight":e={position:new X,direction:new X,color:new ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new X,color:new ce,distance:0,decay:0};break;case"HemisphereLight":e={direction:new X,skyColor:new ce,groundColor:new ce};break;case"RectAreaLight":e={color:new ce,position:new X,halfWidth:new X,halfHeight:new X};break}return r[t.id]=e,e}}}function OS(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var FS=0;function BS(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function zS(r){let t=new US,e=OS(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new X);let i=new X,s=new Ne,o=new Ne;function a(c){let h=0,f=0,u=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let d=0,p=0,_=0,g=0,m=0,M=0,T=0,x=0,b=0,y=0,E=0,v=0,w=0,C=0;c.sort(BS);for(let D=0,V=c.length;D<V;D++){let I=c[D],O=I.color,H=I.intensity,z=I.distance,nt=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===jr?nt=I.shadow.map.texture:nt=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=O.r*H,f+=O.g*H,u+=O.b*H;else if(I.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(I.sh.coefficients[$],H);C++}else if(I.isSunLight){let $=t.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let P=I.shadow,K=e.get(I);K.shadowIntensity=P.intensity,K.shadowBias=P.bias,K.shadowNormalBias=P.normalBias,K.shadowRadius=P.radius,K.shadowMapSize.copy(P.mapSize).multiply(P.getFrameExtents()),n.sunShadow[p]=K,n.sunShadowMap[p]=nt;let It=P.getViewportCount();for(let Et=0;Et<It;Et++)n.sunShadowMatrix[_+Et]=P.getMatrix(Et),n.sunShadowCascade[_+Et]=P._cascadeData[Et];_+=It,p++}n.sun[d]=$,d++}else if(I.isDirectionalLight){let $=t.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let P=I.shadow,K=e.get(I);K.shadowIntensity=P.intensity,K.shadowBias=P.bias,K.shadowNormalBias=P.normalBias,K.shadowRadius=P.radius,K.shadowMapSize=P.mapSize,n.directionalShadow[g]=K,n.directionalShadowMap[g]=nt,n.directionalShadowMatrix[g]=I.shadow.matrix,b++}n.directional[g]=$,g++}else if(I.isSpotLight){let $=t.get(I);$.position.setFromMatrixPosition(I.matrixWorld),$.color.copy(O).multiplyScalar(H),$.distance=z,$.coneCos=Math.cos(I.angle),$.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),$.decay=I.decay,n.spot[M]=$;let P=I.shadow;if(I.map&&(n.spotLightMap[v]=I.map,v++,P.updateMatrices(I),I.castShadow&&w++),n.spotLightMatrix[M]=P.matrix,I.castShadow){let K=e.get(I);K.shadowIntensity=P.intensity,K.shadowBias=P.bias,K.shadowNormalBias=P.normalBias,K.shadowRadius=P.radius,K.shadowMapSize=P.mapSize,n.spotShadow[M]=K,n.spotShadowMap[M]=nt,E++}M++}else if(I.isRectAreaLight){let $=t.get(I);$.color.copy(O).multiplyScalar(H),$.halfWidth.set(I.width*.5,0,0),$.halfHeight.set(0,I.height*.5,0),n.rectArea[T]=$,T++}else if(I.isPointLight){let $=t.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity),$.distance=I.distance,$.decay=I.decay,I.castShadow){let P=I.shadow,K=e.get(I);K.shadowIntensity=P.intensity,K.shadowBias=P.bias,K.shadowNormalBias=P.normalBias,K.shadowRadius=P.radius,K.shadowMapSize=P.mapSize,K.shadowCameraNear=P.camera.near,K.shadowCameraFar=P.camera.far,n.pointShadow[m]=K,n.pointShadowMap[m]=nt,n.pointShadowMatrix[m]=I.shadow.matrix,y++}n.point[m]=$,m++}else if(I.isHemisphereLight){let $=t.get(I);$.skyColor.copy(I.color).multiplyScalar(H),$.groundColor.copy(I.groundColor).multiplyScalar(H),n.hemi[x]=$,x++}}T>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Bt.LTC_FLOAT_1,n.rectAreaLTC2=Bt.LTC_FLOAT_2):(n.rectAreaLTC1=Bt.LTC_HALF_1,n.rectAreaLTC2=Bt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let L=n.hash;(L.sunLength!==d||L.directionalLength!==g||L.pointLength!==m||L.spotLength!==M||L.rectAreaLength!==T||L.hemiLength!==x||L.numSunShadows!==p||L.numDirectionalShadows!==b||L.numPointShadows!==y||L.numSpotShadows!==E||L.numSpotMaps!==v||L.numLightProbes!==C)&&(n.sun.length=d,n.directional.length=g,n.spot.length=M,n.rectArea.length=T,n.point.length=m,n.hemi.length=x,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=y,n.pointShadowMap.length=y,n.pointShadowMatrix.length=y,n.spotShadow.length=E,n.spotShadowMap.length=E,n.spotLightMatrix.length=E+v-w,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,L.sunLength=d,L.directionalLength=g,L.pointLength=m,L.spotLength=M,L.rectAreaLength=T,L.hemiLength=x,L.numSunShadows=p,L.numDirectionalShadows=b,L.numPointShadows=y,L.numSpotShadows=E,L.numSpotMaps=v,L.numLightProbes=C,n.version=FS++)}function l(c,h){let f=0,u=0,d=0,p=0,_=0,g=0,m=h.matrixWorldInverse;for(let M=0,T=c.length;M<T;M++){let x=c[M];if(x.isSunLight){let b=n.sun[f];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(m),f++}else if(x.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(m),u++}else if(x.isSpotLight){let b=n.spot[p];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(m),p++}else if(x.isRectAreaLight){let b=n.rectArea[_];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),b.halfWidth.set(x.width*.5,0,0),b.halfHeight.set(0,x.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){let b=n.point[d];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){let b=n.hemi[g];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function H1(r){let t=new zS(r),e=[],n=[],i=[];function s(u){f.camera=u,e.length=0,n.length=0,i.length=0}function o(u){e.push(u)}function a(u){n.push(u)}function l(u){i.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let f={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function kS(r){let t=new WeakMap;function e(i,s=0){let o=t.get(i),a;return o===void 0?(a=new H1(r),t.set(i,[a])):s>=o.length?(a=new H1(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var VS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,GS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,HS=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],WS=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],W1=new Ne,cl=new X,f0=new X;function XS(r,t,e){let n=new bo,i=new Lt,s=new Lt,o=new Ye,a=new Vc,l=new Gc,c={},h=e.maxTextureSize,f={[Zr]:bn,[bn]:Zr,[hi]:hi},u=new li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:VS,fragmentShader:GS}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let p=new Vn;p.setAttribute("position",new oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new be(p,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$a;let m=this.type;this.render=function(y,E,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||y.length===0)return;this.type===Np&&(re("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=$a);let w=r.getRenderTarget(),C=r.getActiveCubeFace(),L=r.getActiveMipmapLevel(),D=r.state;D.setBlending(tr),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let V=m!==this.type;V&&E.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(O=>O.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,O=y.length;I<O;I++){let H=y[I],z=H.shadow;if(z===void 0){re("WebGLShadowMap:",H,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);let nt=z.getFrameExtents();i.multiply(nt),s.copy(z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/nt.x),i.x=s.x*nt.x,z.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/nt.y),i.y=s.y*nt.y,z.mapSize.y=s.y));let $=r.state.buffers.depth.getReversed();if(z.camera._reversedDepth=$,z.map===null||V===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Ao){if(H.isPointLight){re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Jn(i.x,i.y,{format:jr,type:Vi,minFilter:Mn,magFilter:Mn,generateMipmaps:!1}),z.map.texture.name=H.name+".shadowMap",z.map.depthTexture=new Hr(i.x,i.y,Si),z.map.depthTexture.name=H.name+".shadowMapDepth",z.map.depthTexture.format=qi,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=gn,z.map.depthTexture.magFilter=gn}else H.isPointLight?(z.map=new Qh(i.x),z.map.depthTexture=new Dc(i.x,ki)):(z.map=new Jn(i.x,i.y),z.map.depthTexture=new Hr(i.x,i.y,ki)),z.map.depthTexture.name=H.name+".shadowMap",z.map.depthTexture.format=qi,this.type===$a?(z.map.depthTexture.compareFunction=$?Hh:Gh,z.map.depthTexture.minFilter=Mn,z.map.depthTexture.magFilter=Mn):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=gn,z.map.depthTexture.magFilter=gn);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==i.x||z.map.height!==i.y)&&z.map.setSize(i.x,i.y);let P=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();H.isPointLight!==!0&&z.updateMatrices(H,v);for(let K=0;K<P;K++){let It=z.getCamera(K);if(H.isPointLight){let Et=z.camera,zt=z.matrix,Vt=H.distance||Et.far;Vt!==Et.far&&(Et.far=Vt,Et.updateProjectionMatrix()),cl.setFromMatrixPosition(H.matrixWorld),Et.position.copy(cl),f0.copy(Et.position),f0.add(HS[K]),Et.up.copy(WS[K]),Et.lookAt(f0),Et.updateMatrixWorld(),zt.makeTranslation(-cl.x,-cl.y,-cl.z),W1.multiplyMatrices(Et.projectionMatrix,Et.matrixWorldInverse),z._frustum.setFromProjectionMatrix(W1,Et.coordinateSystem,Et.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)r.setRenderTarget(z.map,K),r.clear();else{K===0&&(r.setRenderTarget(z.map),r.clear());let Et=z.getViewport(K);o.set(s.x*Et.x,s.y*Et.y,s.x*Et.z,s.y*Et.w),D.viewport(o)}n=z.getFrustum(K),x(E,v,It,H,this.type)}z.isPointLightShadow!==!0&&this.type===Ao&&M(z,v),z.needsUpdate=!1}m=this.type,g.needsUpdate=!1,r.setRenderTarget(w,C,L)};function M(y,E){let v=t.update(_);u.defines.VSM_SAMPLES!==y.blurSamples&&(u.defines.VSM_SAMPLES=y.blurSamples,d.defines.VSM_SAMPLES=y.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),y.mapPass===null?y.mapPass=new Jn(i.x,i.y,{format:jr,type:Vi}):(y.mapPass.width!==y.map.width||y.mapPass.height!==y.map.height)&&y.mapPass.setSize(y.map.width,y.map.height),u.uniforms.shadow_pass.value=y.map.depthTexture,u.uniforms.resolution.value.set(y.map.width,y.map.height),u.uniforms.radius.value=y.radius,r.setRenderTarget(y.mapPass),r.clear(),r.renderBufferDirect(E,null,v,u,_,null),d.uniforms.shadow_pass.value=y.mapPass.texture,d.uniforms.resolution.value.set(y.map.width,y.map.height),d.uniforms.radius.value=y.radius,r.setRenderTarget(y.map),r.clear(),r.renderBufferDirect(E,null,v,d,_,null)}function T(y,E,v,w){let C=null,L=v.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(L!==void 0)C=L;else if(C=v.isPointLight===!0?l:a,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let D=C.uuid,V=E.uuid,I=c[D];I===void 0&&(I={},c[D]=I);let O=I[V];O===void 0&&(O=C.clone(),I[V]=O,E.addEventListener("dispose",b)),C=O}if(C.visible=E.visible,C.wireframe=E.wireframe,w===Ao?C.side=E.shadowSide!==null?E.shadowSide:E.side:C.side=E.shadowSide!==null?E.shadowSide:f[E.side],C.alphaMap=E.alphaMap,C.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,C.map=E.map,C.clipShadows=E.clipShadows,C.clippingPlanes=E.clippingPlanes,C.clipIntersection=E.clipIntersection,C.displacementMap=E.displacementMap,C.displacementScale=E.displacementScale,C.displacementBias=E.displacementBias,C.wireframeLinewidth=E.wireframeLinewidth,C.linewidth=E.linewidth,v.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let D=r.properties.get(C);D.light=v}return C}function x(y,E,v,w,C){if(y.visible===!1)return;if(y.layers.test(E.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&C===Ao)&&(!y.frustumCulled||y.intersectsFrustum(n))){y.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,y.matrixWorld);let V=t.update(y),I=y.material;if(Array.isArray(I)){let O=V.groups;for(let H=0,z=O.length;H<z;H++){let nt=O[H],$=I[nt.materialIndex];if($&&$.visible){let P=T(y,$,w,C);y.onBeforeShadow(r,y,E,v,V,P,nt),r.renderBufferDirect(v,null,V,P,y,nt),y.onAfterShadow(r,y,E,v,V,P,nt)}}}else if(I.visible){let O=T(y,I,w,C);y.onBeforeShadow(r,y,E,v,V,O,null),r.renderBufferDirect(v,null,V,O,y,null),y.onAfterShadow(r,y,E,v,V,O,null)}}let D=y.children;for(let V=0,I=D.length;V<I;V++)x(D[V],E,v,w,C)}function b(y){y.target.removeEventListener("dispose",b);for(let v in c){let w=c[v],C=y.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}function QS(r,t){function e(){let G=!1,bt=new Ye,st=null,Mt=new Ye(0,0,0,0);return{setMask:function(Pt){st!==Pt&&!G&&(r.colorMask(Pt,Pt,Pt,Pt),st=Pt)},setLocked:function(Pt){G=Pt},setClear:function(Pt,lt,pt,ut,$t){$t===!0&&(Pt*=ut,lt*=ut,pt*=ut),bt.set(Pt,lt,pt,ut),Mt.equals(bt)===!1&&(r.clearColor(Pt,lt,pt,ut),Mt.copy(bt))},reset:function(){G=!1,st=null,Mt.set(-1,0,0,0)}}}function n(){let G=!1,bt=!1,st=null,Mt=null,Pt=null;return{setReversed:function(lt){if(bt!==lt){let pt=t.get("EXT_clip_control");lt?pt.clipControlEXT(pt.LOWER_LEFT_EXT,pt.ZERO_TO_ONE_EXT):pt.clipControlEXT(pt.LOWER_LEFT_EXT,pt.NEGATIVE_ONE_TO_ONE_EXT),bt=lt;let ut=Pt;Pt=null,this.setClear(ut)}},getReversed:function(){return bt},setTest:function(lt){lt?Y(r.DEPTH_TEST):Q(r.DEPTH_TEST)},setMask:function(lt){st!==lt&&!G&&(r.depthMask(lt),st=lt)},setFunc:function(lt){if(bt&&(lt=m1[lt]),Mt!==lt){switch(lt){case vc:r.depthFunc(r.NEVER);break;case yc:r.depthFunc(r.ALWAYS);break;case Sc:r.depthFunc(r.LESS);break;case _o:r.depthFunc(r.LEQUAL);break;case Mc:r.depthFunc(r.EQUAL);break;case bc:r.depthFunc(r.GEQUAL);break;case Tc:r.depthFunc(r.GREATER);break;case wc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Mt=lt}},setLocked:function(lt){G=lt},setClear:function(lt){Pt!==lt&&(Pt=lt,bt&&(lt=1-lt),r.clearDepth(lt))},reset:function(){G=!1,st=null,Mt=null,Pt=null,bt=!1}}}function i(){let G=!1,bt=null,st=null,Mt=null,Pt=null,lt=null,pt=null,ut=null,$t=null;return{setTest:function(mt){G||(mt?Y(r.STENCIL_TEST):Q(r.STENCIL_TEST))},setMask:function(mt){bt!==mt&&!G&&(r.stencilMask(mt),bt=mt)},setFunc:function(mt,te,Qt){(st!==mt||Mt!==te||Pt!==Qt)&&(r.stencilFunc(mt,te,Qt),st=mt,Mt=te,Pt=Qt)},setOp:function(mt,te,Qt){(lt!==mt||pt!==te||ut!==Qt)&&(r.stencilOp(mt,te,Qt),lt=mt,pt=te,ut=Qt)},setLocked:function(mt){G=mt},setClear:function(mt){$t!==mt&&(r.clearStencil(mt),$t=mt)},reset:function(){G=!1,bt=null,st=null,Mt=null,Pt=null,lt=null,pt=null,ut=null,$t=null}}}let s=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},f={},u={},d=new WeakMap,p=[],_=null,g=!1,m=null,M=null,T=null,x=null,b=null,y=null,E=null,v=new ce(0,0,0),w=0,C=!1,L=null,D=null,V=null,I=null,O=null,H=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,nt=0,$=r.getParameter(r.VERSION);$.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec($)[1]),z=nt>=1):$.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),z=nt>=2);let P=null,K={},It=r.getParameter(r.SCISSOR_BOX),Et=r.getParameter(r.VIEWPORT),zt=new Ye().fromArray(It),Vt=new Ye().fromArray(Et);function ee(G,bt,st,Mt){let Pt=new Uint8Array(4),lt=r.createTexture();r.bindTexture(G,lt),r.texParameteri(G,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(G,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let pt=0;pt<st;pt++)G===r.TEXTURE_3D||G===r.TEXTURE_2D_ARRAY?r.texImage3D(bt,0,r.RGBA,1,1,Mt,0,r.RGBA,r.UNSIGNED_BYTE,Pt):r.texImage2D(bt+pt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Pt);return lt}let B={};B[r.TEXTURE_2D]=ee(r.TEXTURE_2D,r.TEXTURE_2D,1),B[r.TEXTURE_CUBE_MAP]=ee(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),B[r.TEXTURE_2D_ARRAY]=ee(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),B[r.TEXTURE_3D]=ee(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Y(r.DEPTH_TEST),o.setFunc(_o),N(!1),gt(Df),Y(r.CULL_FACE),at(tr);function Y(G){h[G]!==!0&&(r.enable(G),h[G]=!0)}function Q(G){h[G]!==!1&&(r.disable(G),h[G]=!1)}function _t(G,bt){return u[G]!==bt?(r.bindFramebuffer(G,bt),u[G]=bt,G===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=bt),G===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=bt),!0):!1}function ft(G,bt){let st=p,Mt=!1;if(G){st=d.get(bt),st===void 0&&(st=[],d.set(bt,st));let Pt=G.textures;if(st.length!==Pt.length||st[0]!==r.COLOR_ATTACHMENT0){for(let lt=0,pt=Pt.length;lt<pt;lt++)st[lt]=r.COLOR_ATTACHMENT0+lt;st.length=Pt.length,Mt=!0}}else st[0]!==r.BACK&&(st[0]=r.BACK,Mt=!0);Mt&&r.drawBuffers(st)}function Ct(G){return _!==G?(r.useProgram(G),_=G,!0):!1}let yt={[ws]:r.FUNC_ADD,[Op]:r.FUNC_SUBTRACT,[Fp]:r.FUNC_REVERSE_SUBTRACT};yt[Bp]=r.MIN,yt[zp]=r.MAX;let tt={[kp]:r.ZERO,[Vp]:r.ONE,[Gp]:r.SRC_COLOR,[Ff]:r.SRC_ALPHA,[qp]:r.SRC_ALPHA_SATURATE,[Qp]:r.DST_COLOR,[Wp]:r.DST_ALPHA,[Hp]:r.ONE_MINUS_SRC_COLOR,[Bf]:r.ONE_MINUS_SRC_ALPHA,[Yp]:r.ONE_MINUS_DST_COLOR,[Xp]:r.ONE_MINUS_DST_ALPHA,[Zp]:r.CONSTANT_COLOR,[Jp]:r.ONE_MINUS_CONSTANT_COLOR,[$p]:r.CONSTANT_ALPHA,[Kp]:r.ONE_MINUS_CONSTANT_ALPHA};function at(G,bt,st,Mt,Pt,lt,pt,ut,$t,mt){if(G===tr){g===!0&&(Q(r.BLEND),g=!1);return}if(g===!1&&(Y(r.BLEND),g=!0),G!==Up){if(G!==m||mt!==C){if((M!==ws||b!==ws)&&(r.blendEquation(r.FUNC_ADD),M=ws,b=ws),mt)switch(G){case Co:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Nf:r.blendFunc(r.ONE,r.ONE);break;case Uf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Of:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:se("WebGLState: Invalid blending: ",G);break}else switch(G){case Co:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Nf:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Uf:se("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Of:se("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:se("WebGLState: Invalid blending: ",G);break}T=null,x=null,y=null,E=null,v.set(0,0,0),w=0,m=G,C=mt}return}Pt=Pt||bt,lt=lt||st,pt=pt||Mt,(bt!==M||Pt!==b)&&(r.blendEquationSeparate(yt[bt],yt[Pt]),M=bt,b=Pt),(st!==T||Mt!==x||lt!==y||pt!==E)&&(r.blendFuncSeparate(tt[st],tt[Mt],tt[lt],tt[pt]),T=st,x=Mt,y=lt,E=pt),(ut.equals(v)===!1||$t!==w)&&(r.blendColor(ut.r,ut.g,ut.b,$t),v.copy(ut),w=$t),m=G,C=!1}function ct(G,bt){G.side===hi?Q(r.CULL_FACE):Y(r.CULL_FACE);let st=G.side===bn;bt&&(st=!st),N(st),G.blending===Co&&G.transparent===!1?at(tr):at(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),s.setMask(G.colorWrite);let Mt=G.stencilWrite;a.setTest(Mt),Mt&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Gt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?Y(r.SAMPLE_ALPHA_TO_COVERAGE):Q(r.SAMPLE_ALPHA_TO_COVERAGE)}function N(G){L!==G&&(G?r.frontFace(r.CW):r.frontFace(r.CCW),L=G)}function gt(G){G!==Lp?(Y(r.CULL_FACE),G!==D&&(G===Df?r.cullFace(r.BACK):G===Dp?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Q(r.CULL_FACE),D=G}function Dt(G){G!==V&&(z&&r.lineWidth(G),V=G)}function Gt(G,bt,st){G?(Y(r.POLYGON_OFFSET_FILL),(I!==bt||O!==st)&&(I=bt,O=st,o.getReversed()&&(bt=-bt),r.polygonOffset(bt,st))):Q(r.POLYGON_OFFSET_FILL)}function Ft(G){G?Y(r.SCISSOR_TEST):Q(r.SCISSOR_TEST)}function ne(G){G===void 0&&(G=r.TEXTURE0+H-1),P!==G&&(r.activeTexture(G),P=G)}function U(G,bt,st){st===void 0&&(P===null?st=r.TEXTURE0+H-1:st=P);let Mt=K[st];Mt===void 0&&(Mt={type:void 0,texture:void 0},K[st]=Mt),(Mt.type!==G||Mt.texture!==bt)&&(P!==st&&(r.activeTexture(st),P=st),r.bindTexture(G,bt||B[G]),Mt.type=G,Mt.texture=bt)}function jt(){let G=K[P];G!==void 0&&G.type!==void 0&&(r.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function Xt(){try{r.compressedTexImage2D(...arguments)}catch(G){se("WebGLState:",G)}}function R(){try{r.compressedTexImage3D(...arguments)}catch(G){se("WebGLState:",G)}}function S(){try{r.texSubImage2D(...arguments)}catch(G){se("WebGLState:",G)}}function W(){try{r.texSubImage3D(...arguments)}catch(G){se("WebGLState:",G)}}function J(){try{r.compressedTexSubImage2D(...arguments)}catch(G){se("WebGLState:",G)}}function it(){try{r.compressedTexSubImage3D(...arguments)}catch(G){se("WebGLState:",G)}}function St(){try{r.texStorage2D(...arguments)}catch(G){se("WebGLState:",G)}}function dt(){try{r.texStorage3D(...arguments)}catch(G){se("WebGLState:",G)}}function rt(){try{r.texImage2D(...arguments)}catch(G){se("WebGLState:",G)}}function ot(){try{r.texImage3D(...arguments)}catch(G){se("WebGLState:",G)}}function vt(G){return f[G]!==void 0?f[G]:r.getParameter(G)}function kt(G,bt){f[G]!==bt&&(r.pixelStorei(G,bt),f[G]=bt)}function Tt(G){zt.equals(G)===!1&&(r.scissor(G.x,G.y,G.z,G.w),zt.copy(G))}function At(G){Vt.equals(G)===!1&&(r.viewport(G.x,G.y,G.z,G.w),Vt.copy(G))}function xt(G,bt){let st=c.get(bt);st===void 0&&(st=new WeakMap,c.set(bt,st));let Mt=st.get(G);Mt===void 0&&(Mt=r.getUniformBlockIndex(bt,G.name),st.set(G,Mt))}function Ht(G,bt){let Mt=c.get(bt).get(G);l.get(bt)!==Mt&&(r.uniformBlockBinding(bt,Mt,G.__bindingPointIndex),l.set(bt,Mt))}function Kt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),h={},f={},P=null,K={},u={},d=new WeakMap,p=[],_=null,g=!1,m=null,M=null,T=null,x=null,b=null,y=null,E=null,v=new ce(0,0,0),w=0,C=!1,L=null,D=null,V=null,I=null,O=null,zt.set(0,0,r.canvas.width,r.canvas.height),Vt.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:Y,disable:Q,bindFramebuffer:_t,drawBuffers:ft,useProgram:Ct,setBlending:at,setMaterial:ct,setFlipSided:N,setCullFace:gt,setLineWidth:Dt,setPolygonOffset:Gt,setScissorTest:Ft,activeTexture:ne,bindTexture:U,unbindTexture:jt,compressedTexImage2D:Xt,compressedTexImage3D:R,texImage2D:rt,texImage3D:ot,pixelStorei:kt,getParameter:vt,updateUBOMapping:xt,uniformBlockBinding:Ht,texStorage2D:St,texStorage3D:dt,texSubImage2D:S,texSubImage3D:W,compressedTexSubImage2D:J,compressedTexSubImage3D:it,scissor:Tt,viewport:At,reset:Kt}}function YS(r,t,e,n,i,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Lt,h=new WeakMap,f=new Set,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,S){return p?new OffscreenCanvas(R,S):Ma("canvas")}function g(R,S,W){let J=1,it=Xt(R);if((it.width>W||it.height>W)&&(J=W/Math.max(it.width,it.height)),J<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let St=Math.floor(J*it.width),dt=Math.floor(J*it.height);u===void 0&&(u=_(St,dt));let rt=S?_(St,dt):u;return rt.width=St,rt.height=dt,rt.getContext("2d").drawImage(R,0,0,St,dt),re("WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+St+"x"+dt+")."),rt}else return"data"in R&&re("WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),R;return R}function m(R){return R.generateMipmaps}function M(R){r.generateMipmap(R)}function T(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function x(R,S,W,J,it,St=!1){if(R!==null){if(r[R]!==void 0)return r[R];re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let dt;J&&(dt=t.get("EXT_texture_norm16"),dt||re("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let rt=S;if(S===r.RED&&(W===r.FLOAT&&(rt=r.R32F),W===r.HALF_FLOAT&&(rt=r.R16F),W===r.UNSIGNED_BYTE&&(rt=r.R8),W===r.UNSIGNED_SHORT&&dt&&(rt=dt.R16_EXT),W===r.SHORT&&dt&&(rt=dt.R16_SNORM_EXT)),S===r.RED_INTEGER&&(W===r.UNSIGNED_BYTE&&(rt=r.R8UI),W===r.UNSIGNED_SHORT&&(rt=r.R16UI),W===r.UNSIGNED_INT&&(rt=r.R32UI),W===r.BYTE&&(rt=r.R8I),W===r.SHORT&&(rt=r.R16I),W===r.INT&&(rt=r.R32I)),S===r.RG&&(W===r.FLOAT&&(rt=r.RG32F),W===r.HALF_FLOAT&&(rt=r.RG16F),W===r.UNSIGNED_BYTE&&(rt=r.RG8),W===r.UNSIGNED_SHORT&&dt&&(rt=dt.RG16_EXT),W===r.SHORT&&dt&&(rt=dt.RG16_SNORM_EXT)),S===r.RG_INTEGER&&(W===r.UNSIGNED_BYTE&&(rt=r.RG8UI),W===r.UNSIGNED_SHORT&&(rt=r.RG16UI),W===r.UNSIGNED_INT&&(rt=r.RG32UI),W===r.BYTE&&(rt=r.RG8I),W===r.SHORT&&(rt=r.RG16I),W===r.INT&&(rt=r.RG32I)),S===r.RGB_INTEGER&&(W===r.UNSIGNED_BYTE&&(rt=r.RGB8UI),W===r.UNSIGNED_SHORT&&(rt=r.RGB16UI),W===r.UNSIGNED_INT&&(rt=r.RGB32UI),W===r.BYTE&&(rt=r.RGB8I),W===r.SHORT&&(rt=r.RGB16I),W===r.INT&&(rt=r.RGB32I)),S===r.RGBA_INTEGER&&(W===r.UNSIGNED_BYTE&&(rt=r.RGBA8UI),W===r.UNSIGNED_SHORT&&(rt=r.RGBA16UI),W===r.UNSIGNED_INT&&(rt=r.RGBA32UI),W===r.BYTE&&(rt=r.RGBA8I),W===r.SHORT&&(rt=r.RGBA16I),W===r.INT&&(rt=r.RGBA32I)),S===r.RGB&&(W===r.UNSIGNED_SHORT&&dt&&(rt=dt.RGB16_EXT),W===r.SHORT&&dt&&(rt=dt.RGB16_SNORM_EXT),W===r.UNSIGNED_INT_5_9_9_9_REV&&(rt=r.RGB9_E5),W===r.UNSIGNED_INT_10F_11F_11F_REV&&(rt=r.R11F_G11F_B10F)),S===r.RGBA){let ot=St?Sa:Me.getTransfer(it);W===r.FLOAT&&(rt=r.RGBA32F),W===r.HALF_FLOAT&&(rt=r.RGBA16F),W===r.UNSIGNED_BYTE&&(rt=ot===Le?r.SRGB8_ALPHA8:r.RGBA8),W===r.UNSIGNED_SHORT&&dt&&(rt=dt.RGBA16_EXT),W===r.SHORT&&dt&&(rt=dt.RGBA16_SNORM_EXT),W===r.UNSIGNED_SHORT_4_4_4_4&&(rt=r.RGBA4),W===r.UNSIGNED_SHORT_5_5_5_1&&(rt=r.RGB5_A1)}return(rt===r.R16F||rt===r.R32F||rt===r.RG16F||rt===r.RG32F||rt===r.RGBA16F||rt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function b(R,S){let W;return R?S===null||S===ki||S===Po?W=r.DEPTH24_STENCIL8:S===Si?W=r.DEPTH32F_STENCIL8:S===Ro&&(W=r.DEPTH24_STENCIL8,re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ki||S===Po?W=r.DEPTH_COMPONENT24:S===Si?W=r.DEPTH_COMPONENT32F:S===Ro&&(W=r.DEPTH_COMPONENT16),W}function y(R,S){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==gn&&R.minFilter!==Mn?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function E(R){let S=R.target;S.removeEventListener("dispose",E),w(S),S.isVideoTexture&&h.delete(S),S.isHTMLTexture&&f.delete(S)}function v(R){let S=R.target;S.removeEventListener("dispose",v),L(S)}function w(R){let S=n.get(R);if(S.__webglInit===void 0)return;let W=R.source,J=d.get(W);if(J){let it=J[S.__cacheKey];it.usedTimes--,it.usedTimes===0&&C(R),Object.keys(J).length===0&&d.delete(W)}n.remove(R)}function C(R){let S=n.get(R);r.deleteTexture(S.__webglTexture);let W=R.source,J=d.get(W);delete J[S.__cacheKey],o.memory.textures--}function L(R){let S=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(S.__webglFramebuffer[J]))for(let it=0;it<S.__webglFramebuffer[J].length;it++)r.deleteFramebuffer(S.__webglFramebuffer[J][it]);else r.deleteFramebuffer(S.__webglFramebuffer[J]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[J])}else{if(Array.isArray(S.__webglFramebuffer))for(let J=0;J<S.__webglFramebuffer.length;J++)r.deleteFramebuffer(S.__webglFramebuffer[J]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let J=0;J<S.__webglColorRenderbuffer.length;J++)S.__webglColorRenderbuffer[J]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[J]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let W=R.textures;for(let J=0,it=W.length;J<it;J++){let St=n.get(W[J]);St.__webglTexture&&(r.deleteTexture(St.__webglTexture),o.memory.textures--),n.remove(W[J])}n.remove(R)}let D=0;function V(){D=0}function I(){return D}function O(R){D=R}function H(){let R=D;return R>=i.maxTextures&&re("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+i.maxTextures),D+=1,R}function z(R){let S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function nt(R,S){let W=n.get(R);if(R.isVideoTexture&&U(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&W.__version!==R.version){let J=R.image;if(J===null)re("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)re("WebGLRenderer: Texture marked for update but image is incomplete");else{Q(W,R,S);return}}else R.isExternalTexture&&(W.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,W.__webglTexture,r.TEXTURE0+S)}function $(R,S){let W=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&W.__version!==R.version){Q(W,R,S);return}else R.isExternalTexture&&(W.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,W.__webglTexture,r.TEXTURE0+S)}function P(R,S){let W=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&W.__version!==R.version){Q(W,R,S);return}e.bindTexture(r.TEXTURE_3D,W.__webglTexture,r.TEXTURE0+S)}function K(R,S){let W=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&W.__version!==R.version){_t(W,R,S);return}e.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture,r.TEXTURE0+S)}let It={[Ec]:r.REPEAT,[Yi]:r.CLAMP_TO_EDGE,[Ac]:r.MIRRORED_REPEAT},Et={[gn]:r.NEAREST,[e1]:r.NEAREST_MIPMAP_NEAREST,[tl]:r.NEAREST_MIPMAP_LINEAR,[Mn]:r.LINEAR,[rh]:r.LINEAR_MIPMAP_NEAREST,[$r]:r.LINEAR_MIPMAP_LINEAR},zt={[s1]:r.NEVER,[h1]:r.ALWAYS,[o1]:r.LESS,[Gh]:r.LEQUAL,[a1]:r.EQUAL,[Hh]:r.GEQUAL,[l1]:r.GREATER,[c1]:r.NOTEQUAL};function Vt(R,S){if(S.type===Si&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Mn||S.magFilter===rh||S.magFilter===tl||S.magFilter===$r||S.minFilter===Mn||S.minFilter===rh||S.minFilter===tl||S.minFilter===$r)&&re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,It[S.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,It[S.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,It[S.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,Et[S.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,Et[S.minFilter]),S.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,zt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===gn||S.minFilter!==tl&&S.minFilter!==$r||S.type===Si&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let W=t.get("EXT_texture_filter_anisotropic");r.texParameterf(R,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function ee(R,S){let W=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",E));let J=S.source,it=d.get(J);it===void 0&&(it={},d.set(J,it));let St=z(S);if(St!==R.__cacheKey){it[St]===void 0&&(it[St]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,W=!0),it[St].usedTimes++;let dt=it[R.__cacheKey];dt!==void 0&&(it[R.__cacheKey].usedTimes--,dt.usedTimes===0&&C(S)),R.__cacheKey=St,R.__webglTexture=it[St].texture}return W}function B(R,S,W){return Math.floor(Math.floor(R/W)/S)}function Y(R,S,W,J){let St=R.updateRanges;if(St.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,S.width,S.height,W,J,S.data);else{St.sort((kt,Tt)=>kt.start-Tt.start);let dt=0;for(let kt=1;kt<St.length;kt++){let Tt=St[dt],At=St[kt],xt=Tt.start+Tt.count,Ht=B(At.start,S.width,4),Kt=B(Tt.start,S.width,4);At.start<=xt+1&&Ht===Kt&&B(At.start+At.count-1,S.width,4)===Ht?Tt.count=Math.max(Tt.count,At.start+At.count-Tt.start):(++dt,St[dt]=At)}St.length=dt+1;let rt=e.getParameter(r.UNPACK_ROW_LENGTH),ot=e.getParameter(r.UNPACK_SKIP_PIXELS),vt=e.getParameter(r.UNPACK_SKIP_ROWS);e.pixelStorei(r.UNPACK_ROW_LENGTH,S.width);for(let kt=0,Tt=St.length;kt<Tt;kt++){let At=St[kt],xt=Math.floor(At.start/4),Ht=Math.ceil(At.count/4),Kt=xt%S.width,G=Math.floor(xt/S.width),bt=Ht,st=1;e.pixelStorei(r.UNPACK_SKIP_PIXELS,Kt),e.pixelStorei(r.UNPACK_SKIP_ROWS,G),e.texSubImage2D(r.TEXTURE_2D,0,Kt,G,bt,st,W,J,S.data)}R.clearUpdateRanges(),e.pixelStorei(r.UNPACK_ROW_LENGTH,rt),e.pixelStorei(r.UNPACK_SKIP_PIXELS,ot),e.pixelStorei(r.UNPACK_SKIP_ROWS,vt)}}function Q(R,S,W){let J=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(J=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(J=r.TEXTURE_3D);let it=ee(R,S),St=S.source;e.bindTexture(J,R.__webglTexture,r.TEXTURE0+W);let dt=n.get(St);if(St.version!==dt.__version||it===!0){if(e.activeTexture(r.TEXTURE0+W),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let st=Me.getPrimaries(Me.workingColorSpace),Mt=S.colorSpace===vr?null:Me.getPrimaries(S.colorSpace),Pt=S.colorSpace===vr||st===Mt?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt)}e.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment);let ot=g(S.image,!1,i.maxTextureSize);ot=jt(S,ot);let vt=s.convert(S.format,S.colorSpace),kt=s.convert(S.type),Tt=x(S.internalFormat,vt,kt,S.normalized,S.colorSpace,S.isVideoTexture);Vt(J,S);let At,xt=S.mipmaps,Ht=S.isVideoTexture!==!0,Kt=dt.__version===void 0||it===!0,G=St.dataReady,bt=y(S,ot);if(S.isDepthTexture)Tt=b(S.format===Kr,S.type),Kt&&(Ht?e.texStorage2D(r.TEXTURE_2D,1,Tt,ot.width,ot.height):e.texImage2D(r.TEXTURE_2D,0,Tt,ot.width,ot.height,0,vt,kt,null));else if(S.isDataTexture)if(xt.length>0){Ht&&Kt&&e.texStorage2D(r.TEXTURE_2D,bt,Tt,xt[0].width,xt[0].height);for(let st=0,Mt=xt.length;st<Mt;st++)At=xt[st],Ht?G&&e.texSubImage2D(r.TEXTURE_2D,st,0,0,At.width,At.height,vt,kt,At.data):e.texImage2D(r.TEXTURE_2D,st,Tt,At.width,At.height,0,vt,kt,At.data);S.generateMipmaps=!1}else Ht?(Kt&&e.texStorage2D(r.TEXTURE_2D,bt,Tt,ot.width,ot.height),G&&Y(S,ot,vt,kt)):e.texImage2D(r.TEXTURE_2D,0,Tt,ot.width,ot.height,0,vt,kt,ot.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ht&&Kt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,bt,Tt,xt[0].width,xt[0].height,ot.depth);for(let st=0,Mt=xt.length;st<Mt;st++)if(At=xt[st],S.format!==Mi)if(vt!==null)if(Ht){if(G)if(S.layerUpdates.size>0){let Pt=o0(At.width,At.height,S.format,S.type);for(let lt of S.layerUpdates){let pt=At.data.subarray(lt*Pt/At.data.BYTES_PER_ELEMENT,(lt+1)*Pt/At.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,st,0,0,lt,At.width,At.height,1,vt,pt)}}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,st,0,0,0,At.width,At.height,ot.depth,vt,At.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,st,Tt,At.width,At.height,ot.depth,0,At.data,0,0);else re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?G&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,st,0,0,0,At.width,At.height,ot.depth,vt,kt,At.data):e.texImage3D(r.TEXTURE_2D_ARRAY,st,Tt,At.width,At.height,ot.depth,0,vt,kt,At.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{Ht&&Kt&&e.texStorage2D(r.TEXTURE_2D,bt,Tt,xt[0].width,xt[0].height);for(let st=0,Mt=xt.length;st<Mt;st++)At=xt[st],S.format!==Mi?vt!==null?Ht?G&&e.compressedTexSubImage2D(r.TEXTURE_2D,st,0,0,At.width,At.height,vt,At.data):e.compressedTexImage2D(r.TEXTURE_2D,st,Tt,At.width,At.height,0,At.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?G&&e.texSubImage2D(r.TEXTURE_2D,st,0,0,At.width,At.height,vt,kt,At.data):e.texImage2D(r.TEXTURE_2D,st,Tt,At.width,At.height,0,vt,kt,At.data)}else if(S.isDataArrayTexture)if(Ht){if(Kt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,bt,Tt,ot.width,ot.height,ot.depth),G)if(S.layerUpdates.size>0){let st=o0(ot.width,ot.height,S.format,S.type);for(let Mt of S.layerUpdates){let Pt=ot.data.subarray(Mt*st/ot.data.BYTES_PER_ELEMENT,(Mt+1)*st/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Mt,ot.width,ot.height,1,vt,kt,Pt)}S.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,vt,kt,ot.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Tt,ot.width,ot.height,ot.depth,0,vt,kt,ot.data);else if(S.isData3DTexture)Ht?(Kt&&e.texStorage3D(r.TEXTURE_3D,bt,Tt,ot.width,ot.height,ot.depth),G&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,vt,kt,ot.data)):e.texImage3D(r.TEXTURE_3D,0,Tt,ot.width,ot.height,ot.depth,0,vt,kt,ot.data);else if(S.isFramebufferTexture){if(Kt)if(Ht)e.texStorage2D(r.TEXTURE_2D,bt,Tt,ot.width,ot.height);else{let st=ot.width,Mt=ot.height;for(let Pt=0;Pt<bt;Pt++)e.texImage2D(r.TEXTURE_2D,Pt,Tt,st,Mt,0,vt,kt,null),st>>=1,Mt>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in r){let st=r.canvas;if(st.hasAttribute("layoutsubtree")||st.setAttribute("layoutsubtree","true"),ot.parentNode!==st){st.appendChild(ot),f.add(S),st.onpaint=Mt=>{let Pt=Mt.changedElements;for(let lt of f)Pt.includes(lt.image)&&(lt.needsUpdate=!0)},st.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,ot);else{let Pt=r.RGBA,lt=r.RGBA,pt=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Pt,lt,pt,ot)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(xt.length>0){if(Ht&&Kt){let st=Xt(xt[0]);e.texStorage2D(r.TEXTURE_2D,bt,Tt,st.width,st.height)}for(let st=0,Mt=xt.length;st<Mt;st++)At=xt[st],Ht?G&&e.texSubImage2D(r.TEXTURE_2D,st,0,0,vt,kt,At):e.texImage2D(r.TEXTURE_2D,st,Tt,vt,kt,At);S.generateMipmaps=!1}else if(Ht){if(Kt){let st=Xt(ot);e.texStorage2D(r.TEXTURE_2D,bt,Tt,st.width,st.height)}G&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,vt,kt,ot)}else e.texImage2D(r.TEXTURE_2D,0,Tt,vt,kt,ot);m(S)&&M(J),dt.__version=St.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function _t(R,S,W){if(S.image.length!==6)return;let J=ee(R,S),it=S.source;e.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+W);let St=n.get(it);if(it.version!==St.__version||J===!0){e.activeTexture(r.TEXTURE0+W);let dt=Me.getPrimaries(Me.workingColorSpace),rt=S.colorSpace===vr?null:Me.getPrimaries(S.colorSpace),ot=S.colorSpace===vr||dt===rt?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot);let vt=S.isCompressedTexture||S.image[0].isCompressedTexture,kt=S.image[0]&&S.image[0].isDataTexture,Tt=[];for(let lt=0;lt<6;lt++)!vt&&!kt?Tt[lt]=g(S.image[lt],!0,i.maxCubemapSize):Tt[lt]=kt?S.image[lt].image:S.image[lt],Tt[lt]=jt(S,Tt[lt]);let At=Tt[0],xt=s.convert(S.format,S.colorSpace),Ht=s.convert(S.type),Kt=x(S.internalFormat,xt,Ht,S.normalized,S.colorSpace),G=S.isVideoTexture!==!0,bt=St.__version===void 0||J===!0,st=it.dataReady,Mt=y(S,At);Vt(r.TEXTURE_CUBE_MAP,S);let Pt;if(vt){G&&bt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,Mt,Kt,At.width,At.height);for(let lt=0;lt<6;lt++){Pt=Tt[lt].mipmaps;for(let pt=0;pt<Pt.length;pt++){let ut=Pt[pt];S.format!==Mi?xt!==null?G?st&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,pt,0,0,ut.width,ut.height,xt,ut.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,pt,Kt,ut.width,ut.height,0,ut.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?st&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,pt,0,0,ut.width,ut.height,xt,Ht,ut.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,pt,Kt,ut.width,ut.height,0,xt,Ht,ut.data)}}}else{if(Pt=S.mipmaps,G&&bt){Pt.length>0&&Mt++;let lt=Xt(Tt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,Mt,Kt,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(kt){G?st&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Tt[lt].width,Tt[lt].height,xt,Ht,Tt[lt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Kt,Tt[lt].width,Tt[lt].height,0,xt,Ht,Tt[lt].data);for(let pt=0;pt<Pt.length;pt++){let $t=Pt[pt].image[lt].image;G?st&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,pt+1,0,0,$t.width,$t.height,xt,Ht,$t.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,pt+1,Kt,$t.width,$t.height,0,xt,Ht,$t.data)}}else{G?st&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,xt,Ht,Tt[lt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Kt,xt,Ht,Tt[lt]);for(let pt=0;pt<Pt.length;pt++){let ut=Pt[pt];G?st&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,pt+1,0,0,xt,Ht,ut.image[lt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,pt+1,Kt,xt,Ht,ut.image[lt])}}}m(S)&&M(r.TEXTURE_CUBE_MAP),St.__version=it.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function ft(R,S,W,J,it,St){let dt=s.convert(W.format,W.colorSpace),rt=s.convert(W.type),ot=x(W.internalFormat,dt,rt,W.normalized,W.colorSpace),vt=n.get(S),kt=n.get(W);if(kt.__renderTarget=S,!vt.__hasExternalTextures){let Tt=Math.max(1,S.width>>St),At=Math.max(1,S.height>>St);it===r.TEXTURE_3D||it===r.TEXTURE_2D_ARRAY?e.texImage3D(it,St,ot,Tt,At,S.depth,0,dt,rt,null):e.texImage2D(it,St,ot,Tt,At,0,dt,rt,null)}e.bindFramebuffer(r.FRAMEBUFFER,R),ne(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,J,it,kt.__webglTexture,0,Ft(S)):(it===r.TEXTURE_2D||it>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,J,it,kt.__webglTexture,St),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Ct(R,S,W){if(r.bindRenderbuffer(r.RENDERBUFFER,R),S.depthBuffer){let J=S.depthTexture,it=J&&J.isDepthTexture?J.type:null,St=b(S.stencilBuffer,it),dt=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;ne(S)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ft(S),St,S.width,S.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ft(S),St,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,St,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,dt,r.RENDERBUFFER,R)}else{let J=S.textures;for(let it=0;it<J.length;it++){let St=J[it],dt=s.convert(St.format,St.colorSpace),rt=s.convert(St.type),ot=x(St.internalFormat,dt,rt,St.normalized,St.colorSpace);ne(S)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ft(S),ot,S.width,S.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ft(S),ot,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,ot,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function yt(R,S,W){let J=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let it=n.get(S.depthTexture);if(it.__renderTarget=S,(!it.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),J){if(it.__webglInit===void 0&&(it.__webglInit=!0,S.depthTexture.addEventListener("dispose",E)),it.__webglTexture===void 0){it.__webglTexture=r.createTexture(),e.bindTexture(r.TEXTURE_CUBE_MAP,it.__webglTexture),Vt(r.TEXTURE_CUBE_MAP,S.depthTexture);let vt=s.convert(S.depthTexture.format),kt=s.convert(S.depthTexture.type),Tt;S.depthTexture.format===qi?Tt=r.DEPTH_COMPONENT24:S.depthTexture.format===Kr&&(Tt=r.DEPTH24_STENCIL8);for(let At=0;At<6;At++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,Tt,S.width,S.height,0,vt,kt,null)}}else nt(S.depthTexture,0);let St=it.__webglTexture,dt=Ft(S),rt=J?r.TEXTURE_CUBE_MAP_POSITIVE_X+W:r.TEXTURE_2D,ot=S.depthTexture.format===Kr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(S.depthTexture.format===qi)ne(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ot,rt,St,0,dt):r.framebufferTexture2D(r.FRAMEBUFFER,ot,rt,St,0);else if(S.depthTexture.format===Kr)ne(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ot,rt,St,0,dt):r.framebufferTexture2D(r.FRAMEBUFFER,ot,rt,St,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function tt(R){let S=n.get(R),W=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){let J=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),J){let it=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,J.removeEventListener("dispose",it)};J.addEventListener("dispose",it),S.__depthDisposeCallback=it}S.__boundDepthTexture=J}if(R.depthTexture&&!S.__autoAllocateDepthBuffer)if(W)for(let J=0;J<6;J++)yt(S.__webglFramebuffer[J],R,J);else{let J=R.texture.mipmaps;J&&J.length>0?yt(S.__webglFramebuffer[0],R,0):yt(S.__webglFramebuffer,R,0)}else if(W){S.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[J]),S.__webglDepthbuffer[J]===void 0)S.__webglDepthbuffer[J]=r.createRenderbuffer(),Ct(S.__webglDepthbuffer[J],R,!1);else{let it=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,St=S.__webglDepthbuffer[J];r.bindRenderbuffer(r.RENDERBUFFER,St),r.framebufferRenderbuffer(r.FRAMEBUFFER,it,r.RENDERBUFFER,St)}}else{let J=R.texture.mipmaps;if(J&&J.length>0?e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),Ct(S.__webglDepthbuffer,R,!1);else{let it=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,St=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,St),r.framebufferRenderbuffer(r.FRAMEBUFFER,it,r.RENDERBUFFER,St)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function at(R,S,W){let J=n.get(R);S!==void 0&&ft(J.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),W!==void 0&&tt(R)}function ct(R){let S=R.texture,W=n.get(R),J=n.get(S);R.addEventListener("dispose",v);let it=R.textures,St=R.isWebGLCubeRenderTarget===!0,dt=it.length>1;if(dt||(J.__webglTexture===void 0&&(J.__webglTexture=r.createTexture()),J.__version=S.version,o.memory.textures++),St){W.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(S.mipmaps&&S.mipmaps.length>0){W.__webglFramebuffer[rt]=[];for(let ot=0;ot<S.mipmaps.length;ot++)W.__webglFramebuffer[rt][ot]=r.createFramebuffer()}else W.__webglFramebuffer[rt]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){W.__webglFramebuffer=[];for(let rt=0;rt<S.mipmaps.length;rt++)W.__webglFramebuffer[rt]=r.createFramebuffer()}else W.__webglFramebuffer=r.createFramebuffer();if(dt)for(let rt=0,ot=it.length;rt<ot;rt++){let vt=n.get(it[rt]);vt.__webglTexture===void 0&&(vt.__webglTexture=r.createTexture(),o.memory.textures++)}if(R.samples>0&&ne(R)===!1){W.__webglMultisampledFramebuffer=r.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let rt=0;rt<it.length;rt++){let ot=it[rt];W.__webglColorRenderbuffer[rt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,W.__webglColorRenderbuffer[rt]);let vt=s.convert(ot.format,ot.colorSpace),kt=s.convert(ot.type),Tt=x(ot.internalFormat,vt,kt,ot.normalized,ot.colorSpace,R.isXRRenderTarget===!0),At=Ft(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,At,Tt,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+rt,r.RENDERBUFFER,W.__webglColorRenderbuffer[rt])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(W.__webglDepthRenderbuffer=r.createRenderbuffer(),Ct(W.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(St){e.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture),Vt(r.TEXTURE_CUBE_MAP,S);for(let rt=0;rt<6;rt++)if(S.mipmaps&&S.mipmaps.length>0)for(let ot=0;ot<S.mipmaps.length;ot++)ft(W.__webglFramebuffer[rt][ot],R,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ot);else ft(W.__webglFramebuffer[rt],R,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);m(S)&&M(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(dt){for(let rt=0,ot=it.length;rt<ot;rt++){let vt=it[rt],kt=n.get(vt),Tt=r.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Tt=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(Tt,kt.__webglTexture),Vt(Tt,vt),ft(W.__webglFramebuffer,R,vt,r.COLOR_ATTACHMENT0+rt,Tt,0),m(vt)&&M(Tt)}e.unbindTexture()}else{let rt=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(rt=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(rt,J.__webglTexture),Vt(rt,S),S.mipmaps&&S.mipmaps.length>0)for(let ot=0;ot<S.mipmaps.length;ot++)ft(W.__webglFramebuffer[ot],R,S,r.COLOR_ATTACHMENT0,rt,ot);else ft(W.__webglFramebuffer,R,S,r.COLOR_ATTACHMENT0,rt,0);m(S)&&M(rt),e.unbindTexture()}R.depthBuffer&&tt(R)}function N(R){let S=R.textures;for(let W=0,J=S.length;W<J;W++){let it=S[W];if(m(it)){let St=T(R),dt=n.get(it).__webglTexture;e.bindTexture(St,dt),M(St),e.unbindTexture()}}}let gt=[],Dt=[];function Gt(R){if(R.samples>0){if(ne(R)===!1){let S=R.textures,W=R.width,J=R.height,it=r.COLOR_BUFFER_BIT,St=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,dt=n.get(R),rt=S.length>1;if(rt)for(let vt=0;vt<S.length;vt++)e.bindFramebuffer(r.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+vt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,dt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+vt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer);let ot=R.texture.mipmaps;ot&&ot.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,dt.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let vt=0;vt<S.length;vt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(it|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(it|=r.STENCIL_BUFFER_BIT)),rt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,dt.__webglColorRenderbuffer[vt]);let kt=n.get(S[vt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,kt,0)}r.blitFramebuffer(0,0,W,J,0,0,W,J,it,r.NEAREST),l===!0&&(gt.length=0,Dt.length=0,gt.push(r.COLOR_ATTACHMENT0+vt),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(gt.push(St),Dt.push(St),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Dt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,gt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),rt)for(let vt=0;vt<S.length;vt++){e.bindFramebuffer(r.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+vt,r.RENDERBUFFER,dt.__webglColorRenderbuffer[vt]);let kt=n.get(S[vt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,dt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+vt,r.TEXTURE_2D,kt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let S=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function Ft(R){return Math.min(i.maxSamples,R.samples)}function ne(R){let S=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function U(R){let S=o.render.frame;h.get(R)!==S&&(h.set(R,S),R.update())}function jt(R,S){let W=R.colorSpace,J=R.format,it=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||W!==ya&&W!==vr&&(Me.getTransfer(W)===Le?(J!==Mi||it!==$n)&&re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):se("WebGLTextures: Unsupported texture color space:",W)),S}function Xt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=V,this.getTextureUnits=I,this.setTextureUnits=O,this.setTexture2D=nt,this.setTexture2DArray=$,this.setTexture3D=P,this.setTextureCube=K,this.rebindTextures=at,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=Gt,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=ne,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function qS(r,t){function e(n,i=vr){let s,o=Me.getTransfer(i);if(n===$n)return r.UNSIGNED_BYTE;if(n===oh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===ah)return r.UNSIGNED_SHORT_5_5_5_1;if(n===qf)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Zf)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Qf)return r.BYTE;if(n===Yf)return r.SHORT;if(n===Ro)return r.UNSIGNED_SHORT;if(n===sh)return r.INT;if(n===ki)return r.UNSIGNED_INT;if(n===Si)return r.FLOAT;if(n===Vi)return r.HALF_FLOAT;if(n===Jf)return r.ALPHA;if(n===$f)return r.RGB;if(n===Mi)return r.RGBA;if(n===qi)return r.DEPTH_COMPONENT;if(n===Kr)return r.DEPTH_STENCIL;if(n===lh)return r.RED;if(n===ch)return r.RED_INTEGER;if(n===jr)return r.RG;if(n===hh)return r.RG_INTEGER;if(n===uh)return r.RGBA_INTEGER;if(n===el||n===nl||n===il||n===rl)if(o===Le)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===el)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===nl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===il)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===rl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===el)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===nl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===il)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===rl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fh||n===dh||n===ph||n===mh)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===fh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===dh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ph)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===mh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===gh||n===_h||n===xh||n===vh||n===yh||n===sl||n===Sh)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===gh||n===_h)return o===Le?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===xh)return o===Le?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===vh)return s.COMPRESSED_R11_EAC;if(n===yh)return s.COMPRESSED_SIGNED_R11_EAC;if(n===sl)return s.COMPRESSED_RG11_EAC;if(n===Sh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Mh||n===bh||n===Th||n===wh||n===Eh||n===Ah||n===Ch||n===Rh||n===Ph||n===Ih||n===Lh||n===Dh||n===Nh||n===Uh)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Mh)return o===Le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===bh)return o===Le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Th)return o===Le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===wh)return o===Le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Eh)return o===Le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ah)return o===Le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ch)return o===Le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Rh)return o===Le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ph)return o===Le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ih)return o===Le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Lh)return o===Le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Dh)return o===Le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Nh)return o===Le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Uh)return o===Le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Oh||n===Fh||n===Bh)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Oh)return o===Le?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Fh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Bh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===zh||n===kh||n===ol||n===Vh)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===zh)return s.COMPRESSED_RED_RGTC1_EXT;if(n===kh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ol)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Vh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Po?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}var ZS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,JS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,y0=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ia(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new li({vertexShader:ZS,fragmentShader:JS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new be(new ji(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},S0=class extends Zi{constructor(t,e){super();let n=this,i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,p=null,_=typeof XRWebGLBinding<"u",g=new y0,m={},M=e.getContextAttributes(),T=null,x=null,b=[],y=[],E=new Lt,v=null,w=null,C=new Sn;C.viewport=new Ye;let L=new Sn;L.viewport=new Ye;let D=[C,L],V=new th,I=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let Y=b[B];return Y===void 0&&(Y=new Mo,b[B]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(B){let Y=b[B];return Y===void 0&&(Y=new Mo,b[B]=Y),Y.getGripSpace()},this.getHand=function(B){let Y=b[B];return Y===void 0&&(Y=new Mo,b[B]=Y),Y.getHandSpace()};function H(B){let Y=y.indexOf(B.inputSource);if(Y===-1)return;let Q=b[Y];Q!==void 0&&(Q.update(B.inputSource,B.frame,c||o),Q.dispatchEvent({type:B.type,data:B.inputSource}))}function z(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",nt);for(let B=0;B<b.length;B++){let Y=y[B];Y!==null&&(y[B]=null,b[B].disconnect(Y))}I=null,O=null,g.reset();for(let B in m)delete m[B];if(t.setRenderTarget(T),d=null,u=null,f=null,i=null,x=null,ee.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(E.width,E.height,!1),w!==null){let B=w.camera;B.fov=w.fov,B.zoom=w.zoom,B.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,n.isPresenting===!0&&re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,n.isPresenting===!0&&re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(i,e)),f},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(B){if(i=B,i!==null){if(T=t.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",z),i.addEventListener("inputsourceschange",nt),M.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(E),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Q=null,_t=null,ft=null;M.depth&&(ft=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=M.stencil?Kr:qi,_t=M.stencil?Po:ki);let Ct={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:s};f=this.getBinding(),u=f.createProjectionLayer(Ct),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),x=new Jn(u.textureWidth,u.textureHeight,{format:Mi,type:$n,depthTexture:new Hr(u.textureWidth,u.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Q={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,Q),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new Jn(d.framebufferWidth,d.framebufferHeight,{format:Mi,type:$n,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ee.setContext(i),ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function nt(B){for(let Y=0;Y<B.removed.length;Y++){let Q=B.removed[Y],_t=y.indexOf(Q);_t>=0&&(y[_t]=null,b[_t].disconnect(Q))}for(let Y=0;Y<B.added.length;Y++){let Q=B.added[Y],_t=y.indexOf(Q);if(_t===-1){for(let Ct=0;Ct<b.length;Ct++)if(Ct>=y.length){y.push(Q),_t=Ct;break}else if(y[Ct]===null){y[Ct]=Q,_t=Ct;break}if(_t===-1)break}let ft=b[_t];ft&&ft.connect(Q)}}let $=new X,P=new X;function K(B,Y,Q){$.setFromMatrixPosition(Y.matrixWorld),P.setFromMatrixPosition(Q.matrixWorld);let _t=$.distanceTo(P),ft=Y.projectionMatrix.elements,Ct=Q.projectionMatrix.elements,yt=ft[14]/(ft[10]-1),tt=ft[14]/(ft[10]+1),at=(ft[9]+1)/ft[5],ct=(ft[9]-1)/ft[5],N=(ft[8]-1)/ft[0],gt=(Ct[8]+1)/Ct[0],Dt=yt*N,Gt=yt*gt,Ft=_t/(-N+gt),ne=Ft*-N;if(Y.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(ne),B.translateZ(Ft),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert(),ft[10]===-1)B.projectionMatrix.copy(Y.projectionMatrix),B.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{let U=yt+Ft,jt=tt+Ft,Xt=Dt-ne,R=Gt+(_t-ne),S=at*tt/jt*U,W=ct*tt/jt*U;B.projectionMatrix.makePerspective(Xt,R,S,W,U,jt),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}}function It(B,Y){Y===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(Y.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(i===null)return;let Y=B.near,Q=B.far;g.texture!==null&&(g.depthNear>0&&(Y=g.depthNear),g.depthFar>0&&(Q=g.depthFar)),V.near=L.near=C.near=Y,V.far=L.far=C.far=Q,(I!==V.near||O!==V.far)&&(i.updateRenderState({depthNear:V.near,depthFar:V.far}),I=V.near,O=V.far),V.layers.mask=B.layers.mask|6,C.layers.mask=V.layers.mask&-5,L.layers.mask=V.layers.mask&-3;let _t=B.parent,ft=V.cameras;It(V,_t);for(let Ct=0;Ct<ft.length;Ct++)It(ft[Ct],_t);ft.length===2?K(V,C,L):V.projectionMatrix.copy(C.projectionMatrix),w===null&&B.isPerspectiveCamera&&(w={camera:B,fov:B.fov,zoom:B.zoom}),Et(B,V,_t)};function Et(B,Y,Q){Q===null?B.matrix.copy(Y.matrixWorld):(B.matrix.copy(Q.matrixWorld),B.matrix.invert(),B.matrix.multiply(Y.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(Y.projectionMatrix),B.projectionMatrixInverse.copy(Y.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=yo*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(B){l=B,u!==null&&(u.fixedFoveation=B),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=B)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(V)},this.getCameraTexture=function(B){return m[B]};let zt=null;function Vt(B,Y){if(h=Y.getViewerPose(c||o),p=Y,h!==null){let Q=h.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let _t=!1;Q.length!==V.cameras.length&&(V.cameras.length=0,_t=!0);for(let tt=0;tt<Q.length;tt++){let at=Q[tt],ct=null;if(d!==null)ct=d.getViewport(at);else{let gt=f.getViewSubImage(u,at);ct=gt.viewport,tt===0&&(t.setRenderTargetTextures(x,gt.colorTexture,gt.depthStencilTexture),t.setRenderTarget(x))}let N=D[tt];N===void 0&&(N=new Sn,N.layers.enable(tt),N.viewport=new Ye,D[tt]=N),N.matrix.fromArray(at.transform.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale),N.projectionMatrix.fromArray(at.projectionMatrix),N.projectionMatrixInverse.copy(N.projectionMatrix).invert(),N.viewport.set(ct.x,ct.y,ct.width,ct.height),tt===0&&(V.matrix.copy(N.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),_t===!0&&V.cameras.push(N)}let ft=i.enabledFeatures;if(ft&&ft.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){f=n.getBinding();let tt=f.getDepthInformation(Q[0]);tt&&tt.isValid&&tt.texture&&g.init(tt,i.renderState)}if(ft&&ft.includes("camera-access")&&_){t.state.unbindTexture(),f=n.getBinding();for(let tt=0;tt<Q.length;tt++){let at=Q[tt].camera;if(at){let ct=m[at];ct||(ct=new Ia,m[at]=ct);let N=f.getCameraImage(at);ct.sourceTexture=N}}}}for(let Q=0;Q<b.length;Q++){let _t=y[Q],ft=b[Q];_t!==null&&ft!==void 0&&ft.update(_t,Y,c||o)}zt&&zt(B,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),p=null}let ee=new X1;ee.setAnimationLoop(Vt),this.setAnimationLoop=function(B){zt=B},this.dispose=function(){}}},$S=new Ne,$1=new ae;$1.set(-1,0,0,0,1,0,0,0,1);function KS(r,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,i0(r)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,M,T,x){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(g,m):m.isMeshLambertMaterial?(s(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(g,m),f(g,m)):m.isMeshPhongMaterial?(s(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(g,m),u(g,m),m.isMeshPhysicalMaterial&&d(g,m,x)):m.isMeshMatcapMaterial?(s(g,m),p(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),_(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,M,T):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===bn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===bn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let M=t.get(m),T=M.envMap,x=M.envMapRotation;T&&(g.envMap.value=T,g.envMapRotation.value.setFromMatrix4($S.makeRotationFromEuler(x)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply($1),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,M,T){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*M,g.scale.value=T*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function f(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,M){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===bn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){let M=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function jS(r,t,e,n){let i={},s={},o=[],a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,b){let y=b.program;n.uniformBlockBinding(x,y)}function c(x,b){let y=i[x.id];y===void 0&&(g(x),y=h(x),i[x.id]=y,x.addEventListener("dispose",M));let E=b.program;n.updateUBOMapping(x,E);let v=t.render.frame;s[x.id]!==v&&(u(x),s[x.id]=v)}function h(x){let b=f();x.__bindingPointIndex=b;let y=r.createBuffer(),E=x.__size,v=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,E,v),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,b,y),y}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return se("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){let b=i[x.id],y=x.uniforms,E=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,b);for(let v=0,w=y.length;v<w;v++){let C=y[v];if(Array.isArray(C))for(let L=0,D=C.length;L<D;L++)d(C[L],v,L,E);else d(C,v,0,E)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(x,b,y,E){if(_(x,b,y,E)===!0){let v=x.__offset,w=x.value;if(Array.isArray(w)){let C=0;for(let L=0;L<w.length;L++){let D=w[L],V=m(D);p(D,x.__data,C),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(C+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(w,x.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,v,x.__data)}}function p(x,b,y){typeof x=="number"||typeof x=="boolean"?b[0]=x:x.isMatrix3?(b[0]=x.elements[0],b[1]=x.elements[1],b[2]=x.elements[2],b[3]=0,b[4]=x.elements[3],b[5]=x.elements[4],b[6]=x.elements[5],b[7]=0,b[8]=x.elements[6],b[9]=x.elements[7],b[10]=x.elements[8],b[11]=0):ArrayBuffer.isView(x)?b.set(new x.constructor(x.buffer,x.byteOffset,b.length)):x.toArray(b,y)}function _(x,b,y,E){let v=x.value,w=b+"_"+y;if(E[w]===void 0)return typeof v=="number"||typeof v=="boolean"?E[w]=v:ArrayBuffer.isView(v)?E[w]=v.slice():E[w]=v.clone(),!0;{let C=E[w];if(typeof v=="number"||typeof v=="boolean"){if(C!==v)return E[w]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(C.equals(v)===!1)return C.copy(v),!0}}return!1}function g(x){let b=x.uniforms,y=0,E=16;for(let w=0,C=b.length;w<C;w++){let L=Array.isArray(b[w])?b[w]:[b[w]];for(let D=0,V=L.length;D<V;D++){let I=L[D],O=Array.isArray(I.value)?I.value:[I.value];for(let H=0,z=O.length;H<z;H++){let nt=O[H],$=m(nt),P=y%E,K=P%$.boundary,It=P+K;y+=K,It!==0&&E-It<$.storage&&(y+=E-It),I.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=y,y+=$.storage}}}let v=y%E;return v>0&&(y+=E-v),x.__size=y,x.__cache={},this}function m(x){let b={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(b.boundary=4,b.storage=4):x.isVector2?(b.boundary=8,b.storage=8):x.isVector3||x.isColor?(b.boundary=16,b.storage=12):x.isVector4?(b.boundary=16,b.storage=16):x.isMatrix3?(b.boundary=48,b.storage=48):x.isMatrix4?(b.boundary=64,b.storage=64):x.isTexture?re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(b.boundary=16,b.storage=x.byteLength):re("WebGLRenderer: Unsupported uniform value type.",x),b}function M(x){let b=x.target;b.removeEventListener("dispose",M);let y=o.indexOf(b.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(i[b.id]),delete i[b.id],delete s[b.id]}function T(){for(let x in i)r.deleteBuffer(i[x]);o=[],i={},s={}}return{bind:l,update:c,dispose:T}}var t5=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),er=null;function e5(){return er===null&&(er=new Aa(t5,16,16,jr,Vi),er.name="DFG_LUT",er.minFilter=Mn,er.magFilter=Mn,er.wrapS=Yi,er.wrapT=Yi,er.generateMipmaps=!1,er.needsUpdate=!0),er}var No=class{constructor(t={}){let{canvas:e=f1(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=$n}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let _=d,g=new Set([uh,hh,ch]),m=new Set([$n,ki,Ro,Po,oh,ah]),M=new Uint32Array(4),T=new Int32Array(4),x=new X,b=null,y=null,E=[],v=[],w=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,L=!1,D=null,V=null,I=null,O=null;this._outputColorSpace=hn;let H=0,z=0,nt=null,$=-1,P=null,K=new Ye,It=new Ye,Et=null,zt=new ce(0),Vt=0,ee=e.width,B=e.height,Y=1,Q=null,_t=null,ft=new Ye(0,0,ee,B),Ct=new Ye(0,0,ee,B),yt=!1,tt=new bo,at=!1,ct=!1,N=new Ne,gt=new X,Dt=new Ye,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ft=!1;function ne(){return nt===null?Y:1}let U=n;function jt(A,k){return e.getContext(A,k)}let Xt,R,S,W,J,it,St,dt,rt,ot,vt,kt,Tt,At,xt,Ht,Kt,G,bt,st,Mt,Pt,lt;try{let A={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",$t,!1),e.addEventListener("webglcontextrestored",mt,!1),e.addEventListener("webglcontextcreationerror",te,!1),U===null){let k="webgl2";if(U=jt(k,A),U===null)throw jt(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}pt()}catch(A){throw e.removeEventListener("webglcontextlost",$t,!1),e.removeEventListener("webglcontextrestored",mt,!1),e.removeEventListener("webglcontextcreationerror",te,!1),se("WebGLRenderer: "+A.message),A}function pt(){Xt=new ly(U),Xt.init(),Mt=new qS(U,Xt),R=new Kv(U,Xt,t,Mt),S=new QS(U,Xt),R.reversedDepthBuffer&&u&&S.buffers.depth.setReversed(!0),V=U.createFramebuffer(),I=U.createFramebuffer(),O=U.createFramebuffer(),W=new uy(U),J=new LS,it=new YS(U,Xt,S,J,R,Mt,W),St=new ay(C),dt=new d3(U),Pt=new Jv(U,dt),rt=new cy(U,dt,W,Pt),ot=new dy(U,rt,dt,Pt,W),G=new fy(U,R,it),xt=new jv(J),vt=new IS(C,St,Xt,R,Pt,xt),kt=new KS(C,J),Tt=new NS,At=new kS(Xt),Kt=new Zv(C,St,S,ot,p,l),Ht=new XS(C,ot,R),lt=new jS(U,W,R,S),bt=new $v(U,Xt,W),st=new hy(U,Xt,W),W.programs=vt.programs,C.capabilities=R,C.extensions=Xt,C.properties=J,C.renderLists=Tt,C.shadowMap=Ht,C.state=S,C.info=W}_!==$n&&(w=new my(_,e.width,e.height,a,i,s));let ut=new S0(C,U);this.xr=ut,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let A=Xt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Xt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(A){A!==void 0&&(Y=A,this.setSize(ee,B,!1))},this.getSize=function(A){return A.set(ee,B)},this.setSize=function(A,k,j=!0){if(ut.isPresenting){re("WebGLRenderer: Can't change size while VR device is presenting.");return}ee=A,B=k,e.width=Math.floor(A*Y),e.height=Math.floor(k*Y),j===!0&&(e.style.width=A+"px",e.style.height=k+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(ee*Y,B*Y).floor()},this.setDrawingBufferSize=function(A,k,j){ee=A,B=k,Y=j,e.width=Math.floor(A*j),e.height=Math.floor(k*j),this.setViewport(0,0,A,k)},this.setEffects=function(A){if(_===$n){se("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let k=0;k<A.length;k++)if(A[k].isOutputPass===!0){re("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(K)},this.getViewport=function(A){return A.copy(ft)},this.setViewport=function(A,k,j,Z){A.isVector4?ft.set(A.x,A.y,A.z,A.w):ft.set(A,k,j,Z),S.viewport(K.copy(ft).multiplyScalar(Y).round())},this.getScissor=function(A){return A.copy(Ct)},this.setScissor=function(A,k,j,Z){A.isVector4?Ct.set(A.x,A.y,A.z,A.w):Ct.set(A,k,j,Z),S.scissor(It.copy(Ct).multiplyScalar(Y).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(A){S.setScissorTest(yt=A)},this.setOpaqueSort=function(A){Q=A},this.setTransparentSort=function(A){_t=A},this.getClearColor=function(A){return A.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor(...arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha(...arguments)},this.clear=function(A=!0,k=!0,j=!0){let Z=0;if(A){let q=!1;if(nt!==null){let wt=nt.texture.format;q=g.has(wt)}if(q){let wt=nt.texture.type,Rt=m.has(wt),Ut=Kt.getClearColor(),Yt=Kt.getClearAlpha(),Jt=Ut.r,he=Ut.g,ie=Ut.b;Rt?(M[0]=Jt,M[1]=he,M[2]=ie,M[3]=Yt,U.clearBufferuiv(U.COLOR,0,M)):(T[0]=Jt,T[1]=he,T[2]=ie,T[3]=Yt,U.clearBufferiv(U.COLOR,0,T))}else Z|=U.COLOR_BUFFER_BIT}k&&(Z|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(Z|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&U.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),D=A},this.dispose=function(){e.removeEventListener("webglcontextlost",$t,!1),e.removeEventListener("webglcontextrestored",mt,!1),e.removeEventListener("webglcontextcreationerror",te,!1),Kt.dispose(),Tt.dispose(),At.dispose(),J.dispose(),St.dispose(),ot.dispose(),Pt.dispose(),lt.dispose(),vt.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",Pe),ut.removeEventListener("sessionend",Ie),de.stop()};function $t(A){A.preventDefault(),jf("WebGLRenderer: Context Lost."),L=!0}function mt(){jf("WebGLRenderer: Context Restored."),L=!1;let A=W.autoReset,k=Ht.enabled,j=Ht.autoUpdate,Z=Ht.needsUpdate,q=Ht.type;pt(),W.autoReset=A,Ht.enabled=k,Ht.autoUpdate=j,Ht.needsUpdate=Z,Ht.type=q}function te(A){se("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Qt(A){let k=A.target;k.removeEventListener("dispose",Qt),oe(k)}function oe(A){Xe(A),J.remove(A)}function Xe(A){let k=J.get(A).programs;k!==void 0&&(k.forEach(function(j){vt.releaseProgram(j)}),A.isShaderMaterial&&vt.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,j,Z,q,wt){k===null&&(k=Gt);let Rt=q.isMesh&&q.matrixWorld.determinantAffine()<0,Ut=le(A,k,j,Z,q);S.setMaterial(Z,Rt);let Yt=j.index,Jt=1;if(Z.wireframe===!0){if(Yt=rt.getWireframeAttribute(j),Yt===void 0)return;Jt=2}let he=j.drawRange,ie=j.attributes.position,Ot=he.start*Jt,Se=(he.start+he.count)*Jt;wt!==null&&(Ot=Math.max(Ot,wt.start*Jt),Se=Math.min(Se,(wt.start+wt.count)*Jt)),Yt!==null?(Ot=Math.max(Ot,0),Se=Math.min(Se,Yt.count)):ie!=null&&(Ot=Math.max(Ot,0),Se=Math.min(Se,ie.count));let Qe=Se-Ot;if(Qe<0||Qe===1/0)return;Pt.setup(q,Z,Ut,j,Yt);let Ce,ze=bt;if(Yt!==null&&(Ce=dt.get(Yt),ze=st,ze.setIndex(Ce)),q.isMesh)Z.wireframe===!0?(S.setLineWidth(Z.wireframeLinewidth*ne()),ze.setMode(U.LINES)):ze.setMode(U.TRIANGLES);else if(q.isLine){let An=Z.linewidth;An===void 0&&(An=1),S.setLineWidth(An*ne()),q.isLineSegments?ze.setMode(U.LINES):q.isLineLoop?ze.setMode(U.LINE_LOOP):ze.setMode(U.LINE_STRIP)}else q.isPoints?ze.setMode(U.POINTS):q.isSprite&&ze.setMode(U.TRIANGLES);if(q.isBatchedMesh)if(Xt.get("WEBGL_multi_draw"))ze.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let An=q._multiDrawStarts,Wt=q._multiDrawCounts,Bn=q._multiDrawCount,Ee=Yt?dt.get(Yt).bytesPerElement:1,vi=J.get(Z).currentProgram.getUniforms();for(let Xi=0;Xi<Bn;Xi++)vi.setValue(U,"_gl_DrawID",Xi),ze.render(An[Xi]/Ee,Wt[Xi])}else if(q.isInstancedMesh)ze.renderInstances(Ot,Qe,q.count);else if(j.isInstancedBufferGeometry){let An=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Wt=Math.min(j.instanceCount,An);ze.renderInstances(Ot,Qe,Wt)}else ze.render(Ot,Qe)};function ue(A,k,j,Z){D!==null&&A.isNodeMaterial&&D.setObject(Z,A),at===!0&&xt.setState(A,j,!1),A.transparent===!0&&A.side===hi&&A.forceSinglePass===!1?(A.side=bn,A.needsUpdate=!0,Zt(A,k,Z),A.side=Zr,A.needsUpdate=!0,Zt(A,k,Z),A.side=hi):Zt(A,k,Z)}this.compile=function(A,k,j=null){j===null&&(j=A),D!==null&&D.renderStart(A,k,j),y=At.get(j),y.init(k),v.push(y),j.traverseVisible(function(q){q.isLight&&q.layers.test(k.layers)&&(y.pushLight(q),q.castShadow&&y.pushShadow(q))}),A!==j&&A.traverseVisible(function(q){q.isLight&&q.layers.test(k.layers)&&(y.pushLight(q),q.castShadow&&y.pushShadow(q))}),y.setupLights(),D!==null&&D.updateLights(y.state.lightsArray),ct=this.localClippingEnabled,at=xt.init(this.clippingPlanes,ct),at===!0&&xt.setGlobalState(this.clippingPlanes,k),D!==null&&Ht.render(y.state.shadowsArray,j,k);let Z=new Set;return A.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let wt=q.material;if(wt)if(Array.isArray(wt))for(let Rt=0;Rt<wt.length;Rt++){let Ut=wt[Rt];ue(Ut,j,k,q),Z.add(Ut)}else ue(wt,j,k,q),Z.add(wt)}),y=v.pop(),D!==null&&D.renderEnd(),Z},this.compileAsync=function(A,k,j=null){let Z=this.compile(A,k,j);return new Promise(q=>{function wt(){if(Z.forEach(function(Rt){let Yt=J.get(Rt).currentProgram;(Yt===void 0||Yt.isReady())&&Z.delete(Rt)}),Z.size===0){q(A);return}setTimeout(wt,10)}Xt.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let Oe=null;function je(A){Oe&&Oe(A)}function Pe(){de.stop()}function Ie(){de.start()}let de=new X1;de.setAnimationLoop(je),typeof self<"u"&&de.setContext(self),this.setAnimationLoop=function(A){Oe=A,ut.setAnimationLoop(A),A===null?de.stop():de.start()},ut.addEventListener("sessionstart",Pe),ut.addEventListener("sessionend",Ie),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){se("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;D!==null&&D.renderStart(A,k);let j=ut.enabled===!0&&ut.isPresenting===!0,Z=w!==null&&(nt===null||j)&&w.begin(C,nt);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(k),k=ut.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,k,nt),y=At.get(A,v.length),y.init(k),y.state.textureUnits=it.getTextureUnits(),v.push(y),N.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),tt.setFromProjectionMatrix(N,Ui,k.reversedDepth),ct=this.localClippingEnabled,at=xt.init(this.clippingPlanes,ct),b=Tt.get(A,E.length),b.init(),E.push(b),ut.enabled===!0&&ut.isPresenting===!0){let Rt=C.xr.getDepthSensingMesh();Rt!==null&&on(Rt,k,-1/0,C.sortObjects)}on(A,k,0,C.sortObjects),b.finish(),D!==null&&D.updateLights(y.state.lightsArray),C.sortObjects===!0&&b.sort(Q,_t),Ft=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,Ft&&Kt.addToRenderList(b,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),at===!0&&xt.beginShadows();let q=y.state.shadowsArray;if(Ht.render(q,A,k),at===!0&&xt.endShadows(),(Z&&w.hasRenderPass())===!1){let Rt=b.opaque,Ut=b.transmissive;if(y.setupLights(),k.isArrayCamera){let Yt=k.cameras;if(Ut.length>0)for(let Jt=0,he=Yt.length;Jt<he;Jt++){let ie=Yt[Jt];ht(Rt,Ut,A,ie)}Ft&&Kt.render(A);for(let Jt=0,he=Yt.length;Jt<he;Jt++){let ie=Yt[Jt];F(b,A,ie,ie.viewport)}}else Ut.length>0&&ht(Rt,Ut,A,k),Ft&&Kt.render(A),F(b,A,k)}nt!==null&&z===0&&(it.updateMultisampleRenderTarget(nt),it.updateRenderTargetMipmap(nt)),Z&&w.end(C),A.isScene===!0&&A.onAfterRender(C,A,k),Pt.resetDefaultState(),$=-1,P=null,v.pop(),v.length>0?(y=v[v.length-1],it.setTextureUnits(y.state.textureUnits),at===!0&&xt.setGlobalState(C.clippingPlanes,y.state.camera)):y=null,E.pop(),E.length>0?b=E[E.length-1]:b=null,D!==null&&D.renderEnd()};function on(A,k,j,Z){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)j=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLightProbeGrid)y.pushLightProbeGrid(A);else if(A.isLight)y.pushLight(A),A.castShadow&&y.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(tt)){Z&&Dt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(N);let Rt=ot.update(A),Ut=A.material;Ut.visible&&b.push(A,Rt,Ut,j,Dt.z,null,k)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(tt))){let Rt=ot.update(A),Ut=A.material;if(Z&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Dt.copy(A.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),Dt.copy(Rt.boundingSphere.center)),Dt.applyMatrix4(A.matrixWorld).applyMatrix4(N)),Array.isArray(Ut)){let Yt=Rt.groups;for(let Jt=0,he=Yt.length;Jt<he;Jt++){let ie=Yt[Jt],Ot=Ut[ie.materialIndex];Ot&&Ot.visible&&b.push(A,Rt,Ot,j,Dt.z,ie,k)}}else Ut.visible&&b.push(A,Rt,Ut,j,Dt.z,null,k)}}let wt=A.children;for(let Rt=0,Ut=wt.length;Rt<Ut;Rt++)on(wt[Rt],k,j,Z)}function F(A,k,j,Z){let{opaque:q,transmissive:wt,transparent:Rt}=A;y.setupLightsView(j),at===!0&&xt.setGlobalState(C.clippingPlanes,j),Z&&S.viewport(K.copy(Z)),q.length>0&&et(q,k,j),wt.length>0&&et(wt,k,j),Rt.length>0&&et(Rt,k,j),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function ht(A,k,j,Z){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[Z.id]===void 0){let Ot=Xt.has("EXT_color_buffer_half_float")||Xt.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[Z.id]=new Jn(1,1,{generateMipmaps:!0,type:Ot?Vi:$n,minFilter:$r,samples:Math.max(4,R.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Me.workingColorSpace})}let wt=y.state.transmissionRenderTarget[Z.id],Rt=Z.viewport||K;wt.setSize(Rt.z*C.transmissionResolutionScale,Rt.w*C.transmissionResolutionScale);let Ut=C.getRenderTarget(),Yt=C.getActiveCubeFace(),Jt=C.getActiveMipmapLevel();C.setRenderTarget(wt),C.getClearColor(zt),Vt=C.getClearAlpha(),Vt<1&&C.setClearColor(16777215,.5),C.clear(),Ft&&Kt.render(j);let he=C.toneMapping;C.toneMapping=zi;let ie=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),y.setupLightsView(Z),at===!0&&xt.setGlobalState(C.clippingPlanes,Z),et(A,j,Z),it.updateMultisampleRenderTarget(wt),it.updateRenderTargetMipmap(wt),Xt.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let Se=0,Qe=k.length;Se<Qe;Se++){let Ce=k[Se],{object:ze,geometry:An,material:Wt,group:Bn}=Ce;if(Wt.side===hi&&ze.layers.test(Z.layers)){let Ee=Wt.side;Wt.side=bn,Wt.needsUpdate=!0,Nt(ze,j,Z,An,Wt,Bn),Wt.side=Ee,Wt.needsUpdate=!0,Ot=!0}}Ot===!0&&(it.updateMultisampleRenderTarget(wt),it.updateRenderTargetMipmap(wt))}C.setRenderTarget(Ut,Yt,Jt),C.setClearColor(zt,Vt),ie!==void 0&&(Z.viewport=ie),C.toneMapping=he}function et(A,k,j){let Z=k.isScene===!0?k.overrideMaterial:null;for(let q=0,wt=A.length;q<wt;q++){let Rt=A[q],{object:Ut,geometry:Yt,group:Jt}=Rt,he=Rt.material;he.allowOverride===!0&&Z!==null&&(he=Z),Ut.layers.test(j.layers)&&Nt(Ut,k,j,Yt,he,Jt)}}function Nt(A,k,j,Z,q,wt){D!==null&&q.isNodeMaterial&&D.setObject(A,q),A.onBeforeRender(C,k,j,Z,q,wt),A.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),q.onBeforeRender(C,k,j,Z,A,wt),q.transparent===!0&&q.side===hi&&q.forceSinglePass===!1?(q.side=bn,q.needsUpdate=!0,C.renderBufferDirect(j,k,Z,q,A,wt),q.side=Zr,q.needsUpdate=!0,C.renderBufferDirect(j,k,Z,q,A,wt),q.side=hi):C.renderBufferDirect(j,k,Z,q,A,wt),A.onAfterRender(C,k,j,Z,q,wt)}function Zt(A,k,j){k.isScene!==!0&&(k=Gt);let Z=J.get(A),q=y.state.lights,wt=y.state.shadowsArray,Rt=q.state.version,Ut=vt.getParameters(A,q.state,wt,k,j,y.state.lightProbeGridArray),Yt=vt.getProgramCacheKey(Ut),Jt=Z.programs;Z.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?k.environment:null,Z.fog=k.fog;let he=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;Z.envMap=St.get(A.envMap||Z.environment,he),Z.envMapRotation=Z.environment!==null&&A.envMap===null?k.environmentRotation:A.envMapRotation,Jt===void 0&&(A.addEventListener("dispose",Qt),Jt=new Map,Z.programs=Jt);let ie=Jt.get(Yt);if(ie!==void 0){if(Z.currentProgram===ie&&Z.lightsStateVersion===Rt)return we(A,Ut),ie}else Ut.uniforms=vt.getUniforms(A),D!==null&&A.isNodeMaterial&&D.build(A,j,Ut),A.onBeforeCompile(Ut,C),ie=vt.acquireProgram(Ut,Yt),Jt.set(Yt,ie),Z.uniforms=Ut.uniforms;let Ot=Z.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ot.clippingPlanes=xt.uniform),we(A,Ut),Z.needsLights=Ae(A),Z.lightsStateVersion=Rt,Z.needsLights&&(Ot.ambientLightColor.value=q.state.ambient,Ot.lightProbe.value=q.state.probe,Ot.sunLights.value=q.state.sun,Ot.sunLightShadows.value=q.state.sunShadow,Ot.directionalLights.value=q.state.directional,Ot.directionalLightShadows.value=q.state.directionalShadow,Ot.spotLights.value=q.state.spot,Ot.spotLightShadows.value=q.state.spotShadow,Ot.rectAreaLights.value=q.state.rectArea,Ot.ltc_1.value=q.state.rectAreaLTC1,Ot.ltc_2.value=q.state.rectAreaLTC2,Ot.pointLights.value=q.state.point,Ot.pointLightShadows.value=q.state.pointShadow,Ot.hemisphereLights.value=q.state.hemi,Ot.sunShadowMatrix.value=q.state.sunShadowMatrix,Ot.sunShadowCascade.value=q.state.sunShadowCascade,Ot.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ot.spotLightMatrix.value=q.state.spotLightMatrix,Ot.spotLightMap.value=q.state.spotLightMap,Ot.pointShadowMatrix.value=q.state.pointShadowMatrix),Z.lightProbeGrid=y.state.lightProbeGridArray.length>0,Z.currentProgram=ie,Z.uniformsList=null,ie}function ge(A){if(A.uniformsList===null){let k=A.currentProgram.getUniforms();A.uniformsList=Do.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function we(A,k){let j=J.get(A);j.outputColorSpace=k.outputColorSpace,j.batching=k.batching,j.batchingColor=k.batchingColor,j.instancing=k.instancing,j.instancingColor=k.instancingColor,j.instancingMorph=k.instancingMorph,j.skinning=k.skinning,j.morphTargets=k.morphTargets,j.morphNormals=k.morphNormals,j.morphColors=k.morphColors,j.morphTargetsCount=k.morphTargetsCount,j.numClippingPlanes=k.numClippingPlanes,j.numIntersection=k.numClipIntersection,j.vertexAlphas=k.vertexAlphas,j.vertexTangents=k.vertexTangents,j.toneMapping=k.toneMapping}function Be(A,k){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;x.setFromMatrixPosition(k.matrixWorld);for(let j=0,Z=A.length;j<Z;j++){let q=A[j];if(q.texture!==null&&q.boundingBox.containsPoint(x))return q}return null}function le(A,k,j,Z,q){k.isScene!==!0&&(k=Gt),it.resetTextureUnits();let wt=k.fog,Rt=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?k.environment:null,Ut=nt===null?C.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Me.workingColorSpace,Yt=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,Jt=St.get(Z.envMap||Rt,Yt),he=Z.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,ie=!!j.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Ot=!!j.morphAttributes.position,Se=!!j.morphAttributes.normal,Qe=!!j.morphAttributes.color,Ce=zi;Z.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(Ce=C.toneMapping);let ze=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,An=ze!==void 0?ze.length:0,Wt=J.get(Z),Bn=y.state.lights;if(at===!0&&(ct===!0||A!==P)){let Ge=A===P&&Z.id===$;xt.setState(Z,A,Ge)}let Ee=!1;Z.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==Bn.state.version||Wt.outputColorSpace!==Ut||q.isBatchedMesh&&Wt.batching===!1||!q.isBatchedMesh&&Wt.batching===!0||q.isBatchedMesh&&Wt.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&Wt.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&Wt.instancing===!1||!q.isInstancedMesh&&Wt.instancing===!0||q.isSkinnedMesh&&Wt.skinning===!1||!q.isSkinnedMesh&&Wt.skinning===!0||q.isInstancedMesh&&Wt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Wt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Wt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Wt.instancingMorph===!1&&q.morphTexture!==null||Wt.envMap!==Jt||Z.fog===!0&&Wt.fog!==wt||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==xt.numPlanes||Wt.numIntersection!==xt.numIntersection)||Wt.vertexAlphas!==he||Wt.vertexTangents!==ie||Wt.morphTargets!==Ot||Wt.morphNormals!==Se||Wt.morphColors!==Qe||Wt.toneMapping!==Ce||Wt.morphTargetsCount!==An||!!Wt.lightProbeGrid!=y.state.lightProbeGridArray.length>0)&&(Ee=!0):(Ee=!0,Wt.__version=Z.version);let vi=Wt.currentProgram;Ee===!0&&(vi=Zt(Z,k,q),D&&Z.isNodeMaterial&&D.onUpdateProgram(Z,vi,Wt));let Xi=!1,Dr=!1,Ks=!1,Fe=vi.getUniforms(),rn=Wt.uniforms;if(S.useProgram(vi.program)&&(Xi=!0,Dr=!0,Ks=!0),Z.id!==$&&($=Z.id,Dr=!0),Wt.needsLights){let Ge=Be(y.state.lightProbeGridArray,q);Wt.lightProbeGrid!==Ge&&(Wt.lightProbeGrid=Ge,Dr=!0)}if(Xi||P!==A){S.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Fe.setValue(U,"projectionMatrix",A.projectionMatrix),Fe.setValue(U,"viewMatrix",A.matrixWorldInverse);let Ur=Fe.map.cameraPosition;Ur!==void 0&&Ur.setValue(U,gt.setFromMatrixPosition(A.matrixWorld)),R.logarithmicDepthBuffer&&Fe.setValue(U,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Fe.setValue(U,"isOrthographic",A.isOrthographicCamera===!0),P!==A&&(P=A,Dr=!0,Ks=!0)}if(Wt.needsLights&&(Bn.state.sunShadowMap.length>0&&Fe.setValue(U,"sunShadowMap",Bn.state.sunShadowMap,it),Bn.state.directionalShadowMap.length>0&&Fe.setValue(U,"directionalShadowMap",Bn.state.directionalShadowMap,it),Bn.state.spotShadowMap.length>0&&Fe.setValue(U,"spotShadowMap",Bn.state.spotShadowMap,it),Bn.state.pointShadowMap.length>0&&Fe.setValue(U,"pointShadowMap",Bn.state.pointShadowMap,it)),q.isSkinnedMesh){Fe.setOptional(U,q,"bindMatrix"),Fe.setOptional(U,q,"bindMatrixInverse");let Ge=q.skeleton;Ge&&(Ge.boneTexture===null&&Ge.computeBoneTexture(),Fe.setValue(U,"boneTexture",Ge.boneTexture,it))}q.isBatchedMesh&&(Fe.setOptional(U,q,"batchingTexture"),Fe.setValue(U,"batchingTexture",q._matricesTexture,it),Fe.setOptional(U,q,"batchingIdTexture"),Fe.setValue(U,"batchingIdTexture",q._indirectTexture,it),Fe.setOptional(U,q,"batchingColorTexture"),q._colorsTexture!==null&&Fe.setValue(U,"batchingColorTexture",q._colorsTexture,it));let Nr=j.morphAttributes;if((Nr.position!==void 0||Nr.normal!==void 0||Nr.color!==void 0)&&G.update(q,j,vi),(Dr||Wt.receiveShadow!==q.receiveShadow)&&(Wt.receiveShadow=q.receiveShadow,Fe.setValue(U,"receiveShadow",q.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&k.environment!==null&&(rn.envMapIntensity.value=k.environmentIntensity),rn.dfgLUT!==void 0&&(rn.dfgLUT.value=e5()),Dr){if(Fe.setValue(U,"toneMappingExposure",C.toneMappingExposure),Wt.needsLights&&fe(rn,Ks),wt&&Z.fog===!0&&kt.refreshFogUniforms(rn,wt),kt.refreshMaterialUniforms(rn,Z,Y,B,y.state.transmissionRenderTarget[A.id]),Wt.needsLights&&Wt.lightProbeGrid){let Ge=Wt.lightProbeGrid;rn.probesSH.value=Ge.texture,rn.probesMin.value.copy(Ge.boundingBox.min),rn.probesMax.value.copy(Ge.boundingBox.max),rn.probesResolution.value.copy(Ge.resolution)}Do.upload(U,ge(Wt),rn,it)}if(Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Do.upload(U,ge(Wt),rn,it),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Fe.setValue(U,"center",q.center),Fe.setValue(U,"modelViewMatrix",q.modelViewMatrix),Fe.setValue(U,"normalMatrix",q.normalMatrix),Fe.setValue(U,"modelMatrix",q.matrixWorld),Z.uniformsGroups!==void 0){let Ge=Z.uniformsGroups;for(let Ur=0,js=Ge.length;Ur<js;Ur++){let ep=Ge[Ur];lt.update(ep,vi),lt.bind(ep,vi)}}return vi}function fe(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.sunLights.needsUpdate=k,A.sunLightShadows.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function Ae(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(A,k,j){let Z=J.get(A);Z.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),J.get(A.texture).__webglTexture=k,J.get(A.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:j,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,k){let j=J.get(A);j.__webglFramebuffer=k,j.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(A,k=0,j=0){nt=A,H=k,z=j;let Z=null,q=!1,wt=!1;if(A){let Ut=J.get(A);if(Ut.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(U.FRAMEBUFFER,Ut.__webglFramebuffer),K.copy(A.viewport),It.copy(A.scissor),Et=A.scissorTest,S.viewport(K),S.scissor(It),S.setScissorTest(Et),$=-1;return}else if(Ut.__webglFramebuffer===void 0)it.setupRenderTarget(A);else if(Ut.__hasExternalTextures)it.rebindTextures(A,J.get(A.texture).__webglTexture,J.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let he=A.depthTexture;if(Ut.__boundDepthTexture!==he){if(he!==null&&J.has(he)&&(A.width!==he.image.width||A.height!==he.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");it.setupDepthRenderbuffer(A)}}let Yt=A.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(wt=!0);let Jt=J.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Jt[k])?Z=Jt[k][j]:Z=Jt[k],q=!0):A.samples>0&&it.useMultisampledRTT(A)===!1?Z=J.get(A).__webglMultisampledFramebuffer:Array.isArray(Jt)?Z=Jt[j]:Z=Jt,K.copy(A.viewport),It.copy(A.scissor),Et=A.scissorTest}else K.copy(ft).multiplyScalar(Y).floor(),It.copy(Ct).multiplyScalar(Y).floor(),Et=yt;if(j!==0&&(Z=V),S.bindFramebuffer(U.FRAMEBUFFER,Z)&&S.drawBuffers(A,Z),S.viewport(K),S.scissor(It),S.setScissorTest(Et),q){let Ut=J.get(A.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ut.__webglTexture,j)}else if(wt){let Ut=k;for(let Yt=0;Yt<A.textures.length;Yt++){let Jt=J.get(A.textures[Yt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Yt,Jt.__webglTexture,j,Ut)}}else if(A!==null&&j!==0){let Ut=J.get(A.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ut.__webglTexture,j)}$=-1};function yn(A){let k=J.get(A);return(k.__readFormat!==A.format||k.__readType!==A.type)&&(k.__readFormat=A.format,k.__readType=A.type,k.__formatReadable=R.textureFormatReadable(A.format),k.__typeReadable=R.textureTypeReadable(A.type)),k}this.readRenderTargetPixels=function(A,k,j,Z,q,wt,Rt,Ut=0){if(!(A&&A.isWebGLRenderTarget)){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Yt=J.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Rt!==void 0&&(Yt=Yt[Rt]),Yt){S.bindFramebuffer(U.FRAMEBUFFER,Yt);try{let Jt=A.textures[Ut],he=Jt.format,ie=Jt.type;A.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ut);let Ot=yn(Jt);if(Ot.__formatReadable===!1){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ot.__typeReadable===!1){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-Z&&j>=0&&j<=A.height-q&&U.readPixels(k,j,Z,q,Mt.convert(he),Mt.convert(ie),wt)}finally{let Jt=nt!==null?J.get(nt).__webglFramebuffer:null;S.bindFramebuffer(U.FRAMEBUFFER,Jt)}}},this.readRenderTargetPixelsAsync=async function(A,k,j,Z,q,wt,Rt,Ut=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Yt=J.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Rt!==void 0&&(Yt=Yt[Rt]),Yt)if(k>=0&&k<=A.width-Z&&j>=0&&j<=A.height-q){S.bindFramebuffer(U.FRAMEBUFFER,Yt);let Jt=A.textures[Ut],he=Jt.format,ie=Jt.type;A.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ut);let Ot=yn(Jt);if(Ot.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ot.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Se=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Se),U.bufferData(U.PIXEL_PACK_BUFFER,wt.byteLength,U.STREAM_READ),U.readPixels(k,j,Z,q,Mt.convert(he),Mt.convert(ie),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let Qe=nt!==null?J.get(nt).__webglFramebuffer:null;S.bindFramebuffer(U.FRAMEBUFFER,Qe);let Ce=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await p1(U,Ce,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Se),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,wt),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(Se),U.deleteSync(Ce),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,k=null,j=0){let Z=Math.pow(2,-j),q=Math.floor(A.image.width*Z),wt=Math.floor(A.image.height*Z),Rt=k!==null?k.x:0,Ut=k!==null?k.y:0;it.setTexture2D(A,0),U.copyTexSubImage2D(U.TEXTURE_2D,j,0,0,Rt,Ut,q,wt),S.unbindTexture()},this.copyTextureToTexture=function(A,k,j=null,Z=null,q=0,wt=0){let Rt,Ut,Yt,Jt,he,ie,Ot,Se,Qe,Ce=A.isCompressedTexture?A.mipmaps[wt]:A.image;if(j!==null)Rt=j.max.x-j.min.x,Ut=j.max.y-j.min.y,Yt=j.isBox3?j.max.z-j.min.z:1,Jt=j.min.x,he=j.min.y,ie=j.isBox3?j.min.z:0;else{let rn=Math.pow(2,-q);Rt=Math.floor(Ce.width*rn),Ut=Math.floor(Ce.height*rn),A.isDataArrayTexture?Yt=Ce.depth:A.isData3DTexture?Yt=Math.floor(Ce.depth*rn):Yt=1,Jt=0,he=0,ie=0}Z!==null?(Ot=Z.x,Se=Z.y,Qe=Z.z):(Ot=0,Se=0,Qe=0);let ze=Mt.convert(k.format),An=Mt.convert(k.type),Wt;k.isData3DTexture?(it.setTexture3D(k,0),Wt=U.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(it.setTexture2DArray(k,0),Wt=U.TEXTURE_2D_ARRAY):(it.setTexture2D(k,0),Wt=U.TEXTURE_2D),S.activeTexture(U.TEXTURE0),S.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,k.flipY),S.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),S.pixelStorei(U.UNPACK_ALIGNMENT,k.unpackAlignment);let Bn=S.getParameter(U.UNPACK_ROW_LENGTH),Ee=S.getParameter(U.UNPACK_IMAGE_HEIGHT),vi=S.getParameter(U.UNPACK_SKIP_PIXELS),Xi=S.getParameter(U.UNPACK_SKIP_ROWS),Dr=S.getParameter(U.UNPACK_SKIP_IMAGES);S.pixelStorei(U.UNPACK_ROW_LENGTH,Ce.width),S.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ce.height),S.pixelStorei(U.UNPACK_SKIP_PIXELS,Jt),S.pixelStorei(U.UNPACK_SKIP_ROWS,he),S.pixelStorei(U.UNPACK_SKIP_IMAGES,ie);let Ks=A.isDataArrayTexture||A.isData3DTexture,Fe=k.isDataArrayTexture||k.isData3DTexture;if(A.isDepthTexture){let rn=J.get(A),Nr=J.get(k),Ge=J.get(rn.__renderTarget),Ur=J.get(Nr.__renderTarget);S.bindFramebuffer(U.READ_FRAMEBUFFER,Ge.__webglFramebuffer),S.bindFramebuffer(U.DRAW_FRAMEBUFFER,Ur.__webglFramebuffer);for(let js=0;js<Yt;js++)Ks&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,J.get(A).__webglTexture,q,ie+js),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,J.get(k).__webglTexture,wt,Qe+js)),U.blitFramebuffer(Jt,he,Rt,Ut,Ot,Se,Rt,Ut,U.DEPTH_BUFFER_BIT,U.NEAREST);S.bindFramebuffer(U.READ_FRAMEBUFFER,null),S.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(q!==0||A.isRenderTargetTexture||J.has(A)){let rn=J.get(A),Nr=J.get(k);S.bindFramebuffer(U.READ_FRAMEBUFFER,I),S.bindFramebuffer(U.DRAW_FRAMEBUFFER,O);for(let Ge=0;Ge<Yt;Ge++)Ks?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,rn.__webglTexture,q,ie+Ge):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,rn.__webglTexture,q),Fe?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Nr.__webglTexture,wt,Qe+Ge):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Nr.__webglTexture,wt),q!==0?U.blitFramebuffer(Jt,he,Rt,Ut,Ot,Se,Rt,Ut,U.COLOR_BUFFER_BIT,U.NEAREST):Fe?U.copyTexSubImage3D(Wt,wt,Ot,Se,Qe+Ge,Jt,he,Rt,Ut):U.copyTexSubImage2D(Wt,wt,Ot,Se,Jt,he,Rt,Ut);S.bindFramebuffer(U.READ_FRAMEBUFFER,null),S.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Fe?A.isDataTexture||A.isData3DTexture?U.texSubImage3D(Wt,wt,Ot,Se,Qe,Rt,Ut,Yt,ze,An,Ce.data):k.isCompressedArrayTexture?U.compressedTexSubImage3D(Wt,wt,Ot,Se,Qe,Rt,Ut,Yt,ze,Ce.data):U.texSubImage3D(Wt,wt,Ot,Se,Qe,Rt,Ut,Yt,ze,An,Ce):A.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,wt,Ot,Se,Rt,Ut,ze,An,Ce.data):A.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,wt,Ot,Se,Ce.width,Ce.height,ze,Ce.data):U.texSubImage2D(U.TEXTURE_2D,wt,Ot,Se,Rt,Ut,ze,An,Ce);S.pixelStorei(U.UNPACK_ROW_LENGTH,Bn),S.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ee),S.pixelStorei(U.UNPACK_SKIP_PIXELS,vi),S.pixelStorei(U.UNPACK_SKIP_ROWS,Xi),S.pixelStorei(U.UNPACK_SKIP_IMAGES,Dr),wt===0&&k.generateMipmaps&&U.generateMipmap(Wt),S.unbindTexture()},this.initRenderTarget=function(A){J.get(A).__webglFramebuffer===void 0&&it.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?it.setTextureCube(A,0):A.isData3DTexture?it.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?it.setTexture2DArray(A,0):it.setTexture2D(A,0),S.unbindTexture()},this.resetState=function(){H=0,z=0,nt=null,S.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Me._getDrawingBufferColorSpace(t),e.unpackColorSpace=Me._getUnpackColorSpace()}};var Fo=class extends gr{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new Fi;t.deleteAttribute("uv");let e=new Bi({side:bn}),n=new Bi,i=new Za(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let s=new be(t,e);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let o=new Ra(t,n,6),a=new _n;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new be(t,Oo(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new be(t,Oo(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new be(t,Oo(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let f=new be(t,Oo(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);let u=new be(t,Oo(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let d=new be(t,Oo(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Oo(r){return new Wa({color:0,emissive:16777215,emissiveIntensity:r})}var j1={Whatsapp:{W:1784,H:556,d:"M469.0 44.25Q466.25 44.25 466.25 40.5Q466.25 36.75 468.375 35.625Q470.5 34.5 475.625 31.875Q480.75 29.25 482.75 28.375Q484.75 27.5 489.0 25.5Q493.25 23.5 495.875 22.75Q498.5 22.0 502.25 20.75Q508.5 19.0 517.875 19.0Q527.25 19.0 537.125 25.5Q547.0 32.0 547.0 42.5Q547.0 64.25 528.0 100.125Q509.0 136.0 479.25 174.75Q449.5 213.5 412.5 253.5Q375.5 293.5 340.25 325.0Q305.0 356.5 273.875 376.5Q242.75 396.5 226.0 396.5Q190.5 396.5 190.5 364.25Q190.5 319.0 241.75 233.5Q142.0 351.5 74.75 385.75Q57.25 394.75 48.0 394.75Q38.75 394.75 25.375 383.375Q12.0 372.0 12.0 361.0Q12.0 298.75 98.5 186.75Q131.5 144.0 180.75 91.25Q137.75 128.5 115.25 128.5Q103.25 128.5 97.5 116.75Q92.25 108.25 92.25 100.625Q92.25 93.0 102.25 84.0Q112.25 75.0 114.0 75.0Q115.75 75.0 117.25 76.25Q118.75 77.5 118.75 78.5Q115.25 82.25 115.25 83.375Q115.25 84.5 118.25 84.5Q121.25 84.5 168.25 55.875Q215.25 27.25 219.75 27.25Q232.75 27.25 244.75 34.375Q256.75 41.5 256.75 46.375Q256.75 51.25 251.75 59.25Q246.75 67.25 192.25 137.625Q137.75 208.0 113.0 244.125Q88.25 280.25 76.75 303.375Q65.25 326.5 65.25 331.5Q65.25 336.5 66.75 336.5Q77.25 336.5 141.875 273.125Q206.5 209.75 265.0 147.875Q323.5 86.0 328.625 79.25Q333.75 72.5 339.75 69.625Q345.75 66.75 357.75 66.75Q391.25 66.75 391.25 79.5Q391.25 84.75 376.625 101.75Q362.0 118.75 356.0 126.5Q324.75 166.25 286.375 238.5Q248.0 310.75 248.0 331.0Q248.0 336.5 251.625 336.5Q255.25 336.5 273.125 322.375Q291.0 308.25 320.25 280.125Q349.5 252.0 386.75 210.5Q424.0 169.0 457.875 118.375Q491.75 67.75 491.75 54.75Q491.75 41.75 481.75 41.75ZM670.0 316.5Q671.75 328.0 671.75 334.625Q671.75 341.25 669.375 346.125Q667.0 351.0 658.875 359.875Q650.75 368.75 639.5 377.75Q612.0 399.5 583.25 399.5Q542.0 399.5 542.0 363.0Q542.0 331.25 597.25 236.5Q599.25 233.0 600.0 231.5Q580.75 245.0 526.375 305.125Q472.0 365.25 454.0 390.25Q452.5 392.5 446.5 395.25Q440.5 398.0 437.125 398.0Q433.75 398.0 429.875 395.875Q426.0 393.75 425.0 393.75Q421.75 393.75 421.75 391.625Q421.75 389.5 430.625 368.625Q439.5 347.75 454.0 316.75Q493.75 231.25 572.25 94.25Q599.75 46.25 615.25 26.25Q626.25 12.0 652.25 12.0Q657.75 12.0 658.5 15.25Q659.25 18.5 659.25 22.25Q659.25 26.0 657.75 29.75L631.0 71.5Q551.5 195.5 511.25 277.0Q550.25 229.5 587.0 203.75Q609.75 187.5 621.125 187.5Q632.5 187.5 641.75 191.125Q651.0 194.75 651.0 208.5Q651.0 213.5 634.75 245.5Q586.0 341.5 586.0 352.125Q586.0 362.75 594.75 362.75Q607.5 362.75 634.0 338.0Q654.0 319.25 659.25 314.0Q662.25 311.75 664.75 311.75Q669.5 311.75 670.0 316.5ZM842.0 200.25Q861.0 200.25 861.0 213.25Q861.0 220.25 857.75 223.5Q854.5 226.75 843.875 245.125Q833.25 263.5 820.375 292.125Q807.5 320.75 803.75 341.0Q803.0 343.5 803.0 348.0Q803.0 361.75 810.5 361.75Q818.0 361.75 828.25 354.625Q838.5 347.5 846.5 339.375Q854.5 331.25 862.125 322.75Q869.75 314.25 871.25 313.0Q872.75 311.75 875.75 311.75Q880.5 311.75 881.5 319.0Q882.5 326.25 882.5 334.0Q882.5 341.75 881.0 344.75Q873.75 359.0 849.125 379.0Q824.5 399.0 804.375 399.0Q784.25 399.0 774.75 386.75Q765.25 374.5 765.25 359.625Q765.25 344.75 770.25 333.5Q749.5 360.5 722.625 379.25Q695.75 398.0 678.75 398.0Q661.75 398.0 651.0 387.75Q637.25 375.0 637.25 352.375Q637.25 329.75 647.375 306.875Q657.5 284.0 674.0 265.125Q690.5 246.25 710.25 230.75Q751.75 198.25 786.75 198.25Q800.25 198.25 808.75 202.75Q817.25 207.25 819.5 214.0Q825.5 205.0 829.625 202.625Q833.75 200.25 842.0 200.25ZM808.75 228.0Q766.0 228.0 720.25 275.5Q704.0 292.5 690.375 316.25Q676.75 340.0 676.75 348.75Q676.75 357.5 681.75 357.5Q688.75 357.5 720.75 329.875Q752.75 302.25 763.25 289.25Q774.75 274.75 808.75 228.0ZM1031.75 68.25 1042.0 70.75Q1044.25 70.75 1046.0 73.0Q1047.75 75.25 1047.75 77.25Q1047.75 79.25 1042.5 88.0Q1037.25 96.75 1030.125 107.875Q1023.0 119.0 1022.5 120.0Q1042.0 118.5 1050.125 118.5Q1058.25 118.5 1061.25 119.625Q1064.25 120.75 1068.125 125.875Q1072.0 131.0 1075.25 133.625Q1078.5 136.25 1078.5 141.5Q1078.5 146.75 1072.125 150.375Q1065.75 154.0 1058.5 154.75Q1000.5 160.5 994.5 160.75Q974.25 191.75 937.875 257.375Q901.5 323.0 899.25 339.5Q898.25 347.0 898.25 351.75Q898.25 361.5 908.5 361.5Q918.75 361.5 931.25 353.625Q943.75 345.75 954.25 336.5Q982.25 311.5 984.25 311.5Q990.75 311.5 990.75 334.0Q990.75 346.25 979.5 356.0Q954.25 377.75 937.0 388.75Q919.75 399.75 902.5 399.75Q898.75 399.75 895.5 399.0Q875.5 395.25 866.125 384.375Q856.75 373.5 856.875 355.0Q857.0 336.5 867.875 310.125Q878.75 283.75 895.25 254.0Q922.25 205.5 949.25 163.0L939.75 164.25Q910.75 167.5 906.0 167.5H903.75Q896.5 167.5 889.75 164.625Q883.0 161.75 883.0 157.5Q883.0 153.25 886.625 149.25Q890.25 145.25 891.0 143.0Q892.75 137.5 904.125 130.75Q915.5 124.0 921.25 123.625Q927.0 123.25 932.375 123.0Q937.75 122.75 944.375 122.5Q951.0 122.25 954.5 122.0L977.0 121.0Q998.0 89.5 1005.875 80.5Q1013.75 71.5 1015.0 70.625Q1016.25 69.75 1020.0 69.75ZM997.25 340.25 997.0 344.25Q997.0 350.5 1001.75 355.0Q1006.5 359.5 1010.5 359.5Q1040.5 359.5 1063.625 350.5Q1086.75 341.5 1086.75 332.5Q1086.75 328.25 1078.375 325.125Q1070.0 322.0 1050.125 317.375Q1030.25 312.75 1021.25 310.125Q1012.25 307.5 1007.0 305.25Q1001.75 303.0 996.25 299.0Q984.5 290.75 984.5 274.375Q984.5 258.0 996.625 241.875Q1008.75 225.75 1027.0 214.25Q1045.25 202.75 1066.25 194.0Q1107.75 176.75 1136.0 176.75Q1163.75 176.75 1170.25 188.75Q1172.25 193.0 1172.25 198.25V200.0Q1172.25 213.25 1166.625 220.75Q1161.0 228.25 1148.875 234.25Q1136.75 240.25 1129.625 240.25Q1122.5 240.25 1120.625 239.25Q1118.75 238.25 1117.5 236.625Q1116.25 235.0 1114.375 234.25Q1112.5 233.5 1112.5 230.5Q1112.5 227.5 1115.0 224.375Q1117.5 221.25 1118.5 217.75Q1102.0 218.5 1084.0 225.375Q1066.0 232.25 1053.125 240.75Q1040.25 249.25 1031.75 257.0Q1023.25 264.75 1023.25 268.375Q1023.25 272.0 1034.75 274.25Q1086.5 284.5 1102.75 292.0Q1119.0 299.5 1125.25 309.0Q1131.5 318.5 1131.5 326.25Q1131.5 342.25 1118.75 356.5Q1106.0 370.75 1087.25 379.75Q1047.0 399.5 1017.125 399.5Q987.25 399.5 975.875 390.375Q964.5 381.25 964.5 368.75Q964.5 356.25 970.875 345.625Q977.25 335.0 987.25 335.0Q997.25 335.0 997.25 340.25ZM1348.75 200.25Q1367.75 200.25 1367.75 213.25Q1367.75 220.25 1364.5 223.5Q1361.25 226.75 1350.625 245.125Q1340.0 263.5 1327.125 292.125Q1314.25 320.75 1310.5 341.0Q1309.75 343.5 1309.75 348.0Q1309.75 361.75 1317.25 361.75Q1324.75 361.75 1335.0 354.625Q1345.25 347.5 1353.25 339.375Q1361.25 331.25 1368.875 322.75Q1376.5 314.25 1378.0 313.0Q1379.5 311.75 1382.5 311.75Q1387.25 311.75 1388.25 319.0Q1389.25 326.25 1389.25 334.0Q1389.25 341.75 1387.75 344.75Q1380.5 359.0 1355.875 379.0Q1331.25 399.0 1311.125 399.0Q1291.0 399.0 1281.5 386.75Q1272.0 374.5 1272.0 359.625Q1272.0 344.75 1277.0 333.5Q1256.25 360.5 1229.375 379.25Q1202.5 398.0 1185.5 398.0Q1168.5 398.0 1157.75 387.75Q1144.0 375.0 1144.0 352.375Q1144.0 329.75 1154.125 306.875Q1164.25 284.0 1180.75 265.125Q1197.25 246.25 1217.0 230.75Q1258.5 198.25 1293.5 198.25Q1307.0 198.25 1315.5 202.75Q1324.0 207.25 1326.25 214.0Q1332.25 205.0 1336.375 202.625Q1340.5 200.25 1348.75 200.25ZM1315.5 228.0Q1272.75 228.0 1227.0 275.5Q1210.75 292.5 1197.125 316.25Q1183.5 340.0 1183.5 348.75Q1183.5 357.5 1188.5 357.5Q1195.5 357.5 1227.5 329.875Q1259.5 302.25 1270.0 289.25Q1281.5 274.75 1315.5 228.0ZM1505.75 124.25 1510.25 123.75Q1514.0 123.75 1516.25 130.25Q1518.5 136.75 1518.5 139.0Q1518.5 141.25 1513.5 147.5L1442.25 256.0Q1479.75 218.5 1518.5 201.25Q1533.5 194.75 1545.625 194.75Q1557.75 194.75 1565.125 202.625Q1572.5 210.5 1572.5 222.25Q1572.5 234.0 1566.0 251.25Q1559.5 268.5 1548.375 288.0Q1537.25 307.5 1521.375 327.25Q1505.5 347.0 1488.125 363.0Q1470.75 379.0 1450.25 389.0Q1429.75 399.0 1414.25 399.0Q1383.0 399.0 1383.0 370.25Q1353.75 415.0 1315.5 476.25Q1277.25 537.5 1274.5 541.0Q1271.75 544.5 1269.875 544.5Q1268.0 544.5 1264.125 542.25Q1260.25 540.0 1256.0 534.75Q1251.75 529.5 1251.625 519.5Q1251.5 509.5 1257.5 499.25Q1291.25 443.0 1387.625 287.625Q1484.0 132.25 1492.0 127.0Q1496.5 124.0 1501.0 124.0ZM1527.75 239.25Q1527.75 234.0 1522.75 234.0Q1509.25 234.0 1465.625 275.5Q1422.0 317.0 1396.25 351.25Q1402.75 359.25 1415.5 359.25Q1428.25 359.25 1448.5 345.5Q1468.75 331.75 1486.0 312.875Q1503.25 294.0 1515.5 273.25Q1527.75 252.5 1527.75 239.25ZM1706.0 124.25 1710.5 123.75Q1714.25 123.75 1716.5 130.25Q1718.75 136.75 1718.75 139.0Q1718.75 141.25 1713.75 147.5L1642.5 256.0Q1680.0 218.5 1718.75 201.25Q1733.75 194.75 1745.875 194.75Q1758.0 194.75 1765.375 202.625Q1772.75 210.5 1772.75 222.25Q1772.75 234.0 1766.25 251.25Q1759.75 268.5 1748.625 288.0Q1737.5 307.5 1721.625 327.25Q1705.75 347.0 1688.375 363.0Q1671.0 379.0 1650.5 389.0Q1630.0 399.0 1614.5 399.0Q1583.25 399.0 1583.25 370.25Q1554.0 415.0 1515.75 476.25Q1477.5 537.5 1474.75 541.0Q1472.0 544.5 1470.125 544.5Q1468.25 544.5 1464.375 542.25Q1460.5 540.0 1456.25 534.75Q1452.0 529.5 1451.875 519.5Q1451.75 509.5 1457.75 499.25Q1491.5 443.0 1587.875 287.625Q1684.25 132.25 1692.25 127.0Q1696.75 124.0 1701.25 124.0ZM1728.0 239.25Q1728.0 234.0 1723.0 234.0Q1709.5 234.0 1665.875 275.5Q1622.25 317.0 1596.5 351.25Q1603.0 359.25 1615.75 359.25Q1628.5 359.25 1648.75 345.5Q1669.0 331.75 1686.25 312.875Q1703.5 294.0 1715.75 273.25Q1728.0 252.5 1728.0 239.25Z",strokes:[[[112.4,79.9,4.4,0],[110.4,84,5.9,0],[109.1,89,9.2,0],[111.1,94,12.3,0],[116,99,16.1,0],[120.3,101.9,19.1,0],[125,101.1,19.6,0],[130,100,20.6,0],[135,98.3,21.3,0],[140,95.4,21.2,0],[145,92.3,20.9,0],[150,89.3,20.6,0],[155,87.4,19.4,0],[160,86.4,17.2,0],[165,85.1,16.5,0],[170,84,17.1,0],[175,82.9,19.2,0],[180,81.6,22.4,0],[184.9,81.1,25.4,0],[189,81.1,28.1,0],[191,83.1,28.4,0],[190.1,88,24.9,0],[188.7,93,21.3,0],[187.3,98,18.6,0],[185.9,103,17.1,0],[184.4,108,17.1,0],[183.1,113,18.5,0],[181.3,118,20,0],[177.4,123,20.6,0],[173.4,128,20.7,0],[169.6,133,21,0],[165.3,138,21.2,0],[161,143,21.4,0],[156.7,148,21.7,0],[152.6,153,21.9,0],[148.7,158,22,0],[144.7,163,22.2,0],[141,168,22.4,0],[137,173,22.5,0],[133,178,22.7,0],[129,183,22.8,0],[124.9,188,22.9,0],[120.9,193,22.9,0],[117.3,198,23.1,0],[113.6,203,23.3,0],[109.9,208,23.4,0],[106.1,213,23.4,0],[102.4,218,23.4,0],[98.9,223,23.4,0],[95.4,228,23.4,0],[92.3,233,23.6,0],[88.9,238,23.6,0],[85.3,243,23.7,0],[82,248,23.7,0],[78.7,253,23.6,0],[75.4,258,23.6,0],[72.3,263,23.6,0],[69.3,268,23.6,0],[66.4,273,23.6,0],[63.6,278,23.6,0],[60.6,283,23.7,0],[57.9,288,23.5,0],[55.4,293,23.5,0],[53.1,298,23.5,0],[50.7,303,23.7,0],[48.4,308,23.7,0],[46.9,313,23.3,0],[45.7,318,22.5,0],[44.9,323,22,0],[44.1,328,22,0],[43.3,333,22.7,0],[42.4,338,24,0],[41.7,343,26,0],[41,348,28.5,0],[41.6,353,30.3,0],[44.1,357.4,31.6,0],[49,359.4,30.4,0],[54,359.4,27.7,0],[59,358.4,24.8,0],[64,357.4,22.7,0],[69,356.1,21.3,0],[74,354.9,21.1,0],[79,353.6,21.6,0],[84,352.3,22.8,0],[89,349.6,23.2,0],[94,346.1,23.3,0],[99,342.4,23.4,0],[104,338.6,23.7,0],[109,334.4,23.7,0],[114,330.4,23.8,0],[119,326.1,23.9,0],[124,321.9,24,0],[129,317,24.3,0],[134,312.3,24.2,0],[139,308,24.1,0],[144,303,24.6,0],[149,298,24.8,0],[154,293,24.5,0],[159,288.6,24.1,0],[164,284,24,0],[169,279,24,0],[173.9,274,23.9,0],[178.1,269,24,0],[183,264,24,0],[188,259,23.8,0],[192.3,254,23.4,0],[197,249,23.3,0],[202,244,23.3,0],[206.7,239,22.8,0],[211,234,22.9,0],[216,229.1,22.6,0],[221,226,21.3,0],[226,224.3,20,0],[231,222.7,19.8,0],[236,221,21.1,0],[241,219.3,23.6,0],[246,217.7,26.7,0],[251,216,30.6,0],[255.1,214.6,34,0],[257.9,211,37.2,0],[261.4,206,37.6,0],[265.3,201,36.5,0],[268.6,196,36.2,0],[272.3,191,35.4,0],[276,186,34.7,0],[279.7,181,33.9,0],[283.4,176,33.2,0],[286.9,171,32.7,0],[290.7,166,32.1,0],[294.6,161,31.5,0],[298.7,156,30.6,0],[302.3,151,30.2,0],[306.1,146,29.6,0],[310.1,141,29,0],[313.7,136,28.6,0],[318,131,28.2,0],[322.1,126,27.6,0],[325.7,121,27.3,0],[330,116,27.1,0],[334.6,111,26.7,0],[338.4,106,26.5,0],[342.7,101,26.3,0],[346.9,96,26.2,0],[351.1,91.3,25,0],[356,87.1,21.8,0],[361,83.9,18.6,0],[366,82.4,16.6,0],[371,81,14.7,0],[376,79.9,12.5,0],[379.7,79,10.5,0],[377,79.6,11.9,1],[372,80.7,14.3,1],[367,82.1,16.2,1],[362,83.6,18.2,1],[357,86.3,21.1,1],[352,90.4,24.4,1],[347.7,95,26.2,1],[343.6,100,26.3,1],[339.3,105,26.4,1],[335.4,110,26.6,1],[331,115,27,1],[326.4,120,27.3,1],[322.9,125,27.6,1],[318.9,130,28.1,1],[314.4,135,28.6,1],[310.9,140,29,1],[306.9,145,29.5,1],[303,150,30.1,1],[299.6,155,30.4,1],[295.4,160,31.3,1],[291.6,165,31.9,1],[287.6,170,32.7,1],[284.1,175,33.1,1],[280.4,180,33.8,1],[276.7,185,34.6,1],[273,190,35.3,1],[269.3,195,36,1],[266,200,36.4,1],[262.3,205,37.3,1],[258.6,210,37.5,1],[256.4,214.6,34.8,1],[256.6,218.9,31.8,0],[257.4,223.1,29.4,0],[257,228,26.1,0],[256,233,22.9,0],[255,238,20.5,0],[254,243,19.1,0],[253,248,19.1,0],[252,253,20.2,0],[251,258,21.7,0],[249.3,263,22.2,0],[246.6,268,22.5,0],[243.7,273,22.7,0],[241.6,278,22.7,0],[239.3,283,22.9,0],[237,288,23,0],[234.7,293,23.2,0],[232.6,298,23.3,0],[231,303,23.1,0],[229.3,308,23.2,0],[228.4,313,22.6,0],[227.4,318,22.4,0],[226.6,323,22.5,0],[225.7,328,23.3,0],[224.9,333,24.2,0],[224.1,338,25.3,0],[223.3,343,27.3,0],[222.7,348,29.7,0],[222,353,31.6,0],[222.3,358,32.5,0],[226,361.3,34.1,0],[231,360.7,32,0],[236,359.7,28.4,0],[241,358.6,25.3,0],[246,357.6,23,0],[251,356.4,21.5,0],[256,355.1,20.6,0],[261,353.9,21,0],[266,352.6,22,0],[271,350.3,22.8,0],[276,346.9,22.8,0],[281,343.3,22.8,0],[286,339.6,23,0],[291,335.6,23.1,0],[296,331.6,23.2,0],[301,327.4,23.4,0],[306,323.3,23.4,0],[311,319,23.7,0],[316,314.7,23.8,0],[321,310.3,23.9,0],[326,306,23.9,0],[331,301.3,23.9,0],[336,297,23.9,0],[341,292,24,0],[346,287,24,0],[351,282,24.4,0],[356,277,24.8,0],[361,272,24.8,0],[365.4,267,24.5,0],[370,262,24.7,0],[375,257,24.8,0],[380,252,24.8,0],[384.7,247,24.6,0],[389,242,24.5,0],[393.9,237,24.7,0],[398.1,232,24.5,0],[402.9,227,24.7,0],[407.1,222,24.5,0],[411.7,217,24.6,0],[416,212,24.7,0],[420.6,207,24.8,0],[424.9,202,24.9,0],[429.1,197,24.9,0],[433.3,192,24.9,0],[437.4,187,25.1,0],[441.4,182,25.1,0],[445.4,177,25.2,0],[449.3,172,25.3,0],[452.9,167,25.4,0],[456.6,162,25.5,0],[460.3,157,25.6,0],[463.9,152,25.6,0],[467.4,147,25.6,0],[471,142,25.6,0],[474.4,137,25.6,0],[478,132,25.8,0],[481.6,127,25.8,0],[484.9,122,25.8,0],[487.9,117,25.8,0],[491,112,25.9,0],[494,107,25.8,0],[496.9,102,25.6,0],[499.7,97,25.6,0],[502.4,92,25.5,0],[505.3,87,25.8,0],[507.7,82,25.7,0],[509.9,77,25.4,0],[511,72,24.6,0],[511.9,67,23.6,0],[512.7,62,23.2,0],[513.7,57,23.7,0],[514.4,52,24.4,0],[513.1,47,23.4,0],[509,42,20.6,0],[504,37.3,17.2,0],[499,34.7,13.7,0],[494,34,11.2,0],[489,34.3,9.2,0],[484,35.3,7,0],[479,36.3,6.1,0],[474,37.9,5.5,0],[469.6,39.4,4.2,0],[471,38.9,4.8,1],[476,37.1,5.9,1],[481,35.7,6.4,1],[486,34.7,7.9,1],[491,34,10.1,1],[496,34.1,12.1,1],[501,35.4,15,1],[506,39,18.7,1],[510.9,44,21.8,1],[514.1,49,24.2,1],[514.3,54,24.3,1],[513.4,59,23.5,1],[512.4,64,23.3,1],[511.6,69,24,1],[510.6,74,24.9,1],[509.1,79,25.6,1],[506.7,84,25.7,1],[504.1,89,25.6,1],[501.3,94,25.5,1],[498.6,99,25.6,1],[495.7,104,25.7,1],[492.9,109,25.9,1],[489.7,114,25.8,1],[486.6,119,25.7,1],[483.6,124,25.8,1],[480.1,129,25.8,1],[476.6,134,25.7,1],[473,139,25.5,1],[469.6,144,25.6,1],[466,149,25.6,1],[462.4,154,25.6,1],[458.9,159,25.5,1],[455.1,164,25.4,1],[451.4,169,25.4,1],[447.7,174,25.3,1],[443.7,179,25.1,1],[439.7,184,25.1,1],[435.7,189,25,1],[431.6,194,24.9,1],[427.4,199,24.9,1],[423.1,204,24.9,1],[418.9,209,24.8,1],[414.3,214,24.6,1],[410,219,24.7,1],[405.4,224,24.5,1],[401,229,24.7,1],[396.4,234,24.5,1],[392,239,24.8,1],[387.3,244,24.5,1],[383,249,24.8,1],[378,254,24.8,1],[373,259,24.8,1],[368,264,24.5,1],[363.7,269,24.6,1],[359,274,24.8,1],[354,279,24.7,1],[349,284,24.2,1],[344,289,24,1],[339,294,24,1],[334,298.7,23.9,1],[329,303,24,1],[324,307.7,23.9,1],[319,312,24,1],[314,316.4,23.7,1],[309,320.7,23.6,1],[304,324.9,23.4,1],[299,329.1,23.3,1],[294,333.3,23.2,1],[289,337.3,23.1,1],[284,341.1,22.9,1],[279,344.7,22.8,1],[274,348.3,22.8,1],[269,351.4,22.6,1],[264,353.1,21.6,1],[259,354.4,20.8,1],[254,355.6,20.8,1],[249,356.9,22,1],[244,358,23.8,1],[239,359.1,26.6,1],[234,360.3,30,1],[229,361.3,33.3,1],[224.1,360.6,33.7,1],[221.9,356,31.8,1],[222.3,351,31,1],[223,346,28.7,1],[223.6,341,26.4,1],[224.4,336,24.7,1],[225.3,331,23.7,1],[226.1,326,22.9,1],[226.9,321,22.4,1],[227.7,316,22.6,1],[228.7,311,22.9,1],[229.9,306,23.2,1],[231.6,301,23.2,1],[233.3,296,23.4,1],[235.7,291,23.1,1],[237.9,286,23,1],[240.3,281,22.8,1],[242.4,276,22.8,1],[244.9,271,22.6,1],[247.7,266,22.4,1],[250.1,261,22.1,1],[251.4,256,21.2,1],[252.4,251,19.7,1],[253.4,246,19,1],[254.4,241,19.6,1],[255.4,236,21.4,1],[256.4,231,24.1,1],[257.4,226,27.6,1],[256.9,221.7,30,1],[253,223.1,26.2,0],[248,228,19.1,0],[243,233,12,0],[238.3,238,5.2,0],[235.6,241.4,1.4,0],[236.4,240.6,2.3,1],[240,236,7.8,1],[245,231,14.9,1],[250,226,21.9,1],[254.6,221.4,28.5,1],[256.4,217.2,32.8,1],[253.9,215.3,32.7,1],[249,216.7,28.9,1],[244,218.3,25.4,1],[239,220,22.4,1],[234,221.7,20.4,1],[229,223.3,19.8,1],[224,225,20.4,1],[219,227,21.9,1],[214,231,22.9,1],[209.3,236,22.8,1],[205,241,23,1],[200,246,23.3,1],[195,251,23.3,1],[190.6,256,23.5,1],[186,261,24,1],[181,266,24,1],[176.4,271,23.9,1],[172,276,24,1],[167,281,24,1],[162,286,24,1],[157,290.3,24.2,1],[152,295,24.7,1],[147,300,24.8,1],[142,305,24.4,1],[137,309.7,24.1,1],[132,314,24.3,1],[127,319,24.1,1],[122,323.6,24,1],[117,327.9,23.9,1],[112,332,23.7,1],[107,336.1,23.7,1],[102,340.1,23.5,1],[97,343.9,23.4,1],[92,347.6,23.3,1],[87,350.9,23.2,1],[82,353,22.4,1],[77,354.1,21.4,1],[72,355.4,21.1,1],[67,356.6,21.7,1],[62,357.7,23.3,1],[57,358.7,25.8,1],[52,359.6,28.8,1],[47,358.9,31.1,1],[42.9,355.9,31.4,1],[41.3,351,29.7,1],[41.3,346,27.5,1],[42,341,25.1,1],[42.7,336,23.4,1],[43.6,331,22.4,1],[44.4,326,21.9,1],[45.3,321,22.1,1],[46.3,316,22.7,1],[47.4,311,23.5,1],[49.3,306,23.7,1],[51.7,301,23.7,1],[54,296,23.5,1],[56.4,291,23.5,1],[58.9,286,23.6,1],[61.9,281,23.6,1],[64.7,276,23.6,1],[67.6,271,23.6,1],[70.4,266,23.6,1],[73.6,261,23.6,1],[76.7,256,23.6,1],[80,251,23.7,1],[83.3,246,23.7,1],[86.7,241,23.7,1],[90.3,236,23.6,1],[93.6,231,23.5,1],[96.7,226,23.4,1],[100.3,221,23.4,1],[103.9,216,23.4,1],[107.6,211,23.4,1],[111.4,206,23.4,1],[115.1,201,23.2,1],[118.7,196,23,1],[122.4,191,23,1],[126.6,186,23,1],[130.6,181,22.8,1],[134.6,176,22.7,1],[138.6,171,22.5,1],[142.6,166,22.4,1],[146.3,161,22.2,1],[150.4,156,22,1],[154.3,151,21.9,1],[158.4,146,21.6,1],[162.7,141,21.4,1],[167,136,21.1,1],[171.1,131,20.8,1],[175,126,20.6,1],[179.1,121,20.5,1],[182.3,116,19.5,1],[183.6,111,17.7,1],[185,106,16.9,1],[186.4,101,17.5,1],[187.9,96,19.6,1],[189.3,91,22.7,1],[190.6,86,26.3,1],[190.6,81.9,28.9,1],[187.4,81.9,26.5,1],[183,86,20.5,0],[178,91,13.5,0],[173.1,96,6.5,0],[169.7,100,1.5,0],[169.6,100.6,1,0]],[[237.1,49,17.4,0],[233,49.7,20.1,0],[228,50.6,22.8,0],[223.1,52.7,25.6,0],[218.9,56.4,27.5,0],[214,60.6,28.7,0],[209,65,30.1,0],[204,69.6,31.6,0],[199,74,32.8,0],[194,78.3,32.5,0],[191.9,80.1,30.9,0]],[[426.9,388.7,5.6,0],[431,387.1,8.7,0],[436,384.7,12.4,0],[440,381,14.8,0],[443.1,376,15.9,0],[446.1,371,16.7,0],[449,366,17.3,0],[452.1,361,18.1,0],[455.1,356,18.9,0],[458.1,351,19.5,0],[461.3,346,20.4,0],[464.6,341,21.2,0],[467.7,336,22.1,0],[470.9,331,22.7,0],[474,326,23.6,0],[477.4,321,24.5,0],[480.6,316,25.1,0],[484,311,26.1,0],[487.1,306,26.9,0],[490.6,301,27.8,0],[493.9,296,28.5,0],[497.3,291,27,0],[500.7,286.1,21.6,0],[505,281,14.9,0],[510,276,7.8,0],[514,270.6,2,0],[516.4,268.6,1.7,0],[514.8,271.5,2.2,1],[510,276,7.8,1],[505,281,14.9,1],[502.3,285.7,20.3,0],[506,286.6,18.9,0],[511,285,15.6,0],[516,283,13.2,0],[521,281.3,12.9,0],[526,279.6,14.6,0],[531,276,16.1,0],[535.6,271,16.1,0],[540,266,16.2,0],[545,261,16.3,0],[549.3,256,16.2,0],[554,251,16.3,0],[559,246.1,16.1,0],[564,241.9,16.2,0],[569,237,16.2,0],[574,232.6,16.1,0],[579,228.3,15.8,0],[584,225,15.3,0],[589,223.3,13.5,0],[594,221.9,12.7,0],[599,220.4,13.9,0],[604,219.1,16.5,0],[608.9,218.4,19.6,0],[608.9,221.1,17.5,0],[604,226,10.6,0],[599.6,230.9,4.1,0],[597.4,233.6,1.2,0],[599,231.7,3.1,1],[603,227,9.2,1],[608,222,16.3,1],[609.4,218.6,19.9,1],[605,218.9,17.2,1],[600,220.1,14.3,1],[595,221.6,12.8,1],[590,223,13.2,1],[585,224.6,15,1],[580,227.4,15.7,1],[575,231.7,16,1],[570,236,16.1,1],[565,241,16.3,1],[560,245.3,16.1,1],[555,250,16.3,1],[550.1,255,16.2,1],[545.9,260,16.2,1],[541,265,16.3,1],[536.4,270,16.1,1],[532,275,16.2,1],[527,279,15,1],[522,281,13.2,1],[517,282.7,13,1],[512,284.6,15,1],[507,286.3,18.2,1],[502.3,286.4,20.8,1],[498.9,283,20.8,0],[498.3,278,18.6,0],[499.3,273,16.1,0],[500.3,268,15,0],[501.3,263,15.5,0],[502.3,258,16.8,0],[503.6,253,17.5,0],[505.7,248,17.2,0],[508.6,243,17.4,0],[511.4,238,17.6,0],[513.7,233,17.2,0],[516.7,228,17.5,0],[519.4,223,17.6,0],[522,218,17.5,0],[524.7,213,17.6,0],[527.6,208,17.8,0],[530.3,203,17.8,0],[533,198,17.8,0],[535.7,193,17.8,0],[538.6,188,17.9,0],[541.6,183,18,0],[544.4,178,18.1,0],[547.3,173,18.2,0],[550,168,18.2,0],[552.7,163,18.2,0],[555.6,158,18.3,0],[558.4,153,18.3,0],[561.4,148,18.5,0],[564.4,143,18.6,0],[567.3,138,18.7,0],[570.1,133,18.8,0],[573,128,18.8,0],[575.9,123,18.8,0],[579,118,19.1,0],[582,113,19.2,0],[584.9,108,19.3,0],[588,103,19.5,0],[591,98,19.5,0],[594,93,19.6,0],[597,88,19.7,0],[600,83,19.8,0],[603,78,19.8,0],[606,73,19.8,0],[609.1,68,19.8,0],[612.3,63,19.8,0],[615.7,58,19.9,0],[619,53,19.9,0],[622.3,48,19.8,0],[625.7,43,19.8,0],[629.6,38,19.4,0],[633.4,33,18.3,0],[638,28.3,15.8,0],[643,24.4,13,0],[645.1,22.7,11.7,0]],[[893.9,155.6,10.5,0],[898,154.7,12.3,0],[903,153.3,14.6,0],[908,151.4,16.2,0],[913,149.3,17.8,0],[918,147.7,19,0],[923,146.1,20,0],[928,144.7,20.9,0],[933,143.7,21.2,0],[938,143,21.3,0],[943,143,21,0],[948,143,21.1,0],[953,142.4,21.2,0],[958,142,21.6,0],[963,142,22,0],[967.7,142.4,22.4,0],[972,142,22,0],[977,140.1,20.2,0],[982,140,21,0],[987,140,22,0],[992,139.9,21.4,0],[997,138.4,22.4,0],[1001.6,137,23.2,0],[1006,137.9,22.1,0],[1011,138,21.4,0],[1016,137.6,20.6,0],[1021,137,19.3,0],[1026,137,19,0],[1031,137,19,0],[1036,136.7,18.8,0],[1041,136.1,18.7,0],[1046,136.9,19,0],[1051,137.7,17.9,0],[1056,138.9,16.1,0],[1061,139.9,14.1,0],[1065.4,140.6,11.8,0],[1064,140.3,12.6,1],[1059,139.6,14.9,1],[1054,138.4,16.8,1],[1049,137.4,18.5,1],[1044,136.6,19,1],[1039,136.3,18.6,1],[1034,137,19,1],[1029,137,19,1],[1024,137,19.1,1],[1019,137.1,19.8,1],[1014,137.9,21,1],[1009,138,21.7,1],[1004.1,137.3,22.7,1],[999.9,137.1,23.3,1],[995,139.1,21.9,1],[990,140,21.7,1],[985,140,21.8,1],[980,140,20.5,1],[975,140.7,20.7,1],[970.4,142.9,22.9,1],[968.6,146,25.3,0],[967.4,151,24.3,0],[966.4,156,21.1,0],[965.1,161,18.5,0],[964,166,17.2,0],[962.9,171,17.5,0],[961.6,176,18.6,0],[959.3,181,19.2,0],[956.1,186,19.4,0],[953.1,191,19.4,0],[950.1,196,19.6,0],[947.1,201,19.6,0],[944.3,206,19.6,0],[941.4,211,19.6,0],[938.4,216,19.7,0],[935.4,221,19.7,0],[932.6,226,19.8,0],[929.7,231,19.9,0],[927,236,19.9,0],[924.1,241,20,0],[921.1,246,20,0],[918.3,251,20,0],[915.6,256,20.1,0],[912.7,261,20.1,0],[909.9,266,19.9,0],[907.3,271,20.2,0],[904.4,276,20.1,0],[901.7,281,19.9,0],[899.3,286,19.9,0],[896.9,291,19.9,0],[894.7,296,20.1,0],[892.3,301,20.1,0],[890,306,20,0],[888,311,20,0],[885.9,316,20.1,0],[884.1,321,20,0],[882.4,326,19.9,0],[881.4,331,19.5,0],[880.7,336,19.2,0],[879.4,341,19.7,0],[878,346,21,0],[877.3,350.6,21.7,0],[878.7,355,20.4,0],[879.6,360,20.4,0],[880.9,365,21.2,0],[882.7,370,22,0],[887,374.3,21.6,0],[892,376.4,20.5,0],[897,377.4,19.3,0],[902,378,18.4,0],[907,377.6,17.6,0],[912,376.7,16.8,0],[917,375.7,16.5,0],[922,374.6,16.7,0],[927,373,16.8,0],[932,370.7,16.8,0],[937,368,16.8,0],[942,364.7,16.6,0],[947,361.1,16.4,0],[952,358.3,15.9,0],[957,356.7,14.7,0],[962,355.4,14.7,0],[967,354,16.6,0],[971.7,352.3,19.7,0],[976,352.5,20.9,0],[979.9,355.1,19.6,0],[981,360,19.8,0],[982.4,365,20.1,0],[986.1,369.9,21.9,0],[991,373.7,22.1,0],[996,375.6,21.2,0],[1001,376.4,19.8,0],[1006,377,19.2,0],[1011,377.7,19.7,0],[1016,378,20,0],[1021,377.4,19.5,0],[1026,377,19.6,0],[1031,376.3,19.3,0],[1036,375.7,19.2,0],[1041,374.4,18.8,0],[1046,373.7,18.9,0],[1051,372.3,18.6,0],[1056,371.1,18.9,0],[1061,369.4,18.5,0],[1066,367.7,18.4,0],[1071,366,18.6,0],[1076,363.7,18.5,0],[1081,361.4,18.7,0],[1086,358.7,18.7,0],[1091,355.4,18.9,0],[1095.9,351.4,19.1,0],[1099.4,347,19,0],[1101.3,342,18.2,0],[1102.7,337,18.1,0],[1104.1,332,19.2,0],[1104.7,327,20.2,0],[1103.3,322,20.4,0],[1101.6,317,21.3,0],[1098,312.4,21.3,0],[1093,309.4,20.8,0],[1088,307.4,20.4,0],[1083,305.6,20.1,0],[1078,304.1,20.2,0],[1073,302.7,20.1,0],[1068,301.4,20.2,0],[1063,300.1,20.1,0],[1058,298.7,20,0],[1053,297.4,20,0],[1048,296.3,19.9,0],[1043,295.1,19.9,0],[1038,293.9,19.6,0],[1033,292.6,19.4,0],[1028,291,19,0],[1023,289.6,19,0],[1018,288.1,19.8,0],[1013,285.9,20.4,0],[1008.6,282,20.8,0],[1006.6,277,19.7,0],[1005.7,272,18.8,0],[1006.4,267,17.6,0],[1007.6,262,17.3,0],[1008.9,257,18.1,0],[1010.9,252,18.7,0],[1015,247,19,0],[1020,242,19.1,0],[1025,237.4,19.1,0],[1030,233.6,19.1,0],[1035,230,19,0],[1040,226.7,18.7,0],[1045,223.7,18.6,0],[1050,220.9,18.5,0],[1055,218.3,18.6,0],[1060,215.7,18.5,0],[1065,213.4,18.6,0],[1070,211.3,18.5,0],[1075,209,18.5,0],[1080,207.3,18.5,0],[1085,205.7,18.4,0],[1090,204.1,18.4,0],[1095,203,18.3,0],[1100,201.7,18.6,0],[1105,200.9,18.5,0],[1110,200.1,18.5,0],[1115,199.4,18.6,0],[1120,199,19.3,0],[1125,198.3,21.2,0],[1130,198,22.2,0],[1135,197.7,22.5,0],[1138.6,201,25.3,0],[1138.6,206,24.7,0],[1136.3,211,20.6,0],[1134.1,216,17.4,0],[1131.6,221,15,0],[1128.4,226,13.5,0],[1124,228.9,10.9,0],[1119,229.3,7.4,0],[1117.6,229.6,6.2,1],[1122,229,9.6,1],[1126.9,227.6,12.6,1],[1130.4,223,14.5,1],[1133.3,218,16.4,1],[1135.4,213,19.2,1],[1137.7,208,23,1],[1139,203,25.8,1],[1136.7,198.4,23.3,1],[1132,197.7,22.2,1],[1127,198,21.8,1],[1122,198.7,20,1],[1117,199.1,18.9,1],[1112,199.9,18.5,1],[1107,200.6,18.5,1],[1102,201.3,18.6,1],[1097,202.6,18.3,1],[1092,203.6,18.4,1],[1087,205,18.4,1],[1082,206.7,18.4,1],[1077,208.3,18.5,1],[1072,210.3,18.5,1],[1067,212.6,18.6,1],[1062,214.7,18.5,1],[1057,217.3,18.6,1],[1052,219.7,18.5,1],[1047,222.6,18.6,1],[1042,225.4,18.7,1],[1037,228.7,18.9,1],[1032,232.1,19.1,1],[1027,235.9,19.1,1],[1022,240,19.1,1],[1017,245,19.1,1],[1012.3,250,18.8,1],[1009.6,255,18.4,1],[1008.1,260,17.4,1],[1006.9,265,17.4,1],[1005.7,270,18.5,1],[1006,275,19.4,1],[1007.6,280,20.4,1],[1011,284.6,20.7,1],[1016,287.4,20.1,1],[1021,289.1,19.4,1],[1026,290.4,18.9,1],[1031,292,19.3,1],[1036,293.4,19.7,1],[1041,294.6,19.8,1],[1046,295.7,19.8,1],[1051,296.9,19.9,1],[1056,298.1,20,1],[1061,299.6,20.2,1],[1066,300.9,20.2,1],[1071,302.1,20.1,1],[1076,303.6,20.2,1],[1081,304.9,20.2,1],[1086,306.6,20.3,1],[1091,308.6,20.6,1],[1096,311,21,1],[1100.4,315,21.4,1],[1102.7,320,20.8,1],[1104.3,325,20.3,1],[1104.6,330,19.7,1],[1103.3,335,18.4,1],[1101.9,340,18,1],[1100.3,345,18.7,1],[1097.6,349.7,19.2,1],[1093,353.7,18.9,1],[1088,357.4,18.6,1],[1083,360.4,18.7,1],[1078,362.9,18.6,1],[1073,365.1,18.6,1],[1068,367,18.5,1],[1063,368.7,18.4,1],[1058,370.4,18.6,1],[1053,371.7,18.6,1],[1048,373.1,18.7,1],[1043,374.1,18.8,1],[1038,375.3,19.1,1],[1033,376,19.1,1],[1028,376.7,19.6,1],[1023,377.1,19.3,1],[1018,377.9,19.9,1],[1013,378,20,1],[1008,377.3,19.3,1],[1003,376.7,19.5,1],[998,375.9,20.5,1],[993,374.7,21.8,1],[988,371.6,22.3,1],[983.7,367,20.9,1],[981.3,362,19.9,1],[980.6,357,19.7,1],[977.9,353.3,20.5,1],[973.4,352.1,20.6,1],[969,353.3,17.8,1],[964,354.9,15.3,1],[959,356.1,14.6,1],[954,357.6,15.4,1],[949,359.7,16.4,1],[944,363.3,16.6,1],[939,366.7,16.8,1],[934,369.7,16.8,1],[929,372.1,16.8,1],[924,374,16.8,1],[919,375.4,16.7,1],[914,376.4,16.7,1],[909,377.3,17.3,1],[904,378,18.1,1],[899,377.7,18.8,1],[894,376.7,19.9,1],[889,375.3,21.1,1],[884.1,371.9,22,1],[881.4,367,21.6,1],[880.1,362,20.6,1],[879.1,357,20.2,1],[877.7,352.4,21.3,1],[874,351.4,23.9,0],[869,353,22,0],[864,354.7,18.4,0],[859,356.3,15.9,0],[854,358,14.7,0],[849,359.4,15.5,0],[844,361.7,16.5,0],[839,365.7,16.7,0],[834,369,16.7,0],[829,371.7,16.7,0],[824,373.6,16.2,0],[819,374.9,15.7,0],[814,376,16.1,0],[809,377,17,0],[804,377.7,18.3,0],[799,377,19.3,0],[794,375.7,20.9,0],[789.6,372,21.2,0],[787.3,367,20.4,0],[786.1,362,19.3,0],[785.1,357,19.1,0],[785,352,19,0],[785,347,19,0],[785,342,18.5,0],[785,337,18.1,0],[785,332,19.1,0],[785,327,21.1,0],[783.7,322.4,22.8,0],[782.3,318.1,25.1,0],[782,313.9,27.5,0],[784.4,309,27.4,0],[786.9,304,26.7,0],[789.4,299,26,0],[792.1,294,25.4,0],[794.7,289,24.9,0],[797.6,284,24.3,0],[800.4,279,23.8,0],[803.1,274,23.4,0],[806.1,269,22.7,0],[809.1,264,22.2,0],[812,259,21.9,0],[815,254,21.4,0],[818,249,21,0],[820.9,244,20.5,0],[822.3,239,19.2,0],[823.4,234,18.2,0],[823.6,229.4,17.6,0],[820,225,14.1,0],[815,220.9,10.8,0],[810,219.4,10.5,0],[805,217.7,11.3,0],[800,216.1,12.9,0],[795,214.9,14.6,0],[790,214,16.2,0],[785,213.7,16.6,0],[780,214.6,17.2,0],[775,215.9,17.6,0],[770,217.3,18,0],[765,219.1,18.4,0],[760,221.1,18.7,0],[755,223.6,19,0],[750,226.3,19.3,0],[745,229,19.5,0],[740,232.3,19.6,0],[735,235.7,19.9,0],[730,239.3,20,0],[725,242.9,20.1,0],[720,247,20.4,0],[715,251.6,20.6,0],[710,256,20.8,0],[705,261,21.2,0],[700.7,266,21.1,0],[696,271,21.4,0],[691.3,276,21.6,0],[687.3,281,21.9,0],[683.6,286,21.9,0],[680.1,291,22,0],[677,296,22.1,0],[673.7,301,22.1,0],[670.7,306,22,0],[668.3,311,21.9,0],[665.7,316,21.8,0],[663.3,321,21.4,0],[661.3,326,21.1,0],[659.7,331,20.8,0],[658.9,336,20.3,0],[658.1,341,19.8,0],[657.7,346,19.4,0],[656.9,351,20.2,0],[656.3,355.7,21.5,0],[658.3,360,20.7,0],[660.4,365,20.8,0],[663.3,369.9,21.6,0],[668,372.6,20.5,0],[673,373.9,19.3,0],[678,374.7,18.9,0],[683,374.1,18.3,0],[688,373.1,18.2,0],[693,372,18.9,0],[698,370.4,19.8,0],[703,368,20.2,0],[708,364.4,20.3,0],[713,360.7,20.4,0],[718,356.7,20.5,0],[723,352.7,20.5,0],[728,348.4,20.4,0],[733,344,20.3,0],[738,339.7,20.3,0],[743,335,20,0],[748,330,19.6,0],[753,325.7,18.7,0],[758,323.7,17,0],[763,322.3,16.3,0],[768,320.7,17.4,0],[773,319,20,0],[778,317.3,23.5,0],[781.9,317.6,25.3,1],[782.6,321.3,22.9,1],[779,325,17.7,0],[774,330,10.6,0],[769.6,334.9,4.1,0],[767.4,337.6,1.2,0],[767.6,337.6,1.2,0]],[[983.4,318.9,6.2,0],[982,323,8.4,0],[980.7,328,10.3,0],[979.3,333,11.7,0],[977.6,338,14.1,0],[975.7,343,17.8,0],[974,348.1,21.2,0],[973.3,350.4,21.3,0]],[[1039.1,76.3,7.3,0],[1035,77.9,9.6,0],[1030,79.9,12.5,0],[1025.3,83.1,15.3,0],[1021.7,88,17.8,0],[1018,93,18.3,0],[1014.1,98,18.7,0],[1011,103,18.7,0],[1009.4,108,17.6,0],[1008.1,113,16.8,0],[1006.7,118,17.4,0],[1005.4,123,19.3,0],[1004.1,128,22.3,0],[1002.9,133,24.9,0],[1002.3,135.1,24.7,0]],[[1268,533.1,9.9,0],[1267.6,529,12.6,0],[1267,524,15.5,0],[1267.1,519,16.7,0],[1269.1,514,18,0],[1272,509,18.8,0],[1275,504,19,0],[1278.3,499,19,0],[1281.3,494,19.1,0],[1284.6,489,19.2,0],[1287.7,484,19.2,0],[1290.7,479,19.2,0],[1293.9,474,19.4,0],[1297,469,19.5,0],[1300,464,19.4,0],[1303,459,19.5,0],[1306.1,454,19.4,0],[1309.3,449,19.4,0],[1312.4,444,19.5,0],[1315.6,439,19.6,0],[1318.7,434,19.6,0],[1321.9,429,19.7,0],[1325,424,19.8,0],[1328,419,19.8,0],[1330.9,414,19.7,0],[1332.6,409,18.6,0],[1333.9,404,17.7,0],[1335.1,399,18.3,0],[1336.4,394,20.1,0],[1337.6,389,22.9,0],[1338.6,384.1,26.1,0],[1341.1,381,27.4,0],[1345.6,377.9,26.7,0],[1350,373.9,25.7,0],[1354.6,369,24.5,0],[1358.6,364.7,23.5,0],[1363,360,22.5,0],[1368,356,21.4,0],[1373,354,20.2,0],[1377.6,353.4,19.1,0],[1382,357,15.1,0],[1387,361.3,12,0],[1391.4,364.3,12.4,0],[1395.1,368.7,13.7,0],[1400,372.1,16.6,0],[1405,374.3,17.4,0],[1410,375.9,18.1,0],[1415,376.7,18.7,0],[1420,376.1,18.5,0],[1425,375.3,18.6,0],[1430,374.4,19.1,0],[1435,373.1,19.5,0],[1440,371.3,19.7,0],[1445,368.7,19.7,0],[1450,366.1,19.8,0],[1455,363.1,19.8,0],[1460,360,19.9,0],[1465,356.4,19.8,0],[1470,352.6,19.8,0],[1475,348.6,19.6,0],[1480,344,19.8,0],[1485,339,19.5,0],[1490,334,19.1,0],[1494.9,329,19,0],[1499.1,324,18.9,0],[1503.6,319,18.9,0],[1507.7,314,18.7,0],[1511.7,309,18.6,0],[1515.6,304,18.5,0],[1519,299,18.5,0],[1522.3,294,18.5,0],[1525.7,289,18.5,0],[1528.9,284,18.4,0],[1531.7,279,18.5,0],[1534.3,274,18.6,0],[1536.7,269,18.5,0],[1539.1,264,18.6,0],[1540.7,259,18.2,0],[1542,254,17.8,0],[1543,249,17.7,0],[1543.9,244,17.9,0],[1544.7,239,18.7,0],[1545.6,234,19.9,0],[1546.4,229,22,0],[1546.6,224,24.3,0],[1544.9,219,24.4,0],[1541,216.3,22.2,0],[1536,216.9,21,0],[1531,217.7,18.4,0],[1526,218.7,16.4,0],[1521,219.7,15.3,0],[1516,220.9,14.6,0],[1511,222,15,0],[1506,223.7,15.4,0],[1501,226.4,15.3,0],[1496,229.7,15.4,0],[1491,233.1,15.5,0],[1486,236.9,15.6,0],[1481,240.7,15.6,0],[1476,244.9,15.7,0],[1471,249.1,15.9,0],[1466,253.6,15.7,0],[1461,257.6,15.8,0],[1456,260,14.3,0],[1451,261.7,13.5,0],[1446,263.1,14.3,0],[1441,264.7,16.9,0],[1436,266.3,20.5,0],[1431.9,267.9,24.2,0],[1428.4,272,27.3,0],[1424.3,277,27,0],[1420.3,282,26.3,0],[1416.6,287,25.8,0],[1412.9,292,25.3,0],[1409,297,24.6,0],[1405.3,302,24.1,0],[1401.6,307,23.6,0],[1397.7,312,22.9,0],[1394.1,317,22.5,0],[1390.4,322,22,0],[1387,327,21.7,0],[1383.6,332,21.4,0],[1381.3,337,20.5,0],[1380.1,342,19.1,0],[1378.9,347,18.7,0],[1377.9,351.6,19.1,0],[1375,353.4,19.9,1],[1370,355,20.9,1],[1365,358.1,22.1,1],[1360.3,363,23.1,1],[1356.3,367.3,24,1],[1352,372,25.3,1],[1347.3,376.4,26.4,1],[1343,380,27.3,1],[1338.6,381,26.2,0],[1334,379.1,22.5,0],[1329,379,20.6,0],[1324,379,19.3,0],[1319,379,19,0],[1314,378.6,18.7,0],[1309,377.6,18.7,0],[1304,376.6,19.8,0],[1299,374.6,21,0],[1295.1,370,21,0],[1293.1,365,20.5,0],[1292,360,19.7,0],[1291.1,355,19.5,0],[1291,350,19,0],[1291,345,18.3,0],[1291,340,17.2,0],[1291,335,17.4,0],[1291,330,18.9,0],[1291.1,325,21.4,0],[1290.1,320.7,23.7,0],[1288.9,316.4,26.2,0],[1289.7,312,27.6,0],[1292.3,307,26.9,0],[1294.7,302,26.3,0],[1297.1,297,25.9,0],[1299.9,292,25.3,0],[1302.6,287,24.6,0],[1305.4,282,24.2,0],[1308.1,277,23.7,0],[1311.1,272,23.1,0],[1314,267,22.8,0],[1317,262,22.3,0],[1320.1,257,21.8,0],[1323.1,252,21.3,0],[1326.3,247,20.8,0],[1328.6,242,20,0],[1329.6,237,18.5,0],[1330.7,232,18.1,0],[1330.3,228.3,17.3,0],[1326,224,13.1,0],[1321,220.4,10.5,0],[1316,219.1,10.5,0],[1311,217.3,11.7,0],[1306,215.9,13.2,0],[1301,214.7,14.9,0],[1296,213.9,16.2,0],[1291,213.7,16.7,0],[1286,214.7,17.2,0],[1281,216.1,17.8,0],[1276,217.7,18.3,0],[1271,219.6,18.5,0],[1266,221.6,18.7,0],[1261,223.9,18.9,0],[1256,226.7,19.3,0],[1251,229.4,19.4,0],[1246,232.7,19.6,0],[1241,236.1,19.8,0],[1236,239.7,20,0],[1231,243.4,20.2,0],[1226,247.7,20.5,0],[1221,252,20.5,0],[1216,257,21.1,0],[1211,262,21.2,0],[1206.6,267,21.1,0],[1202,272,21.4,0],[1197.1,277,21.7,0],[1193.1,282,21.8,0],[1189.6,287,21.9,0],[1186.1,292,22.1,0],[1183,297,22.1,0],[1179.9,302,22,0],[1176.9,307,21.9,0],[1174.3,312,21.9,0],[1171.7,317,21.6,0],[1169.6,322,21.4,0],[1167.7,327,21.1,0],[1166.3,332,20.7,0],[1165.6,337,20.1,0],[1165,342,19.5,0],[1164.4,347,19.6,0],[1164.6,352,19.5,0],[1165.4,357,19.3,0],[1166.4,362,20.2,0],[1168,367,21.4,0],[1172,371.3,21.5,0],[1177,373.3,20.1,0],[1182,374.4,19.2,0],[1187,374.6,18.6,0],[1192,373.6,17.9,0],[1197,372.6,18.5,0],[1202,371.3,19.5,0],[1207,369.3,20,0],[1212,366.3,20.3,0],[1217,362.9,20.4,0],[1222,359,20.5,0],[1227,355,20.5,0],[1232,350.9,20.5,0],[1237,346.4,20.3,0],[1242,342,20.3,0],[1247,337.7,19.9,0],[1252,333,19.7,0],[1256.6,328.1,19.3,0],[1261,325,18.3,0],[1266,323.3,16.9,0],[1271,321.7,16.7,0],[1276,320.3,17.9,0],[1281,318.6,20.7,0],[1285.9,316.7,24.4,0],[1289.3,318.1,25.1,1],[1289.1,322,22,0],[1285,326,16.3,0],[1280,331,9.2,0],[1275.9,335.6,3.1,0],[1274.4,337.6,1.2,0],[1276.6,334.9,4.1,1],[1281,330,10.6,1],[1286,325,17.7,1],[1290.3,323,22.1,1],[1291.3,327,20.4,1],[1291,332,18.1,1],[1291,337,17.1,1],[1291,342,17.6,1],[1291,347,18.7,1],[1291,352,19.2,1],[1291.4,357,19.6,1],[1292.4,362,20,1],[1293.9,367,20.7,1],[1296.4,372,21.1,1],[1301,375.7,20.6,1],[1306,377,19.3,1],[1311,378,18.6,1],[1316,378.9,18.9,1],[1321,379,19.1,1],[1326,379,19.7,1],[1331,379,21.3,1],[1336,379.9,24,1],[1340.3,381.3,27.2,1],[1344.7,378.6,26.9,1],[1349,374.7,25.9,1],[1353.7,370,24.7,1],[1357.7,365.6,23.7,1],[1362,361,22.8,1],[1367,356.6,21.7,1],[1372,354.3,20.4,1],[1376.6,353,19.5,1],[1378.3,350,18.8,1],[1379.4,345,18.7,1],[1380.6,340,19.7,1],[1381.9,335,21,1],[1384.9,330,21.5,1],[1388.3,325,21.7,1],[1392,320,22.2,1],[1395.6,315,22.7,1],[1399.4,310,23.3,1],[1403.1,305,23.8,1],[1406.7,300,24.2,1],[1410.6,295,24.9,1],[1414.4,290,25.6,1],[1418,285,26,1],[1421.7,280,26.4,1],[1425.9,275,27.3,1],[1429.9,270,26.3,1],[1431.9,265.9,22.7,0],[1431.3,261.9,20.4,0],[1431.7,257,17.3,0],[1432.9,252,14.6,0],[1434.1,247,13.2,0],[1435.4,242,13.6,0],[1436.7,237,15.2,0],[1439.1,232,15.6,0],[1442.3,227,15.7,0],[1445.6,222,15.7,0],[1448.7,217,15.7,0],[1451.9,212,15.7,0],[1455,207,15.8,0],[1458.3,202,15.9,0],[1461.7,197,16,0],[1465,192,16,0],[1468.1,187,15.9,0],[1471.3,182,15.9,0],[1474.7,177,16,0],[1478,172,16,0],[1481.3,167,16,0],[1484.7,162,16.1,0],[1488,157,16.1,0],[1491.1,152,15.9,0],[1494.4,147,15.8,0],[1498.1,142,15.8,0],[1502,137,13.7,0],[1503.1,135.6,12.6,1],[1499.6,140,15.3,1],[1495.9,145,15.8,1],[1492.4,150,15.8,1],[1489.3,155,16,1],[1486,160,16.2,1],[1482.7,165,16,1],[1479.3,170,16,1],[1476,175,16,1],[1472.7,180,16,1],[1469.4,185,15.9,1],[1466.3,190,15.9,1],[1463,195,16,1],[1459.7,200,16,1],[1456.3,205,15.8,1],[1453,210,15.7,1],[1450,215,15.7,1],[1446.9,220,15.7,1],[1443.7,225,15.7,1],[1440.4,230,15.6,1],[1437.6,235,15.5,1],[1435.9,240,14.3,1],[1434.6,245,13.2,1],[1433.4,250,13.7,1],[1432.3,255,16,1],[1431.3,260,19.2,1],[1432.6,262.7,19.9,0],[1437,259,14.1,0],[1442,254,7.1,0],[1446,249.9,1.6,0],[1446.6,249.6,1,0]],[[1468,531.1,11.2,0],[1467.4,527,13.8,0],[1467,522,15.9,0],[1467.9,517,17,0],[1470.4,512,18.4,0],[1473.4,507,19,0],[1476.7,502,19.1,0],[1479.9,497,19.2,0],[1483,492,19.2,0],[1486,487,19.2,0],[1489,482,19.2,0],[1492.1,477,19.4,0],[1495.3,472,19.4,0],[1498.4,467,19.4,0],[1501.4,462,19.4,0],[1504.6,457,19.5,0],[1507.7,452,19.5,0],[1510.9,447,19.6,0],[1514,442,19.6,0],[1517,437,19.6,0],[1520.3,432,19.6,0],[1523.4,427,19.6,0],[1526.4,422,19.7,0],[1529.6,417,19.8,0],[1532.6,412,19.8,0],[1535.6,407,19.8,0],[1538.7,402,19.9,0],[1542,397,20,0],[1545,392,19.9,0],[1548.3,387,20,0],[1551.4,382,20,0],[1554.7,377,20.2,0],[1557.9,372,20.2,0],[1561,367,20.3,0],[1564,362,20.3,0],[1568,357.9,20.4,0],[1573,355.6,19.7,0],[1577.6,354.6,19,0],[1582,358,15.1,0],[1587,362,12.3,0],[1592,365.1,13,0],[1597,369.9,15.3,0],[1602,373.1,17,0],[1607,375,17.7,0],[1612,376.4,18.5,0],[1617,376.7,18.7,0],[1622,375.9,18.4,0],[1627,375.1,18.9,0],[1632,374.1,19.2,0],[1637,372.6,19.7,0],[1642,370.4,19.7,0],[1647,367.9,19.7,0],[1652,365,19.8,0],[1657,362,19.9,0],[1662,358.6,19.8,0],[1667,355,19.7,0],[1672,351.3,19.7,0],[1677,347,19.7,0],[1682,342,19.5,0],[1687,337,19.1,0],[1692,332,19.1,0],[1697,327,19.1,0],[1701.3,322,18.9,0],[1705.6,317,18.8,0],[1709.7,312,18.6,0],[1713.6,307,18.6,0],[1717.3,302,18.5,0],[1720.7,297,18.5,0],[1724,292,18.5,0],[1727.1,287,18.4,0],[1730.3,282,18.4,0],[1733.3,277,18.6,0],[1735.6,272,18.4,0],[1738,267,18.4,0],[1740.1,262,18.5,0],[1741.4,257,17.9,0],[1742.4,252,17.5,0],[1743.4,247,17.7,0],[1744.4,242,18.4,0],[1745.3,237,19.3,0],[1746.1,232,20.6,0],[1746.9,227,22.8,0],[1746,222,24.5,0],[1743.6,217.4,23.5,0],[1739,216.4,21.8,0],[1734,217.4,19.8,0],[1729,218.3,17.3,0],[1724,219.4,15.6,0],[1719,220.4,14.6,0],[1714,221.4,14.5,0],[1709,222.7,15.1,0],[1704,224.9,15.4,0],[1699,227.9,15.3,0],[1694,231.1,15.4,0],[1689,234.9,15.5,0],[1684,238.6,15.6,0],[1679,242.6,15.7,0],[1674,246.7,15.7,0],[1669,251,15.9,0],[1664,255.4,15.8,0],[1659,258.3,15,0],[1654,260,13.6,0],[1649,261.7,13.9,0],[1644,263.3,15.9,0],[1639,265,19.3,0],[1634.3,266.7,23.2,0],[1630.4,270,27.1,0],[1626.6,275,27.7,0],[1622.4,280,26.8,0],[1618.4,285,26.1,0],[1614.4,290,25.4,0],[1610.7,295,24.9,0],[1606.9,300,24.1,0],[1603.3,305,23.8,0],[1599.4,310,23.1,0],[1595.7,315,22.6,0],[1592.3,320,22.3,0],[1588.7,325,21.9,0],[1585.1,330,21.5,0],[1582.1,335,21.3,0],[1580.6,340,20.2,0],[1579.4,345,19.3,0],[1578.4,350,19.6,0],[1578,352.7,19.9,1],[1578.6,349,19.5,1],[1579.6,344,19.5,1],[1580.9,339,20.4,1],[1582.6,334,21.3,1],[1585.9,329,21.6,1],[1589.4,324,22,1],[1593,319,22.4,1],[1596.4,314,22.7,1],[1600.3,309,23.3,1],[1604,304,23.8,1],[1607.6,299,24.2,1],[1611.6,294,25.1,1],[1615.3,289,25.6,1],[1619.3,284,26.3,1],[1623.3,279,27,1],[1627.4,274,27.9,1],[1631.1,269.1,26.5,1],[1633,265,22.7,0],[1632.3,260.9,20.4,0],[1632.6,256,17.5,0],[1633.9,251,14.6,0],[1635.1,246,13.2,0],[1636.4,241,13.6,0],[1637.7,236,15.2,0],[1640,231,15.6,0],[1643.1,226,15.6,0],[1646.3,221,15.7,0],[1649.6,216,15.7,0],[1652.7,211,15.8,0],[1656,206,15.9,0],[1659.3,201,16,0],[1662.6,196,15.9,0],[1665.7,191,15.9,0],[1669,186,16,0],[1672.3,181,16,0],[1675.7,176,16,0],[1679,171,16,0],[1682.3,166,16.1,0],[1685.6,161,16,0],[1688.7,156,16,0],[1692,151,15.8,0],[1695.4,146,15.8,0],[1699.3,141,15.7,0],[1703,136.1,13.1,0],[1703,136.1,13.1,1],[1699.3,141,15.7,1],[1695.4,146,15.8,1],[1692,151,15.8,1],[1688.7,156,16,1],[1685.6,161,16,1],[1682.3,166,16.1,1],[1679,171,16,1],[1675.7,176,16,1],[1672.3,181,16,1],[1669,186,16,1],[1665.7,191,15.9,1],[1662.6,196,15.9,1],[1659.3,201,16,1],[1656,206,15.9,1],[1652.7,211,15.8,1],[1649.6,216,15.7,1],[1646.3,221,15.7,1],[1643.1,226,15.6,1],[1640,231,15.6,1],[1637.7,236,15.2,1],[1636.4,241,13.6,1],[1635.1,246,13.2,1],[1633.9,251,14.6,1],[1632.6,256,17.5,1],[1632.3,260.9,20.4,1],[1635.1,260.9,18.2,0],[1640,256,11.3,0],[1644.9,251.1,4.4,0],[1647.6,248.4,.9,0],[1647.6,248.6,1,0]]]},Email:{W:1162,H:409,d:"M109.75 142.75Q109.75 159.0 166.5 159.0Q180.5 159.0 187.25 156.0Q205.0 147.5 230.875 147.5Q256.75 147.5 256.75 160.75Q256.75 166.0 252.375 176.125Q248.0 186.25 245.875 188.5Q243.75 190.75 229.75 194.625Q215.75 198.5 211.625 198.875Q207.5 199.25 206.125 199.5Q204.75 199.75 202.875 200.0Q201.0 200.25 194.5 201.375Q188.0 202.5 185.0 201.25Q102.25 242.0 71.25 290.75Q57.25 312.75 57.25 328.5Q57.25 353.25 91.5 353.25Q118.25 353.25 159.5 332.25Q200.75 311.25 232.625 281.375Q264.5 251.5 264.5 229.5Q264.5 222.5 275.0 222.5Q299.25 222.5 299.25 251.25Q299.25 264.75 287.5 283.375Q275.75 302.0 254.75 321.125Q233.75 340.25 208.0 356.75Q182.25 373.25 150.875 383.75Q119.5 394.25 97.75 394.25Q76.0 394.25 62.625 390.125Q49.25 386.0 37.5 377.75Q12.0 360.0 12.0 324.0Q12.0 304.5 22.5 284.375Q33.0 264.25 50.0 247.75Q81.25 216.75 117.0 196.25Q65.5 184.5 65.5 143.25Q65.5 96.75 137.0 58.25Q176.75 37.0 223.25 27.75Q245.25 23.25 260.0 23.25Q290.0 23.25 305.25 28.0Q314.5 32.5 320.25 40.625Q326.0 48.75 326.0 54.625Q326.0 60.5 324.5 65.25Q323.0 70.0 319.5 72.75Q314.5 76.5 308.25 78.5Q302.0 80.5 301.0 81.0Q281.5 89.25 267.5 89.25Q242.5 89.25 240.25 82.75Q240.75 76.25 245.75 67.75Q222.0 68.75 196.5 77.375Q171.0 86.0 152.375 97.625Q133.75 109.25 121.75 121.75Q109.75 134.25 109.75 142.75ZM289.0 388.75 276.75 388.25H272.25Q269.75 387.5 266.875 385.25Q264.0 383.0 262.5 382.0Q261.0 381.0 261.0 378.375Q261.0 375.75 263.0 369.25Q311.75 262.0 357.25 197.75Q362.25 190.75 373.375 187.125Q384.5 183.5 395.0 183.5Q401.25 183.5 401.25 193.25Q401.25 196.0 399.25 200.625Q397.25 205.25 389.25 215.75Q381.25 226.25 370.25 239.75Q359.25 253.25 357.75 255.25Q392.0 219.75 419.625 202.375Q447.25 185.0 459.625 185.0Q472.0 185.0 478.625 192.125Q485.25 199.25 485.25 207.375Q485.25 215.5 484.125 220.875Q483.0 226.25 480.0 232.125Q477.0 238.0 474.875 242.125Q472.75 246.25 467.75 252.875Q462.75 259.5 460.875 262.0Q459.0 264.5 453.125 271.5Q447.25 278.5 446.75 279.25Q453.75 272.25 466.25 258.5Q478.75 244.75 487.375 235.5Q496.0 226.25 509.0 214.625Q522.0 203.0 533.25 195.75Q560.25 178.75 588.0 178.75Q597.5 178.75 604.0 184.75Q610.5 190.75 610.5 199.125Q610.5 207.5 590.25 239.125Q570.0 270.75 549.875 302.625Q529.75 334.5 529.75 342.75Q529.75 354.25 534.0 356.375Q538.25 358.5 544.25 358.0Q550.25 357.5 561.125 350.25Q572.0 343.0 580.5 335.25Q594.25 322.75 606.0 311.0Q608.5 308.75 611.5 308.75Q616.25 308.75 617.25 316.0Q618.25 323.25 618.25 331.0Q618.25 338.75 616.75 341.75Q609.5 355.75 584.75 376.0Q560.0 396.25 537.25 396.25Q534.5 396.25 533.25 396.0Q507.5 393.5 497.625 381.875Q487.75 370.25 487.75 354.25Q487.75 338.25 498.625 315.5Q509.5 292.75 522.5 274.25Q535.5 255.75 546.375 240.875Q557.25 226.0 557.25 224.75Q557.25 223.5 555.25 223.5Q547.5 223.5 520.75 248.5Q475.0 291.25 441.75 331.0Q433.0 341.5 400.25 384.25Q396.5 389.25 388.375 389.25Q380.25 389.25 371.5 386.125Q362.75 383.0 362.75 378.0Q362.75 375.5 402.5 307.875Q442.25 240.25 442.25 234.125Q442.25 228.0 434.875 228.0Q427.5 228.0 404.5 250.0Q341.25 310.5 306.5 370.25Q304.25 373.75 297.75 381.25Q291.25 388.75 289.0 388.75ZM791.25 197.25Q810.25 197.25 810.25 210.25Q810.25 217.25 807.0 220.5Q803.75 223.75 793.125 242.125Q782.5 260.5 769.625 289.125Q756.75 317.75 753.0 338.0Q752.25 340.5 752.25 345.0Q752.25 358.75 759.75 358.75Q767.25 358.75 777.5 351.625Q787.75 344.5 795.75 336.375Q803.75 328.25 811.375 319.75Q819.0 311.25 820.5 310.0Q822.0 308.75 825.0 308.75Q829.75 308.75 830.75 316.0Q831.75 323.25 831.75 331.0Q831.75 338.75 830.25 341.75Q823.0 356.0 798.375 376.0Q773.75 396.0 753.625 396.0Q733.5 396.0 724.0 383.75Q714.5 371.5 714.5 356.625Q714.5 341.75 719.5 330.5Q698.75 357.5 671.875 376.25Q645.0 395.0 628.0 395.0Q611.0 395.0 600.25 384.75Q586.5 372.0 586.5 349.375Q586.5 326.75 596.625 303.875Q606.75 281.0 623.25 262.125Q639.75 243.25 659.5 227.75Q701.0 195.25 736.0 195.25Q749.5 195.25 758.0 199.75Q766.5 204.25 768.75 211.0Q774.75 202.0 778.875 199.625Q783.0 197.25 791.25 197.25ZM758.0 225.0Q715.25 225.0 669.5 272.5Q653.25 289.5 639.625 313.25Q626.0 337.0 626.0 345.75Q626.0 354.5 631.0 354.5Q638.0 354.5 670.0 326.875Q702.0 299.25 712.5 286.25Q724.0 271.75 758.0 225.0ZM971.75 112.75Q971.75 127.0 958.5 141.375Q945.25 155.75 930.875 155.75Q916.5 155.75 916.5 140.75Q916.5 125.75 929.125 112.125Q941.75 98.5 957.0 98.5Q963.75 98.5 967.75 102.25Q971.75 106.0 971.75 112.75ZM931.25 331.0Q931.25 338.5 929.75 341.75Q917.5 366.75 890.75 382.125Q864.0 397.5 844.25 397.5Q824.5 397.5 810.25 384.25Q796.0 371.0 796.0 357.25Q796.0 343.5 809.75 317.25Q823.5 291.0 837.25 268.75Q851.0 246.5 851.0 244.625Q851.0 242.75 845.875 237.25Q840.75 231.75 840.75 229.125Q840.75 226.5 851.125 215.375Q861.5 204.25 876.375 193.375Q891.25 182.5 899.125 182.5Q907.0 182.5 913.25 189.5Q919.5 196.5 919.5 202.25Q919.5 208.0 860.0 310.5Q859.25 312.0 855.875 317.125Q852.5 322.25 850.625 325.625Q848.75 329.0 846.25 333.75Q841.25 343.75 841.25 350.5Q841.25 359.0 852.75 359.0Q864.25 359.0 876.625 351.125Q889.0 343.25 898.0 333.75Q921.5 308.5 924.75 308.5Q931.25 308.5 931.25 331.0ZM1048.25 211.25Q1004.75 266.75 964.75 311.0Q964.5 314.0 962.625 322.125Q960.75 330.25 960.75 338.5Q960.75 346.75 968.375 353.375Q976.0 360.0 987.25 360.0Q998.5 360.0 1011.375 352.0Q1024.25 344.0 1033.75 334.25Q1058.75 308.5 1064.75 308.5Q1070.75 308.5 1070.75 326.75V331.75Q1070.75 341.5 1067.25 346.0Q1046.25 371.75 1020.0 384.375Q993.75 397.0 970.25 397.0Q946.75 397.0 934.5 382.625Q922.25 368.25 922.25 343.25Q922.25 294.5 948.375 228.625Q974.5 162.75 1007.25 116.5Q1081.0 12.0 1120.0 12.0Q1132.0 12.0 1141.125 19.125Q1150.25 26.25 1150.25 40.25Q1150.25 54.25 1134.75 84.125Q1119.25 114.0 1097.5 145.125Q1075.75 176.25 1048.25 211.25ZM1108.75 53.5Q1108.75 49.75 1106.25 49.75Q1097.5 49.75 1060.25 99.75Q1023.0 149.75 1006.375 179.5Q989.75 209.25 975.0 254.25Q1004.5 219.25 1056.625 145.125Q1108.75 71.0 1108.75 53.5Z",strokes:[[[238.1,163.4,16.5,0],[234,165.1,18.8,0],[229,166.9,20.9,0],[224,169.1,22.7,0],[219,171,24,0],[214,172.6,24.9,0],[209,174.1,24.7,0],[204,175.6,24.2,0],[199,176.9,23.6,0],[194,177.9,23.3,0],[189,178,22.9,0],[184,178.1,22,0],[179,178.9,22,0],[174,179,22,0],[169,179,22,0],[164,179.1,22.1,0],[159,180,23,0],[154,181,24,0],[149,182,25,0],[144,183.1,26.2,0],[140.3,185.4,27.1,0],[137.7,190,24.5,0],[135.3,195,21.4,0],[133.1,200,19.7,0],[130.9,205,19.2,0],[128.4,209.7,19.8,0],[124,213.3,19.7,0],[119,216.4,19.8,0],[114,219.7,20,0],[109,223,20,0],[104,226.6,20.2,0],[99,230.6,20.4,0],[94,234.6,20.5,0],[89,239,20.9,0],[84,243.4,21,0],[79,248,21.2,0],[74,253,21.6,0],[69.1,257.3,21.7,0],[65,262,22.2,0],[61,267,22.4,0],[56.9,272,22.6,0],[52.9,277,22.9,0],[49.6,282,23,0],[46.4,287,23.2,0],[44,292,23.2,0],[41.4,297,23.4,0],[39.6,302,23.2,0],[38.3,307,22.8,0],[37.4,312,22.2,0],[36.6,317,22.1,0],[36,322,22,0],[36,327,22,0],[36.6,332,21.4,0],[37.6,337,20.9,0],[38.6,342,21.1,0],[40,347,21.5,0],[42.1,352,21.9,0],[46,357,22,0],[51,361.6,21.5,0],[56,364.6,21.1,0],[61,366.7,20.8,0],[66,368.3,20.2,0],[71,369.6,20,0],[76,370.4,19.8,0],[81,371.1,19.8,0],[86,371.9,19.9,0],[91,372,20,0],[96,372,20.1,0],[101,372,20.7,0],[106,371.4,20.6,0],[111,370.9,20.9,0],[116,370,21.1,0],[121,369,21.4,0],[126,367.9,21.7,0],[131,366.6,21.9,0],[136,365.1,22.1,0],[141,363.3,22.2,0],[146,361.7,22.4,0],[151,359.7,22.5,0],[156,357.6,22.7,0],[161,355.4,22.9,0],[166,353.3,23,0],[171,350.7,23.2,0],[176,348,23.1,0],[181,345.3,23.1,0],[186,342.7,23.3,0],[191,339.9,23.3,0],[196,336.7,23.2,0],[201,333.3,23.2,0],[206,330,23.2,0],[211,326.4,23.1,0],[216,322.6,23,0],[221,319,22.9,0],[226,315.3,23,0],[231,311.1,23,0],[236,306.9,22.9,0],[241,302.7,22.8,0],[246,298.1,22.9,0],[250.9,293.9,22.5,0],[255.1,289,22.5,0],[259.6,284,22.4,0],[263.4,279,22.1,0],[267.3,274,22,0],[270.6,269,21.7,0],[273.4,264,21.5,0],[275.7,259,20.9,0],[278.1,254,20.7,0],[279,249,19.7,0],[278.3,244,17.4,0],[276.9,239,14.8,0],[276.4,237.6,14.1,1],[277.7,242,16.3,1],[278.9,247,18.9,1],[278.7,252,20.4,1],[276.7,257,20.8,1],[274.4,262,21.3,1],[271.9,267,21.7,1],[268.7,272,21.9,1],[265,277,22,1],[261.1,282,22.2,1],[257,287,22.5,1],[252.6,292,22.5,1],[248,296.4,22.7,1],[243,301,22.9,1],[238,305.3,22.8,1],[233,309.4,23,1],[228,313.6,23,1],[223,317.6,23,1],[218,321.1,22.9,1],[213,324.9,23.1,1],[208,328.6,23.1,1],[203,332,23.2,1],[198,335.3,23.2,1],[193,338.6,23.3,1],[188,341.6,23.3,1],[183,344.3,23.2,1],[178,346.9,23.1,1],[173,349.7,23.2,1],[168,352.3,23.1,1],[163,354.6,23,1],[158,356.7,22.8,1],[153,358.9,22.6,1],[148,361,22.5,1],[143,362.7,22.3,1],[138,364.4,22,1],[133,366.1,22,1],[128,367.4,21.8,1],[123,368.6,21.5,1],[118,369.6,21.2,1],[113,370.6,21,1],[108,371.1,20.6,1],[103,371.9,20.8,1],[98,372,20.3,1],[93,372,20,1],[88,372,20,1],[83,371.4,19.8,1],[78,370.7,19.8,1],[73,369.9,19.8,1],[68,368.7,20,1],[63,367.4,20.6,1],[58,365.4,21,1],[53,363,21.3,1],[48,359,21.8,1],[43.4,354,22,1],[40.9,349,21.6,1],[39.1,344,21.2,1],[38,339,20.9,1],[37,334,21.1,1],[36.1,329,21.9,1],[36,324,22,1],[36.3,319,22,1],[37.1,314,22.1,1],[37.9,309,22.6,1],[39,304,23.1,1],[40.6,299,23.4,1],[43,294,23.3,1],[45.6,289,23.2,1],[48.3,284,23.1,1],[51.6,279,23,1],[55.1,274,22.7,1],[59.4,269,22.4,1],[63.4,264,22.3,1],[67.4,259,21.8,1],[72,254.7,21.6,1],[77,250,21.3,1],[82,245.1,21.1,1],[87,240.9,21,1],[92,236.3,20.6,1],[97,232.3,20.4,1],[102,228.3,20.4,1],[107,224.4,20.1,1],[112,221,20,1],[117,217.7,19.9,1],[122,214.6,19.7,1],[126.9,211.3,19.8,1],[130,207,19.5,1],[132.3,202,19.4,1],[134.4,197,20.6,1],[136.7,192,23.1,1],[139.3,187,26.5,1],[139.4,182.7,26,0],[135,178.1,22.1,0],[130,176,20.6,0],[125,175.3,20.8,0],[120,174,20.7,0],[115,172.9,21.1,0],[110,171.3,21.4,0],[105,169.3,21.8,0],[100,166.4,22.3,0],[95.1,162,22.7,0],[92,157,22.4,0],[90.6,152,21.5,0],[89.6,147,20.9,0],[89,142,21,0],[89.6,137,20.9,0],[90.6,132,21.3,0],[91.6,127,22,0],[93.4,122,22.6,0],[96.6,117,22.6,0],[100.4,112,22.6,0],[105,107,22.6,0],[110,102,22.6,0],[115,97.6,22.3,0],[120,93.4,22.1,0],[125,89.6,22,0],[130,86,21.8,0],[135,82.9,21.7,0],[140,79.7,21.6,0],[145,76.7,21.5,0],[150,74.3,21.5,0],[155,71.7,21.5,0],[160,69.3,21.4,0],[165,66.9,21.2,0],[170,64.9,21.2,0],[175,62.9,21.3,0],[180,60.9,21.1,0],[185,59,21.1,0],[190,57.3,21.1,0],[195,55.7,21.1,0],[200,54.3,21,0],[205,53.1,21,0],[210,51.9,21,0],[215,50.6,21.2,0],[220,49.9,21,0],[225,48.9,21.2,0],[230,48,21.3,0],[235,47.7,21.1,0],[240,47,21.2,0],[245,46.9,21.2,0],[250,46.1,22.7,0],[255,46,23.9,0],[260,45.7,23.7,0],[264.9,45.4,23.4,0],[268.9,49,27,0],[272.4,52.6,30.5,0],[277,53,30.5,0],[282,53.3,30.2,0],[287,54,30.1,0],[292,54.4,28.1,0],[297,55,25.9,0],[301.6,55.6,23.9,0],[302.1,55.7,23.6,0]],[[244.9,80.7,5.7,0],[249,79.1,8.6,0],[254,76.4,12.2,0],[259,72,15.7,0],[263.6,67,19.7,0],[267,62,23.8,0],[270,57,28.3,0],[271.7,53.9,30.7,0]],[[271.9,374.9,11.5,0],[276,373.7,14.7,0],[280.6,370.9,17.6,0],[284,366,19.2,0],[286.9,361,19.6,0],[290.1,356,20.6,0],[293,351,21,0],[295.7,346,21.2,0],[298.3,341,21.3,0],[301.1,336,21.6,0],[304,331,22,0],[306.7,326,22.5,0],[309.9,321,23.1,0],[313,316,23.7,0],[316.1,311,24,0],[319.1,306,24.3,0],[322.6,301,25.1,0],[325.9,296,25.8,0],[329,291,26,0],[332.3,286,26.6,0],[335.9,281,27.3,0],[339.4,276,28,0],[343.1,271,28.6,0],[346.7,266,28.9,0],[350.6,261.1,25.2,0],[355,256.1,18.5,0],[360,251,11.3,0],[364.9,246.1,4.4,0],[367.7,243.3,.9,0],[365.7,245.4,3.4,1],[361,250,9.9,1],[356,255,17,1],[353.8,259.2,21.7,0],[358,259,18.9,0],[363,257.3,15.2,0],[368,255.7,12.9,0],[373,254,12.3,0],[378,252.3,13.7,0],[383,249.7,15.4,0],[388,245,15.6,0],[393,240,15.1,0],[398,235.1,14.7,0],[403,230.9,14.7,0],[408,226.6,14.5,0],[413,222.9,14.5,0],[418,219.6,14.7,0],[423,217.1,14.5,0],[428,215.9,13.9,0],[433,214.6,14.5,0],[438,213.4,15.6,0],[443,212.3,17.5,0],[448,211.3,20.4,0],[453,210.1,23.6,0],[457.9,210.6,25.1,0],[460,215,24.7,0],[459.1,220,22.1,0],[458,225,18.8,0],[456.9,230,16.2,0],[455.6,235,14.7,0],[454.4,240,14.7,0],[453.9,245,15.2,0],[453.1,250,13.6,0],[452.3,255,11.3,0],[451.3,260,10.1,0],[450.3,265,11.3,0],[450.7,269.6,12.9,0],[451.6,273.1,14.5,0],[450.4,277.3,18.5,0],[447.1,282,24.2,0],[443.6,287,26.5,0],[440.3,292,26.3,0],[436.4,297,25.4,0],[432.9,302,24.8,0],[429.3,307,24.2,0],[425.7,312,23.7,0],[422.3,317,23.1,0],[418.9,322,22.8,0],[415.4,327,22.4,0],[412.1,332,22,0],[408.7,337,21.6,0],[405.3,342,21.2,0],[401.9,347,20.7,0],[398.7,352,20.4,0],[395.1,357,19.8,0],[392,362,19.6,0],[388.6,367,19.1,0],[384.9,371.9,17.1,0],[380,374.6,13.8,0],[375,376.1,11,0],[372.3,376.9,9.3,1],[376,375.9,11.5,1],[381,374.1,14.4,1],[385.7,371,17.7,1],[389.1,366,19.1,1],[392.6,361,19.6,1],[395.9,356,19.9,1],[399.3,351,20.4,1],[402.6,346,20.8,1],[406,341,21.3,1],[409.4,336,21.7,1],[412.9,331,22.2,1],[416.1,326,22.5,1],[419.6,321,22.8,1],[423,316,23.2,1],[426.6,311,23.9,1],[430,306,24.3,1],[433.6,301,24.9,1],[437.3,296,25.6,1],[441,291,26.4,1],[444.1,286,26.4,1],[447.9,281,23.1,1],[451.4,276.6,17.4,1],[456,274.3,13.4,0],[461,272.7,10.9,0],[466,271,10.5,0],[471,269.3,12.3,0],[476,267.6,15.1,0],[481,264,16.3,0],[486,259,16.5,0],[491,254,17,0],[496,249,17,0],[501,244,17,0],[506,239,17.3,0],[511,234.3,17.2,0],[516,230,17.1,0],[521,225.1,17.2,0],[526,221,17.1,0],[531,217,17.2,0],[536,213.4,17.3,0],[541,210.7,17.3,0],[546,209.1,16.5,0],[551,207.9,16.4,0],[556,206.7,17.4,0],[561,205.7,19.3,0],[566,204.7,22.2,0],[571,203.9,24.2,0],[575.4,204.1,25.2,0],[575.9,207.9,25.8,0],[574.7,213,22.6,0],[573.6,218,19.6,0],[572.4,223,17.5,0],[571.1,228,16.4,0],[569.9,233,16.6,0],[568.6,238,17.8,0],[566,243,18.4,0],[562.4,248,18.5,0],[559,253,18.8,0],[555.7,258,19,0],[552.3,263,19.1,0],[548.7,268,19.2,0],[545.7,273,19.3,0],[542.3,278,19.6,0],[539,283,19.7,0],[535.4,288,19.9,0],[532,293,19.8,0],[529,298,19.9,0],[526.1,303,19.9,0],[523.3,308,19.9,0],[520.7,313,19.9,0],[517.9,318,19.9,0],[515.4,323,19.8,0],[513.9,328,19.5,0],[512.9,333,18.8,0],[512,338,18.4,0],[511.1,343,18.9,0],[510.4,348,19.8,0],[510.1,353,20.9,0],[511,358,21.3,0],[512.4,363,22,0],[515.3,368,22.3,0],[520,371.7,21.4,0],[525,373.6,20.5,0],[530,374.4,19.5,0],[535,375,18.9,0],[540,374.7,17.8,0],[545,373.9,17.1,0],[550,372.9,17.1,0],[555,371.7,17.7,0],[560,369.9,18.2,0],[565,367.1,18.1,0],[570,364.1,18.1,0],[575,360.7,17.9,0],[580,358.6,16.8,0],[585,357.1,15.8,0],[590,355.7,16.4,0],[595,354.3,18.5,0],[600,352.7,21.8,0],[604.4,350.9,22.3,0],[606.6,347,20.4,0],[607.4,342,19.6,0],[608,337,19.5,0],[608.7,332,20,0],[609.4,327,20.8,0],[611,322,21.1,0],[613,317,21.5,0],[615.3,312,21.7,0],[617.7,307,21.9,0],[620.4,302,21.9,0],[623.7,297,22,0],[626.6,292,21.9,0],[629.9,287,22,0],[633.6,282,21.9,0],[637.3,277,21.9,0],[641.4,272,21.6,0],[646,267,21.5,0],[651,262,21.1,0],[655.3,257,20.9,0],[660,252.4,20.6,0],[665,248,20.6,0],[670,243.3,20.3,0],[675,239.4,20.2,0],[680,235.7,20,0],[685,232.1,19.9,0],[690,228.7,19.6,0],[695,225.6,19.5,0],[700,222.7,19.3,0],[705,220.3,19.1,0],[710,218,18.8,0],[715,215.9,18.5,0],[720,214,18,0],[725,212.6,17.5,0],[730,211.4,17.1,0],[735,210.7,16.5,0],[740,211.1,15.9,0],[745,212,14.3,0],[750,213.3,12.7,0],[755,215,11.1,0],[760,216.7,10.4,0],[765,218.4,11.1,0],[770,223,15,0],[772.9,227.3,18,0],[772.3,232,18.4,0],[771.3,237,19.5,0],[769.7,242,20.7,0],[766.9,247,21.1,0],[763.7,252,21.6,0],[760.9,257,22,0],[757.9,262,22.5,0],[754.7,267,23,0],[751.9,272,23.4,0],[749.1,277,23.8,0],[746.3,282,24.4,0],[743.6,287,25,0],[740.7,292,25.7,0],[738.3,297,26.1,0],[735.6,302,27,0],[733.1,307,27.6,0],[731.4,311.7,27.2,0],[733.6,316,24.1,0],[734.3,321,22.1,0],[734,326,20.2,0],[734,331,18.5,0],[733.9,335.7,18,0],[733.9,340,18.5,0],[734,345,19,0],[734,350,19.1,0],[734.4,355,19.3,0],[735.4,360,19.9,0],[736.9,365,20.8,0],[740.1,370,21.2,0],[745,373.3,20.6,0],[750,374.4,19.3,0],[755,374.6,17.9,0],[760,373.6,16.6,0],[765,372.6,15.8,0],[770,371.4,15.9,0],[775,370.1,16.4,0],[780,367.9,16.7,0],[785,364.9,16.8,0],[790,362.1,16.3,0],[795,360.6,15.4,0],[800,359.1,15.9,0],[805,357.7,17.8,0],[810,356.1,21,0],[815,354.7,24.1,0],[819.1,352.9,22.9,0],[821,349,21,0],[822.6,344,19.5,0],[823.6,339,19.5,0],[824.6,334,20,0],[826,329,20.6,0],[828.3,324,20.7,0],[830.7,319,20.6,0],[833.3,314,20.7,0],[836,309,20.7,0],[839.1,304,20.8,0],[842.1,299,21,0],[845,294,21,0],[848,289,21,0],[851,284,21,0],[854,279,20.9,0],[856.9,274,20.8,0],[859.7,269,20.8,0],[862.6,264,20.8,0],[864.9,259,20.3,0],[866,254,18.9,0],[867.1,249,18.5,0],[868.3,244,19.3,0],[869.4,239,20.9,0],[871.6,234,24.3,0],[875.3,229,26.9,0],[879.1,224,26.2,0],[883.3,219,25,0],[887.3,214,23.9,0],[891.4,209,22.7,0],[895.4,204.6,21.3,0],[894,206,21.8,1],[889.7,211,23.2,1],[885.6,216,24.5,1],[881.6,221,25.5,1],[877.4,226,26.7,1],[873.7,231,26.2,1],[870.4,236,22.6,1],[868.9,241,20,1],[867.7,246,18.8,1],[866.6,251,18.4,1],[865.6,256,19.4,1],[864.1,261,20.7,1],[861.4,266,20.7,1],[858.6,271,20.8,1],[855.7,276,20.8,1],[852.9,281,20.9,1],[849.9,286,21,1],[846.9,291,21,1],[843.9,296,21,1],[841,301,21,1],[838,306,20.8,1],[834.9,311,20.7,1],[832.3,316,20.6,1],[829.7,321,20.6,1],[827.4,326,20.6,1],[825.4,331,20.3,1],[824.3,336,19.7,1],[823.3,341,19.2,1],[822,346,20,1],[820.4,350.9,21.6,1],[821,355.1,21.3,0],[822.6,360,21.1,0],[824,365,22,0],[827.1,369.9,22.2,0],[832,373,21.3,0],[837,374.4,20.1,0],[842,375.3,19.1,0],[847,375.4,18.5,0],[852,374.7,17.7,0],[857,373.7,16.7,0],[862,372.9,16.3,0],[867,372,16.6,0],[872,370.9,17.1,0],[877,369,17.4,0],[882,366.6,17.5,0],[887,363.4,17.5,0],[892,359.7,17.4,0],[897,355.7,17.3,0],[902,351.7,17.2,0],[906.7,347,16.9,0],[911,343.1,16.3,0],[916,341.3,15.1,0],[921,339.7,15.5,0],[926,338,17.6,0],[931,336.3,20.8,0],[936,334.7,23.2,0],[939.1,332.6,22,0],[941,328,20.7,0],[942.3,323,20,0],[943.1,318,20.1,0],[943.9,313,20.3,0],[944.6,308,20.2,0],[945.6,303,20.3,0],[946.6,298,20.3,0],[948.1,293,20.8,0],[950.9,288,22.2,0],[953.4,283,23.5,0],[956.4,278,25.1,0],[959,273,26,0],[961,268.6,25,0],[960.3,265,23.2,0],[959.3,261,21.4,0],[960.1,256,18.3,0],[960.9,251,16.4,0],[961.7,246,15.7,0],[962.6,241,16.2,0],[963.4,236,17,0],[964.9,231,17.3,0],[966.9,226,17.1,0],[968.7,221,17.1,0],[970.4,216,16.9,0],[972.7,211,16.9,0],[974.9,206,16.8,0],[977.3,201,16.7,0],[979.4,196,16.8,0],[981.7,191,16.7,0],[984.3,186,16.7,0],[986.7,181,16.6,0],[989.3,176,16.6,0],[991.9,171,16.7,0],[994.7,166,16.8,0],[997.4,161,16.9,0],[1000.4,156,17,0],[1003.4,151,17,0],[1006.4,146,17,0],[1009.7,141,17.2,0],[1013,136,17.2,0],[1016.3,131,17.2,0],[1019.9,126,17.2,0],[1023.4,121,17.2,0],[1027,116,17.2,0],[1030.7,111,17.2,0],[1034.4,106,17.1,0],[1038.1,101,17,0],[1041.9,96,17,0],[1045.7,91,16.9,0],[1049.7,86,16.9,0],[1053.6,81,16.7,0],[1057.4,76,16.6,0],[1061.6,71,16.4,0],[1065.6,66,16.2,0],[1070,61,16.3,0],[1075,56,16,0],[1080,51,15.6,0],[1085,46,15.6,0],[1090,41.6,15.4,0],[1095,38.3,15.2,0],[1100,36.6,14.5,0],[1105,35.4,14.7,0],[1110,34.1,16.5,0],[1115,33,19.2,0],[1120,32.7,21.4,0],[1124.3,36,22.7,0],[1125.9,41,21.4,0],[1125.6,46,19.3,0],[1124.6,51,17.6,0],[1123.7,56,16.8,0],[1122.7,61,16.5,0],[1121.7,66,16.8,0],[1120.3,71,17.2,0],[1118.6,76,17.6,0],[1115.9,81,17.3,0],[1113.3,86,17.3,0],[1110.6,91,17.5,0],[1107.7,96,17.5,0],[1104.9,101,17.5,0],[1102,106,17.5,0],[1099,111,17.6,0],[1095.7,116,17.6,0],[1092.3,121,17.6,0],[1089,126,17.6,0],[1085.7,131,17.5,0],[1082.3,136,17.4,0],[1078.7,141,17.3,0],[1075.1,146,17.3,0],[1071.7,151,17.2,0],[1068.3,156,17.1,0],[1064.7,161,17.1,0],[1061.1,166,17.1,0],[1057.4,171,17.1,0],[1053.7,176,17,0],[1050.1,181,16.9,0],[1046.6,186,16.9,0],[1042.9,191,16.7,0],[1038.9,196,16.5,0],[1035,201,16.4,0],[1031.4,206,16.4,0],[1027.4,211,16.3,0],[1023.4,216,16.2,0],[1019.4,221,16,0],[1015.6,226,15.9,0],[1011.9,231,15.8,0],[1008,236,15.8,0],[1004,241,15.7,0],[1e3,246,15.6,0],[996,251,15.6,0],[991.9,256,15.6,0],[987,259.9,14.9,0],[982,262,14.1,0],[977,263.7,14.8,0],[972,265.6,17.4,0],[967,267.4,21,0],[962.4,268.4,24.2,0],[961.4,265.4,22.6,1],[965,261,17,0],[970,256,9.9,0],[974.6,251.3,3.4,0],[976.6,249.4,1.2,0],[973.9,252.1,4.4,1],[969,257,11.3,1],[964,262,18.4,1],[961.2,266.3,23.4,1],[960.4,270.3,25.7,1],[957.9,275,25.6,1],[955.1,280,24.4,1],[952.4,285,23,1],[949.9,290,21.7,1],[947.4,295,20.5,1],[946.3,300,20.4,1],[945.3,305,20.3,1],[944.3,310,20.3,1],[943.6,315,20.3,1],[942.7,320,20.1,1],[941.7,325,20.4,1],[940.1,330,21.3,1],[939.7,334.4,21.3,0],[941.1,339,19.9,0],[941.9,344,19.7,0],[942.4,349,20.5,0],[943.3,354,21.1,0],[945.1,359,21.8,0],[948,364,22.6,0],[952,368.7,22.8,0],[957,372.1,22.6,0],[962,374.6,21.7,0],[967,375.9,20.9,0],[972,376,19.6,0],[977,376,18.4,0],[982,375.3,17.3,0],[987,374.6,16.6,0],[992,373.7,15.7,0],[997,373,15.4,0],[1002,372.3,16.1,0],[1007,371,16.6,0],[1012,369,16.9,0],[1017,366.4,16.9,0],[1022,363.6,17,0],[1027,360.3,17.1,0],[1032,356.4,17.1,0],[1037,352.6,17.1,0],[1042,348,17.6,0],[1047,343,17.5,0],[1052,338,16.8,0],[1056.3,333,14.6,0],[1059.4,328,11.6,0],[1061.1,323,9.9,0],[1062.6,318,8,0],[1063.3,315.3,6.7,1],[1062.3,319,8.4,1],[1060.9,324,10.1,1],[1058.9,329,12.1,1],[1055.6,334,15.2,1],[1051,339,17,1],[1046,344,17.6,1],[1041,349,17.5,1],[1036,353.4,17.1,1],[1031,357.3,17.1,1],[1026,361,17.1,1],[1021,364.1,17,1],[1016,367,16.9,1],[1011,369.4,16.9,1],[1006,371.3,16.5,1],[1001,372.4,15.9,1],[996,373.1,15.4,1],[991,373.9,15.9,1],[986,374.7,16.7,1],[981,375.4,17.4,1],[976,376,18.5,1],[971,376,19.9,1],[966,375.7,21.1,1],[961,374.1,22,1],[956,371.6,22.7,1],[951.1,367.9,22.8,1],[947.3,363,22.4,1],[944.6,358,21.5,1],[943.1,353,20.9,1],[942.3,348,20.3,1],[941.7,343,19.6,1],[940.9,338,20.1,1],[938.6,334.6,22.3,1],[934,335.3,22.9,1],[929,337,19.4,1],[924,338.7,16.5,1],[919,340.3,15.2,1],[914,342,15.4,1],[909.3,344.4,16.6,1],[905,349,17,1],[900,353.4,17.4,1],[895,357.4,17.5,1],[890,361.4,17.6,1],[885,364.9,17.5,1],[880,367.6,17.5,1],[875,369.9,17.3,1],[870,371.4,16.9,1],[865,372.4,16.5,1],[860,373.3,16.4,1],[855,374.3,17.3,1],[850,375,18,1],[845,375.4,18.6,1],[840,374.9,19.3,1],[835,373.9,20.5,1],[830,372,21.7,1],[825.6,368,22.3,1],[823.4,363,21.6,1],[822,358,21,1],[820,354,22.1,1],[816,354.3,24.2,1],[811,355.9,21.7,1],[806,357.3,18.5,1],[801,358.9,16.2,1],[796,360.3,15.4,1],[791,361.7,16.1,1],[786,364.1,16.7,1],[781,367.3,16.7,1],[776,369.7,16.4,1],[771,371.3,16.1,1],[766,372.4,15.8,1],[761,373.4,16.4,1],[756,374.4,17.6,1],[751,374.6,19,1],[746,373.6,20.3,1],[741,370.9,21.2,1],[737.3,366,21,1],[735.6,361,20.2,1],[734.6,356,19.5,1],[734,351,19.1,1],[734,346,19,1],[734,341,18.6,1],[732.6,337.4,16.8,0],[728,337,12,0],[723,337,7.1,0],[718,336.9,2.6,0],[713,334,3.5,0],[708,329,10,0],[703.3,324.4,16.5,0],[699,325.1,19.5,0],[694,330,19.8,0],[689,335,20.3,0],[684,339.4,20.3,0],[679,344,20.5,0],[674,348.3,20.5,0],[669,352.4,20.5,0],[664,356.6,20.5,0],[659,360.1,20.3,0],[654,363.7,20.2,0],[649,366.7,20,0],[644,368.6,19.3,0],[639,369.7,18.2,0],[634,370.7,17.9,0],[629,371.6,18.7,0],[624,371.4,19.5,0],[619,370.1,20.3,0],[614,368.3,21.5,0],[610.6,364,21.1,0],[609.3,359,19.9,0],[607.4,354,20.1,0],[606.4,352.6,20.8,1],[608.7,357,19.7,1],[609.9,362,20.8,1],[612.3,366.9,21.6,1],[617,369.6,20.8,1],[622,370.9,19.7,1],[627,371.7,19.1,1],[632,371.1,18.2,1],[637,370.3,18.1,1],[642,369.1,18.9,1],[647,367.6,19.8,1],[652,365,20.1,1],[657,361.6,20.3,1],[662,358,20.4,1],[667,354.1,20.5,1],[672,349.9,20.5,1],[677,345.7,20.5,1],[682,341.1,20.3,1],[687,336.9,20.4,1],[692,332,20,1],[697,327,19.7,1],[701.6,323,18.9,1],[706,320.7,17.6,0],[711,319,16.9,0],[716,317.3,17.8,0],[721,315.7,20,0],[726,314,23.3,0],[729.7,313,25.9,0],[727,313.7,24,1],[722,315.3,20.7,1],[717,317,18.1,1],[712,318.7,16.9,1],[707,320.3,17.4,1],[702.4,322.4,18.6,1],[698,326,19.6,1],[693,331,19.9,1],[688,336,20.4,1],[683,340.3,20.3,1],[678,344.9,20.5,1],[673,349.1,20.5,1],[668,353.3,20.5,1],[663,357.3,20.4,1],[658,360.9,20.3,1],[653,364.3,20.2,1],[648,367.1,19.8,1],[643,368.9,19.1,1],[638,370,18.1,1],[633,370.9,18,1],[628,371.7,18.9,1],[623,371.1,19.6,1],[618,369.9,20.5,1],[613.1,367.6,21.5,1],[610.1,363,21,1],[609,358,19.8,1],[606.9,353.1,20.5,1],[602.9,351.7,22.6,1],[598,353.3,20.4,1],[593,354.9,17.5,1],[588,356.3,16,1],[583,357.7,16,1],[578,359.3,17.3,1],[573,362.1,18,1],[568,365.4,18.1,1],[563,368.4,18.3,1],[558,370.9,18.2,1],[553,372.3,17.5,1],[548,373.4,17.2,1],[543,374.3,17.3,1],[538,375,18.4,1],[533,374.9,19.1,1],[528,374.1,19.9,1],[523,373,20.9,1],[518,370.4,21.9,1],[513.9,366,22.4,1],[511.7,361,21.8,1],[510.6,356,21.1,1],[510,351,20.6,1],[510.7,346,19.3,1],[511.4,341,18.6,1],[512.4,336,18.4,1],[513.3,331,19,1],[514.4,326,19.6,1],[516.3,321,19.9,1],[519,316,19.9,1],[521.7,311,19.9,1],[524.4,306,19.9,1],[527.3,301,19.9,1],[530.1,296,19.8,1],[533.3,291,19.8,1],[536.9,286,19.9,1],[540.3,281,19.7,1],[543.7,276,19.5,1],[547,271,19.3,1],[550.1,266,19.2,1],[553.7,261,19,1],[557,256,18.9,1],[560.3,251,18.6,1],[563.9,246,18.5,1],[567.3,241,18.4,1],[569.3,236,17.4,1],[570.4,231,16.3,1],[571.6,226,16.6,1],[572.9,221,18.2,1],[574.1,216,20.8,1],[575.3,211,24.1,1],[576.3,206.1,26.1,1],[574,203.8,24.7,1],[569,204.3,23.6,1],[564,205.3,20.8,1],[559,206.3,18.3,1],[554,207.3,16.8,1],[549,208.4,16.2,1],[544,209.6,16.9,1],[539,211.6,17.4,1],[534,214.7,17.3,1],[529,218.6,17.2,1],[524,222.6,17.2,1],[519,227,17.2,1],[514,231.7,17,1],[509,236,17.3,1],[504,241,17.1,1],[499,246,17,1],[494,251,17,1],[489,256,16.8,1],[484,261,16.3,1],[479,265.7,16.1,1],[474,268.3,14,1],[469,270,11.4,1],[464,271.7,10.4,1],[459,273.3,11.6,1],[454,275,14.8,1],[451.6,273.9,15.1,1],[453.4,269.7,10.8,0],[457.9,265.1,4.4,0],[461.1,261.7,1.2,0],[461.1,261.8,1.2,0]],[[388.1,193.7,10.8,0],[384,196.7,13.1,0],[379,200.6,15.9,0],[374,205,18.1,0],[369.6,210,18.7,0],[366,215,18.5,0],[362.4,220,18.3,0],[358.9,225,18.1,0],[356.6,230,16.9,0],[355.4,235,15,0],[354.1,240,14.3,0],[352.9,245,15.4,0],[351.7,250,17.8,0],[350.6,255,21.2,0],[351.4,259,23.3,0]],[[794.1,210.4,14.2,0],[790,213.1,17,0],[785.6,218,19,0],[781,222.4,18.9,0],[776,225.1,18.6,0],[773.9,225.9,18.3,0]],[[933.9,136.1,17.9,0],[938,132,20.2,0],[943,127,21.1,0],[947.4,122,20.7,0],[951.9,117.1,18.8,0],[953.1,115.9,18,0]]]}};function tm(r){let t=r.stage,e=r.words,n=r.getRest,i=r.zone,s=r.onWordDone||function(){},o=r.onDone||function(){},a=r.onReset||function(){},l=[10,14,30],c=window.matchMedia("(prefers-reduced-motion: reduce)").matches,h=function(F,ht,et){return Math.max(ht,Math.min(et,F))},f=function(F){return F=h(F,0,1),F*F*(3-2*F)},u=function(F,ht,et){return F+(ht-F)*et};function d(F){let ht=document.createElement("canvas");return ht.style.cssText="position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:"+F,ht.setAttribute("aria-hidden","true"),t.appendChild(ht),ht}let p=d(1),_=d(2),g=document.createElement("canvas"),m=document.createElement("canvas"),M=p.getContext("2d"),T=_.getContext("2d"),x=g.getContext("2d"),b=m.getContext("2d"),y=document.createElement("div");y.className="penhit",y.setAttribute("role","button"),y.setAttribute("tabindex","0"),y.setAttribute("aria-label","Write again"),y.title="Click the pen to write again",y.style.cssText="position:absolute;z-index:4;cursor:pointer;pointer-events:none;border-radius:12px",t.appendChild(y);let E=null,v,w,C,L,D,V,I=1;try{E=new No({antialias:!0,alpha:!0,powerPreference:"high-performance"}),E.getContext()||(E=null)}catch{E=null}let O=0,H=0,z=1;function nt(){let F=document.createElement("canvas");F.width=256,F.height=64;let ht=F.getContext("2d"),et=ht.createRadialGradient(128,32,2,128,32,128);et.addColorStop(0,"rgba(0,0,0,1)"),et.addColorStop(.45,"rgba(0,0,0,.55)"),et.addColorStop(1,"rgba(0,0,0,0)"),ht.setTransform(1,0,0,.5,0,16),ht.fillStyle=et,ht.fillRect(0,-32,256,128);let Nt=new xr(F);return Nt.colorSpace=hn,Nt}function $(){E.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),E.outputColorSpace=hn,E.toneMapping=Ka,E.toneMappingExposure=.95;let F=E.domElement;F.style.cssText="position:absolute;left:0;top:0;width:100%;height:100%;display:block;pointer-events:none;z-index:3",F.setAttribute("aria-hidden","true"),t.appendChild(F),v=new gr;let ht=new ts(E);v.environment=ht.fromScene(new Fo,.03).texture;let et=new Ts(16777215,1.6);et.position.set(-300,500,700),v.add(et),v.add(new Ja(16777215,.25)),w=new qr(0,100,100,0,.1,3e3),w.position.z=1500;let Nt=new Wr({color:526346,roughness:.16,metalness:0,clearcoat:1,clearcoatRoughness:.05,envMapIntensity:1.5}),Zt=new Bi({color:14267484,metalness:1,roughness:.2,envMapIntensity:1.5}),ge=new Bi({color:15790836,metalness:1,roughness:.14,envMapIntensity:1.7,side:hi}),we=new Bi({color:4540494,metalness:1,roughness:.28,envMapIntensity:1.3}),Be=new Oi({color:328966,side:hi});function le(ie,Ot,Se){let Qe=new Ga(ie.map(function(Ce){return new Lt(Ce[0],Ce[1])}),Se||72);return new be(Qe,Ot)}function fe(ie,Ot,Se,Qe){let Ce=new be(new Ss(ie,ie,Ot,72),Qe);return Ce.position.y=Se,Ce}let Ae=new si,yn=new wo;yn.moveTo(0,0),yn.bezierCurveTo(4,9,11,24,11.6,40),yn.lineTo(11,66),yn.lineTo(-11,66),yn.lineTo(-11.6,40),yn.bezierCurveTo(-11,24,-4,9,0,0);let A=new Va(yn,{depth:1.1,bevelEnabled:!1,curveSegments:24}),k=A.attributes.position;function j(ie){let Ot=h((ie-8)/56,0,1);return .5+7.4*Ot*Ot*(3-2*Ot)}for(let ie=0;ie<k.count;ie++){let Ot=k.getX(ie),Se=k.getY(ie);k.setZ(ie,k.getZ(ie)+j(Se)-Ot*Ot/26)}A.computeVertexNormals();let Z=new si;Z.scale.set(1.45,1.45,1.2),Ae.add(Z),Z.add(new be(A,ge));let q=new be(new Fi(.8,44,.3),Be);q.position.set(0,22,j(22)+1.3),q.rotation.x=Math.atan(7.4/56*1.1),Z.add(q);let wt=new be(new La(1.7,24),Be);wt.position.set(0,44,j(44)+1.35),wt.rotation.x=q.rotation.x,Z.add(wt),Ae.add(le([[0,6],[2.2,8],[5,40],[6.8,60],[0,60]],Nt,40)),Ae.add(le([[0,58],[7.4,58],[8.6,72],[10,100],[11.4,126],[12.2,134],[0,134]],Nt)),Ae.add(fe(13,8,138,Zt)),Ae.add(le([[0,142],[12.2,142],[12.9,152],[13.4,190],[13.5,260],[13.2,330],[12.5,392],[10.8,420],[6.5,432],[0,436]],Nt)),Ae.add(fe(13.6,5,154,Zt)),Ae.add(fe(13,3,163,Zt)),Ae.add(fe(13,4,398,Zt)),C=new si,C.add(Ae),v.add(C);let Rt=new si;Rt.add(le([[0,0],[14.2,0],[14.7,4],[14.8,30],[14.8,236],[0,236]],Nt)),Rt.add(le([[0,236],[14.8,236],[14.8,248],[12.5,257],[7,261],[0,262]],we)),Rt.add(fe(15.2,5,12,Zt)),Rt.add(fe(15.1,2.2,21,Zt)),Rt.add(fe(15.3,16,200,Zt));let Ut=new be(new Fi(5.4,138,1.5),Zt);Ut.position.set(0,134,15.6),Rt.add(Ut);let Yt=new be(new Ha(3.4,24,16),Zt);Yt.position.set(0,64,15.5),Rt.add(Yt),L=new si,L.add(Rt),v.add(L);let Jt=nt();function he(ie){let Ot=new be(new ji(1,1),new Oi({map:Jt,transparent:!0,opacity:ie,depthWrite:!1}));return Ot.position.z=.2,v.add(Ot),Ot}D=he(.3),V=he(.32)}if(E)try{$()}catch{E=null}let P={},K=[];function It(F){F.pill.style.transform="translate3d("+(F.cur.x-F.target.x).toFixed(2)+"px,"+(F.cur.y-F.target.y).toFixed(2)+"px,0)",F.pill.style.setProperty("--m",F.m.toFixed(3))}function Et(){let F=i();K=e.map(function(ht){let et=j1[ht.key],Nt=ht.slot(),Zt=ht.inset.x,ge=ht.inset.y;P[ht.key]||(P[ht.key]=new Path2D(et.d));let we=Nt.w-2*Zt,Be=Nt.h-2*ge,le=Math.min(we/et.W,Be/et.H),fe=F.x+F.w/2-Nt.w/2,Ae=F.y+F.h/2-Nt.h/2,yn=fe+Zt+(we-et.W*le)/2,A=Ae+ge+(Be-et.H*le)/2,k=et.strokes.map(function(Z){let q=Z.map(function(Rt){return{x:yn+Rt[0]*le,y:A+Rt[1]*le,r:Math.max(1,Rt[2]*le*1.25+.9),rt:Rt[3]}}),wt=[0];for(let Rt=1;Rt<q.length;Rt++)wt.push(wt[Rt-1]+Math.hypot(q[Rt].x-q[Rt-1].x,q[Rt].y-q[Rt-1].y));return{pts:q,cum:wt,len:wt[wt.length-1]}}),j={path:P[ht.key],s:le,ox:yn,oy:A,strokes:k,box:{x:fe+Zt,y:Ae+ge,w:we,h:Be},start:{x:fe,y:Ae},target:{x:Nt.x,y:Nt.y},cur:{x:fe,y:Ae},pill:ht.pill,state:"hidden",m:0,t:0,v:0,sd:0,D:0,ux:0,uy:0,p:0,pv:0,full:!1,tcol:0,started:!1};return j.pill.style.left=Nt.x+"px",j.pill.style.top=Nt.y+"px",j.pill.style.width=Nt.w+"px",j.pill.style.height=Nt.h+"px",It(j),j})}function zt(F,ht){ht=h(ht,0,F.len);let et=0,Nt=F.cum.length-1;for(;Nt-et>1;){let le=et+Nt>>1;F.cum[le]<=ht?et=le:Nt=le}let Zt=F.cum[Nt]-F.cum[et]||1,ge=(ht-F.cum[et])/Zt,we=F.pts[et],Be=F.pts[Nt];return{x:we.x+(Be.x-we.x)*ge,y:we.y+(Be.y-we.y)*ge,r:we.r+(Be.r-we.r)*ge,rt:Be.rt}}let Vt=[];function ee(F,ht){x.strokeStyle="#fff",x.lineCap="round",x.lineWidth=F.r+ht.r,x.beginPath(),x.moveTo(F.x,F.y),x.lineTo(ht.x,ht.y),x.stroke(),Vt.push({x0:F.x,y0:F.y,x1:ht.x,y1:ht.y,w:Math.min(F.r,ht.r)*1.3,t:ot})}function B(F){return"rgb("+Math.round(u(l[0],255,F))+","+Math.round(u(l[1],255,F))+","+Math.round(u(l[2],255,F))+")"}function Y(F,ht,et){F.setTransform(z*ht.s,0,0,z*ht.s,z*(ht.ox+ht.cur.x-ht.start.x),z*(ht.oy+ht.cur.y-ht.start.y)),F.fillStyle=et,ht.tcol<.3&&(F.shadowColor="rgba(10,14,30,0.38)",F.shadowBlur=1.6*z),F.fill(ht.path),F.shadowBlur=0,F.shadowColor="rgba(0,0,0,0)",F.setTransform(1,0,0,1,0,0)}function Q(){M.setTransform(1,0,0,1,0,0),M.clearRect(0,0,p.width,p.height),K.forEach(function(F){if(F.started){if(F.full){Y(M,F,B(F.tcol));return}b.setTransform(1,0,0,1,0,0),b.globalCompositeOperation="source-over",b.clearRect(0,0,m.width,m.height),Y(b,F,B(0)),b.globalCompositeOperation="destination-in",b.drawImage(g,0,0),b.globalCompositeOperation="source-over",M.drawImage(m,0,0)}})}function _t(){for(T.setTransform(z,0,0,z,0,0),T.clearRect(0,0,O,H);Vt.length&&ot-Vt[0].t>1.1;)Vt.shift();T.lineCap="round",T.shadowColor="rgba(150,170,230,0.5)",T.shadowBlur=2.5;for(let F=0;F<Vt.length;F++){let ht=Vt[F],et=1-(ot-ht.t)/1.1;T.strokeStyle="rgba(190,205,255,"+(.3*et*et*et).toFixed(3)+")",T.lineWidth=Math.max(.7,ht.w*.3),T.beginPath(),T.moveTo(ht.x0-ht.w*.28,ht.y0-ht.w*.32),T.lineTo(ht.x1-ht.w*.28,ht.y1-ht.w*.32),T.stroke()}T.shadowBlur=0,T.shadowColor="rgba(0,0,0,0)"}let ft=40*Math.PI/180,Ct=36*Math.PI/180,yt=5*Math.PI/180,tt=16*Math.PI/180;function at(){let F=n();return{x:F.x+F.w*.05+6,y:F.y+F.h*.86,lift:11.5*I,el:yt,az:tt}}function ct(F){return{x:F.x,y:F.y,lift:0,el:ft,az:Ct}}function N(F,ht,et,Nt){let Zt=f(et);return{x:u(F.x,ht.x,Zt),y:u(F.y,ht.y,Zt),lift:u(F.lift,ht.lift,Zt)+(Nt||0)*Math.sin(Math.PI*h(et,0,1)),el:u(F.el,ht.el,Zt),az:u(F.az,ht.az,Zt)}}let gt=new X,Dt=new X,Gt=new X,Ft=new Ne;function ne(F,ht,et){let Nt=Math.cos(ht);gt.set(Nt*Math.cos(et),Nt*Math.sin(et),Math.sin(ht)),Dt.set(0,0,1).addScaledVector(gt,-gt.z),Dt.lengthSq()<1e-4&&Dt.set(0,-1,0),Dt.normalize(),Gt.crossVectors(gt,Dt).normalize(),F.quaternion.setFromRotationMatrix(Ft.makeBasis(Gt,gt,Dt))}function U(F,ht,et,Nt,Zt,ge,we){let Be=Nt-ht,le=Zt-et;F.position.x=(ht+Nt)/2,F.position.y=(et+Zt)/2,F.scale.set(Math.max(1,Math.hypot(Be,le))*1.12+ge,ge,1),F.rotation.z=Math.atan2(le,Be),F.material.opacity=we}let jt=null,Xt=0,R=0;function S(){if(!E||!jt)return;let F=vt==="done"&&Xt>.001?{x:jt.x,y:jt.y,lift:jt.lift+16*I*Xt,el:jt.el+.12*Xt,az:jt.az}:jt,ht=H-F.y;C.position.set(F.x,ht,F.lift),C.scale.setScalar(I),ne(C,F.el,F.az);let et=436*I,Nt=Math.cos(F.el),Zt=F.x+et*Nt*Math.cos(F.az),ge=ht+et*Nt*Math.sin(F.az),we=F.lift+et*Math.sin(F.el),Be=.32,le=.42;U(D,F.x+Be*F.lift,ht-le*F.lift,Zt+Be*we,ge-le*we,30*I,h(.34-F.lift*.003,.14,.34)),E.render(v,w)}function W(){if(!E)return;let F=n(),ht=F.x+F.w*.58,et=F.y+F.h*.2,Nt=4*Math.PI/180;L.scale.setScalar(I),L.quaternion.setFromAxisAngle(new X(0,0,1),Nt-Math.PI/2);let Zt=262*I,ge=Math.cos(Nt),we=Math.sin(Nt);L.position.set(ht-ge*Zt/2,H-et-we*Zt/2,14.8*I),U(V,L.position.x+7*I,L.position.y-9*I,L.position.x+ge*Zt+7*I,L.position.y+we*Zt-9*I,38*I,.34)}function J(){let F=at(),ht=436*I*Math.cos(yt),et=F.x+ht*Math.cos(tt),Nt=F.y-ht*Math.sin(tt);y.style.left=F.x-16+"px",y.style.top=Nt-22+"px",y.style.width=et-F.x+32+"px",y.style.height=F.y-Nt+44+"px"}function it(){let F=t.getBoundingClientRect();O=Math.max(1,F.width),H=Math.max(1,F.height),z=Math.min(window.devicePixelRatio||1,2),[p,_,g,m].forEach(function(et){et.width=Math.round(O*z),et.height=Math.round(H*z)}),x.setTransform(z,0,0,z,0,0);let ht=n();I=h((ht.w-70)/440,.55,1.2),E&&(E.setSize(O,H,!1),w.left=0,w.right=O,w.top=H,w.bottom=0,w.updateProjectionMatrix()),Et(),J()}let St=0,dt=0,rt=null,ot=0,vt="idle",kt=0,Tt=0,At=0,xt=0,Ht=null,Kt=null,G=1,bt=0,st=null,Mt=0,Pt=0,lt=!1,pt=!1;function ut(F,ht,et,Nt){Ht=jt,Kt=F,G=ht,bt=et,xt=0,vt=Nt}function $t(){let F=K[kt].strokes[Tt];At=0,st=F.pts[0],K[kt].started=!0}function mt(F){let ht=K[F];ht.full=!0,ht.started=!0,ht.state="morph",ht.t=0,s(F)}function te(F){F=Math.min(F,.05),ot+=F;let ht=!1;if(vt==="intro"||vt==="hop")xt+=F/G,jt=N(Ht,Kt,xt,bt),xt>=1&&(vt="write",$t());else if(vt==="write"){let et=K[kt],Nt=et.strokes[Tt],Zt=F*et.box.w*3.6;for(;Zt>0&&vt==="write";){let ge=Nt.len?At/Nt.len:1,we=(.55+.45*Math.pow(Math.sin(Math.PI*h(ge,.02,.98)),.5))*(st.rt?3:1),Be=Math.min(Zt,2.4),le=Math.min(Nt.len,At+Be*we),fe=zt(Nt,le);if(fe.rt||(ee(st,fe),ht=!0),st=fe,Zt-=Be,At=le,At>=Nt.len-.01){if(Tt+1<et.strokes.length){Tt++;let Ae=et.strokes[Tt].pts[0];ut(ct(Ae),.07+Math.hypot(Ae.x-fe.x,Ae.y-fe.y)/1800,10*I,"hop"),Ht=ct(fe)}else mt(kt),ht=!0,St=kt,dt=0,rt=ct(fe),vt="wait";break}}vt==="write"&&(jt=ct(st))}else if(vt==="wait"){dt+=F;let et={x:rt.x,y:rt.y,lift:26*I,el:rt.el,az:rt.az};if(jt=N(rt,et,dt/.28,0),K[St].state==="rest"&&dt>.3)if(jt=et,St+1<K.length){kt=St+1,Tt=0;let Nt=K[kt].strokes[0].pts[0];ut(ct(Nt),.5,14*I,"hop"),Ht=et}else ut(at(),.9,30*I,"return"),Ht=et}else vt==="return"&&(xt+=F/G,jt=N(Ht,Kt,xt,bt),xt>=1&&(jt=Kt,vt="done",pt=!0,y.style.pointerEvents="auto",o()));K.forEach(function(et){if(et.state==="morph"){if(et.t+=F,et.m=f(et.t/.3),et.tcol=et.m,It(et),ht=!0,et.t>=.32){et.state="slide",et.t=0,et.sd=0;let Nt=et.target.x-et.start.x,Zt=et.target.y-et.start.y;et.D=Math.hypot(Nt,Zt)||1,et.ux=Nt/et.D,et.uy=Zt/et.D,et.vmax=h(et.D*4.6,1300,3800)}}else if(et.state==="slide"){et.t+=F;let Nt=et.vmax*Math.min(1,et.t/.07);et.sd+=Nt*F,et.sd>=et.D&&(et.sd=et.D,et.p=0,et.pv=.36*Nt,et.state="bounce"),et.cur.x=et.start.x+et.ux*et.sd,et.cur.y=et.start.y+et.uy*et.sd,It(et),ht=!0}else if(et.state==="bounce"){for(let Zt=0;Zt<2;Zt++)et.pv+=(-289*et.p-34*et.pv)*(F/2),et.p+=et.pv*(F/2);et.sd=et.D-et.p,et.cur.x=et.start.x+et.ux*et.sd,et.cur.y=et.start.y+et.uy*et.sd,Math.abs(et.p)<.15&&Math.abs(et.pv)<4&&(et.state="rest",et.cur.x=et.target.x,et.cur.y=et.target.y,et.pill.classList.add("live")),It(et),ht=!0}}),ht&&Q(),_t(),S()}function Qt(){return K.some(function(F){return F.state==="morph"||F.state==="slide"||F.state==="bounce"})||Vt.length>0}function oe(F){let ht=Pt?(F-Pt)/1e3:.016;Pt=F,te(ht),vt!=="done"&&vt!=="idle"||Qt()?Mt=requestAnimationFrame(oe):(Mt=0,Pt=0)}function Xe(){x.setTransform(1,0,0,1,0,0),x.clearRect(0,0,g.width,g.height),x.setTransform(z,0,0,z,0,0),M.setTransform(1,0,0,1,0,0),M.clearRect(0,0,p.width,p.height),T.setTransform(z,0,0,z,0,0),T.clearRect(0,0,O,H),Vt=[],K.forEach(function(F){F.full=!1,F.tcol=0,F.started=!1,F.state="hidden",F.m=0,F.cur.x=F.start.x,F.cur.y=F.start.y,F.pill.classList.remove("live"),It(F)})}function ue(){Mt&&(cancelAnimationFrame(Mt),Mt=0),Xe(),K.forEach(function(F,ht){F.full=!0,F.started=!0,F.tcol=1,F.m=1,F.state="rest",F.cur.x=F.target.x,F.cur.y=F.target.y,F.pill.classList.add("live"),It(F),s(ht)}),Q(),jt=at(),vt="done",lt=!0,y.style.pointerEvents="auto",W(),S(),pt||(pt=!0,o())}function Oe(){if(lt)return;if(lt=!0,c){ue();return}Xe(),kt=0,Tt=0,pt=!1,ot=0,Xt=0,R=0,y.style.pointerEvents="none",jt=at(),W();let F=K[0].strokes[0].pts[0];ut(ct(F),.8,40*I,"intro"),Ht=jt,Pt=0,Mt=requestAnimationFrame(oe)}function je(){!pt&&lt||(Mt&&(cancelAnimationFrame(Mt),Mt=0),lt=!1,vt="idle",pt=!1,Xe(),a(),Oe())}y.addEventListener("click",je),y.addEventListener("keydown",function(F){(F.key==="Enter"||F.key===" ")&&(F.preventDefault(),je())});let Pe=0;function Ie(){Xt+=(R-Xt)*.18,Math.abs(R-Xt)<.01&&(Xt=R),S(),Xt!==R?Pe=requestAnimationFrame(Ie):Pe=0}function de(F){R=F,!Pe&&vt==="done"&&(Pe=requestAnimationFrame(Ie))}y.addEventListener("pointerenter",function(){de(1)}),y.addEventListener("pointerleave",function(){de(0)}),y.addEventListener("focus",function(){de(1)}),y.addEventListener("blur",function(){de(0)});let on=typeof ResizeObserver<"u"?new ResizeObserver(function(){let F=t.getBoundingClientRect();Math.abs(F.width-O)<1&&Math.abs(F.height-H)<1||(it(),lt?ue():(W(),jt=at(),S()))}):null;return on&&on.observe(t),it(),jt=at(),W(),S(),{play:Oe,replay:je,showNow:ue,step:te,hasPen:!!E,destroy:function(){Mt&&cancelAnimationFrame(Mt),on&&on.disconnect(),[p,_,y].forEach(function(F){F.remove()}),E&&(E.domElement.remove(),E.dispose())}}}function yr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function cm(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}var ei={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},gl={duration:.5,overwrite:!1,delay:0},z0,Tn,qe,Ti=1e8,Ve=1/Ti,R0=Math.PI*2,i5=R0/4,r5=0,hm=Math.sqrt,s5=Math.cos,o5=Math.sin,dn=function(t){return typeof t=="string"},tn=function(t){return typeof t=="function"},Mr=function(t){return typeof t=="number"},ru=function(t){return typeof t>"u"},sr=function(t){return typeof t=="object"},ti=function(t){return t!==!1},k0=function(){return typeof window<"u"},Zh=function(t){return tn(t)||dn(t)},um=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ln=Array.isArray,a5=/random\([^)]+\)/g,l5=/,\s*/g,em=/(?:-?\.?\d|\.)+/gi,V0=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ds=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,M0=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,G0=/[+-]=-?[.\d]+/,c5=/[^,'"\[\]\s]+/gi,h5=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,$e,ir,P0,H0,fi={},jh={},fm,dm=function(t){return(jh=zo(t,fi))&&Dn},su=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},_l=function(t,e){return!e&&console.warn(t)},pm=function(t,e){return t&&(fi[t]=e)&&jh&&(jh[t]=e)||fi},xl=function(){return 0},u5={suppressEvents:!0,isStart:!0,kill:!1},Jh={suppressEvents:!0,kill:!1},f5={suppressEvents:!0},W0={},ns=[],I0={},mm,Kn={},b0={},nm=30,$h=[],X0="",Q0=function(t){var e=t[0],n,i;if(sr(e)||tn(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=$h.length;i--&&!$h[i].targetTest(e););n=$h[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new J0(t[i],n)))||t.splice(i,1);return t},is=function(t){return t._gsap||Q0(wi(t))[0]._gsap},Y0=function(t,e,n){return(n=t[e])&&tn(n)?t[e]():ru(n)&&t.getAttribute&&t.getAttribute(e)||n},Gn=function(t,e){return(t=t.split(",")).forEach(e)||t},en=function(t){return Math.round(t*1e5)/1e5||0},Je=function(t){return Math.round(t*1e7)/1e7||0},Ns=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},d5=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},tu=function(){var t=ns.length,e=ns.slice(0),n,i;for(I0={},ns.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},q0=function(t){return!!(t._initted||t._startAt||t.add)},gm=function(t,e,n,i){ns.length&&!Tn&&tu(),t.render(e,n,i||!!(Tn&&e<0&&q0(t))),ns.length&&!Tn&&tu()},_m=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(c5).length<2?e:dn(t)?t.trim():t},xm=function(t){return t},di=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},p5=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},zo=function(t,e){for(var n in e)t[n]=e[n];return t},im=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=sr(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},eu=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},dl=function(t){var e=t.parent||$e,n=t.keyframes?p5(Ln(t.keyframes)):di;if(ti(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},m5=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},vm=function(t,e,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},ou=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},rs=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Ps=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},g5=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},L0=function(t,e,n,i){return t._startAt&&(Tn?t._startAt.revert(Jh):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},_5=function r(t){return!t||t._ts&&r(t.parent)},rm=function(t){return t._repeat?ko(t._tTime,t=t.duration()+t._rDelay)*t:0},ko=function(t,e){var n=Math.floor(t=Je(t/e));return t&&n===t?n-1:n},nu=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},au=function(t){return t._end=Je(t._start+(t._tDur/Math.abs(t._ts||t._rts||Ve)||0))},lu=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Je(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),au(t),n._dirty||Ps(n,t)),t},ym=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=nu(t.rawTime(),e),(!e._dur||Sl(0,e.totalDuration(),n)-e._tTime>Ve)&&e.render(n,!0)),Ps(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Ve}},rr=function(t,e,n,i){return e.parent&&rs(e),e._start=Je((Mr(n)?n:n||t!==$e?bi(t,n,e):t._time)+e._delay),e._end=Je(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),vm(t,e,"_first","_last",t._sort?"_start":0),D0(e)||(t._recent=e),i||ym(t,e),t._ts<0&&lu(t,t._tTime),t},Sm=function(t,e){return(fi.ScrollTrigger||su("scrollTrigger",e))&&fi.ScrollTrigger.create(e,t)},Mm=function(t,e,n,i,s){if(j0(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!Tn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&mm!==jn.frame)return ns.push(t),t._lazy=[s,i],1},x5=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},D0=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},v5=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&x5(t)&&!(!t._initted&&D0(t))||(t._ts<0||t._dp._ts<0)&&!D0(t))?0:1,a=t._rDelay,l=0,c,h,f;if(a&&t._repeat&&(l=Sl(0,t._tDur,e),h=ko(l,a),t._yoyo&&h&1&&(o=1-o),h!==ko(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||Tn||i||t._zTime===Ve||!e&&t._zTime){if(!t._initted&&Mm(t,e,i,n,l))return;for(f=t._zTime,t._zTime=e||(n?Ve:0),n||(n=e&&!f),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&L0(t,e,n,!0),t._onUpdate&&!n&&ui(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&ui(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&rs(t,1),!n&&!Tn&&(ui(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},y5=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Vo=function(t,e,n,i){var s=t._repeat,o=Je(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:Je(o*(s+1)+t._rDelay*s):o,a>0&&!i&&lu(t,t._tTime=t._tDur*a),t.parent&&au(t),n||Ps(t.parent,t),t},sm=function(t){return t instanceof In?Ps(t):Vo(t,t._dur)},S5={_start:0,endTime:xl,totalDuration:xl},bi=function r(t,e,n){var i=t.labels,s=t._recent||S5,o=t.duration()>=Ti?s.endTime(!1):t._dur,a,l,c;return dn(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(Ln(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},pl=function(t,e,n){var i=Mr(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ti(l.vars.inherit)&&l.parent;o.immediateRender=ti(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new sn(e[0],o,e[s+1])},ss=function(t,e){return t||t===0?e(t):e},Sl=function(t,e,n){return n<t?t:n>e?e:n},wn=function(t,e){return!dn(t)||!(e=h5.exec(t))?"":e[1]},M5=function(t,e,n){return ss(n,function(i){return Sl(t,e,i)})},N0=[].slice,bm=function(t,e){return t&&sr(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&sr(t[0]))&&!t.nodeType&&t!==ir},b5=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return dn(i)&&!e||bm(i,1)?(s=n).push.apply(s,wi(i)):n.push(i)})||n},wi=function(t,e,n){return qe&&!e&&qe.selector?qe.selector(t):dn(t)&&!n&&(P0||!Go())?N0.call((e||H0).querySelectorAll(t),0):Ln(t)?b5(t,n):bm(t)?N0.call(t,0):t?[t]:[]},U0=function(t){return t=wi(t)[0]||_l("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return wi(e,n.querySelectorAll?n:n===t?_l("Invalid scope")||H0.createElement("div"):t)}},Tm=function(t){return t.sort(function(){return .5-Math.random()})},wm=function(t){if(tn(t))return t;var e=sr(t)?t:{each:t},n=Is(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,f=i;return dn(i)?h=f={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],f=i[1]),function(u,d,p){var _=(p||e).length,g=o[_],m,M,T,x,b,y,E,v,w;if(!g){if(w=e.grid==="auto"?0:(e.grid||[1,Ti])[1],!w){for(E=-Ti;E<(E=p[w++].getBoundingClientRect().left)&&w<_;);w<_&&w--}for(g=o[_]=[],m=l?Math.min(w,_)*h-.5:i%w,M=w===Ti?0:l?_*f/w-.5:i/w|0,E=0,v=Ti,y=0;y<_;y++)T=y%w-m,x=M-(y/w|0),g[y]=b=c?Math.abs(c==="y"?x:T):hm(T*T+x*x),b>E&&(E=b),b<v&&(v=b);i==="random"&&Tm(g),g.max=E-v,g.min=v,g.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(w>_?_-1:c?c==="y"?_/w:w:Math.max(w,_/w))||0)*(i==="edges"?-1:1),g.b=_<0?s-_:s,g.u=wn(e.amount||e.each)||0,n=n&&_<0?O5(n):n}return _=(g[u]-g.min)/g.max||0,Je(g.b+(n?n(_):_)*g.v)+g.u}},O0=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Je(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Mr(n)?0:wn(n))}},Em=function(t,e){var n=Ln(t),i,s;return!n&&sr(t)&&(i=n=t.radius||Ti,t.values?(t=wi(t.values),(s=!Mr(t[0]))&&(i*=i)):t=O0(t.increment)),ss(e,n?tn(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Ti,h=0,f=t.length,u,d;f--;)s?(u=t[f].x-a,d=t[f].y-l,u=u*u+d*d):u=Math.abs(t[f]-a),u<c&&(c=u,h=f);return h=!i||c<=i?t[h]:o,s||h===o||Mr(o)?h:h+wn(o)}:O0(t))},Am=function(t,e,n,i){return ss(Ln(t)?!e:n===!0?!!(n=0):!i,function(){return Ln(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},T5=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},w5=function(t,e){return function(n){return t(parseFloat(n))+(e||wn(n))}},E5=function(t,e,n){return Rm(t,e,0,1,n)},Cm=function(t,e,n){return ss(n,function(i){return t[~~e(i)]})},A5=function r(t,e,n){var i=e-t;return Ln(t)?Cm(t,r(0,t.length),e):ss(n,function(s){return(i+(s-t)%i)%i+t})},C5=function r(t,e,n){var i=e-t,s=i*2;return Ln(t)?Cm(t,r(0,t.length-1),e):ss(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},Ho=function(t){return t.replace(a5,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(l5);return Am(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Rm=function(t,e,n,i,s){var o=e-t,a=i-n;return ss(s,function(l){return n+((l-t)/o*a||0)})},R5=function r(t,e,n,i){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var o=dn(t),a={},l,c,h,f,u;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(Ln(t)&&!Ln(e)){for(h=[],f=t.length,u=f-2,c=1;c<f;c++)h.push(r(t[c-1],t[c]));f--,s=function(p){p*=f;var _=Math.min(u,~~p);return h[_](p-_)},n=e}else i||(t=zo(Ln(t)?[]:{},t));if(!h){for(l in e)$0.call(a,t,l,"get",e[l]);s=function(p){return nd(p,a)||(o?t.p:t)}}}return ss(n,s)},om=function(t,e,n){var i=t.labels,s=Ti,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},ui=function(t,e,n){var i=t.vars,s=i[e],o=qe,a=t._ctx,l,c,h;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&ns.length&&tu(),a&&(qe=a),h=l?s.apply(c,l):s.call(c),qe=o,h},ul=function(t){return rs(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Tn),t.progress()<1&&ui(t,"onInterrupt"),t},Bo,Pm=[],Im=function(t){if(t)if(t=!t.name&&t.default||t,k0()||t.headless){var e=t.name,n=tn(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:xl,render:nd,add:$0,kill:Q5,modifier:X5,rawVars:0},o={targetTest:0,get:0,getSetter:cu,aliases:{},register:0};if(Go(),t!==i){if(Kn[e])return;di(i,di(eu(t,s),o)),zo(i.prototype,zo(s,eu(t,o))),Kn[i.prop=e]=i,t.targetTest&&($h.push(i),W0[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}pm(e,i),t.register&&t.register(Dn,i,Hn)}else Pm.push(t)},ke=255,fl={aqua:[0,ke,ke],lime:[0,ke,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ke],navy:[0,0,128],white:[ke,ke,ke],olive:[128,128,0],yellow:[ke,ke,0],orange:[ke,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ke,0,0],pink:[ke,192,203],cyan:[0,ke,ke],transparent:[ke,ke,ke,0]},T0=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*ke+.5|0},Lm=function(t,e,n){var i=t?Mr(t)?[t>>16,t>>8&ke,t&ke]:0:fl.black,s,o,a,l,c,h,f,u,d,p;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),fl[t])i=fl[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&ke,i&ke,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&ke,t&ke]}else if(t.substr(0,3)==="hsl"){if(i=p=t.match(em),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,i.length>3&&(i[3]*=1),i[0]=T0(l+1/3,s,o),i[1]=T0(l,s,o),i[2]=T0(l-1/3,s,o);else if(~t.indexOf("="))return i=t.match(V0),n&&i.length<4&&(i[3]=1),i}else i=t.match(em)||fl.transparent;i=i.map(Number)}return e&&!p&&(s=i[0]/ke,o=i[1]/ke,a=i[2]/ke,f=Math.max(s,o,a),u=Math.min(s,o,a),h=(f+u)/2,f===u?l=c=0:(d=f-u,c=h>.5?d/(2-f-u):d/(f+u),l=f===s?(o-a)/d+(o<a?6:0):f===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Dm=function(t){var e=[],n=[],i=-1;return t.split(Sr).forEach(function(s){var o=s.match(Ds)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},am=function(t,e,n){var i="",s=(t+i).match(Sr),o=e?"hsla(":"rgba(",a=0,l,c,h,f;if(!s)return t;if(s=s.map(function(u){return(u=Lm(u,e,1))&&o+(e?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(h=Dm(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(Sr,"1").split(Ds),f=c.length-1;a<f;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(Sr),f=c.length-1;a<f;a++)i+=c[a]+s[a];return i+c[f]},Sr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in fl)r+="|"+t+"\\b";return new RegExp(r+")","gi")})(),P5=/hsl[a]?\(/,Z0=function(t){var e=t.join(" "),n;if(Sr.lastIndex=0,Sr.test(e))return n=P5.test(e),t[1]=am(t[1],n),t[0]=am(t[0],n,Dm(t[1])),!0},vl,jn=(function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,h,f,u,d,p=function _(g){var m=r()-i,M=g===!0,T,x,b,y;if((m>t||m<0)&&(n+=m-e),i+=m,b=i-n,T=b-o,(T>0||M)&&(y=++f.frame,u=b-f.time*1e3,f.time=b=b/1e3,o+=T+(T>=s?4:s-T),x=1),M||(l=c(_)),x)for(d=0;d<a.length;d++)a[d](b,u,y,g)};return f={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(g){return u/(1e3/(g||60))},wake:function(){fm&&(!P0&&k0()&&(ir=P0=window,H0=ir.document||{},fi.gsap=Dn,(ir.gsapVersions||(ir.gsapVersions=[])).push(Dn.version),dm(jh||ir.GreenSockGlobals||!ir.gsap&&ir||{}),Pm.forEach(Im)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=h||function(g){return setTimeout(g,o-f.time*1e3+1|0)},vl=1,p(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),vl=0,c=xl},lagSmoothing:function(g,m){t=g||1/0,e=Math.min(m||33,t)},fps:function(g){s=1e3/(g||240),o=f.time*1e3+s},add:function(g,m,M){var T=m?function(x,b,y,E){g(x,b,y,E),f.remove(T)}:g;return f.remove(g),a[M?"unshift":"push"](T),Go(),T},remove:function(g,m){~(m=a.indexOf(g))&&a.splice(m,1)&&d>=m&&d--},_listeners:a},f})(),Go=function(){return!vl&&jn.wake()},Te={},I5=/^[\d.\-M][\d.\-,\s]/,L5=/["']/g,D5=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(L5,"").trim():+c,i=l.substr(a+1).trim();return e},N5=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},U5=function(t){var e=(t+"").split("("),n=Te[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[D5(e[1])]:N5(t).split(",").map(_m)):Te._CE&&I5.test(t)?Te._CE("",t):n},O5=function(t){return function(e){return 1-t(1-e)}},Is=function(t,e){return t&&(tn(t)?t:Te[t]||U5(t))||e},Us=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return Gn(t,function(a){Te[a]=fi[a]=s,Te[o=a.toLowerCase()]=n;for(var l in s)Te[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Te[a+"."+l]=s[l]}),s},Nm=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},w0=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/R0*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*o5((h-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:Nm(a);return s=R0/s,l.config=function(c,h){return r(t,c,h)},l},E0=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Nm(n);return i.config=function(s){return r(t,s)},i};Gn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;Us(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Te.Linear.easeNone=Te.none=Te.Linear.easeIn;Us("Elastic",w0("in"),w0("out"),w0());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};Us("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Us("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Us("Circ",function(r){return-(hm(1-r*r)-1)});Us("Sine",function(r){return r===1?1:-s5(r*i5)+1});Us("Back",E0("in"),E0("out"),E0());Te.SteppedEase=Te.steps=fi.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-Ve;return function(a){return((i*Sl(0,o,a)|0)+s)*n}}};gl.ease=Te["quad.out"];Gn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return X0+=r+","+r+"Params,"});var J0=function(t,e){this.id=r5++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Y0,this.set=e?e.getSetter:cu},yl=(function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Vo(this,+e.duration,1,1),this.data=e.data,qe&&(this._ctx=qe,qe.data.push(this)),vl||jn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Vo(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Go(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(lu(this,n),!s._dp||s.parent||ym(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&rr(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Ve||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),gm(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+rm(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+rm(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?ko(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Ve?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?nu(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ve?0:this._rts,this.totalTime(Sl(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),au(this),g5(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Go(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ve&&(this._tTime-=Ve)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=Je(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&rr(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(ti(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?nu(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=f5);var i=Tn;return Tn=n,q0(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Tn=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,sm(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,sm(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(bi(this,n),ti(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,ti(i)),this._dur||(this._zTime=-Ve),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ve:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ve,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Ve)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=tn(n)?n:xm,l=function(){var h=i.then;i.then=null,s&&s(),tn(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=h),o(a),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){ul(this)},r})();di(yl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ve,_prom:0,_ps:!1,_rts:1});var In=(function(r){cm(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=ti(n.sortChildren),$e&&rr(n.parent||$e,yr(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Sm(yr(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return pl(0,arguments,this),this},e.from=function(i,s,o){return pl(1,arguments,this),this},e.fromTo=function(i,s,o,a){return pl(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,dl(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new sn(i,s,bi(this,o),1),this},e.call=function(i,s,o){return rr(this,sn.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new sn(i,o,bi(this,l)),this},e.staggerFrom=function(i,s,o,a,l,c,h){return o.runBackwards=1,dl(o).immediateRender=ti(o.immediateRender),this.staggerTo(i,s,o,a,l,c,h)},e.staggerFromTo=function(i,s,o,a,l,c,h,f){return a.startAt=o,dl(a).immediateRender=ti(a.immediateRender),this.staggerTo(i,s,a,l,c,h,f)},e.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Je(i),f=this._zTime<0!=i<0&&(this._initted||!c),u,d,p,_,g,m,M,T,x,b,y,E;if(this!==$e&&h>l&&i>=0&&(h=l),h!==this._tTime||o||f){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),u=h,x=this._start,T=this._ts,m=!T,f&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(y=this._yoyo,g=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(g*100+i,s,o);if(u=Je(h%g),h===l?(_=this._repeat,u=c):(b=Je(h/g),_=~~b,_&&_===b&&(u=c,_--),u>c&&(u=c)),b=ko(this._tTime,g),!a&&this._tTime&&b!==_&&this._tTime-b*g-this._dur<=0&&(b=_),y&&_&1&&(u=c-u,E=1),_!==b&&!this._lock){var v=y&&b&1,w=v===(y&&_&1);if(_<b&&(v=!v),a=v?0:h%c?c:h,this._lock=1,this.render(a||(E?0:Je(_*g)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&ui(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,b=_),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,w&&(this._lock=2,a=v?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=y5(this,Je(a),Je(u)),M&&(h-=u-(u=M._start))),this._tTime=h,this._time=u,this._act=!!T,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&c&&!s&&!b&&(ui(this,"onStart"),this._tTime!==h))return this;if(u>=a&&i>=0)for(d=this._first;d;){if(p=d._next,(d._act||u>=d._start)&&d._ts&&M!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(u-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(u-d._start)*d._ts,s,o),u!==this._time||!this._ts&&!m){M=0,p&&(h+=this._zTime=-Ve);break}}d=p}else{d=this._last;for(var C=i<0?i:u;d;){if(p=d._prev,(d._act||C<=d._end)&&d._ts&&M!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(C-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(C-d._start)*d._ts,s,o||Tn&&q0(d)),u!==this._time||!this._ts&&!m){M=0,p&&(h+=this._zTime=C?-Ve:Ve);break}}d=p}}if(M&&!s&&(this.pause(),M.render(u>=a?0:-Ve)._zTime=u>=a?1:-1,this._ts))return this._start=x,au(this),this.render(i,s,o);this._onUpdate&&!s&&ui(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(x===this._start||Math.abs(T)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&rs(this,1),!s&&!(i<0&&!a)&&(h||a||!l)&&(ui(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if(Mr(s)||(s=bi(this,s,i)),!(i instanceof yl)){if(Ln(i))return i.forEach(function(a){return o.add(a,s)}),this;if(dn(i))return this.addLabel(i,s);if(tn(i))i=sn.delayedCall(0,i);else return this}return this!==i?rr(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Ti);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof sn?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return dn(i)?this.removeLabel(i):tn(i)?this.killTweensOf(i):(i.parent===this&&ou(this,i),i===this._recent&&(this._recent=this._last),Ps(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Je(jn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=bi(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=sn.delayedCall(0,s||xl,o);return a.data="isPause",this._hasPause=1,rr(this,a,bi(this,i))},e.removePause=function(i){var s=this._first;for(i=bi(this,i);s;)s._start===i&&s.data==="isPause"&&rs(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)es!==a[l]&&a[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=wi(i),l=this._first,c=Mr(s),h;l;)l instanceof sn?d5(l._targets,a)&&(c?(!es||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=bi(o,i),l=s,c=l.startAt,h=l.onStart,f=l.onStartParams,u=l.immediateRender,d,p=sn.to(o,di({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Ve,onStart:function(){if(o.pause(),!d){var g=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());p._dur!==g&&Vo(p,g,0,1).render(p._time,!0,!0),d=1}h&&h.apply(p,f||[])}},s));return u?p.render(0):p},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,di({startAt:{time:bi(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),om(this,bi(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),om(this,bi(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Ve)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Je(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Ps(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ps(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,l=Ti,c,h,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,rr(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=Je(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Vo(o,o===$e&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if($e._ts&&(gm($e,nu(i,$e)),mm=jn.frame),jn.frame>=nm){nm+=ei.autoSleep||120;var s=$e._first;if((!s||!s._ts)&&ei.autoSleep&&jn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||jn.sleep()}}},t})(yl);di(In.prototype,{_lock:0,_hasPause:0,_forcing:0});var F5=function(t,e,n,i,s,o,a){var l=new Hn(this._pt,t,e,0,1,ed,null,s),c=0,h=0,f,u,d,p,_,g,m,M;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Ho(i)),o&&(M=[n,i],o(M,t,e),n=M[0],i=M[1]),u=n.match(M0)||[];f=M0.exec(i);)p=f[0],_=i.substring(c,f.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),p!==u[h++]&&(g=parseFloat(u[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:g,c:p.charAt(1)==="="?Ns(g,p)-g:parseFloat(p)-g,m:d&&d<4?Math.round:0},c=M0.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(G0.test(i)||m)&&(l.e=0),this._pt=l,l},$0=function(t,e,n,i,s,o,a,l,c,h){tn(i)&&(i=i(s||0,t,o));var f=t[e],u=n!=="get"?n:tn(f)?c?t[e.indexOf("set")||!tn(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():f,d=tn(f)?c?G5:Fm:td,p;if(dn(i)&&(~i.indexOf("random(")&&(i=Ho(i)),i.charAt(1)==="="&&(p=Ns(u,i)+(wn(u)||0),(p||p===0)&&(i=p))),!h||u!==i||F0)return!isNaN(u*i)&&i!==""?(p=new Hn(this._pt,t,e,+u||0,i-(u||0),typeof f=="boolean"?W5:Bm,0,d),c&&(p.fp=c),a&&p.modifier(a,this,t),this._pt=p):(!f&&!(e in t)&&su(e,i),F5.call(this,t,e,u,i,d,l||ei.stringFilter,c))},B5=function(t,e,n,i,s){if(tn(t)&&(t=ml(t,s,e,n,i)),!sr(t)||t.style&&t.nodeType||Ln(t)||um(t))return dn(t)?ml(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=ml(t[a],s,e,n,i);return o},K0=function(t,e,n,i,s,o){var a,l,c,h;if(Kn[t]&&(a=new Kn[t]).init(s,a.rawVars?e[t]:B5(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Hn(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==Bo))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},es,F0,j0=function r(t,e,n){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,f=i.yoyoEase,u=i.keyframes,d=i.autoRevert,p=t._dur,_=t._startAt,g=t._targets,m=t.parent,M=m&&m.data==="nested"?m.vars.targets:g,T=t._overwrite==="auto"&&!z0,x=t.timeline,b=i.easeReverse||f,y,E,v,w,C,L,D,V,I,O,H,z,nt;if(x&&(!u||!s)&&(s="none"),t._ease=Is(s,gl.ease),t._rEase=b&&(Is(b)||t._ease),t._from=!x&&!!i.runBackwards,t._from&&(t.ratio=1),!x||u&&!i.stagger){if(V=g[0]?is(g[0]).harness:0,z=V&&i[V.prop],y=eu(i,W0),_&&(_._zTime<0&&_.progress(1),e<0&&h&&a&&!d?_.render(-1,!0):_.revert(h&&p?Jh:u5),_._lazy=0),o){if(rs(t._startAt=sn.set(g,di({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&ti(l),startAt:null,delay:0,onUpdate:c&&function(){return ui(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Tn||!a&&!d)&&t._startAt.revert(Jh),a&&p&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&p&&!_){if(e&&(a=!1),v=di({overwrite:!1,data:"isFromStart",lazy:a&&!_&&ti(l),immediateRender:a,stagger:0,parent:m},y),z&&(v[V.prop]=z),rs(t._startAt=sn.set(g,v)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Tn?t._startAt.revert(Jh):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,Ve,Ve);else if(!e)return}for(t._pt=t._ptCache=0,l=p&&ti(l)||l&&!p,E=0;E<g.length;E++){if(C=g[E],D=C._gsap||Q0(g)[E]._gsap,t._ptLookup[E]=O={},I0[D.id]&&ns.length&&tu(),H=M===g?E:M.indexOf(C),V&&(I=new V).init(C,z||y,t,H,M)!==!1&&(t._pt=w=new Hn(t._pt,C,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function($){O[$]=w}),I.priority&&(L=1)),!V||z)for(v in y)Kn[v]&&(I=K0(v,y,t,H,C,M))?I.priority&&(L=1):O[v]=w=$0.call(t,C,v,"get",y[v],H,M,0,i.stringFilter);t._op&&t._op[E]&&t.kill(C,t._op[E]),T&&t._pt&&(es=t,$e.killTweensOf(C,O,t.globalTime(e)),nt=!t.parent,es=0),t._pt&&l&&(I0[D.id]=1)}L&&id(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!nt,u&&e<=0&&x.render(Ti,!0,!0)},z5=function(t,e,n,i,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,f,u,d;if(!c)for(c=t._ptCache[e]=[],u=t._ptLookup,d=t._targets.length;d--;){if(h=u[d][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return F0=1,t.vars[e]="+=0",j0(t,a),F0=0,l?_l(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(d=c.length;d--;)f=c[d],h=f._pt||f,h.s=(i||i===0)&&!s?i:h.s+(i||0)+o*h.c,h.c=n-h.s,f.e&&(f.e=en(n)+wn(f.e)),f.b&&(f.b=h.s+wn(f.b))},k5=function(t,e){var n=t[0]?is(t[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return e;s=zo({},e);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},V5=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(Ln(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},ml=function(t,e,n,i,s){return tn(t)?t.call(e,n,i,s):dn(t)&&~t.indexOf("random(")?Ho(t):t},Um=X0+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Om={};Gn(Um+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Om[r]=1});var sn=(function(r){cm(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:dl(i))||this;var l=a.vars,c=l.duration,h=l.delay,f=l.immediateRender,u=l.stagger,d=l.overwrite,p=l.keyframes,_=l.defaults,g=l.scrollTrigger,m=i.parent||$e,M=(Ln(n)||um(n)?Mr(n[0]):"length"in i)?[n]:wi(n),T,x,b,y,E,v,w,C;if(a._targets=M.length?Q0(M):_l("GSAP target "+n+" not found. https://gsap.com",!ei.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,p||u||Zh(c)||Zh(h)){i=a.vars;var L=i.easeReverse||i.yoyoEase;if(T=a.timeline=new In({data:"nested",defaults:_||{},targets:m&&m.data==="nested"?m.vars.targets:M}),T.kill(),T.parent=T._dp=yr(a),T._start=0,u||Zh(c)||Zh(h)){if(y=M.length,w=u&&wm(u),sr(u))for(E in u)~Um.indexOf(E)&&(C||(C={}),C[E]=u[E]);for(x=0;x<y;x++)b=eu(i,Om),b.stagger=0,L&&(b.easeReverse=L),C&&zo(b,C),v=M[x],b.duration=+ml(c,yr(a),x,v,M),b.delay=(+ml(h,yr(a),x,v,M)||0)-a._delay,!u&&y===1&&b.delay&&(a._delay=h=b.delay,a._start+=h,b.delay=0),T.to(v,b,w?w(x,v,M):0),T._ease=Te.none;T.duration()?c=h=0:a.timeline=0}else if(p){dl(di(T.vars.defaults,{ease:"none"})),T._ease=Is(p.ease||i.ease||"none");var D=0,V,I,O;if(Ln(p))p.forEach(function(H){return T.to(M,H,">")}),T.duration();else{b={};for(E in p)E==="ease"||E==="easeEach"||V5(E,p[E],b,p.easeEach);for(E in b)for(V=b[E].sort(function(H,z){return H.t-z.t}),D=0,x=0;x<V.length;x++)I=V[x],O={ease:I.e,duration:(I.t-(x?V[x-1].t:0))/100*c},O[E]=I.v,T.to(M,O,D),D+=O.duration;T.duration()<c&&T.to({},{duration:c-T.duration()})}}c||a.duration(c=T.duration())}else a.timeline=0;return d===!0&&!z0&&(es=yr(a),$e.killTweensOf(M),es=0),rr(m,yr(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(f||!c&&!p&&a._start===Je(m._time)&&ti(f)&&_5(yr(a))&&m.data!=="nested")&&(a._tTime=-Ve,a.render(Math.max(0,-h)||0)),g&&Sm(yr(a),g),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,f=i>l-Ve&&!h?l:i<Ve?0:i,u,d,p,_,g,m,M,T;if(!c)v5(this,i,s,o);else if(f!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(u=f,T=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,s,o);if(u=Je(f%_),f===l?(p=this._repeat,u=c):(g=Je(f/_),p=~~g,p&&p===g?(u=c,p--):u>c&&(u=c)),m=this._yoyo&&p&1,m&&(u=c-u),g=ko(this._tTime,_),u===a&&!o&&this._initted&&p===g)return this._tTime=f,this;p!==g&&this.vars.repeatRefresh&&!m&&!this._lock&&u!==_&&this._initted&&(this._lock=o=1,this.render(Je(_*p),!0).invalidate()._lock=0)}if(!this._initted){if(Mm(this,h?i:u,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&p!==g))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._rEase){var x=u<a;if(x!==this._inv){var b=x?a:c-a;this._inv=x,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=b?(x?-1:1)/b:0,this._invScale=x?-this.ratio:1-this.ratio,this._invEase=x?this._rEase:this._ease}this.ratio=M=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=M=this._ease(u/c);if(this._from&&(this.ratio=M=1-M),this._tTime=f,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&f&&!s&&!g&&(ui(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(M,d.d),d=d._next;T&&T.render(i<0?i:T._dur*T._ease(u/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&L0(this,i,s,o),ui(this,"onUpdate")),this._repeat&&p!==g&&this.vars.onRepeat&&!s&&this.parent&&ui(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(h&&!this._onUpdate&&L0(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&rs(this,1),!s&&!(h&&!a)&&(f||a||m)&&(ui(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,o,a,l){vl||jn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||j0(this,c),h=this._ease(c/this._dur),z5(this,i,s,o,a,h,c,l)?this.resetTo(i,s,o,a,1):(lu(this,0),this.parent||vm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ul(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Tn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,es&&es.vars.overwrite!==!0)._first||ul(this),this.parent&&o!==this.timeline.totalDuration()&&Vo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?wi(i):a,c=this._ptLookup,h=this._pt,f,u,d,p,_,g,m;if((!s||s==="all")&&m5(a,l))return s==="all"&&(this._pt=0),ul(this);for(f=this._op=this._op||[],s!=="all"&&(dn(s)&&(_={},Gn(s,function(M){return _[M]=1}),s=_),s=k5(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){u=c[m],s==="all"?(f[m]=s,p=u,d={}):(d=f[m]=f[m]||{},p=s);for(_ in p)g=u&&u[_],g&&((!("kill"in g.d)||g.d.kill(_)===!0)&&ou(this,g,"_pt"),delete u[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&h&&ul(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return pl(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return pl(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return $e.killTweensOf(i,s,o)},t})(yl);di(sn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Gn("staggerTo,staggerFrom,staggerFromTo",function(r){sn[r]=function(){var t=new In,e=N0.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var td=function(t,e,n){return t[e]=n},Fm=function(t,e,n){return t[e](n)},G5=function(t,e,n,i){return t[e](i.fp,n)},H5=function(t,e,n){return t.setAttribute(e,n)},cu=function(t,e){return tn(t[e])?Fm:ru(t[e])&&t.setAttribute?H5:td},Bm=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},W5=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},ed=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},nd=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},X5=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},Q5=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?ou(this,e,"_pt"):e.dep||(n=1),e=i;return!n},Y5=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},id=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},Hn=(function(){function r(e,n,i,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Bm,this.d=l||this,this.set=c||td,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Y5,this.m=n,this.mt=s,this.tween=i},r})();Gn(X0+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return W0[r]=1});fi.TweenMax=fi.TweenLite=sn;fi.TimelineLite=fi.TimelineMax=In;$e=new In({sortChildren:!1,defaults:gl,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ei.stringFilter=Z0;var Ls=[],Kh={},q5=[],lm=0,Z5=0,A0=function(t){return(Kh[t]||q5).map(function(e){return e()})},B0=function(){var t=Date.now(),e=[];t-lm>2&&(A0("matchMediaInit"),Ls.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=ir.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),A0("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),lm=t,A0("matchMedia"))},zm=(function(){function r(e,n){this.selector=n&&U0(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Z5++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){tn(n)&&(s=i,i=n,n=tn);var o=this,a=function(){var c=qe,h=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=U0(s)),qe=o,f=i.apply(o,arguments),tn(f)&&o._r.push(f),qe=c,o.selector=h,o.isReverted=!1,f};return o.last=a,n===tn?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=qe;qe=null,n(this),qe=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof sn&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,f){return f.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof In?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof sn)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Ls.length;o--;)Ls[o].id===this.id&&Ls.splice(o,1)},t.revert=function(n){this.kill(n||{})},r})(),J5=(function(){function r(e){this.contexts=[],this.scope=e,qe&&qe.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){sr(n)||(n={matches:n});var o=new zm(0,s||this.scope),a=o.conditions={},l,c,h;qe&&!o.selector&&(o.selector=qe.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=ir.matchMedia(n[c]),l&&(Ls.indexOf(o)<0&&Ls.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(B0):l.addEventListener("change",B0)));return h&&i(o,function(f){return o.add(null,f)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),iu={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Im(i)})},timeline:function(t){return new In(t)},getTweensOf:function(t,e){return $e.getTweensOf(t,e)},getProperty:function(t,e,n,i){dn(t)&&(t=wi(t)[0]);var s=is(t||{}).get,o=n?xm:_m;return n==="native"&&(n=""),t&&(e?o((Kn[e]&&Kn[e].get||s)(t,e,n,i)):function(a,l,c){return o((Kn[a]&&Kn[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=wi(t),t.length>1){var i=t.map(function(h){return Dn.quickSetter(h,e,n)}),s=i.length;return function(h){for(var f=s;f--;)i[f](h)}}t=t[0]||{};var o=Kn[e],a=is(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var f=new o;Bo._pt=0,f.init(t,n?h+n:h,Bo,0,[t]),f.render(1,f),Bo._pt&&nd(1,Bo)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,s=Dn.to(t,di((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return s.resetTo(e,l,c,h)};return o.tween=s,o},isTweening:function(t){return $e.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Is(t.ease,gl.ease)),im(gl,t||{})},config:function(t){return im(ei,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Kn[a]&&!fi[a]&&_l(e+" effect requires "+a+" plugin.")}),b0[e]=function(a,l,c){return n(wi(a),di(l||{},s),c)},o&&(In.prototype[e]=function(a,l,c){return this.add(b0[e](a,sr(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Te[t]=Is(e)},parseEase:function(t,e){return arguments.length?Is(t,e):Te},getById:function(t){return $e.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new In(t),i,s;for(n.smoothChildTiming=ti(t.smoothChildTiming),$e.remove(n),n._dp=0,n._time=n._tTime=$e._time,i=$e._first;i;)s=i._next,(e||!(!i._dur&&i instanceof sn&&i.vars.onComplete===i._targets[0]))&&rr(n,i,i._start-i._delay),i=s;return rr($e,n,0),n},context:function(t,e){return t?new zm(t,e):qe},matchMedia:function(t){return new J5(t)},matchMediaRefresh:function(){return Ls.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||B0()},addEventListener:function(t,e){var n=Kh[t]||(Kh[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Kh[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:A5,wrapYoyo:C5,distribute:wm,random:Am,snap:Em,normalize:E5,getUnit:wn,clamp:M5,splitColor:Lm,toArray:wi,selector:U0,mapRange:Rm,pipe:T5,unitize:w5,interpolate:R5,shuffle:Tm},install:dm,effects:b0,ticker:jn,updateRoot:In.updateRoot,plugins:Kn,globalTimeline:$e,core:{PropTween:Hn,globals:pm,Tween:sn,Timeline:In,Animation:yl,getCache:is,_removeLinkedListItem:ou,reverting:function(){return Tn},context:function(t){return t&&qe&&(qe.data.push(t),t._ctx=qe),qe},suppressOverwrites:function(t){return z0=t}}};Gn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return iu[r]=sn[r]});jn.add(In.updateRoot);Bo=iu.to({},{duration:0});var $5=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},K5=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=$5(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},C0=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(dn(s)&&(l={},Gn(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}K5(a,s)}}}},Dn=iu.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)Tn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},C0("roundProps",O0),C0("modifiers"),C0("snap",Em))||iu;sn.version=In.version=Dn.version="3.15.0";fm=1;k0()&&Go();var j5=Te.Power0,tM=Te.Power1,eM=Te.Power2,nM=Te.Power3,iM=Te.Power4,rM=Te.Linear,sM=Te.Quad,oM=Te.Cubic,aM=Te.Quart,lM=Te.Quint,cM=Te.Strong,hM=Te.Elastic,uM=Te.Back,fM=Te.SteppedEase,dM=Te.Bounce,pM=Te.Sine,mM=Te.Expo,gM=Te.Circ;var km,os,Xo,cd,zs,_M,Vm,hd,xM=function(){return typeof window<"u"},Tr={},Bs=180/Math.PI,Qo=Math.PI/180,Wo=Math.atan2,Gm=1e8,ud=/([A-Z])/g,vM=/(left|right|width|margin|padding|x)/i,yM=/[\s,\(]\S/,or={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},sd=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},SM=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},MM=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},bM=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},TM=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Jm=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},$m=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},wM=function(t,e,n){return t.style[e]=n},EM=function(t,e,n){return t.style.setProperty(e,n)},AM=function(t,e,n){return t._gsap[e]=n},CM=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},RM=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},PM=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},Ke="transform",ni=Ke+"Origin",IM=function r(t,e){var n=this,i=this.target,s=i.style,o=i._gsap;if(t in Tr&&s){if(this.tfm=this.tfm||{},t!=="transform")t=or[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=br(i,a)}):this.tfm[t]=o.x?o[t]:br(i,t),t===ni&&(this.tfm.zOrigin=o.zOrigin);else return or.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(Ke)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(ni,e,"")),t=Ke}(s||e)&&this.props.push(t,e,s[t])},Km=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},LM=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(ud,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=hd(),(!s||!s.isStart)&&!n[Ke]&&(Km(n),i.zOrigin&&n[ni]&&(n[ni]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},jm=function(t,e){var n={target:t,props:[],revert:LM,save:IM};return t._gsap||Dn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},tg,od=function(t,e){var n=os.createElementNS?os.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):os.createElement(t);return n&&n.style?n:os.createElement(t)},pi=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(ud,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,Yo(e)||e,1)||""},Hm="O,Moz,ms,Ms,Webkit".split(","),Yo=function(t,e,n){var i=e||zs,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Hm[o]+t in s););return o<0?null:(o===3?"ms":o>=0?Hm[o]:"")+t},ad=function(){xM()&&window.document&&(km=window,os=km.document,Xo=os.documentElement,zs=od("div")||{style:{}},_M=od("div"),Ke=Yo(Ke),ni=Ke+"Origin",zs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",tg=!!Yo("perspective"),hd=Dn.core.reverting,cd=1)},Wm=function(t){var e=t.ownerSVGElement,n=od("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Xo.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Xo.removeChild(n),s},Xm=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},eg=function(t){var e,n;try{e=t.getBBox()}catch{e=Wm(t),n=1}return e&&(e.width||e.height)||n||(e=Wm(t)),e&&!e.width&&!e.x&&!e.y?{x:+Xm(t,["x","cx","x1"])||0,y:+Xm(t,["y","cy","y1"])||0,width:0,height:0}:e},ng=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&eg(t))},ls=function(t,e){if(e){var n=t.style,i;e in Tr&&e!==ni&&(e=Ke),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(ud,"-$1").toLowerCase())):n.removeAttribute(e)}},as=function(t,e,n,i,s,o){var a=new Hn(t._pt,e,n,0,1,o?$m:Jm);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},Qm={deg:1,rad:1,turn:1},DM={grid:1,flex:1},cs=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=zs.style,l=vM.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),f=100,u=i==="px",d=i==="%",p,_,g,m;if(i===o||!s||Qm[i]||Qm[o])return s;if(o!=="px"&&!u&&(s=r(t,e,n,"px")),m=t.getCTM&&ng(t),(d||o==="%")&&(Tr[e]||~e.indexOf("adius")))return p=m?t.getBBox()[l?"width":"height"]:t[h],en(d?s/p*f:s/100*p);if(a[l?"width":"height"]=f+(u?o:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,m&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===os||!_.appendChild)&&(_=os.body),g=_._gsap,g&&d&&g.width&&l&&g.time===jn.time&&!g.uncache)return en(s/g.width*f);if(d&&(e==="height"||e==="width")){var M=t.style[e];t.style[e]=f+i,p=t[h],M?t.style[e]=M:ls(t,e)}else(d||o==="%")&&!DM[pi(_,"display")]&&(a.position=pi(t,"position")),_===t&&(a.position="static"),_.appendChild(zs),p=zs[h],_.removeChild(zs),a.position="absolute";return l&&d&&(g=is(_),g.time=jn.time,g.width=_[h]),en(u?p*s/f:p&&s?f/p*s:0)},br=function(t,e,n,i){var s;return cd||ad(),e in or&&e!=="transform"&&(e=or[e],~e.indexOf(",")&&(e=e.split(",")[0])),Tr[e]&&e!=="transform"?(s=Tl(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:uu(pi(t,ni))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=hu[e]&&hu[e](t,e,n)||pi(t,e)||Y0(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?cs(t,e,s,n)+n:s},NM=function(t,e,n,i){if(!n||n==="none"){var s=Yo(e,t,1),o=s&&pi(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=pi(t,"borderTopColor"))}var a=new Hn(this._pt,t.style,e,0,1,ed),l=0,c=0,h,f,u,d,p,_,g,m,M,T,x,b;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=pi(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=pi(t,e)||i,_?t.style[e]=_:ls(t,e)),h=[n,i],Z0(h),n=h[0],i=h[1],u=n.match(Ds)||[],b=i.match(Ds)||[],b.length){for(;f=Ds.exec(i);)g=f[0],M=i.substring(l,f.index),p?p=(p+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(p=1),g!==(_=u[c++]||"")&&(d=parseFloat(_)||0,x=_.substr((d+"").length),g.charAt(1)==="="&&(g=Ns(d,g)+x),m=parseFloat(g),T=g.substr((m+"").length),l=Ds.lastIndex-T.length,T||(T=T||ei.units[e]||x,l===i.length&&(i+=T,a.e+=T)),x!==T&&(d=cs(t,e,_,T)||0),a._pt={_next:a._pt,p:M||c===1?M:",",s:d,c:m-d,m:p&&p<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?$m:Jm;return G0.test(i)&&(a.e=0),this._pt=a,a},Ym={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},UM=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Ym[n]||n,e[1]=Ym[i]||i,e.join(" ")},OM=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Tr[a]&&(l=1,a=a==="transformOrigin"?ni:Ke),ls(n,a);l&&(ls(n,Ke),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Tl(n,1),o.uncache=1,Km(i)))}},hu={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new Hn(t._pt,e,n,0,0,OM);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},bl=[1,0,0,1,0,0],ig={},rg=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},qm=function(t){var e=pi(t,Ke);return rg(e)?bl:e.substr(7).match(V0).map(en)},fd=function(t,e){var n=t._gsap||is(t),i=t.style,s=qm(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?bl:s):(s===bl&&!t.offsetParent&&t!==Xo&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,Xo.appendChild(t)),s=qm(t),l?i.display=l:ls(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):Xo.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},ld=function(t,e,n,i,s,o){var a=t._gsap,l=s||fd(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,f=a.xOffset||0,u=a.yOffset||0,d=l[0],p=l[1],_=l[2],g=l[3],m=l[4],M=l[5],T=e.split(" "),x=parseFloat(T[0])||0,b=parseFloat(T[1])||0,y,E,v,w;n?l!==bl&&(E=d*g-p*_)&&(v=x*(g/E)+b*(-_/E)+(_*M-g*m)/E,w=x*(-p/E)+b*(d/E)-(d*M-p*m)/E,x=v,b=w):(y=eg(t),x=y.x+(~T[0].indexOf("%")?x/100*y.width:x),b=y.y+(~(T[1]||T[0]).indexOf("%")?b/100*y.height:b)),i||i!==!1&&a.smooth?(m=x-c,M=b-h,a.xOffset=f+(m*d+M*_)-m,a.yOffset=u+(m*p+M*g)-M):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=b,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[ni]="0px 0px",o&&(as(o,a,"xOrigin",c,x),as(o,a,"yOrigin",h,b),as(o,a,"xOffset",f,a.xOffset),as(o,a,"yOffset",u,a.yOffset)),t.setAttribute("data-svg-origin",x+" "+b)},Tl=function(t,e){var n=t._gsap||new J0(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=pi(t,ni)||"0",h,f,u,d,p,_,g,m,M,T,x,b,y,E,v,w,C,L,D,V,I,O,H,z,nt,$,P,K,It,Et,zt,Vt;return h=f=u=_=g=m=M=T=x=0,d=p=1,n.svg=!!(t.getCTM&&ng(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ke]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ke]!=="none"?l[Ke]:"")),i.scale=i.rotate=i.translate="none"),E=fd(t,n.svg),n.svg&&(n.uncache?(nt=t.getBBox(),c=n.xOrigin-nt.x+"px "+(n.yOrigin-nt.y)+"px",z=""):z=!e&&t.getAttribute("data-svg-origin"),ld(t,z||c,!!z||n.originIsAbsolute,n.smooth!==!1,E)),b=n.xOrigin||0,y=n.yOrigin||0,E!==bl&&(L=E[0],D=E[1],V=E[2],I=E[3],h=O=E[4],f=H=E[5],E.length===6?(d=Math.sqrt(L*L+D*D),p=Math.sqrt(I*I+V*V),_=L||D?Wo(D,L)*Bs:0,M=V||I?Wo(V,I)*Bs+_:0,M&&(p*=Math.abs(Math.cos(M*Qo))),n.svg&&(h-=b-(b*L+y*V),f-=y-(b*D+y*I))):(Vt=E[6],Et=E[7],P=E[8],K=E[9],It=E[10],zt=E[11],h=E[12],f=E[13],u=E[14],v=Wo(Vt,It),g=v*Bs,v&&(w=Math.cos(-v),C=Math.sin(-v),z=O*w+P*C,nt=H*w+K*C,$=Vt*w+It*C,P=O*-C+P*w,K=H*-C+K*w,It=Vt*-C+It*w,zt=Et*-C+zt*w,O=z,H=nt,Vt=$),v=Wo(-V,It),m=v*Bs,v&&(w=Math.cos(-v),C=Math.sin(-v),z=L*w-P*C,nt=D*w-K*C,$=V*w-It*C,zt=I*C+zt*w,L=z,D=nt,V=$),v=Wo(D,L),_=v*Bs,v&&(w=Math.cos(v),C=Math.sin(v),z=L*w+D*C,nt=O*w+H*C,D=D*w-L*C,H=H*w-O*C,L=z,O=nt),g&&Math.abs(g)+Math.abs(_)>359.9&&(g=_=0,m=180-m),d=en(Math.sqrt(L*L+D*D+V*V)),p=en(Math.sqrt(H*H+Vt*Vt)),v=Wo(O,H),M=Math.abs(v)>2e-4?v*Bs:0,x=zt?1/(zt<0?-zt:zt):0),n.svg&&(z=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!rg(pi(t,Ke)),z&&t.setAttribute("transform",z))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(d*=-1,M+=_<=0?180:-180,_+=_<=0?180:-180):(p*=-1,M+=M<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-f)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=u+o,n.scaleX=en(d),n.scaleY=en(p),n.rotation=en(_)+a,n.rotationX=en(g)+a,n.rotationY=en(m)+a,n.skewX=M+a,n.skewY=T+a,n.transformPerspective=x+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[ni]=uu(c)),n.xOffset=n.yOffset=0,n.force3D=ei.force3D,n.renderTransform=n.svg?BM:tg?sg:FM,n.uncache=0,n},uu=function(t){return(t=t.split(" "))[0]+" "+t[1]},rd=function(t,e,n){var i=wn(e);return en(parseFloat(e)+parseFloat(cs(t,"x",n+"px",i)))+i},FM=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,sg(t,e)},Os="0deg",Ml="0px",Fs=") ",sg=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,f=n.rotationX,u=n.skewX,d=n.skewY,p=n.scaleX,_=n.scaleY,g=n.transformPerspective,m=n.force3D,M=n.target,T=n.zOrigin,x="",b=m==="auto"&&t&&t!==1||m===!0;if(T&&(f!==Os||h!==Os)){var y=parseFloat(h)*Qo,E=Math.sin(y),v=Math.cos(y),w;y=parseFloat(f)*Qo,w=Math.cos(y),o=rd(M,o,E*w*-T),a=rd(M,a,-Math.sin(y)*-T),l=rd(M,l,v*w*-T+T)}g!==Ml&&(x+="perspective("+g+Fs),(i||s)&&(x+="translate("+i+"%, "+s+"%) "),(b||o!==Ml||a!==Ml||l!==Ml)&&(x+=l!==Ml||b?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Fs),c!==Os&&(x+="rotate("+c+Fs),h!==Os&&(x+="rotateY("+h+Fs),f!==Os&&(x+="rotateX("+f+Fs),(u!==Os||d!==Os)&&(x+="skew("+u+", "+d+Fs),(p!==1||_!==1)&&(x+="scale("+p+", "+_+Fs),M.style[Ke]=x||"translate(0, 0)"},BM=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,f=n.scaleX,u=n.scaleY,d=n.target,p=n.xOrigin,_=n.yOrigin,g=n.xOffset,m=n.yOffset,M=n.forceCSS,T=parseFloat(o),x=parseFloat(a),b,y,E,v,w;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Qo,c*=Qo,b=Math.cos(l)*f,y=Math.sin(l)*f,E=Math.sin(l-c)*-u,v=Math.cos(l-c)*u,c&&(h*=Qo,w=Math.tan(c-h),w=Math.sqrt(1+w*w),E*=w,v*=w,h&&(w=Math.tan(h),w=Math.sqrt(1+w*w),b*=w,y*=w)),b=en(b),y=en(y),E=en(E),v=en(v)):(b=f,v=u,y=E=0),(T&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(T=cs(d,"x",o,"px"),x=cs(d,"y",a,"px")),(p||_||g||m)&&(T=en(T+p-(p*b+_*E)+g),x=en(x+_-(p*y+_*v)+m)),(i||s)&&(w=d.getBBox(),T=en(T+i/100*w.width),x=en(x+s/100*w.height)),w="matrix("+b+","+y+","+E+","+v+","+T+","+x+")",d.setAttribute("transform",w),M&&(d.style[Ke]=w)},zM=function(t,e,n,i,s){var o=360,a=dn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Bs:1),c=l-i,h=i+c+"deg",f,u;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*Gm)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*Gm)%o-~~(c/o)*o)),t._pt=u=new Hn(t._pt,e,n,i,c,SM),u.e=h,u.u="deg",t._props.push(n),u},Zm=function(t,e){for(var n in e)t[n]=e[n];return t},kM=function(t,e,n){var i=Zm({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,f,u,d,p;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ke]=e,a=Tl(n,1),ls(n,Ke),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ke],o[Ke]=e,a=Tl(n,1),o[Ke]=c);for(l in Tr)c=i[l],h=a[l],c!==h&&s.indexOf(l)<0&&(d=wn(c),p=wn(h),f=d!==p?cs(n,l,c,p):parseFloat(c),u=parseFloat(h),t._pt=new Hn(t._pt,a,l,f,u-f,sd),t._pt.u=p||0,t._props.push(l));Zm(a,i)};Gn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});hu[t>1?"border"+r:r]=function(a,l,c,h,f){var u,d;if(arguments.length<4)return u=o.map(function(p){return br(a,p,c)}),d=u.join(" "),d.split(u[0]).length===5?u[0]:d;u=(h+"").split(" "),d={},o.forEach(function(p,_){return d[p]=u[_]=u[_]||u[(_-1)/2|0]}),a.init(l,d,f)}});var dd={name:"css",register:ad,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,l=n.vars.startAt,c,h,f,u,d,p,_,g,m,M,T,x,b,y,E,v,w;cd||ad(),this.styles=this.styles||jm(t),v=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(Kn[_]&&K0(_,e,n,i,t,s)))){if(d=typeof h,p=hu[_],d==="function"&&(h=h.call(n,i,t,s),d=typeof h),d==="string"&&~h.indexOf("random(")&&(h=Ho(h)),p)p(this,t,_,h,n)&&(E=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",Sr.lastIndex=0,Sr.test(c)||(g=wn(c),m=wn(h),m?g!==m&&(c=cs(t,_,c,m)+m):g&&(h+=g)),this.add(a,"setProperty",c,h,i,s,0,0,_),o.push(_),v.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],dn(c)&&~c.indexOf("random(")&&(c=Ho(c)),wn(c+"")||c==="auto"||(c+=ei.units[_]||wn(br(t,_))||""),(c+"").charAt(1)==="="&&(c=br(t,_))):c=br(t,_),u=parseFloat(c),M=d==="string"&&h.charAt(1)==="="&&h.substr(0,2),M&&(h=h.substr(2)),f=parseFloat(h),_ in or&&(_==="autoAlpha"&&(u===1&&br(t,"visibility")==="hidden"&&f&&(u=0),v.push("visibility",0,a.visibility),as(this,a,"visibility",u?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=or[_],~_.indexOf(",")&&(_=_.split(",")[0]))),T=_ in Tr,T){if(this.styles.save(_),w=h,d==="string"&&h.substring(0,6)==="var(--"){if(h=pi(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var C=t.style.perspective;t.style.perspective=h,h=pi(t,"perspective"),C?t.style.perspective=C:ls(t,"perspective")}f=parseFloat(h)}if(x||(b=t._gsap,b.renderTransform&&!e.parseTransform||Tl(t,e.parseTransform),y=e.smoothOrigin!==!1&&b.smooth,x=this._pt=new Hn(this._pt,a,Ke,0,1,b.renderTransform,b,0,-1),x.dep=1),_==="scale")this._pt=new Hn(this._pt,b,"scaleY",b.scaleY,(M?Ns(b.scaleY,M+f):f)-b.scaleY||0,sd),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){v.push(ni,0,a[ni]),h=UM(h),b.svg?ld(t,h,0,y,0,this):(m=parseFloat(h.split(" ")[2])||0,m!==b.zOrigin&&as(this,b,"zOrigin",b.zOrigin,m),as(this,a,_,uu(c),uu(h)));continue}else if(_==="svgOrigin"){ld(t,h,1,y,0,this);continue}else if(_ in ig){zM(this,b,_,u,M?Ns(u,M+h):h);continue}else if(_==="smoothOrigin"){as(this,b,"smooth",b.smooth,h);continue}else if(_==="force3D"){b[_]=h;continue}else if(_==="transform"){kM(this,h,t);continue}}else _ in a||(_=Yo(_)||_);if(T||(f||f===0)&&(u||u===0)&&!yM.test(h)&&_ in a)g=(c+"").substr((u+"").length),f||(f=0),m=wn(h)||(_ in ei.units?ei.units[_]:g),g!==m&&(u=cs(t,_,c,m)),this._pt=new Hn(this._pt,T?b:a,_,u,(M?Ns(u,M+f):f)-u,!T&&(m==="px"||_==="zIndex")&&e.autoRound!==!1?TM:sd),this._pt.u=m||0,T&&w!==h?(this._pt.b=c,this._pt.e=w,this._pt.r=bM):g!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=MM);else if(_ in a)NM.call(this,t,_,c,M?M+h:h);else if(_ in t)this.add(t,_,c||t[_],M?M+h:h,i,s);else if(_!=="parseTransform"){su(_,h);continue}T||(_ in a?v.push(_,0,a[_]):typeof t[_]=="function"?v.push(_,2,t[_]()):v.push(_,1,c||t[_])),o.push(_)}}E&&id(this)},render:function(t,e){if(e.tween._time||!hd())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:br,aliases:or,getSetter:function(t,e,n){var i=or[e];return i&&i.indexOf(",")<0&&(e=i),e in Tr&&e!==ni&&(t._gsap.x||br(t,"x"))?n&&Vm===n?e==="scale"?CM:AM:(Vm=n||{})&&(e==="scale"?RM:PM):t.style&&!ru(t.style[e])?wM:~e.indexOf("-")?EM:cu(t,e)},core:{_removeProperty:ls,_getMatrix:fd}};Dn.utils.checkPrefix=Yo;Dn.core.getStyleSaver=jm;(function(r,t,e,n){var i=Gn(r+","+t+","+e,function(s){Tr[s]=1});Gn(t,function(s){ei.units[s]="deg",ig[s]=1}),or[i[13]]=r+","+t,Gn(n,function(s){var o=s.split(":");or[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Gn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){ei.units[r]="px"});Dn.registerPlugin(dd);var fu=Dn.registerPlugin(dd)||Dn,w4=fu.core.Tween;function og(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function VM(r,t,e){return t&&og(r.prototype,t),e&&og(r,e),r}var En,mu,GM,mi,hs,us,Zo,lg,ks,Jo,cg,wr,Gi,hg,ug=function(){return En||typeof window<"u"&&(En=window.gsap)&&En.registerPlugin&&En},fg=1,qo=[],_e=[],Hi=[],El=Date.now,pd=function(t,e){return e},HM=function(){var t=Jo.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,_e),i.push.apply(i,Hi),_e=n,Hi=i,pd=function(o,a){return e[o](a)}},Ar=function(t,e){return~Hi.indexOf(t)&&Hi[Hi.indexOf(t)+1][e]},Al=function(t){return!!~cg.indexOf(t)},Xn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},Wn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},du="scrollLeft",pu="scrollTop",md=function(){return wr&&wr.isPressed||_e.cache++},gu=function(t,e){var n=function i(s){if(s||s===0){fg&&(mi.history.scrollRestoration="manual");var o=wr&&wr.isPressed;s=i.v=Math.round(s)||(wr&&wr.iOS?1:0),t(s),i.cacheID=_e.cache,o&&pd("ss",s)}else(e||_e.cache!==i.cacheID||pd("ref"))&&(i.cacheID=_e.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},Nn={s:du,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:gu(function(r){return arguments.length?mi.scrollTo(r,ln.sc()):mi.pageXOffset||hs[du]||us[du]||Zo[du]||0})},ln={s:pu,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Nn,sc:gu(function(r){return arguments.length?mi.scrollTo(Nn.sc(),r):mi.pageYOffset||hs[pu]||us[pu]||Zo[pu]||0})},Qn=function(t,e){return(e&&e._ctx&&e._ctx.selector||En.utils.toArray)(t)[0]||(typeof t=="string"&&En.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},WM=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},Er=function(t,e){var n=e.s,i=e.sc;Al(t)&&(t=hs.scrollingElement||us);var s=_e.indexOf(t),o=i===ln.sc?1:2;!~s&&(s=_e.push(t)-1),_e[s+o]||Xn(t,"scroll",md);var a=_e[s+o],l=a||(_e[s+o]=gu(Ar(t,n),!0)||(Al(t)?i:gu(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=En.getProperty(t,"scrollBehavior")==="smooth"),l},_u=function(t,e,n){var i=t,s=t,o=El(),a=o,l=e||50,c=Math.max(500,l*3),h=function(p,_){var g=El();_||g-o>l?(s=i,i=p,a=o,o=g):n?i+=p:i=s+(p-s)/(g-a)*(o-a)},f=function(){s=i=n?0:i,a=o=0},u=function(p){var _=a,g=s,m=El();return(p||p===0)&&p!==i&&h(p),o===a||m-a>c?0:(i+(n?g:-g))/((n?m:o)-_)*1e3};return{update:h,reset:f,getVelocity:u}},wl=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},ag=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},dg=function(){Jo=En.core.globals().ScrollTrigger,Jo&&Jo.core&&HM()},pg=function(t){return En=t||ug(),!mu&&En&&typeof document<"u"&&document.body&&(mi=window,hs=document,us=hs.documentElement,Zo=hs.body,cg=[mi,hs,us,Zo],GM=En.utils.clamp,hg=En.core.context||function(){},ks="onpointerenter"in Zo?"pointer":"mouse",lg=nn.isTouch=mi.matchMedia&&mi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in mi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Gi=nn.eventTypes=("ontouchstart"in us?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in us?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return fg=0},500),mu=1),Jo||dg(),mu};Nn.op=ln;_e.cache=0;var nn=(function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){mu||pg(En)||console.warn("Please gsap.registerPlugin(Observer)"),Jo||dg();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,f=n.onStop,u=n.onStopDelay,d=n.ignore,p=n.wheelSpeed,_=n.event,g=n.onDragStart,m=n.onDragEnd,M=n.onDrag,T=n.onPress,x=n.onRelease,b=n.onRight,y=n.onLeft,E=n.onUp,v=n.onDown,w=n.onChangeX,C=n.onChangeY,L=n.onChange,D=n.onToggleX,V=n.onToggleY,I=n.onHover,O=n.onHoverEnd,H=n.onMove,z=n.ignoreCheck,nt=n.isNormalizer,$=n.onGestureStart,P=n.onGestureEnd,K=n.onWheel,It=n.onEnable,Et=n.onDisable,zt=n.onClick,Vt=n.scrollSpeed,ee=n.capture,B=n.allowClicks,Y=n.lockAxis,Q=n.onLockAxis;this.target=a=Qn(a)||us,this.vars=n,d&&(d=En.utils.toArray(d)),i=i||1e-9,s=s||0,p=p||1,Vt=Vt||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(mi.getComputedStyle(Zo).lineHeight)||22);var _t,ft,Ct,yt,tt,at,ct,N=this,gt=0,Dt=0,Gt=n.passive||!h&&n.passive!==!1,Ft=Er(a,Nn),ne=Er(a,ln),U=Ft(),jt=ne(),Xt=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Gi[0]==="pointerdown",R=Al(a),S=a.ownerDocument||hs,W=[0,0,0],J=[0,0,0],it=0,St=function(){return it=El()},dt=function(ut,$t){return(N.event=ut)&&d&&WM(ut.target,d)||$t&&Xt&&ut.pointerType!=="touch"||z&&z(ut,$t)},rt=function(){N._vx.reset(),N._vy.reset(),ft.pause(),f&&f(N)},ot=function(){var ut=N.deltaX=ag(W),$t=N.deltaY=ag(J),mt=Math.abs(ut)>=i,te=Math.abs($t)>=i;L&&(mt||te)&&L(N,ut,$t,W,J),mt&&(b&&N.deltaX>0&&b(N),y&&N.deltaX<0&&y(N),w&&w(N),D&&N.deltaX<0!=gt<0&&D(N),gt=N.deltaX,W[0]=W[1]=W[2]=0),te&&(v&&N.deltaY>0&&v(N),E&&N.deltaY<0&&E(N),C&&C(N),V&&N.deltaY<0!=Dt<0&&V(N),Dt=N.deltaY,J[0]=J[1]=J[2]=0),(yt||Ct)&&(H&&H(N),Ct&&(g&&Ct===1&&g(N),M&&M(N),Ct=0),yt=!1),at&&!(at=!1)&&Q&&Q(N),tt&&(K(N),tt=!1),_t=0},vt=function(ut,$t,mt){W[mt]+=ut,J[mt]+=$t,N._vx.update(ut),N._vy.update($t),c?_t||(_t=requestAnimationFrame(ot)):ot()},kt=function(ut,$t){Y&&!ct&&(N.axis=ct=Math.abs(ut)>Math.abs($t)?"x":"y",at=!0),ct!=="y"&&(W[2]+=ut,N._vx.update(ut,!0)),ct!=="x"&&(J[2]+=$t,N._vy.update($t,!0)),c?_t||(_t=requestAnimationFrame(ot)):ot()},Tt=function(ut){if(!dt(ut,1)){ut=wl(ut,h);var $t=ut.clientX,mt=ut.clientY,te=$t-N.x,Qt=mt-N.y,oe=N.isDragging;N.x=$t,N.y=mt,(oe||(te||Qt)&&(Math.abs(N.startX-$t)>=s||Math.abs(N.startY-mt)>=s))&&(Ct||(Ct=oe?2:1),oe||(N.isDragging=!0),kt(te,Qt))}},At=N.onPress=function(pt){dt(pt,1)||pt&&pt.button||(N.axis=ct=null,ft.pause(),N.isPressed=!0,pt=wl(pt),gt=Dt=0,N.startX=N.x=pt.clientX,N.startY=N.y=pt.clientY,N._vx.reset(),N._vy.reset(),Xn(nt?a:S,Gi[1],Tt,Gt,!0),N.deltaX=N.deltaY=0,T&&T(N))},xt=N.onRelease=function(pt){if(!dt(pt,1)){Wn(nt?a:S,Gi[1],Tt,!0);var ut=!isNaN(N.y-N.startY),$t=N.isDragging,mt=$t&&(Math.abs(N.x-N.startX)>3||Math.abs(N.y-N.startY)>3),te=wl(pt);!mt&&ut&&(N._vx.reset(),N._vy.reset(),h&&B&&En.delayedCall(.08,function(){if(El()-it>300&&!pt.defaultPrevented){if(pt.target.click)pt.target.click();else if(S.createEvent){var Qt=S.createEvent("MouseEvents");Qt.initMouseEvent("click",!0,!0,mi,1,te.screenX,te.screenY,te.clientX,te.clientY,!1,!1,!1,!1,0,null),pt.target.dispatchEvent(Qt)}}})),N.isDragging=N.isGesturing=N.isPressed=!1,f&&$t&&!nt&&ft.restart(!0),Ct&&ot(),m&&$t&&m(N),x&&x(N,mt)}},Ht=function(ut){return ut.touches&&ut.touches.length>1&&(N.isGesturing=!0)&&$(ut,N.isDragging)},Kt=function(){return(N.isGesturing=!1)||P(N)},G=function(ut){if(!dt(ut)){var $t=Ft(),mt=ne();vt(($t-U)*Vt,(mt-jt)*Vt,1),U=$t,jt=mt,f&&ft.restart(!0)}},bt=function(ut){if(!dt(ut)){ut=wl(ut,h),K&&(tt=!0);var $t=(ut.deltaMode===1?l:ut.deltaMode===2?mi.innerHeight:1)*p;vt(ut.deltaX*$t,ut.deltaY*$t,0),f&&!nt&&ft.restart(!0)}},st=function(ut){if(!dt(ut)){var $t=ut.clientX,mt=ut.clientY,te=$t-N.x,Qt=mt-N.y;N.x=$t,N.y=mt,yt=!0,f&&ft.restart(!0),(te||Qt)&&kt(te,Qt)}},Mt=function(ut){N.event=ut,I(N)},Pt=function(ut){N.event=ut,O(N)},lt=function(ut){return dt(ut)||wl(ut,h)&&zt(N)};ft=N._dc=En.delayedCall(u||.25,rt).pause(),N.deltaX=N.deltaY=0,N._vx=_u(0,50,!0),N._vy=_u(0,50,!0),N.scrollX=Ft,N.scrollY=ne,N.isDragging=N.isGesturing=N.isPressed=!1,hg(this),N.enable=function(pt){return N.isEnabled||(Xn(R?S:a,"scroll",md),o.indexOf("scroll")>=0&&Xn(R?S:a,"scroll",G,Gt,ee),o.indexOf("wheel")>=0&&Xn(a,"wheel",bt,Gt,ee),(o.indexOf("touch")>=0&&lg||o.indexOf("pointer")>=0)&&(Xn(a,Gi[0],At,Gt,ee),Xn(S,Gi[2],xt),Xn(S,Gi[3],xt),B&&Xn(a,"click",St,!0,!0),zt&&Xn(a,"click",lt),$&&Xn(S,"gesturestart",Ht),P&&Xn(S,"gestureend",Kt),I&&Xn(a,ks+"enter",Mt),O&&Xn(a,ks+"leave",Pt),H&&Xn(a,ks+"move",st)),N.isEnabled=!0,N.isDragging=N.isGesturing=N.isPressed=yt=Ct=!1,N._vx.reset(),N._vy.reset(),U=Ft(),jt=ne(),pt&&pt.type&&At(pt),It&&It(N)),N},N.disable=function(){N.isEnabled&&(qo.filter(function(pt){return pt!==N&&Al(pt.target)}).length||Wn(R?S:a,"scroll",md),N.isPressed&&(N._vx.reset(),N._vy.reset(),Wn(nt?a:S,Gi[1],Tt,!0)),Wn(R?S:a,"scroll",G,ee),Wn(a,"wheel",bt,ee),Wn(a,Gi[0],At,ee),Wn(S,Gi[2],xt),Wn(S,Gi[3],xt),Wn(a,"click",St,!0),Wn(a,"click",lt),Wn(S,"gesturestart",Ht),Wn(S,"gestureend",Kt),Wn(a,ks+"enter",Mt),Wn(a,ks+"leave",Pt),Wn(a,ks+"move",st),N.isEnabled=N.isPressed=N.isDragging=!1,Et&&Et(N))},N.kill=N.revert=function(){N.disable();var pt=qo.indexOf(N);pt>=0&&qo.splice(pt,1),wr===N&&(wr=0)},qo.push(N),nt&&Al(a)&&(wr=N),N.enable(_)},VM(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();nn.version="3.15.0";nn.create=function(r){return new nn(r)};nn.register=pg;nn.getAll=function(){return qo.slice()};nn.getById=function(r){return qo.filter(function(t){return t.vars.id===r})[0]};ug()&&En.registerPlugin(nn);var qt,ta,ye,Ue,xi,De,Rd,Du,Vl,Nl,Rl,xu,Un,Ou,Md,qn,mg,gg,ea,Lg,gd,Dg,Yn,bd,Ng,Ug,fs,Td,Pd,na,Id,Ul,wd,_d,vu=1,On=Date.now,xd=On(),Ci=0,Pl=0,_g=function(t,e,n){var i=_i(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},xg=function(t,e){return e&&(!_i(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},XM=function r(){return Pl&&requestAnimationFrame(r)},vg=function(){return Ou=1},yg=function(){return Ou=0},ar=function(t){return t},Il=function(t){return Math.round(t*1e5)/1e5||0},Og=function(){return typeof window<"u"},Fg=function(){return qt||Og()&&(qt=window.gsap)&&qt.registerPlugin&&qt},Qs=function(t){return!!~Rd.indexOf(t)},Bg=function(t){return(t==="Height"?Id:ye["inner"+t])||xi["client"+t]||De["client"+t]},zg=function(t){return Ar(t,"getBoundingClientRect")||(Qs(t)?function(){return Lu.width=ye.innerWidth,Lu.height=Id,Lu}:function(){return Cr(t)})},QM=function(t,e,n){var i=n.d,s=n.d2,o=n.a;return(o=Ar(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?Bg(s):t["client"+s])||0}},YM=function(t,e){return!e||~Hi.indexOf(t)?zg(t):function(){return Lu}},lr=function(t,e){var n=e.s,i=e.d2,s=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=Ar(t,n))?o()-zg(t)()[s]:Qs(t)?(xi[n]||De[n])-Bg(i):t[n]-t["offset"+i])},yu=function(t,e){for(var n=0;n<ea.length;n+=3)(!e||~e.indexOf(ea[n+1]))&&t(ea[n],ea[n+1],ea[n+2])},_i=function(t){return typeof t=="string"},Fn=function(t){return typeof t=="function"},Ll=function(t){return typeof t=="number"},Vs=function(t){return typeof t=="object"},Cl=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},$o=function(t,e,n){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);i&&i.totalTime&&(t.callbackAnimation=i)}},Ko=Math.abs,kg="left",Vg="top",Ld="right",Dd="bottom",Hs="width",Ws="height",Ol="Right",Fl="Left",Bl="Top",zl="Bottom",cn="padding",Ei="margin",ra="Width",Nd="Height",pn="px",Ai=function(t){return ye.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},qM=function(t){var e=Ai(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},Sg=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Cr=function(t,e){var n=e&&Ai(t)[Md]!=="matrix(1, 0, 0, 1, 0, 0)"&&qt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},Nu=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},Gg=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},ZM=function(t){return function(e){return qt.utils.snap(Gg(t),e)}},Ud=function(t){var e=qt.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return e(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=e(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:e(s<0?i-t:i+t)}},JM=function(t){return function(e,n){return Ud(Gg(t))(e,n.direction)}},Su=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},vn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},xn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Mu=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},Mg={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},bu={toggleActions:"play",anticipatePin:0},Uu={top:0,left:0,center:.5,bottom:1,right:1},Cu=function(t,e){if(_i(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in Uu?Uu[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},Tu=function(t,e,n,i,s,o,a,l){var c=s.startColor,h=s.endColor,f=s.fontSize,u=s.indent,d=s.fontWeight,p=Ue.createElement("div"),_=Qs(n)||Ar(n,"pinType")==="fixed",g=t.indexOf("scroller")!==-1,m=_?De:n.tagName==="IFRAME"?n.contentDocument.body:n,M=t.indexOf("start")!==-1,T=M?c:h,x="border-color:"+T+";font-size:"+f+";color:"+T+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((g||l)&&_?"fixed;":"absolute;"),(g||l||!_)&&(x+=(i===ln?Ld:Dd)+":"+(o+parseFloat(u))+"px;"),a&&(x+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),p._isStart=M,p.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),p.style.cssText=x,p.innerText=e||e===0?t+"-"+e:t,m.children[0]?m.insertBefore(p,m.children[0]):m.appendChild(p),p._offset=p["offset"+i.op.d2],Ru(p,0,i,M),p},Ru=function(t,e,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+ra]=1,s["border"+a+ra]=0,s[n.p]=e+"px",qt.set(t,s)},xe=[],Ed={},Gl,bg=function(){return On()-Ci>34&&(Gl||(Gl=requestAnimationFrame(Rr)))},jo=function(){(!Yn||!Yn.isPressed||Yn.startX>De.clientWidth)&&(_e.cache++,Yn?Gl||(Gl=requestAnimationFrame(Rr)):Rr(),Ci||qs("scrollStart"),Ci=On())},vd=function(){Ug=ye.innerWidth,Ng=ye.innerHeight},Dl=function(t){_e.cache++,(t===!0||!Un&&!Dg&&!Ue.fullscreenElement&&!Ue.webkitFullscreenElement&&(!bd||Ug!==ye.innerWidth||Math.abs(ye.innerHeight-Ng)>ye.innerHeight*.25))&&Du.restart(!0)},Ys={},$M=[],Hg=function r(){return xn(ve,"scrollEnd",r)||Gs(!0)},qs=function(t){return Ys[t]&&Ys[t].map(function(e){return e()})||$M},gi=[],Wg=function(t){for(var e=0;e<gi.length;e+=5)(!t||gi[e+4]&&gi[e+4].query===t)&&(gi[e].style.cssText=gi[e+1],gi[e].getBBox&&gi[e].setAttribute("transform",gi[e+2]||""),gi[e+3].uncache=1)},Xg=function(){return _e.forEach(function(t){return Fn(t)&&++t.cacheID&&(t.rec=t())})},Od=function(t,e){var n;for(qn=0;qn<xe.length;qn++)n=xe[qn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));Ul=!0,e&&Wg(e),e||qs("revert")},Qg=function(t,e){_e.cache++,(e||!Zn)&&_e.forEach(function(n){return Fn(n)&&n.cacheID++&&(n.rec=0)}),_i(t)&&(ye.history.scrollRestoration=Pd=t)},Zn,Xs=0,Tg,KM=function(){if(Tg!==Xs){var t=Tg=Xs;requestAnimationFrame(function(){return t===Xs&&Gs(!0)})}},Yg=function(){De.appendChild(na),Id=!Yn&&na.offsetHeight||ye.innerHeight,De.removeChild(na)},wg=function(t){return Vl(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Gs=function(t,e){if(xi=Ue.documentElement,De=Ue.body,Rd=[ye,Ue,xi,De],Ci&&!t&&!Ul){vn(ve,"scrollEnd",Hg);return}Yg(),Zn=ve.isRefreshing=!0,Ul||Xg();var n=qs("refreshInit");Lg&&ve.sort(),e||Od(),_e.forEach(function(i){Fn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),xe.slice(0).forEach(function(i){return i.refresh()}),Ul=!1,xe.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),wd=1,wg(!0),xe.forEach(function(i){var s=lr(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),wg(!1),wd=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),_e.forEach(function(i){Fn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Qg(Pd,1),Du.pause(),Xs++,Zn=2,Rr(2),xe.forEach(function(i){return Fn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Zn=ve.isRefreshing=!1,qs("refresh")},Ad=0,Pu=1,kl,Rr=function(t){if(t===2||!Zn&&!Ul){ve.isUpdating=!0,kl&&kl.update(0);var e=xe.length,n=On(),i=n-xd>=50,s=e&&xe[0].scroll();if(Pu=Ad>s?-1:1,Zn||(Ad=s),i&&(Ci&&!Ou&&n-Ci>200&&(Ci=0,qs("scrollEnd")),Rl=xd,xd=n),Pu<0){for(qn=e;qn-- >0;)xe[qn]&&xe[qn].update(0,i);Pu=1}else for(qn=0;qn<e;qn++)xe[qn]&&xe[qn].update(0,i);ve.isUpdating=!1}Gl=0},Cd=[kg,Vg,Dd,Ld,Ei+zl,Ei+Ol,Ei+Bl,Ei+Fl,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Iu=Cd.concat([Hs,Ws,"boxSizing","max"+ra,"max"+Nd,"position",Ei,cn,cn+Bl,cn+Ol,cn+zl,cn+Fl]),jM=function(t,e,n){ia(n);var i=t._gsap;if(i.spacerIsNative)ia(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},yd=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=Cd.length,o=e.style,a=t.style,l;s--;)l=Cd[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Dd]=a[Ld]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Hs]=Nu(t,Nn)+pn,o[Ws]=Nu(t,ln)+pn,o[cn]=a[Ei]=a[Vg]=a[kg]="0",ia(i),a[Hs]=a["max"+ra]=n[Hs],a[Ws]=a["max"+Nd]=n[Ws],a[cn]=n[cn],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},tb=/([A-Z])/g,ia=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,o;for((t.t._gsap||qt.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],s=t[i],o?e[s]=o:e[s]&&e.removeProperty(s.replace(tb,"-$1").toLowerCase())}},wu=function(t){for(var e=Iu.length,n=t.style,i=[],s=0;s<e;s++)i.push(Iu[s],n[Iu[s]]);return i.t=t,i},eb=function(t,e,n){for(var i=[],s=t.length,o=n?8:0,a;o<s;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},Lu={left:0,top:0},Eg=function(t,e,n,i,s,o,a,l,c,h,f,u,d,p){Fn(t)&&(t=t(l)),_i(t)&&t.substr(0,3)==="max"&&(t=u+(t.charAt(4)==="="?Cu("0"+t.substr(3),n):0));var _=d?d.time():0,g,m,M;if(d&&d.seek(0),isNaN(t)||(t=+t),Ll(t))d&&(t=qt.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,u,t)),a&&Ru(a,n,i,!0);else{Fn(e)&&(e=e(l));var T=(t||"0").split(" "),x,b,y,E;M=Qn(e,l)||De,x=Cr(M)||{},(!x||!x.left&&!x.top)&&Ai(M).display==="none"&&(E=M.style.display,M.style.display="block",x=Cr(M),E?M.style.display=E:M.style.removeProperty("display")),b=Cu(T[0],x[i.d]),y=Cu(T[1]||"0",n),t=x[i.p]-c[i.p]-h+b+s-y,a&&Ru(a,y,i,n-y<20||a._isStart&&y>20),n-=n-y}if(p&&(l[p]=t||-.001,t<0&&(t=0)),o){var v=t+n,w=o._isStart;g="scroll"+i.d2,Ru(o,v,i,w&&v>20||!w&&(f?Math.max(De[g],xi[g]):o.parentNode[g])<=v+1),f&&(c=Cr(a),f&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+pn))}return d&&M&&(g=Cr(M),d.seek(u),m=Cr(M),d._caScrollDist=g[i.p]-m[i.p],t=t/d._caScrollDist*u),d&&d.seek(_),d?t:Math.round(t)},nb=/(webkit|moz|length|cssText|inset)/i,Ag=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,o,a;if(e===De){t._stOrig=s.cssText,a=Ai(t);for(o in a)!+o&&!nb.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=t._stOrig;qt.core.getCache(t).uncache=1,e.appendChild(t)}},qg=function(t,e,n){var i=e,s=i;return function(o){var a=Math.round(t());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},Eu=function(t,e,n){var i={};i[e.p]="+="+n,qt.set(t,i)},Cg=function(t,e){var n=Er(t,e),i="_scroll"+e.p2,s=function o(a,l,c,h,f){var u=o.tween,d=l.onComplete,p={};c=c||n();var _=qg(n,c,function(){u.kill(),o.tween=0});return f=h&&f||0,h=h||a-c,u&&u.kill(),l[i]=a,l.inherit=!1,l.modifiers=p,p[i]=function(){return _(c+h*u.ratio+f*u.ratio*u.ratio)},l.onUpdate=function(){_e.cache++,o.tween&&Rr()},l.onComplete=function(){o.tween=0,d&&d.call(u)},u=o.tween=qt.to(t,l),u};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},vn(t,"wheel",n.wheelHandler),ve.isTouch&&vn(t,"touchmove",n.wheelHandler),s},ve=(function(){function r(e,n){ta||r.register(qt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Td(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Pl){this.update=this.refresh=this.kill=ar;return}n=Sg(_i(n)||Ll(n)||n.nodeType?{trigger:n}:n,bu);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,f=s.scrub,u=s.trigger,d=s.pin,p=s.pinSpacing,_=s.invalidateOnRefresh,g=s.anticipatePin,m=s.onScrubComplete,M=s.onSnapComplete,T=s.once,x=s.snap,b=s.pinReparent,y=s.pinSpacer,E=s.containerAnimation,v=s.fastScrollEnd,w=s.preventOverlaps,C=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Nn:ln,L=!f&&f!==0,D=Qn(n.scroller||ye),V=qt.core.getCache(D),I=Qs(D),O=("pinType"in n?n.pinType:Ar(D,"pinType")||I&&"fixed")==="fixed",H=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],z=L&&n.toggleActions.split(" "),nt="markers"in n?n.markers:bu.markers,$=I?0:parseFloat(Ai(D)["border"+C.p2+ra])||0,P=this,K=n.onRefreshInit&&function(){return n.onRefreshInit(P)},It=QM(D,I,C),Et=YM(D,I),zt=0,Vt=0,ee=0,B=Er(D,C),Y,Q,_t,ft,Ct,yt,tt,at,ct,N,gt,Dt,Gt,Ft,ne,U,jt,Xt,R,S,W,J,it,St,dt,rt,ot,vt,kt,Tt,At,xt,Ht,Kt,G,bt,st,Mt,Pt;if(P._startClamp=P._endClamp=!1,P._dir=C,g*=45,P.scroller=D,P.scroll=E?E.time.bind(E):B,ft=B(),P.vars=n,i=i||n.animation,"refreshPriority"in n&&(Lg=1,n.refreshPriority===-9999&&(kl=P)),V.tweenScroll=V.tweenScroll||{top:Cg(D,ln),left:Cg(D,Nn)},P.tweenTo=Y=V.tweenScroll[C.p],P.scrubDuration=function(mt){Ht=Ll(mt)&&mt,Ht?xt?xt.duration(mt):xt=qt.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Ht,paused:!0,onComplete:function(){return m&&m(P)}}):(xt&&xt.progress(1).kill(),xt=0)},i&&(i.vars.lazy=!1,i._initted&&!P.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),P.animation=i.pause(),i.scrollTrigger=P,P.scrubDuration(f),Tt=0,l||(l=i.vars.id)),x&&((!Vs(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in De.style&&qt.set(I?[De,xi]:D,{scrollBehavior:"auto"}),_e.forEach(function(mt){return Fn(mt)&&mt.target===(I?Ue.scrollingElement||xi:D)&&(mt.smooth=!1)}),_t=Fn(x.snapTo)?x.snapTo:x.snapTo==="labels"?ZM(i):x.snapTo==="labelsDirectional"?JM(i):x.directional!==!1?function(mt,te){return Ud(x.snapTo)(mt,On()-Vt<500?0:te.direction)}:qt.utils.snap(x.snapTo),Kt=x.duration||{min:.1,max:2},Kt=Vs(Kt)?Nl(Kt.min,Kt.max):Nl(Kt,Kt),G=qt.delayedCall(x.delay||Ht/2||.1,function(){var mt=B(),te=On()-Vt<500,Qt=Y.tween;if((te||Math.abs(P.getVelocity())<10)&&!Qt&&!Ou&&zt!==mt){var oe=(mt-yt)/Ft,Xe=i&&!L?i.totalProgress():oe,ue=te?0:(Xe-At)/(On()-Rl)*1e3||0,Oe=qt.utils.clamp(-oe,1-oe,Ko(ue/2)*ue/.185),je=oe+(x.inertia===!1?0:Oe),Pe,Ie,de=x,on=de.onStart,F=de.onInterrupt,ht=de.onComplete;if(Pe=_t(je,P),Ll(Pe)||(Pe=je),Ie=Math.max(0,Math.round(yt+Pe*Ft)),mt<=tt&&mt>=yt&&Ie!==mt){if(Qt&&!Qt._initted&&Qt.data<=Ko(Ie-mt))return;x.inertia===!1&&(Oe=Pe-oe),Y(Ie,{duration:Kt(Ko(Math.max(Ko(je-Xe),Ko(Pe-Xe))*.185/ue/.05||0)),ease:x.ease||"power3",data:Ko(Ie-mt),onInterrupt:function(){return G.restart(!0)&&F&&$o(P,F)},onComplete:function(){P.update(),zt=B(),i&&!L&&(xt?xt.resetTo("totalProgress",Pe,i._tTime/i._tDur):i.progress(Pe)),Tt=At=i&&!L?i.totalProgress():P.progress,M&&M(P),ht&&$o(P,ht)}},mt,Oe*Ft,Ie-mt-Oe*Ft),on&&$o(P,on,Y.tween)}}else P.isActive&&zt!==mt&&G.restart(!0)}).pause()),l&&(Ed[l]=P),u=P.trigger=Qn(u||d!==!0&&d),Pt=u&&u._gsap&&u._gsap.stRevert,Pt&&(Pt=Pt(P)),d=d===!0?u:Qn(d),_i(a)&&(a={targets:u,className:a}),d&&(p===!1||p===Ei||(p=!p&&d.parentNode&&d.parentNode.style&&Ai(d.parentNode).display==="flex"?!1:cn),P.pin=d,Q=qt.core.getCache(d),Q.spacer?ne=Q.pinState:(y&&(y=Qn(y),y&&!y.nodeType&&(y=y.current||y.nativeElement),Q.spacerIsNative=!!y,y&&(Q.spacerState=wu(y))),Q.spacer=Xt=y||Ue.createElement("div"),Xt.classList.add("pin-spacer"),l&&Xt.classList.add("pin-spacer-"+l),Q.pinState=ne=wu(d)),n.force3D!==!1&&qt.set(d,{force3D:!0}),P.spacer=Xt=Q.spacer,kt=Ai(d),St=kt[p+C.os2],S=qt.getProperty(d),W=qt.quickSetter(d,C.a,pn),yd(d,Xt,kt),jt=wu(d)),nt){Dt=Vs(nt)?Sg(nt,Mg):Mg,N=Tu("scroller-start",l,D,C,Dt,0),gt=Tu("scroller-end",l,D,C,Dt,0,N),R=N["offset"+C.op.d2];var lt=Qn(Ar(D,"content")||D);at=this.markerStart=Tu("start",l,lt,C,Dt,R,0,E),ct=this.markerEnd=Tu("end",l,lt,C,Dt,R,0,E),E&&(Mt=qt.quickSetter([at,ct],C.a,pn)),!O&&!(Hi.length&&Ar(D,"fixedMarkers")===!0)&&(qM(I?De:D),qt.set([N,gt],{force3D:!0}),rt=qt.quickSetter(N,C.a,pn),vt=qt.quickSetter(gt,C.a,pn))}if(E){var pt=E.vars.onUpdate,ut=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){P.update(0,0,1),pt&&pt.apply(E,ut||[])})}if(P.previous=function(){return xe[xe.indexOf(P)-1]},P.next=function(){return xe[xe.indexOf(P)+1]},P.revert=function(mt,te){if(!te)return P.kill(!0);var Qt=mt!==!1||!P.enabled,oe=Un;Qt!==P.isReverted&&(Qt&&(bt=Math.max(B(),P.scroll.rec||0),ee=P.progress,st=i&&i.progress()),at&&[at,ct,N,gt].forEach(function(Xe){return Xe.style.display=Qt?"none":"block"}),Qt&&(Un=P,P.update(Qt)),d&&(!b||!P.isActive)&&(Qt?jM(d,Xt,ne):yd(d,Xt,Ai(d),dt)),Qt||P.update(Qt),Un=oe,P.isReverted=Qt)},P.refresh=function(mt,te,Qt,oe){if(!((Un||!P.enabled)&&!te)){if(d&&mt&&Ci){vn(r,"scrollEnd",Hg);return}!Zn&&K&&K(P),Un=P,Y.tween&&!Qt&&(Y.tween.kill(),Y.tween=0),xt&&xt.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(wt){return wt.vars.immediateRender&&wt.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var Xe=It(),ue=Et(),Oe=E?E.duration():lr(D,C),je=Ft<=.01||!Ft,Pe=0,Ie=oe||0,de=Vs(Qt)?Qt.end:n.end,on=n.endTrigger||u,F=Vs(Qt)?Qt.start:n.start||(n.start===0||!u?0:d?"0 0":"0 100%"),ht=P.pinnedContainer=n.pinnedContainer&&Qn(n.pinnedContainer,P),et=u&&Math.max(0,xe.indexOf(P))||0,Nt=et,Zt,ge,we,Be,le,fe,Ae,yn,A,k,j,Z,q;for(nt&&Vs(Qt)&&(Z=qt.getProperty(N,C.p),q=qt.getProperty(gt,C.p));Nt-- >0;)fe=xe[Nt],fe.end||fe.refresh(0,1)||(Un=P),Ae=fe.pin,Ae&&(Ae===u||Ae===d||Ae===ht)&&!fe.isReverted&&(k||(k=[]),k.unshift(fe),fe.revert(!0,!0)),fe!==xe[Nt]&&(et--,Nt--);for(Fn(F)&&(F=F(P)),F=_g(F,"start",P),yt=Eg(F,u,Xe,C,B(),at,N,P,ue,$,O,Oe,E,P._startClamp&&"_startClamp")||(d?-.001:0),Fn(de)&&(de=de(P)),_i(de)&&!de.indexOf("+=")&&(~de.indexOf(" ")?de=(_i(F)?F.split(" ")[0]:"")+de:(Pe=Cu(de.substr(2),Xe),de=_i(F)?F:(E?qt.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,yt):yt)+Pe,on=u)),de=_g(de,"end",P),tt=Math.max(yt,Eg(de||(on?"100% 0":Oe),on,Xe,C,B()+Pe,ct,gt,P,ue,$,O,Oe,E,P._endClamp&&"_endClamp"))||-.001,Pe=0,Nt=et;Nt--;)fe=xe[Nt]||{},Ae=fe.pin,Ae&&fe.start-fe._pinPush<=yt&&!E&&fe.end>0&&(Zt=fe.end-(P._startClamp?Math.max(0,fe.start):fe.start),(Ae===u&&fe.start-fe._pinPush<yt||Ae===ht)&&isNaN(F)&&(Pe+=Zt*(1-fe.progress)),Ae===d&&(Ie+=Zt));if(yt+=Pe,tt+=Pe,P._startClamp&&(P._startClamp+=Pe),P._endClamp&&!Zn&&(P._endClamp=tt||-.001,tt=Math.min(tt,lr(D,C))),Ft=tt-yt||(yt-=.01)&&.001,je&&(ee=qt.utils.clamp(0,1,qt.utils.normalize(yt,tt,bt))),P._pinPush=Ie,at&&Pe&&(Zt={},Zt[C.a]="+="+Pe,ht&&(Zt[C.p]="-="+B()),qt.set([at,ct],Zt)),d&&!(wd&&P.end>=lr(D,C)))Zt=Ai(d),Be=C===ln,we=B(),J=parseFloat(S(C.a))+Ie,!Oe&&tt>1&&(j=(I?Ue.scrollingElement||xi:D).style,j={style:j,value:j["overflow"+C.a.toUpperCase()]},I&&Ai(De)["overflow"+C.a.toUpperCase()]!=="scroll"&&(j.style["overflow"+C.a.toUpperCase()]="scroll")),yd(d,Xt,Zt),jt=wu(d),ge=Cr(d,!0),yn=O&&Er(D,Be?Nn:ln)(),p?(dt=[p+C.os2,Ft+Ie+pn],dt.t=Xt,Nt=p===cn?Nu(d,C)+Ft+Ie:0,Nt&&(dt.push(C.d,Nt+pn),Xt.style.flexBasis!=="auto"&&(Xt.style.flexBasis=Nt+pn)),ia(dt),ht&&xe.forEach(function(wt){wt.pin===ht&&wt.vars.pinSpacing!==!1&&(wt._subPinOffset=!0)}),O&&B(bt)):(Nt=Nu(d,C),Nt&&Xt.style.flexBasis!=="auto"&&(Xt.style.flexBasis=Nt+pn)),O&&(le={top:ge.top+(Be?we-yt:yn)+pn,left:ge.left+(Be?yn:we-yt)+pn,boxSizing:"border-box",position:"fixed"},le[Hs]=le["max"+ra]=Math.ceil(ge.width)+pn,le[Ws]=le["max"+Nd]=Math.ceil(ge.height)+pn,le[Ei]=le[Ei+Bl]=le[Ei+Ol]=le[Ei+zl]=le[Ei+Fl]="0",le[cn]=Zt[cn],le[cn+Bl]=Zt[cn+Bl],le[cn+Ol]=Zt[cn+Ol],le[cn+zl]=Zt[cn+zl],le[cn+Fl]=Zt[cn+Fl],U=eb(ne,le,b),Zn&&B(0)),i?(A=i._initted,gd(1),i.render(i.duration(),!0,!0),it=S(C.a)-J+Ft+Ie,ot=Math.abs(Ft-it)>1,O&&ot&&U.splice(U.length-2,2),i.render(0,!0,!0),A||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),gd(0)):it=Ft,j&&(j.value?j.style["overflow"+C.a.toUpperCase()]=j.value:j.style.removeProperty("overflow-"+C.a));else if(u&&B()&&!E)for(ge=u.parentNode;ge&&ge!==De;)ge._pinOffset&&(yt-=ge._pinOffset,tt-=ge._pinOffset),ge=ge.parentNode;k&&k.forEach(function(wt){return wt.revert(!1,!0)}),P.start=yt,P.end=tt,ft=Ct=Zn?bt:B(),!E&&!Zn&&(ft<bt&&B(bt),P.scroll.rec=0),P.revert(!1,!0),Vt=On(),G&&(zt=-1,G.restart(!0)),Un=0,i&&L&&(i._initted||st)&&i.progress()!==st&&i.progress(st||0,!0).render(i.time(),!0,!0),(je||ee!==P.progress||E||_||i&&!i._initted)&&(i&&!L&&(i._initted||ee||i.vars.immediateRender!==!1)&&i.totalProgress(E&&yt<-.001&&!ee?qt.utils.normalize(yt,tt,0):ee,!0),P.progress=je||(ft-yt)/Ft===ee?0:ee),d&&p&&(Xt._pinOffset=Math.round(P.progress*it)),xt&&xt.invalidate(),isNaN(Z)||(Z-=qt.getProperty(N,C.p),q-=qt.getProperty(gt,C.p),Eu(N,C,Z),Eu(at,C,Z-(oe||0)),Eu(gt,C,q),Eu(ct,C,q-(oe||0))),je&&!Zn&&P.update(),h&&!Zn&&!Gt&&(Gt=!0,h(P),Gt=!1)}},P.getVelocity=function(){return(B()-Ct)/(On()-Rl)*1e3||0},P.endAnimation=function(){Cl(P.callbackAnimation),i&&(xt?xt.progress(1):i.paused()?L||Cl(i,P.direction<0,1):Cl(i,i.reversed()))},P.labelToScroll=function(mt){return i&&i.labels&&(yt||P.refresh()||yt)+i.labels[mt]/i.duration()*Ft||0},P.getTrailing=function(mt){var te=xe.indexOf(P),Qt=P.direction>0?xe.slice(0,te).reverse():xe.slice(te+1);return(_i(mt)?Qt.filter(function(oe){return oe.vars.preventOverlaps===mt}):Qt).filter(function(oe){return P.direction>0?oe.end<=yt:oe.start>=tt})},P.update=function(mt,te,Qt){if(!(E&&!Qt&&!mt)){var oe=Zn===!0?bt:P.scroll(),Xe=mt?0:(oe-yt)/Ft,ue=Xe<0?0:Xe>1?1:Xe||0,Oe=P.progress,je,Pe,Ie,de,on,F,ht,et;if(te&&(Ct=ft,ft=E?B():oe,x&&(At=Tt,Tt=i&&!L?i.totalProgress():ue)),g&&d&&!Un&&!vu&&Ci&&(!ue&&yt<oe+(oe-Ct)/(On()-Rl)*g?ue=1e-4:ue===1&&tt>oe+(oe-Ct)/(On()-Rl)*g&&(ue=.9999)),ue!==Oe&&P.enabled){if(je=P.isActive=!!ue&&ue<1,Pe=!!Oe&&Oe<1,F=je!==Pe,on=F||!!ue!=!!Oe,P.direction=ue>Oe?1:-1,P.progress=ue,on&&!Un&&(Ie=ue&&!Oe?0:ue===1?1:Oe===1?2:3,L&&(de=!F&&z[Ie+1]!=="none"&&z[Ie+1]||z[Ie],et=i&&(de==="complete"||de==="reset"||de in i))),w&&(F||et)&&(et||f||!i)&&(Fn(w)?w(P):P.getTrailing(w).forEach(function(we){return we.endAnimation()})),L||(xt&&!Un&&!vu?(xt._dp._time-xt._start!==xt._time&&xt.render(xt._dp._time-xt._start),xt.resetTo?xt.resetTo("totalProgress",ue,i._tTime/i._tDur):(xt.vars.totalProgress=ue,xt.invalidate().restart())):i&&i.totalProgress(ue,!!(Un&&(Vt||mt)))),d){if(mt&&p&&(Xt.style[p+C.os2]=St),!O)W(Il(J+it*ue));else if(on){if(ht=!mt&&ue>Oe&&tt+1>oe&&oe+1>=lr(D,C),b)if(!mt&&(je||ht)){var Nt=Cr(d,!0),Zt=oe-yt;Ag(d,De,Nt.top+(C===ln?Zt:0)+pn,Nt.left+(C===ln?0:Zt)+pn)}else Ag(d,Xt);ia(je||ht?U:jt),ot&&ue<1&&je||W(J+(ue===1&&!ht?it:0))}}x&&!Y.tween&&!Un&&!vu&&G.restart(!0),a&&(F||T&&ue&&(ue<1||!_d))&&Vl(a.targets).forEach(function(we){return we.classList[je||T?"add":"remove"](a.className)}),o&&!L&&!mt&&o(P),on&&!Un?(L&&(et&&(de==="complete"?i.pause().totalProgress(1):de==="reset"?i.restart(!0).pause():de==="restart"?i.restart(!0):i[de]()),o&&o(P)),(F||!_d)&&(c&&F&&$o(P,c),H[Ie]&&$o(P,H[Ie]),T&&(ue===1?P.kill(!1,1):H[Ie]=0),F||(Ie=ue===1?1:3,H[Ie]&&$o(P,H[Ie]))),v&&!je&&Math.abs(P.getVelocity())>(Ll(v)?v:2500)&&(Cl(P.callbackAnimation),xt?xt.progress(1):Cl(i,de==="reverse"?1:!ue,1))):L&&o&&!Un&&o(P)}if(vt){var ge=E?oe/E.duration()*(E._caScrollDist||0):oe;rt(ge+(N._isFlipped?1:0)),vt(ge)}Mt&&Mt(-oe/E.duration()*(E._caScrollDist||0))}},P.enable=function(mt,te){P.enabled||(P.enabled=!0,vn(D,"resize",Dl),I||vn(D,"scroll",jo),K&&vn(r,"refreshInit",K),mt!==!1&&(P.progress=ee=0,ft=Ct=zt=B()),te!==!1&&P.refresh())},P.getTween=function(mt){return mt&&Y?Y.tween:xt},P.setPositions=function(mt,te,Qt,oe){if(E){var Xe=E.scrollTrigger,ue=E.duration(),Oe=Xe.end-Xe.start;mt=Xe.start+Oe*mt/ue,te=Xe.start+Oe*te/ue}P.refresh(!1,!1,{start:xg(mt,Qt&&!!P._startClamp),end:xg(te,Qt&&!!P._endClamp)},oe),P.update()},P.adjustPinSpacing=function(mt){if(dt&&mt){var te=dt.indexOf(C.d)+1;dt[te]=parseFloat(dt[te])+mt+pn,dt[1]=parseFloat(dt[1])+mt+pn,ia(dt)}},P.disable=function(mt,te){if(mt!==!1&&P.revert(!0,!0),P.enabled&&(P.enabled=P.isActive=!1,te||xt&&xt.pause(),bt=0,Q&&(Q.uncache=1),K&&xn(r,"refreshInit",K),G&&(G.pause(),Y.tween&&Y.tween.kill()&&(Y.tween=0)),!I)){for(var Qt=xe.length;Qt--;)if(xe[Qt].scroller===D&&xe[Qt]!==P)return;xn(D,"resize",Dl),I||xn(D,"scroll",jo)}},P.kill=function(mt,te){P.disable(mt,te),xt&&!te&&xt.kill(),l&&delete Ed[l];var Qt=xe.indexOf(P);Qt>=0&&xe.splice(Qt,1),Qt===qn&&Pu>0&&qn--,Qt=0,xe.forEach(function(oe){return oe.scroller===P.scroller&&(Qt=1)}),Qt||Zn||(P.scroll.rec=0),i&&(i.scrollTrigger=null,mt&&i.revert({kill:!1}),te||i.kill()),at&&[at,ct,N,gt].forEach(function(oe){return oe.parentNode&&oe.parentNode.removeChild(oe)}),kl===P&&(kl=0),d&&(Q&&(Q.uncache=1),Qt=0,xe.forEach(function(oe){return oe.pin===d&&Qt++}),Qt||(Q.spacer=0)),n.onKill&&n.onKill(P)},xe.push(P),P.enable(!1,!1),Pt&&Pt(P),i&&i.add&&!Ft){var $t=P.update;P.update=function(){P.update=$t,_e.cache++,yt||tt||P.refresh()},qt.delayedCall(.01,P.update),Ft=.01,yt=tt=0}else P.refresh();d&&KM()},r.register=function(n){return ta||(qt=n||Fg(),Og()&&window.document&&r.enable(),ta=Pl),ta},r.defaults=function(n){if(n)for(var i in n)bu[i]=n[i];return bu},r.disable=function(n,i){Pl=0,xe.forEach(function(o){return o[i?"kill":"disable"](n)}),xn(ye,"wheel",jo),xn(Ue,"scroll",jo),clearInterval(xu),xn(Ue,"touchcancel",ar),xn(De,"touchstart",ar),Su(xn,Ue,"pointerdown,touchstart,mousedown",vg),Su(xn,Ue,"pointerup,touchend,mouseup",yg),Du.kill(),yu(xn);for(var s=0;s<_e.length;s+=3)Mu(xn,_e[s],_e[s+1]),Mu(xn,_e[s],_e[s+2])},r.enable=function(){if(ye=window,Ue=document,xi=Ue.documentElement,De=Ue.body,qt){if(Vl=qt.utils.toArray,Nl=qt.utils.clamp,Td=qt.core.context||ar,gd=qt.core.suppressOverwrites||ar,Pd=ye.history.scrollRestoration||"auto",Ad=ye.pageYOffset||0,qt.core.globals("ScrollTrigger",r),De){Pl=1,na=document.createElement("div"),na.style.height="100vh",na.style.position="absolute",Yg(),XM(),nn.register(qt),r.isTouch=nn.isTouch,fs=nn.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),bd=nn.isTouch===1,vn(ye,"wheel",jo),Rd=[ye,Ue,xi,De],qt.matchMedia?(r.matchMedia=function(h){var f=qt.matchMedia(),u;for(u in h)f.add(u,h[u]);return f},qt.addEventListener("matchMediaInit",function(){Xg(),Od()}),qt.addEventListener("matchMediaRevert",function(){return Wg()}),qt.addEventListener("matchMedia",function(){Gs(0,1),qs("matchMedia")}),qt.matchMedia().add("(orientation: portrait)",function(){return vd(),vd})):console.warn("Requires GSAP 3.11.0 or later"),vd(),vn(Ue,"scroll",jo);var n=De.hasAttribute("style"),i=De.style,s=i.borderTopStyle,o=qt.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Cr(De),ln.m=Math.round(a.top+ln.sc())||0,Nn.m=Math.round(a.left+Nn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(De.setAttribute("style",""),De.removeAttribute("style")),xu=setInterval(bg,250),qt.delayedCall(.5,function(){return vu=0}),vn(Ue,"touchcancel",ar),vn(De,"touchstart",ar),Su(vn,Ue,"pointerdown,touchstart,mousedown",vg),Su(vn,Ue,"pointerup,touchend,mouseup",yg),Md=qt.utils.checkPrefix("transform"),Iu.push(Md),ta=On(),Du=qt.delayedCall(.2,Gs).pause(),ea=[Ue,"visibilitychange",function(){var h=ye.innerWidth,f=ye.innerHeight;Ue.hidden?(mg=h,gg=f):(mg!==h||gg!==f)&&Dl()},Ue,"DOMContentLoaded",Gs,ye,"load",Gs,ye,"resize",Dl],yu(vn),xe.forEach(function(h){return h.enable(0,1)}),l=0;l<_e.length;l+=3)Mu(xn,_e[l],_e[l+1]),Mu(xn,_e[l],_e[l+2])}else if(Ue){var c=function h(){r.enable(),Ue.removeEventListener("DOMContentLoaded",h)};Ue.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(_d=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(xu)||(xu=i)&&setInterval(bg,i),"ignoreMobileResize"in n&&(bd=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(yu(xn)||yu(vn,n.autoRefreshEvents||"none"),Dg=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Qn(n),o=_e.indexOf(s),a=Qs(s);~o&&_e.splice(o,a?6:2),i&&(a?Hi.unshift(ye,i,De,i,xi,i):Hi.unshift(s,i))},r.clearMatchMedia=function(n){xe.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(_i(n)?Qn(n):n).getBoundingClientRect(),a=o[s?Hs:Ws]*i||0;return s?o.right-a>0&&o.left+a<ye.innerWidth:o.bottom-a>0&&o.top+a<ye.innerHeight},r.positionInViewport=function(n,i,s){_i(n)&&(n=Qn(n));var o=n.getBoundingClientRect(),a=o[s?Hs:Ws],l=i==null?a/2:i in Uu?Uu[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/ye.innerWidth:(o.top+l)/ye.innerHeight},r.killAll=function(n){if(xe.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Ys.killAll||[];Ys={},i.forEach(function(s){return s()})}},r})();ve.version="3.15.0";ve.saveStyles=function(r){return r?Vl(r).forEach(function(t){if(t&&t.style){var e=gi.indexOf(t);e>=0&&gi.splice(e,5),gi.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),qt.core.getCache(t),Td())}}):gi};ve.revert=function(r,t){return Od(!r,t)};ve.create=function(r,t){return new ve(r,t)};ve.refresh=function(r){return r?Dl(!0):(ta||ve.register())&&Gs(!0)};ve.update=function(r){return++_e.cache&&Rr(r===!0?2:0)};ve.clearScrollMemory=Qg;ve.maxScroll=function(r,t){return lr(r,t?Nn:ln)};ve.getScrollFunc=function(r,t){return Er(Qn(r),t?Nn:ln)};ve.getById=function(r){return Ed[r]};ve.getAll=function(){return xe.filter(function(r){return r.vars.id!=="ScrollSmoother"})};ve.isScrolling=function(){return!!Ci};ve.snapDirectional=Ud;ve.addEventListener=function(r,t){var e=Ys[r]||(Ys[r]=[]);~e.indexOf(t)||e.push(t)};ve.removeEventListener=function(r,t){var e=Ys[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};ve.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,o=function(c,h){var f=[],u=[],d=qt.delayedCall(i,function(){h(f,u),f=[],u=[]}).pause();return function(p){f.length||d.restart(!0),f.push(p.trigger),u.push(p),s<=f.length&&d.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&Fn(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return Fn(s)&&(s=s(),vn(ve,"refresh",function(){return s=t.batchMax()})),Vl(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(ve.create(c))}),e};var Rg=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},Sd=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(nn.isTouch?" pinch-zoom":""):"none",t===xi&&r(De,e)},Au={auto:1,scroll:1},ib=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,o=s._gsap||qt.core.getCache(s),a=On(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==De&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Au[(l=Ai(s)).overflowY]||Au[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Qs(s)&&(Au[(l=Ai(s)).overflowY]||Au[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},Zg=function(t,e,n,i){return nn.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&ib,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&vn(Ue,nn.eventTypes[0],Ig,!1,!0)},onDisable:function(){return xn(Ue,nn.eventTypes[0],Ig,!0)}})},rb=/(input|label|select|textarea)/i,Pg,Ig=function(t){var e=rb.test(t.target.tagName);(e||Pg)&&(t._gsapAllow=!0,Pg=e)},sb=function(t){Vs(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,o=e.onRelease,a,l,c=Qn(t.target)||xi,h=qt.core.globals().ScrollSmoother,f=h&&h.get(),u=fs&&(t.content&&Qn(t.content)||f&&t.content!==!1&&!f.smooth()&&f.content()),d=Er(c,ln),p=Er(c,Nn),_=1,g=(nn.isTouch&&ye.visualViewport?ye.visualViewport.scale*ye.visualViewport.width:ye.outerWidth)/ye.innerWidth,m=0,M=Fn(i)?function(){return i(a)}:function(){return i||2.8},T,x,b=Zg(c,t.type,!0,s),y=function(){return x=!1},E=ar,v=ar,w=function(){l=lr(c,ln),v=Nl(fs?1:0,l),n&&(E=Nl(0,lr(c,Nn))),T=Xs},C=function(){u._gsap.y=Il(parseFloat(u._gsap.y)+d.offset)+"px",u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(u._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},L=function(){if(x){requestAnimationFrame(y);var nt=Il(a.deltaY/2),$=v(d.v-nt);if(u&&$!==d.v+d.offset){d.offset=$-d.v;var P=Il((parseFloat(u&&u._gsap.y)||0)-d.offset);u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",u._gsap.y=P+"px",d.cacheID=_e.cache,Rr()}return!0}d.offset&&C(),x=!0},D,V,I,O,H=function(){w(),D.isActive()&&D.vars.scrollY>l&&(d()>l?D.progress(1)&&d(l):D.resetTo("scrollY",l))};return u&&qt.set(u,{y:"+=0"}),t.ignoreCheck=function(z){return fs&&z.type==="touchmove"&&L(z)||_>1.05&&z.type!=="touchstart"||a.isGesturing||z.touches&&z.touches.length>1},t.onPress=function(){x=!1;var z=_;_=Il((ye.visualViewport&&ye.visualViewport.scale||1)/g),D.pause(),z!==_&&Sd(c,_>1.01?!0:n?!1:"x"),V=p(),I=d(),w(),T=Xs},t.onRelease=t.onGestureStart=function(z,nt){if(d.offset&&C(),!nt)O.restart(!0);else{_e.cache++;var $=M(),P,K;n&&(P=p(),K=P+$*.05*-z.velocityX/.227,$*=Rg(p,P,K,lr(c,Nn)),D.vars.scrollX=E(K)),P=d(),K=P+$*.05*-z.velocityY/.227,$*=Rg(d,P,K,lr(c,ln)),D.vars.scrollY=v(K),D.invalidate().duration($).play(.01),(fs&&D.vars.scrollY>=l||P>=l-1)&&qt.to({},{onUpdate:H,duration:$})}o&&o(z)},t.onWheel=function(){D._ts&&D.pause(),On()-m>1e3&&(T=0,m=On())},t.onChange=function(z,nt,$,P,K){if(Xs!==T&&w(),nt&&n&&p(E(P[2]===nt?V+(z.startX-z.x):p()+nt-P[1])),$){d.offset&&C();var It=K[2]===$,Et=It?I+z.startY-z.y:d()+$-K[1],zt=v(Et);It&&Et!==zt&&(I+=zt-Et),d(zt)}($||nt)&&Rr()},t.onEnable=function(){Sd(c,n?!1:"x"),ve.addEventListener("refresh",H),vn(ye,"resize",H),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=p.smooth=!1),b.enable()},t.onDisable=function(){Sd(c,!0),xn(ye,"resize",H),ve.removeEventListener("refresh",H),b.kill()},t.lockAxis=t.lockAxis!==!1,a=new nn(t),a.iOS=fs,fs&&!d()&&d(1),fs&&qt.ticker.add(ar),O=a._dc,D=qt.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:qg(d,d(),function(){return D.pause()})},onUpdate:Rr,onComplete:O.vars.onComplete}),a};ve.sort=function(r){if(Fn(r))return xe.sort(r);var t=ye.pageYOffset||0;return ve.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+ye.innerHeight}),xe.sort(r||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};ve.observe=function(r){return new nn(r)};ve.normalizeScroll=function(r){if(typeof r>"u")return Yn;if(r===!0&&Yn)return Yn.enable();if(r===!1){Yn&&Yn.kill(),Yn=r;return}var t=r instanceof nn?r:sb(r);return Yn&&Yn.target===t.target&&Yn.kill(),Qs(t.target)&&(Yn=t),t};ve.core={_getVelocityProp:_u,_inputObserver:Zg,_scrollers:_e,_proxies:Hi,bridge:{ss:function(){Ci||qs("scrollStart"),Ci=On()},ref:function(){return Un}}};Fg()&&qt.registerPlugin(ve);var cr,zd,ob,ku,n2,i2,Jg,Bd,r2,s2=function(){return typeof window<"u"},o2=function(){return cr||s2()&&(cr=window.gsap)&&cr.registerPlugin&&cr},ab=/[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,Fd={rect:["width","height"],circle:["r","r"],ellipse:["rx","ry"],line:["x2","y2"]},Zs=function(t){return Math.round(t*1e4)/1e4},Pr=function(t){return parseFloat(t)||0},$g=function(t,e){var n=Pr(t);return~t.indexOf("%")?n/100*e:n},Fu=function(t,e){return Pr(t.getAttribute(e))},Bu=Math.sqrt,Kg=function(t,e,n,i,s,o){return Bu(Math.pow((Pr(n)-Pr(t))*s,2)+Math.pow((Pr(i)-Pr(e))*o,2))},jg=function(t){return console.warn(t)},a2=function(t){return t.getAttribute("vector-effect")==="non-scaling-stroke"},lb=1,cb=function(t,e,n){var i=t.indexOf(" "),s,o;return i<0?(s=n!==void 0?n+"":t,o=t):(s=t.substr(0,i),o=t.substr(i+1)),s=$g(s,e),o=$g(o,e),s>o?[o,s]:[s,o]},zu=function(t){if(t=zd(t)[0],!t)return 0;var e=t.tagName.toLowerCase(),n=t.style,i=1,s=1,o,a,l,c,h,f,u;a2(t)&&(s=t.getScreenCTM(),i=Bu(s.a*s.a+s.b*s.b),s=Bu(s.d*s.d+s.c*s.c));try{a=t.getBBox()}catch{jg("Some browsers won't measure invisible elements (like display:none or masks inside defs).")}var d=a||{x:0,y:0,width:0,height:0},p=d.x,_=d.y,g=d.width,m=d.height;if((!a||!g&&!m)&&Fd[e]&&(g=Fu(t,Fd[e][0]),m=Fu(t,Fd[e][1]),e!=="rect"&&e!=="line"&&(g*=2,m*=2),e==="line"&&(p=Fu(t,"x1"),_=Fu(t,"y1"),g=Math.abs(g-p),m=Math.abs(m-_))),e==="path")c=n.strokeDasharray,n.strokeDasharray="none",o=t.getTotalLength()||0,Zs(i)!==Zs(s)&&!Jg&&(Jg=1)&&jg("Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."),o*=(i+s)/2,n.strokeDasharray=c;else if(e==="rect")o=g*2*i+m*2*s;else if(e==="line")o=Kg(p,_,p+g,_+m,i,s);else if(e==="polyline"||e==="polygon")for(l=t.getAttribute("points").match(ab)||[],e==="polygon"&&l.push(l[0],l[1]),o=0,h=2;h<l.length;h+=2)o+=Kg(l[h-2],l[h-1],l[h],l[h+1],i,s)||0;else(e==="circle"||e==="ellipse")&&(f=g/2*i,u=m/2*s,o=Math.PI*(3*(f+u)-Bu((3*f+u)*(f+3*u))));return o||0},t2=function(t,e){if(t=zd(t)[0],!t)return[0,0];e||(e=zu(t)+1);var n=ku.getComputedStyle(t),i=n.strokeDasharray||"",s=Pr(n.strokeDashoffset),o=i.indexOf(",");return o<0&&(o=i.indexOf(" ")),i=o<0?e:Pr(i.substr(0,o)),i>e&&(i=e),[-s||0,i-s||0]},e2=function(){s2()&&(ob=document,ku=window,i2=cr=o2(),zd=cr.utils.toArray,Bd=cr.core.getStyleSaver,r2=cr.core.reverting||function(){},n2=((ku.navigator||{}).userAgent||"").indexOf("Edge")!==-1)},kd={version:"3.15.0",name:"drawSVG",register:function(t){cr=t,e2()},init:function(t,e,n,i,s){if(!t.getBBox)return!1;i2||e2();var o=zu(t),a,l,c;return this.styles=Bd&&Bd(t,"strokeDashoffset,strokeDasharray,strokeMiterlimit"),this.tween=n,this._style=t.style,this._target=t,e+""=="true"?e="0 100%":e?(e+"").indexOf(" ")===-1&&(e="0 "+e):e="0 0",a=t2(t,o),l=cb(e,o,a[0]),this._length=Zs(o),this._dash=Zs(a[1]-a[0]),this._offset=Zs(-a[0]),this._dashPT=this.add(this,"_dash",this._dash,Zs(l[1]-l[0]),0,0,0,0,0,1),this._offsetPT=this.add(this,"_offset",this._offset,Zs(-l[0]),0,0,0,0,0,1),n2&&(c=ku.getComputedStyle(t),c.strokeLinecap!==c.strokeLinejoin&&(l=Pr(c.strokeMiterlimit),this.add(t.style,"strokeMiterlimit",l,l+.01))),this._live=a2(t)||~(e+"").indexOf("live"),this._nowrap=~(e+"").indexOf("nowrap"),this._props.push("drawSVG"),lb},render:function(t,e){if(e.tween._time||!r2()){var n=e._pt,i=e._style,s,o,a,l;if(n){for(e._live&&(s=zu(e._target),s!==e._length&&(o=s/e._length,e._length=s,e._offsetPT&&(e._offsetPT.s*=o,e._offsetPT.c*=o),e._dashPT?(e._dashPT.s*=o,e._dashPT.c*=o):e._dash*=o));n;)n.r(t,n.d),n=n._next;a=e._dash||t&&t!==1&&1e-4||0,s=e._length-a+.1,l=e._offset,a&&l&&a+Math.abs(l%e._length)>e._length-.05&&(l+=l<0?.005:-.005)&&(s+=.005),i.strokeDashoffset=a?l:l+.001,i.strokeDasharray=s<.1?"none":a?a+"px,"+(e._nowrap?999999:s)+"px":"0px, 999999px"}}else e.styles.revert()},getLength:zu,getPosition:t2};o2()&&cr.registerPlugin(kd);var hb=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,ub=/(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,fb=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig,db=/(^[#\.][a-z]|[a-y][a-z])/i,pb=Math.PI/180,mb=180/Math.PI,Vu=Math.sin,Gu=Math.cos,Ri=Math.abs,Ir=Math.sqrt,gb=Math.atan2,Vd=1e8,l2=function(t){return typeof t=="string"},p2=function(t){return typeof t=="number"},_b=function(t){return typeof t>"u"},xb={},vb={},Hu=1e5,m2=function(t){return Math.round((t+Vd)%1*Hu)/Hu||(t<0?0:1)},Re=function(t){return Math.round(t*Hu)/Hu||0},c2=function(t){return Math.round(t*1e10)/1e10||0},h2=function(t){return t.closed=Math.abs(t[0]-t[t.length-2])<.001&&Math.abs(t[1]-t[t.length-1])<.001},u2=function(t,e,n,i){var s=t[e],o=i===1?6:Gd(s,n,i);if((o||!i)&&o+n+2<s.length)return t.splice(e,0,s.slice(0,n+o+2)),s.splice(0,n+o),1},g2=function(t,e,n){var i=t.length,s=~~(n*i);if(t[s]>e){for(;--s&&t[s]>e;);s<0&&(s=0)}else for(;t[++s]<e&&s<i;);return s<i?s:i-1},yb=function(t,e){var n=t.length;for(e||t.reverse();n--;)t[n].reversed||bb(t[n])},f2=function(t,e){return e.totalLength=t.totalLength,t.samples?(e.samples=t.samples.slice(0),e.lookup=t.lookup.slice(0),e.minLength=t.minLength,e.resolution=t.resolution):t.totalPoints&&(e.totalPoints=t.totalPoints),e},Sb=function(t,e){var n=t.length,i=t[n-1]||[],s=i.length;n&&e[0]===i[s-2]&&e[1]===i[s-1]&&(e=i.concat(e.slice(2)),n--),t[n]=e};function Wl(r){r=l2(r)&&db.test(r)&&document.querySelector(r)||r;var t=r.getAttribute?r:0,e;return t&&(r=r.getAttribute("d"))?(t._gsPath||(t._gsPath={}),e=t._gsPath[r],e&&!e._dirty?e:t._gsPath[r]=Hl(r)):r?l2(r)?Hl(r):p2(r[0])?[r]:r:console.warn("Expecting a <path> element or an SVG path data string")}function Mb(r){for(var t=[],e=0;e<r.length;e++)t[e]=f2(r[e],r[e].slice(0));return f2(r,t)}function bb(r){var t=0,e;for(r.reverse();t<r.length;t+=2)e=r[t],r[t]=r[t+1],r[t+1]=e;r.reversed=!r.reversed}var Tb=function(t,e){var n=document.createElementNS("http://www.w3.org/2000/svg","path"),i=[].slice.call(t.attributes),s=i.length,o;for(e=","+e+",";--s>-1;)o=i[s].nodeName.toLowerCase(),e.indexOf(","+o+",")<0&&n.setAttributeNS(null,o,i[s].nodeValue);return n},wb={rect:"rx,ry,x,y,width,height",circle:"r,cx,cy",ellipse:"rx,ry,cx,cy",line:"x1,x2,y1,y2"},Eb=function(t,e){for(var n=e?e.split(","):[],i={},s=n.length;--s>-1;)i[n[s]]=+t.getAttribute(n[s])||0;return i};function _2(r,t){var e=r.tagName.toLowerCase(),n=.552284749831,i,s,o,a,l,c,h,f,u,d,p,_,g,m,M,T,x,b,y,E,v,w;return e==="path"||!r.getBBox?r:(c=Tb(r,"x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"),w=Eb(r,wb[e]),e==="rect"?(a=w.rx,l=w.ry||a,s=w.x,o=w.y,d=w.width-a*2,p=w.height-l*2,a||l?(_=s+a*(1-n),g=s+a,m=g+d,M=m+a*n,T=m+a,x=o+l*(1-n),b=o+l,y=b+p,E=y+l*n,v=y+l,i="M"+T+","+b+" V"+y+" C"+[T,E,M,v,m,v,m-(m-g)/3,v,g+(m-g)/3,v,g,v,_,v,s,E,s,y,s,y-(y-b)/3,s,b+(y-b)/3,s,b,s,x,_,o,g,o,g+(m-g)/3,o,m-(m-g)/3,o,m,o,M,o,T,x,T,b].join(",")+"z"):i="M"+(s+d)+","+o+" v"+p+" h"+-d+" v"+-p+" h"+d+"z"):e==="circle"||e==="ellipse"?(e==="circle"?(a=l=w.r,f=a*n):(a=w.rx,l=w.ry,f=l*n),s=w.cx,o=w.cy,h=a*n,i="M"+(s+a)+","+o+" C"+[s+a,o+f,s+h,o+l,s,o+l,s-h,o+l,s-a,o+f,s-a,o,s-a,o-f,s-h,o-l,s,o-l,s+h,o-l,s+a,o-f,s+a,o].join(",")+"z"):e==="line"?i="M"+w.x1+","+w.y1+" L"+w.x2+","+w.y2:(e==="polyline"||e==="polygon")&&(u=(r.getAttribute("points")+"").match(ub)||[],s=u.shift(),o=u.shift(),i="M"+s+","+o+" L"+u.join(","),e==="polygon"&&(i+=","+s+","+o+"z")),c.setAttribute("d",Xd(c._gsRawPath=Hl(i))),t&&r.parentNode&&(r.parentNode.insertBefore(c,r),r.parentNode.removeChild(r)),c)}function x2(r,t,e){var n=r[t],i=r[t+2],s=r[t+4],o;return n+=(i-n)*e,i+=(s-i)*e,n+=(i-n)*e,o=i+(s+(r[t+6]-s)*e-i)*e-n,n=r[t+1],i=r[t+3],s=r[t+5],n+=(i-n)*e,i+=(s-i)*e,n+=(i-n)*e,Re(gb(i+(s+(r[t+7]-s)*e-i)*e-n,o)*mb)}function Hd(r,t,e){e=_b(e)?1:c2(e)||0,t=c2(t)||0;var n=Math.max(0,~~(Ri(e-t)-1e-8)),i=Mb(r);if(t>e&&(t=1-t,e=1-e,yb(i),i.totalLength=0),t<0||e<0){var s=Math.abs(~~Math.min(t,e))+1;t+=s,e+=s}i.totalLength||ds(i);var o=e>1,a=d2(i,t,xb,!0),l=d2(i,e,vb),c=l.segment,h=a.segment,f=l.segIndex,u=a.segIndex,d=l.i,p=a.i,_=u===f,g=d===p&&_,m,M,T,x,b,y,E,v;if(o||n){for(m=f<u||_&&d<p||g&&l.t<a.t,u2(i,u,p,a.t)&&(u++,m||(f++,g?(l.t=(l.t-a.t)/(1-a.t),d=0):_&&(d-=p))),Math.abs(1-(e-t))<1e-5?f=u-1:!l.t&&f?f--:u2(i,f,d,l.t)&&m&&u++,a.t===1&&(u=(u+1)%i.length),b=[],y=i.length,E=1+y*n,v=u,E+=(y-u+f)%y,x=0;x<E;x++)Sb(b,i[v++%y]);i=b}else if(T=l.t===1?6:Gd(c,d,l.t),t!==e)for(M=Gd(h,p,g?a.t/l.t:a.t),_&&(T+=M),c.splice(d+T+2),(M||p)&&h.splice(0,p+M),x=i.length;x--;)(x<u||x>f)&&i.splice(x,1);else c.angle=x2(c,d+T,0),d+=T,a=c[d],l=c[d+1],c.length=c.totalLength=0,c.totalPoints=i.totalPoints=8,c.push(a,l,a,l,a,l,a,l);return i.totalLength=0,i}function Ab(r,t,e){t=t||0,r.samples||(r.samples=[],r.lookup=[]);var n=~~r.resolution||12,i=1/n,s=e?t+e*6+1:r.length,o=r[t],a=r[t+1],l=t?t/6*n:0,c=r.samples,h=r.lookup,f=(t?r.minLength:Vd)||Vd,u=c[l+e*n-1],d=t?c[l-1]:0,p,_,g,m,M,T,x,b,y,E,v,w,C,L,D,V,I;for(c.length=h.length=0,_=t+2;_<s;_+=6){if(g=r[_+4]-o,m=r[_+2]-o,M=r[_]-o,b=r[_+5]-a,y=r[_+3]-a,E=r[_+1]-a,T=x=v=w=0,Ri(g)<.01&&Ri(b)<.01&&Ri(M)+Ri(E)<.01)r.length>8&&(r.splice(_,6),_-=6,s-=6);else for(p=1;p<=n;p++)L=i*p,C=1-L,T=x-(x=(L*L*g+3*C*(L*m+C*M))*L),v=w-(w=(L*L*b+3*C*(L*y+C*E))*L),V=Ir(v*v+T*T),V<f&&(f=V),d+=V,c[l++]=d;o+=g,a+=b}if(u)for(u-=d;l<c.length;l++)c[l]+=u;if(c.length&&f){if(r.totalLength=I=c[c.length-1]||0,r.minLength=f,I/f<9999)for(V=D=0,p=0;p<I;p+=f)h[V++]=c[D]<p?++D:D}else r.totalLength=c[0]=0;return t?d-c[t/2-1]:d}function ds(r,t){var e,n,i;for(i=e=n=0;i<r.length;i++)r[i].resolution=~~t||12,e+=Ab(r[i]),n+=r[i].length;return r.totalPoints=n,r.totalLength=e,r}function Gd(r,t,e){if(e<=0||e>=1)return 0;var n=r[t],i=r[t+1],s=r[t+2],o=r[t+3],a=r[t+4],l=r[t+5],c=r[t+6],h=r[t+7],f=n+(s-n)*e,u=s+(a-s)*e,d=i+(o-i)*e,p=o+(l-o)*e,_=f+(u-f)*e,g=d+(p-d)*e,m=a+(c-a)*e,M=l+(h-l)*e;return u+=(m-u)*e,p+=(M-p)*e,r.splice(t+2,4,Re(f),Re(d),Re(_),Re(g),Re(_+(u-_)*e),Re(g+(p-g)*e),Re(u),Re(p),Re(m),Re(M)),r.samples&&r.samples.splice(t/6*r.resolution|0,0,0,0,0,0,0,0),6}function d2(r,t,e,n){e=e||{},r.totalLength||ds(r),(t<0||t>1)&&(t=m2(t));var i=0,s=r[0],o,a,l,c,h,f,u;if(!t)u=f=i=0,s=r[0];else if(t===1)u=1,i=r.length-1,s=r[i],f=s.length-8;else{if(r.length>1){for(l=r.totalLength*t,h=f=0;(h+=r[f++].totalLength)<l;)i=f;s=r[i],c=h-s.totalLength,t=(l-c)/(h-c)||0}o=s.samples,a=s.resolution,l=s.totalLength*t,f=s.lookup.length?s.lookup[~~(l/s.minLength)]||0:g2(o,l,t),c=f?o[f-1]:0,h=o[f],h<l&&(c=h,h=o[++f]),u=1/a*((l-c)/(h-c)+f%a),f=~~(f/a)*6,n&&u===1&&(f+6<s.length?(f+=6,u=0):i+1<r.length&&(f=u=0,s=r[++i]))}return e.t=u,e.i=f,e.path=r,e.segment=s,e.segIndex=i,e}function Wd(r,t,e,n){var i=r[0],s=n||{},o,a,l,c,h,f,u,d,p;if((t<0||t>1)&&(t=m2(t)),i.lookup||ds(r),r.length>1){for(l=r.totalLength*t,h=f=0;(h+=r[f++].totalLength)<l;)i=r[f];c=h-i.totalLength,t=(l-c)/(h-c)||0}return o=i.samples,a=i.resolution,l=i.totalLength*t,f=i.lookup.length?i.lookup[t<1?~~(l/i.minLength):i.lookup.length-1]||0:g2(o,l,t),c=f?o[f-1]:0,h=o[f],h<l&&(c=h,h=o[++f]),u=1/a*((l-c)/(h-c)+f%a)||0,p=1-u,f=~~(f/a)*6,d=i[f],s.x=Re((u*u*(i[f+6]-d)+3*p*(u*(i[f+4]-d)+p*(i[f+2]-d)))*u+d),s.y=Re((u*u*(i[f+7]-(d=i[f+1]))+3*p*(u*(i[f+5]-d)+p*(i[f+3]-d)))*u+d),e&&(s.angle=i.totalLength?x2(i,f,u>=1?1-1e-9:u||1e-9):i.angle||0),s}function sa(r,t,e,n,i,s,o){for(var a=r.length,l,c,h,f,u;--a>-1;)for(l=r[a],c=l.length,h=0;h<c;h+=2)f=l[h],u=l[h+1],l[h]=f*t+u*n+s,l[h+1]=f*e+u*i+o;return r._dirty=1,r}function Cb(r,t,e,n,i,s,o,a,l){if(!(r===a&&t===l)){e=Ri(e),n=Ri(n);var c=i%360*pb,h=Gu(c),f=Vu(c),u=Math.PI,d=u*2,p=(r-a)/2,_=(t-l)/2,g=h*p+f*_,m=-f*p+h*_,M=g*g,T=m*m,x=M/(e*e)+T/(n*n);x>1&&(e=Ir(x)*e,n=Ir(x)*n);var b=e*e,y=n*n,E=(b*y-b*T-y*M)/(b*T+y*M);E<0&&(E=0);var v=(s===o?-1:1)*Ir(E),w=v*(e*m/n),C=v*-(n*g/e),L=(r+a)/2,D=(t+l)/2,V=L+(h*w-f*C),I=D+(f*w+h*C),O=(g-w)/e,H=(m-C)/n,z=(-g-w)/e,nt=(-m-C)/n,$=O*O+H*H,P=(H<0?-1:1)*Math.acos(O/Ir($)),K=(O*nt-H*z<0?-1:1)*Math.acos((O*z+H*nt)/Ir($*(z*z+nt*nt)));isNaN(K)&&(K=u),!o&&K>0?K-=d:o&&K<0&&(K+=d),P%=d,K%=d;var It=Math.ceil(Ri(K)/(d/4)),Et=[],zt=K/It,Vt=4/3*Vu(zt/2)/(1+Gu(zt/2)),ee=h*e,B=f*e,Y=f*-n,Q=h*n,_t;for(_t=0;_t<It;_t++)i=P+_t*zt,g=Gu(i),m=Vu(i),O=Gu(i+=zt),H=Vu(i),Et.push(g-Vt*m,m+Vt*g,O+Vt*H,H-Vt*O,O,H);for(_t=0;_t<Et.length;_t+=2)g=Et[_t],m=Et[_t+1],Et[_t]=g*ee+m*Y+V,Et[_t+1]=g*B+m*Q+I;return Et[_t-2]=a,Et[_t-1]=l,Et}}function Hl(r){var t=(r+"").replace(fb,function(w){var C=+w;return C<1e-4&&C>-1e-4?0:C}).match(hb)||[],e=[],n=0,i=0,s=2/3,o=t.length,a=0,l="ERROR: malformed path: "+r,c,h,f,u,d,p,_,g,m,M,T,x,b,y,E,v=function(C,L,D,V){M=(D-C)/3,T=(V-L)/3,_.push(C+M,L+T,D-M,V-T,D,V)};if(!r||!isNaN(t[0])||isNaN(t[1]))return console.log(l),e;for(c=0;c<o;c++)if(b=d,isNaN(t[c])?(d=t[c].toUpperCase(),p=d!==t[c]):c--,f=+t[c+1],u=+t[c+2],p&&(f+=n,u+=i),c||(g=f,m=u),d==="M")_&&(_.length<8?e.length-=1:a+=_.length,h2(_)),n=g=f,i=m=u,_=[f,u],e.push(_),c+=2,d="L";else if(d==="C")_||(_=[0,0]),p||(n=i=0),_.push(f,u,n+t[c+3]*1,i+t[c+4]*1,n+=t[c+5]*1,i+=t[c+6]*1),c+=6;else if(d==="S")M=n,T=i,(b==="C"||b==="S")&&(M+=n-_[_.length-4],T+=i-_[_.length-3]),p||(n=i=0),_.push(M,T,f,u,n+=t[c+3]*1,i+=t[c+4]*1),c+=4;else if(d==="Q")M=n+(f-n)*s,T=i+(u-i)*s,p||(n=i=0),n+=t[c+3]*1,i+=t[c+4]*1,_.push(M,T,n+(f-n)*s,i+(u-i)*s,n,i),c+=4;else if(d==="T")M=n-_[_.length-4],T=i-_[_.length-3],_.push(n+M,i+T,f+(n+M*1.5-f)*s,u+(i+T*1.5-u)*s,n=f,i=u),c+=2;else if(d==="H")v(n,i,n=f,i),c+=1;else if(d==="V")v(n,i,n,i=f+(p?i-n:0)),c+=1;else if(d==="L"||d==="Z")d==="Z"&&(f=g,u=m,_.closed=!0),(d==="L"||Ri(n-f)>.5||Ri(i-u)>.5)&&(v(n,i,f,u),d==="L"&&(c+=2)),n=f,i=u;else if(d==="A"){if(y=t[c+4],E=t[c+5],M=t[c+6],T=t[c+7],h=7,y.length>1&&(y.length<3?(T=M,M=E,h--):(T=E,M=y.substr(2),h-=2),E=y.charAt(1),y=y.charAt(0)),x=Cb(n,i,+t[c+1],+t[c+2],+t[c+3],+y,+E,(p?n:0)+M*1,(p?i:0)+T*1),c+=h,x)for(h=0;h<x.length;h++)_.push(x[h]);n=_[_.length-2],i=_[_.length-1]}else console.log(l);return c=_.length,c<6?(e.pop(),c=0):h2(_),e.totalPoints=a+c,e}function v2(r,t){t===void 0&&(t=1);for(var e=r[0],n=0,i=[e,n],s=2;s<r.length;s+=2)i.push(e,n,r[s],n=(r[s]-e)*t/2,e=r[s],-n);return i}function Wu(r,t){Ri(r[0]-r[2])<1e-4&&Ri(r[1]-r[3])<1e-4&&(r=r.slice(2));var e=r.length-2,n=+r[0],i=+r[1],s=+r[2],o=+r[3],a=[n,i,n,i],l=s-n,c=o-i,h=r.nonSmooth||[],f=Math.abs(r[e]-n)<.001&&Math.abs(r[e+1]-i)<.001,u,d,p,_,g,m,M,T,x,b,y,E,v,w,C;if(!e)return[n,i,n,i,n,i,n,i];for(f&&(r.push(s,o),s=n,o=i,n=r[e-2],i=r[e-1],r.unshift(n,i),e+=4,h=[0,0].concat(h)),t=t||t===0?+t:1,p=2;p<e;p+=2)if(u=n,d=i,n=s,i=o,s=+r[p+2],o=+r[p+3],!(n===s&&i===o)){if(_=l,g=c,l=s-n,c=o-i,h[p]){a.push(n-(n-u)/4,i-(i-d)/4,n,i,n+(s-n)/4,i+(o-i)/4);continue}m=Ir(_*_+g*g),M=Ir(l*l+c*c),T=Ir(Math.pow(l/M+_/m,2)+Math.pow(c/M+g/m,2)),x=(m+M)*t*.25/T,b=n-(n-u)*(m?x/m:0),y=n+(s-n)*(M?x/M:0),E=n-(b+((y-b)*(m*3/(m+M)+.5)/4||0)),v=i-(i-d)*(m?x/m:0),w=i+(o-i)*(M?x/M:0),C=i-(v+((w-v)*(m*3/(m+M)+.5)/4||0)),a.push(Re(b+E),Re(v+C),Re(n),Re(i),Re(y+E),Re(w+C))}return n!==s||i!==o||a.length<4?a.push(Re(s),Re(o),Re(s),Re(o)):a.length-=2,a.length===2?a.push(n,i,n,i,n,i):f&&(a.splice(0,6),a.length-=6),a.closed=f,a}function Xd(r){p2(r[0])&&(r=[r]);var t="",e=r.length,n,i,s,o;for(i=0;i<e;i++){for(o=r[i],t+="M"+Re(o[0])+","+Re(o[1])+" C",n=o.length,s=2;s<n;s++)t+=Re(o[s++])+","+Re(o[s++])+" "+Re(o[s++])+","+Re(o[s++])+" "+Re(o[s++])+","+Re(o[s])+" ";o.closed&&(t+="z")}return t}var Lr,Js,Zd,Yu,Xl,Xu,Qu,Ql,Wi="transform",qd=Wi+"Origin",y2,S2=function(t){var e=t.ownerDocument||t;for(!(Wi in t.style)&&("msTransform"in t.style)&&(Wi="msTransform",qd=Wi+"Origin");e.parentNode&&(e=e.parentNode););if(Js=window,Qu=new Yl,e){Lr=e,Zd=e.documentElement,Yu=e.body,Ql=Lr.createElementNS("http://www.w3.org/2000/svg","g"),Ql.style.transform="none";var n=e.createElement("div"),i=e.createElement("div"),s=e&&(e.body||e.firstElementChild);s&&s.appendChild&&(s.appendChild(n),n.appendChild(i),n.style.position="static",n.style.transform="translate3d(0,0,1px)",y2=i.offsetParent!==n,s.removeChild(n))}return e},Rb=function(t){for(var e,n;t&&t!==Yu;)n=t._gsap,n&&n.uncache&&n.get(t,"x"),n&&!n.scaleX&&!n.scaleY&&n.renderTransform&&(n.scaleX=n.scaleY=1e-4,n.renderTransform(1,n),e?e.push(n):e=[n]),t=t.parentNode;return e},M2=[],b2=[],Pb=function(){return Js.pageYOffset||Lr.scrollTop||Zd.scrollTop||Yu.scrollTop||0},Ib=function(){return Js.pageXOffset||Lr.scrollLeft||Zd.scrollLeft||Yu.scrollLeft||0},Jd=function(t){return t.ownerSVGElement||((t.tagName+"").toLowerCase()==="svg"?t:null)},Lb=function r(t){if(Js.getComputedStyle(t).position==="fixed")return!0;if(t=t.parentNode,t&&t.nodeType===1)return r(t)},Qd=function r(t,e){if(t.parentNode&&(Lr||S2(t))){var n=Jd(t),i=n?n.getAttribute("xmlns")||"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",s=n?e?"rect":"g":"div",o=e!==2?0:100,a=e===3?100:0,l={position:"absolute",display:"block",pointerEvents:"none",margin:"0",padding:"0"},c=Lr.createElementNS?Lr.createElementNS(i.replace(/^https/,"http"),s):Lr.createElement(s);return e&&(n?(Xu||(Xu=r(t)),c.setAttribute("width",.01),c.setAttribute("height",.01),c.setAttribute("transform","translate("+o+","+a+")"),c.setAttribute("fill","transparent"),Xu.appendChild(c)):(Xl||(Xl=r(t),Object.assign(Xl.style,l)),Object.assign(c.style,l,{width:"0.1px",height:"0.1px",top:a+"px",left:o+"px"}),Xl.appendChild(c))),c}throw"Need document and parent."},Db=function(t){for(var e=new Yl,n=0;n<t.numberOfItems;n++)e.multiply(t.getItem(n).matrix);return e},Nb=function(t){var e=t.getCTM(),n;return e||(n=t.style[Wi],t.style[Wi]="none",t.appendChild(Ql),e=Ql.getCTM(),t.removeChild(Ql),n?t.style[Wi]=n:t.style.removeProperty(Wi.replace(/([A-Z])/g,"-$1").toLowerCase())),e||Qu.clone()},Ub=function(t,e){var n=Jd(t),i=t===n,s=n?M2:b2,o=t.parentNode,a=o&&!n&&o.shadowRoot&&o.shadowRoot.appendChild?o.shadowRoot:o,l,c,h,f,u,d;if(t===Js)return t;if(s.length||s.push(Qd(t,1),Qd(t,2),Qd(t,3)),l=n?Xu:Xl,n)i?(h=Nb(t),f=-h.e/h.a,u=-h.f/h.d,c=Qu):t.getBBox?(h=t.getBBox(),c=t.transform?t.transform.baseVal:{},c=c.numberOfItems?c.numberOfItems>1?Db(c):c.getItem(0).matrix:Qu,f=c.a*h.x+c.c*h.y,u=c.b*h.x+c.d*h.y):(c=new Yl,f=u=0),e&&t.tagName.toLowerCase()==="g"&&(f=u=0),(i||!t.getBoundingClientRect().width?n:o).appendChild(l),l.setAttribute("transform","matrix("+c.a+","+c.b+","+c.c+","+c.d+","+(c.e+f)+","+(c.f+u)+")");else{if(f=u=0,y2)for(c=t.offsetParent,h=t;h&&(h=h.parentNode)&&h!==c&&h.parentNode;)(Js.getComputedStyle(h)[Wi]+"").length>4&&(f=h.offsetLeft,u=h.offsetTop,h=0);if(d=Js.getComputedStyle(t),d.position!=="absolute"&&d.position!=="fixed")for(c=t.offsetParent;o&&o!==c;)f+=o.scrollLeft||0,u+=o.scrollTop||0,o=o.parentNode;h=l.style,h.top=t.offsetTop-u+"px",h.left=t.offsetLeft-f+"px",h[Wi]=d[Wi],h[qd]=d[qd],h.position=d.position==="fixed"?"fixed":"absolute",a.appendChild(l)}return l},Yd=function(t,e,n,i,s,o,a){return t.a=e,t.b=n,t.c=i,t.d=s,t.e=o,t.f=a,t},Yl=(function(){function r(e,n,i,s,o,a){e===void 0&&(e=1),n===void 0&&(n=0),i===void 0&&(i=0),s===void 0&&(s=1),o===void 0&&(o=0),a===void 0&&(a=0),Yd(this,e,n,i,s,o,a)}var t=r.prototype;return t.inverse=function(){var n=this.a,i=this.b,s=this.c,o=this.d,a=this.e,l=this.f,c=n*o-i*s||1e-10;return Yd(this,o/c,-i/c,-s/c,n/c,(s*l-o*a)/c,-(n*l-i*a)/c)},t.multiply=function(n){var i=this.a,s=this.b,o=this.c,a=this.d,l=this.e,c=this.f,h=n.a,f=n.c,u=n.b,d=n.d,p=n.e,_=n.f;return Yd(this,h*i+u*o,h*s+u*a,f*i+d*o,f*s+d*a,l+p*i+_*o,c+p*s+_*a)},t.clone=function(){return new r(this.a,this.b,this.c,this.d,this.e,this.f)},t.equals=function(n){var i=this.a,s=this.b,o=this.c,a=this.d,l=this.e,c=this.f;return i===n.a&&s===n.b&&o===n.c&&a===n.d&&l===n.e&&c===n.f},t.apply=function(n,i){i===void 0&&(i={});var s=n.x,o=n.y,a=this.a,l=this.b,c=this.c,h=this.d,f=this.e,u=this.f;return i.x=s*a+o*c+f||0,i.y=s*l+o*h+u||0,i},r})();function $s(r,t,e,n){if(!r||!r.parentNode||(Lr||S2(r)).documentElement===r)return new Yl;var i=Rb(r),s=Jd(r),o=s?M2:b2,a=Ub(r,e),l=o[0].getBoundingClientRect(),c=o[1].getBoundingClientRect(),h=o[2].getBoundingClientRect(),f=a.parentNode,u=!n&&Lb(r),d=new Yl((c.left-l.left)/100,(c.top-l.top)/100,(h.left-l.left)/100,(h.top-l.top)/100,l.left+(u?0:Ib()),l.top+(u?0:Pb()));if(f.removeChild(a),i)for(l=i.length;l--;)c=i[l],c.scaleX=c.scaleY=0,c.renderTransform(1,c);return t?d.inverse():d}var Ob="x,translateX,left,marginLeft,xPercent".split(","),Fb="y,translateY,top,marginTop,yPercent".split(","),Bb=Math.PI/180,Pi,A2,oa,Kd,$d,T2,zb=function(){return Pi||typeof window<"u"&&(Pi=window.gsap)&&Pi.registerPlugin&&Pi},ql=function(t,e,n,i){for(var s=e.length,o=i===2?0:i,a=0,l;a<s;a++)t[o]=l=parseFloat(e[a][n]),i===2&&(t[o+1]=0),o+=2;return t},aa=function(t,e,n){return parseFloat(t._gsap.get(t,e,n||"px"))||0},C2=function(t){var e=t[0],n=t[1],i;for(i=2;i<t.length;i+=2)e=t[i]+=e,n=t[i+1]+=n},w2=function(t,e,n,i,s,o,a,l,c){if(a.type==="cubic")e=[e];else{a.fromCurrent!==!1&&e.unshift(aa(n,i,l),s?aa(n,s,c):0),a.relative&&C2(e);var h=s?Wu:v2;e=[h(e,a.curviness)]}return e=o(R2(e,n,a)),qu(t,n,i,e,"x",l),s&&qu(t,n,s,e,"y",c),ds(e,a.resolution||(a.curviness===0?20:12))},kb=function(t){return t},Vb=/[-+\.]*\d+\.?(?:e-|e\+)?\d*/g,E2=function(t,e,n){var i=$s(t),s=0,o=0,a;return(t.tagName+"").toLowerCase()==="svg"?(a=t.viewBox.baseVal,a.width||(a={width:+t.getAttribute("width"),height:+t.getAttribute("height")})):a=e&&t.getBBox&&t.getBBox(),e&&e!=="auto"&&(s=e.push?e[0]*(a?a.width:t.offsetWidth||0):e.x,o=e.push?e[1]*(a?a.height:t.offsetHeight||0):e.y),n.apply(s||o?i.apply({x:s,y:o}):{x:i.e,y:i.f})},jd=function(t,e,n,i){var s=$s(t.parentNode,!0,!0),o=s.clone().multiply($s(e)),a=E2(t,n,s),l=E2(e,i,s),c=l.x,h=l.y,f;return o.e=o.f=0,i==="auto"&&e.getTotalLength&&e.tagName.toLowerCase()==="path"&&(f=e.getAttribute("d").match(Vb)||[],f=o.apply({x:+f[0],y:+f[1]}),c+=f.x,h+=f.y),f&&(f=o.apply(e.getBBox()),c-=f.x,h-=f.y),o.e=c-a.x,o.f=h-a.y,o},R2=function(t,e,n){var i=n.align,s=n.matrix,o=n.offsetX,a=n.offsetY,l=n.alignOrigin,c=t[0][0],h=t[0][1],f=aa(e,"x"),u=aa(e,"y"),d,p,_;return!t||!t.length?Wl("M0,0L0,0"):(i&&(i==="self"||(d=Kd(i)[0]||e)===e?sa(t,1,0,0,1,f-c,u-h):(l&&l[2]!==!1?Pi.set(e,{transformOrigin:l[0]*100+"% "+l[1]*100+"%"}):l=[aa(e,"xPercent")/-100,aa(e,"yPercent")/-100],p=jd(e,d,l,"auto"),_=p.apply({x:c,y:h}),sa(t,p.a,p.b,p.c,p.d,f+p.e-(_.x-p.e),u+p.f-(_.y-p.f)))),s?sa(t,s.a,s.b,s.c,s.d,s.e,s.f):(o||a)&&sa(t,1,0,0,1,o||0,a||0),t)},qu=function(t,e,n,i,s,o){var a=e._gsap,l=a.harness,c=l&&l.aliases&&l.aliases[n],h=c&&c.indexOf(",")<0?c:n,f=t._pt=new A2(t._pt,e,h,0,0,kb,0,a.set(e,h,t));f.u=oa(a.get(e,h,o))||0,f.path=i,f.pp=s,t._props.push(h)},Gb=function(t,e){return function(n){return t||e!==1?Hd(n,t,e):n}},tp={version:"3.15.0",name:"motionPath",register:function(t,e,n){Pi=t,oa=Pi.utils.getUnit,Kd=Pi.utils.toArray,$d=Pi.core.getStyleSaver,T2=Pi.core.reverting||function(){},A2=n},init:function(t,e,n){if(!Pi)return console.warn("Please gsap.registerPlugin(MotionPathPlugin)"),!1;(!(typeof e=="object"&&!e.style)||!e.path)&&(e={path:e});var i=[],s=e,o=s.path,a=s.autoRotate,l=s.unitX,c=s.unitY,h=s.x,f=s.y,u=o[0],d=Gb(e.start,"end"in e?e.end:1),p,_;if(this.rawPaths=i,this.target=t,this.tween=n,this.styles=$d&&$d(t,"transform"),(this.rotate=a||a===0)&&(this.rOffset=parseFloat(a)||0,this.radians=!!e.useRadians,this.rProp=e.rotation||"rotation",this.rSet=t._gsap.set(t,this.rProp,this),this.ru=oa(t._gsap.get(t,this.rProp))||0),Array.isArray(o)&&!("closed"in o)&&typeof u!="number"){for(_ in u)!h&&~Ob.indexOf(_)?h=_:!f&&~Fb.indexOf(_)&&(f=_);h&&f?i.push(w2(this,ql(ql([],o,h,0),o,f,1),t,h,f,d,e,l||oa(o[0][h]),c||oa(o[0][f]))):h=f=0;for(_ in u)_!==h&&_!==f&&i.push(w2(this,ql([],o,_,2),t,_,0,d,e,oa(o[0][_])))}else p=d(R2(Wl(e.path),t,e)),ds(p,e.resolution),i.push(p),qu(this,t,e.x||"x",p,"x",e.unitX||"px"),qu(this,t,e.y||"y",p,"y",e.unitY||"px");n.vars.immediateRender&&this.render(n.progress(),this)},render:function(t,e){var n=e.rawPaths,i=n.length,s=e._pt;if(e.tween._time||!T2()){for(t>1?t=1:t<0&&(t=0);i--;)Wd(n[i],t,!i&&e.rotate,n[i]);for(;s;)s.set(s.t,s.p,s.path[s.pp]+s.u,s.d,t),s=s._next;e.rotate&&e.rSet(e.target,e.rProp,n[0].angle*(e.radians?Bb:1)+e.rOffset+e.ru,e,t)}else e.styles.revert()},getLength:function(t){return ds(Wl(t)).totalLength},sliceRawPath:Hd,getRawPath:Wl,pointsToSegment:Wu,stringToRawPath:Hl,rawPathToString:Xd,transformRawPath:sa,getGlobalMatrix:$s,getPositionOnPath:Wd,cacheRawPathMeasurements:ds,convertToPath:function(t,e){return Kd(t).map(function(n){return _2(n,e!==!1)})},convertCoordinates:function(t,e,n){var i=$s(e,!0,!0).multiply($s(t));return n?i.apply(n):i},getAlignMatrix:jd,getRelativePosition:function(t,e,n,i){var s=jd(t,e,n,i);return{x:s.e,y:s.f}},arrayToRawPath:function(t,e){e=e||{};var n=ql(ql([],t,e.x||"x",0),t,e.y||"y",1);return e.relative&&C2(n),[e.type==="cubic"?n:Wu(n,e.curviness)]}};zb()&&Pi.registerPlugin(tp);var P2="1.3.27";function D2(r,t,e){return Math.max(r,Math.min(t,e))}function Hb(r,t,e){return(1-e)*r+e*t}function Wb(r,t,e,n){return Hb(r,t,1-Math.exp(-e*n))}function Xb(r,t){return(r%t+t)%t}var Qb=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(r){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=r;let e=D2(0,this.currentTime/this.duration,1);t=e>=1;let n=t?1:this.easing(e);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=Wb(this.value,this.to,this.lerp*60,r),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(r,t,{lerp:e,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=o}};function Yb(r,t){let e;return function(...n){clearTimeout(e),e=setTimeout(()=>{e=void 0,r.apply(this,n)},t)}}var qb=class{width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;constructor(r,t,{autoResize:e=!0,debounce:n=250}={}){this.wrapper=r,this.content=t,e&&(this.debouncedResize=Yb(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},N2=class{events={};emit(r,...t){let e=this.events[r]||[];for(let n=0,i=e.length;n<i;n++)e[n]?.(...t)}on(r,t){return this.events[r]?this.events[r].push(t):this.events[r]=[t],()=>{this.events[r]=this.events[r]?.filter(e=>t!==e)}}off(r,t){this.events[r]=this.events[r]?.filter(e=>t!==e)}destroy(){this.events={}}},Zb=100/6,ps={passive:!1};function I2(r,t){return r===1?Zb:r===2?t:1}var Jb=class{touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new N2;constructor(r,t={wheelMultiplier:1,touchMultiplier:1}){this.element=r,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,ps),this.element.addEventListener("touchstart",this.onTouchStart,ps),this.element.addEventListener("touchmove",this.onTouchMove,ps),this.element.addEventListener("touchend",this.onTouchEnd,ps)}on(r,t){return this.emitter.on(r,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,ps),this.element.removeEventListener("touchstart",this.onTouchStart,ps),this.element.removeEventListener("touchmove",this.onTouchMove,ps),this.element.removeEventListener("touchend",this.onTouchEnd,ps)}onTouchStart=r=>{let{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})};onTouchMove=r=>{let{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})};onTouchEnd=r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})};onWheel=r=>{let{deltaX:t,deltaY:e,deltaMode:n}=r,i=I2(n,this.window.width),s=I2(n,this.window.height);t*=i,e*=s,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:r})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}},L2=r=>Math.min(1,1.001-2**(-10*r)),U2=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;_isDraggingSelection=!1;reducedMotionMediaQuery=window.matchMedia("(prefers-reduced-motion: reduce)");isTouching;isIos;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new Qb;emitter=new N2;dimensions;virtualScroll;constructor({wrapper:r=window,content:t=document.documentElement,eventsTarget:e=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:h=!1,orientation:f="vertical",gestureOrientation:u=f==="horizontal"?"both":"vertical",touchMultiplier:d=1,wheelMultiplier:p=1,autoResize:_=!0,prevent:g,virtualScroll:m,overscroll:M=!0,autoRaf:T=!1,anchors:x=!1,autoToggle:b=!1,allowNestedScroll:y=!1,__experimental__naiveDimensions:E=!1,naiveDimensions:v=E,stopInertiaOnNavigate:w=!1,respectReducedMotion:C=!0}={}){window.lenisVersion=P2,window.lenis||(window.lenis={}),window.lenis.version=P2,f==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=L2:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:t,eventsTarget:e,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:u,orientation:f,touchMultiplier:d,wheelMultiplier:p,autoResize:_,prevent:g,virtualScroll:m,overscroll:M,autoRaf:T,anchors:x,autoToggle:b,allowNestedScroll:y,naiveDimensions:v,stopInertiaOnNavigate:w,respectReducedMotion:C},this.dimensions=new qb(r,t,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new Jb(e,{touchMultiplier:d,wheelMultiplier:p}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,t){return this.emitter.on(r,t)}off(r,t){return this.emitter.off(r,t)}onScrollEnd=r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){let r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=r=>{r.propertyName?.includes("overflow")&&r.target===this.rootElement&&this.checkOverflow()};setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}onClick=r=>{let t=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),e=new URL(window.location.href);if(this.options.anchors){let n=t.find(i=>e.host===i.host&&e.pathname===i.pathname&&i.hash);if(n){let i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(n.hash);this.scrollTo(s,i);return}}if(this.options.stopInertiaOnNavigate&&t.some(n=>e.host===n.host&&e.pathname!==n.pathname)){this.reset();return}};onPointerDown=r=>{r.button===1&&this.reset()};isTouchOnSelectionHandle(r){let t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;let e=r.targetTouches[0]??r.changedTouches[0];if(!e)return!1;let n=t.getRangeAt(0).getClientRects();if(n.length===0)return!1;let i=n[0],s=n[n.length-1],o=40,a=Math.hypot(e.clientX-i.left,e.clientY-i.top)<=o,l=Math.hypot(e.clientX-s.right,e.clientY-s.bottom)<=o;return a||l}onVirtualScroll=r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;let{deltaX:t,deltaY:e,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;let i=n.type.includes("touch"),s=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";let o=t===0&&e===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let a=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));let c=this.options.prevent,h=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(l.find(p=>p instanceof HTMLElement&&(typeof c=="function"&&c?.(p)||p.hasAttribute?.("data-lenis-prevent")||h==="vertical"&&p.hasAttribute?.("data-lenis-prevent-vertical")||h==="horizontal"&&p.hasAttribute?.("data-lenis-prevent-horizontal")||i&&p.hasAttribute?.("data-lenis-prevent-touch")||s&&p.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(p,{deltaX:t,deltaY:e}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let f=e;this.options.gestureOrientation==="both"?f=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(f=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();let u=i&&this.options.syncTouch,d=i&&n.type==="touchend";d&&(f=Math.sign(f)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+f,{programmatic:!1,...u?{lerp:d?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=r=>{let t=r-(this.time||r);this.time=r,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(r,{offset:t=0,immediate:e=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:h=!1,userData:f}={}){if(this.prefersReducedMotion&&(i?e=!0:(s=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!h)return;let u=r,d=t;if(typeof u=="string"&&["top","left","start","#"].includes(u))u=0;else if(typeof u=="string"&&["bottom","right","end"].includes(u))u=this.limit;else{let p=null;if(typeof u=="string"?(p=u.startsWith("#")?document.getElementById(u.slice(1)):document.querySelector(u),p||(u==="#top"?u=0:console.warn("Lenis: Target not found",u))):u instanceof Element&&(p=u),p){if(this.options.wrapper!==window){let x=this.rootElement.getBoundingClientRect();d-=this.isHorizontal?x.left:x.top}let _=p.getBoundingClientRect(),g=getComputedStyle(p),m=this.isHorizontal?Number.parseFloat(g.scrollMarginLeft):Number.parseFloat(g.scrollMarginTop),M=getComputedStyle(this.rootElement),T=this.isHorizontal?Number.parseFloat(M.scrollPaddingLeft):Number.parseFloat(M.scrollPaddingTop);u=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(m)?0:m)-(Number.isNaN(T)?0:T)}}if(typeof u=="number"){if(u+=d,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;let p=u-this.animatedScroll;p>this.limit/2?u-=this.limit:p<-this.limit/2&&(u+=this.limit)}}else u=D2(0,u,this.limit);if(u===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=f??{},e){this.animatedScroll=this.targetScroll=u,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=u),typeof o=="number"&&typeof a!="function"?a=L2:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,u,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(p,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=p-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=p,this.setScroll(this.scroll),i&&(this.targetScroll=p),_||this.emit(),_&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:t,deltaY:e}){let n=Date.now();r._lenis||(r._lenis={});let i=r._lenis,s,o,a,l,c,h,f,u,d,p;if(n-(i.time??0)>2e3){i.time=Date.now();let y=window.getComputedStyle(r);if(i.computedStyle=y,s=["auto","overlay","scroll"].includes(y.overflowX),o=["auto","overlay","scroll"].includes(y.overflowY),c=["auto"].includes(y.overscrollBehaviorX),h=["auto"].includes(y.overscrollBehaviorY),i.hasOverflowX=s,i.hasOverflowY=o,!(s||o))return!1;f=r.scrollWidth,u=r.scrollHeight,d=r.clientWidth,p=r.clientHeight,a=f>d,l=u>p,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=f,i.scrollHeight=u,i.clientWidth=d,i.clientHeight=p,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=h}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,f=i.scrollWidth,u=i.scrollHeight,d=i.clientWidth,p=i.clientHeight,c=i.hasOverscrollBehaviorX,h=i.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;let _=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical",g,m,M,T,x,b;if(_==="horizontal")g=Math.round(r.scrollLeft),m=f-d,M=t,T=s,x=a,b=c;else if(_==="vertical")g=Math.round(r.scrollTop),m=u-p,M=e,T=o,x=l,b=h;else return!1;return!b&&(g>=m||g<=0)?!0:(M>0?g<m:g>0)&&T&&x}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){let r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?Xb(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(r=>{this.rootElement.classList.add(r)})}cleanUpClassName(){for(let r of Array.from(this.rootElement.classList))(r==="lenis"||r.startsWith("lenis-"))&&this.rootElement.classList.remove(r)}};fu.registerPlugin(ve,kd,tp);var O2={gsap:fu,ScrollTrigger:ve,Lenis:U2};function $b(r){let t=r.stage,e=r.getLayout,n=r.letters||["N","E","X","T"],i=r.colors||["#e91e8c","#1cb5b0","#e91e8c","#1cb5b0"],s=window.matchMedia("(prefers-reduced-motion: reduce)").matches,o;try{o=new No({antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{return null}if(!o.getContext())return null;o.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),o.outputColorSpace=hn,o.domElement.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block",t.appendChild(o.domElement);let a=new gr,l=30,c=20,h=new Sn(l,1,.1,100);h.position.set(0,0,c);let f=new ts(o);a.environment=f.fromScene(new Fo,.03).texture,a.environmentIntensity=.85;let u=new Ts(16777215,1.6);u.position.set(-4,7,9),a.add(u),a.add(new Qa(16777215,16762834,.55));function d(B,Y,Q,_t){for(let ft=Q;ft>=1;ft--)B.save(),B.lineJoin="round",B.globalAlpha=.9/Q,B.strokeStyle=_t,B.lineWidth=ft*2.2,Y(B,!0),B.restore()}function p(B){let _t=document.createElement("canvas");_t.width=_t.height=512;let ft=document.createElement("canvas");ft.width=ft.height=512;let Ct=_t.getContext("2d"),yt=ft.getContext("2d");Ct.fillStyle="#ffffff",Ct.fillRect(0,0,512,512),yt.fillStyle="#7a7a7a",yt.fillRect(0,0,512,512);function tt(Dt,Gt,Ft){Dt.beginPath(),Dt.arc(256,256,Gt,0,Math.PI*2),Dt.strokeStyle=Ft}d(yt,function(Dt){Dt.beginPath(),Dt.arc(256,256,512*.455,0,Math.PI*2),Dt.stroke()},7,"#ffffff"),yt.beginPath(),yt.arc(256,256,512*.4,0,Math.PI*2),yt.fillStyle="#6a6a6a",yt.fill(),Ct.beginPath(),Ct.arc(256,256,512*.4,0,Math.PI*2),Ct.fillStyle="#f1f1f1",Ct.fill();let at="700 "+Math.round(512*.6)+'px "Instrument Sans", "Helvetica Neue", Arial, sans-serif';Ct.font=at,yt.font=at,Ct.textAlign=yt.textAlign="center",Ct.textBaseline=yt.textBaseline="middle";let ct=256+512*.02;Ct.fillStyle="#a3a3a3",Ct.fillText(B,256,ct),d(yt,function(Dt,Gt){Dt.strokeText(B,256,ct)},5,"#ffffff"),yt.fillStyle="#ffffff",yt.fillText(B,256,ct);let N=new xr(_t);N.colorSpace=hn,N.anisotropy=8;let gt=new xr(ft);return gt.anisotropy=8,[N,gt].forEach(function(Dt){Dt.center.set(.5,.5),Dt.rotation=Math.PI/2}),{map:N,bump:gt}}function _(){let Y=document.createElement("canvas");Y.width=Y.height=128;let Q=Y.getContext("2d"),_t=Q.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return _t.addColorStop(0,"rgba(30,24,36,1)"),_t.addColorStop(.5,"rgba(30,24,36,.45)"),_t.addColorStop(1,"rgba(30,24,36,0)"),Q.fillStyle=_t,Q.fillRect(0,0,128,128),new xr(Y)}let g=_(),m=new Ss(1,1,.34,72,1,!1);m.rotateX(Math.PI/2);let M=n.map(function(B,Y){let Q=p(B),_t=new ce(i[Y%i.length]),ft=new Wr({color:_t,map:Q.map,bumpMap:Q.bump,bumpScale:9,roughness:.42,metalness:0,clearcoat:.55,clearcoatRoughness:.35}),Ct=new Wr({color:_t,roughness:.5,clearcoat:.4,clearcoatRoughness:.4}),yt=new be(m,[Ct,ft,ft]);yt.visible=!1,a.add(yt);let tt=new be(new ji(2,2),new Oi({map:g,transparent:!0,depthWrite:!1,opacity:0})),at=new be(new ji(2,2),new Oi({map:g,transparent:!0,depthWrite:!1,opacity:0}));return tt.position.z=-.6,at.position.z=-.5,tt.visible=at.visible=!1,a.add(tt,at),{mesh:yt,floorSh:tt,wallSh:at,i:Y,phase:"wait",t:0,x:0,y:0,vx:0,vy:0,rz:0,wob:0,tilt:(Y%2?1:-1)*.5,tx:0}}),T=1,x=1,b=.01,y=1,E=0,v=-5,w=0,C=5,L=null;function D(B,Y){return{x:(B-T/2)*b,y:(x/2-Y)*b}}function V(){T=t.clientWidth||1,x=t.clientHeight||1,o.setSize(T,x,!1),h.aspect=T/x,h.updateProjectionMatrix(),b=2*c*Math.tan(e0.degToRad(l/2))/x,L=e(T,x),y=L.r*b,w=y*.12,E=D(0,L.floor).y,v=D(L.wall,0).x,C=D(T,0).x,M.forEach(function(B,Y){B.tx=v+y+w+Y*(2*y+w),B.phase==="idle"&&(B.y=E+y)})}let I=0,O=!1,H=0,z=0,nt=!0,$=30;function P(B){I=0,M.forEach(function(Y){Y.t=0,Y.vx=0,Y.vy=0,Y.rz=0,Y.wob=0,B?(Y.phase="idle",Y.x=Y.tx,Y.y=E+y,K(Y,0)):(Y.phase="wait",Y.mesh.visible=Y.floorSh.visible=Y.wallSh.visible=!1)})}function K(B,Y){B.mesh.visible=!0,B.mesh.position.set(B.x,B.y,0),B.mesh.scale.setScalar(y);let Q=Math.max(0,1-Math.max(0,Y)/(y*3.5));B.floorSh.visible=B.wallSh.visible=!0,B.floorSh.position.set(B.x,E-y*.02,-.6),B.floorSh.scale.set(y*(1.15-.25*(1-Q)),y*.16,1),B.floorSh.material.opacity=.42*Q,B.wallSh.position.set(B.x-y*.2,B.y-y*.3,-.5),B.wallSh.scale.set(y*1.05,y*1.05,1),B.wallSh.material.opacity=.16}function It(B){I+=B,M.forEach(function(Q,_t){if(Q.phase==="wait"&&I>=.5+_t*.38&&(Q.phase="live",Q.t=0,Q.x=C+y*2.2,Q.y=E+y+y*(1.4+_t%2*.7),Q.vx=-y*(15+_t*.6),Q.vy=y*2.5,Q.wob=.5),Q.phase==="live"||Q.phase==="idle"){let ft=E+y;Q.vy-=$*y*B*.33,Q.y+=Q.vy*B;let Ct=!1;if(Q.y<=ft&&(Q.y=ft,Math.abs(Q.vy)>y*.9?(Q.vy=-Q.vy*.36,Q.wob=Math.min(1,Q.wob+.3)):(Q.vy=0,Ct=!0)),Q.x+=Q.vx*B,Ct){if(Q.vx*=Math.pow(.1,B),Math.abs(Q.vx)<y*.35){Q.x+=(Q.tx-Q.x)*Math.min(1,B*5);let at=Math.round(Q.rz/(Math.PI*2))*Math.PI*2;Q.rz+=(at-Q.rz)*Math.min(1,B*7)}Q.rz-=Q.vx*B/y}else Q.rz-=Q.vx*B/y*.5;Q.x-y<v&&(Q.x=v+y,Q.vx=Math.abs(Q.vx)*.5,Q.wob=Math.min(1,Q.wob+.35)),Q.x+y>C&&Q.phase==="idle"&&(Q.x=C-y,Q.vx=-Math.abs(Q.vx)*.5),Q.t+=B,Q.wob*=Math.pow(.4,B);let yt=Math.sin(Q.t*9)*Q.wob*.25,tt=Math.sin(Q.t*7+1)*Q.wob*.05*Q.tilt;Q.mesh.rotation.set(0,yt,Q.rz+tt,"XYZ"),K(Q,Q.y-ft),Q.phase==="live"&&Q.x<C-y*3&&(Q.phase="idle")}});let Y=M.filter(function(Q){return Q.phase==="live"||Q.phase==="idle"}).sort(function(Q,_t){return Q.x-_t.x});for(let Q=0;Q<Y.length-1;Q++){let _t=Y[Q],ft=Y[Q+1],Ct=_t.x+y*2-ft.x;if(Ct>0){_t.x-=Ct/2,ft.x+=Ct/2;let yt=_t.vx;_t.vx=ft.vx*.55,ft.vx=yt*.55}}}function Et(B){if(!nt)return;z=requestAnimationFrame(Et);let Y=Math.min(.05,(B-H)/1e3||.016);H=B,O&&It(Y),o.render(a,h)}let zt={x:0,y:0,vx:0,t:0,on:!1};function Vt(B){let Y=t.getBoundingClientRect(),Q=B.clientX-Y.left,_t=B.clientY-Y.top,ft=performance.now();if(zt.on){let yt=Math.max(8,ft-zt.t)/1e3;zt.vx=(Q-zt.x)/yt}zt.x=Q,zt.y=_t,zt.t=ft,zt.on=!0;let Ct=D(Q,_t);M.forEach(function(yt){yt.phase!=="idle"&&yt.phase!=="live"||Math.abs(Ct.x-yt.x)<y*1.05&&Math.abs(Ct.y-yt.y)<y*1.05&&Math.abs(zt.vx)>120&&(yt.vx+=Math.max(-1,Math.min(1,zt.vx/900))*y*5.5,yt.vy=Math.max(yt.vy,y*2.2),yt.wob=Math.min(1,yt.wob+.6),yt.t=0)})}t.addEventListener("pointermove",Vt,{passive:!0}),t.addEventListener("pointerleave",function(){zt.on=!1});let ee=new ResizeObserver(function(){V(),!O||s?P(s):M.forEach(function(B){B.phase==="idle"&&(B.y=E+y)})});return ee.observe(t),V(),P(s),H=performance.now(),z=requestAnimationFrame(Et),{play:function(){V(),P(!1),O=!0},showNow:function(){V(),P(!0),O=!0},destroy:function(){nt=!1,cancelAnimationFrame(z),ee.disconnect(),o.dispose(),o.domElement.remove()}}}return G2(Kb);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

gsap/gsap-core.js:
  (*!
   * GSAP 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.15.0
   * https://gsap.com
   *
   * Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Observer.js:
  (*!
   * Observer 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/DrawSVGPlugin.js:
  (*!
   * DrawSVGPlugin 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/utils/paths.js:
  (*!
   * paths 3.15.0
   * https://gsap.com
   *
   * Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/utils/matrix.js:
  (*!
   * matrix 3.15.0
   * https://gsap.com
   *
   * Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/MotionPathPlugin.js:
  (*!
   * MotionPathPlugin 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
