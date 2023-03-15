function radianToDegree ( radian: number ) {

    return radian / Math.PI * 180;

}

function degreeToRadian ( degree: number ) {

    return degree / 180 * Math.PI;

}

export { radianToDegree, degreeToRadian };