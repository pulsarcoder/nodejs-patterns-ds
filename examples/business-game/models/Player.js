class Player {
    constructor(id, name, initialAmount = 1000, currentCell = 0, hotels = []) {
        this.id = id;
        this.name = name;
        this.amount = initialAmount;
        this.currentCell = currentCell;
        this.hotels = hotels;
    }

    deductMoney(amount) {
        this.amount = this.amount - amount;
    }

    addMoney(amount) {
        this.amount = this.amount + amount;
    }

    buyHotel(hotel) {
        this.hotels.push(hotel);
    }

    rentHotel(hotel) {
        let { rent } = hotel.hotelType;
        this.amount -= rent;
    }
}

module.exports = Player;
