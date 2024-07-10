import battleshipH from '../images/battleship.svg';
import carrierH from '../images/carrier.svg';
import destroyerH from '../images/destroyer.svg';
import submarineH from '../images/submarine.svg';

import battleshipV from '../images/vertical-battleship.svg';
import carrierV from '../images/vertical-carrier.svg';
import destroyerV from '../images/vertical-destroyer.svg';
import submarineV from '../images/vertical-submarine.svg';

import enableDragAndDrop from './drag';

import {
    getLength,
    getDirection,
    getCoordinates,
    getGridArea,
    getFirstSquare,
    getSquares,
    findLeft,
    findTop,
} from './ship-display.js';

const horizontalShips = [battleshipH, carrierH, destroyerH, submarineH];
const verticalShips = [battleshipV, carrierV, destroyerV, submarineV];

function toggleAxis(target, player) {
    let toggle = true;
    target.addEventListener('click', () => {
        const newTarget = target.cloneNode();
        toggleTarget(newTarget);

        if (toggle) {
            if (target.parentNode === document.querySelector('.ship-grid')) {
                const start = getCoordinates(
                    getSquares().indexOf(
                        getFirstSquare(findLeft(target), findTop(target))
                    )
                );
                const length = getLength(target);
                const direction = getDirection(newTarget);
                player.getBoard().removeShip(start);
                player.getBoard().placeShip(start, length, direction);

                if (!player.getBoard().isPlacedCorrectlyAt(start)) {
                    player.getBoard().removeShip(start);
                    player
                        .getBoard()
                        .placeShip(start, length, getDirection(target));
                } else {
                    newTarget.style['grid-area'] = getGridArea(
                        start,
                        length,
                        direction
                    );
                    target.parentNode.removeChild(target);
                    document.querySelector('.ship-grid').appendChild(newTarget);
                    enableDragAndDrop(newTarget, player);
                    toggleAxis(newTarget, player);
                }
            } else {
                target.parentNode.removeChild(target);
                document.querySelector('.ship-arsenal').appendChild(newTarget);
                enableDragAndDrop(newTarget, player);
                toggleAxis(newTarget, player);
            }
            target.classList.add('toggled');
        } else if (toggle) {
            console.log('yo');
            //player.getBoard().removeShip(start);
        }
    });
    target.addEventListener('mousedown', () => {
        toggle = true;
        target.addEventListener('mousemove', () => {
            toggleOff();
        });
    });
    function toggleOff() {
        console.log('eaiwgslub');
        toggle = false;
    }
    target.addEventListener('mouseup', () => {
        console.log(toggle);
        target.removeEventListener('mousemove', toggleOff);
    });
}

function toggleTarget(target) {
    if (horizontalShips.includes(target.src)) {
        target.src = verticalShips[horizontalShips.indexOf(target.src)];
        target.classList.add('vertical');
    } else {
        target.src = horizontalShips[verticalShips.indexOf(target.src)];
        target.classList.remove('vertical');
    }
}

/*function toggleInGrid(target) {
    const [columnStart, columnEnd] = target.style['grid-column'].split('/');
    const [rowStart, rowEnd] = target.style['grid-row'].split('/');
    target.style['grid-column'] =
        `${columnStart} / ${Number(columnStart) + ((rowEnd || rowStart) - rowStart)}`;
    target.style['grid-row'] =
        `${rowStart} / ${Number(rowStart) + ((columnEnd || columnStart) - columnStart)}`;
}*/

function isIllegalToggle(target) {
    const [columnStart, columnEnd] = target.style['grid-column'].split('/');
    const [rowStart, rowEnd] = target.style['grid-row'].split('/');
    return (
        Number(columnStart) + ((rowEnd || rowStart) - rowStart) > 11 ||
        Number(rowStart) + ((columnEnd || columnStart) - columnStart) > 11
    );
}

export default toggleAxis;
