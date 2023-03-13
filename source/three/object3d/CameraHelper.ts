import Object3d from "./Object3d";
import PerspectiveCamera from "../camera/PerspectiveCamera";
import OrthographicCamera from "../camera/OrthographicCamera";

class CameraHelper extends Object3d {

    private camera: PerspectiveCamera | OrthographicCamera;

    public constructor ( camera: PerspectiveCamera | OrthographicCamera ) {

        super();

        this.camera = camera;
        this.setDrawType( "LINES" );
        this.update();

    }

    public update () {

        this.camera instanceof PerspectiveCamera
        ? this.updateForPerspectiveCamera( this.camera )
        : this.updateForOrthographicCamera( this.camera );

        return this;

    }

    private updateForPerspectiveCamera ( camera: PerspectiveCamera ) {

        //
        const fov = camera.getFov();
        const aspect = camera.getAspect();
        const near = camera.getNear();
        const far = camera.getFar();
        const cameraMatrix = camera.getCameraMatrix();

        //
        const colorData = new Array( 46 * 3 );    // TODO How to declare a fixed length array?
        const positionData = new Array( 46 * 3 ); // TODO How to declare a fixed length array?

        // The four lines connecting the origin to the near plane
        const nearY = near * Math.tan( fov / 2 );
        const nearX = nearY * aspect;


        //
        return this;

    }

    private updateForOrthographicCamera ( camera: OrthographicCamera ) {

        // TODO

        return this;

    }

}

export default CameraHelper;