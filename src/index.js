import './style.css';
import Player from './player';
import enableDragAndDrop from './display/drag';
import toggleAxis from './display/toggle-axis';
import {
    createStartButton,
    createNewGameBtn,
    createStartingPage,
} from './display/create_functions';
import startGame from './display/start-game';
import takeTurn from './display/take_turn';

//look into photo of smart attack error
//eslint not working'
//move get coordinate array out of smart attack
//program computer to not attack slots that will not fit remaining ships
//move getAvailable to logic and integrate it as getPossible with smartAttack

document.body.appendChild(createStartingPage());
loadShipListeners();

function loadShipListeners() {
    const shipArsenal = document.querySelector('.ship-arsenal');
    const ships = Array.from(shipArsenal.querySelectorAll('img'));
    const player1 = Player('human');
    ships.forEach((ship) => {
        enableDragAndDrop(ship, player1);
        toggleAxis(ship, player1);
    });
}

function loadStartButton(player) {
    const startBtn = createStartButton();
    startBtn.addEventListener('click', () => {
        startGame(player);
    });
    document.querySelector('.place-ships-container').appendChild(startBtn);
}

function loadBoardEventListeners(player1, player2) {
    const board2 = document.querySelector(`.gameboard.player-2`);
    const grid2 = board2.querySelector('.hit-grid');
    const squares2 = Array.from(grid2.querySelectorAll('div'));

    const board1 = document.querySelector(`.gameboard.player-1`);
    const grid1 = board1.querySelector('.hit-grid');
    const squares1 = Array.from(grid1.querySelectorAll('div'));
    squares2.forEach((square) => {
        square.addEventListener('click', () => {
            if (
                player1.getBoard().allShipsSunk() ||
                player2.getBoard().allShipsSunk()
            ) {
                return;
            } else if (
                player2
                    .getBoard()
                    .getHitBoard()
                    .filter((ship) => ship).length >
                player1
                    .getBoard()
                    .getHitBoard()
                    .filter((ship) => ship).length
            ) {
                return;
            } else if (!square.firstChild) {
                takeTurn(player1, player2, squares2, square);
                if (player2.getBoard().allShipsSunk())
                    endGame(player1, player2);
                else {
                    setTimeout(() => {
                        takeTurn(player2, player1, squares1);
                        if (player1.getBoard().allShipsSunk())
                            endGame(player2, player1);
                    }, 2000);
                }
            }
        });
    });
}

function endGame(winner, loser) {
    console.log(`${winner.getType()} sunk all the ${loser.getType()}'s ships`);
    const dialogue = document.querySelector('.dialogue');
    if (winner.getType() === 'human') {
        dialogue.textContent = `The battle is won. All the enemy ships are sunk`;
    } else {
        dialogue.textContent =
            'The battle is lost. All our ships have been sunk';
    }

    const newGameBtn = createNewGameBtn();
    document.body.appendChild(newGameBtn);
    newGameBtn.addEventListener('click', () => {
        document.body.removeChild(document.querySelector('.game-container'));
        document.body.removeChild(newGameBtn);
        document.body.removeChild(dialogue);
        document.body.appendChild(createStartingPage());
        loadShipListeners();
    });
}

export { loadBoardEventListeners, loadStartButton };
