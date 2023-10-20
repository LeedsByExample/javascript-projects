const whoWon = require('../RPS.js');

describe("whoWon", function() {
    
    test("Returns 'TIE!' if both players choose the same option", function() {
        expect(whoWon("rock", "rock")).toBe('TIE!');
    });

    test("Returns 'Player 2 wins!' if P1 chooses rock and P2 chooses paper", function() {
        expect(whoWon("rock", "paper")).toBe('Player 2 wins!');
    });

    test("Returns 'Player 2 wins!' if P1 chooses paper and P2 chooses scissors", function() {
        expect(whoWon("paper", "scissors")).toBe('Player 2 wins!');
    });

    test("Returns 'Player 2 wins!' if P1 chooses scissors and P2 chooses rock", function() {
        expect(whoWon("scissors", "rock")).toBe('Player 2 wins!');
    });

});