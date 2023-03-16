import * as three from "../three/index";
import Stats from "stats.js";
import Gui from "lil-gui";
import { createTranslation, createYRotation, multiply } from "../three/math/matrix4";
import { degreeToRadian } from "../three/math/angle";

class WebglScene {

    private domElement: HTMLCanvasElement;

    public constructor () {

        // Stats panel
        const stats = new Stats();

        stats.showPanel( 0 );
        stats.dom.style.setProperty( "right", "0" );
        stats.dom.style.setProperty( "left", "auto" );
        document.body.prepend( stats.dom );

        // Gui panel
        let tpCameraName = "perspective" as "perspective" | "orthographic";

        const gui = new Gui().close();
        const tppCameraOption = { fov: 40, aspect: 1, near: 100, far: 400 };
        const tpoCameraOption = { width: 200, height: 200, near: 200, far: 400 };

        const tppCameraControllers = [
            gui.add( tppCameraOption, "fov", 10, 70, 0.6 ).name( "Fov" ).onChange( updateTpCamera ).show(),
            gui.add( tppCameraOption, "aspect", 0.5, 2, 0.015 ).name( "Aspect" ).onChange( updateTpCamera ).show(),
            gui.add( tppCameraOption, "near", 50, 300, 2.5 ).name( "Near" ).onChange( updateTpCamera ).show(),
            gui.add( tppCameraOption, "far", 300, 500, 2 ).name( "Far" ).onChange( updateTpCamera ).show(),
        ];
        const tpoCameraControllers = [
            gui.add( tpoCameraOption, "width", 100, 400, 3 ).name( "Width" ).onChange( updateTpCamera ).hide(),
            gui.add( tpoCameraOption, "height", 100, 400, 3 ).name( "Height" ).onChange( updateTpCamera ).hide(),
            gui.add( tpoCameraOption, "near", 100, 300, 2 ).name( "Near" ).onChange( updateTpCamera ).hide(),
            gui.add( tpoCameraOption, "far", 300, 600, 3 ).name( "Far" ).onChange( updateTpCamera ).hide(),
        ];
        const switchController = gui.add( { switch: switchTpCamera }, "switch" );

        function switchTpCamera () {

            tpCameraName = tpCameraName === "perspective" ? "orthographic" : "perspective";

            if ( tpCameraName === "perspective" ) {

                tppCameraControllers.forEach( controller => controller.show() );
                tpoCameraControllers.forEach( controller => controller.hide() );

                tpCamera = tppCamera;
                tpCameraHelper = tppCameraHelper;
                tpCameraViewport = createTpViewport( canvas, tppCamera );

                return;

            }

            tppCameraControllers.forEach( controller => controller.hide() );
            tpoCameraControllers.forEach( controller => controller.show() );

            tpCamera = tpoCamera;
            tpCameraHelper = tpoCameraHelper;
            tpCameraViewport = createTpViewport( canvas, tpoCamera );

        }

        function updateTpCamera () {

            tpCamera instanceof three.PerspectiveCamera
                ? tpCamera.setFov( degreeToRadian( tppCameraOption.fov ) ).setAspect( tppCameraOption.aspect ).setNear( tppCameraOption.near ).setFar( tppCameraOption.far )
                : tpCamera.setWidth( tpoCameraOption.width ).setHeight( tpoCameraOption.height ).setNear( tpoCameraOption.near ).setFar( tpoCameraOption.far );

            tpCameraHelper.updateProjection();
            tpCameraViewport = createTpViewport( canvas, tpCamera );

        }

        // Basic scene
        const renderer = new three.Renderer();
        const canvas = renderer.getDomElement();

        this.domElement = canvas;
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

        const tppCamera = new three.PerspectiveCamera( degreeToRadian( tppCameraOption.fov ), tppCameraOption.aspect, tppCameraOption.near, tppCameraOption.far ); // Third-person perspective camera
        const tpoCamera = new three.OrthographicCamera( tpoCameraOption.width, tpoCameraOption.height, tpoCameraOption.near, tpoCameraOption.far );            // Third-person orthographic camera
        const tppCameraHelper = new three.CameraHelper( tppCamera );
        const tpoCameraHelper = new three.CameraHelper( tpoCamera );

        let tpCamera = tpCameraName === "perspective" ? tppCamera : tpoCamera;
        let tpCameraHelper = tpCameraName === "perspective" ? tppCameraHelper : tpoCameraHelper;

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

            stats.begin();

            const angle = ( performance.now() - startTime ) / 1000 * Math.PI / 10;
            const rotationMatrix = createYRotation( angle );
            const transformMatrix = multiply( rotationMatrix, translationMatrix );

            tpCamera.setCameraMatrix( transformMatrix );
            tpCamera.lookAt( [ 0, 0, 0 ] );
            tpCameraHelper.updateTransform();

            renderer.clear();

            scene.add( tpCameraHelper );
            renderer.setViewport( ... fpCameraViewport );
            renderer.render( scene, fpCamera );

            scene.remove( tpCameraHelper );
            renderer.setViewport( ... tpCameraViewport );
            renderer.render( scene, tpCamera );

            requestAnimationFrame( loop );
            stats.end();

        } );

    }

    public getDomElement () {

        return this.domElement;

    }

}

/**
 * 创建第一人称相机的视口范围，如果画布的尺寸发生了改变，那么就应当调用该方法来创建新的视口。
 */
function createFpViewport ( canvas: HTMLCanvasElement ): [ number, number, number, number ] {

    if ( canvas.width >= canvas.height ) return [ 0, 0, canvas.width / 2, canvas.height ];

    return [ 0, 0, canvas.width, canvas.height / 2 ];

}

/**
 * 创建第三人称相机的视口范围，如果画布的尺寸或相机的宽高比发生了改变，那么就应当调用该方法来创建新的视口。
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
            : [ 0, canvas.height / 2 + viewportOffset, viewportWidth, viewportHeight ];

    }

    const viewportHeight = containerHeight;
    const viewportWidth = viewportHeight * viewportAspect;
    const viewportOffset = ( containerWidth - viewportWidth ) / 2;

    return canvas.width >= canvas.height
        ? [ canvas.width / 2 + viewportOffset, 0, viewportWidth, viewportHeight ]
        : [ viewportOffset, canvas.height / 2, viewportWidth, viewportHeight ];

}

export default WebglScene;