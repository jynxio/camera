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

    #gl: WebGL2RenderingContext;
    #canvas: HTMLCanvasElement;

    #colors: number[];
    #positions: number[];

    #colorBuffer: WebGLBuffer;
    #positionBuffer: WebGLBuffer;

    #colorAttributeLocation: number;
    #positionAttributeLocation: number;

    public constructor ( canvas?: HTMLCanvasElement ) {

        //
        this.#canvas = canvas ? canvas : document.createElement( "canvas" );

        //
        const gl = this.#canvas.getContext( "webgl2" );

        if ( gl === null ) throw new Error( "Your runtime does not support WebGL2." );

        //
        const vertexShader = createShader( gl, gl.VERTEX_SHADER, vertexShaderSource );
        const fragmentShader = createShader( gl, gl.FRAGMENT_SHADER, fragmentShaderSource );
        const program = createProgram( gl, vertexShader, fragmentShader );

        //
        const vao = gl.createVertexArray(); // vao: vertex array object

        gl.bindVertexArray( vao );

        //
        this.#colors = [];
        this.#positions = [];

        this.#colorBuffer = gl.createBuffer();
        this.#positionBuffer = gl.createBuffer();

        this.#colorAttributeLocation = gl.getAttribLocation( program, "a_color" );
        this.#positionAttributeLocation = gl.getAttribLocation( program, "a_position" );

    }

    public render ( scene: Scene, camera: Camera ) {

        const colorOption = { size: 3, type: this.#gl.FLOAT, normalize: false, stride: 0, offset: 0 } as const;
        const positionOption = { size: 3, type: this.#gl.FLOAT, normalize: false, stride: 0, offset: 0 } as const;

        // TODO

    }

    /**
     * 设置视口范围。
     * @param x - 视口起点的x坐标，0代表画布左侧。
     * @param y - 视口起点的y坐标，0代表画布底部。
     * @param w - 视口宽度。
     * @param h - 视口高度。
     */
    public setViewport ( x: number, y: number, w: number, h: number ) {}

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