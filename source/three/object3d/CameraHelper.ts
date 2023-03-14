import Object3d from "./Object3d";
import PerspectiveCamera from "../camera/PerspectiveCamera";
import OrthographicCamera from "../camera/OrthographicCamera";

class CameraHelper extends Object3d {

    private camera: PerspectiveCamera | OrthographicCamera;

    public constructor ( camera: PerspectiveCamera | OrthographicCamera ) {

        super();

        this.camera = camera;
        this.setDrawType( "LINES" );
        this.updateProjection();
        this.updateTransform();

    }

    public updateProjection () {

        this.camera instanceof PerspectiveCamera
        ? this.updateForPerspectiveCamera( this.camera )
        : this.updateForOrthographicCamera( this.camera );

        return this;

    }

    public updateTransform () {

        this.setTransformMatrix( [ ... this.camera.getCameraMatrix() ] );

    }

    private updateForPerspectiveCamera ( camera: PerspectiveCamera ) {

        //
        const fov = camera.getFov();
        const aspect = camera.getAspect();
        const near = camera.getNear();
        const far = camera.getFar();

        //
        const colorData = new Uint8ClampedArray( 46 * 3 );
        const positionData = new Float32Array( 46 * 3 );

        // The four lines connecting the origin to the near face
        const nearY = near * Math.tan( fov / 2 );
        const nearX = nearY * aspect;
        const nearZ = near;

        [ positionData[ 0  ], positionData[ 1  ], positionData[ 2  ] ] = [ 0, 0, 0 ];
        [ positionData[ 3  ], positionData[ 4  ], positionData[ 5  ] ] = [ + nearX, + nearY, - nearZ ];
        [ positionData[ 6  ], positionData[ 7  ], positionData[ 8  ] ] = [ 0, 0, 0 ];
        [ positionData[ 9  ], positionData[ 10 ], positionData[ 11 ] ] = [ - nearX, + nearY, - nearZ ];
        [ positionData[ 12 ], positionData[ 13 ], positionData[ 14 ] ] = [ 0, 0, 0 ];
        [ positionData[ 15 ], positionData[ 16 ], positionData[ 17 ] ] = [ - nearX, - nearY, - nearZ ];
        [ positionData[ 18 ], positionData[ 19 ], positionData[ 20 ] ] = [ 0, 0, 0 ];
        [ positionData[ 21 ], positionData[ 22 ], positionData[ 23 ] ] = [ + nearX, - nearY, - nearZ ];

        [ colorData[ 0  ], colorData[ 1  ], colorData[ 2  ] ] = [ 200, 59, 52 ];
        [ colorData[ 3  ], colorData[ 4  ], colorData[ 5  ] ] = [ 200, 59, 52 ];
        [ colorData[ 6  ], colorData[ 7  ], colorData[ 8  ] ] = [ 200, 59, 52 ];
        [ colorData[ 9  ], colorData[ 10 ], colorData[ 11 ] ] = [ 200, 59, 52 ];
        [ colorData[ 12 ], colorData[ 13 ], colorData[ 14 ] ] = [ 200, 59, 52 ];
        [ colorData[ 15 ], colorData[ 16 ], colorData[ 17 ] ] = [ 200, 59, 52 ];
        [ colorData[ 18 ], colorData[ 19 ], colorData[ 20 ] ] = [ 200, 59, 52 ];
        [ colorData[ 21 ], colorData[ 22 ], colorData[ 23 ] ] = [ 200, 59, 52 ];

        // The four lines connecting the near face to the far face
        const farY = far / near * nearY;
        const farX = far / near * nearX;
        const farZ = far;

        [ positionData[ 24 ], positionData[ 25 ], positionData[ 26 ] ] = [ + nearX, + nearY, - nearZ ];
        [ positionData[ 27 ], positionData[ 28 ], positionData[ 29 ] ] = [ + farX, + farY, - farZ ];
        [ positionData[ 30 ], positionData[ 31 ], positionData[ 32 ] ] = [ - nearX, + nearY, - nearZ ];
        [ positionData[ 33 ], positionData[ 34 ], positionData[ 35 ] ] = [ - farX, + farY, - farZ ];
        [ positionData[ 36 ], positionData[ 37 ], positionData[ 38 ] ] = [ - nearX, - nearY, - nearZ ];
        [ positionData[ 39 ], positionData[ 40 ], positionData[ 41 ] ] = [ - farX, - farY, - farZ ];
        [ positionData[ 42 ], positionData[ 43 ], positionData[ 44 ] ] = [ + nearX, - nearY, - nearZ ];
        [ positionData[ 45 ], positionData[ 46 ], positionData[ 47 ] ] = [ + farX, - farY, - farZ ];

        [ colorData[ 24 ], colorData[ 25 ], colorData[ 26 ] ] = [ 245, 202, 80 ];
        [ colorData[ 27 ], colorData[ 28 ], colorData[ 29 ] ] = [ 245, 202, 80 ];
        [ colorData[ 30 ], colorData[ 31 ], colorData[ 32 ] ] = [ 245, 202, 80 ];
        [ colorData[ 33 ], colorData[ 34 ], colorData[ 35 ] ] = [ 245, 202, 80 ];
        [ colorData[ 36 ], colorData[ 37 ], colorData[ 38 ] ] = [ 245, 202, 80 ];
        [ colorData[ 39 ], colorData[ 40 ], colorData[ 41 ] ] = [ 245, 202, 80 ];
        [ colorData[ 42 ], colorData[ 43 ], colorData[ 44 ] ] = [ 245, 202, 80 ];
        [ colorData[ 45 ], colorData[ 46 ], colorData[ 47 ] ] = [ 245, 202, 80 ];

        // The near face
        [ positionData[ 48 ], positionData[ 49 ], positionData[ 50 ] ] = [ + nearX, + nearY, - nearZ ];
        [ positionData[ 51 ], positionData[ 52 ], positionData[ 53 ] ] = [ - nearX, + nearY, - nearZ ];
        [ positionData[ 54 ], positionData[ 55 ], positionData[ 56 ] ] = [ - nearX, + nearY, - nearZ ];
        [ positionData[ 57 ], positionData[ 58 ], positionData[ 59 ] ] = [ - nearX, - nearY, - nearZ ];
        [ positionData[ 60 ], positionData[ 61 ], positionData[ 62 ] ] = [ - nearX, - nearY, - nearZ ];
        [ positionData[ 63 ], positionData[ 64 ], positionData[ 65 ] ] = [ + nearX, - nearY, - nearZ ];
        [ positionData[ 66 ], positionData[ 67 ], positionData[ 68 ] ] = [ + nearX, - nearY, - nearZ ];
        [ positionData[ 69 ], positionData[ 70 ], positionData[ 71 ] ] = [ + nearX, + nearY, - nearZ ];

        [ colorData[ 48 ], colorData[ 49 ], colorData[ 50 ] ] = [ 255, 255, 255 ]; // TESTING
        [ colorData[ 51 ], colorData[ 52 ], colorData[ 53 ] ] = [ 255, 255, 255 ]; // TESTING
        [ colorData[ 54 ], colorData[ 55 ], colorData[ 56 ] ] = [ 200, 59, 52 ];
        [ colorData[ 57 ], colorData[ 58 ], colorData[ 59 ] ] = [ 200, 59, 52 ];
        [ colorData[ 60 ], colorData[ 61 ], colorData[ 62 ] ] = [ 200, 59, 52 ];
        [ colorData[ 63 ], colorData[ 64 ], colorData[ 65 ] ] = [ 200, 59, 52 ];
        [ colorData[ 66 ], colorData[ 67 ], colorData[ 68 ] ] = [ 200, 59, 52 ];
        [ colorData[ 69 ], colorData[ 70 ], colorData[ 71 ] ] = [ 200, 59, 52 ];

        // The far face
        [ positionData[ 72 ], positionData[ 73 ], positionData[ 74 ] ] = [ + farX, + farY, - farZ ];
        [ positionData[ 75 ], positionData[ 76 ], positionData[ 77 ] ] = [ - farX, + farY, - farZ ];
        [ positionData[ 78 ], positionData[ 79 ], positionData[ 80 ] ] = [ - farX, + farY, - farZ ];
        [ positionData[ 81 ], positionData[ 82 ], positionData[ 83 ] ] = [ - farX, - farY, - farZ ];
        [ positionData[ 84 ], positionData[ 85 ], positionData[ 86 ] ] = [ - farX, - farY, - farZ ];
        [ positionData[ 87 ], positionData[ 88 ], positionData[ 89 ] ] = [ + farX, - farY, - farZ ];
        [ positionData[ 90 ], positionData[ 91 ], positionData[ 92 ] ] = [ + farX, - farY, - farZ ];
        [ positionData[ 93 ], positionData[ 94 ], positionData[ 95 ] ] = [ + farX, + farY, - farZ ];

        [ colorData[ 72 ], colorData[ 73 ], colorData[ 74 ] ] = [ 245, 202, 80 ];
        [ colorData[ 75 ], colorData[ 76 ], colorData[ 77 ] ] = [ 245, 202, 80 ];
        [ colorData[ 78 ], colorData[ 79 ], colorData[ 80 ] ] = [ 245, 202, 80 ];
        [ colorData[ 81 ], colorData[ 82 ], colorData[ 83 ] ] = [ 245, 202, 80 ];
        [ colorData[ 84 ], colorData[ 85 ], colorData[ 86 ] ] = [ 245, 202, 80 ];
        [ colorData[ 87 ], colorData[ 88 ], colorData[ 89 ] ] = [ 245, 202, 80 ];
        [ colorData[ 90 ], colorData[ 91 ], colorData[ 92 ] ] = [ 245, 202, 80 ];
        [ colorData[ 93 ], colorData[ 94 ], colorData[ 95 ] ] = [ 245, 202, 80 ];

        // The cross wire of the near face
        [ positionData[ 96  ], positionData[ 97  ], positionData[ 98  ] ] = [ 0, + nearY, - nearZ ];
        [ positionData[ 99  ], positionData[ 100 ], positionData[ 101 ] ] = [ 0, - nearY, - nearZ ];
        [ positionData[ 102 ], positionData[ 103 ], positionData[ 104 ] ] = [ + nearX, 0, - nearZ ];
        [ positionData[ 105 ], positionData[ 106 ], positionData[ 107 ] ] = [ - nearX, 0, - nearZ ];

        [ colorData[ 96  ], colorData[ 97  ], colorData[ 98  ] ] = [ 88, 88, 88 ];
        [ colorData[ 99  ], colorData[ 100 ], colorData[ 101 ] ] = [ 88, 88, 88 ];
        [ colorData[ 102 ], colorData[ 103 ], colorData[ 104 ] ] = [ 88, 88, 88 ];
        [ colorData[ 105 ], colorData[ 106 ], colorData[ 107 ] ] = [ 88, 88, 88 ];

        // The cross wire of the far face
        [ positionData[ 108 ], positionData[ 109 ], positionData[ 110 ] ] = [ 0, + farY, - farZ ];
        [ positionData[ 111 ], positionData[ 112 ], positionData[ 113 ] ] = [ 0, - farY, - farZ ];
        [ positionData[ 114 ], positionData[ 115 ], positionData[ 116 ] ] = [ + farX, 0, - farZ ];
        [ positionData[ 117 ], positionData[ 118 ], positionData[ 119 ] ] = [ - farX, 0, - farZ ];

        [ colorData[ 108 ], colorData[ 109 ], colorData[ 110 ] ] = [ 88, 88, 88 ];
        [ colorData[ 111 ], colorData[ 112 ], colorData[ 113 ] ] = [ 88, 88, 88 ];
        [ colorData[ 114 ], colorData[ 115 ], colorData[ 116 ] ] = [ 88, 88, 88 ];
        [ colorData[ 117 ], colorData[ 118 ], colorData[ 119 ] ] = [ 88, 88, 88 ];

        // Triangle
        const a = [ + nearX * 0.6, nearY * 1.1, - nearZ ];
        const b = [ - nearX * 0.6, nearY * 1.1, - nearZ ];
        const c = [ 0, nearY * 1.1 + nearX * 0.6 * ( 3 ** 0.5 ), - nearZ ];

        [ positionData[ 120 ], positionData[ 121 ], positionData[ 122 ] ] = [ ... a ];
        [ positionData[ 123 ], positionData[ 124 ], positionData[ 125 ] ] = [ ... b ];
        [ positionData[ 126 ], positionData[ 127 ], positionData[ 128 ] ] = [ ... b ];
        [ positionData[ 129 ], positionData[ 130 ], positionData[ 131 ] ] = [ ... c ];
        [ positionData[ 132 ], positionData[ 133 ], positionData[ 134 ] ] = [ ... c ];
        [ positionData[ 135 ], positionData[ 136 ], positionData[ 137 ] ] = [ ... a ];

        [ colorData[ 120 ], colorData[ 121 ], colorData[ 122 ] ] = [ 101, 213, 63 ];
        [ colorData[ 123 ], colorData[ 124 ], colorData[ 125 ] ] = [ 101, 213, 63 ];
        [ colorData[ 126 ], colorData[ 127 ], colorData[ 128 ] ] = [ 101, 213, 63 ];
        [ colorData[ 129 ], colorData[ 130 ], colorData[ 131 ] ] = [ 101, 213, 63 ];
        [ colorData[ 132 ], colorData[ 133 ], colorData[ 134 ] ] = [ 101, 213, 63 ];
        [ colorData[ 135 ], colorData[ 136 ], colorData[ 137 ] ] = [ 101, 213, 63 ];

        //
        this.setColorData( colorData );
        this.setPositionData( positionData );

        //
        return this;

    }

    private updateForOrthographicCamera ( camera: OrthographicCamera ) {

        // TODO

        return this;

    }

}

export default CameraHelper;