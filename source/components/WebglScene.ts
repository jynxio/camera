import * as three from "../three/index";

class WebglScene {

    private domElement: HTMLDivElement;

    public constructor () {

        //
        const f = new three.F();
        const scene = new three.Scene();
        const renderer = new three.Renderer();
        const canvas = renderer.getDomElement();

        canvas.width = innerWidth * devicePixelRatio;
        canvas.height = innerHeight * devicePixelRatio;
        canvas.style.setProperty( "inline-size", "100vw" );
        canvas.style.setProperty( "block-size", "100vh" );

        const camera = new three.OrthographicCamera( canvas.width, canvas.height, 400 );

        camera.setWidth( canvas.width );
        camera.setHeight( canvas.height );

        scene.add( f );
        renderer.render( scene, camera );

        //
        const observer = new ResizeObserver( entries => {

            for ( const entry of entries ) {

                const width = Math.round( entry.contentBoxSize[ 0 ].inlineSize * devicePixelRatio );
                const height = Math.round( entry.contentBoxSize[ 0 ].blockSize * devicePixelRatio );

                canvas.width = width;
                canvas.height = height;

                camera.setWidth( canvas.width );
                camera.setHeight( canvas.height );

                renderer.render( scene, camera );

            }

        } );

        observer.observe( canvas, { box: "content-box" } );

        //
        this.domElement = document.createElement( "div" );
        this.domElement.append( renderer.getDomElement() );

    }

    public getDomElement () {

        return this.domElement;

    }

}

export default WebglScene;