import Camera from "./Camera";
import { createOrthographic } from "../math/matrix4";

class PerspectiveCamera extends Camera {

    private width: number;
    private height: number;
    private depth: number;

    public constructor ( width: number, height: number, depth: number ) {

        super();

        this.width = width;
        this.height = height;
        this.depth = depth;

        this.setCameraMatrix( createOrthographic( this.width, this.height, this.depth ) );

    }

    public setWidth ( width: number ) {

        this.width = width;
        this.update();

        return this;

    }

    public setHeight ( height: number ) {

        this.height = height;
        this.update();

        return this;

    }

    public setDepth ( depth: number ) {

        this.depth = depth;
        this.update();

        return this;

    }

    private update () {

        this.setCameraMatrix( createOrthographic( this.width, this.height, this.depth ) );

        return this;

    }

}

export default PerspectiveCamera;