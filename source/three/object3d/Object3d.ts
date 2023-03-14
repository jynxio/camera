import { matrix4, drawType } from "../constant/declaration";

class Object3d {

    private drawType: drawType;
    private colorData: Uint8ClampedArray;
    private positionData: Float32Array;
    private transformMatrix: matrix4;

    public constructor () {

        this.drawType = "LINE_STRIP";
        this.colorData = new Uint8ClampedArray( 0 );
        this.positionData = new Float32Array( 0 );
        this.transformMatrix = [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1,
        ];

    }

    public getTransformMatrix () {

        return this.transformMatrix;

    }

    public setTransformMatrix ( transformMatrix: matrix4 ) {

        this.transformMatrix = transformMatrix;

        return this;

    }

    public getColorData () {

        return this.colorData;

    }

    public setColorData ( colorData: Uint8ClampedArray ) {

        this.colorData = colorData;

        return this;

    }

    public getPositionData () {

        return this.positionData;

    }

    public setPositionData ( positionData: Float32Array ) {

        this.positionData = positionData;

        return this;

    }

    public getDrawType () {

        return this.drawType;

    }

    public setDrawType ( drawType: drawType ) {

        this.drawType = drawType;

        return this;

    }

}

export default Object3d;