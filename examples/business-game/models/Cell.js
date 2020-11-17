class Cell {
    constructor(cellType) {
        this.cellType = cellType;
    }
}

class JailCell extends Cell {
    constructor() {
        super('J');
    }
}

class HotelCell extends Cell {
    owner = null;
    constructor(hotelType, hotelName) {
        super('H');
        this.hotelType = hotelType;
        this.hotelName = hotelName;
    }
}

class LotteryCell extends Cell {
    constructor() {
        super('L');
    }
}

module.exports = {
    Cell,
    JailCell,
    HotelCell,
    LotteryCell
};
