class Object3d {

    #colors: Uint8Array;
    #positions: Float32Array;

    #scale: number[];
    #matrix: number[];
    #rotation: number[];
    #translation: number[];

    #drawCount: number;
    #drawType: "POINTS" | "LINE_STRIP" | "LINE_LOOP" | "LINES" | "TRIANGLE_STRIP" | "TRIANGLE_FAN" | "TRIANGLES";

    public constructor () {

        // TODO 这种模式是否会造成内存泄漏？

    }

    public getColors () {

        const new_colors = new Uint8Array( this.#colors.length );

        for ( let i = 0; i < new_colors.length; i ++ ) new_colors[ i ] = this.#colors[ i ];

    }

    public setColors ( colors: Uint8Array ) {

        this.#colors = colors;

        return this;

    }

    public getPositions () {

        const new_positions = new Float32Array( this.#positions.length );

        for ( let i = 0; i < new_positions.length; i ++ ) new_positions[ i ] = this.#positions[ i ];

        return new_positions;

    }

}

export default Object3d;