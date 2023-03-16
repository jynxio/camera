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

        // Gui panel
        const gui = new Gui().close();
        const guiOption = {
            perspective: { fov: 40, aspect: 1, near: 100, far: 400 },      // The option of the third-person orthographic camera
            orthographic: { width: 200, height: 200, near: 200, far: 400 }, // The option of the third-person perspective camera
            who: "perspective" as "perspective" | "orthographic",
            switch: () => {

                guiOption.who = guiOption.who === "perspective" ? "orthographic" : "perspective";

                if ( guiOption.who === "perspective" ) {

                    [ tppFov, tppAspect, tppNear, tppFar ].forEach( item => item.show() );
                    [ tpoWidth, tpoHeight, tpoNear, tpoFar ].forEach( item => item.hide() );

                    tpCamera = tppCamera;
                    tpCameraHelper = tppCameraHelper;
                    tpCameraViewport = createTpViewport( canvas, tppCamera );

                    return;

                }

                [ tppFov, tppAspect, tppNear, tppFar ].forEach( item => item.hide() );
                [ tpoWidth, tpoHeight, tpoNear, tpoFar ].forEach( item => item.show() );

                tpCamera = tpoCamera;
                tpCameraHelper = tpoCameraHelper;
                tpCameraViewport = createTpViewport( canvas, tpoCamera );

            },
        };

        const tppFov = gui.add( guiOption.perspective, 'fov', 10, 70, 0.6 ).name( "Fov" ).onChange( updateTpCamera );
        const tppAspect = gui.add( guiOption.perspective, 'aspect', 0.5, 2, 0.015 ).name( "Aspect" ).onChange( updateTpCamera );
        const tppNear = gui.add( guiOption.perspective, 'near', 50, 300, 2.5 ).name( "Near" ).onChange( updateTpCamera );
        const tppFar = gui.add( guiOption.perspective, 'far', 300, 500, 2 ).name( "Far" ).onChange( updateTpCamera );

        const tpoWidth = gui.add( guiOption.orthographic, "width", 100, 400, 3 ).name( "Width" ).onChange( updateTpCamera ).hide();
        const tpoHeight = gui.add( guiOption.orthographic, "height", 100, 400, 3 ).name( "Height" ).onChange( updateTpCamera ).hide();
        const tpoNear = gui.add( guiOption.orthographic, "near", 100, 300, 2 ).name( "Near" ).onChange( updateTpCamera ).hide();
        const tpoFar = gui.add( guiOption.orthographic, "far", 300, 600, 3 ).name( "Far" ).onChange( updateTpCamera ).hide();

        const tpSwitch = gui.add( guiOption, "switch" ).name( "Switch" );

        function updateTpCamera () {
            console.log( 1 );
            tpCamera instanceof three.PerspectiveCamera
                ? tpCamera.setFov( degreeToRadian( guiOption.perspective.fov ) ).setAspect( guiOption.perspective.aspect ).setNear( guiOption.perspective.near ).setFar( guiOption.perspective.far )
                : tpCamera.setWidth( guiOption.orthographic.width ).setHeight( guiOption.orthographic.height ).setNear( guiOption.orthographic.near ).setFar( guiOption.orthographic.far );

            tpCameraHelper.updateProjection();
            tpCameraViewport = createTpViewport( canvas, tpCamera );

        }

        // Basic scene
        const renderer = new three.Renderer();
        const canvas = renderer.getDomElement();

        canvas.style.setProperty( "inline-size", "100vw" );
        canvas.style.setProperty( "block-size", "100vh" );
        canvas.width = Math.round( innerWidth * devicePixelRatio );
        canvas.height = Math.round( innerHeight * devicePixelRatio );

        const scene = new three.Scene(); //
        const model = new three.F();     // center: [50, 75, 15]

        scene.add( model );
        model.setTransformMatrix( createTranslation( - 50, - 75, - 15 ) );

        // Camera
        const aspect = canvas.width < canvas.height ? canvas.width / canvas.height * 2 : canvas.width / canvas.height / 2; //
        const fpCamera = new three.PerspectiveCamera( degreeToRadian( 60 ), aspect, 1, 2000 );                             // First-person camera (me)

        fpCamera.setCameraMatrix( createTranslation( 400, 400, 400 ) );
        fpCamera.lookAt( [ 0, 0, 0 ] );

        const tppCamera = new three.PerspectiveCamera( degreeToRadian( guiOption.perspective.fov ), guiOption.perspective.aspect, guiOption.perspective.near, guiOption.perspective.far ); // Third-person perspective camera
        const tpoCamera = new three.OrthographicCamera( guiOption.orthographic.width, guiOption.orthographic.height, guiOption.orthographic.near, guiOption.orthographic.far );            // Third-person orthographic camera
        const tppCameraHelper = new three.CameraHelper( tppCamera );
        const tpoCameraHelper = new three.CameraHelper( tpoCamera );

        let tpCamera = guiOption.who === "perspective" ? tppCamera : tpoCamera;
        let tpCameraHelper = guiOption.who === "perspective" ? tppCameraHelper : tpoCameraHelper;

        let fpCameraViewport = createFpViewport( canvas );
        let tpCameraViewport = createTpViewport( canvas, tpCamera );

        // Resize
        const observer = new ResizeObserver( entries => {

            for ( const entry of entries ) {

                canvas.width = Math.round( entry.contentBoxSize[ 0 ].inlineSize * devicePixelRatio );
                canvas.height = Math.round( entry.contentBoxSize[ 0 ].blockSize * devicePixelRatio );

                const aspect = canvas.width < canvas.height ? canvas.width / canvas.height * 2 : canvas.width / canvas.height / 2;

                fpCamera.setAspect( aspect );

            }

            fpCameraViewport = createFpViewport( canvas );
            tpCameraViewport = createTpViewport( canvas, tpCamera );

        } );

        observer.observe( canvas, { box: "content-box" } );

        // Render
        const startTime = performance.now();
        const translationMatrix = createTranslation( 150, 250, 0 );

        requestAnimationFrame( function loop () {

            //
            stats.begin();

            //
            requestAnimationFrame( loop );

            //
            const angle = ( performance.now() - startTime ) / 1000 * Math.PI / 10;
            const rotationMatrix = createYRotation( angle );
            const transformMatrix = multiply( rotationMatrix, translationMatrix );

            tpCamera.setCameraMatrix( transformMatrix );
            tpCamera.lookAt( [ 0, 0, 0 ] );
            tpCameraHelper.updateTransform();

            //
            renderer.clear();

            scene.add( tpCameraHelper );
            renderer.setViewport( ... fpCameraViewport );
            renderer.render( scene, fpCamera );

            scene.remove( tpCameraHelper );
            renderer.setViewport( ... tpCameraViewport );
            renderer.render( scene, tpCamera );

            //
            stats.end();

        } );


        // Dom
        this.domElement = document.createElement( "div" );
        this.domElement.append( renderer.getDomElement(), stats.dom );

    }

    public getDomElement () {

        return this.domElement;

    }

}

/**
 * 创建第一人称相机的视口范围
 */
function createFpViewport ( canvas: HTMLCanvasElement ): [ number, number, number, number ] {

    if ( canvas.width >= canvas.height ) return [ 0, 0, canvas.width / 2, canvas.height ];

    return [ 0, 0, canvas.width, canvas.height / 2 ];

}

/**
 * 创建第三人称相机的视口范围
 */
function createTpViewport ( canvas: HTMLCanvasElement, camera: three.PerspectiveCamera | three.OrthographicCamera ): [ number, number, number, number ] {

    const containerWidth = canvas.width >= canvas.height ? canvas.width / 2 : canvas.width;
    const containerHeight = canvas.width >= canvas.height ? canvas.height : canvas.height / 2;
    const containerAspect = containerWidth / containerHeight;
    const viewportAspect = camera instanceof three.PerspectiveCamera ? camera.getAspect() : camera.getWidth() / camera.getHeight();

    if ( viewportAspect >= containerAspect ) {

        const viewportWidth = containerWidth;
        const viewportHeight = viewportWidth / viewportAspect;
        const viewportOffset = ( containerHeight - viewportHeight ) / 2;

        return canvas.width >= canvas.height
            ? [ canvas.width / 2, viewportOffset, viewportWidth, viewportHeight ]
            : [ 0, canvas.height / 2, viewportWidth, viewportHeight ];

    }

    const viewportHeight = containerHeight;
    const viewportWidth = viewportHeight * viewportAspect;
    const viewportOffset = ( containerWidth - viewportWidth ) / 2;

    return canvas.width >= canvas.height
        ? [ canvas.width / 2 + viewportOffset, canvas.height / 2, viewportWidth, viewportHeight ]
        : [ viewportOffset, canvas.height / 2, viewportWidth, viewportHeight ];

}

export default WebglScene;