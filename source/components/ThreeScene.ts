import * as three from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import F from "../model/F";

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
        const camera_fp = new three.PerspectiveCamera( 60, innerWidth / 2 / innerHeight, 1, 2000 ); // 第一人称相机（我）
        const camera_tp = new three.PerspectiveCamera( 30, 1, 300, 600 );                           // 第三人称相机（被我观察的相机）
        const camera_to = new three.OrthographicCamera( - 100, 100, 100, - 100, 100, 300 );
        const camera_tp_helper = new three.CameraHelper( camera_tp );
        const camera_to_helper = new three.CameraHelper( camera_to );
        // const controls = new OrbitControls( camera_fp, renderer.domElement );

        camera_fp.position.set( 0, 0, 900 );
        scene.add( camera_fp, camera_tp, camera_to, camera_to_helper );

        renderer.autoClearColor = false;
        renderer.setPixelRatio( devicePixelRatio );
        renderer.setSize( innerWidth, innerHeight );

        globalThis.addEventListener( "resize", _ => {

            renderer.setSize( innerWidth, innerHeight );
            renderer.setPixelRatio( globalThis.devicePixelRatio );

            // camera_fp.aspect = innerWidth / 2 / innerHeight;
            // camera_tp.aspect = 1;

            // camera_fp.updateProjectionMatrix();
            // camera_tp.updateProjectionMatrix();

            // camera_tp_helper.update();

        } );

        // 渲染
        const tasks: Function[] = [];

        tasks.push( (): void => {

            // scene.add( camera_tp_helper );

            renderer.setViewport( 0, 0, innerWidth / 2, innerHeight );
            renderer.render( scene, camera_fp );

            // scene.remove( camera_tp_helper );

            renderer.setViewport( innerWidth / 2, ( innerHeight - innerWidth / 2 ) / 2, innerWidth / 2, innerWidth / 2 );
            // renderer.render( scene, camera_tp );
            renderer.render( scene, camera_to );

        } );

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

            const [ old_x, old_y, old_z ] = [ 250, 0, 0 ];
            const [ new_x, new_y, new_z ] = [ old_x * cos + old_y * sin, 300, old_x * - sin + old_y * cos ];

            // camera_tp.position.set( new_x, new_y, new_z );
            // camera_tp.lookAt( 0, 0, 0 );
            // camera_tp_helper.update();

            camera_to.position.set( new_x, new_y, new_z );
            camera_to.lookAt( 0, 0, 0 );
            camera_tp_helper.update();

        } );

        // F模型
        const f = new F();
        const material = new three.MeshBasicMaterial( { vertexColors: true } );
        const geometry = new three.BufferGeometry();

        geometry.setIndex( new three.BufferAttribute( f.getIndexes(), 1 ) );
        geometry.setAttribute( "position", new three.BufferAttribute( f.getPositions(), 3 ) );
        geometry.setAttribute( "color", new three.BufferAttribute( f.getColors(), 3, true ) );
        geometry.computeBoundingBox();
        geometry.computeBoundingSphere();

        const mesh = new three.Mesh( geometry, material );

        mesh.position.set( - 50, - 75, - 15 ); // center: [50, 75, 15]
        scene.add( mesh );

    }

    public getDomElement() {

        return this.#domElement;

    }

}

export default ThreeScene;