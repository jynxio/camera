// Declaration
import { matrix4 } from "../constant/declaration";

// Library
import Camera from "./Camera";
import { createOrthographic } from "../math/matrix4";

// Code
class OrthographicCamera extends Camera {

    private width: number;
    private height: number;
    private depth: number;
    private projectionMatrix: matrix4;

    public constructor ( width: number, height: number, depth: number ) {

        super();

        this.width = width;
        this.height = height;
        this.depth = depth;

        this.projectionMatrix = createOrthographic( this.width, this.height, this.depth );

    }

    public setWidth ( width: number ) {

        this.width = width;
        this.updateProjectionMatrix();

        return this;

    }

    public setHeight ( height: number ) {

        this.height = height;
        this.updateProjectionMatrix();

        return this;

    }

    public setDepth ( depth: number ) {

        this.depth = depth;
        this.updateProjectionMatrix();

        return this;

    }

    public getProjectionMatrix () {

        return this.projectionMatrix;

    }

    private updateProjectionMatrix () {

        this.projectionMatrix = createOrthographic( this.width, this.height, this.depth );

        return this;

    }

}

export default OrthographicCamera;