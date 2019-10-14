class TicTacToe {
    constructor() {
      this.currentPlayer = "x";
      this.field = Array(3).fill(null).map(e => e = Array(3).fill(null));
    }

    getCurrentPlayerSymbol() {
      return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
      if (this.field[columnIndex][rowIndex] != null) return;
      this.field[columnIndex][rowIndex] = this.currentPlayer;
      this.currentPlayer = (this.currentPlayer === "x") ? this.currentPlayer = "o" : this.currentPlayer = "x"; 
    }

    isFinished() {

    }

    getWinner() {

    }

    noMoreTurns() {

    }

    isDraw() {

    }

    getFieldValue(rowIndex, colIndex) {
      return this.field[colIndex][rowIndex];
    }
}

module.exports = TicTacToe;
