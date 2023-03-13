// Declaration
import { radian, matrix4 } from "../constant/declaration";

// Library
import Camera from "./Camera";
import { createPerspective } from "../math/matrix4";

// Code
class PerspectiveCamera extends Camera {

    private fov: radian;
    private aspect: number;
    private near: number;
    private far: number;
    private projectionMatrix: matrix4;

    public constructor ( fov: radian, aspect: number, near: number, far: number ) {

        super();

        this.fov = fov;
        this.aspect = aspect;
        this.near = near;
        this.far = far;

        this.projectionMatrix = createPerspective( this.fov, this.aspect, this.near, this.far );

    }

    public getFov () {

        return this.fov;

    }

    public setFov ( fov: radian ) {

        this.fov = fov;
        this.updateProjectionMatrix();

        return this;

    }

    public getAspect () {

        return this.aspect;

    }

    public setAspect ( aspect: number ) {

        this.aspect = aspect;
        this.updateProjectionMatrix();

        return this;

    }

    public getNear () {

        return this.near;

    }

    public setNear ( near: number ) {

        this.near = near;
        this.updateProjectionMatrix();

        return this;

    }

    public getFar () {

        return this.far;

    }

    public setFar ( far: number ) {

        this.far = far;
        this.updateProjectionMatrix();

        return this;

    }

    public getProjectionMatrix () {

        return this.projectionMatrix;

    }

    private updateProjectionMatrix () {

        this.projectionMatrix = createPerspective( this.fov, this.aspect, this.near, this.far );

        return this;

    }

}

export default PerspectiveCamera;