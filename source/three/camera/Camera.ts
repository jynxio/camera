// Declaration
import { matrix4 } from "../constant/declaration";

// Library
import { inverse } from "../math/matrix4";

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

}

export default Camera;