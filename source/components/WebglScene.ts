import * as three from "../three/index";
import { createTranslation, yRotate, createYRotation, multiply } from "../three/math/matrix4";

class WebglScene {

    private domElement: HTMLDivElement;

    public constructor () {

        //
        const f = new three.F();
        const scene = new three.Scene();
        const renderer = new three.Renderer();
        const canvas = renderer.getDomElement();

        canvas.style.setProperty( "inline-size", "100vw" );
        canvas.style.setProperty( "block-size", "100vh" );
        canvas.width = Math.round( innerWidth * devicePixelRatio );
        canvas.height = Math.round( innerHeight * devicePixelRatio );

        const camera = new three.PerspectiveCamera( 75, canvas.width / canvas.height, 1, 2000 );

        scene.add( f );
        renderer.render( scene, camera );

        //
        const observer = new ResizeObserver( entries => {

            for ( const entry of entries ) {

                canvas.width = Math.round( entry.contentBoxSize[ 0 ].inlineSize * devicePixelRatio );
                canvas.height = Math.round( entry.contentBoxSize[ 0 ].blockSize * devicePixelRatio );

                camera.setAspect( canvas.width / canvas.height );

                renderer.render( scene, camera );

            }

        } );

        observer.observe( canvas, { box: "content-box" } );

        //
        const startTime = performance.now();
        const translationMatrix = createTranslation( 500, 500, 500 );

        requestAnimationFrame( function loop () {

            requestAnimationFrame( loop );

            const angle = ( performance.now() - startTime ) / 1000 * Math.PI / 10;
            const rotationMatrix = createYRotation( angle );
            const transformMatrix = multiply( rotationMatrix, translationMatrix );

            camera.setCameraMatrix( transformMatrix );
            camera.lookAt( [ 0, 0, 0 ] );

            renderer.render( scene, camera );

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