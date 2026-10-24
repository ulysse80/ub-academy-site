(()=>{var wc=0,el=1,Cc=2;var Fs=1,Rc=2,ns=3,Nn=0,Gt=1,tn=2,Yt=0,_i=1,ii=2,tl=3,nl=4,Pc=5;var Jn=100,Ic=101,Dc=102,Lc=103,Uc=104,Nc=200,Fc=201,Bc=202,Oc=203,Ur=204,Nr=205,zc=206,Vc=207,kc=208,Gc=209,Hc=210,Wc=211,Xc=212,qc=213,Yc=214,Fr=0,Br=1,Or=2,xi=3,zr=4,Vr=5,kr=6,Gr=7,il=0,Zc=1,Kc=2,un=0,Bs=1,Os=2,zs=3,Vs=4,ks=5,Gs=6,Si=7;var sl=300,si=301,bi=302,ga=303,_a=304,Hs=306,Hr=1e3,yn=1001,Wr=1002,xt=1003,Jc=1004;var Ws=1005;var Pt=1006,xa=1007;var ri=1008;var Qt=1009,rl=1010,al=1011,is=1012,va=1013,dn=1014,fn=1015,Tt=1016,ya=1017,Ma=1018,ss=1020,ol=35902,ll=35899,cl=1021,hl=1022,nn=1023,Mn=1026,ai=1027,ul=1028,Sa=1029,oi=1030,ba=1031;var Ta=1033,Xs=33776,qs=33777,Ys=33778,Zs=33779,Ea=35840,Aa=35841,wa=35842,Ca=35843,Ra=36196,Pa=37492,Ia=37496,Da=37488,La=37489,Ks=37490,Ua=37491,Na=37808,Fa=37809,Ba=37810,Oa=37811,za=37812,Va=37813,ka=37814,Ga=37815,Ha=37816,Wa=37817,Xa=37818,qa=37819,Ya=37820,Za=37821,Ka=36492,Ja=36494,$a=36495,Qa=36283,ja=36284,Js=36285,eo=36286;var xs=2300,Xr=2301,Lr=2302,qo=2303,Yo=2400,Zo=2401,Ko=2402;var $c=3200;var dl=0,Qc=1,zn="",Rt="srgb",vs="srgb-linear",ys="linear",$e="srgb";var pi=7680;var Jo=519,jc=512,eh=513,th=514,to=515,nh=516,ih=517,no=518,sh=519,qr=35044,$s=35048;var fl="300 es",hn=2e3,Ms=2001;function cu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function hu(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ss(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function rh(){let i=Ss("canvas");return i.style.display="block",i}var nc={},Xi=null;function bs(...i){let e="THREE."+i.shift();Xi?Xi("log",e,...i):console.log(e,...i)}function ah(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ie(...i){i=ah(i);let e="THREE."+i.shift();if(Xi)Xi("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function De(...i){i=ah(i);let e="THREE."+i.shift();if(Xi)Xi("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function gi(...i){let e=i.join(" ");e in nc||(nc[e]=!0,Ie(...i))}function oh(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var lh={[Fr]:Br,[Or]:kr,[zr]:Gr,[xi]:Vr,[Br]:Fr,[kr]:Or,[Gr]:zr,[Vr]:xi},Sn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ic=1234567,gs=Math.PI/180,qi=180/Math.PI;function Ln(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Nt[i&255]+Nt[i>>8&255]+Nt[i>>16&255]+Nt[i>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]).toLowerCase()}function We(i,e,t){return Math.max(e,Math.min(t,i))}function pl(i,e){return(i%e+e)%e}function uu(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function du(i,e,t){return i!==e?(t-i)/(e-i):0}function _s(i,e,t){return(1-t)*i+t*e}function fu(i,e,t,n){return _s(i,e,1-Math.exp(-t*n))}function pu(i,e=1){return e-Math.abs(pl(i,e*2)-e)}function mu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function gu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function _u(i,e){return i+Math.floor(Math.random()*(e-i+1))}function xu(i,e){return i+Math.random()*(e-i)}function vu(i){return i*(.5-Math.random())}function yu(i){i!==void 0&&(ic=i);let e=ic+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Mu(i){return i*gs}function Su(i){return i*qi}function bu(i){return(i&i-1)===0&&i!==0}function Tu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Eu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Au(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),f=r((e-n)/2),h=a((e-n)/2),p=r((n-e)/2),_=a((n-e)/2);switch(s){case"XYX":i.set(o*u,l*f,l*h,o*c);break;case"YZY":i.set(l*h,o*u,l*f,o*c);break;case"ZXZ":i.set(l*f,l*h,o*u,o*c);break;case"XZX":i.set(o*u,l*_,l*p,o*c);break;case"YXY":i.set(l*p,o*u,l*_,o*c);break;case"ZYZ":i.set(l*_,l*p,o*u,o*c);break;default:Ie("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function cn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function et(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ml={DEG2RAD:gs,RAD2DEG:qi,generateUUID:Ln,clamp:We,euclideanModulo:pl,mapLinear:uu,inverseLerp:du,lerp:_s,damp:fu,pingpong:pu,smoothstep:mu,smootherstep:gu,randInt:_u,randFloat:xu,randFloatSpread:vu,seededRandom:yu,degToRad:Mu,radToDeg:Su,isPowerOfTwo:bu,ceilPowerOfTwo:Tu,floorPowerOfTwo:Eu,setQuaternionFromProperEuler:Au,normalize:et,denormalize:cn},Ml=class Ml{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ml.prototype.isVector2=!0;var Re=Ml,bn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3],h=r[a+0],p=r[a+1],_=r[a+2],S=r[a+3];if(f!==S||l!==h||c!==p||u!==_){let g=l*h+c*p+u*_+f*S;g<0&&(h=-h,p=-p,_=-_,S=-S,g=-g);let m=1-o;if(g<.9995){let w=Math.acos(g),R=Math.sin(w);m=Math.sin(m*w)/R,o=Math.sin(o*w)/R,l=l*m+h*o,c=c*m+p*o,u=u*m+_*o,f=f*m+S*o}else{l=l*m+h*o,c=c*m+p*o,u=u*m+_*o,f=f*m+S*o;let w=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=w,c*=w,u*=w,f*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[a],h=r[a+1],p=r[a+2],_=r[a+3];return e[t]=o*_+u*f+l*p-c*h,e[t+1]=l*_+u*h+c*f-o*p,e[t+2]=c*_+u*p+o*h-l*f,e[t+3]=u*_-o*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),f=o(r/2),h=l(n/2),p=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=h*u*f+c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f-h*p*_;break;case"YXZ":this._x=h*u*f+c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f+h*p*_;break;case"ZXY":this._x=h*u*f-c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f-h*p*_;break;case"ZYX":this._x=h*u*f-c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f+h*p*_;break;case"YZX":this._x=h*u*f+c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f-h*p*_;break;case"XZY":this._x=h*u*f-c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f+h*p*_;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+o+f;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>f){let p=2*Math.sqrt(1+n-o-f);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>f){let p=2*Math.sqrt(1+o-n-f);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+f-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Sl=class Sl{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*u,this.y=n+l*u+o*c-r*f,this.z=s+l*f+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Mo.copy(this).projectOnVector(e),this.sub(Mo)}reflect(e){return this.sub(Mo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Sl.prototype.isVector3=!0;var F=Sl,Mo=new F,sc=new bn,bl=class bl{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],p=n[5],_=n[8],S=s[0],g=s[3],m=s[6],w=s[1],R=s[4],M=s[7],A=s[2],T=s[5],P=s[8];return r[0]=a*S+o*w+l*A,r[3]=a*g+o*R+l*T,r[6]=a*m+o*M+l*P,r[1]=c*S+u*w+f*A,r[4]=c*g+u*R+f*T,r[7]=c*m+u*M+f*P,r[2]=h*S+p*w+_*A,r[5]=h*g+p*R+_*T,r[8]=h*m+p*M+_*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*r,p=c*r-a*l,_=t*f+n*h+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/_;return e[0]=f*S,e[1]=(s*c-u*n)*S,e[2]=(o*n-s*a)*S,e[3]=h*S,e[4]=(u*t-s*l)*S,e[5]=(s*r-o*t)*S,e[6]=p*S,e[7]=(n*l-c*t)*S,e[8]=(a*t-n*r)*S,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return gi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(So.makeScale(e,t)),this}rotate(e){return gi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(So.makeRotation(-e)),this}translate(e,t){return gi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(So.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};bl.prototype.isMatrix3=!0;var Le=bl,So=new Le,rc=new Le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ac=new Le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wu(){let i={enabled:!0,workingColorSpace:vs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===$e&&(s.r=Un(s.r),s.g=Un(s.g),s.b=Un(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===$e&&(s.r=Wi(s.r),s.g=Wi(s.g),s.b=Wi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===zn?ys:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return gi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return gi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[vs]:{primaries:e,whitePoint:n,transfer:ys,toXYZ:rc,fromXYZ:ac,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Rt},outputColorSpaceConfig:{drawingBufferColorSpace:Rt}},[Rt]:{primaries:e,whitePoint:n,transfer:$e,toXYZ:rc,fromXYZ:ac,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Rt}}}),i}var He=wu();function Un(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Wi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ci,Yr=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ci===void 0&&(Ci=Ss("canvas")),Ci.width=e.width,Ci.height=e.height;let s=Ci.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ci}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ss("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Un(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Un(t[n]/255)*255):t[n]=Un(t[n]);return{data:t,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Cu=0,Yi=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cu++}),this.uuid=Ln(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(bo(s[a].image)):r.push(bo(s[a]))}else r=bo(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function bo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Yr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}var Ru=0,To=new F,kt=class i extends Sn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=yn,s=yn,r=Pt,a=ri,o=nn,l=Qt,c=i.DEFAULT_ANISOTROPY,u=zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ru++}),this.uuid=Ln(),this.name="",this.source=new Yi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(To).x}get height(){return this.source.getSize(To).y}get depth(){return this.source.getSize(To).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ie(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ie(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hr:e.x=e.x-Math.floor(e.x);break;case yn:e.x=e.x<0?0:1;break;case Wr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hr:e.y=e.y-Math.floor(e.y);break;case yn:e.y=e.y<0?0:1;break;case Wr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=sl;kt.DEFAULT_ANISOTROPY=1;var Tl=class Tl{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],_=l[9],S=l[2],g=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-S)<.01&&Math.abs(_-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+S)<.1&&Math.abs(_+g)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let R=(c+1)/2,M=(p+1)/2,A=(m+1)/2,T=(u+h)/4,P=(f+S)/4,v=(_+g)/4;return R>M&&R>A?R<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(R),s=T/n,r=P/n):M>A?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=T/s,r=v/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=P/r,s=v/r),this.set(n,s,r,t),this}let w=Math.sqrt((g-_)*(g-_)+(f-S)*(f-S)+(h-u)*(h-u));return Math.abs(w)<.001&&(w=1),this.x=(g-_)/w,this.y=(f-S)/w,this.z=(h-u)/w,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this.w=We(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this.w=We(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Tl.prototype.isVector4=!0;var ut=Tl,Zr=class extends Sn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new kt(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Pt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Yi(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},pt=class extends Zr{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ts=class extends kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=xt,this.minFilter=xt,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Kr=class extends kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=xt,this.minFilter=xt,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ma=class ma{constructor(e,t,n,s,r,a,o,l,c,u,f,h,p,_,S,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,f,h,p,_,S,g)}set(e,t,n,s,r,a,o,l,c,u,f,h,p,_,S,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=f,m[14]=h,m[3]=p,m[7]=_,m[11]=S,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ma().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Ri.setFromMatrixColumn(e,0).length(),r=1/Ri.setFromMatrixColumn(e,1).length(),a=1/Ri.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let h=a*u,p=a*f,_=o*u,S=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+_*c,t[5]=h-S*c,t[9]=-o*l,t[2]=S-h*c,t[6]=_+p*c,t[10]=a*l}else if(e.order==="YXZ"){let h=l*u,p=l*f,_=c*u,S=c*f;t[0]=h+S*o,t[4]=_*o-p,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=p*o-_,t[6]=S+h*o,t[10]=a*l}else if(e.order==="ZXY"){let h=l*u,p=l*f,_=c*u,S=c*f;t[0]=h-S*o,t[4]=-a*f,t[8]=_+p*o,t[1]=p+_*o,t[5]=a*u,t[9]=S-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let h=a*u,p=a*f,_=o*u,S=o*f;t[0]=l*u,t[4]=_*c-p,t[8]=h*c+S,t[1]=l*f,t[5]=S*c+h,t[9]=p*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let h=a*l,p=a*c,_=o*l,S=o*c;t[0]=l*u,t[4]=S-h*f,t[8]=_*f+p,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*f+_,t[10]=h-S*f}else if(e.order==="XZY"){let h=a*l,p=a*c,_=o*l,S=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+S,t[5]=a*u,t[9]=p*f-_,t[2]=_*f-p,t[6]=o*u,t[10]=S*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Pu,e,Iu)}lookAt(e,t,n){let s=this.elements;return Kt.subVectors(e,t),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),Wn.crossVectors(n,Kt),Wn.lengthSq()===0&&(Math.abs(n.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),Wn.crossVectors(n,Kt)),Wn.normalize(),lr.crossVectors(Kt,Wn),s[0]=Wn.x,s[4]=lr.x,s[8]=Kt.x,s[1]=Wn.y,s[5]=lr.y,s[9]=Kt.y,s[2]=Wn.z,s[6]=lr.z,s[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],p=n[13],_=n[2],S=n[6],g=n[10],m=n[14],w=n[3],R=n[7],M=n[11],A=n[15],T=s[0],P=s[4],v=s[8],E=s[12],U=s[1],I=s[5],O=s[9],K=s[13],$=s[2],k=s[6],Z=s[10],X=s[14],j=s[3],te=s[7],he=s[11],ge=s[15];return r[0]=a*T+o*U+l*$+c*j,r[4]=a*P+o*I+l*k+c*te,r[8]=a*v+o*O+l*Z+c*he,r[12]=a*E+o*K+l*X+c*ge,r[1]=u*T+f*U+h*$+p*j,r[5]=u*P+f*I+h*k+p*te,r[9]=u*v+f*O+h*Z+p*he,r[13]=u*E+f*K+h*X+p*ge,r[2]=_*T+S*U+g*$+m*j,r[6]=_*P+S*I+g*k+m*te,r[10]=_*v+S*O+g*Z+m*he,r[14]=_*E+S*K+g*X+m*ge,r[3]=w*T+R*U+M*$+A*j,r[7]=w*P+R*I+M*k+A*te,r[11]=w*v+R*O+M*Z+A*he,r[15]=w*E+R*K+M*X+A*ge,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],_=e[3],S=e[7],g=e[11],m=e[15],w=l*p-c*h,R=o*p-c*f,M=o*h-l*f,A=a*p-c*u,T=a*h-l*u,P=a*f-o*u;return t*(S*w-g*R+m*M)-n*(_*w-g*A+m*T)+s*(_*R-S*A+m*P)-r*(_*M-S*T+g*P)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],_=e[12],S=e[13],g=e[14],m=e[15],w=t*o-n*a,R=t*l-s*a,M=t*c-r*a,A=n*l-s*o,T=n*c-r*o,P=s*c-r*l,v=u*S-f*_,E=u*g-h*_,U=u*m-p*_,I=f*g-h*S,O=f*m-p*S,K=h*m-p*g,$=w*K-R*O+M*I+A*U-T*E+P*v;if($===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/$;return e[0]=(o*K-l*O+c*I)*k,e[1]=(s*O-n*K-r*I)*k,e[2]=(S*P-g*T+m*A)*k,e[3]=(h*T-f*P-p*A)*k,e[4]=(l*U-a*K-c*E)*k,e[5]=(t*K-s*U+r*E)*k,e[6]=(g*M-_*P-m*R)*k,e[7]=(u*P-h*M+p*R)*k,e[8]=(a*O-o*U+c*v)*k,e[9]=(n*U-t*O-r*v)*k,e[10]=(_*T-S*M+m*w)*k,e[11]=(f*M-u*T-p*w)*k,e[12]=(o*E-a*I-l*v)*k,e[13]=(t*I-n*E+s*v)*k,e[14]=(S*R-_*A-g*w)*k,e[15]=(u*A-f*R+h*w)*k,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,f=o+o,h=r*c,p=r*u,_=r*f,S=a*u,g=a*f,m=o*f,w=l*c,R=l*u,M=l*f,A=n.x,T=n.y,P=n.z;return s[0]=(1-(S+m))*A,s[1]=(p+M)*A,s[2]=(_-R)*A,s[3]=0,s[4]=(p-M)*T,s[5]=(1-(h+m))*T,s[6]=(g+w)*T,s[7]=0,s[8]=(_+R)*P,s[9]=(g-w)*P,s[10]=(1-(h+S))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Ri.set(s[0],s[1],s[2]).length(),o=Ri.set(s[4],s[5],s[6]).length(),l=Ri.set(s[8],s[9],s[10]).length();r<0&&(a=-a),an.copy(this);let c=1/a,u=1/o,f=1/l;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=u,an.elements[5]*=u,an.elements[6]*=u,an.elements[8]*=f,an.elements[9]*=f,an.elements[10]*=f,t.setFromRotationMatrix(an),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=hn,l=!1){let c=this.elements,u=2*r/(t-e),f=2*r/(n-s),h=(t+e)/(t-e),p=(n+s)/(n-s),_,S;if(l)_=r/(a-r),S=a*r/(a-r);else if(o===hn)_=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===Ms)_=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=hn,l=!1){let c=this.elements,u=2/(t-e),f=2/(n-s),h=-(t+e)/(t-e),p=-(n+s)/(n-s),_,S;if(l)_=1/(a-r),S=a/(a-r);else if(o===hn)_=-2/(a-r),S=-(a+r)/(a-r);else if(o===Ms)_=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};ma.prototype.isMatrix4=!0;var ht=ma,Ri=new F,an=new ht,Pu=new F(0,0,0),Iu=new F(1,1,1),Wn=new F,lr=new F,Kt=new F,oc=new ht,lc=new bn,$n=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-We(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(We(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-We(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return oc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(oc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return lc.setFromEuler(this),this.setFromQuaternion(lc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$n.DEFAULT_ORDER="XYZ";var Es=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Du=0,cc=new F,Pi=new bn,wn=new ht,cr=new F,cs=new F,Lu=new F,Uu=new bn,hc=new F(1,0,0),uc=new F(0,1,0),dc=new F(0,0,1),fc={type:"added"},Nu={type:"removed"},Ii={type:"childadded",child:null},Eo={type:"childremoved",child:null},qt=class i extends Sn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Du++}),this.uuid=Ln(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new F,t=new $n,n=new bn,s=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ht},normalMatrix:{value:new Le}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Es,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Pi.setFromAxisAngle(e,t),this.quaternion.multiply(Pi),this}rotateOnWorldAxis(e,t){return Pi.setFromAxisAngle(e,t),this.quaternion.premultiply(Pi),this}rotateX(e){return this.rotateOnAxis(hc,e)}rotateY(e){return this.rotateOnAxis(uc,e)}rotateZ(e){return this.rotateOnAxis(dc,e)}translateOnAxis(e,t){return cc.copy(e).applyQuaternion(this.quaternion),this.position.add(cc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hc,e)}translateY(e){return this.translateOnAxis(uc,e)}translateZ(e){return this.translateOnAxis(dc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?cr.copy(e):cr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wn.lookAt(cs,cr,this.up):wn.lookAt(cr,cs,this.up),this.quaternion.setFromRotationMatrix(wn),s&&(wn.extractRotation(s.matrixWorld),Pi.setFromRotationMatrix(wn),this.quaternion.premultiply(Pi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(De("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fc),Ii.child=e,this.dispatchEvent(Ii),Ii.child=null):De("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Nu),Eo.child=e,this.dispatchEvent(Eo),Eo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(wn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fc),Ii.child=e,this.dispatchEvent(Ii),Ii.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,e,Lu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,Uu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};qt.DEFAULT_UP=new F(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var mi=class extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Fu={type:"move"},Zi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let S of e.hand.values()){let g=t.getJointPose(S,n),m=this._getHandJoint(c,S);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&h>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Fu)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new mi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ch={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xn={h:0,s:0,l:0},hr={h:0,s:0,l:0};function Ao(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ue=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,He.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=He.workingColorSpace){return this.r=e,this.g=t,this.b=n,He.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=He.workingColorSpace){if(e=pl(e,1),t=We(t,0,1),n=We(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ao(a,r,e+1/3),this.g=Ao(a,r,e),this.b=Ao(a,r,e-1/3)}return He.colorSpaceToWorking(this,s),this}setStyle(e,t=Rt){function n(r){r!==void 0&&parseFloat(r)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ie("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rt){let n=ch[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Un(e.r),this.g=Un(e.g),this.b=Un(e.b),this}copyLinearToSRGB(e){return this.r=Wi(e.r),this.g=Wi(e.g),this.b=Wi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return He.workingToColorSpace(Ft.copy(this),e),Math.round(We(Ft.r*255,0,255))*65536+Math.round(We(Ft.g*255,0,255))*256+Math.round(We(Ft.b*255,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=He.workingColorSpace){He.workingToColorSpace(Ft.copy(this),t);let n=Ft.r,s=Ft.g,r=Ft.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=He.workingColorSpace){return He.workingToColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=Rt){He.workingToColorSpace(Ft.copy(this),e);let t=Ft.r,n=Ft.g,s=Ft.b;return e!==Rt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Xn),this.setHSL(Xn.h+e,Xn.s+t,Xn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Xn),e.getHSL(hr);let n=_s(Xn.h,hr.h,t),s=_s(Xn.s,hr.s,t),r=_s(Xn.l,hr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ft=new Ue;Ue.NAMES=ch;var Ki=class extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $n,this.environmentIntensity=1,this.environmentRotation=new $n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},on=new F,Cn=new F,wo=new F,Rn=new F,Di=new F,Li=new F,pc=new F,Co=new F,Ro=new F,Po=new F,Io=new ut,Do=new ut,Lo=new ut,Dn=class i{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),on.subVectors(e,t),s.cross(on);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){on.subVectors(s,t),Cn.subVectors(n,t),wo.subVectors(e,t);let a=on.dot(on),o=on.dot(Cn),l=on.dot(wo),c=Cn.dot(Cn),u=Cn.dot(wo),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let h=1/f,p=(c*l-o*u)*h,_=(a*u-o*l)*h;return r.set(1-p-_,_,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Rn)===null?!1:Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Rn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Rn.x),l.addScaledVector(a,Rn.y),l.addScaledVector(o,Rn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Io.setScalar(0),Do.setScalar(0),Lo.setScalar(0),Io.fromBufferAttribute(e,t),Do.fromBufferAttribute(e,n),Lo.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Io,r.x),a.addScaledVector(Do,r.y),a.addScaledVector(Lo,r.z),a}static isFrontFacing(e,t,n,s){return on.subVectors(n,t),Cn.subVectors(e,t),on.cross(Cn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return on.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),on.cross(Cn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Di.subVectors(s,n),Li.subVectors(r,n),Co.subVectors(e,n);let l=Di.dot(Co),c=Li.dot(Co);if(l<=0&&c<=0)return t.copy(n);Ro.subVectors(e,s);let u=Di.dot(Ro),f=Li.dot(Ro);if(u>=0&&f<=u)return t.copy(s);let h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Di,a);Po.subVectors(e,r);let p=Di.dot(Po),_=Li.dot(Po);if(_>=0&&p<=_)return t.copy(r);let S=p*c-l*_;if(S<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(Li,o);let g=u*_-p*f;if(g<=0&&f-u>=0&&p-_>=0)return pc.subVectors(r,s),o=(f-u)/(f-u+(p-_)),t.copy(s).addScaledVector(pc,o);let m=1/(g+S+h);return a=S*m,o=h*m,t.copy(n).addScaledVector(Di,a).addScaledVector(Li,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Qn=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ln):ln.fromBufferAttribute(r,a),ln.applyMatrix4(e.matrixWorld),this.expandByPoint(ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ur.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ur.copy(n.boundingBox)),ur.applyMatrix4(e.matrixWorld),this.union(ur)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ln),ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(hs),dr.subVectors(this.max,hs),Ui.subVectors(e.a,hs),Ni.subVectors(e.b,hs),Fi.subVectors(e.c,hs),qn.subVectors(Ni,Ui),Yn.subVectors(Fi,Ni),hi.subVectors(Ui,Fi);let t=[0,-qn.z,qn.y,0,-Yn.z,Yn.y,0,-hi.z,hi.y,qn.z,0,-qn.x,Yn.z,0,-Yn.x,hi.z,0,-hi.x,-qn.y,qn.x,0,-Yn.y,Yn.x,0,-hi.y,hi.x,0];return!Uo(t,Ui,Ni,Fi,dr)||(t=[1,0,0,0,1,0,0,0,1],!Uo(t,Ui,Ni,Fi,dr))?!1:(fr.crossVectors(qn,Yn),t=[fr.x,fr.y,fr.z],Uo(t,Ui,Ni,Fi,dr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Pn=[new F,new F,new F,new F,new F,new F,new F,new F],ln=new F,ur=new Qn,Ui=new F,Ni=new F,Fi=new F,qn=new F,Yn=new F,hi=new F,hs=new F,dr=new F,fr=new F,ui=new F;function Uo(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ui.fromArray(i,r);let o=s.x*Math.abs(ui.x)+s.y*Math.abs(ui.y)+s.z*Math.abs(ui.z),l=e.dot(ui),c=t.dot(ui),u=n.dot(ui);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var St=new F,pr=new Re,Bu=0,lt=class extends Sn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Bu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=qr,this.updateRanges=[],this.gpuType=fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)pr.fromBufferAttribute(this,t),pr.applyMatrix3(e),this.setXY(t,pr.x,pr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=cn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=cn(t,this.array)),t}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=cn(t,this.array)),t}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=cn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=cn(t,this.array)),t}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),s=et(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),s=et(s,this.array),r=et(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qr&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var As=class extends lt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ws=class extends lt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Vt=class extends lt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Ou=new Qn,us=new F,No=new F,vi=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Ou.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;us.subVectors(e,this.center);let t=us.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(us,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(No.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(us.copy(e.center).add(No)),this.expandByPoint(us.copy(e.center).sub(No))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},zu=0,en=new ht,Fo=new qt,Bi=new F,Jt=new Qn,ds=new Qn,wt=new F,It=class i extends Sn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zu++}),this.uuid=Ln(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cu(e)?ws:As)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Le().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return en.makeRotationFromQuaternion(e),this.applyMatrix4(en),this}rotateX(e){return en.makeRotationX(e),this.applyMatrix4(en),this}rotateY(e){return en.makeRotationY(e),this.applyMatrix4(en),this}rotateZ(e){return en.makeRotationZ(e),this.applyMatrix4(en),this}translate(e,t,n){return en.makeTranslation(e,t,n),this.applyMatrix4(en),this}scale(e,t,n){return en.makeScale(e,t,n),this.applyMatrix4(en),this}lookAt(e){return Fo.lookAt(e),Fo.updateMatrix(),this.applyMatrix4(Fo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bi).negate(),this.translate(Bi.x,Bi.y,Bi.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Vt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){De("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Jt.setFromBufferAttribute(r),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&De('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){De("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){let n=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ds.setFromBufferAttribute(o),this.morphTargetsRelative?(wt.addVectors(Jt.min,ds.min),Jt.expandByPoint(wt),wt.addVectors(Jt.max,ds.max),Jt.expandByPoint(wt)):(Jt.expandByPoint(ds.min),Jt.expandByPoint(ds.max))}Jt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)wt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(wt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)wt.fromBufferAttribute(o,c),l&&(Bi.fromBufferAttribute(e,c),wt.add(Bi)),s=Math.max(s,n.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&De('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){De("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new lt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new F,l[v]=new F;let c=new F,u=new F,f=new F,h=new Re,p=new Re,_=new Re,S=new F,g=new F;function m(v,E,U){c.fromBufferAttribute(n,v),u.fromBufferAttribute(n,E),f.fromBufferAttribute(n,U),h.fromBufferAttribute(r,v),p.fromBufferAttribute(r,E),_.fromBufferAttribute(r,U),u.sub(c),f.sub(c),p.sub(h),_.sub(h);let I=1/(p.x*_.y-_.x*p.y);isFinite(I)&&(S.copy(u).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(I),g.copy(f).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(I),o[v].add(S),o[E].add(S),o[U].add(S),l[v].add(g),l[E].add(g),l[U].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let v=0,E=w.length;v<E;++v){let U=w[v],I=U.start,O=U.count;for(let K=I,$=I+O;K<$;K+=3)m(e.getX(K+0),e.getX(K+1),e.getX(K+2))}let R=new F,M=new F,A=new F,T=new F;function P(v){A.fromBufferAttribute(s,v),T.copy(A);let E=o[v];R.copy(E),R.sub(A.multiplyScalar(A.dot(E))).normalize(),M.crossVectors(T,E);let I=M.dot(l[v])<0?-1:1;a.setXYZW(v,R.x,R.y,R.z,I)}for(let v=0,E=w.length;v<E;++v){let U=w[v],I=U.start,O=U.count;for(let K=I,$=I+O;K<$;K+=3)P(e.getX(K+0)),P(e.getX(K+1)),P(e.getX(K+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new lt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);let s=new F,r=new F,a=new F,o=new F,l=new F,c=new F,u=new F,f=new F;if(e)for(let h=0,p=e.count;h<p;h+=3){let _=e.getX(h+0),S=e.getX(h+1),g=e.getX(h+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,S),a.fromBufferAttribute(t,g),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,g),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u),p=0,_=0;for(let S=0,g=l.length;S<g;S++){o.isInterleavedBufferAttribute?p=l[S]*o.data.stride+o.offset:p=l[S]*u;for(let m=0;m<u;m++)h[_++]=c[p++]}return new lt(h,u,f)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){let h=c[u],p=e(h,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){let p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],f=r[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=qr,this.updateRanges=[],this.version=0,this.uuid=Ln()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},zt=new F,Cs=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=cn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=et(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=cn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=cn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=cn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=cn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),s=et(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),s=et(s,this.array),r=et(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){bs("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new lt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){bs("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Vu=0,Fn=class extends Sn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vu++}),this.uuid=Ln(),this.name="",this.type="Material",this.blending=_i,this.side=Nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ur,this.blendDst=Nr,this.blendEquation=Jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=xi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pi,this.stencilZFail=pi,this.stencilZPass=pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ie(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ie(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_i&&(n.blending=this.blending),this.side!==Nn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ur&&(n.blendSrc=this.blendSrc),this.blendDst!==Nr&&(n.blendDst=this.blendDst),this.blendEquation!==Jn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==xi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==pi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==pi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==pi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ue().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Re().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Re().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},yi=class extends Fn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Oi,fs=new F,zi=new F,Vi=new F,ki=new Re,ps=new Re,hh=new ht,mr=new F,ms=new F,gr=new F,mc=new Re,Bo=new Re,gc=new Re,Ji=class extends qt{constructor(e=new yi){if(super(),this.isSprite=!0,this.type="Sprite",Oi===void 0){Oi=new It;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Jr(t,5);Oi.setIndex([0,1,2,0,2,3]),Oi.setAttribute("position",new Cs(n,3,0,!1)),Oi.setAttribute("uv",new Cs(n,2,3,!1))}this.geometry=Oi,this.material=e,this.center=new Re(.5,.5),this.count=1}raycast(e,t){e.camera===null&&De('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),zi.setFromMatrixScale(this.matrixWorld),hh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Vi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&zi.multiplyScalar(-Vi.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;_r(mr.set(-.5,-.5,0),Vi,a,zi,s,r),_r(ms.set(.5,-.5,0),Vi,a,zi,s,r),_r(gr.set(.5,.5,0),Vi,a,zi,s,r),mc.set(0,0),Bo.set(1,0),gc.set(1,1);let o=e.ray.intersectTriangle(mr,ms,gr,!1,fs);if(o===null&&(_r(ms.set(-.5,.5,0),Vi,a,zi,s,r),Bo.set(0,1),o=e.ray.intersectTriangle(mr,gr,ms,!1,fs),o===null))return;let l=e.ray.origin.distanceTo(fs);l<e.near||l>e.far||t.push({distance:l,point:fs.clone(),uv:Dn.getInterpolation(fs,mr,ms,gr,mc,Bo,gc,new Re),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function _r(i,e,t,n,s,r){ki.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(ps.x=r*ki.x-s*ki.y,ps.y=s*ki.x+r*ki.y):ps.copy(ki),i.copy(e),i.x+=ps.x,i.y+=ps.y,i.applyMatrix4(hh)}var In=new F,Oo=new F,xr=new F,Zn=new F,zo=new F,vr=new F,Vo=new F,Rs=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,In)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=In.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(In.copy(this.origin).addScaledVector(this.direction,t),In.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Oo.copy(e).add(t).multiplyScalar(.5),xr.copy(t).sub(e).normalize(),Zn.copy(this.origin).sub(Oo);let r=e.distanceTo(t)*.5,a=-this.direction.dot(xr),o=Zn.dot(this.direction),l=-Zn.dot(xr),c=Zn.lengthSq(),u=Math.abs(1-a*a),f,h,p,_;if(u>0)if(f=a*l-o,h=a*o-l,_=r*u,f>=0)if(h>=-_)if(h<=_){let S=1/u;f*=S,h*=S,p=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Oo).addScaledVector(xr,h),p}intersectSphere(e,t){In.subVectors(e.center,this.origin);let n=In.dot(this.direction),s=In.dot(In)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,In)!==null}intersectTriangle(e,t,n,s,r){zo.subVectors(t,e),vr.subVectors(n,e),Vo.crossVectors(zo,vr);let a=this.direction.dot(Vo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Zn.subVectors(this.origin,e);let l=o*this.direction.dot(vr.crossVectors(Zn,vr));if(l<0)return null;let c=o*this.direction.dot(zo.cross(Zn));if(c<0||l+c>a)return null;let u=-o*Zn.dot(Vo);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Bn=class extends Fn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=il,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},_c=new ht,di=new Rs,yr=new vi,xc=new F,Mr=new F,Sr=new F,br=new F,ko=new F,Tr=new F,vc=new F,Er=new F,Dt=class extends qt{constructor(e=new It,t=new Bn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Tr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],f=r[l];u!==0&&(ko.fromBufferAttribute(f,e),a?Tr.addScaledVector(ko,u):Tr.addScaledVector(ko.sub(t),u))}t.add(Tr)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),yr.copy(n.boundingSphere),yr.applyMatrix4(r),di.copy(e.ray).recast(e.near),!(yr.containsPoint(di.origin)===!1&&(di.intersectSphere(yr,xc)===null||di.origin.distanceToSquared(xc)>(e.far-e.near)**2))&&(_c.copy(r).invert(),di.copy(e.ray).applyMatrix4(_c),!(n.boundingBox!==null&&di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,di)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,S=h.length;_<S;_++){let g=h[_],m=a[g.materialIndex],w=Math.max(g.start,p.start),R=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let M=w,A=R;M<A;M+=3){let T=o.getX(M),P=o.getX(M+1),v=o.getX(M+2);s=Ar(this,m,e,n,c,u,f,T,P,v),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let _=Math.max(0,p.start),S=Math.min(o.count,p.start+p.count);for(let g=_,m=S;g<m;g+=3){let w=o.getX(g),R=o.getX(g+1),M=o.getX(g+2);s=Ar(this,a,e,n,c,u,f,w,R,M),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,S=h.length;_<S;_++){let g=h[_],m=a[g.materialIndex],w=Math.max(g.start,p.start),R=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let M=w,A=R;M<A;M+=3){let T=M,P=M+1,v=M+2;s=Ar(this,m,e,n,c,u,f,T,P,v),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let _=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let g=_,m=S;g<m;g+=3){let w=g,R=g+1,M=g+2;s=Ar(this,a,e,n,c,u,f,w,R,M),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function ku(i,e,t,n,s,r,a,o){let l;if(e.side===Gt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Nn,o),l===null)return null;Er.copy(o),Er.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Er);return c<t.near||c>t.far?null:{distance:c,point:Er.clone(),object:i}}function Ar(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Mr),i.getVertexPosition(l,Sr),i.getVertexPosition(c,br);let u=ku(i,e,t,n,Mr,Sr,br,vc);if(u){let f=new F;Dn.getBarycoord(vc,Mr,Sr,br,f),s&&(u.uv=Dn.getInterpolatedAttribute(s,o,l,c,f,new Re)),r&&(u.uv1=Dn.getInterpolatedAttribute(r,o,l,c,f,new Re)),a&&(u.normal=Dn.getInterpolatedAttribute(a,o,l,c,f,new F),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new F,materialIndex:0};Dn.getNormal(Mr,Sr,br,h.normal),u.face=h,u.barycoord=f}return u}var $r=class extends kt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=xt,u=xt,f,h){super(null,a,o,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Go=new F,Gu=new F,Hu=new Le,vn=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Go.subVectors(n,t).cross(Gu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Go),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Hu.getNormalMatrix(e),s=this.coplanarPoint(Go).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},fi=new vi,Wu=new Re(.5,.5),wr=new F,Ps=class{constructor(e=new vn,t=new vn,n=new vn,s=new vn,r=new vn,a=new vn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=hn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],f=r[5],h=r[6],p=r[7],_=r[8],S=r[9],g=r[10],m=r[11],w=r[12],R=r[13],M=r[14],A=r[15];if(s[0].setComponents(c-a,p-u,m-_,A-w).normalize(),s[1].setComponents(c+a,p+u,m+_,A+w).normalize(),s[2].setComponents(c+o,p+f,m+S,A+R).normalize(),s[3].setComponents(c-o,p-f,m-S,A-R).normalize(),n)s[4].setComponents(l,h,g,M).normalize(),s[5].setComponents(c-l,p-h,m-g,A-M).normalize();else if(s[4].setComponents(c-l,p-h,m-g,A-M).normalize(),t===hn)s[5].setComponents(c+l,p+h,m+g,A+M).normalize();else if(t===Ms)s[5].setComponents(l,h,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fi)}intersectsSprite(e){fi.center.set(0,0,0);let t=Wu.distanceTo(e.center);return fi.radius=.7071067811865476+t,fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(wr.x=s.normal.x>0?e.max.x:e.min.x,wr.y=s.normal.y>0?e.max.y:e.min.y,wr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(wr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Qr=class extends Fn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},yc=new ht,$o=new Rs,Cr=new vi,Rr=new F,$i=class extends qt{constructor(e=new It,t=new Qr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere),Cr.applyMatrix4(s),Cr.radius+=r,e.ray.intersectsSphere(Cr)===!1)return;yc.copy(s).invert(),$o.copy(e.ray).applyMatrix4(yc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){let h=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let _=h,S=p;_<S;_++){let g=c.getX(_);Rr.fromBufferAttribute(f,g),Mc(Rr,g,l,s,e,t,this)}}else{let h=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let _=h,S=p;_<S;_++)Rr.fromBufferAttribute(f,_),Mc(Rr,_,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Mc(i,e,t,n,s,r,a){let o=$o.distanceSqToPoint(i);if(o<t){let l=new F;$o.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Is=class extends kt{constructor(e=[],t=si,n,s,r,a,o,l,c,u){super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Qi=class extends kt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var On=class extends kt{constructor(e,t,n=dn,s,r,a,o=xt,l=xt,c,u=Mn,f=1){if(u!==Mn&&u!==ai)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:f};super(h,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Yi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},jr=class extends On{constructor(e,t=dn,n=si,s,r,a=xt,o=xt,l,c=Mn){let u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ds=class extends kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ji=class i extends It{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],f=[],h=0,p=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,s,a,2),_("x","z","y",1,-1,e,n,-t,s,a,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Vt(c,3)),this.setAttribute("normal",new Vt(u,3)),this.setAttribute("uv",new Vt(f,2));function _(S,g,m,w,R,M,A,T,P,v,E){let U=M/P,I=A/v,O=M/2,K=A/2,$=T/2,k=P+1,Z=v+1,X=0,j=0,te=new F;for(let he=0;he<Z;he++){let ge=he*I-K;for(let ye=0;ye<k;ye++){let qe=ye*U-O;te[S]=qe*w,te[g]=ge*R,te[m]=$,c.push(te.x,te.y,te.z),te[S]=0,te[g]=0,te[m]=T>0?1:-1,u.push(te.x,te.y,te.z),f.push(ye/P),f.push(1-he/v),X+=1}}for(let he=0;he<v;he++)for(let ge=0;ge<P;ge++){let ye=h+ge+k*he,qe=h+ge+k*(he+1),ct=h+(ge+1)+k*(he+1),Oe=h+(ge+1)+k*he;l.push(ye,qe,Oe),l.push(qe,ct,Oe),j+=6}o.addGroup(p,j,E),p+=j,h+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var ea=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ie("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let u=n[s],h=n[s+1]-u,p=(a-u)/h;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new Re:new F);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new F,s=[],r=[],a=[],o=new F,l=new ht;for(let p=0;p<=e;p++){let _=p/e;s[p]=this.getTangentAt(_,new F)}r[0]=new F,a[0]=new F;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let _=Math.acos(We(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,_))}a[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(We(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],p*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}};function gl(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,f){let h=(a-r)/c-(o-r)/(c+u)+(o-a)/u,p=(o-a)/u-(l-a)/(u+f)+(l-o)/f;h*=u,p*=u,s(a,o,h,p)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Sc=new F,bc=new F,Ho=new gl,Wo=new gl,Xo=new gl,es=class extends ea{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new F){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(bc.subVectors(s[0],s[1]).add(s[0]),c=bc);let f=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Sc.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Sc),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,_=Math.pow(c.distanceToSquared(f),p),S=Math.pow(f.distanceToSquared(h),p),g=Math.pow(h.distanceToSquared(u),p);S<1e-4&&(S=1),_<1e-4&&(_=S),g<1e-4&&(g=S),Ho.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,_,S,g),Wo.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,_,S,g),Xo.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,_,S,g)}else this.curveType==="catmullrom"&&(Ho.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),Wo.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),Xo.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return n.set(Ho.calc(l),Wo.calc(l),Xo.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new F().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};var jn=class i extends It{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,f=e/o,h=t/l,p=[],_=[],S=[],g=[];for(let m=0;m<u;m++){let w=m*h-a;for(let R=0;R<c;R++){let M=R*f-r;_.push(M,-w,0),S.push(0,0,1),g.push(R/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let w=0;w<o;w++){let R=w+c*m,M=w+c*(m+1),A=w+1+c*(m+1),T=w+1+c*m;p.push(R,M,T),p.push(M,A,T)}this.setIndex(p),this.setAttribute("position",new Vt(_,3)),this.setAttribute("normal",new Vt(S,3)),this.setAttribute("uv",new Vt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};function Ti(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Tc(s))s.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Tc(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Ot(i){let e={};for(let t=0;t<i.length;t++){let n=Ti(i[t]);for(let s in n)e[s]=n[s]}return e}function Tc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Xu(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function _l(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:He.workingColorSpace}var sn={clone:Ti,merge:Ot},qu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,st=class extends Fn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qu,this.fragmentShader=Yu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ti(e.uniforms),this.uniformsGroups=Xu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ue().setHex(s.value);break;case"v2":this.uniforms[n].value=new Re().fromArray(s.value);break;case"v3":this.uniforms[n].value=new F().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ut().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Le().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ht().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ts=class extends st{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var ta=class extends Fn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$c,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},na=class extends Fn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Pr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}var ei=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ia=class extends ei{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yo,endingEnd:Yo}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Zo:r=e,o=2*t-n;break;case Ko:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Zo:a=e,l=2*n-t;break;case Ko:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,p=this._weightNext,_=(n-t)/(s-t),S=_*_,g=S*_,m=-h*g+2*h*S-h*_,w=(1+h)*g+(-1.5-2*h)*S+(-.5+h)*_+1,R=(-1-p)*g+(1.5+p)*S+.5*_,M=p*g-p*S;for(let A=0;A!==o;++A)r[A]=m*a[u+A]+w*a[c+A]+R*a[l+A]+M*a[f+A];return r}},sa=class extends ei{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(s-t),f=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*f+a[l+h]*u;return r}},ra=class extends ei{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},aa=class extends ei{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,f=this.outTangents;if(!u||!f){let _=(n-t)/(s-t),S=1-_;for(let g=0;g!==o;++g)r[g]=a[c+g]*S+a[l+g]*_;return r}let h=o*2,p=e-1;for(let _=0;_!==o;++_){let S=a[c+_],g=a[l+_],m=p*h+_*2,w=f[m],R=f[m+1],M=e*h+_*2,A=u[M],T=u[M+1],P=(n-t)/(s-t),v,E,U,I,O;for(let K=0;K<8;K++){v=P*P,E=v*P,U=1-P,I=U*U,O=I*U;let k=O*t+3*I*P*w+3*U*v*A+E*s-n;if(Math.abs(k)<1e-10)break;let Z=3*I*(w-t)+6*U*P*(A-w)+3*v*(s-A);if(Math.abs(Z)<1e-10)break;P=P-k/Z,P=Math.max(0,Math.min(1,P))}r[_]=O*S+3*I*P*R+3*U*v*T+E*g}return r}},$t=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Pr(t,this.TimeBufferType),this.values=Pr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Pr(e.times,Array),values:Pr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ra(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new sa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ia(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new aa(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case xs:t=this.InterpolantFactoryMethodDiscrete;break;case Xr:t=this.InterpolantFactoryMethodLinear;break;case Lr:t=this.InterpolantFactoryMethodSmooth;break;case qo:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ie("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xs;case this.InterpolantFactoryMethodLinear:return Xr;case this.InterpolantFactoryMethodSmooth:return Lr;case this.InterpolantFactoryMethodBezier:return qo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(De("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(De("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){De("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){De("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&hu(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){De("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Lr,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let f=o*n,h=f-n,p=f+n;for(let _=0;_!==n;++_){let S=t[f+_];if(S!==t[h+_]||S!==t[p+_]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let f=o*n,h=a*n;for(let p=0;p!==n;++p)t[h+p]=t[f+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};$t.prototype.ValueTypeName="";$t.prototype.TimeBufferType=Float32Array;$t.prototype.ValueBufferType=Float32Array;$t.prototype.DefaultInterpolation=Xr;var ti=class extends $t{constructor(e,t,n){super(e,t,n)}};ti.prototype.ValueTypeName="bool";ti.prototype.ValueBufferType=Array;ti.prototype.DefaultInterpolation=xs;ti.prototype.InterpolantFactoryMethodLinear=void 0;ti.prototype.InterpolantFactoryMethodSmooth=void 0;var oa=class extends $t{constructor(e,t,n,s){super(e,t,n,s)}};oa.prototype.ValueTypeName="color";var la=class extends $t{constructor(e,t,n,s){super(e,t,n,s)}};la.prototype.ValueTypeName="number";var ca=class extends ei{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)bn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ls=class extends $t{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new ca(this.times,this.values,this.getValueSize(),e)}};Ls.prototype.ValueTypeName="quaternion";Ls.prototype.InterpolantFactoryMethodSmooth=void 0;var ni=class extends $t{constructor(e,t,n){super(e,t,n)}};ni.prototype.ValueTypeName="string";ni.prototype.ValueBufferType=Array;ni.prototype.DefaultInterpolation=xs;ni.prototype.InterpolantFactoryMethodLinear=void 0;ni.prototype.InterpolantFactoryMethodSmooth=void 0;var ha=class extends $t{constructor(e,t,n,s){super(e,t,n,s)}};ha.prototype.ValueTypeName="vector";var ua=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){let p=c[f],_=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},uh=new ua,da=class{constructor(e){this.manager=e!==void 0?e:uh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};da.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ir=new F,Dr=new bn,xn=new F,Us=class extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=hn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ir,Dr,xn),xn.x===1&&xn.y===1&&xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ir,Dr,xn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ir,Dr,xn),xn.x===1&&xn.y===1&&xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ir,Dr,xn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Kn=new F,Ec=new Re,Ac=new Re,Bt=class extends Us{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=qi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(gs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qi*2*Math.atan(Math.tan(gs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Kn.x,Kn.y).multiplyScalar(-e/Kn.z),Kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Kn.x,Kn.y).multiplyScalar(-e/Kn.z)}getViewSize(e,t){return this.getViewBounds(e,Ec,Ac),t.subVectors(Ac,Ec)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(gs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Mi=class extends Us{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var Gi=-90,Hi=1,fa=class extends qt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Bt(Gi,Hi,e,t);s.layers=this.layers,this.add(s);let r=new Bt(Gi,Hi,e,t);r.layers=this.layers,this.add(r);let a=new Bt(Gi,Hi,e,t);a.layers=this.layers,this.add(a);let o=new Bt(Gi,Hi,e,t);o.layers=this.layers,this.add(o);let l=new Bt(Gi,Hi,e,t);l.layers=this.layers,this.add(l);let c=new Bt(Gi,Hi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===hn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ms)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=S,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},pa=class extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Ns=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Zu.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Zu(){this._document.hidden===!1&&this.reset()}var xl="\\[\\]\\.:\\/",Ku=new RegExp("["+xl+"]","g"),vl="[^"+xl+"]",Ju="[^"+xl.replace("\\.","")+"]",$u=/((?:WC+[\/:])*)/.source.replace("WC",vl),Qu=/(WCOD+)?/.source.replace("WCOD",Ju),ju=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vl),ed=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vl),td=new RegExp("^"+$u+Qu+ju+ed+"$"),nd=["material","materials","bones","map"],Qo=class{constructor(e,t,n){let s=n||ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ot=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ku,"")}static parseTrackName(e){let t=td.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);nd.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ie("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){De("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){De("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){De("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){De("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){De("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){De("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){De("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;De("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){De("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){De("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ot.Composite=Qo;ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ot.prototype.GetterByBindingType=[ot.prototype._getValue_direct,ot.prototype._getValue_array,ot.prototype._getValue_arrayElement,ot.prototype._getValue_toArray];ot.prototype.SetterByBindingTypeAndVersioning=[[ot.prototype._setValue_direct,ot.prototype._setValue_direct_setNeedsUpdate,ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_array,ot.prototype._setValue_array_setNeedsUpdate,ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_arrayElement,ot.prototype._setValue_arrayElement_setNeedsUpdate,ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_fromArray,ot.prototype._setValue_fromArray_setNeedsUpdate,ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var d0=new Float32Array(1);var El=class El{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};El.prototype.isMatrix2=!0;var jo=El;function yl(i,e,t,n){let s=id(n);switch(t){case cl:return i*e;case ul:return i*e/s.components*s.byteLength;case Sa:return i*e/s.components*s.byteLength;case oi:return i*e*2/s.components*s.byteLength;case ba:return i*e*2/s.components*s.byteLength;case hl:return i*e*3/s.components*s.byteLength;case nn:return i*e*4/s.components*s.byteLength;case Ta:return i*e*4/s.components*s.byteLength;case Xs:case qs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ys:case Zs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Aa:case Ca:return Math.max(i,16)*Math.max(e,8)/4;case Ea:case wa:return Math.max(i,8)*Math.max(e,8)/2;case Ra:case Pa:case Da:case La:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ia:case Ks:case Ua:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Na:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ba:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Oa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case za:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Va:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ka:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ga:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ha:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Wa:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Xa:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case qa:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ya:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Za:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ka:case Ja:case $a:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Qa:case ja:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Js:case eo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function id(i){switch(i){case Qt:case rl:return{byteLength:1,components:1};case is:case al:case Tt:return{byteLength:2,components:1};case ya:case Ma:return{byteLength:2,components:4};case dn:case va:case fn:return{byteLength:4,components:1};case ol:case ll:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function Uh(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function rd(i){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let u=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,u);else{f.sort((p,_)=>p.start-_.start);let h=0;for(let p=1;p<f.length;p++){let _=f[h],S=f[p];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++h,f[h]=S)}f.length=h+1;for(let p=0,_=f.length;p<_;p++){let S=f[p];i.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var ad=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,od=`#ifdef USE_ALPHAHASH
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
#endif`,ld=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ud=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dd=`#ifdef USE_AOMAP
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
#endif`,fd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pd=`#ifdef USE_BATCHING
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
#endif`,md=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_d=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vd=`#ifdef USE_IRIDESCENCE
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
#endif`,yd=`#ifdef USE_BUMPMAP
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
#endif`,Md=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Sd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Td=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ed=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ad=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,wd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Cd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Rd=`#define PI 3.141592653589793
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
} // validated`,Pd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Id=`vec3 transformedNormal = objectNormal;
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
#endif`,Dd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ld=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ud=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Od=`#ifdef USE_ENVMAP
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
#endif`,zd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Vd=`#ifdef USE_ENVMAP
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
#endif`,kd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gd=`#ifdef USE_ENVMAP
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
#endif`,Hd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yd=`#ifdef USE_GRADIENTMAP
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
}`,Zd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$d=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Qd=`#ifdef USE_ENVMAP
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
	#endif
#endif`,jd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ef=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sf=`PhysicalMaterial material;
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
#endif`,rf=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
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
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
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
}`,af=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
#endif`,of=`#if defined( RE_IndirectDiffuse )
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
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cf=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,hf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,df=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ff=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_f=`#if defined( USE_POINTS_UV )
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
#endif`,xf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Mf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bf=`#ifdef USE_MORPHTARGETS
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
#endif`,Tf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ef=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Af=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Pf=`#ifdef USE_NORMALMAP
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
#endif`,If=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Df=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Uf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ff=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Bf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Of=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,Wf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,Xf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,qf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
}`,Yf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zf=`#ifdef USE_SKINNING
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
#endif`,Kf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jf=`#ifdef USE_SKINNING
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
#endif`,$f=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ep=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tp=`#ifdef USE_TRANSMISSION
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
#endif`,np=`#ifdef USE_TRANSMISSION
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
#endif`,ip=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ap=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,op=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lp=`uniform sampler2D t2D;
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
}`,cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,up=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fp=`#include <common>
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
}`,pp=`#if DEPTH_PACKING == 3200
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
}`,mp=`#define DISTANCE
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
}`,gp=`#define DISTANCE
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
}`,_p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vp=`uniform float scale;
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
}`,yp=`uniform vec3 diffuse;
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
}`,Mp=`#include <common>
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
}`,Sp=`uniform vec3 diffuse;
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
}`,bp=`#define LAMBERT
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
}`,Tp=`#define LAMBERT
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
}`,Ep=`#define MATCAP
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
}`,Ap=`#define MATCAP
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
}`,wp=`#define NORMAL
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
}`,Cp=`#define NORMAL
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
}`,Rp=`#define PHONG
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
}`,Pp=`#define PHONG
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
}`,Ip=`#define STANDARD
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
}`,Dp=`#define STANDARD
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
}`,Lp=`#define TOON
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
}`,Up=`#define TOON
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
}`,Np=`uniform float size;
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
}`,Fp=`uniform vec3 diffuse;
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
}`,Bp=`#include <common>
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
}`,Op=`uniform vec3 color;
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
}`,zp=`uniform float rotation;
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
}`,Vp=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:ad,alphahash_pars_fragment:od,alphamap_fragment:ld,alphamap_pars_fragment:cd,alphatest_fragment:hd,alphatest_pars_fragment:ud,aomap_fragment:dd,aomap_pars_fragment:fd,batching_pars_vertex:pd,batching_vertex:md,begin_vertex:gd,beginnormal_vertex:_d,bsdfs:xd,iridescence_fragment:vd,bumpmap_pars_fragment:yd,clipping_planes_fragment:Md,clipping_planes_pars_fragment:Sd,clipping_planes_pars_vertex:bd,clipping_planes_vertex:Td,color_fragment:Ed,color_pars_fragment:Ad,color_pars_vertex:wd,color_vertex:Cd,common:Rd,cube_uv_reflection_fragment:Pd,defaultnormal_vertex:Id,displacementmap_pars_vertex:Dd,displacementmap_vertex:Ld,emissivemap_fragment:Ud,emissivemap_pars_fragment:Nd,colorspace_fragment:Fd,colorspace_pars_fragment:Bd,envmap_fragment:Od,envmap_common_pars_fragment:zd,envmap_pars_fragment:Vd,envmap_pars_vertex:kd,envmap_physical_pars_fragment:Qd,envmap_vertex:Gd,fog_vertex:Hd,fog_pars_vertex:Wd,fog_fragment:Xd,fog_pars_fragment:qd,gradientmap_pars_fragment:Yd,lightmap_pars_fragment:Zd,lights_lambert_fragment:Kd,lights_lambert_pars_fragment:Jd,lights_pars_begin:$d,lights_toon_fragment:jd,lights_toon_pars_fragment:ef,lights_phong_fragment:tf,lights_phong_pars_fragment:nf,lights_physical_fragment:sf,lights_physical_pars_fragment:rf,lights_fragment_begin:af,lights_fragment_maps:of,lights_fragment_end:lf,lightprobes_pars_fragment:cf,logdepthbuf_fragment:hf,logdepthbuf_pars_fragment:uf,logdepthbuf_pars_vertex:df,logdepthbuf_vertex:ff,map_fragment:pf,map_pars_fragment:mf,map_particle_fragment:gf,map_particle_pars_fragment:_f,metalnessmap_fragment:xf,metalnessmap_pars_fragment:vf,morphinstance_vertex:yf,morphcolor_vertex:Mf,morphnormal_vertex:Sf,morphtarget_pars_vertex:bf,morphtarget_vertex:Tf,normal_fragment_begin:Ef,normal_fragment_maps:Af,normal_pars_fragment:wf,normal_pars_vertex:Cf,normal_vertex:Rf,normalmap_pars_fragment:Pf,clearcoat_normal_fragment_begin:If,clearcoat_normal_fragment_maps:Df,clearcoat_pars_fragment:Lf,iridescence_pars_fragment:Uf,opaque_fragment:Nf,packing:Ff,premultiplied_alpha_fragment:Bf,project_vertex:Of,dithering_fragment:zf,dithering_pars_fragment:Vf,roughnessmap_fragment:kf,roughnessmap_pars_fragment:Gf,shadowmap_pars_fragment:Hf,shadowmap_pars_vertex:Wf,shadowmap_vertex:Xf,shadowmask_pars_fragment:qf,skinbase_vertex:Yf,skinning_pars_vertex:Zf,skinning_vertex:Kf,skinnormal_vertex:Jf,specularmap_fragment:$f,specularmap_pars_fragment:Qf,tonemapping_fragment:jf,tonemapping_pars_fragment:ep,transmission_fragment:tp,transmission_pars_fragment:np,uv_pars_fragment:ip,uv_pars_vertex:sp,uv_vertex:rp,worldpos_vertex:ap,background_vert:op,background_frag:lp,backgroundCube_vert:cp,backgroundCube_frag:hp,cube_vert:up,cube_frag:dp,depth_vert:fp,depth_frag:pp,distance_vert:mp,distance_frag:gp,equirect_vert:_p,equirect_frag:xp,linedashed_vert:vp,linedashed_frag:yp,meshbasic_vert:Mp,meshbasic_frag:Sp,meshlambert_vert:bp,meshlambert_frag:Tp,meshmatcap_vert:Ep,meshmatcap_frag:Ap,meshnormal_vert:wp,meshnormal_frag:Cp,meshphong_vert:Rp,meshphong_frag:Pp,meshphysical_vert:Ip,meshphysical_frag:Dp,meshtoon_vert:Lp,meshtoon_frag:Up,points_vert:Np,points_frag:Fp,shadow_vert:Bp,shadow_frag:Op,sprite_vert:zp,sprite_frag:Vp},pe={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Le}},envmap:{envMap:{value:null},envMapRotation:{value:new Le},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Le},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}}},En={basic:{uniforms:Ot([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Ot([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ue(0)},envMapIntensity:{value:1}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Ot([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Ot([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Ot([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Ue(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Ot([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Ot([pe.points,pe.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Ot([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Ot([pe.common,pe.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Ot([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Ot([pe.sprite,pe.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Le}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distance:{uniforms:Ot([pe.common,pe.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distance_vert,fragmentShader:ze.distance_frag},shadow:{uniforms:Ot([pe.lights,pe.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};En.physical={uniforms:Ot([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Le},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Le},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Le},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Le},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Le},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Le}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};var io={r:0,b:0,g:0},kp=new ht,Nh=new Le;Nh.set(-1,0,0,0,1,0,0,0,1);function Gp(i,e,t,n,s,r){let a=new Ue(0),o=s===!0?0:1,l,c,u=null,f=0,h=null;function p(w){let R=w.isScene===!0?w.background:null;if(R&&R.isTexture){let M=w.backgroundBlurriness>0;R=e.get(R,M)}return R}function _(w){let R=!1,M=p(w);M===null?g(a,o):M&&M.isColor&&(g(M,1),R=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(w,R){let M=p(R);M&&(M.isCubeTexture||M.mapping===Hs)?(c===void 0&&(c=new Dt(new ji(1,1,1),new st({name:"BackgroundCubeMaterial",uniforms:Ti(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,T,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(kp.makeRotationFromEuler(R.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Nh),c.material.toneMapped=He.getTransfer(M.colorSpace)!==$e,(u!==M||f!==M.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,f=M.version,h=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Dt(new jn(2,2),new st({name:"BackgroundMaterial",uniforms:Ti(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=He.getTransfer(M.colorSpace)!==$e,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=M,f=M.version,h=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function g(w,R){w.getRGB(io,_l(i)),t.buffers.color.setClear(io.r,io.g,io.b,R,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,R=1){a.set(w),o=R,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(w){o=w,g(a,o)},render:_,addToRenderList:S,dispose:m}}function Hp(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,a=!1;function o(I,O,K,$,k){let Z=!1,X=f(I,$,K,O);r!==X&&(r=X,c(r.object)),Z=p(I,$,K,k),Z&&_(I,$,K,k),k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,M(I,O,K,$),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return i.createVertexArray()}function c(I){return i.bindVertexArray(I)}function u(I){return i.deleteVertexArray(I)}function f(I,O,K,$){let k=$.wireframe===!0,Z=n[O.id];Z===void 0&&(Z={},n[O.id]=Z);let X=I.isInstancedMesh===!0?I.id:0,j=Z[X];j===void 0&&(j={},Z[X]=j);let te=j[K.id];te===void 0&&(te={},j[K.id]=te);let he=te[k];return he===void 0&&(he=h(l()),te[k]=he),he}function h(I){let O=[],K=[],$=[];for(let k=0;k<t;k++)O[k]=0,K[k]=0,$[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:K,attributeDivisors:$,object:I,attributes:{},index:null}}function p(I,O,K,$){let k=r.attributes,Z=O.attributes,X=0,j=K.getAttributes();for(let te in j)if(j[te].location>=0){let ge=k[te],ye=Z[te];if(ye===void 0&&(te==="instanceMatrix"&&I.instanceMatrix&&(ye=I.instanceMatrix),te==="instanceColor"&&I.instanceColor&&(ye=I.instanceColor)),ge===void 0||ge.attribute!==ye||ye&&ge.data!==ye.data)return!0;X++}return r.attributesNum!==X||r.index!==$}function _(I,O,K,$){let k={},Z=O.attributes,X=0,j=K.getAttributes();for(let te in j)if(j[te].location>=0){let ge=Z[te];ge===void 0&&(te==="instanceMatrix"&&I.instanceMatrix&&(ge=I.instanceMatrix),te==="instanceColor"&&I.instanceColor&&(ge=I.instanceColor));let ye={};ye.attribute=ge,ge&&ge.data&&(ye.data=ge.data),k[te]=ye,X++}r.attributes=k,r.attributesNum=X,r.index=$}function S(){let I=r.newAttributes;for(let O=0,K=I.length;O<K;O++)I[O]=0}function g(I){m(I,0)}function m(I,O){let K=r.newAttributes,$=r.enabledAttributes,k=r.attributeDivisors;K[I]=1,$[I]===0&&(i.enableVertexAttribArray(I),$[I]=1),k[I]!==O&&(i.vertexAttribDivisor(I,O),k[I]=O)}function w(){let I=r.newAttributes,O=r.enabledAttributes;for(let K=0,$=O.length;K<$;K++)O[K]!==I[K]&&(i.disableVertexAttribArray(K),O[K]=0)}function R(I,O,K,$,k,Z,X){X===!0?i.vertexAttribIPointer(I,O,K,k,Z):i.vertexAttribPointer(I,O,K,$,k,Z)}function M(I,O,K,$){S();let k=$.attributes,Z=K.getAttributes(),X=O.defaultAttributeValues;for(let j in Z){let te=Z[j];if(te.location>=0){let he=k[j];if(he===void 0&&(j==="instanceMatrix"&&I.instanceMatrix&&(he=I.instanceMatrix),j==="instanceColor"&&I.instanceColor&&(he=I.instanceColor)),he!==void 0){let ge=he.normalized,ye=he.itemSize,qe=e.get(he);if(qe===void 0)continue;let ct=qe.buffer,Oe=qe.type,Q=qe.bytesPerElement,ue=Oe===i.INT||Oe===i.UNSIGNED_INT||he.gpuType===va;if(he.isInterleavedBufferAttribute){let re=he.data,Pe=re.stride,ce=he.offset;if(re.isInstancedInterleavedBuffer){for(let Ce=0;Ce<te.locationSize;Ce++)m(te.location+Ce,re.meshPerAttribute);I.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Ce=0;Ce<te.locationSize;Ce++)g(te.location+Ce);i.bindBuffer(i.ARRAY_BUFFER,ct);for(let Ce=0;Ce<te.locationSize;Ce++)R(te.location+Ce,ye/te.locationSize,Oe,ge,Pe*Q,(ce+ye/te.locationSize*Ce)*Q,ue)}else{if(he.isInstancedBufferAttribute){for(let re=0;re<te.locationSize;re++)m(te.location+re,he.meshPerAttribute);I.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let re=0;re<te.locationSize;re++)g(te.location+re);i.bindBuffer(i.ARRAY_BUFFER,ct);for(let re=0;re<te.locationSize;re++)R(te.location+re,ye/te.locationSize,Oe,ge,ye*Q,ye/te.locationSize*re*Q,ue)}}else if(X!==void 0){let ge=X[j];if(ge!==void 0)switch(ge.length){case 2:i.vertexAttrib2fv(te.location,ge);break;case 3:i.vertexAttrib3fv(te.location,ge);break;case 4:i.vertexAttrib4fv(te.location,ge);break;default:i.vertexAttrib1fv(te.location,ge)}}}}w()}function A(){E();for(let I in n){let O=n[I];for(let K in O){let $=O[K];for(let k in $){let Z=$[k];for(let X in Z)u(Z[X].object),delete Z[X];delete $[k]}}delete n[I]}}function T(I){if(n[I.id]===void 0)return;let O=n[I.id];for(let K in O){let $=O[K];for(let k in $){let Z=$[k];for(let X in Z)u(Z[X].object),delete Z[X];delete $[k]}}delete n[I.id]}function P(I){for(let O in n){let K=n[O];for(let $ in K){let k=K[$];if(k[I.id]===void 0)continue;let Z=k[I.id];for(let X in Z)u(Z[X].object),delete Z[X];delete k[I.id]}}}function v(I){for(let O in n){let K=n[O],$=I.isInstancedMesh===!0?I.id:0,k=K[$];if(k!==void 0){for(let Z in k){let X=k[Z];for(let j in X)u(X[j].object),delete X[j];delete k[Z]}delete K[$],Object.keys(K).length===0&&delete n[O]}}}function E(){U(),a=!0,r!==s&&(r=s,c(r.object))}function U(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:U,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfObject:v,releaseStatesOfProgram:P,initAttributes:S,enableAttribute:g,disableUnusedAttributes:w}}function Wp(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let p=0;p<u;p++)h+=c[p];t.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Xp(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==nn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){let v=P===Tt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Qt&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==fn&&!v)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(Ie("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:w,maxVaryings:R,maxFragmentUniforms:M,maxSamples:A,samples:T}}function qp(i){let e=this,t=null,n=0,s=!1,r=!1,a=new vn,o=new Le,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let p=f.length!==0||h||n!==0||s;return s=h,n=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){let _=f.clippingPlanes,S=f.clipIntersection,g=f.clipShadows,m=i.get(f);if(!s||_===null||_.length===0||r&&!g)r?u(null):c();else{let w=r?0:n,R=w*4,M=m.clippingState||null;l.value=M,M=u(_,h,R,p);for(let A=0;A!==R;++A)M[A]=t[A];m.clippingState=M,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,p,_){let S=f!==null?f.length:0,g=null;if(S!==0){if(g=l.value,_!==!0||g===null){let m=p+S*4,w=h.matrixWorldInverse;o.getNormalMatrix(w),(g===null||g.length<m)&&(g=new Float32Array(m));for(let R=0,M=p;R!==S;++R,M+=4)a.copy(f[R]).applyMatrix4(w,o),a.normal.toArray(g,M),g[M+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,g}}var li=4,dh=[.125,.215,.35,.446,.526,.582],Ei=20,Yp=256,Qs=new Mi,fh=new Ue,Al=null,wl=0,Cl=0,Rl=!1,Zp=new F,ro=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Zp}=r;Al=this._renderer.getRenderTarget(),wl=this._renderer.getActiveCubeFace(),Cl=this._renderer.getActiveMipmapLevel(),Rl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Al,wl,Cl),this._renderer.xr.enabled=Rl,e.scissorTest=!1,rs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===si||e.mapping===bi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Al=this._renderer.getRenderTarget(),wl=this._renderer.getActiveCubeFace(),Cl=this._renderer.getActiveMipmapLevel(),Rl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Pt,minFilter:Pt,generateMipmaps:!1,type:Tt,format:nn,colorSpace:vs,depthBuffer:!1},s=ph(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ph(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Kp(r)),this._blurMaterial=$p(r,e,t),this._ggxMaterial=Jp(r,e,t)}return s}_compileMaterial(e){let t=new Dt(new It,e);this._renderer.compile(t,Qs)}_sceneToCubeUV(e,t,n,s,r){let l=new Bt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(fh),f.toneMapping=un,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Dt(new ji,new Bn({name:"PMREM.Background",side:Gt,depthWrite:!1,depthTest:!1})));let S=this._backgroundBox,g=S.material,m=!1,w=e.background;w?w.isColor&&(g.color.copy(w),e.background=null,m=!0):(g.color.copy(fh),m=!0);for(let R=0;R<6;R++){let M=R%3;M===0?(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[R],r.y,r.z)):M===1?(l.up.set(0,0,c[R]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[R],r.z)):(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[R]));let A=this._cubeSize;rs(s,M*A,R>2?A:0,A,A),f.setRenderTarget(s),m&&f.render(S,l),f.render(e,l)}f.toneMapping=p,f.autoClear=h,e.background=w}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===si||e.mapping===bi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=gh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;rs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Qs)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=0+c*1.25,p=f*h,{_lodMax:_}=this,S=this._sizeLods[n],g=3*S*(n>_-li?n-_+li:0),m=4*(this._cubeSize-S);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=_-t,rs(r,g,m,3*S,2*S),s.setRenderTarget(r),s.render(o,Qs),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-n,rs(e,g,m,3*S,2*S),s.setRenderTarget(e),s.render(o,Qs)}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&De("blur direction must be either latitudinal or longitudinal!");let u=3,f=this._lodMeshes[s];f.material=c;let h=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ei-1),S=r/_,g=isFinite(r)?1+Math.floor(u*S):Ei;g>Ei&&Ie(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ei}`);let m=[],w=0;for(let P=0;P<Ei;++P){let v=P/S,E=Math.exp(-v*v/2);m.push(E),P===0?w+=E:P<g&&(w+=2*E)}for(let P=0;P<m.length;P++)m[P]=m[P]/w;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=m,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);let{_lodMax:R}=this;h.dTheta.value=_,h.mipInt.value=R-n;let M=this._sizeLods[s],A=3*M*(s>R-li?s-R+li:0),T=4*(this._cubeSize-M);rs(t,A,T,3*M,2*M),l.setRenderTarget(t),l.render(f,Qs)}};function Kp(i){let e=[],t=[],n=[],s=i,r=i-li+1+dh.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-li?l=dh[a-i+li-1]:a===0&&(l=0),t.push(l);let c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,_=6,S=3,g=2,m=1,w=new Float32Array(S*_*p),R=new Float32Array(g*_*p),M=new Float32Array(m*_*p);for(let T=0;T<p;T++){let P=T%3*2/3-1,v=T>2?0:-1,E=[P,v,0,P+2/3,v,0,P+2/3,v+1,0,P,v,0,P+2/3,v+1,0,P,v+1,0];w.set(E,S*_*T),R.set(h,g*_*T);let U=[T,T,T,T,T,T];M.set(U,m*_*T)}let A=new It;A.setAttribute("position",new lt(w,S)),A.setAttribute("uv",new lt(R,g)),A.setAttribute("faceIndex",new lt(M,m)),n.push(new Dt(A,null)),s>li&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function ph(i,e,t){let n=new pt(i,e,t);return n.texture.mapping=Hs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function rs(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Jp(i,e,t){return new st({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Yp,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:lo(),fragmentShader:`

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
		`,blending:Yt,depthTest:!1,depthWrite:!1})}function $p(i,e,t){let n=new Float32Array(Ei),s=new F(0,1,0);return new st({name:"SphericalGaussianBlur",defines:{n:Ei,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:lo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Yt,depthTest:!1,depthWrite:!1})}function mh(){return new st({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lo(),fragmentShader:`

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
		`,blending:Yt,depthTest:!1,depthWrite:!1})}function gh(){return new st({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yt,depthTest:!1,depthWrite:!1})}function lo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var ao=class extends pt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Is(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ji(5,5,5),r=new st({name:"CubemapFromEquirect",uniforms:Ti(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Gt,blending:Yt});r.uniforms.tEquirect.value=t;let a=new Dt(s,r),o=t.minFilter;return t.minFilter===ri&&(t.minFilter=Pt),new fa(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function Qp(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,p=!1){return h==null?null:p?a(h):r(h)}function r(h){if(h&&h.isTexture){let p=h.mapping;if(p===ga||p===_a)if(e.has(h)){let _=e.get(h).texture;return o(_,h.mapping)}else{let _=h.image;if(_&&_.height>0){let S=new ao(_.height);return S.fromEquirectangularTexture(i,h),e.set(h,S),h.addEventListener("dispose",c),o(S.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let p=h.mapping,_=p===ga||p===_a,S=p===si||p===bi;if(_||S){let g=t.get(h),m=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return n===null&&(n=new ro(i)),g=_?n.fromEquirectangular(h,g):n.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{let w=h.image;return _&&w&&w.height>0||S&&w&&l(w)?(n===null&&(n=new ro(i)),g=_?n.fromEquirectangular(h):n.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function o(h,p){return p===ga?h.mapping=si:p===_a&&(h.mapping=bi),h}function l(h){let p=0,_=6;for(let S=0;S<_;S++)h[S]!==void 0&&p++;return p===_}function c(h){let p=h.target;p.removeEventListener("dispose",c);let _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function u(h){let p=h.target;p.removeEventListener("dispose",u);let _=t.get(p);_!==void 0&&(t.delete(p),_.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function jp(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&gi("WebGLRenderer: "+n+" extension not supported."),s}}}function em(i,e,t,n){let s={},r=new WeakMap;function a(f){let h=f.target;h.index!==null&&e.remove(h.index);for(let _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete s[h.id];let p=r.get(h);p&&(e.remove(p),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(f){let h=f.attributes;for(let p in h)e.update(h[p],i.ARRAY_BUFFER)}function c(f){let h=[],p=f.index,_=f.attributes.position,S=0;if(_===void 0)return;if(p!==null){let w=p.array;S=p.version;for(let R=0,M=w.length;R<M;R+=3){let A=w[R+0],T=w[R+1],P=w[R+2];h.push(A,T,T,P,P,A)}}else{let w=_.array;S=_.version;for(let R=0,M=w.length/3-1;R<M;R+=3){let A=R+0,T=R+1,P=R+2;h.push(A,T,T,P,P,A)}}let g=new(_.count>=65535?ws:As)(h,1);g.version=S;let m=r.get(f);m&&e.remove(m),r.set(f,g)}function u(f){let h=r.get(f);if(h){let p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function tm(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,h){i.drawElements(n,h,r,f*a),t.update(h,n,1)}function c(f,h,p){p!==0&&(i.drawElementsInstanced(n,h,r,f*a,p),t.update(h,n,p))}function u(f,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,p);let S=0;for(let g=0;g<p;g++)S+=h[g];t.update(S,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function nm(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:De("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function im(i,e,t){let n=new WeakMap,s=new ut;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0,h=n.get(o);if(h===void 0||h.count!==f){let E=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();let p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],R=0;p===!0&&(R=1),_===!0&&(R=2),S===!0&&(R=3);let M=o.attributes.position.count*R,A=1;M>e.maxTextureSize&&(A=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let T=new Float32Array(M*A*4*f),P=new Ts(T,M,A,f);P.type=fn,P.needsUpdate=!0;let v=R*4;for(let U=0;U<f;U++){let I=g[U],O=m[U],K=w[U],$=M*A*4*U;for(let k=0;k<I.count;k++){let Z=k*v;p===!0&&(s.fromBufferAttribute(I,k),T[$+Z+0]=s.x,T[$+Z+1]=s.y,T[$+Z+2]=s.z,T[$+Z+3]=0),_===!0&&(s.fromBufferAttribute(O,k),T[$+Z+4]=s.x,T[$+Z+5]=s.y,T[$+Z+6]=s.z,T[$+Z+7]=0),S===!0&&(s.fromBufferAttribute(K,k),T[$+Z+8]=s.x,T[$+Z+9]=s.y,T[$+Z+10]=s.z,T[$+Z+11]=K.itemSize===4?s.w:1)}}h={count:f,texture:P,size:new Re(M,A)},n.set(o,h),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let S=0;S<c.length;S++)p+=c[S];let _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function sm(i,e,t,n,s){let r=new WeakMap;function a(c){let u=s.render.frame,f=c.geometry,h=e.get(c,f);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return h}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var rm={[Bs]:"LINEAR_TONE_MAPPING",[Os]:"REINHARD_TONE_MAPPING",[zs]:"CINEON_TONE_MAPPING",[Vs]:"ACES_FILMIC_TONE_MAPPING",[Gs]:"AGX_TONE_MAPPING",[Si]:"NEUTRAL_TONE_MAPPING",[ks]:"CUSTOM_TONE_MAPPING"};function am(i,e,t,n,s,r){let a=new pt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,depthTexture:s?new On(e,t):void 0}),o=new pt(e,t,{type:Tt,depthBuffer:!1,stencilBuffer:!1}),l=new It;l.setAttribute("position",new Vt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Vt([0,2,0,0,2,0],2));let c=new ts({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Dt(l,c),f=new Mi(-1,1,1,-1,0,1),h=null,p=null,_=!1,S,g=null,m=[],w=!1;this.setSize=function(R,M){a.setSize(R,M),o.setSize(R,M);for(let A=0;A<m.length;A++){let T=m[A];T.setSize&&T.setSize(R,M)}},this.setEffects=function(R){m=R,w=m.length>0&&m[0].isRenderPass===!0;let M=a.width,A=a.height;for(let T=0;T<m.length;T++){let P=m[T];P.setSize&&P.setSize(M,A)}},this.begin=function(R,M){if(_||R.toneMapping===un&&m.length===0)return!1;if(g=M,M!==null){let A=M.width,T=M.height;(a.width!==A||a.height!==T)&&this.setSize(A,T)}return w===!1&&R.setRenderTarget(a),S=R.toneMapping,R.toneMapping=un,!0},this.hasRenderPass=function(){return w},this.end=function(R,M){R.toneMapping=S,_=!0;let A=a,T=o;for(let P=0;P<m.length;P++){let v=m[P];if(v.enabled!==!1&&(v.render(R,T,A,M),v.needsSwap!==!1)){let E=A;A=T,T=E}}if(h!==R.outputColorSpace||p!==R.toneMapping){h=R.outputColorSpace,p=R.toneMapping,c.defines={},He.getTransfer(h)===$e&&(c.defines.SRGB_TRANSFER="");let P=rm[p];P&&(c.defines[P]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=A.texture,R.setRenderTarget(g),R.render(u,f),g=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}var Fh=new kt,Dl=new On(1,1),Bh=new Ts,Oh=new Kr,zh=new Is,_h=[],xh=[],vh=new Float32Array(16),yh=new Float32Array(9),Mh=new Float32Array(4);function os(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=_h[s];if(r===void 0&&(r=new Float32Array(s),_h[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Et(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function At(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function co(i,e){let t=xh[e];t===void 0&&(t=new Int32Array(e),xh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function om(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function lm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2fv(this.addr,e),At(t,e)}}function cm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;i.uniform3fv(this.addr,e),At(t,e)}}function hm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4fv(this.addr,e),At(t,e)}}function um(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(Et(t,n))return;Mh.set(n),i.uniformMatrix2fv(this.addr,!1,Mh),At(t,n)}}function dm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(Et(t,n))return;yh.set(n),i.uniformMatrix3fv(this.addr,!1,yh),At(t,n)}}function fm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(Et(t,n))return;vh.set(n),i.uniformMatrix4fv(this.addr,!1,vh),At(t,n)}}function pm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function mm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2iv(this.addr,e),At(t,e)}}function gm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;i.uniform3iv(this.addr,e),At(t,e)}}function _m(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4iv(this.addr,e),At(t,e)}}function xm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function vm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2uiv(this.addr,e),At(t,e)}}function ym(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;i.uniform3uiv(this.addr,e),At(t,e)}}function Mm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4uiv(this.addr,e),At(t,e)}}function Sm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Dl.compareFunction=t.isReversedDepthBuffer()?no:to,r=Dl):r=Fh,t.setTexture2D(e||r,s)}function bm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Oh,s)}function Tm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||zh,s)}function Em(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Bh,s)}function Am(i){switch(i){case 5126:return om;case 35664:return lm;case 35665:return cm;case 35666:return hm;case 35674:return um;case 35675:return dm;case 35676:return fm;case 5124:case 35670:return pm;case 35667:case 35671:return mm;case 35668:case 35672:return gm;case 35669:case 35673:return _m;case 5125:return xm;case 36294:return vm;case 36295:return ym;case 36296:return Mm;case 35678:case 36198:case 36298:case 36306:case 35682:return Sm;case 35679:case 36299:case 36307:return bm;case 35680:case 36300:case 36308:case 36293:return Tm;case 36289:case 36303:case 36311:case 36292:return Em}}function wm(i,e){i.uniform1fv(this.addr,e)}function Cm(i,e){let t=os(e,this.size,2);i.uniform2fv(this.addr,t)}function Rm(i,e){let t=os(e,this.size,3);i.uniform3fv(this.addr,t)}function Pm(i,e){let t=os(e,this.size,4);i.uniform4fv(this.addr,t)}function Im(i,e){let t=os(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Dm(i,e){let t=os(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Lm(i,e){let t=os(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Um(i,e){i.uniform1iv(this.addr,e)}function Nm(i,e){i.uniform2iv(this.addr,e)}function Fm(i,e){i.uniform3iv(this.addr,e)}function Bm(i,e){i.uniform4iv(this.addr,e)}function Om(i,e){i.uniform1uiv(this.addr,e)}function zm(i,e){i.uniform2uiv(this.addr,e)}function Vm(i,e){i.uniform3uiv(this.addr,e)}function km(i,e){i.uniform4uiv(this.addr,e)}function Gm(i,e,t){let n=this.cache,s=e.length,r=co(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),At(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Dl:a=Fh;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Hm(i,e,t){let n=this.cache,s=e.length,r=co(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Oh,r[a])}function Wm(i,e,t){let n=this.cache,s=e.length,r=co(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||zh,r[a])}function Xm(i,e,t){let n=this.cache,s=e.length,r=co(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Bh,r[a])}function qm(i){switch(i){case 5126:return wm;case 35664:return Cm;case 35665:return Rm;case 35666:return Pm;case 35674:return Im;case 35675:return Dm;case 35676:return Lm;case 5124:case 35670:return Um;case 35667:case 35671:return Nm;case 35668:case 35672:return Fm;case 35669:case 35673:return Bm;case 5125:return Om;case 36294:return zm;case 36295:return Vm;case 36296:return km;case 35678:case 36198:case 36298:case 36306:case 35682:return Gm;case 35679:case 36299:case 36307:return Hm;case 35680:case 36300:case 36308:case 36293:return Wm;case 36289:case 36303:case 36311:case 36292:return Xm}}var Ll=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Am(t.type)}},Ul=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=qm(t.type)}},Nl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Pl=/(\w+)(\])?(\[|\.)?/g;function Sh(i,e){i.seq.push(e),i.map[e.id]=e}function Ym(i,e,t){let n=i.name,s=n.length;for(Pl.lastIndex=0;;){let r=Pl.exec(n),a=Pl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Sh(t,c===void 0?new Ll(o,i,e):new Ul(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new Nl(o),Sh(t,f)),t=f}}}var as=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Ym(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function bh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Zm=37297,Km=0;function Jm(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Th=new Le;function $m(i){He._getMatrix(Th,He.workingColorSpace,i);let e=`mat3( ${Th.elements.map(t=>t.toFixed(4))} )`;switch(He.getTransfer(i)){case ys:return[e,"LinearTransferOETF"];case $e:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Eh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Jm(i.getShaderSource(e),o)}else return r}function Qm(i,e){let t=$m(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var jm={[Bs]:"Linear",[Os]:"Reinhard",[zs]:"Cineon",[Vs]:"ACESFilmic",[Gs]:"AgX",[Si]:"Neutral",[ks]:"Custom"};function eg(i,e){let t=jm[e];return t===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var so=new F;function tg(){He.getLuminanceCoefficients(so);let i=so.x.toFixed(4),e=so.y.toFixed(4),t=so.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ng(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(er).join(`
`)}function ig(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function sg(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function er(i){return i!==""}function Ah(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var rg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fl(i){return i.replace(rg,og)}var ag=new Map;function og(i,e){let t=ze[e];if(t===void 0){let n=ag.get(e);if(n!==void 0)t=ze[n],Ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Fl(t)}var lg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ch(i){return i.replace(lg,cg)}function cg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Rh(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var hg={[Fs]:"SHADOWMAP_TYPE_PCF",[ns]:"SHADOWMAP_TYPE_VSM"};function ug(i){return hg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var dg={[si]:"ENVMAP_TYPE_CUBE",[bi]:"ENVMAP_TYPE_CUBE",[Hs]:"ENVMAP_TYPE_CUBE_UV"};function fg(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":dg[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var pg={[bi]:"ENVMAP_MODE_REFRACTION"};function mg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":pg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var gg={[il]:"ENVMAP_BLENDING_MULTIPLY",[Zc]:"ENVMAP_BLENDING_MIX",[Kc]:"ENVMAP_BLENDING_ADD"};function _g(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":gg[i.combine]||"ENVMAP_BLENDING_NONE"}function xg(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function vg(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=ug(t),c=fg(t),u=mg(t),f=_g(t),h=xg(t),p=ng(t),_=ig(r),S=s.createProgram(),g,m,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(er).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(er).join(`
`),m.length>0&&(m+=`
`)):(g=[Rh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(er).join(`
`),m=[Rh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==un?"#define TONE_MAPPING":"",t.toneMapping!==un?ze.tonemapping_pars_fragment:"",t.toneMapping!==un?eg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,Qm("linearToOutputTexel",t.outputColorSpace),tg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(er).join(`
`)),a=Fl(a),a=Ah(a,t),a=wh(a,t),o=Fl(o),o=Ah(o,t),o=wh(o,t),a=Ch(a),o=Ch(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===fl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let R=w+g+a,M=w+m+o,A=bh(s,s.VERTEX_SHADER,R),T=bh(s,s.FRAGMENT_SHADER,M);s.attachShader(S,A),s.attachShader(S,T),t.index0AttributeName!==void 0?s.bindAttribLocation(S,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function P(I){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(S)||"",K=s.getShaderInfoLog(A)||"",$=s.getShaderInfoLog(T)||"",k=O.trim(),Z=K.trim(),X=$.trim(),j=!0,te=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,S,A,T);else{let he=Eh(s,A,"vertex"),ge=Eh(s,T,"fragment");De("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+k+`
`+he+`
`+ge)}else k!==""?Ie("WebGLProgram: Program Info Log:",k):(Z===""||X==="")&&(te=!1);te&&(I.diagnostics={runnable:j,programLog:k,vertexShader:{log:Z,prefix:g},fragmentShader:{log:X,prefix:m}})}s.deleteShader(A),s.deleteShader(T),v=new as(s,S),E=sg(s,S)}let v;this.getUniforms=function(){return v===void 0&&P(this),v};let E;this.getAttributes=function(){return E===void 0&&P(this),E};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(S,Zm)),U},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Km++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=A,this.fragmentShader=T,this}var yg=0,Bl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ol(e),t.set(e,n)),n}},Ol=class{constructor(e){this.id=yg++,this.code=e,this.usedTimes=0}};function Mg(i){return i===oi||i===Ks||i===Js}function Sg(i,e,t,n,s,r){let a=new Es,o=new Bl,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer,h=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return l.add(v),v===0?"uv":`uv${v}`}function S(v,E,U,I,O,K){let $=I.fog,k=O.geometry,Z=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?I.environment:null,X=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,j=e.get(v.envMap||Z,X),te=j&&j.mapping===Hs?j.image.height:null,he=p[v.type];v.precision!==null&&(h=n.getMaxPrecision(v.precision),h!==v.precision&&Ie("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));let ge=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ye=ge!==void 0?ge.length:0,qe=0;k.morphAttributes.position!==void 0&&(qe=1),k.morphAttributes.normal!==void 0&&(qe=2),k.morphAttributes.color!==void 0&&(qe=3);let ct,Oe,Q,ue;if(he){let de=En[he];ct=de.vertexShader,Oe=de.fragmentShader}else{ct=v.vertexShader,Oe=v.fragmentShader;let de=o.getVertexShaderStage(v),Xe=o.getFragmentShaderStage(v);o.update(v,de,Xe),Q=de.id,ue=Xe.id}let re=i.getRenderTarget(),Pe=i.state.buffers.depth.getReversed(),ce=O.isInstancedMesh===!0,Ce=O.isBatchedMesh===!0,Ye=!!v.map,ke=!!v.matcap,je=!!j,Ze=!!v.aoMap,Fe=!!v.lightMap,rt=!!v.bumpMap&&v.wireframe===!1,Ge=!!v.normalMap,vt=!!v.displacementMap,yt=!!v.emissiveMap,Qe=!!v.metalnessMap,dt=!!v.roughnessMap,L=v.anisotropy>0,Lt=v.clearcoat>0,Je=v.dispersion>0,x=v.iridescence>0,d=v.sheen>0,C=v.transmission>0,b=L&&!!v.anisotropyMap,B=Lt&&!!v.clearcoatMap,J=Lt&&!!v.clearcoatNormalMap,ee=Lt&&!!v.clearcoatRoughnessMap,G=x&&!!v.iridescenceMap,q=x&&!!v.iridescenceThicknessMap,ie=d&&!!v.sheenColorMap,fe=d&&!!v.sheenRoughnessMap,oe=!!v.specularMap,ae=!!v.specularColorMap,Se=!!v.specularIntensityMap,be=C&&!!v.transmissionMap,Ee=C&&!!v.thicknessMap,D=!!v.gradientMap,se=!!v.alphaMap,H=v.alphaTest>0,ne=!!v.alphaHash,le=!!v.extensions,Y=un;v.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Y=i.toneMapping);let _e={shaderID:he,shaderType:v.type,shaderName:v.name,vertexShader:ct,fragmentShader:Oe,defines:v.defines,customVertexShaderID:Q,customFragmentShaderID:ue,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:Ce,batchingColor:Ce&&O._colorsTexture!==null,instancing:ce,instancingColor:ce&&O.instanceColor!==null,instancingMorph:ce&&O.morphTexture!==null,outputColorSpace:re===null?i.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:He.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ye,matcap:ke,envMap:je,envMapMode:je&&j.mapping,envMapCubeUVHeight:te,aoMap:Ze,lightMap:Fe,bumpMap:rt,normalMap:Ge,displacementMap:vt,emissiveMap:yt,normalMapObjectSpace:Ge&&v.normalMapType===Qc,normalMapTangentSpace:Ge&&v.normalMapType===dl,packedNormalMap:Ge&&v.normalMapType===dl&&Mg(v.normalMap.format),metalnessMap:Qe,roughnessMap:dt,anisotropy:L,anisotropyMap:b,clearcoat:Lt,clearcoatMap:B,clearcoatNormalMap:J,clearcoatRoughnessMap:ee,dispersion:Je,iridescence:x,iridescenceMap:G,iridescenceThicknessMap:q,sheen:d,sheenColorMap:ie,sheenRoughnessMap:fe,specularMap:oe,specularColorMap:ae,specularIntensityMap:Se,transmission:C,transmissionMap:be,thicknessMap:Ee,gradientMap:D,opaque:v.transparent===!1&&v.blending===_i&&v.alphaToCoverage===!1,alphaMap:se,alphaTest:H,alphaHash:ne,combine:v.combine,mapUv:Ye&&_(v.map.channel),aoMapUv:Ze&&_(v.aoMap.channel),lightMapUv:Fe&&_(v.lightMap.channel),bumpMapUv:rt&&_(v.bumpMap.channel),normalMapUv:Ge&&_(v.normalMap.channel),displacementMapUv:vt&&_(v.displacementMap.channel),emissiveMapUv:yt&&_(v.emissiveMap.channel),metalnessMapUv:Qe&&_(v.metalnessMap.channel),roughnessMapUv:dt&&_(v.roughnessMap.channel),anisotropyMapUv:b&&_(v.anisotropyMap.channel),clearcoatMapUv:B&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:J&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:G&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:q&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:ie&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:fe&&_(v.sheenRoughnessMap.channel),specularMapUv:oe&&_(v.specularMap.channel),specularColorMapUv:ae&&_(v.specularColorMap.channel),specularIntensityMapUv:Se&&_(v.specularIntensityMap.channel),transmissionMapUv:be&&_(v.transmissionMap.channel),thicknessMapUv:Ee&&_(v.thicknessMap.channel),alphaMapUv:se&&_(v.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Ge||L),vertexNormals:!!k.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!k.attributes.uv&&(Ye||se),fog:!!$,useFog:v.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||k.attributes.normal===void 0&&Ge===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Pe,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:qe,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:K.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:Y,decodeVideoTexture:Ye&&v.map.isVideoTexture===!0&&He.getTransfer(v.map.colorSpace)===$e,decodeVideoTextureEmissive:yt&&v.emissiveMap.isVideoTexture===!0&&He.getTransfer(v.emissiveMap.colorSpace)===$e,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===tn,flipSided:v.side===Gt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:le&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(le&&v.extensions.multiDraw===!0||Ce)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return _e.vertexUv1s=l.has(1),_e.vertexUv2s=l.has(2),_e.vertexUv3s=l.has(3),l.clear(),_e}function g(v){let E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(let U in v.defines)E.push(U),E.push(v.defines[U]);return v.isRawShaderMaterial===!1&&(m(E,v),w(E,v),E.push(i.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function m(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function w(v,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function R(v){let E=p[v.type],U;if(E){let I=En[E];U=sn.clone(I.uniforms)}else U=v.uniforms;return U}function M(v,E){let U=u.get(E);return U!==void 0?++U.usedTimes:(U=new vg(i,E,v,s),c.push(U),u.set(E,U)),U}function A(v){if(--v.usedTimes===0){let E=c.indexOf(v);c[E]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function T(v){o.remove(v)}function P(){o.dispose()}return{getParameters:S,getProgramCacheKey:g,getUniforms:R,acquireProgram:M,releaseProgram:A,releaseShaderCache:T,programs:c,dispose:P}}function bg(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Tg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Ph(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ih(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function o(h,p,_,S,g,m){let w=i[e];return w===void 0?(w={id:h.id,object:h,geometry:p,material:_,materialVariant:a(h),groupOrder:S,renderOrder:h.renderOrder,z:g,group:m},i[e]=w):(w.id=h.id,w.object=h,w.geometry=p,w.material=_,w.materialVariant=a(h),w.groupOrder=S,w.renderOrder=h.renderOrder,w.z=g,w.group=m),e++,w}function l(h,p,_,S,g,m){let w=o(h,p,_,S,g,m);_.transmission>0?n.push(w):_.transparent===!0?s.push(w):t.push(w)}function c(h,p,_,S,g,m){let w=o(h,p,_,S,g,m);_.transmission>0?n.unshift(w):_.transparent===!0?s.unshift(w):t.unshift(w)}function u(h,p,_){t.length>1&&t.sort(h||Tg),n.length>1&&n.sort(p||Ph),s.length>1&&s.sort(p||Ph),_&&(t.reverse(),n.reverse(),s.reverse())}function f(){for(let h=e,p=i.length;h<p;h++){let _=i[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function Eg(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Ih,i.set(n,[a])):s>=r.length?(a=new Ih,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Ag(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Ue};break;case"SpotLight":t={position:new F,direction:new F,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function wg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Cg=0;function Rg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Pg(i){let e=new Ag,t=wg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);let s=new F,r=new ht,a=new ht;function o(c){let u=0,f=0,h=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let p=0,_=0,S=0,g=0,m=0,w=0,R=0,M=0,A=0,T=0,P=0;c.sort(Rg);for(let E=0,U=c.length;E<U;E++){let I=c[E],O=I.color,K=I.intensity,$=I.distance,k=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===oi?k=I.shadow.map.texture:k=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=O.r*K,f+=O.g*K,h+=O.b*K;else if(I.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(I.sh.coefficients[Z],K);P++}else if(I.isDirectionalLight){let Z=e.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let X=I.shadow,j=t.get(I);j.shadowIntensity=X.intensity,j.shadowBias=X.bias,j.shadowNormalBias=X.normalBias,j.shadowRadius=X.radius,j.shadowMapSize=X.mapSize,n.directionalShadow[p]=j,n.directionalShadowMap[p]=k,n.directionalShadowMatrix[p]=I.shadow.matrix,w++}n.directional[p]=Z,p++}else if(I.isSpotLight){let Z=e.get(I);Z.position.setFromMatrixPosition(I.matrixWorld),Z.color.copy(O).multiplyScalar(K),Z.distance=$,Z.coneCos=Math.cos(I.angle),Z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Z.decay=I.decay,n.spot[S]=Z;let X=I.shadow;if(I.map&&(n.spotLightMap[A]=I.map,A++,X.updateMatrices(I),I.castShadow&&T++),n.spotLightMatrix[S]=X.matrix,I.castShadow){let j=t.get(I);j.shadowIntensity=X.intensity,j.shadowBias=X.bias,j.shadowNormalBias=X.normalBias,j.shadowRadius=X.radius,j.shadowMapSize=X.mapSize,n.spotShadow[S]=j,n.spotShadowMap[S]=k,M++}S++}else if(I.isRectAreaLight){let Z=e.get(I);Z.color.copy(O).multiplyScalar(K),Z.halfWidth.set(I.width*.5,0,0),Z.halfHeight.set(0,I.height*.5,0),n.rectArea[g]=Z,g++}else if(I.isPointLight){let Z=e.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity),Z.distance=I.distance,Z.decay=I.decay,I.castShadow){let X=I.shadow,j=t.get(I);j.shadowIntensity=X.intensity,j.shadowBias=X.bias,j.shadowNormalBias=X.normalBias,j.shadowRadius=X.radius,j.shadowMapSize=X.mapSize,j.shadowCameraNear=X.camera.near,j.shadowCameraFar=X.camera.far,n.pointShadow[_]=j,n.pointShadowMap[_]=k,n.pointShadowMatrix[_]=I.shadow.matrix,R++}n.point[_]=Z,_++}else if(I.isHemisphereLight){let Z=e.get(I);Z.skyColor.copy(I.color).multiplyScalar(K),Z.groundColor.copy(I.groundColor).multiplyScalar(K),n.hemi[m]=Z,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pe.LTC_FLOAT_1,n.rectAreaLTC2=pe.LTC_FLOAT_2):(n.rectAreaLTC1=pe.LTC_HALF_1,n.rectAreaLTC2=pe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;let v=n.hash;(v.directionalLength!==p||v.pointLength!==_||v.spotLength!==S||v.rectAreaLength!==g||v.hemiLength!==m||v.numDirectionalShadows!==w||v.numPointShadows!==R||v.numSpotShadows!==M||v.numSpotMaps!==A||v.numLightProbes!==P)&&(n.directional.length=p,n.spot.length=S,n.rectArea.length=g,n.point.length=_,n.hemi.length=m,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=R,n.pointShadowMap.length=R,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=R,n.spotLightMatrix.length=M+A-T,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=P,v.directionalLength=p,v.pointLength=_,v.spotLength=S,v.rectAreaLength=g,v.hemiLength=m,v.numDirectionalShadows=w,v.numPointShadows=R,v.numSpotShadows=M,v.numSpotMaps=A,v.numLightProbes=P,n.version=Cg++)}function l(c,u){let f=0,h=0,p=0,_=0,S=0,g=u.matrixWorldInverse;for(let m=0,w=c.length;m<w;m++){let R=c[m];if(R.isDirectionalLight){let M=n.directional[f];M.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),f++}else if(R.isSpotLight){let M=n.spot[p];M.position.setFromMatrixPosition(R.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),p++}else if(R.isRectAreaLight){let M=n.rectArea[_];M.position.setFromMatrixPosition(R.matrixWorld),M.position.applyMatrix4(g),a.identity(),r.copy(R.matrixWorld),r.premultiply(g),a.extractRotation(r),M.halfWidth.set(R.width*.5,0,0),M.halfHeight.set(0,R.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),_++}else if(R.isPointLight){let M=n.point[h];M.position.setFromMatrixPosition(R.matrixWorld),M.position.applyMatrix4(g),h++}else if(R.isHemisphereLight){let M=n.hemi[S];M.direction.setFromMatrixPosition(R.matrixWorld),M.direction.transformDirection(g),S++}}}return{setup:o,setupView:l,state:n}}function Dh(i){let e=new Pg(i),t=[],n=[],s=[];function r(h){f.camera=h,t.length=0,n.length=0,s.length=0}function a(h){t.push(h)}function o(h){n.push(h)}function l(h){s.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}let f={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Ig(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Dh(i),e.set(s,[o])):r>=a.length?(o=new Dh(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Dg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Lg=`uniform sampler2D shadow_pass;
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
}`,Ug=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],Ng=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],Lh=new ht,js=new F,Il=new F;function Fg(i,e,t){let n=new Ps,s=new Re,r=new Re,a=new ut,o=new ta,l=new na,c={},u=t.maxTextureSize,f={[Nn]:Gt,[Gt]:Nn,[tn]:tn},h=new st({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:Dg,fragmentShader:Lg}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let _=new It;_.setAttribute("position",new lt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new Dt(_,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fs;let m=this.type;this.render=function(T,P,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===Rc&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Fs);let E=i.getRenderTarget(),U=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Yt),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let K=m!==this.type;K&&P.traverse(function($){$.material&&(Array.isArray($.material)?$.material.forEach(k=>k.needsUpdate=!0):$.material.needsUpdate=!0)});for(let $=0,k=T.length;$<k;$++){let Z=T[$],X=Z.shadow;if(X===void 0){Ie("WebGLShadowMap:",Z,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let j=X.getFrameExtents();s.multiply(j),r.copy(X.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/j.x),s.x=r.x*j.x,X.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/j.y),s.y=r.y*j.y,X.mapSize.y=r.y));let te=i.state.buffers.depth.getReversed();if(X.camera._reversedDepth=te,X.map===null||K===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===ns){if(Z.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new pt(s.x,s.y,{format:oi,type:Tt,minFilter:Pt,magFilter:Pt,generateMipmaps:!1}),X.map.texture.name=Z.name+".shadowMap",X.map.depthTexture=new On(s.x,s.y,fn),X.map.depthTexture.name=Z.name+".shadowMapDepth",X.map.depthTexture.format=Mn,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=xt,X.map.depthTexture.magFilter=xt}else Z.isPointLight?(X.map=new ao(s.x),X.map.depthTexture=new jr(s.x,dn)):(X.map=new pt(s.x,s.y),X.map.depthTexture=new On(s.x,s.y,dn)),X.map.depthTexture.name=Z.name+".shadowMap",X.map.depthTexture.format=Mn,this.type===Fs?(X.map.depthTexture.compareFunction=te?no:to,X.map.depthTexture.minFilter=Pt,X.map.depthTexture.magFilter=Pt):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=xt,X.map.depthTexture.magFilter=xt);X.camera.updateProjectionMatrix()}let he=X.map.isWebGLCubeRenderTarget?6:1;for(let ge=0;ge<he;ge++){if(X.map.isWebGLCubeRenderTarget)i.setRenderTarget(X.map,ge),i.clear();else{ge===0&&(i.setRenderTarget(X.map),i.clear());let ye=X.getViewport(ge);a.set(r.x*ye.x,r.y*ye.y,r.x*ye.z,r.y*ye.w),O.viewport(a)}if(Z.isPointLight){let ye=X.camera,qe=X.matrix,ct=Z.distance||ye.far;ct!==ye.far&&(ye.far=ct,ye.updateProjectionMatrix()),js.setFromMatrixPosition(Z.matrixWorld),ye.position.copy(js),Il.copy(ye.position),Il.add(Ug[ge]),ye.up.copy(Ng[ge]),ye.lookAt(Il),ye.updateMatrixWorld(),qe.makeTranslation(-js.x,-js.y,-js.z),Lh.multiplyMatrices(ye.projectionMatrix,ye.matrixWorldInverse),X._frustum.setFromProjectionMatrix(Lh,ye.coordinateSystem,ye.reversedDepth)}else X.updateMatrices(Z);n=X.getFrustum(),M(P,v,X.camera,Z,this.type)}X.isPointLightShadow!==!0&&this.type===ns&&w(X,v),X.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(E,U,I)};function w(T,P){let v=e.update(S);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new pt(s.x,s.y,{format:oi,type:Tt})),h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(P,null,v,h,S,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(P,null,v,p,S,null)}function R(T,P,v,E){let U=null,I=v.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)U=I;else if(U=v.isPointLight===!0?l:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let O=U.uuid,K=P.uuid,$=c[O];$===void 0&&($={},c[O]=$);let k=$[K];k===void 0&&(k=U.clone(),$[K]=k,P.addEventListener("dispose",A)),U=k}if(U.visible=P.visible,U.wireframe=P.wireframe,E===ns?U.side=P.shadowSide!==null?P.shadowSide:P.side:U.side=P.shadowSide!==null?P.shadowSide:f[P.side],U.alphaMap=P.alphaMap,U.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,U.map=P.map,U.clipShadows=P.clipShadows,U.clippingPlanes=P.clippingPlanes,U.clipIntersection=P.clipIntersection,U.displacementMap=P.displacementMap,U.displacementScale=P.displacementScale,U.displacementBias=P.displacementBias,U.wireframeLinewidth=P.wireframeLinewidth,U.linewidth=P.linewidth,v.isPointLight===!0&&U.isMeshDistanceMaterial===!0){let O=i.properties.get(U);O.light=v}return U}function M(T,P,v,E,U){if(T.visible===!1)return;if(T.layers.test(P.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&U===ns)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,T.matrixWorld);let K=e.update(T),$=T.material;if(Array.isArray($)){let k=K.groups;for(let Z=0,X=k.length;Z<X;Z++){let j=k[Z],te=$[j.materialIndex];if(te&&te.visible){let he=R(T,te,E,U);T.onBeforeShadow(i,T,P,v,K,he,j),i.renderBufferDirect(v,null,K,he,T,j),T.onAfterShadow(i,T,P,v,K,he,j)}}}else if($.visible){let k=R(T,$,E,U);T.onBeforeShadow(i,T,P,v,K,k,null),i.renderBufferDirect(v,null,K,k,T,null),T.onAfterShadow(i,T,P,v,K,k,null)}}let O=T.children;for(let K=0,$=O.length;K<$;K++)M(O[K],P,v,E,U)}function A(T){T.target.removeEventListener("dispose",A);for(let v in c){let E=c[v],U=T.target.uuid;U in E&&(E[U].dispose(),delete E[U])}}}function Bg(i,e){function t(){let D=!1,se=new ut,H=null,ne=new ut(0,0,0,0);return{setMask:function(le){H!==le&&!D&&(i.colorMask(le,le,le,le),H=le)},setLocked:function(le){D=le},setClear:function(le,Y,_e,de,Xe){Xe===!0&&(le*=de,Y*=de,_e*=de),se.set(le,Y,_e,de),ne.equals(se)===!1&&(i.clearColor(le,Y,_e,de),ne.copy(se))},reset:function(){D=!1,H=null,ne.set(-1,0,0,0)}}}function n(){let D=!1,se=!1,H=null,ne=null,le=null;return{setReversed:function(Y){if(se!==Y){let _e=e.get("EXT_clip_control");Y?_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.ZERO_TO_ONE_EXT):_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.NEGATIVE_ONE_TO_ONE_EXT),se=Y;let de=le;le=null,this.setClear(de)}},getReversed:function(){return se},setTest:function(Y){Y?re(i.DEPTH_TEST):Pe(i.DEPTH_TEST)},setMask:function(Y){H!==Y&&!D&&(i.depthMask(Y),H=Y)},setFunc:function(Y){if(se&&(Y=lh[Y]),ne!==Y){switch(Y){case Fr:i.depthFunc(i.NEVER);break;case Br:i.depthFunc(i.ALWAYS);break;case Or:i.depthFunc(i.LESS);break;case xi:i.depthFunc(i.LEQUAL);break;case zr:i.depthFunc(i.EQUAL);break;case Vr:i.depthFunc(i.GEQUAL);break;case kr:i.depthFunc(i.GREATER);break;case Gr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ne=Y}},setLocked:function(Y){D=Y},setClear:function(Y){le!==Y&&(le=Y,se&&(Y=1-Y),i.clearDepth(Y))},reset:function(){D=!1,H=null,ne=null,le=null,se=!1}}}function s(){let D=!1,se=null,H=null,ne=null,le=null,Y=null,_e=null,de=null,Xe=null;return{setTest:function(Be){D||(Be?re(i.STENCIL_TEST):Pe(i.STENCIL_TEST))},setMask:function(Be){se!==Be&&!D&&(i.stencilMask(Be),se=Be)},setFunc:function(Be,mt,Mt){(H!==Be||ne!==mt||le!==Mt)&&(i.stencilFunc(Be,mt,Mt),H=Be,ne=mt,le=Mt)},setOp:function(Be,mt,Mt){(Y!==Be||_e!==mt||de!==Mt)&&(i.stencilOp(Be,mt,Mt),Y=Be,_e=mt,de=Mt)},setLocked:function(Be){D=Be},setClear:function(Be){Xe!==Be&&(i.clearStencil(Be),Xe=Be)},reset:function(){D=!1,se=null,H=null,ne=null,le=null,Y=null,_e=null,de=null,Xe=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,u={},f={},h={},p=new WeakMap,_=[],S=null,g=!1,m=null,w=null,R=null,M=null,A=null,T=null,P=null,v=new Ue(0,0,0),E=0,U=!1,I=null,O=null,K=null,$=null,k=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,j=0,te=i.getParameter(i.VERSION);te.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(te)[1]),X=j>=1):te.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),X=j>=2);let he=null,ge={},ye=i.getParameter(i.SCISSOR_BOX),qe=i.getParameter(i.VIEWPORT),ct=new ut().fromArray(ye),Oe=new ut().fromArray(qe);function Q(D,se,H,ne){let le=new Uint8Array(4),Y=i.createTexture();i.bindTexture(D,Y),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let _e=0;_e<H;_e++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(se,0,i.RGBA,1,1,ne,0,i.RGBA,i.UNSIGNED_BYTE,le):i.texImage2D(se+_e,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,le);return Y}let ue={};ue[i.TEXTURE_2D]=Q(i.TEXTURE_2D,i.TEXTURE_2D,1),ue[i.TEXTURE_CUBE_MAP]=Q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[i.TEXTURE_2D_ARRAY]=Q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ue[i.TEXTURE_3D]=Q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),re(i.DEPTH_TEST),a.setFunc(xi),rt(!1),Ge(el),re(i.CULL_FACE),Ze(Yt);function re(D){u[D]!==!0&&(i.enable(D),u[D]=!0)}function Pe(D){u[D]!==!1&&(i.disable(D),u[D]=!1)}function ce(D,se){return h[D]!==se?(i.bindFramebuffer(D,se),h[D]=se,D===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=se),D===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=se),!0):!1}function Ce(D,se){let H=_,ne=!1;if(D){H=p.get(se),H===void 0&&(H=[],p.set(se,H));let le=D.textures;if(H.length!==le.length||H[0]!==i.COLOR_ATTACHMENT0){for(let Y=0,_e=le.length;Y<_e;Y++)H[Y]=i.COLOR_ATTACHMENT0+Y;H.length=le.length,ne=!0}}else H[0]!==i.BACK&&(H[0]=i.BACK,ne=!0);ne&&i.drawBuffers(H)}function Ye(D){return S!==D?(i.useProgram(D),S=D,!0):!1}let ke={[Jn]:i.FUNC_ADD,[Ic]:i.FUNC_SUBTRACT,[Dc]:i.FUNC_REVERSE_SUBTRACT};ke[Lc]=i.MIN,ke[Uc]=i.MAX;let je={[Nc]:i.ZERO,[Fc]:i.ONE,[Bc]:i.SRC_COLOR,[Ur]:i.SRC_ALPHA,[Hc]:i.SRC_ALPHA_SATURATE,[kc]:i.DST_COLOR,[zc]:i.DST_ALPHA,[Oc]:i.ONE_MINUS_SRC_COLOR,[Nr]:i.ONE_MINUS_SRC_ALPHA,[Gc]:i.ONE_MINUS_DST_COLOR,[Vc]:i.ONE_MINUS_DST_ALPHA,[Wc]:i.CONSTANT_COLOR,[Xc]:i.ONE_MINUS_CONSTANT_COLOR,[qc]:i.CONSTANT_ALPHA,[Yc]:i.ONE_MINUS_CONSTANT_ALPHA};function Ze(D,se,H,ne,le,Y,_e,de,Xe,Be){if(D===Yt){g===!0&&(Pe(i.BLEND),g=!1);return}if(g===!1&&(re(i.BLEND),g=!0),D!==Pc){if(D!==m||Be!==U){if((w!==Jn||A!==Jn)&&(i.blendEquation(i.FUNC_ADD),w=Jn,A=Jn),Be)switch(D){case _i:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ii:i.blendFunc(i.ONE,i.ONE);break;case tl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case nl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:De("WebGLState: Invalid blending: ",D);break}else switch(D){case _i:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ii:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case tl:De("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case nl:De("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:De("WebGLState: Invalid blending: ",D);break}R=null,M=null,T=null,P=null,v.set(0,0,0),E=0,m=D,U=Be}return}le=le||se,Y=Y||H,_e=_e||ne,(se!==w||le!==A)&&(i.blendEquationSeparate(ke[se],ke[le]),w=se,A=le),(H!==R||ne!==M||Y!==T||_e!==P)&&(i.blendFuncSeparate(je[H],je[ne],je[Y],je[_e]),R=H,M=ne,T=Y,P=_e),(de.equals(v)===!1||Xe!==E)&&(i.blendColor(de.r,de.g,de.b,Xe),v.copy(de),E=Xe),m=D,U=!1}function Fe(D,se){D.side===tn?Pe(i.CULL_FACE):re(i.CULL_FACE);let H=D.side===Gt;se&&(H=!H),rt(H),D.blending===_i&&D.transparent===!1?Ze(Yt):Ze(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let ne=D.stencilWrite;o.setTest(ne),ne&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),yt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?re(i.SAMPLE_ALPHA_TO_COVERAGE):Pe(i.SAMPLE_ALPHA_TO_COVERAGE)}function rt(D){I!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),I=D)}function Ge(D){D!==wc?(re(i.CULL_FACE),D!==O&&(D===el?i.cullFace(i.BACK):D===Cc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Pe(i.CULL_FACE),O=D}function vt(D){D!==K&&(X&&i.lineWidth(D),K=D)}function yt(D,se,H){D?(re(i.POLYGON_OFFSET_FILL),($!==se||k!==H)&&($=se,k=H,a.getReversed()&&(se=-se),i.polygonOffset(se,H))):Pe(i.POLYGON_OFFSET_FILL)}function Qe(D){D?re(i.SCISSOR_TEST):Pe(i.SCISSOR_TEST)}function dt(D){D===void 0&&(D=i.TEXTURE0+Z-1),he!==D&&(i.activeTexture(D),he=D)}function L(D,se,H){H===void 0&&(he===null?H=i.TEXTURE0+Z-1:H=he);let ne=ge[H];ne===void 0&&(ne={type:void 0,texture:void 0},ge[H]=ne),(ne.type!==D||ne.texture!==se)&&(he!==H&&(i.activeTexture(H),he=H),i.bindTexture(D,se||ue[D]),ne.type=D,ne.texture=se)}function Lt(){let D=ge[he];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Je(){try{i.compressedTexImage2D(...arguments)}catch(D){De("WebGLState:",D)}}function x(){try{i.compressedTexImage3D(...arguments)}catch(D){De("WebGLState:",D)}}function d(){try{i.texSubImage2D(...arguments)}catch(D){De("WebGLState:",D)}}function C(){try{i.texSubImage3D(...arguments)}catch(D){De("WebGLState:",D)}}function b(){try{i.compressedTexSubImage2D(...arguments)}catch(D){De("WebGLState:",D)}}function B(){try{i.compressedTexSubImage3D(...arguments)}catch(D){De("WebGLState:",D)}}function J(){try{i.texStorage2D(...arguments)}catch(D){De("WebGLState:",D)}}function ee(){try{i.texStorage3D(...arguments)}catch(D){De("WebGLState:",D)}}function G(){try{i.texImage2D(...arguments)}catch(D){De("WebGLState:",D)}}function q(){try{i.texImage3D(...arguments)}catch(D){De("WebGLState:",D)}}function ie(D){return f[D]!==void 0?f[D]:i.getParameter(D)}function fe(D,se){f[D]!==se&&(i.pixelStorei(D,se),f[D]=se)}function oe(D){ct.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),ct.copy(D))}function ae(D){Oe.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Oe.copy(D))}function Se(D,se){let H=c.get(se);H===void 0&&(H=new WeakMap,c.set(se,H));let ne=H.get(D);ne===void 0&&(ne=i.getUniformBlockIndex(se,D.name),H.set(D,ne))}function be(D,se){let ne=c.get(se).get(D);l.get(se)!==ne&&(i.uniformBlockBinding(se,ne,D.__bindingPointIndex),l.set(se,ne))}function Ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},he=null,ge={},h={},p=new WeakMap,_=[],S=null,g=!1,m=null,w=null,R=null,M=null,A=null,T=null,P=null,v=new Ue(0,0,0),E=0,U=!1,I=null,O=null,K=null,$=null,k=null,ct.set(0,0,i.canvas.width,i.canvas.height),Oe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:re,disable:Pe,bindFramebuffer:ce,drawBuffers:Ce,useProgram:Ye,setBlending:Ze,setMaterial:Fe,setFlipSided:rt,setCullFace:Ge,setLineWidth:vt,setPolygonOffset:yt,setScissorTest:Qe,activeTexture:dt,bindTexture:L,unbindTexture:Lt,compressedTexImage2D:Je,compressedTexImage3D:x,texImage2D:G,texImage3D:q,pixelStorei:fe,getParameter:ie,updateUBOMapping:Se,uniformBlockBinding:be,texStorage2D:J,texStorage3D:ee,texSubImage2D:d,texSubImage3D:C,compressedTexSubImage2D:b,compressedTexSubImage3D:B,scissor:oe,viewport:ae,reset:Ee}}function Og(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Re,u=new WeakMap,f=new Set,h,p=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(x,d){return _?new OffscreenCanvas(x,d):Ss("canvas")}function g(x,d,C){let b=1,B=Je(x);if((B.width>C||B.height>C)&&(b=C/Math.max(B.width,B.height)),b<1)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap||typeof VideoFrame<"u"&&x instanceof VideoFrame){let J=Math.floor(b*B.width),ee=Math.floor(b*B.height);h===void 0&&(h=S(J,ee));let G=d?S(J,ee):h;return G.width=J,G.height=ee,G.getContext("2d").drawImage(x,0,0,J,ee),Ie("WebGLRenderer: Texture has been resized from ("+B.width+"x"+B.height+") to ("+J+"x"+ee+")."),G}else return"data"in x&&Ie("WebGLRenderer: Image in DataTexture is too big ("+B.width+"x"+B.height+")."),x;return x}function m(x){return x.generateMipmaps}function w(x){i.generateMipmap(x)}function R(x){return x.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:x.isWebGL3DRenderTarget?i.TEXTURE_3D:x.isWebGLArrayRenderTarget||x.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(x,d,C,b,B,J=!1){if(x!==null){if(i[x]!==void 0)return i[x];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let ee;b&&(ee=e.get("EXT_texture_norm16"),ee||Ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let G=d;if(d===i.RED&&(C===i.FLOAT&&(G=i.R32F),C===i.HALF_FLOAT&&(G=i.R16F),C===i.UNSIGNED_BYTE&&(G=i.R8),C===i.UNSIGNED_SHORT&&ee&&(G=ee.R16_EXT),C===i.SHORT&&ee&&(G=ee.R16_SNORM_EXT)),d===i.RED_INTEGER&&(C===i.UNSIGNED_BYTE&&(G=i.R8UI),C===i.UNSIGNED_SHORT&&(G=i.R16UI),C===i.UNSIGNED_INT&&(G=i.R32UI),C===i.BYTE&&(G=i.R8I),C===i.SHORT&&(G=i.R16I),C===i.INT&&(G=i.R32I)),d===i.RG&&(C===i.FLOAT&&(G=i.RG32F),C===i.HALF_FLOAT&&(G=i.RG16F),C===i.UNSIGNED_BYTE&&(G=i.RG8),C===i.UNSIGNED_SHORT&&ee&&(G=ee.RG16_EXT),C===i.SHORT&&ee&&(G=ee.RG16_SNORM_EXT)),d===i.RG_INTEGER&&(C===i.UNSIGNED_BYTE&&(G=i.RG8UI),C===i.UNSIGNED_SHORT&&(G=i.RG16UI),C===i.UNSIGNED_INT&&(G=i.RG32UI),C===i.BYTE&&(G=i.RG8I),C===i.SHORT&&(G=i.RG16I),C===i.INT&&(G=i.RG32I)),d===i.RGB_INTEGER&&(C===i.UNSIGNED_BYTE&&(G=i.RGB8UI),C===i.UNSIGNED_SHORT&&(G=i.RGB16UI),C===i.UNSIGNED_INT&&(G=i.RGB32UI),C===i.BYTE&&(G=i.RGB8I),C===i.SHORT&&(G=i.RGB16I),C===i.INT&&(G=i.RGB32I)),d===i.RGBA_INTEGER&&(C===i.UNSIGNED_BYTE&&(G=i.RGBA8UI),C===i.UNSIGNED_SHORT&&(G=i.RGBA16UI),C===i.UNSIGNED_INT&&(G=i.RGBA32UI),C===i.BYTE&&(G=i.RGBA8I),C===i.SHORT&&(G=i.RGBA16I),C===i.INT&&(G=i.RGBA32I)),d===i.RGB&&(C===i.UNSIGNED_SHORT&&ee&&(G=ee.RGB16_EXT),C===i.SHORT&&ee&&(G=ee.RGB16_SNORM_EXT),C===i.UNSIGNED_INT_5_9_9_9_REV&&(G=i.RGB9_E5),C===i.UNSIGNED_INT_10F_11F_11F_REV&&(G=i.R11F_G11F_B10F)),d===i.RGBA){let q=J?ys:He.getTransfer(B);C===i.FLOAT&&(G=i.RGBA32F),C===i.HALF_FLOAT&&(G=i.RGBA16F),C===i.UNSIGNED_BYTE&&(G=q===$e?i.SRGB8_ALPHA8:i.RGBA8),C===i.UNSIGNED_SHORT&&ee&&(G=ee.RGBA16_EXT),C===i.SHORT&&ee&&(G=ee.RGBA16_SNORM_EXT),C===i.UNSIGNED_SHORT_4_4_4_4&&(G=i.RGBA4),C===i.UNSIGNED_SHORT_5_5_5_1&&(G=i.RGB5_A1)}return(G===i.R16F||G===i.R32F||G===i.RG16F||G===i.RG32F||G===i.RGBA16F||G===i.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function A(x,d){let C;return x?d===null||d===dn||d===ss?C=i.DEPTH24_STENCIL8:d===fn?C=i.DEPTH32F_STENCIL8:d===is&&(C=i.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):d===null||d===dn||d===ss?C=i.DEPTH_COMPONENT24:d===fn?C=i.DEPTH_COMPONENT32F:d===is&&(C=i.DEPTH_COMPONENT16),C}function T(x,d){return m(x)===!0||x.isFramebufferTexture&&x.minFilter!==xt&&x.minFilter!==Pt?Math.log2(Math.max(d.width,d.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?d.mipmaps.length:1}function P(x){let d=x.target;d.removeEventListener("dispose",P),E(d),d.isVideoTexture&&u.delete(d),d.isHTMLTexture&&f.delete(d)}function v(x){let d=x.target;d.removeEventListener("dispose",v),I(d)}function E(x){let d=n.get(x);if(d.__webglInit===void 0)return;let C=x.source,b=p.get(C);if(b){let B=b[d.__cacheKey];B.usedTimes--,B.usedTimes===0&&U(x),Object.keys(b).length===0&&p.delete(C)}n.remove(x)}function U(x){let d=n.get(x);i.deleteTexture(d.__webglTexture);let C=x.source,b=p.get(C);delete b[d.__cacheKey],a.memory.textures--}function I(x){let d=n.get(x);if(x.depthTexture&&(x.depthTexture.dispose(),n.remove(x.depthTexture)),x.isWebGLCubeRenderTarget)for(let b=0;b<6;b++){if(Array.isArray(d.__webglFramebuffer[b]))for(let B=0;B<d.__webglFramebuffer[b].length;B++)i.deleteFramebuffer(d.__webglFramebuffer[b][B]);else i.deleteFramebuffer(d.__webglFramebuffer[b]);d.__webglDepthbuffer&&i.deleteRenderbuffer(d.__webglDepthbuffer[b])}else{if(Array.isArray(d.__webglFramebuffer))for(let b=0;b<d.__webglFramebuffer.length;b++)i.deleteFramebuffer(d.__webglFramebuffer[b]);else i.deleteFramebuffer(d.__webglFramebuffer);if(d.__webglDepthbuffer&&i.deleteRenderbuffer(d.__webglDepthbuffer),d.__webglMultisampledFramebuffer&&i.deleteFramebuffer(d.__webglMultisampledFramebuffer),d.__webglColorRenderbuffer)for(let b=0;b<d.__webglColorRenderbuffer.length;b++)d.__webglColorRenderbuffer[b]&&i.deleteRenderbuffer(d.__webglColorRenderbuffer[b]);d.__webglDepthRenderbuffer&&i.deleteRenderbuffer(d.__webglDepthRenderbuffer)}let C=x.textures;for(let b=0,B=C.length;b<B;b++){let J=n.get(C[b]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),a.memory.textures--),n.remove(C[b])}n.remove(x)}let O=0;function K(){O=0}function $(){return O}function k(x){O=x}function Z(){let x=O;return x>=s.maxTextures&&Ie("WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+s.maxTextures),O+=1,x}function X(x){let d=[];return d.push(x.wrapS),d.push(x.wrapT),d.push(x.wrapR||0),d.push(x.magFilter),d.push(x.minFilter),d.push(x.anisotropy),d.push(x.internalFormat),d.push(x.format),d.push(x.type),d.push(x.generateMipmaps),d.push(x.premultiplyAlpha),d.push(x.flipY),d.push(x.unpackAlignment),d.push(x.colorSpace),d.join()}function j(x,d){let C=n.get(x);if(x.isVideoTexture&&L(x),x.isRenderTargetTexture===!1&&x.isExternalTexture!==!0&&x.version>0&&C.__version!==x.version){let b=x.image;if(b===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(b.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(C,x,d);return}}else x.isExternalTexture&&(C.__webglTexture=x.sourceTexture?x.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,C.__webglTexture,i.TEXTURE0+d)}function te(x,d){let C=n.get(x);if(x.isRenderTargetTexture===!1&&x.version>0&&C.__version!==x.version){Pe(C,x,d);return}else x.isExternalTexture&&(C.__webglTexture=x.sourceTexture?x.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,C.__webglTexture,i.TEXTURE0+d)}function he(x,d){let C=n.get(x);if(x.isRenderTargetTexture===!1&&x.version>0&&C.__version!==x.version){Pe(C,x,d);return}t.bindTexture(i.TEXTURE_3D,C.__webglTexture,i.TEXTURE0+d)}function ge(x,d){let C=n.get(x);if(x.isCubeDepthTexture!==!0&&x.version>0&&C.__version!==x.version){ce(C,x,d);return}t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+d)}let ye={[Hr]:i.REPEAT,[yn]:i.CLAMP_TO_EDGE,[Wr]:i.MIRRORED_REPEAT},qe={[xt]:i.NEAREST,[Jc]:i.NEAREST_MIPMAP_NEAREST,[Ws]:i.NEAREST_MIPMAP_LINEAR,[Pt]:i.LINEAR,[xa]:i.LINEAR_MIPMAP_NEAREST,[ri]:i.LINEAR_MIPMAP_LINEAR},ct={[jc]:i.NEVER,[sh]:i.ALWAYS,[eh]:i.LESS,[to]:i.LEQUAL,[th]:i.EQUAL,[no]:i.GEQUAL,[nh]:i.GREATER,[ih]:i.NOTEQUAL};function Oe(x,d){if(d.type===fn&&e.has("OES_texture_float_linear")===!1&&(d.magFilter===Pt||d.magFilter===xa||d.magFilter===Ws||d.magFilter===ri||d.minFilter===Pt||d.minFilter===xa||d.minFilter===Ws||d.minFilter===ri)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(x,i.TEXTURE_WRAP_S,ye[d.wrapS]),i.texParameteri(x,i.TEXTURE_WRAP_T,ye[d.wrapT]),(x===i.TEXTURE_3D||x===i.TEXTURE_2D_ARRAY)&&i.texParameteri(x,i.TEXTURE_WRAP_R,ye[d.wrapR]),i.texParameteri(x,i.TEXTURE_MAG_FILTER,qe[d.magFilter]),i.texParameteri(x,i.TEXTURE_MIN_FILTER,qe[d.minFilter]),d.compareFunction&&(i.texParameteri(x,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(x,i.TEXTURE_COMPARE_FUNC,ct[d.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(d.magFilter===xt||d.minFilter!==Ws&&d.minFilter!==ri||d.type===fn&&e.has("OES_texture_float_linear")===!1)return;if(d.anisotropy>1||n.get(d).__currentAnisotropy){let C=e.get("EXT_texture_filter_anisotropic");i.texParameterf(x,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(d.anisotropy,s.getMaxAnisotropy())),n.get(d).__currentAnisotropy=d.anisotropy}}}function Q(x,d){let C=!1;x.__webglInit===void 0&&(x.__webglInit=!0,d.addEventListener("dispose",P));let b=d.source,B=p.get(b);B===void 0&&(B={},p.set(b,B));let J=X(d);if(J!==x.__cacheKey){B[J]===void 0&&(B[J]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,C=!0),B[J].usedTimes++;let ee=B[x.__cacheKey];ee!==void 0&&(B[x.__cacheKey].usedTimes--,ee.usedTimes===0&&U(d)),x.__cacheKey=J,x.__webglTexture=B[J].texture}return C}function ue(x,d,C){return Math.floor(Math.floor(x/C)/d)}function re(x,d,C,b){let J=x.updateRanges;if(J.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,d.width,d.height,C,b,d.data);else{J.sort((fe,oe)=>fe.start-oe.start);let ee=0;for(let fe=1;fe<J.length;fe++){let oe=J[ee],ae=J[fe],Se=oe.start+oe.count,be=ue(ae.start,d.width,4),Ee=ue(oe.start,d.width,4);ae.start<=Se+1&&be===Ee&&ue(ae.start+ae.count-1,d.width,4)===be?oe.count=Math.max(oe.count,ae.start+ae.count-oe.start):(++ee,J[ee]=ae)}J.length=ee+1;let G=t.getParameter(i.UNPACK_ROW_LENGTH),q=t.getParameter(i.UNPACK_SKIP_PIXELS),ie=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,d.width);for(let fe=0,oe=J.length;fe<oe;fe++){let ae=J[fe],Se=Math.floor(ae.start/4),be=Math.ceil(ae.count/4),Ee=Se%d.width,D=Math.floor(Se/d.width),se=be,H=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ee),t.pixelStorei(i.UNPACK_SKIP_ROWS,D),t.texSubImage2D(i.TEXTURE_2D,0,Ee,D,se,H,C,b,d.data)}x.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,G),t.pixelStorei(i.UNPACK_SKIP_PIXELS,q),t.pixelStorei(i.UNPACK_SKIP_ROWS,ie)}}function Pe(x,d,C){let b=i.TEXTURE_2D;(d.isDataArrayTexture||d.isCompressedArrayTexture)&&(b=i.TEXTURE_2D_ARRAY),d.isData3DTexture&&(b=i.TEXTURE_3D);let B=Q(x,d),J=d.source;t.bindTexture(b,x.__webglTexture,i.TEXTURE0+C);let ee=n.get(J);if(J.version!==ee.__version||B===!0){if(t.activeTexture(i.TEXTURE0+C),(typeof ImageBitmap<"u"&&d.image instanceof ImageBitmap)===!1){let H=He.getPrimaries(He.workingColorSpace),ne=d.colorSpace===zn?null:He.getPrimaries(d.colorSpace),le=d.colorSpace===zn||H===ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,d.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,d.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,le)}t.pixelStorei(i.UNPACK_ALIGNMENT,d.unpackAlignment);let q=g(d.image,!1,s.maxTextureSize);q=Lt(d,q);let ie=r.convert(d.format,d.colorSpace),fe=r.convert(d.type),oe=M(d.internalFormat,ie,fe,d.normalized,d.colorSpace,d.isVideoTexture);Oe(b,d);let ae,Se=d.mipmaps,be=d.isVideoTexture!==!0,Ee=ee.__version===void 0||B===!0,D=J.dataReady,se=T(d,q);if(d.isDepthTexture)oe=A(d.format===ai,d.type),Ee&&(be?t.texStorage2D(i.TEXTURE_2D,1,oe,q.width,q.height):t.texImage2D(i.TEXTURE_2D,0,oe,q.width,q.height,0,ie,fe,null));else if(d.isDataTexture)if(Se.length>0){be&&Ee&&t.texStorage2D(i.TEXTURE_2D,se,oe,Se[0].width,Se[0].height);for(let H=0,ne=Se.length;H<ne;H++)ae=Se[H],be?D&&t.texSubImage2D(i.TEXTURE_2D,H,0,0,ae.width,ae.height,ie,fe,ae.data):t.texImage2D(i.TEXTURE_2D,H,oe,ae.width,ae.height,0,ie,fe,ae.data);d.generateMipmaps=!1}else be?(Ee&&t.texStorage2D(i.TEXTURE_2D,se,oe,q.width,q.height),D&&re(d,q,ie,fe)):t.texImage2D(i.TEXTURE_2D,0,oe,q.width,q.height,0,ie,fe,q.data);else if(d.isCompressedTexture)if(d.isCompressedArrayTexture){be&&Ee&&t.texStorage3D(i.TEXTURE_2D_ARRAY,se,oe,Se[0].width,Se[0].height,q.depth);for(let H=0,ne=Se.length;H<ne;H++)if(ae=Se[H],d.format!==nn)if(ie!==null)if(be){if(D)if(d.layerUpdates.size>0){let le=yl(ae.width,ae.height,d.format,d.type);for(let Y of d.layerUpdates){let _e=ae.data.subarray(Y*le/ae.data.BYTES_PER_ELEMENT,(Y+1)*le/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,Y,ae.width,ae.height,1,ie,_e)}d.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,0,ae.width,ae.height,q.depth,ie,ae.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,H,oe,ae.width,ae.height,q.depth,0,ae.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else be?D&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,0,ae.width,ae.height,q.depth,ie,fe,ae.data):t.texImage3D(i.TEXTURE_2D_ARRAY,H,oe,ae.width,ae.height,q.depth,0,ie,fe,ae.data)}else{be&&Ee&&t.texStorage2D(i.TEXTURE_2D,se,oe,Se[0].width,Se[0].height);for(let H=0,ne=Se.length;H<ne;H++)ae=Se[H],d.format!==nn?ie!==null?be?D&&t.compressedTexSubImage2D(i.TEXTURE_2D,H,0,0,ae.width,ae.height,ie,ae.data):t.compressedTexImage2D(i.TEXTURE_2D,H,oe,ae.width,ae.height,0,ae.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):be?D&&t.texSubImage2D(i.TEXTURE_2D,H,0,0,ae.width,ae.height,ie,fe,ae.data):t.texImage2D(i.TEXTURE_2D,H,oe,ae.width,ae.height,0,ie,fe,ae.data)}else if(d.isDataArrayTexture)if(be){if(Ee&&t.texStorage3D(i.TEXTURE_2D_ARRAY,se,oe,q.width,q.height,q.depth),D)if(d.layerUpdates.size>0){let H=yl(q.width,q.height,d.format,d.type);for(let ne of d.layerUpdates){let le=q.data.subarray(ne*H/q.data.BYTES_PER_ELEMENT,(ne+1)*H/q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ne,q.width,q.height,1,ie,fe,le)}d.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,ie,fe,q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,oe,q.width,q.height,q.depth,0,ie,fe,q.data);else if(d.isData3DTexture)be?(Ee&&t.texStorage3D(i.TEXTURE_3D,se,oe,q.width,q.height,q.depth),D&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,ie,fe,q.data)):t.texImage3D(i.TEXTURE_3D,0,oe,q.width,q.height,q.depth,0,ie,fe,q.data);else if(d.isFramebufferTexture){if(Ee)if(be)t.texStorage2D(i.TEXTURE_2D,se,oe,q.width,q.height);else{let H=q.width,ne=q.height;for(let le=0;le<se;le++)t.texImage2D(i.TEXTURE_2D,le,oe,H,ne,0,ie,fe,null),H>>=1,ne>>=1}}else if(d.isHTMLTexture){if("texElementImage2D"in i){let H=i.canvas;if(H.hasAttribute("layoutsubtree")||H.setAttribute("layoutsubtree","true"),q.parentNode!==H){H.appendChild(q),f.add(d),H.onpaint=ne=>{let le=ne.changedElements;for(let Y of f)le.includes(Y.image)&&(Y.needsUpdate=!0)},H.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,q);else{let le=i.RGBA,Y=i.RGBA,_e=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,le,Y,_e,q)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Se.length>0){if(be&&Ee){let H=Je(Se[0]);t.texStorage2D(i.TEXTURE_2D,se,oe,H.width,H.height)}for(let H=0,ne=Se.length;H<ne;H++)ae=Se[H],be?D&&t.texSubImage2D(i.TEXTURE_2D,H,0,0,ie,fe,ae):t.texImage2D(i.TEXTURE_2D,H,oe,ie,fe,ae);d.generateMipmaps=!1}else if(be){if(Ee){let H=Je(q);t.texStorage2D(i.TEXTURE_2D,se,oe,H.width,H.height)}D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ie,fe,q)}else t.texImage2D(i.TEXTURE_2D,0,oe,ie,fe,q);m(d)&&w(b),ee.__version=J.version,d.onUpdate&&d.onUpdate(d)}x.__version=d.version}function ce(x,d,C){if(d.image.length!==6)return;let b=Q(x,d),B=d.source;t.bindTexture(i.TEXTURE_CUBE_MAP,x.__webglTexture,i.TEXTURE0+C);let J=n.get(B);if(B.version!==J.__version||b===!0){t.activeTexture(i.TEXTURE0+C);let ee=He.getPrimaries(He.workingColorSpace),G=d.colorSpace===zn?null:He.getPrimaries(d.colorSpace),q=d.colorSpace===zn||ee===G?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,d.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,d.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,d.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,q);let ie=d.isCompressedTexture||d.image[0].isCompressedTexture,fe=d.image[0]&&d.image[0].isDataTexture,oe=[];for(let Y=0;Y<6;Y++)!ie&&!fe?oe[Y]=g(d.image[Y],!0,s.maxCubemapSize):oe[Y]=fe?d.image[Y].image:d.image[Y],oe[Y]=Lt(d,oe[Y]);let ae=oe[0],Se=r.convert(d.format,d.colorSpace),be=r.convert(d.type),Ee=M(d.internalFormat,Se,be,d.normalized,d.colorSpace),D=d.isVideoTexture!==!0,se=J.__version===void 0||b===!0,H=B.dataReady,ne=T(d,ae);Oe(i.TEXTURE_CUBE_MAP,d);let le;if(ie){D&&se&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ne,Ee,ae.width,ae.height);for(let Y=0;Y<6;Y++){le=oe[Y].mipmaps;for(let _e=0;_e<le.length;_e++){let de=le[_e];d.format!==nn?Se!==null?D?H&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,_e,0,0,de.width,de.height,Se,de.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,_e,Ee,de.width,de.height,0,de.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?H&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,_e,0,0,de.width,de.height,Se,be,de.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,_e,Ee,de.width,de.height,0,Se,be,de.data)}}}else{if(le=d.mipmaps,D&&se){le.length>0&&ne++;let Y=Je(oe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ne,Ee,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(fe){D?H&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,oe[Y].width,oe[Y].height,Se,be,oe[Y].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ee,oe[Y].width,oe[Y].height,0,Se,be,oe[Y].data);for(let _e=0;_e<le.length;_e++){let Xe=le[_e].image[Y].image;D?H&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,_e+1,0,0,Xe.width,Xe.height,Se,be,Xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,_e+1,Ee,Xe.width,Xe.height,0,Se,be,Xe.data)}}else{D?H&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Se,be,oe[Y]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ee,Se,be,oe[Y]);for(let _e=0;_e<le.length;_e++){let de=le[_e];D?H&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,_e+1,0,0,Se,be,de.image[Y]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,_e+1,Ee,Se,be,de.image[Y])}}}m(d)&&w(i.TEXTURE_CUBE_MAP),J.__version=B.version,d.onUpdate&&d.onUpdate(d)}x.__version=d.version}function Ce(x,d,C,b,B,J){let ee=r.convert(C.format,C.colorSpace),G=r.convert(C.type),q=M(C.internalFormat,ee,G,C.normalized,C.colorSpace),ie=n.get(d),fe=n.get(C);if(fe.__renderTarget=d,!ie.__hasExternalTextures){let oe=Math.max(1,d.width>>J),ae=Math.max(1,d.height>>J);B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?t.texImage3D(B,J,q,oe,ae,d.depth,0,ee,G,null):t.texImage2D(B,J,q,oe,ae,0,ee,G,null)}t.bindFramebuffer(i.FRAMEBUFFER,x),dt(d)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,b,B,fe.__webglTexture,0,Qe(d)):(B===i.TEXTURE_2D||B>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&B<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,b,B,fe.__webglTexture,J),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ye(x,d,C){if(i.bindRenderbuffer(i.RENDERBUFFER,x),d.depthBuffer){let b=d.depthTexture,B=b&&b.isDepthTexture?b.type:null,J=A(d.stencilBuffer,B),ee=d.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;dt(d)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Qe(d),J,d.width,d.height):C?i.renderbufferStorageMultisample(i.RENDERBUFFER,Qe(d),J,d.width,d.height):i.renderbufferStorage(i.RENDERBUFFER,J,d.width,d.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,x)}else{let b=d.textures;for(let B=0;B<b.length;B++){let J=b[B],ee=r.convert(J.format,J.colorSpace),G=r.convert(J.type),q=M(J.internalFormat,ee,G,J.normalized,J.colorSpace);dt(d)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Qe(d),q,d.width,d.height):C?i.renderbufferStorageMultisample(i.RENDERBUFFER,Qe(d),q,d.width,d.height):i.renderbufferStorage(i.RENDERBUFFER,q,d.width,d.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ke(x,d,C){let b=d.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,x),!(d.depthTexture&&d.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let B=n.get(d.depthTexture);if(B.__renderTarget=d,(!B.__webglTexture||d.depthTexture.image.width!==d.width||d.depthTexture.image.height!==d.height)&&(d.depthTexture.image.width=d.width,d.depthTexture.image.height=d.height,d.depthTexture.needsUpdate=!0),b){if(B.__webglInit===void 0&&(B.__webglInit=!0,d.depthTexture.addEventListener("dispose",P)),B.__webglTexture===void 0){B.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture),Oe(i.TEXTURE_CUBE_MAP,d.depthTexture);let ie=r.convert(d.depthTexture.format),fe=r.convert(d.depthTexture.type),oe;d.depthTexture.format===Mn?oe=i.DEPTH_COMPONENT24:d.depthTexture.format===ai&&(oe=i.DEPTH24_STENCIL8);for(let ae=0;ae<6;ae++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,oe,d.width,d.height,0,ie,fe,null)}}else j(d.depthTexture,0);let J=B.__webglTexture,ee=Qe(d),G=b?i.TEXTURE_CUBE_MAP_POSITIVE_X+C:i.TEXTURE_2D,q=d.depthTexture.format===ai?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(d.depthTexture.format===Mn)dt(d)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,G,J,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,q,G,J,0);else if(d.depthTexture.format===ai)dt(d)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,G,J,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,q,G,J,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function je(x){let d=n.get(x),C=x.isWebGLCubeRenderTarget===!0;if(d.__boundDepthTexture!==x.depthTexture){let b=x.depthTexture;if(d.__depthDisposeCallback&&d.__depthDisposeCallback(),b){let B=()=>{delete d.__boundDepthTexture,delete d.__depthDisposeCallback,b.removeEventListener("dispose",B)};b.addEventListener("dispose",B),d.__depthDisposeCallback=B}d.__boundDepthTexture=b}if(x.depthTexture&&!d.__autoAllocateDepthBuffer)if(C)for(let b=0;b<6;b++)ke(d.__webglFramebuffer[b],x,b);else{let b=x.texture.mipmaps;b&&b.length>0?ke(d.__webglFramebuffer[0],x,0):ke(d.__webglFramebuffer,x,0)}else if(C){d.__webglDepthbuffer=[];for(let b=0;b<6;b++)if(t.bindFramebuffer(i.FRAMEBUFFER,d.__webglFramebuffer[b]),d.__webglDepthbuffer[b]===void 0)d.__webglDepthbuffer[b]=i.createRenderbuffer(),Ye(d.__webglDepthbuffer[b],x,!1);else{let B=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=d.__webglDepthbuffer[b];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,B,i.RENDERBUFFER,J)}}else{let b=x.texture.mipmaps;if(b&&b.length>0?t.bindFramebuffer(i.FRAMEBUFFER,d.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,d.__webglFramebuffer),d.__webglDepthbuffer===void 0)d.__webglDepthbuffer=i.createRenderbuffer(),Ye(d.__webglDepthbuffer,x,!1);else{let B=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=d.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,B,i.RENDERBUFFER,J)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ze(x,d,C){let b=n.get(x);d!==void 0&&Ce(b.__webglFramebuffer,x,x.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),C!==void 0&&je(x)}function Fe(x){let d=x.texture,C=n.get(x),b=n.get(d);x.addEventListener("dispose",v);let B=x.textures,J=x.isWebGLCubeRenderTarget===!0,ee=B.length>1;if(ee||(b.__webglTexture===void 0&&(b.__webglTexture=i.createTexture()),b.__version=d.version,a.memory.textures++),J){C.__webglFramebuffer=[];for(let G=0;G<6;G++)if(d.mipmaps&&d.mipmaps.length>0){C.__webglFramebuffer[G]=[];for(let q=0;q<d.mipmaps.length;q++)C.__webglFramebuffer[G][q]=i.createFramebuffer()}else C.__webglFramebuffer[G]=i.createFramebuffer()}else{if(d.mipmaps&&d.mipmaps.length>0){C.__webglFramebuffer=[];for(let G=0;G<d.mipmaps.length;G++)C.__webglFramebuffer[G]=i.createFramebuffer()}else C.__webglFramebuffer=i.createFramebuffer();if(ee)for(let G=0,q=B.length;G<q;G++){let ie=n.get(B[G]);ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture(),a.memory.textures++)}if(x.samples>0&&dt(x)===!1){C.__webglMultisampledFramebuffer=i.createFramebuffer(),C.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let G=0;G<B.length;G++){let q=B[G];C.__webglColorRenderbuffer[G]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,C.__webglColorRenderbuffer[G]);let ie=r.convert(q.format,q.colorSpace),fe=r.convert(q.type),oe=M(q.internalFormat,ie,fe,q.normalized,q.colorSpace,x.isXRRenderTarget===!0),ae=Qe(x);i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,oe,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+G,i.RENDERBUFFER,C.__webglColorRenderbuffer[G])}i.bindRenderbuffer(i.RENDERBUFFER,null),x.depthBuffer&&(C.__webglDepthRenderbuffer=i.createRenderbuffer(),Ye(C.__webglDepthRenderbuffer,x,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture),Oe(i.TEXTURE_CUBE_MAP,d);for(let G=0;G<6;G++)if(d.mipmaps&&d.mipmaps.length>0)for(let q=0;q<d.mipmaps.length;q++)Ce(C.__webglFramebuffer[G][q],x,d,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+G,q);else Ce(C.__webglFramebuffer[G],x,d,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0);m(d)&&w(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ee){for(let G=0,q=B.length;G<q;G++){let ie=B[G],fe=n.get(ie),oe=i.TEXTURE_2D;(x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(oe=x.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,fe.__webglTexture),Oe(oe,ie),Ce(C.__webglFramebuffer,x,ie,i.COLOR_ATTACHMENT0+G,oe,0),m(ie)&&w(oe)}t.unbindTexture()}else{let G=i.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(G=x.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(G,b.__webglTexture),Oe(G,d),d.mipmaps&&d.mipmaps.length>0)for(let q=0;q<d.mipmaps.length;q++)Ce(C.__webglFramebuffer[q],x,d,i.COLOR_ATTACHMENT0,G,q);else Ce(C.__webglFramebuffer,x,d,i.COLOR_ATTACHMENT0,G,0);m(d)&&w(G),t.unbindTexture()}x.depthBuffer&&je(x)}function rt(x){let d=x.textures;for(let C=0,b=d.length;C<b;C++){let B=d[C];if(m(B)){let J=R(x),ee=n.get(B).__webglTexture;t.bindTexture(J,ee),w(J),t.unbindTexture()}}}let Ge=[],vt=[];function yt(x){if(x.samples>0){if(dt(x)===!1){let d=x.textures,C=x.width,b=x.height,B=i.COLOR_BUFFER_BIT,J=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=n.get(x),G=d.length>1;if(G)for(let ie=0;ie<d.length;ie++)t.bindFramebuffer(i.FRAMEBUFFER,ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ee.__webglMultisampledFramebuffer);let q=x.texture.mipmaps;q&&q.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ee.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ee.__webglFramebuffer);for(let ie=0;ie<d.length;ie++){if(x.resolveDepthBuffer&&(x.depthBuffer&&(B|=i.DEPTH_BUFFER_BIT),x.stencilBuffer&&x.resolveStencilBuffer&&(B|=i.STENCIL_BUFFER_BIT)),G){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ee.__webglColorRenderbuffer[ie]);let fe=n.get(d[ie]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,fe,0)}i.blitFramebuffer(0,0,C,b,0,0,C,b,B,i.NEAREST),l===!0&&(Ge.length=0,vt.length=0,Ge.push(i.COLOR_ATTACHMENT0+ie),x.depthBuffer&&x.resolveDepthBuffer===!1&&(Ge.push(J),vt.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,vt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ge))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),G)for(let ie=0;ie<d.length;ie++){t.bindFramebuffer(i.FRAMEBUFFER,ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.RENDERBUFFER,ee.__webglColorRenderbuffer[ie]);let fe=n.get(d[ie]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.TEXTURE_2D,fe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ee.__webglMultisampledFramebuffer)}else if(x.depthBuffer&&x.resolveDepthBuffer===!1&&l){let d=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[d])}}}function Qe(x){return Math.min(s.maxSamples,x.samples)}function dt(x){let d=n.get(x);return x.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&d.__useRenderToTexture!==!1}function L(x){let d=a.render.frame;u.get(x)!==d&&(u.set(x,d),x.update())}function Lt(x,d){let C=x.colorSpace,b=x.format,B=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||C!==vs&&C!==zn&&(He.getTransfer(C)===$e?(b!==nn||B!==Qt)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):De("WebGLTextures: Unsupported texture color space:",C)),d}function Je(x){return typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement?(c.width=x.naturalWidth||x.width,c.height=x.naturalHeight||x.height):typeof VideoFrame<"u"&&x instanceof VideoFrame?(c.width=x.displayWidth,c.height=x.displayHeight):(c.width=x.width,c.height=x.height),c}this.allocateTextureUnit=Z,this.resetTextureUnits=K,this.getTextureUnits=$,this.setTextureUnits=k,this.setTexture2D=j,this.setTexture2DArray=te,this.setTexture3D=he,this.setTextureCube=ge,this.rebindTextures=Ze,this.setupRenderTarget=Fe,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=dt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function zg(i,e){function t(n,s=zn){let r,a=He.getTransfer(s);if(n===Qt)return i.UNSIGNED_BYTE;if(n===ya)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ma)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ol)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ll)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===rl)return i.BYTE;if(n===al)return i.SHORT;if(n===is)return i.UNSIGNED_SHORT;if(n===va)return i.INT;if(n===dn)return i.UNSIGNED_INT;if(n===fn)return i.FLOAT;if(n===Tt)return i.HALF_FLOAT;if(n===cl)return i.ALPHA;if(n===hl)return i.RGB;if(n===nn)return i.RGBA;if(n===Mn)return i.DEPTH_COMPONENT;if(n===ai)return i.DEPTH_STENCIL;if(n===ul)return i.RED;if(n===Sa)return i.RED_INTEGER;if(n===oi)return i.RG;if(n===ba)return i.RG_INTEGER;if(n===Ta)return i.RGBA_INTEGER;if(n===Xs||n===qs||n===Ys||n===Zs)if(a===$e)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Xs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===qs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ys)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Xs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===qs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ys)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Zs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ea||n===Aa||n===wa||n===Ca)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ea)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Aa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===wa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ca)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ra||n===Pa||n===Ia||n===Da||n===La||n===Ks||n===Ua)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ra||n===Pa)return a===$e?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ia)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Da)return r.COMPRESSED_R11_EAC;if(n===La)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ks)return r.COMPRESSED_RG11_EAC;if(n===Ua)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Na||n===Fa||n===Ba||n===Oa||n===za||n===Va||n===ka||n===Ga||n===Ha||n===Wa||n===Xa||n===qa||n===Ya||n===Za)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Na)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Fa)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ba)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Oa)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===za)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Va)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ka)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ga)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ha)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Wa)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xa)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===qa)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ya)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Za)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ka||n===Ja||n===$a)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ka)return a===$e?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ja)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$a)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Qa||n===ja||n===Js||n===eo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Qa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ja)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Js)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===eo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ss?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Vg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kg=`
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

}`,zl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ds(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new st({vertexShader:Vg,fragmentShader:kg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Dt(new jn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Vl=class extends Sn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,_=null,S=typeof XRWebGLBinding<"u",g=new zl,m={},w=t.getContextAttributes(),R=null,M=null,A=[],T=[],P=new Re,v=null,E=new Bt;E.viewport=new ut;let U=new Bt;U.viewport=new ut;let I=[E,U],O=new pa,K=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ue=A[Q];return ue===void 0&&(ue=new Zi,A[Q]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(Q){let ue=A[Q];return ue===void 0&&(ue=new Zi,A[Q]=ue),ue.getGripSpace()},this.getHand=function(Q){let ue=A[Q];return ue===void 0&&(ue=new Zi,A[Q]=ue),ue.getHandSpace()};function k(Q){let ue=T.indexOf(Q.inputSource);if(ue===-1)return;let re=A[ue];re!==void 0&&(re.update(Q.inputSource,Q.frame,c||a),re.dispatchEvent({type:Q.type,data:Q.inputSource}))}function Z(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",X);for(let Q=0;Q<A.length;Q++){let ue=T[Q];ue!==null&&(T[Q]=null,A[Q].disconnect(ue))}K=null,$=null,g.reset();for(let Q in m)delete m[Q];e.setRenderTarget(R),p=null,h=null,f=null,s=null,M=null,Oe.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f===null&&S&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(R=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",X),w.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(P),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,Pe=null,ce=null;w.depth&&(ce=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=w.stencil?ai:Mn,Pe=w.stencil?ss:dn);let Ce={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(Ce),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new pt(h.textureWidth,h.textureHeight,{format:nn,type:Qt,depthTexture:new On(h.textureWidth,h.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{let re={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,re),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new pt(p.framebufferWidth,p.framebufferHeight,{format:nn,type:Qt,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Oe.setContext(s),Oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function X(Q){for(let ue=0;ue<Q.removed.length;ue++){let re=Q.removed[ue],Pe=T.indexOf(re);Pe>=0&&(T[Pe]=null,A[Pe].disconnect(re))}for(let ue=0;ue<Q.added.length;ue++){let re=Q.added[ue],Pe=T.indexOf(re);if(Pe===-1){for(let Ce=0;Ce<A.length;Ce++)if(Ce>=T.length){T.push(re),Pe=Ce;break}else if(T[Ce]===null){T[Ce]=re,Pe=Ce;break}if(Pe===-1)break}let ce=A[Pe];ce&&ce.connect(re)}}let j=new F,te=new F;function he(Q,ue,re){j.setFromMatrixPosition(ue.matrixWorld),te.setFromMatrixPosition(re.matrixWorld);let Pe=j.distanceTo(te),ce=ue.projectionMatrix.elements,Ce=re.projectionMatrix.elements,Ye=ce[14]/(ce[10]-1),ke=ce[14]/(ce[10]+1),je=(ce[9]+1)/ce[5],Ze=(ce[9]-1)/ce[5],Fe=(ce[8]-1)/ce[0],rt=(Ce[8]+1)/Ce[0],Ge=Ye*Fe,vt=Ye*rt,yt=Pe/(-Fe+rt),Qe=yt*-Fe;if(ue.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Qe),Q.translateZ(yt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),ce[10]===-1)Q.projectionMatrix.copy(ue.projectionMatrix),Q.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{let dt=Ye+yt,L=ke+yt,Lt=Ge-Qe,Je=vt+(Pe-Qe),x=je*ke/L*dt,d=Ze*ke/L*dt;Q.projectionMatrix.makePerspective(Lt,Je,x,d,dt,L),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ge(Q,ue){ue===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ue.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let ue=Q.near,re=Q.far;g.texture!==null&&(g.depthNear>0&&(ue=g.depthNear),g.depthFar>0&&(re=g.depthFar)),O.near=U.near=E.near=ue,O.far=U.far=E.far=re,(K!==O.near||$!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),K=O.near,$=O.far),O.layers.mask=Q.layers.mask|6,E.layers.mask=O.layers.mask&-5,U.layers.mask=O.layers.mask&-3;let Pe=Q.parent,ce=O.cameras;ge(O,Pe);for(let Ce=0;Ce<ce.length;Ce++)ge(ce[Ce],Pe);ce.length===2?he(O,E,U):O.projectionMatrix.copy(E.projectionMatrix),ye(Q,O,Pe)};function ye(Q,ue,re){re===null?Q.matrix.copy(ue.matrixWorld):(Q.matrix.copy(re.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ue.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ue.projectionMatrix),Q.projectionMatrixInverse.copy(ue.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=qi*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(Q){l=Q,h!==null&&(h.fixedFoveation=Q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(O)},this.getCameraTexture=function(Q){return m[Q]};let qe=null;function ct(Q,ue){if(u=ue.getViewerPose(c||a),_=ue,u!==null){let re=u.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let Pe=!1;re.length!==O.cameras.length&&(O.cameras.length=0,Pe=!0);for(let ke=0;ke<re.length;ke++){let je=re[ke],Ze=null;if(p!==null)Ze=p.getViewport(je);else{let rt=f.getViewSubImage(h,je);Ze=rt.viewport,ke===0&&(e.setRenderTargetTextures(M,rt.colorTexture,rt.depthStencilTexture),e.setRenderTarget(M))}let Fe=I[ke];Fe===void 0&&(Fe=new Bt,Fe.layers.enable(ke),Fe.viewport=new ut,I[ke]=Fe),Fe.matrix.fromArray(je.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(je.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),ke===0&&(O.matrix.copy(Fe.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Pe===!0&&O.cameras.push(Fe)}let ce=s.enabledFeatures;if(ce&&ce.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){f=n.getBinding();let ke=f.getDepthInformation(re[0]);ke&&ke.isValid&&ke.texture&&g.init(ke,s.renderState)}if(ce&&ce.includes("camera-access")&&S){e.state.unbindTexture(),f=n.getBinding();for(let ke=0;ke<re.length;ke++){let je=re[ke].camera;if(je){let Ze=m[je];Ze||(Ze=new Ds,m[je]=Ze);let Fe=f.getCameraImage(je);Ze.sourceTexture=Fe}}}}for(let re=0;re<A.length;re++){let Pe=T[re],ce=A[re];Pe!==null&&ce!==void 0&&ce.update(Pe,ue,c||a)}qe&&qe(Q,ue),ue.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ue}),_=null}let Oe=new Uh;Oe.setAnimationLoop(ct),this.setAnimationLoop=function(Q){qe=Q},this.dispose=function(){}}},Gg=new ht,Vh=new Le;Vh.set(-1,0,0,0,1,0,0,0,1);function Hg(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,_l(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,w,R,M){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),f(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),h(g,m),m.isMeshPhysicalMaterial&&p(g,m,M)):m.isMeshMatcapMaterial?(r(g,m),_(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),S(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,w,R):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Gt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Gt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let w=e.get(m),R=w.envMap,M=w.envMapRotation;R&&(g.envMap.value=R,g.envMapRotation.value.setFromMatrix4(Gg.makeRotationFromEuler(M)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Vh),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,w,R){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*w,g.scale.value=R*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function f(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function h(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function p(g,m,w){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Gt&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=w.texture,g.transmissionSamplerSize.value.set(w.width,w.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,m){m.matcap&&(g.matcap.value=m.matcap)}function S(g,m){let w=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(w.matrixWorld),g.nearDistance.value=w.shadow.camera.near,g.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Wg(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,A){let T=A.program;n.uniformBlockBinding(M,T)}function c(M,A){let T=s[M.id];T===void 0&&(g(M),T=u(M),s[M.id]=T,M.addEventListener("dispose",w));let P=A.program;n.updateUBOMapping(M,P);let v=e.render.frame;r[M.id]!==v&&(h(M),r[M.id]=v)}function u(M){let A=f();M.__bindingPointIndex=A;let T=i.createBuffer(),P=M.__size,v=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,P,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,T),T}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return De("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){let A=s[M.id],T=M.uniforms,P=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let v=0,E=T.length;v<E;v++){let U=T[v];if(Array.isArray(U))for(let I=0,O=U.length;I<O;I++)p(U[I],v,I,P);else p(U,v,0,P)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(M,A,T,P){if(S(M,A,T,P)===!0){let v=M.__offset,E=M.value;if(Array.isArray(E)){let U=0;for(let I=0;I<E.length;I++){let O=E[I],K=m(O);_(O,M.__data,U),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(U+=K.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(E,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,M.__data)}}function _(M,A,T){typeof M=="number"||typeof M=="boolean"?A[0]=M:M.isMatrix3?(A[0]=M.elements[0],A[1]=M.elements[1],A[2]=M.elements[2],A[3]=0,A[4]=M.elements[3],A[5]=M.elements[4],A[6]=M.elements[5],A[7]=0,A[8]=M.elements[6],A[9]=M.elements[7],A[10]=M.elements[8],A[11]=0):ArrayBuffer.isView(M)?A.set(new M.constructor(M.buffer,M.byteOffset,A.length)):M.toArray(A,T)}function S(M,A,T,P){let v=M.value,E=A+"_"+T;if(P[E]===void 0)return typeof v=="number"||typeof v=="boolean"?P[E]=v:ArrayBuffer.isView(v)?P[E]=v.slice():P[E]=v.clone(),!0;{let U=P[E];if(typeof v=="number"||typeof v=="boolean"){if(U!==v)return P[E]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(U.equals(v)===!1)return U.copy(v),!0}}return!1}function g(M){let A=M.uniforms,T=0,P=16;for(let E=0,U=A.length;E<U;E++){let I=Array.isArray(A[E])?A[E]:[A[E]];for(let O=0,K=I.length;O<K;O++){let $=I[O],k=Array.isArray($.value)?$.value:[$.value];for(let Z=0,X=k.length;Z<X;Z++){let j=k[Z],te=m(j),he=T%P,ge=he%te.boundary,ye=he+ge;T+=ge,ye!==0&&P-ye<te.storage&&(T+=P-ye),$.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=T,T+=te.storage}}}let v=T%P;return v>0&&(T+=P-v),M.__size=T,M.__cache={},this}function m(M){let A={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(A.boundary=4,A.storage=4):M.isVector2?(A.boundary=8,A.storage=8):M.isVector3||M.isColor?(A.boundary=16,A.storage=12):M.isVector4?(A.boundary=16,A.storage=16):M.isMatrix3?(A.boundary=48,A.storage=48):M.isMatrix4?(A.boundary=64,A.storage=64):M.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(A.boundary=16,A.storage=M.byteLength):Ie("WebGLRenderer: Unsupported uniform value type.",M),A}function w(M){let A=M.target;A.removeEventListener("dispose",w);let T=a.indexOf(A.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function R(){for(let M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:R}}var Xg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Tn=null;function qg(){return Tn===null&&(Tn=new $r(Xg,16,16,oi,Tt),Tn.name="DFG_LUT",Tn.minFilter=Pt,Tn.magFilter=Pt,Tn.wrapS=yn,Tn.wrapT=yn,Tn.generateMipmaps=!1,Tn.needsUpdate=!0),Tn}var oo=class{constructor(e={}){let{canvas:t=rh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:p=Qt}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;let S=p,g=new Set([Ta,ba,Sa]),m=new Set([Qt,dn,is,ss,ya,Ma]),w=new Uint32Array(4),R=new Int32Array(4),M=new F,A=null,T=null,P=[],v=[],E=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let U=this,I=!1,O=null,K=null,$=null,k=null;this._outputColorSpace=Rt;let Z=0,X=0,j=null,te=-1,he=null,ge=new ut,ye=new ut,qe=null,ct=new Ue(0),Oe=0,Q=t.width,ue=t.height,re=1,Pe=null,ce=null,Ce=new ut(0,0,Q,ue),Ye=new ut(0,0,Q,ue),ke=!1,je=new Ps,Ze=!1,Fe=!1,rt=new ht,Ge=new F,vt=new ut,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Qe=!1;function dt(){return j===null?re:1}let L=n;function Lt(y,N){return t.getContext(y,N)}try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"185"}`),t.addEventListener("webglcontextlost",Xe,!1),t.addEventListener("webglcontextrestored",Be,!1),t.addEventListener("webglcontextcreationerror",mt,!1),L===null){let N="webgl2";if(L=Lt(N,y),L===null)throw Lt(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(y){throw De("WebGLRenderer: "+y.message),y}let Je,x,d,C,b,B,J,ee,G,q,ie,fe,oe,ae,Se,be,Ee,D,se,H,ne,le,Y;function _e(){Je=new jp(L),Je.init(),ne=new zg(L,Je),x=new Xp(L,Je,e,ne),d=new Bg(L,Je),x.reversedDepthBuffer&&h&&d.buffers.depth.setReversed(!0),K=L.createFramebuffer(),$=L.createFramebuffer(),k=L.createFramebuffer(),C=new nm(L),b=new bg,B=new Og(L,Je,d,b,x,ne,C),J=new Qp(U),ee=new rd(L),le=new Hp(L,ee),G=new em(L,ee,C,le),q=new sm(L,G,ee,le,C),D=new im(L,x,B),Se=new qp(b),ie=new Sg(U,J,Je,x,le,Se),fe=new Hg(U,b),oe=new Eg,ae=new Ig(Je),Ee=new Gp(U,J,d,q,_,l),be=new Fg(U,q,x),Y=new Wg(L,C,x,d),se=new Wp(L,Je,C),H=new tm(L,Je,C),C.programs=ie.programs,U.capabilities=x,U.extensions=Je,U.properties=b,U.renderLists=oe,U.shadowMap=be,U.state=d,U.info=C}_e(),S!==Qt&&(E=new am(S,t.width,t.height,o,s,r));let de=new Vl(U,L);this.xr=de,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let y=Je.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=Je.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(y){y!==void 0&&(re=y,this.setSize(Q,ue,!1))},this.getSize=function(y){return y.set(Q,ue)},this.setSize=function(y,N,W=!0){if(de.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}Q=y,ue=N,t.width=Math.floor(y*re),t.height=Math.floor(N*re),W===!0&&(t.style.width=y+"px",t.style.height=N+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,y,N)},this.getDrawingBufferSize=function(y){return y.set(Q*re,ue*re).floor()},this.setDrawingBufferSize=function(y,N,W){Q=y,ue=N,re=W,t.width=Math.floor(y*W),t.height=Math.floor(N*W),this.setViewport(0,0,y,N)},this.setEffects=function(y){if(S===Qt){De("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let N=0;N<y.length;N++)if(y[N].isOutputPass===!0){Ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(ge)},this.getViewport=function(y){return y.copy(Ce)},this.setViewport=function(y,N,W,z){y.isVector4?Ce.set(y.x,y.y,y.z,y.w):Ce.set(y,N,W,z),d.viewport(ge.copy(Ce).multiplyScalar(re).round())},this.getScissor=function(y){return y.copy(Ye)},this.setScissor=function(y,N,W,z){y.isVector4?Ye.set(y.x,y.y,y.z,y.w):Ye.set(y,N,W,z),d.scissor(ye.copy(Ye).multiplyScalar(re).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(y){d.setScissorTest(ke=y)},this.setOpaqueSort=function(y){Pe=y},this.setTransparentSort=function(y){ce=y},this.getClearColor=function(y){return y.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(y=!0,N=!0,W=!0){let z=0;if(y){let V=!1;if(j!==null){let xe=j.texture.format;V=g.has(xe)}if(V){let xe=j.texture.type,Me=m.has(xe),me=Ee.getClearColor(),Te=Ee.getClearAlpha(),Ae=me.r,Ne=me.g,Ve=me.b;Me?(w[0]=Ae,w[1]=Ne,w[2]=Ve,w[3]=Te,L.clearBufferuiv(L.COLOR,0,w)):(R[0]=Ae,R[1]=Ne,R[2]=Ve,R[3]=Te,L.clearBufferiv(L.COLOR,0,R))}else z|=L.COLOR_BUFFER_BIT}N&&(z|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(z|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&L.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),O=y},this.dispose=function(){t.removeEventListener("webglcontextlost",Xe,!1),t.removeEventListener("webglcontextrestored",Be,!1),t.removeEventListener("webglcontextcreationerror",mt,!1),Ee.dispose(),oe.dispose(),ae.dispose(),b.dispose(),J.dispose(),q.dispose(),le.dispose(),Y.dispose(),ie.dispose(),de.dispose(),de.removeEventListener("sessionstart",Zl),de.removeEventListener("sessionend",Kl),ci.stop()};function Xe(y){y.preventDefault(),bs("WebGLRenderer: Context Lost."),I=!0}function Be(){bs("WebGLRenderer: Context Restored."),I=!1;let y=C.autoReset,N=be.enabled,W=be.autoUpdate,z=be.needsUpdate,V=be.type;_e(),C.autoReset=y,be.enabled=N,be.autoUpdate=W,be.needsUpdate=z,be.type=V}function mt(y){De("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Mt(y){let N=y.target;N.removeEventListener("dispose",Mt),nu(N)}function nu(y){iu(y),b.remove(y)}function iu(y){let N=b.get(y).programs;N!==void 0&&(N.forEach(function(W){ie.releaseProgram(W)}),y.isShaderMaterial&&ie.releaseShaderCache(y))}this.renderBufferDirect=function(y,N,W,z,V,xe){N===null&&(N=yt);let Me=V.isMesh&&V.matrixWorld.determinantAffine()<0,me=au(y,N,W,z,V);d.setMaterial(z,Me);let Te=W.index,Ae=1;if(z.wireframe===!0){if(Te=G.getWireframeAttribute(W),Te===void 0)return;Ae=2}let Ne=W.drawRange,Ve=W.attributes.position,we=Ne.start*Ae,tt=(Ne.start+Ne.count)*Ae;xe!==null&&(we=Math.max(we,xe.start*Ae),tt=Math.min(tt,(xe.start+xe.count)*Ae)),Te!==null?(we=Math.max(we,0),tt=Math.min(tt,Te.count)):Ve!=null&&(we=Math.max(we,0),tt=Math.min(tt,Ve.count));let gt=tt-we;if(gt<0||gt===1/0)return;le.setup(V,z,me,W,Te);let ft,nt=se;if(Te!==null&&(ft=ee.get(Te),nt=H,nt.setIndex(ft)),V.isMesh)z.wireframe===!0?(d.setLineWidth(z.wireframeLinewidth*dt()),nt.setMode(L.LINES)):nt.setMode(L.TRIANGLES);else if(V.isLine){let Ut=z.linewidth;Ut===void 0&&(Ut=1),d.setLineWidth(Ut*dt()),V.isLineSegments?nt.setMode(L.LINES):V.isLineLoop?nt.setMode(L.LINE_LOOP):nt.setMode(L.LINE_STRIP)}else V.isPoints?nt.setMode(L.POINTS):V.isSprite&&nt.setMode(L.TRIANGLES);if(V.isBatchedMesh)if(Je.get("WEBGL_multi_draw"))nt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let Ut=V._multiDrawStarts,ve=V._multiDrawCounts,Zt=V._multiDrawCount,Ke=Te?ee.get(Te).bytesPerElement:1,jt=b.get(z).currentProgram.getUniforms();for(let _n=0;_n<Zt;_n++)jt.setValue(L,"_gl_DrawID",_n),nt.render(Ut[_n]/Ke,ve[_n])}else if(V.isInstancedMesh)nt.renderInstances(we,gt,V.count);else if(W.isInstancedBufferGeometry){let Ut=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,ve=Math.min(W.instanceCount,Ut);nt.renderInstances(we,gt,ve)}else nt.render(we,gt)};function Yl(y,N,W){y.transparent===!0&&y.side===tn&&y.forceSinglePass===!1?(y.side=Gt,y.needsUpdate=!0,or(y,N,W),y.side=Nn,y.needsUpdate=!0,or(y,N,W),y.side=tn):or(y,N,W)}this.compile=function(y,N,W=null){W===null&&(W=y),T=ae.get(W),T.init(N),v.push(T),W.traverseVisible(function(V){V.isLight&&V.layers.test(N.layers)&&(T.pushLight(V),V.castShadow&&T.pushShadow(V))}),y!==W&&y.traverseVisible(function(V){V.isLight&&V.layers.test(N.layers)&&(T.pushLight(V),V.castShadow&&T.pushShadow(V))}),T.setupLights();let z=new Set;return y.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let xe=V.material;if(xe)if(Array.isArray(xe))for(let Me=0;Me<xe.length;Me++){let me=xe[Me];Yl(me,W,V),z.add(me)}else Yl(xe,W,V),z.add(xe)}),T=v.pop(),z},this.compileAsync=function(y,N,W=null){let z=this.compile(y,N,W);return new Promise(V=>{function xe(){if(z.forEach(function(Me){b.get(Me).currentProgram.isReady()&&z.delete(Me)}),z.size===0){V(y);return}setTimeout(xe,10)}Je.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let vo=null;function su(y){vo&&vo(y)}function Zl(){ci.stop()}function Kl(){ci.start()}let ci=new Uh;ci.setAnimationLoop(su),typeof self<"u"&&ci.setContext(self),this.setAnimationLoop=function(y){vo=y,de.setAnimationLoop(y),y===null?ci.stop():ci.start()},de.addEventListener("sessionstart",Zl),de.addEventListener("sessionend",Kl),this.render=function(y,N){if(N!==void 0&&N.isCamera!==!0){De("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;O!==null&&O.renderStart(y,N);let W=de.enabled===!0&&de.isPresenting===!0,z=E!==null&&(j===null||W)&&E.begin(U,j);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(de.cameraAutoUpdate===!0&&de.updateCamera(N),N=de.getCamera()),y.isScene===!0&&y.onBeforeRender(U,y,N,j),T=ae.get(y,v.length),T.init(N),T.state.textureUnits=B.getTextureUnits(),v.push(T),rt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),je.setFromProjectionMatrix(rt,hn,N.reversedDepth),Fe=this.localClippingEnabled,Ze=Se.init(this.clippingPlanes,Fe),A=oe.get(y,P.length),A.init(),P.push(A),de.enabled===!0&&de.isPresenting===!0){let Me=U.xr.getDepthSensingMesh();Me!==null&&yo(Me,N,-1/0,U.sortObjects)}yo(y,N,0,U.sortObjects),A.finish(),U.sortObjects===!0&&A.sort(Pe,ce,N.reversedDepth),Qe=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,Qe&&Ee.addToRenderList(A,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ze===!0&&Se.beginShadows();let V=T.state.shadowsArray;if(be.render(V,y,N),Ze===!0&&Se.endShadows(),(z&&E.hasRenderPass())===!1){let Me=A.opaque,me=A.transmissive;if(T.setupLights(),N.isArrayCamera){let Te=N.cameras;if(me.length>0)for(let Ae=0,Ne=Te.length;Ae<Ne;Ae++){let Ve=Te[Ae];$l(Me,me,y,Ve)}Qe&&Ee.render(y);for(let Ae=0,Ne=Te.length;Ae<Ne;Ae++){let Ve=Te[Ae];Jl(A,y,Ve,Ve.viewport)}}else me.length>0&&$l(Me,me,y,N),Qe&&Ee.render(y),Jl(A,y,N)}j!==null&&X===0&&(B.updateMultisampleRenderTarget(j),B.updateRenderTargetMipmap(j)),z&&E.end(U),y.isScene===!0&&y.onAfterRender(U,y,N),le.resetDefaultState(),te=-1,he=null,v.pop(),v.length>0?(T=v[v.length-1],B.setTextureUnits(T.state.textureUnits),Ze===!0&&Se.setGlobalState(U.clippingPlanes,T.state.camera)):T=null,P.pop(),P.length>0?A=P[P.length-1]:A=null,O!==null&&O.renderEnd()};function yo(y,N,W,z){if(y.visible===!1)return;if(y.layers.test(N.layers)){if(y.isGroup)W=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(N);else if(y.isLightProbeGrid)T.pushLightProbeGrid(y);else if(y.isLight)T.pushLight(y),y.castShadow&&T.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||je.intersectsSprite(y)){z&&vt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(rt);let Me=q.update(y),me=y.material;me.visible&&A.push(y,Me,me,W,vt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||je.intersectsObject(y))){let Me=q.update(y),me=y.material;if(z&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),vt.copy(y.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),vt.copy(Me.boundingSphere.center)),vt.applyMatrix4(y.matrixWorld).applyMatrix4(rt)),Array.isArray(me)){let Te=Me.groups;for(let Ae=0,Ne=Te.length;Ae<Ne;Ae++){let Ve=Te[Ae],we=me[Ve.materialIndex];we&&we.visible&&A.push(y,Me,we,W,vt.z,Ve)}}else me.visible&&A.push(y,Me,me,W,vt.z,null)}}let xe=y.children;for(let Me=0,me=xe.length;Me<me;Me++)yo(xe[Me],N,W,z)}function Jl(y,N,W,z){let{opaque:V,transmissive:xe,transparent:Me}=y;T.setupLightsView(W),Ze===!0&&Se.setGlobalState(U.clippingPlanes,W),z&&d.viewport(ge.copy(z)),V.length>0&&ar(V,N,W),xe.length>0&&ar(xe,N,W),Me.length>0&&ar(Me,N,W),d.buffers.depth.setTest(!0),d.buffers.depth.setMask(!0),d.buffers.color.setMask(!0),d.setPolygonOffset(!1)}function $l(y,N,W,z){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[z.id]===void 0){let we=Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[z.id]=new pt(1,1,{generateMipmaps:!0,type:we?Tt:Qt,minFilter:ri,samples:Math.max(4,x.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:He.workingColorSpace})}let xe=T.state.transmissionRenderTarget[z.id],Me=z.viewport||ge;xe.setSize(Me.z*U.transmissionResolutionScale,Me.w*U.transmissionResolutionScale);let me=U.getRenderTarget(),Te=U.getActiveCubeFace(),Ae=U.getActiveMipmapLevel();U.setRenderTarget(xe),U.getClearColor(ct),Oe=U.getClearAlpha(),Oe<1&&U.setClearColor(16777215,.5),U.clear(),Qe&&Ee.render(W);let Ne=U.toneMapping;U.toneMapping=un;let Ve=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),T.setupLightsView(z),Ze===!0&&Se.setGlobalState(U.clippingPlanes,z),ar(y,W,z),B.updateMultisampleRenderTarget(xe),B.updateRenderTargetMipmap(xe),Je.has("WEBGL_multisampled_render_to_texture")===!1){let we=!1;for(let tt=0,gt=N.length;tt<gt;tt++){let ft=N[tt],{object:nt,geometry:Ut,material:ve,group:Zt}=ft;if(ve.side===tn&&nt.layers.test(z.layers)){let Ke=ve.side;ve.side=Gt,ve.needsUpdate=!0,Ql(nt,W,z,Ut,ve,Zt),ve.side=Ke,ve.needsUpdate=!0,we=!0}}we===!0&&(B.updateMultisampleRenderTarget(xe),B.updateRenderTargetMipmap(xe))}U.setRenderTarget(me,Te,Ae),U.setClearColor(ct,Oe),Ve!==void 0&&(z.viewport=Ve),U.toneMapping=Ne}function ar(y,N,W){let z=N.isScene===!0?N.overrideMaterial:null;for(let V=0,xe=y.length;V<xe;V++){let Me=y[V],{object:me,geometry:Te,group:Ae}=Me,Ne=Me.material;Ne.allowOverride===!0&&z!==null&&(Ne=z),me.layers.test(W.layers)&&Ql(me,N,W,Te,Ne,Ae)}}function Ql(y,N,W,z,V,xe){y.onBeforeRender(U,N,W,z,V,xe),y.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),V.onBeforeRender(U,N,W,z,y,xe),V.transparent===!0&&V.side===tn&&V.forceSinglePass===!1?(V.side=Gt,V.needsUpdate=!0,U.renderBufferDirect(W,N,z,V,y,xe),V.side=Nn,V.needsUpdate=!0,U.renderBufferDirect(W,N,z,V,y,xe),V.side=tn):U.renderBufferDirect(W,N,z,V,y,xe),y.onAfterRender(U,N,W,z,V,xe)}function or(y,N,W){N.isScene!==!0&&(N=yt);let z=b.get(y),V=T.state.lights,xe=T.state.shadowsArray,Me=V.state.version,me=ie.getParameters(y,V.state,xe,N,W,T.state.lightProbeGridArray),Te=ie.getProgramCacheKey(me),Ae=z.programs;z.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?N.environment:null,z.fog=N.fog;let Ne=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;z.envMap=J.get(y.envMap||z.environment,Ne),z.envMapRotation=z.environment!==null&&y.envMap===null?N.environmentRotation:y.envMapRotation,Ae===void 0&&(y.addEventListener("dispose",Mt),Ae=new Map,z.programs=Ae);let Ve=Ae.get(Te);if(Ve!==void 0){if(z.currentProgram===Ve&&z.lightsStateVersion===Me)return ec(y,me),Ve}else me.uniforms=ie.getUniforms(y),O!==null&&y.isNodeMaterial&&O.build(y,W,me),y.onBeforeCompile(me,U),Ve=ie.acquireProgram(me,Te),Ae.set(Te,Ve),z.uniforms=me.uniforms;let we=z.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(we.clippingPlanes=Se.uniform),ec(y,me),z.needsLights=lu(y),z.lightsStateVersion=Me,z.needsLights&&(we.ambientLightColor.value=V.state.ambient,we.lightProbe.value=V.state.probe,we.directionalLights.value=V.state.directional,we.directionalLightShadows.value=V.state.directionalShadow,we.spotLights.value=V.state.spot,we.spotLightShadows.value=V.state.spotShadow,we.rectAreaLights.value=V.state.rectArea,we.ltc_1.value=V.state.rectAreaLTC1,we.ltc_2.value=V.state.rectAreaLTC2,we.pointLights.value=V.state.point,we.pointLightShadows.value=V.state.pointShadow,we.hemisphereLights.value=V.state.hemi,we.directionalShadowMatrix.value=V.state.directionalShadowMatrix,we.spotLightMatrix.value=V.state.spotLightMatrix,we.spotLightMap.value=V.state.spotLightMap,we.pointShadowMatrix.value=V.state.pointShadowMatrix),z.lightProbeGrid=T.state.lightProbeGridArray.length>0,z.currentProgram=Ve,z.uniformsList=null,Ve}function jl(y){if(y.uniformsList===null){let N=y.currentProgram.getUniforms();y.uniformsList=as.seqWithValue(N.seq,y.uniforms)}return y.uniformsList}function ec(y,N){let W=b.get(y);W.outputColorSpace=N.outputColorSpace,W.batching=N.batching,W.batchingColor=N.batchingColor,W.instancing=N.instancing,W.instancingColor=N.instancingColor,W.instancingMorph=N.instancingMorph,W.skinning=N.skinning,W.morphTargets=N.morphTargets,W.morphNormals=N.morphNormals,W.morphColors=N.morphColors,W.morphTargetsCount=N.morphTargetsCount,W.numClippingPlanes=N.numClippingPlanes,W.numIntersection=N.numClipIntersection,W.vertexAlphas=N.vertexAlphas,W.vertexTangents=N.vertexTangents,W.toneMapping=N.toneMapping}function ru(y,N){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;M.setFromMatrixPosition(N.matrixWorld);for(let W=0,z=y.length;W<z;W++){let V=y[W];if(V.texture!==null&&V.boundingBox.containsPoint(M))return V}return null}function au(y,N,W,z,V){N.isScene!==!0&&(N=yt),B.resetTextureUnits();let xe=N.fog,Me=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?N.environment:null,me=j===null?U.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:He.workingColorSpace,Te=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Ae=J.get(z.envMap||Me,Te),Ne=z.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ve=!!W.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),we=!!W.morphAttributes.position,tt=!!W.morphAttributes.normal,gt=!!W.morphAttributes.color,ft=un;z.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(ft=U.toneMapping);let nt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ut=nt!==void 0?nt.length:0,ve=b.get(z),Zt=T.state.lights;if(Ze===!0&&(Fe===!0||y!==he)){let at=y===he&&z.id===te;Se.setState(z,y,at)}let Ke=!1;z.version===ve.__version?(ve.needsLights&&ve.lightsStateVersion!==Zt.state.version||ve.outputColorSpace!==me||V.isBatchedMesh&&ve.batching===!1||!V.isBatchedMesh&&ve.batching===!0||V.isBatchedMesh&&ve.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&ve.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&ve.instancing===!1||!V.isInstancedMesh&&ve.instancing===!0||V.isSkinnedMesh&&ve.skinning===!1||!V.isSkinnedMesh&&ve.skinning===!0||V.isInstancedMesh&&ve.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&ve.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&ve.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&ve.instancingMorph===!1&&V.morphTexture!==null||ve.envMap!==Ae||z.fog===!0&&ve.fog!==xe||ve.numClippingPlanes!==void 0&&(ve.numClippingPlanes!==Se.numPlanes||ve.numIntersection!==Se.numIntersection)||ve.vertexAlphas!==Ne||ve.vertexTangents!==Ve||ve.morphTargets!==we||ve.morphNormals!==tt||ve.morphColors!==gt||ve.toneMapping!==ft||ve.morphTargetsCount!==Ut||!!ve.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Ke=!0):(Ke=!0,ve.__version=z.version);let jt=ve.currentProgram;Ke===!0&&(jt=or(z,N,V),O&&z.isNodeMaterial&&O.onUpdateProgram(z,jt,ve));let _n=!1,kn=!1,Ai=!1,it=jt.getUniforms(),_t=ve.uniforms;if(d.useProgram(jt.program)&&(_n=!0,kn=!0,Ai=!0),z.id!==te&&(te=z.id,kn=!0),ve.needsLights){let at=ru(T.state.lightProbeGridArray,V);ve.lightProbeGrid!==at&&(ve.lightProbeGrid=at,kn=!0)}if(_n||he!==y){d.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),it.setValue(L,"projectionMatrix",y.projectionMatrix),it.setValue(L,"viewMatrix",y.matrixWorldInverse);let Hn=it.map.cameraPosition;Hn!==void 0&&Hn.setValue(L,Ge.setFromMatrixPosition(y.matrixWorld)),x.logarithmicDepthBuffer&&it.setValue(L,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&it.setValue(L,"isOrthographic",y.isOrthographicCamera===!0),he!==y&&(he=y,kn=!0,Ai=!0)}if(ve.needsLights&&(Zt.state.directionalShadowMap.length>0&&it.setValue(L,"directionalShadowMap",Zt.state.directionalShadowMap,B),Zt.state.spotShadowMap.length>0&&it.setValue(L,"spotShadowMap",Zt.state.spotShadowMap,B),Zt.state.pointShadowMap.length>0&&it.setValue(L,"pointShadowMap",Zt.state.pointShadowMap,B)),V.isSkinnedMesh){it.setOptional(L,V,"bindMatrix"),it.setOptional(L,V,"bindMatrixInverse");let at=V.skeleton;at&&(at.boneTexture===null&&at.computeBoneTexture(),it.setValue(L,"boneTexture",at.boneTexture,B))}V.isBatchedMesh&&(it.setOptional(L,V,"batchingTexture"),it.setValue(L,"batchingTexture",V._matricesTexture,B),it.setOptional(L,V,"batchingIdTexture"),it.setValue(L,"batchingIdTexture",V._indirectTexture,B),it.setOptional(L,V,"batchingColorTexture"),V._colorsTexture!==null&&it.setValue(L,"batchingColorTexture",V._colorsTexture,B));let Gn=W.morphAttributes;if((Gn.position!==void 0||Gn.normal!==void 0||Gn.color!==void 0)&&D.update(V,W,jt),(kn||ve.receiveShadow!==V.receiveShadow)&&(ve.receiveShadow=V.receiveShadow,it.setValue(L,"receiveShadow",V.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&N.environment!==null&&(_t.envMapIntensity.value=N.environmentIntensity),_t.dfgLUT!==void 0&&(_t.dfgLUT.value=qg()),kn){if(it.setValue(L,"toneMappingExposure",U.toneMappingExposure),ve.needsLights&&ou(_t,Ai),xe&&z.fog===!0&&fe.refreshFogUniforms(_t,xe),fe.refreshMaterialUniforms(_t,z,re,ue,T.state.transmissionRenderTarget[y.id]),ve.needsLights&&ve.lightProbeGrid){let at=ve.lightProbeGrid;_t.probesSH.value=at.texture,_t.probesMin.value.copy(at.boundingBox.min),_t.probesMax.value.copy(at.boundingBox.max),_t.probesResolution.value.copy(at.resolution)}as.upload(L,jl(ve),_t,B)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(as.upload(L,jl(ve),_t,B),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&it.setValue(L,"center",V.center),it.setValue(L,"modelViewMatrix",V.modelViewMatrix),it.setValue(L,"normalMatrix",V.normalMatrix),it.setValue(L,"modelMatrix",V.matrixWorld),z.uniformsGroups!==void 0){let at=z.uniformsGroups;for(let Hn=0,wi=at.length;Hn<wi;Hn++){let tc=at[Hn];Y.update(tc,jt),Y.bind(tc,jt)}}return jt}function ou(y,N){y.ambientLightColor.needsUpdate=N,y.lightProbe.needsUpdate=N,y.directionalLights.needsUpdate=N,y.directionalLightShadows.needsUpdate=N,y.pointLights.needsUpdate=N,y.pointLightShadows.needsUpdate=N,y.spotLights.needsUpdate=N,y.spotLightShadows.needsUpdate=N,y.rectAreaLights.needsUpdate=N,y.hemisphereLights.needsUpdate=N}function lu(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(y,N,W){let z=b.get(y);z.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),b.get(y.texture).__webglTexture=N,b.get(y.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:W,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,N){let W=b.get(y);W.__webglFramebuffer=N,W.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(y,N=0,W=0){j=y,Z=N,X=W;let z=null,V=!1,xe=!1;if(y){let me=b.get(y);if(me.__useDefaultFramebuffer!==void 0){d.bindFramebuffer(L.FRAMEBUFFER,me.__webglFramebuffer),ge.copy(y.viewport),ye.copy(y.scissor),qe=y.scissorTest,d.viewport(ge),d.scissor(ye),d.setScissorTest(qe),te=-1;return}else if(me.__webglFramebuffer===void 0)B.setupRenderTarget(y);else if(me.__hasExternalTextures)B.rebindTextures(y,b.get(y.texture).__webglTexture,b.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Ne=y.depthTexture;if(me.__boundDepthTexture!==Ne){if(Ne!==null&&b.has(Ne)&&(y.width!==Ne.image.width||y.height!==Ne.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(y)}}let Te=y.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(xe=!0);let Ae=b.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ae[N])?z=Ae[N][W]:z=Ae[N],V=!0):y.samples>0&&B.useMultisampledRTT(y)===!1?z=b.get(y).__webglMultisampledFramebuffer:Array.isArray(Ae)?z=Ae[W]:z=Ae,ge.copy(y.viewport),ye.copy(y.scissor),qe=y.scissorTest}else ge.copy(Ce).multiplyScalar(re).floor(),ye.copy(Ye).multiplyScalar(re).floor(),qe=ke;if(W!==0&&(z=K),d.bindFramebuffer(L.FRAMEBUFFER,z)&&d.drawBuffers(y,z),d.viewport(ge),d.scissor(ye),d.setScissorTest(qe),V){let me=b.get(y.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,me.__webglTexture,W)}else if(xe){let me=N;for(let Te=0;Te<y.textures.length;Te++){let Ae=b.get(y.textures[Te]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Te,Ae.__webglTexture,W,me)}}else if(y!==null&&W!==0){let me=b.get(y.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,me.__webglTexture,W)}te=-1},this.readRenderTargetPixels=function(y,N,W,z,V,xe,Me,me=0){if(!(y&&y.isWebGLRenderTarget)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=b.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Me!==void 0&&(Te=Te[Me]),Te){d.bindFramebuffer(L.FRAMEBUFFER,Te);try{let Ae=y.textures[me],Ne=Ae.format,Ve=Ae.type;if(y.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+me),!x.textureFormatReadable(Ne)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!x.textureTypeReadable(Ve)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=y.width-z&&W>=0&&W<=y.height-V&&L.readPixels(N,W,z,V,ne.convert(Ne),ne.convert(Ve),xe)}finally{let Ae=j!==null?b.get(j).__webglFramebuffer:null;d.bindFramebuffer(L.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(y,N,W,z,V,xe,Me,me=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=b.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Me!==void 0&&(Te=Te[Me]),Te)if(N>=0&&N<=y.width-z&&W>=0&&W<=y.height-V){d.bindFramebuffer(L.FRAMEBUFFER,Te);let Ae=y.textures[me],Ne=Ae.format,Ve=Ae.type;if(y.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+me),!x.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!x.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let we=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,we),L.bufferData(L.PIXEL_PACK_BUFFER,xe.byteLength,L.STREAM_READ),L.readPixels(N,W,z,V,ne.convert(Ne),ne.convert(Ve),0);let tt=j!==null?b.get(j).__webglFramebuffer:null;d.bindFramebuffer(L.FRAMEBUFFER,tt);let gt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await oh(L,gt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,we),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,xe),L.deleteBuffer(we),L.deleteSync(gt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,N=null,W=0){let z=Math.pow(2,-W),V=Math.floor(y.image.width*z),xe=Math.floor(y.image.height*z),Me=N!==null?N.x:0,me=N!==null?N.y:0;B.setTexture2D(y,0),L.copyTexSubImage2D(L.TEXTURE_2D,W,0,0,Me,me,V,xe),d.unbindTexture()},this.copyTextureToTexture=function(y,N,W=null,z=null,V=0,xe=0){let Me,me,Te,Ae,Ne,Ve,we,tt,gt,ft=y.isCompressedTexture?y.mipmaps[xe]:y.image;if(W!==null)Me=W.max.x-W.min.x,me=W.max.y-W.min.y,Te=W.isBox3?W.max.z-W.min.z:1,Ae=W.min.x,Ne=W.min.y,Ve=W.isBox3?W.min.z:0;else{let _t=Math.pow(2,-V);Me=Math.floor(ft.width*_t),me=Math.floor(ft.height*_t),y.isDataArrayTexture?Te=ft.depth:y.isData3DTexture?Te=Math.floor(ft.depth*_t):Te=1,Ae=0,Ne=0,Ve=0}z!==null?(we=z.x,tt=z.y,gt=z.z):(we=0,tt=0,gt=0);let nt=ne.convert(N.format),Ut=ne.convert(N.type),ve;N.isData3DTexture?(B.setTexture3D(N,0),ve=L.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(B.setTexture2DArray(N,0),ve=L.TEXTURE_2D_ARRAY):(B.setTexture2D(N,0),ve=L.TEXTURE_2D),d.activeTexture(L.TEXTURE0),d.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),d.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),d.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);let Zt=d.getParameter(L.UNPACK_ROW_LENGTH),Ke=d.getParameter(L.UNPACK_IMAGE_HEIGHT),jt=d.getParameter(L.UNPACK_SKIP_PIXELS),_n=d.getParameter(L.UNPACK_SKIP_ROWS),kn=d.getParameter(L.UNPACK_SKIP_IMAGES);d.pixelStorei(L.UNPACK_ROW_LENGTH,ft.width),d.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ft.height),d.pixelStorei(L.UNPACK_SKIP_PIXELS,Ae),d.pixelStorei(L.UNPACK_SKIP_ROWS,Ne),d.pixelStorei(L.UNPACK_SKIP_IMAGES,Ve);let Ai=y.isDataArrayTexture||y.isData3DTexture,it=N.isDataArrayTexture||N.isData3DTexture;if(y.isDepthTexture){let _t=b.get(y),Gn=b.get(N),at=b.get(_t.__renderTarget),Hn=b.get(Gn.__renderTarget);d.bindFramebuffer(L.READ_FRAMEBUFFER,at.__webglFramebuffer),d.bindFramebuffer(L.DRAW_FRAMEBUFFER,Hn.__webglFramebuffer);for(let wi=0;wi<Te;wi++)Ai&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,b.get(y).__webglTexture,V,Ve+wi),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,b.get(N).__webglTexture,xe,gt+wi)),L.blitFramebuffer(Ae,Ne,Me,me,we,tt,Me,me,L.DEPTH_BUFFER_BIT,L.NEAREST);d.bindFramebuffer(L.READ_FRAMEBUFFER,null),d.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(V!==0||y.isRenderTargetTexture||b.has(y)){let _t=b.get(y),Gn=b.get(N);d.bindFramebuffer(L.READ_FRAMEBUFFER,$),d.bindFramebuffer(L.DRAW_FRAMEBUFFER,k);for(let at=0;at<Te;at++)Ai?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,_t.__webglTexture,V,Ve+at):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,_t.__webglTexture,V),it?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Gn.__webglTexture,xe,gt+at):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Gn.__webglTexture,xe),V!==0?L.blitFramebuffer(Ae,Ne,Me,me,we,tt,Me,me,L.COLOR_BUFFER_BIT,L.NEAREST):it?L.copyTexSubImage3D(ve,xe,we,tt,gt+at,Ae,Ne,Me,me):L.copyTexSubImage2D(ve,xe,we,tt,Ae,Ne,Me,me);d.bindFramebuffer(L.READ_FRAMEBUFFER,null),d.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else it?y.isDataTexture||y.isData3DTexture?L.texSubImage3D(ve,xe,we,tt,gt,Me,me,Te,nt,Ut,ft.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(ve,xe,we,tt,gt,Me,me,Te,nt,ft.data):L.texSubImage3D(ve,xe,we,tt,gt,Me,me,Te,nt,Ut,ft):y.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,xe,we,tt,Me,me,nt,Ut,ft.data):y.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,xe,we,tt,ft.width,ft.height,nt,ft.data):L.texSubImage2D(L.TEXTURE_2D,xe,we,tt,Me,me,nt,Ut,ft);d.pixelStorei(L.UNPACK_ROW_LENGTH,Zt),d.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ke),d.pixelStorei(L.UNPACK_SKIP_PIXELS,jt),d.pixelStorei(L.UNPACK_SKIP_ROWS,_n),d.pixelStorei(L.UNPACK_SKIP_IMAGES,kn),xe===0&&N.generateMipmaps&&L.generateMipmap(ve),d.unbindTexture()},this.initRenderTarget=function(y){b.get(y).__webglFramebuffer===void 0&&B.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?B.setTextureCube(y,0):y.isData3DTexture?B.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?B.setTexture2DArray(y,0):B.setTexture2D(y,0),d.unbindTexture()},this.resetState=function(){Z=0,X=0,j=null,d.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=He._getDrawingBufferColorSpace(e),t.unpackColorSpace=He._getUnpackColorSpace()}};var An={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Ht=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Zg=new Mi(-1,1,1,-1,0,1),kl=class extends It{constructor(){super(),this.setAttribute("position",new Vt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Vt([0,2,0,0,2,0],2))}},Kg=new kl,pn=class{constructor(e){this._mesh=new Dt(Kg,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Zg)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var ho=class extends Ht{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof st?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=sn.clone(e.uniforms),this.material=new st({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new pn(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var tr=class extends Ht{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},uo=class extends Ht{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var fo=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Re);this._width=n.width,this._height=n.height,t=new pt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Tt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ho(An),this.copyPass.material.blending=Yt,this.timer=new Ns}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}tr!==void 0&&(a instanceof tr?n=!0:a instanceof uo&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Re);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var nr=class extends Ht{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ue}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var po={name:"AfterimageShader",uniforms:{damp:{value:.96},tOld:{value:null},tNew:{value:null}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float damp;

		uniform sampler2D tOld;
		uniform sampler2D tNew;

		varying vec2 vUv;

		vec4 when_gt( vec4 x, float y ) {

			return max( sign( x - y ), 0.0 );

		}

		void main() {

			vec4 texelOld = texture2D( tOld, vUv );
			vec4 texelNew = texture2D( tNew, vUv );

			texelOld *= damp * when_gt( texelOld, 0.1 );

			gl_FragColor = max(texelNew, texelOld);

		}`};var mo=class extends Ht{constructor(e=.96){super(),this.uniforms=sn.clone(po.uniforms),this.damp=e,this.compFsMaterial=new st({uniforms:this.uniforms,vertexShader:po.vertexShader,fragmentShader:po.fragmentShader}),this.copyFsMaterial=new st({uniforms:sn.clone(An.uniforms),vertexShader:An.vertexShader,fragmentShader:An.fragmentShader,blending:Yt,depthTest:!1,depthWrite:!1}),this._textureComp=new pt(window.innerWidth,window.innerHeight,{magFilter:xt,type:Tt}),this._textureOld=new pt(window.innerWidth,window.innerHeight,{magFilter:xt,type:Tt}),this._compFsQuad=new pn(this.compFsMaterial),this._copyFsQuad=new pn(this.copyFsMaterial)}get damp(){return this.uniforms.damp.value}set damp(e){this.uniforms.damp.value=e}render(e,t,n){this.uniforms.tOld.value=this._textureOld.texture,this.uniforms.tNew.value=n.texture,e.setRenderTarget(this._textureComp),this._compFsQuad.render(e),this._copyFsQuad.material.uniforms.tDiffuse.value=this._textureComp.texture,this.renderToScreen?(e.setRenderTarget(null),this._copyFsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this._copyFsQuad.render(e));let s=this._textureOld;this._textureOld=this._textureComp,this._textureComp=s}setSize(e,t){this._textureComp.setSize(e,t),this._textureOld.setSize(e,t)}dispose(){this._textureComp.dispose(),this._textureOld.dispose(),this.compFsMaterial.dispose(),this.copyFsMaterial.dispose(),this._compFsQuad.dispose(),this._copyFsQuad.dispose()}};var kh={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ue(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var ls=class i extends Ht{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Re(e.x,e.y):new Re(256,256),this.clearColor=new Ue(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new pt(r,a,{type:Tt}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new pt(r,a,{type:Tt});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let h=new pt(r,a,{type:Tt});h.texture.name="UnrealBloomPass.v"+u,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),r=Math.round(r/2),a=Math.round(a/2)}let o=kh;this.highPassUniforms=sn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new st({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Re(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=sn.clone(An.uniforms),this.blendMaterial=new st({uniforms:this.copyUniforms,vertexShader:An.vertexShader,fragmentShader:An.fragmentShader,premultipliedAlpha:!0,blending:ii,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ue,this._oldClearAlpha=1,this._basic=new Bn,this._fsQuad=new pn(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Re(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let s=0;s<e;s++)t.push(.39894*Math.exp(-.5*s*s/(n*n))/n);return new st({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Re(.5,.5)},direction:{value:new Re(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new st({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};ls.BlurDirectionX=new Re(1,0);ls.BlurDirectionY=new Re(0,1);var ir={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var go=class extends Ht{constructor(){super(),this.isOutputPass=!0,this.uniforms=sn.clone(ir.uniforms),this.material=new ts({name:ir.name,uniforms:this.uniforms,vertexShader:ir.vertexShader,fragmentShader:ir.fragmentShader}),this._fsQuad=new pn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},He.getTransfer(this._outputColorSpace)===$e&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Bs?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Os?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===zs?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Vs?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Gs?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Si?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===ks&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Gh="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA2gAAAJSCAYAAAC2gOZCAAEAAElEQVR42uzdd3wU1d4G8Oc3u0mo6YgCBguK7dqwIaD0IsUa77W3K9hQegdXei9ig2v3vjasoCJIiYBdvDawgY2iQHooKTvze/+gJWF3M9s3yfP1k/e9JLszs2fmnDnPnpkzABEREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREYWUqz2crvZwsiSIiKi6ExYBERFVV7edX/dYZ5zzelW9B5B4VTwHkSef+qRwE0uHiIgY0IiIiMKsfw8klOQn9VFoXwCdPJ7LBOsVstAoqf/fheu372WpERERAxoREVEI/fuiBqcK5BYYcgcU6Tbfli/QV1Ucj//n4/yvWYpERMSARkREFKDb26Q3jLNKr1QDN0HROcgT3npAFpZJ3EtPf5RdxNIlIiIGNCIiIhv+3TaplWFZfQG5HkCDEC++GIIlasrC/3xasIKlTUREDGhERESV3No+OTmhVK8FrHsAOStCq/0RkGdLHebTz6zdvYt7gYiIGNCIiKjWcgHG9rYNLxYLN4kYNwFaN0qbUgJgsYq+kHtM0XuLFsHk3iEiIgY0IiKqFfq2q3eMQ+NuVtW+AE6IrTOjblUL/+eE4/FHP87/g3uLiIgY0IiIqMbJzIQj/a+kDtgfyq4EYv7B0haAVRBZaO4reGvhepRxLxIREQMaERFVa/0uSTzJYeEGBW4DkFFNP8bfgD4npjz5GB+CTUREDGhERFSd9O+BBHdRUh/x9TDp6mu9Qhaa+/gQbCIiYkAjIqIY1q9dg9OcKjcr5A7A9sOkq6sCgb6iluPxx/gQbCIiYkAjIqJY0P/C1EQzwbxOoP+G4rxaWgyfAfqkOuq8/FjWrt08KoiIiAGNiIgi6v62Sa0sA32hCMfDpKslBYpE8JIqFjy6tuArlggRETGgERFR2Axrk95wr5RdB0E/AOeyRHxaD8VCyxn/IkfViIiIAY2IiELm4GiZANcBaMgS8UuRAi8J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";var Hh="data:font/woff2;base64,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";var Wh="data:font/woff2;base64,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";var Xh="data:font/woff2;base64,d09GMgABAAAAABNMAA4AAAAAHswAABLzAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG4ZiHFIGYD9TVEFUfgCBcBEICqdwokcLUAABNgIkA4EcBCAFhVYHIBvcGjOSlc4eyFRnYowb+uPXn38/+Idfx3fem5kvOWIBRRghq0FRSLsdxAdwh/8t9b3WISbEL6ZOQqRiTrfB5vBVudw5Ea+JPZm4ZwC39T/CaLCAjdzEpA6xiNqI1n6ATntG9kUUl8Fl4sv60eEDdPPfXXfV7JrYpIYwCE1oZn8fsvq/tdQiu7woZCFjI1yEz/O5P3M0f2cPcDcIG97wBKFMvlWArMiBUHWAqjVCV3bbzz5jy+vHzo3bOiKGULT/8ToYIIAsKrATJ89cSMim5bu2EILLh2lVGLRx9Y4t+B3IvxQXCw1OGAHgtHPlxth7dg0RhMGhaADh1kdwqBcDhv5KjepQtzrUq2Y8tSlEqCWP2vRdLZHqkJp3RNg8mXV/0zj0BaQhbFadOlRZHdVsMB6aNaQ2JnyAzeohHd296lXLKyK19h8BkSSs5xfUNZcGdvy3FsKGuhepnw/y9AZPdYSqTj9Vh7URusMQKvQ0dw0RqqEN6SHjV4LquFWwnuOnN8Srruj5SJ5GX4Ej2EKI/9zuGlCzulWNuoMHWLd+B8GIA5zk0H4jbikt6sae3xrVx0DWempWJcECBi5907h+r/O254dN+T8QOv3Uq9EPW9QN5TbQ4mCJhxsnkUwcqeSQgMEnZ2Nw8LAE4Ys/bpVoCdAH4kMwfmUVaKGEEKIR5BEEKfqa++miDxWX4LIKAk2iLz5iOIEEYQjRMTgUfwIIG9eGMtgBBVCnrzV/DEGzJdEQcSdDKJY4ifjZs7TZVd6OPXQHLIGVYvDw5gFEEEUWrrvUdI//CV6Ue0PvOL27AI/sfSpslYct5yHi6Fx5xqV/0YSFMPY4aSldvpdHLQj+WXY5mBNWKVe8fWl1Gg4V+s0vjHJ1cDV267adB8zpt2DO5IXGwlvtXbtulzHYJXNmzzAOzvpdyzcZP1xKSAhfkwuGucgx4KikXt0Hk8Qs4Biz4DOR1xhfcRtiIEazS3T5qpSRhu8/jDSKKGESc1jOatazia3sZC8HeMhrflJPM50MOKQcT+mSHJojHbi2Mrawnd3sf0H9Uosa9UB3dEnnQWd1VmeyVzujhZqhMfph1kT6RNJEzH++Hw18lMpvjuAh6S7pAOC0cYuufdkFAZyYmHnNAIJI2cCGgLCIafMjZy63KmDrCApO2tCRZ6o4vF1MZp3IaTYHPpcpU7zqPLwT3Irj3Kuro5wSYurcPOLdSrLq6vOXLqtY4OTv6hrVKbpuX+MsOq10VJ8JhhFWHfPpNI2GDY57EcI4LHdSxqG8L1IY2RdkoZRSSoM0e0RFzziU97HOKmXV4M531bOBpHD1orQ/Z7SdYVkVuoRDrKq7eW1GuStijN/i0Zvow3ZCyNsCpfSTbZhSKlAakrx0O0EI8QgBhEXUx6rnYkdGPPUSV1N4CuUBSoV4LYz8PIRSVsUPOOPoKLcOYRoDJg8cZRRnt3yuz42zUCiTa4l/PTR13z52aMy/CVoY4Ja4TW/yVPVAGk07zv16UEToQ0YhUH6WuPCTevsJc7PrzG17vTMFX/q0ie9AuOZ9BIvs1TMYNnqaUfqF7oTwqeXD57YNz4mR+g8Rv60XXzhndnvdS+fK/bY4o+SpH4ncd45V+55vfhDNukuD+UhChG7azyinowYHvXpkv1KP+S6FhGqnj6azIiSqGEiPGeXs2bOMcvowZ7Qd6UP+s9ARVr0Xaxjx1Nu4ww2dgEipuO3ubALpUCHPbc0JpH7hgeZbUbGgicbum3AYWYF0AEj3ZhkOQ4rxHocvyFW67UQ1SKCEVJy8e0o8wnhj9LB52H5um9UWXj5kAtJo2LzBUX7SmafuHfKbM5jkubzxCdtY/wgn36tRfxHKGpTHvfwHCAFpbAxI9xGjPKQmsoWd5TxKfiQIEzGQLjPKw5Sjtg0C0hHchm+pw3eB8jVWfZCMsegFBsezWwiYSDsntOd4h9FThWNUg/JBKA8Ko0f3EyUUgCcn+iuEkIyT5zlj9tAYsJ5/CM0IrHpuX7g65j+Zq4H0pMkbQPlozPhBqF17lLgFfAe8PJlRkM56JHrMJtvFKAdDLOAKId32EJ1xjFX3+Vn2seoBf9tLVTyBV4H5eYQo5XNShaED/laLAMbWRWGAkJjxo9BiksRDEiHvCCisAY8JlA8yyihnHGWUcT+tQVdbX0PRtgO3olDrt/ua7X6Wa08IPzkApguaPWb8aJBGmzYUw5+GmGUaGt6SvHVYsKq1w813PCC+b7lw5coFzzk1IpwhdkMmRe0d9Oox+x3LHTacvgvIWbiPUuEZpfci71EoX2WU84cP72eUi08DmAAkfJtLUDZHDJuhfG7ReFDQXoT4xwjdD7uNLgMJhUfXjh1i1QtPFgKRCrKZUQa5w/7Ynmmb2S3CyadBF+DQB+KPn/Qy74uklAZZhiPENr3RY++wV/vZq0Has8xbWGzTmzz2Dv4LoK4nC5cWYtZg3mjz1I94r0zzLUEBHv+gLfwKTH+sA9Mfn1vYAabP6AAffjs3sWd6/doGJ6/FbvGR9WqRbv0LXEVxSsH2VO1SQLuby7bwIoehH/pW6XbEDqVeSL2UcDDk9S0vHi/b/2mzq+efAYfTS0ICEveGetTWF7/IPfHryJlbFZbs+CTGnnol63H63bgjupfmzBp5KYxWrkrqXhczV9TFusOaKKlsXldGerAFFJ7Y/drkx2vlm6EO4VrUwXGHL4+7t++d8vrkJ+ueu+fLxY9H9vT//clJ53mOmztrJ5kLd+0Rf40/7D3H0+wIPNSB7uxzWigu6jHz9r1DPxceBtsY5/Wkc5tPAfmfJCd7vsugU/ZziT2vkZDQtLXUpftQxSDoLl4Pw124aWXv05tNtT2juxIORzWWPF06d2P6c+swPgk+zsk4HyIevIpqkHnE2ThaO1J+THc/vn7lBaLs17V2l2/LPw48PgpYwaGsFdmc5E871qNMUr2iRCzyG4qHC06E10Tv7NxNqLtF3opLETsSaO4+mntkS6hq68Rxr+lMxEDkSN0XR06/re4t79Eq26lG3pcfx/8ujv7+5NZF0aG8w4qZHBcIAAp9JHIx+JOk/huzM6VG8Yd5mSbRv/WiNHVbXukwo3EmXiiZ3n7rKl5va9XK5iMbI5rdLxYu3Jj9yjZeM8Y6nM04d9d6b4NqTHF+xJE0WvEZ9wnF9fDy0dtwYa+W6CrbqjgBjA4gjTX7iKZ6eYYi0cnD54chF7kXU2K+HWVCcwh5vYfgrsI08LeQa6aT56cu2WyVzoeeh/ftx/MPsEHcNl6jLEjTZxoUpswMNWqQKSdsUzfCeq58R3IyngL+FXAeyPG354vYv4CSzqc6gV3/eXEGHpHON6gJYbHpWAgJBgjuqjwBfD/FRd/9/Z8CzlWRvy1fxP4FlHQv1fl/pBHf19LUIE9XJDn5+Pww6CL3okrMv71MaP4aeR0guKswjfVb0DXbyfNTlmy2Ssej4of37ceA0STQ+TsWDVnhEWeC8IbQtKPch2EqUi/bvf8w2/k7kAYfiCcCw+I/ltsr3tFhyogBbjly02qzKZQKq1ekcqAOTJRnqcoCxD876i2zyGUTBfyfT5/lsH9/UxLxA/ifAHY/6IB8cXzo6bHv5p9+qd/YhHtmJFYLVkQeYFXRG+ekh29tBzKwU3R0GvLF8aGnx75r3v1Sf9+Ae6YlVitWRBmAquiNC0zXf8EE+EA8EXiNhI6VmlqFKsyoDOsBtn34Ggmlm3eV+1Vobi6X6cxuKVzj+hYKt257cWBwd66m0majLPH9M52g67csGrzKJQJBJCQ07yjzYaiS3Au65ocFNckuRXqDvKUJ34c0Opj2qzSIAUlaC3xmTlNaU+ADyPk7MAE+EE8AmUlXF8h3B9yfgruSuojggbnHaDt5lhzsd33G2pnc3RzcN/cQDc9tG3SyzTp1nXSW5mZNxAQMVUuNdjamVdVJ52hu1kR0QF8JPJz+q2R436Ub1b6u0eXo5bBW18bytTtL33NM4uPgE07WkY9naJ/9/vKlUW74H+OSP79+PerZn5Po3xTcqfz5sTdSqkNmyJK12hqnKo4XXAsv6/giTT1ibB+s2C+/AKx8+BoJHSs1taYrCwPyLEG7aCCtPZMsGKt/PDQ/iak9JX6yLTqnDM3JFI2AjG9SmdXMrGa89bFke6opuUwAObwsMKaWacmNBbyphkMfgc7fgTT4QDwBLKu1Tn0ub5/JgErsisrStPJ8wF03H/TMNa8oTN58cS/Cjxq871DlYSWWIt5Bs8W4yVNUVckvkbvrR29g4127VbaG/Ow6WKjtR9DyfMB4/W0Q3hCad5X51UZ5LpfpzCKK1ri+hcJt214cGNwt11bYrdRlnm+mC3L+FkyA9ycQgTfwhtC0o9yPoSpKD9s9NyyoSXIpMurlRFPNPqTJx3QcpUPhkJQo8Js5TWnNZz4And8DacgKjwDM5L/Nmn81/eLS9g13d3NfPQkH3IbFhr6OZh+OswuaGdXcSmZd3UIUd+RoNQO4zZFpSsgOss04OIR6siuTPclcWLhHnxLPXxCNFSwq1gWrepSTI+8raVjTnauSQu1eF5cStStdZ/UC33YBpg815TeqTx1f+ND9E0oPpdRYrFHaUJje27T8J1qCeItlobjdrgVTyoEIqj+iP3wibAQAWpQNLvuw3tG4z8KgxcnuPrqbyOiISwgfjZyLHA9vAUw/ubYL6oV6pBu7WHevfOke6h+qI+Ekt3Gxub+ryV/rmSpoZtRwK5geklpPVlRtHl9Fm28x4QUmkJFkREhTsyDWIVU7VsfM3POadOJWiwluFYHN/r3W46LD5/v6dAT2jOp65L3YYavBG+3hEhuHNI8ESfBojZSJjAT90Ii2EQs1gy02iYJVutM1ZcWvJq1bl5+TWZ/uuEmX7bzBanRZC262m9IFCq3sHrpVzblSV3PH3h08FXW9sDLnmAh+rpVPjF8hSkC3MDvY9VSWvkK8jr7YLSZNKLXv4isknz5+ehnTbHOYmQPfLwJxoKroQXoE3Wa6hfp6Qt+ootB+h4lEmPqXocZGjxxxiA8/NJUpoaSx9zpPzJq1OC0q5FaOUzpVJvrhkF09oV3S5e4n5CdgiXvkiflbs93K3fzFsS87BFZBAn4NN2X5nIDF8w4dSW6rrk8V8QIEPPOLPM4hrq3Y1iPctDCAzWhlTVKcqzxLeVgStEZH7bLdfptFk/eMQBxVaO8bHJvKSvdljqc2UfuIzeEUcm8Mi/iVeTGiMzkJQk9+6jXfMF8bqR338uclmzUNPzeI3fLMBWk9sYJOEd8vxNmMZ6TxKzLnm7L+HUdrqX4Hp1rfIvycIKhaEiVKTosWe20+PSTyUTGzO2VjoRN+85qmznI9gU+GVUCCLCphBFlGN1SUVJfqxDqI3ZoNmw15WKYuFIs9fN3DMu39RcHhYlt3UZodxjO+mcRau4qTHN2jhBLFZOWakvUTG6OMs2fE8iJ+iw2Lknwzkr0DFkO3ieV2IMDm5M6Nyyb2VHWEhX54KuYJoGN5N3mFH3PXzENLl2df/awPn+CVBtMwNJqzziRu4hTLdHZ9uA8/fkaWk/gJcWLq0Ku7szS4rGBO6rRZZnF0VZi3IGNiqpXwuPn25aknz3qBaQ0SAAtGpCZxnWkNBgAWjMgtxHWmNSgALBgSpQDTGjQAFgzxBqCsYQqACcNEMK2hop5qSHgBXOMiuCBEO5p8GaoTzAnRVQkeBKrEKT9VZflTOohlhHb5Y/o3ywjm8teULS2Dj/w1Yz8tQ7H8LelCy+Asf0Ep0zKUy19T5bQMbvLXzGZahhD5K/olLZNz/2tQSbTsgFz+GSDw76Zsof3XPLWAb2wG6yJN6529W2J2Ytn/N//eKHHZa6OBnIwRSoiH/Zriwv9v/rsqcRkvCTOILhvGSxTFyb4b6ieUmQy0U8UwZzyBD2UjX0aNhy81DcHkCMrJAcSS/YihtiGB8oYzJYQl4zgkjH5wqI0op0bBm/EOAuZMuNF/EEJpy7kUBR3iA4xIyE8RF9FBPEU5RRs5gGKaZnIYxfqO3YhypipwF2CDCWDjXLRwjkCGe6oadsfSHJQC1s4nuk+ZBEyJ/EwSykRyJgN8QjeTgiNeZ9Jww85MJuwxPkMVXkgvRAD6CIaoKPeATBLqsMxkQBGGq9iULkIrzkpTq3EJkTCtFjVIq369Em1IQhkKUA/p7aNqUYJG1KAYDWhAWkxQKUUZKHGQZo8uhwQFqAIHSShHO4ofBzbeuAF+cIELGiBBfQKSWgOc0RBVtDrji9WjFC6IgxjREKMeBWhCTQo0iU6IsRZhZxOqEYFAAD9aKopRrwEY6jlwhTN4G9EfWSiEN7yqi+ehAB5wRY7espy1HJyj6exKgQDJ8Oc157QEQr0AtZCiLSg0lAoHbin8t3LgeGUoBkf9VvGoRy0qUAyJvD4ETWhEWSDhlWaLUpTfdDahEM6pVotquKhjUdCgr0o3oBiNaIN0fRcCZhchvjT5R+D/VbhBAAA=";var qh="data:font/woff2;base64,d09GMgABAAAAAAUwABEAAAAACPAAAATTAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGYFeGx4cQAZgP1NUQVQqAEQRCAqEeIQdCwoAATYCJAMOBCAFhFwHIBckGAobYAfIxKB3s59NgknFgeZZzZSUilHqdiLiKXluX/Z1wt/PLSMW4jpWIkdNA3+84Wl8RCWZx2JeuYVIKkRCr6jGFmXkBi/iy30xc4O4aCeUiD55EwzEGVkFRsRYJg12w6ttsKULXu3m3g7EdJl7zYjpNg/3wgtiK49u9MHHmArDE48iztDSagnGQdPPLeAum24iswHw0j6w7nCEHt0AsS0ETVfYONp2A2A6LK1NHZbW4Y7mlr7Bvp5eQ1oOHXQwZOqTgvmL12ZjGb8EkpBUJO1+Ai+Rlz7q8z3P0D/QcyECqMVUpTD5RzVSjzCSGacUFFZWFpk5ft8laBOb8/2L1Iy0YqSArZpG99sWBj3MQsI2iomkhMST+uZ3FHcLSguIjvsuHaixtvZhckXqqQBiT89tFn1j6U122swyCFEihfR9ji1urJpWZNO5zvbDyd375xNMDZEjNhs0oaGCMkjBCYVrAHE3GN8yIuqfmKFpmlYpGXu5UiXSMoyDhlEqOYmduLNN3dIiGde0torbpnA8z6esv37d64YgVHI7eT5g/eXLXneEGhWUJgUz86TPQV6+2eq+b4liyQZSYzo1MaE3brdaaxTe3E5eV7FFEDx7OZ7nSzafPu1+QxCMJojlXQpvjv+cN24+ft1ZEASTSQWlUQO1SUHNPBlzlpdvtrrvu7dEsWQDaVBEc0d5vmDzc68rguAxroKSM12bmJgINB63Wq1JZwRBMHE8z/MhlrHf2d9X6BI3Tq27lbgxzPdOzdTEjXW3whI3wuOMcTnrVJi0MXfuzKd7T8vbU/vCZ2nnLtU985kc2nXgyTd/SQZiN1f2zJ1/eVXuypDQpB9eFijCknXGdzdj5PIR+Xa/Wf6zfQZ1vbVLQuLdBj4byR9wKG+1m+Ey//gUp3hpnqTEoenSQj9Po+lY65aO0kN/njpSMpQxL/2LRYuIx2IkrXGdU+mgvs55rL7fkzLrT+nftUEzj+f9I1+z4cCMOTM+/Uq/WP/w6w1fR25mg2sl8UUexX81an2lqg2K3T97Ozdm2orbqxscbnmqDMlcmOm7EG1vzrwc6vPyjtstJU3GspLV9VPnFHH1VZaKu4znLI8VTquZ9JUyaY77Fs9NHy/3AACcBAFAETF3XyVu0CT8L6Xp3wHq65OfHjiP71ZfEN6J3v6l6JGoHIr7nWGU/cgs/PA9oLj4TvR+v6KnzxlXesa1ZvwC0L9DBMW3EkPlwDhKB4pPjun93M3IJLCVpF0VBJ8Sg4KCmmgVNBLAzzLfFSJ0olMhBos8uRoRcG4gBErIAfaOK5CGbphhQRdMaEEH2tCO4W3lMPoRh2B3bggWDKID/RgWCJrTeLcbQejDINoQjGJkoQBF6MMwvi+HGb0YQjnSEcjmVeCgH/c+9IJFGIIQghBEIBA5CEM82r3R8g1GVRBaGYRQhCIGtT0wowsthsZWtGAcLQyIxHZRiEQUQhBO3V8qMpCGYsQXkFdG2jBy7xw0OllFVjXZnA8s8C0CCUFodvozhGkvi1Q0ow9NRVzk06A4tg4Fwfwdg6p9vQfB8EUAWIyhoxuQLRAONV1mFC1odpjVQLzhXBHM6KGf80Y5+jCCQVgA3sLQg8xtmxMOXVUTLch/H5QDmfrw+/uggYMTCKpB90MHHQA=";var rn=1080,Xt=1920,Gl=30,_o=10,Ct=7e4,Xl=35,ql=14,Yh=Xt/(2*ql*Math.tan(Xl/2*Math.PI/180)),Qh=new URLSearchParams(location.search),t0=Qh.has("capture"),jh=Qh.get("langue")==="en"?"en":"fr",Hl={fr:{surtitre:"FRAN\xC7AIS \xB7 ANGLAIS \xB7 CHINOIS",phrase:"En ligne, o\xF9 que vous soyez"},en:{surtitre:"FRENCH \xB7 ENGLISH \xB7 CHINESE",phrase:"Online, wherever you are"}}[jh],Zh="#04142e",n0="#112e67",i0="#f6f0e6",Kh="#ff8114",gn={cx:540,cy:800,l:780,h:573,logoL:680};function eu(i){return function(){i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var bt=eu(20261024),Wt=(i,e=0,t=1)=>Math.min(t,Math.max(e,i)),Vn=(i,e,t)=>{let n=Wt((t-i)/(e-i));return n*n*(3-2*n)},sr=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,rr=i=>1-Math.pow(1-i,3),s0=i=>i*i*i,r0=i=>i>=1?1:1-Math.pow(2,-10*i),a0=i=>1+(1.6+1)*Math.pow(i-1,3)+1.6*Math.pow(i-1,2),mn=i=>new Ue(i);async function xo(i,e,t,n="normal"){let s=new FontFace(i,`url(${e})`,{weight:String(t),style:n});await s.load(),document.fonts.add(s)}function o0(i){return new Promise((e,t)=>{let n=new Image;n.onload=()=>e(n),n.onerror=t,n.src=i})}function tu(i,e,t){let n=document.createElement("canvas");n.width=e,n.height=t;let s=n.getContext("2d",{willReadFrequently:!0});i(s);let r=s.getImageData(0,0,e,t).data,a=[],o=e,l=0,c=t,u=0;for(let f=0;f<t;f++)for(let h=0;h<e;h++)r[(f*e+h)*4+3]>140&&(a.push(f*e+h),h<o&&(o=h),h>l&&(l=h),f<c&&(c=f),f>u&&(u=f));return{liste:a,d:r,lc:e,x0:o,x1:l,y0:c,y1:u}}function Wl(i,e,t,n,s){let o=tu(h=>{h.font=e,h.fillStyle="#fff",h.textAlign="center",h.textBaseline="middle",h.fillText(i,1200,450)},2400,900),l=Math.min(t/(o.x1-o.x0),n/(o.y1-o.y0)),c=(o.x0+o.x1)/2,u=(o.y0+o.y1)/2,f=new Float32Array(Ct*3);for(let h=0;h<Ct;h++){let p=o.liste[Math.floor(bt()*o.liste.length)],_=p%2400+bt(),S=Math.floor(p/2400)+bt(),g=bt()<.55?(bt()-.5)*.08:(bt()-.5)*.6;f[h*3]=(_-c)*l,f[h*3+1]=-(S-u)*l+s,f[h*3+2]=g}return f}function l0(i){let e=tu(l=>l.drawImage(i,0,0),i.width,i.height),t=gn.logoL/Yh,n=t*i.height/i.width,s=(Xt/2-gn.cy)/Yh,r=new Float32Array(Ct*3),a=new Float32Array(Ct*3),o=new Ue;for(let l=0;l<Ct;l++){let c=e.liste[Math.floor(bt()*e.liste.length)],u=c%e.lc+bt(),f=Math.floor(c/e.lc)+bt();r[l*3]=(u/i.width-.5)*t,r[l*3+1]=s-(f/i.height-.5)*n,r[l*3+2]=(bt()-.5)*.05,o.setRGB(e.d[c*4]/255,e.d[c*4+1]/255,e.d[c*4+2]/255,Rt),a[l*3]=Math.min(4,o.r*3.2+.05),a[l*3+1]=Math.min(4,o.g*3.2+.03),a[l*3+2]=Math.min(4,o.b*3.2+.01)}return{p:r,c:a,cy:s}}var c0=`
  attribute vec3 couleur;
  attribute float taille;
  attribute float alpha;
  attribute float phase;
  uniform float uEchelle;
  uniform float uTemps;
  uniform float uAlpha;
  varying vec3 vCouleur;
  varying float vAlpha;
  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mv;
    float d = max(-mv.z, 0.05);
    float s = taille * uEchelle / d;
    gl_PointSize = clamp(s, 1.0, 90.0);
    // un point plus petit qu'un pixel garde son \xE9nergie lumineuse
    vAlpha = alpha * uAlpha * min(1.0, s * s) * smoothstep(0.4, 2.5, d);
    vAlpha *= 0.78 + 0.22 * sin(uTemps * 5.0 + phase);
    vCouleur = couleur;
  }`,h0=`
  varying vec3 vCouleur;
  varying float vAlpha;
  void main() {
    vec2 d = gl_PointCoord - 0.5;
    float r2 = dot(d, d) * 4.0;
    if (r2 > 1.0) discard;
    gl_FragColor = vec4(vCouleur, exp(-r2 * 3.2) * vAlpha);
  }`;function Jh(i){return new st({uniforms:{uEchelle:{value:i},uTemps:{value:0},uAlpha:{value:1}},vertexShader:c0,fragmentShader:h0,transparent:!0,depthWrite:!1,blending:ii})}function $h(i,e){let t=document.createElement("canvas");t.width=t.height=256;let n=t.getContext("2d"),s=n.createRadialGradient(128,128,0,128,128,128);s.addColorStop(0,"rgba(255,255,255,1)"),s.addColorStop(.12,i),s.addColorStop(.4,e),s.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=s,n.fillRect(0,0,256,256);let r=new Qi(t);return r.colorSpace=Rt,r}async function u0(){await Promise.all([xo("UB Mots",Hh,800),xo("UB Surtitre",Wh,700),xo("UB Phrase",Xh,500,"italic"),xo("UB Chinois",qh,900)]);let i=await o0(Gh),e=.35,t=Wl("Bonjour",'800 560px "UB Mots"',3.95,1.6,e),n=Wl("Hello",'800 560px "UB Mots"',3.7,1.5,e),s=Wl("\u4F60\u597D",'900 560px "UB Chinois"',3.4,1.75,e),r=l0(i),a=r.p,o=new Float32Array(Ct*3),l=new Float32Array(Ct),c=new Float32Array(Ct),u=new Uint8Array(Ct),f=new Float32Array(Ct*3),h=new Float32Array(Ct*3),p=new Float32Array(Ct),_=new Float32Array(Ct),S=mn("#fff1dc"),g=mn("#ffa54a"),m=mn("#8ab8ff");for(let x=0;x<Ct;x++){let d,C,b,B;do d=bt()*2-1,C=bt()*2-1,b=bt()*2-1,B=d*d+C*C+b*b;while(B>1||B<.01);B=Math.sqrt(B),d/=B,C/=B,b/=B,f[x*3]=d,f[x*3+1]=C,f[x*3+2]=b;let J=.8+5*Math.pow(bt(),1.7);o[x*3]=d*J,o[x*3+1]=C*J*1.4,o[x*3+2]=b*J+.5,l[x]=bt(),c[x]=bt(),u[x]=bt()<.38?1:0;let ee=bt(),G=ee<.84?S:ee<.96?g:m,q=ee<.84?1:ee<.96?1.5:1.2;h[x*3]=G.r*q,h[x*3+1]=G.g*q,h[x*3+2]=G.b*q,p[x]=(ee>=.84&&ee<.96?.032:.021)*(.7+.6*bt()),_[x]=bt()*6.283}let w=document.createElement("canvas");w.width=rn,w.height=Xt;let R=new oo({canvas:w,antialias:!1,preserveDrawingBuffer:!0,powerPreference:"high-performance"});R.setPixelRatio(1),R.setSize(rn,Xt,!1),R.toneMapping=Si,R.toneMappingExposure=1;let M=new Ki;M.background=mn(Zh);let A=new Bt(Xl,rn/Xt,.1,200),T=Xt/(2*Math.tan(Xl/2*Math.PI/180)),P=new Dt(new jn(90,90),new st({uniforms:{uA:{value:mn(n0)},uB:{value:mn(Zh)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"uniform vec3 uA; uniform vec3 uB; varying vec2 vUv; void main(){ float d = length((vUv - vec2(0.5, 0.52)) * vec2(1.6, 1.0)); gl_FragColor = vec4(mix(uA, uB, smoothstep(0.0, 0.32, d)), 1.0); }",depthWrite:!1}));P.position.z=-30,M.add(P);function v(x,d,C,b,B,J){let ee=eu(J),G=new It,q=new Float32Array(x*3),ie=new Float32Array(x*3),fe=new Float32Array(x),oe=new Float32Array(x),ae=new Float32Array(x);for(let Ee=0;Ee<x;Ee++){q[Ee*3]=(ee()-.5)*d[0],q[Ee*3+1]=(ee()-.5)*d[1],q[Ee*3+2]=d[2]+ee()*d[3];let D=B[Math.floor(ee()*B.length)];ie[Ee*3]=D.r,ie[Ee*3+1]=D.g,ie[Ee*3+2]=D.b,fe[Ee]=C*(.4+ee()),oe[Ee]=b*(.3+.7*ee()),ae[Ee]=ee()*6.283}G.setAttribute("position",new lt(q,3)),G.setAttribute("couleur",new lt(ie,3)),G.setAttribute("taille",new lt(fe,1)),G.setAttribute("alpha",new lt(oe,1)),G.setAttribute("phase",new lt(ae,1));let Se=Jh(T),be=new $i(G,Se);return be.frustumCulled=!1,M.add(be),be}let E=v(2600,[34,46,-26,34],.03,.55,[mn("#fff1dc"),mn("#9cc2ff"),mn("#ffc890")],7),U=v(30,[22,34,-16,14],.55,.05,[mn("#5d8fe8"),mn("#fff1dc")],11),I=new It,O=new Float32Array(Ct*3),K=new Float32Array(Ct*3),$=new Float32Array(Ct);I.setAttribute("position",new lt(O,3).setUsage($s)),I.setAttribute("couleur",new lt(K,3).setUsage($s)),I.setAttribute("alpha",new lt($,1).setUsage($s)),I.setAttribute("taille",new lt(p,1)),I.setAttribute("phase",new lt(_,1));let k=Jh(T),Z=new $i(I,k);Z.frustumCulled=!1,M.add(Z);let X=new Ki,j={blending:ii,depthWrite:!1,depthTest:!1,transparent:!0},te=new Ji(new yi({map:$h("rgba(255,214,160,1)","rgba(255,129,20,0.45)"),...j})),he=new Ji(new yi({map:$h("rgba(255,226,190,0.9)","rgba(255,129,20,0.25)"),...j}));X.add(te,he);let ge=(()=>{let x=document.createElement("canvas");x.width=x.height=512;let d=x.getContext("2d"),C=d.createRadialGradient(256,256,0,256,256,256);C.addColorStop(0,"rgba(255,129,20,0)"),C.addColorStop(.72,"rgba(255,129,20,0)"),C.addColorStop(.93,"rgba(255,190,120,0.9)"),C.addColorStop(.97,"rgba(255,129,20,0.5)"),C.addColorStop(1,"rgba(255,129,20,0)"),d.fillStyle=C,d.fillRect(0,0,512,512);let b=new Qi(x);return b.colorSpace=Rt,b})();function ye(){let x=new Dt(new jn(2,2),new Bn({map:ge,side:tn,...j}));return x.rotation.x=-1.1,X.add(x),x}let qe=ye(),ct=ye(),Oe=new fo(R);Oe.setPixelRatio(1),Oe.setSize(rn,Xt),Oe.addPass(new nr(M,A));let Q=new mo(0);Oe.addPass(Q);let ue=new nr(X,A);ue.clear=!1,Oe.addPass(ue);let re=new ls(new Re(rn,Xt),.8,.45,.82);Oe.addPass(re),Oe.addPass(new go);let Pe=document.createElement("canvas");Pe.width=rn,Pe.height=Xt,Pe.id="animation";let ce=Pe.getContext("2d");document.body.appendChild(Pe);let Ce=ce.createRadialGradient(rn/2,Xt*.48,Xt*.25,rn/2,Xt*.48,Xt*.72);Ce.addColorStop(0,"rgba(2,8,20,0)"),Ce.addColorStop(1,"rgba(2,8,20,0.6)");let Ye=[[0,[0,0,15.5],[0,0,0],0],[.3,[0,0,15],[0,0,0],0],[1.1,[.6,.3,11],[0,.1,0],5],[2.3,[-4.2,.9,12.6],[0,.3,0],-2],[3.15,[-2.6,.5,13.4],[0,.3,0],0],[4.25,[4.4,-.9,12.3],[0,.3,0],3],[5,[3,-.4,13.2],[0,.3,0],1],[6.1,[-3.4,2,12.6],[0,.3,0],-3],[6.85,[-2,1.2,13.4],[0,.3,0],-1],[7.45,[.3,.3,11.2],[0,.3,0],2],[8,[0,0,ql],[0,0,0],0],[_o,[0,0,ql],[0,0,0],0]],ke=new es(Ye.map(x=>new F(...x[1])),!1,"centripetal"),je=new es(Ye.map(x=>new F(...x[2])),!1,"centripetal");function Ze(x){let d=0;for(;d<Ye.length-2&&x>=Ye[d+1][0];)d++;let C=Wt((x-Ye[d][0])/(Ye[d+1][0]-Ye[d][0])),b=(d+C)/(Ye.length-1);A.position.copy(ke.getPoint(b));let B=je.getPoint(b),J=ml.degToRad(Ye[d][3]+(Ye[d+1][3]-Ye[d][3])*sr(C));A.up.set(Math.sin(J),Math.cos(J),0),A.lookAt(B)}let Fe=.3,rt=7.42,Ge=[0,.3,0],vt=r.cy;function yt(x,d,C,b,B){B[0]=Math.sin(1.7*d+1.3*b+Math.sin(2.1*C+.7*b)),B[1]=Math.sin(1.9*C+1.1*b+Math.sin(1.6*x-.9*b)),B[2]=Math.sin(1.5*x-1.2*b+Math.sin(2.3*d+.8*b))}let Qe=[0,0,0];function dt(x){let d=x;for(let C=0;C<Ct;C++){let b=C*3,B,J,ee,G=1,q=h[b],ie=h[b+1],fe=h[b+2],oe=l[C],ae=c[C],Se=r0(Wt((Math.min(x,.75+.4*oe)-Fe)/.7)),be=o[b]*Se,Ee=o[b+1]*Se,D=o[b+2]*Se;if(x<Fe)B=f[b]*.05,J=f[b+1]*.05,ee=f[b+2]*.05,G=0;else if(x<3.15){let se=Wt((x-(.75+.4*oe))/1.1),H=sr(se),ne=be+(t[b]-be)*H,le=Ee+(t[b+1]-Ee)*H,Y=D+(t[b+2]-D)*H,_e=4.2*(1-H)*(1-H),de=Math.cos(_e),Xe=Math.sin(_e);B=ne*de-le*Xe,J=ne*Xe+le*de,ee=Y,yt(ne,le,Y,d,Qe);let Be=Math.sin(Math.PI*se)*.35;B+=Qe[0]*Be,J+=Qe[1]*Be,ee+=Qe[2]*Be}else if(x<5){let se=3.15+.3*Wt((t[b]+2)/4)+.08*oe,H=Wt((x-se)/.75),ne=sr(H),le=Math.sin(Math.PI*H);yt(t[b],t[b+1],t[b+2],d,Qe),B=t[b]+(n[b]-t[b])*ne+le*(.5+Qe[0]*.7),J=t[b+1]+(n[b+1]-t[b+1])*ne+le*(.9*(ae-.3)+Qe[1]*.6),ee=t[b+2]+(n[b+2]-t[b+2])*ne+le*(2.4*oe+Qe[2]*.6)}else if(x<6.85){let se=Wt((x-(5+.2*Wt((n[b+1]-e+.8)/1.6)+.08*oe))/.8),H=sr(se),ne=n[b]+(s[b]-n[b])*H,le=n[b+1]+(s[b+1]-n[b+1])*H,Y=n[b+2]+(s[b+2]-n[b+2])*H,_e=Math.sin(Math.PI*se),de=2*Math.PI*H,Xe=Math.cos(de),Be=Math.sin(de),mt=1+.55*_e;B=(ne*Xe+Y*Be)*mt,ee=(-ne*Be+Y*Xe)*mt,J=le+_e*.25*(ae-.5)}else if(x<8.25){let se=Wt((x-(6.85+.12*oe))/1.05),H=Ge[0]+f[b]*.22*ae,ne=Ge[1]+f[b+1]*.22*ae,le=Ge[2]+f[b+2]*.22*ae;if(se<.5){let Y=s0(se/.5),_e=s[b]+(H-s[b])*Y,de=s[b+1]+(ne-s[b+1])*Y,Xe=s[b+2]+(le-s[b+2])*Y,Be=3.2*Y*Y,mt=Math.cos(Be),Mt=Math.sin(Be);B=(_e-Ge[0])*mt-(de-Ge[1])*Mt+Ge[0],J=(_e-Ge[0])*Mt+(de-Ge[1])*mt+Ge[1],ee=Xe}else{let Y=rr((se-.5)/.5),_e=H+(a[b]-H)*Y,de=ne+(a[b+1]-ne)*Y,Xe=le+(a[b+2]-le)*Y,Be=3.2*(1-Y)*(1-Y),mt=Math.cos(Be),Mt=Math.sin(Be);B=(_e-Ge[0])*mt-(de-Ge[1])*Mt+Ge[0],J=(_e-Ge[0])*Mt+(de-Ge[1])*mt+Ge[1],ee=Xe+Math.sin(Math.PI*Y)*1.2*f[b+2],q+=(r.c[b]-q)*Y,ie+=(r.c[b+1]-ie)*Y,fe+=(r.c[b+2]-fe)*Y}}else{let se=Wt((x-(8.25+.45*oe))/.95),H=sr(se);if(u[C]){let ne=ae*6.2832+x*.55,le=2.32+(oe-.5)*.3,Y=Math.cos(ne)*le,_e=Math.sin(ne)*le,de=.32,Xe=Y,Be=vt-_e*Math.sin(de)+f[b+1]*.05,mt=_e*Math.cos(de);B=a[b]+(Xe-a[b])*H,J=a[b+1]+(Be-a[b+1])*H,ee=a[b+2]+(mt-a[b+2])*H,G=.75;let Mt=H;q=r.c[b]+(h[b]-r.c[b])*Mt,ie=r.c[b+1]+(h[b+1]-r.c[b+1])*Mt,fe=r.c[b+2]+(h[b+2]-r.c[b+2])*Mt}else{let ne=1+2.2*ae;B=a[b]+f[b]*ne*H,J=a[b+1]+f[b+1]*ne*H+.4*H,ee=a[b+2]+f[b+2]*ne*H,G=1-H,q=r.c[b],ie=r.c[b+1],fe=r.c[b+2]}}O[b]=B,O[b+1]=J,O[b+2]=ee,K[b]=q,K[b+1]=ie,K[b+2]=fe,$[C]=G*.17}I.attributes.position.needsUpdate=!0,I.attributes.couleur.needsUpdate=!0,I.attributes.alpha.needsUpdate=!0}function L(x){let d=0,C=0;if(x<Fe)d=1.6+1.6*(x/Fe)+.3*Math.sin(x*40),C=.85+.15*(x/Fe);else if(x<1.2){let J=(x-Fe)/.9;d=4.5*(1-J)+.3,C=Math.pow(1-J,2)}else if(x>6.95&&x<8.1){let J=(x-6.95)/(rt-6.95);if(x<rt)d=.3+1.6*J*J,C=J;else{let ee=(x-rt)/(8.1-rt);d=4.2*(1-ee)+.3,C=Math.pow(1-ee,2)}}te.scale.setScalar(d),te.material.opacity=C,te.position.set(x<3?0:Ge[0],x<3?0:Ge[1],0),te.visible=C>.001,he.position.copy(te.position),he.scale.set(d*4.5,d*.09,1),he.material.opacity=C*.9,he.material.rotation=0,he.visible=te.visible;let b=[[qe,Fe,.9,9,[0,0,0]],[ct,rt,.8,6.5,Ge]];for(let[J,ee,G,q,ie]of b){let fe=(x-ee)/G;J.visible=fe>0&&fe<1,J.visible&&(J.scale.setScalar(.15+q*rr(fe)),J.material.opacity=Math.pow(1-fe,1.6),J.position.set(...ie))}let B=Math.max(Vn(.28,.4,x)*(1-Vn(1.6,2.4,x)),Vn(3.1,3.3,x)*(1-Vn(4,4.4,x)),Vn(4.95,5.15,x)*(1-Vn(5.8,6.2,x)),Vn(6.9,7.1,x)*(1-Vn(7.8,8.2,x)));Q.uniforms.damp.value=.35+.53*B,k.uniforms.uTemps.value=x,E.material.uniforms.uTemps.value=x,U.material.uniforms.uTemps.value=x,E.position.y=x*.08,U.position.y=x*.05,E.material.uniforms.uAlpha.value=.5+.5*Vn(0,1.2,x)}function Lt(x){let d=Wt((x-8.12)/.5);if(d<=0)return;let C=a0(d),b=gn.l*(.9+.1*C),B=gn.h*(.9+.1*C);ce.save(),ce.globalAlpha=Wt(d*1.8),ce.shadowColor="rgba(255,129,20,0.42)",ce.shadowBlur=90;let J=ce.createLinearGradient(0,gn.cy-B/2,0,gn.cy+B/2);J.addColorStop(0,"#fbf7f0"),J.addColorStop(1,"#efe6d6"),ce.fillStyle=J,ce.beginPath(),ce.roundRect(gn.cx-b/2,gn.cy-B/2,b,B,46),ce.fill(),ce.shadowBlur=0,ce.strokeStyle="rgba(255,255,255,0.7)",ce.lineWidth=2,ce.stroke();let ee=Wt((x-8.25)/.4);ce.globalAlpha=rr(ee);let G=gn.logoL*(.9+.1*C),q=G*i.height/i.width;ce.drawImage(i,gn.cx-G/2,gn.cy-q/2,G,q),ce.restore();let ie=rr(Wt((x-8.7)/.5)),fe=rr(Wt((x-8.9)/.55));if(ce.save(),ce.textAlign="center",ce.textBaseline="alphabetic",ie>0&&(ce.globalAlpha=ie,ce.font='700 44px "UB Surtitre"',ce.letterSpacing="8px",ce.fillStyle=Kh,ce.fillText(Hl.surtitre,rn/2,1232+24*(1-ie))),fe>0){ce.globalAlpha=fe,ce.letterSpacing="0px",ce.font='italic 500 68px "UB Phrase"';let oe=1338+24*(1-fe),ae=ce.measureText(Hl.phrase).width,Se=ce.measureText(".").width,be=rn/2-(ae+Se)/2;ce.textAlign="left",ce.fillStyle=i0,ce.fillText(Hl.phrase,be,oe),ce.fillStyle=Kh,ce.fillText(".",be+ae,oe)}ce.restore()}function Je(x){Ze(x),dt(x),L(x),Oe.render(),ce.globalAlpha=1,ce.drawImage(w,0,0),ce.fillStyle=Ce,ce.fillRect(0,0,rn,Xt),Lt(x)}if(t0){let x=-1;window.ubRendre=d=>{if(d!==x+1)throw new Error("Les images doivent \xEAtre rendues dans l'ordre (tra\xEEn\xE9es)");x=d,Je(d/Gl)},window.ubImage=()=>Pe.toDataURL("image/png"),window.ubInfos={W:rn,H:Xt,IPS:Gl,DUREE:_o,images:_o*Gl,langue:jh},window.ubPret=!0}else{let x=performance.now(),d=()=>{Je((performance.now()-x)/1e3%_o),requestAnimationFrame(d)};d()}}u0().catch(i=>{throw document.body.insertAdjacentHTML("beforeend",`<p style="color:#fff;font:16px sans-serif;padding:16px">Animation indisponible : ${i.message}</p>`),i});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
