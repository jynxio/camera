// Declaration
import { radian } from "../constant/declaration";

// Library
import Camera from "./Camera";
import { createPerspective } from "../math/matrix4";

// Code
class PerspectiveCamera extends Camera {

    private fov: radian;
    private aspect: number;
    private near: number;
    private far: number;

    public constructor ( fov: radian, aspect: number, near: number, far: number ) {

        super();

        this.fov = fov;
        this.aspect = aspect;
        this.near = near;
        this.far = far;

        this.setCameraMatrix( createPerspective( this.fov, this.aspect, this.near, this.far ) );

    }

    public setFov ( fov: radian ) {

        this.fov = fov;
        this.update();

        return this;

    }

    public setAspect ( aspect: number ) {

        this.aspect = aspect;
        this.update();

        return this;

    }

    public setNear ( near: number ) {

        this.near = near;
        this.update();

        return this;

    }

    public setFar ( far: number ) {

        this.far = far;
        this.update();

        return this;

    }

    private update () {

        this.setCameraMatrix( createPerspective( this.fov, this.aspect, this.near, this.far ) );

        return this;

    }

}

export default PerspectiveCamera;