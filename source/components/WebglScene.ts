import * as three from "../three/index";
import Stats from "stats.js";
import Gui from "lil-gui";
import { createTranslation, yRotate, createYRotation, multiply } from "../three/math/matrix4";
import { degreeToRadian } from "../three/math/angle";

class WebglScene {

    private domElement: HTMLDivElement;

    public constructor () {

        // Stats panel
        const stats = new Stats();

        stats.showPanel( 0 );

        // The option of the third-person perspective camera (tppCamera)
        const option = {
            fov: {
                min: 10,
                max: 60,
                step: 0.5,
                value: 30,
            },
            aspect: {
                min: 0.5,
                max: 2,
                step: 0.015,
                value: 1,
            },
            near: {
                min: 100,
                max: 300,
                step: 2,
                value: 200,
            },
            far: {
                min: 400,
                max: 600,
                step: 2,
                value: 500,
            },
        };

        //
        const renderer = new three.Renderer();
        const canvas = renderer.getDomElement();

        canvas.style.setProperty( "inline-size", "100vw" );
        canvas.style.setProperty( "block-size", "100vh" );
        canvas.width = Math.round( innerWidth * devicePixelRatio );
        canvas.height = Math.round( innerHeight * devicePixelRatio );

        const scene = new three.Scene();
        const tppCamera = new three.PerspectiveCamera( // Third-person perspective camera
            degreeToRadian( option.fov.value ),
            option.aspect.value,
            option.near.value,
            option.far.value,
        );
        const fppCamera = new three.PerspectiveCamera( // First-person perspective camera (me)
            degreeToRadian( 60 ),
            canvas.width / canvas.height / 2,
            1,
            2000
        );

        fppCamera.setCameraMatrix( createTranslation( 400, 400, 400 ) );
        fppCamera.lookAt( [ 0, 0, 0 ] );

        const tppCameraHelper = new three.CameraHelper( tppCamera );

        scene.add( tppCameraHelper );

        //
        const observer = new ResizeObserver( entries => {

            for ( const entry of entries ) {

                //
                canvas.width = Math.round( entry.contentBoxSize[ 0 ].inlineSize * devicePixelRatio );
                canvas.height = Math.round( entry.contentBoxSize[ 0 ].blockSize * devicePixelRatio );

                //
                fppCamera.setAspect( canvas.width / canvas.height / 2 );

                //
                renderer.clear();
                renderer.setViewport( 0, 0, canvas.width / 2, canvas.height );
                renderer.render( scene, fppCamera );

                const length = Math.min( canvas.width / 2, canvas.height );

                length === canvas.width / 2
                    ? renderer.setViewport( canvas.width / 2, ( canvas.height - length ) / 2, length, length )
                    : renderer.setViewport( ( canvas.width / 2 - length ) / 2, 0, length, length );
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

            //
            const angle = ( performance.now() - startTime ) / 1000 * Math.PI / 10;
            const rotationMatrix = createYRotation( angle );
            const transformMatrix = multiply( rotationMatrix, translationMatrix );

            tppCamera.setCameraMatrix( transformMatrix );
            tppCamera.lookAt( [ 0, 0, 0 ] );

            tppCameraHelper.updateTransform();

            //
            stats.begin();

            renderer.clear();
            renderer.setViewport( 0, 0, canvas.width / 2, canvas.height );
            renderer.render( scene, fppCamera );

            const length = Math.min( canvas.width / 2, canvas.height );

            length === canvas.width / 2
                ? renderer.setViewport( canvas.width / 2, ( canvas.height - length ) / 2, length, length )
                : renderer.setViewport( ( canvas.width / 2 - length ) / 2, 0, length, length );
            renderer.render( scene, tppCamera );

            stats.end();

        } );


        //
        this.domElement = document.createElement( "div" );
        this.domElement.append( renderer.getDomElement(), stats.dom );

    }

    public getDomElement () {

        return this.domElement;

    }

}

export default WebglScene;