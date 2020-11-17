const { HotelTypes } = require("../constants");

class CellTypeCommand {
    constructor(boardCell) {
        if (this.constructor === CellTypeCommand) {
            throw new Error('Cannot create an object');
        }
        this.boardCell = boardCell;
    }

    execute(player, gameBoard) {
        throw new Error('Method "execute" must be implemented.');
    }
}

class JailCellTypeCommand extends CellTypeCommand {
    constructor(boardCell) {
        super(boardCell);
    }
    execute(player, gameBoard) {
        player.amount -= 150;
        gameBoard.bankAmount += 150;
    }
}

class LotteryCellTypeCommand extends CellTypeCommand {
    constructor(boardCell) {
        super(boardCell);
    }
    execute(player, gameBoard) {
        player.amount += 200;
        gameBoard.bankAmount -= 200;
    }
}

class HotelCellTypeCommand extends CellTypeCommand {
    constructor(boardCell) {
        super(boardCell);
    }

    execute(player, gameBoard) {
        const { owner, hotelType } = this.boardCell;
        if (owner) {
            if (player.id === owner) {
                upgradeHotel(player, gameBoard, hotelType);
            }
        }
    }

    upgradeHotel(player, gameBoard, hotelType) {
        if (hotelType.id !== 'P') {
            let upgradeToType = getNextUpgrade(hotelType);
            let deltaAmount = upgradeToType.value - hotelType.value;
            player.amount -= deltaAmount;
            gameBoard.bankAmount += deltaAmount;
        }
    }

    getNextUpgrade(hotelType) {
        if (hotelType.id === 'silver') {
            return HotelTypes['gold'];
        } else if (hotelType.id === 'gold') {
            return HotelTypes['platinum'];
        }
        return null;
    }
}

module.exports = {
    CellTypeCommand,
    JailCellTypeCommand,
    LotteryCellTypeCommand,
    HotelCellTypeCommand
}