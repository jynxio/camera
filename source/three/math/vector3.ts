import { vector3 } from "../constant/declaration";

function subtract ( a: vector3, b: vector3 ) {

    return [ a[ 0 ] - b[ 0 ], a[ 1 ] - b[ 1 ], a[ 2 ] - b[ 2 ] ] as vector3;

}

function cross ( a: vector3, b: vector3 ) {

    return [
        a[ 1 ] * b[ 2 ] - a[ 2 ] * b[ 1 ],
        a[ 2 ] * b[ 0 ] - a[ 0 ] * b[ 2 ],
        a[ 0 ] * b[ 1 ] - a[ 1 ] * b[ 0 ],
    ] as vector3;

}

function normalize ( v: vector3 ) {

    const length = Math.sqrt( v[ 0 ] * v[ 0 ] + v[ 1 ] * v[ 1 ] + v[ 2 ] * v[ 2 ] );

    if ( length < Number.EPSILON ) throw new Error( "The unit vector could not be normalized." );

    return [ v[ 0 ] / length, v[ 1 ] / length, v[ 2 ] / length ] as vector3;

}

export { subtract, cross, normalize };