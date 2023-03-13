// Declaration
import { drawType, matrix4 } from "../constant/declaration";

// Shader string
import vertexShaderSource from "../glsl/vertex.glsl?raw";
import fragmentShaderSource from "../glsl/fragment.glsl?raw";

// Library
import Scene from "../Scene/Scene";
import PerspectiveCamera from "../camera/PerspectiveCamera";
import OrthographicCamera from "../camera/OrthographicCamera";
import { createOrthographic } from "../math/matrix4";
import { multiply } from "../math/matrix4";

// Code
class Renderer {

    private viewport: [number ,number , number, number];

    private gl: WebGL2RenderingContext;
    private canvas: HTMLCanvasElement;

    private program: WebGLProgram;
    private vertexShader: WebGLShader;
    private fragmentShader: WebGLShader;

    private colorBuffer: WebGLBuffer;
    private positionBuffer: WebGLBuffer;

    private colorAttributeLocation: number;
    private positionAttributeLocation: number;
    private matrixUniformLocation: WebGLUniformLocation;

    constructor ( canvas?: HTMLCanvasElement ) {

        this.canvas = canvas ? canvas : document.createElement( "canvas" );
        this.viewport = [ 0, 0, this.canvas.width, this.canvas.height ];

        const gl = this.canvas.getContext( "webgl2" );

        if ( ! gl ) throw new Error( "Your runtime does not support WebGL2." );

        this.gl = gl;

        this.vertexShader = createShader( this.gl, this.gl.VERTEX_SHADER, vertexShaderSource );
        this.fragmentShader = createShader( this.gl, this.gl.FRAGMENT_SHADER, fragmentShaderSource );
        this.program = createProgram( this.gl, this.vertexShader, this.fragmentShader );

        const vao = this.gl.createVertexArray(); // vao: vertex array object
        this.gl.bindVertexArray( vao );

        const colorBuffer = this.gl.createBuffer();
        const positionBuffer = this.gl.createBuffer();

        if ( ! colorBuffer || ! positionBuffer ) throw new Error( "It's failed to execute the createBuffer method." );

        this.colorBuffer = colorBuffer;
        this.positionBuffer = positionBuffer;

        this.colorAttributeLocation = this.gl.getAttribLocation( this.program, "a_color" );
        this.positionAttributeLocation = this.gl.getAttribLocation( this.program, "a_position" );

        const matrixUniformLocation = this.gl.getUniformLocation( this.program, "u_matrix" );

        if ( ! matrixUniformLocation ) throw new Error( "It's failed to execute the getUniformLocation method." );

        this.matrixUniformLocation = matrixUniformLocation;

    }

    public render ( scene: Scene, camera: PerspectiveCamera | OrthographicCamera ) {

        scene.get().forEach( object3d => {

            this.gl.bindBuffer( this.gl.ARRAY_BUFFER, this.positionBuffer );
            this.gl.bufferData( this.gl.ARRAY_BUFFER, object3d.getPositionData(), this.gl.STATIC_DRAW );
            this.gl.enableVertexAttribArray( this.positionAttributeLocation );
            this.gl.vertexAttribPointer( this.positionAttributeLocation, 3, this.gl.FLOAT, false, 0, 0 ); // location, size, type, normalize, stride, offset

            this.gl.bindBuffer( this.gl.ARRAY_BUFFER, this.colorBuffer );
            this.gl.bufferData( this.gl.ARRAY_BUFFER, object3d.getColorData(), this.gl.STATIC_DRAW );
            this.gl.enableVertexAttribArray( this.colorAttributeLocation );
            this.gl.vertexAttribPointer( this.colorAttributeLocation, 3, this.gl.UNSIGNED_BYTE, true, 0, 0 );

            this.gl.viewport( ... this.getViewport() );
            this.gl.clearColor( 0, 0, 0, 1 );
            this.gl.enable( this.gl.DEPTH_TEST );
            this.gl.enable( this.gl.CULL_FACE );
            this.gl.useProgram( this.program );

            const viewMatrix = camera.getViewMatrix();
            const projectionMatrix = camera.getProjectionMatrix();
            const transformMatrix = object3d.getTransformMatrix();

            let matrix = projectionMatrix;
            matrix = multiply( matrix, viewMatrix );
            matrix = multiply( matrix, transformMatrix );

            this.gl.uniformMatrix4fv( this.matrixUniformLocation, false, matrix );
            this.gl.drawArrays( createDrawType( this.gl, object3d.getDrawType() ), 0, object3d.getPositionData().length / 3 );

        } );

    }

    public getDomElement () {

        return this.canvas;

    }

    public getViewport () {

        return this.viewport;

    }

    /**
     * 设置视域。
     * @param x 起点的X坐标（0代表画布左边界）
     * @param y 起点的Y坐标（0代表画布下边界）
     * @param w 宽度
     * @param h 高度
     */
    public setViewport ( x: number, y: number, w: number, h: number ) {

        this.viewport = [ x, y, w, h ];

        return this;

    }

    public clear () {

        this.gl.clear( this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT );

        return this;

    }

}

function createShader (
    gl: WebGL2RenderingContext,
    type: WebGL2RenderingContext[ "VERTEX_SHADER" ] | WebGL2RenderingContext[ "FRAGMENT_SHADER" ],
    source: string
) {

    const shader = gl.createShader( type );

    if ( ! shader ) throw new Error( "It's failed to create shader." );

    gl.shaderSource( shader, source );
    gl.compileShader( shader );

    const success: boolean = gl.getShaderParameter( shader, gl.COMPILE_STATUS );

    if ( success ) return shader;

    const info = gl.getShaderInfoLog( shader );

    gl.deleteShader( shader );

    throw new Error( typeof info === "string" ? info : "It;s failed to execute the getShaderParameter method." );

}

function createProgram ( gl: WebGL2RenderingContext, vertexShader: WebGLShader, fragmentShader: WebGLShader ) {

    const program = gl.createProgram();

    if ( ! program ) throw new Error( "It's failed to create WebGLProgram." );

    gl.attachShader( program, vertexShader );
    gl.attachShader( program, fragmentShader );
    gl.linkProgram( program );

    const success: boolean = gl.getProgramParameter( program, gl.LINK_STATUS );

    if ( success ) return program;

    const info = gl.getProgramInfoLog( program );

    gl.deleteProgram( program );

    throw new Error( typeof info === "string" ? info : "It's failed to execute the getProgramParameter method." );

}

function createDrawType ( gl: WebGL2RenderingContext, drawType: drawType ) {

    switch ( drawType ) {

        case "POINTS": return gl.POINTS;

        case "LINES": return gl.LINES;

        case "LINE_STRIP": return gl.LINE_STRIP;

        case "LINE_LOOP": return gl.LINE_LOOP;

        case "TRIANGLES": return gl.TRIANGLES;

        case "TRIANGLE_STRIP": return gl.TRIANGLE_STRIP;

        case "TRIANGLE_FAN": return gl.TRIANGLE_FAN;

    }

}

export default Renderer;