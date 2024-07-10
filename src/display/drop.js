import enableDragAndDrop from './drag';
import toggleAxis from './toggle-axis';
import { loadStartButton } from '../index.js';
import {
    getFirstSquare,
    getLength,
    getDirection,
    getCoordinates,
    getGridArea,
    getSquares,
    findLeft,
    findTop,
} from './ship-display.js';

export default function drop(startingLeft, startingTop, target, player) {
    const shipArsenal = document.querySelector('.ship-arsenal');
    const shipGrid = document.querySelector('.ship-grid');

    if (target.classList.contains('toggled')) {
        target.classList.remove('toggled');
        return;
    }
    const startCoor = getCoordinates(
        getSquares().indexOf(getFirstSquare(findLeft(target), findTop(target)))
    );

    if (
        !getFirstSquare(findLeft(target), findTop(target)) ||
        player.getBoard().coordinateTaken(startCoor)
    ) {
        target.style.left = startingLeft;
        target.style.top = startingTop;
        return;
    }

    const length = getLength(target);
    const direction = getDirection(target);

    player.getBoard().placeShip(startCoor, length, direction);
    console.log(player.getBoard().getShipBoard());
    //console.log(player.getBoard().isPlacedCorrectlyAt(startCoor));
    if (player.getBoard().isPlacedCorrectlyAt(startCoor)) {
        const newTarget = target.cloneNode();
        if (target.parentNode === shipArsenal) {
            shipArsenal.removeChild(target);
        } else {
            const oldCoor = [
                target.style['grid-column-start'] - 1,
                target.style['grid-row-start'] - 1,
            ];
            /*getCoordinates(
               // getSquares().indexOf(getFirstSquare(startingLeft, startingTop))
            );*/
            //console.log(target.style['grid-row-start']);
            player.getBoard().removeShip(oldCoor);
            shipGrid.removeChild(target);
        }
        newTarget.style['grid-area'] = getGridArea(
            startCoor,
            length,
            direction
        );
        newTarget.style.left = 0;
        newTarget.style.top = 0;
        shipGrid.appendChild(newTarget);
        enableDragAndDrop(newTarget, player);
        toggleAxis(newTarget, player);
        if (!shipArsenal.firstChild) {
            loadStartButton(player);
        }
    } else {
        target.style.left = startingLeft;
        target.style.top = startingTop;
        player.getBoard().removeShip(startCoor);
    }
}
