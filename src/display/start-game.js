import Player from '../player';
import { loadBoardEventListeners } from '../index.js';
import {
    createBoard,
    createHitGrid,
    createPlayerShips,
    createDialogue,
} from './create_functions';

export default function startGame(player1) {
    const gameContainer = document.createElement('div');
    gameContainer.classList.add('game-container');
    document.body.appendChild(createDialogue());
    document.body.appendChild(gameContainer);
    const player2 = Player('computer', 2);
    gameContainer.appendChild(renderBoard(player1));
    gameContainer.appendChild(renderBoard(player2));
    loadBoardEventListeners(player1, player2);
    document.body.appendChild(gameContainer);
    document.body.removeChild(document.querySelector('.place-ships-container'));
}

function renderBoard(player) {
    let board;
    if (player.getType() === 'human') {
        board = document.querySelector('.gameboard').cloneNode(true);
    } else {
        board = createBoard('enemy');
        const shipGrid = board.querySelector('.ship-grid');
        player.getBoard().placeShipsRandomly();
        createPlayerShips(player, shipGrid);
    }
    board.classList.add(
        document.querySelector('.game-container .gameboard')
            ? 'player-2'
            : 'player-1'
    );
    board.appendChild(createHitGrid());

    return board;
}
