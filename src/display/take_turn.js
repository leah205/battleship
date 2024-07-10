import { getCoordinatesIndex, getCoordinatePair } from '../logic/conversions';
import { createAttack, createSunk } from './create_functions';

export default function takeTurn(player, opposing, squares, square) {
    let attackedSquare;
    if (player.getType() === 'human') {
        attackedSquare = square;
    } else {
        const attackArr = opposing.getBoard().getSmartAttack();
        if (attackArr && attackArr[0]) {
            attackedSquare =
                squares[
                    attackArr[Math.floor(Math.random() * attackArr.length)]
                ];
        } else {
            const length = getAvailable(squares).length;
            attackedSquare =
                getAvailable(squares)[Math.floor(Math.random() * length)];
        }
    }

    let index = squares.indexOf(attackedSquare);
    const coor = [index % 10, Math.floor(index / 10)];
    opposing.getBoard().receiveAttack(coor);
    attackedSquare.appendChild(
        createAttack(opposing.getBoard().getHitBoard()[index])
    );

    const ship = opposing.getBoard().findAttackedShip(coor);
    if (ship && ship.isSunk()) {
        const start = getCoordinatePair(
            opposing.getBoard().getShipBoard().indexOf(ship)
        );
        showSunk(
            opposing
                .getBoard()
                .getCoordinateArr(start, ship.getDirection(), ship.getLength()),
            squares
        );
    }
    updateDialogue(
        player,
        opposing.getBoard().getHitBoard()[index],
        getCoordinatePair(index),
        ship && ship.isSunk(),
        ship
    );
}

function updateDialogue(player, outcome, coor, isSunk, ship) {
    const shipArr = ['destroyer', 'submarine', 'battleship', 'carrier'];
    let shipName;
    if (isSunk) shipName = shipArr[ship.getLength() - 2];
    const letter = 'ABCDEFGHIJ'.split('')[coor[0]];
    const spot = `${letter}${coor[1]}`;

    const dialogue = document.querySelector('.dialogue');
    const subject = player.getType() === 'human' ? 'Our' : 'Enemy';
    const object = player.getType() === 'human' ? 'Enemy' : 'Our';
    if (isSunk) {
        dialogue.textContent = `${subject} attack at ${spot} was successful. ${object} ${shipName} is sunk`;
    } else if (outcome === 'H') {
        dialogue.textContent = ` ${subject} attack at ${spot} was successful. ${object} ship is hit`;
    } else {
        dialogue.textContent = `${subject} attack at ${spot} missed. The poor fish`;
    }
}
//this should be in logic modules and integrated with smart attack
function getAvailable(arr) {
    const indices = [];
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i].firstChild) {
            indices.push(arr[i]);
        }
    }
    return indices;
}

function showSunk(coorArr, squares) {
    const first = squares[1];
    const ships = Array.from(
        first.parentNode.parentNode.querySelectorAll('.ship-grid img')
    );
    const attacked = ships.find((ship) => {
        return (
            Number(ship.style['grid-column-start']) === coorArr[0][0] + 1 &&
            Number(ship.style['grid-row-start']) === coorArr[0][1] + 1
        );
    });
    attacked.style.display = 'block';
    coorArr.forEach((coor) => {
        const square = squares[getCoordinatesIndex(coor)];
        square.removeChild(square.firstElementChild);
        square.appendChild(createSunk());
    });
}
