const { HotelCellTypeCommand, LotteryCellTypeCommand, JailCellTypeCommand } = require("./commands/CellTypeCommand");
const { CellTypes } = require("./constants");
const { HotelCell, LotteryCell, JailCell } = require("./models/Cell");
const Cell = require("./models/Cell");
const Player = require("./models/Player");

class BusinessGameEngine {
    constructor(options = {}) {
        this.gameBoard = {
            players: options.players || [],
            boardCells: options.boardCells || [],
            bankAmount: 0,
            playDice: (turn, playerId) => {
                let diceNums = [[2,2,1], [4,4,2], [4,4,2], [2,2,1], [4,4,2], [4,4,2], [2,2,1]];
                return diceNums[turn][playerId];
            }
        };
    }

    setupGameBoard(boardCells, noOfPlayers, initialBankAmount = 5000) {
        this.setupPlayers(noOfPlayers);
        this.setupBoardCells(boardCells);
        this.gameBoard.bankAmount = initialBankAmount;
    }

    setupPlayers(noOfPlayers = 3) {
        for (let n = 0; n < noOfPlayers; n++) {
            this.gameBoard.players.push(new Player(n, `Player ${n}`, 1000))
        }
    }

    setupBoardCells(boardCellTypes) {
        for (let boardCellType of boardCellTypes) {
            if (boardCellType === 'J') {
                this.gameBoard.boardCells.push(new JailCell());
            } else if (boardCellType === 'H') {
                this.gameBoard.boardCells.push(new HotelCell('S', 'Hotel 0'));
            } else if (boardCellType === 'L') {
                this.gameBoard.boardCells.push(new LotteryCell());
            }
        }
    }

    playGame(noOfTurns = 7) {
        const { players, boardCells } = this.gameBoard;
        const totalCells = boardCells.length - 1; // starts the cell from 0

        for(let player of players) {     
            console.log(`${player.name} is having amount of ${player.amount}`);
        }
        console.log('\n')
        for (let turn = 0; turn < noOfTurns; turn++) {
            for (let player of players) {
                let currentCell = player.currentCell;
                let diceNum = this.gameBoard.playDice(turn, player.id);// Math.floor((Math.random(12) * 10));
                console.log(`${player.name} is at location ${currentCell}, and rolled dice number is ${diceNum}`);
                let targetCell = currentCell + diceNum;

                if (targetCell > totalCells) { // for circular rotation of player in board
                    targetCell = targetCell - totalCells;
                }
                console.log(`${player.name} is now at ${targetCell}`);
                player.currentCell = (targetCell);
                let cellCommand = this.getCellCommand(boardCells[targetCell]);
                cellCommand.execute(player, this.gameBoard);
            }
            console.log('\n')
        }

        for(let player of players) {     
            console.log(`${player.name} is having amount of ${player.amount}`);
        }
        console.log(`Balance at Bank: ${this.gameBoard.bankAmount}`)
    }

    getCellCommand(boardCell) {
        if (boardCell.cellType === 'J') {
            return new JailCellTypeCommand(boardCell);
        } else if (boardCell.cellType === 'H') {
            return new HotelCellTypeCommand(boardCell);
        } else if (boardCell.cellType === 'L') {
            return new LotteryCellTypeCommand(boardCell);
        }
    }
}

module.exports = BusinessGameEngine;
