import { getCoordinatesIndex, getCoordinatePair } from './logic/conversions';
export default function findSmartAttack(hitBoard, shipBoard, findShip) {
    let index = undefined;
    for (let i = 0; i < 100; i++) {
        if (hitBoard[i] === 'H') {
            const target = shipBoard.some((ship) => {
                return (
                    ship &&
                    !ship.isSunk() &&
                    getCoordinateArr(
                        getCoordinatePair(shipBoard.indexOf(ship)),
                        ship.getDirection(),
                        ship.getLength()
                    )
                        .map((coor) => {
                            return getCoordinatesIndex(coor);
                        })
                        .includes(i)
                );
            });

            if (target) {
                index = i;
                break;
            }
        }
    }

    if (index === undefined) {
        return;
    }

    if (
        hitBoard[index + 1] === 'H' &&
        !findShip(getCoordinatePair(index + 1)).isSunk()
    ) {
        let i = 1;
        let empty;
        while (hitBoard[index + i] === 'H') {
            console.log(index);
            if (findShip(getCoordinatePair(index + i)).isSunk()) {
                if (!filter(index, [index - 1], hitBoard)[0]) empty = true;
                else return filter(index, [index - 1], hitBoard);
            }
            i += 1;
        }

        if (filter(index, [index - 1, index + i], hitBoard)[0] && !empty) {
            return filter(index, [index - 1, index + i], hitBoard);
        }
    }
    if (
        hitBoard[index + 10] === 'H' &&
        !findShip(getCoordinatePair(index + 10)).isSunk()
    ) {
        let empty;
        let i = 1;
        while (hitBoard[index + i * 10] === 'H') {
            if (findShip(getCoordinatePair(index + i * 10)).isSunk()) {
                if (!filter(index, [index - 10], hitBoard)) empty = true;
                else return filter(index, [index - 10], hitBoard);
            }
            i += 1;
        }

        if (
            filter(index, [index - 10, index + i * 10], hitBoard)[0] &&
            !empty
        ) {
            return filter(index, [index - 10, index + i * 10], hitBoard);
        }
    }
    return filter(
        index,
        [index + 1, index - 1, index + 10, index - 10],
        hitBoard
    );
}

//move out of here
function getCoordinateArr(coor, direction, length) {
    const arr = [];
    if (direction === 'vertical') {
        for (let i = coor[1]; i < coor[1] + length; i++) {
            arr.push([coor[0], i]);
        }
    } else {
        for (let i = coor[0]; i < coor[0] + length; i++) {
            arr.push([i, coor[1]]);
        }
    }
    return arr;
}

function filter(index, arr, hitBoard) {
    return arr.filter((i) => {
        return (
            i >= 0 &&
            i < 100 &&
            ((i % 10 > index % 10 &&
                Math.floor(i / 10) === Math.floor(index / 10)) ||
                (i % 10 < index % 10 &&
                    Math.floor(i / 10) === Math.floor(index / 10)) ||
                i % 10 === index % 10) &&
            !hitBoard[i]
        );
    });
}
