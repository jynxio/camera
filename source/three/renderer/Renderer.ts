import vertexShaderSource from "../glsl/vertex.glsl?raw";
import fragmentShaderSource from "../glsl/fragment.glsl?raw";

type drawType = "POINTS" | "LINES" | "LINE_STRIP" | "LINE_LOOP" | "TRIANGLES" | "TRIANGLE_STRIP" | "TRIANGLE_FAN";

class Renderer {

    #canvas: HTMLCanvasElement;

    public constructor ( canvas?: HTMLCanvasElement ) {

        //
        this.#canvas = canvas ? canvas : document.createElement( "canvas" );

        //
        const gl = this.#canvas.getContext( "webgl2" );

        if ( gl === null ) throw new Error( "You runtime does not support WebGL2." );

        //
        const vertexShader = createShader( gl, gl.VERTEX_SHADER, vertexShaderSource );
        const fragmentShader = createShader( gl, gl.FRAGMENT_SHADER, fragmentShaderSource );
        const program = createProgram( gl, vertexShader, fragmentShader );

        //
        const vao = gl.createVertexArray(); // vao: vertex array object

        gl.bindVertexArray( vao );

        //
        const colors: number[] = [];
        const positions: number[] = [];

        const colorBuffer = gl.createBuffer();
        const positionBuffer = gl.createBuffer();

        const colorAttributeLocation = gl.getAttribLocation( program, "a_color" );
        const positionAttributeLocation = gl.getAttribLocation( program, "a_position" );

        const colorOption = {
            size: 3,
            type: gl.FLOAT,
            normalize: false,
            stride: 0,
            offset: 0,
        } as const;
        const positionOption = {
            size: 3,
            type: gl.FLOAT,
            normalize: false,
            stride: 0,
            offset: 0,
        } as const;

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