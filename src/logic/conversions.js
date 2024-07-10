//gameboard

function getCoordinatesIndex(coordinates) {
    return Number(`${coordinates[1]}${coordinates[0]}`);
}

function getCoordinatePair(index) {
    if (index < 10) {
        return [index, 0];
    }
    return index
        .toString()
        .split('')
        .reverse()
        .map((num) => Number(num));
}

export { getCoordinatesIndex, getCoordinatePair };
