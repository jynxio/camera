import * as three from "three";
import resizeCanvasToViewport from "../helper/resizeCanvasToViewport";

class ThreeScene {

    #canvas: HTMLCanvasElement;
    #domElement: HTMLDivElement;

    public constructor( canvas?: HTMLCanvasElement ) {

        // 初始化容器元素
        this.#domElement = document.createElement( "div" );
        this.#canvas = canvas ? canvas : document.createElement( "canvas" );

        // 初始化三维场景
        const obs_camera = new three.PerspectiveCamera( 60, this.#canvas.width / this.#canvas.height, 0.1, 1000 ); // observer  : 观察者的相机
        const res_camera_per = new three.PerspectiveCamera( 60, 1, 10, 50 );                                       // respondent: 被观察者透视相机
        const res_camera_ort = new three.OrthographicCamera( - 10, 10, 10, - 10, 10, 50 );                         // respondent: 被观察者的正射相机

        const scene = new three.Scene();

        scene.add( obs_camera, res_camera_per, res_camera_ort );

        const renderer = new three.WebGLRenderer( { canvas: this.#canvas, antialias: false } );

        renderer.setPixelRatio( globalThis.devicePixelRatio );

    }

    public getDomElement() {

        return this.#domElement;

    }

}

export default ThreeScene;