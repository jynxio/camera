(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function i(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=i(o);fetch(o.href,a)}})();class ut{constructor(){this.drawType="LINE_STRIP",this.colorData=new Uint8ClampedArray(0),this.positionData=new Float32Array(0),this.transformMatrix=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}getTransformMatrix(){return this.transformMatrix}setTransformMatrix(t){return this.transformMatrix=t,this}getColorData(){return this.colorData}setColorData(t){return this.colorData=t,this}getPositionData(){return this.positionData}setPositionData(t){return this.positionData=t,this}getDrawType(){return this.drawType}setDrawType(t){return this.drawType=t,this}}class gt extends ut{constructor(){super(),this.setDrawType("TRIANGLES"),this.setColorData(new Uint8ClampedArray([52,88,191,52,88,191,52,88,191,52,88,191,52,88,191,52,88,191,52,88,191,52,88,191,52,88,191,52,88,191,52,88,191,52,88,191,52,88,191,52,88,191,52,88,191,52,88,191,52,88,191,52,88,191,238,198,92,238,198,92,238,198,92,238,198,92,238,198,92,238,198,92,238,198,92,238,198,92,238,198,92,238,198,92,238,198,92,238,198,92,238,198,92,238,198,92,238,198,92,238,198,92,238,198,92,238,198,92,235,85,40,235,85,40,235,85,40,235,85,40,235,85,40,235,85,40,229,57,127,229,57,127,229,57,127,229,57,127,229,57,127,229,57,127,88,145,85,88,145,85,88,145,85,88,145,85,88,145,85,88,145,85,229,57,127,229,57,127,229,57,127,229,57,127,229,57,127,229,57,127,235,85,40,235,85,40,235,85,40,235,85,40,235,85,40,235,85,40,229,57,127,229,57,127,229,57,127,229,57,127,229,57,127,229,57,127,88,145,85,88,145,85,88,145,85,88,145,85,88,145,85,88,145,85,229,57,127,229,57,127,229,57,127,229,57,127,229,57,127,229,57,127,88,145,85,88,145,85,88,145,85,88,145,85,88,145,85,88,145,85,135,124,247,135,124,247,135,124,247,135,124,247,135,124,247,135,124,247])),this.setPositionData(new Float32Array([0,0,0,0,150,0,30,0,0,0,150,0,30,150,0,30,0,0,30,0,0,30,30,0,100,0,0,30,30,0,100,30,0,100,0,0,30,60,0,30,90,0,67,60,0,30,90,0,67,90,0,67,60,0,0,0,30,30,0,30,0,150,30,0,150,30,30,0,30,30,150,30,30,0,30,100,0,30,30,30,30,30,30,30,100,0,30,100,30,30,30,60,30,67,60,30,30,90,30,30,90,30,67,60,30,67,90,30,0,0,0,100,0,0,100,0,30,0,0,0,100,0,30,0,0,30,100,0,0,100,30,0,100,30,30,100,0,0,100,30,30,100,0,30,30,30,0,30,30,30,100,30,30,30,30,0,100,30,30,100,30,0,30,30,0,30,60,30,30,30,30,30,30,0,30,60,0,30,60,30,30,60,0,67,60,30,30,60,30,30,60,0,67,60,0,67,60,30,67,60,0,67,90,30,67,60,30,67,60,0,67,90,0,67,90,30,30,90,0,30,90,30,67,90,30,30,90,0,67,90,30,67,90,0,30,90,0,30,150,30,30,90,30,30,90,0,30,150,0,30,150,30,0,150,0,0,150,30,30,150,30,0,150,0,30,150,30,30,150,0,0,0,0,0,0,30,0,150,30,0,0,0,0,150,30,0,150,0]))}}class mt{constructor(){this.models=new Set}add(...t){return t.forEach(i=>this.models.add(i)),this}remove(...t){return t.forEach(i=>this.models.delete(i)),this}get(){return Array.from(this.models)}}const ft=`#version 300 es

in vec4 a_color;
in vec4 a_position;

uniform mat4 u_matrix;

out vec4 v_color;

void main () {

    gl_Position = u_matrix * a_position;

    v_color = a_color;

}`,vt=`#version 300 es

precision highp float;

in vec4 v_color;

out vec4 outColor;

void main () {

    outColor = v_color;

}`;function K(r,t){const i=r[0],s=r[0*4+1],o=r[0*4+2],a=r[0*4+3],l=r[1*4+0],e=r[1*4+1],n=r[1*4+2],c=r[1*4+3],u=r[2*4+0],d=r[2*4+1],v=r[2*4+2],p=r[2*4+3],g=r[3*4+0],f=r[3*4+1],A=r[3*4+2],h=r[3*4+3],w=t[0*4+0],m=t[0*4+1],b=t[0*4+2],y=t[0*4+3],S=t[1*4+0],E=t[1*4+1],D=t[1*4+2],M=t[1*4+3],L=t[2*4+0],x=t[2*4+1],C=t[2*4+2],$=t[2*4+3],F=t[3*4+0],k=t[3*4+1],T=t[3*4+2],I=t[3*4+3];return[w*i+m*l+b*u+y*g,w*s+m*e+b*d+y*f,w*o+m*n+b*v+y*A,w*a+m*c+b*p+y*h,S*i+E*l+D*u+M*g,S*s+E*e+D*d+M*f,S*o+E*n+D*v+M*A,S*a+E*c+D*p+M*h,L*i+x*l+C*u+$*g,L*s+x*e+C*d+$*f,L*o+x*n+C*v+$*A,L*a+x*c+C*p+$*h,F*i+k*l+T*u+I*g,F*s+k*e+T*d+I*f,F*o+k*n+T*v+I*A,F*a+k*c+T*p+I*h]}function nt(r){const t=r[0],i=r[0*4+1],s=r[0*4+2],o=r[0*4+3],a=r[1*4+0],l=r[1*4+1],e=r[1*4+2],n=r[1*4+3],c=r[2*4+0],u=r[2*4+1],d=r[2*4+2],v=r[2*4+3],p=r[3*4+0],g=r[3*4+1],f=r[3*4+2],A=r[3*4+3],h=d*A,w=f*v,m=e*A,b=f*n,y=e*v,S=d*n,E=s*A,D=f*o,M=s*v,L=d*o,x=s*n,C=e*o,$=c*g,F=p*u,k=a*g,T=p*l,I=a*u,B=c*l,H=t*g,N=p*i,z=t*u,Y=c*i,j=t*l,G=a*i,tt=h*l+b*u+y*g-(w*l+m*u+S*g),et=w*i+E*u+L*g-(h*i+D*u+M*g),it=m*i+D*l+x*g-(b*i+E*l+C*g),st=S*i+M*l+C*u-(y*i+L*l+x*u),_=1/(t*tt+a*et+c*it+p*st);return[_*tt,_*et,_*it,_*st,_*(w*a+m*c+S*p-(h*a+b*c+y*p)),_*(h*t+D*c+M*p-(w*t+E*c+L*p)),_*(b*t+E*a+C*p-(m*t+D*a+x*p)),_*(y*t+L*a+x*c-(S*t+M*a+C*c)),_*($*n+T*v+I*A-(F*n+k*v+B*A)),_*(F*o+H*v+Y*A-($*o+N*v+z*A)),_*(k*o+N*n+j*A-(T*o+H*n+G*A)),_*(B*o+z*n+G*v-(I*o+Y*n+j*v)),_*(k*d+B*f+F*e-(I*f+$*e+T*d)),_*(z*f+$*s+N*d-(H*d+Y*f+F*s)),_*(H*e+G*f+T*s-(j*f+k*s+N*e)),_*(j*d+I*s+Y*e-(z*e+G*d+B*s))]}function rt(r,t,i,s){const o=Math.tan(Math.PI*.5-.5*r),a=1/(i-s);return[o/t,0,0,0,0,o,0,0,0,0,(i+s)*a,-1,0,0,i*s*a*2,0]}function ot(r,t,i,s){return[2/r,0,0,0,0,2/t,0,0,0,0,2/(i-s),0,0,0,(s+i)/(i-s),1]}function W(r,t,i){return[1,0,0,0,0,1,0,0,0,0,1,0,r,t,i,1]}function wt(r){const t=Math.cos(r),i=Math.sin(r);return[t,0,-i,0,0,1,0,0,i,0,t,0,0,0,0,1]}class At{constructor(t){this.canvas=t||document.createElement("canvas"),this.viewport=[0,0,this.canvas.width,this.canvas.height];const i=this.canvas.getContext("webgl2");if(!i)throw new Error("Your runtime does not support WebGL2.");this.gl=i,this.vertexShader=at(this.gl,this.gl.VERTEX_SHADER,ft),this.fragmentShader=at(this.gl,this.gl.FRAGMENT_SHADER,vt),this.program=bt(this.gl,this.vertexShader,this.fragmentShader);const s=this.gl.createVertexArray();this.gl.bindVertexArray(s);const o=this.gl.createBuffer(),a=this.gl.createBuffer();if(!o||!a)throw new Error("It's failed to execute the createBuffer method.");this.colorBuffer=o,this.positionBuffer=a,this.colorAttributeLocation=this.gl.getAttribLocation(this.program,"a_color"),this.positionAttributeLocation=this.gl.getAttribLocation(this.program,"a_position");const l=this.gl.getUniformLocation(this.program,"u_matrix");if(!l)throw new Error("It's failed to execute the getUniformLocation method.");this.matrixUniformLocation=l}render(t,i){t.get().forEach(s=>{this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.positionBuffer),this.gl.bufferData(this.gl.ARRAY_BUFFER,s.getPositionData(),this.gl.STATIC_DRAW),this.gl.enableVertexAttribArray(this.positionAttributeLocation),this.gl.vertexAttribPointer(this.positionAttributeLocation,3,this.gl.FLOAT,!1,0,0),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.colorBuffer),this.gl.bufferData(this.gl.ARRAY_BUFFER,s.getColorData(),this.gl.STATIC_DRAW),this.gl.enableVertexAttribArray(this.colorAttributeLocation),this.gl.vertexAttribPointer(this.colorAttributeLocation,3,this.gl.UNSIGNED_BYTE,!0,0,0),this.gl.viewport(...this.getViewport()),this.gl.clearColor(0,0,0,1),this.gl.enable(this.gl.DEPTH_TEST),this.gl.enable(this.gl.CULL_FACE),this.gl.useProgram(this.program);const o=i.getViewMatrix(),a=i.getProjectionMatrix(),l=s.getTransformMatrix();let e=a;e=K(e,o),e=K(e,l),this.gl.uniformMatrix4fv(this.matrixUniformLocation,!1,e),this.gl.drawArrays(xt(this.gl,s.getDrawType()),0,s.getPositionData().length/3)})}getDomElement(){return this.canvas}getViewport(){return this.viewport}setViewport(t,i,s,o){return this.viewport=[t,i,s,o],this}clear(){return this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this}}function at(r,t,i){const s=r.createShader(t);if(!s)throw new Error("It's failed to create shader.");if(r.shaderSource(s,i),r.compileShader(s),r.getShaderParameter(s,r.COMPILE_STATUS))return s;const a=r.getShaderInfoLog(s);throw r.deleteShader(s),new Error(typeof a=="string"?a:"It;s failed to execute the getShaderParameter method.")}function bt(r,t,i){const s=r.createProgram();if(!s)throw new Error("It's failed to create WebGLProgram.");if(r.attachShader(s,t),r.attachShader(s,i),r.linkProgram(s),r.getProgramParameter(s,r.LINK_STATUS))return s;const a=r.getProgramInfoLog(s);throw r.deleteProgram(s),new Error(typeof a=="string"?a:"It's failed to execute the getProgramParameter method.")}function xt(r,t){switch(t){case"POINTS":return r.POINTS;case"LINES":return r.LINES;case"LINE_STRIP":return r.LINE_STRIP;case"LINE_LOOP":return r.LINE_LOOP;case"TRIANGLES":return r.TRIANGLES;case"TRIANGLE_STRIP":return r.TRIANGLE_STRIP;case"TRIANGLE_FAN":return r.TRIANGLE_FAN}}function yt(r,t){return[r[0]-t[0],r[1]-t[1],r[2]-t[2]]}function lt(r,t){return[r[1]*t[2]-r[2]*t[1],r[2]*t[0]-r[0]*t[2],r[0]*t[1]-r[1]*t[0]]}function U(r){const t=Math.sqrt(r[0]*r[0]+r[1]*r[1]+r[2]*r[2]);if(t<Number.EPSILON)throw new Error("The unit vector could not be normalized.");return[r[0]/t,r[1]/t,r[2]/t]}class pt{constructor(){this.cameraMatrix=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],this.viewMatrix=nt(this.cameraMatrix)}getViewMatrix(){return this.viewMatrix}getCameraMatrix(){return this.cameraMatrix}setCameraMatrix(t){return this.cameraMatrix=t,this.viewMatrix=nt(this.cameraMatrix),this}lookAt(t){const i=[0,1,0],s=this.getCameraMatrix().slice(12,15),o=U(yt(s,t)),a=U(lt(i,o)),l=U(lt(o,a)),e=[a[0],a[1],a[2],0,l[0],l[1],l[2],0,o[0],o[1],o[2],0,s[0],s[1],s[2],1];return this.setCameraMatrix(e),this}}class V extends pt{constructor(t,i,s,o){super(),this.fov=t,this.aspect=i,this.near=s,this.far=o,this.projectionMatrix=rt(this.fov,this.aspect,this.near,this.far)}getFov(){return this.fov}setFov(t){return this.fov=t,this.updateProjectionMatrix(),this}getAspect(){return this.aspect}setAspect(t){return this.aspect=t,this.updateProjectionMatrix(),this}getNear(){return this.near}setNear(t){return this.near=t,this.updateProjectionMatrix(),this}getFar(){return this.far}setFar(t){return this.far=t,this.updateProjectionMatrix(),this}getProjectionMatrix(){return this.projectionMatrix}updateProjectionMatrix(){return this.projectionMatrix=rt(this.fov,this.aspect,this.near,this.far),this}}class ht extends ut{constructor(t){super(),this.camera=t,this.setDrawType("LINES"),this.updateProjection(),this.updateTransform()}updateTransform(){this.setTransformMatrix([...this.camera.getCameraMatrix()])}updateProjection(){let t,i,s,o,a,l;if(this.camera instanceof V){const v=this.camera.getFov(),p=this.camera.getAspect(),g=this.camera.getNear(),f=this.camera.getFar();i=g*Math.tan(v/2),t=i*p,s=g,a=f/g*i,o=f/g*t,l=f}else{const v=this.camera.getWidth(),p=this.camera.getHeight(),g=this.camera.getNear(),f=this.camera.getFar();t=v/2,i=p/2,s=g,o=t,a=i,l=f}const e=new Uint8ClampedArray(50*3),n=new Float32Array(50*3);[n[0],n[1],n[2]]=[0,0,0],[n[3],n[4],n[5]]=[+t,+i,-s],[n[6],n[7],n[8]]=[0,0,0],[n[9],n[10],n[11]]=[-t,+i,-s],[n[12],n[13],n[14]]=[0,0,0],[n[15],n[16],n[17]]=[-t,-i,-s],[n[18],n[19],n[20]]=[0,0,0],[n[21],n[22],n[23]]=[+t,-i,-s],[e[0],e[1],e[2]]=[200,59,52],[e[3],e[4],e[5]]=[200,59,52],[e[6],e[7],e[8]]=[200,59,52],[e[9],e[10],e[11]]=[200,59,52],[e[12],e[13],e[14]]=[200,59,52],[e[15],e[16],e[17]]=[200,59,52],[e[18],e[19],e[20]]=[200,59,52],[e[21],e[22],e[23]]=[200,59,52],[n[24],n[25],n[26]]=[+t,+i,-s],[n[27],n[28],n[29]]=[+o,+a,-l],[n[30],n[31],n[32]]=[-t,+i,-s],[n[33],n[34],n[35]]=[-o,+a,-l],[n[36],n[37],n[38]]=[-t,-i,-s],[n[39],n[40],n[41]]=[-o,-a,-l],[n[42],n[43],n[44]]=[+t,-i,-s],[n[45],n[46],n[47]]=[+o,-a,-l],[e[24],e[25],e[26]]=[245,202,80],[e[27],e[28],e[29]]=[245,202,80],[e[30],e[31],e[32]]=[245,202,80],[e[33],e[34],e[35]]=[245,202,80],[e[36],e[37],e[38]]=[245,202,80],[e[39],e[40],e[41]]=[245,202,80],[e[42],e[43],e[44]]=[245,202,80],[e[45],e[46],e[47]]=[245,202,80],[n[48],n[49],n[50]]=[+t,+i,-s],[n[51],n[52],n[53]]=[-t,+i,-s],[n[54],n[55],n[56]]=[-t,+i,-s],[n[57],n[58],n[59]]=[-t,-i,-s],[n[60],n[61],n[62]]=[-t,-i,-s],[n[63],n[64],n[65]]=[+t,-i,-s],[n[66],n[67],n[68]]=[+t,-i,-s],[n[69],n[70],n[71]]=[+t,+i,-s],[e[48],e[49],e[50]]=[200,59,52],[e[51],e[52],e[53]]=[200,59,52],[e[54],e[55],e[56]]=[200,59,52],[e[57],e[58],e[59]]=[200,59,52],[e[60],e[61],e[62]]=[200,59,52],[e[63],e[64],e[65]]=[200,59,52],[e[66],e[67],e[68]]=[200,59,52],[e[69],e[70],e[71]]=[200,59,52],[n[72],n[73],n[74]]=[+o,+a,-l],[n[75],n[76],n[77]]=[-o,+a,-l],[n[78],n[79],n[80]]=[-o,+a,-l],[n[81],n[82],n[83]]=[-o,-a,-l],[n[84],n[85],n[86]]=[-o,-a,-l],[n[87],n[88],n[89]]=[+o,-a,-l],[n[90],n[91],n[92]]=[+o,-a,-l],[n[93],n[94],n[95]]=[+o,+a,-l],[e[72],e[73],e[74]]=[245,202,80],[e[75],e[76],e[77]]=[245,202,80],[e[78],e[79],e[80]]=[245,202,80],[e[81],e[82],e[83]]=[245,202,80],[e[84],e[85],e[86]]=[245,202,80],[e[87],e[88],e[89]]=[245,202,80],[e[90],e[91],e[92]]=[245,202,80],[e[93],e[94],e[95]]=[245,202,80],[n[96],n[97],n[98]]=[0,+i,-s],[n[99],n[100],n[101]]=[0,-i,-s],[n[102],n[103],n[104]]=[+t,0,-s],[n[105],n[106],n[107]]=[-t,0,-s],[e[96],e[97],e[98]]=[50,50,50],[e[99],e[100],e[101]]=[50,50,50],[e[102],e[103],e[104]]=[50,50,50],[e[105],e[106],e[107]]=[50,50,50],[n[108],n[109],n[110]]=[0,+a,-l],[n[111],n[112],n[113]]=[0,-a,-l],[n[114],n[115],n[116]]=[+o,0,-l],[n[117],n[118],n[119]]=[-o,0,-l],[e[108],e[109],e[110]]=[50,50,50],[e[111],e[112],e[113]]=[50,50,50],[e[114],e[115],e[116]]=[50,50,50],[e[117],e[118],e[119]]=[50,50,50];const c=[+t*.6,i*1.1,-s],u=[-t*.6,i*1.1,-s],d=[0,i*1.1+t*.6*3**.5,-s];return[n[120],n[121],n[122]]=[...c],[n[123],n[124],n[125]]=[...u],[n[126],n[127],n[128]]=[...u],[n[129],n[130],n[131]]=[...d],[n[132],n[133],n[134]]=[...d],[n[135],n[136],n[137]]=[...c],[e[120],e[121],e[122]]=[101,213,63],[e[123],e[124],e[125]]=[101,213,63],[e[126],e[127],e[128]]=[101,213,63],[e[129],e[130],e[131]]=[101,213,63],[e[132],e[133],e[134]]=[101,213,63],[e[135],e[136],e[137]]=[101,213,63],[n[138],n[139],n[140]]=[0,0,0],[n[141],n[142],n[143]]=[0,0,-s],[n[144],n[145],n[146]]=[0,0,-s],[n[147],n[148],n[149]]=[0,0,-l],[e[138],e[139],e[140]]=[50,50,50],[e[141],e[142],e[143]]=[50,50,50],[e[144],e[145],e[146]]=[50,50,50],[e[147],e[148],e[149]]=[50,50,50],this.setColorData(e),this.setPositionData(n),this}}class _t extends pt{constructor(t,i,s,o){super(),this.width=t,this.height=i,this.near=s,this.far=o,this.projectionMatrix=ot(this.width,this.height,this.near,this.far)}getWidth(){return this.width}setWidth(t){return this.width=t,this.updateProjectionMatrix(),this}getHeight(){return this.height}setHeight(t){return this.height=t,this.updateProjectionMatrix(),this}getNear(){return this.near}setNear(t){return this.near=t,this.updateProjectionMatrix(),this}getFar(){return this.far}setFar(t){return this.far=t,this.updateProjectionMatrix(),this}getProjectionMatrix(){return this.projectionMatrix}updateProjectionMatrix(){return this.projectionMatrix=ot(this.width,this.height,this.near,this.far),this}}var Et=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Z={},Ct={get exports(){return Z},set exports(r){Z=r}};(function(r,t){(function(i,s){r.exports=s()})(Et,function(){var i=function(){function s(p){return l.appendChild(p.dom),p}function o(p){for(var g=0;g<l.children.length;g++)l.children[g].style.display=g===p?"block":"none";a=p}var a=0,l=document.createElement("div");l.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",l.addEventListener("click",function(p){p.preventDefault(),o(++a%l.children.length)},!1);var e=(performance||Date).now(),n=e,c=0,u=s(new i.Panel("FPS","#0ff","#002")),d=s(new i.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var v=s(new i.Panel("MB","#f08","#201"));return o(0),{REVISION:16,dom:l,addPanel:s,showPanel:o,begin:function(){e=(performance||Date).now()},end:function(){c++;var p=(performance||Date).now();if(d.update(p-e,200),p>n+1e3&&(u.update(1e3*c/(p-n),100),n=p,c=0,v)){var g=performance.memory;v.update(g.usedJSHeapSize/1048576,g.jsHeapSizeLimit/1048576)}return p},update:function(){e=this.end()},domElement:l,setMode:o}};return i.Panel=function(s,o,a){var l=1/0,e=0,n=Math.round,c=n(window.devicePixelRatio||1),u=80*c,d=48*c,v=3*c,p=2*c,g=3*c,f=15*c,A=74*c,h=30*c,w=document.createElement("canvas");w.width=u,w.height=d,w.style.cssText="width:80px;height:48px";var m=w.getContext("2d");return m.font="bold "+9*c+"px Helvetica,Arial,sans-serif",m.textBaseline="top",m.fillStyle=a,m.fillRect(0,0,u,d),m.fillStyle=o,m.fillText(s,v,p),m.fillRect(g,f,A,h),m.fillStyle=a,m.globalAlpha=.9,m.fillRect(g,f,A,h),{dom:w,update:function(b,y){l=Math.min(l,b),e=Math.max(e,b),m.fillStyle=a,m.globalAlpha=1,m.fillRect(0,0,u,f),m.fillStyle=o,m.fillText(n(b)+" "+s+" ("+n(l)+"-"+n(e)+")",v,p),m.drawImage(w,g+c,f,A-c,h,g,f,A-c,h),m.fillRect(g+A-c,f,c,h),m.fillStyle=a,m.globalAlpha=.9,m.fillRect(g+A-c,f,c,n((1-b/y)*h))}}},i})})(Ct);/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.18.1
 * @author George Michael Brower
 * @license MIT
 */class P{constructor(t,i,s,o,a="div"){this.parent=t,this.object=i,this.property=s,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(o),this.$name=document.createElement("div"),this.$name.classList.add("name"),P.nextNameID=P.nextNameID||0,this.$name.id=`lil-gui-name-${++P.nextNameID}`,this.$widget=document.createElement(a),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(s)}name(t){return this._name=t,this.$name.innerHTML=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const i=this.parent.add(this.object,this.property,t);return i.name(this._name),this.destroy(),i}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.object[this.property]=t,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class $t extends P{constructor(t,i,s){super(t,i,s,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Q(r){let t,i;return(t=r.match(/(#|0x)?([a-f0-9]{6})/i))?i=t[2]:(t=r.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?i=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=r.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(i=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),i?"#"+i:!1}const St={isPrimitive:!0,match:r=>typeof r=="string",fromHexString:Q,toHexString:Q},R={isPrimitive:!0,match:r=>typeof r=="number",fromHexString:r=>parseInt(r.substring(1),16),toHexString:r=>"#"+r.toString(16).padStart(6,0)},Mt={isPrimitive:!1,match:r=>Array.isArray(r),fromHexString(r,t,i=1){const s=R.fromHexString(r);t[0]=(s>>16&255)/255*i,t[1]=(s>>8&255)/255*i,t[2]=(s&255)/255*i},toHexString([r,t,i],s=1){s=255/s;const o=r*s<<16^t*s<<8^i*s<<0;return R.toHexString(o)}},Lt={isPrimitive:!1,match:r=>Object(r)===r,fromHexString(r,t,i=1){const s=R.fromHexString(r);t.r=(s>>16&255)/255*i,t.g=(s>>8&255)/255*i,t.b=(s&255)/255*i},toHexString({r,g:t,b:i},s=1){s=255/s;const o=r*s<<16^t*s<<8^i*s<<0;return R.toHexString(o)}},Ft=[St,R,Mt,Lt];function Dt(r){return Ft.find(t=>t.match(r))}class Pt extends P{constructor(t,i,s,o){super(t,i,s,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Dt(this.initialValue),this._rgbScale=o,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const a=Q(this.$text.value);a&&this._setValueFromHexString(a)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const i=this._format.fromHexString(t);this.setValue(i)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class X extends P{constructor(t,i,s){super(t,i,s,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",o=>{o.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class kt extends P{constructor(t,i,s,o,a,l){super(t,i,s,"number"),this._initInput(),this.min(o),this.max(a);const e=l!==void 0;this.step(e?l:this._getImplicitStep(),e),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,i=!0){return this._step=t,this._stepExplicit=i,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let i=(t-this._min)/(this._max-this._min);i=Math.max(0,Math.min(i,1)),this.$fill.style.width=i*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let h=parseFloat(this.$input.value);isNaN(h)||(this._stepExplicit&&(h=this._snap(h)),this.setValue(this._clamp(h)))},i=h=>{const w=parseFloat(this.$input.value);isNaN(w)||(this._snapClampSetValue(w+h),this.$input.value=this.getValue())},s=h=>{h.code==="Enter"&&this.$input.blur(),h.code==="ArrowUp"&&(h.preventDefault(),i(this._step*this._arrowKeyMultiplier(h))),h.code==="ArrowDown"&&(h.preventDefault(),i(this._step*this._arrowKeyMultiplier(h)*-1))},o=h=>{this._inputFocused&&(h.preventDefault(),i(this._step*this._normalizeMouseWheel(h)))};let a=!1,l,e,n,c,u;const d=5,v=h=>{l=h.clientX,e=n=h.clientY,a=!0,c=this.getValue(),u=0,window.addEventListener("mousemove",p),window.addEventListener("mouseup",g)},p=h=>{if(a){const w=h.clientX-l,m=h.clientY-e;Math.abs(m)>d?(h.preventDefault(),this.$input.blur(),a=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(w)>d&&g()}if(!a){const w=h.clientY-n;u-=w*this._step*this._arrowKeyMultiplier(h),c+u>this._max?u=this._max-c:c+u<this._min&&(u=this._min-c),this._snapClampSetValue(c+u)}n=h.clientY},g=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",p),window.removeEventListener("mouseup",g)},f=()=>{this._inputFocused=!0},A=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",s),this.$input.addEventListener("wheel",o,{passive:!1}),this.$input.addEventListener("mousedown",v),this.$input.addEventListener("focus",f),this.$input.addEventListener("blur",A)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(h,w,m,b,y)=>(h-w)/(m-w)*(y-b)+b,i=h=>{const w=this.$slider.getBoundingClientRect();let m=t(h,w.left,w.right,this._min,this._max);this._snapClampSetValue(m)},s=h=>{this._setDraggingStyle(!0),i(h.clientX),window.addEventListener("mousemove",o),window.addEventListener("mouseup",a)},o=h=>{i(h.clientX)},a=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",o),window.removeEventListener("mouseup",a)};let l=!1,e,n;const c=h=>{h.preventDefault(),this._setDraggingStyle(!0),i(h.touches[0].clientX),l=!1},u=h=>{h.touches.length>1||(this._hasScrollBar?(e=h.touches[0].clientX,n=h.touches[0].clientY,l=!0):c(h),window.addEventListener("touchmove",d,{passive:!1}),window.addEventListener("touchend",v))},d=h=>{if(l){const w=h.touches[0].clientX-e,m=h.touches[0].clientY-n;Math.abs(w)>Math.abs(m)?c(h):(window.removeEventListener("touchmove",d),window.removeEventListener("touchend",v))}else h.preventDefault(),i(h.touches[0].clientX)},v=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",d),window.removeEventListener("touchend",v)},p=this._callOnFinishChange.bind(this),g=400;let f;const A=h=>{if(Math.abs(h.deltaX)<Math.abs(h.deltaY)&&this._hasScrollBar)return;h.preventDefault();const m=this._normalizeMouseWheel(h)*this._step;this._snapClampSetValue(this.getValue()+m),this.$input.value=this.getValue(),clearTimeout(f),f=setTimeout(p,g)};this.$slider.addEventListener("mousedown",s),this.$slider.addEventListener("touchstart",u,{passive:!1}),this.$slider.addEventListener("wheel",A,{passive:!1})}_setDraggingStyle(t,i="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${i}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:i,deltaY:s}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(i=0,s=-t.wheelDelta/120,s*=this._stepExplicit?1:10),i+-s}_arrowKeyMultiplier(t){let i=this._stepExplicit?1:10;return t.shiftKey?i*=10:t.altKey&&(i/=10),i}_snap(t){const i=Math.round(t/this._step)*this._step;return parseFloat(i.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Tt extends P{constructor(t,i,s,o){super(t,i,s,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(o)?o:Object.values(o),this._names=Array.isArray(o)?o:Object.keys(o),this._names.forEach(a=>{const l=document.createElement("option");l.innerHTML=a,this.$select.appendChild(l)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const t=this.getValue(),i=this._values.indexOf(t);return this.$select.selectedIndex=i,this.$display.innerHTML=i===-1?t:this._names[i],this}}class It extends P{constructor(t,i,s){super(t,i,s,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",o=>{o.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const Ot=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  background-color: var(--background-color);
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
  .lil-gui.allow-touch-styles {
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
.lil-gui.force-touch-styles {
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
.lil-gui .controller.boolean .widget {
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
  background-color: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background-color: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background-color: var(--focus-color);
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

.lil-gui input {
  -webkit-tap-highlight-color: transparent;
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
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input::-webkit-outer-spin-button,
.lil-gui input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.lil-gui input[type=number] {
  -moz-appearance: textfield;
}
.lil-gui input[type=checkbox] {
  appearance: none;
  -webkit-appearance: none;
  height: var(--checkbox-size);
  width: var(--checkbox-size);
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
  -webkit-tap-highlight-color: transparent;
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
  border: 1px solid var(--widget-color);
  text-align: center;
  line-height: calc(var(--widget-height) - 4px);
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
    border-color: var(--hover-color);
  }
  .lil-gui button:focus {
    border-color: var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function Vt(r){const t=document.createElement("style");t.innerHTML=r;const i=document.querySelector("head link[rel=stylesheet], head style");i?document.head.insertBefore(t,i):document.head.appendChild(t)}let ct=!1;class q{constructor({parent:t,autoPlace:i=t===void 0,container:s,width:o,title:a="Controls",closeFolders:l=!1,injectStyles:e=!0,touchStyles:n=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",c=>{(c.code==="Enter"||c.code==="Space")&&(c.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(a),n&&this.domElement.classList.add("allow-touch-styles"),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),!ct&&e&&(Vt(Ot),ct=!0),s?s.appendChild(this.domElement):i&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),o&&this.domElement.style.setProperty("--width",o+"px"),this._closeFolders=l,this.domElement.addEventListener("keydown",c=>c.stopPropagation()),this.domElement.addEventListener("keyup",c=>c.stopPropagation())}add(t,i,s,o,a){if(Object(s)===s)return new Tt(this,t,i,s);const l=t[i];switch(typeof l){case"number":return new kt(this,t,i,s,o,a);case"boolean":return new $t(this,t,i);case"string":return new It(this,t,i);case"function":return new X(this,t,i)}console.error(`gui.add failed
	property:`,i,`
	object:`,t,`
	value:`,l)}addColor(t,i,s=1){return new Pt(this,t,i,s)}addFolder(t){const i=new q({parent:this,title:t});return this.root._closeFolders&&i.close(),i}load(t,i=!0){return t.controllers&&this.controllers.forEach(s=>{s instanceof X||s._name in t.controllers&&s.load(t.controllers[s._name])}),i&&t.folders&&this.folders.forEach(s=>{s._title in t.folders&&s.load(t.folders[s._title])}),this}save(t=!0){const i={controllers:{},folders:{}};return this.controllers.forEach(s=>{if(!(s instanceof X)){if(s._name in i.controllers)throw new Error(`Cannot save GUI with duplicate property "${s._name}"`);i.controllers[s._name]=s.save()}}),t&&this.folders.forEach(s=>{if(s._title in i.folders)throw new Error(`Cannot save GUI with duplicate folder "${s._title}"`);i.folders[s._title]=s.save()}),i}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const i=this.$children.clientHeight;this.$children.style.height=i+"px",this.domElement.classList.add("transition");const s=a=>{a.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",s))};this.$children.addEventListener("transitionend",s);const o=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=o+"px"})}),this}title(t){return this._title=t,this.$title.innerHTML=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(s=>s.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(i=>{t=t.concat(i.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(i=>{t=t.concat(i.foldersRecursive())}),t}}const Rt=q;function J(r){return r/180*Math.PI}class Bt{constructor(){const t=new Z;t.showPanel(0),t.dom.style.setProperty("right","0"),t.dom.style.setProperty("left","auto"),document.body.prepend(t.dom);let i="perspective";const s=new Rt().close(),o={fov:40,aspect:1,near:100,far:400},a={width:200,height:200,near:200,far:400},l=[s.add(o,"fov",10,70,.6).name("Fov").onChange(c).show(),s.add(o,"aspect",.5,2,.015).name("Aspect").onChange(c).show(),s.add(o,"near",50,300,2.5).name("Near").onChange(c).show(),s.add(o,"far",300,500,2).name("Far").onChange(c).show()],e=[s.add(a,"width",100,400,3).name("Width").onChange(c).hide(),s.add(a,"height",100,400,3).name("Height").onChange(c).hide(),s.add(a,"near",100,300,2).name("Near").onChange(c).hide(),s.add(a,"far",300,600,3).name("Far").onChange(c).hide()];s.add({switch:n},"switch");function n(){if(i=i==="perspective"?"orthographic":"perspective",i==="perspective"){l.forEach(x=>x.show()),e.forEach(x=>x.hide()),b=A,y=w,E=O(d,A);return}l.forEach(x=>x.hide()),e.forEach(x=>x.show()),b=h,y=m,E=O(d,h)}function c(){b instanceof V?b.setFov(J(o.fov)).setAspect(o.aspect).setNear(o.near).setFar(o.far):b.setWidth(a.width).setHeight(a.height).setNear(a.near).setFar(a.far),y.updateProjection(),E=O(d,b)}const u=new At,d=u.getDomElement();this.domElement=d,d.style.setProperty("inline-size","100vw"),d.style.setProperty("block-size","100vh"),d.width=Math.round(innerWidth*devicePixelRatio),d.height=Math.round(innerHeight*devicePixelRatio);const v=new mt,p=new gt;v.add(p),p.setTransformMatrix(W(-50,-75,-15));const g=d.width<d.height?d.width/d.height*2:d.width/d.height/2,f=new V(J(60),g,1,2e3);f.setCameraMatrix(W(400,400,400)),f.lookAt([0,0,0]);const A=new V(J(o.fov),o.aspect,o.near,o.far),h=new _t(a.width,a.height,a.near,a.far),w=new ht(A),m=new ht(h);let b=i==="perspective"?A:h,y=i==="perspective"?w:m,S=dt(d),E=O(d,b);new ResizeObserver(x=>{for(const C of x){d.width=Math.round(C.contentBoxSize[0].inlineSize*devicePixelRatio),d.height=Math.round(C.contentBoxSize[0].blockSize*devicePixelRatio);const $=d.width<d.height?d.width/d.height*2:d.width/d.height/2;f.setAspect($)}S=dt(d),E=O(d,b)}).observe(d,{box:"content-box"});const M=performance.now(),L=W(150,250,0);requestAnimationFrame(function x(){t.begin();const C=(performance.now()-M)/1e3*Math.PI/10,$=wt(C),F=K($,L);b.setCameraMatrix(F),b.lookAt([0,0,0]),y.updateTransform(),u.clear(),v.add(y),u.setViewport(...S),u.render(v,f),v.remove(y),u.setViewport(...E),u.render(v,b),requestAnimationFrame(x),t.end()})}getDomElement(){return this.domElement}}function dt(r){return r.width>=r.height?[0,0,r.width/2,r.height]:[0,0,r.width,r.height/2]}function O(r,t){const i=r.width>=r.height?r.width/2:r.width,s=r.width>=r.height?r.height:r.height/2,o=i/s,a=t instanceof V?t.getAspect():t.getWidth()/t.getHeight();if(a>=o){const c=i,u=c/a,d=(s-u)/2;return r.width>=r.height?[r.width/2,d,c,u]:[0,r.height/2+d,c,u]}const l=s,e=l*a,n=(i-e)/2;return r.width>=r.height?[r.width/2+n,0,e,l]:[n,r.height/2,e,l]}const Ht=new Bt;document.body.prepend(Ht.getDomElement());
