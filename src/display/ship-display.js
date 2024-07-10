import battleshipH from '../images/battleship.svg';
import carrierH from '../images/carrier.svg';
import destroyerH from '../images/destroyer.svg';
import submarineH from '../images/submarine.svg';

import battleshipV from '../images/vertical-battleship.svg';
import carrierV from '../images/vertical-carrier.svg';
import destroyerV from '../images/vertical-destroyer.svg';
import submarineV from '../images/vertical-submarine.svg';

const horizontalShips = [destroyerH, submarineH, battleshipH, carrierH];
const verticalShips = [destroyerV, submarineV, battleshipV, carrierV];

function getDirection(ship) {
    return ship.classList.contains('vertical') ? 'vertical' : 'horizontal';
}

function getLength(target) {
    const measure = target.classList.contains('vertical') ? 'height' : 'width';
    const gridSlotWidth =
        document.querySelector('.ship-grid').getBoundingClientRect()['width'] /
        10;

    return Math.round(target.getBoundingClientRect()[measure] / gridSlotWidth);
}

function getFirstSquare(left, top) {
    const errorMargin = getSquares()[0].getBoundingClientRect().width / 2;
    return getSquares().filter((square) => {
        return (
            square.offsetLeft > left - errorMargin &&
            square.offsetTop > top - errorMargin &&
            square.offsetLeft <= left + errorMargin &&
            square.offsetTop <= top + errorMargin
        );
    })[0];
}

function getSquares() {
    return Array.from(document.querySelectorAll('.grid div'));
}

function getGridArea(coordinate, length, direction) {
    if (direction === 'vertical') {
        return `${coordinate[1] + 1} / ${coordinate[0] + 1} / ${coordinate[1] + 1 + length} / span 1`;
    } else {
        return `${coordinate[1] + 1} /${coordinate[0] + 1} / span 1 / ${coordinate[0] + 1 + length}`;
    }
}

function getCoordinates(index) {
    return [index % 10, Math.floor(index / 10)];
}

function findLeft(ship) {
    console.log(ship.offsetParent);
    if (ship.offsetParent != document.body) {
        return ship.offsetParent.offsetLeft + ship.offsetLeft;
    }
    return ship.offsetLeft;
}

function findTop(ship) {
    if (ship.offsetParent != document.body) {
        return ship.offsetParent.offsetTop + ship.offsetTop;
    }
    return ship.offsetTop;
}

function createShipImg(length, direction) {
    const image = document.createElement('img');
    const shipArray =
        direction === 'horizontal' ? horizontalShips : verticalShips;
    image.src = shipArray[length - 2];
    image.setAttribute('draggable', 'true');
    return image;
}
export {
    createShipImg,
    getFirstSquare,
    getLength,
    getDirection,
    getCoordinates,
    getGridArea,
    getSquares,
    findLeft,
    findTop,
};
