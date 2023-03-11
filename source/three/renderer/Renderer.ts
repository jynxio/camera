// Declaration
import { drawType } from "../constant/declaration";

// Shader string
import vertexShaderSource from "../glsl/vertex.glsl";
import fragmentShaderSource from "../glsl/fragment.glsl";

// Library
import Scene from "../Scene/Scene";
import Camera from "../camera/Camera";

// Code
class Renderer {

    private gl: WebGL2RenderingContext;
    private canvas: HTMLCanvasElement;

    private vertexShader: WebGLShader;
    private fragmentShader: WebGLShader;
    private program: WebGLProgram;

    private colorBuffer: WebGLBuffer;
    private positionBuffer: WebGLBuffer;
    private colorAttributeLocation: number;
    private positionAttributeLocation: number;

    constructor ( canvas?: HTMLCanvasElement ) {

        this.canvas = canvas ? canvas : document.createElement( "canvas" );

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

    }

    public render ( scene: Scene, camera: Camera ) {

        

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