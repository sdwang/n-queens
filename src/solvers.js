/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = []; //fixme

  for(var i = 0; i < n; i++) {
    var row = [];
    for(var j = 0; j < n; j++) {
      if(j === i) {
        row.push(1);
      } else {
        row.push(0);
      }
    }
    solution.push(row);
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {

  // Create possible rows
  possibleRows = [];
  for(var r = 0; r < n; r++) {
    row = [];
    for(var c = 0; c < n; c++) {
      row.push(0);
    }
    row[r] = 1;
    possibleRows.push(row);
  }

  var solutionCount = 0;

  var rooksHelper = function(rows, nextRow) {
    var currentBoard = rows;
    if(nextRow !== undefined) {
      currentBoard.push(nextRow);
    }
    var board = new Board(currentBoard);
    if(board.get('n') === n && !board.hasAnyRooksConflicts()) {
      solutionCount++;
    } else if (!board.hasAnyRooksConflicts()) {
      for(var i = 0; i < n; i++) {
        rooksHelper(currentBoard, possibleRows[i]);
        currentBoard.splice(currentBoard.length - 1, 1);
      }
    } else {

      //do nothing
    }
  };

  for(var i = 0; i < n; i++) {
    var arr = [];
    arr.push(possibleRows[i]);
    rooksHelper(arr);
  };

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  // if(n===4) {
  //   debugger;
  // }
  var board = new Board({n: n});
  var rows = board.rows(); 

  var copy = board; 

  //Closure function
  for (var i = 0; i < rows.length; i++) {
    for (var j = 0; j < rows.length; j++) {
      console.log(board.hasAnyQueenConflictsOn(i,j));
      if (!board.hasAnyQueenConflictsOn(i, j) && !copy(i, j)) {
        board.togglePiece(i, j);
        rows[i][j] = 1;
      }
    }
  }

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(rows));
  return rows;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solution = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
