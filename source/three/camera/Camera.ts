// Declaration
import { matrix4, vector3 } from "../constant/declaration";

// Library
import { inverse } from "../math/matrix4";
import { subtract, normalize, cross } from "../math/vector3";

// Code
class Camera {

    private viewMatrix: matrix4;
    private cameraMatrix: matrix4;

    public constructor () {

        this.cameraMatrix = [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1,
        ];
        this.viewMatrix = inverse( this.cameraMatrix );

    }

    public getViewMatrix () {

        return this.viewMatrix;

    }

    public getCameraMatrix () {

        return this.cameraMatrix;

    }

    public setCameraMatrix ( matrix: matrix4 ) {

        this.cameraMatrix = matrix;
        this.viewMatrix = inverse( this.cameraMatrix );

        return this;

    }

    public lookAt ( target: vector3 ) {

        const up: vector3 = [ 0, 1, 0 ];                                  // 假设相机的up朝向永远都是[0,1,0]
        const position: vector3 = this.getCameraMatrix().slice( 12, 15 ); //

        const zAxis = normalize( subtract( position, target ) );
        const xAxis = normalize( cross( up, zAxis ) );
        const yAxis = normalize( cross( zAxis, xAxis ) );

        const cameraMatrix: matrix4 = [
            xAxis[ 0 ], xAxis[ 1 ], xAxis[ 2 ], 0,
            yAxis[ 0 ], yAxis[ 1 ], yAxis[ 2 ], 0,
            zAxis[ 0 ], zAxis[ 1 ], zAxis[ 2 ], 0,
            position[ 0 ], position[ 1 ], position[ 2 ], 1,
        ];

        this.setCameraMatrix( cameraMatrix );

        return this;

    }

}

export default Camera;