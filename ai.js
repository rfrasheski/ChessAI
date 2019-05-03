/*
What Is needed:

  Heuristic function
    determine a numerical score for a given board position

    Material: Count up pieces and assign each a score
    Pawn Structure: isolated, passed, chained, open files, closed files, etc
    Space: Count up squares controlled by each side
    Square strength: Squares that are difficult to be protected or are strongly protected
    Development: Move pieces out from start locations
    King Safety: Weaknesses in king position relative to attacking and defending pieces
*/

function heuristic(board) {
  const turn = board.turn(); // 'b' or 'w'
  const { materialWhite, materialBlack } = getMaterial(board) // numerical values

}



function getMaterial(board) {
  let fen = board.fen()
  let black, white = 0;
  outerloop:
  for (const char of fen) {
    switch(char) {
      case 'k':
        black += 10000
        break;
      case 'K':
        white += 10000
        break;
      case 'q':
        black += 25
        break;
      case 'Q':
        white += 25
        break;
      case 'r':
        black += 15
        break;
      case 'R':
        white += 15
        break;
      case 'b':
        black += 8
        break;
      case 'B':
        white += 8
        break;
      case 'n':
        black += 8
        break;
      case 'N':
        white += 8
        break;
      case 'p':
        black += 1
        break;
      case 'P':
        white += 1
        break;
      case ' ':
        break outerloop;
      default:
        break;
    }
  }
  return {
    materialWhite: white,
    materialBlack: black
  }
}

module.exports = heuristic;
