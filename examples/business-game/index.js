const BusinessGameEngine = require("./BusinessGameEngine");

let businessEngine = new BusinessGameEngine();
businessEngine.setupGameBoard(['J', 'H', 'L', 'H', 'E', 'L', 'H', 'L', 'H', 'J'], 3, 5000);

businessEngine.playGame(7);
