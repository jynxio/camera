(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=s(o);fetch(o.href,a)}})();class dt{constructor(){this.drawType="LINE_STRIP",this.colorData=new Uint8ClampedArray(0),this.positionData=new Float32Array(0),this.transformMatrix=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}getTransformMatrix(){return this.transformMatrix}setTransformMatrix(t){return this.transformMatrix=t,this}getColorData(){return this.colorData}setColorData(t){return this.colorData=t,this}getPositionData(){return this.positionData}setPositionData(t){return this.positionData=t,this}getDrawType(){return this.drawType}setDrawType(t){return this.drawType=t,this}}class gt extends dt{constructor(){super(),this.setDrawType("TRIANGLES"),this.setColorData(new Uint8ClampedArray([52,88,191,52,88,191,52,88,191,52,88,191,52,88,191,52,88,191,52,88,191,52,88,191,52,88,191,52,88,191,52,88,191,52,88,191,52,88,191,52,88,191,52,88,191,52,88,191,52,88,191,52,88,191,238,198,92,238,198,92,238,198,92,238,198,92,238,198,92,238,198,92,238,198,92,238,198,92,238,198,92,238,198,92,238,198,92,238,198,92,238,198,92,238,198,92,238,198,92,238,198,92,238,198,92,238,198,92,235,85,40,235,85,40,235,85,40,235,85,40,235,85,40,235,85,40,229,57,127,229,57,127,229,57,127,229,57,127,229,57,127,229,57,127,88,145,85,88,145,85,88,145,85,88,145,85,88,145,85,88,145,85,229,57,127,229,57,127,229,57,127,229,57,127,229,57,127,229,57,127,235,85,40,235,85,40,235,85,40,235,85,40,235,85,40,235,85,40,229,57,127,229,57,127,229,57,127,229,57,127,229,57,127,229,57,127,88,145,85,88,145,85,88,145,85,88,145,85,88,145,85,88,145,85,229,57,127,229,57,127,229,57,127,229,57,127,229,57,127,229,57,127,88,145,85,88,145,85,88,145,85,88,145,85,88,145,85,88,145,85,135,124,247,135,124,247,135,124,247,135,124,247,135,124,247,135,124,247])),this.setPositionData(new Float32Array([0,0,0,0,150,0,30,0,0,0,150,0,30,150,0,30,0,0,30,0,0,30,30,0,100,0,0,30,30,0,100,30,0,100,0,0,30,60,0,30,90,0,67,60,0,30,90,0,67,90,0,67,60,0,0,0,30,30,0,30,0,150,30,0,150,30,30,0,30,30,150,30,30,0,30,100,0,30,30,30,30,30,30,30,100,0,30,100,30,30,30,60,30,67,60,30,30,90,30,30,90,30,67,60,30,67,90,30,0,0,0,100,0,0,100,0,30,0,0,0,100,0,30,0,0,30,100,0,0,100,30,0,100,30,30,100,0,0,100,30,30,100,0,30,30,30,0,30,30,30,100,30,30,30,30,0,100,30,30,100,30,0,30,30,0,30,60,30,30,30,30,30,30,0,30,60,0,30,60,30,30,60,0,67,60,30,30,60,30,30,60,0,67,60,0,67,60,30,67,60,0,67,90,30,67,60,30,67,60,0,67,90,0,67,90,30,30,90,0,30,90,30,67,90,30,30,90,0,67,90,30,67,90,0,30,90,0,30,150,30,30,90,30,30,90,0,30,150,0,30,150,30,0,150,0,0,150,30,30,150,30,0,150,0,30,150,30,30,150,0,0,0,0,0,0,30,0,150,30,0,0,0,0,150,30,0,150,0]))}}class mt{constructor(){this.models=new Set}add(...t){return t.forEach(s=>this.models.add(s)),this}remove(...t){return t.forEach(s=>this.models.delete(s)),this}get(){return Array.from(this.models)}}const ft=`#version 300 es

in vec4 a_color;
in vec4 a_position;

uniform mat4 u_matrix;

out vec4 v_color;

void main () {

    gl_Position = u_matrix * a_position;

    v_color = a_color;

}`,wt=`#version 300 es

precision highp float;

in vec4 v_color;

out vec4 outColor;

void main () {

    outColor = v_color;

}`;function K(r,t){const s=r[0],i=r[0*4+1],o=r[0*4+2],a=r[0*4+3],l=r[1*4+0],e=r[1*4+1],n=r[1*4+2],c=r[1*4+3],g=r[2*4+0],h=r[2*4+1],v=r[2*4+2],m=r[2*4+3],f=r[3*4+0],w=r[3*4+1],b=r[3*4+2],u=r[3*4+3],d=t[0*4+0],p=t[0*4+1],A=t[0*4+2],y=t[0*4+3],S=t[1*4+0],E=t[1*4+1],D=t[1*4+2],M=t[1*4+3],L=t[2*4+0],x=t[2*4+1],C=t[2*4+2],$=t[2*4+3],F=t[3*4+0],T=t[3*4+1],k=t[3*4+2],I=t[3*4+3];return[d*s+p*l+A*g+y*f,d*i+p*e+A*h+y*w,d*o+p*n+A*v+y*b,d*a+p*c+A*m+y*u,S*s+E*l+D*g+M*f,S*i+E*e+D*h+M*w,S*o+E*n+D*v+M*b,S*a+E*c+D*m+M*u,L*s+x*l+C*g+$*f,L*i+x*e+C*h+$*w,L*o+x*n+C*v+$*b,L*a+x*c+C*m+$*u,F*s+T*l+k*g+I*f,F*i+T*e+k*h+I*w,F*o+T*n+k*v+I*b,F*a+T*c+k*m+I*u]}function st(r){const t=r[0],s=r[0*4+1],i=r[0*4+2],o=r[0*4+3],a=r[1*4+0],l=r[1*4+1],e=r[1*4+2],n=r[1*4+3],c=r[2*4+0],g=r[2*4+1],h=r[2*4+2],v=r[2*4+3],m=r[3*4+0],f=r[3*4+1],w=r[3*4+2],b=r[3*4+3],u=h*b,d=w*v,p=e*b,A=w*n,y=e*v,S=h*n,E=i*b,D=w*o,M=i*v,L=h*o,x=i*n,C=e*o,$=c*f,F=m*g,T=a*f,k=m*l,I=a*g,B=c*l,H=t*f,N=m*s,z=t*g,j=c*s,Y=t*l,G=a*s,q=u*l+A*g+y*f-(d*l+p*g+S*f),tt=d*s+E*g+L*f-(u*s+D*g+M*f),et=p*s+D*l+x*f-(A*s+E*l+C*f),it=S*s+M*l+C*g-(y*s+L*l+x*g),_=1/(t*q+a*tt+c*et+m*it);return[_*q,_*tt,_*et,_*it,_*(d*a+p*c+S*m-(u*a+A*c+y*m)),_*(u*t+D*c+M*m-(d*t+E*c+L*m)),_*(A*t+E*a+C*m-(p*t+D*a+x*m)),_*(y*t+L*a+x*c-(S*t+M*a+C*c)),_*($*n+k*v+I*b-(F*n+T*v+B*b)),_*(F*o+H*v+j*b-($*o+N*v+z*b)),_*(T*o+N*n+Y*b-(k*o+H*n+G*b)),_*(B*o+z*n+G*v-(I*o+j*n+Y*v)),_*(T*h+B*w+F*e-(I*w+$*e+k*h)),_*(z*w+$*i+N*h-(H*h+j*w+F*i)),_*(H*e+G*w+k*i-(Y*w+T*i+N*e)),_*(Y*h+I*i+j*e-(z*e+G*h+B*i))]}function nt(r,t,s,i){const o=Math.tan(Math.PI*.5-.5*r),a=1/(s-i);return[o/t,0,0,0,0,o,0,0,0,0,(s+i)*a,-1,0,0,s*i*a*2,0]}function rt(r,t,s,i){return[2/r,0,0,0,0,2/t,0,0,0,0,2/(s-i),0,0,0,(i+s)/(s-i),1]}function W(r,t,s){return[1,0,0,0,0,1,0,0,0,0,1,0,r,t,s,1]}function vt(r){const t=Math.cos(r),s=Math.sin(r);return[t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1]}class At{constructor(t){this.canvas=t||document.createElement("canvas"),this.viewport=[0,0,this.canvas.width,this.canvas.height];const s=this.canvas.getContext("webgl2");if(!s)throw new Error("Your runtime does not support WebGL2.");this.gl=s,this.vertexShader=ot(this.gl,this.gl.VERTEX_SHADER,ft),this.fragmentShader=ot(this.gl,this.gl.FRAGMENT_SHADER,wt),this.program=bt(this.gl,this.vertexShader,this.fragmentShader);const i=this.gl.createVertexArray();this.gl.bindVertexArray(i);const o=this.gl.createBuffer(),a=this.gl.createBuffer();if(!o||!a)throw new Error("It's failed to execute the createBuffer method.");this.colorBuffer=o,this.positionBuffer=a,this.colorAttributeLocation=this.gl.getAttribLocation(this.program,"a_color"),this.positionAttributeLocation=this.gl.getAttribLocation(this.program,"a_position");const l=this.gl.getUniformLocation(this.program,"u_matrix");if(!l)throw new Error("It's failed to execute the getUniformLocation method.");this.matrixUniformLocation=l}render(t,s){t.get().forEach(i=>{this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.positionBuffer),this.gl.bufferData(this.gl.ARRAY_BUFFER,i.getPositionData(),this.gl.STATIC_DRAW),this.gl.enableVertexAttribArray(this.positionAttributeLocation),this.gl.vertexAttribPointer(this.positionAttributeLocation,3,this.gl.FLOAT,!1,0,0),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.colorBuffer),this.gl.bufferData(this.gl.ARRAY_BUFFER,i.getColorData(),this.gl.STATIC_DRAW),this.gl.enableVertexAttribArray(this.colorAttributeLocation),this.gl.vertexAttribPointer(this.colorAttributeLocation,3,this.gl.UNSIGNED_BYTE,!0,0,0),this.gl.viewport(...this.getViewport()),this.gl.clearColor(0,0,0,1),this.gl.enable(this.gl.DEPTH_TEST),this.gl.enable(this.gl.CULL_FACE),this.gl.useProgram(this.program);const o=s.getViewMatrix(),a=s.getProjectionMatrix(),l=i.getTransformMatrix();let e=a;e=K(e,o),e=K(e,l),this.gl.uniformMatrix4fv(this.matrixUniformLocation,!1,e),this.gl.drawArrays(xt(this.gl,i.getDrawType()),0,i.getPositionData().length/3)})}getDomElement(){return this.canvas}getViewport(){return this.viewport}setViewport(t,s,i,o){return this.viewport=[t,s,i,o],this}clear(){return this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this}}function ot(r,t,s){const i=r.createShader(t);if(!i)throw new Error("It's failed to create shader.");if(r.shaderSource(i,s),r.compileShader(i),r.getShaderParameter(i,r.COMPILE_STATUS))return i;const a=r.getShaderInfoLog(i);throw r.deleteShader(i),new Error(typeof a=="string"?a:"It;s failed to execute the getShaderParameter method.")}function bt(r,t,s){const i=r.createProgram();if(!i)throw new Error("It's failed to create WebGLProgram.");if(r.attachShader(i,t),r.attachShader(i,s),r.linkProgram(i),r.getProgramParameter(i,r.LINK_STATUS))return i;const a=r.getProgramInfoLog(i);throw r.deleteProgram(i),new Error(typeof a=="string"?a:"It's failed to execute the getProgramParameter method.")}function xt(r,t){switch(t){case"POINTS":return r.POINTS;case"LINES":return r.LINES;case"LINE_STRIP":return r.LINE_STRIP;case"LINE_LOOP":return r.LINE_LOOP;case"TRIANGLES":return r.TRIANGLES;case"TRIANGLE_STRIP":return r.TRIANGLE_STRIP;case"TRIANGLE_FAN":return r.TRIANGLE_FAN}}function yt(r,t){return[r[0]-t[0],r[1]-t[1],r[2]-t[2]]}function at(r,t){return[r[1]*t[2]-r[2]*t[1],r[2]*t[0]-r[0]*t[2],r[0]*t[1]-r[1]*t[0]]}function U(r){const t=Math.sqrt(r[0]*r[0]+r[1]*r[1]+r[2]*r[2]);if(t<Number.EPSILON)throw new Error("The unit vector could not be normalized.");return[r[0]/t,r[1]/t,r[2]/t]}class ut{constructor(){this.cameraMatrix=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],this.viewMatrix=st(this.cameraMatrix)}getViewMatrix(){return this.viewMatrix}getCameraMatrix(){return this.cameraMatrix}setCameraMatrix(t){return this.cameraMatrix=t,this.viewMatrix=st(this.cameraMatrix),this}lookAt(t){const s=[0,1,0],i=this.getCameraMatrix().slice(12,15),o=U(yt(i,t)),a=U(at(s,o)),l=U(at(o,a)),e=[a[0],a[1],a[2],0,l[0],l[1],l[2],0,o[0],o[1],o[2],0,i[0],i[1],i[2],1];return this.setCameraMatrix(e),this}}class V extends ut{constructor(t,s,i,o){super(),this.fov=t,this.aspect=s,this.near=i,this.far=o,this.projectionMatrix=nt(this.fov,this.aspect,this.near,this.far)}getFov(){return this.fov}setFov(t){return this.fov=t,this.updateProjectionMatrix(),this}getAspect(){return this.aspect}setAspect(t){return this.aspect=t,this.updateProjectionMatrix(),this}getNear(){return this.near}setNear(t){return this.near=t,this.updateProjectionMatrix(),this}getFar(){return this.far}setFar(t){return this.far=t,this.updateProjectionMatrix(),this}getProjectionMatrix(){return this.projectionMatrix}updateProjectionMatrix(){return this.projectionMatrix=nt(this.fov,this.aspect,this.near,this.far),this}}class lt extends dt{constructor(t){super(),this.camera=t,this.setDrawType("LINES"),this.updateProjection(),this.updateTransform()}updateTransform(){this.setTransformMatrix([...this.camera.getCameraMatrix()])}updateProjection(){let t,s,i,o,a,l;if(this.camera instanceof V){const v=this.camera.getFov(),m=this.camera.getAspect(),f=this.camera.getNear(),w=this.camera.getFar();s=f*Math.tan(v/2),t=s*m,i=f,a=w/f*s,o=w/f*t,l=w}else{const v=this.camera.getWidth(),m=this.camera.getHeight(),f=this.camera.getNear(),w=this.camera.getFar();t=v/2,s=m/2,i=f,o=t,a=s,l=w}const e=new Uint8ClampedArray(50*3),n=new Float32Array(50*3);[n[0],n[1],n[2]]=[0,0,0],[n[3],n[4],n[5]]=[+t,+s,-i],[n[6],n[7],n[8]]=[0,0,0],[n[9],n[10],n[11]]=[-t,+s,-i],[n[12],n[13],n[14]]=[0,0,0],[n[15],n[16],n[17]]=[-t,-s,-i],[n[18],n[19],n[20]]=[0,0,0],[n[21],n[22],n[23]]=[+t,-s,-i],[e[0],e[1],e[2]]=[200,59,52],[e[3],e[4],e[5]]=[200,59,52],[e[6],e[7],e[8]]=[200,59,52],[e[9],e[10],e[11]]=[200,59,52],[e[12],e[13],e[14]]=[200,59,52],[e[15],e[16],e[17]]=[200,59,52],[e[18],e[19],e[20]]=[200,59,52],[e[21],e[22],e[23]]=[200,59,52],[n[24],n[25],n[26]]=[+t,+s,-i],[n[27],n[28],n[29]]=[+o,+a,-l],[n[30],n[31],n[32]]=[-t,+s,-i],[n[33],n[34],n[35]]=[-o,+a,-l],[n[36],n[37],n[38]]=[-t,-s,-i],[n[39],n[40],n[41]]=[-o,-a,-l],[n[42],n[43],n[44]]=[+t,-s,-i],[n[45],n[46],n[47]]=[+o,-a,-l],[e[24],e[25],e[26]]=[245,202,80],[e[27],e[28],e[29]]=[245,202,80],[e[30],e[31],e[32]]=[245,202,80],[e[33],e[34],e[35]]=[245,202,80],[e[36],e[37],e[38]]=[245,202,80],[e[39],e[40],e[41]]=[245,202,80],[e[42],e[43],e[44]]=[245,202,80],[e[45],e[46],e[47]]=[245,202,80],[n[48],n[49],n[50]]=[+t,+s,-i],[n[51],n[52],n[53]]=[-t,+s,-i],[n[54],n[55],n[56]]=[-t,+s,-i],[n[57],n[58],n[59]]=[-t,-s,-i],[n[60],n[61],n[62]]=[-t,-s,-i],[n[63],n[64],n[65]]=[+t,-s,-i],[n[66],n[67],n[68]]=[+t,-s,-i],[n[69],n[70],n[71]]=[+t,+s,-i],[e[48],e[49],e[50]]=[200,59,52],[e[51],e[52],e[53]]=[200,59,52],[e[54],e[55],e[56]]=[200,59,52],[e[57],e[58],e[59]]=[200,59,52],[e[60],e[61],e[62]]=[200,59,52],[e[63],e[64],e[65]]=[200,59,52],[e[66],e[67],e[68]]=[200,59,52],[e[69],e[70],e[71]]=[200,59,52],[n[72],n[73],n[74]]=[+o,+a,-l],[n[75],n[76],n[77]]=[-o,+a,-l],[n[78],n[79],n[80]]=[-o,+a,-l],[n[81],n[82],n[83]]=[-o,-a,-l],[n[84],n[85],n[86]]=[-o,-a,-l],[n[87],n[88],n[89]]=[+o,-a,-l],[n[90],n[91],n[92]]=[+o,-a,-l],[n[93],n[94],n[95]]=[+o,+a,-l],[e[72],e[73],e[74]]=[245,202,80],[e[75],e[76],e[77]]=[245,202,80],[e[78],e[79],e[80]]=[245,202,80],[e[81],e[82],e[83]]=[245,202,80],[e[84],e[85],e[86]]=[245,202,80],[e[87],e[88],e[89]]=[245,202,80],[e[90],e[91],e[92]]=[245,202,80],[e[93],e[94],e[95]]=[245,202,80],[n[96],n[97],n[98]]=[0,+s,-i],[n[99],n[100],n[101]]=[0,-s,-i],[n[102],n[103],n[104]]=[+t,0,-i],[n[105],n[106],n[107]]=[-t,0,-i],[e[96],e[97],e[98]]=[50,50,50],[e[99],e[100],e[101]]=[50,50,50],[e[102],e[103],e[104]]=[50,50,50],[e[105],e[106],e[107]]=[50,50,50],[n[108],n[109],n[110]]=[0,+a,-l],[n[111],n[112],n[113]]=[0,-a,-l],[n[114],n[115],n[116]]=[+o,0,-l],[n[117],n[118],n[119]]=[-o,0,-l],[e[108],e[109],e[110]]=[50,50,50],[e[111],e[112],e[113]]=[50,50,50],[e[114],e[115],e[116]]=[50,50,50],[e[117],e[118],e[119]]=[50,50,50];const c=[+t*.6,s*1.1,-i],g=[-t*.6,s*1.1,-i],h=[0,s*1.1+t*.6*3**.5,-i];return[n[120],n[121],n[122]]=[...c],[n[123],n[124],n[125]]=[...g],[n[126],n[127],n[128]]=[...g],[n[129],n[130],n[131]]=[...h],[n[132],n[133],n[134]]=[...h],[n[135],n[136],n[137]]=[...c],[e[120],e[121],e[122]]=[101,213,63],[e[123],e[124],e[125]]=[101,213,63],[e[126],e[127],e[128]]=[101,213,63],[e[129],e[130],e[131]]=[101,213,63],[e[132],e[133],e[134]]=[101,213,63],[e[135],e[136],e[137]]=[101,213,63],[n[138],n[139],n[140]]=[0,0,0],[n[141],n[142],n[143]]=[0,0,-i],[n[144],n[145],n[146]]=[0,0,-i],[n[147],n[148],n[149]]=[0,0,-l],[e[138],e[139],e[140]]=[50,50,50],[e[141],e[142],e[143]]=[50,50,50],[e[144],e[145],e[146]]=[50,50,50],[e[147],e[148],e[149]]=[50,50,50],this.setColorData(e),this.setPositionData(n),this}}class _t extends ut{constructor(t,s,i,o){super(),this.width=t,this.height=s,this.near=i,this.far=o,this.projectionMatrix=rt(this.width,this.height,this.near,this.far)}getWidth(){return this.width}setWidth(t){return this.width=t,this.updateProjectionMatrix(),this}getHeight(){return this.height}setHeight(t){return this.height=t,this.updateProjectionMatrix(),this}getNear(){return this.near}setNear(t){return this.near=t,this.updateProjectionMatrix(),this}getFar(){return this.far}setFar(t){return this.far=t,this.updateProjectionMatrix(),this}getProjectionMatrix(){return this.projectionMatrix}updateProjectionMatrix(){return this.projectionMatrix=rt(this.width,this.height,this.near,this.far),this}}var Et=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ct(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var pt={exports:{}};(function(r,t){(function(s,i){r.exports=i()})(Et,function(){var s=function(){function i(m){return l.appendChild(m.dom),m}function o(m){for(var f=0;f<l.children.length;f++)l.children[f].style.display=f===m?"block":"none";a=m}var a=0,l=document.createElement("div");l.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",l.addEventListener("click",function(m){m.preventDefault(),o(++a%l.children.length)},!1);var e=(performance||Date).now(),n=e,c=0,g=i(new s.Panel("FPS","#0ff","#002")),h=i(new s.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var v=i(new s.Panel("MB","#f08","#201"));return o(0),{REVISION:16,dom:l,addPanel:i,showPanel:o,begin:function(){e=(performance||Date).now()},end:function(){c++;var m=(performance||Date).now();if(h.update(m-e,200),m>n+1e3&&(g.update(1e3*c/(m-n),100),n=m,c=0,v)){var f=performance.memory;v.update(f.usedJSHeapSize/1048576,f.jsHeapSizeLimit/1048576)}return m},update:function(){e=this.end()},domElement:l,setMode:o}};return s.Panel=function(i,o,a){var l=1/0,e=0,n=Math.round,c=n(window.devicePixelRatio||1),g=80*c,h=48*c,v=3*c,m=2*c,f=3*c,w=15*c,b=74*c,u=30*c,d=document.createElement("canvas");d.width=g,d.height=h,d.style.cssText="width:80px;height:48px";var p=d.getContext("2d");return p.font="bold "+9*c+"px Helvetica,Arial,sans-serif",p.textBaseline="top",p.fillStyle=a,p.fillRect(0,0,g,h),p.fillStyle=o,p.fillText(i,v,m),p.fillRect(f,w,b,u),p.fillStyle=a,p.globalAlpha=.9,p.fillRect(f,w,b,u),{dom:d,update:function(A,y){l=Math.min(l,A),e=Math.max(e,A),p.fillStyle=a,p.globalAlpha=1,p.fillRect(0,0,g,w),p.fillStyle=o,p.fillText(n(A)+" "+i+" ("+n(l)+"-"+n(e)+")",v,m),p.drawImage(d,f+c,w,b-c,u,f,w,b-c,u),p.fillRect(f+b-c,w,c,u),p.fillStyle=a,p.globalAlpha=.9,p.fillRect(f+b-c,w,c,n((1-A/y)*u))}}},s})})(pt);var $t=pt.exports;const St=Ct($t);/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.1
 * @author George Michael Brower
 * @license MIT
 */class P{constructor(t,s,i,o,a="div"){this.parent=t,this.object=s,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(a),this.domElement.classList.add("controller"),this.domElement.classList.add(o),this.$name=document.createElement("div"),this.$name.classList.add("name"),P.nextNameID=P.nextNameID||0,this.$name.id=`lil-gui-name-${++P.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",l=>l.stopPropagation()),this.domElement.addEventListener("keyup",l=>l.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(t){return this._name=t,this.$name.innerHTML=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const s=this.parent.add(this.object,this.property,t);return s.name(this._name),this.destroy(),s}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.object[this.property]=t,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Mt extends P{constructor(t,s,i){super(t,s,i,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Z(r){let t,s;return(t=r.match(/(#|0x)?([a-f0-9]{6})/i))?s=t[2]:(t=r.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?s=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=r.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(s=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),s?"#"+s:!1}const Lt={isPrimitive:!0,match:r=>typeof r=="string",fromHexString:Z,toHexString:Z},R={isPrimitive:!0,match:r=>typeof r=="number",fromHexString:r=>parseInt(r.substring(1),16),toHexString:r=>"#"+r.toString(16).padStart(6,0)},Ft={isPrimitive:!1,match:r=>Array.isArray(r),fromHexString(r,t,s=1){const i=R.fromHexString(r);t[0]=(i>>16&255)/255*s,t[1]=(i>>8&255)/255*s,t[2]=(i&255)/255*s},toHexString([r,t,s],i=1){i=255/i;const o=r*i<<16^t*i<<8^s*i<<0;return R.toHexString(o)}},Dt={isPrimitive:!1,match:r=>Object(r)===r,fromHexString(r,t,s=1){const i=R.fromHexString(r);t.r=(i>>16&255)/255*s,t.g=(i>>8&255)/255*s,t.b=(i&255)/255*s},toHexString({r,g:t,b:s},i=1){i=255/i;const o=r*i<<16^t*i<<8^s*i<<0;return R.toHexString(o)}},Pt=[Lt,R,Ft,Dt];function Tt(r){return Pt.find(t=>t.match(r))}class kt extends P{constructor(t,s,i,o){super(t,s,i,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Tt(this.initialValue),this._rgbScale=o,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const a=Z(this.$text.value);a&&this._setValueFromHexString(a)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const s=this._format.fromHexString(t);this.setValue(s)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class X extends P{constructor(t,s,i){super(t,s,i,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",o=>{o.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class It extends P{constructor(t,s,i,o,a,l){super(t,s,i,"number"),this._initInput(),this.min(o),this.max(a);const e=l!==void 0;this.step(e?l:this._getImplicitStep(),e),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,s=!0){return this._step=t,this._stepExplicit=s,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let s=(t-this._min)/(this._max-this._min);s=Math.max(0,Math.min(s,1)),this.$fill.style.width=s*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const s=()=>{let d=parseFloat(this.$input.value);isNaN(d)||(this._stepExplicit&&(d=this._snap(d)),this.setValue(this._clamp(d)))},i=d=>{const p=parseFloat(this.$input.value);isNaN(p)||(this._snapClampSetValue(p+d),this.$input.value=this.getValue())},o=d=>{d.key==="Enter"&&this.$input.blur(),d.code==="ArrowUp"&&(d.preventDefault(),i(this._step*this._arrowKeyMultiplier(d))),d.code==="ArrowDown"&&(d.preventDefault(),i(this._step*this._arrowKeyMultiplier(d)*-1))},a=d=>{this._inputFocused&&(d.preventDefault(),i(this._step*this._normalizeMouseWheel(d)))};let l=!1,e,n,c,g,h;const v=5,m=d=>{e=d.clientX,n=c=d.clientY,l=!0,g=this.getValue(),h=0,window.addEventListener("mousemove",f),window.addEventListener("mouseup",w)},f=d=>{if(l){const p=d.clientX-e,A=d.clientY-n;Math.abs(A)>v?(d.preventDefault(),this.$input.blur(),l=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(p)>v&&w()}if(!l){const p=d.clientY-c;h-=p*this._step*this._arrowKeyMultiplier(d),g+h>this._max?h=this._max-g:g+h<this._min&&(h=this._min-g),this._snapClampSetValue(g+h)}c=d.clientY},w=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",f),window.removeEventListener("mouseup",w)},b=()=>{this._inputFocused=!0},u=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",s),this.$input.addEventListener("keydown",o),this.$input.addEventListener("wheel",a,{passive:!1}),this.$input.addEventListener("mousedown",m),this.$input.addEventListener("focus",b),this.$input.addEventListener("blur",u)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(u,d,p,A,y)=>(u-d)/(p-d)*(y-A)+A,s=u=>{const d=this.$slider.getBoundingClientRect();let p=t(u,d.left,d.right,this._min,this._max);this._snapClampSetValue(p)},i=u=>{this._setDraggingStyle(!0),s(u.clientX),window.addEventListener("mousemove",o),window.addEventListener("mouseup",a)},o=u=>{s(u.clientX)},a=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",o),window.removeEventListener("mouseup",a)};let l=!1,e,n;const c=u=>{u.preventDefault(),this._setDraggingStyle(!0),s(u.touches[0].clientX),l=!1},g=u=>{u.touches.length>1||(this._hasScrollBar?(e=u.touches[0].clientX,n=u.touches[0].clientY,l=!0):c(u),window.addEventListener("touchmove",h,{passive:!1}),window.addEventListener("touchend",v))},h=u=>{if(l){const d=u.touches[0].clientX-e,p=u.touches[0].clientY-n;Math.abs(d)>Math.abs(p)?c(u):(window.removeEventListener("touchmove",h),window.removeEventListener("touchend",v))}else u.preventDefault(),s(u.touches[0].clientX)},v=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",h),window.removeEventListener("touchend",v)},m=this._callOnFinishChange.bind(this),f=400;let w;const b=u=>{if(Math.abs(u.deltaX)<Math.abs(u.deltaY)&&this._hasScrollBar)return;u.preventDefault();const p=this._normalizeMouseWheel(u)*this._step;this._snapClampSetValue(this.getValue()+p),this.$input.value=this.getValue(),clearTimeout(w),w=setTimeout(m,f)};this.$slider.addEventListener("mousedown",i),this.$slider.addEventListener("touchstart",g,{passive:!1}),this.$slider.addEventListener("wheel",b,{passive:!1})}_setDraggingStyle(t,s="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${s}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:s,deltaY:i}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(s=0,i=-t.wheelDelta/120,i*=this._stepExplicit?1:10),s+-i}_arrowKeyMultiplier(t){let s=this._stepExplicit?1:10;return t.shiftKey?s*=10:t.altKey&&(s/=10),s}_snap(t){const s=Math.round(t/this._step)*this._step;return parseFloat(s.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Ot extends P{constructor(t,s,i,o){super(t,s,i,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(o)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(s=>{const i=document.createElement("option");i.innerHTML=s,this.$select.appendChild(i)}),this.updateDisplay(),this}updateDisplay(){const t=this.getValue(),s=this._values.indexOf(t);return this.$select.selectedIndex=s,this.$display.innerHTML=s===-1?t:this._names[s],this}}class Vt extends P{constructor(t,s,i){super(t,s,i,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",o=>{o.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const Rt=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: none;
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
  }
  .lil-gui button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function Bt(r){const t=document.createElement("style");t.innerHTML=r;const s=document.querySelector("head link[rel=stylesheet], head style");s?document.head.insertBefore(t,s):document.head.appendChild(t)}let ht=!1;class Q{constructor({parent:t,autoPlace:s=t===void 0,container:i,width:o,title:a="Controls",closeFolders:l=!1,injectStyles:e=!0,touchStyles:n=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",c=>{(c.code==="Enter"||c.code==="Space")&&(c.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(a),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),n&&this.domElement.classList.add("allow-touch-styles"),!ht&&e&&(Bt(Rt),ht=!0),i?i.appendChild(this.domElement):s&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),o&&this.domElement.style.setProperty("--width",o+"px"),this._closeFolders=l}add(t,s,i,o,a){if(Object(i)===i)return new Ot(this,t,s,i);const l=t[s];switch(typeof l){case"number":return new It(this,t,s,i,o,a);case"boolean":return new Mt(this,t,s);case"string":return new Vt(this,t,s);case"function":return new X(this,t,s)}console.error(`gui.add failed
	property:`,s,`
	object:`,t,`
	value:`,l)}addColor(t,s,i=1){return new kt(this,t,s,i)}addFolder(t){const s=new Q({parent:this,title:t});return this.root._closeFolders&&s.close(),s}load(t,s=!0){return t.controllers&&this.controllers.forEach(i=>{i instanceof X||i._name in t.controllers&&i.load(t.controllers[i._name])}),s&&t.folders&&this.folders.forEach(i=>{i._title in t.folders&&i.load(t.folders[i._title])}),this}save(t=!0){const s={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof X)){if(i._name in s.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);s.controllers[i._name]=i.save()}}),t&&this.folders.forEach(i=>{if(i._title in s.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);s.folders[i._title]=i.save()}),s}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const s=this.$children.clientHeight;this.$children.style.height=s+"px",this.domElement.classList.add("transition");const i=a=>{a.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);const o=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=o+"px"})}),this}title(t){return this._title=t,this.$title.innerHTML=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(s=>{t=t.concat(s.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(s=>{t=t.concat(s.foldersRecursive())}),t}}function J(r){return r/180*Math.PI}class Ht{constructor(){const t=new St;t.showPanel(0),t.dom.style.setProperty("right","0"),t.dom.style.setProperty("left","auto"),document.body.prepend(t.dom);let s="perspective";const i=new Q().close(),o={fov:40,aspect:1,near:100,far:400},a={width:200,height:200,near:200,far:400},l=[i.add(o,"fov",10,70,.6).name("Fov").onChange(c).show(),i.add(o,"aspect",.5,2,.015).name("Aspect").onChange(c).show(),i.add(o,"near",50,300,2.5).name("Near").onChange(c).show(),i.add(o,"far",300,500,2).name("Far").onChange(c).show()],e=[i.add(a,"width",100,400,3).name("Width").onChange(c).hide(),i.add(a,"height",100,400,3).name("Height").onChange(c).hide(),i.add(a,"near",100,300,2).name("Near").onChange(c).hide(),i.add(a,"far",300,600,3).name("Far").onChange(c).hide()];i.add({switch:n},"switch");function n(){if(s=s==="perspective"?"orthographic":"perspective",s==="perspective"){l.forEach(x=>x.show()),e.forEach(x=>x.hide()),A=b,y=d,E=O(h,b);return}l.forEach(x=>x.hide()),e.forEach(x=>x.show()),A=u,y=p,E=O(h,u)}function c(){A instanceof V?A.setFov(J(o.fov)).setAspect(o.aspect).setNear(o.near).setFar(o.far):A.setWidth(a.width).setHeight(a.height).setNear(a.near).setFar(a.far),y.updateProjection(),E=O(h,A)}const g=new At,h=g.getDomElement();this.domElement=h,h.style.setProperty("inline-size","100vw"),h.style.setProperty("block-size","100vh"),h.width=Math.round(innerWidth*devicePixelRatio),h.height=Math.round(innerHeight*devicePixelRatio);const v=new mt,m=new gt;v.add(m),m.setTransformMatrix(W(-50,-75,-15));const f=h.width<h.height?h.width/h.height*2:h.width/h.height/2,w=new V(J(60),f,1,2e3);w.setCameraMatrix(W(400,400,400)),w.lookAt([0,0,0]);const b=new V(J(o.fov),o.aspect,o.near,o.far),u=new _t(a.width,a.height,a.near,a.far),d=new lt(b),p=new lt(u);let A=s==="perspective"?b:u,y=s==="perspective"?d:p,S=ct(h),E=O(h,A);new ResizeObserver(x=>{for(const C of x){h.width=Math.round(C.contentBoxSize[0].inlineSize*devicePixelRatio),h.height=Math.round(C.contentBoxSize[0].blockSize*devicePixelRatio);const $=h.width<h.height?h.width/h.height*2:h.width/h.height/2;w.setAspect($)}S=ct(h),E=O(h,A)}).observe(h,{box:"content-box"});const M=performance.now(),L=W(150,250,0);requestAnimationFrame(function x(){t.begin();const C=(performance.now()-M)/1e3*Math.PI/10,$=vt(C),F=K($,L);A.setCameraMatrix(F),A.lookAt([0,0,0]),y.updateTransform(),g.clear(),v.add(y),g.setViewport(...S),g.render(v,w),v.remove(y),g.setViewport(...E),g.render(v,A),requestAnimationFrame(x),t.end()})}getDomElement(){return this.domElement}}function ct(r){return r.width>=r.height?[0,0,r.width/2,r.height]:[0,0,r.width,r.height/2]}function O(r,t){const s=r.width>=r.height?r.width/2:r.width,i=r.width>=r.height?r.height:r.height/2,o=s/i,a=t instanceof V?t.getAspect():t.getWidth()/t.getHeight();if(a>=o){const c=s,g=c/a,h=(i-g)/2;return r.width>=r.height?[r.width/2,h,c,g]:[0,r.height/2+h,c,g]}const l=i,e=l*a,n=(s-e)/2;return r.width>=r.height?[r.width/2+n,0,e,l]:[n,r.height/2,e,l]}const Nt=new Ht;document.body.prepend(Nt.getDomElement());
