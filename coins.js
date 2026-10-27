var DHCoins=(()=>{var wo=Object.defineProperty;var Kh=Object.getOwnPropertyDescriptor;var jh=Object.getOwnPropertyNames;var tu=Object.prototype.hasOwnProperty;var eu=(i,t)=>{for(var e in t)wo(i,e,{get:t[e],enumerable:!0})},nu=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of jh(t))!tu.call(i,s)&&s!==e&&wo(i,s,{get:()=>t[s],enumerable:!(n=Kh(t,s))||n.enumerable});return i};var iu=i=>nu(wo({},"__esModule",{value:!0}),i);var ym={};eu(ym,{createPen:()=>$h,startCoins:()=>vm});var Rc=0,cl=1,Ic=2;var hr=1,Pc=2,cs=3,ci=0,Ve=1,ln=2,Dn=0,hs=1,hl=2,ul=3,dl=4,Lc=5;var Ri=100,Dc=101,Nc=102,Uc=103,Fc=104,Oc=200,Bc=201,zc=202,Vc=203,fl=204,pl=205,kc=206,Gc=207,Hc=208,Wc=209,Xc=210,Qc=211,qc=212,Yc=213,Zc=214,Zr=0,Jr=1,$r=2,ji=3,Kr=4,jr=5,ta=6,ea=7,Pa=0,Jc=1,$c=2,Mn=0,ml=1,gl=2,_l=3,ur=4,xl=5,vl=6,yl=7;var Ml=300,hi=301,Ii=302,La=303,Da=304,dr=306,na=1e3,wn=1001,ia=1002,Fe=1003,Kc=1004;var fr=1005;var ze=1006,Na=1007;var ui=1008;var je=1009,Sl=1010,bl=1011,us=1012,Ua=1013,Sn=1014,un=1015,bn=1016,Fa=1017,Oa=1018,ds=1020,El=35902,Tl=35899,wl=1021,Al=1022,dn=1023,An=1026,di=1027,Ba=1028,za=1029,fi=1030,Va=1031;var ka=1033,pr=33776,mr=33777,gr=33778,_r=33779,Ga=35840,Ha=35841,Wa=35842,Xa=35843,Qa=36196,qa=37492,Ya=37496,Za=37488,Ja=37489,xr=37490,$a=37491,Ka=37808,ja=37809,to=37810,eo=37811,no=37812,io=37813,so=37814,ro=37815,ao=37816,oo=37817,lo=37818,co=37819,ho=37820,uo=37821,fo=36492,po=36494,mo=36495,go=36283,_o=36284,vr=36285,xo=36286;var Ls=2300,sa=2301,qr=2302,$o=2303,Ko=2400,jo=2401,tl=2402;var jc=3200;var yr=0,th=1,Xn="",Pe="srgb",Ds="srgb-linear",Ns="linear",de="srgb";var Yr=7680;var eh=519,nh=512,ih=513,sh=514,vo=515,rh=516,ah=517,yo=518,oh=519,lh=35044;var Cl="300 es",_n=2e3,ts=2001;function su(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ru(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Us(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ch(){let i=Us("canvas");return i.style.display="block",i}var jl={},es=null;function Rl(...i){let t="THREE."+i.shift();es?es("log",t,...i):console.log(t,...i)}function hh(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Xt(...i){i=hh(i);let t="THREE."+i.shift();if(es)es("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Qt(...i){i=hh(i);let t="THREE."+i.shift();if(es)es("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Ei(...i){let t=i.join(" ");t in jl||(jl[t]=!0,Xt(...i))}function uh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var dh={[Zr]:Jr,[$r]:ta,[Kr]:ea,[ji]:jr,[Jr]:Zr,[ta]:$r,[ea]:Kr,[jr]:ji},Cn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},He=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],tc=1234567,Cs=Math.PI/180,ns=180/Math.PI;function Pi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(He[i&255]+He[i>>8&255]+He[i>>16&255]+He[i>>24&255]+"-"+He[t&255]+He[t>>8&255]+"-"+He[t>>16&15|64]+He[t>>24&255]+"-"+He[e&63|128]+He[e>>8&255]+"-"+He[e>>16&255]+He[e>>24&255]+He[n&255]+He[n>>8&255]+He[n>>16&255]+He[n>>24&255]).toLowerCase()}function ee(i,t,e){return Math.max(t,Math.min(e,i))}function Il(i,t){return(i%t+t)%t}function au(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function ou(i,t,e){return i!==t?(e-i)/(t-i):0}function Rs(i,t,e){return(1-e)*i+e*t}function lu(i,t,e,n){return Rs(i,t,1-Math.exp(-e*n))}function cu(i,t=1){return t-Math.abs(Il(i,t*2)-t)}function hu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function uu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function du(i,t){return i+Math.floor(Math.random()*(t-i+1))}function fu(i,t){return i+Math.random()*(t-i)}function pu(i){return i*(.5-Math.random())}function mu(i){i!==void 0&&(tc=i);let t=tc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function gu(i){return i*Cs}function _u(i){return i*ns}function xu(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function vu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function yu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Mu(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),d=r((t-n)/2),u=a((t-n)/2),f=r((n-t)/2),_=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*d,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*d,o*c);break;case"ZXZ":i.set(l*d,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*_,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*_,o*c);break;case"ZYZ":i.set(l*_,l*f,o*h,o*c);break;default:Xt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function $i(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function qe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Pl={DEG2RAD:Cs,RAD2DEG:ns,generateUUID:Pi,clamp:ee,euclideanModulo:Il,mapLinear:au,inverseLerp:ou,lerp:Rs,damp:lu,pingpong:cu,smoothstep:hu,smootherstep:uu,randInt:du,randFloat:fu,randFloatSpread:pu,seededRandom:mu,degToRad:gu,radToDeg:_u,isPowerOfTwo:xu,ceilPowerOfTwo:vu,floorPowerOfTwo:yu,setQuaternionFromProperEuler:Mu,normalize:qe,denormalize:$i},mt=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Rn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],_=r[a+2],S=r[a+3];if(d!==S||l!==u||c!==f||h!==_){let m=l*u+c*f+h*_+d*S;m<0&&(u=-u,f=-f,_=-_,S=-S,m=-m);let p=1-o;if(m<.9995){let E=Math.acos(m),A=Math.sin(E);p=Math.sin(p*E)/A,o=Math.sin(o*E)/A,l=l*p+u*o,c=c*p+f*o,h=h*p+_*o,d=d*p+S*o}else{l=l*p+u*o,c=c*p+f*o,h=h*p+_*o,d=d*p+S*o;let E=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=E,c*=E,h*=E,d*=E}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],_=r[a+3];return t[e]=o*_+h*d+l*f-c*u,t[e+1]=l*_+h*u+c*d-o*f,t[e+2]=c*_+h*f+o*u-l*d,t[e+3]=h*_-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),f=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*_,this._y=c*f*d-u*h*_,this._z=c*h*_+u*f*d,this._w=c*h*d-u*f*_;break;case"YXZ":this._x=u*h*d+c*f*_,this._y=c*f*d-u*h*_,this._z=c*h*_-u*f*d,this._w=c*h*d+u*f*_;break;case"ZXY":this._x=u*h*d-c*f*_,this._y=c*f*d+u*h*_,this._z=c*h*_+u*f*d,this._w=c*h*d-u*f*_;break;case"ZYX":this._x=u*h*d-c*f*_,this._y=c*f*d+u*h*_,this._z=c*h*_-u*f*d,this._w=c*h*d+u*f*_;break;case"YZX":this._x=u*h*d+c*f*_,this._y=c*f*d+u*h*_,this._z=c*h*_-u*f*d,this._w=c*h*d-u*f*_;break;case"XZY":this._x=u*h*d-c*f*_,this._y=c*f*d-u*h*_,this._z=c*h*_+u*f*d,this._w=c*h*d+u*f*_;break;default:Xt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ee(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ec.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ec.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this.z=ee(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this.z=ee(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ao.copy(this).projectOnVector(t),this.sub(Ao)}reflect(t){return this.sub(Ao.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ao=new F,ec=new Rn,Jt=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],_=n[8],S=s[0],m=s[3],p=s[6],E=s[1],A=s[4],y=s[7],b=s[2],M=s[5],C=s[8];return r[0]=a*S+o*E+l*b,r[3]=a*m+o*A+l*M,r[6]=a*p+o*y+l*C,r[1]=c*S+h*E+d*b,r[4]=c*m+h*A+d*M,r[7]=c*p+h*y+d*C,r[2]=u*S+f*E+_*b,r[5]=u*m+f*A+_*M,r[8]=u*p+f*y+_*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,_=e*d+n*u+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/_;return t[0]=d*S,t[1]=(s*c-h*n)*S,t[2]=(o*n-s*a)*S,t[3]=u*S,t[4]=(h*e-s*l)*S,t[5]=(s*r-o*e)*S,t[6]=f*S,t[7]=(n*l-c*e)*S,t[8]=(a*e-n*r)*S,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Ei("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Co.makeScale(t,e)),this}rotate(t){return Ei("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Co.makeRotation(-t)),this}translate(t,e){return Ei("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Co.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Co=new Jt,nc=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ic=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Su(){let i={enabled:!0,workingColorSpace:Ds,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===de&&(s.r=kn(s.r),s.g=kn(s.g),s.b=kn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===de&&(s.r=Ki(s.r),s.g=Ki(s.g),s.b=Ki(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Xn?Ns:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ei("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ei("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ds]:{primaries:t,whitePoint:n,transfer:Ns,toXYZ:nc,fromXYZ:ic,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Pe},outputColorSpaceConfig:{drawingBufferColorSpace:Pe}},[Pe]:{primaries:t,whitePoint:n,transfer:de,toXYZ:nc,fromXYZ:ic,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Pe}}}),i}var ae=Su();function kn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ki(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Oi,ra=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Oi===void 0&&(Oi=Us("canvas")),Oi.width=t.width,Oi.height=t.height;let s=Oi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Oi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Us("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=kn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(kn(e[n]/255)*255):e[n]=kn(e[n]);return{data:e,width:t.width,height:t.height}}else return Xt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},bu=0,is=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:bu++}),this.uuid=Pi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ro(s[a].image)):r.push(Ro(s[a]))}else r=Ro(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ro(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ra.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Xt("Texture: Unable to serialize Texture."),{})}var Eu=0,Io=new F,Ye=class i extends Cn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=wn,s=wn,r=ze,a=ui,o=dn,l=je,c=i.DEFAULT_ANISOTROPY,h=Xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Eu++}),this.uuid=Pi(),this.name="",this.source=new is(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Io).x}get height(){return this.source.getSize(Io).y}get depth(){return this.source.getSize(Io).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Xt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Xt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ml)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case na:t.x=t.x-Math.floor(t.x);break;case wn:t.x=t.x<0?0:1;break;case ia:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case na:t.y=t.y-Math.floor(t.y);break;case wn:t.y=t.y<0?0:1;break;case ia:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=Ml;Ye.DEFAULT_ANISOTROPY=1;var be=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],_=l[9],S=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-S)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+S)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(c+1)/2,y=(f+1)/2,b=(p+1)/2,M=(h+u)/4,C=(d+S)/4,x=(_+m)/4;return A>y&&A>b?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=M/n,r=C/n):y>b?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=M/s,r=x/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=C/r,s=x/r),this.set(n,s,r,e),this}let E=Math.sqrt((m-_)*(m-_)+(d-S)*(d-S)+(u-h)*(u-h));return Math.abs(E)<.001&&(E=1),this.x=(m-_)/E,this.y=(d-S)/E,this.z=(u-h)/E,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this.z=ee(this.z,t.z,e.z),this.w=ee(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this.z=ee(this.z,t,e),this.w=ee(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},aa=class extends Cn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ze,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Ye(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:ze,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new is(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ke=class extends aa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Fs=class extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var oa=class extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var fe=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,l,c,h,d,u,f,_,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,d,u,f,_,S,m)}set(t,e,n,s,r,a,o,l,c,h,d,u,f,_,S,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=_,p[11]=S,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Bi.setFromMatrixColumn(t,0).length(),r=1/Bi.setFromMatrixColumn(t,1).length(),a=1/Bi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,f=a*d,_=o*h,S=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+_*c,e[5]=u-S*c,e[9]=-o*l,e[2]=S-u*c,e[6]=_+f*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,_=c*h,S=c*d;e[0]=u+S*o,e[4]=_*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-_,e[6]=S+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,_=c*h,S=c*d;e[0]=u-S*o,e[4]=-a*d,e[8]=_+f*o,e[1]=f+_*o,e[5]=a*h,e[9]=S-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,f=a*d,_=o*h,S=o*d;e[0]=l*h,e[4]=_*c-f,e[8]=u*c+S,e[1]=l*d,e[5]=S*c+u,e[9]=f*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,f=a*c,_=o*l,S=o*c;e[0]=l*h,e[4]=S-u*d,e[8]=_*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+_,e[10]=u-S*d}else if(t.order==="XZY"){let u=a*l,f=a*c,_=o*l,S=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+S,e[5]=a*h,e[9]=f*d-_,e[2]=_*d-f,e[6]=o*h,e[10]=S*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Tu,t,wu)}lookAt(t,e,n){let s=this.elements;return tn.subVectors(t,e),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),Jn.crossVectors(n,tn),Jn.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),Jn.crossVectors(n,tn)),Jn.normalize(),Tr.crossVectors(tn,Jn),s[0]=Jn.x,s[4]=Tr.x,s[8]=tn.x,s[1]=Jn.y,s[5]=Tr.y,s[9]=tn.y,s[2]=Jn.z,s[6]=Tr.z,s[10]=tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],_=n[2],S=n[6],m=n[10],p=n[14],E=n[3],A=n[7],y=n[11],b=n[15],M=s[0],C=s[4],x=s[8],w=s[12],R=s[1],N=s[5],z=s[9],O=s[13],P=s[2],B=s[6],q=s[10],J=s[14],at=s[3],$=s[7],j=s[11],it=s[15];return r[0]=a*M+o*R+l*P+c*at,r[4]=a*C+o*N+l*B+c*$,r[8]=a*x+o*z+l*q+c*j,r[12]=a*w+o*O+l*J+c*it,r[1]=h*M+d*R+u*P+f*at,r[5]=h*C+d*N+u*B+f*$,r[9]=h*x+d*z+u*q+f*j,r[13]=h*w+d*O+u*J+f*it,r[2]=_*M+S*R+m*P+p*at,r[6]=_*C+S*N+m*B+p*$,r[10]=_*x+S*z+m*q+p*j,r[14]=_*w+S*O+m*J+p*it,r[3]=E*M+A*R+y*P+b*at,r[7]=E*C+A*N+y*B+b*$,r[11]=E*x+A*z+y*q+b*j,r[15]=E*w+A*O+y*J+b*it,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],_=t[3],S=t[7],m=t[11],p=t[15],E=l*f-c*u,A=o*f-c*d,y=o*u-l*d,b=a*f-c*h,M=a*u-l*h,C=a*d-o*h;return e*(S*E-m*A+p*y)-n*(_*E-m*b+p*M)+s*(_*A-S*b+p*C)-r*(_*y-S*M+m*C)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],_=t[12],S=t[13],m=t[14],p=t[15],E=e*o-n*a,A=e*l-s*a,y=e*c-r*a,b=n*l-s*o,M=n*c-r*o,C=s*c-r*l,x=h*S-d*_,w=h*m-u*_,R=h*p-f*_,N=d*m-u*S,z=d*p-f*S,O=u*p-f*m,P=E*O-A*z+y*N+b*R-M*w+C*x;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/P;return t[0]=(o*O-l*z+c*N)*B,t[1]=(s*z-n*O-r*N)*B,t[2]=(S*C-m*M+p*b)*B,t[3]=(u*M-d*C-f*b)*B,t[4]=(l*R-a*O-c*w)*B,t[5]=(e*O-s*R+r*w)*B,t[6]=(m*y-_*C-p*A)*B,t[7]=(h*C-u*y+f*A)*B,t[8]=(a*z-o*R+c*x)*B,t[9]=(n*R-e*z-r*x)*B,t[10]=(_*M-S*y+p*E)*B,t[11]=(d*y-h*M-f*E)*B,t[12]=(o*w-a*N-l*x)*B,t[13]=(e*N-n*w+s*x)*B,t[14]=(S*A-_*b-m*E)*B,t[15]=(h*b-d*A+u*E)*B,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,_=r*d,S=a*h,m=a*d,p=o*d,E=l*c,A=l*h,y=l*d,b=n.x,M=n.y,C=n.z;return s[0]=(1-(S+p))*b,s[1]=(f+y)*b,s[2]=(_-A)*b,s[3]=0,s[4]=(f-y)*M,s[5]=(1-(u+p))*M,s[6]=(m+E)*M,s[7]=0,s[8]=(_+A)*C,s[9]=(m-E)*C,s[10]=(1-(u+S))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Bi.set(s[0],s[1],s[2]).length(),o=Bi.set(s[4],s[5],s[6]).length(),l=Bi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),fn.copy(this);let c=1/a,h=1/o,d=1/l;return fn.elements[0]*=c,fn.elements[1]*=c,fn.elements[2]*=c,fn.elements[4]*=h,fn.elements[5]*=h,fn.elements[6]*=h,fn.elements[8]*=d,fn.elements[9]*=d,fn.elements[10]*=d,e.setFromRotationMatrix(fn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=_n,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),_,S;if(l)_=r/(a-r),S=a*r/(a-r);else if(o===_n)_=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===ts)_=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=_n,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s),_,S;if(l)_=1/(a-r),S=a/(a-r);else if(o===_n)_=-2/(a-r),S=-(a+r)/(a-r);else if(o===ts)_=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Bi=new F,fn=new fe,Tu=new F(0,0,0),wu=new F(1,1,1),Jn=new F,Tr=new F,tn=new F,sc=new fe,rc=new Rn,In=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ee(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ee(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ee(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ee(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ee(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ee(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Xt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return sc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(sc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return rc.setFromEuler(this),this.setFromQuaternion(rc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};In.DEFAULT_ORDER="XYZ";var Os=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Au=0,ac=new F,zi=new Rn,Fn=new fe,wr=new F,Ms=new F,Cu=new F,Ru=new Rn,oc=new F(1,0,0),lc=new F(0,1,0),cc=new F(0,0,1),hc={type:"added"},Iu={type:"removed"},Vi={type:"childadded",child:null},Po={type:"childremoved",child:null},Oe=class i extends Cn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Au++}),this.uuid=Pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new F,e=new In,n=new Rn,s=new F(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new fe},normalMatrix:{value:new Jt}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Os,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return zi.setFromAxisAngle(t,e),this.quaternion.multiply(zi),this}rotateOnWorldAxis(t,e){return zi.setFromAxisAngle(t,e),this.quaternion.premultiply(zi),this}rotateX(t){return this.rotateOnAxis(oc,t)}rotateY(t){return this.rotateOnAxis(lc,t)}rotateZ(t){return this.rotateOnAxis(cc,t)}translateOnAxis(t,e){return ac.copy(t).applyQuaternion(this.quaternion),this.position.add(ac.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(oc,t)}translateY(t){return this.translateOnAxis(lc,t)}translateZ(t){return this.translateOnAxis(cc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?wr.copy(t):wr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(Ms,wr,this.up):Fn.lookAt(wr,Ms,this.up),this.quaternion.setFromRotationMatrix(Fn),s&&(Fn.extractRotation(s.matrixWorld),zi.setFromRotationMatrix(Fn),this.quaternion.premultiply(zi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Qt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(hc),Vi.child=t,this.dispatchEvent(Vi),Vi.child=null):Qt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Iu),Po.child=t,this.dispatchEvent(Po),Po.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(hc),Vi.child=t,this.dispatchEvent(Vi),Vi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,t,Cu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,Ru,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Oe.DEFAULT_UP=new F(0,1,0);Oe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var nn=class extends Oe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Pu={type:"move"},ss=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let S of t.hand.values()){let m=e.getJointPose(S,n),p=this._getHandJoint(c,S);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,_=.005;c.inputState.pinching&&u>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Pu)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new nn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},fh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},Ar={h:0,s:0,l:0};function Lo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var $t=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,ae.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ae.workingColorSpace){if(t=Il(t,1),e=ee(e,0,1),n=ee(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Lo(a,r,t+1/3),this.g=Lo(a,r,t),this.b=Lo(a,r,t-1/3)}return ae.colorSpaceToWorking(this,s),this}setStyle(t,e=Pe){function n(r){r!==void 0&&parseFloat(r)<1&&Xt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Xt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Xt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pe){let n=fh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Xt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=kn(t.r),this.g=kn(t.g),this.b=kn(t.b),this}copyLinearToSRGB(t){return this.r=Ki(t.r),this.g=Ki(t.g),this.b=Ki(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pe){return ae.workingToColorSpace(We.copy(this),t),Math.round(ee(We.r*255,0,255))*65536+Math.round(ee(We.g*255,0,255))*256+Math.round(ee(We.b*255,0,255))}getHexString(t=Pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.workingToColorSpace(We.copy(this),e);let n=We.r,s=We.g,r=We.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ae.workingColorSpace){return ae.workingToColorSpace(We.copy(this),e),t.r=We.r,t.g=We.g,t.b=We.b,t}getStyle(t=Pe){ae.workingToColorSpace(We.copy(this),t);let e=We.r,n=We.g,s=We.b;return t!==Pe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL($n),this.setHSL($n.h+t,$n.s+e,$n.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL($n),t.getHSL(Ar);let n=Rs($n.h,Ar.h,e),s=Rs($n.s,Ar.s,e),r=Rs($n.l,Ar.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},We=new $t;$t.NAMES=fh;var Gn=class extends Oe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new In,this.environmentIntensity=1,this.environmentRotation=new In,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},pn=new F,On=new F,Do=new F,Bn=new F,ki=new F,Gi=new F,uc=new F,No=new F,Uo=new F,Fo=new F,Oo=new be,Bo=new be,zo=new be,ei=class i{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),pn.subVectors(t,e),s.cross(pn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){pn.subVectors(s,e),On.subVectors(n,e),Do.subVectors(t,e);let a=pn.dot(pn),o=pn.dot(On),l=pn.dot(Do),c=On.dot(On),h=On.dot(Do),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,_=(a*h-o*l)*u;return r.set(1-f-_,_,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Bn.x),l.addScaledVector(a,Bn.y),l.addScaledVector(o,Bn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Oo.setScalar(0),Bo.setScalar(0),zo.setScalar(0),Oo.fromBufferAttribute(t,e),Bo.fromBufferAttribute(t,n),zo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Oo,r.x),a.addScaledVector(Bo,r.y),a.addScaledVector(zo,r.z),a}static isFrontFacing(t,e,n,s){return pn.subVectors(n,e),On.subVectors(t,e),pn.cross(On).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return pn.subVectors(this.c,this.b),On.subVectors(this.a,this.b),pn.cross(On).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;ki.subVectors(s,n),Gi.subVectors(r,n),No.subVectors(t,n);let l=ki.dot(No),c=Gi.dot(No);if(l<=0&&c<=0)return e.copy(n);Uo.subVectors(t,s);let h=ki.dot(Uo),d=Gi.dot(Uo);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(ki,a);Fo.subVectors(t,r);let f=ki.dot(Fo),_=Gi.dot(Fo);if(_>=0&&f<=_)return e.copy(r);let S=f*c-l*_;if(S<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(Gi,o);let m=h*_-f*d;if(m<=0&&d-h>=0&&f-_>=0)return uc.subVectors(r,s),o=(d-h)/(d-h+(f-_)),e.copy(s).addScaledVector(uc,o);let p=1/(m+S+u);return a=S*p,o=u*p,e.copy(n).addScaledVector(ki,a).addScaledVector(Gi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Pn=class{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,mn):mn.fromBufferAttribute(r,a),mn.applyMatrix4(t.matrixWorld),this.expandByPoint(mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Cr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Cr.copy(n.boundingBox)),Cr.applyMatrix4(t.matrixWorld),this.union(Cr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,mn),mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ss),Rr.subVectors(this.max,Ss),Hi.subVectors(t.a,Ss),Wi.subVectors(t.b,Ss),Xi.subVectors(t.c,Ss),Kn.subVectors(Wi,Hi),jn.subVectors(Xi,Wi),vi.subVectors(Hi,Xi);let e=[0,-Kn.z,Kn.y,0,-jn.z,jn.y,0,-vi.z,vi.y,Kn.z,0,-Kn.x,jn.z,0,-jn.x,vi.z,0,-vi.x,-Kn.y,Kn.x,0,-jn.y,jn.x,0,-vi.y,vi.x,0];return!Vo(e,Hi,Wi,Xi,Rr)||(e=[1,0,0,0,1,0,0,0,1],!Vo(e,Hi,Wi,Xi,Rr))?!1:(Ir.crossVectors(Kn,jn),e=[Ir.x,Ir.y,Ir.z],Vo(e,Hi,Wi,Xi,Rr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(zn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},zn=[new F,new F,new F,new F,new F,new F,new F,new F],mn=new F,Cr=new Pn,Hi=new F,Wi=new F,Xi=new F,Kn=new F,jn=new F,vi=new F,Ss=new F,Rr=new F,Ir=new F,yi=new F;function Vo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){yi.fromArray(i,r);let o=s.x*Math.abs(yi.x)+s.y*Math.abs(yi.y)+s.z*Math.abs(yi.z),l=t.dot(yi),c=e.dot(yi),h=n.dot(yi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Ie=new F,Pr=new mt,Lu=0,sn=class extends Cn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Lu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=lh,this.updateRanges=[],this.gpuType=un,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Pr.fromBufferAttribute(this,e),Pr.applyMatrix3(t),this.setXY(e,Pr.x,Pr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=$i(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=qe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=$i(e,this.array)),e}setX(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=$i(e,this.array)),e}setY(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=$i(e,this.array)),e}setZ(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=$i(e,this.array)),e}setW(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array),s=qe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array),s=qe(s,this.array),r=qe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Bs=class extends sn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var zs=class extends sn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var xe=class extends sn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Du=new Pn,bs=new F,ko=new F,ni=class{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Du.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;bs.subVectors(t,this.center);let e=bs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(bs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ko.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(bs.copy(t.center).add(ko)),this.expandByPoint(bs.copy(t.center).sub(ko))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Nu=0,hn=new fe,Go=new Oe,Qi=new F,en=new Pn,Es=new Pn,Ue=new F,Ze=class i extends Cn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nu++}),this.uuid=Pi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(su(t)?zs:Bs)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return hn.makeRotationFromQuaternion(t),this.applyMatrix4(hn),this}rotateX(t){return hn.makeRotationX(t),this.applyMatrix4(hn),this}rotateY(t){return hn.makeRotationY(t),this.applyMatrix4(hn),this}rotateZ(t){return hn.makeRotationZ(t),this.applyMatrix4(hn),this}translate(t,e,n){return hn.makeTranslation(t,e,n),this.applyMatrix4(hn),this}scale(t,e,n){return hn.makeScale(t,e,n),this.applyMatrix4(hn),this}lookAt(t){return Go.lookAt(t),Go.updateMatrix(),this.applyMatrix4(Go.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qi).negate(),this.translate(Qi.x,Qi.y,Qi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new xe(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Xt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];en.setFromBufferAttribute(r),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ni);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){let n=this.boundingSphere.center;if(en.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Es.setFromBufferAttribute(o),this.morphTargetsRelative?(Ue.addVectors(en.min,Es.min),en.expandByPoint(Ue),Ue.addVectors(en.max,Es.max),en.expandByPoint(Ue)):(en.expandByPoint(Es.min),en.expandByPoint(Es.max))}en.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ue.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ue));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ue.fromBufferAttribute(o,c),l&&(Qi.fromBufferAttribute(t,c),Ue.add(Qi)),s=Math.max(s,n.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new sn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new F,l[x]=new F;let c=new F,h=new F,d=new F,u=new mt,f=new mt,_=new mt,S=new F,m=new F;function p(x,w,R){c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,R),u.fromBufferAttribute(r,x),f.fromBufferAttribute(r,w),_.fromBufferAttribute(r,R),h.sub(c),d.sub(c),f.sub(u),_.sub(u);let N=1/(f.x*_.y-_.x*f.y);isFinite(N)&&(S.copy(h).multiplyScalar(_.y).addScaledVector(d,-f.y).multiplyScalar(N),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-_.x).multiplyScalar(N),o[x].add(S),o[w].add(S),o[R].add(S),l[x].add(m),l[w].add(m),l[R].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let x=0,w=E.length;x<w;++x){let R=E[x],N=R.start,z=R.count;for(let O=N,P=N+z;O<P;O+=3)p(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let A=new F,y=new F,b=new F,M=new F;function C(x){b.fromBufferAttribute(s,x),M.copy(b);let w=o[x];A.copy(w),A.sub(b.multiplyScalar(b.dot(w))).normalize(),y.crossVectors(M,w);let N=y.dot(l[x])<0?-1:1;a.setXYZW(x,A.x,A.y,A.z,N)}for(let x=0,w=E.length;x<w;++x){let R=E[x],N=R.start,z=R.count;for(let O=N,P=N+z;O<P;O+=3)C(t.getX(O+0)),C(t.getX(O+1)),C(t.getX(O+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new sn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new F,r=new F,a=new F,o=new F,l=new F,c=new F,h=new F,d=new F;if(t)for(let u=0,f=t.count;u<f;u+=3){let _=t.getX(u+0),S=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,S),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,_=0;for(let S=0,m=l.length;S<m;S++){o.isInterleavedBufferAttribute?f=l[S]*o.data.stride+o.offset:f=l[S]*h;for(let p=0;p<h;p++)u[_++]=c[f++]}return new sn(u,h,d)}if(this.index===null)return Xt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Ho=new F,Uu=new F,Fu=new Jt,gn=class{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ho.subVectors(n,e).cross(Uu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Ho),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Fu.getNormalMatrix(t),s=this.coplanarPoint(Ho).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Ou=0,Hn=class extends Cn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ou++}),this.uuid=Pi(),this.name="",this.type="Material",this.blending=hs,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fl,this.blendDst=pl,this.blendEquation=Ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $t(0,0,0),this.blendAlpha=0,this.depthFunc=ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=eh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yr,this.stencilZFail=Yr,this.stencilZPass=Yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Xt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Xt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new $t().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new gn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new mt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new mt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Vn=new F,Wo=new F,Lr=new F,Dr=new F,la=class{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Vn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Vn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Vn.copy(this.origin).addScaledVector(this.direction,e),Vn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Wo.copy(t).add(e).multiplyScalar(.5),Lr.copy(e).sub(t).normalize(),Dr.copy(this.origin).sub(Wo);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Lr),o=Dr.dot(this.direction),l=-Dr.dot(Lr),c=Dr.lengthSq(),h=Math.abs(1-a*a),d,u,f,_;if(h>0)if(d=a*l-o,u=a*o-l,_=r*h,d>=0)if(u>=-_)if(u<=_){let S=1/h;d*=S,u*=S,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-_?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=_?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Wo).addScaledVector(Lr,u),f}intersectSphere(t,e){if(t.radius<0)return null;Vn.subVectors(t.center,this.origin);let n=Vn.dot(this.direction),s=Vn.dot(Vn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Vn)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,f=t.z-a.z,_=e.x-a.x,S=e.y-a.y,m=e.z-a.z,p=n.x-a.x,E=n.y-a.y,A=n.z-a.z,y=Math.abs(l),b=Math.abs(c),M=Math.abs(h),C,x,w,R,N,z,O,P,B,q,J,at;if(y>=b&&y>=M?(w=l,z=d,B=_,at=p,l>=0?(C=c,x=h,R=u,N=f,O=S,P=m,q=E,J=A):(C=h,x=c,R=f,N=u,O=m,P=S,q=A,J=E)):b>=M?(w=c,z=u,B=S,at=E,c>=0?(C=h,x=l,R=f,N=d,O=m,P=_,q=A,J=p):(C=l,x=h,R=d,N=f,O=_,P=m,q=p,J=A)):(w=h,z=f,B=m,at=A,h>=0?(C=l,x=c,R=d,N=u,O=_,P=S,q=p,J=E):(C=c,x=l,R=u,N=d,O=S,P=_,q=E,J=p)),w===0)return null;let $=C/w,j=x/w,it=1/w,Ot=R-$*z,bt=N-j*z,Zt=O-$*B,jt=P-j*B,ie=q-$*at,U=J-j*at,Q=ie*jt-U*Zt,k=Ot*U-bt*ie,yt=Zt*bt-jt*Ot;if(s){if(Q<0||k<0||yt<0)return null}else if((Q<0||k<0||yt<0)&&(Q>0||k>0||yt>0))return null;let ht=Q+k+yt;if(ht===0)return null;let Et=it*(Q*z+k*B+yt*at);return(ht>0?Et<0:Et>0)?null:this.at(Et/ht,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xn=class extends Hn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.combine=Pa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},dc=new fe,Mi=new la,Nr=new ni,fc=new F,Ur=new F,Fr=new F,Or=new F,Xo=new F,Br=new F,pc=new F,zr=new F,oe=class extends Oe{constructor(t=new Ze,e=new xn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Br.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(Xo.fromBufferAttribute(d,t),a?Br.addScaledVector(Xo,h):Br.addScaledVector(Xo.sub(e),h))}e.add(Br)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere),Nr.applyMatrix4(r),Mi.copy(t.ray).recast(t.near),!(Nr.containsPoint(Mi.origin)===!1&&(Mi.intersectSphere(Nr,fc)===null||Mi.origin.distanceToSquared(fc)>(t.far-t.near)**2))&&(dc.copy(r).invert(),Mi.copy(t.ray).applyMatrix4(dc),!(n.boundingBox!==null&&Mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Mi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,S=u.length;_<S;_++){let m=u[_],p=a[m.materialIndex],E=Math.max(m.start,f.start),A=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=E,b=A;y<b;y+=3){let M=o.getX(y),C=o.getX(y+1),x=o.getX(y+2);s=Vr(this,p,t,n,c,h,d,M,C,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let _=Math.max(0,f.start),S=Math.min(o.count,f.start+f.count);for(let m=_,p=S;m<p;m+=3){let E=o.getX(m),A=o.getX(m+1),y=o.getX(m+2);s=Vr(this,a,t,n,c,h,d,E,A,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,S=u.length;_<S;_++){let m=u[_],p=a[m.materialIndex],E=Math.max(m.start,f.start),A=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=E,b=A;y<b;y+=3){let M=y,C=y+1,x=y+2;s=Vr(this,p,t,n,c,h,d,M,C,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let _=Math.max(0,f.start),S=Math.min(l.count,f.start+f.count);for(let m=_,p=S;m<p;m+=3){let E=m,A=m+1,y=m+2;s=Vr(this,a,t,n,c,h,d,E,A,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Bu(i,t,e,n,s,r,a,o){let l;if(t.side===Ve?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===ci,o),l===null)return null;zr.copy(o),zr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(zr);return c<e.near||c>e.far?null:{distance:c,point:zr.clone(),object:i}}function Vr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Ur),i.getVertexPosition(l,Fr),i.getVertexPosition(c,Or);let h=Bu(i,t,e,n,Ur,Fr,Or,pc);if(h){let d=new F;ei.getBarycoord(pc,Ur,Fr,Or,d),s&&(h.uv=ei.getInterpolatedAttribute(s,o,l,c,d,new mt)),r&&(h.uv1=ei.getInterpolatedAttribute(r,o,l,c,d,new mt)),a&&(h.normal=ei.getInterpolatedAttribute(a,o,l,c,d,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new F,materialIndex:0};ei.getNormal(Ur,Fr,Or,u.normal),h.face=u,h.barycoord=d}return h}var Vs=class extends Ye{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Fe,h=Fe,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ks=class extends sn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},qi=new fe,mc=new fe,kr=[],gc=new Pn,zu=new fe,Ts=new oe,ws=new ni,Gs=class extends oe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ks(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,zu)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Pn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,qi),gc.copy(t.boundingBox).applyMatrix4(qi),this.boundingBox.union(gc)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ni),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,qi),ws.copy(t.boundingSphere).applyMatrix4(qi),this.boundingSphere.union(ws)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Ts.geometry=this.geometry,Ts.material=this.material,Ts.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ws.copy(this.boundingSphere),ws.applyMatrix4(n),t.ray.intersectsSphere(ws)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,qi),mc.multiplyMatrices(n,qi),Ts.matrixWorld=mc,Ts.raycast(t,kr);for(let a=0,o=kr.length;a<o;a++){let l=kr[a];l.instanceId=r,l.object=this,e.push(l)}kr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new ks(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Vs(new Float32Array(s*this.count),s,this.count,Ba,un));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Si=new ni,Vu=new mt(.5,.5),Gr=new F,rs=class{constructor(t=new gn,e=new gn,n=new gn,s=new gn,r=new gn,a=new gn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=_n,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],_=r[8],S=r[9],m=r[10],p=r[11],E=r[12],A=r[13],y=r[14],b=r[15];if(s[0].setComponents(c-a,f-h,p-_,b-E).normalize(),s[1].setComponents(c+a,f+h,p+_,b+E).normalize(),s[2].setComponents(c+o,f+d,p+S,b+A).normalize(),s[3].setComponents(c-o,f-d,p-S,b-A).normalize(),n)s[4].setComponents(l,u,m,y).normalize(),s[5].setComponents(c-l,f-u,p-m,b-y).normalize();else if(s[4].setComponents(c-l,f-u,p-m,b-y).normalize(),e===_n)s[5].setComponents(c+l,f+u,p+m,b+y).normalize();else if(e===ts)s[5].setComponents(l,u,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(t){Si.center.set(0,0,0);let e=Vu.distanceTo(t.center);return Si.radius=.7071067811865476+e,Si.applyMatrix4(t.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Gr.x=s.normal.x>0?t.max.x:t.min.x,Gr.y=s.normal.y>0?t.max.y:t.min.y,Gr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Gr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Hs=class extends Ye{constructor(t=[],e=hi,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Wn=class extends Ye{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ii=class extends Ye{constructor(t,e,n=Sn,s,r,a,o=Fe,l=Fe,c,h=An,d=1){if(h!==An&&h!==di)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new is(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},ca=class extends ii{constructor(t,e=Sn,n=hi,s,r,a=Fe,o=Fe,l,c=An){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ws=class extends Ye{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},vn=class i extends Ze{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,s,a,2),_("x","z","y",1,-1,t,n,-e,s,a,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new xe(c,3)),this.setAttribute("normal",new xe(h,3)),this.setAttribute("uv",new xe(d,2));function _(S,m,p,E,A,y,b,M,C,x,w){let R=y/C,N=b/x,z=y/2,O=b/2,P=M/2,B=C+1,q=x+1,J=0,at=0,$=new F;for(let j=0;j<q;j++){let it=j*N-O;for(let Ot=0;Ot<B;Ot++){let bt=Ot*R-z;$[S]=bt*E,$[m]=it*A,$[p]=P,c.push($.x,$.y,$.z),$[S]=0,$[m]=0,$[p]=M>0?1:-1,h.push($.x,$.y,$.z),d.push(Ot/C),d.push(1-j/x),J+=1}}for(let j=0;j<x;j++)for(let it=0;it<C;it++){let Ot=u+it+B*j,bt=u+it+B*(j+1),Zt=u+(it+1)+B*(j+1),jt=u+(it+1)+B*j;l.push(Ot,bt,jt),l.push(bt,Zt,jt),at+=6}o.addGroup(f,at,w),f+=at,u+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Xs=class i extends Ze{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new F,h=new mt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=n+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new xe(a,3)),this.setAttribute("normal",new xe(o,3)),this.setAttribute("uv",new xe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ti=class i extends Ze{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],_=0,S=[],m=n/2,p=0;E(),a===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new xe(d,3)),this.setAttribute("normal",new xe(u,3)),this.setAttribute("uv",new xe(f,2));function E(){let y=new F,b=new F,M=0,C=(e-t)/n;for(let x=0;x<=r;x++){let w=[],R=x/r,N=R*(e-t)+t;for(let z=0;z<=s;z++){let O=z/s,P=O*l+o,B=Math.sin(P),q=Math.cos(P);b.x=N*B,b.y=-R*n+m,b.z=N*q,d.push(b.x,b.y,b.z),y.set(B,C,q).normalize(),u.push(y.x,y.y,y.z),f.push(O,1-R),w.push(_++)}S.push(w)}for(let x=0;x<s;x++)for(let w=0;w<r;w++){let R=S[w][x],N=S[w+1][x],z=S[w+1][x+1],O=S[w][x+1];(t>0||w!==0)&&(h.push(R,N,O),M+=3),(e>0||w!==r-1)&&(h.push(N,z,O),M+=3)}c.addGroup(p,M,0),p+=M}function A(y){let b=_,M=new mt,C=new F,x=0,w=y===!0?t:e,R=y===!0?1:-1;for(let z=1;z<=s;z++)d.push(0,m*R,0),u.push(0,R,0),f.push(.5,.5),_++;let N=_;for(let z=0;z<=s;z++){let P=z/s*l+o,B=Math.cos(P),q=Math.sin(P);C.x=w*q,C.y=m*R,C.z=w*B,d.push(C.x,C.y,C.z),u.push(0,R,0),M.x=B*.5+.5,M.y=q*.5*R+.5,f.push(M.x,M.y),_++}for(let z=0;z<s;z++){let O=b+z,P=N+z;y===!0?h.push(P,P+1,O):h.push(P+1,P,O),x+=3}c.addGroup(p,x,y===!0?1:2),p+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var rn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Xt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new mt:new F);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new F,s=[],r=[],a=[],o=new F,l=new fe;for(let f=0;f<=t;f++){let _=f/t;s[f]=this.getTangentAt(_,new F)}r[0]=new F,a[0]=new F;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let _=Math.acos(ee(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,_))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(ee(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let _=1;_<=t;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],f*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},as=class extends rn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new mt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ha=class extends as{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Ll(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var _c=new F,xc=new F,Qo=new Ll,qo=new Ll,Yo=new Ll,ua=class extends rn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new F){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(xc.subVectors(s[0],s[1]).add(s[0]),c=xc);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(_c.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=_c),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,_=Math.pow(c.distanceToSquared(d),f),S=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);S<1e-4&&(S=1),_<1e-4&&(_=S),m<1e-4&&(m=S),Qo.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,_,S,m),qo.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,_,S,m),Yo.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,_,S,m)}else this.curveType==="catmullrom"&&(Qo.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),qo.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Yo.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Qo.calc(l),qo.calc(l),Yo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new F().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function vc(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function ku(i,t){let e=1-i;return e*e*t}function Gu(i,t){return 2*(1-i)*i*t}function Hu(i,t){return i*i*t}function Is(i,t,e,n){return ku(i,t)+Gu(i,e)+Hu(i,n)}function Wu(i,t){let e=1-i;return e*e*e*t}function Xu(i,t){let e=1-i;return 3*e*e*i*t}function Qu(i,t){return 3*(1-i)*i*i*t}function qu(i,t){return i*i*i*t}function Ps(i,t,e,n,s){return Wu(i,t)+Xu(i,e)+Qu(i,n)+qu(i,s)}var Qs=class extends rn{constructor(t=new mt,e=new mt,n=new mt,s=new mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new mt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ps(t,s.x,r.x,a.x,o.x),Ps(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},da=class extends rn{constructor(t=new F,e=new F,n=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new F){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ps(t,s.x,r.x,a.x,o.x),Ps(t,s.y,r.y,a.y,o.y),Ps(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},qs=class extends rn{constructor(t=new mt,e=new mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new mt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},fa=class extends rn{constructor(t=new F,e=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new F){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new F){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ys=class extends rn{constructor(t=new mt,e=new mt,n=new mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new mt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Is(t,s.x,r.x,a.x),Is(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},pa=class extends rn{constructor(t=new F,e=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new F){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Is(t,s.x,r.x,a.x),Is(t,s.y,r.y,a.y),Is(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Zs=class extends rn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new mt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(vc(o,l.x,c.x,h.x,d.x),vc(o,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new mt().fromArray(s))}return this}},el=Object.freeze({__proto__:null,ArcCurve:ha,CatmullRomCurve3:ua,CubicBezierCurve:Qs,CubicBezierCurve3:da,EllipseCurve:as,LineCurve:qs,LineCurve3:fa,QuadraticBezierCurve:Ys,QuadraticBezierCurve3:pa,SplineCurve:Zs}),ma=class extends rn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new el[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new el[s.type]().fromJSON(s))}return this}},Js=class extends ma{constructor(t){super(),this.type="Path",this.currentPoint=new mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new qs(this.currentPoint.clone(),new mt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Ys(this.currentPoint.clone(),new mt(t,e),new mt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Qs(this.currentPoint.clone(),new mt(t,e),new mt(n,s),new mt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Zs(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new as(t,e,n,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},os=class extends Js{constructor(t){super(t),this.uuid=Pi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Js().fromJSON(s))}return this}};function Yu(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=ph(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=ju(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,d=l;for(let u=e;u<s;u+=e){let f=i[u],_=i[u+1];f<o&&(o=f),_<l&&(l=_),f>h&&(h=f),_>d&&(d=_)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return $s(r,a,e,o,l,c,0),a}function ph(i,t,e,n,s){let r;if(s===h0(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=yc(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=yc(a/n|0,i[a],i[a+1],r);return r&&ls(r,r.next)&&(js(r),r=r.next),r}function wi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ls(e,e.next)||we(e.prev,e,e.next)===0)){if(js(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function $s(i,t,e,n,s,r,a){if(!i)return;!a&&r&&s0(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Ju(i,n,s,r):Zu(i)){t.push(l.i,i.i,c.i),js(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=$u(wi(i),t),$s(i,t,e,n,s,r,2)):a===2&&Ku(i,t,e,n,s,r):$s(wi(i),t,e,n,s,r,1);break}}}function Zu(i){let t=i.prev,e=i,n=i.next;if(we(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),d=Math.min(o,l,c),u=Math.max(s,r,a),f=Math.max(o,l,c),_=n.next;for(;_!==t;){if(_.x>=h&&_.x<=u&&_.y>=d&&_.y<=f&&As(s,o,r,l,a,c,_.x,_.y)&&we(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Ju(i,t,e,n){let s=i.prev,r=i,a=i.next;if(we(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,u=a.y,f=Math.min(o,l,c),_=Math.min(h,d,u),S=Math.max(o,l,c),m=Math.max(h,d,u),p=nl(f,_,t,e,n),E=nl(S,m,t,e,n),A=i.prevZ,y=i.nextZ;for(;A&&A.z>=p&&y&&y.z<=E;){if(A.x>=f&&A.x<=S&&A.y>=_&&A.y<=m&&A!==s&&A!==a&&As(o,h,l,d,c,u,A.x,A.y)&&we(A.prev,A,A.next)>=0||(A=A.prevZ,y.x>=f&&y.x<=S&&y.y>=_&&y.y<=m&&y!==s&&y!==a&&As(o,h,l,d,c,u,y.x,y.y)&&we(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;A&&A.z>=p;){if(A.x>=f&&A.x<=S&&A.y>=_&&A.y<=m&&A!==s&&A!==a&&As(o,h,l,d,c,u,A.x,A.y)&&we(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;y&&y.z<=E;){if(y.x>=f&&y.x<=S&&y.y>=_&&y.y<=m&&y!==s&&y!==a&&As(o,h,l,d,c,u,y.x,y.y)&&we(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function $u(i,t){let e=i;do{let n=e.prev,s=e.next.next;!ls(n,s)&&gh(n,e,e.next,s)&&Ks(n,s)&&Ks(s,n)&&(t.push(n.i,e.i,s.i),js(e),js(e.next),e=i=s),e=e.next}while(e!==i);return wi(e)}function Ku(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&o0(a,o)){let l=_h(a,o);a=wi(a,a.next),l=wi(l,l.next),$s(a,t,e,n,s,r,0),$s(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function ju(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=ph(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(a0(c))}s.sort(t0);for(let r=0;r<s.length;r++)e=e0(s[r],e);return e}function t0(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function e0(i,t){let e=n0(i,t);if(!e)return t;let n=_h(e,i);return wi(n,n.next),wi(e,e.next)}function n0(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(ls(i,e))return e;do{if(ls(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&mh(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let d=Math.abs(s-e.y)/(n-e.x);Ks(e,i)&&(d<h||d===h&&(e.x>a.x||e.x===a.x&&i0(a,e)))&&(a=e,h=d)}e=e.next}while(e!==o);return a}function i0(i,t){return we(i.prev,i,t.prev)<0&&we(t.next,i,i.next)<0}function s0(i,t,e,n){let s=i;do s.z===0&&(s.z=nl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,r0(s)}function r0(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function nl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function a0(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function mh(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function As(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&mh(i,t,e,n,s,r,a,o)}function o0(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!l0(i,t)&&(Ks(i,t)&&Ks(t,i)&&c0(i,t)&&(we(i.prev,i,t.prev)||we(i,t.prev,t))||ls(i,t)&&we(i.prev,i,i.next)>0&&we(t.prev,t,t.next)>0)}function we(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ls(i,t){return i.x===t.x&&i.y===t.y}function gh(i,t,e,n){let s=Wr(we(i,t,e)),r=Wr(we(i,t,n)),a=Wr(we(e,n,i)),o=Wr(we(e,n,t));return!!(s!==r&&a!==o||s===0&&Hr(i,e,t)||r===0&&Hr(i,n,t)||a===0&&Hr(e,i,n)||o===0&&Hr(e,t,n))}function Hr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Wr(i){return i>0?1:i<0?-1:0}function l0(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&gh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ks(i,t){return we(i.prev,i,i.next)<0?we(i,t,i.next)>=0&&we(i,i.prev,t)>=0:we(i,t,i.prev)<0||we(i,i.next,t)<0}function c0(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function _h(i,t){let e=il(i.i,i.x,i.y),n=il(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function yc(i,t,e,n){let s=il(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function js(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function il(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function h0(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var sl=class{static triangulate(t,e,n=2){return Yu(t,e,n)}},bi=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Mc(t),Sc(n,t);let a=t.length;e.forEach(Mc);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Sc(n,e[l]);let o=sl.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Mc(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Sc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var tr=class i extends Ze{constructor(t=new os([new mt(.5,.5),new mt(-.5,.5),new mt(-.5,-.5),new mt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new xe(s,3)),this.setAttribute("uv",new xe(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:f-.1,S=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:u0,A,y=!1,b,M,C,x;if(p){A=p.getSpacedPoints(h),y=!0,u=!1;let tt=p.isCatmullRomCurve3?p.closed:!1;b=p.computeFrenetFrames(h,tt),M=new F,C=new F,x=new F}u||(m=0,f=0,_=0,S=0);let w=o.extractPoints(c),R=w.shape,N=w.holes;if(!bi.isClockWise(R)){R=R.reverse();for(let tt=0,st=N.length;tt<st;tt++){let lt=N[tt];bi.isClockWise(lt)&&(N[tt]=lt.reverse())}}function O(tt){let lt=10000000000000001e-36,ot=tt[0];for(let ft=1;ft<=tt.length;ft++){let Pt=ft%tt.length,kt=tt[Pt],Wt=kt.x-ot.x,Bt=kt.y-ot.y,I=Wt*Wt+Bt*Bt,se=Math.max(Math.abs(kt.x),Math.abs(kt.y),Math.abs(ot.x),Math.abs(ot.y)),Kt=lt*se*se;if(I<=Kt){tt.splice(Pt,1),ft--;continue}ot=kt}}O(R),N.forEach(O);let P=N.length,B=R;for(let tt=0;tt<P;tt++){let st=N[tt];R=R.concat(st)}function q(tt,st,lt){return st||Qt("ExtrudeGeometry: vec does not exist"),tt.clone().addScaledVector(st,lt)}let J=R.length;function at(tt,st,lt){let ot,ft,Pt,kt=tt.x-st.x,Wt=tt.y-st.y,Bt=lt.x-tt.x,I=lt.y-tt.y,se=kt*kt+Wt*Wt,Kt=kt*I-Wt*Bt;if(Math.abs(Kt)>Number.EPSILON){let T=Math.sqrt(se),g=Math.sqrt(Bt*Bt+I*I),V=st.x-Wt/T,W=st.y+kt/T,Y=lt.x-I/g,ct=lt.y+Bt/g,ut=((Y-V)*I-(ct-W)*Bt)/(kt*I-Wt*Bt);ot=V+kt*ut-tt.x,ft=W+Wt*ut-tt.y;let K=ot*ot+ft*ft;if(K<=2)return new mt(ot,ft);Pt=Math.sqrt(K/2)}else{let T=!1;kt>Number.EPSILON?Bt>Number.EPSILON&&(T=!0):kt<-Number.EPSILON?Bt<-Number.EPSILON&&(T=!0):Math.sign(Wt)===Math.sign(I)&&(T=!0),T?(ot=-Wt,ft=kt,Pt=Math.sqrt(se)):(ot=kt,ft=Wt,Pt=Math.sqrt(se/2))}return new mt(ot/Pt,ft/Pt)}let $=[];for(let tt=0,st=B.length,lt=st-1,ot=tt+1;tt<st;tt++,lt++,ot++)lt===st&&(lt=0),ot===st&&(ot=0),$[tt]=at(B[tt],B[lt],B[ot]);let j=[],it,Ot=$.concat();for(let tt=0,st=P;tt<st;tt++){let lt=N[tt];it=[];for(let ot=0,ft=lt.length,Pt=ft-1,kt=ot+1;ot<ft;ot++,Pt++,kt++)Pt===ft&&(Pt=0),kt===ft&&(kt=0),it[ot]=at(lt[ot],lt[Pt],lt[kt]);j.push(it),Ot=Ot.concat(it)}let bt;if(m===0)bt=bi.triangulateShape(B,N);else{let tt=[],st=[];for(let lt=0;lt<m;lt++){let ot=lt/m,ft=f*Math.cos(ot*Math.PI/2),Pt=_*Math.sin(ot*Math.PI/2)+S;for(let kt=0,Wt=B.length;kt<Wt;kt++){let Bt=q(B[kt],$[kt],Pt);k(Bt.x,Bt.y,-ft),ot===0&&tt.push(Bt)}for(let kt=0,Wt=P;kt<Wt;kt++){let Bt=N[kt];it=j[kt];let I=[];for(let se=0,Kt=Bt.length;se<Kt;se++){let T=q(Bt[se],it[se],Pt);k(T.x,T.y,-ft),ot===0&&I.push(T)}ot===0&&st.push(I)}}bt=bi.triangulateShape(tt,st)}let Zt=bt.length,jt=_+S;for(let tt=0;tt<J;tt++){let st=u?q(R[tt],Ot[tt],jt):R[tt];y?(C.copy(b.normals[0]).multiplyScalar(st.x),M.copy(b.binormals[0]).multiplyScalar(st.y),x.copy(A[0]).add(C).add(M),k(x.x,x.y,x.z)):k(st.x,st.y,0)}for(let tt=1;tt<=h;tt++)for(let st=0;st<J;st++){let lt=u?q(R[st],Ot[st],jt):R[st];y?(C.copy(b.normals[tt]).multiplyScalar(lt.x),M.copy(b.binormals[tt]).multiplyScalar(lt.y),x.copy(A[tt]).add(C).add(M),k(x.x,x.y,x.z)):k(lt.x,lt.y,d/h*tt)}for(let tt=m-1;tt>=0;tt--){let st=tt/m,lt=f*Math.cos(st*Math.PI/2),ot=_*Math.sin(st*Math.PI/2)+S;for(let ft=0,Pt=B.length;ft<Pt;ft++){let kt=q(B[ft],$[ft],ot);k(kt.x,kt.y,d+lt)}for(let ft=0,Pt=N.length;ft<Pt;ft++){let kt=N[ft];it=j[ft];for(let Wt=0,Bt=kt.length;Wt<Bt;Wt++){let I=q(kt[Wt],it[Wt],ot);y?k(I.x,I.y+A[h-1].y,A[h-1].x+lt):k(I.x,I.y,d+lt)}}}ie(),U();function ie(){let tt=s.length/3;if(u){let st=0,lt=J*st;for(let ot=0;ot<Zt;ot++){let ft=bt[ot];yt(ft[2]+lt,ft[1]+lt,ft[0]+lt)}st=h+m*2,lt=J*st;for(let ot=0;ot<Zt;ot++){let ft=bt[ot];yt(ft[0]+lt,ft[1]+lt,ft[2]+lt)}}else{for(let st=0;st<Zt;st++){let lt=bt[st];yt(lt[2],lt[1],lt[0])}for(let st=0;st<Zt;st++){let lt=bt[st];yt(lt[0]+J*h,lt[1]+J*h,lt[2]+J*h)}}n.addGroup(tt,s.length/3-tt,0)}function U(){let tt=s.length/3,st=0;Q(B,st),st+=B.length;for(let lt=0,ot=N.length;lt<ot;lt++){let ft=N[lt];Q(ft,st),st+=ft.length}n.addGroup(tt,s.length/3-tt,1)}function Q(tt,st){let lt=tt.length;for(;--lt>=0;){let ot=lt,ft=lt-1;ft<0&&(ft=tt.length-1);for(let Pt=0,kt=h+m*2;Pt<kt;Pt++){let Wt=J*Pt,Bt=J*(Pt+1),I=st+ot+Wt,se=st+ft+Wt,Kt=st+ft+Bt,T=st+ot+Bt;ht(I,se,Kt,T)}}}function k(tt,st,lt){l.push(tt),l.push(st),l.push(lt)}function yt(tt,st,lt){Et(tt),Et(st),Et(lt);let ot=s.length/3,ft=E.generateTopUV(n,s,ot-3,ot-2,ot-1);Ct(ft[0]),Ct(ft[1]),Ct(ft[2])}function ht(tt,st,lt,ot){Et(tt),Et(st),Et(ot),Et(st),Et(lt),Et(ot);let ft=s.length/3,Pt=E.generateSideWallUV(n,s,ft-6,ft-3,ft-2,ft-1);Ct(Pt[0]),Ct(Pt[1]),Ct(Pt[3]),Ct(Pt[1]),Ct(Pt[2]),Ct(Pt[3])}function Et(tt){s.push(l[tt*3+0]),s.push(l[tt*3+1]),s.push(l[tt*3+2])}function Ct(tt){r.push(tt.x),r.push(tt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return d0(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new el[s.type]().fromJSON(s)),new i(n,t.options)}},u0={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new mt(r,a),new mt(o,l),new mt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[s*3],f=t[s*3+1],_=t[s*3+2],S=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new mt(a,1-l),new mt(c,1-d),new mt(u,1-_),new mt(S,1-p)]:[new mt(o,1-l),new mt(h,1-d),new mt(f,1-_),new mt(m,1-p)]}};function d0(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var er=class i extends Ze{constructor(t=[new mt(0,-.5),new mt(.5,0),new mt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=ee(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,d=new F,u=new mt,f=new F,_=new F,S=new F,m=0,p=0;for(let E=0;E<=t.length-1;E++)switch(E){case 0:m=t[E+1].x-t[E].x,p=t[E+1].y-t[E].y,f.x=p*1,f.y=-m,f.z=p*0,S.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(S.x,S.y,S.z);break;default:m=t[E+1].x-t[E].x,p=t[E+1].y-t[E].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.x+=S.x,f.y+=S.y,f.z+=S.z,f.normalize(),l.push(f.x,f.y,f.z),S.copy(_)}for(let E=0;E<=e;E++){let A=n+E*h*s,y=Math.sin(A),b=Math.cos(A);for(let M=0;M<=t.length-1;M++){d.x=t[M].x*y,d.y=t[M].y,d.z=t[M].x*b,a.push(d.x,d.y,d.z),u.x=E/e,u.y=M/(t.length-1),o.push(u.x,u.y);let C=l[3*M+0]*y,x=l[3*M+1],w=l[3*M+0]*b;c.push(C,x,w)}}for(let E=0;E<e;E++)for(let A=0;A<t.length-1;A++){let y=A+E*t.length,b=y,M=y+t.length,C=y+t.length+1,x=y+1;r.push(b,M,x),r.push(C,x,M)}this.setIndex(r),this.setAttribute("position",new xe(a,3)),this.setAttribute("uv",new xe(o,2)),this.setAttribute("normal",new xe(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Ln=class i extends Ze{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=e/l,f=[],_=[],S=[],m=[];for(let p=0;p<h;p++){let E=p*u-a;for(let A=0;A<c;A++){let y=A*d-r;_.push(y,-E,0),S.push(0,0,1),m.push(A/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<o;E++){let A=E+c*p,y=E+c*(p+1),b=E+1+c*(p+1),M=E+1+c*p;f.push(A,y,M),f.push(y,b,M)}this.setIndex(f),this.setAttribute("position",new xe(_,3)),this.setAttribute("normal",new xe(S,3)),this.setAttribute("uv",new xe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var nr=class i extends Ze{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new F,u=new F,f=[],_=[],S=[],m=[];for(let p=0;p<=n;p++){let E=[],A=p/n,y=a+A*o,b=t*Math.cos(y),M=Math.sqrt(t*t-b*b),C=0;p===0&&a===0?C=.5/e:p===n&&l===Math.PI&&(C=-.5/e);for(let x=0;x<=e;x++){let w=x/e,R=s+w*r;d.x=-M*Math.cos(R),d.y=b,d.z=M*Math.sin(R),_.push(d.x,d.y,d.z),u.copy(d).normalize(),S.push(u.x,u.y,u.z),m.push(w+C,1-A),E.push(c++)}h.push(E)}for(let p=0;p<n;p++)for(let E=0;E<e;E++){let A=h[p][E+1],y=h[p][E],b=h[p+1][E],M=h[p+1][E+1];(p!==0||a>0)&&f.push(A,y,M),(p!==n-1||l<Math.PI)&&f.push(y,b,M)}this.setIndex(f),this.setAttribute("position",new xe(_,3)),this.setAttribute("normal",new xe(S,3)),this.setAttribute("uv",new xe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Li(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(bc(s))s.isRenderTargetTexture?(Xt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(bc(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Xe(i){let t={};for(let e=0;e<i.length;e++){let n=Li(i[e]);for(let s in n)t[s]=n[s]}return t}function bc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function f0(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Dl(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}var xh={clone:Li,merge:Xe},p0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,m0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,an=class extends Hn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=p0,this.fragmentShader=m0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Li(t.uniforms),this.uniformsGroups=f0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new $t().setHex(s.value);break;case"v2":this.uniforms[n].value=new mt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new F().fromArray(s.value);break;case"v4":this.uniforms[n].value=new be().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Jt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new fe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ga=class extends an{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},yn=class extends Hn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yr,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},si=class extends yn{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new mt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ee(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new $t(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new $t(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new $t(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var ir=class extends Hn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yr,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.combine=Pa,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},_a=class extends Hn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},xa=class extends Hn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Yi(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Zo(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ri=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},va=class extends ri{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ko,endingEnd:Ko}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case jo:r=t,o=2*e-n;break;case tl:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case jo:a=t,l=2*n-e;break;case tl:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,_=(n-e)/(s-e),S=_*_,m=S*_,p=-u*m+2*u*S-u*_,E=(1+u)*m+(-1.5-2*u)*S+(-.5+u)*_+1,A=(-1-f)*m+(1.5+f)*S+.5*_,y=f*m-f*S;for(let b=0;b!==o;++b)r[b]=p*a[h+b]+E*a[c+b]+A*a[l+b]+y*a[d+b];return r}},ya=class extends ri{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},Ma=class extends ri{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Sa=class extends ri{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let _=(n-e)/(s-e),S=1-_;for(let m=0;m!==o;++m)r[m]=a[c+m]*S+a[l+m]*_;return r}let u=o*2,f=t-1;for(let _=0;_!==o;++_){let S=a[c+_],m=a[l+_],p=f*u+_*2,E=d[p],A=d[p+1],y=t*u+_*2,b=h[y],M=h[y+1],C=_0(n,e,E,b,s);r[_]=vh(C,S,A,M,m)}return r}};function vh(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function g0(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function _0(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=vh(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=g0(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var on=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Yi(e,this.TimeBufferType),this.values=Yi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Yi(t.times,Array),values:Yi(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Zo(t.settings)&&(n.settings={inTangents:Yi(t.settings.inTangents,Array),outTangents:Yi(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ma(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ya(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new va(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Sa(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ls:e=this.InterpolantFactoryMethodDiscrete;break;case sa:e=this.InterpolantFactoryMethodLinear;break;case qr:e=this.InterpolantFactoryMethodSmooth;break;case $o:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Xt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ls;case this.InterpolantFactoryMethodLinear:return sa;case this.InterpolantFactoryMethodSmooth:return qr;case this.InterpolantFactoryMethodBezier:return $o}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Zo(this.settings)&&(Ec(this.settings.inTangents,t),Ec(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Qt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Qt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Qt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Qt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&ru(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Qt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===qr,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*n,u=d-n,f=d+n;for(let _=0;_!==n;++_){let S=e[d+_];if(S!==e[u+_]||S!==e[f+_]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Zo(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Ec(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}on.prototype.ValueTypeName="";on.prototype.TimeBufferType=Float32Array;on.prototype.ValueBufferType=Float32Array;on.prototype.DefaultInterpolation=sa;var ai=class extends on{constructor(t,e,n){super(t,e,n)}};ai.prototype.ValueTypeName="bool";ai.prototype.ValueBufferType=Array;ai.prototype.DefaultInterpolation=Ls;ai.prototype.InterpolantFactoryMethodLinear=void 0;ai.prototype.InterpolantFactoryMethodSmooth=void 0;var ba=class extends on{constructor(t,e,n,s){super(t,e,n,s)}};ba.prototype.ValueTypeName="color";var Ea=class extends on{constructor(t,e,n,s){super(t,e,n,s)}};Ea.prototype.ValueTypeName="number";var Ta=class extends ri{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Rn.slerpFlat(r,0,a,c-o,a,c,l);return r}},sr=class extends on{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Ta(this.times,this.values,this.getValueSize(),t)}};sr.prototype.ValueTypeName="quaternion";sr.prototype.InterpolantFactoryMethodSmooth=void 0;var oi=class extends on{constructor(t,e,n){super(t,e,n)}};oi.prototype.ValueTypeName="string";oi.prototype.ValueBufferType=Array;oi.prototype.DefaultInterpolation=Ls;oi.prototype.InterpolantFactoryMethodLinear=void 0;oi.prototype.InterpolantFactoryMethodSmooth=void 0;var wa=class extends on{constructor(t,e,n,s){super(t,e,n,s)}};wa.prototype.ValueTypeName="vector";var Aa=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],_=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},yh=new Aa,Ca=class{constructor(t){this.manager=t!==void 0?t:yh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ca.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ai=class extends Oe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new $t(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},rr=class extends Ai{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $t(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Jo=new fe,Tc=new F,wc=new F,ar=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new mt(512,512),this.mapType=je,this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rs,this._frameExtents=new mt(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Tc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Tc),wc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(wc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Jo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Jo,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===ts||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Jo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Xr=new F,Qr=new Rn,Tn=new F,or=class extends Oe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=_n,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Xr,Qr,Tn),Tn.x===1&&Tn.y===1&&Tn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xr,Qr,Tn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Xr,Qr,Tn),Tn.x===1&&Tn.y===1&&Tn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xr,Qr,Tn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ti=new F,Ac=new mt,Cc=new mt,Be=class extends or{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ns*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Cs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ns*2*Math.atan(Math.tan(Cs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ti.x,ti.y).multiplyScalar(-t/ti.z),ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ti.x,ti.y).multiplyScalar(-t/ti.z)}getViewSize(t,e){return this.getViewBounds(t,Ac,Cc),e.subVectors(Cc,Ac)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Cs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var rl=class extends ar{constructor(){super(new Be(90,1,.5,500)),this.isPointLightShadow=!0}},lr=class extends Ai{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new rl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},li=class extends or{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},al=class extends ar{constructor(){super(new li(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ci=class extends Ai{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.target=new Oe,this.shadow=new al}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},cr=class extends Ai{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Zi=-90,Ji=1,Ra=class extends Oe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Be(Zi,Ji,t,e);s.layers=this.layers,this.add(s);let r=new Be(Zi,Ji,t,e);r.layers=this.layers,this.add(r);let a=new Be(Zi,Ji,t,e);a.layers=this.layers,this.add(a);let o=new Be(Zi,Ji,t,e);o.layers=this.layers,this.add(o);let l=new Be(Zi,Ji,t,e);l.layers=this.layers,this.add(l);let c=new Be(Zi,Ji,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===_n)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ts)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=S,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Ia=class extends Be{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Nl="\\[\\]\\.:\\/",x0=new RegExp("["+Nl+"]","g"),Ul="[^"+Nl+"]",v0="[^"+Nl.replace("\\.","")+"]",y0=/((?:WC+[\/:])*)/.source.replace("WC",Ul),M0=/(WCOD+)?/.source.replace("WCOD",v0),S0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ul),b0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ul),E0=new RegExp("^"+y0+M0+S0+b0+"$"),T0=["material","materials","bones","map"],ol=class{constructor(t,e,n){let s=n||Me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Me=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(x0,"")}static parseTrackName(t){let e=E0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);T0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Xt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Qt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Qt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Qt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Qt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Qt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Qt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Me.Composite=ol;Me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Me.prototype.GetterByBindingType=[Me.prototype._getValue_direct,Me.prototype._getValue_array,Me.prototype._getValue_arrayElement,Me.prototype._getValue_toArray];Me.prototype.SetterByBindingTypeAndVersioning=[[Me.prototype._setValue_direct,Me.prototype._setValue_direct_setNeedsUpdate,Me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_array,Me.prototype._setValue_array_setNeedsUpdate,Me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_arrayElement,Me.prototype._setValue_arrayElement_setNeedsUpdate,Me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_fromArray,Me.prototype._setValue_fromArray_setNeedsUpdate,Me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Sm=new Float32Array(1);var ll=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};function Fl(i,t,e,n){let s=w0(n);switch(e){case wl:return i*t;case Ba:return i*t/s.components*s.byteLength;case za:return i*t/s.components*s.byteLength;case fi:return i*t*2/s.components*s.byteLength;case Va:return i*t*2/s.components*s.byteLength;case Al:return i*t*3/s.components*s.byteLength;case dn:return i*t*4/s.components*s.byteLength;case ka:return i*t*4/s.components*s.byteLength;case pr:case mr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case gr:case _r:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ha:case Xa:return Math.max(i,16)*Math.max(t,8)/4;case Ga:case Wa:return Math.max(i,8)*Math.max(t,8)/2;case Qa:case qa:case Za:case Ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ya:case xr:case $a:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ka:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ja:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case to:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case eo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case no:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case io:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case so:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ro:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ao:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case oo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case lo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case co:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ho:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case uo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case fo:case po:case mo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case go:case _o:return Math.ceil(i/4)*Math.ceil(t/4)*8;case vr:case xo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function w0(i){switch(i){case je:case Sl:return{byteLength:1,components:1};case us:case bl:case bn:return{byteLength:2,components:1};case Fa:case Oa:return{byteLength:2,components:4};case Sn:case Ua:case un:return{byteLength:4,components:1};case El:case Tl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Xt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Gh(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function C0(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,_)=>f.start-_.start);let u=0;for(let f=1;f<d.length;f++){let _=d[u],S=d[f];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++u,d[u]=S)}d.length=u+1;for(let f=0,_=d.length;f<_;f++){let S=d[f];i.bufferSubData(c,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var R0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,I0=`#ifdef USE_ALPHAHASH
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
#endif`,P0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,L0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,D0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,N0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,U0=`#ifdef USE_AOMAP
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
#endif`,F0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,O0=`#ifdef USE_BATCHING
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
#endif`,B0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,z0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,V0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,k0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,G0=`#ifdef USE_IRIDESCENCE
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
#endif`,H0=`#ifdef USE_BUMPMAP
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
#endif`,W0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,X0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Q0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,q0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Y0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Z0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,J0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,$0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,K0=`#define PI 3.141592653589793
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
} // validated`,j0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,td=`vec3 transformedNormal = objectNormal;
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
#endif`,ed=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,id=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rd="gl_FragColor = linearToOutputTexel( gl_FragColor );",ad=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,od=`#ifdef USE_ENVMAP
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
#endif`,ld=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,cd=`#ifdef USE_ENVMAP
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
#endif`,hd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ud=`#ifdef USE_ENVMAP
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
#endif`,dd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,md=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gd=`#ifdef USE_GRADIENTMAP
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
}`,_d=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yd=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Md=`#ifdef USE_ENVMAP
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
#endif`,Sd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ed=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Td=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wd=`PhysicalMaterial material;
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
#endif`,Ad=`uniform sampler2D dfgLUT;
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
}`,Cd=`
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
#endif`,Rd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Id=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pd=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Ld=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ud=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Od=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zd=`#if defined( USE_POINTS_UV )
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
#endif`,Vd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xd=`#ifdef USE_MORPHTARGETS
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
#endif`,Qd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Yd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$d=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Kd=`#ifdef USE_NORMALMAP
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
#endif`,jd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ef=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,af=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,of=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,df=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ff=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mf=`float getShadowMask() {
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
}`,gf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_f=`#ifdef USE_SKINNING
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
#endif`,xf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vf=`#ifdef USE_SKINNING
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
#endif`,yf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ef=`#ifdef USE_TRANSMISSION
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
#endif`,Tf=`#ifdef USE_TRANSMISSION
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
#endif`,wf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Af=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,If=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pf=`uniform sampler2D t2D;
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
}`,Lf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Df=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Nf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ff=`#include <common>
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
}`,Of=`#if DEPTH_PACKING == 3200
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
}`,Bf=`#define DISTANCE
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
}`,zf=`#define DISTANCE
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
}`,Vf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gf=`uniform float scale;
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
}`,Hf=`uniform vec3 diffuse;
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
}`,Wf=`#include <common>
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
}`,Xf=`uniform vec3 diffuse;
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
}`,Qf=`#define LAMBERT
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
}`,qf=`#define LAMBERT
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
}`,Yf=`#define MATCAP
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
}`,Zf=`#define MATCAP
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
}`,Jf=`#define NORMAL
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
}`,$f=`#define NORMAL
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
}`,Kf=`#define PHONG
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
}`,jf=`#define PHONG
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
}`,tp=`#define STANDARD
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
}`,ep=`#define STANDARD
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
}`,np=`#define TOON
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
}`,ip=`#define TOON
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
}`,sp=`uniform float size;
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
}`,rp=`uniform vec3 diffuse;
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
}`,ap=`#include <common>
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
}`,op=`uniform vec3 color;
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
}`,lp=`uniform float rotation;
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
}`,cp=`uniform vec3 diffuse;
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
}`,ne={alphahash_fragment:R0,alphahash_pars_fragment:I0,alphamap_fragment:P0,alphamap_pars_fragment:L0,alphatest_fragment:D0,alphatest_pars_fragment:N0,aomap_fragment:U0,aomap_pars_fragment:F0,batching_pars_vertex:O0,batching_vertex:B0,begin_vertex:z0,beginnormal_vertex:V0,bsdfs:k0,iridescence_fragment:G0,bumpmap_pars_fragment:H0,clipping_planes_fragment:W0,clipping_planes_pars_fragment:X0,clipping_planes_pars_vertex:Q0,clipping_planes_vertex:q0,color_fragment:Y0,color_pars_fragment:Z0,color_pars_vertex:J0,color_vertex:$0,common:K0,cube_uv_reflection_fragment:j0,defaultnormal_vertex:td,displacementmap_pars_vertex:ed,displacementmap_vertex:nd,emissivemap_fragment:id,emissivemap_pars_fragment:sd,colorspace_fragment:rd,colorspace_pars_fragment:ad,envmap_fragment:od,envmap_common_pars_fragment:ld,envmap_pars_fragment:cd,envmap_pars_vertex:hd,envmap_physical_pars_fragment:Md,envmap_vertex:ud,fog_vertex:dd,fog_pars_vertex:fd,fog_fragment:pd,fog_pars_fragment:md,gradientmap_pars_fragment:gd,lightmap_pars_fragment:_d,lights_lambert_fragment:xd,lights_lambert_pars_fragment:vd,lights_pars_begin:yd,lights_toon_fragment:Sd,lights_toon_pars_fragment:bd,lights_phong_fragment:Ed,lights_phong_pars_fragment:Td,lights_physical_fragment:wd,lights_physical_pars_fragment:Ad,lights_fragment_begin:Cd,lights_fragment_maps:Rd,lights_fragment_end:Id,lightprobes_pars_fragment:Pd,logdepthbuf_fragment:Ld,logdepthbuf_pars_fragment:Dd,logdepthbuf_pars_vertex:Nd,logdepthbuf_vertex:Ud,map_fragment:Fd,map_pars_fragment:Od,map_particle_fragment:Bd,map_particle_pars_fragment:zd,metalnessmap_fragment:Vd,metalnessmap_pars_fragment:kd,morphinstance_vertex:Gd,morphcolor_vertex:Hd,morphnormal_vertex:Wd,morphtarget_pars_vertex:Xd,morphtarget_vertex:Qd,normal_fragment_begin:qd,normal_fragment_maps:Yd,normal_pars_fragment:Zd,normal_pars_vertex:Jd,normal_vertex:$d,normalmap_pars_fragment:Kd,clearcoat_normal_fragment_begin:jd,clearcoat_normal_fragment_maps:tf,clearcoat_pars_fragment:ef,iridescence_pars_fragment:nf,opaque_fragment:sf,packing:rf,premultiplied_alpha_fragment:af,project_vertex:of,dithering_fragment:lf,dithering_pars_fragment:cf,roughnessmap_fragment:hf,roughnessmap_pars_fragment:uf,shadowmap_pars_fragment:df,shadowmap_pars_vertex:ff,shadowmap_vertex:pf,shadowmask_pars_fragment:mf,skinbase_vertex:gf,skinning_pars_vertex:_f,skinning_vertex:xf,skinnormal_vertex:vf,specularmap_fragment:yf,specularmap_pars_fragment:Mf,tonemapping_fragment:Sf,tonemapping_pars_fragment:bf,transmission_fragment:Ef,transmission_pars_fragment:Tf,uv_pars_fragment:wf,uv_pars_vertex:Af,uv_vertex:Cf,worldpos_vertex:Rf,background_vert:If,background_frag:Pf,backgroundCube_vert:Lf,backgroundCube_frag:Df,cube_vert:Nf,cube_frag:Uf,depth_vert:Ff,depth_frag:Of,distance_vert:Bf,distance_frag:zf,equirect_vert:Vf,equirect_frag:kf,linedashed_vert:Gf,linedashed_frag:Hf,meshbasic_vert:Wf,meshbasic_frag:Xf,meshlambert_vert:Qf,meshlambert_frag:qf,meshmatcap_vert:Yf,meshmatcap_frag:Zf,meshnormal_vert:Jf,meshnormal_frag:$f,meshphong_vert:Kf,meshphong_frag:jf,meshphysical_vert:tp,meshphysical_frag:ep,meshtoon_vert:np,meshtoon_frag:ip,points_vert:sp,points_frag:rp,shadow_vert:ap,shadow_frag:op,sprite_vert:lp,sprite_frag:cp},wt={common:{diffuse:{value:new $t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new $t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new $t(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},Un={basic:{uniforms:Xe([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:ne.meshbasic_vert,fragmentShader:ne.meshbasic_frag},lambert:{uniforms:Xe([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new $t(0)},envMapIntensity:{value:1}}]),vertexShader:ne.meshlambert_vert,fragmentShader:ne.meshlambert_frag},phong:{uniforms:Xe([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new $t(0)},specular:{value:new $t(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ne.meshphong_vert,fragmentShader:ne.meshphong_frag},standard:{uniforms:Xe([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new $t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag},toon:{uniforms:Xe([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new $t(0)}}]),vertexShader:ne.meshtoon_vert,fragmentShader:ne.meshtoon_frag},matcap:{uniforms:Xe([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:ne.meshmatcap_vert,fragmentShader:ne.meshmatcap_frag},points:{uniforms:Xe([wt.points,wt.fog]),vertexShader:ne.points_vert,fragmentShader:ne.points_frag},dashed:{uniforms:Xe([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ne.linedashed_vert,fragmentShader:ne.linedashed_frag},depth:{uniforms:Xe([wt.common,wt.displacementmap]),vertexShader:ne.depth_vert,fragmentShader:ne.depth_frag},normal:{uniforms:Xe([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:ne.meshnormal_vert,fragmentShader:ne.meshnormal_frag},sprite:{uniforms:Xe([wt.sprite,wt.fog]),vertexShader:ne.sprite_vert,fragmentShader:ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ne.background_vert,fragmentShader:ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:ne.backgroundCube_vert,fragmentShader:ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ne.cube_vert,fragmentShader:ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ne.equirect_vert,fragmentShader:ne.equirect_frag},distance:{uniforms:Xe([wt.common,wt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ne.distance_vert,fragmentShader:ne.distance_frag},shadow:{uniforms:Xe([wt.lights,wt.fog,{color:{value:new $t(0)},opacity:{value:1}}]),vertexShader:ne.shadow_vert,fragmentShader:ne.shadow_frag}};Un.physical={uniforms:Xe([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new $t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new $t(0)},specularColor:{value:new $t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag};var Mo={r:0,b:0,g:0},hp=new fe,Hh=new Jt;Hh.set(-1,0,0,0,1,0,0,0,1);function up(i,t,e,n,s,r){let a=new $t(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function f(E){let A=E.isScene===!0?E.background:null;if(A&&A.isTexture){let y=E.backgroundBlurriness>0;A=t.get(A,y)}return A}function _(E){let A=!1,y=f(E);y===null?m(a,o):y&&y.isColor&&(m(y,1),A=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(E,A){let y=f(A);y&&(y.isCubeTexture||y.mapping===dr)?(c===void 0&&(c=new oe(new vn(1,1,1),new an({name:"BackgroundCubeMaterial",uniforms:Li(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,M,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(hp.makeRotationFromEuler(A.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Hh),c.material.toneMapped=ae.getTransfer(y.colorSpace)!==de,(h!==y||d!==y.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new oe(new Ln(2,2),new an({name:"BackgroundMaterial",uniforms:Li(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=ae.getTransfer(y.colorSpace)!==de,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,u=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function m(E,A){E.getRGB(Mo,Dl(i)),e.buffers.color.setClear(Mo.r,Mo.g,Mo.b,A,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,A=1){a.set(E),o=A,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(E){o=E,m(a,o)},render:_,addToRenderList:S,dispose:p}}function dp(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(N,z,O,P,B){let q=!1,J=d(N,P,O,z);r!==J&&(r=J,c(r.object)),q=f(N,P,O,B),q&&_(N,P,O,B),B!==null&&t.update(B,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,y(N,z,O,P),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return i.createVertexArray()}function c(N){return i.bindVertexArray(N)}function h(N){return i.deleteVertexArray(N)}function d(N,z,O,P){let B=P.wireframe===!0,q=n[z.id];q===void 0&&(q={},n[z.id]=q);let J=N.isInstancedMesh===!0?N.id:0,at=q[J];at===void 0&&(at={},q[J]=at);let $=at[O.id];$===void 0&&($={},at[O.id]=$);let j=$[B];return j===void 0&&(j=u(l()),$[B]=j),j}function u(N){let z=[],O=[],P=[];for(let B=0;B<e;B++)z[B]=0,O[B]=0,P[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:O,attributeDivisors:P,object:N,attributes:{},index:null}}function f(N,z,O,P){let B=r.attributes,q=z.attributes,J=0,at=O.getAttributes();for(let $ in at)if(at[$].location>=0){let it=B[$],Ot=q[$];if(Ot===void 0&&($==="instanceMatrix"&&N.instanceMatrix&&(Ot=N.instanceMatrix),$==="instanceColor"&&N.instanceColor&&(Ot=N.instanceColor)),it===void 0||it.attribute!==Ot||Ot&&it.data!==Ot.data)return!0;J++}return r.attributesNum!==J||r.index!==P}function _(N,z,O,P){let B={},q=z.attributes,J=0,at=O.getAttributes();for(let $ in at)if(at[$].location>=0){let it=q[$];it===void 0&&($==="instanceMatrix"&&N.instanceMatrix&&(it=N.instanceMatrix),$==="instanceColor"&&N.instanceColor&&(it=N.instanceColor));let Ot={};Ot.attribute=it,it&&it.data&&(Ot.data=it.data),B[$]=Ot,J++}r.attributes=B,r.attributesNum=J,r.index=P}function S(){let N=r.newAttributes;for(let z=0,O=N.length;z<O;z++)N[z]=0}function m(N){p(N,0)}function p(N,z){let O=r.newAttributes,P=r.enabledAttributes,B=r.attributeDivisors;O[N]=1,P[N]===0&&(i.enableVertexAttribArray(N),P[N]=1),B[N]!==z&&(i.vertexAttribDivisor(N,z),B[N]=z)}function E(){let N=r.newAttributes,z=r.enabledAttributes;for(let O=0,P=z.length;O<P;O++)z[O]!==N[O]&&(i.disableVertexAttribArray(O),z[O]=0)}function A(N,z,O,P,B,q,J){J===!0?i.vertexAttribIPointer(N,z,O,B,q):i.vertexAttribPointer(N,z,O,P,B,q)}function y(N,z,O,P){S();let B=P.attributes,q=O.getAttributes(),J=z.defaultAttributeValues;for(let at in q){let $=q[at];if($.location>=0){let j=B[at];if(j===void 0&&(at==="instanceMatrix"&&N.instanceMatrix&&(j=N.instanceMatrix),at==="instanceColor"&&N.instanceColor&&(j=N.instanceColor)),j!==void 0){let it=j.normalized,Ot=j.itemSize,bt=t.get(j);if(bt===void 0)continue;let Zt=bt.buffer,jt=bt.type,ie=bt.bytesPerElement,U=jt===i.INT||jt===i.UNSIGNED_INT||j.gpuType===Ua;if(j.isInterleavedBufferAttribute){let Q=j.data,k=Q.stride,yt=j.offset;if(Q.isInstancedInterleavedBuffer){for(let ht=0;ht<$.locationSize;ht++)p($.location+ht,Q.meshPerAttribute);N.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ht=0;ht<$.locationSize;ht++)m($.location+ht);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let ht=0;ht<$.locationSize;ht++)A($.location+ht,Ot/$.locationSize,jt,it,k*ie,(yt+Ot/$.locationSize*ht)*ie,U)}else{if(j.isInstancedBufferAttribute){for(let Q=0;Q<$.locationSize;Q++)p($.location+Q,j.meshPerAttribute);N.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Q=0;Q<$.locationSize;Q++)m($.location+Q);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let Q=0;Q<$.locationSize;Q++)A($.location+Q,Ot/$.locationSize,jt,it,Ot*ie,Ot/$.locationSize*Q*ie,U)}}else if(J!==void 0){let it=J[at];if(it!==void 0)switch(it.length){case 2:i.vertexAttrib2fv($.location,it);break;case 3:i.vertexAttrib3fv($.location,it);break;case 4:i.vertexAttrib4fv($.location,it);break;default:i.vertexAttrib1fv($.location,it)}}}}E()}function b(){w();for(let N in n){let z=n[N];for(let O in z){let P=z[O];for(let B in P){let q=P[B];for(let J in q)h(q[J].object),delete q[J];delete P[B]}}delete n[N]}}function M(N){if(n[N.id]===void 0)return;let z=n[N.id];for(let O in z){let P=z[O];for(let B in P){let q=P[B];for(let J in q)h(q[J].object),delete q[J];delete P[B]}}delete n[N.id]}function C(N){for(let z in n){let O=n[z];for(let P in O){let B=O[P];if(B[N.id]===void 0)continue;let q=B[N.id];for(let J in q)h(q[J].object),delete q[J];delete B[N.id]}}}function x(N){for(let z in n){let O=n[z],P=N.isInstancedMesh===!0?N.id:0,B=O[P];if(B!==void 0){for(let q in B){let J=B[q];for(let at in J)h(J[at].object),delete J[at];delete B[q]}delete O[P],Object.keys(O).length===0&&delete n[z]}}}function w(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:R,dispose:b,releaseStatesOfGeometry:M,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:S,enableAttribute:m,disableUnusedAttributes:E}}function fp(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function pp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==dn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let x=C===bn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==je&&C!==un&&!x&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Xt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Xt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),M=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:A,maxFragmentUniforms:y,maxSamples:b,samples:M}}function mp(i){let t=this,e=null,n=0,s=!1,r=!1,a=new gn,o=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let _=d.clippingPlanes,S=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||_===null||_.length===0||r&&!m)r?h(null):c();else{let E=r?0:n,A=E*4,y=p.clippingState||null;l.value=y,y=h(_,u,A,f);for(let b=0;b!==A;++b)y[b]=e[b];p.clippingState=y,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,_){let S=d!==null?d.length:0,m=null;if(S!==0){if(m=l.value,_!==!0||m===null){let p=f+S*4,E=u.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let A=0,y=f;A!==S;++A,y+=4)a.copy(d[A]).applyMatrix4(E,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,m}}var ps=4,gp=6,_p=20,xp=256,Mr=new li,Mh=new $t,Ol=null,Bl=0,zl=0,Vl=!1,vp=new F,Di=new F,pi=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=vp}=r;Ol=this._renderer.getRenderTarget(),Bl=this._renderer.getActiveCubeFace(),zl=this._renderer.getActiveMipmapLevel(),Vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Eh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ol,Bl,zl),this._renderer.xr.enabled=Vl,t.scissorTest=!1,fs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===hi||t.mapping===Ii?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ol=this._renderer.getRenderTarget(),Bl=this._renderer.getActiveCubeFace(),zl=this._renderer.getActiveMipmapLevel(),Vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ze,minFilter:ze,generateMipmaps:!1,type:bn,format:dn,colorSpace:Ds,depthBuffer:!1},s=Sh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sh(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=yp(r)),this._blurMaterial=Sp(r,t,e),this._ggxMaterial=Mp(r,t,e)}return s}_compileMaterial(t){let e=new oe(new Ze,t);this._renderer.compile(e,Mr)}_sceneToCubeUV(t,e,n,s,r){let l=new Be(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Mh),d.toneMapping=Mn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new oe(new vn,new xn({name:"PMREM.Background",side:Ve,depthWrite:!1,depthTest:!1})));let S=this._backgroundBox,m=S.material,p=!1,E=t.background;E?E.isColor&&(m.color.copy(E),t.background=null,p=!0):(m.color.copy(Mh),p=!0);for(let A=0;A<6;A++){let y=A%3;y===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[A],r.y,r.z)):y===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[A]));let b=this._cubeSize;fs(s,y*b,A>2?b:0,b,b),d.setRenderTarget(s),p&&d.render(S,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=E}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===hi||t.mapping===Ii;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Eh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;fs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Mr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:_}=this,S=this._sizeLods[n],m=3*S*(n>_-ps?n-_+ps:0),p=4*(this._cubeSize-S);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=_-e,fs(r,m,p,3*S,2*S),s.setRenderTarget(r),s.render(o,Mr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-n,fs(t,m,p,3*S,2*S),s.setRenderTarget(t),s.render(o,Mr)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-ps?s-this._lodMax+ps:0),u=4*(this._cubeSize-h);fs(e,d,u,3*h,2*h),a.setRenderTarget(e),a.render(l,Mr)}};function yp(i){let t=[],e=[],n=i,s=i-ps+1+gp;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,_=new Float32Array(f*u*d),S=new Float32Array(f*u*d);for(let p=0;p<d;p++){let E=p%3*2/3-1,A=p>2?0:-1,y=[E,A,0,E+2/3,A,0,E+2/3,A+1,0,E,A,0,E+2/3,A+1,0,E,A+1,0];_.set(y,f*u*p);for(let b=0;b<u;b++){let M=h[b*2]*2-1,C=h[b*2+1]*2-1;p===0?Di.set(1,C,M):p===1?Di.set(-M,1,-C):p===2?Di.set(-M,C,1):p===3?Di.set(-1,C,-M):p===4?Di.set(-M,-1,C):Di.set(M,C,-1),Di.toArray(S,(p*u+b)*f)}}let m=new Ze;m.setAttribute("position",new sn(_,f)),m.setAttribute("outputDirection",new sn(S,f)),e.push(new oe(m,null)),n>ps&&n--}return{lodMeshes:e,sizeLods:t}}function Sh(i,t,e){let n=new Ke(i,t,e);return n.texture.mapping=dr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Mp(i,t,e){return new an({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:xp,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Eo(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Sp(i,t,e){return new an({name:"SphericalGaussianBlur",defines:{SAMPLES:_p,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Eo(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function bh(){return new an({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Eo(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Eh(){return new an({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Eo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Eo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var bo=class extends Ke{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Hs(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new vn(5,5,5),r=new an({name:"CubemapFromEquirect",uniforms:Li(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ve,blending:Dn});r.uniforms.tEquirect.value=e;let a=new oe(s,r),o=e.minFilter;return e.minFilter===ui&&(e.minFilter=ze),new Ra(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function bp(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===La||f===Da)if(t.has(u)){let _=t.get(u).texture;return o(_,u.mapping)}else{let _=u.image;if(_&&_.height>0){let S=new bo(_.height);return S.fromEquirectangularTexture(i,u),t.set(u,S),u.addEventListener("dispose",c),o(S.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,_=f===La||f===Da,S=f===hi||f===Ii;if(_||S){let m=e.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new pi(i)),m=_?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let E=u.image;return _&&E&&E.height>0||S&&E&&l(E)?(n===null&&(n=new pi(i)),m=_?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===La?u.mapping=hi:f===Da&&(u.mapping=Ii),u}function l(u){let f=0,_=6;for(let S=0;S<_;S++)u[S]!==void 0&&f++;return f===_}function c(u){let f=u.target;f.removeEventListener("dispose",c);let _=t.get(f);_!==void 0&&(t.delete(f),_.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let _=e.get(f);_!==void 0&&(e.delete(f),_.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function Ep(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ei("WebGLRenderer: "+n+" extension not supported."),s}}}function Tp(i,t,e,n){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let _ in u.attributes)t.remove(u.attributes[_]);u.removeEventListener("dispose",a),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],i.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,_=d.attributes.position,S=0;if(_===void 0)return;if(f!==null){let E=f.array;S=f.version;for(let A=0,y=E.length;A<y;A+=3){let b=E[A+0],M=E[A+1],C=E[A+2];u.push(b,M,M,C,C,b)}}else{let E=_.array;S=_.version;for(let A=0,y=E.length/3-1;A<y;A+=3){let b=A+0,M=A+1,C=A+2;u.push(b,M,M,C,C,b)}}let m=new(_.count>=65535?zs:Bs)(u,1);m.version=S;let p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function wp(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*a),e.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*a,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let S=0;for(let m=0;m<f;m++)S+=u[m];e.update(S,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Ap(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Qt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Cp(i,t,e){let n=new WeakMap,s=new be;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let w=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],E=o.morphAttributes.color||[],A=0;f===!0&&(A=1),_===!0&&(A=2),S===!0&&(A=3);let y=o.attributes.position.count*A,b=1;y>t.maxTextureSize&&(b=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let M=new Float32Array(y*b*4*d),C=new Fs(M,y,b,d);C.type=un,C.needsUpdate=!0;let x=A*4;for(let R=0;R<d;R++){let N=m[R],z=p[R],O=E[R],P=y*b*4*R;for(let B=0;B<N.count;B++){let q=B*x;f===!0&&(s.fromBufferAttribute(N,B),M[P+q+0]=s.x,M[P+q+1]=s.y,M[P+q+2]=s.z,M[P+q+3]=0),_===!0&&(s.fromBufferAttribute(z,B),M[P+q+4]=s.x,M[P+q+5]=s.y,M[P+q+6]=s.z,M[P+q+7]=0),S===!0&&(s.fromBufferAttribute(O,B),M[P+q+8]=s.x,M[P+q+9]=s.y,M[P+q+10]=s.z,M[P+q+11]=O.itemSize===4?s.w:1)}}u={count:d,texture:C,size:new mt(y,b)},n.set(o,u),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let S=0;S<c.length;S++)f+=c[S];let _=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Rp(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var Ip={[ml]:"LINEAR_TONE_MAPPING",[gl]:"REINHARD_TONE_MAPPING",[_l]:"CINEON_TONE_MAPPING",[ur]:"ACES_FILMIC_TONE_MAPPING",[vl]:"AGX_TONE_MAPPING",[yl]:"NEUTRAL_TONE_MAPPING",[xl]:"CUSTOM_TONE_MAPPING"};function Pp(i,t,e,n,s,r){let a=new Ke(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Ze;c.setAttribute("position",new xe([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new xe([0,2,0,0,2,0],2));let h=new ga({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new oe(c,h),u=new li(-1,1,1,-1,0,1),f=null,_=null,S=!1,m,p=null,E=[],A=!1;this.setSize=function(y,b){a.setSize(y,b),o!==null&&o.setSize(y,b),l!==null&&l.setSize(y,b);for(let M=0;M<E.length;M++){let C=E[M];C.setSize&&C.setSize(y,b)}},this.setEffects=function(y){E=y,A=E.length>0&&E[0].isRenderPass===!0;let b=a.width,M=a.height;E.length>0&&o===null&&(o=new Ke(b,M,{type:bn,depthBuffer:!1,stencilBuffer:!1}),l=new Ke(b,M,{type:bn,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<E.length;C++){let x=E[C];x.setSize&&x.setSize(b,M)}},this.begin=function(y,b){if(S||y.toneMapping===Mn&&E.length===0)return!1;if(p=b,b!==null){let M=b.width,C=b.height;(a.width!==M||a.height!==C)&&this.setSize(M,C)}return A===!1&&y.setRenderTarget(a),m=y.toneMapping,y.toneMapping=Mn,!0},this.hasRenderPass=function(){return A},this.end=function(y,b){y.toneMapping=m,S=!0;let M=a,C=o;for(let x=0;x<E.length;x++){let w=E[x];w.enabled!==!1&&(w.render(y,C,M,b),w.needsSwap!==!1&&(M=C,C=C===o?l:o))}if(f!==y.outputColorSpace||_!==y.toneMapping){f=y.outputColorSpace,_=y.toneMapping,h.defines={},ae.getTransfer(f)===de&&(h.defines.SRGB_TRANSFER="");let x=Ip[_];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=M.texture,y.setRenderTarget(p),y.render(d,u),p=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Wh=new Ye,Hl=new ii(1,1),Xh=new Fs,Qh=new oa,qh=new Hs,Th=[],wh=[],Ah=new Float32Array(16),Ch=new Float32Array(9),Rh=new Float32Array(4);function _s(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Th[s];if(r===void 0&&(r=new Float32Array(s),Th[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Le(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function De(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function To(i,t){let e=wh[t];e===void 0&&(e=new Int32Array(t),wh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Lp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Dp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2fv(this.addr,t),De(e,t)}}function Np(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Le(e,t))return;i.uniform3fv(this.addr,t),De(e,t)}}function Up(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4fv(this.addr,t),De(e,t)}}function Fp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),De(e,t)}else{if(Le(e,n))return;Rh.set(n),i.uniformMatrix2fv(this.addr,!1,Rh),De(e,n)}}function Op(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),De(e,t)}else{if(Le(e,n))return;Ch.set(n),i.uniformMatrix3fv(this.addr,!1,Ch),De(e,n)}}function Bp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),De(e,t)}else{if(Le(e,n))return;Ah.set(n),i.uniformMatrix4fv(this.addr,!1,Ah),De(e,n)}}function zp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Vp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2iv(this.addr,t),De(e,t)}}function kp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3iv(this.addr,t),De(e,t)}}function Gp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4iv(this.addr,t),De(e,t)}}function Hp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Wp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2uiv(this.addr,t),De(e,t)}}function Xp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3uiv(this.addr,t),De(e,t)}}function Qp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4uiv(this.addr,t),De(e,t)}}function qp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Hl.compareFunction=e.isReversedDepthBuffer()?yo:vo,r=Hl):r=Wh,e.setTexture2D(t||r,s)}function Yp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Qh,s)}function Zp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||qh,s)}function Jp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Xh,s)}function $p(i){switch(i){case 5126:return Lp;case 35664:return Dp;case 35665:return Np;case 35666:return Up;case 35674:return Fp;case 35675:return Op;case 35676:return Bp;case 5124:case 35670:return zp;case 35667:case 35671:return Vp;case 35668:case 35672:return kp;case 35669:case 35673:return Gp;case 5125:return Hp;case 36294:return Wp;case 36295:return Xp;case 36296:return Qp;case 35678:case 36198:case 36298:case 36306:case 35682:return qp;case 35679:case 36299:case 36307:return Yp;case 35680:case 36300:case 36308:case 36293:return Zp;case 36289:case 36303:case 36311:case 36292:return Jp}}function Kp(i,t){i.uniform1fv(this.addr,t)}function jp(i,t){let e=_s(t,this.size,2);i.uniform2fv(this.addr,e)}function t1(i,t){let e=_s(t,this.size,3);i.uniform3fv(this.addr,e)}function e1(i,t){let e=_s(t,this.size,4);i.uniform4fv(this.addr,e)}function n1(i,t){let e=_s(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function i1(i,t){let e=_s(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function s1(i,t){let e=_s(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function r1(i,t){i.uniform1iv(this.addr,t)}function a1(i,t){i.uniform2iv(this.addr,t)}function o1(i,t){i.uniform3iv(this.addr,t)}function l1(i,t){i.uniform4iv(this.addr,t)}function c1(i,t){i.uniform1uiv(this.addr,t)}function h1(i,t){i.uniform2uiv(this.addr,t)}function u1(i,t){i.uniform3uiv(this.addr,t)}function d1(i,t){i.uniform4uiv(this.addr,t)}function f1(i,t,e){let n=this.cache,s=t.length,r=To(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Hl:a=Wh;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function p1(i,t,e){let n=this.cache,s=t.length,r=To(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Qh,r[a])}function m1(i,t,e){let n=this.cache,s=t.length,r=To(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||qh,r[a])}function g1(i,t,e){let n=this.cache,s=t.length,r=To(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Xh,r[a])}function _1(i){switch(i){case 5126:return Kp;case 35664:return jp;case 35665:return t1;case 35666:return e1;case 35674:return n1;case 35675:return i1;case 35676:return s1;case 5124:case 35670:return r1;case 35667:case 35671:return a1;case 35668:case 35672:return o1;case 35669:case 35673:return l1;case 5125:return c1;case 36294:return h1;case 36295:return u1;case 36296:return d1;case 35678:case 36198:case 36298:case 36306:case 35682:return f1;case 35679:case 36299:case 36307:return p1;case 35680:case 36300:case 36308:case 36293:return m1;case 36289:case 36303:case 36311:case 36292:return g1}}var Wl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=$p(e.type)}},Xl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=_1(e.type)}},Ql=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},kl=/(\w+)(\])?(\[|\.)?/g;function Ih(i,t){i.seq.push(t),i.map[t.id]=t}function x1(i,t,e){let n=i.name,s=n.length;for(kl.lastIndex=0;;){let r=kl.exec(n),a=kl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Ih(e,c===void 0?new Wl(o,i,t):new Xl(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new Ql(o),Ih(e,d)),e=d}}}var ms=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);x1(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Ph(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var v1=37297,y1=0;function M1(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Lh=new Jt;function S1(i){ae._getMatrix(Lh,ae.workingColorSpace,i);let t=`mat3( ${Lh.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(i)){case Ns:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return Xt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Dh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+M1(i.getShaderSource(t),o)}else return r}function b1(i,t){let e=S1(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var E1={[ml]:"Linear",[gl]:"Reinhard",[_l]:"Cineon",[ur]:"ACESFilmic",[vl]:"AgX",[yl]:"Neutral",[xl]:"Custom"};function T1(i,t){let e=E1[t];return e===void 0?(Xt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var So=new F;function w1(){ae.getLuminanceCoefficients(So);let i=So.x.toFixed(4),t=So.y.toFixed(4),e=So.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function A1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(br).join(`
`)}function C1(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function R1(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function br(i){return i!==""}function Nh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Uh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var I1=/^[ \t]*#include +<([\w\d./]+)>/gm;function ql(i){return i.replace(I1,L1)}var P1=new Map;function L1(i,t){let e=ne[t];if(e===void 0){let n=P1.get(t);if(n!==void 0)e=ne[n],Xt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return ql(e)}var D1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fh(i){return i.replace(D1,N1)}function N1(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Oh(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var U1={[hr]:"SHADOWMAP_TYPE_PCF",[cs]:"SHADOWMAP_TYPE_VSM"};function F1(i){return U1[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var O1={[hi]:"ENVMAP_TYPE_CUBE",[Ii]:"ENVMAP_TYPE_CUBE",[dr]:"ENVMAP_TYPE_CUBE_UV"};function B1(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":O1[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var z1={[Ii]:"ENVMAP_MODE_REFRACTION"};function V1(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":z1[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var k1={[Pa]:"ENVMAP_BLENDING_MULTIPLY",[Jc]:"ENVMAP_BLENDING_MIX",[$c]:"ENVMAP_BLENDING_ADD"};function G1(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":k1[i.combine]||"ENVMAP_BLENDING_NONE"}function H1(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function W1(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=F1(e),c=B1(e),h=V1(e),d=G1(e),u=H1(e),f=A1(e),_=C1(r),S=s.createProgram(),m,p,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(br).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(br).join(`
`),p.length>0&&(p+=`
`)):(m=[Oh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(br).join(`
`),p=[Oh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Mn?"#define TONE_MAPPING":"",e.toneMapping!==Mn?ne.tonemapping_pars_fragment:"",e.toneMapping!==Mn?T1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ne.colorspace_pars_fragment,b1("linearToOutputTexel",e.outputColorSpace),w1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(br).join(`
`)),a=ql(a),a=Nh(a,e),a=Uh(a,e),o=ql(o),o=Nh(o,e),o=Uh(o,e),a=Fh(a),o=Fh(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Cl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Cl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let A=E+m+a,y=E+p+o,b=Ph(s,s.VERTEX_SHADER,A),M=Ph(s,s.FRAGMENT_SHADER,y);s.attachShader(S,b),s.attachShader(S,M),e.index0AttributeName!==void 0?s.bindAttribLocation(S,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function C(N){if(i.debug.checkShaderErrors){let z=s.getProgramInfoLog(S)||"",O=s.getShaderInfoLog(b)||"",P=s.getShaderInfoLog(M)||"",B=z.trim(),q=O.trim(),J=P.trim(),at=!0,$=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(at=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,S,b,M);else{let j=Dh(s,b,"vertex"),it=Dh(s,M,"fragment");Qt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+B+`
`+j+`
`+it)}else B!==""?Xt("WebGLProgram: Program Info Log:",B):(q===""||J==="")&&($=!1);$&&(N.diagnostics={runnable:at,programLog:B,vertexShader:{log:q,prefix:m},fragmentShader:{log:J,prefix:p}})}s.deleteShader(b),s.deleteShader(M),x=new ms(s,S),w=R1(s,S)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(S,v1)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=y1++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=b,this.fragmentShader=M,this}var X1=0,Yl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Zl(t),e.set(t,n)),n}},Zl=class{constructor(t){this.id=X1++,this.code=t,this.usedTimes=0}};function Q1(i){return i===fi||i===xr||i===vr}function q1(i,t,e,n,s,r){let a=new Os,o=new Yl,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return l.add(x),x===0?"uv":`uv${x}`}function S(x,w,R,N,z,O){let P=N.fog,B=z.geometry,q=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?N.environment:null,J=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,at=t.get(x.envMap||q,J),$=at&&at.mapping===dr?at.image.height:null,j=f[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&Xt("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let it=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Ot=it!==void 0?it.length:0,bt=0;B.morphAttributes.position!==void 0&&(bt=1),B.morphAttributes.normal!==void 0&&(bt=2),B.morphAttributes.color!==void 0&&(bt=3);let Zt,jt,ie,U;if(j){let he=Un[j];Zt=he.vertexShader,jt=he.fragmentShader}else{Zt=x.vertexShader,jt=x.fragmentShader;let he=o.getVertexShaderStage(x),le=o.getFragmentShaderStage(x);o.update(x,he,le),ie=he.id,U=le.id}let Q=i.getRenderTarget(),k=i.state.buffers.depth.getReversed(),yt=z.isInstancedMesh===!0,ht=z.isBatchedMesh===!0,Et=!!x.map,Ct=!!x.matcap,tt=!!at,st=!!x.aoMap,lt=!!x.lightMap,ot=!!x.bumpMap&&x.wireframe===!1,ft=!!x.normalMap,Pt=!!x.displacementMap,kt=!!x.emissiveMap,Wt=!!x.metalnessMap,Bt=!!x.roughnessMap,I=x.anisotropy>0,se=x.clearcoat>0,Kt=x.dispersion>0,T=x.retroreflectivity>0,g=x.iridescence>0,V=x.sheen>0,W=x.transmission>0,Y=I&&!!x.anisotropyMap,ct=se&&!!x.clearcoatMap,ut=se&&!!x.clearcoatNormalMap,K=se&&!!x.clearcoatRoughnessMap,et=g&&!!x.iridescenceMap,gt=g&&!!x.iridescenceThicknessMap,zt=V&&!!x.sheenColorMap,Mt=V&&!!x.sheenRoughnessMap,vt=!!x.specularMap,Dt=!!x.specularColorMap,Nt=!!x.specularIntensityMap,qt=W&&!!x.transmissionMap,D=W&&!!x.thicknessMap,_t=!!x.gradientMap,nt=!!x.alphaMap,St=x.alphaTest>0,At=!!x.alphaHash,rt=!!x.extensions,Gt=Mn;x.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Gt=i.toneMapping);let Ut={shaderID:j,shaderType:x.type,shaderName:x.name,vertexShader:Zt,fragmentShader:jt,defines:x.defines,customVertexShaderID:ie,customFragmentShaderID:U,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:ht,batchingColor:ht&&z._colorsTexture!==null,instancing:yt,instancingColor:yt&&z.instanceColor!==null,instancingMorph:yt&&z.morphTexture!==null,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:ae.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Et,matcap:Ct,envMap:tt,envMapMode:tt&&at.mapping,envMapCubeUVHeight:$,aoMap:st,lightMap:lt,bumpMap:ot,normalMap:ft,displacementMap:Pt,emissiveMap:kt,normalMapObjectSpace:ft&&x.normalMapType===th,normalMapTangentSpace:ft&&x.normalMapType===yr,packedNormalMap:ft&&x.normalMapType===yr&&Q1(x.normalMap.format),metalnessMap:Wt,roughnessMap:Bt,anisotropy:I,anisotropyMap:Y,clearcoat:se,clearcoatMap:ct,clearcoatNormalMap:ut,clearcoatRoughnessMap:K,dispersion:Kt,retroreflection:T,iridescence:g,iridescenceMap:et,iridescenceThicknessMap:gt,sheen:V,sheenColorMap:zt,sheenRoughnessMap:Mt,specularMap:vt,specularColorMap:Dt,specularIntensityMap:Nt,transmission:W,transmissionMap:qt,thicknessMap:D,gradientMap:_t,opaque:x.transparent===!1&&x.blending===hs&&x.alphaToCoverage===!1,alphaMap:nt,alphaTest:St,alphaHash:At,combine:x.combine,mapUv:Et&&_(x.map.channel),aoMapUv:st&&_(x.aoMap.channel),lightMapUv:lt&&_(x.lightMap.channel),bumpMapUv:ot&&_(x.bumpMap.channel),normalMapUv:ft&&_(x.normalMap.channel),displacementMapUv:Pt&&_(x.displacementMap.channel),emissiveMapUv:kt&&_(x.emissiveMap.channel),metalnessMapUv:Wt&&_(x.metalnessMap.channel),roughnessMapUv:Bt&&_(x.roughnessMap.channel),anisotropyMapUv:Y&&_(x.anisotropyMap.channel),clearcoatMapUv:ct&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:ut&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:et&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:gt&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&_(x.sheenRoughnessMap.channel),specularMapUv:vt&&_(x.specularMap.channel),specularColorMapUv:Dt&&_(x.specularColorMap.channel),specularIntensityMapUv:Nt&&_(x.specularIntensityMap.channel),transmissionMapUv:qt&&_(x.transmissionMap.channel),thicknessMapUv:D&&_(x.thicknessMap.channel),alphaMapUv:nt&&_(x.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(ft||I),vertexNormals:!!B.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!B.attributes.uv&&(Et||nt),fog:!!P,useFog:x.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||B.attributes.normal===void 0&&ft===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:k,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Ot,morphTextureStride:bt,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Gt,decodeVideoTexture:Et&&x.map.isVideoTexture===!0&&ae.getTransfer(x.map.colorSpace)===de,decodeVideoTextureEmissive:kt&&x.emissiveMap.isVideoTexture===!0&&ae.getTransfer(x.emissiveMap.colorSpace)===de,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ln,flipSided:x.side===Ve,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:rt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&x.extensions.multiDraw===!0||ht)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ut.vertexUv1s=l.has(1),Ut.vertexUv2s=l.has(2),Ut.vertexUv3s=l.has(3),l.clear(),Ut}function m(x){let w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)w.push(R),w.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(p(w,x),E(w,x),w.push(i.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function p(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numSunLights),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numSunLightShadows),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function E(x,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function A(x){let w=f[x.type],R;if(w){let N=Un[w];R=xh.clone(N.uniforms)}else R=x.uniforms;return R}function y(x,w){let R=h.get(w);return R!==void 0?++R.usedTimes:(R=new W1(i,w,x,s),c.push(R),h.set(w,R)),R}function b(x){if(--x.usedTimes===0){let w=c.indexOf(x);c[w]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function M(x){o.remove(x)}function C(){o.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:A,acquireProgram:y,releaseProgram:b,releaseShaderCache:M,programs:c,dispose:C}}function Y1(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Z1(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Bh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function zh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,_,S,m,p){let E=i[t];return E===void 0?(E={id:u.id,object:u,geometry:f,material:_,materialVariant:a(u),groupOrder:S,renderOrder:u.renderOrder,z:m,group:p},i[t]=E):(E.id=u.id,E.object=u,E.geometry=f,E.material=_,E.materialVariant=a(u),E.groupOrder=S,E.renderOrder=u.renderOrder,E.z=m,E.group=p),t++,E}function l(u,f,_,S,m,p,E){E.reversedDepth===!0&&(m=-m);let A=o(u,f,_,S,m,p);_.transmission>0?n.push(A):_.transparent===!0?s.push(A):e.push(A)}function c(u,f,_,S,m,p){let E=o(u,f,_,S,m,p);_.transmission>0?n.unshift(E):_.transparent===!0?s.unshift(E):e.unshift(E)}function h(u,f){e.length>1&&e.sort(u||Z1),n.length>1&&n.sort(f||Bh),s.length>1&&s.sort(f||Bh)}function d(){for(let u=t,f=i.length;u<f;u++){let _=i[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function J1(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new zh,i.set(n,[a])):s>=r.length?(a=new zh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function $1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new F,color:new $t};break;case"SpotLight":e={position:new F,direction:new F,color:new $t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new $t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new $t,groundColor:new $t};break;case"RectAreaLight":e={color:new $t,position:new F,halfWidth:new F,halfHeight:new F};break}return i[t.id]=e,e}}}function K1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var j1=0;function tm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function em(i){let t=new $1,e=K1(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);let s=new F,r=new fe,a=new fe;function o(c){let h=0,d=0,u=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let f=0,_=0,S=0,m=0,p=0,E=0,A=0,y=0,b=0,M=0,C=0,x=0,w=0,R=0;c.sort(tm);for(let z=0,O=c.length;z<O;z++){let P=c[z],B=P.color,q=P.intensity,J=P.distance,at=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===fi?at=P.shadow.map.texture:at=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=B.r*q,d+=B.g*q,u+=B.b*q;else if(P.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(P.sh.coefficients[$],q);R++}else if(P.isSunLight){let $=t.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let j=P.shadow,it=e.get(P);it.shadowIntensity=j.intensity,it.shadowBias=j.bias,it.shadowNormalBias=j.normalBias,it.shadowRadius=j.radius,it.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),n.sunShadow[_]=it,n.sunShadowMap[_]=at;let Ot=j.getViewportCount();for(let bt=0;bt<Ot;bt++)n.sunShadowMatrix[S+bt]=j.getMatrix(bt),n.sunShadowCascade[S+bt]=j._cascadeData[bt];S+=Ot,_++}n.sun[f]=$,f++}else if(P.isDirectionalLight){let $=t.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let j=P.shadow,it=e.get(P);it.shadowIntensity=j.intensity,it.shadowBias=j.bias,it.shadowNormalBias=j.normalBias,it.shadowRadius=j.radius,it.shadowMapSize=j.mapSize,n.directionalShadow[m]=it,n.directionalShadowMap[m]=at,n.directionalShadowMatrix[m]=P.shadow.matrix,b++}n.directional[m]=$,m++}else if(P.isSpotLight){let $=t.get(P);$.position.setFromMatrixPosition(P.matrixWorld),$.color.copy(B).multiplyScalar(q),$.distance=J,$.coneCos=Math.cos(P.angle),$.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),$.decay=P.decay,n.spot[E]=$;let j=P.shadow;if(P.map&&(n.spotLightMap[x]=P.map,x++,j.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[E]=j.matrix,P.castShadow){let it=e.get(P);it.shadowIntensity=j.intensity,it.shadowBias=j.bias,it.shadowNormalBias=j.normalBias,it.shadowRadius=j.radius,it.shadowMapSize=j.mapSize,n.spotShadow[E]=it,n.spotShadowMap[E]=at,C++}E++}else if(P.isRectAreaLight){let $=t.get(P);$.color.copy(B).multiplyScalar(q),$.halfWidth.set(P.width*.5,0,0),$.halfHeight.set(0,P.height*.5,0),n.rectArea[A]=$,A++}else if(P.isPointLight){let $=t.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity),$.distance=P.distance,$.decay=P.decay,P.castShadow){let j=P.shadow,it=e.get(P);it.shadowIntensity=j.intensity,it.shadowBias=j.bias,it.shadowNormalBias=j.normalBias,it.shadowRadius=j.radius,it.shadowMapSize=j.mapSize,it.shadowCameraNear=j.camera.near,it.shadowCameraFar=j.camera.far,n.pointShadow[p]=it,n.pointShadowMap[p]=at,n.pointShadowMatrix[p]=P.shadow.matrix,M++}n.point[p]=$,p++}else if(P.isHemisphereLight){let $=t.get(P);$.skyColor.copy(P.color).multiplyScalar(q),$.groundColor.copy(P.groundColor).multiplyScalar(q),n.hemi[y]=$,y++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=wt.LTC_FLOAT_1,n.rectAreaLTC2=wt.LTC_FLOAT_2):(n.rectAreaLTC1=wt.LTC_HALF_1,n.rectAreaLTC2=wt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let N=n.hash;(N.sunLength!==f||N.directionalLength!==m||N.pointLength!==p||N.spotLength!==E||N.rectAreaLength!==A||N.hemiLength!==y||N.numSunShadows!==_||N.numDirectionalShadows!==b||N.numPointShadows!==M||N.numSpotShadows!==C||N.numSpotMaps!==x||N.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=m,n.spot.length=E,n.rectArea.length=A,n.point.length=p,n.hemi.length=y,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=M,n.pointShadowMap.length=M,n.pointShadowMatrix.length=M,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+x-w,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,N.sunLength=f,N.directionalLength=m,N.pointLength=p,N.spotLength=E,N.rectAreaLength=A,N.hemiLength=y,N.numSunShadows=_,N.numDirectionalShadows=b,N.numPointShadows=M,N.numSpotShadows=C,N.numSpotMaps=x,N.numLightProbes=R,n.version=j1++)}function l(c,h){let d=0,u=0,f=0,_=0,S=0,m=0,p=h.matrixWorldInverse;for(let E=0,A=c.length;E<A;E++){let y=c[E];if(y.isSunLight){let b=n.sun[d];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(p),d++}else if(y.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),u++}else if(y.isSpotLight){let b=n.spot[_];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),_++}else if(y.isRectAreaLight){let b=n.rectArea[S];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),a.identity(),r.copy(y.matrixWorld),r.premultiply(p),a.extractRotation(r),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),S++}else if(y.isPointLight){let b=n.point[f];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){let b=n.hemi[m];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function Vh(i){let t=new em(i),e=[],n=[],s=[];function r(u){d.camera=u,e.length=0,n.length=0,s.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function nm(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Vh(i),t.set(s,[o])):r>=a.length?(o=new Vh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var im=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sm=`uniform sampler2D shadow_pass;
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
}`,rm=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],am=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],kh=new fe,Sr=new F,Gl=new F;function om(i,t,e){let n=new rs,s=new mt,r=new mt,a=new be,o=new _a,l=new xa,c={},h=e.maxTextureSize,d={[ci]:Ve,[Ve]:ci,[ln]:ln},u=new an({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:im,fragmentShader:sm}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let _=new Ze;_.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new oe(_,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hr;let p=this.type;this.render=function(M,C,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;this.type===Pc&&(Xt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=hr);let w=i.getRenderTarget(),R=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Dn),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let O=p!==this.type;O&&C.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(B=>B.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,B=M.length;P<B;P++){let q=M[P],J=q.shadow;if(J===void 0){Xt("WebGLShadowMap:",q,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let at=J.getFrameExtents();s.multiply(at),r.copy(J.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/at.x),s.x=r.x*at.x,J.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/at.y),s.y=r.y*at.y,J.mapSize.y=r.y));let $=i.state.buffers.depth.getReversed();if(J.camera._reversedDepth=$,J.map===null||O===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===cs){if(q.isPointLight){Xt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new Ke(s.x,s.y,{format:fi,type:bn,minFilter:ze,magFilter:ze,generateMipmaps:!1}),J.map.texture.name=q.name+".shadowMap",J.map.depthTexture=new ii(s.x,s.y,un),J.map.depthTexture.name=q.name+".shadowMapDepth",J.map.depthTexture.format=An,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Fe,J.map.depthTexture.magFilter=Fe}else q.isPointLight?(J.map=new bo(s.x),J.map.depthTexture=new ca(s.x,Sn)):(J.map=new Ke(s.x,s.y),J.map.depthTexture=new ii(s.x,s.y,Sn)),J.map.depthTexture.name=q.name+".shadowMap",J.map.depthTexture.format=An,this.type===hr?(J.map.depthTexture.compareFunction=$?yo:vo,J.map.depthTexture.minFilter=ze,J.map.depthTexture.magFilter=ze):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Fe,J.map.depthTexture.magFilter=Fe);J.camera.updateProjectionMatrix()}J.map.isWebGLCubeRenderTarget!==!0&&(J.map.width!==s.x||J.map.height!==s.y)&&J.map.setSize(s.x,s.y);let j=J.map.isWebGLCubeRenderTarget?6:J.getViewportCount();q.isPointLight!==!0&&J.updateMatrices(q,x);for(let it=0;it<j;it++){let Ot=J.getCamera(it);if(q.isPointLight){let bt=J.camera,Zt=J.matrix,jt=q.distance||bt.far;jt!==bt.far&&(bt.far=jt,bt.updateProjectionMatrix()),Sr.setFromMatrixPosition(q.matrixWorld),bt.position.copy(Sr),Gl.copy(bt.position),Gl.add(rm[it]),bt.up.copy(am[it]),bt.lookAt(Gl),bt.updateMatrixWorld(),Zt.makeTranslation(-Sr.x,-Sr.y,-Sr.z),kh.multiplyMatrices(bt.projectionMatrix,bt.matrixWorldInverse),J._frustum.setFromProjectionMatrix(kh,bt.coordinateSystem,bt.reversedDepth)}if(J.map.isWebGLCubeRenderTarget)i.setRenderTarget(J.map,it),i.clear();else{it===0&&(i.setRenderTarget(J.map),i.clear());let bt=J.getViewport(it);a.set(r.x*bt.x,r.y*bt.y,r.x*bt.z,r.y*bt.w),z.viewport(a)}n=J.getFrustum(it),y(C,x,Ot,q,this.type)}J.isPointLightShadow!==!0&&this.type===cs&&E(J,x),J.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(w,R,N)};function E(M,C){let x=t.update(S);u.defines.VSM_SAMPLES!==M.blurSamples&&(u.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null?M.mapPass=new Ke(s.x,s.y,{format:fi,type:bn}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),u.uniforms.shadow_pass.value=M.map.depthTexture,u.uniforms.resolution.value.set(M.map.width,M.map.height),u.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(C,null,x,u,S,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value.set(M.map.width,M.map.height),f.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(C,null,x,f,S,null)}function A(M,C,x,w){let R=null,N=x.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(N!==void 0)R=N;else if(R=x.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let z=R.uuid,O=C.uuid,P=c[z];P===void 0&&(P={},c[z]=P);let B=P[O];B===void 0&&(B=R.clone(),P[O]=B,C.addEventListener("dispose",b)),R=B}if(R.visible=C.visible,R.wireframe=C.wireframe,w===cs?R.side=C.shadowSide!==null?C.shadowSide:C.side:R.side=C.shadowSide!==null?C.shadowSide:d[C.side],R.alphaMap=C.alphaMap,R.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,R.map=C.map,R.clipShadows=C.clipShadows,R.clippingPlanes=C.clippingPlanes,R.clipIntersection=C.clipIntersection,R.displacementMap=C.displacementMap,R.displacementScale=C.displacementScale,R.displacementBias=C.displacementBias,R.wireframeLinewidth=C.wireframeLinewidth,R.linewidth=C.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let z=i.properties.get(R);z.light=x}return R}function y(M,C,x,w,R){if(M.visible===!1)return;if(M.layers.test(C.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&R===cs)&&(!M.frustumCulled||M.intersectsFrustum(n))){M.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,M.matrixWorld);let O=t.update(M),P=M.material;if(Array.isArray(P)){let B=O.groups;for(let q=0,J=B.length;q<J;q++){let at=B[q],$=P[at.materialIndex];if($&&$.visible){let j=A(M,$,w,R);M.onBeforeShadow(i,M,C,x,O,j,at),i.renderBufferDirect(x,null,O,j,M,at),M.onAfterShadow(i,M,C,x,O,j,at)}}}else if(P.visible){let B=A(M,P,w,R);M.onBeforeShadow(i,M,C,x,O,B,null),i.renderBufferDirect(x,null,O,B,M,null),M.onAfterShadow(i,M,C,x,O,B,null)}}let z=M.children;for(let O=0,P=z.length;O<P;O++)y(z[O],C,x,w,R)}function b(M){M.target.removeEventListener("dispose",b);for(let x in c){let w=c[x],R=M.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}function lm(i,t){function e(){let D=!1,_t=new be,nt=null,St=new be(0,0,0,0);return{setMask:function(At){nt!==At&&!D&&(i.colorMask(At,At,At,At),nt=At)},setLocked:function(At){D=At},setClear:function(At,rt,Gt,Ut,he){he===!0&&(At*=Ut,rt*=Ut,Gt*=Ut),_t.set(At,rt,Gt,Ut),St.equals(_t)===!1&&(i.clearColor(At,rt,Gt,Ut),St.copy(_t))},reset:function(){D=!1,nt=null,St.set(-1,0,0,0)}}}function n(){let D=!1,_t=!1,nt=null,St=null,At=null;return{setReversed:function(rt){if(_t!==rt){let Gt=t.get("EXT_clip_control");rt?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT),_t=rt;let Ut=At;At=null,this.setClear(Ut)}},getReversed:function(){return _t},setTest:function(rt){rt?Q(i.DEPTH_TEST):k(i.DEPTH_TEST)},setMask:function(rt){nt!==rt&&!D&&(i.depthMask(rt),nt=rt)},setFunc:function(rt){if(_t&&(rt=dh[rt]),St!==rt){switch(rt){case Zr:i.depthFunc(i.NEVER);break;case Jr:i.depthFunc(i.ALWAYS);break;case $r:i.depthFunc(i.LESS);break;case ji:i.depthFunc(i.LEQUAL);break;case Kr:i.depthFunc(i.EQUAL);break;case jr:i.depthFunc(i.GEQUAL);break;case ta:i.depthFunc(i.GREATER);break;case ea:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}St=rt}},setLocked:function(rt){D=rt},setClear:function(rt){At!==rt&&(At=rt,_t&&(rt=1-rt),i.clearDepth(rt))},reset:function(){D=!1,nt=null,St=null,At=null,_t=!1}}}function s(){let D=!1,_t=null,nt=null,St=null,At=null,rt=null,Gt=null,Ut=null,he=null;return{setTest:function(le){D||(le?Q(i.STENCIL_TEST):k(i.STENCIL_TEST))},setMask:function(le){_t!==le&&!D&&(i.stencilMask(le),_t=le)},setFunc:function(le,Je,$e){(nt!==le||St!==Je||At!==$e)&&(i.stencilFunc(le,Je,$e),nt=le,St=Je,At=$e)},setOp:function(le,Je,$e){(rt!==le||Gt!==Je||Ut!==$e)&&(i.stencilOp(le,Je,$e),rt=le,Gt=Je,Ut=$e)},setLocked:function(le){D=le},setClear:function(le){he!==le&&(i.clearStencil(le),he=le)},reset:function(){D=!1,_t=null,nt=null,St=null,At=null,rt=null,Gt=null,Ut=null,he=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,_=[],S=null,m=!1,p=null,E=null,A=null,y=null,b=null,M=null,C=null,x=new $t(0,0,0),w=0,R=!1,N=null,z=null,O=null,P=null,B=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,at=0,$=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec($)[1]),J=at>=1):$.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),J=at>=2);let j=null,it={},Ot=i.getParameter(i.SCISSOR_BOX),bt=i.getParameter(i.VIEWPORT),Zt=new be().fromArray(Ot),jt=new be().fromArray(bt);function ie(D,_t,nt,St){let At=new Uint8Array(4),rt=i.createTexture();i.bindTexture(D,rt),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Gt=0;Gt<nt;Gt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(_t,0,i.RGBA,1,1,St,0,i.RGBA,i.UNSIGNED_BYTE,At):i.texImage2D(_t+Gt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,At);return rt}let U={};U[i.TEXTURE_2D]=ie(i.TEXTURE_2D,i.TEXTURE_2D,1),U[i.TEXTURE_CUBE_MAP]=ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),U[i.TEXTURE_2D_ARRAY]=ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),U[i.TEXTURE_3D]=ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(i.DEPTH_TEST),a.setFunc(ji),ot(!1),ft(cl),Q(i.CULL_FACE),st(Dn);function Q(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function k(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function yt(D,_t){return u[D]!==_t?(i.bindFramebuffer(D,_t),u[D]=_t,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=_t),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=_t),!0):!1}function ht(D,_t){let nt=_,St=!1;if(D){nt=f.get(_t),nt===void 0&&(nt=[],f.set(_t,nt));let At=D.textures;if(nt.length!==At.length||nt[0]!==i.COLOR_ATTACHMENT0){for(let rt=0,Gt=At.length;rt<Gt;rt++)nt[rt]=i.COLOR_ATTACHMENT0+rt;nt.length=At.length,St=!0}}else nt[0]!==i.BACK&&(nt[0]=i.BACK,St=!0);St&&i.drawBuffers(nt)}function Et(D){return S!==D?(i.useProgram(D),S=D,!0):!1}let Ct={[Ri]:i.FUNC_ADD,[Dc]:i.FUNC_SUBTRACT,[Nc]:i.FUNC_REVERSE_SUBTRACT};Ct[Uc]=i.MIN,Ct[Fc]=i.MAX;let tt={[Oc]:i.ZERO,[Bc]:i.ONE,[zc]:i.SRC_COLOR,[fl]:i.SRC_ALPHA,[Xc]:i.SRC_ALPHA_SATURATE,[Hc]:i.DST_COLOR,[kc]:i.DST_ALPHA,[Vc]:i.ONE_MINUS_SRC_COLOR,[pl]:i.ONE_MINUS_SRC_ALPHA,[Wc]:i.ONE_MINUS_DST_COLOR,[Gc]:i.ONE_MINUS_DST_ALPHA,[Qc]:i.CONSTANT_COLOR,[qc]:i.ONE_MINUS_CONSTANT_COLOR,[Yc]:i.CONSTANT_ALPHA,[Zc]:i.ONE_MINUS_CONSTANT_ALPHA};function st(D,_t,nt,St,At,rt,Gt,Ut,he,le){if(D===Dn){m===!0&&(k(i.BLEND),m=!1);return}if(m===!1&&(Q(i.BLEND),m=!0),D!==Lc){if(D!==p||le!==R){if((E!==Ri||b!==Ri)&&(i.blendEquation(i.FUNC_ADD),E=Ri,b=Ri),le)switch(D){case hs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hl:i.blendFunc(i.ONE,i.ONE);break;case ul:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case dl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Qt("WebGLState: Invalid blending: ",D);break}else switch(D){case hs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ul:Qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case dl:Qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qt("WebGLState: Invalid blending: ",D);break}A=null,y=null,M=null,C=null,x.set(0,0,0),w=0,p=D,R=le}return}At=At||_t,rt=rt||nt,Gt=Gt||St,(_t!==E||At!==b)&&(i.blendEquationSeparate(Ct[_t],Ct[At]),E=_t,b=At),(nt!==A||St!==y||rt!==M||Gt!==C)&&(i.blendFuncSeparate(tt[nt],tt[St],tt[rt],tt[Gt]),A=nt,y=St,M=rt,C=Gt),(Ut.equals(x)===!1||he!==w)&&(i.blendColor(Ut.r,Ut.g,Ut.b,he),x.copy(Ut),w=he),p=D,R=!1}function lt(D,_t){D.side===ln?k(i.CULL_FACE):Q(i.CULL_FACE);let nt=D.side===Ve;_t&&(nt=!nt),ot(nt),D.blending===hs&&D.transparent===!1?st(Dn):st(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let St=D.stencilWrite;o.setTest(St),St&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),kt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):k(i.SAMPLE_ALPHA_TO_COVERAGE)}function ot(D){N!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),N=D)}function ft(D){D!==Rc?(Q(i.CULL_FACE),D!==z&&(D===cl?i.cullFace(i.BACK):D===Ic?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):k(i.CULL_FACE),z=D}function Pt(D){D!==O&&(J&&i.lineWidth(D),O=D)}function kt(D,_t,nt){D?(Q(i.POLYGON_OFFSET_FILL),(P!==_t||B!==nt)&&(P=_t,B=nt,a.getReversed()&&(_t=-_t),i.polygonOffset(_t,nt))):k(i.POLYGON_OFFSET_FILL)}function Wt(D){D?Q(i.SCISSOR_TEST):k(i.SCISSOR_TEST)}function Bt(D){D===void 0&&(D=i.TEXTURE0+q-1),j!==D&&(i.activeTexture(D),j=D)}function I(D,_t,nt){nt===void 0&&(j===null?nt=i.TEXTURE0+q-1:nt=j);let St=it[nt];St===void 0&&(St={type:void 0,texture:void 0},it[nt]=St),(St.type!==D||St.texture!==_t)&&(j!==nt&&(i.activeTexture(nt),j=nt),i.bindTexture(D,_t||U[D]),St.type=D,St.texture=_t)}function se(){let D=it[j];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Kt(){try{i.compressedTexImage2D(...arguments)}catch(D){Qt("WebGLState:",D)}}function T(){try{i.compressedTexImage3D(...arguments)}catch(D){Qt("WebGLState:",D)}}function g(){try{i.texSubImage2D(...arguments)}catch(D){Qt("WebGLState:",D)}}function V(){try{i.texSubImage3D(...arguments)}catch(D){Qt("WebGLState:",D)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(D){Qt("WebGLState:",D)}}function Y(){try{i.compressedTexSubImage3D(...arguments)}catch(D){Qt("WebGLState:",D)}}function ct(){try{i.texStorage2D(...arguments)}catch(D){Qt("WebGLState:",D)}}function ut(){try{i.texStorage3D(...arguments)}catch(D){Qt("WebGLState:",D)}}function K(){try{i.texImage2D(...arguments)}catch(D){Qt("WebGLState:",D)}}function et(){try{i.texImage3D(...arguments)}catch(D){Qt("WebGLState:",D)}}function gt(D){return d[D]!==void 0?d[D]:i.getParameter(D)}function zt(D,_t){d[D]!==_t&&(i.pixelStorei(D,_t),d[D]=_t)}function Mt(D){Zt.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Zt.copy(D))}function vt(D){jt.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),jt.copy(D))}function Dt(D,_t){let nt=c.get(_t);nt===void 0&&(nt=new WeakMap,c.set(_t,nt));let St=nt.get(D);St===void 0&&(St=i.getUniformBlockIndex(_t,D.name),nt.set(D,St))}function Nt(D,_t){let St=c.get(_t).get(D);l.get(_t)!==St&&(i.uniformBlockBinding(_t,St,D.__bindingPointIndex),l.set(_t,St))}function qt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},j=null,it={},u={},f=new WeakMap,_=[],S=null,m=!1,p=null,E=null,A=null,y=null,b=null,M=null,C=null,x=new $t(0,0,0),w=0,R=!1,N=null,z=null,O=null,P=null,B=null,Zt.set(0,0,i.canvas.width,i.canvas.height),jt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Q,disable:k,bindFramebuffer:yt,drawBuffers:ht,useProgram:Et,setBlending:st,setMaterial:lt,setFlipSided:ot,setCullFace:ft,setLineWidth:Pt,setPolygonOffset:kt,setScissorTest:Wt,activeTexture:Bt,bindTexture:I,unbindTexture:se,compressedTexImage2D:Kt,compressedTexImage3D:T,texImage2D:K,texImage3D:et,pixelStorei:zt,getParameter:gt,updateUBOMapping:Dt,uniformBlockBinding:Nt,texStorage2D:ct,texStorage3D:ut,texSubImage2D:g,texSubImage3D:V,compressedTexSubImage2D:W,compressedTexSubImage3D:Y,scissor:Mt,viewport:vt,reset:qt}}function cm(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new mt,h=new WeakMap,d=new Set,u,f=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(T,g){return _?new OffscreenCanvas(T,g):Us("canvas")}function m(T,g,V){let W=1,Y=Kt(T);if((Y.width>V||Y.height>V)&&(W=V/Math.max(Y.width,Y.height)),W<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let ct=Math.floor(W*Y.width),ut=Math.floor(W*Y.height);u===void 0&&(u=S(ct,ut));let K=g?S(ct,ut):u;return K.width=ct,K.height=ut,K.getContext("2d").drawImage(T,0,0,ct,ut),Xt("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+ct+"x"+ut+")."),K}else return"data"in T&&Xt("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),T;return T}function p(T){return T.generateMipmaps}function E(T){i.generateMipmap(T)}function A(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(T,g,V,W,Y,ct=!1){if(T!==null){if(i[T]!==void 0)return i[T];Xt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ut;W&&(ut=t.get("EXT_texture_norm16"),ut||Xt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=g;if(g===i.RED&&(V===i.FLOAT&&(K=i.R32F),V===i.HALF_FLOAT&&(K=i.R16F),V===i.UNSIGNED_BYTE&&(K=i.R8),V===i.UNSIGNED_SHORT&&ut&&(K=ut.R16_EXT),V===i.SHORT&&ut&&(K=ut.R16_SNORM_EXT)),g===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(K=i.R8UI),V===i.UNSIGNED_SHORT&&(K=i.R16UI),V===i.UNSIGNED_INT&&(K=i.R32UI),V===i.BYTE&&(K=i.R8I),V===i.SHORT&&(K=i.R16I),V===i.INT&&(K=i.R32I)),g===i.RG&&(V===i.FLOAT&&(K=i.RG32F),V===i.HALF_FLOAT&&(K=i.RG16F),V===i.UNSIGNED_BYTE&&(K=i.RG8),V===i.UNSIGNED_SHORT&&ut&&(K=ut.RG16_EXT),V===i.SHORT&&ut&&(K=ut.RG16_SNORM_EXT)),g===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(K=i.RG8UI),V===i.UNSIGNED_SHORT&&(K=i.RG16UI),V===i.UNSIGNED_INT&&(K=i.RG32UI),V===i.BYTE&&(K=i.RG8I),V===i.SHORT&&(K=i.RG16I),V===i.INT&&(K=i.RG32I)),g===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(K=i.RGB8UI),V===i.UNSIGNED_SHORT&&(K=i.RGB16UI),V===i.UNSIGNED_INT&&(K=i.RGB32UI),V===i.BYTE&&(K=i.RGB8I),V===i.SHORT&&(K=i.RGB16I),V===i.INT&&(K=i.RGB32I)),g===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),V===i.UNSIGNED_INT&&(K=i.RGBA32UI),V===i.BYTE&&(K=i.RGBA8I),V===i.SHORT&&(K=i.RGBA16I),V===i.INT&&(K=i.RGBA32I)),g===i.RGB&&(V===i.UNSIGNED_SHORT&&ut&&(K=ut.RGB16_EXT),V===i.SHORT&&ut&&(K=ut.RGB16_SNORM_EXT),V===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),g===i.RGBA){let et=ct?Ns:ae.getTransfer(Y);V===i.FLOAT&&(K=i.RGBA32F),V===i.HALF_FLOAT&&(K=i.RGBA16F),V===i.UNSIGNED_BYTE&&(K=et===de?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT&&ut&&(K=ut.RGBA16_EXT),V===i.SHORT&&ut&&(K=ut.RGBA16_SNORM_EXT),V===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function b(T,g){let V;return T?g===null||g===Sn||g===ds?V=i.DEPTH24_STENCIL8:g===un?V=i.DEPTH32F_STENCIL8:g===us&&(V=i.DEPTH24_STENCIL8,Xt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Sn||g===ds?V=i.DEPTH_COMPONENT24:g===un?V=i.DEPTH_COMPONENT32F:g===us&&(V=i.DEPTH_COMPONENT16),V}function M(T,g){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==Fe&&T.minFilter!==ze?Math.log2(Math.max(g.width,g.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?g.mipmaps.length:1}function C(T){let g=T.target;g.removeEventListener("dispose",C),w(g),g.isVideoTexture&&h.delete(g),g.isHTMLTexture&&d.delete(g)}function x(T){let g=T.target;g.removeEventListener("dispose",x),N(g)}function w(T){let g=n.get(T);if(g.__webglInit===void 0)return;let V=T.source,W=f.get(V);if(W){let Y=W[g.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&R(T),Object.keys(W).length===0&&f.delete(V)}n.remove(T)}function R(T){let g=n.get(T);i.deleteTexture(g.__webglTexture);let V=T.source,W=f.get(V);delete W[g.__cacheKey],a.memory.textures--}function N(T){let g=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(g.__webglFramebuffer[W]))for(let Y=0;Y<g.__webglFramebuffer[W].length;Y++)i.deleteFramebuffer(g.__webglFramebuffer[W][Y]);else i.deleteFramebuffer(g.__webglFramebuffer[W]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[W])}else{if(Array.isArray(g.__webglFramebuffer))for(let W=0;W<g.__webglFramebuffer.length;W++)i.deleteFramebuffer(g.__webglFramebuffer[W]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let W=0;W<g.__webglColorRenderbuffer.length;W++)g.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[W]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let V=T.textures;for(let W=0,Y=V.length;W<Y;W++){let ct=n.get(V[W]);ct.__webglTexture&&(i.deleteTexture(ct.__webglTexture),a.memory.textures--),n.remove(V[W])}n.remove(T)}let z=0;function O(){z=0}function P(){return z}function B(T){z=T}function q(){let T=z;return T>=s.maxTextures&&Xt("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+s.maxTextures),z+=1,T}function J(T){let g=[];return g.push(T.wrapS),g.push(T.wrapT),g.push(T.wrapR||0),g.push(T.magFilter),g.push(T.minFilter),g.push(T.anisotropy),g.push(T.internalFormat),g.push(T.format),g.push(T.type),g.push(T.generateMipmaps),g.push(T.premultiplyAlpha),g.push(T.flipY),g.push(T.unpackAlignment),g.push(T.colorSpace),g.join()}function at(T,g){let V=n.get(T);if(T.isVideoTexture&&I(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&V.__version!==T.version){let W=T.image;if(W===null)Xt("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Xt("WebGLRenderer: Texture marked for update but image is incomplete");else{k(V,T,g);return}}else T.isExternalTexture&&(V.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+g)}function $(T,g){let V=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&V.__version!==T.version){k(V,T,g);return}else T.isExternalTexture&&(V.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+g)}function j(T,g){let V=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&V.__version!==T.version){k(V,T,g);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+g)}function it(T,g){let V=n.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&V.__version!==T.version){yt(V,T,g);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+g)}let Ot={[na]:i.REPEAT,[wn]:i.CLAMP_TO_EDGE,[ia]:i.MIRRORED_REPEAT},bt={[Fe]:i.NEAREST,[Kc]:i.NEAREST_MIPMAP_NEAREST,[fr]:i.NEAREST_MIPMAP_LINEAR,[ze]:i.LINEAR,[Na]:i.LINEAR_MIPMAP_NEAREST,[ui]:i.LINEAR_MIPMAP_LINEAR},Zt={[nh]:i.NEVER,[oh]:i.ALWAYS,[ih]:i.LESS,[vo]:i.LEQUAL,[sh]:i.EQUAL,[yo]:i.GEQUAL,[rh]:i.GREATER,[ah]:i.NOTEQUAL};function jt(T,g){if(g.type===un&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===ze||g.magFilter===Na||g.magFilter===fr||g.magFilter===ui||g.minFilter===ze||g.minFilter===Na||g.minFilter===fr||g.minFilter===ui)&&Xt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,Ot[g.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,Ot[g.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,Ot[g.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,bt[g.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,bt[g.minFilter]),g.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Zt[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Fe||g.minFilter!==fr&&g.minFilter!==ui||g.type===un&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function ie(T,g){let V=!1;T.__webglInit===void 0&&(T.__webglInit=!0,g.addEventListener("dispose",C));let W=g.source,Y=f.get(W);Y===void 0&&(Y={},f.set(W,Y));let ct=J(g);if(ct!==T.__cacheKey){Y[ct]===void 0&&(Y[ct]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),Y[ct].usedTimes++;let ut=Y[T.__cacheKey];ut!==void 0&&(Y[T.__cacheKey].usedTimes--,ut.usedTimes===0&&R(g)),T.__cacheKey=ct,T.__webglTexture=Y[ct].texture}return V}function U(T,g,V){return Math.floor(Math.floor(T/V)/g)}function Q(T,g,V,W){let ct=T.updateRanges;if(ct.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,V,W,g.data);else{ct.sort((zt,Mt)=>zt.start-Mt.start);let ut=0;for(let zt=1;zt<ct.length;zt++){let Mt=ct[ut],vt=ct[zt],Dt=Mt.start+Mt.count,Nt=U(vt.start,g.width,4),qt=U(Mt.start,g.width,4);vt.start<=Dt+1&&Nt===qt&&U(vt.start+vt.count-1,g.width,4)===Nt?Mt.count=Math.max(Mt.count,vt.start+vt.count-Mt.start):(++ut,ct[ut]=vt)}ct.length=ut+1;let K=e.getParameter(i.UNPACK_ROW_LENGTH),et=e.getParameter(i.UNPACK_SKIP_PIXELS),gt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let zt=0,Mt=ct.length;zt<Mt;zt++){let vt=ct[zt],Dt=Math.floor(vt.start/4),Nt=Math.ceil(vt.count/4),qt=Dt%g.width,D=Math.floor(Dt/g.width),_t=Nt,nt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,qt),e.pixelStorei(i.UNPACK_SKIP_ROWS,D),e.texSubImage2D(i.TEXTURE_2D,0,qt,D,_t,nt,V,W,g.data)}T.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,K),e.pixelStorei(i.UNPACK_SKIP_PIXELS,et),e.pixelStorei(i.UNPACK_SKIP_ROWS,gt)}}function k(T,g,V){let W=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(W=i.TEXTURE_3D);let Y=ie(T,g),ct=g.source;e.bindTexture(W,T.__webglTexture,i.TEXTURE0+V);let ut=n.get(ct);if(ct.version!==ut.__version||Y===!0){if(e.activeTexture(i.TEXTURE0+V),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){let nt=ae.getPrimaries(ae.workingColorSpace),St=g.colorSpace===Xn?null:ae.getPrimaries(g.colorSpace),At=g.colorSpace===Xn||nt===St?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At)}e.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment);let et=m(g.image,!1,s.maxTextureSize);et=se(g,et);let gt=r.convert(g.format,g.colorSpace),zt=r.convert(g.type),Mt=y(g.internalFormat,gt,zt,g.normalized,g.colorSpace,g.isVideoTexture);jt(W,g);let vt,Dt=g.mipmaps,Nt=g.isVideoTexture!==!0,qt=ut.__version===void 0||Y===!0,D=ct.dataReady,_t=M(g,et);if(g.isDepthTexture)Mt=b(g.format===di,g.type),qt&&(Nt?e.texStorage2D(i.TEXTURE_2D,1,Mt,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,Mt,et.width,et.height,0,gt,zt,null));else if(g.isDataTexture)if(Dt.length>0){Nt&&qt&&e.texStorage2D(i.TEXTURE_2D,_t,Mt,Dt[0].width,Dt[0].height);for(let nt=0,St=Dt.length;nt<St;nt++)vt=Dt[nt],Nt?D&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,vt.width,vt.height,gt,zt,vt.data):e.texImage2D(i.TEXTURE_2D,nt,Mt,vt.width,vt.height,0,gt,zt,vt.data);g.generateMipmaps=!1}else Nt?(qt&&e.texStorage2D(i.TEXTURE_2D,_t,Mt,et.width,et.height),D&&Q(g,et,gt,zt)):e.texImage2D(i.TEXTURE_2D,0,Mt,et.width,et.height,0,gt,zt,et.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Nt&&qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,Mt,Dt[0].width,Dt[0].height,et.depth);for(let nt=0,St=Dt.length;nt<St;nt++)if(vt=Dt[nt],g.format!==dn)if(gt!==null)if(Nt){if(D)if(g.layerUpdates.size>0){let At=Fl(vt.width,vt.height,g.format,g.type);for(let rt of g.layerUpdates){let Gt=vt.data.subarray(rt*At/vt.data.BYTES_PER_ELEMENT,(rt+1)*At/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,rt,vt.width,vt.height,1,gt,Gt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,vt.width,vt.height,et.depth,gt,vt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,nt,Mt,vt.width,vt.height,et.depth,0,vt.data,0,0);else Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,vt.width,vt.height,et.depth,gt,zt,vt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,nt,Mt,vt.width,vt.height,et.depth,0,gt,zt,vt.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{Nt&&qt&&e.texStorage2D(i.TEXTURE_2D,_t,Mt,Dt[0].width,Dt[0].height);for(let nt=0,St=Dt.length;nt<St;nt++)vt=Dt[nt],g.format!==dn?gt!==null?Nt?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,nt,0,0,vt.width,vt.height,gt,vt.data):e.compressedTexImage2D(i.TEXTURE_2D,nt,Mt,vt.width,vt.height,0,vt.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?D&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,vt.width,vt.height,gt,zt,vt.data):e.texImage2D(i.TEXTURE_2D,nt,Mt,vt.width,vt.height,0,gt,zt,vt.data)}else if(g.isDataArrayTexture)if(Nt){if(qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,Mt,et.width,et.height,et.depth),D)if(g.layerUpdates.size>0){let nt=Fl(et.width,et.height,g.format,g.type);for(let St of g.layerUpdates){let At=et.data.subarray(St*nt/et.data.BYTES_PER_ELEMENT,(St+1)*nt/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,St,et.width,et.height,1,gt,zt,At)}g.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,gt,zt,et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Mt,et.width,et.height,et.depth,0,gt,zt,et.data);else if(g.isData3DTexture)Nt?(qt&&e.texStorage3D(i.TEXTURE_3D,_t,Mt,et.width,et.height,et.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,gt,zt,et.data)):e.texImage3D(i.TEXTURE_3D,0,Mt,et.width,et.height,et.depth,0,gt,zt,et.data);else if(g.isFramebufferTexture){if(qt)if(Nt)e.texStorage2D(i.TEXTURE_2D,_t,Mt,et.width,et.height);else{let nt=et.width,St=et.height;for(let At=0;At<_t;At++)e.texImage2D(i.TEXTURE_2D,At,Mt,nt,St,0,gt,zt,null),nt>>=1,St>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in i){let nt=i.canvas;if(nt.hasAttribute("layoutsubtree")||nt.setAttribute("layoutsubtree","true"),et.parentNode!==nt){nt.appendChild(et),d.add(g),nt.onpaint=St=>{let At=St.changedElements;for(let rt of d)At.includes(rt.image)&&(rt.needsUpdate=!0)},nt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,et);else{let At=i.RGBA,rt=i.RGBA,Gt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,At,rt,Gt,et)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Dt.length>0){if(Nt&&qt){let nt=Kt(Dt[0]);e.texStorage2D(i.TEXTURE_2D,_t,Mt,nt.width,nt.height)}for(let nt=0,St=Dt.length;nt<St;nt++)vt=Dt[nt],Nt?D&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,gt,zt,vt):e.texImage2D(i.TEXTURE_2D,nt,Mt,gt,zt,vt);g.generateMipmaps=!1}else if(Nt){if(qt){let nt=Kt(et);e.texStorage2D(i.TEXTURE_2D,_t,Mt,nt.width,nt.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,gt,zt,et)}else e.texImage2D(i.TEXTURE_2D,0,Mt,gt,zt,et);p(g)&&E(W),ut.__version=ct.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function yt(T,g,V){if(g.image.length!==6)return;let W=ie(T,g),Y=g.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+V);let ct=n.get(Y);if(Y.version!==ct.__version||W===!0){e.activeTexture(i.TEXTURE0+V);let ut=ae.getPrimaries(ae.workingColorSpace),K=g.colorSpace===Xn?null:ae.getPrimaries(g.colorSpace),et=g.colorSpace===Xn||ut===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let gt=g.isCompressedTexture||g.image[0].isCompressedTexture,zt=g.image[0]&&g.image[0].isDataTexture,Mt=[];for(let rt=0;rt<6;rt++)!gt&&!zt?Mt[rt]=m(g.image[rt],!0,s.maxCubemapSize):Mt[rt]=zt?g.image[rt].image:g.image[rt],Mt[rt]=se(g,Mt[rt]);let vt=Mt[0],Dt=r.convert(g.format,g.colorSpace),Nt=r.convert(g.type),qt=y(g.internalFormat,Dt,Nt,g.normalized,g.colorSpace),D=g.isVideoTexture!==!0,_t=ct.__version===void 0||W===!0,nt=Y.dataReady,St=M(g,vt);jt(i.TEXTURE_CUBE_MAP,g);let At;if(gt){D&&_t&&e.texStorage2D(i.TEXTURE_CUBE_MAP,St,qt,vt.width,vt.height);for(let rt=0;rt<6;rt++){At=Mt[rt].mipmaps;for(let Gt=0;Gt<At.length;Gt++){let Ut=At[Gt];g.format!==dn?Dt!==null?D?nt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Gt,0,0,Ut.width,Ut.height,Dt,Ut.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Gt,qt,Ut.width,Ut.height,0,Ut.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Gt,0,0,Ut.width,Ut.height,Dt,Nt,Ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Gt,qt,Ut.width,Ut.height,0,Dt,Nt,Ut.data)}}}else{if(At=g.mipmaps,D&&_t){At.length>0&&St++;let rt=Kt(Mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,St,qt,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(zt){D?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Mt[rt].width,Mt[rt].height,Dt,Nt,Mt[rt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,qt,Mt[rt].width,Mt[rt].height,0,Dt,Nt,Mt[rt].data);for(let Gt=0;Gt<At.length;Gt++){let he=At[Gt].image[rt].image;D?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Gt+1,0,0,he.width,he.height,Dt,Nt,he.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Gt+1,qt,he.width,he.height,0,Dt,Nt,he.data)}}else{D?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Dt,Nt,Mt[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,qt,Dt,Nt,Mt[rt]);for(let Gt=0;Gt<At.length;Gt++){let Ut=At[Gt];D?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Gt+1,0,0,Dt,Nt,Ut.image[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Gt+1,qt,Dt,Nt,Ut.image[rt])}}}p(g)&&E(i.TEXTURE_CUBE_MAP),ct.__version=Y.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function ht(T,g,V,W,Y,ct){let ut=r.convert(V.format,V.colorSpace),K=r.convert(V.type),et=y(V.internalFormat,ut,K,V.normalized,V.colorSpace),gt=n.get(g),zt=n.get(V);if(zt.__renderTarget=g,!gt.__hasExternalTextures){let Mt=Math.max(1,g.width>>ct),vt=Math.max(1,g.height>>ct);Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?e.texImage3D(Y,ct,et,Mt,vt,g.depth,0,ut,K,null):e.texImage2D(Y,ct,et,Mt,vt,0,ut,K,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),Bt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,Y,zt.__webglTexture,0,Wt(g)):(Y===i.TEXTURE_2D||Y>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,Y,zt.__webglTexture,ct),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Et(T,g,V){if(i.bindRenderbuffer(i.RENDERBUFFER,T),g.depthBuffer){let W=g.depthTexture,Y=W&&W.isDepthTexture?W.type:null,ct=b(g.stencilBuffer,Y),ut=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Bt(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Wt(g),ct,g.width,g.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt(g),ct,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,ct,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ut,i.RENDERBUFFER,T)}else{let W=g.textures;for(let Y=0;Y<W.length;Y++){let ct=W[Y],ut=r.convert(ct.format,ct.colorSpace),K=r.convert(ct.type),et=y(ct.internalFormat,ut,K,ct.normalized,ct.colorSpace);Bt(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Wt(g),et,g.width,g.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt(g),et,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,et,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ct(T,g,V){let W=g.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Y=n.get(g.depthTexture);if(Y.__renderTarget=g,(!Y.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),W){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,g.depthTexture.addEventListener("dispose",C)),Y.__webglTexture===void 0){Y.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),jt(i.TEXTURE_CUBE_MAP,g.depthTexture);let gt=r.convert(g.depthTexture.format),zt=r.convert(g.depthTexture.type),Mt;g.depthTexture.format===An?Mt=i.DEPTH_COMPONENT24:g.depthTexture.format===di&&(Mt=i.DEPTH24_STENCIL8);for(let vt=0;vt<6;vt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,Mt,g.width,g.height,0,gt,zt,null)}}else at(g.depthTexture,0);let ct=Y.__webglTexture,ut=Wt(g),K=W?i.TEXTURE_CUBE_MAP_POSITIVE_X+V:i.TEXTURE_2D,et=g.depthTexture.format===di?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===An)Bt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,K,ct,0,ut):i.framebufferTexture2D(i.FRAMEBUFFER,et,K,ct,0);else if(g.depthTexture.format===di)Bt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,K,ct,0,ut):i.framebufferTexture2D(i.FRAMEBUFFER,et,K,ct,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function tt(T){let g=n.get(T),V=T.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==T.depthTexture){let W=T.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),W){let Y=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,W.removeEventListener("dispose",Y)};W.addEventListener("dispose",Y),g.__depthDisposeCallback=Y}g.__boundDepthTexture=W}if(T.depthTexture&&!g.__autoAllocateDepthBuffer)if(V)for(let W=0;W<6;W++)Ct(g.__webglFramebuffer[W],T,W);else{let W=T.texture.mipmaps;W&&W.length>0?Ct(g.__webglFramebuffer[0],T,0):Ct(g.__webglFramebuffer,T,0)}else if(V){g.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[W]),g.__webglDepthbuffer[W]===void 0)g.__webglDepthbuffer[W]=i.createRenderbuffer(),Et(g.__webglDepthbuffer[W],T,!1);else{let Y=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=g.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,ct)}}else{let W=T.texture.mipmaps;if(W&&W.length>0?e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),Et(g.__webglDepthbuffer,T,!1);else{let Y=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,ct)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function st(T,g,V){let W=n.get(T);g!==void 0&&ht(W.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&tt(T)}function lt(T){let g=T.texture,V=n.get(T),W=n.get(g);T.addEventListener("dispose",x);let Y=T.textures,ct=T.isWebGLCubeRenderTarget===!0,ut=Y.length>1;if(ut||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=g.version,a.memory.textures++),ct){V.__webglFramebuffer=[];for(let K=0;K<6;K++)if(g.mipmaps&&g.mipmaps.length>0){V.__webglFramebuffer[K]=[];for(let et=0;et<g.mipmaps.length;et++)V.__webglFramebuffer[K][et]=i.createFramebuffer()}else V.__webglFramebuffer[K]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){V.__webglFramebuffer=[];for(let K=0;K<g.mipmaps.length;K++)V.__webglFramebuffer[K]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(ut)for(let K=0,et=Y.length;K<et;K++){let gt=n.get(Y[K]);gt.__webglTexture===void 0&&(gt.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&Bt(T)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let K=0;K<Y.length;K++){let et=Y[K];V.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[K]);let gt=r.convert(et.format,et.colorSpace),zt=r.convert(et.type),Mt=y(et.internalFormat,gt,zt,et.normalized,et.colorSpace,T.isXRRenderTarget===!0),vt=Wt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,vt,Mt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,V.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),Et(V.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ct){e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),jt(i.TEXTURE_CUBE_MAP,g);for(let K=0;K<6;K++)if(g.mipmaps&&g.mipmaps.length>0)for(let et=0;et<g.mipmaps.length;et++)ht(V.__webglFramebuffer[K][et],T,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,et);else ht(V.__webglFramebuffer[K],T,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);p(g)&&E(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ut){for(let K=0,et=Y.length;K<et;K++){let gt=Y[K],zt=n.get(gt),Mt=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Mt=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Mt,zt.__webglTexture),jt(Mt,gt),ht(V.__webglFramebuffer,T,gt,i.COLOR_ATTACHMENT0+K,Mt,0),p(gt)&&E(Mt)}e.unbindTexture()}else{let K=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(K=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(K,W.__webglTexture),jt(K,g),g.mipmaps&&g.mipmaps.length>0)for(let et=0;et<g.mipmaps.length;et++)ht(V.__webglFramebuffer[et],T,g,i.COLOR_ATTACHMENT0,K,et);else ht(V.__webglFramebuffer,T,g,i.COLOR_ATTACHMENT0,K,0);p(g)&&E(K),e.unbindTexture()}T.depthBuffer&&tt(T)}function ot(T){let g=T.textures;for(let V=0,W=g.length;V<W;V++){let Y=g[V];if(p(Y)){let ct=A(T),ut=n.get(Y).__webglTexture;e.bindTexture(ct,ut),E(ct),e.unbindTexture()}}}let ft=[],Pt=[];function kt(T){if(T.samples>0){if(Bt(T)===!1){let g=T.textures,V=T.width,W=T.height,Y=i.COLOR_BUFFER_BIT,ct=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=n.get(T),K=g.length>1;if(K)for(let gt=0;gt<g.length;gt++)e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer);let et=T.texture.mipmaps;et&&et.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let gt=0;gt<g.length;gt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Y|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Y|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ut.__webglColorRenderbuffer[gt]);let zt=n.get(g[gt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,zt,0)}i.blitFramebuffer(0,0,V,W,0,0,V,W,Y,i.NEAREST),l===!0&&(ft.length=0,Pt.length=0,ft.push(i.COLOR_ATTACHMENT0+gt),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&(ft.push(ct),Pt.push(ct),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Pt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ft))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let gt=0;gt<g.length;gt++){e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,ut.__webglColorRenderbuffer[gt]);let zt=n.get(g[gt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,zt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&l){let g=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function Wt(T){return Math.min(s.maxSamples,T.samples)}function Bt(T){let g=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function I(T){let g=a.render.frame;h.get(T)!==g&&(h.set(T,g),T.update())}function se(T,g){let V=T.colorSpace,W=T.format,Y=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||V!==Ds&&V!==Xn&&(ae.getTransfer(V)===de?(W!==dn||Y!==je)&&Xt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qt("WebGLTextures: Unsupported texture color space:",V)),g}function Kt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=O,this.getTextureUnits=P,this.setTextureUnits=B,this.setTexture2D=at,this.setTexture2DArray=$,this.setTexture3D=j,this.setTextureCube=it,this.rebindTextures=st,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=Bt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function hm(i,t){function e(n,s=Xn){let r,a=ae.getTransfer(s);if(n===je)return i.UNSIGNED_BYTE;if(n===Fa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Oa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===El)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Tl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Sl)return i.BYTE;if(n===bl)return i.SHORT;if(n===us)return i.UNSIGNED_SHORT;if(n===Ua)return i.INT;if(n===Sn)return i.UNSIGNED_INT;if(n===un)return i.FLOAT;if(n===bn)return i.HALF_FLOAT;if(n===wl)return i.ALPHA;if(n===Al)return i.RGB;if(n===dn)return i.RGBA;if(n===An)return i.DEPTH_COMPONENT;if(n===di)return i.DEPTH_STENCIL;if(n===Ba)return i.RED;if(n===za)return i.RED_INTEGER;if(n===fi)return i.RG;if(n===Va)return i.RG_INTEGER;if(n===ka)return i.RGBA_INTEGER;if(n===pr||n===mr||n===gr||n===_r)if(a===de)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===pr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===_r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===pr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===gr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===_r)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ga||n===Ha||n===Wa||n===Xa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ga)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ha)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Wa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Xa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Qa||n===qa||n===Ya||n===Za||n===Ja||n===xr||n===$a)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Qa||n===qa)return a===de?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ya)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Za)return r.COMPRESSED_R11_EAC;if(n===Ja)return r.COMPRESSED_SIGNED_R11_EAC;if(n===xr)return r.COMPRESSED_RG11_EAC;if(n===$a)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ka||n===ja||n===to||n===eo||n===no||n===io||n===so||n===ro||n===ao||n===oo||n===lo||n===co||n===ho||n===uo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ka)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ja)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===to)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===eo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===no)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===io)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===so)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ro)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ao)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===oo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===lo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===co)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ho)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===uo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fo||n===po||n===mo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===fo)return a===de?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===po)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===mo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===go||n===_o||n===vr||n===xo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===go)return r.COMPRESSED_RED_RGTC1_EXT;if(n===_o)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===vr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===xo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ds?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var um=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dm=`
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

}`,Jl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ws(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new an({vertexShader:um,fragmentShader:dm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new oe(new Ln(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},$l=class extends Cn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,_=null,S=typeof XRWebGLBinding<"u",m=new Jl,p={},E=e.getContextAttributes(),A=null,y=null,b=[],M=[],C=new mt,x=null,w=null,R=new Be;R.viewport=new be;let N=new Be;N.viewport=new be;let z=[R,N],O=new Ia,P=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let Q=b[U];return Q===void 0&&(Q=new ss,b[U]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(U){let Q=b[U];return Q===void 0&&(Q=new ss,b[U]=Q),Q.getGripSpace()},this.getHand=function(U){let Q=b[U];return Q===void 0&&(Q=new ss,b[U]=Q),Q.getHandSpace()};function q(U){let Q=M.indexOf(U.inputSource);if(Q===-1)return;let k=b[Q];k!==void 0&&(k.update(U.inputSource,U.frame,c||a),k.dispatchEvent({type:U.type,data:U.inputSource}))}function J(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",at);for(let U=0;U<b.length;U++){let Q=M[U];Q!==null&&(M[U]=null,b[U].disconnect(Q))}P=null,B=null,m.reset();for(let U in p)delete p[U];if(t.setRenderTarget(A),f=null,u=null,d=null,s=null,y=null,ie.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(C.width,C.height,!1),w!==null){let U=w.camera;U.fov=w.fov,U.zoom=w.zoom,U.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){r=U,n.isPresenting===!0&&Xt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){o=U,n.isPresenting===!0&&Xt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(U){c=U},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&S&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(U){if(s=U,s!==null){if(A=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",J),s.addEventListener("inputsourceschange",at),E.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(C),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let k=null,yt=null,ht=null;E.depth&&(ht=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,k=E.stencil?di:An,yt=E.stencil?ds:Sn);let Et={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Et),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new Ke(u.textureWidth,u.textureHeight,{format:dn,type:je,depthTexture:new ii(u.textureWidth,u.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let k={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,k),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Ke(f.framebufferWidth,f.framebufferHeight,{format:dn,type:je,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ie.setContext(s),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function at(U){for(let Q=0;Q<U.removed.length;Q++){let k=U.removed[Q],yt=M.indexOf(k);yt>=0&&(M[yt]=null,b[yt].disconnect(k))}for(let Q=0;Q<U.added.length;Q++){let k=U.added[Q],yt=M.indexOf(k);if(yt===-1){for(let Et=0;Et<b.length;Et++)if(Et>=M.length){M.push(k),yt=Et;break}else if(M[Et]===null){M[Et]=k,yt=Et;break}if(yt===-1)break}let ht=b[yt];ht&&ht.connect(k)}}let $=new F,j=new F;function it(U,Q,k){$.setFromMatrixPosition(Q.matrixWorld),j.setFromMatrixPosition(k.matrixWorld);let yt=$.distanceTo(j),ht=Q.projectionMatrix.elements,Et=k.projectionMatrix.elements,Ct=ht[14]/(ht[10]-1),tt=ht[14]/(ht[10]+1),st=(ht[9]+1)/ht[5],lt=(ht[9]-1)/ht[5],ot=(ht[8]-1)/ht[0],ft=(Et[8]+1)/Et[0],Pt=Ct*ot,kt=Ct*ft,Wt=yt/(-ot+ft),Bt=Wt*-ot;if(Q.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(Bt),U.translateZ(Wt),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert(),ht[10]===-1)U.projectionMatrix.copy(Q.projectionMatrix),U.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let I=Ct+Wt,se=tt+Wt,Kt=Pt-Bt,T=kt+(yt-Bt),g=st*tt/se*I,V=lt*tt/se*I;U.projectionMatrix.makePerspective(Kt,T,g,V,I,se),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}}function Ot(U,Q){Q===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(Q.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(s===null)return;let Q=U.near,k=U.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(k=m.depthFar)),O.near=N.near=R.near=Q,O.far=N.far=R.far=k,(P!==O.near||B!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),P=O.near,B=O.far),O.layers.mask=U.layers.mask|6,R.layers.mask=O.layers.mask&-5,N.layers.mask=O.layers.mask&-3;let yt=U.parent,ht=O.cameras;Ot(O,yt);for(let Et=0;Et<ht.length;Et++)Ot(ht[Et],yt);ht.length===2?it(O,R,N):O.projectionMatrix.copy(R.projectionMatrix),w===null&&U.isPerspectiveCamera&&(w={camera:U,fov:U.fov,zoom:U.zoom}),bt(U,O,yt)};function bt(U,Q,k){k===null?U.matrix.copy(Q.matrixWorld):(U.matrix.copy(k.matrixWorld),U.matrix.invert(),U.matrix.multiply(Q.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(Q.projectionMatrix),U.projectionMatrixInverse.copy(Q.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=ns*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(U){l=U,u!==null&&(u.fixedFoveation=U),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=U)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(U){return p[U]};let Zt=null;function jt(U,Q){if(h=Q.getViewerPose(c||a),_=Q,h!==null){let k=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let yt=!1;k.length!==O.cameras.length&&(O.cameras.length=0,yt=!0);for(let tt=0;tt<k.length;tt++){let st=k[tt],lt=null;if(f!==null)lt=f.getViewport(st);else{let ft=d.getViewSubImage(u,st);lt=ft.viewport,tt===0&&(t.setRenderTargetTextures(y,ft.colorTexture,ft.depthStencilTexture),t.setRenderTarget(y))}let ot=z[tt];ot===void 0&&(ot=new Be,ot.layers.enable(tt),ot.viewport=new be,z[tt]=ot),ot.matrix.fromArray(st.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(st.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(lt.x,lt.y,lt.width,lt.height),tt===0&&(O.matrix.copy(ot.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),yt===!0&&O.cameras.push(ot)}let ht=s.enabledFeatures;if(ht&&ht.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){d=n.getBinding();let tt=d.getDepthInformation(k[0]);tt&&tt.isValid&&tt.texture&&m.init(tt,s.renderState)}if(ht&&ht.includes("camera-access")&&S){t.state.unbindTexture(),d=n.getBinding();for(let tt=0;tt<k.length;tt++){let st=k[tt].camera;if(st){let lt=p[st];lt||(lt=new Ws,p[st]=lt);let ot=d.getCameraImage(st);lt.sourceTexture=ot}}}}for(let k=0;k<b.length;k++){let yt=M[k],ht=b[k];yt!==null&&ht!==void 0&&ht.update(yt,Q,c||a)}Zt&&Zt(U,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),_=null}let ie=new Gh;ie.setAnimationLoop(jt),this.setAnimationLoop=function(U){Zt=U},this.dispose=function(){}}},fm=new fe,Yh=new Jt;Yh.set(-1,0,0,0,1,0,0,0,1);function pm(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Dl(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,E,A,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),S(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,E,A):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ve&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ve&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let E=t.get(p),A=E.envMap,y=E.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(fm.makeRotationFromEuler(y)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Yh),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,E,A){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=A*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ve&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function S(m,p){let E=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function mm(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,b){let M=b.program;n.uniformBlockBinding(y,M)}function c(y,b){let M=s[y.id];M===void 0&&(m(y),M=h(y),s[y.id]=M,y.addEventListener("dispose",E));let C=b.program;n.updateUBOMapping(y,C);let x=t.render.frame;r[y.id]!==x&&(u(y),r[y.id]=x)}function h(y){let b=d();y.__bindingPointIndex=b;let M=i.createBuffer(),C=y.__size,x=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,C,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,M),M}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Qt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let b=s[y.id],M=y.uniforms,C=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let x=0,w=M.length;x<w;x++){let R=M[x];if(Array.isArray(R))for(let N=0,z=R.length;N<z;N++)f(R[N],x,N,C);else f(R,x,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,b,M,C){if(S(y,b,M,C)===!0){let x=y.__offset,w=y.value;if(Array.isArray(w)){let R=0;for(let N=0;N<w.length;N++){let z=w[N],O=p(z);_(z,y.__data,R),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(R+=O.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(w,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,y.__data)}}function _(y,b,M){typeof y=="number"||typeof y=="boolean"?b[0]=y:y.isMatrix3?(b[0]=y.elements[0],b[1]=y.elements[1],b[2]=y.elements[2],b[3]=0,b[4]=y.elements[3],b[5]=y.elements[4],b[6]=y.elements[5],b[7]=0,b[8]=y.elements[6],b[9]=y.elements[7],b[10]=y.elements[8],b[11]=0):ArrayBuffer.isView(y)?b.set(new y.constructor(y.buffer,y.byteOffset,b.length)):y.toArray(b,M)}function S(y,b,M,C){let x=y.value,w=b+"_"+M;if(C[w]===void 0)return typeof x=="number"||typeof x=="boolean"?C[w]=x:ArrayBuffer.isView(x)?C[w]=x.slice():C[w]=x.clone(),!0;{let R=C[w];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return C[w]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function m(y){let b=y.uniforms,M=0,C=16;for(let w=0,R=b.length;w<R;w++){let N=Array.isArray(b[w])?b[w]:[b[w]];for(let z=0,O=N.length;z<O;z++){let P=N[z],B=Array.isArray(P.value)?P.value:[P.value];for(let q=0,J=B.length;q<J;q++){let at=B[q],$=p(at),j=M%C,it=j%$.boundary,Ot=j+it;M+=it,Ot!==0&&C-Ot<$.storage&&(M+=C-Ot),P.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=M,M+=$.storage}}}let x=M%C;return x>0&&(M+=C-x),y.__size=M,y.__cache={},this}function p(y){let b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?Xt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(b.boundary=16,b.storage=y.byteLength):Xt("WebGLRenderer: Unsupported uniform value type.",y),b}function E(y){let b=y.target;b.removeEventListener("dispose",E);let M=a.indexOf(b.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function A(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:A}}var gm=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Nn=null;function _m(){return Nn===null&&(Nn=new Vs(gm,16,16,fi,bn),Nn.name="DFG_LUT",Nn.minFilter=ze,Nn.magFilter=ze,Nn.wrapS=wn,Nn.wrapT=wn,Nn.generateMipmaps=!1,Nn.needsUpdate=!0),Nn}var gs=class{constructor(t={}){let{canvas:e=ch(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=je}=t;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;let S=f,m=new Set([ka,Va,za]),p=new Set([je,Sn,us,ds,Fa,Oa]),E=new Uint32Array(4),A=new Int32Array(4),y=new F,b=null,M=null,C=[],x=[],w=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Mn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,N=!1,z=null,O=null,P=null,B=null;this._outputColorSpace=Pe;let q=0,J=0,at=null,$=-1,j=null,it=new be,Ot=new be,bt=null,Zt=new $t(0),jt=0,ie=e.width,U=e.height,Q=1,k=null,yt=null,ht=new be(0,0,ie,U),Et=new be(0,0,ie,U),Ct=!1,tt=new rs,st=!1,lt=!1,ot=new fe,ft=new F,Pt=new be,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Wt=!1;function Bt(){return at===null?Q:1}let I=n;function se(v,L){return e.getContext(v,L)}let Kt,T,g,V,W,Y,ct,ut,K,et,gt,zt,Mt,vt,Dt,Nt,qt,D,_t,nt,St,At,rt;try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",he,!1),e.addEventListener("webglcontextrestored",le,!1),e.addEventListener("webglcontextcreationerror",Je,!1),I===null){let L="webgl2";if(I=se(L,v),I===null)throw se(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Gt()}catch(v){throw e.removeEventListener("webglcontextlost",he,!1),e.removeEventListener("webglcontextrestored",le,!1),e.removeEventListener("webglcontextcreationerror",Je,!1),Qt("WebGLRenderer: "+v.message),v}function Gt(){Kt=new Ep(I),Kt.init(),St=new hm(I,Kt),T=new pp(I,Kt,t,St),g=new lm(I,Kt),T.reversedDepthBuffer&&u&&g.buffers.depth.setReversed(!0),O=I.createFramebuffer(),P=I.createFramebuffer(),B=I.createFramebuffer(),V=new Ap(I),W=new Y1,Y=new cm(I,Kt,g,W,T,St,V),ct=new bp(R),ut=new C0(I),At=new dp(I,ut),K=new Tp(I,ut,V,At),et=new Rp(I,K,ut,At,V),D=new Cp(I,T,Y),Dt=new mp(W),gt=new q1(R,ct,Kt,T,At,Dt),zt=new pm(R,W),Mt=new J1,vt=new nm(Kt),qt=new up(R,ct,g,et,_,l),Nt=new om(R,et,T),rt=new mm(I,V,T,g),_t=new fp(I,Kt,V),nt=new wp(I,Kt,V),V.programs=gt.programs,R.capabilities=T,R.extensions=Kt,R.properties=W,R.renderLists=Mt,R.shadowMap=Nt,R.state=g,R.info=V}S!==je&&(w=new Pp(S,e.width,e.height,o,s,r));let Ut=new $l(R,I);this.xr=Ut,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let v=Kt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=Kt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(v){v!==void 0&&(Q=v,this.setSize(ie,U,!1))},this.getSize=function(v){return v.set(ie,U)},this.setSize=function(v,L,Z=!0){if(Ut.isPresenting){Xt("WebGLRenderer: Can't change size while VR device is presenting.");return}ie=v,U=L,e.width=Math.floor(v*Q),e.height=Math.floor(L*Q),Z===!0&&(e.style.width=v+"px",e.style.height=L+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,v,L)},this.getDrawingBufferSize=function(v){return v.set(ie*Q,U*Q).floor()},this.setDrawingBufferSize=function(v,L,Z){ie=v,U=L,Q=Z,e.width=Math.floor(v*Z),e.height=Math.floor(L*Z),this.setViewport(0,0,v,L)},this.setEffects=function(v){if(S===je){Qt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let L=0;L<v.length;L++)if(v[L].isOutputPass===!0){Xt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(it)},this.getViewport=function(v){return v.copy(ht)},this.setViewport=function(v,L,Z,G){v.isVector4?ht.set(v.x,v.y,v.z,v.w):ht.set(v,L,Z,G),g.viewport(it.copy(ht).multiplyScalar(Q).round())},this.getScissor=function(v){return v.copy(Et)},this.setScissor=function(v,L,Z,G){v.isVector4?Et.set(v.x,v.y,v.z,v.w):Et.set(v,L,Z,G),g.scissor(Ot.copy(Et).multiplyScalar(Q).round())},this.getScissorTest=function(){return Ct},this.setScissorTest=function(v){g.setScissorTest(Ct=v)},this.setOpaqueSort=function(v){k=v},this.setTransparentSort=function(v){yt=v},this.getClearColor=function(v){return v.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor(...arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha(...arguments)},this.clear=function(v=!0,L=!0,Z=!0){let G=0;if(v){let H=!1;if(at!==null){let Tt=at.texture.format;H=m.has(Tt)}if(H){let Tt=at.texture.type,xt=p.has(Tt),dt=qt.getClearColor(),Rt=qt.getClearAlpha(),Ft=dt.r,Yt=dt.g,re=dt.b;xt?(E[0]=Ft,E[1]=Yt,E[2]=re,E[3]=Rt,I.clearBufferuiv(I.COLOR,0,E)):(A[0]=Ft,A[1]=Yt,A[2]=re,A[3]=Rt,I.clearBufferiv(I.COLOR,0,A))}else G|=I.COLOR_BUFFER_BIT}L&&(G|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(G|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&I.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),z=v},this.dispose=function(){e.removeEventListener("webglcontextlost",he,!1),e.removeEventListener("webglcontextrestored",le,!1),e.removeEventListener("webglcontextcreationerror",Je,!1),qt.dispose(),Mt.dispose(),vt.dispose(),W.dispose(),ct.dispose(),et.dispose(),At.dispose(),rt.dispose(),gt.dispose(),Ut.dispose(),Ut.removeEventListener("sessionstart",pt),Ut.removeEventListener("sessionend",Lt),Ht.stop()};function he(v){v.preventDefault(),Rl("WebGLRenderer: Context Lost."),N=!0}function le(){Rl("WebGLRenderer: Context Restored."),N=!1;let v=V.autoReset,L=Nt.enabled,Z=Nt.autoUpdate,G=Nt.needsUpdate,H=Nt.type;Gt(),V.autoReset=v,Nt.enabled=L,Nt.autoUpdate=Z,Nt.needsUpdate=G,Nt.type=H}function Je(v){Qt("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function $e(v){let L=v.target;L.removeEventListener("dispose",$e),Ni(L)}function Ni(v){Er(v),W.remove(v)}function Er(v){let L=W.get(v).programs;L!==void 0&&(L.forEach(function(Z){gt.releaseProgram(Z)}),v.isShaderMaterial&&gt.releaseShaderCache(v))}this.renderBufferDirect=function(v,L,Z,G,H,Tt){L===null&&(L=kt);let xt=H.isMesh&&H.matrixWorld.determinantAffine()<0,dt=gi(v,L,Z,G,H);g.setMaterial(G,xt);let Rt=Z.index,Ft=1;if(G.wireframe===!0){if(Rt=K.getWireframeAttribute(Z),Rt===void 0)return;Ft=2}let Yt=Z.drawRange,re=Z.attributes.position,Vt=Yt.start*Ft,ue=(Yt.start+Yt.count)*Ft;Tt!==null&&(Vt=Math.max(Vt,Tt.start*Ft),ue=Math.min(ue,(Tt.start+Tt.count)*Ft)),Rt!==null?(Vt=Math.max(Vt,0),ue=Math.min(ue,Rt.count)):re!=null&&(Vt=Math.max(Vt,0),ue=Math.min(ue,re.count));let Re=ue-Vt;if(Re<0||Re===1/0)return;At.setup(H,G,dt,Z,Rt);let ye,ge=_t;if(Rt!==null&&(ye=ut.get(Rt),ge=nt,ge.setIndex(ye)),H.isMesh)G.wireframe===!0?(g.setLineWidth(G.wireframeLinewidth*Bt()),ge.setMode(I.LINES)):ge.setMode(I.TRIANGLES);else if(H.isLine){let Ge=G.linewidth;Ge===void 0&&(Ge=1),g.setLineWidth(Ge*Bt()),H.isLineSegments?ge.setMode(I.LINES):H.isLineLoop?ge.setMode(I.LINE_LOOP):ge.setMode(I.LINE_STRIP)}else H.isPoints?ge.setMode(I.POINTS):H.isSprite&&ge.setMode(I.TRIANGLES);if(H.isBatchedMesh)if(Kt.get("WEBGL_multi_draw"))ge.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let Ge=H._multiDrawStarts,It=H._multiDrawCounts,Qe=H._multiDrawCount,ce=Rt?ut.get(Rt).bytesPerElement:1,cn=W.get(G).currentProgram.getUniforms();for(let En=0;En<Qe;En++)cn.setValue(I,"_gl_DrawID",En),ge.render(Ge[En]/ce,It[En])}else if(H.isInstancedMesh)ge.renderInstances(Vt,Re,H.count);else if(Z.isInstancedBufferGeometry){let Ge=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,It=Math.min(Z.instanceCount,Ge);ge.renderInstances(Vt,Re,It)}else ge.render(Vt,Re)};function mi(v,L,Z,G){z!==null&&v.isNodeMaterial&&z.setObject(G,v),st===!0&&Dt.setState(v,Z,!1),v.transparent===!0&&v.side===ln&&v.forceSinglePass===!1?(v.side=Ve,v.needsUpdate=!0,Te(v,L,G),v.side=ci,v.needsUpdate=!0,Te(v,L,G),v.side=ln):Te(v,L,G)}this.compile=function(v,L,Z=null){Z===null&&(Z=v),z!==null&&z.renderStart(v,L,Z),M=vt.get(Z),M.init(L),x.push(M),Z.traverseVisible(function(H){H.isLight&&H.layers.test(L.layers)&&(M.pushLight(H),H.castShadow&&M.pushShadow(H))}),v!==Z&&v.traverseVisible(function(H){H.isLight&&H.layers.test(L.layers)&&(M.pushLight(H),H.castShadow&&M.pushShadow(H))}),M.setupLights(),z!==null&&z.updateLights(M.state.lightsArray),lt=this.localClippingEnabled,st=Dt.init(this.clippingPlanes,lt),st===!0&&Dt.setGlobalState(this.clippingPlanes,L),z!==null&&Nt.render(M.state.shadowsArray,Z,L);let G=new Set;return v.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let Tt=H.material;if(Tt)if(Array.isArray(Tt))for(let xt=0;xt<Tt.length;xt++){let dt=Tt[xt];mi(dt,Z,L,H),G.add(dt)}else mi(Tt,Z,L,H),G.add(Tt)}),M=x.pop(),z!==null&&z.renderEnd(),G},this.compileAsync=function(v,L,Z=null){let G=this.compile(v,L,Z);return new Promise(H=>{function Tt(){if(G.forEach(function(xt){let Rt=W.get(xt).currentProgram;(Rt===void 0||Rt.isReady())&&G.delete(xt)}),G.size===0){H(v);return}setTimeout(Tt,10)}Kt.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let Qn=null;function X(v){Qn&&Qn(v)}function pt(){Ht.stop()}function Lt(){Ht.start()}let Ht=new Gh;Ht.setAnimationLoop(X),typeof self<"u"&&Ht.setContext(self),this.setAnimationLoop=function(v){Qn=v,Ut.setAnimationLoop(v),v===null?Ht.stop():Ht.start()},Ut.addEventListener("sessionstart",pt),Ut.addEventListener("sessionend",Lt),this.render=function(v,L){if(L!==void 0&&L.isCamera!==!0){Qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;z!==null&&z.renderStart(v,L);let Z=Ut.enabled===!0&&Ut.isPresenting===!0,G=w!==null&&(at===null||Z)&&w.begin(R,at);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Ut.enabled===!0&&Ut.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Ut.cameraAutoUpdate===!0&&Ut.updateCamera(L),L=Ut.getCamera()),v.isScene===!0&&v.onBeforeRender(R,v,L,at),M=vt.get(v,x.length),M.init(L),M.state.textureUnits=Y.getTextureUnits(),x.push(M),ot.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),tt.setFromProjectionMatrix(ot,_n,L.reversedDepth),lt=this.localClippingEnabled,st=Dt.init(this.clippingPlanes,lt),b=Mt.get(v,C.length),b.init(),C.push(b),Ut.enabled===!0&&Ut.isPresenting===!0){let xt=R.xr.getDepthSensingMesh();xt!==null&&te(xt,L,-1/0,R.sortObjects)}te(v,L,0,R.sortObjects),b.finish(),z!==null&&z.updateLights(M.state.lightsArray),R.sortObjects===!0&&b.sort(k,yt),Wt=Ut.enabled===!1||Ut.isPresenting===!1||Ut.hasDepthSensing()===!1,Wt&&qt.addToRenderList(b,v),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),st===!0&&Dt.beginShadows();let H=M.state.shadowsArray;if(Nt.render(H,v,L),st===!0&&Dt.endShadows(),(G&&w.hasRenderPass())===!1){let xt=b.opaque,dt=b.transmissive;if(M.setupLights(),L.isArrayCamera){let Rt=L.cameras;if(dt.length>0)for(let Ft=0,Yt=Rt.length;Ft<Yt;Ft++){let re=Rt[Ft];Se(xt,dt,v,re)}Wt&&qt.render(v);for(let Ft=0,Yt=Rt.length;Ft<Yt;Ft++){let re=Rt[Ft];Ae(b,v,re,re.viewport)}}else dt.length>0&&Se(xt,dt,v,L),Wt&&qt.render(v),Ae(b,v,L)}at!==null&&J===0&&(Y.updateMultisampleRenderTarget(at),Y.updateRenderTargetMipmap(at)),G&&w.end(R),v.isScene===!0&&v.onAfterRender(R,v,L),At.resetDefaultState(),$=-1,j=null,x.pop(),x.length>0?(M=x[x.length-1],Y.setTextureUnits(M.state.textureUnits),st===!0&&Dt.setGlobalState(R.clippingPlanes,M.state.camera)):M=null,C.pop(),C.length>0?b=C[C.length-1]:b=null,z!==null&&z.renderEnd()};function te(v,L,Z,G){if(v.visible===!1)return;if(v.layers.test(L.layers)){if(v.isGroup)Z=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(L);else if(v.isLightProbeGrid)M.pushLightProbeGrid(v);else if(v.isLight)M.pushLight(v),v.castShadow&&M.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||v.intersectsFrustum(tt)){G&&Pt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(ot);let xt=et.update(v),dt=v.material;dt.visible&&b.push(v,xt,dt,Z,Pt.z,null,L)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||v.intersectsFrustum(tt))){let xt=et.update(v),dt=v.material;if(G&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Pt.copy(v.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),Pt.copy(xt.boundingSphere.center)),Pt.applyMatrix4(v.matrixWorld).applyMatrix4(ot)),Array.isArray(dt)){let Rt=xt.groups;for(let Ft=0,Yt=Rt.length;Ft<Yt;Ft++){let re=Rt[Ft],Vt=dt[re.materialIndex];Vt&&Vt.visible&&b.push(v,xt,Vt,Z,Pt.z,re,L)}}else dt.visible&&b.push(v,xt,dt,Z,Pt.z,null,L)}}let Tt=v.children;for(let xt=0,dt=Tt.length;xt<dt;xt++)te(Tt[xt],L,Z,G)}function Ae(v,L,Z,G){let{opaque:H,transmissive:Tt,transparent:xt}=v;M.setupLightsView(Z),st===!0&&Dt.setGlobalState(R.clippingPlanes,Z),G&&g.viewport(it.copy(G)),H.length>0&&Ee(H,L,Z),Tt.length>0&&Ee(Tt,L,Z),xt.length>0&&Ee(xt,L,Z),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function Se(v,L,Z,G){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[G.id]===void 0){let Vt=Kt.has("EXT_color_buffer_half_float")||Kt.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[G.id]=new Ke(1,1,{generateMipmaps:!0,type:Vt?bn:je,minFilter:ui,samples:Math.max(4,T.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ae.workingColorSpace})}let Tt=M.state.transmissionRenderTarget[G.id],xt=G.viewport||it;Tt.setSize(xt.z*R.transmissionResolutionScale,xt.w*R.transmissionResolutionScale);let dt=R.getRenderTarget(),Rt=R.getActiveCubeFace(),Ft=R.getActiveMipmapLevel();R.setRenderTarget(Tt),R.getClearColor(Zt),jt=R.getClearAlpha(),jt<1&&R.setClearColor(16777215,.5),R.clear(),Wt&&qt.render(Z);let Yt=R.toneMapping;R.toneMapping=Mn;let re=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),M.setupLightsView(G),st===!0&&Dt.setGlobalState(R.clippingPlanes,G),Ee(v,Z,G),Y.updateMultisampleRenderTarget(Tt),Y.updateRenderTargetMipmap(Tt),Kt.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let ue=0,Re=L.length;ue<Re;ue++){let ye=L[ue],{object:ge,geometry:Ge,material:It,group:Qe}=ye;if(It.side===ln&&ge.layers.test(G.layers)){let ce=It.side;It.side=Ve,It.needsUpdate=!0,pe(ge,Z,G,Ge,It,Qe),It.side=ce,It.needsUpdate=!0,Vt=!0}}Vt===!0&&(Y.updateMultisampleRenderTarget(Tt),Y.updateRenderTargetMipmap(Tt))}R.setRenderTarget(dt,Rt,Ft),R.setClearColor(Zt,jt),re!==void 0&&(G.viewport=re),R.toneMapping=Yt}function Ee(v,L,Z){let G=L.isScene===!0?L.overrideMaterial:null;for(let H=0,Tt=v.length;H<Tt;H++){let xt=v[H],{object:dt,geometry:Rt,group:Ft}=xt,Yt=xt.material;Yt.allowOverride===!0&&G!==null&&(Yt=G),dt.layers.test(Z.layers)&&pe(dt,L,Z,Rt,Yt,Ft)}}function pe(v,L,Z,G,H,Tt){z!==null&&H.isNodeMaterial&&z.setObject(v,H),v.onBeforeRender(R,L,Z,G,H,Tt),v.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),H.onBeforeRender(R,L,Z,G,v,Tt),H.transparent===!0&&H.side===ln&&H.forceSinglePass===!1?(H.side=Ve,H.needsUpdate=!0,R.renderBufferDirect(Z,L,G,H,v,Tt),H.side=ci,H.needsUpdate=!0,R.renderBufferDirect(Z,L,G,H,v,Tt),H.side=ln):R.renderBufferDirect(Z,L,G,H,v,Tt),v.onAfterRender(R,L,Z,G,H,Tt)}function Te(v,L,Z){L.isScene!==!0&&(L=kt);let G=W.get(v),H=M.state.lights,Tt=M.state.shadowsArray,xt=H.state.version,dt=gt.getParameters(v,H.state,Tt,L,Z,M.state.lightProbeGridArray),Rt=gt.getProgramCacheKey(dt),Ft=G.programs;G.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?L.environment:null,G.fog=L.fog;let Yt=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;G.envMap=ct.get(v.envMap||G.environment,Yt),G.envMapRotation=G.environment!==null&&v.envMap===null?L.environmentRotation:v.envMapRotation,Ft===void 0&&(v.addEventListener("dispose",$e),Ft=new Map,G.programs=Ft);let re=Ft.get(Rt);if(re!==void 0){if(G.currentProgram===re&&G.lightsStateVersion===xt)return ke(v,dt),re}else dt.uniforms=gt.getUniforms(v),z!==null&&v.isNodeMaterial&&z.build(v,Z,dt),v.onBeforeCompile(dt,R),re=gt.acquireProgram(dt,Rt),Ft.set(Rt,re),G.uniforms=dt.uniforms;let Vt=G.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Vt.clippingPlanes=Dt.uniform),ke(v,dt),G.needsLights=_i(v),G.lightsStateVersion=xt,G.needsLights&&(Vt.ambientLightColor.value=H.state.ambient,Vt.lightProbe.value=H.state.probe,Vt.sunLights.value=H.state.sun,Vt.sunLightShadows.value=H.state.sunShadow,Vt.directionalLights.value=H.state.directional,Vt.directionalLightShadows.value=H.state.directionalShadow,Vt.spotLights.value=H.state.spot,Vt.spotLightShadows.value=H.state.spotShadow,Vt.rectAreaLights.value=H.state.rectArea,Vt.ltc_1.value=H.state.rectAreaLTC1,Vt.ltc_2.value=H.state.rectAreaLTC2,Vt.pointLights.value=H.state.point,Vt.pointLightShadows.value=H.state.pointShadow,Vt.hemisphereLights.value=H.state.hemi,Vt.sunShadowMatrix.value=H.state.sunShadowMatrix,Vt.sunShadowCascade.value=H.state.sunShadowCascade,Vt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Vt.spotLightMatrix.value=H.state.spotLightMatrix,Vt.spotLightMap.value=H.state.spotLightMap,Vt.pointShadowMatrix.value=H.state.pointShadowMatrix),G.lightProbeGrid=M.state.lightProbeGridArray.length>0,G.currentProgram=re,G.uniformsList=null,re}function ve(v){if(v.uniformsList===null){let L=v.currentProgram.getUniforms();v.uniformsList=ms.seqWithValue(L.seq,v.uniforms)}return v.uniformsList}function ke(v,L){let Z=W.get(v);Z.outputColorSpace=L.outputColorSpace,Z.batching=L.batching,Z.batchingColor=L.batchingColor,Z.instancing=L.instancing,Z.instancingColor=L.instancingColor,Z.instancingMorph=L.instancingMorph,Z.skinning=L.skinning,Z.morphTargets=L.morphTargets,Z.morphNormals=L.morphNormals,Z.morphColors=L.morphColors,Z.morphTargetsCount=L.morphTargetsCount,Z.numClippingPlanes=L.numClippingPlanes,Z.numIntersection=L.numClipIntersection,Z.vertexAlphas=L.vertexAlphas,Z.vertexTangents=L.vertexTangents,Z.toneMapping=L.toneMapping}function Ne(v,L){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;y.setFromMatrixPosition(L.matrixWorld);for(let Z=0,G=v.length;Z<G;Z++){let H=v[Z];if(H.texture!==null&&H.boundingBox.containsPoint(y))return H}return null}function gi(v,L,Z,G,H){L.isScene!==!0&&(L=kt),Y.resetTextureUnits();let Tt=L.fog,xt=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?L.environment:null,dt=at===null?R.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:ae.workingColorSpace,Rt=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Ft=ct.get(G.envMap||xt,Rt),Yt=G.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,re=!!Z.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Vt=!!Z.morphAttributes.position,ue=!!Z.morphAttributes.normal,Re=!!Z.morphAttributes.color,ye=Mn;G.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(ye=R.toneMapping);let ge=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Ge=ge!==void 0?ge.length:0,It=W.get(G),Qe=M.state.lights;if(st===!0&&(lt===!0||v!==j)){let _e=v===j&&G.id===$;Dt.setState(G,v,_e)}let ce=!1;G.version===It.__version?(It.needsLights&&It.lightsStateVersion!==Qe.state.version||It.outputColorSpace!==dt||H.isBatchedMesh&&It.batching===!1||!H.isBatchedMesh&&It.batching===!0||H.isBatchedMesh&&It.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&It.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&It.instancing===!1||!H.isInstancedMesh&&It.instancing===!0||H.isSkinnedMesh&&It.skinning===!1||!H.isSkinnedMesh&&It.skinning===!0||H.isInstancedMesh&&It.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&It.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&It.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&It.instancingMorph===!1&&H.morphTexture!==null||It.envMap!==Ft||G.fog===!0&&It.fog!==Tt||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==Dt.numPlanes||It.numIntersection!==Dt.numIntersection)||It.vertexAlphas!==Yt||It.vertexTangents!==re||It.morphTargets!==Vt||It.morphNormals!==ue||It.morphColors!==Re||It.toneMapping!==ye||It.morphTargetsCount!==Ge||!!It.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(ce=!0):(ce=!0,It.__version=G.version);let cn=It.currentProgram;ce===!0&&(cn=Te(G,L,H),z&&G.isNodeMaterial&&z.onUpdateProgram(G,cn,It));let En=!1,qn=!1,Ui=!1,me=cn.getUniforms(),Ce=It.uniforms;if(g.useProgram(cn.program)&&(En=!0,qn=!0,Ui=!0),G.id!==$&&($=G.id,qn=!0),It.needsLights){let _e=Ne(M.state.lightProbeGridArray,H);It.lightProbeGrid!==_e&&(It.lightProbeGrid=_e,qn=!0)}if(En||j!==v){g.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),me.setValue(I,"projectionMatrix",v.projectionMatrix),me.setValue(I,"viewMatrix",v.matrixWorldInverse);let Zn=me.map.cameraPosition;Zn!==void 0&&Zn.setValue(I,ft.setFromMatrixPosition(v.matrixWorld)),T.logarithmicDepthBuffer&&me.setValue(I,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&me.setValue(I,"isOrthographic",v.isOrthographicCamera===!0),j!==v&&(j=v,qn=!0,Ui=!0)}if(It.needsLights&&(Qe.state.sunShadowMap.length>0&&me.setValue(I,"sunShadowMap",Qe.state.sunShadowMap,Y),Qe.state.directionalShadowMap.length>0&&me.setValue(I,"directionalShadowMap",Qe.state.directionalShadowMap,Y),Qe.state.spotShadowMap.length>0&&me.setValue(I,"spotShadowMap",Qe.state.spotShadowMap,Y),Qe.state.pointShadowMap.length>0&&me.setValue(I,"pointShadowMap",Qe.state.pointShadowMap,Y)),H.isSkinnedMesh){me.setOptional(I,H,"bindMatrix"),me.setOptional(I,H,"bindMatrixInverse");let _e=H.skeleton;_e&&(_e.boneTexture===null&&_e.computeBoneTexture(),me.setValue(I,"boneTexture",_e.boneTexture,Y))}H.isBatchedMesh&&(me.setOptional(I,H,"batchingTexture"),me.setValue(I,"batchingTexture",H._matricesTexture,Y),me.setOptional(I,H,"batchingIdTexture"),me.setValue(I,"batchingIdTexture",H._indirectTexture,Y),me.setOptional(I,H,"batchingColorTexture"),H._colorsTexture!==null&&me.setValue(I,"batchingColorTexture",H._colorsTexture,Y));let Yn=Z.morphAttributes;if((Yn.position!==void 0||Yn.normal!==void 0||Yn.color!==void 0)&&D.update(H,Z,cn),(qn||It.receiveShadow!==H.receiveShadow)&&(It.receiveShadow=H.receiveShadow,me.setValue(I,"receiveShadow",H.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&L.environment!==null&&(Ce.envMapIntensity.value=L.environmentIntensity),Ce.dfgLUT!==void 0&&(Ce.dfgLUT.value=_m()),qn){if(me.setValue(I,"toneMappingExposure",R.toneMappingExposure),It.needsLights&&ys(Ce,Ui),Tt&&G.fog===!0&&zt.refreshFogUniforms(Ce,Tt),zt.refreshMaterialUniforms(Ce,G,Q,U,M.state.transmissionRenderTarget[v.id]),It.needsLights&&It.lightProbeGrid){let _e=It.lightProbeGrid;Ce.probesSH.value=_e.texture,Ce.probesMin.value.copy(_e.boundingBox.min),Ce.probesMax.value.copy(_e.boundingBox.max),Ce.probesResolution.value.copy(_e.resolution)}ms.upload(I,ve(It),Ce,Y)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(ms.upload(I,ve(It),Ce,Y),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&me.setValue(I,"center",H.center),me.setValue(I,"modelViewMatrix",H.modelViewMatrix),me.setValue(I,"normalMatrix",H.normalMatrix),me.setValue(I,"modelMatrix",H.matrixWorld),G.uniformsGroups!==void 0){let _e=G.uniformsGroups;for(let Zn=0,Fi=_e.length;Zn<Fi;Zn++){let Kl=_e[Zn];rt.update(Kl,cn),rt.bind(Kl,cn)}}return cn}function ys(v,L){v.ambientLightColor.needsUpdate=L,v.lightProbe.needsUpdate=L,v.sunLights.needsUpdate=L,v.sunLightShadows.needsUpdate=L,v.directionalLights.needsUpdate=L,v.directionalLightShadows.needsUpdate=L,v.pointLights.needsUpdate=L,v.pointLightShadows.needsUpdate=L,v.spotLights.needsUpdate=L,v.spotLightShadows.needsUpdate=L,v.rectAreaLights.needsUpdate=L,v.hemisphereLights.needsUpdate=L}function _i(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return at},this.setRenderTargetTextures=function(v,L,Z){let G=W.get(v);G.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),W.get(v.texture).__webglTexture=L,W.get(v.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:Z,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,L){let Z=W.get(v);Z.__webglFramebuffer=L,Z.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(v,L=0,Z=0){at=v,q=L,J=Z;let G=null,H=!1,Tt=!1;if(v){let dt=W.get(v);if(dt.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(I.FRAMEBUFFER,dt.__webglFramebuffer),it.copy(v.viewport),Ot.copy(v.scissor),bt=v.scissorTest,g.viewport(it),g.scissor(Ot),g.setScissorTest(bt),$=-1;return}else if(dt.__webglFramebuffer===void 0)Y.setupRenderTarget(v);else if(dt.__hasExternalTextures)Y.rebindTextures(v,W.get(v.texture).__webglTexture,W.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Yt=v.depthTexture;if(dt.__boundDepthTexture!==Yt){if(Yt!==null&&W.has(Yt)&&(v.width!==Yt.image.width||v.height!==Yt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(v)}}let Rt=v.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(Tt=!0);let Ft=W.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Ft[L])?G=Ft[L][Z]:G=Ft[L],H=!0):v.samples>0&&Y.useMultisampledRTT(v)===!1?G=W.get(v).__webglMultisampledFramebuffer:Array.isArray(Ft)?G=Ft[Z]:G=Ft,it.copy(v.viewport),Ot.copy(v.scissor),bt=v.scissorTest}else it.copy(ht).multiplyScalar(Q).floor(),Ot.copy(Et).multiplyScalar(Q).floor(),bt=Ct;if(Z!==0&&(G=O),g.bindFramebuffer(I.FRAMEBUFFER,G)&&g.drawBuffers(v,G),g.viewport(it),g.scissor(Ot),g.setScissorTest(bt),H){let dt=W.get(v.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+L,dt.__webglTexture,Z)}else if(Tt){let dt=L;for(let Rt=0;Rt<v.textures.length;Rt++){let Ft=W.get(v.textures[Rt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Rt,Ft.__webglTexture,Z,dt)}}else if(v!==null&&Z!==0){let dt=W.get(v.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,dt.__webglTexture,Z)}$=-1};function xi(v){let L=W.get(v);return(L.__readFormat!==v.format||L.__readType!==v.type)&&(L.__readFormat=v.format,L.__readType=v.type,L.__formatReadable=T.textureFormatReadable(v.format),L.__typeReadable=T.textureTypeReadable(v.type)),L}this.readRenderTargetPixels=function(v,L,Z,G,H,Tt,xt,dt=0){if(!(v&&v.isWebGLRenderTarget)){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=W.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&xt!==void 0&&(Rt=Rt[xt]),Rt){g.bindFramebuffer(I.FRAMEBUFFER,Rt);try{let Ft=v.textures[dt],Yt=Ft.format,re=Ft.type;v.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+dt);let Vt=xi(Ft);if(Vt.__formatReadable===!1){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Vt.__typeReadable===!1){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=v.width-G&&Z>=0&&Z<=v.height-H&&I.readPixels(L,Z,G,H,St.convert(Yt),St.convert(re),Tt)}finally{let Ft=at!==null?W.get(at).__webglFramebuffer:null;g.bindFramebuffer(I.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(v,L,Z,G,H,Tt,xt,dt=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=W.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&xt!==void 0&&(Rt=Rt[xt]),Rt)if(L>=0&&L<=v.width-G&&Z>=0&&Z<=v.height-H){g.bindFramebuffer(I.FRAMEBUFFER,Rt);let Ft=v.textures[dt],Yt=Ft.format,re=Ft.type;v.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+dt);let Vt=xi(Ft);if(Vt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Vt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ue=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,ue),I.bufferData(I.PIXEL_PACK_BUFFER,Tt.byteLength,I.STREAM_READ),I.readPixels(L,Z,G,H,St.convert(Yt),St.convert(re),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);let Re=at!==null?W.get(at).__webglFramebuffer:null;g.bindFramebuffer(I.FRAMEBUFFER,Re);let ye=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await uh(I,ye,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,ue),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Tt),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(ue),I.deleteSync(ye),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,L=null,Z=0){let G=Math.pow(2,-Z),H=Math.floor(v.image.width*G),Tt=Math.floor(v.image.height*G),xt=L!==null?L.x:0,dt=L!==null?L.y:0;Y.setTexture2D(v,0),I.copyTexSubImage2D(I.TEXTURE_2D,Z,0,0,xt,dt,H,Tt),g.unbindTexture()},this.copyTextureToTexture=function(v,L,Z=null,G=null,H=0,Tt=0){let xt,dt,Rt,Ft,Yt,re,Vt,ue,Re,ye=v.isCompressedTexture?v.mipmaps[Tt]:v.image;if(Z!==null)xt=Z.max.x-Z.min.x,dt=Z.max.y-Z.min.y,Rt=Z.isBox3?Z.max.z-Z.min.z:1,Ft=Z.min.x,Yt=Z.min.y,re=Z.isBox3?Z.min.z:0;else{let Ce=Math.pow(2,-H);xt=Math.floor(ye.width*Ce),dt=Math.floor(ye.height*Ce),v.isDataArrayTexture?Rt=ye.depth:v.isData3DTexture?Rt=Math.floor(ye.depth*Ce):Rt=1,Ft=0,Yt=0,re=0}G!==null?(Vt=G.x,ue=G.y,Re=G.z):(Vt=0,ue=0,Re=0);let ge=St.convert(L.format),Ge=St.convert(L.type),It;L.isData3DTexture?(Y.setTexture3D(L,0),It=I.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(Y.setTexture2DArray(L,0),It=I.TEXTURE_2D_ARRAY):(Y.setTexture2D(L,0),It=I.TEXTURE_2D),g.activeTexture(I.TEXTURE0),g.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,L.flipY),g.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),g.pixelStorei(I.UNPACK_ALIGNMENT,L.unpackAlignment);let Qe=g.getParameter(I.UNPACK_ROW_LENGTH),ce=g.getParameter(I.UNPACK_IMAGE_HEIGHT),cn=g.getParameter(I.UNPACK_SKIP_PIXELS),En=g.getParameter(I.UNPACK_SKIP_ROWS),qn=g.getParameter(I.UNPACK_SKIP_IMAGES);g.pixelStorei(I.UNPACK_ROW_LENGTH,ye.width),g.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ye.height),g.pixelStorei(I.UNPACK_SKIP_PIXELS,Ft),g.pixelStorei(I.UNPACK_SKIP_ROWS,Yt),g.pixelStorei(I.UNPACK_SKIP_IMAGES,re);let Ui=v.isDataArrayTexture||v.isData3DTexture,me=L.isDataArrayTexture||L.isData3DTexture;if(v.isDepthTexture){let Ce=W.get(v),Yn=W.get(L),_e=W.get(Ce.__renderTarget),Zn=W.get(Yn.__renderTarget);g.bindFramebuffer(I.READ_FRAMEBUFFER,_e.__webglFramebuffer),g.bindFramebuffer(I.DRAW_FRAMEBUFFER,Zn.__webglFramebuffer);for(let Fi=0;Fi<Rt;Fi++)Ui&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,W.get(v).__webglTexture,H,re+Fi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,W.get(L).__webglTexture,Tt,Re+Fi)),I.blitFramebuffer(Ft,Yt,xt,dt,Vt,ue,xt,dt,I.DEPTH_BUFFER_BIT,I.NEAREST);g.bindFramebuffer(I.READ_FRAMEBUFFER,null),g.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(H!==0||v.isRenderTargetTexture||W.has(v)){let Ce=W.get(v),Yn=W.get(L);g.bindFramebuffer(I.READ_FRAMEBUFFER,P),g.bindFramebuffer(I.DRAW_FRAMEBUFFER,B);for(let _e=0;_e<Rt;_e++)Ui?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ce.__webglTexture,H,re+_e):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ce.__webglTexture,H),me?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Yn.__webglTexture,Tt,Re+_e):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Yn.__webglTexture,Tt),H!==0?I.blitFramebuffer(Ft,Yt,xt,dt,Vt,ue,xt,dt,I.COLOR_BUFFER_BIT,I.NEAREST):me?I.copyTexSubImage3D(It,Tt,Vt,ue,Re+_e,Ft,Yt,xt,dt):I.copyTexSubImage2D(It,Tt,Vt,ue,Ft,Yt,xt,dt);g.bindFramebuffer(I.READ_FRAMEBUFFER,null),g.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else me?v.isDataTexture||v.isData3DTexture?I.texSubImage3D(It,Tt,Vt,ue,Re,xt,dt,Rt,ge,Ge,ye.data):L.isCompressedArrayTexture?I.compressedTexSubImage3D(It,Tt,Vt,ue,Re,xt,dt,Rt,ge,ye.data):I.texSubImage3D(It,Tt,Vt,ue,Re,xt,dt,Rt,ge,Ge,ye):v.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Tt,Vt,ue,xt,dt,ge,Ge,ye.data):v.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Tt,Vt,ue,ye.width,ye.height,ge,ye.data):I.texSubImage2D(I.TEXTURE_2D,Tt,Vt,ue,xt,dt,ge,Ge,ye);g.pixelStorei(I.UNPACK_ROW_LENGTH,Qe),g.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ce),g.pixelStorei(I.UNPACK_SKIP_PIXELS,cn),g.pixelStorei(I.UNPACK_SKIP_ROWS,En),g.pixelStorei(I.UNPACK_SKIP_IMAGES,qn),Tt===0&&L.generateMipmaps&&I.generateMipmap(It),g.unbindTexture()},this.initRenderTarget=function(v){W.get(v).__webglFramebuffer===void 0&&Y.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Y.setTextureCube(v,0):v.isData3DTexture?Y.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Y.setTexture2DArray(v,0):Y.setTexture2D(v,0),g.unbindTexture()},this.resetState=function(){q=0,J=0,at=null,g.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}};var vs=class extends Gn{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new vn;t.deleteAttribute("uv");let e=new yn({side:Ve}),n=new yn,s=new lr(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new oe(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Gs(t,n,6),o=new Oe;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new oe(t,xs(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new oe(t,xs(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new oe(t,xs(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new oe(t,xs(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let u=new oe(t,xs(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let f=new oe(t,xs(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function xs(i){return new ir({color:0,emissive:16777215,emissiveIntensity:i})}var Jh={Whatsapp:{W:1784,H:556,d:"M469.0 44.25Q466.25 44.25 466.25 40.5Q466.25 36.75 468.375 35.625Q470.5 34.5 475.625 31.875Q480.75 29.25 482.75 28.375Q484.75 27.5 489.0 25.5Q493.25 23.5 495.875 22.75Q498.5 22.0 502.25 20.75Q508.5 19.0 517.875 19.0Q527.25 19.0 537.125 25.5Q547.0 32.0 547.0 42.5Q547.0 64.25 528.0 100.125Q509.0 136.0 479.25 174.75Q449.5 213.5 412.5 253.5Q375.5 293.5 340.25 325.0Q305.0 356.5 273.875 376.5Q242.75 396.5 226.0 396.5Q190.5 396.5 190.5 364.25Q190.5 319.0 241.75 233.5Q142.0 351.5 74.75 385.75Q57.25 394.75 48.0 394.75Q38.75 394.75 25.375 383.375Q12.0 372.0 12.0 361.0Q12.0 298.75 98.5 186.75Q131.5 144.0 180.75 91.25Q137.75 128.5 115.25 128.5Q103.25 128.5 97.5 116.75Q92.25 108.25 92.25 100.625Q92.25 93.0 102.25 84.0Q112.25 75.0 114.0 75.0Q115.75 75.0 117.25 76.25Q118.75 77.5 118.75 78.5Q115.25 82.25 115.25 83.375Q115.25 84.5 118.25 84.5Q121.25 84.5 168.25 55.875Q215.25 27.25 219.75 27.25Q232.75 27.25 244.75 34.375Q256.75 41.5 256.75 46.375Q256.75 51.25 251.75 59.25Q246.75 67.25 192.25 137.625Q137.75 208.0 113.0 244.125Q88.25 280.25 76.75 303.375Q65.25 326.5 65.25 331.5Q65.25 336.5 66.75 336.5Q77.25 336.5 141.875 273.125Q206.5 209.75 265.0 147.875Q323.5 86.0 328.625 79.25Q333.75 72.5 339.75 69.625Q345.75 66.75 357.75 66.75Q391.25 66.75 391.25 79.5Q391.25 84.75 376.625 101.75Q362.0 118.75 356.0 126.5Q324.75 166.25 286.375 238.5Q248.0 310.75 248.0 331.0Q248.0 336.5 251.625 336.5Q255.25 336.5 273.125 322.375Q291.0 308.25 320.25 280.125Q349.5 252.0 386.75 210.5Q424.0 169.0 457.875 118.375Q491.75 67.75 491.75 54.75Q491.75 41.75 481.75 41.75ZM670.0 316.5Q671.75 328.0 671.75 334.625Q671.75 341.25 669.375 346.125Q667.0 351.0 658.875 359.875Q650.75 368.75 639.5 377.75Q612.0 399.5 583.25 399.5Q542.0 399.5 542.0 363.0Q542.0 331.25 597.25 236.5Q599.25 233.0 600.0 231.5Q580.75 245.0 526.375 305.125Q472.0 365.25 454.0 390.25Q452.5 392.5 446.5 395.25Q440.5 398.0 437.125 398.0Q433.75 398.0 429.875 395.875Q426.0 393.75 425.0 393.75Q421.75 393.75 421.75 391.625Q421.75 389.5 430.625 368.625Q439.5 347.75 454.0 316.75Q493.75 231.25 572.25 94.25Q599.75 46.25 615.25 26.25Q626.25 12.0 652.25 12.0Q657.75 12.0 658.5 15.25Q659.25 18.5 659.25 22.25Q659.25 26.0 657.75 29.75L631.0 71.5Q551.5 195.5 511.25 277.0Q550.25 229.5 587.0 203.75Q609.75 187.5 621.125 187.5Q632.5 187.5 641.75 191.125Q651.0 194.75 651.0 208.5Q651.0 213.5 634.75 245.5Q586.0 341.5 586.0 352.125Q586.0 362.75 594.75 362.75Q607.5 362.75 634.0 338.0Q654.0 319.25 659.25 314.0Q662.25 311.75 664.75 311.75Q669.5 311.75 670.0 316.5ZM842.0 200.25Q861.0 200.25 861.0 213.25Q861.0 220.25 857.75 223.5Q854.5 226.75 843.875 245.125Q833.25 263.5 820.375 292.125Q807.5 320.75 803.75 341.0Q803.0 343.5 803.0 348.0Q803.0 361.75 810.5 361.75Q818.0 361.75 828.25 354.625Q838.5 347.5 846.5 339.375Q854.5 331.25 862.125 322.75Q869.75 314.25 871.25 313.0Q872.75 311.75 875.75 311.75Q880.5 311.75 881.5 319.0Q882.5 326.25 882.5 334.0Q882.5 341.75 881.0 344.75Q873.75 359.0 849.125 379.0Q824.5 399.0 804.375 399.0Q784.25 399.0 774.75 386.75Q765.25 374.5 765.25 359.625Q765.25 344.75 770.25 333.5Q749.5 360.5 722.625 379.25Q695.75 398.0 678.75 398.0Q661.75 398.0 651.0 387.75Q637.25 375.0 637.25 352.375Q637.25 329.75 647.375 306.875Q657.5 284.0 674.0 265.125Q690.5 246.25 710.25 230.75Q751.75 198.25 786.75 198.25Q800.25 198.25 808.75 202.75Q817.25 207.25 819.5 214.0Q825.5 205.0 829.625 202.625Q833.75 200.25 842.0 200.25ZM808.75 228.0Q766.0 228.0 720.25 275.5Q704.0 292.5 690.375 316.25Q676.75 340.0 676.75 348.75Q676.75 357.5 681.75 357.5Q688.75 357.5 720.75 329.875Q752.75 302.25 763.25 289.25Q774.75 274.75 808.75 228.0ZM1031.75 68.25 1042.0 70.75Q1044.25 70.75 1046.0 73.0Q1047.75 75.25 1047.75 77.25Q1047.75 79.25 1042.5 88.0Q1037.25 96.75 1030.125 107.875Q1023.0 119.0 1022.5 120.0Q1042.0 118.5 1050.125 118.5Q1058.25 118.5 1061.25 119.625Q1064.25 120.75 1068.125 125.875Q1072.0 131.0 1075.25 133.625Q1078.5 136.25 1078.5 141.5Q1078.5 146.75 1072.125 150.375Q1065.75 154.0 1058.5 154.75Q1000.5 160.5 994.5 160.75Q974.25 191.75 937.875 257.375Q901.5 323.0 899.25 339.5Q898.25 347.0 898.25 351.75Q898.25 361.5 908.5 361.5Q918.75 361.5 931.25 353.625Q943.75 345.75 954.25 336.5Q982.25 311.5 984.25 311.5Q990.75 311.5 990.75 334.0Q990.75 346.25 979.5 356.0Q954.25 377.75 937.0 388.75Q919.75 399.75 902.5 399.75Q898.75 399.75 895.5 399.0Q875.5 395.25 866.125 384.375Q856.75 373.5 856.875 355.0Q857.0 336.5 867.875 310.125Q878.75 283.75 895.25 254.0Q922.25 205.5 949.25 163.0L939.75 164.25Q910.75 167.5 906.0 167.5H903.75Q896.5 167.5 889.75 164.625Q883.0 161.75 883.0 157.5Q883.0 153.25 886.625 149.25Q890.25 145.25 891.0 143.0Q892.75 137.5 904.125 130.75Q915.5 124.0 921.25 123.625Q927.0 123.25 932.375 123.0Q937.75 122.75 944.375 122.5Q951.0 122.25 954.5 122.0L977.0 121.0Q998.0 89.5 1005.875 80.5Q1013.75 71.5 1015.0 70.625Q1016.25 69.75 1020.0 69.75ZM997.25 340.25 997.0 344.25Q997.0 350.5 1001.75 355.0Q1006.5 359.5 1010.5 359.5Q1040.5 359.5 1063.625 350.5Q1086.75 341.5 1086.75 332.5Q1086.75 328.25 1078.375 325.125Q1070.0 322.0 1050.125 317.375Q1030.25 312.75 1021.25 310.125Q1012.25 307.5 1007.0 305.25Q1001.75 303.0 996.25 299.0Q984.5 290.75 984.5 274.375Q984.5 258.0 996.625 241.875Q1008.75 225.75 1027.0 214.25Q1045.25 202.75 1066.25 194.0Q1107.75 176.75 1136.0 176.75Q1163.75 176.75 1170.25 188.75Q1172.25 193.0 1172.25 198.25V200.0Q1172.25 213.25 1166.625 220.75Q1161.0 228.25 1148.875 234.25Q1136.75 240.25 1129.625 240.25Q1122.5 240.25 1120.625 239.25Q1118.75 238.25 1117.5 236.625Q1116.25 235.0 1114.375 234.25Q1112.5 233.5 1112.5 230.5Q1112.5 227.5 1115.0 224.375Q1117.5 221.25 1118.5 217.75Q1102.0 218.5 1084.0 225.375Q1066.0 232.25 1053.125 240.75Q1040.25 249.25 1031.75 257.0Q1023.25 264.75 1023.25 268.375Q1023.25 272.0 1034.75 274.25Q1086.5 284.5 1102.75 292.0Q1119.0 299.5 1125.25 309.0Q1131.5 318.5 1131.5 326.25Q1131.5 342.25 1118.75 356.5Q1106.0 370.75 1087.25 379.75Q1047.0 399.5 1017.125 399.5Q987.25 399.5 975.875 390.375Q964.5 381.25 964.5 368.75Q964.5 356.25 970.875 345.625Q977.25 335.0 987.25 335.0Q997.25 335.0 997.25 340.25ZM1348.75 200.25Q1367.75 200.25 1367.75 213.25Q1367.75 220.25 1364.5 223.5Q1361.25 226.75 1350.625 245.125Q1340.0 263.5 1327.125 292.125Q1314.25 320.75 1310.5 341.0Q1309.75 343.5 1309.75 348.0Q1309.75 361.75 1317.25 361.75Q1324.75 361.75 1335.0 354.625Q1345.25 347.5 1353.25 339.375Q1361.25 331.25 1368.875 322.75Q1376.5 314.25 1378.0 313.0Q1379.5 311.75 1382.5 311.75Q1387.25 311.75 1388.25 319.0Q1389.25 326.25 1389.25 334.0Q1389.25 341.75 1387.75 344.75Q1380.5 359.0 1355.875 379.0Q1331.25 399.0 1311.125 399.0Q1291.0 399.0 1281.5 386.75Q1272.0 374.5 1272.0 359.625Q1272.0 344.75 1277.0 333.5Q1256.25 360.5 1229.375 379.25Q1202.5 398.0 1185.5 398.0Q1168.5 398.0 1157.75 387.75Q1144.0 375.0 1144.0 352.375Q1144.0 329.75 1154.125 306.875Q1164.25 284.0 1180.75 265.125Q1197.25 246.25 1217.0 230.75Q1258.5 198.25 1293.5 198.25Q1307.0 198.25 1315.5 202.75Q1324.0 207.25 1326.25 214.0Q1332.25 205.0 1336.375 202.625Q1340.5 200.25 1348.75 200.25ZM1315.5 228.0Q1272.75 228.0 1227.0 275.5Q1210.75 292.5 1197.125 316.25Q1183.5 340.0 1183.5 348.75Q1183.5 357.5 1188.5 357.5Q1195.5 357.5 1227.5 329.875Q1259.5 302.25 1270.0 289.25Q1281.5 274.75 1315.5 228.0ZM1505.75 124.25 1510.25 123.75Q1514.0 123.75 1516.25 130.25Q1518.5 136.75 1518.5 139.0Q1518.5 141.25 1513.5 147.5L1442.25 256.0Q1479.75 218.5 1518.5 201.25Q1533.5 194.75 1545.625 194.75Q1557.75 194.75 1565.125 202.625Q1572.5 210.5 1572.5 222.25Q1572.5 234.0 1566.0 251.25Q1559.5 268.5 1548.375 288.0Q1537.25 307.5 1521.375 327.25Q1505.5 347.0 1488.125 363.0Q1470.75 379.0 1450.25 389.0Q1429.75 399.0 1414.25 399.0Q1383.0 399.0 1383.0 370.25Q1353.75 415.0 1315.5 476.25Q1277.25 537.5 1274.5 541.0Q1271.75 544.5 1269.875 544.5Q1268.0 544.5 1264.125 542.25Q1260.25 540.0 1256.0 534.75Q1251.75 529.5 1251.625 519.5Q1251.5 509.5 1257.5 499.25Q1291.25 443.0 1387.625 287.625Q1484.0 132.25 1492.0 127.0Q1496.5 124.0 1501.0 124.0ZM1527.75 239.25Q1527.75 234.0 1522.75 234.0Q1509.25 234.0 1465.625 275.5Q1422.0 317.0 1396.25 351.25Q1402.75 359.25 1415.5 359.25Q1428.25 359.25 1448.5 345.5Q1468.75 331.75 1486.0 312.875Q1503.25 294.0 1515.5 273.25Q1527.75 252.5 1527.75 239.25ZM1706.0 124.25 1710.5 123.75Q1714.25 123.75 1716.5 130.25Q1718.75 136.75 1718.75 139.0Q1718.75 141.25 1713.75 147.5L1642.5 256.0Q1680.0 218.5 1718.75 201.25Q1733.75 194.75 1745.875 194.75Q1758.0 194.75 1765.375 202.625Q1772.75 210.5 1772.75 222.25Q1772.75 234.0 1766.25 251.25Q1759.75 268.5 1748.625 288.0Q1737.5 307.5 1721.625 327.25Q1705.75 347.0 1688.375 363.0Q1671.0 379.0 1650.5 389.0Q1630.0 399.0 1614.5 399.0Q1583.25 399.0 1583.25 370.25Q1554.0 415.0 1515.75 476.25Q1477.5 537.5 1474.75 541.0Q1472.0 544.5 1470.125 544.5Q1468.25 544.5 1464.375 542.25Q1460.5 540.0 1456.25 534.75Q1452.0 529.5 1451.875 519.5Q1451.75 509.5 1457.75 499.25Q1491.5 443.0 1587.875 287.625Q1684.25 132.25 1692.25 127.0Q1696.75 124.0 1701.25 124.0ZM1728.0 239.25Q1728.0 234.0 1723.0 234.0Q1709.5 234.0 1665.875 275.5Q1622.25 317.0 1596.5 351.25Q1603.0 359.25 1615.75 359.25Q1628.5 359.25 1648.75 345.5Q1669.0 331.75 1686.25 312.875Q1703.5 294.0 1715.75 273.25Q1728.0 252.5 1728.0 239.25Z",strokes:[[[112.4,79.9,4.4,0],[110.4,84,5.9,0],[109.1,89,9.2,0],[111.1,94,12.3,0],[116,99,16.1,0],[120.3,101.9,19.1,0],[125,101.1,19.6,0],[130,100,20.6,0],[135,98.3,21.3,0],[140,95.4,21.2,0],[145,92.3,20.9,0],[150,89.3,20.6,0],[155,87.4,19.4,0],[160,86.4,17.2,0],[165,85.1,16.5,0],[170,84,17.1,0],[175,82.9,19.2,0],[180,81.6,22.4,0],[184.9,81.1,25.4,0],[189,81.1,28.1,0],[191,83.1,28.4,0],[190.1,88,24.9,0],[188.7,93,21.3,0],[187.3,98,18.6,0],[185.9,103,17.1,0],[184.4,108,17.1,0],[183.1,113,18.5,0],[181.3,118,20,0],[177.4,123,20.6,0],[173.4,128,20.7,0],[169.6,133,21,0],[165.3,138,21.2,0],[161,143,21.4,0],[156.7,148,21.7,0],[152.6,153,21.9,0],[148.7,158,22,0],[144.7,163,22.2,0],[141,168,22.4,0],[137,173,22.5,0],[133,178,22.7,0],[129,183,22.8,0],[124.9,188,22.9,0],[120.9,193,22.9,0],[117.3,198,23.1,0],[113.6,203,23.3,0],[109.9,208,23.4,0],[106.1,213,23.4,0],[102.4,218,23.4,0],[98.9,223,23.4,0],[95.4,228,23.4,0],[92.3,233,23.6,0],[88.9,238,23.6,0],[85.3,243,23.7,0],[82,248,23.7,0],[78.7,253,23.6,0],[75.4,258,23.6,0],[72.3,263,23.6,0],[69.3,268,23.6,0],[66.4,273,23.6,0],[63.6,278,23.6,0],[60.6,283,23.7,0],[57.9,288,23.5,0],[55.4,293,23.5,0],[53.1,298,23.5,0],[50.7,303,23.7,0],[48.4,308,23.7,0],[46.9,313,23.3,0],[45.7,318,22.5,0],[44.9,323,22,0],[44.1,328,22,0],[43.3,333,22.7,0],[42.4,338,24,0],[41.7,343,26,0],[41,348,28.5,0],[41.6,353,30.3,0],[44.1,357.4,31.6,0],[49,359.4,30.4,0],[54,359.4,27.7,0],[59,358.4,24.8,0],[64,357.4,22.7,0],[69,356.1,21.3,0],[74,354.9,21.1,0],[79,353.6,21.6,0],[84,352.3,22.8,0],[89,349.6,23.2,0],[94,346.1,23.3,0],[99,342.4,23.4,0],[104,338.6,23.7,0],[109,334.4,23.7,0],[114,330.4,23.8,0],[119,326.1,23.9,0],[124,321.9,24,0],[129,317,24.3,0],[134,312.3,24.2,0],[139,308,24.1,0],[144,303,24.6,0],[149,298,24.8,0],[154,293,24.5,0],[159,288.6,24.1,0],[164,284,24,0],[169,279,24,0],[173.9,274,23.9,0],[178.1,269,24,0],[183,264,24,0],[188,259,23.8,0],[192.3,254,23.4,0],[197,249,23.3,0],[202,244,23.3,0],[206.7,239,22.8,0],[211,234,22.9,0],[216,229.1,22.6,0],[221,226,21.3,0],[226,224.3,20,0],[231,222.7,19.8,0],[236,221,21.1,0],[241,219.3,23.6,0],[246,217.7,26.7,0],[251,216,30.6,0],[255.1,214.6,34,0],[257.9,211,37.2,0],[261.4,206,37.6,0],[265.3,201,36.5,0],[268.6,196,36.2,0],[272.3,191,35.4,0],[276,186,34.7,0],[279.7,181,33.9,0],[283.4,176,33.2,0],[286.9,171,32.7,0],[290.7,166,32.1,0],[294.6,161,31.5,0],[298.7,156,30.6,0],[302.3,151,30.2,0],[306.1,146,29.6,0],[310.1,141,29,0],[313.7,136,28.6,0],[318,131,28.2,0],[322.1,126,27.6,0],[325.7,121,27.3,0],[330,116,27.1,0],[334.6,111,26.7,0],[338.4,106,26.5,0],[342.7,101,26.3,0],[346.9,96,26.2,0],[351.1,91.3,25,0],[356,87.1,21.8,0],[361,83.9,18.6,0],[366,82.4,16.6,0],[371,81,14.7,0],[376,79.9,12.5,0],[379.7,79,10.5,0],[377,79.6,11.9,1],[372,80.7,14.3,1],[367,82.1,16.2,1],[362,83.6,18.2,1],[357,86.3,21.1,1],[352,90.4,24.4,1],[347.7,95,26.2,1],[343.6,100,26.3,1],[339.3,105,26.4,1],[335.4,110,26.6,1],[331,115,27,1],[326.4,120,27.3,1],[322.9,125,27.6,1],[318.9,130,28.1,1],[314.4,135,28.6,1],[310.9,140,29,1],[306.9,145,29.5,1],[303,150,30.1,1],[299.6,155,30.4,1],[295.4,160,31.3,1],[291.6,165,31.9,1],[287.6,170,32.7,1],[284.1,175,33.1,1],[280.4,180,33.8,1],[276.7,185,34.6,1],[273,190,35.3,1],[269.3,195,36,1],[266,200,36.4,1],[262.3,205,37.3,1],[258.6,210,37.5,1],[256.4,214.6,34.8,1],[256.6,218.9,31.8,0],[257.4,223.1,29.4,0],[257,228,26.1,0],[256,233,22.9,0],[255,238,20.5,0],[254,243,19.1,0],[253,248,19.1,0],[252,253,20.2,0],[251,258,21.7,0],[249.3,263,22.2,0],[246.6,268,22.5,0],[243.7,273,22.7,0],[241.6,278,22.7,0],[239.3,283,22.9,0],[237,288,23,0],[234.7,293,23.2,0],[232.6,298,23.3,0],[231,303,23.1,0],[229.3,308,23.2,0],[228.4,313,22.6,0],[227.4,318,22.4,0],[226.6,323,22.5,0],[225.7,328,23.3,0],[224.9,333,24.2,0],[224.1,338,25.3,0],[223.3,343,27.3,0],[222.7,348,29.7,0],[222,353,31.6,0],[222.3,358,32.5,0],[226,361.3,34.1,0],[231,360.7,32,0],[236,359.7,28.4,0],[241,358.6,25.3,0],[246,357.6,23,0],[251,356.4,21.5,0],[256,355.1,20.6,0],[261,353.9,21,0],[266,352.6,22,0],[271,350.3,22.8,0],[276,346.9,22.8,0],[281,343.3,22.8,0],[286,339.6,23,0],[291,335.6,23.1,0],[296,331.6,23.2,0],[301,327.4,23.4,0],[306,323.3,23.4,0],[311,319,23.7,0],[316,314.7,23.8,0],[321,310.3,23.9,0],[326,306,23.9,0],[331,301.3,23.9,0],[336,297,23.9,0],[341,292,24,0],[346,287,24,0],[351,282,24.4,0],[356,277,24.8,0],[361,272,24.8,0],[365.4,267,24.5,0],[370,262,24.7,0],[375,257,24.8,0],[380,252,24.8,0],[384.7,247,24.6,0],[389,242,24.5,0],[393.9,237,24.7,0],[398.1,232,24.5,0],[402.9,227,24.7,0],[407.1,222,24.5,0],[411.7,217,24.6,0],[416,212,24.7,0],[420.6,207,24.8,0],[424.9,202,24.9,0],[429.1,197,24.9,0],[433.3,192,24.9,0],[437.4,187,25.1,0],[441.4,182,25.1,0],[445.4,177,25.2,0],[449.3,172,25.3,0],[452.9,167,25.4,0],[456.6,162,25.5,0],[460.3,157,25.6,0],[463.9,152,25.6,0],[467.4,147,25.6,0],[471,142,25.6,0],[474.4,137,25.6,0],[478,132,25.8,0],[481.6,127,25.8,0],[484.9,122,25.8,0],[487.9,117,25.8,0],[491,112,25.9,0],[494,107,25.8,0],[496.9,102,25.6,0],[499.7,97,25.6,0],[502.4,92,25.5,0],[505.3,87,25.8,0],[507.7,82,25.7,0],[509.9,77,25.4,0],[511,72,24.6,0],[511.9,67,23.6,0],[512.7,62,23.2,0],[513.7,57,23.7,0],[514.4,52,24.4,0],[513.1,47,23.4,0],[509,42,20.6,0],[504,37.3,17.2,0],[499,34.7,13.7,0],[494,34,11.2,0],[489,34.3,9.2,0],[484,35.3,7,0],[479,36.3,6.1,0],[474,37.9,5.5,0],[469.6,39.4,4.2,0],[471,38.9,4.8,1],[476,37.1,5.9,1],[481,35.7,6.4,1],[486,34.7,7.9,1],[491,34,10.1,1],[496,34.1,12.1,1],[501,35.4,15,1],[506,39,18.7,1],[510.9,44,21.8,1],[514.1,49,24.2,1],[514.3,54,24.3,1],[513.4,59,23.5,1],[512.4,64,23.3,1],[511.6,69,24,1],[510.6,74,24.9,1],[509.1,79,25.6,1],[506.7,84,25.7,1],[504.1,89,25.6,1],[501.3,94,25.5,1],[498.6,99,25.6,1],[495.7,104,25.7,1],[492.9,109,25.9,1],[489.7,114,25.8,1],[486.6,119,25.7,1],[483.6,124,25.8,1],[480.1,129,25.8,1],[476.6,134,25.7,1],[473,139,25.5,1],[469.6,144,25.6,1],[466,149,25.6,1],[462.4,154,25.6,1],[458.9,159,25.5,1],[455.1,164,25.4,1],[451.4,169,25.4,1],[447.7,174,25.3,1],[443.7,179,25.1,1],[439.7,184,25.1,1],[435.7,189,25,1],[431.6,194,24.9,1],[427.4,199,24.9,1],[423.1,204,24.9,1],[418.9,209,24.8,1],[414.3,214,24.6,1],[410,219,24.7,1],[405.4,224,24.5,1],[401,229,24.7,1],[396.4,234,24.5,1],[392,239,24.8,1],[387.3,244,24.5,1],[383,249,24.8,1],[378,254,24.8,1],[373,259,24.8,1],[368,264,24.5,1],[363.7,269,24.6,1],[359,274,24.8,1],[354,279,24.7,1],[349,284,24.2,1],[344,289,24,1],[339,294,24,1],[334,298.7,23.9,1],[329,303,24,1],[324,307.7,23.9,1],[319,312,24,1],[314,316.4,23.7,1],[309,320.7,23.6,1],[304,324.9,23.4,1],[299,329.1,23.3,1],[294,333.3,23.2,1],[289,337.3,23.1,1],[284,341.1,22.9,1],[279,344.7,22.8,1],[274,348.3,22.8,1],[269,351.4,22.6,1],[264,353.1,21.6,1],[259,354.4,20.8,1],[254,355.6,20.8,1],[249,356.9,22,1],[244,358,23.8,1],[239,359.1,26.6,1],[234,360.3,30,1],[229,361.3,33.3,1],[224.1,360.6,33.7,1],[221.9,356,31.8,1],[222.3,351,31,1],[223,346,28.7,1],[223.6,341,26.4,1],[224.4,336,24.7,1],[225.3,331,23.7,1],[226.1,326,22.9,1],[226.9,321,22.4,1],[227.7,316,22.6,1],[228.7,311,22.9,1],[229.9,306,23.2,1],[231.6,301,23.2,1],[233.3,296,23.4,1],[235.7,291,23.1,1],[237.9,286,23,1],[240.3,281,22.8,1],[242.4,276,22.8,1],[244.9,271,22.6,1],[247.7,266,22.4,1],[250.1,261,22.1,1],[251.4,256,21.2,1],[252.4,251,19.7,1],[253.4,246,19,1],[254.4,241,19.6,1],[255.4,236,21.4,1],[256.4,231,24.1,1],[257.4,226,27.6,1],[256.9,221.7,30,1],[253,223.1,26.2,0],[248,228,19.1,0],[243,233,12,0],[238.3,238,5.2,0],[235.6,241.4,1.4,0],[236.4,240.6,2.3,1],[240,236,7.8,1],[245,231,14.9,1],[250,226,21.9,1],[254.6,221.4,28.5,1],[256.4,217.2,32.8,1],[253.9,215.3,32.7,1],[249,216.7,28.9,1],[244,218.3,25.4,1],[239,220,22.4,1],[234,221.7,20.4,1],[229,223.3,19.8,1],[224,225,20.4,1],[219,227,21.9,1],[214,231,22.9,1],[209.3,236,22.8,1],[205,241,23,1],[200,246,23.3,1],[195,251,23.3,1],[190.6,256,23.5,1],[186,261,24,1],[181,266,24,1],[176.4,271,23.9,1],[172,276,24,1],[167,281,24,1],[162,286,24,1],[157,290.3,24.2,1],[152,295,24.7,1],[147,300,24.8,1],[142,305,24.4,1],[137,309.7,24.1,1],[132,314,24.3,1],[127,319,24.1,1],[122,323.6,24,1],[117,327.9,23.9,1],[112,332,23.7,1],[107,336.1,23.7,1],[102,340.1,23.5,1],[97,343.9,23.4,1],[92,347.6,23.3,1],[87,350.9,23.2,1],[82,353,22.4,1],[77,354.1,21.4,1],[72,355.4,21.1,1],[67,356.6,21.7,1],[62,357.7,23.3,1],[57,358.7,25.8,1],[52,359.6,28.8,1],[47,358.9,31.1,1],[42.9,355.9,31.4,1],[41.3,351,29.7,1],[41.3,346,27.5,1],[42,341,25.1,1],[42.7,336,23.4,1],[43.6,331,22.4,1],[44.4,326,21.9,1],[45.3,321,22.1,1],[46.3,316,22.7,1],[47.4,311,23.5,1],[49.3,306,23.7,1],[51.7,301,23.7,1],[54,296,23.5,1],[56.4,291,23.5,1],[58.9,286,23.6,1],[61.9,281,23.6,1],[64.7,276,23.6,1],[67.6,271,23.6,1],[70.4,266,23.6,1],[73.6,261,23.6,1],[76.7,256,23.6,1],[80,251,23.7,1],[83.3,246,23.7,1],[86.7,241,23.7,1],[90.3,236,23.6,1],[93.6,231,23.5,1],[96.7,226,23.4,1],[100.3,221,23.4,1],[103.9,216,23.4,1],[107.6,211,23.4,1],[111.4,206,23.4,1],[115.1,201,23.2,1],[118.7,196,23,1],[122.4,191,23,1],[126.6,186,23,1],[130.6,181,22.8,1],[134.6,176,22.7,1],[138.6,171,22.5,1],[142.6,166,22.4,1],[146.3,161,22.2,1],[150.4,156,22,1],[154.3,151,21.9,1],[158.4,146,21.6,1],[162.7,141,21.4,1],[167,136,21.1,1],[171.1,131,20.8,1],[175,126,20.6,1],[179.1,121,20.5,1],[182.3,116,19.5,1],[183.6,111,17.7,1],[185,106,16.9,1],[186.4,101,17.5,1],[187.9,96,19.6,1],[189.3,91,22.7,1],[190.6,86,26.3,1],[190.6,81.9,28.9,1],[187.4,81.9,26.5,1],[183,86,20.5,0],[178,91,13.5,0],[173.1,96,6.5,0],[169.7,100,1.5,0],[169.6,100.6,1,0]],[[237.1,49,17.4,0],[233,49.7,20.1,0],[228,50.6,22.8,0],[223.1,52.7,25.6,0],[218.9,56.4,27.5,0],[214,60.6,28.7,0],[209,65,30.1,0],[204,69.6,31.6,0],[199,74,32.8,0],[194,78.3,32.5,0],[191.9,80.1,30.9,0]],[[426.9,388.7,5.6,0],[431,387.1,8.7,0],[436,384.7,12.4,0],[440,381,14.8,0],[443.1,376,15.9,0],[446.1,371,16.7,0],[449,366,17.3,0],[452.1,361,18.1,0],[455.1,356,18.9,0],[458.1,351,19.5,0],[461.3,346,20.4,0],[464.6,341,21.2,0],[467.7,336,22.1,0],[470.9,331,22.7,0],[474,326,23.6,0],[477.4,321,24.5,0],[480.6,316,25.1,0],[484,311,26.1,0],[487.1,306,26.9,0],[490.6,301,27.8,0],[493.9,296,28.5,0],[497.3,291,27,0],[500.7,286.1,21.6,0],[505,281,14.9,0],[510,276,7.8,0],[514,270.6,2,0],[516.4,268.6,1.7,0],[514.8,271.5,2.2,1],[510,276,7.8,1],[505,281,14.9,1],[502.3,285.7,20.3,0],[506,286.6,18.9,0],[511,285,15.6,0],[516,283,13.2,0],[521,281.3,12.9,0],[526,279.6,14.6,0],[531,276,16.1,0],[535.6,271,16.1,0],[540,266,16.2,0],[545,261,16.3,0],[549.3,256,16.2,0],[554,251,16.3,0],[559,246.1,16.1,0],[564,241.9,16.2,0],[569,237,16.2,0],[574,232.6,16.1,0],[579,228.3,15.8,0],[584,225,15.3,0],[589,223.3,13.5,0],[594,221.9,12.7,0],[599,220.4,13.9,0],[604,219.1,16.5,0],[608.9,218.4,19.6,0],[608.9,221.1,17.5,0],[604,226,10.6,0],[599.6,230.9,4.1,0],[597.4,233.6,1.2,0],[599,231.7,3.1,1],[603,227,9.2,1],[608,222,16.3,1],[609.4,218.6,19.9,1],[605,218.9,17.2,1],[600,220.1,14.3,1],[595,221.6,12.8,1],[590,223,13.2,1],[585,224.6,15,1],[580,227.4,15.7,1],[575,231.7,16,1],[570,236,16.1,1],[565,241,16.3,1],[560,245.3,16.1,1],[555,250,16.3,1],[550.1,255,16.2,1],[545.9,260,16.2,1],[541,265,16.3,1],[536.4,270,16.1,1],[532,275,16.2,1],[527,279,15,1],[522,281,13.2,1],[517,282.7,13,1],[512,284.6,15,1],[507,286.3,18.2,1],[502.3,286.4,20.8,1],[498.9,283,20.8,0],[498.3,278,18.6,0],[499.3,273,16.1,0],[500.3,268,15,0],[501.3,263,15.5,0],[502.3,258,16.8,0],[503.6,253,17.5,0],[505.7,248,17.2,0],[508.6,243,17.4,0],[511.4,238,17.6,0],[513.7,233,17.2,0],[516.7,228,17.5,0],[519.4,223,17.6,0],[522,218,17.5,0],[524.7,213,17.6,0],[527.6,208,17.8,0],[530.3,203,17.8,0],[533,198,17.8,0],[535.7,193,17.8,0],[538.6,188,17.9,0],[541.6,183,18,0],[544.4,178,18.1,0],[547.3,173,18.2,0],[550,168,18.2,0],[552.7,163,18.2,0],[555.6,158,18.3,0],[558.4,153,18.3,0],[561.4,148,18.5,0],[564.4,143,18.6,0],[567.3,138,18.7,0],[570.1,133,18.8,0],[573,128,18.8,0],[575.9,123,18.8,0],[579,118,19.1,0],[582,113,19.2,0],[584.9,108,19.3,0],[588,103,19.5,0],[591,98,19.5,0],[594,93,19.6,0],[597,88,19.7,0],[600,83,19.8,0],[603,78,19.8,0],[606,73,19.8,0],[609.1,68,19.8,0],[612.3,63,19.8,0],[615.7,58,19.9,0],[619,53,19.9,0],[622.3,48,19.8,0],[625.7,43,19.8,0],[629.6,38,19.4,0],[633.4,33,18.3,0],[638,28.3,15.8,0],[643,24.4,13,0],[645.1,22.7,11.7,0]],[[893.9,155.6,10.5,0],[898,154.7,12.3,0],[903,153.3,14.6,0],[908,151.4,16.2,0],[913,149.3,17.8,0],[918,147.7,19,0],[923,146.1,20,0],[928,144.7,20.9,0],[933,143.7,21.2,0],[938,143,21.3,0],[943,143,21,0],[948,143,21.1,0],[953,142.4,21.2,0],[958,142,21.6,0],[963,142,22,0],[967.7,142.4,22.4,0],[972,142,22,0],[977,140.1,20.2,0],[982,140,21,0],[987,140,22,0],[992,139.9,21.4,0],[997,138.4,22.4,0],[1001.6,137,23.2,0],[1006,137.9,22.1,0],[1011,138,21.4,0],[1016,137.6,20.6,0],[1021,137,19.3,0],[1026,137,19,0],[1031,137,19,0],[1036,136.7,18.8,0],[1041,136.1,18.7,0],[1046,136.9,19,0],[1051,137.7,17.9,0],[1056,138.9,16.1,0],[1061,139.9,14.1,0],[1065.4,140.6,11.8,0],[1064,140.3,12.6,1],[1059,139.6,14.9,1],[1054,138.4,16.8,1],[1049,137.4,18.5,1],[1044,136.6,19,1],[1039,136.3,18.6,1],[1034,137,19,1],[1029,137,19,1],[1024,137,19.1,1],[1019,137.1,19.8,1],[1014,137.9,21,1],[1009,138,21.7,1],[1004.1,137.3,22.7,1],[999.9,137.1,23.3,1],[995,139.1,21.9,1],[990,140,21.7,1],[985,140,21.8,1],[980,140,20.5,1],[975,140.7,20.7,1],[970.4,142.9,22.9,1],[968.6,146,25.3,0],[967.4,151,24.3,0],[966.4,156,21.1,0],[965.1,161,18.5,0],[964,166,17.2,0],[962.9,171,17.5,0],[961.6,176,18.6,0],[959.3,181,19.2,0],[956.1,186,19.4,0],[953.1,191,19.4,0],[950.1,196,19.6,0],[947.1,201,19.6,0],[944.3,206,19.6,0],[941.4,211,19.6,0],[938.4,216,19.7,0],[935.4,221,19.7,0],[932.6,226,19.8,0],[929.7,231,19.9,0],[927,236,19.9,0],[924.1,241,20,0],[921.1,246,20,0],[918.3,251,20,0],[915.6,256,20.1,0],[912.7,261,20.1,0],[909.9,266,19.9,0],[907.3,271,20.2,0],[904.4,276,20.1,0],[901.7,281,19.9,0],[899.3,286,19.9,0],[896.9,291,19.9,0],[894.7,296,20.1,0],[892.3,301,20.1,0],[890,306,20,0],[888,311,20,0],[885.9,316,20.1,0],[884.1,321,20,0],[882.4,326,19.9,0],[881.4,331,19.5,0],[880.7,336,19.2,0],[879.4,341,19.7,0],[878,346,21,0],[877.3,350.6,21.7,0],[878.7,355,20.4,0],[879.6,360,20.4,0],[880.9,365,21.2,0],[882.7,370,22,0],[887,374.3,21.6,0],[892,376.4,20.5,0],[897,377.4,19.3,0],[902,378,18.4,0],[907,377.6,17.6,0],[912,376.7,16.8,0],[917,375.7,16.5,0],[922,374.6,16.7,0],[927,373,16.8,0],[932,370.7,16.8,0],[937,368,16.8,0],[942,364.7,16.6,0],[947,361.1,16.4,0],[952,358.3,15.9,0],[957,356.7,14.7,0],[962,355.4,14.7,0],[967,354,16.6,0],[971.7,352.3,19.7,0],[976,352.5,20.9,0],[979.9,355.1,19.6,0],[981,360,19.8,0],[982.4,365,20.1,0],[986.1,369.9,21.9,0],[991,373.7,22.1,0],[996,375.6,21.2,0],[1001,376.4,19.8,0],[1006,377,19.2,0],[1011,377.7,19.7,0],[1016,378,20,0],[1021,377.4,19.5,0],[1026,377,19.6,0],[1031,376.3,19.3,0],[1036,375.7,19.2,0],[1041,374.4,18.8,0],[1046,373.7,18.9,0],[1051,372.3,18.6,0],[1056,371.1,18.9,0],[1061,369.4,18.5,0],[1066,367.7,18.4,0],[1071,366,18.6,0],[1076,363.7,18.5,0],[1081,361.4,18.7,0],[1086,358.7,18.7,0],[1091,355.4,18.9,0],[1095.9,351.4,19.1,0],[1099.4,347,19,0],[1101.3,342,18.2,0],[1102.7,337,18.1,0],[1104.1,332,19.2,0],[1104.7,327,20.2,0],[1103.3,322,20.4,0],[1101.6,317,21.3,0],[1098,312.4,21.3,0],[1093,309.4,20.8,0],[1088,307.4,20.4,0],[1083,305.6,20.1,0],[1078,304.1,20.2,0],[1073,302.7,20.1,0],[1068,301.4,20.2,0],[1063,300.1,20.1,0],[1058,298.7,20,0],[1053,297.4,20,0],[1048,296.3,19.9,0],[1043,295.1,19.9,0],[1038,293.9,19.6,0],[1033,292.6,19.4,0],[1028,291,19,0],[1023,289.6,19,0],[1018,288.1,19.8,0],[1013,285.9,20.4,0],[1008.6,282,20.8,0],[1006.6,277,19.7,0],[1005.7,272,18.8,0],[1006.4,267,17.6,0],[1007.6,262,17.3,0],[1008.9,257,18.1,0],[1010.9,252,18.7,0],[1015,247,19,0],[1020,242,19.1,0],[1025,237.4,19.1,0],[1030,233.6,19.1,0],[1035,230,19,0],[1040,226.7,18.7,0],[1045,223.7,18.6,0],[1050,220.9,18.5,0],[1055,218.3,18.6,0],[1060,215.7,18.5,0],[1065,213.4,18.6,0],[1070,211.3,18.5,0],[1075,209,18.5,0],[1080,207.3,18.5,0],[1085,205.7,18.4,0],[1090,204.1,18.4,0],[1095,203,18.3,0],[1100,201.7,18.6,0],[1105,200.9,18.5,0],[1110,200.1,18.5,0],[1115,199.4,18.6,0],[1120,199,19.3,0],[1125,198.3,21.2,0],[1130,198,22.2,0],[1135,197.7,22.5,0],[1138.6,201,25.3,0],[1138.6,206,24.7,0],[1136.3,211,20.6,0],[1134.1,216,17.4,0],[1131.6,221,15,0],[1128.4,226,13.5,0],[1124,228.9,10.9,0],[1119,229.3,7.4,0],[1117.6,229.6,6.2,1],[1122,229,9.6,1],[1126.9,227.6,12.6,1],[1130.4,223,14.5,1],[1133.3,218,16.4,1],[1135.4,213,19.2,1],[1137.7,208,23,1],[1139,203,25.8,1],[1136.7,198.4,23.3,1],[1132,197.7,22.2,1],[1127,198,21.8,1],[1122,198.7,20,1],[1117,199.1,18.9,1],[1112,199.9,18.5,1],[1107,200.6,18.5,1],[1102,201.3,18.6,1],[1097,202.6,18.3,1],[1092,203.6,18.4,1],[1087,205,18.4,1],[1082,206.7,18.4,1],[1077,208.3,18.5,1],[1072,210.3,18.5,1],[1067,212.6,18.6,1],[1062,214.7,18.5,1],[1057,217.3,18.6,1],[1052,219.7,18.5,1],[1047,222.6,18.6,1],[1042,225.4,18.7,1],[1037,228.7,18.9,1],[1032,232.1,19.1,1],[1027,235.9,19.1,1],[1022,240,19.1,1],[1017,245,19.1,1],[1012.3,250,18.8,1],[1009.6,255,18.4,1],[1008.1,260,17.4,1],[1006.9,265,17.4,1],[1005.7,270,18.5,1],[1006,275,19.4,1],[1007.6,280,20.4,1],[1011,284.6,20.7,1],[1016,287.4,20.1,1],[1021,289.1,19.4,1],[1026,290.4,18.9,1],[1031,292,19.3,1],[1036,293.4,19.7,1],[1041,294.6,19.8,1],[1046,295.7,19.8,1],[1051,296.9,19.9,1],[1056,298.1,20,1],[1061,299.6,20.2,1],[1066,300.9,20.2,1],[1071,302.1,20.1,1],[1076,303.6,20.2,1],[1081,304.9,20.2,1],[1086,306.6,20.3,1],[1091,308.6,20.6,1],[1096,311,21,1],[1100.4,315,21.4,1],[1102.7,320,20.8,1],[1104.3,325,20.3,1],[1104.6,330,19.7,1],[1103.3,335,18.4,1],[1101.9,340,18,1],[1100.3,345,18.7,1],[1097.6,349.7,19.2,1],[1093,353.7,18.9,1],[1088,357.4,18.6,1],[1083,360.4,18.7,1],[1078,362.9,18.6,1],[1073,365.1,18.6,1],[1068,367,18.5,1],[1063,368.7,18.4,1],[1058,370.4,18.6,1],[1053,371.7,18.6,1],[1048,373.1,18.7,1],[1043,374.1,18.8,1],[1038,375.3,19.1,1],[1033,376,19.1,1],[1028,376.7,19.6,1],[1023,377.1,19.3,1],[1018,377.9,19.9,1],[1013,378,20,1],[1008,377.3,19.3,1],[1003,376.7,19.5,1],[998,375.9,20.5,1],[993,374.7,21.8,1],[988,371.6,22.3,1],[983.7,367,20.9,1],[981.3,362,19.9,1],[980.6,357,19.7,1],[977.9,353.3,20.5,1],[973.4,352.1,20.6,1],[969,353.3,17.8,1],[964,354.9,15.3,1],[959,356.1,14.6,1],[954,357.6,15.4,1],[949,359.7,16.4,1],[944,363.3,16.6,1],[939,366.7,16.8,1],[934,369.7,16.8,1],[929,372.1,16.8,1],[924,374,16.8,1],[919,375.4,16.7,1],[914,376.4,16.7,1],[909,377.3,17.3,1],[904,378,18.1,1],[899,377.7,18.8,1],[894,376.7,19.9,1],[889,375.3,21.1,1],[884.1,371.9,22,1],[881.4,367,21.6,1],[880.1,362,20.6,1],[879.1,357,20.2,1],[877.7,352.4,21.3,1],[874,351.4,23.9,0],[869,353,22,0],[864,354.7,18.4,0],[859,356.3,15.9,0],[854,358,14.7,0],[849,359.4,15.5,0],[844,361.7,16.5,0],[839,365.7,16.7,0],[834,369,16.7,0],[829,371.7,16.7,0],[824,373.6,16.2,0],[819,374.9,15.7,0],[814,376,16.1,0],[809,377,17,0],[804,377.7,18.3,0],[799,377,19.3,0],[794,375.7,20.9,0],[789.6,372,21.2,0],[787.3,367,20.4,0],[786.1,362,19.3,0],[785.1,357,19.1,0],[785,352,19,0],[785,347,19,0],[785,342,18.5,0],[785,337,18.1,0],[785,332,19.1,0],[785,327,21.1,0],[783.7,322.4,22.8,0],[782.3,318.1,25.1,0],[782,313.9,27.5,0],[784.4,309,27.4,0],[786.9,304,26.7,0],[789.4,299,26,0],[792.1,294,25.4,0],[794.7,289,24.9,0],[797.6,284,24.3,0],[800.4,279,23.8,0],[803.1,274,23.4,0],[806.1,269,22.7,0],[809.1,264,22.2,0],[812,259,21.9,0],[815,254,21.4,0],[818,249,21,0],[820.9,244,20.5,0],[822.3,239,19.2,0],[823.4,234,18.2,0],[823.6,229.4,17.6,0],[820,225,14.1,0],[815,220.9,10.8,0],[810,219.4,10.5,0],[805,217.7,11.3,0],[800,216.1,12.9,0],[795,214.9,14.6,0],[790,214,16.2,0],[785,213.7,16.6,0],[780,214.6,17.2,0],[775,215.9,17.6,0],[770,217.3,18,0],[765,219.1,18.4,0],[760,221.1,18.7,0],[755,223.6,19,0],[750,226.3,19.3,0],[745,229,19.5,0],[740,232.3,19.6,0],[735,235.7,19.9,0],[730,239.3,20,0],[725,242.9,20.1,0],[720,247,20.4,0],[715,251.6,20.6,0],[710,256,20.8,0],[705,261,21.2,0],[700.7,266,21.1,0],[696,271,21.4,0],[691.3,276,21.6,0],[687.3,281,21.9,0],[683.6,286,21.9,0],[680.1,291,22,0],[677,296,22.1,0],[673.7,301,22.1,0],[670.7,306,22,0],[668.3,311,21.9,0],[665.7,316,21.8,0],[663.3,321,21.4,0],[661.3,326,21.1,0],[659.7,331,20.8,0],[658.9,336,20.3,0],[658.1,341,19.8,0],[657.7,346,19.4,0],[656.9,351,20.2,0],[656.3,355.7,21.5,0],[658.3,360,20.7,0],[660.4,365,20.8,0],[663.3,369.9,21.6,0],[668,372.6,20.5,0],[673,373.9,19.3,0],[678,374.7,18.9,0],[683,374.1,18.3,0],[688,373.1,18.2,0],[693,372,18.9,0],[698,370.4,19.8,0],[703,368,20.2,0],[708,364.4,20.3,0],[713,360.7,20.4,0],[718,356.7,20.5,0],[723,352.7,20.5,0],[728,348.4,20.4,0],[733,344,20.3,0],[738,339.7,20.3,0],[743,335,20,0],[748,330,19.6,0],[753,325.7,18.7,0],[758,323.7,17,0],[763,322.3,16.3,0],[768,320.7,17.4,0],[773,319,20,0],[778,317.3,23.5,0],[781.9,317.6,25.3,1],[782.6,321.3,22.9,1],[779,325,17.7,0],[774,330,10.6,0],[769.6,334.9,4.1,0],[767.4,337.6,1.2,0],[767.6,337.6,1.2,0]],[[983.4,318.9,6.2,0],[982,323,8.4,0],[980.7,328,10.3,0],[979.3,333,11.7,0],[977.6,338,14.1,0],[975.7,343,17.8,0],[974,348.1,21.2,0],[973.3,350.4,21.3,0]],[[1039.1,76.3,7.3,0],[1035,77.9,9.6,0],[1030,79.9,12.5,0],[1025.3,83.1,15.3,0],[1021.7,88,17.8,0],[1018,93,18.3,0],[1014.1,98,18.7,0],[1011,103,18.7,0],[1009.4,108,17.6,0],[1008.1,113,16.8,0],[1006.7,118,17.4,0],[1005.4,123,19.3,0],[1004.1,128,22.3,0],[1002.9,133,24.9,0],[1002.3,135.1,24.7,0]],[[1268,533.1,9.9,0],[1267.6,529,12.6,0],[1267,524,15.5,0],[1267.1,519,16.7,0],[1269.1,514,18,0],[1272,509,18.8,0],[1275,504,19,0],[1278.3,499,19,0],[1281.3,494,19.1,0],[1284.6,489,19.2,0],[1287.7,484,19.2,0],[1290.7,479,19.2,0],[1293.9,474,19.4,0],[1297,469,19.5,0],[1300,464,19.4,0],[1303,459,19.5,0],[1306.1,454,19.4,0],[1309.3,449,19.4,0],[1312.4,444,19.5,0],[1315.6,439,19.6,0],[1318.7,434,19.6,0],[1321.9,429,19.7,0],[1325,424,19.8,0],[1328,419,19.8,0],[1330.9,414,19.7,0],[1332.6,409,18.6,0],[1333.9,404,17.7,0],[1335.1,399,18.3,0],[1336.4,394,20.1,0],[1337.6,389,22.9,0],[1338.6,384.1,26.1,0],[1341.1,381,27.4,0],[1345.6,377.9,26.7,0],[1350,373.9,25.7,0],[1354.6,369,24.5,0],[1358.6,364.7,23.5,0],[1363,360,22.5,0],[1368,356,21.4,0],[1373,354,20.2,0],[1377.6,353.4,19.1,0],[1382,357,15.1,0],[1387,361.3,12,0],[1391.4,364.3,12.4,0],[1395.1,368.7,13.7,0],[1400,372.1,16.6,0],[1405,374.3,17.4,0],[1410,375.9,18.1,0],[1415,376.7,18.7,0],[1420,376.1,18.5,0],[1425,375.3,18.6,0],[1430,374.4,19.1,0],[1435,373.1,19.5,0],[1440,371.3,19.7,0],[1445,368.7,19.7,0],[1450,366.1,19.8,0],[1455,363.1,19.8,0],[1460,360,19.9,0],[1465,356.4,19.8,0],[1470,352.6,19.8,0],[1475,348.6,19.6,0],[1480,344,19.8,0],[1485,339,19.5,0],[1490,334,19.1,0],[1494.9,329,19,0],[1499.1,324,18.9,0],[1503.6,319,18.9,0],[1507.7,314,18.7,0],[1511.7,309,18.6,0],[1515.6,304,18.5,0],[1519,299,18.5,0],[1522.3,294,18.5,0],[1525.7,289,18.5,0],[1528.9,284,18.4,0],[1531.7,279,18.5,0],[1534.3,274,18.6,0],[1536.7,269,18.5,0],[1539.1,264,18.6,0],[1540.7,259,18.2,0],[1542,254,17.8,0],[1543,249,17.7,0],[1543.9,244,17.9,0],[1544.7,239,18.7,0],[1545.6,234,19.9,0],[1546.4,229,22,0],[1546.6,224,24.3,0],[1544.9,219,24.4,0],[1541,216.3,22.2,0],[1536,216.9,21,0],[1531,217.7,18.4,0],[1526,218.7,16.4,0],[1521,219.7,15.3,0],[1516,220.9,14.6,0],[1511,222,15,0],[1506,223.7,15.4,0],[1501,226.4,15.3,0],[1496,229.7,15.4,0],[1491,233.1,15.5,0],[1486,236.9,15.6,0],[1481,240.7,15.6,0],[1476,244.9,15.7,0],[1471,249.1,15.9,0],[1466,253.6,15.7,0],[1461,257.6,15.8,0],[1456,260,14.3,0],[1451,261.7,13.5,0],[1446,263.1,14.3,0],[1441,264.7,16.9,0],[1436,266.3,20.5,0],[1431.9,267.9,24.2,0],[1428.4,272,27.3,0],[1424.3,277,27,0],[1420.3,282,26.3,0],[1416.6,287,25.8,0],[1412.9,292,25.3,0],[1409,297,24.6,0],[1405.3,302,24.1,0],[1401.6,307,23.6,0],[1397.7,312,22.9,0],[1394.1,317,22.5,0],[1390.4,322,22,0],[1387,327,21.7,0],[1383.6,332,21.4,0],[1381.3,337,20.5,0],[1380.1,342,19.1,0],[1378.9,347,18.7,0],[1377.9,351.6,19.1,0],[1375,353.4,19.9,1],[1370,355,20.9,1],[1365,358.1,22.1,1],[1360.3,363,23.1,1],[1356.3,367.3,24,1],[1352,372,25.3,1],[1347.3,376.4,26.4,1],[1343,380,27.3,1],[1338.6,381,26.2,0],[1334,379.1,22.5,0],[1329,379,20.6,0],[1324,379,19.3,0],[1319,379,19,0],[1314,378.6,18.7,0],[1309,377.6,18.7,0],[1304,376.6,19.8,0],[1299,374.6,21,0],[1295.1,370,21,0],[1293.1,365,20.5,0],[1292,360,19.7,0],[1291.1,355,19.5,0],[1291,350,19,0],[1291,345,18.3,0],[1291,340,17.2,0],[1291,335,17.4,0],[1291,330,18.9,0],[1291.1,325,21.4,0],[1290.1,320.7,23.7,0],[1288.9,316.4,26.2,0],[1289.7,312,27.6,0],[1292.3,307,26.9,0],[1294.7,302,26.3,0],[1297.1,297,25.9,0],[1299.9,292,25.3,0],[1302.6,287,24.6,0],[1305.4,282,24.2,0],[1308.1,277,23.7,0],[1311.1,272,23.1,0],[1314,267,22.8,0],[1317,262,22.3,0],[1320.1,257,21.8,0],[1323.1,252,21.3,0],[1326.3,247,20.8,0],[1328.6,242,20,0],[1329.6,237,18.5,0],[1330.7,232,18.1,0],[1330.3,228.3,17.3,0],[1326,224,13.1,0],[1321,220.4,10.5,0],[1316,219.1,10.5,0],[1311,217.3,11.7,0],[1306,215.9,13.2,0],[1301,214.7,14.9,0],[1296,213.9,16.2,0],[1291,213.7,16.7,0],[1286,214.7,17.2,0],[1281,216.1,17.8,0],[1276,217.7,18.3,0],[1271,219.6,18.5,0],[1266,221.6,18.7,0],[1261,223.9,18.9,0],[1256,226.7,19.3,0],[1251,229.4,19.4,0],[1246,232.7,19.6,0],[1241,236.1,19.8,0],[1236,239.7,20,0],[1231,243.4,20.2,0],[1226,247.7,20.5,0],[1221,252,20.5,0],[1216,257,21.1,0],[1211,262,21.2,0],[1206.6,267,21.1,0],[1202,272,21.4,0],[1197.1,277,21.7,0],[1193.1,282,21.8,0],[1189.6,287,21.9,0],[1186.1,292,22.1,0],[1183,297,22.1,0],[1179.9,302,22,0],[1176.9,307,21.9,0],[1174.3,312,21.9,0],[1171.7,317,21.6,0],[1169.6,322,21.4,0],[1167.7,327,21.1,0],[1166.3,332,20.7,0],[1165.6,337,20.1,0],[1165,342,19.5,0],[1164.4,347,19.6,0],[1164.6,352,19.5,0],[1165.4,357,19.3,0],[1166.4,362,20.2,0],[1168,367,21.4,0],[1172,371.3,21.5,0],[1177,373.3,20.1,0],[1182,374.4,19.2,0],[1187,374.6,18.6,0],[1192,373.6,17.9,0],[1197,372.6,18.5,0],[1202,371.3,19.5,0],[1207,369.3,20,0],[1212,366.3,20.3,0],[1217,362.9,20.4,0],[1222,359,20.5,0],[1227,355,20.5,0],[1232,350.9,20.5,0],[1237,346.4,20.3,0],[1242,342,20.3,0],[1247,337.7,19.9,0],[1252,333,19.7,0],[1256.6,328.1,19.3,0],[1261,325,18.3,0],[1266,323.3,16.9,0],[1271,321.7,16.7,0],[1276,320.3,17.9,0],[1281,318.6,20.7,0],[1285.9,316.7,24.4,0],[1289.3,318.1,25.1,1],[1289.1,322,22,0],[1285,326,16.3,0],[1280,331,9.2,0],[1275.9,335.6,3.1,0],[1274.4,337.6,1.2,0],[1276.6,334.9,4.1,1],[1281,330,10.6,1],[1286,325,17.7,1],[1290.3,323,22.1,1],[1291.3,327,20.4,1],[1291,332,18.1,1],[1291,337,17.1,1],[1291,342,17.6,1],[1291,347,18.7,1],[1291,352,19.2,1],[1291.4,357,19.6,1],[1292.4,362,20,1],[1293.9,367,20.7,1],[1296.4,372,21.1,1],[1301,375.7,20.6,1],[1306,377,19.3,1],[1311,378,18.6,1],[1316,378.9,18.9,1],[1321,379,19.1,1],[1326,379,19.7,1],[1331,379,21.3,1],[1336,379.9,24,1],[1340.3,381.3,27.2,1],[1344.7,378.6,26.9,1],[1349,374.7,25.9,1],[1353.7,370,24.7,1],[1357.7,365.6,23.7,1],[1362,361,22.8,1],[1367,356.6,21.7,1],[1372,354.3,20.4,1],[1376.6,353,19.5,1],[1378.3,350,18.8,1],[1379.4,345,18.7,1],[1380.6,340,19.7,1],[1381.9,335,21,1],[1384.9,330,21.5,1],[1388.3,325,21.7,1],[1392,320,22.2,1],[1395.6,315,22.7,1],[1399.4,310,23.3,1],[1403.1,305,23.8,1],[1406.7,300,24.2,1],[1410.6,295,24.9,1],[1414.4,290,25.6,1],[1418,285,26,1],[1421.7,280,26.4,1],[1425.9,275,27.3,1],[1429.9,270,26.3,1],[1431.9,265.9,22.7,0],[1431.3,261.9,20.4,0],[1431.7,257,17.3,0],[1432.9,252,14.6,0],[1434.1,247,13.2,0],[1435.4,242,13.6,0],[1436.7,237,15.2,0],[1439.1,232,15.6,0],[1442.3,227,15.7,0],[1445.6,222,15.7,0],[1448.7,217,15.7,0],[1451.9,212,15.7,0],[1455,207,15.8,0],[1458.3,202,15.9,0],[1461.7,197,16,0],[1465,192,16,0],[1468.1,187,15.9,0],[1471.3,182,15.9,0],[1474.7,177,16,0],[1478,172,16,0],[1481.3,167,16,0],[1484.7,162,16.1,0],[1488,157,16.1,0],[1491.1,152,15.9,0],[1494.4,147,15.8,0],[1498.1,142,15.8,0],[1502,137,13.7,0],[1503.1,135.6,12.6,1],[1499.6,140,15.3,1],[1495.9,145,15.8,1],[1492.4,150,15.8,1],[1489.3,155,16,1],[1486,160,16.2,1],[1482.7,165,16,1],[1479.3,170,16,1],[1476,175,16,1],[1472.7,180,16,1],[1469.4,185,15.9,1],[1466.3,190,15.9,1],[1463,195,16,1],[1459.7,200,16,1],[1456.3,205,15.8,1],[1453,210,15.7,1],[1450,215,15.7,1],[1446.9,220,15.7,1],[1443.7,225,15.7,1],[1440.4,230,15.6,1],[1437.6,235,15.5,1],[1435.9,240,14.3,1],[1434.6,245,13.2,1],[1433.4,250,13.7,1],[1432.3,255,16,1],[1431.3,260,19.2,1],[1432.6,262.7,19.9,0],[1437,259,14.1,0],[1442,254,7.1,0],[1446,249.9,1.6,0],[1446.6,249.6,1,0]],[[1468,531.1,11.2,0],[1467.4,527,13.8,0],[1467,522,15.9,0],[1467.9,517,17,0],[1470.4,512,18.4,0],[1473.4,507,19,0],[1476.7,502,19.1,0],[1479.9,497,19.2,0],[1483,492,19.2,0],[1486,487,19.2,0],[1489,482,19.2,0],[1492.1,477,19.4,0],[1495.3,472,19.4,0],[1498.4,467,19.4,0],[1501.4,462,19.4,0],[1504.6,457,19.5,0],[1507.7,452,19.5,0],[1510.9,447,19.6,0],[1514,442,19.6,0],[1517,437,19.6,0],[1520.3,432,19.6,0],[1523.4,427,19.6,0],[1526.4,422,19.7,0],[1529.6,417,19.8,0],[1532.6,412,19.8,0],[1535.6,407,19.8,0],[1538.7,402,19.9,0],[1542,397,20,0],[1545,392,19.9,0],[1548.3,387,20,0],[1551.4,382,20,0],[1554.7,377,20.2,0],[1557.9,372,20.2,0],[1561,367,20.3,0],[1564,362,20.3,0],[1568,357.9,20.4,0],[1573,355.6,19.7,0],[1577.6,354.6,19,0],[1582,358,15.1,0],[1587,362,12.3,0],[1592,365.1,13,0],[1597,369.9,15.3,0],[1602,373.1,17,0],[1607,375,17.7,0],[1612,376.4,18.5,0],[1617,376.7,18.7,0],[1622,375.9,18.4,0],[1627,375.1,18.9,0],[1632,374.1,19.2,0],[1637,372.6,19.7,0],[1642,370.4,19.7,0],[1647,367.9,19.7,0],[1652,365,19.8,0],[1657,362,19.9,0],[1662,358.6,19.8,0],[1667,355,19.7,0],[1672,351.3,19.7,0],[1677,347,19.7,0],[1682,342,19.5,0],[1687,337,19.1,0],[1692,332,19.1,0],[1697,327,19.1,0],[1701.3,322,18.9,0],[1705.6,317,18.8,0],[1709.7,312,18.6,0],[1713.6,307,18.6,0],[1717.3,302,18.5,0],[1720.7,297,18.5,0],[1724,292,18.5,0],[1727.1,287,18.4,0],[1730.3,282,18.4,0],[1733.3,277,18.6,0],[1735.6,272,18.4,0],[1738,267,18.4,0],[1740.1,262,18.5,0],[1741.4,257,17.9,0],[1742.4,252,17.5,0],[1743.4,247,17.7,0],[1744.4,242,18.4,0],[1745.3,237,19.3,0],[1746.1,232,20.6,0],[1746.9,227,22.8,0],[1746,222,24.5,0],[1743.6,217.4,23.5,0],[1739,216.4,21.8,0],[1734,217.4,19.8,0],[1729,218.3,17.3,0],[1724,219.4,15.6,0],[1719,220.4,14.6,0],[1714,221.4,14.5,0],[1709,222.7,15.1,0],[1704,224.9,15.4,0],[1699,227.9,15.3,0],[1694,231.1,15.4,0],[1689,234.9,15.5,0],[1684,238.6,15.6,0],[1679,242.6,15.7,0],[1674,246.7,15.7,0],[1669,251,15.9,0],[1664,255.4,15.8,0],[1659,258.3,15,0],[1654,260,13.6,0],[1649,261.7,13.9,0],[1644,263.3,15.9,0],[1639,265,19.3,0],[1634.3,266.7,23.2,0],[1630.4,270,27.1,0],[1626.6,275,27.7,0],[1622.4,280,26.8,0],[1618.4,285,26.1,0],[1614.4,290,25.4,0],[1610.7,295,24.9,0],[1606.9,300,24.1,0],[1603.3,305,23.8,0],[1599.4,310,23.1,0],[1595.7,315,22.6,0],[1592.3,320,22.3,0],[1588.7,325,21.9,0],[1585.1,330,21.5,0],[1582.1,335,21.3,0],[1580.6,340,20.2,0],[1579.4,345,19.3,0],[1578.4,350,19.6,0],[1578,352.7,19.9,1],[1578.6,349,19.5,1],[1579.6,344,19.5,1],[1580.9,339,20.4,1],[1582.6,334,21.3,1],[1585.9,329,21.6,1],[1589.4,324,22,1],[1593,319,22.4,1],[1596.4,314,22.7,1],[1600.3,309,23.3,1],[1604,304,23.8,1],[1607.6,299,24.2,1],[1611.6,294,25.1,1],[1615.3,289,25.6,1],[1619.3,284,26.3,1],[1623.3,279,27,1],[1627.4,274,27.9,1],[1631.1,269.1,26.5,1],[1633,265,22.7,0],[1632.3,260.9,20.4,0],[1632.6,256,17.5,0],[1633.9,251,14.6,0],[1635.1,246,13.2,0],[1636.4,241,13.6,0],[1637.7,236,15.2,0],[1640,231,15.6,0],[1643.1,226,15.6,0],[1646.3,221,15.7,0],[1649.6,216,15.7,0],[1652.7,211,15.8,0],[1656,206,15.9,0],[1659.3,201,16,0],[1662.6,196,15.9,0],[1665.7,191,15.9,0],[1669,186,16,0],[1672.3,181,16,0],[1675.7,176,16,0],[1679,171,16,0],[1682.3,166,16.1,0],[1685.6,161,16,0],[1688.7,156,16,0],[1692,151,15.8,0],[1695.4,146,15.8,0],[1699.3,141,15.7,0],[1703,136.1,13.1,0],[1703,136.1,13.1,1],[1699.3,141,15.7,1],[1695.4,146,15.8,1],[1692,151,15.8,1],[1688.7,156,16,1],[1685.6,161,16,1],[1682.3,166,16.1,1],[1679,171,16,1],[1675.7,176,16,1],[1672.3,181,16,1],[1669,186,16,1],[1665.7,191,15.9,1],[1662.6,196,15.9,1],[1659.3,201,16,1],[1656,206,15.9,1],[1652.7,211,15.8,1],[1649.6,216,15.7,1],[1646.3,221,15.7,1],[1643.1,226,15.6,1],[1640,231,15.6,1],[1637.7,236,15.2,1],[1636.4,241,13.6,1],[1635.1,246,13.2,1],[1633.9,251,14.6,1],[1632.6,256,17.5,1],[1632.3,260.9,20.4,1],[1635.1,260.9,18.2,0],[1640,256,11.3,0],[1644.9,251.1,4.4,0],[1647.6,248.4,.9,0],[1647.6,248.6,1,0]]]},Email:{W:1162,H:409,d:"M109.75 142.75Q109.75 159.0 166.5 159.0Q180.5 159.0 187.25 156.0Q205.0 147.5 230.875 147.5Q256.75 147.5 256.75 160.75Q256.75 166.0 252.375 176.125Q248.0 186.25 245.875 188.5Q243.75 190.75 229.75 194.625Q215.75 198.5 211.625 198.875Q207.5 199.25 206.125 199.5Q204.75 199.75 202.875 200.0Q201.0 200.25 194.5 201.375Q188.0 202.5 185.0 201.25Q102.25 242.0 71.25 290.75Q57.25 312.75 57.25 328.5Q57.25 353.25 91.5 353.25Q118.25 353.25 159.5 332.25Q200.75 311.25 232.625 281.375Q264.5 251.5 264.5 229.5Q264.5 222.5 275.0 222.5Q299.25 222.5 299.25 251.25Q299.25 264.75 287.5 283.375Q275.75 302.0 254.75 321.125Q233.75 340.25 208.0 356.75Q182.25 373.25 150.875 383.75Q119.5 394.25 97.75 394.25Q76.0 394.25 62.625 390.125Q49.25 386.0 37.5 377.75Q12.0 360.0 12.0 324.0Q12.0 304.5 22.5 284.375Q33.0 264.25 50.0 247.75Q81.25 216.75 117.0 196.25Q65.5 184.5 65.5 143.25Q65.5 96.75 137.0 58.25Q176.75 37.0 223.25 27.75Q245.25 23.25 260.0 23.25Q290.0 23.25 305.25 28.0Q314.5 32.5 320.25 40.625Q326.0 48.75 326.0 54.625Q326.0 60.5 324.5 65.25Q323.0 70.0 319.5 72.75Q314.5 76.5 308.25 78.5Q302.0 80.5 301.0 81.0Q281.5 89.25 267.5 89.25Q242.5 89.25 240.25 82.75Q240.75 76.25 245.75 67.75Q222.0 68.75 196.5 77.375Q171.0 86.0 152.375 97.625Q133.75 109.25 121.75 121.75Q109.75 134.25 109.75 142.75ZM289.0 388.75 276.75 388.25H272.25Q269.75 387.5 266.875 385.25Q264.0 383.0 262.5 382.0Q261.0 381.0 261.0 378.375Q261.0 375.75 263.0 369.25Q311.75 262.0 357.25 197.75Q362.25 190.75 373.375 187.125Q384.5 183.5 395.0 183.5Q401.25 183.5 401.25 193.25Q401.25 196.0 399.25 200.625Q397.25 205.25 389.25 215.75Q381.25 226.25 370.25 239.75Q359.25 253.25 357.75 255.25Q392.0 219.75 419.625 202.375Q447.25 185.0 459.625 185.0Q472.0 185.0 478.625 192.125Q485.25 199.25 485.25 207.375Q485.25 215.5 484.125 220.875Q483.0 226.25 480.0 232.125Q477.0 238.0 474.875 242.125Q472.75 246.25 467.75 252.875Q462.75 259.5 460.875 262.0Q459.0 264.5 453.125 271.5Q447.25 278.5 446.75 279.25Q453.75 272.25 466.25 258.5Q478.75 244.75 487.375 235.5Q496.0 226.25 509.0 214.625Q522.0 203.0 533.25 195.75Q560.25 178.75 588.0 178.75Q597.5 178.75 604.0 184.75Q610.5 190.75 610.5 199.125Q610.5 207.5 590.25 239.125Q570.0 270.75 549.875 302.625Q529.75 334.5 529.75 342.75Q529.75 354.25 534.0 356.375Q538.25 358.5 544.25 358.0Q550.25 357.5 561.125 350.25Q572.0 343.0 580.5 335.25Q594.25 322.75 606.0 311.0Q608.5 308.75 611.5 308.75Q616.25 308.75 617.25 316.0Q618.25 323.25 618.25 331.0Q618.25 338.75 616.75 341.75Q609.5 355.75 584.75 376.0Q560.0 396.25 537.25 396.25Q534.5 396.25 533.25 396.0Q507.5 393.5 497.625 381.875Q487.75 370.25 487.75 354.25Q487.75 338.25 498.625 315.5Q509.5 292.75 522.5 274.25Q535.5 255.75 546.375 240.875Q557.25 226.0 557.25 224.75Q557.25 223.5 555.25 223.5Q547.5 223.5 520.75 248.5Q475.0 291.25 441.75 331.0Q433.0 341.5 400.25 384.25Q396.5 389.25 388.375 389.25Q380.25 389.25 371.5 386.125Q362.75 383.0 362.75 378.0Q362.75 375.5 402.5 307.875Q442.25 240.25 442.25 234.125Q442.25 228.0 434.875 228.0Q427.5 228.0 404.5 250.0Q341.25 310.5 306.5 370.25Q304.25 373.75 297.75 381.25Q291.25 388.75 289.0 388.75ZM791.25 197.25Q810.25 197.25 810.25 210.25Q810.25 217.25 807.0 220.5Q803.75 223.75 793.125 242.125Q782.5 260.5 769.625 289.125Q756.75 317.75 753.0 338.0Q752.25 340.5 752.25 345.0Q752.25 358.75 759.75 358.75Q767.25 358.75 777.5 351.625Q787.75 344.5 795.75 336.375Q803.75 328.25 811.375 319.75Q819.0 311.25 820.5 310.0Q822.0 308.75 825.0 308.75Q829.75 308.75 830.75 316.0Q831.75 323.25 831.75 331.0Q831.75 338.75 830.25 341.75Q823.0 356.0 798.375 376.0Q773.75 396.0 753.625 396.0Q733.5 396.0 724.0 383.75Q714.5 371.5 714.5 356.625Q714.5 341.75 719.5 330.5Q698.75 357.5 671.875 376.25Q645.0 395.0 628.0 395.0Q611.0 395.0 600.25 384.75Q586.5 372.0 586.5 349.375Q586.5 326.75 596.625 303.875Q606.75 281.0 623.25 262.125Q639.75 243.25 659.5 227.75Q701.0 195.25 736.0 195.25Q749.5 195.25 758.0 199.75Q766.5 204.25 768.75 211.0Q774.75 202.0 778.875 199.625Q783.0 197.25 791.25 197.25ZM758.0 225.0Q715.25 225.0 669.5 272.5Q653.25 289.5 639.625 313.25Q626.0 337.0 626.0 345.75Q626.0 354.5 631.0 354.5Q638.0 354.5 670.0 326.875Q702.0 299.25 712.5 286.25Q724.0 271.75 758.0 225.0ZM971.75 112.75Q971.75 127.0 958.5 141.375Q945.25 155.75 930.875 155.75Q916.5 155.75 916.5 140.75Q916.5 125.75 929.125 112.125Q941.75 98.5 957.0 98.5Q963.75 98.5 967.75 102.25Q971.75 106.0 971.75 112.75ZM931.25 331.0Q931.25 338.5 929.75 341.75Q917.5 366.75 890.75 382.125Q864.0 397.5 844.25 397.5Q824.5 397.5 810.25 384.25Q796.0 371.0 796.0 357.25Q796.0 343.5 809.75 317.25Q823.5 291.0 837.25 268.75Q851.0 246.5 851.0 244.625Q851.0 242.75 845.875 237.25Q840.75 231.75 840.75 229.125Q840.75 226.5 851.125 215.375Q861.5 204.25 876.375 193.375Q891.25 182.5 899.125 182.5Q907.0 182.5 913.25 189.5Q919.5 196.5 919.5 202.25Q919.5 208.0 860.0 310.5Q859.25 312.0 855.875 317.125Q852.5 322.25 850.625 325.625Q848.75 329.0 846.25 333.75Q841.25 343.75 841.25 350.5Q841.25 359.0 852.75 359.0Q864.25 359.0 876.625 351.125Q889.0 343.25 898.0 333.75Q921.5 308.5 924.75 308.5Q931.25 308.5 931.25 331.0ZM1048.25 211.25Q1004.75 266.75 964.75 311.0Q964.5 314.0 962.625 322.125Q960.75 330.25 960.75 338.5Q960.75 346.75 968.375 353.375Q976.0 360.0 987.25 360.0Q998.5 360.0 1011.375 352.0Q1024.25 344.0 1033.75 334.25Q1058.75 308.5 1064.75 308.5Q1070.75 308.5 1070.75 326.75V331.75Q1070.75 341.5 1067.25 346.0Q1046.25 371.75 1020.0 384.375Q993.75 397.0 970.25 397.0Q946.75 397.0 934.5 382.625Q922.25 368.25 922.25 343.25Q922.25 294.5 948.375 228.625Q974.5 162.75 1007.25 116.5Q1081.0 12.0 1120.0 12.0Q1132.0 12.0 1141.125 19.125Q1150.25 26.25 1150.25 40.25Q1150.25 54.25 1134.75 84.125Q1119.25 114.0 1097.5 145.125Q1075.75 176.25 1048.25 211.25ZM1108.75 53.5Q1108.75 49.75 1106.25 49.75Q1097.5 49.75 1060.25 99.75Q1023.0 149.75 1006.375 179.5Q989.75 209.25 975.0 254.25Q1004.5 219.25 1056.625 145.125Q1108.75 71.0 1108.75 53.5Z",strokes:[[[238.1,163.4,16.5,0],[234,165.1,18.8,0],[229,166.9,20.9,0],[224,169.1,22.7,0],[219,171,24,0],[214,172.6,24.9,0],[209,174.1,24.7,0],[204,175.6,24.2,0],[199,176.9,23.6,0],[194,177.9,23.3,0],[189,178,22.9,0],[184,178.1,22,0],[179,178.9,22,0],[174,179,22,0],[169,179,22,0],[164,179.1,22.1,0],[159,180,23,0],[154,181,24,0],[149,182,25,0],[144,183.1,26.2,0],[140.3,185.4,27.1,0],[137.7,190,24.5,0],[135.3,195,21.4,0],[133.1,200,19.7,0],[130.9,205,19.2,0],[128.4,209.7,19.8,0],[124,213.3,19.7,0],[119,216.4,19.8,0],[114,219.7,20,0],[109,223,20,0],[104,226.6,20.2,0],[99,230.6,20.4,0],[94,234.6,20.5,0],[89,239,20.9,0],[84,243.4,21,0],[79,248,21.2,0],[74,253,21.6,0],[69.1,257.3,21.7,0],[65,262,22.2,0],[61,267,22.4,0],[56.9,272,22.6,0],[52.9,277,22.9,0],[49.6,282,23,0],[46.4,287,23.2,0],[44,292,23.2,0],[41.4,297,23.4,0],[39.6,302,23.2,0],[38.3,307,22.8,0],[37.4,312,22.2,0],[36.6,317,22.1,0],[36,322,22,0],[36,327,22,0],[36.6,332,21.4,0],[37.6,337,20.9,0],[38.6,342,21.1,0],[40,347,21.5,0],[42.1,352,21.9,0],[46,357,22,0],[51,361.6,21.5,0],[56,364.6,21.1,0],[61,366.7,20.8,0],[66,368.3,20.2,0],[71,369.6,20,0],[76,370.4,19.8,0],[81,371.1,19.8,0],[86,371.9,19.9,0],[91,372,20,0],[96,372,20.1,0],[101,372,20.7,0],[106,371.4,20.6,0],[111,370.9,20.9,0],[116,370,21.1,0],[121,369,21.4,0],[126,367.9,21.7,0],[131,366.6,21.9,0],[136,365.1,22.1,0],[141,363.3,22.2,0],[146,361.7,22.4,0],[151,359.7,22.5,0],[156,357.6,22.7,0],[161,355.4,22.9,0],[166,353.3,23,0],[171,350.7,23.2,0],[176,348,23.1,0],[181,345.3,23.1,0],[186,342.7,23.3,0],[191,339.9,23.3,0],[196,336.7,23.2,0],[201,333.3,23.2,0],[206,330,23.2,0],[211,326.4,23.1,0],[216,322.6,23,0],[221,319,22.9,0],[226,315.3,23,0],[231,311.1,23,0],[236,306.9,22.9,0],[241,302.7,22.8,0],[246,298.1,22.9,0],[250.9,293.9,22.5,0],[255.1,289,22.5,0],[259.6,284,22.4,0],[263.4,279,22.1,0],[267.3,274,22,0],[270.6,269,21.7,0],[273.4,264,21.5,0],[275.7,259,20.9,0],[278.1,254,20.7,0],[279,249,19.7,0],[278.3,244,17.4,0],[276.9,239,14.8,0],[276.4,237.6,14.1,1],[277.7,242,16.3,1],[278.9,247,18.9,1],[278.7,252,20.4,1],[276.7,257,20.8,1],[274.4,262,21.3,1],[271.9,267,21.7,1],[268.7,272,21.9,1],[265,277,22,1],[261.1,282,22.2,1],[257,287,22.5,1],[252.6,292,22.5,1],[248,296.4,22.7,1],[243,301,22.9,1],[238,305.3,22.8,1],[233,309.4,23,1],[228,313.6,23,1],[223,317.6,23,1],[218,321.1,22.9,1],[213,324.9,23.1,1],[208,328.6,23.1,1],[203,332,23.2,1],[198,335.3,23.2,1],[193,338.6,23.3,1],[188,341.6,23.3,1],[183,344.3,23.2,1],[178,346.9,23.1,1],[173,349.7,23.2,1],[168,352.3,23.1,1],[163,354.6,23,1],[158,356.7,22.8,1],[153,358.9,22.6,1],[148,361,22.5,1],[143,362.7,22.3,1],[138,364.4,22,1],[133,366.1,22,1],[128,367.4,21.8,1],[123,368.6,21.5,1],[118,369.6,21.2,1],[113,370.6,21,1],[108,371.1,20.6,1],[103,371.9,20.8,1],[98,372,20.3,1],[93,372,20,1],[88,372,20,1],[83,371.4,19.8,1],[78,370.7,19.8,1],[73,369.9,19.8,1],[68,368.7,20,1],[63,367.4,20.6,1],[58,365.4,21,1],[53,363,21.3,1],[48,359,21.8,1],[43.4,354,22,1],[40.9,349,21.6,1],[39.1,344,21.2,1],[38,339,20.9,1],[37,334,21.1,1],[36.1,329,21.9,1],[36,324,22,1],[36.3,319,22,1],[37.1,314,22.1,1],[37.9,309,22.6,1],[39,304,23.1,1],[40.6,299,23.4,1],[43,294,23.3,1],[45.6,289,23.2,1],[48.3,284,23.1,1],[51.6,279,23,1],[55.1,274,22.7,1],[59.4,269,22.4,1],[63.4,264,22.3,1],[67.4,259,21.8,1],[72,254.7,21.6,1],[77,250,21.3,1],[82,245.1,21.1,1],[87,240.9,21,1],[92,236.3,20.6,1],[97,232.3,20.4,1],[102,228.3,20.4,1],[107,224.4,20.1,1],[112,221,20,1],[117,217.7,19.9,1],[122,214.6,19.7,1],[126.9,211.3,19.8,1],[130,207,19.5,1],[132.3,202,19.4,1],[134.4,197,20.6,1],[136.7,192,23.1,1],[139.3,187,26.5,1],[139.4,182.7,26,0],[135,178.1,22.1,0],[130,176,20.6,0],[125,175.3,20.8,0],[120,174,20.7,0],[115,172.9,21.1,0],[110,171.3,21.4,0],[105,169.3,21.8,0],[100,166.4,22.3,0],[95.1,162,22.7,0],[92,157,22.4,0],[90.6,152,21.5,0],[89.6,147,20.9,0],[89,142,21,0],[89.6,137,20.9,0],[90.6,132,21.3,0],[91.6,127,22,0],[93.4,122,22.6,0],[96.6,117,22.6,0],[100.4,112,22.6,0],[105,107,22.6,0],[110,102,22.6,0],[115,97.6,22.3,0],[120,93.4,22.1,0],[125,89.6,22,0],[130,86,21.8,0],[135,82.9,21.7,0],[140,79.7,21.6,0],[145,76.7,21.5,0],[150,74.3,21.5,0],[155,71.7,21.5,0],[160,69.3,21.4,0],[165,66.9,21.2,0],[170,64.9,21.2,0],[175,62.9,21.3,0],[180,60.9,21.1,0],[185,59,21.1,0],[190,57.3,21.1,0],[195,55.7,21.1,0],[200,54.3,21,0],[205,53.1,21,0],[210,51.9,21,0],[215,50.6,21.2,0],[220,49.9,21,0],[225,48.9,21.2,0],[230,48,21.3,0],[235,47.7,21.1,0],[240,47,21.2,0],[245,46.9,21.2,0],[250,46.1,22.7,0],[255,46,23.9,0],[260,45.7,23.7,0],[264.9,45.4,23.4,0],[268.9,49,27,0],[272.4,52.6,30.5,0],[277,53,30.5,0],[282,53.3,30.2,0],[287,54,30.1,0],[292,54.4,28.1,0],[297,55,25.9,0],[301.6,55.6,23.9,0],[302.1,55.7,23.6,0]],[[244.9,80.7,5.7,0],[249,79.1,8.6,0],[254,76.4,12.2,0],[259,72,15.7,0],[263.6,67,19.7,0],[267,62,23.8,0],[270,57,28.3,0],[271.7,53.9,30.7,0]],[[271.9,374.9,11.5,0],[276,373.7,14.7,0],[280.6,370.9,17.6,0],[284,366,19.2,0],[286.9,361,19.6,0],[290.1,356,20.6,0],[293,351,21,0],[295.7,346,21.2,0],[298.3,341,21.3,0],[301.1,336,21.6,0],[304,331,22,0],[306.7,326,22.5,0],[309.9,321,23.1,0],[313,316,23.7,0],[316.1,311,24,0],[319.1,306,24.3,0],[322.6,301,25.1,0],[325.9,296,25.8,0],[329,291,26,0],[332.3,286,26.6,0],[335.9,281,27.3,0],[339.4,276,28,0],[343.1,271,28.6,0],[346.7,266,28.9,0],[350.6,261.1,25.2,0],[355,256.1,18.5,0],[360,251,11.3,0],[364.9,246.1,4.4,0],[367.7,243.3,.9,0],[365.7,245.4,3.4,1],[361,250,9.9,1],[356,255,17,1],[353.8,259.2,21.7,0],[358,259,18.9,0],[363,257.3,15.2,0],[368,255.7,12.9,0],[373,254,12.3,0],[378,252.3,13.7,0],[383,249.7,15.4,0],[388,245,15.6,0],[393,240,15.1,0],[398,235.1,14.7,0],[403,230.9,14.7,0],[408,226.6,14.5,0],[413,222.9,14.5,0],[418,219.6,14.7,0],[423,217.1,14.5,0],[428,215.9,13.9,0],[433,214.6,14.5,0],[438,213.4,15.6,0],[443,212.3,17.5,0],[448,211.3,20.4,0],[453,210.1,23.6,0],[457.9,210.6,25.1,0],[460,215,24.7,0],[459.1,220,22.1,0],[458,225,18.8,0],[456.9,230,16.2,0],[455.6,235,14.7,0],[454.4,240,14.7,0],[453.9,245,15.2,0],[453.1,250,13.6,0],[452.3,255,11.3,0],[451.3,260,10.1,0],[450.3,265,11.3,0],[450.7,269.6,12.9,0],[451.6,273.1,14.5,0],[450.4,277.3,18.5,0],[447.1,282,24.2,0],[443.6,287,26.5,0],[440.3,292,26.3,0],[436.4,297,25.4,0],[432.9,302,24.8,0],[429.3,307,24.2,0],[425.7,312,23.7,0],[422.3,317,23.1,0],[418.9,322,22.8,0],[415.4,327,22.4,0],[412.1,332,22,0],[408.7,337,21.6,0],[405.3,342,21.2,0],[401.9,347,20.7,0],[398.7,352,20.4,0],[395.1,357,19.8,0],[392,362,19.6,0],[388.6,367,19.1,0],[384.9,371.9,17.1,0],[380,374.6,13.8,0],[375,376.1,11,0],[372.3,376.9,9.3,1],[376,375.9,11.5,1],[381,374.1,14.4,1],[385.7,371,17.7,1],[389.1,366,19.1,1],[392.6,361,19.6,1],[395.9,356,19.9,1],[399.3,351,20.4,1],[402.6,346,20.8,1],[406,341,21.3,1],[409.4,336,21.7,1],[412.9,331,22.2,1],[416.1,326,22.5,1],[419.6,321,22.8,1],[423,316,23.2,1],[426.6,311,23.9,1],[430,306,24.3,1],[433.6,301,24.9,1],[437.3,296,25.6,1],[441,291,26.4,1],[444.1,286,26.4,1],[447.9,281,23.1,1],[451.4,276.6,17.4,1],[456,274.3,13.4,0],[461,272.7,10.9,0],[466,271,10.5,0],[471,269.3,12.3,0],[476,267.6,15.1,0],[481,264,16.3,0],[486,259,16.5,0],[491,254,17,0],[496,249,17,0],[501,244,17,0],[506,239,17.3,0],[511,234.3,17.2,0],[516,230,17.1,0],[521,225.1,17.2,0],[526,221,17.1,0],[531,217,17.2,0],[536,213.4,17.3,0],[541,210.7,17.3,0],[546,209.1,16.5,0],[551,207.9,16.4,0],[556,206.7,17.4,0],[561,205.7,19.3,0],[566,204.7,22.2,0],[571,203.9,24.2,0],[575.4,204.1,25.2,0],[575.9,207.9,25.8,0],[574.7,213,22.6,0],[573.6,218,19.6,0],[572.4,223,17.5,0],[571.1,228,16.4,0],[569.9,233,16.6,0],[568.6,238,17.8,0],[566,243,18.4,0],[562.4,248,18.5,0],[559,253,18.8,0],[555.7,258,19,0],[552.3,263,19.1,0],[548.7,268,19.2,0],[545.7,273,19.3,0],[542.3,278,19.6,0],[539,283,19.7,0],[535.4,288,19.9,0],[532,293,19.8,0],[529,298,19.9,0],[526.1,303,19.9,0],[523.3,308,19.9,0],[520.7,313,19.9,0],[517.9,318,19.9,0],[515.4,323,19.8,0],[513.9,328,19.5,0],[512.9,333,18.8,0],[512,338,18.4,0],[511.1,343,18.9,0],[510.4,348,19.8,0],[510.1,353,20.9,0],[511,358,21.3,0],[512.4,363,22,0],[515.3,368,22.3,0],[520,371.7,21.4,0],[525,373.6,20.5,0],[530,374.4,19.5,0],[535,375,18.9,0],[540,374.7,17.8,0],[545,373.9,17.1,0],[550,372.9,17.1,0],[555,371.7,17.7,0],[560,369.9,18.2,0],[565,367.1,18.1,0],[570,364.1,18.1,0],[575,360.7,17.9,0],[580,358.6,16.8,0],[585,357.1,15.8,0],[590,355.7,16.4,0],[595,354.3,18.5,0],[600,352.7,21.8,0],[604.4,350.9,22.3,0],[606.6,347,20.4,0],[607.4,342,19.6,0],[608,337,19.5,0],[608.7,332,20,0],[609.4,327,20.8,0],[611,322,21.1,0],[613,317,21.5,0],[615.3,312,21.7,0],[617.7,307,21.9,0],[620.4,302,21.9,0],[623.7,297,22,0],[626.6,292,21.9,0],[629.9,287,22,0],[633.6,282,21.9,0],[637.3,277,21.9,0],[641.4,272,21.6,0],[646,267,21.5,0],[651,262,21.1,0],[655.3,257,20.9,0],[660,252.4,20.6,0],[665,248,20.6,0],[670,243.3,20.3,0],[675,239.4,20.2,0],[680,235.7,20,0],[685,232.1,19.9,0],[690,228.7,19.6,0],[695,225.6,19.5,0],[700,222.7,19.3,0],[705,220.3,19.1,0],[710,218,18.8,0],[715,215.9,18.5,0],[720,214,18,0],[725,212.6,17.5,0],[730,211.4,17.1,0],[735,210.7,16.5,0],[740,211.1,15.9,0],[745,212,14.3,0],[750,213.3,12.7,0],[755,215,11.1,0],[760,216.7,10.4,0],[765,218.4,11.1,0],[770,223,15,0],[772.9,227.3,18,0],[772.3,232,18.4,0],[771.3,237,19.5,0],[769.7,242,20.7,0],[766.9,247,21.1,0],[763.7,252,21.6,0],[760.9,257,22,0],[757.9,262,22.5,0],[754.7,267,23,0],[751.9,272,23.4,0],[749.1,277,23.8,0],[746.3,282,24.4,0],[743.6,287,25,0],[740.7,292,25.7,0],[738.3,297,26.1,0],[735.6,302,27,0],[733.1,307,27.6,0],[731.4,311.7,27.2,0],[733.6,316,24.1,0],[734.3,321,22.1,0],[734,326,20.2,0],[734,331,18.5,0],[733.9,335.7,18,0],[733.9,340,18.5,0],[734,345,19,0],[734,350,19.1,0],[734.4,355,19.3,0],[735.4,360,19.9,0],[736.9,365,20.8,0],[740.1,370,21.2,0],[745,373.3,20.6,0],[750,374.4,19.3,0],[755,374.6,17.9,0],[760,373.6,16.6,0],[765,372.6,15.8,0],[770,371.4,15.9,0],[775,370.1,16.4,0],[780,367.9,16.7,0],[785,364.9,16.8,0],[790,362.1,16.3,0],[795,360.6,15.4,0],[800,359.1,15.9,0],[805,357.7,17.8,0],[810,356.1,21,0],[815,354.7,24.1,0],[819.1,352.9,22.9,0],[821,349,21,0],[822.6,344,19.5,0],[823.6,339,19.5,0],[824.6,334,20,0],[826,329,20.6,0],[828.3,324,20.7,0],[830.7,319,20.6,0],[833.3,314,20.7,0],[836,309,20.7,0],[839.1,304,20.8,0],[842.1,299,21,0],[845,294,21,0],[848,289,21,0],[851,284,21,0],[854,279,20.9,0],[856.9,274,20.8,0],[859.7,269,20.8,0],[862.6,264,20.8,0],[864.9,259,20.3,0],[866,254,18.9,0],[867.1,249,18.5,0],[868.3,244,19.3,0],[869.4,239,20.9,0],[871.6,234,24.3,0],[875.3,229,26.9,0],[879.1,224,26.2,0],[883.3,219,25,0],[887.3,214,23.9,0],[891.4,209,22.7,0],[895.4,204.6,21.3,0],[894,206,21.8,1],[889.7,211,23.2,1],[885.6,216,24.5,1],[881.6,221,25.5,1],[877.4,226,26.7,1],[873.7,231,26.2,1],[870.4,236,22.6,1],[868.9,241,20,1],[867.7,246,18.8,1],[866.6,251,18.4,1],[865.6,256,19.4,1],[864.1,261,20.7,1],[861.4,266,20.7,1],[858.6,271,20.8,1],[855.7,276,20.8,1],[852.9,281,20.9,1],[849.9,286,21,1],[846.9,291,21,1],[843.9,296,21,1],[841,301,21,1],[838,306,20.8,1],[834.9,311,20.7,1],[832.3,316,20.6,1],[829.7,321,20.6,1],[827.4,326,20.6,1],[825.4,331,20.3,1],[824.3,336,19.7,1],[823.3,341,19.2,1],[822,346,20,1],[820.4,350.9,21.6,1],[821,355.1,21.3,0],[822.6,360,21.1,0],[824,365,22,0],[827.1,369.9,22.2,0],[832,373,21.3,0],[837,374.4,20.1,0],[842,375.3,19.1,0],[847,375.4,18.5,0],[852,374.7,17.7,0],[857,373.7,16.7,0],[862,372.9,16.3,0],[867,372,16.6,0],[872,370.9,17.1,0],[877,369,17.4,0],[882,366.6,17.5,0],[887,363.4,17.5,0],[892,359.7,17.4,0],[897,355.7,17.3,0],[902,351.7,17.2,0],[906.7,347,16.9,0],[911,343.1,16.3,0],[916,341.3,15.1,0],[921,339.7,15.5,0],[926,338,17.6,0],[931,336.3,20.8,0],[936,334.7,23.2,0],[939.1,332.6,22,0],[941,328,20.7,0],[942.3,323,20,0],[943.1,318,20.1,0],[943.9,313,20.3,0],[944.6,308,20.2,0],[945.6,303,20.3,0],[946.6,298,20.3,0],[948.1,293,20.8,0],[950.9,288,22.2,0],[953.4,283,23.5,0],[956.4,278,25.1,0],[959,273,26,0],[961,268.6,25,0],[960.3,265,23.2,0],[959.3,261,21.4,0],[960.1,256,18.3,0],[960.9,251,16.4,0],[961.7,246,15.7,0],[962.6,241,16.2,0],[963.4,236,17,0],[964.9,231,17.3,0],[966.9,226,17.1,0],[968.7,221,17.1,0],[970.4,216,16.9,0],[972.7,211,16.9,0],[974.9,206,16.8,0],[977.3,201,16.7,0],[979.4,196,16.8,0],[981.7,191,16.7,0],[984.3,186,16.7,0],[986.7,181,16.6,0],[989.3,176,16.6,0],[991.9,171,16.7,0],[994.7,166,16.8,0],[997.4,161,16.9,0],[1000.4,156,17,0],[1003.4,151,17,0],[1006.4,146,17,0],[1009.7,141,17.2,0],[1013,136,17.2,0],[1016.3,131,17.2,0],[1019.9,126,17.2,0],[1023.4,121,17.2,0],[1027,116,17.2,0],[1030.7,111,17.2,0],[1034.4,106,17.1,0],[1038.1,101,17,0],[1041.9,96,17,0],[1045.7,91,16.9,0],[1049.7,86,16.9,0],[1053.6,81,16.7,0],[1057.4,76,16.6,0],[1061.6,71,16.4,0],[1065.6,66,16.2,0],[1070,61,16.3,0],[1075,56,16,0],[1080,51,15.6,0],[1085,46,15.6,0],[1090,41.6,15.4,0],[1095,38.3,15.2,0],[1100,36.6,14.5,0],[1105,35.4,14.7,0],[1110,34.1,16.5,0],[1115,33,19.2,0],[1120,32.7,21.4,0],[1124.3,36,22.7,0],[1125.9,41,21.4,0],[1125.6,46,19.3,0],[1124.6,51,17.6,0],[1123.7,56,16.8,0],[1122.7,61,16.5,0],[1121.7,66,16.8,0],[1120.3,71,17.2,0],[1118.6,76,17.6,0],[1115.9,81,17.3,0],[1113.3,86,17.3,0],[1110.6,91,17.5,0],[1107.7,96,17.5,0],[1104.9,101,17.5,0],[1102,106,17.5,0],[1099,111,17.6,0],[1095.7,116,17.6,0],[1092.3,121,17.6,0],[1089,126,17.6,0],[1085.7,131,17.5,0],[1082.3,136,17.4,0],[1078.7,141,17.3,0],[1075.1,146,17.3,0],[1071.7,151,17.2,0],[1068.3,156,17.1,0],[1064.7,161,17.1,0],[1061.1,166,17.1,0],[1057.4,171,17.1,0],[1053.7,176,17,0],[1050.1,181,16.9,0],[1046.6,186,16.9,0],[1042.9,191,16.7,0],[1038.9,196,16.5,0],[1035,201,16.4,0],[1031.4,206,16.4,0],[1027.4,211,16.3,0],[1023.4,216,16.2,0],[1019.4,221,16,0],[1015.6,226,15.9,0],[1011.9,231,15.8,0],[1008,236,15.8,0],[1004,241,15.7,0],[1e3,246,15.6,0],[996,251,15.6,0],[991.9,256,15.6,0],[987,259.9,14.9,0],[982,262,14.1,0],[977,263.7,14.8,0],[972,265.6,17.4,0],[967,267.4,21,0],[962.4,268.4,24.2,0],[961.4,265.4,22.6,1],[965,261,17,0],[970,256,9.9,0],[974.6,251.3,3.4,0],[976.6,249.4,1.2,0],[973.9,252.1,4.4,1],[969,257,11.3,1],[964,262,18.4,1],[961.2,266.3,23.4,1],[960.4,270.3,25.7,1],[957.9,275,25.6,1],[955.1,280,24.4,1],[952.4,285,23,1],[949.9,290,21.7,1],[947.4,295,20.5,1],[946.3,300,20.4,1],[945.3,305,20.3,1],[944.3,310,20.3,1],[943.6,315,20.3,1],[942.7,320,20.1,1],[941.7,325,20.4,1],[940.1,330,21.3,1],[939.7,334.4,21.3,0],[941.1,339,19.9,0],[941.9,344,19.7,0],[942.4,349,20.5,0],[943.3,354,21.1,0],[945.1,359,21.8,0],[948,364,22.6,0],[952,368.7,22.8,0],[957,372.1,22.6,0],[962,374.6,21.7,0],[967,375.9,20.9,0],[972,376,19.6,0],[977,376,18.4,0],[982,375.3,17.3,0],[987,374.6,16.6,0],[992,373.7,15.7,0],[997,373,15.4,0],[1002,372.3,16.1,0],[1007,371,16.6,0],[1012,369,16.9,0],[1017,366.4,16.9,0],[1022,363.6,17,0],[1027,360.3,17.1,0],[1032,356.4,17.1,0],[1037,352.6,17.1,0],[1042,348,17.6,0],[1047,343,17.5,0],[1052,338,16.8,0],[1056.3,333,14.6,0],[1059.4,328,11.6,0],[1061.1,323,9.9,0],[1062.6,318,8,0],[1063.3,315.3,6.7,1],[1062.3,319,8.4,1],[1060.9,324,10.1,1],[1058.9,329,12.1,1],[1055.6,334,15.2,1],[1051,339,17,1],[1046,344,17.6,1],[1041,349,17.5,1],[1036,353.4,17.1,1],[1031,357.3,17.1,1],[1026,361,17.1,1],[1021,364.1,17,1],[1016,367,16.9,1],[1011,369.4,16.9,1],[1006,371.3,16.5,1],[1001,372.4,15.9,1],[996,373.1,15.4,1],[991,373.9,15.9,1],[986,374.7,16.7,1],[981,375.4,17.4,1],[976,376,18.5,1],[971,376,19.9,1],[966,375.7,21.1,1],[961,374.1,22,1],[956,371.6,22.7,1],[951.1,367.9,22.8,1],[947.3,363,22.4,1],[944.6,358,21.5,1],[943.1,353,20.9,1],[942.3,348,20.3,1],[941.7,343,19.6,1],[940.9,338,20.1,1],[938.6,334.6,22.3,1],[934,335.3,22.9,1],[929,337,19.4,1],[924,338.7,16.5,1],[919,340.3,15.2,1],[914,342,15.4,1],[909.3,344.4,16.6,1],[905,349,17,1],[900,353.4,17.4,1],[895,357.4,17.5,1],[890,361.4,17.6,1],[885,364.9,17.5,1],[880,367.6,17.5,1],[875,369.9,17.3,1],[870,371.4,16.9,1],[865,372.4,16.5,1],[860,373.3,16.4,1],[855,374.3,17.3,1],[850,375,18,1],[845,375.4,18.6,1],[840,374.9,19.3,1],[835,373.9,20.5,1],[830,372,21.7,1],[825.6,368,22.3,1],[823.4,363,21.6,1],[822,358,21,1],[820,354,22.1,1],[816,354.3,24.2,1],[811,355.9,21.7,1],[806,357.3,18.5,1],[801,358.9,16.2,1],[796,360.3,15.4,1],[791,361.7,16.1,1],[786,364.1,16.7,1],[781,367.3,16.7,1],[776,369.7,16.4,1],[771,371.3,16.1,1],[766,372.4,15.8,1],[761,373.4,16.4,1],[756,374.4,17.6,1],[751,374.6,19,1],[746,373.6,20.3,1],[741,370.9,21.2,1],[737.3,366,21,1],[735.6,361,20.2,1],[734.6,356,19.5,1],[734,351,19.1,1],[734,346,19,1],[734,341,18.6,1],[732.6,337.4,16.8,0],[728,337,12,0],[723,337,7.1,0],[718,336.9,2.6,0],[713,334,3.5,0],[708,329,10,0],[703.3,324.4,16.5,0],[699,325.1,19.5,0],[694,330,19.8,0],[689,335,20.3,0],[684,339.4,20.3,0],[679,344,20.5,0],[674,348.3,20.5,0],[669,352.4,20.5,0],[664,356.6,20.5,0],[659,360.1,20.3,0],[654,363.7,20.2,0],[649,366.7,20,0],[644,368.6,19.3,0],[639,369.7,18.2,0],[634,370.7,17.9,0],[629,371.6,18.7,0],[624,371.4,19.5,0],[619,370.1,20.3,0],[614,368.3,21.5,0],[610.6,364,21.1,0],[609.3,359,19.9,0],[607.4,354,20.1,0],[606.4,352.6,20.8,1],[608.7,357,19.7,1],[609.9,362,20.8,1],[612.3,366.9,21.6,1],[617,369.6,20.8,1],[622,370.9,19.7,1],[627,371.7,19.1,1],[632,371.1,18.2,1],[637,370.3,18.1,1],[642,369.1,18.9,1],[647,367.6,19.8,1],[652,365,20.1,1],[657,361.6,20.3,1],[662,358,20.4,1],[667,354.1,20.5,1],[672,349.9,20.5,1],[677,345.7,20.5,1],[682,341.1,20.3,1],[687,336.9,20.4,1],[692,332,20,1],[697,327,19.7,1],[701.6,323,18.9,1],[706,320.7,17.6,0],[711,319,16.9,0],[716,317.3,17.8,0],[721,315.7,20,0],[726,314,23.3,0],[729.7,313,25.9,0],[727,313.7,24,1],[722,315.3,20.7,1],[717,317,18.1,1],[712,318.7,16.9,1],[707,320.3,17.4,1],[702.4,322.4,18.6,1],[698,326,19.6,1],[693,331,19.9,1],[688,336,20.4,1],[683,340.3,20.3,1],[678,344.9,20.5,1],[673,349.1,20.5,1],[668,353.3,20.5,1],[663,357.3,20.4,1],[658,360.9,20.3,1],[653,364.3,20.2,1],[648,367.1,19.8,1],[643,368.9,19.1,1],[638,370,18.1,1],[633,370.9,18,1],[628,371.7,18.9,1],[623,371.1,19.6,1],[618,369.9,20.5,1],[613.1,367.6,21.5,1],[610.1,363,21,1],[609,358,19.8,1],[606.9,353.1,20.5,1],[602.9,351.7,22.6,1],[598,353.3,20.4,1],[593,354.9,17.5,1],[588,356.3,16,1],[583,357.7,16,1],[578,359.3,17.3,1],[573,362.1,18,1],[568,365.4,18.1,1],[563,368.4,18.3,1],[558,370.9,18.2,1],[553,372.3,17.5,1],[548,373.4,17.2,1],[543,374.3,17.3,1],[538,375,18.4,1],[533,374.9,19.1,1],[528,374.1,19.9,1],[523,373,20.9,1],[518,370.4,21.9,1],[513.9,366,22.4,1],[511.7,361,21.8,1],[510.6,356,21.1,1],[510,351,20.6,1],[510.7,346,19.3,1],[511.4,341,18.6,1],[512.4,336,18.4,1],[513.3,331,19,1],[514.4,326,19.6,1],[516.3,321,19.9,1],[519,316,19.9,1],[521.7,311,19.9,1],[524.4,306,19.9,1],[527.3,301,19.9,1],[530.1,296,19.8,1],[533.3,291,19.8,1],[536.9,286,19.9,1],[540.3,281,19.7,1],[543.7,276,19.5,1],[547,271,19.3,1],[550.1,266,19.2,1],[553.7,261,19,1],[557,256,18.9,1],[560.3,251,18.6,1],[563.9,246,18.5,1],[567.3,241,18.4,1],[569.3,236,17.4,1],[570.4,231,16.3,1],[571.6,226,16.6,1],[572.9,221,18.2,1],[574.1,216,20.8,1],[575.3,211,24.1,1],[576.3,206.1,26.1,1],[574,203.8,24.7,1],[569,204.3,23.6,1],[564,205.3,20.8,1],[559,206.3,18.3,1],[554,207.3,16.8,1],[549,208.4,16.2,1],[544,209.6,16.9,1],[539,211.6,17.4,1],[534,214.7,17.3,1],[529,218.6,17.2,1],[524,222.6,17.2,1],[519,227,17.2,1],[514,231.7,17,1],[509,236,17.3,1],[504,241,17.1,1],[499,246,17,1],[494,251,17,1],[489,256,16.8,1],[484,261,16.3,1],[479,265.7,16.1,1],[474,268.3,14,1],[469,270,11.4,1],[464,271.7,10.4,1],[459,273.3,11.6,1],[454,275,14.8,1],[451.6,273.9,15.1,1],[453.4,269.7,10.8,0],[457.9,265.1,4.4,0],[461.1,261.7,1.2,0],[461.1,261.8,1.2,0]],[[388.1,193.7,10.8,0],[384,196.7,13.1,0],[379,200.6,15.9,0],[374,205,18.1,0],[369.6,210,18.7,0],[366,215,18.5,0],[362.4,220,18.3,0],[358.9,225,18.1,0],[356.6,230,16.9,0],[355.4,235,15,0],[354.1,240,14.3,0],[352.9,245,15.4,0],[351.7,250,17.8,0],[350.6,255,21.2,0],[351.4,259,23.3,0]],[[794.1,210.4,14.2,0],[790,213.1,17,0],[785.6,218,19,0],[781,222.4,18.9,0],[776,225.1,18.6,0],[773.9,225.9,18.3,0]],[[933.9,136.1,17.9,0],[938,132,20.2,0],[943,127,21.1,0],[947.4,122,20.7,0],[951.9,117.1,18.8,0],[953.1,115.9,18,0]]]}};function $h(i){let t=i.stage,e=i.words,n=i.getRest,s=i.onWordDone||function(){},r=i.onDone||function(){},a=i.onReset||function(){},o=[13,17,26],l=window.matchMedia("(prefers-reduced-motion: reduce)").matches,c=function(X,pt,Lt){return Math.max(pt,Math.min(Lt,X))},h=function(X){return X=c(X,0,1),X*X*(3-2*X)},d=function(X,pt,Lt){return X+(pt-X)*Lt};function u(X){let pt=document.createElement("canvas");return pt.style.cssText="position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:"+X,pt.setAttribute("aria-hidden","true"),t.appendChild(pt),pt}let f=u(1),_=u(2),S=document.createElement("canvas"),m=document.createElement("canvas"),p=f.getContext("2d"),E=_.getContext("2d"),A=S.getContext("2d"),y=m.getContext("2d"),b=document.createElement("div");b.className="penhit",b.setAttribute("role","button"),b.setAttribute("tabindex","0"),b.setAttribute("aria-label","Write again"),b.title="Click the pen to write again",b.style.cssText="position:absolute;z-index:4;cursor:pointer;pointer-events:none;border-radius:12px",t.appendChild(b);let M=null,C,x,w,R,N,z,O=1;try{M=new gs({antialias:!0,alpha:!0,powerPreference:"high-performance"}),M.getContext()||(M=null)}catch{M=null}let P=0,B=0,q=1;function J(){let X=document.createElement("canvas");X.width=256,X.height=64;let pt=X.getContext("2d"),Lt=pt.createRadialGradient(128,32,2,128,32,128);Lt.addColorStop(0,"rgba(0,0,0,1)"),Lt.addColorStop(.45,"rgba(0,0,0,.55)"),Lt.addColorStop(1,"rgba(0,0,0,0)"),pt.setTransform(1,0,0,.5,0,16),pt.fillStyle=Lt,pt.fillRect(0,-32,256,128);let Ht=new Wn(X);return Ht.colorSpace=Pe,Ht}function at(){M.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),M.outputColorSpace=Pe,M.toneMapping=ur,M.toneMappingExposure=.95;let X=M.domElement;X.style.cssText="position:absolute;left:0;top:0;width:100%;height:100%;display:block;pointer-events:none;z-index:3",X.setAttribute("aria-hidden","true"),t.appendChild(X),C=new Gn;let pt=new pi(M);C.environment=pt.fromScene(new vs,.03).texture;let Lt=new Ci(16777215,1.6);Lt.position.set(-300,500,700),C.add(Lt),C.add(new cr(16777215,.25)),x=new li(0,100,100,0,.1,3e3),x.position.z=1500;let Ht=new si({color:526346,roughness:.16,metalness:0,clearcoat:1,clearcoatRoughness:.05,envMapIntensity:1.5}),te=new yn({color:14267484,metalness:1,roughness:.2,envMapIntensity:1.5}),Ae=new yn({color:15790836,metalness:1,roughness:.14,envMapIntensity:1.7,side:ln}),Se=new yn({color:4540494,metalness:1,roughness:.28,envMapIntensity:1.3}),Ee=new xn({color:328966,side:ln});function pe(xt,dt,Rt){let Ft=new er(xt.map(function(Yt){return new mt(Yt[0],Yt[1])}),Rt||72);return new oe(Ft,dt)}function Te(xt,dt,Rt,Ft){let Yt=new oe(new Ti(xt,xt,dt,72),Ft);return Yt.position.y=Rt,Yt}let ve=new nn,ke=new os;ke.moveTo(0,0),ke.bezierCurveTo(4,9,11,24,11.6,40),ke.lineTo(11,66),ke.lineTo(-11,66),ke.lineTo(-11.6,40),ke.bezierCurveTo(-11,24,-4,9,0,0);let Ne=new tr(ke,{depth:1.1,bevelEnabled:!1,curveSegments:24}),gi=Ne.attributes.position;function ys(xt){let dt=c((xt-8)/56,0,1);return .5+7.4*dt*dt*(3-2*dt)}for(let xt=0;xt<gi.count;xt++){let dt=gi.getX(xt),Rt=gi.getY(xt);gi.setZ(xt,gi.getZ(xt)+ys(Rt)-dt*dt/26)}Ne.computeVertexNormals();let _i=new nn;_i.scale.set(1.45,1.45,1.2),ve.add(_i),_i.add(new oe(Ne,Ae));let xi=new oe(new vn(.8,44,.3),Ee);xi.position.set(0,22,ys(22)+1.3),xi.rotation.x=Math.atan(7.4/56*1.1),_i.add(xi);let v=new oe(new Xs(1.7,24),Ee);v.position.set(0,44,ys(44)+1.35),v.rotation.x=xi.rotation.x,_i.add(v),ve.add(pe([[0,6],[2.2,8],[5,40],[6.8,60],[0,60]],Ht,40)),ve.add(pe([[0,58],[7.4,58],[8.6,72],[10,100],[11.4,126],[12.2,134],[0,134]],Ht)),ve.add(Te(13,8,138,te)),ve.add(pe([[0,142],[12.2,142],[12.9,152],[13.4,190],[13.5,260],[13.2,330],[12.5,392],[10.8,420],[6.5,432],[0,436]],Ht)),ve.add(Te(13.6,5,154,te)),ve.add(Te(13,3,163,te)),ve.add(Te(13,4,398,te)),w=new nn,w.add(ve),C.add(w);let L=new nn;L.add(pe([[0,0],[14.2,0],[14.7,4],[14.8,30],[14.8,236],[0,236]],Ht)),L.add(pe([[0,236],[14.8,236],[14.8,248],[12.5,257],[7,261],[0,262]],Se)),L.add(Te(15.2,5,12,te)),L.add(Te(15.1,2.2,21,te)),L.add(Te(15.3,16,200,te));let Z=new oe(new vn(5.4,138,1.5),te);Z.position.set(0,134,15.6),L.add(Z);let G=new oe(new nr(3.4,24,16),te);G.position.set(0,64,15.5),L.add(G),R=new nn,R.add(L),C.add(R);let H=J();function Tt(xt){let dt=new oe(new Ln(1,1),new xn({map:H,transparent:!0,opacity:xt,depthWrite:!1}));return dt.position.z=.2,C.add(dt),dt}N=Tt(.3),z=Tt(.32)}if(M)try{at()}catch{M=null}let $={},j=[];function it(){j=e.map(function(X,pt){let Lt=Jh[X.key],Ht=X.box();$[X.key]||($[X.key]=new Path2D(Lt.d));let te=Math.min(Ht.w/Lt.W,Ht.h/Lt.H),Ae=Ht.x+(Ht.w-Lt.W*te)/2,Se=Ht.y+(Ht.h-Lt.H*te)/2,Ee=Lt.strokes.map(function(Te){let ve=Te.map(function(Ne){return{x:Ae+Ne[0]*te,y:Se+Ne[1]*te,r:Math.max(1.2,Ne[2]*te*1.32+1.6),rt:Ne[3]}}),ke=[0];for(let Ne=1;Ne<ve.length;Ne++)ke.push(ke[Ne-1]+Math.hypot(ve[Ne].x-ve[Ne-1].x,ve[Ne].y-ve[Ne-1].y));return{pts:ve,cum:ke,len:ke[ke.length-1]}}),pe=j[pt];return{path:$[X.key],s:te,ox:Ae,oy:Se,strokes:Ee,box:Ht,full:pe?pe.full:!1,tcol:pe?pe.tcol:0,started:pe?pe.started:!1}})}function Ot(X,pt){pt=c(pt,0,X.len);let Lt=0,Ht=X.cum.length-1;for(;Ht-Lt>1;){let pe=Lt+Ht>>1;X.cum[pe]<=pt?Lt=pe:Ht=pe}let te=X.cum[Ht]-X.cum[Lt]||1,Ae=(pt-X.cum[Lt])/te,Se=X.pts[Lt],Ee=X.pts[Ht];return{x:Se.x+(Ee.x-Se.x)*Ae,y:Se.y+(Ee.y-Se.y)*Ae,r:Se.r+(Ee.r-Se.r)*Ae,rt:Ee.rt}}let bt=[];function Zt(X,pt){A.strokeStyle="#fff",A.lineCap="round",A.lineWidth=X.r+pt.r,A.beginPath(),A.moveTo(X.x,X.y),A.lineTo(pt.x,pt.y),A.stroke(),bt.push({x0:X.x,y0:X.y,x1:pt.x,y1:pt.y,w:Math.min(X.r,pt.r)*1.3,t:W})}function jt(X){return"rgb("+Math.round(d(o[0],255,X))+","+Math.round(d(o[1],255,X))+","+Math.round(d(o[2],255,X))+")"}function ie(X,pt,Lt){X.setTransform(q*pt.s,0,0,q*pt.s,q*pt.ox,q*pt.oy),X.fillStyle=Lt,X.fill(pt.path),X.setTransform(1,0,0,1,0,0)}function U(){p.setTransform(1,0,0,1,0,0),p.clearRect(0,0,f.width,f.height),j.forEach(function(X){if(X.started){if(X.full){ie(p,X,jt(X.tcol));return}y.setTransform(1,0,0,1,0,0),y.globalCompositeOperation="source-over",y.clearRect(0,0,m.width,m.height),ie(y,X,jt(0)),y.globalCompositeOperation="destination-in",y.drawImage(S,0,0),y.globalCompositeOperation="source-over",p.drawImage(m,0,0)}})}function Q(){for(E.setTransform(q,0,0,q,0,0),E.clearRect(0,0,P,B);bt.length&&W-bt[0].t>.8;)bt.shift();E.lineCap="round";for(let X=0;X<bt.length;X++){let pt=bt[X],Lt=1-(W-pt.t)/.8;E.strokeStyle="rgba(255,255,255,"+(.22*Lt*Lt).toFixed(3)+")",E.lineWidth=Math.max(.8,pt.w*.22),E.beginPath(),E.moveTo(pt.x0-pt.w*.2,pt.y0-pt.w*.2),E.lineTo(pt.x1-pt.w*.2,pt.y1-pt.w*.2),E.stroke()}}let k=40*Math.PI/180,yt=36*Math.PI/180,ht=5*Math.PI/180,Et=16*Math.PI/180;function Ct(){let X=n();return{x:X.x+X.w*.05+6,y:X.y+X.h*.86,lift:11.5*O,el:ht,az:Et}}function tt(X){return{x:X.x,y:X.y,lift:0,el:k,az:yt}}function st(X,pt,Lt,Ht){let te=h(Lt);return{x:d(X.x,pt.x,te),y:d(X.y,pt.y,te),lift:d(X.lift,pt.lift,te)+(Ht||0)*Math.sin(Math.PI*c(Lt,0,1)),el:d(X.el,pt.el,te),az:d(X.az,pt.az,te)}}let lt=new F,ot=new F,ft=new F,Pt=new fe;function kt(X,pt,Lt){let Ht=Math.cos(pt);lt.set(Ht*Math.cos(Lt),Ht*Math.sin(Lt),Math.sin(pt)),ot.set(0,0,1).addScaledVector(lt,-lt.z),ot.lengthSq()<1e-4&&ot.set(0,-1,0),ot.normalize(),ft.crossVectors(lt,ot).normalize(),X.quaternion.setFromRotationMatrix(Pt.makeBasis(ft,lt,ot))}function Wt(X,pt,Lt,Ht,te,Ae,Se){let Ee=Ht-pt,pe=te-Lt;X.position.x=(pt+Ht)/2,X.position.y=(Lt+te)/2,X.scale.set(Math.max(1,Math.hypot(Ee,pe))*1.12+Ae,Ae,1),X.rotation.z=Math.atan2(pe,Ee),X.material.opacity=Se}let Bt=null,I=0,se=0;function Kt(){if(!M||!Bt)return;let X=Y==="done"&&I>.001?{x:Bt.x,y:Bt.y,lift:Bt.lift+16*O*I,el:Bt.el+.12*I,az:Bt.az}:Bt,pt=B-X.y;w.position.set(X.x,pt,X.lift),w.scale.setScalar(O),kt(w,X.el,X.az);let Lt=436*O,Ht=Math.cos(X.el),te=X.x+Lt*Ht*Math.cos(X.az),Ae=pt+Lt*Ht*Math.sin(X.az),Se=X.lift+Lt*Math.sin(X.el),Ee=.32,pe=.42;Wt(N,X.x+Ee*X.lift,pt-pe*X.lift,te+Ee*Se,Ae-pe*Se,30*O,c(.34-X.lift*.003,.14,.34)),M.render(C,x)}function T(){if(!M)return;let X=n(),pt=X.x+X.w*.58,Lt=X.y+X.h*.2,Ht=4*Math.PI/180;R.scale.setScalar(O),R.quaternion.setFromAxisAngle(new F(0,0,1),Ht-Math.PI/2);let te=262*O,Ae=Math.cos(Ht),Se=Math.sin(Ht);R.position.set(pt-Ae*te/2,B-Lt-Se*te/2,14.8*O),Wt(z,R.position.x+7*O,R.position.y-9*O,R.position.x+Ae*te+7*O,R.position.y+Se*te-9*O,38*O,.34)}function g(){let X=Ct(),pt=436*O*Math.cos(ht),Lt=X.x+pt*Math.cos(Et),Ht=X.y-pt*Math.sin(Et);b.style.left=X.x-16+"px",b.style.top=Ht-22+"px",b.style.width=Lt-X.x+32+"px",b.style.height=X.y-Ht+44+"px"}function V(){let X=t.getBoundingClientRect();P=Math.max(1,X.width),B=Math.max(1,X.height),q=Math.min(window.devicePixelRatio||1,2),[f,_,S,m].forEach(function(Lt){Lt.width=Math.round(P*q),Lt.height=Math.round(B*q)}),A.setTransform(q,0,0,q,0,0);let pt=n();O=c((pt.w-70)/440,.55,1.2),M&&(M.setSize(P,B,!1),x.left=0,x.right=P,x.top=B,x.bottom=0,x.updateProjectionMatrix()),it(),g()}let W=0,Y="idle",ct=0,ut=0,K=0,et=0,gt=null,zt=null,Mt=1,vt=0,Dt=null,Nt=0,qt=0,D=!1,_t=!1;function nt(X,pt,Lt,Ht){gt=Bt,zt=X,Mt=pt,vt=Lt,et=0,Y=Ht}function St(){let X=j[ct].strokes[ut];K=0,Dt=X.pts[0],j[ct].started=!0}function At(X){let pt=j[X];pt.full=!0,pt.started=!0,s(X)}function rt(X){X=Math.min(X,.05),W+=X;let pt=!1;if(Y==="intro"||Y==="hop")et+=X/Mt,Bt=st(gt,zt,et,vt),et>=1&&(Y="write",St());else if(Y==="write"){let Lt=j[ct],Ht=Lt.strokes[ut],te=X*Lt.box.h*8.5;for(;te>0&&Y==="write";){let Ae=Ht.len?K/Ht.len:1,Se=(.55+.45*Math.pow(Math.sin(Math.PI*c(Ae,.02,.98)),.5))*(Dt.rt?3:1),Ee=Math.min(te,2.4),pe=Math.min(Ht.len,K+Ee*Se),Te=Ot(Ht,pe);if(Te.rt||(Zt(Dt,Te),pt=!0),Dt=Te,te-=Ee,K=pe,K>=Ht.len-.01){if(ut+1<Lt.strokes.length){ut++;let ve=Lt.strokes[ut].pts[0];nt(tt(ve),.07+Math.hypot(ve.x-Te.x,ve.y-Te.y)/1800,10*O,"hop"),gt=tt(Te)}else if(At(ct),pt=!0,ct+1<j.length){ct++,ut=0;let ve=j[ct].strokes[0].pts[0];nt(tt(ve),.4,24*O,"hop"),gt=tt(Te)}else nt(Ct(),.9,30*O,"return"),gt=tt(Te);break}}Y==="write"&&(Bt=tt(Dt))}else Y==="return"&&(et+=X/Mt,Bt=st(gt,zt,et,vt),et>=1&&(Bt=zt,Y="done",_t=!0,b.style.pointerEvents="auto",r()));j.forEach(function(Lt){Lt.full&&Lt.tcol<1&&(Lt.tcol=Math.min(1,Lt.tcol+X/.35),pt=!0)}),pt&&U(),Q(),Kt()}function Gt(){return j.some(function(X){return X.full&&X.tcol<1})||bt.length>0}function Ut(X){let pt=qt?(X-qt)/1e3:.016;qt=X,rt(pt),Y!=="done"&&Y!=="idle"||Gt()?Nt=requestAnimationFrame(Ut):(Nt=0,qt=0)}function he(){A.setTransform(1,0,0,1,0,0),A.clearRect(0,0,S.width,S.height),A.setTransform(q,0,0,q,0,0),p.setTransform(1,0,0,1,0,0),p.clearRect(0,0,f.width,f.height),E.setTransform(q,0,0,q,0,0),E.clearRect(0,0,P,B),bt=[],j.forEach(function(X){X.full=!1,X.tcol=0,X.started=!1})}function le(){Nt&&(cancelAnimationFrame(Nt),Nt=0),he(),j.forEach(function(X,pt){X.full=!0,X.started=!0,X.tcol=1,s(pt)}),U(),Bt=Ct(),Y="done",D=!0,b.style.pointerEvents="auto",T(),Kt(),_t||(_t=!0,r())}function Je(){if(D)return;if(D=!0,l){le();return}he(),ct=0,ut=0,_t=!1,W=0,I=0,se=0,b.style.pointerEvents="none",Bt=Ct(),T();let X=j[0].strokes[0].pts[0];nt(tt(X),.8,40*O,"intro"),gt=Bt,qt=0,Nt=requestAnimationFrame(Ut)}function $e(){!_t&&D||(Nt&&(cancelAnimationFrame(Nt),Nt=0),D=!1,Y="idle",_t=!1,he(),a(),Je())}b.addEventListener("click",$e),b.addEventListener("keydown",function(X){(X.key==="Enter"||X.key===" ")&&(X.preventDefault(),$e())});let Ni=0;function Er(){I+=(se-I)*.18,Math.abs(se-I)<.01&&(I=se),Kt(),I!==se?Ni=requestAnimationFrame(Er):Ni=0}function mi(X){se=X,!Ni&&Y==="done"&&(Ni=requestAnimationFrame(Er))}b.addEventListener("pointerenter",function(){mi(1)}),b.addEventListener("pointerleave",function(){mi(0)}),b.addEventListener("focus",function(){mi(1)}),b.addEventListener("blur",function(){mi(0)});let Qn=typeof ResizeObserver<"u"?new ResizeObserver(function(){let X=t.getBoundingClientRect();Math.abs(X.width-P)<1&&Math.abs(X.height-B)<1||(V(),D?le():(T(),Bt=Ct(),Kt()))}):null;return Qn&&Qn.observe(t),V(),Bt=Ct(),T(),Kt(),{play:Je,replay:$e,showNow:le,step:rt,hasPen:!!M,destroy:function(){Nt&&cancelAnimationFrame(Nt),Qn&&Qn.disconnect(),[f,_,b].forEach(function(X){X.remove()}),M&&(M.domElement.remove(),M.dispose())}}}function vm(i){let t=i.stage,e=i.getLayout,n=i.letters||["N","E","X","T"],s=i.colors||["#e91e8c","#1cb5b0","#e91e8c","#1cb5b0"],r=window.matchMedia("(prefers-reduced-motion: reduce)").matches,a;try{a=new gs({antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{return null}if(!a.getContext())return null;a.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),a.outputColorSpace=Pe,a.domElement.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block",t.appendChild(a.domElement);let o=new Gn,l=30,c=20,h=new Be(l,1,.1,100);h.position.set(0,0,c);let d=new pi(a);o.environment=d.fromScene(new vs,.03).texture,o.environmentIntensity=.85;let u=new Ci(16777215,1.6);u.position.set(-4,7,9),o.add(u),o.add(new rr(16777215,16762834,.55));function f(U,Q,k,yt){for(let ht=k;ht>=1;ht--)U.save(),U.lineJoin="round",U.globalAlpha=.9/k,U.strokeStyle=yt,U.lineWidth=ht*2.2,Q(U,!0),U.restore()}function _(U){let yt=document.createElement("canvas");yt.width=yt.height=512;let ht=document.createElement("canvas");ht.width=ht.height=512;let Et=yt.getContext("2d"),Ct=ht.getContext("2d");Et.fillStyle="#ffffff",Et.fillRect(0,0,512,512),Ct.fillStyle="#7a7a7a",Ct.fillRect(0,0,512,512);function tt(Pt,kt,Wt){Pt.beginPath(),Pt.arc(256,256,kt,0,Math.PI*2),Pt.strokeStyle=Wt}f(Ct,function(Pt){Pt.beginPath(),Pt.arc(256,256,512*.455,0,Math.PI*2),Pt.stroke()},7,"#ffffff"),Ct.beginPath(),Ct.arc(256,256,512*.4,0,Math.PI*2),Ct.fillStyle="#6a6a6a",Ct.fill(),Et.beginPath(),Et.arc(256,256,512*.4,0,Math.PI*2),Et.fillStyle="#f1f1f1",Et.fill();let st="700 "+Math.round(512*.6)+'px "Instrument Sans", "Helvetica Neue", Arial, sans-serif';Et.font=st,Ct.font=st,Et.textAlign=Ct.textAlign="center",Et.textBaseline=Ct.textBaseline="middle";let lt=256+512*.02;Et.fillStyle="#a3a3a3",Et.fillText(U,256,lt),f(Ct,function(Pt,kt){Pt.strokeText(U,256,lt)},5,"#ffffff"),Ct.fillStyle="#ffffff",Ct.fillText(U,256,lt);let ot=new Wn(yt);ot.colorSpace=Pe,ot.anisotropy=8;let ft=new Wn(ht);return ft.anisotropy=8,[ot,ft].forEach(function(Pt){Pt.center.set(.5,.5),Pt.rotation=Math.PI/2}),{map:ot,bump:ft}}function S(){let Q=document.createElement("canvas");Q.width=Q.height=128;let k=Q.getContext("2d"),yt=k.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return yt.addColorStop(0,"rgba(30,24,36,1)"),yt.addColorStop(.5,"rgba(30,24,36,.45)"),yt.addColorStop(1,"rgba(30,24,36,0)"),k.fillStyle=yt,k.fillRect(0,0,128,128),new Wn(Q)}let m=S(),p=new Ti(1,1,.34,72,1,!1);p.rotateX(Math.PI/2);let E=n.map(function(U,Q){let k=_(U),yt=new $t(s[Q%s.length]),ht=new si({color:yt,map:k.map,bumpMap:k.bump,bumpScale:9,roughness:.42,metalness:0,clearcoat:.55,clearcoatRoughness:.35}),Et=new si({color:yt,roughness:.5,clearcoat:.4,clearcoatRoughness:.4}),Ct=new oe(p,[Et,ht,ht]);Ct.visible=!1,o.add(Ct);let tt=new oe(new Ln(2,2),new xn({map:m,transparent:!0,depthWrite:!1,opacity:0})),st=new oe(new Ln(2,2),new xn({map:m,transparent:!0,depthWrite:!1,opacity:0}));return tt.position.z=-.6,st.position.z=-.5,tt.visible=st.visible=!1,o.add(tt,st),{mesh:Ct,floorSh:tt,wallSh:st,i:Q,phase:"wait",t:0,x:0,y:0,vx:0,vy:0,rz:0,wob:0,tilt:(Q%2?1:-1)*.5,tx:0}}),A=1,y=1,b=.01,M=1,C=0,x=-5,w=0,R=5,N=null;function z(U,Q){return{x:(U-A/2)*b,y:(y/2-Q)*b}}function O(){A=t.clientWidth||1,y=t.clientHeight||1,a.setSize(A,y,!1),h.aspect=A/y,h.updateProjectionMatrix(),b=2*c*Math.tan(Pl.degToRad(l/2))/y,N=e(A,y),M=N.r*b,w=M*.12,C=z(0,N.floor).y,x=z(N.wall,0).x,R=z(A,0).x,E.forEach(function(U,Q){U.tx=x+M+w+Q*(2*M+w),U.phase==="idle"&&(U.y=C+M)})}let P=0,B=!1,q=0,J=0,at=!0,$=30;function j(U){P=0,E.forEach(function(Q){Q.t=0,Q.vx=0,Q.vy=0,Q.rz=0,Q.wob=0,U?(Q.phase="idle",Q.x=Q.tx,Q.y=C+M,it(Q,0)):(Q.phase="wait",Q.mesh.visible=Q.floorSh.visible=Q.wallSh.visible=!1)})}function it(U,Q){U.mesh.visible=!0,U.mesh.position.set(U.x,U.y,0),U.mesh.scale.setScalar(M);let k=Math.max(0,1-Math.max(0,Q)/(M*3.5));U.floorSh.visible=U.wallSh.visible=!0,U.floorSh.position.set(U.x,C-M*.02,-.6),U.floorSh.scale.set(M*(1.15-.25*(1-k)),M*.16,1),U.floorSh.material.opacity=.42*k,U.wallSh.position.set(U.x-M*.2,U.y-M*.3,-.5),U.wallSh.scale.set(M*1.05,M*1.05,1),U.wallSh.material.opacity=.16}function Ot(U){P+=U,E.forEach(function(k,yt){if(k.phase==="wait"&&P>=.5+yt*.38&&(k.phase="live",k.t=0,k.x=R+M*2.2,k.y=C+M+M*(1.4+yt%2*.7),k.vx=-M*(15+yt*.6),k.vy=M*2.5,k.wob=.5),k.phase==="live"||k.phase==="idle"){let ht=C+M;k.vy-=$*M*U*.33,k.y+=k.vy*U;let Et=!1;if(k.y<=ht&&(k.y=ht,Math.abs(k.vy)>M*.9?(k.vy=-k.vy*.36,k.wob=Math.min(1,k.wob+.3)):(k.vy=0,Et=!0)),k.x+=k.vx*U,Et){if(k.vx*=Math.pow(.1,U),Math.abs(k.vx)<M*.35){k.x+=(k.tx-k.x)*Math.min(1,U*5);let st=Math.round(k.rz/(Math.PI*2))*Math.PI*2;k.rz+=(st-k.rz)*Math.min(1,U*7)}k.rz-=k.vx*U/M}else k.rz-=k.vx*U/M*.5;k.x-M<x&&(k.x=x+M,k.vx=Math.abs(k.vx)*.5,k.wob=Math.min(1,k.wob+.35)),k.x+M>R&&k.phase==="idle"&&(k.x=R-M,k.vx=-Math.abs(k.vx)*.5),k.t+=U,k.wob*=Math.pow(.4,U);let Ct=Math.sin(k.t*9)*k.wob*.25,tt=Math.sin(k.t*7+1)*k.wob*.05*k.tilt;k.mesh.rotation.set(0,Ct,k.rz+tt,"XYZ"),it(k,k.y-ht),k.phase==="live"&&k.x<R-M*3&&(k.phase="idle")}});let Q=E.filter(function(k){return k.phase==="live"||k.phase==="idle"}).sort(function(k,yt){return k.x-yt.x});for(let k=0;k<Q.length-1;k++){let yt=Q[k],ht=Q[k+1],Et=yt.x+M*2-ht.x;if(Et>0){yt.x-=Et/2,ht.x+=Et/2;let Ct=yt.vx;yt.vx=ht.vx*.55,ht.vx=Ct*.55}}}function bt(U){if(!at)return;J=requestAnimationFrame(bt);let Q=Math.min(.05,(U-q)/1e3||.016);q=U,B&&Ot(Q),a.render(o,h)}let Zt={x:0,y:0,vx:0,t:0,on:!1};function jt(U){let Q=t.getBoundingClientRect(),k=U.clientX-Q.left,yt=U.clientY-Q.top,ht=performance.now();if(Zt.on){let Ct=Math.max(8,ht-Zt.t)/1e3;Zt.vx=(k-Zt.x)/Ct}Zt.x=k,Zt.y=yt,Zt.t=ht,Zt.on=!0;let Et=z(k,yt);E.forEach(function(Ct){Ct.phase!=="idle"&&Ct.phase!=="live"||Math.abs(Et.x-Ct.x)<M*1.05&&Math.abs(Et.y-Ct.y)<M*1.05&&Math.abs(Zt.vx)>120&&(Ct.vx+=Math.max(-1,Math.min(1,Zt.vx/900))*M*5.5,Ct.vy=Math.max(Ct.vy,M*2.2),Ct.wob=Math.min(1,Ct.wob+.6),Ct.t=0)})}t.addEventListener("pointermove",jt,{passive:!0}),t.addEventListener("pointerleave",function(){Zt.on=!1});let ie=new ResizeObserver(function(){O(),!B||r?j(r):E.forEach(function(U){U.phase==="idle"&&(U.y=C+M)})});return ie.observe(t),O(),j(r),q=performance.now(),J=requestAnimationFrame(bt),{play:function(){O(),j(!1),B=!0},showNow:function(){O(),j(!0),B=!0},destroy:function(){at=!1,cancelAnimationFrame(J),ie.disconnect(),a.dispose(),a.domElement.remove()}}}return iu(ym);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
