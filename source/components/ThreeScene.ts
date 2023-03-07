import * as three from "three";

class ThreeScene {

    #canvas: HTMLCanvasElement;
    #domElement: HTMLDivElement;

    public constructor( canvas?: HTMLCanvasElement ) {

        // 初始化容器元素
        this.#canvas = canvas ? canvas : document.createElement( "canvas" );
        this.#domElement = document.createElement( "div" );
        this.#domElement.append( this.#canvas );

        // 初始化三维场景
        const scene = new three.Scene();
        const renderer = new three.WebGLRenderer( { canvas: this.#canvas, antialias: false } );
        const camera_fp = new three.PerspectiveCamera( 60, innerWidth / innerHeight, 0.1, 1000 ); // 第一人称相机（我）
        const camera_tp = new three.PerspectiveCamera( 20, 1, 1, 5 );                             // 第三人称相机（被我观察的相机）
        const camera_tp_helper = new three.CameraHelper( camera_tp );

        camera_fp.position.set( 0, 0, 10 );
        scene.add( camera_fp, camera_tp, camera_tp_helper );

        renderer.setPixelRatio( devicePixelRatio );
        renderer.setSize( innerWidth, innerHeight );

        globalThis.addEventListener( "resize", _ => {

            renderer.setPixelRatio( globalThis.devicePixelRatio );
            renderer.setSize( innerWidth, innerHeight );

            camera_fp.aspect = innerWidth / innerHeight;
            camera_tp.aspect = innerWidth / innerHeight;

            camera_fp.updateProjectionMatrix();
            camera_tp.updateProjectionMatrix();

            camera_tp_helper.update();

        } );

        // 渲染
        const tasks: Function[] = [];

        tasks.push( (): void => void renderer.render( scene, camera_fp ) );

        requestAnimationFrame( function loop () {

            requestAnimationFrame( loop );

            for ( let i = tasks.length - 1; i >= 0; i-- ) tasks[ i ]();

        } );

        // 第三人称相机
        const speed = 1 / 10; // 1turn/10s
        const start = performance.now();

        tasks.push( (): void => {

            const radian = ( performance.now() - start ) / 1000 * speed * Math.PI * 2;
            const sin = Math.sin( radian );
            const cos = Math.cos( radian );

            const new_x = 3 * cos + 0 * sin;
            const new_z = 3 * - sin + 0 * cos;

            camera_tp.position.set( new_x, 3, new_z );
            camera_tp.lookAt( 0, 0, 0 );
            camera_tp_helper.update();

        } );

        // F模型


    }

    public getDomElement() {

        return this.#domElement;

    }

}

export default ThreeScene;