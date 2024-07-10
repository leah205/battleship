import Ship from './ship';
import findSmartAttack from './smart_attack';
import { getCoordinatesIndex, getCoordinatePair } from './logic/conversions';

export default function Gameboard() {
    const shipBoard = [];
    shipBoard[99] = undefined;
    const hitBoard = [];
    const getHitBoard = () => hitBoard;
    const getShipBoard = () => shipBoard;

    function getShipAt(starting) {
        return shipBoard.find(
            (ship) =>
                getCoordinatePair(getShipBoard().indexOf(ship)) === starting
        );
    }

    function findAttackedShip(coordinates) {
        return shipBoard.find((ship) => {
            if (ship) {
                return getCoordinateArr(
                    getCoordinatePair(getShipBoard().indexOf(ship)),
                    ship.getDirection(),
                    ship.getLength()
                ).some((coor) => {
                    return (
                        coor[0] == coordinates[0] && coor[1] == coordinates[1]
                    );
                });
            }
        });
    }
    function receiveAttack(coordinates) {
        if (findAttackedShip(coordinates)) {
            findAttackedShip(coordinates).hit();
            addAttack(getCoordinatesIndex(coordinates), 'H');
        } else {
            addAttack(getCoordinatesIndex(coordinates), 'M');
        }
    }

    function addAttack(index, status) {
        hitBoard[index] = status;
    }

    function allShipsSunk() {
        return getShipBoard()
            .filter((ship) => ship)
            .every((ship) => ship.isSunk());
    }
    function placeShip(coordinates, length, direction) {
        shipBoard[getCoordinatesIndex(coordinates)] = Ship(length, direction);
    }

    function removeShip(coor) {
        getShipBoard()[getCoordinatesIndex(coor)] = '';
    }

    function coordinateTaken(coor) {
        return !!getShipBoard()[getCoordinatesIndex(coor)];
    }

    function isPlacedCorrectlyAt(coor) {
        const ship = getShipBoard()[getCoordinatesIndex(coor)];
        return (
            shipInGrid(coor, ship.getDirection(), ship.getLength()) &&
            !shipOverlapping(coor, ship.getDirection(), ship.getLength())
        );
    }

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

    function shipOverlapping(targetCoor, direction, length) {
        const ships = getShipBoard().filter((ship) => {
            return (
                ship &&
                getShipBoard().indexOf(ship) !== getCoordinatesIndex(targetCoor)
            );
        });

        return getCoordinateArr(targetCoor, direction, length).some((pair) => {
            return ships.some((ship) => {
                return getCoordinateArr(
                    getCoordinatePair(getShipBoard().indexOf(ship)),
                    ship.getDirection(),
                    ship.getLength()
                ).some((coor) => {
                    return coor[1] === pair[1] && coor[0] === pair[0];
                });
            });
        });
    }

    function shipInGrid(coor, direction, length) {
        if (direction === 'vertical') {
            return coor[1] + length - 1 < 10;
        }
        return coor[0] + length - 1 < 10;
    }

    function placeShipsRandomly() {
        const lengths = [2, 3, 3, 4, 5];
        lengths.forEach((length) => {
            placeShipRandomly(length);
        });

        function getAvailableIndices(arr) {
            const indices = [];
            for (let i = 0; i < arr.length; i++) {
                if (!arr[i]) {
                    indices.push(i);
                }
            }
            return indices;
        }

        function placeShipRandomly(length) {
            const direction =
                Math.random() * 2 >= 1 ? 'vertical' : 'horizontal';
            const arr = getAvailableIndices(getShipBoard());
            const coorLen = arr.length;
            const coor = getCoordinatePair(
                arr[Math.floor(Math.random() * coorLen)]
            );
            placeShip(coor, length, direction);
            if (!isPlacedCorrectlyAt(coor)) {
                removeShip(coor);
                placeShipRandomly(length);
            }
        }
    }

    function getSmartAttack() {
        return findSmartAttack(getHitBoard(), getShipBoard(), findAttackedShip);
    }
    return {
        placeShip,
        receiveAttack,
        allShipsSunk,
        placeShipsRandomly,
        coordinateTaken,
        removeShip,
        isPlacedCorrectlyAt,
        getShipBoard,
        getHitBoard,
        getShipAt,
        getSmartAttack,
        findAttackedShip,
        getCoordinateArr,
    };
}
