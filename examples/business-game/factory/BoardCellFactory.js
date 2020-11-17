const { LotteryCellTypeCommand } = require("../commands/CellTypeCommand");
const { JailCell, HotelCell } = require("../models/Cell");

const { JailCellTypeCommand } = require("../commands/CellTypeCommand")

(() => {
    const createJailCell = () => {
        return new JailCell();
    };

    const createLotteryCell = () => {
        return new Cell({ cellType: 'L', cellCommand: LotteryCellTypeCommand });
    };

    const createHotelCell = (hotelName, hotelType = 'S') => {
        return new HotelCell(hotelType, hotelName);
    }

    return {
        createBoardCell: (cellName, cellType) => {
            if (cellType === 'J') {
                return createJailCell();
            } else if (cellType === 'H') {
                return createHotelCell();
            } else if (cellType === 'L') {
                return createLotteryCell();
            }
        }
    }
})();