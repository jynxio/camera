import Object3d from "../object3d/Object3d";

class Scene {

    private models = new Set();

    public constructor () {}

    public add ( ... object3ds: Object3d[] ) {

        object3ds.forEach( object3d => this.models.add( object3d ) );

        return this;

    }

    public remove ( ... object3ds: Object3d[] ) {

        object3ds.forEach( object3d => this.models.delete( object3d ) );

        return this;

    }

    public get () {

        return Array.from( this.models ) as Object3d[];

    }

}

export default Scene;