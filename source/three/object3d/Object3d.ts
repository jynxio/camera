import { matrix4, drawType } from "../constant/declaration";

class Object3d {

    private drawType: drawType;
    private colorData: Uint8Array;
    private positionData: Float32Array;
    private matrix: matrix4;

    public constructor () {

        this.drawType = "LINE_STRIP";
        this.colorData = new Uint8Array( 0 );
        this.positionData = new Float32Array( 0 );
        this.matrix = [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1,
        ];


    }

    public getMatrix () {

        return this.matrix;

    }

    public setMatrix ( matrix: matrix4 ) {

        this.matrix = matrix;

        return this;

    }

    public getColorData () {

        return this.colorData;

    }

    public setColorData ( colorData: Uint8Array ) {

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