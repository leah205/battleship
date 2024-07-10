import fish from '../images/fish.svg';
import skull from '../images/skull.svg';
import red_skull from '../images/red-skull.svg';
import { createShipImg, getGridArea, getCoordinates } from './ship-display';

function createStartingPage() {
    const container = document.createElement('div');
    container.classList.add('place-ships-container');
    const header = document.createElement('h1');
    header.textContent = 'Place your ships!';
    const subHeader = document.createElement('h2');
    subHeader.textContent =
        'Drag ships onto the board to place them. Click on a ship to change its axis';
    container.appendChild(header);
    container.appendChild(subHeader);
    container.appendChild(createBoard());
    container.appendChild(createShipArsenal([2, 3, 3, 4, 5]));
    return container;
}

function createShipArsenal(arr) {
    const shipArsenal = document.createElement('div');

    shipArsenal.classList.add('ship-arsenal');
    console.log(shipArsenal.classList);

    arr.forEach((num) => {
        shipArsenal.appendChild(createShipImg(num, 'horizontal'));
    });

    return shipArsenal;
}

function createStartButton() {
    const startButton = document.createElement('button');
    startButton.textContent = 'Start';
    startButton.classList.add('start-button');
    return startButton;
}
function createBoard() {
    const board = document.createElement('div');
    board.classList.add('gameboard');
    board.appendChild(createAxis('ABCDEFGHIJ', 'x-axis'));
    board.appendChild(createAxis('0123456789', 'y-axis'));
    board.appendChild(createShipGrid());
    board.appendChild(createGrid());

    return board;
}

function createShipGrid() {
    const grid = document.createElement('div');
    grid.classList.add('ship-grid');
    return grid;
}

function createAxis(content, className) {
    const container = document.createElement('div');
    container.classList.add(className);
    content.split('').forEach((ele) => {
        const eleContainer = document.createElement('div');
        eleContainer.textContent = ele;
        container.appendChild(eleContainer);
    });
    return container;
}

function createHitGrid() {
    const grid = document.createElement('div');
    grid.classList.add('hit-grid');
    for (let i = 0; i < 100; i++) {
        grid.appendChild(document.createElement('div'));
    }
    return grid;
}

function createGrid() {
    const grid = document.createElement('div');
    grid.classList.add('grid');
    for (let i = 0; i < 100; i++) {
        grid.appendChild(document.createElement('div'));
    }
    return grid;
}

function createAttack(outcome) {
    const image = document.createElement('img');
    image.src = outcome === 'H' ? skull : fish;
    //image.style['grid-columns'] = coor[0] + 1;
    //image.style['grid-rows'] = coor[1] + 1;
    return image;
}

function createSunk() {
    const image = document.createElement('img');
    image.src = red_skull;
    return image;
}

function createNewGameBtn() {
    const newGameBtn = document.createElement('button');
    newGameBtn.textContent = 'New Game';
    newGameBtn.classList.add('new-game-button');
    return newGameBtn;
}
function createPlayerShips(player, grid) {
    player
        .getBoard()
        .getShipBoard()
        .forEach((ship) => {
            if (ship) {
                const index = player.getBoard().getShipBoard().indexOf(ship);
                const image = createShipImg(
                    ship.getLength(),
                    ship.getDirection()
                );
                image.style['grid-area'] = getGridArea(
                    getCoordinates(index),
                    ship.getLength(),
                    ship.getDirection()
                );
                image.style.display = 'none';
                grid.appendChild(image);
            }
        });
}

function createDialogue() {
    const container = document.createElement('p');
    container.classList.add('dialogue');
    return container;
}

export {
    createStartButton,
    createBoard,
    createAttack,
    createHitGrid,
    createSunk,
    createNewGameBtn,
    createPlayerShips,
    createDialogue,
    createStartingPage,
};
