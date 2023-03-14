import * as three from "../three/index";
import { createTranslation, yRotate, createYRotation, multiply } from "../three/math/matrix4";

// BUG fov
// BUG y轴翻转了，x轴可能也翻转了

class WebglScene {

    private domElement: HTMLDivElement;

    public constructor () {

        //
        const renderer = new three.Renderer();
        const canvas = renderer.getDomElement();

        canvas.style.setProperty( "inline-size", "100vw" );
        canvas.style.setProperty( "block-size", "100vh" );
        canvas.width = Math.round( innerWidth * devicePixelRatio );
        canvas.height = Math.round( innerHeight * devicePixelRatio );

        const scene = new three.Scene();
        const tppCamera = new three.PerspectiveCamera( 50, canvas.width / canvas.height / 2, 200, 500 ); // Third-person perspective camera
        const fppCamera = new three.PerspectiveCamera( 75, canvas.width / canvas.height / 2, 500, 3000 ); // First-person perspective camera (me)

        fppCamera.setCameraMatrix( createTranslation( 1500, 0, 1500 ) );
        fppCamera.lookAt( [ 0, 0, 0 ] );

        const tppCameraHelper = new three.CameraHelper( tppCamera );

        scene.add( tppCameraHelper );

        //
        const observer = new ResizeObserver( entries => {

            for ( const entry of entries ) {

                canvas.width = Math.round( entry.contentBoxSize[ 0 ].inlineSize * devicePixelRatio );
                canvas.height = Math.round( entry.contentBoxSize[ 0 ].blockSize * devicePixelRatio );

                tppCamera.setAspect( canvas.width / canvas.height / 2 );
                fppCamera.setAspect( canvas.width / canvas.height / 2 );

                tppCameraHelper.updateProjection();

                renderer.clear();
                renderer.setViewport( 0, 0, canvas.width / 2, canvas.height );
                renderer.render( scene, fppCamera );
                renderer.setViewport( canvas.width / 2, 0, canvas.width / 2, canvas.height );
                renderer.render( scene, tppCamera );

            }

        } );

        observer.observe( canvas, { box: "content-box" } );

        //
        const f = new three.F();

        f.setTransformMatrix( createTranslation( - 50, - 75, - 15 ) ); // center: [50, 75, 15]
        scene.add( f );

        //
        const startTime = performance.now();
        const translationMatrix = createTranslation( 150, 300, 150 );

        requestAnimationFrame( function loop () {

            requestAnimationFrame( loop );

            const angle = ( performance.now() - startTime ) / 1000 * Math.PI / 10;
            const rotationMatrix = createYRotation( angle );
            const transformMatrix = multiply( rotationMatrix, translationMatrix );

            tppCamera.setCameraMatrix( transformMatrix );
            tppCamera.lookAt( [ 0, 0, 0 ] );

            tppCameraHelper.updateTransform();

            renderer.clear();
            renderer.setViewport( 0, 0, canvas.width / 2, canvas.height );
            renderer.render( scene, fppCamera );
            renderer.setViewport( canvas.width / 2, 0, canvas.width / 2, canvas.height );
            renderer.render( scene, tppCamera );

        } );


        //
        this.domElement = document.createElement( "div" );
        this.domElement.append( renderer.getDomElement() );

    }

    public getDomElement () {

        return this.domElement;

    }

}

export default WebglScene;