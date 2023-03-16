// Declaration
import { matrix4 } from "../constant/declaration";

// Library
import Camera from "./Camera";
import { createOrthographic } from "../math/matrix4";

// Code
class OrthographicCamera extends Camera {

    private width: number;
    private height: number;
    private near: number;
    private far: number;
    private projectionMatrix: matrix4;

    public constructor ( width: number, height: number, near: number, far: number ) {

        super();

        this.width = width;
        this.height = height;
        this.near = near;
        this.far = far;

        this.projectionMatrix = createOrthographic( this.width, this.height, this.near, this.far );

    }

    public getWidth () {

        return this.width;

    }

    public setWidth ( width: number ) {

        this.width = width;
        this.updateProjectionMatrix();

        return this;

    }

    public getHeight () {

        return this.height;

    }

    public setHeight ( height: number ) {

        this.height = height;
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

        this.projectionMatrix = createOrthographic( this.width, this.height, this.near, this.far );

        return this;

    }

}

export default OrthographicCamera;