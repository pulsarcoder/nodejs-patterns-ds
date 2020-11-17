/**
 * J => Jail
 * H => Hotel
 * L => Lottery
 */
const CellTypes = ['J', 'H', 'L'];

/**
 * S => Silver
 * G => Gold
 * P => Platinum
 */
const HotelTypes = {
    silver: {
        id: 'silver',
        rent: 50,
        value: 200
    },
    gold: {
        id: 'gold',
        rent: 150,
        value: 300
    },
    platinum: {
        id: 'platinum',
        rent: 300,
        value: 500
    }
};

module.exports = {
    CellTypes,
    HotelTypes
}