const chessjs = require('chess.js');

var chess = new chessjs.Chess();

while(!chess.game_over()) {
  let moves = chess.moves();
  let move = moves[Math.floor(Math.random() * moves.length)];
  chess.move(move);
}
console.log(chess.ascii());
